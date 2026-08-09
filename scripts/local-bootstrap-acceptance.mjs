#!/usr/bin/env node

/*
 * Nodics Kickoff local bootstrap acceptance runner.
 *
 * Copyright (c) 2026 Nodics All rights reserved.
 *
 * This software is governed by the Nodics Source-Available Commercial License.
 * You may use, copy, modify, deploy, or distribute it only as permitted by the
 * root LICENSE file or a separate written agreement with Nodics.
 */

import { execFile, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const workspaceRoot = resolve(projectRoot, "..");
const axisRoot = resolve(
  process.env.NODICS_AXIS_ROOT || resolve(workspaceRoot, "nodics.axis"),
);
const platformUrl = process.env.AXIS_PLATFORM_URL || "http://127.0.0.1:4300";
const wcmsUrl = process.env.AXIS_WCMS_URL || "http://127.0.0.1:4310";
const processUrl = process.env.AXIS_PROCESS_URL || "http://127.0.0.1:4330";
const axisUrl = process.env.AXIS_URL || "http://127.0.0.1:3100";
const enterpriseCode = process.env.AXIS_ENTERPRISE || "default";
const loginId = process.env.AXIS_LOGIN_ID || "admin";
const password = process.env.AXIS_PASSWORD || "adminPassword";
const projectCode = process.env.AXIS_PROJECT || "nodics.kickoff";
const dropLocalDb = process.argv.includes("--drop-local-db");
const leaveStarted = process.argv.includes("--leave-started");
const mongoDatabases = [
  "kickoffLocal",
  "kickoffLocalWcms",
  "kickoffLocalCron",
  "kickoffLocalProcess",
];
const documentationPacks = [
  {
    code: "nodicsDocumentation",
    minimumRoutes: 9,
    navigationComponent: "nodicsDocumentationNavigation",
    site: "nodicsDocumentationSite",
  },
  {
    code: "axisDocumentation",
    minimumRoutes: 14,
    navigationComponent: "axisDocumentationNavigation",
    site: "axisDocumentationSite",
  },
  {
    code: "processDocumentation",
    minimumRoutes: 7,
    navigationComponent: "processDocumentationNavigation",
    site: "processDocumentationSite",
  },
  {
    code: "kickoffDocumentation",
    minimumRoutes: 4,
    navigationComponent: "kickoffDocumentationNavigation",
    site: "kickoffDocumentationSite",
  },
];
const expectedCatalogs = Object.freeze([
  Object.freeze({
    code: "axisContentCatalog",
    catalogType: "CONTENT",
  }),
  Object.freeze({
    code: "defaultContentCatalog",
    catalogType: "CONTENT",
  }),
  Object.freeze({
    code: "documentationContentCatalog",
    catalogType: "CONTENT",
  }),
  Object.freeze({
    code: "defaultProductCatalog",
    catalogType: "PRODUCT",
  }),
]);
const retiredDocumentationCatalogs = Object.freeze([
  "nodicsDocumentationContentCatalog",
  "axisDocumentationContentCatalog",
  "kickoffDocumentationContentCatalog",
]);
const localPorts = [
  { label: "Platform", port: 4300 },
  { label: "WCMS", port: 4310 },
  { label: "Process", port: 4330 },
  { label: "Axis", port: 3100 },
];
const managedProcesses = [];

function log(message) {
  console.log(`[acceptance] ${message}`);
}

function endpoint(baseUrl, path) {
  return new URL(path, baseUrl).toString();
}

function stableId(value) {
  return createHash("sha256").update(value).digest("hex").slice(0, 12);
}

function isErrorLevelLog(text) {
  return /(?:^|\s)error\s*:/i.test(text) || /\[31merror/i.test(text);
}

async function requestJson(baseUrl, path, options = {}) {
  const response = await fetch(endpoint(baseUrl, path), {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      "x-enterprise-code": enterpriseCode,
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  let body;
  try {
    body = text ? JSON.parse(text) : undefined;
  } catch {
    throw new Error(
      `${path} returned non-JSON response: ${text.slice(0, 200)}`,
    );
  }
  if (!response.ok) {
    throw new Error(
      `${path} returned HTTP ${String(response.status)}: ${text.slice(0, 500)}`,
    );
  }
  return body?.result || body?.data || body;
}

async function expectHttpOk(baseUrl, path) {
  const response = await fetch(endpoint(baseUrl, path), {
    headers: { "x-enterprise-code": enterpriseCode },
  });
  if (!response.ok) {
    throw new Error(
      `${endpoint(baseUrl, path)} returned HTTP ${String(response.status)}`,
    );
  }
}

async function waitForHttp(baseUrl, path, label, timeoutMs = 60000) {
  const start = Date.now();
  let lastError;
  while (Date.now() - start < timeoutMs) {
    try {
      await expectHttpOk(baseUrl, path);
      log(`${label} is reachable`);
      return;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  throw new Error(
    `${label} did not become reachable: ${lastError?.message || "timeout"}`,
  );
}

async function portListening(port) {
  const { stdout } = await execFileAsync("lsof", [
    "-nP",
    `-iTCP:${String(port)}`,
    "-sTCP:LISTEN",
  ]).catch(() => ({ stdout: "" }));
  return (
    stdout.includes(`:${String(port)} `) ||
    stdout.includes(`:${String(port)} (LISTEN)`)
  );
}

async function assertFreshResetPortsAvailable() {
  if (!dropLocalDb) return;
  const busy = [];
  for (const candidate of localPorts) {
    if (await portListening(candidate.port)) {
      busy.push(`${candidate.label} ${String(candidate.port)}`);
    }
  }
  if (busy.length > 0) {
    throw new Error(
      [
        "Fresh database bootstrap requires the local stack to be stopped first.",
        `Busy ports: ${busy.join(", ")}.`,
        "Stop Platform, WCMS, Process, and Axis before running acceptance:local:fresh,",
        "or run npm run acceptance:local for a non-destructive verification against the current stack.",
      ].join(" "),
    );
  }
}

function startProcess(label, cwd, command, args, readyPort) {
  log(`starting ${label}`);
  const child = spawn(command, args, {
    cwd,
    env: process.env,
    stdio: ["ignore", "pipe", "pipe"],
  });
  const errors = [];
  child.stdout.on("data", (chunk) => {
    const text = chunk.toString();
    process.stdout.write(`[${label}] ${text}`);
    if (isErrorLevelLog(text)) errors.push(text.trim());
  });
  child.stderr.on("data", (chunk) => {
    const text = chunk.toString();
    process.stderr.write(`[${label}] ${text}`);
    if (isErrorLevelLog(text)) errors.push(text.trim());
  });
  child.on("exit", (code) => {
    if (code !== 0 && code !== null) {
      console.error(`[${label}] exited with code ${String(code)}`);
    }
  });
  managedProcesses.push({ child, errors, label, readyPort });
  return child;
}

async function ensureProcess(label, port, cwd, scriptName, baseUrl, readyPath) {
  if (await portListening(port)) {
    log(`${label} already listening on ${String(port)}`);
    return;
  }
  startProcess(label, cwd, "npm", ["run", scriptName], port);
  await waitForHttp(baseUrl, readyPath, label);
}

async function dropDatabases() {
  if (!dropLocalDb) {
    log(
      "database drop skipped; pass --drop-local-db to reset the local bootstrap databases",
    );
    return;
  }
  const script = [
    `const targets=${JSON.stringify(mongoDatabases)};`,
    "for (const name of targets) {",
    "  const existed = db.getMongo().getDBNames().includes(name);",
    "  const result = db.getSiblingDB(name).dropDatabase();",
    "  printjson({ database: name, existed, ok: result.ok });",
    "}",
    "printjson({ remainingTargets: db.getMongo().getDBNames().filter(name => targets.includes(name)) });",
  ].join("\n");
  const { stdout } = await execFileAsync(
    "mongosh",
    ["--quiet", "--eval", script],
    {
      cwd: projectRoot,
    },
  );
  process.stdout.write(stdout);
}

async function authenticate() {
  const auth = await requestJson(
    platformUrl,
    "/nodics/profile/v0/employee/browser/authenticate",
    {
      method: "POST",
      body: JSON.stringify({ loginId, password }),
      headers: { Origin: axisUrl },
    },
  );
  if (!auth?.authToken) {
    throw new Error("authentication did not return an auth token");
  }
  log(`authenticated ${loginId}`);
  return {
    Authorization: `Bearer ${auth.authToken}`,
  };
}

async function loadRegistry(headers) {
  const registered = await requestJson(
    platformUrl,
    `/nodics/backoffice/v0/runtime/modules/registrations?project=${encodeURIComponent(projectCode)}`,
    { headers },
  );
  const available = await requestJson(
    platformUrl,
    `/nodics/backoffice/v0/runtime/modules/available?project=${encodeURIComponent(projectCode)}`,
    { headers },
  );
  return {
    registered: registered.items || registered.modules || registered,
    available: available.items || available.modules || available,
  };
}

function requireModule(modules, functionalModule, label) {
  const match = []
    .concat(modules || [])
    .find((item) => item.functionalModule === functionalModule);
  if (!match) throw new Error(`${functionalModule} missing from ${label}`);
  return match;
}

async function importDocumentationPacks(headers) {
  for (const pack of documentationPacks) {
    const packCode = pack.code;
    const status = await requestJson(
      wcmsUrl,
      `/nodics/system/v0/content-packs/${encodeURIComponent(packCode)}`,
      { headers },
    );
    if (status.state !== "CURRENT") {
      await requestJson(
        wcmsUrl,
        `/nodics/system/v0/content-packs/${encodeURIComponent(packCode)}/imports`,
        { headers, method: "POST" },
      );
    }
    const current = await requestJson(
      wcmsUrl,
      `/nodics/system/v0/content-packs/${encodeURIComponent(packCode)}`,
      { headers },
    );
    if (current.state !== "CURRENT") {
      throw new Error(`${packCode} is ${String(current.state)} after import`);
    }
    log(`${packCode} is CURRENT (${current.installedVersion})`);
  }
}

async function verifyDocumentationRecords() {
  const script = [
    `const packs=${JSON.stringify(documentationPacks)};`,
    'const d=db.getSiblingDB("kickoffLocalWcms");',
    "const results=packs.map(pack => ({",
    "  code: pack.code,",
    "  site: pack.site,",
    "  sites: d.CmsSiteModel.countDocuments({ code: pack.site }),",
    "  routes: d.CmsPageRouteModel.countDocuments({ site: pack.site, path: /^\\/docs/ }),",
    "  navigationComponents: d.CmsComponentModel.countDocuments({ code: pack.navigationComponent })",
    "}));",
    "print(JSON.stringify(results));",
  ].join("\n");
  const { stdout } = await execFileAsync(
    "mongosh",
    ["--quiet", "--eval", script],
    {
      cwd: projectRoot,
    },
  );
  log(`documentation records ${stdout.trim()}`);
  const results = JSON.parse(stdout);
  for (const result of results) {
    const pack = documentationPacks.find((item) => item.code === result.code);
    if (
      !pack ||
      result.sites !== 1 ||
      result.navigationComponents !== 1 ||
      result.routes < pack.minimumRoutes
    ) {
      throw new Error(
        `Documentation records are not healthy for ${result.code}: ${JSON.stringify(result)}`,
      );
    }
  }
}

async function verifyMongoCounts() {
  const script = [
    `const expectedCatalogs=${JSON.stringify(expectedCatalogs)};`,
    `const retiredDocumentationCatalogs=${JSON.stringify(retiredDocumentationCatalogs)};`,
    `const documentationPacks=${JSON.stringify(documentationPacks)};`,
    'const d=db.getSiblingDB("kickoffLocalWcms");',
    "const counts={",
    "  catalogs: d.CatalogModel.countDocuments(),",
    "  sites: d.CmsSiteModel.countDocuments(),",
    "  pages: d.CmsPageModel.countDocuments(),",
    "  components: d.CmsComponentModel.countDocuments(),",
    "  routes: d.CmsPageRouteModel.countDocuments()",
    "};",
    "const catalogs=d.CatalogModel.find({}, { _id: 0, code: 1, catalogType: 1 }).sort({ code: 1 }).toArray();",
    "const retired=d.CatalogModel.find({ code: { $in: retiredDocumentationCatalogs } }, { _id: 0, code: 1 }).toArray();",
    "const documentationSites=d.CmsSiteModel.find({ code: { $in: documentationPacks.map(pack => pack.site) } }, { _id: 0, code: 1, catalog: 1 }).sort({ code: 1 }).toArray();",
    "print(JSON.stringify({ counts, catalogs, expectedCatalogs, retired, documentationSites }));",
  ].join("\n");
  const { stdout } = await execFileAsync(
    "mongosh",
    ["--quiet", "--eval", script],
    {
      cwd: projectRoot,
    },
  );
  const result = JSON.parse(stdout);
  log(`WCMS counts ${JSON.stringify(result.counts)}`);
  const numbers = Object.values(result.counts);
  if (numbers.length < 5 || numbers.some((value) => value <= 0)) {
    throw new Error(`WCMS imported counts are not healthy: ${stdout.trim()}`);
  }
  if (result.catalogs.length !== expectedCatalogs.length) {
    throw new Error(
      `WCMS catalog count drifted: ${JSON.stringify(result.catalogs)}`,
    );
  }
  const actualByCode = new Map(
    result.catalogs.map((catalog) => [catalog.code, catalog.catalogType]),
  );
  for (const catalog of expectedCatalogs) {
    if (actualByCode.get(catalog.code) !== catalog.catalogType) {
      throw new Error(
        `WCMS catalog ${catalog.code} is missing or has wrong type: ${JSON.stringify(result.catalogs)}`,
      );
    }
  }
  if (result.retired.length > 0) {
    throw new Error(
      `Retired documentation catalogs still exist: ${JSON.stringify(result.retired)}`,
    );
  }
  const unhealthyDocumentationSites = result.documentationSites.filter(
    (site) => site.catalog !== "documentationContentCatalog",
  );
  if (
    result.documentationSites.length !== documentationPacks.length ||
    unhealthyDocumentationSites.length > 0
  ) {
    throw new Error(
      `Documentation sites must share documentationContentCatalog: ${JSON.stringify(result.documentationSites)}`,
    );
  }
}

async function runAxisSmoke() {
  if (!existsSync(resolve(axisRoot, "package.json"))) {
    throw new Error(`Axis repository not found at ${axisRoot}`);
  }
  log("running Axis smoke with documentation and Process-composed Cron lifecycle gates");
  await new Promise((resolvePromise, rejectPromise) => {
    const child = spawn("npm", ["run", "smoke:live"], {
      cwd: axisRoot,
      env: {
        ...process.env,
        AXIS_EXPECT_MODULES: "1",
        AXIS_EXPECT_DOCUMENTATION: "1",
        AXIS_CRON_LIFECYCLE: "1",
        AXIS_PROCESS_LIFECYCLE: "1",
        AXIS_URL: axisUrl,
        AXIS_PLATFORM_URL: platformUrl,
        AXIS_PROCESS_URL: processUrl,
        AXIS_WCMS_URL: wcmsUrl,
        AXIS_ENTERPRISE: enterpriseCode,
        AXIS_PROJECT: projectCode,
        AXIS_LOGIN_ID: loginId,
        AXIS_PASSWORD: password,
      },
      stdio: "inherit",
    });
    child.on("exit", (code) => {
      if (code === 0) resolvePromise();
      else
        rejectPromise(new Error(`Axis smoke failed with code ${String(code)}`));
    });
  });
}

async function main() {
  log(`workspace ${workspaceRoot}`);
  log(`run ${stableId(String(Date.now()))}`);
  await assertFreshResetPortsAvailable();
  await dropDatabases();
  await ensureProcess(
    "Platform",
    4300,
    projectRoot,
    "start:platform",
    platformUrl,
    "/nodics/system/v0/health/ready",
  );
  await ensureProcess(
    "WCMS",
    4310,
    projectRoot,
    "start:wcms",
    wcmsUrl,
    "/nodics/system/v0/health/ready",
  );
  await waitForHttp(
    platformUrl,
    "/nodics/backoffice/v0/bootstrap/public",
    "BackOffice public bootstrap",
  );
  await ensureProcess(
    "Process and Automation",
    4330,
    projectRoot,
    "start:process",
    processUrl,
    "/nodics/system/v0/health/ready",
  );
  if (!(await portListening(3100))) {
    if (!existsSync(resolve(axisRoot, "package.json"))) {
      throw new Error(`Axis repository not found at ${axisRoot}`);
    }
    startProcess("Axis", axisRoot, "npm", ["run", "dev"], 3100);
  }
  await waitForHttp(axisUrl, "/", "Axis");
  const headers = await authenticate();
  const registry = await loadRegistry(headers);
  requireModule(registry.registered, "nodics.core", "registered modules");
  requireModule(registry.registered, "nodics.platform", "registered modules");
  requireModule(registry.registered, "nodics.wcms", "registered modules");
  requireModule(
    [...registry.registered, ...registry.available],
    "nodics.cron",
    "observed modules",
  );
  requireModule(
    [...registry.registered, ...registry.available],
    "nodics.process",
    "observed modules",
  );
  await importDocumentationPacks(headers);
  await verifyDocumentationRecords();
  for (const route of [
    "/",
    "/docs",
    "/docs/framework",
    "/docs/nodics-axis",
    "/docs/nodics-kickoff",
    "/content",
    "/content/designer",
    "/media",
    "/process",
    "/process/definitions",
    "/process/tasks",
    "/process/triggers",
    "/process/designer",
    "/cron",
    "/system-integrations",
    "/registry",
    "/operations/imports-exports",
    "/docs/framework/process",
    "/docs/framework/process/visual-designer",
    "/docs/swaggers",
  ]) {
    await expectHttpOk(axisUrl, route);
    log(`Axis route ${route} returned HTTP 200`);
  }
  await verifyMongoCounts();
  await runAxisSmoke();
  const noisy = managedProcesses.flatMap((entry) =>
    entry.errors.map((message) => `${entry.label}: ${message}`),
  );
  if (noisy.length > 0) {
    throw new Error(`Startup emitted error-level output:\n${noisy.join("\n")}`);
  }
  log("fresh local bootstrap acceptance completed successfully");
}

main()
  .catch((error) => {
    console.error(`[acceptance] FAIL ${error.message}`);
    process.exitCode = 1;
  })
  .finally(() => {
    if (!leaveStarted) {
      managedProcesses.forEach(({ child }) => child.kill("SIGTERM"));
    }
  });
