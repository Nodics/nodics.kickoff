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

/**
 * @module kickoff/scripts/acceptance/defaultProjectRuntimeDeploymentGrantAcceptanceService
 * @description Reconciles existing local Profile runtime deployment grants with
 * server-declared runtime identity modules before split-runtime acceptance.
 * @layer tooling
 * @owner nodics.kickoff
 */

const projectRoot = process.env.NODICS_PROJECT_ROOT || process.cwd();
const frameworkRoot = process.env.NODICS_FRAMEWORK_ROOT || path.resolve(projectRoot, "../nodics.ai");
const { readProjectEnvironmentConfiguration, projectEndpointUrl, projectCorsOrigin } =
  await import(pathToFileURL(path.join(frameworkRoot, "nodics.foundation/modules/nTooling/src/service/project/defaultProjectEnvironmentConfigurationService.mjs")).href);

const environmentProfile = readProjectEnvironmentConfiguration(projectRoot, process.env.ENV || process.env.NODICS_ENVIRONMENT || "");
const environment = environmentProfile.environment || "kickoffLocal";
const platformUrl = process.env.AXIS_PLATFORM_URL || projectEndpointUrl(environmentProfile, "platformServer");
const requestOrigin = process.env.NODICS_ACCEPTANCE_ORIGIN || projectCorsOrigin(environmentProfile, "axis");
const enterprise = process.env.AXIS_ENTERPRISE || "default";
const tenant = process.env.AXIS_TENANT || "default";
const project = process.env.AXIS_PROJECT || environmentProfile.projectCode || "nodics.kickoff";
const projectPropertiesModule = await import(pathToFileURL(path.join(projectRoot, "config", "properties.js")).href);
const projectProperties = projectPropertiesModule.default || projectPropertiesModule;

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
  const result = await request(platformUrl, "/nodics/profile/v0/employee/browser/authenticate", {
    method: "POST",
    headers: { Origin: requestOrigin },
    body: JSON.stringify({
      loginId: process.env.AXIS_LOGIN_ID || "admin",
      password: process.env.AXIS_PASSWORD ||
        process.env.NODICS_BOOTSTRAP_ADMIN_PASSWORD ||
        projectProperties.bootstrapIdentity?.adminPassword ||
        "adminPassword",
    }),
  });
  if (!result?.authToken) throw new Error("Platform authentication returned no token");
  return { Authorization: `Bearer ${result.authToken}`, tenant };
}

function runtimeGrantCode(serverName) {
  return `kickoff-local-${serverName.replace(/Server$/u, "").replace(/[A-Z]/gu, match => `-${match.toLowerCase()}`)}-runtime-deployment`;
}

async function loadServerProperties(serverName) {
  const file = path.join(projectRoot, "envs", environment, serverName, "config", "properties.js");
  if (!fs.existsSync(file)) return null;
  const mod = await import(pathToFileURL(file).href);
  return mod.default || mod;
}

async function configuredRuntimeServers() {
  const envRoot = path.join(projectRoot, "envs", environment);
  const names = fs.readdirSync(envRoot)
    .filter(name => name.endsWith("Server"))
    .filter(name => fs.existsSync(path.join(envRoot, name, "config", "properties.js")));
  const servers = [];
  for (const name of names) {
    const properties = await loadServerProperties(name);
    if (properties?.runtimeIdentity?.instanceCode) servers.push({ name, properties });
  }
  return servers;
}

async function reconcileGrant(headers, server) {
  const grantCode = runtimeGrantCode(server.name);
  const current = await request(platformUrl, `/nodics/profile/v0/principalscopeassignment/code/${encodeURIComponent(grantCode)}`, { headers });
  const grant = Array.isArray(current) ? current[0] : current;
  if (!grant?.runtimeScope) throw new Error(`Runtime deployment grant ${grantCode} was not found`);
  const expectedModules = [
    ...[].concat(server.properties.activeModules?.modules || []),
    ...[].concat(server.properties.runtimeIdentity?.remoteModules || []),
  ].filter(moduleName => typeof moduleName === "string" && /^[A-Za-z][A-Za-z0-9_.-]{0,127}$/.test(moduleName));
  const modules = [...new Set([...[].concat(grant.runtimeScope.modules || []), ...expectedModules])];
  const permissions = [
    ...new Set([
      ...[].concat(grant.runtimeScope.permissions || []),
      "auth.internal.token.read",
      "profile.enterprise.search",
    ]),
  ];
  const body = {
    query: { code: grantCode },
    model: {
      runtimeScope: {
        ...grant.runtimeScope,
        projectCode: project,
        environmentCode: environment,
        serverCode: server.name,
        instanceCode: server.properties.runtimeIdentity.instanceCode,
        modules,
        permissions,
      },
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
  return { grantCode, moduleCount: modules.length, modules };
}

async function main() {
  const headers = await authenticate();
  const servers = await configuredRuntimeServers();
  if (!servers.length) throw new Error("No configured runtime identities were found");
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
