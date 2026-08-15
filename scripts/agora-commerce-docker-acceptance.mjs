#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dockerEnvPath = path.join(projectRoot, "envs/kickoffDockerLocal/generated/docker.env");

function readDockerEnvironment() {
  if (!fs.existsSync(dockerEnvPath)) {
    throw new Error("Docker Local environment is not prepared. Run npm run docker-local:preflight first.");
  }
  const values = {};
  for (const line of fs.readFileSync(dockerEnvPath, "utf8").split(/\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const index = line.indexOf("=");
    if (index <= 0) continue;
    values[line.slice(0, index)] = line.slice(index + 1);
  }
  return values;
}

const values = readDockerEnvironment();
const environment = {
  ...process.env,
  ...values,
  NODICS_ACCEPTANCE_RUNTIME: "kickoffDockerLocal",
  NODICS_PLATFORM_URL: process.env.NODICS_PLATFORM_URL || "http://127.0.0.1:5300",
  NODICS_COMMERCE_URL: process.env.NODICS_COMMERCE_URL || "http://127.0.0.1:5350",
  AXIS_ORIGIN: process.env.AXIS_ORIGIN || "http://127.0.0.1:4100",
  AXIS_LOGIN_ID: process.env.AXIS_LOGIN_ID || "admin",
  AXIS_PASSWORD: process.env.AXIS_PASSWORD || values.BOOTSTRAP_ADMIN_PASSWORD,
  NODICS_ACCEPTANCE_READY_TIMEOUT_MS: process.env.NODICS_ACCEPTANCE_READY_TIMEOUT_MS || "30000",
};

const result = spawnSync(process.execPath, ["scripts/agora-commerce-acceptance.mjs"], {
  cwd: projectRoot,
  env: environment,
  stdio: "inherit",
});

process.exitCode = result.status ?? 1;
