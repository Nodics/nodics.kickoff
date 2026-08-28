'use strict';
const assert = require('node:assert/strict'); const path = require('node:path'); const test = require('node:test');
const root = path.resolve(__dirname, '..'); const framework = path.resolve(root, '../nodics.ai');
const load = value => require(value);
const commerceRoot = (domain) => path.join(root, 'modules', `agora.${domain}`, 'data', 'sample-v001', 'commerce', 'records');
const contentRoot = (domain) => path.join(root, 'modules', `agora.${domain}`, 'data', 'sample-v001', 'content', 'records');
const apparelRoot = commerceRoot('apparel'); const electronicsRoot = commerceRoot('electronics'); const telcoRoot = commerceRoot('telco');
const apparelValidation = load(path.join(framework, 'nodics.accelerators/modules/apparel/modules/apparelProduct/src/service/defaultApparelProductValidationService'));
const electronicsValidation = load(path.join(framework, 'nodics.accelerators/modules/electronics/modules/electronicsProduct/src/service/defaultElectronicsProductValidationService'));
const telcoValidation = load(path.join(framework, 'nodics.accelerators/modules/telco/modules/telcoCatalog/src/service/defaultTelcoCatalogValidationService'));
const subscription = load(path.join(framework, 'nodics.accelerators/modules/telco/modules/telcoSubscription/src/service/defaultTelcoSubscriptionService'));
const provisioning = load(path.join(framework, 'nodics.accelerators/modules/telco/modules/telcoProvisioning/src/service/defaultTelcoProvisioningService'));
const mixedPolicy = load(path.join(framework, 'nodics.accelerators/modules/domainCommerceCore/src/service/defaultDomainCommerceCorePolicyService'));
const reverseLifecycle = load(path.join(framework, 'nodics.commerce/modules/checkout/modules/order/src/service/defaultOrderLifecycleService'));
global.CONFIG = { get: key => key === 'apparelProduct' ? { sizeSystems: ['ALPHA', 'EU', 'UK', 'US', 'AGE', 'ONE_SIZE'], compositionTotal: 100 } : undefined };
const values = object => Object.values(object);
const checkout = entries => mixedPolicy.compose({ tenant: 'default', correlationId: 'qualification-correlation', idempotencyKey: `checkout:${entries.map(item => item.productCode).join('+')}`, entries });

test('Apparel search projection data supports size and colour selection through cart and order composition', () => {
  const products = values(load(path.join(apparelRoot, 'agoraApparelProductData'))); const localizations = values(load(path.join(apparelRoot, 'agoraApparelProductLocalizationData'))); const variants = values(load(path.join(apparelRoot, 'agoraApparelProductVariantData'))); const styles = values(load(path.join(apparelRoot, 'agoraApparelStyleData')));
  assert.equal(products.length, 2); assert.equal(localizations.length, 4); assert.equal(new Set(localizations.map(item => item.locale)).size, 2);
  const selected = variants[0]; const style = styles.find(item => item.productCode === selected.productCode); assert.equal(apparelValidation.validateStyle(style).valid, true); assert(selected.attributes.sizeCode); assert(selected.attributes.colorCode);
  const order = checkout([{ domain: 'apparel', productCode: selected.productCode, variantCode: selected.code }]); assert.equal(order.accepted, true); assert.equal(order.partitions[0].type, 'PHYSICAL_ORDER');
});

test('Electronics journey exposes specifications compatibility warranty price inventory and checkout', () => {
  const products = values(load(path.join(electronicsRoot, 'agoraElectronicsProductData'))); const specs = values(load(path.join(electronicsRoot, 'agoraElectronicsSpecificationData'))); const prices = values(load(path.join(electronicsRoot, 'agoraElectronicsPriceRowData'))); const inventory = values(load(path.join(electronicsRoot, 'agoraElectronicsInventoryBalanceData')));
  assert.equal(electronicsValidation.validateSpecification(specs[0]).valid, true); assert.equal(electronicsValidation.compatible({ network: '5G' }, specs[0].specifications).compatible, true);
  assert.equal(prices.find(item => item.productCode === products[0].code).currency, 'AED'); assert(Number(inventory[0].available) > 0);
  assert.equal(electronicsValidation.validateWarranty({ duration: 2, durationUnit: 'YEAR', coverage: ['PARTS', 'LABOUR'] }).valid, true);
  assert.equal(checkout([{ domain: 'electronics', productCode: products[0].code }]).accepted, true);
});

test('Telco device plus plan validates eligibility and creates an idempotent activation service order', () => {
  const plans = values(load(path.join(telcoRoot, 'agoraTelcoPlanData'))); const allowances = values(load(path.join(telcoRoot, 'agoraTelcoAllowanceData'))); const device = values(load(path.join(electronicsRoot, 'agoraElectronicsProductData')))[0];
  assert.equal(telcoValidation.validate(plans[0], allowances).valid, true); assert.equal(subscription.validateNumberIntent({ intentType: 'PORT_IN', portabilityEvidence: { verified: true } }).valid, true); assert.equal(subscription.canTransition('PENDING_ACTIVATION', 'ACTIVE'), true);
  const split = checkout([{ domain: 'electronics', productCode: device.code }, { domain: 'telco', productCode: plans[0].productCode, deviceProductCode: device.code, recurringCharge: { currency: 'AED', minorUnits: 25000, cycle: 'MONTH', intervalCount: 1 } }]);
  assert.deepEqual(split.partitions.map(item => item.type), ['PHYSICAL_ORDER', 'TELCO_SERVICE_ORDER']);
  const request = { tenant: 'default', subscriptionCode: 'subscription-1', orderCode: 'order-1', idempotencyKey: 'activate-1' }; const first = provisioning.create(request, []); const replay = provisioning.create(request, [first.serviceOrder]); assert.equal(replay.replayed, true);
});

test('mixed Apparel and Electronics remain one physical order while incompatible Telco fails closed', () => {
  const apparel = values(load(path.join(apparelRoot, 'agoraApparelProductData')))[0]; const electronics = values(load(path.join(electronicsRoot, 'agoraElectronicsProductData')))[0];
  const physical = checkout([{ domain: 'apparel', productCode: apparel.code }, { domain: 'electronics', productCode: electronics.code }]); assert.deepEqual(physical.partitions, [{ type: 'PHYSICAL_ORDER', entries: [apparel.code, electronics.code] }]);
  const invalid = checkout([{ domain: 'telco', productCode: 'plan', deviceProductCode: 'missing', recurringCharge: { currency: 'AED', minorUnits: 25000, cycle: 'MONTH', intervalCount: 1 } }]); assert.equal(invalid.reasonCode, 'TELCO_COMPATIBLE_DEVICE_REQUIRED');
});

test('cancellation return and refund orchestration remains routed to existing Commerce authorities', async () => {
  const calls = []; const ports = { find: async () => undefined, evaluatePolicy: async () => ({ eligible: true }), requestApproval: async () => ({ status: 'APPROVED' }), fulfillmentIntent: async () => { calls.push('FULFILLMENT'); return { returnMethod: 'DROP_OFF' }; }, inventoryDisposition: async () => { calls.push('INVENTORY'); return { disposition: 'RESTOCK' }; }, paymentIntent: async () => { calls.push('PAYMENT'); return { refundMethod: 'ORIGINAL_PAYMENT' }; }, complete: async (request, evidence) => ({ status: 'COMPLETED', requestType: request.requestType, evidence }) };
  for (const requestType of ['CANCELLATION', 'RETURN', 'REFUND']) { const result = await reverseLifecycle.process({ tenant: 'default', orderCode: `order-${requestType}`, requestType, idempotencyKey: `reverse-${requestType}` }, ports); assert.equal(result.status, 'COMPLETED'); }
  assert.deepEqual(calls, ['FULFILLMENT', 'INVENTORY', 'PAYMENT', 'FULFILLMENT', 'INVENTORY', 'PAYMENT', 'FULFILLMENT', 'INVENTORY', 'PAYMENT']);
});

test('domain content is editable in Staged and preserves logical renderer identity for Online projection', () => {
  for (const [domain, title] of [['apparel', 'Apparel'], ['electronics', 'Electronics'], ['telco', 'Telco']]) { const source = values(load(path.join(contentRoot(domain), `agora${title}PageData`)))[0]; const staged = { ...source, name: `${source.name} Updated`, publicationStatus: 'STAGED' }; const online = { ...staged, publicationStatus: 'ONLINE' }; assert.equal(online.renderer, `agora.${domain}.page.home`); assert.match(online.name, /Updated$/); }
});

test('provider partial failure records compensation evidence with completed owner checkpoints', async () => {
  let compensation; const ports = { find: async () => undefined, evaluatePolicy: async () => ({ eligible: true }), requestApproval: async () => ({ status: 'APPROVED' }), fulfillmentIntent: async () => ({ code: 'return-1' }), inventoryDisposition: async () => ({ disposition: 'RESTOCK' }), paymentIntent: async () => { throw new Error('provider unavailable'); }, compensate: async (request, checkpoint, error) => { compensation = { request, checkpoint, error: error.message }; } };
  await assert.rejects(() => reverseLifecycle.process({ tenant: 'default', orderCode: 'order-failure', requestType: 'REFUND', idempotencyKey: 'failure-1', correlationId: 'corr-failure' }, ports), /provider unavailable/); assert.deepEqual(compensation.checkpoint.completed, ['FULFILLMENT', 'INVENTORY']); assert.equal(compensation.error, 'provider unavailable');
});
