/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/**
 * @module scripts/acceptance/defaultProjectCircaEndToEndAcceptanceService
 * @description Coordinates approved Circa owner acceptance suites for kickoffLocal without owning their assertions.
 * @layer project-acceptance
 * @owner nodics.kickoff
 */
import crypto from "node:crypto";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { inspectCircaDigitalBundlePublicationPrerequisite } from "./prerequisites/circaDigitalBundlePublicationPrerequisite.mjs";
import { inspectCircaCouponReminderDeliveryPrerequisite } from "./prerequisites/circaCouponReminderDeliveryPrerequisite.mjs";
import { inspectCircaWriteRecoveryResiliencePrerequisite } from "./prerequisites/circaWriteRecoveryResiliencePrerequisite.mjs";

const require = createRequire(import.meta.url);

export const ACCEPTANCE_STATUSES = Object.freeze({
  PASS: "PASS",
  FAIL: "FAIL",
  BLOCKED: "BLOCKED",
  NOT_RUN: "NOT RUN",
});

/**
 * These are existing capability-owned commands. The coordinator supplies only
 * ordering and execution consent; each command retains its own fixtures,
 * authorization, assertions, defaults, idempotency and evidence semantics.
 */
export const OWNER_OPERATIONS = Object.freeze({
  "enterprise-actor-owner": Object.freeze({
    owner: "Profile",
    command: "acceptance:enterprise-actor-owner",
    arguments: ["--execute", "--selection=scripts/acceptance/fixtures/circa-enterprise-actor-owner.json"],
    mutation: "OWNER_API_WRITE",
    sourcePrerequisite:
      "Circa has no reviewed disposable membership, explicit related-Enterprise grant, foreign-tenant probe and matching project selection JSON.",
  }),
  "profile-runtime-grant-observation": Object.freeze({
    owner: "Profile",
    command: "acceptance:runtime-grants",
    arguments: [],
    mutation: "READ_ONLY",
  }),
  "waste-backoffice-observation": Object.freeze({
    owner: "Waste",
    command: "acceptance:waste-backoffice",
    arguments: [],
    mutation: "READ_ONLY",
  }),
  "waste-management-journey": Object.freeze({
    owner: "Waste",
    command: "acceptance:waste-management",
    arguments: ["--execute"],
    mutation: "OWNER_API_WRITE",
  }),
  "commerce-publication": Object.freeze({
    owner: "Product",
    command: "acceptance:commerce-publication",
    arguments: ["--execute", "--approve-publications", "--acceptance=circaCommercePublication"],
    mutation: "OWNER_API_WRITE",
  }),
  "commerce-journey": Object.freeze({
    owner: "Checkout",
    command: "acceptance:commerce-journey",
    arguments: ["--execute"],
    mutation: "OWNER_API_WRITE",
  }),
  "loyalty-reward-checkout": Object.freeze({
    owner: "Loyalty Reward Provider",
    command: "acceptance:loyalty-reward-checkout",
    arguments: ["--execute", "--acceptance=circaLoyaltyRewardCheckout"],
    mutation: "OWNER_API_WRITE",
  }),
  "coupon-acquisition": Object.freeze({
    owner: "Checkout Core",
    command: "acceptance:coupon-acquisition",
    arguments: ["--execute", "--acceptance=circaCouponAcquisition"],
    mutation: "OWNER_API_WRITE",
    sourcePrerequisite:
      "Circa has coupon products and a customer reward wallet, but no reviewed customer-owned certificate holdings and three-case acquisition profile for REWARDS, CERTIFICATES and BOTH.",
  }),
  "coupon-redemption": Object.freeze({
    owner: "Checkout Core",
    command: "acceptance:coupon-redemption",
    arguments: ["--execute", "--acceptance=circaCouponRedemption"],
    mutation: "OWNER_API_WRITE",
    sourcePrerequisite:
      "Circa has merchant outlets and staff identities, but no reviewed purchased coupon order, entitlement and receipt state or matching redemption profile.",
  }),
  "loyalty-participant-transfer": Object.freeze({
    owner: "Loyalty Wallet",
    command: "acceptance:loyalty-participant-transfer",
    arguments: ["--execute", "--selection=scripts/acceptance/fixtures/circa-loyalty-participant-transfer.json"],
    mutation: "OWNER_API_WRITE",
    // Wallet provisioning, funding and policy selection are separate governed setup.
    // The owner runner admits fresh participant sessions, wallets, balances and limits.
  }),
  "digital-whole-bundle-gift": Object.freeze({
    owner: "Digital Core",
    command: "acceptance:digital-whole-bundle-gift",
    arguments: ["--execute", "--acceptance=circaDigitalWholeBundleGift"],
    mutation: "OWNER_API_WRITE",
    sourcePrerequisite:
      "Circa has no reviewed whole-bundle gift profile backed by eight distinct eligible and unreserved owner components.",
  }),
  "digital-fixed-bundle-sale": Object.freeze({
    owner: "Digital Core",
    command: "acceptance:digital-fixed-bundle-sale",
    arguments: ["--execute", "--acceptance=circaDigitalFixedBundleSale"],
    mutation: "OWNER_API_WRITE",
    sourcePrerequisite:
      "Circa has no reviewed fixed-bundle sale profile backed by an existing Digital manifest, Product listing and Cart.",
  }),
  "digital-bundle-publication": Object.freeze({
    owner: "Digital Core",
    command: "acceptance:digital-bundle-publication",
    arguments: ["--execute", "--acceptance=circaDigitalBundlePublication"],
    mutation: "OWNER_API_WRITE",
    prerequisite: "circa-digital-bundle-publication",
  }),
  "bidding-auction": Object.freeze({
    owner: "Bidding",
    command: "acceptance:bidding-auction",
    arguments: ["--execute", "--selection=scripts/acceptance/fixtures/circa-bidding-auction.json",
      "--republish-adapter=scripts/acceptance/adapters/circaBiddingRepublishAdapter.mjs"],
    mutation: "OWNER_API_WRITE",
    sourcePrerequisite:
      "Circa has no installed auction projections, funded bidder holdings, short Local grace selection and qualified failed-award condition for the reviewed fixture.",
  }),
  "commerce-search-ranking": Object.freeze({
    owner: "Commerce Search",
    command: "acceptance:commerce-search-ranking",
    arguments: ["--execute", "--acceptance=circaCommerceSearchRanking"],
    mutation: "READ_ONLY",
    sourcePrerequisite:
      "Circa has no reviewed search-ranking profile backed by an indexed boosted and ordinary coupon order.",
  }),
  "digital-coupon-reminder-source": Object.freeze({
    owner: "Digital Core",
    command: "acceptance:digital-coupon-reminder-source",
    arguments: ["--execute", "--acceptance=circaDigitalCouponReminderSource"],
    mutation: "READ_ONLY",
    prerequisite: "circa-coupon-reminder-delivery",
  }),
  "coupon-reminder-cron-execution": Object.freeze({
    owner: "Cron",
    command: "acceptance:cronjob-execution",
    arguments: ["--execute", "--acceptance=circaCouponExpiryReminderCron"],
    mutation: "OWNER_API_WRITE",
    prerequisite: "circa-coupon-reminder-delivery",
    dependsOn: ["digital-coupon-reminder-source"],
  }),
  "coupon-reminder-communication-exercise": Object.freeze({
    owner: "Communication",
    command: "acceptance:communication-source-delivery",
    arguments: ["--execute", "--acceptance=circaCouponExpiryReminderCommunication", "--phase=exercise"],
    mutation: "OWNER_API_WRITE",
    prerequisite: "circa-coupon-reminder-delivery",
    dependsOn: ["coupon-reminder-cron-execution"],
  }),
  "coupon-reminder-communication-restart": Object.freeze({
    owner: "nTooling topology",
    adapter: "scripts/acceptance/adapters/circaCommunicationRuntimeRestartAdapter.mjs",
    mutation: "RUNTIME_RESTART",
    prerequisite: "circa-coupon-reminder-delivery",
    dependsOn: ["coupon-reminder-communication-exercise"],
  }),
  "coupon-reminder-communication-inspect": Object.freeze({
    owner: "Communication",
    command: "acceptance:communication-source-delivery",
    arguments: ["--execute", "--acceptance=circaCouponExpiryReminderCommunication", "--phase=inspect"],
    mutation: "READ_ONLY",
    prerequisite: "circa-coupon-reminder-delivery",
    dependsOn: ["coupon-reminder-communication-restart"],
  }),
  "coupon-acquisition-report": Object.freeze({
    owner: "Promotion",
    command: "acceptance:coupon-acquisition-report",
    arguments: ["--execute", "--acceptance=circaCouponAcquisitionReport"],
    mutation: "OWNER_API_WRITE",
    sourcePrerequisite:
      "Circa has no reviewed acquisition-report profile backed by an authorized channel refresh and protected projection.",
  }),
  "coupon-offer-lifecycle": Object.freeze({
    owner: "Promotion",
    command: "acceptance:coupon-offer-lifecycle",
    arguments: ["--execute", "--acceptance=circaCouponOfferLifecycle"],
    mutation: "OWNER_API_WRITE",
    sourcePrerequisite:
      "Circa has no reviewed lifecycle selection bound to canonical Promotion and Commerce operations for configured stock, owner allowance and participation withdrawal.",
  }),
  "coupon-catalogue-availability": Object.freeze({
    owner: "Product",
    command: "acceptance:coupon-catalogue-availability",
    arguments: ["--execute", "--acceptance=circaCouponCatalogueAvailability"],
    mutation: "READ_ONLY",
    sourcePrerequisite:
      "Circa has no reviewed available-versus-sold-out coupon catalogue profile backed by current Product owner state.",
  }),
  "commercial-agreement": Object.freeze({
    owner: "Commercial Agreement",
    command: "acceptance:commercial-agreement",
    arguments: ["--execute", "--acceptance=circaCommercialAgreement"],
    mutation: "READ_ONLY",
    sourcePrerequisite:
      "Circa has no reviewed commercial-agreement profile backed by retained fixed-price and subscription agreement histories.",
  }),
  "capability-registry": Object.freeze({
    owner: "BackOffice",
    command: "acceptance:capability-registry",
    arguments: ["--execute"],
    mutation: "OWNER_API_WRITE",
  }),
  "functional-journey": Object.freeze({
    owner: "nTooling composition",
    command: "acceptance:functional",
    arguments: ["--execute"],
    mutation: "OWNER_API_WRITE",
  }),
  "write-recovery-resilience": Object.freeze({
    owner: "nTooling composition",
    command: "acceptance:write-recovery-resilience",
    arguments: [
      "--execute",
      "--selection=scripts/acceptance/fixtures/circa-write-recovery-resilience.json",
      "--approve-fault-injection",
      "--approve-restarts",
    ],
    appendRunId: true,
    approvedOperations: Object.freeze([]),
    mutation: "OWNER_API_WRITE_AND_RUNTIME_RESTART",
    prerequisite: "circa-write-recovery-resilience",
    dependsOn: ["capability-registry", "functional-journey"],
  }),
});

const scenario = (packets, operations, gap, externalBoundary = null) => Object.freeze({
  packets, operations: Object.freeze(operations), gap, externalBoundary,
});

/** Project-only map from the approved E01-E17 plan to existing owner evidence. */
export const CIRCA_SCENARIOS = Object.freeze({
  E01: scenario("P01", ["enterprise-actor-owner"],
    "Profile now owns the exact actor/owner suite, but Circa lacks the reviewed disposable membership, explicit related-Enterprise grant, foreign-tenant probe and project selection required for live execution."),
  E02: scenario("P02", ["loyalty-participant-transfer"], null),
  E03: scenario("P03-P04", ["waste-backoffice-observation", "waste-management-journey", "commerce-publication",
    "digital-bundle-publication"],
  "Digital Core owns the complete reservation/publication proof, but Circa has no governed realized-carbon lot or valid project selection yet."),
  E04: scenario("P03", ["digital-whole-bundle-gift"], null),
  E05: scenario("P05", ["commerce-journey", "loyalty-reward-checkout", "digital-fixed-bundle-sale"], null),
  E06: scenario("P06", ["bidding-auction"], null),
  E07: scenario("P07-P08", ["coupon-acquisition"],
    "Checkout Core now owns the exact three-consideration acquisition and finality suite, but Circa lacks reviewed customer-owned certificate holdings and the matching project profile."),
  E08: scenario("P08-P10", ["coupon-offer-lifecycle", "coupon-catalogue-availability"],
    "Promotion and Product now own the exact lifecycle and catalogue suites, but Circa lacks reviewed lifecycle offers, sold-out catalogue state and the canonical Promotion operations adapter required for live execution."),
  E09: scenario("P09", ["coupon-redemption"],
    "Checkout Core now owns staff-recorded redemption, outlet authority and replay evidence, but Circa lacks reviewed purchased coupon state and the matching project profile."),
  E10: scenario("P10-P11", ["commerce-search-ranking"], null),
  E11: scenario("P12", [],
    "No installed Loyalty partner-conversion runner is qualified for this deployment.",
    "Real partner conversion requires a separately qualified external Enterprise adapter."),
  E12: scenario("P13", ["digital-coupon-reminder-source", "coupon-reminder-cron-execution",
    "coupon-reminder-communication-exercise", "coupon-reminder-communication-restart",
    "coupon-reminder-communication-inspect"], null),
  E13: scenario("P13", ["coupon-acquisition-report"], null),
  E14: scenario("P14", ["commercial-agreement"], null),
  E15: scenario("P15", ["waste-management-journey"],
    "No installed Waste Carbon runner proves holdings allocation, reservation and transfer against kickoffLocal.",
    "Positive carbon issuance and allocation require separately qualified registry/provider evidence."),
  E16: scenario("P16", ["waste-management-journey"],
    "No installed Waste Reward runner proves payment-evidence qualification and contributor reward release.",
    "Positive material-value release requires qualified recycler-payment evidence."),
  E17: scenario("P17", ["capability-registry", "functional-journey", "write-recovery-resilience"],
    "nTooling now owns the cross-owner restart/fault coordinator, but no two Circa owner commands yet expose its stable operation-key, fault-injection and reconciliation contract."),
});

const SCENARIO_CODES = Object.freeze(Object.keys(CIRCA_SCENARIOS));
const OPERATION_CODES = Object.freeze(Object.keys(OWNER_OPERATIONS));

/** Returns CLI help without resolving configuration, credentials or runtimes. */
export function helpText() {
  return [
    "Circa kickoffLocal E01-E17 acceptance coordinator",
    "",
    "Dry run (default):",
    "  nodics project:run acceptance:circa-end-to-end [--scenario=E01,E02]",
    "",
    "Execute selected owner suites:",
    "  nodics project:run acceptance:circa-end-to-end --execute --run-id=<stable-id> \\",
    "    --scenario=E02 --approve=loyalty-participant-transfer",
    "",
    "Every owner operation requires its own --approve=<operation> value. Shared",
    "operations execute once per coordinator run. The coordinator never retries a",
    "failed or uncertain owner command and never imports or funds wallets. E12",
    "performs its separately approved topology restart only after Communication",
    "exercise succeeds; it never invents jobs, receipts or provider qualification.",
    "E17 delegates to nTooling only after source proves at least two distinct",
    "owners expose genuine fault and reconciliation contracts.",
    "",
    `Scenarios: ${SCENARIO_CODES.join(", ")}`,
    `Operations: ${OPERATION_CODES.join(", ")}`,
  ].join("\n");
}

/** Parses only coordinator controls; business policy remains capability-owned. */
export function parseArguments(argv = []) {
  const parsed = { execute: false, help: false, runId: null, scenarios: [], approvals: [] };
  for (const argument of argv) {
    if (argument === "--help" || argument === "-h") parsed.help = true;
    else if (argument === "--execute") parsed.execute = true;
    else if (argument.startsWith("--run-id=")) parsed.runId = argument.slice(9);
    else if (argument.startsWith("--scenario=")) parsed.scenarios.push(...argument.slice(11).split(",").filter(Boolean));
    else if (argument.startsWith("--approve=")) parsed.approvals.push(argument.slice(10));
    else throw new Error(`Unknown Circa E2E coordinator option: ${argument}`);
  }
  parsed.scenarios = [...new Set(parsed.scenarios.length ? parsed.scenarios : SCENARIO_CODES)];
  parsed.approvals = [...new Set(parsed.approvals)];
  for (const code of parsed.scenarios) {
    if (!CIRCA_SCENARIOS[code]) throw new Error(`Unknown Circa E2E scenario: ${code}`);
  }
  for (const code of parsed.approvals) {
    if (!OWNER_OPERATIONS[code]) throw new Error(`Unknown Circa owner operation approval: ${code}`);
  }
  if (parsed.execute && !/^[A-Za-z0-9][A-Za-z0-9._:-]{0,95}$/u.test(parsed.runId || "")) {
    throw new Error("--execute requires a stable --run-id using 1-96 letters, digits, dot, underscore, colon or hyphen");
  }
  return parsed;
}

const digest = value => crypto.createHash("sha256").update(String(value)).digest("hex");

/** Redacts bounded owner output before it enters coordinator evidence. */
export function redactText(value, limit = 4000) {
  const redacted = String(value || "")
    .replace(/(["']?(?:authorization|auth[_-]?token|access[_-]?token|token|api[_-]?key|password|secret|cookie|credential)["']?\s*[:=]\s*)(["'])(.*?)\2/giu,
      "$1$2[REDACTED]$2")
    .replace(/(authorization\s*[:=]\s*)(bearer\s+)?[^\s,;]+/giu, "$1[REDACTED]")
    .replace(/((?:auth[_-]?token|access[_-]?token|token|api[_-]?key|password|secret|cookie|credential)\s*[:=]\s*)[^\s,;]+/giu,
      "$1[REDACTED]")
    .replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gu, "Bearer [REDACTED]")
    .replace(/([a-z][a-z0-9+.-]*:\/\/)[^\s/@]+@/giu, "$1[REDACTED]@");
  return redacted.length > limit ? `${redacted.slice(0, limit)}\n[TRUNCATED]` : redacted;
}

/** Resolves only roots already supplied by the nTooling project executor. */
export function resolveExecutionRoots(environment = process.env) {
  const projectRoot = path.resolve(environment.NODICS_PROJECT_ROOT || process.cwd());
  const foundationRoot = path.dirname(require.resolve("nodics.foundation/package.json"));
  const frameworkRoot = path.resolve(environment.NODICS_FRAMEWORK_ROOT || path.dirname(foundationRoot));
  return { projectRoot, frameworkRoot };
}

/** Runs one existing owner command exactly once; no retry or owner assertion is added here. */
export function executeOwnerOperation(operation, context, spawn = spawnSync) {
  const bridge = path.join(
    context.frameworkRoot,
    "nodics.foundation/modules/nTooling/bin/nodics-project.js",
  );
  const argumentsList = operation.arguments.map(argument =>
    argument.replaceAll("{runId}", context.runId).replaceAll("{operationKey}", context.operationKey));
  if (operation.appendRunId === true) argumentsList.push(`--run-id=${context.runId}`);
  for (const code of operation.approvedOperations || []) argumentsList.push(`--approve-operation=${code}`);
  const result = spawn(process.execPath, [bridge, "project:run", operation.command, ...argumentsList], {
    cwd: context.projectRoot,
    env: {
      ...process.env,
      NODICS_PROJECT_ROOT: context.projectRoot,
      NODICS_FRAMEWORK_ROOT: context.frameworkRoot,
      NODICS_ENVIRONMENT: "kickoffLocal",
      ENV: "kickoffLocal",
      NODICS_ACCEPTANCE_COORDINATOR_RUN_ID: context.runId,
      NODICS_ACCEPTANCE_COORDINATOR_OPERATION_KEY: context.operationKey,
    },
    encoding: "utf8",
    maxBuffer: 1024 * 1024,
  });
  if (result.error) throw result.error;
  return { exitCode: result.status === null ? 1 : result.status, stdout: result.stdout, stderr: result.stderr };
}

/** Runs either a framework owner command or the one explicit project runtime boundary step. */
export async function executeCoordinatorOperation(operation, context) {
  if (operation.adapter) {
    const file = path.resolve(context.projectRoot, operation.adapter);
    const relative = path.relative(context.projectRoot, file);
    if (relative.startsWith("..") || path.isAbsolute(relative) ||
        operation.adapter !== "scripts/acceptance/adapters/circaCommunicationRuntimeRestartAdapter.mjs") {
      throw new Error("UNAPPROVED_CIRCA_ACCEPTANCE_ADAPTER");
    }
    const adapter = await import(pathToFileURL(file).href);
    return adapter.restartCircaCommunicationRuntime(context);
  }
  return executeOwnerOperation(operation, context);
}

/** Classifies a scenario without weakening missing-owner or external boundaries. */
export function classifyScenario({ execute, operationResults, scenarioDefinition }) {
  if (!execute) return ACCEPTANCE_STATUSES.NOT_RUN;
  if (operationResults.some(result => result.status === ACCEPTANCE_STATUSES.FAIL)) return ACCEPTANCE_STATUSES.FAIL;
  if (operationResults.some(result => result.status !== ACCEPTANCE_STATUSES.PASS)) return ACCEPTANCE_STATUSES.BLOCKED;
  if (scenarioDefinition.gap || scenarioDefinition.externalBoundary) return ACCEPTANCE_STATUSES.BLOCKED;
  return ACCEPTANCE_STATUSES.PASS;
}

/** Classifies an owner command by its exact process result. */
export function classifyOwnerOperation(operation, result) {
  const exitCode = Number.isInteger(result?.exitCode) ? result.exitCode : 1;
  if (exitCode === 0) return { status: ACCEPTANCE_STATUSES.PASS };
  return { status: ACCEPTANCE_STATUSES.FAIL };
}

const PROJECT_PREREQUISITES = Object.freeze({
  "circa-digital-bundle-publication": inspectCircaDigitalBundlePublicationPrerequisite,
  "circa-coupon-reminder-delivery": inspectCircaCouponReminderDeliveryPrerequisite,
  "circa-write-recovery-resilience": inspectCircaWriteRecoveryResiliencePrerequisite,
});

/** Coordinates selected scenarios and returns redacted, bounded evidence. */
export async function runCircaEndToEndAcceptance(parsed, dependencies = {}) {
  const roots = dependencies.roots || resolveExecutionRoots(dependencies.environment);
  const runReference = parsed.runId ? digest(parsed.runId).slice(0, 16) : null;
  const selectedDefinitions = parsed.scenarios.map(code => [code, CIRCA_SCENARIOS[code]]);
  const selectedOperations = [...new Set(selectedDefinitions.flatMap(([, definition]) => definition.operations))];
  const approved = new Set(parsed.approvals);
  const operationResults = {};
  const runOwner = dependencies.executeOperation || executeCoordinatorOperation;
  const executionPreflight = {};

  if (parsed.execute) {
    for (const code of selectedOperations) {
      const operation = OWNER_OPERATIONS[code];
      if (!approved.has(code)) {
        executionPreflight[code] = { reason: `Missing explicit --approve=${code}.` };
      } else if (operation.sourcePrerequisite) {
        executionPreflight[code] = { reason: operation.sourcePrerequisite };
      } else if (operation.prerequisite) {
        const inspect = PROJECT_PREREQUISITES[operation.prerequisite];
        if (!inspect) throw new Error(`Unknown Circa project prerequisite: ${operation.prerequisite}`);
        const prerequisite = await inspect(roots, operation);
        if (!prerequisite.ready) executionPreflight[code] = {
          reason: prerequisite.reasonCode,
          prerequisiteEvidence: prerequisite.evidence,
        };
      }
    }
    for (const [, definition] of selectedDefinitions) {
      const blocker = definition.operations.find(code => executionPreflight[code]);
      if (!blocker) continue;
      for (const code of definition.operations) {
        if (!executionPreflight[code]) executionPreflight[code] = {
          reason: `Scenario preflight blocked before owner mutation: ${blocker}.`,
        };
      }
    }
  }

  for (const code of selectedOperations) {
    const operation = OWNER_OPERATIONS[code];
    const operationKey = digest(`circa-e2e|kickoffLocal|${parsed.runId || "dry-run"}|${code}`);
    if (!parsed.execute) {
      operationResults[code] = { code, owner: operation.owner, command: operation.command || null,
        adapter: operation.adapter || null,
        mutation: operation.mutation, operationKey, status: ACCEPTANCE_STATUSES.NOT_RUN,
        reason: "Dry run; no owner command executed." };
      continue;
    }
    if (executionPreflight[code]) {
      operationResults[code] = { code, owner: operation.owner, command: operation.command || null,
        adapter: operation.adapter || null,
        mutation: operation.mutation, operationKey, status: ACCEPTANCE_STATUSES.BLOCKED,
        ...executionPreflight[code] };
      continue;
    }
    const dependency = (operation.dependsOn || []).find(dependencyCode =>
      operationResults[dependencyCode]?.status !== ACCEPTANCE_STATUSES.PASS);
    if (dependency) {
      operationResults[code] = { code, owner: operation.owner, command: operation.command || null,
        adapter: operation.adapter || null,
        mutation: operation.mutation, operationKey, status: ACCEPTANCE_STATUSES.BLOCKED,
        reason: `Required prior operation did not pass: ${dependency}.` };
      continue;
    }
    try {
      const result = await runOwner(operation, { ...roots, runId: parsed.runId, operationKey });
      const exitCode = Number.isInteger(result?.exitCode) ? result.exitCode : 1;
      const classification = classifyOwnerOperation(operation, result);
      operationResults[code] = {
        code, owner: operation.owner, command: operation.command || null,
        adapter: operation.adapter || null, mutation: operation.mutation,
        operationKey, ...classification,
        exitCode,
        stdoutSha256: digest(result?.stdout || ""),
        stderrSha256: digest(result?.stderr || ""),
        stdout: redactText(result?.stdout),
        stderr: redactText(result?.stderr),
      };
    } catch (error) {
      operationResults[code] = {
        code, owner: operation.owner, command: operation.command || null,
        adapter: operation.adapter || null, mutation: operation.mutation,
        operationKey, status: ACCEPTANCE_STATUSES.FAIL, reason: redactText(error?.message || error),
      };
    }
  }

  const scenarios = selectedDefinitions.map(([code, definition]) => {
    const evidence = definition.operations.map(operationCode => operationResults[operationCode]);
    return {
      code,
      packets: definition.packets,
      status: classifyScenario({ execute: parsed.execute, operationResults: evidence, scenarioDefinition: definition }),
      ownerOperations: definition.operations,
      gap: definition.gap,
      externalBoundary: definition.externalBoundary,
    };
  });
  const summary = Object.values(ACCEPTANCE_STATUSES).reduce((counts, status) => {
    counts[status] = scenarios.filter(item => item.status === status).length;
    return counts;
  }, {});
  return {
    schemaVersion: "1.0.0",
    acceptance: "Circa E01-E17",
    environment: "kickoffLocal",
    mode: parsed.execute ? "EXECUTE" : "DRY_RUN",
    runReference,
    idempotency: "Owner suites retain operation semantics; this coordinator executes each approved command once and never retries.",
    externalProviderQualification: "REFUSED_BY_COORDINATOR",
    operations: selectedOperations.map(code => operationResults[code]),
    scenarios,
    summary,
  };
}

/** CLI entrypoint used by nTooling project acceptance discovery. */
export async function main(argv = process.argv.slice(2), dependencies = {}) {
  const parsed = parseArguments(argv);
  if (parsed.help) return { help: helpText(), exitCode: 0 };
  const report = await runCircaEndToEndAcceptance(parsed, dependencies);
  const exitCode = report.summary[ACCEPTANCE_STATUSES.FAIL] > 0 ? 1 :
    report.summary[ACCEPTANCE_STATUSES.BLOCKED] > 0 && parsed.execute ? 2 : 0;
  return { report, exitCode };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const result = await main();
    console.log(result.help || JSON.stringify(result.report, null, 2));
    process.exitCode = result.exitCode;
  } catch (error) {
    console.error(redactText(error?.message || error));
    process.exitCode = 1;
  }
}
