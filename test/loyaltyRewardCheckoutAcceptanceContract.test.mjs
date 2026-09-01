/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import test from "node:test";

/**
 * @module kickoff/test/loyaltyRewardCheckoutAcceptanceContract
 * @description Guards the live Loyalty reward checkout acceptance command and journey boundaries.
 * @layer test
 * @owner nodics.kickoff
 */

const projectRoot = path.resolve(new URL("..", import.meta.url).pathname);
const require = createRequire(import.meta.url);
const projectCommandService = require("../../nodics.ai/nodics.foundation/modules/nTooling/src/service/command/defaultProjectCommandService");
const scriptPath = path.join(projectRoot, "..", "nodics.ai", "nodics.foundation", "modules", "nTooling", "src", "service", "project", "defaultProjectLoyaltyRewardCheckoutAcceptanceService.mjs");
const packagePath = path.join(projectRoot, "package.json");

test("Loyalty reward checkout acceptance runs through live Platform, Commerce, and Loyalty boundaries", () => {
  const source = fs.readFileSync(scriptPath, "utf8");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const projectCommands = projectCommandService.defaultCommands();

  assert.match(pkg.scripts["acceptance:loyalty-reward-checkout"], /nodics-project\.js project:run acceptance:loyalty-reward-checkout/);
  assert.equal(projectCommands["acceptance:loyalty-reward-checkout"].command, "project:loyalty-reward-checkout-acceptance");
  assert.equal(projectCommands["acceptance:loyalty-reward-checkout"].home, "project");
  assert.match(source, /start:platform/);
  assert.match(source, /start:loyalty/);
  assert.match(source, /start:commerce/);
  assert.match(source, /ensureServiceAccountLoyaltyPermissions/);
  assert.match(source, /LoyaltyWalletRewardBalanceModel/);
  assert.match(source, /RewardReservationModel/);
  assert.match(source, /RewardLedgerEntryModel/);
  assert.match(source, /RewardRedemptionModel/);
  assert.match(source, /PaymentTransactionEntryModel/);
  assert.match(source, /DigitalEntitlementModel/);
  assert.match(source, /DigitalDeliveryModel/);
  assert.match(source, /paymentMethod: "LOYALTY_REWARD"/);
  assert.match(source, /walletCode/);
  assert.match(source, /agoraStylePass5Coupon/);
  assert.match(source, /agoraStylePass5CouponDigital/);
  assert.match(source, /\/nodics\/checkoutCore\/v0\/checkouts\/place/);
  assert.match(source, /\/nodics\/loyaltyApi\/v0\/reward-reservations/);
  assert.match(source, /paymentProvider !== "loyalty-reward-points"/);
  assert.match(source, /forbiddenStoredContext/);
});
