/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module scripts/acceptance/adapters/circaBiddingRepublishAdapter
 * @description Delegates the reviewed Circa cancellation/republication acceptance step to Product.
 * @layer project-acceptance
 * @owner nodics.kickoff
 * @remarks This adapter supplies only existing Circa project selectors and runtime transport. Product
 * owns immutable graph preparation, held-bundle proof, Pricing evidence, publication and Online receipt.
 */

const projectSelection = Object.freeze({
  tenant: "default",
  enterpriseCode: "GREENPERKS_ONLINE",
  storeCode: "circaMainStore",
});
const identifier = (value) =>
  typeof value === "string" && /^[A-Za-z0-9_.:@-]{1,180}$/u.test(value);
const exactKeys = (value, keys) =>
  value && typeof value === "object" && !Array.isArray(value) &&
  Object.keys(value).length === keys.length &&
  Object.keys(value).every((key) => keys.includes(key));
const required = (condition, code) => {
  if (!condition) throw Object.assign(new Error(code), { code });
};

function ownerData(value) {
  for (let depth = 0; depth < 8; depth += 1) {
    required(
      value && typeof value === "object" && !Array.isArray(value) &&
        value.success !== false && value.acknowledged !== false && !value.error &&
        !(typeof value.code === "string" && value.code.startsWith("ERR_")),
      "PRODUCT_OWNER_RESPONSE_REFUSED",
    );
    const hasData = Object.hasOwn(value, "data");
    const hasResult = Object.hasOwn(value, "result");
    required(!(hasData && hasResult), "PRODUCT_OWNER_RESPONSE_AMBIGUOUS");
    if (!hasData && !hasResult) return value;
    value = hasData ? value.data : value.result;
  }
  required(false, "PRODUCT_OWNER_RESPONSE_DEPTH");
}

function requestContext(evidence, environment) {
  const keys = [
    "caseCode",
    "productCode",
    "previousPublicationCode",
    "replacementPublicationCode",
    "cancelledRoundCode",
  ];
  required(exactKeys(evidence, keys), "EXACT_PRODUCT_REPUBLISH_EVIDENCE_REQUIRED");
  required(
    evidence.caseCode === "cancellationRepublish" &&
      keys.slice(1).every((key) => identifier(evidence[key])) &&
      evidence.previousPublicationCode !== evidence.replacementPublicationCode &&
      /^bundle-operation:[a-f0-9]{64}$/u.test(evidence.replacementPublicationCode),
    "REVIEWED_PRODUCT_REPUBLISH_EVIDENCE_REQUIRED",
  );

  let origin;
  try {
    origin = new URL(environment.NODICS_BIDDING_PRODUCT_ORIGIN);
  } catch {
    required(false, "LOCAL_PRODUCT_ORIGIN_REQUIRED");
  }
  required(
    ["http:", "https:"].includes(origin.protocol) &&
      ["localhost", "127.0.0.1", "[::1]"].includes(origin.hostname) &&
      !origin.username && !origin.password && origin.pathname === "/" &&
      !origin.search && !origin.hash,
    "LOCAL_PRODUCT_ORIGIN_REQUIRED",
  );
  const token = environment.NODICS_BIDDING_PRODUCT_TOKEN;
  required(typeof token === "string" && /^[^\s]{1,16384}$/u.test(token), "PRODUCT_RUNTIME_TOKEN_REQUIRED");
  const timeoutMs = Number(environment.NODICS_BIDDING_PRODUCT_TIMEOUT_MS);
  required(Number.isSafeInteger(timeoutMs) && timeoutMs >= 1 && timeoutMs <= 300000,
    "PRODUCT_REQUEST_TIMEOUT_REQUIRED");
  return { evidence: structuredClone(evidence), origin: origin.origin, token, timeoutMs };
}

async function invokeProduct(context, phase, fetchRequest) {
  let response;
  try {
    response = await fetchRequest(
      new URL(`/nodics/product/v0/internal/products/bundle-listings/${phase}`, context.origin),
      {
        method: "POST",
        redirect: "error",
        cache: "no-store",
        signal: AbortSignal.timeout(context.timeoutMs),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${context.token}`,
          tenant: projectSelection.tenant,
          "x-enterprise-code": projectSelection.enterpriseCode,
          "x-correlation-id": context.evidence.cancelledRoundCode,
        },
        body: JSON.stringify({
          operationCode: context.evidence.replacementPublicationCode,
          storeCode: projectSelection.storeCode,
        }),
      },
    );
  } catch {
    required(false, "PRODUCT_OWNER_OUTCOME_UNCONFIRMED");
  }
  let value;
  try {
    value = await response.json();
  } catch {
    required(false, "PRODUCT_OWNER_RESPONSE_INVALID");
  }
  required(response.ok, `PRODUCT_OWNER_HTTP_${response.status}`);
  return ownerData(value);
}

/**
 * Invokes Product's canonical automatic bundle preparation and publication authority.
 * @param {Object} evidence Exact cancellation/republication coordinates supplied by Bidding.
 * @param {Object} [dependencies] Test-only transport/environment injection; production uses globals.
 * @returns {Promise<Object>} Bounded Product owner receipt for the replacement publication.
 */
export async function advanceRepublish(evidence, dependencies = {}) {
  const context = requestContext(evidence, dependencies.environment || process.env);
  const fetchRequest = dependencies.fetch || globalThis.fetch;
  required(typeof fetchRequest === "function", "PRODUCT_OWNER_TRANSPORT_REQUIRED");

  const prepared = await invokeProduct(context, "prepare", fetchRequest);
  required(
    prepared.confirmed === true &&
      prepared.publicationCode === context.evidence.replacementPublicationCode &&
      prepared.productCode === context.evidence.productCode,
    "PRODUCT_REPLACEMENT_PREPARATION_UNCONFIRMED",
  );
  const published = await invokeProduct(context, "publish", fetchRequest);
  required(
    published.confirmed === true && published.status === "ONLINE" &&
      published.publicationCode === context.evidence.replacementPublicationCode &&
      published.productCode === context.evidence.productCode &&
      published.storeCode === projectSelection.storeCode,
    "PRODUCT_REPLACEMENT_PUBLICATION_UNCONFIRMED",
  );
  return Object.freeze({
    confirmed: true,
    productCode: published.productCode,
    publicationCode: published.publicationCode,
    storeCode: published.storeCode,
    status: published.status,
    receiptCode: published.receiptCode,
  });
}
