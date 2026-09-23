#!/usr/bin/env node
/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";

/**
 * @module kickoff/scripts/acceptance/defaultProjectRuntimeDeploymentGrantAcceptanceService
 * @description Reconciles existing local Profile runtime deployment grants with
 * server-declared runtime identity modules before split-runtime acceptance.
 * @layer tooling
 * @owner nodics.kickoff
 */

const projectRoot = process.env.NODICS_PROJECT_ROOT || process.cwd();
const frameworkRoot = process.env.NODICS_FRAMEWORK_ROOT || path.resolve(projectRoot, "../nodics.ai");
const require = createRequire(import.meta.url);
const localRuntimeCredentialService = require(path.join(frameworkRoot, "nodics.foundation/modules/nTooling/src/service/project/defaultProjectLocalRuntimeCredentialService"));
const { readProjectEnvironmentConfiguration, projectEndpointUrl, projectCorsOrigin } =
  await import(pathToFileURL(path.join(frameworkRoot, "nodics.foundation/modules/nTooling/src/service/project/defaultProjectEnvironmentConfigurationService.mjs")).href);

const environmentProfile = readProjectEnvironmentConfiguration(projectRoot, process.env.ENV || process.env.NODICS_ENVIRONMENT || "");
const environment = environmentProfile.environment || "kickoffLocal";
const platformUrl = process.env.AXIS_PLATFORM_URL || projectEndpointUrl(environmentProfile, "platformServer");
const requestOrigin = process.env.NODICS_ACCEPTANCE_ORIGIN || projectCorsOrigin(environmentProfile, "axis");
const enterprise = process.env.AXIS_ENTERPRISE || "default";
const tenant = process.env.AXIS_TENANT || "default";
const project = process.env.AXIS_PROJECT || environmentProfile.projectCode || "nodics.kickoff";

function localBootstrapAdminPassword() {
  const credentials = /Local$/u.test(environment) ? localRuntimeCredentialService.ensureCredentials(projectRoot, environment) : {};
  return process.env.AXIS_PASSWORD ||
    process.env.NODICS_BOOTSTRAP_ADMIN_PASSWORD ||
    credentials.NODICS_BOOTSTRAP_ADMIN_PASSWORD ||
    "adminPassword";
}

function log(message) {
  console.log(`[runtime-grants] ${message}`);
}

async function request(baseUrl, route, options = {}) {
  const response = await fetch(new URL(route, baseUrl), {
    ...options,
    headers: {
      Accept: "application/json",
      "x-enterprise-code": enterprise,
      ...(options.body ? { "content-type": "application/json" } : {}),
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  let body;
  try {
    body = text ? JSON.parse(text) : undefined;
  } catch {
    throw new Error(`${route} returned a non-JSON response`);
  }
  if (!response.ok) {
    throw new Error(`${route} returned HTTP ${String(response.status)}: ${text.slice(0, 500)}`);
  }
  return body?.data ?? body?.result ?? body;
}

async function authenticate() {
  const password = localBootstrapAdminPassword();
  if (typeof password !== "string" || password.length === 0) {
    throw new Error("Admin password is not configured for runtime grant acceptance");
  }
  const result = await request(platformUrl, "/nodics/profile/v0/employee/authenticate", {
    method: "POST",
    headers: { Origin: requestOrigin },
    body: JSON.stringify({
      loginId: process.env.AXIS_LOGIN_ID || "admin",
      password,
    }),
  });
  if (!result?.authToken) throw new Error("Platform authentication returned no token");
  return { Authorization: `Bearer ${result.authToken}`, tenant };
}

function runtimeGrantCode(serverName) {
  return `kickoff-local-${serverName.replace(/Server$/u, "").replace(/[A-Z]/gu, match => `-${match.toLowerCase()}`)}-runtime-deployment`;
}

async function loadServerProperties(serverName) {
  const serverRoot = path.join(projectRoot, "envs", environment, serverName);
  const packageFile = path.join(serverRoot, "package.json");
  const propertiesFile = path.join(serverRoot, "config", "properties.js");
  let metadata = {};
  let properties = {};
  if (fs.existsSync(packageFile)) {
    metadata = JSON.parse(fs.readFileSync(packageFile, "utf8")).nodics || {};
  }
  if (fs.existsSync(propertiesFile)) {
    const mod = await import(pathToFileURL(propertiesFile).href);
    properties = mod.default || mod;
  }
  return { ...metadata, ...properties };
}

async function configuredRuntimeServers() {
  const envRoot = path.join(projectRoot, "envs", environment);
  const names = fs.readdirSync(envRoot)
    .filter(name => name.endsWith("Server"))
    .filter(name => fs.existsSync(path.join(envRoot, name, "package.json")));
  const servers = [];
  for (const name of names) {
    const properties = await loadServerProperties(name);
    if (properties?.runtimeIdentity?.instanceCode) servers.push({ name, properties });
  }
  return servers;
}

async function rotateLocalServicePrincipalKey(headers, principalCode, apiKey, context, apiKeyScopes = []) {
  if (!/Local$/u.test(environment)) return;
  if (!principalCode || typeof apiKey !== "string" || apiKey.length < 32) {
    throw new Error(`Generated local runtime API key was not available for ${context}`);
  }
  await request(platformUrl, "/nodics/profile/v0/identity/credential/rotate", {
    method: "POST",
    headers,
    body: JSON.stringify({
      principalCode,
      newApiKey: apiKey,
      apiKeyScopes: [...new Set([
        "auth.internal.token.read",
        "auth.internal.token.read.anyTenant",
        ...apiKeyScopes,
      ])],
    }),
  });
}

async function reconcileLocalBootstrapServicePrincipalKey(headers, apiKeyScopes = []) {
  if (!/Local$/u.test(environment)) return;
  const credentials = localRuntimeCredentialService.ensureCredentials(projectRoot, environment);
  await rotateLocalServicePrincipalKey(headers, "apiAdmin", credentials.NODICS_API_KEY, "apiAdmin", apiKeyScopes);
  log("reconciled local bootstrap service principal credential with generated runtime proof");
}

async function loadCurrentGrant(headers, grantCode) {
  try {
    return await request(platformUrl, `/nodics/profile/v0/principalscopeassignment/code/${encodeURIComponent(grantCode)}`, { headers });
  } catch (error) {
    if (String(error.message || "").includes("HTTP 404")) return null;
    throw error;
  }
}

function runtimeScopeFor(server) {
  const expectedModules = [
    ...[].concat(server.properties.activeModules?.modules || []),
    ...[].concat(server.properties.runtimeIdentity?.remoteModules || []),
  ].filter(moduleName => typeof moduleName === "string" && /^[A-Za-z][A-Za-z0-9_.-]{0,127}$/.test(moduleName));
  const modules = [...new Set(expectedModules)];
  const permissions = [
    ...new Set([
      "auth.internal.token.read",
      "profile.enterprise.search",
      "profile.customer.register",
      "profile.address.reference.read",
      "profile.enterprise.reference.read",
      "location.location.read",
      "loyalty.wallet.open",
      "loyalty.wallet.read",
      "media.evidence.read",
      "media.customer.upload",
      "media.customer.read",
      "import.release.validate",
      "import.core.run",
      "publish.lifecycle.create",
      "publish.lifecycle.view",
      "publish.lifecycle.validate",
      "publish.lifecycle.requestApproval",
    ]),
  ];
  return {
    projectCode: project,
    environmentCode: environment,
    serverCode: server.name,
    instanceCode: server.properties.runtimeIdentity.instanceCode,
    modules,
    permissions,
  };
}

async function reconcileGrant(headers, server) {
  const grantCode = runtimeGrantCode(server.name);
  const current = await loadCurrentGrant(headers, grantCode);
  const grant = Array.isArray(current) ? current[0] : current;
  const runtimeScope = runtimeScopeFor(server);
  if (!grant?.runtimeScope) {
    const created = await request(platformUrl, "/nodics/profile/v0/principalscopeassignment/all", {
      method: "PUT",
      headers,
      body: JSON.stringify([{
        code: grantCode,
        active: true,
        principalType: "service",
        principalCode: "apiAdmin",
        scopeType: "RUNTIME_DEPLOYMENT",
        scopeCode: grantCode,
        tenantCode: tenant,
        enterpriseCode: enterprise,
        effect: "ALLOW",
        inheritanceMode: "DIRECT",
        status: "ACTIVE",
        runtimeScope,
        reasonCode: "LOCAL_RUNTIME_BOOTSTRAP",
      }]),
    });
    if (!created) throw new Error(`Runtime deployment grant ${grantCode} was not created`);
    return { grantCode, moduleCount: runtimeScope.modules.length, modules: runtimeScope.modules };
  }
  const body = {
    query: { code: grantCode },
    model: {
      runtimeScope,
    },
    options: { returnModified: true },
  };
  const result = await request(platformUrl, "/nodics/profile/v0/principalscopeassignment", {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
  });
  const modified = Array.isArray(result) ? result : [].concat(result?.modified || result?.result || result);
  if (modified.length === 0 && result?.matchedCount === 0) {
    throw new Error(`Runtime deployment grant ${grantCode} was not reconciled`);
  }
  return { grantCode, moduleCount: runtimeScope.modules.length, modules: runtimeScope.modules };
}

async function main() {
  let headers = await authenticate();
  const servers = await configuredRuntimeServers();
  if (!servers.length) throw new Error("No configured runtime identities were found");
  log(`found ${String(servers.length)} configured runtime identities`);
  const runtimePermissionScope = [
    ...new Set(servers.flatMap(server => runtimeScopeFor(server, null).permissions)),
  ];
  await reconcileLocalBootstrapServicePrincipalKey(headers, runtimePermissionScope);
  headers = await authenticate();
  for (const server of servers) {
    const result = await reconcileGrant(headers, server);
    log(`reconciled ${result.grantCode} for ${result.moduleCount} modules`);
  }
  const processGrant = await request(platformUrl, "/nodics/profile/v0/principalscopeassignment/code/kickoff-local-process-runtime-deployment", { headers });
  const processScope = (Array.isArray(processGrant) ? processGrant[0] : processGrant)?.runtimeScope;
  if (!processScope?.modules?.includes("rulesApi")) {
    throw new Error("Process runtime deployment grant must include rulesApi for Rules approval callbacks");
  }
  log("runtime deployment grant acceptance passed");
}

main().catch(error => {
  console.error(`Runtime deployment grant acceptance failed: ${error.message}`);
  process.exit(1);
});
