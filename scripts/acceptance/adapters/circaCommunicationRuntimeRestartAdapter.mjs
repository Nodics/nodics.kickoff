/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/**
 * @module scripts/acceptance/adapters/circaCommunicationRuntimeRestartAdapter
 * @description Restarts the governed kickoffLocal topology between Communication exercise and persisted inspection.
 * @layer project-acceptance
 * @owner nodics.kickoff
 */
import path from "node:path";
import { execFile, spawn } from "node:child_process";
import { promisify } from "node:util";
import { pathToFileURL } from "node:url";

const executeFile = promisify(execFile);
const pause = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

async function waitForReadiness(assertReady, timeoutMs, intervalMs) {
  const deadline = Date.now() + timeoutMs;
  let lastError = "unavailable";
  while (Date.now() <= deadline) {
    try {
      const result = await assertReady();
      if (Array.isArray(result) && result.length === 2) return result;
    } catch (error) {
      lastError = error?.message || String(error);
    }
    await pause(intervalMs);
  }
  throw new Error(`E12 topology restart did not become ready: ${lastError}`);
}

/** Uses nTooling's existing topology lifecycle; no runtime process or readiness policy is reimplemented here. */
export async function restartCircaCommunicationRuntime(context, dependencies = {}) {
  const projectRoot = path.resolve(context.projectRoot);
  const frameworkRoot = path.resolve(context.frameworkRoot);
  const topologyFile = path.join(
    frameworkRoot,
    "nodics.foundation/modules/nTooling/src/service/project/defaultProjectTopologyService.mjs",
  );
  const defaults = (await import(pathToFileURL(path.join(
    frameworkRoot,
    "nodics.foundation/modules/nTooling/config/properties.js",
  )).href)).default?.tooling?.acceptance?.writeRecoveryResilience;
  const timeoutMs = defaults?.restartTimeoutMs;
  const intervalMs = defaults?.readinessIntervalMs;
  if (!Number.isSafeInteger(timeoutMs) || !Number.isSafeInteger(intervalMs)) {
    throw new Error("NTOOLING_RESTART_POLICY_REQUIRED");
  }
  const environment = {
    ...process.env,
    NODICS_PROJECT_ROOT: projectRoot,
    NODICS_FRAMEWORK_ROOT: frameworkRoot,
    NODICS_ENVIRONMENT: "kickoffLocal",
    ENV: "kickoffLocal",
    NODICS_ACCEPTANCE_COORDINATOR_RUN_ID: context.runId,
    NODICS_ACCEPTANCE_COORDINATOR_OPERATION_KEY: context.operationKey,
  };
  const topology = dependencies.topology || await import(pathToFileURL(topologyFile).href);
  const assertReady = dependencies.assertReady || (() => topology.assertTopologyReadiness(["platform", "engagement"]));
  const stop = dependencies.stop || (() => executeFile(process.execPath, [topologyFile, "stop"], {
    cwd: projectRoot,
    env: environment,
    timeout: timeoutMs,
    maxBuffer: 1024 * 1024,
  }));
  const start = dependencies.start || (() => {
    const child = spawn(process.execPath, [topologyFile, "start"], {
      cwd: projectRoot,
      env: environment,
      detached: true,
      stdio: "ignore",
    });
    child.unref();
    return child.pid;
  });

  await assertReady();
  await stop();
  const supervisorPid = await start();
  await waitForReadiness(assertReady, timeoutMs, intervalMs);
  return {
    exitCode: 0,
    stdout: JSON.stringify({
      contractVersion: 1,
      state: "PASSED",
      environment: "kickoffLocal",
      restartScope: "kickoffLocal-topology",
      readinessRoles: ["platform", "engagement"],
      supervisorStarted: Number.isInteger(supervisorPid),
    }),
    stderr: "",
  };
}
