/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/**
 * @module test/circaEndToEndAcceptanceCoordinator
 * @description Verifies the project-only Circa coordinator's consent, evidence and ownership boundaries.
 * @layer test
 * @owner nodics.kickoff
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  ACCEPTANCE_STATUSES,
  CIRCA_SCENARIOS,
  OWNER_OPERATIONS,
  classifyOwnerOperation,
  classifyScenario,
  executeOwnerOperation,
  helpText,
  main,
  parseArguments,
  redactText,
  runCircaEndToEndAcceptance,
} from "../scripts/acceptance/defaultProjectCircaEndToEndAcceptanceService.mjs";
import { inspectCircaDigitalBundlePublicationPrerequisite } from
  "../scripts/acceptance/prerequisites/circaDigitalBundlePublicationPrerequisite.mjs";
import { inspectCircaCouponReminderDeliveryPrerequisite } from
  "../scripts/acceptance/prerequisites/circaCouponReminderDeliveryPrerequisite.mjs";
import { inspectCircaWriteRecoveryResiliencePrerequisite } from
  "../scripts/acceptance/prerequisites/circaWriteRecoveryResiliencePrerequisite.mjs";
import { restartCircaCommunicationRuntime } from
  "../scripts/acceptance/adapters/circaCommunicationRuntimeRestartAdapter.mjs";

const roots = { projectRoot: "/project", frameworkRoot: "/framework" };
const require = createRequire(import.meta.url);
const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const foundationRoot = path.dirname(require.resolve("nodics.foundation/package.json"));

test("dry run covers E01-E17 without executing owner operations", async () => {
  let calls = 0;
  const parsed = parseArguments([]);
  const report = await runCircaEndToEndAcceptance(parsed, {
    roots,
    executeOperation: async () => { calls += 1; },
  });
  assert.deepEqual(parsed.scenarios, Object.keys(CIRCA_SCENARIOS));
  assert.equal(calls, 0);
  assert.equal(report.environment, "kickoffLocal");
  assert.equal(report.mode, "DRY_RUN");
  assert.equal(report.summary[ACCEPTANCE_STATUSES.NOT_RUN], 17);
  assert(report.operations.every(operation => operation.status === ACCEPTANCE_STATUSES.NOT_RUN));
});

test("help is inert and documents execute plus per-operation approval", async () => {
  let calls = 0;
  const result = await main(["--help"], {
    roots,
    executeOperation: async () => { calls += 1; },
  });
  assert.equal(result.exitCode, 0);
  assert.match(result.help, /--execute/);
  assert.match(result.help, /--approve=<operation>/);
  assert.match(helpText(), /E12/);
  assert.match(helpText(), /separately approved topology restart/);
  assert.equal(calls, 0);
});

test("execution requires a stable run id and validates scenario and approval names", () => {
  assert.throws(() => parseArguments(["--execute"]), /requires a stable --run-id/);
  assert.throws(() => parseArguments(["--scenario=E18"]), /Unknown Circa E2E scenario/);
  assert.throws(() => parseArguments(["--approve=made-up"]), /Unknown Circa owner operation approval/);
  assert.throws(() => parseArguments(["--token=secret"]), /Unknown Circa E2E coordinator option/);
});

test("unapproved operations stay blocked and are never invoked", async () => {
  let calls = 0;
  const report = await runCircaEndToEndAcceptance(
    parseArguments(["--execute", "--run-id=run-1", "--scenario=E01"]),
    { roots, executeOperation: async () => { calls += 1; } },
  );
  assert.equal(calls, 0);
  assert.equal(report.operations[0].status, ACCEPTANCE_STATUSES.BLOCKED);
  assert.equal(report.scenarios[0].status, ACCEPTANCE_STATUSES.BLOCKED);
});

test("owner execution delegates through the framework bridge with kickoffLocal correlation", () => {
  let invocation;
  const result = executeOwnerOperation(OWNER_OPERATIONS["commerce-journey"], {
    projectRoot: "/project",
    frameworkRoot: "/framework",
    runId: "run-bridge",
    operationKey: "operation-key",
  }, (command, args, options) => {
    invocation = { command, args, options };
    return { status: 0, stdout: "pass", stderr: "" };
  });
  assert.equal(result.exitCode, 0);
  assert.equal(invocation.command, process.execPath);
  assert.deepEqual(invocation.args, [
    "/framework/nodics.foundation/modules/nTooling/bin/nodics-project.js",
    "project:run",
    "acceptance:commerce-journey",
    "--execute",
  ]);
  assert.equal(invocation.options.cwd, "/project");
  assert.equal(invocation.options.env.ENV, "kickoffLocal");
  assert.equal(invocation.options.env.NODICS_ENVIRONMENT, "kickoffLocal");
  assert.equal(invocation.options.env.NODICS_ACCEPTANCE_COORDINATOR_OPERATION_KEY, "operation-key");
});

test("Circa publication delegates to Product with the named project-owned acceptance profile", () => {
  let invocation;
  executeOwnerOperation(OWNER_OPERATIONS["commerce-publication"], {
    projectRoot: "/project",
    frameworkRoot: "/framework",
    runId: "run-publication",
    operationKey: "publication-operation-key",
  }, (command, args, options) => {
    invocation = { command, args, options };
    return { status: 0, stdout: "pass", stderr: "" };
  });
  assert.deepEqual(invocation.args, [
    "/framework/nodics.foundation/modules/nTooling/bin/nodics-project.js",
    "project:run",
    "acceptance:commerce-publication",
    "--execute",
    "--approve-publications",
    "--acceptance=circaCommercePublication",
  ]);
});

test("Circa checkout delegates to Loyalty with the named project-owned acceptance profile", () => {
  let invocation;
  executeOwnerOperation(OWNER_OPERATIONS["loyalty-reward-checkout"], {
    projectRoot: "/project",
    frameworkRoot: "/framework",
    runId: "run-loyalty-checkout",
    operationKey: "loyalty-checkout-operation-key",
  }, (command, args, options) => {
    invocation = { command, args, options };
    return { status: 0, stdout: "pass", stderr: "" };
  });
  assert.deepEqual(invocation.args, [
    "/framework/nodics.foundation/modules/nTooling/bin/nodics-project.js",
    "project:run",
    "acceptance:loyalty-reward-checkout",
    "--execute",
    "--acceptance=circaLoyaltyRewardCheckout",
  ]);
});

test("new Circa owner operations retain project selections outside framework defaults", () => {
  assert.deepEqual(OWNER_OPERATIONS["enterprise-actor-owner"].arguments, [
    "--execute", "--selection=scripts/acceptance/fixtures/circa-enterprise-actor-owner.json",
  ]);
  assert.equal(OWNER_OPERATIONS["enterprise-actor-owner"].command, "acceptance:enterprise-actor-owner");
  assert.equal(OWNER_OPERATIONS["enterprise-actor-owner"].mutation, "OWNER_API_WRITE");
  assert.deepEqual(OWNER_OPERATIONS["loyalty-participant-transfer"].arguments, [
    "--execute", "--selection=scripts/acceptance/fixtures/circa-loyalty-participant-transfer.json",
  ]);
  assert.deepEqual(OWNER_OPERATIONS["bidding-auction"].arguments, [
    "--execute", "--selection=scripts/acceptance/fixtures/circa-bidding-auction.json",
    "--republish-adapter=scripts/acceptance/adapters/circaBiddingRepublishAdapter.mjs",
  ]);
  assert.equal(OWNER_OPERATIONS["digital-whole-bundle-gift"].command, "acceptance:digital-whole-bundle-gift");
  assert.equal(OWNER_OPERATIONS["digital-fixed-bundle-sale"].command, "acceptance:digital-fixed-bundle-sale");
  assert.deepEqual(OWNER_OPERATIONS["digital-bundle-publication"].arguments, [
    "--execute", "--acceptance=circaDigitalBundlePublication",
  ]);
  assert.equal(OWNER_OPERATIONS["commerce-search-ranking"].mutation, "READ_ONLY");
  assert.equal(OWNER_OPERATIONS["commercial-agreement"].mutation, "READ_ONLY");
  assert.deepEqual(OWNER_OPERATIONS["coupon-offer-lifecycle"].arguments, [
    "--execute", "--acceptance=circaCouponOfferLifecycle",
  ]);
  assert.deepEqual(OWNER_OPERATIONS["coupon-catalogue-availability"].arguments, [
    "--execute", "--acceptance=circaCouponCatalogueAvailability",
  ]);
  assert.equal(OWNER_OPERATIONS["coupon-offer-lifecycle"].mutation, "OWNER_API_WRITE");
  assert.equal(OWNER_OPERATIONS["coupon-catalogue-availability"].mutation, "READ_ONLY");
  assert.deepEqual(OWNER_OPERATIONS["coupon-acquisition"].arguments, [
    "--execute", "--acceptance=circaCouponAcquisition",
  ]);
  assert.deepEqual(OWNER_OPERATIONS["coupon-redemption"].arguments, [
    "--execute", "--acceptance=circaCouponRedemption",
  ]);
  assert.equal(OWNER_OPERATIONS["coupon-acquisition"].command, "acceptance:coupon-acquisition");
  assert.equal(OWNER_OPERATIONS["coupon-redemption"].command, "acceptance:coupon-redemption");
  assert.equal(OWNER_OPERATIONS["coupon-acquisition"].mutation, "OWNER_API_WRITE");
  assert.equal(OWNER_OPERATIONS["coupon-redemption"].mutation, "OWNER_API_WRITE");
});

test("E12 composes Digital, Cron and Communication in owner-contract order", () => {
  assert.deepEqual(CIRCA_SCENARIOS.E12.operations, [
    "digital-coupon-reminder-source",
    "coupon-reminder-cron-execution",
    "coupon-reminder-communication-exercise",
    "coupon-reminder-communication-restart",
    "coupon-reminder-communication-inspect",
  ]);
  assert.deepEqual(OWNER_OPERATIONS["coupon-reminder-cron-execution"].arguments, [
    "--execute", "--acceptance=circaCouponExpiryReminderCron",
  ]);
  assert.deepEqual(OWNER_OPERATIONS["coupon-reminder-communication-exercise"].arguments, [
    "--execute", "--acceptance=circaCouponExpiryReminderCommunication", "--phase=exercise",
  ]);
  assert.equal(
    OWNER_OPERATIONS["coupon-reminder-communication-restart"].adapter,
    "scripts/acceptance/adapters/circaCommunicationRuntimeRestartAdapter.mjs",
  );
  assert.deepEqual(OWNER_OPERATIONS["coupon-reminder-communication-inspect"].arguments, [
    "--execute", "--acceptance=circaCouponExpiryReminderCommunication", "--phase=inspect",
  ]);
});

test("E12 owner commands resolve from their framework modules", () => {
  const commands = require(path.join(
    foundationRoot,
    "modules/nTooling/src/service/command/defaultProjectCommandService",
  )).resolveCommands(projectRoot);
  for (const command of [
    "acceptance:digital-coupon-reminder-source",
    "acceptance:cronjob-execution",
    "acceptance:communication-source-delivery",
  ]) {
    assert.equal(commands[command].type, "frameworkCommand", command);
    assert.equal(commands[command].home, "project", command);
    assert.equal(commands[command].command, command);
  }
});

test("E17 composes the canonical nTooling recovery coordinator after baseline evidence", () => {
  assert.deepEqual(CIRCA_SCENARIOS.E17.operations, [
    "capability-registry",
    "functional-journey",
    "write-recovery-resilience",
  ]);
  const operation = OWNER_OPERATIONS["write-recovery-resilience"];
  assert.equal(operation.command, "acceptance:write-recovery-resilience");
  assert.equal(operation.prerequisite, "circa-write-recovery-resilience");
  assert.equal(operation.appendRunId, true);
  assert.deepEqual(operation.approvedOperations, []);
  assert.deepEqual(operation.arguments, [
    "--execute",
    "--selection=scripts/acceptance/fixtures/circa-write-recovery-resilience.json",
    "--approve-fault-injection",
    "--approve-restarts",
  ]);
});

test("E17 owner command resolves from nTooling and receives the stable coordinator run id", () => {
  const commands = require(path.join(
    foundationRoot,
    "modules/nTooling/src/service/command/defaultProjectCommandService",
  )).resolveCommands(projectRoot);
  assert.equal(commands["acceptance:write-recovery-resilience"].type, "frameworkCommand");
  assert.equal(commands["acceptance:write-recovery-resilience"].home, "project");

  let invocation;
  executeOwnerOperation(OWNER_OPERATIONS["write-recovery-resilience"], {
    projectRoot: "/project",
    frameworkRoot: "/framework",
    runId: "circa-e17-run",
    operationKey: "coordinator-key",
  }, (command, args, options) => {
    invocation = { command, args, options };
    return { status: 0, stdout: "pass", stderr: "" };
  });
  assert.deepEqual(invocation.args, [
    "/framework/nodics.foundation/modules/nTooling/bin/nodics-project.js",
    "project:run",
    "acceptance:write-recovery-resilience",
    "--execute",
    "--selection=scripts/acceptance/fixtures/circa-write-recovery-resilience.json",
    "--approve-fault-injection",
    "--approve-restarts",
    "--run-id=circa-e17-run",
  ]);
});

test("E17 remains source-blocked without fabricating owner fault contracts or adapters", async () => {
  const { frameworkRoot } = require("./helpers/configuration.js");
  const prerequisite = await inspectCircaWriteRecoveryResiliencePrerequisite(
    { projectRoot, frameworkRoot },
    OWNER_OPERATIONS["write-recovery-resilience"],
  );
  assert.equal(prerequisite.ready, false);
  assert.equal(prerequisite.reasonCode, "CIRCA_WRITE_RECOVERY_OWNER_CONTRACTS_REQUIRED");
  assert.equal(prerequisite.evidence.selectionPresent, false);
  assert.equal(prerequisite.evidence.selectedOperationCount, 0);
  assert.equal(prerequisite.evidence.checkpointAdapterCount, 0);
  assert.equal(prerequisite.evidence.qualifiedOwnerCommandCount, 0);
  assert.equal(prerequisite.evidence.boundedRestartAvailable, true);
  assert.match(CIRCA_SCENARIOS.E17.gap, /no two Circa owner commands/iu);

  const calls = [];
  const report = await runCircaEndToEndAcceptance(parseArguments([
    "--execute", "--run-id=e17-source-prerequisite", "--scenario=E17",
    ...CIRCA_SCENARIOS.E17.operations.map(code => `--approve=${code}`),
  ]), {
    roots: { projectRoot, frameworkRoot },
    executeOperation: async operation => {
      calls.push(operation.command);
      return { exitCode: 0, stdout: "owner pass", stderr: "" };
    },
  });
  assert.deepEqual(calls, []);
  assert(report.operations.slice(0, 2).every(operation =>
    operation.reason === "Scenario preflight blocked before owner mutation: write-recovery-resilience."));
  const recovery = report.operations.find(operation => operation.code === "write-recovery-resilience");
  assert.equal(recovery.status, ACCEPTANCE_STATUSES.BLOCKED);
  assert.equal(recovery.reason, "CIRCA_WRITE_RECOVERY_OWNER_CONTRACTS_REQUIRED");
  assert.equal(report.scenarios[0].status, ACCEPTANCE_STATUSES.BLOCKED);
});

test("E12 remains source-blocked without fabricating jobs, profiles or delivery evidence", async () => {
  const { frameworkRoot } = require("./helpers/configuration.js");
  const prerequisite = await inspectCircaCouponReminderDeliveryPrerequisite({ projectRoot, frameworkRoot });
  assert.equal(prerequisite.ready, false);
  assert.equal(prerequisite.reasonCode, "CIRCA_COUPON_REMINDER_CRON_JOB_REQUIRED");
  assert.equal(prerequisite.evidence.reminderJobCount, 0);
  assert.equal(prerequisite.evidence.digitalConfigured, false);
  assert.equal(prerequisite.evidence.profileConfigured, false);
  assert.equal(prerequisite.evidence.communicationConfigured, false);
  assert.equal(prerequisite.evidence.digitalProfilePresent, false);
  assert.equal(prerequisite.evidence.cronProfilePresent, false);
  assert.equal(prerequisite.evidence.communicationProfilePresent, false);
  assert.equal(CIRCA_SCENARIOS.E12.gap, null);
  assert(CIRCA_SCENARIOS.E12.operations.every(code =>
    OWNER_OPERATIONS[code].prerequisite === "circa-coupon-reminder-delivery"));

  let calls = 0;
  const report = await runCircaEndToEndAcceptance(parseArguments([
    "--execute", "--run-id=e12-source-prerequisite", "--scenario=E12",
    ...CIRCA_SCENARIOS.E12.operations.map(code => `--approve=${code}`),
  ]), {
    roots: { projectRoot, frameworkRoot },
    executeOperation: async () => { calls += 1; },
  });
  assert.equal(calls, 0);
  assert(report.operations.every(operation => operation.status === ACCEPTANCE_STATUSES.BLOCKED));
  assert.equal(report.operations[0].reason, "CIRCA_COUPON_REMINDER_CRON_JOB_REQUIRED");
  assert(report.operations.every(operation => operation.reason ===
    "CIRCA_COUPON_REMINDER_CRON_JOB_REQUIRED"));
  assert.equal(report.scenarios[0].status, ACCEPTANCE_STATUSES.BLOCKED);
});

test("E12 restart adapter delegates the restart to canonical topology lifecycle", async () => {
  const events = [];
  let readinessCalls = 0;
  const result = await restartCircaCommunicationRuntime({
    projectRoot,
    frameworkRoot: path.resolve(projectRoot, "../nodics.ai"),
    runId: "e12-restart-test",
    operationKey: "e12-restart-operation",
  }, {
    topology: {},
    assertReady: async () => {
      readinessCalls += 1;
      events.push("ready");
      return [{ code: "platform" }, { code: "engagement" }];
    },
    stop: async () => { events.push("stop"); },
    start: async () => { events.push("start"); return 12345; },
  });
  assert.deepEqual(events, ["ready", "stop", "start", "ready"]);
  assert.equal(readinessCalls, 2);
  assert.equal(result.exitCode, 0);
  assert.deepEqual(JSON.parse(result.stdout), {
    contractVersion: 1,
    state: "PASSED",
    environment: "kickoffLocal",
    restartScope: "kickoffLocal-topology",
    readinessRoles: ["platform", "engagement"],
    supervisorStarted: true,
  });
});

test("E03 remains source-blocked without a fabricated realized-carbon lot", async () => {
  const { frameworkRoot } = require("./helpers/configuration.js");
  const prerequisite = await inspectCircaDigitalBundlePublicationPrerequisite({ projectRoot, frameworkRoot });
  assert.equal(prerequisite.ready, false);
  assert.equal(prerequisite.reasonCode, "CIRCA_REALIZED_CARBON_OWNER_RECORD_REQUIRED");
  assert.equal(prerequisite.evidence.acceptanceName, "circaDigitalBundlePublication");
  assert.equal(prerequisite.evidence.profilePresent, false);
  assert(prerequisite.evidence.certificateRecordCount > 0);
  assert.equal(prerequisite.evidence.realizedCarbonRecordCount, 0);
  assert.match(CIRCA_SCENARIOS.E03.gap, /no governed realized-carbon lot/iu);
  assert(CIRCA_SCENARIOS.E03.operations.includes("digital-bundle-publication"));

  const calls = [];
  const report = await runCircaEndToEndAcceptance(parseArguments([
    "--execute", "--run-id=e03-prerequisite", "--scenario=E03",
    ...CIRCA_SCENARIOS.E03.operations.map(code => `--approve=${code}`),
  ]), {
    roots: { projectRoot, frameworkRoot },
    executeOperation: async operation => {
      calls.push(operation.command);
      return { exitCode: 0, stdout: "owner pass", stderr: "" };
    },
  });
  assert.deepEqual(calls, [], "a missing late fixture must block the whole scenario before earlier owner writes");
  assert.equal(report.operations.find(operation => operation.code === "digital-bundle-publication")?.status,
    ACCEPTANCE_STATUSES.BLOCKED);
  assert.equal(report.scenarios[0].status, ACCEPTANCE_STATUSES.BLOCKED);
});

test("E01 and E08 owner commands resolve from framework modules", () => {
  const commands = require(path.join(
    foundationRoot,
    "modules/nTooling/src/service/command/defaultProjectCommandService",
  )).resolveCommands(projectRoot);
  for (const command of [
    "acceptance:enterprise-actor-owner",
    "acceptance:coupon-offer-lifecycle",
    "acceptance:coupon-catalogue-availability",
  ]) {
    assert.equal(commands[command].type, "frameworkCommand", command);
    assert.equal(commands[command].home, "project", command);
    assert.equal(commands[command].command, command);
  }
});

test("E07 and E09 resolve their exact Checkout Core owner commands", () => {
  const commands = require(path.join(
    foundationRoot,
    "modules/nTooling/src/service/command/defaultProjectCommandService",
  )).resolveCommands(projectRoot);
  for (const command of ["acceptance:coupon-acquisition", "acceptance:coupon-redemption"]) {
    assert.equal(commands[command].type, "frameworkCommand", command);
    assert.equal(commands[command].home, "project", command);
    assert.equal(commands[command].command, command);
  }
});

test("E01 and E08 use their exact framework owners without claiming absent Circa fixtures", async () => {
  assert.deepEqual(CIRCA_SCENARIOS.E01.operations, ["enterprise-actor-owner"]);
  assert.deepEqual(CIRCA_SCENARIOS.E08.operations,
    ["coupon-offer-lifecycle", "coupon-catalogue-availability"]);
  assert.match(CIRCA_SCENARIOS.E01.gap, /Profile now owns the exact actor\/owner suite/);
  assert.match(CIRCA_SCENARIOS.E08.gap, /Promotion and Product now own the exact lifecycle and catalogue suites/);

  let calls = 0;
  const report = await runCircaEndToEndAcceptance(parseArguments([
    "--execute", "--run-id=source-prerequisite-check", "--scenario=E01,E08",
    "--approve=enterprise-actor-owner", "--approve=coupon-offer-lifecycle",
    "--approve=coupon-catalogue-availability",
  ]), { roots, executeOperation: async () => { calls += 1; } });
  assert.equal(calls, 0);
  assert(report.operations.every(operation => operation.status === ACCEPTANCE_STATUSES.BLOCKED));
  assert(report.operations.every(operation => /Circa has no reviewed/.test(operation.reason)));
  assert(report.scenarios.every(item => item.status === ACCEPTANCE_STATUSES.BLOCKED));
});

test("E07 and E09 preflight missing real transaction selections before Checkout mutation", async () => {
  assert.deepEqual(CIRCA_SCENARIOS.E07.operations, ["coupon-acquisition"]);
  assert.deepEqual(CIRCA_SCENARIOS.E09.operations, ["coupon-redemption"]);
  assert.match(CIRCA_SCENARIOS.E07.gap, /Checkout Core now owns the exact three-consideration/);
  assert.match(CIRCA_SCENARIOS.E09.gap, /Checkout Core now owns staff-recorded redemption/);

  const properties = require(path.join(projectRoot, "modules/circa.ewaste/config/properties.js"));
  assert.equal(properties.tooling.acceptance.circaCouponAcquisition, undefined);
  assert.equal(properties.tooling.acceptance.circaCouponRedemption, undefined);

  let calls = 0;
  const report = await runCircaEndToEndAcceptance(parseArguments([
    "--execute", "--run-id=coupon-source-prerequisite", "--scenario=E07,E09",
    "--approve=coupon-acquisition", "--approve=coupon-redemption",
  ]), { roots, executeOperation: async () => { calls += 1; } });
  assert.equal(calls, 0);
  assert(report.operations.every(operation => operation.status === ACCEPTANCE_STATUSES.BLOCKED));
  assert.match(report.operations.find(operation => operation.code === "coupon-acquisition").reason,
    /no reviewed customer-owned certificate holdings/);
  assert.match(report.operations.find(operation => operation.code === "coupon-redemption").reason,
    /no reviewed purchased coupon order, entitlement and receipt state/);
  assert(report.scenarios.every(item => item.status === ACCEPTANCE_STATUSES.BLOCKED));
});

test("Circa participant transfer fixture selects canonical demo owners and the Loyalty owner contract", async () => {
  const fixture = JSON.parse(fs.readFileSync(path.join(
    projectRoot,
    "scripts/acceptance/fixtures/circa-loyalty-participant-transfer.json",
  ), "utf8"));
  const { frameworkRoot } = require("./helpers/configuration.js");
  const loyaltyRoot = path.join(frameworkRoot, "nodics.loyalty");
  const owner = await import(pathToFileURL(path.join(
    loyaltyRoot,
    "modules/loyaltyWallet/src/service/acceptance/defaultLoyaltyParticipantTransferAcceptanceService.mjs",
  )).href);
  assert.deepEqual(owner.validateLoyaltyParticipantTransferAcceptanceSelection(fixture), fixture);

  const customerRows = Object.values(require(path.join(
    projectRoot,
    "modules/circa.ewaste/data/sample-v001/profile/records/circaCustomerData.js",
  )));
  const enterpriseRows = Object.values(require(path.join(
    projectRoot,
    "modules/circa.ewaste/data/sample-v001/operations/records/circaEnterpriseData.js",
  )));
  const programRows = Object.values(require(path.join(
    projectRoot,
    "modules/circa.ewaste/data/sample-v001/loyalty/records/circaLoyaltyProgramData.js",
  )));
  const walletRows = Object.values(require(path.join(
    projectRoot,
    "modules/circa.ewaste/data/sample-v001/loyalty/records/circaLoyaltyWalletData.js",
  )));
  const balanceRows = Object.values(require(path.join(
    projectRoot,
    "modules/circa.ewaste/data/sample-v001/loyalty/records/circaLoyaltyWalletRewardBalanceData.js",
  )));
  const rewardTypeRows = Object.values(require(path.join(
    loyaltyRoot,
    "modules/loyaltyRewardType/data/core-v001/records/loyalty/loyaltyRewardTypeCoreData.js",
  )));

  assert(customerRows.some(row => row.code === fixture.customer.ownerCode && row.active === true));
  assert(enterpriseRows.some(row => row.code === fixture.enterprise.ownerCode && row.active === true));
  const program = programRows.find(row => row.code === fixture.programCode);
  assert.equal(program?.defaultRewardTypeCode, fixture.rewardTypeCode);
  const rewardType = rewardTypeRows.find(row => row.code === fixture.rewardTypeCode);
  assert.equal(rewardType?.precision, fixture.scale);
  const customerWallet = walletRows.find(row => row.ownerType === "CUSTOMER" &&
    row.ownerCode === fixture.customer.ownerCode && row.status === "OPEN");
  assert(customerWallet);
  assert(balanceRows.some(row => row.walletCode === customerWallet.code &&
    row.programCode === fixture.programCode && row.rewardTypeCode === fixture.rewardTypeCode));
  assert.doesNotMatch(JSON.stringify(fixture), /token|password|credential|walletCode|permission/iu);
});

test("approved shared owner operations execute once with stable correlation", async () => {
  const calls = [];
  const argv = [
    "--execute", "--run-id=run-2", "--scenario=E15,E16",
    "--approve=waste-management-journey",
  ];
  const executeOperation = async (operation, context) => {
    calls.push({ operation, context });
    return { exitCode: 0, stdout: "owner pass", stderr: "" };
  };
  const first = await runCircaEndToEndAcceptance(parseArguments(argv), { roots, executeOperation });
  const firstKeys = first.operations.map(operation => operation.operationKey);
  assert.equal(calls.length, 1);
  assert.equal(new Set(calls.map(call => call.operation.command)).size, 1);
  assert(first.operations.every(operation => operation.status === ACCEPTANCE_STATUSES.PASS));
  assert(first.scenarios.every(item => item.status === ACCEPTANCE_STATUSES.BLOCKED));
  calls.length = 0;
  const second = await runCircaEndToEndAcceptance(parseArguments(argv), { roots, executeOperation });
  assert.deepEqual(second.operations.map(operation => operation.operationKey), firstKeys);
  assert.notDeepEqual(
    (await runCircaEndToEndAcceptance(parseArguments(argv.map(arg => arg === "--run-id=run-2" ? "--run-id=run-3" : arg)),
      { roots, executeOperation })).operations.map(operation => operation.operationKey),
    firstKeys,
  );
});

test("owner failures fail scenarios while external provider claims remain blocked", async () => {
  const failed = await runCircaEndToEndAcceptance(parseArguments([
    "--execute", "--run-id=run-4", "--scenario=E15", "--approve=waste-management-journey",
  ]), { roots, executeOperation: async () => ({ exitCode: 7, stdout: "", stderr: "failed" }) });
  assert.equal(failed.scenarios[0].status, ACCEPTANCE_STATUSES.FAIL);

  const external = await runCircaEndToEndAcceptance(parseArguments([
    "--execute", "--run-id=run-5", "--scenario=E11",
  ]), { roots, executeOperation: async () => assert.fail("external provider must not run") });
  assert.equal(external.scenarios[0].status, ACCEPTANCE_STATUSES.BLOCKED);
  assert.equal(external.externalProviderQualification, "REFUSED_BY_COORDINATOR");
});

test("owner commands pass only on exit zero", () => {
  const operation = OWNER_OPERATIONS["loyalty-reward-checkout"];
  assert.deepEqual(classifyOwnerOperation(operation, {
    exitCode: 1,
    stdout: 'project output\n{"status":"API_CHECKS_PASSED","fullAcceptance":false}',
  }), { status: ACCEPTANCE_STATUSES.FAIL });
  assert.deepEqual(classifyOwnerOperation(operation, {
    exitCode: 1,
    stdout: '{"status":"FAIL","fullAcceptance":false}',
  }), { status: ACCEPTANCE_STATUSES.FAIL });
  assert.deepEqual(classifyOwnerOperation(operation, {
    exitCode: 0,
    stdout: "owner pass",
  }), { status: ACCEPTANCE_STATUSES.PASS });
});

test("redaction removes common secret forms and bounds evidence", () => {
  const redacted = redactText(
    "Authorization: Bearer abc.def password=hunter2 api_key=qwerty " +
      '\"authToken\":\"json-secret\" https://user:pass@example.test ' + "x".repeat(5000),
    300,
  );
  for (const secret of ["abc.def", "hunter2", "qwerty", "json-secret", "user:pass"]) assert(!redacted.includes(secret));
  assert.match(redacted, /\[REDACTED\]/);
  assert.match(redacted, /\[TRUNCATED\]$/);
});

test("PASS is possible only when an exact owner composition has no remaining gap", () => {
  assert.equal(classifyScenario({
    execute: true,
    operationResults: [{ status: ACCEPTANCE_STATUSES.PASS }],
    scenarioDefinition: { gap: null, externalBoundary: null },
  }), ACCEPTANCE_STATUSES.PASS);
  assert.equal(Object.values(OWNER_OPERATIONS).every(operation =>
    operation.command?.startsWith("acceptance:") ||
      operation.adapter === "scripts/acceptance/adapters/circaCommunicationRuntimeRestartAdapter.mjs"), true);
});
