/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module kickoff/test/enterpriseTestProgram @description Verifies the narrow Local demo program selection, not framework funding behavior. @owner kickoffCore @layer test */
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const data = path.resolve(__dirname, "../modules/circa.ewaste/data");
test("Enterprise test eligibility is an explicit guarded Local-only single-field selection", () => {
  const section = require(path.join(data, "manifest.json")).sections.circaLocalEnterpriseTestProgram;
  assert.deepEqual(section.environmentScope, ["LOCAL"]);
  assert.equal(section.destinationRole, "LOYALTY");
  assert.equal(section.selectionPolicy, "EXPLICIT");
  assert.equal(Object.keys(section.files).length, 2);
  for (const [file, hash] of Object.entries(section.files)) {
    const target = path.join(data, file);
    assert.equal(crypto.createHash("sha256").update(fs.readFileSync(target)).digest("hex"), hash);
  }
  const base = path.join(data, "sample-v001/enterprise-test");
  const rows = require(path.join(base, "records/circaEnterpriseTestProgramData"));
  assert.deepEqual(rows, { circaEnterpriseTestProgram: { code: "circa", testCreditRewardTypeCodes: ["points"] } });
  const header = require(path.join(base, "headers/circaEnterpriseTestProgramHeader")).loyaltyProgram.circaEnterpriseTestProgram;
  assert.equal(header.options.operation, "update");
  assert.equal(header.options.schemaName, "loyaltyProgram");
  assert.deepEqual(header.options.tenants, ["default"]);
  assert.deepEqual(header.query, {
    code: "$code", revision: 1, status: "ACTIVE", active: true,
    earningEnabled: true, defaultRewardTypeCode: "points",
    $or: [{ testCreditRewardTypeCodes: { $exists: false } }, { testCreditRewardTypeCodes: ["points"] }],
  });
});
