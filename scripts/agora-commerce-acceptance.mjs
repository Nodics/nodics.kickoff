#!/usr/bin/env node
import { randomUUID } from "node:crypto";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const projectRoot = new URL("..", import.meta.url).pathname;
const platformUrl = process.env.NODICS_PLATFORM_URL || "http://127.0.0.1:4300";
const commerceUrl = process.env.NODICS_COMMERCE_URL || "http://127.0.0.1:4350";
const managed = [];

function log(message) {
  console.log(`[agora-commerce-acceptance] ${message}`);
}

async function request(baseUrl, path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) : undefined;
  if (!response.ok) {
    throw new Error(`${path} returned HTTP ${response.status}: ${text}`);
  }
  return body;
}

function dataOf(body) {
  return body?.data || body?.result || body;
}

async function listening(port) {
  return new Promise((resolve) => {
    const child = spawn("lsof", ["-nP", `-iTCP:${port}`, "-sTCP:LISTEN"], {
      stdio: ["ignore", "ignore", "ignore"],
    });
    child.on("close", (code) => resolve(code === 0));
    child.on("error", () => resolve(false));
  });
}

async function waitReady(baseUrl, label) {
  const deadline = Date.now() + Number(process.env.NODICS_ACCEPTANCE_READY_TIMEOUT_MS || 90000);
  let lastError;
  while (Date.now() < deadline) {
    try {
      const health = await request(baseUrl, "/nodics/system/v0/health/ready");
      if (health?.status === "UP" || health?.data?.status === "UP" || health?.ready === true || health?.success === true) {
        log(`${label} ready`);
        return;
      }
    } catch (error) {
      lastError = error;
    }
    await delay(1000);
  }
  throw new Error(`${label} did not become ready: ${lastError?.message || "unknown readiness failure"}`);
}

async function ensureRuntime(label, port, script, baseUrl) {
  if (!(await listening(port))) {
    const child = spawn("npm", ["run", script], {
      cwd: projectRoot,
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
    });
    child.stdout.on("data", (chunk) => process.stdout.write(`[${label}] ${chunk}`));
    child.stderr.on("data", (chunk) => process.stderr.write(`[${label}] ${chunk}`));
    managed.push(child);
  }
  await waitReady(baseUrl, label);
}

async function authenticateEmployee() {
  const suppliedToken = process.env.AXIS_AUTH_TOKEN || process.env.NODICS_AUTH_TOKEN;
  if (suppliedToken) return { Authorization: `Bearer ${suppliedToken}` };
  const credentials = {
    loginId: process.env.AXIS_LOGIN_ID || "admin",
    password: process.env.AXIS_PASSWORD || "adminPassword",
  };
  const headers = { Origin: "http://127.0.0.1:3100", "x-enterprise-code": process.env.NODICS_ENTERPRISE_CODE || "default" };
  let lastError;
  for (const path of ["/nodics/profile/v0/employee/browser/authenticate", "/nodics/profile/v0/employee/authenticate"]) {
    try {
      const result = await request(platformUrl, path, {
        method: "POST",
        headers,
        body: JSON.stringify(credentials),
      });
      const authToken = result?.authToken || result?.result?.authToken || result?.data?.authToken;
      if (authToken) return { Authorization: `Bearer ${authToken}` };
      lastError = new Error(`${path} returned no employee auth token`);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("Platform employee authentication returned no token");
}

async function authenticateCustomerIfConfigured() {
  const loginId = process.env.NODICS_STOREFRONT_CUSTOMER_LOGIN_ID;
  const password = process.env.NODICS_STOREFRONT_CUSTOMER_PASSWORD;
  if (!loginId || !password) {
    log("customer mutation smoke skipped; set NODICS_STOREFRONT_CUSTOMER_LOGIN_ID and NODICS_STOREFRONT_CUSTOMER_PASSWORD to exercise live secured customer APIs");
    return null;
  }
  const result = await request(platformUrl, "/nodics/profile/v0/customer/authenticate", {
    method: "POST",
    headers: { "x-enterprise-code": process.env.NODICS_ENTERPRISE_CODE || "default" },
    body: JSON.stringify({ loginId, password }),
  });
  const authToken = result?.authToken || result?.result?.authToken || result?.data?.authToken;
  if (!authToken) throw new Error("Platform customer authentication returned no token");
  log(`customer ${loginId} authenticated`);
  return { Authorization: `Bearer ${authToken}` };
}

async function ensureCustomerIfConfigured(employeeHeaders) {
  const loginId = process.env.NODICS_STOREFRONT_CUSTOMER_LOGIN_ID;
  const password = process.env.NODICS_STOREFRONT_CUSTOMER_PASSWORD;
  if (!loginId || !password || process.env.NODICS_STOREFRONT_CUSTOMER_REGISTER !== "true") return;
  const payload = {
    code: loginId,
    loginId,
    name: {
      title: "Mx.",
      firstName: process.env.NODICS_STOREFRONT_CUSTOMER_FIRST_NAME || "Storefront",
      lastName: process.env.NODICS_STOREFRONT_CUSTOMER_LAST_NAME || "Customer",
    },
    password: { loginId, password, confirmPassword: password },
    contacts: [],
    addresses: [],
  };
  try {
    await request(platformUrl, "/nodics/profile/v0/customer/signup", {
      method: "POST",
      headers: employeeHeaders,
      body: JSON.stringify(payload),
    });
    log(`storefront customer ${loginId} registered for local acceptance`);
  } catch (error) {
    if (!String(error.message || error).match(/exist|duplicate|already/i)) throw error;
    log(`storefront customer ${loginId} already exists`);
  }
}

async function validateCommerceContract(headers) {
  const contract = await request(commerceUrl, "/nodics/system/v0/contract/openapi", { headers });
  const paths = contract?.paths || contract?.openapi?.paths || {};
  const required = [
    "/nodics/product/v0/customer/products/discovery",
    "/nodics/product/v0/customer/products/{productCode}",
    "/nodics/cart/v0/customer/carts",
    "/nodics/cart/v0/customer/carts/{cartCode}",
    "/nodics/cart/v0/customer/carts/{cartCode}/entries",
    "/nodics/cart/v0/customer/carts/{cartCode}/entries/{entryCode}",
    "/nodics/cart/v0/customer/carts/{cartCode}/calculations",
    "/nodics/checkoutCore/v0/customer/checkouts/place",
    "/nodics/fulfillmentCore/v0/customer/shipping/methods",
    "/nodics/fulfillmentCore/v0/customer/returns/methods",
    "/nodics/order/v0/customer/orders/{orderCode}",
    "/nodics/order/v0/customer/orders",
    "/nodics/order/v0/customer/orders/{orderCode}/lifecycle/preview",
    "/nodics/order/v0/customer/orders/{orderCode}/lifecycle",
  ];
  const effectiveCommercePaths = Object.keys(paths)
    .filter((route) => /\/(product|cart|checkoutCore|fulfillmentCore|order)\//.test(route))
    .sort();
  for (const route of required) {
    if (!paths[route]) {
      throw new Error(`Agora Commerce contract is missing ${route}; effective commerce paths: ${effectiveCommercePaths.join(", ") || "none"}`);
    }
  }
  log("product discovery, PDP, cart, checkout placement, and order lifecycle routes are effective");
}

async function exerciseProductDiscovery(headers) {
  const productCode = process.env.NODICS_STOREFRONT_PRODUCT_CODE || "agoraLinenWrapDress";
  const categoryCode = process.env.NODICS_STOREFRONT_CATEGORY_CODE || "agoraWomen";
  const storeCode = process.env.NODICS_STOREFRONT_STORE_CODE || "agoraMainStore";
  const locale = process.env.NODICS_STOREFRONT_LOCALE || "en";
  const listing = dataOf(await request(commerceUrl, `/nodics/product/v0/customer/products/discovery?storeCode=${encodeURIComponent(storeCode)}&locale=${encodeURIComponent(locale)}&categoryCode=${encodeURIComponent(categoryCode)}&pageSize=4`, { headers }));
  if (!Array.isArray(listing?.products)) throw new Error(`Product discovery returned unexpected response: ${JSON.stringify(listing)}`);
  if (listing.discovery && listing.discovery.source !== "SEARCH_INDEX") throw new Error(`Product discovery is not search-index backed: ${JSON.stringify(listing.discovery)}`);
  const detail = dataOf(await request(commerceUrl, `/nodics/product/v0/customer/products/${encodeURIComponent(productCode)}?storeCode=${encodeURIComponent(storeCode)}&locale=${encodeURIComponent(locale)}`, { headers }));
  if (detail?.product?.productCode !== productCode) throw new Error(`Product detail returned unexpected response: ${JSON.stringify(detail)}`);
  await request(commerceUrl, "/nodics/fulfillmentCore/v0/customer/shipping/methods", { headers });
  await request(commerceUrl, "/nodics/fulfillmentCore/v0/customer/returns/methods", { headers });
  log("search-backed product discovery, PDP, shipping methods, and return methods are reachable");
}

async function exerciseCustomerCart(headers) {
  if (!headers) return;
  const journeyId = randomUUID();
  const commonHeaders = { ...headers, "x-correlation-id": `agora-commerce-${journeyId}` };
  const body = {
    cartCode: `storefront_cart_${journeyId}`,
    storeCode: process.env.NODICS_STOREFRONT_STORE_CODE || "agoraMainStore",
    channelCode: process.env.NODICS_STOREFRONT_CHANNEL_CODE || "web",
    locale: process.env.NODICS_STOREFRONT_LOCALE || "en",
    jurisdiction: process.env.NODICS_STOREFRONT_JURISDICTION || "US",
    currency: process.env.NODICS_STOREFRONT_CURRENCY || "USD",
  };
  const created = dataOf(await request(commerceUrl, "/nodics/cart/v0/customer/carts", {
    method: "POST",
    headers: commonHeaders,
    body: JSON.stringify(body),
  }));
  if (created?.cart?.code !== body.cartCode) {
    throw new Error(`Customer cart creation returned unexpected response: ${JSON.stringify(created)}`);
  }
  const read = dataOf(await request(commerceUrl, `/nodics/cart/v0/customer/carts/${encodeURIComponent(body.cartCode)}`, {
    headers: commonHeaders,
  }));
  if (read?.cart?.code !== body.cartCode) {
    throw new Error(`Customer cart read returned unexpected response: ${JSON.stringify(read)}`);
  }
  log(`customer cart create/read smoke passed for ${body.cartCode}`);
  return { headers: commonHeaders, cartCode: body.cartCode, revision: String(read.cart.revision || created.cart.revision || "0") };
}

async function exerciseCustomerCheckout(cartSmoke) {
  if (!cartSmoke) return;
  const productCode = process.env.NODICS_STOREFRONT_PRODUCT_CODE || "agoraLinenWrapDress";
  const variantCode = process.env.NODICS_STOREFRONT_VARIANT_CODE || "agoraLinenWrapDressNaturalS";
  const added = dataOf(await request(commerceUrl, `/nodics/cart/v0/customer/carts/${encodeURIComponent(cartSmoke.cartCode)}/entries`, {
    method: "POST",
    headers: cartSmoke.headers,
    body: JSON.stringify({ productCode, variantCode, quantity: "1" }),
  }));
  const revision = String(added?.cart?.revision || cartSmoke.revision || "0");
  await request(commerceUrl, `/nodics/cart/v0/customer/carts/${encodeURIComponent(cartSmoke.cartCode)}/calculations`, {
    method: "POST",
    headers: cartSmoke.headers,
    body: JSON.stringify({ expectedRevision: revision, calculationCode: `calc-${cartSmoke.cartCode}` }),
  });
  const orderCode = `storefront_order_${randomUUID()}`;
  const placed = dataOf(await request(commerceUrl, "/nodics/checkoutCore/v0/customer/checkouts/place", {
    method: "POST",
    headers: { ...cartSmoke.headers, "idempotency-key": `${orderCode}:place` },
    body: JSON.stringify({
      cartCode: cartSmoke.cartCode,
      orderCode,
      expectedCartRevision: revision,
      calculationCode: `calc-${cartSmoke.cartCode}`,
      providerToken: "tok_storefront_4242",
      customer: { email: process.env.NODICS_STOREFRONT_CUSTOMER_LOGIN_ID || "storefront.customer@example.com", firstName: "Storefront", lastName: "Customer" },
      shippingAddress: { line1: "549 Oak St", city: "Crystal Lake", region: "IL", postalCode: "60014", country: "US" },
      shippingMethod: "STANDARD",
      paymentMethod: "CARD",
    }),
  }));
  const placedOrderCode = placed?.orderCode || placed?.code || placed?.evidence?.orderCode || orderCode;
  const order = dataOf(await request(commerceUrl, `/nodics/order/v0/customer/orders/${encodeURIComponent(placedOrderCode)}`, {
    headers: cartSmoke.headers,
  }));
  if (order?.order?.code !== placedOrderCode) {
    throw new Error(`Customer order read returned unexpected response: ${JSON.stringify(order)}`);
  }
  const cancellationPayload = {
    code: `${placedOrderCode}:cancellation`,
    requestType: "CANCELLATION",
    reasonCode: "CUSTOMER_CHANGED_MIND",
    policyVersion: "1",
    evidence: { source: "agora-commerce-acceptance", quantity: "1", productCodes: [productCode], refundMethod: "ORIGINAL_PAYMENT" },
  };
  await request(commerceUrl, `/nodics/order/v0/customer/orders/${encodeURIComponent(placedOrderCode)}/lifecycle/preview`, {
    method: "POST",
    headers: cartSmoke.headers,
    body: JSON.stringify(cancellationPayload),
  });
  const lifecycle = dataOf(await request(commerceUrl, `/nodics/order/v0/customer/orders/${encodeURIComponent(placedOrderCode)}/lifecycle`, {
    method: "POST",
    headers: { ...cartSmoke.headers, "idempotency-key": `${placedOrderCode}:cancellation` },
    body: JSON.stringify(cancellationPayload),
  }));
  if (lifecycle?.status !== "SUBMITTED") {
    throw new Error(`Customer lifecycle create returned unexpected response: ${JSON.stringify(lifecycle)}`);
  }
  const returnPreview = dataOf(await request(commerceUrl, `/nodics/order/v0/customer/orders/${encodeURIComponent(placedOrderCode)}/lifecycle/preview`, {
    method: "POST",
    headers: cartSmoke.headers,
    body: JSON.stringify({
      code: `${placedOrderCode}:return`,
      requestType: "RETURN",
      reasonCode: "DAMAGED_ITEM",
      policyVersion: "1",
      evidence: { source: "agora-commerce-acceptance", quantity: "1", productCodes: [productCode], returnMethod: "DROP_OFF", refundMethod: "ORIGINAL_PAYMENT" },
    }),
  }));
  if (returnPreview?.eligible === false || !returnPreview?.rmaCode && !Array.isArray(returnPreview?.returnMethods)) {
    throw new Error(`Customer return preview returned unexpected response: ${JSON.stringify(returnPreview)}`);
  }
  log(`customer checkout/order/lifecycle smoke passed for ${placedOrderCode}`);
}

async function cleanup() {
  for (const child of managed.reverse()) child.kill("SIGTERM");
}

async function run() {
  try {
    await ensureRuntime("Platform", 4300, "start:platform", platformUrl);
    await ensureRuntime("Commerce", 4350, "start:commerce", commerceUrl);
    const employeeHeaders = await authenticateEmployee();
    await validateCommerceContract(employeeHeaders);
    await exerciseProductDiscovery(employeeHeaders);
    await ensureCustomerIfConfigured(employeeHeaders);
    const customerHeaders = await authenticateCustomerIfConfigured();
    const cartSmoke = await exerciseCustomerCart(customerHeaders);
    await exerciseCustomerCheckout(cartSmoke);
    log("Agora Commerce acceptance passed");
  } finally {
    await cleanup();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
