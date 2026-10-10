/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/fixtures/circaItemCouponJourneySelectionFactory
 * @description Binds explicitly reviewed native actors to pinned Circa ITEM test selections; no execution, credentials, funding or import.
 * @layer test-fixture @owner circa.ewaste
 */
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const fixture = require("./circaItemCouponJourneySelection.json");
const moduleRoot = path.resolve(__dirname, "../..");
const identifier = value => typeof value === "string" && /^[A-Za-z0-9_.:@-]{1,128}$/.test(value);
const exactKeys = (value, keys) => value && typeof value === "object" && !Array.isArray(value) &&
  Object.keys(value).length === keys.length && keys.every(key => Object.hasOwn(value, key));
const requireSelection = condition => {
  if (!condition) throw Object.assign(new Error("CIRCA_REVIEWED_SELECTION_REQUIRED"), { code: "CIRCA_REVIEWED_SELECTION_REQUIRED" });
};

/** Rejects changed reviewed source bytes without regenerating terms or altering installed packs. */
function verifyCircaItemCouponSelectionSources() {
  for (const pin of Object.values(fixture.sourcePins)) {
    const sha256 = crypto.createHash("sha256").update(fs.readFileSync(path.join(moduleRoot, pin.path))).digest("hex");
    if (sha256 !== pin.sha256) throw Object.assign(new Error("CIRCA_SELECTION_SOURCE_DRIFT"), { code: "CIRCA_SELECTION_SOURCE_DRIFT" });
  }
  return true;
}

/** Returns a fresh JSON-compatible owner-runner selection; caller supplies original non-secret identities and reviewed refund text only. */
function createCircaItemCouponJourneySelection(options) {
  requireSelection(exactKeys(options, ["approvalReference", "runCode", "customer", "walletCode", "privateCaptureQualified", "refundReview"]));
  requireSelection(identifier(options.approvalReference) && identifier(options.runCode) && identifier(options.walletCode) &&
    options.privateCaptureQualified === true);
  requireSelection(options.runCode.startsWith("CIRCA_ORDER_") && !/[^A-Za-z0-9._:-]/.test(options.runCode));
  requireSelection(exactKeys(options.customer, ["ownerId", "enterpriseCode"]) &&
    identifier(options.customer.ownerId) && identifier(options.customer.enterpriseCode));
  requireSelection(exactKeys(options.refundReview, ["sessionKey", "enterpriseCode", "comment", "reason"]) &&
    identifier(options.refundReview.sessionKey) &&
    !["customer", "greenperksCafeOperator", "greenperksBistroOperator"].includes(options.refundReview.sessionKey) &&
    options.refundReview.enterpriseCode === options.customer.enterpriseCode &&
    ["comment", "reason"].every(key => typeof options.refundReview[key] === "string" &&
      options.refundReview[key].trim().length >= 10 && options.refundReview[key].length <= 2000));
  const selection = structuredClone(fixture.selection);
  requireSelection([...selection.itemCases, selection.refundCase].every(c => options.runCode.length + c.caseCode.length <= 50));
  verifyCircaItemCouponSelectionSources();
  return {
    ...selection,
    approvalReference: options.approvalReference,
    runCode: options.runCode,
    privateCaptureQualified: options.privateCaptureQualified,
    customer: structuredClone(options.customer),
    payment: { ...selection.payment, walletCode: options.walletCode },
    refundReview: structuredClone(options.refundReview),
  };
}

module.exports = { createCircaItemCouponJourneySelection, verifyCircaItemCouponSelectionSources };
