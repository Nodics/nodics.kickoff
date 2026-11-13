/* Nodics. Copyright (c) 2026. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/helpers/reviewedCampaign @description Supplies the exact archived campaign only within historical test contexts. @layer test @owner circa.ewaste */
const fs = require("node:fs");
const path = require("node:path");
const fixture = require("../fixtures/circaItemCouponJourneySelection.json");

const liveFile = path.resolve(__dirname, "../..", fixture.sourcePins.campaigns.path);
const reviewedFile = require.resolve("../fixtures/history/circaPromotionReviewedData");

/** Leaves the operational factory's live-source admission active outside the test. */
function useReviewedCampaign(context) {
  const readFile = fs.readFileSync;
  context.mock.method(fs, "readFileSync", (file, options) =>
    readFile(file === liveFile ? reviewedFile : file, options),
  );
}

module.exports = { useReviewedCampaign };
