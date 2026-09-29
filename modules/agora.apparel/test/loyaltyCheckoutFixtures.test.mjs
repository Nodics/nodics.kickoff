/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module agora.apparel/test/loyaltyCheckoutFixtures @description Verifies application product selections and external fixture bindings. @owner agora.apparel @layer test */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const require = createRequire(import.meta.url);
const projectRoot = fileURLToPath(new URL('../../..', import.meta.url));
const foundation = path.dirname(require.resolve('nodics.foundation/package.json'));
const bindings = require(path.join(foundation, 'modules/nConfig/src/service/defaultConfigurationBindingService'));
const application = require('../config/properties');
const declared = application.tooling.acceptance.loyaltyRewardCheckout;
const externalFields = [
  ['customerCode', 'NODICS_LOYALTY_CHECKOUT_CUSTOMER_CODE', 'isolated-test-customer'],
  ['walletCode', 'NODICS_LOYALTY_CHECKOUT_WALLET_CODE', 'isolated-test-wallet'],
  ['maximumRewardAmount', 'NODICS_LOYALTY_CHECKOUT_MAXIMUM_REWARD_AMOUNT', '7.25'],
  ['customer.email', 'NODICS_LOYALTY_CHECKOUT_CUSTOMER_EMAIL', 'test@example.test'],
  ['customer.firstName', 'NODICS_LOYALTY_CHECKOUT_CUSTOMER_FIRST_NAME', 'Test'],
  ['customer.lastName', 'NODICS_LOYALTY_CHECKOUT_CUSTOMER_LAST_NAME', 'Customer'],
  ['shippingAddress.line1', 'NODICS_LOYALTY_CHECKOUT_ADDRESS_LINE1', 'Test address'],
  ['shippingAddress.city', 'NODICS_LOYALTY_CHECKOUT_ADDRESS_CITY', 'Test city'],
  ['shippingAddress.region', 'NODICS_LOYALTY_CHECKOUT_ADDRESS_REGION', 'Test region'],
  ['shippingAddress.postalCode', 'NODICS_LOYALTY_CHECKOUT_ADDRESS_POSTAL_CODE', 'TEST'],
  ['shippingAddress.country', 'NODICS_LOYALTY_CHECKOUT_ADDRESS_COUNTRY', 'AE'],
];
const valueAt = (value, field) => field.split('.').reduce((current, key) => current?.[key], value);
const variables = Object.fromEntries(externalFields.map(([, name, value]) => [name, value]));
const resolveFixture = environmentVariables => bindings.resolve({ fixture: declared }, {}, { environmentVariables }).fixture;

test('Apparel declares product choices but binds every identity, contact, address and spending limit externally', () => {
  const original = JSON.stringify(application);
  for (const [field, name] of externalFields) assert.deepEqual(valueAt(declared, field), { $config: 'env', name });
  const resolved = resolveFixture(variables);
  for (const [field, , value] of externalFields) assert.equal(valueAt(resolved, field), value);
  assert.equal(resolved.maximumRewardAmount, '7.25');
  assert.equal(resolved.productCode, 'agoraStylePass5Coupon');
  assert.equal(resolved.variantCode, 'agoraStylePass5CouponDigital');
  assert.equal(resolved.providerCode, 'loyalty-reward-points');
  assert.deepEqual(resolved.cart, { storeCode: 'agoraMainStore', channelCode: 'web', locale: 'en', jurisdiction: 'AE', currency: 'USD' });
  assert.equal(application.cms.runtimeRoleProfiles.WCMS_STAGED.publication.baselines.agoraapparel.rootCode, 'agoraApparelSite');
  assert.equal(application.backofficeApplicationInitialization.runtimeRoleProfiles.PLATFORM.profiles.agoraapparel.owner, 'agora.apparel');
  assert.equal(JSON.stringify(application), original);
});

test('application fixture never supplies defaults for absent external values', () => {
  for (const [field, name] of externalFields) {
    for (const empty of [false, true]) {
      const supplied = { ...variables };
      if (empty) supplied[name] = ''; else delete supplied[name];
      const fixture = resolveFixture(supplied);
      assert.equal(valueAt(fixture, field), undefined);
    }
  }
});

test('Local Platform nConfig graph exposes the application fixture with external bindings', () => {
  const probe = require(path.join(foundation, 'modules/nTooling/src/service/project/defaultProjectConfigurationProbeService'));
  const result = probe.read({ projectRoot, environment: 'kickoffLocal', server: 'platformServer', variables });
  assert.ok(result.modules.includes('agora.apparel'));
  assert.deepEqual(result.properties.tooling.acceptance.loyaltyRewardCheckout, resolveFixture(variables));
});
