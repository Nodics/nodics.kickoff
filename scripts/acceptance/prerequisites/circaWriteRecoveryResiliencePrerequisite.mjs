/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/**
 * @module scripts/acceptance/prerequisites/circaWriteRecoveryResiliencePrerequisite
 * @description Refuses Circa E17 until at least two real owner commands expose the nTooling write-recovery contract.
 * @layer project-acceptance
 * @owner nodics.kickoff
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
export const CIRCA_WRITE_RECOVERY_SELECTION =
  "scripts/acceptance/fixtures/circa-write-recovery-resilience.json";

const candidateCommands = Object.freeze([
  "acceptance:enterprise-actor-owner",
  "acceptance:waste-management",
  "acceptance:commerce-publication",
  "acceptance:commerce-journey",
  "acceptance:loyalty-reward-checkout",
  "acceptance:coupon-acquisition",
  "acceptance:coupon-redemption",
  "acceptance:loyalty-participant-transfer",
  "acceptance:digital-whole-bundle-gift",
  "acceptance:digital-fixed-bundle-sale",
  "acceptance:digital-bundle-publication",
  "acceptance:bidding-auction",
  "acceptance:cronjob-execution",
  "acceptance:communication-source-delivery",
  "acceptance:coupon-acquisition-report",
  "acceptance:coupon-offer-lifecycle",
]);

function loadCommands(projectRoot, frameworkRoot) {
  return require(path.join(
    frameworkRoot,
    "nodics.foundation/modules/nTooling/src/service/defaultToolingCommandService",
  )).loadCommands(projectRoot);
}

function ownerContract(command, definition) {
  const sourceFile = definition?.sourcePath && definition?.script
    ? path.join(definition.sourcePath, definition.script)
    : null;
  const source = sourceFile && fs.existsSync(sourceFile) && fs.statSync(sourceFile).isFile()
    ? fs.readFileSync(sourceFile, "utf8")
    : "";
  const evidence = {
    command,
    sourceModule: definition?.sourceModule || null,
    acceptanceContract: definition?.acceptanceContract === true,
    stableOperationKey: source.includes("NODICS_RESILIENCE_OPERATION_KEY"),
    admittedFaultPhase: source.includes("NODICS_RESILIENCE_FAULT_PHASE"),
    reconciliationEvidence: /reconcil/iu.test(source),
    receiptEvidence: /receipt/iu.test(source),
  };
  return Object.freeze({
    ...evidence,
    qualified: evidence.acceptanceContract && evidence.sourceModule !== "nTooling" &&
      evidence.stableOperationKey && evidence.admittedFaultPhase &&
      evidence.reconciliationEvidence && evidence.receiptEvidence,
  });
}

function readSelection(projectRoot) {
  const file = path.join(projectRoot, CIRCA_WRITE_RECOVERY_SELECTION);
  if (!fs.existsSync(file)) return { present: false, operations: [], adapterCount: 0, validJson: false };
  try {
    const selection = JSON.parse(fs.readFileSync(file, "utf8"));
    const operations = Array.isArray(selection?.operations) ? selection.operations : [];
    return {
      present: true,
      validJson: true,
      contractVersion: selection?.contractVersion,
      operations,
      adapterCount: operations.filter(operation => {
        const adapter = operation?.checkpointAdapter;
        return typeof adapter === "string" && adapter.startsWith("scripts/acceptance/adapters/") &&
          fs.existsSync(path.join(projectRoot, adapter));
      }).length,
    };
  } catch {
    return { present: true, operations: [], adapterCount: 0, validJson: false };
  }
}

/**
 * Verifies source readiness only. It never infers installed state, arms a fault,
 * reads credentials or treats a generic idempotency key as recovery evidence.
 */
export async function inspectCircaWriteRecoveryResiliencePrerequisite(
  { projectRoot, frameworkRoot }, operation = {},
) {
  const commands = loadCommands(projectRoot, frameworkRoot);
  const contracts = candidateCommands.map(command => ownerContract(command, commands[command]));
  const qualified = contracts.filter(contract => contract.qualified);
  const selection = readSelection(projectRoot);
  const selectedCodes = selection.operations.map(item => item?.code).filter(Boolean);
  const selectedCommands = selection.operations.map(item => item?.ownerCommand).filter(Boolean);
  const selectedOwners = new Set(selectedCommands.map(command => commands[command]?.sourceModule).filter(Boolean));
  const approved = Array.isArray(operation.approvedOperations) ? operation.approvedOperations : [];
  const boundedRestartAvailable = fs.existsSync(path.join(
    frameworkRoot,
    "nodics.foundation/modules/nTooling/src/service/project/defaultProjectTopologyService.mjs",
  )) && fs.existsSync(path.join(projectRoot, "envs/kickoffLocal/config/properties.js"));
  const evidence = Object.freeze({
    selectionPath: CIRCA_WRITE_RECOVERY_SELECTION,
    selectionPresent: selection.present,
    selectionValidJson: selection.validJson,
    selectionContractVersion: selection.contractVersion || null,
    selectedOperationCount: selection.operations.length,
    checkpointAdapterCount: selection.adapterCount,
    explicitApprovedOperationCount: approved.length,
    candidateOwnerCommandCount: contracts.length,
    qualifiedOwnerCommandCount: qualified.length,
    qualifiedOwnerCommands: qualified.map(contract => contract.command),
    boundedRestartAvailable,
  });

  if (qualified.length < 2 || new Set(qualified.map(item => item.sourceModule)).size < 2) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_WRITE_RECOVERY_OWNER_CONTRACTS_REQUIRED", evidence });
  }
  if (!boundedRestartAvailable) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_WRITE_RECOVERY_BOUNDED_RESTART_REQUIRED", evidence });
  }
  if (!selection.present || !selection.validJson || selection.contractVersion !== 1 ||
      selection.operations.length < 2 || selectedOwners.size < 2) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_WRITE_RECOVERY_SELECTION_REQUIRED", evidence });
  }
  if (selection.adapterCount !== selection.operations.length ||
      selectedCommands.some(command => !qualified.some(contract => contract.command === command))) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_WRITE_RECOVERY_CHECKPOINT_ADAPTERS_REQUIRED", evidence });
  }
  if (new Set(selectedCodes).size !== selectedCodes.length || approved.length !== selectedCodes.length ||
      selectedCodes.some(code => !approved.includes(code))) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_WRITE_RECOVERY_OPERATION_APPROVALS_REQUIRED", evidence });
  }
  return Object.freeze({ ready: true, reasonCode: null, evidence });
}
