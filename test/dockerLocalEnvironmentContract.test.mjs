/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const projectCommandService = require("../../nodics.ai/nodics.foundation/modules/nTooling/src/service/command/defaultProjectCommandService");
const environment = path.join(root, "envs", "kickoffDockerLocal");
const compose = fs.readFileSync(
  path.join(environment, "docker", "compose.yaml"),
  "utf8",
);
const containerEnvironmentService = fs.readFileSync(
  path.join(
    root,
    "..",
    "nodics.ai",
    "nodics.foundation",
    "modules",
    "nTooling",
    "src",
    "service",
    "project",
    "defaultProjectContainerEnvironmentService.mjs",
  ),
  "utf8",
);
const containerQualificationService = fs.readFileSync(
  path.join(
    root,
    "..",
    "nodics.ai",
    "nodics.foundation",
    "modules",
    "nTooling",
    "src",
    "service",
    "project",
    "defaultProjectContainerQualificationService.mjs",
  ),
  "utf8",
);
const projectContractPath = path.join(root, "nodics.project.json");
const environmentProfile = JSON.parse(
  fs.readFileSync(path.join(environment, "nodics.environment.json"), "utf8"),
);
const projectCommands = projectCommandService.resolveCommands(projectCommandService.readManifest(root));
const servers = [
  "platformServer",
  "wcmsStagedServer",
  "wcmsOnlineServer",
  "processServer",
  "engagementServer",
  "loyaltyServer",
  "commerceServer",
  "commerceStagedServer",
];
assert.notEqual(environment, path.join(root, "envs", "kickoffLocal"));
servers.forEach((server) => {
  const metadata = JSON.parse(
    fs.readFileSync(path.join(environment, server, "package.json"), "utf8"),
  );
  assert.equal(metadata.nodics.kind, "server");
  assert(
    fs.existsSync(path.join(environment, server, "config", "properties.js")),
  );
});
[
  "platform",
  "wcms-staged",
  "wcms-online",
  "process",
  "engagement",
  "loyalty",
  "commerce",
  "commerce-staged",
  "axis",
  "nexus",
  "mongodb",
  "redis-primary",
  "redis-replica",
  "redis-sentinel",
  "elasticsearch",
].forEach((service) => {
  assert.match(compose, new RegExp(`^  ${service}:`, "m"));
});
assert(!compose.includes("kickoffLocalWcms"));
assert(!compose.includes("/var/run/docker.sock"));
assert(!compose.match(/password:\s+(?:nodics|admin|password|secret)/i));
assert.match(compose, /nodics-kickoff-docker-local/);
assert.match(compose, /read_only:\s*true/);
assert.match(compose, /no-new-privileges:true/);
assert.match(compose, /5312:4312/);
assert.match(compose, /5314:4314/);
assert.match(compose, /5352:4352/);
assert.match(compose, /5360:4360/);
assert.doesNotMatch(compose, /src\/start-[^"'\s]+\.js/);
for (const command of [
  "start:platform",
  "start:wcms:online",
  "start:process",
  "start:wcms:staged",
  "start:engagement",
  "start:loyalty",
  "start:commerce",
  "start:commerce:staged",
]) {
  assert.match(
    compose,
    new RegExp(
      `node_modules/\\.bin/nodics\", \"project:run\", \"${command.replace(/:/g, ":")}\"`,
    ),
  );
}
assert.match(compose, /docker\.elastic\.co\/elasticsearch\/elasticsearch/);
assert.match(compose, /elasticsearch-data/);
const loadRuntime = server => require("./helpers/configuration").loadRuntime(server, "kickoffDockerLocal");
const dockerPlatform = require("./helpers/configuration").merge(
  {},
  require("../modules/kickoffAdministration/config/properties"),
  loadRuntime("platformServer"),
);
const dockerLoyalty = loadRuntime("loyaltyServer");
const dockerEnvironment = require("../envs/kickoffDockerLocal/config/properties");
assert.equal(
  dockerPlatform.cache.kickoffCore.engines.redis.options.sentinel.endpoints[0]
    .host,
  "redis-sentinel",
);
assert.equal(
  dockerPlatform.backofficeRegistry.clientEndpoints.platformServer,
  "http://localhost:5300/",
);
assert.equal(
  dockerPlatform.backofficeRegistry.clientEndpoints.loyaltyServer,
  "http://localhost:5360/",
);
assert.equal(
  dockerPlatform.profileBrowserSession.refreshCookieName,
  "nodics_docker_axis_refresh",
);
assert.equal(
  dockerPlatform.profileBrowserSession.csrfCookieName,
  JSON.parse(
    fs.readFileSync(path.join(environment, "docker/axis-config.json"), "utf8"),
  ).browserSessionCsrfCookieName,
);
assert.equal(dockerPlatform.profileCustomerBrowserSession.enabled, true);
assert.equal(
  dockerPlatform.profileCustomerBrowserSession.refreshCookieName,
  "nodics_docker_customer_refresh",
);
assert.equal(
  dockerPlatform.profileCustomerBrowserSession.csrfCookieName,
  "nodics_docker_customer_csrf",
);
assert.equal(
  dockerLoyalty.database.default.mongodb.master.databaseName,
  "kickoffDockerLocalLoyalty",
);
assert.equal(
  dockerLoyalty.servers.default.abstractEndpoint.httpHost,
  "loyalty",
);
assert.equal(
  dockerEnvironment.httpHardening.securityHeaders.headers[
    "Cross-Origin-Resource-Policy"
  ],
  "cross-origin",
);
for (const port of [4100, 4200, 6300, 6400, 6500, 6600])
  assert(
    dockerEnvironment.httpHardening.cors.allowedOrigins.includes(
      `http://localhost:${port}`,
    ),
  );
for (const header of [
  "Content-Type",
  "X-Enterprise-Code",
  "X-Tenant-Code",
  "Tenant",
]) {
  assert(
    dockerEnvironment.httpHardening.cors.allowedHeaders.includes(header),
    `Agora customer authentication requires the ${header} request header`,
  );
}
assert.equal(
  require("../envs/kickoffDockerLocal/commerceServer/config/properties").cart
    .customerApi.defaultJurisdiction,
  "AE",
  "Cart jurisdiction must match the governed reference tax policy",
);
for (const server of ["wasteServer", "locationServer"]) {
  const properties = loadRuntime(server);
  assert.equal(properties.servers.profile.endpoint.httpHost, "platform");
  assert.equal(properties.servers.default.endpoint.httpHost, "0.0.0.0");
  assert.match(
    properties.database.default.mongodb.master.databaseName,
    /^kickoffDockerLocal/,
  );
  assert(properties.activeModules.modules.includes("circa.ewaste"));
}
for (const domain of environmentProfile.composition.agora.domains) {
  const prepared =
    dockerPlatform.backofficeApplicationInitialization.profiles[
      `agora${domain.code}`
    ];
  assert(
    prepared.dataPackages.some(
      (item) => item.targetRuntimeRole === "COMMERCE_STAGED",
    ),
  );
  assert(domain.publication.storeCode);
}
assert(loadRuntime("commerceServer").product.discovery.catalogue.enabled);
assert(
  loadRuntime("commerceServer").fulfillmentCore.customerShipping.methods.some(
    (item) => item.currency === "AED",
  ),
);
assert.deepEqual(Object.keys(JSON.parse(fs.readFileSync(projectContractPath))), ["tooling"]);
assert.equal(environmentProfile.profileCode, "dockerLocal");
assert.equal(environmentProfile.environment, "kickoffDockerLocal");
assert.equal(environmentProfile.bootstrapAdminPassword, "NodicsLocal@2026");
assert.equal(
  projectCommands["docker-local:preflight"].command,
  "project:container",
);
assert.equal(projectCommands["docker-local:preflight"].home, "project");
assert.deepEqual(projectCommands["docker-local:preflight"].args, [
  "dockerLocal",
  "preflight",
]);
assert.equal(
  environmentProfile.acceptance.urls.engagement,
  "http://127.0.0.1:5340",
);
assert.equal(
  environmentProfile.acceptance.urls.loyalty,
  "http://127.0.0.1:5360",
);
assert.equal(
  environmentProfile.acceptance.urls.commerceStaged,
  "http://127.0.0.1:5352",
);
assert.match(
  containerEnvironmentService,
  /BOOTSTRAP_ADMIN_PASSWORD: process\.env\.NODICS_DOCKER_ADMIN_PASSWORD \|\| profile\.bootstrapAdminPassword/,
);
assert.match(containerEnvironmentService, /readContainerEnvironmentProfile/);
assert.match(
  containerQualificationService,
  /NODICS_ENGAGEMENT_URL: urls\.engagement/,
);
assert.match(
  containerQualificationService,
  /NODICS_COMMERCE_STAGED_URL: process\.env\.NODICS_COMMERCE_STAGED_URL \|\| urls\.commerceStaged/,
);
assert.match(
  containerQualificationService,
  /NODICS_SERVICE_API_KEY: process\.env\.NODICS_SERVICE_API_KEY \|\| values\.BOOTSTRAP_SERVICE_API_KEY/,
);
assert.match(containerQualificationService, /selected\.acceptance\.commerceDataCommand/);
assert.equal(environmentProfile.acceptance.commerceDataCommand, "acceptance:agora-commerce-data");
assert.match(
  containerQualificationService,
  /NODICS_STOREFRONT_COMMERCE_DATA_EXECUTE/,
);
assert.match(
  containerQualificationService,
  /selected\.acceptance\.commercePublicationCommand/,
);
console.log("kickoffDockerLocal environment contract validated");

for (const server of ["wcmsStagedServer", "wcmsOnlineServer"]) {
  for (const owner of ["discoveryProjection", "wcmsExperience"]) {
    const engine = loadRuntime(server).search[owner];
    assert.equal(engine.options.enabled, true);
    assert.equal(engine.options.engine, "elastic");
    assert.equal(
      engine.elastic.connection.hosts[0],
      process.env.NODICS_ELASTICSEARCH_URL || "http://elasticsearch:9200",
    );
  }
}
