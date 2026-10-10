# Circa ITEM Acceptance Selection

This is a nonimportable customer/application test fixture, not a pack, grant,
qualification selection, funding approval or native pass. It consumes Checkout's
capability-owned `runCouponJourneyHttpAcceptance`; it does not implement another
runner. No source import/build or runtime configuration change is needed.

## Factory And JSON

`test/fixtures/circaItemCouponJourneySelection.json` pins the actual Promotion,
Product, Variant, Price, PriceBook, Tax, Store and original reviewed policy bytes.
`test/fixtures/circaItemCouponJourneySelectionFactory.js` exports
`createCircaItemCouponJourneySelection(options)` and
`verifyCircaItemCouponSelectionSources()`. Source drift rejects; do not regenerate
pins or rewrite installed packs merely to pass a checkpoint.

```js
const { createCircaItemCouponJourneySelection } = require('/absolute/kickoff/path/modules/circa.ewaste/test/fixtures/circaItemCouponJourneySelectionFactory.js');
const selection = createCircaItemCouponJourneySelection({
  approvalReference: originalReviewedExecutionReference,
  runCode: originalStableRunCode,
  customer: { ownerId: actualSignedBuyerCode, enterpriseCode: actualSignedBuyerEnterprise },
  walletCode: actualExistingBuyerWalletCode,
  privateCaptureQualified: true, // Independently verified operator assertion.
  refundReview: {
    sessionKey: 'refundReviewer',
    enterpriseCode: actualSignedBuyerEnterprise,
    comment: reviewedUnusedCouponDisputeText,
    reason: reviewedOriginalPaymentRefundReason,
  },
});
```

The six top-level arguments above are required; no other fields are accepted.
No credentials, session objects, mutable business overrides or funding arguments
belong in this factory. The refund reviewer must use a distinct session handle
from the buyer and outlet staff. Its actual signed identity and permissions are
verified by Order, not by a label in this fixture.

`runCode` must begin with the exact `CIRCA_ORDER_` prefix required by the
application's Order dispute and refund policies and contain only
`[A-Za-z0-9._:-]`, matching the owners' command-key character set. Spaces,
trailing newlines and `@` reject without normalization. Run and longest case-code
lengths must total at most 50; the pinned longest case is 20 characters, so the
current maximum run length is 30. `CIRCA_ORDER_ITEM_20261009_01` is a valid
fresh-run example, not an identity to substitute into an existing run.

Valid original selections retain their exact run code and checkpoint hash. Never
prefix, trim, truncate or rename a resumed run. If an earlier run has an invalid
identity, preserve its original selection/checkpoint and reconcile through its
owners; factory rejection does not authorize a replacement purchase or command.

The returned value is JSON-compatible and contains only the exact fields accepted
by Checkout's runner. The wrapper JSON's source pins and expected terms are review
context, not fields to send to an API. Do not pass the whole wrapper as selection.

## Exact Expected Terms

| Selection | Exact value |
| --- | --- |
| Tenant / marketplace | `default` / `circaMainStore` |
| Channel / locale / Tax jurisdiction | `web` / `en` / `CIRCA_SAMPLE` |
| PriceBook / Tax policy | `circaPointsPriceBook` / `circaSamplePointsPolicy`, existing sample rate `0` |
| Purchase currency / payment | `POINTS` / `LOYALTY_REWARD`, `circa` program, `points` reward type |
| Approved campaign provenance | All 38 stored Promotion codes, 100 units per campaign; this run issues none |
| Selected purchases/redemptions | All 29 exact ITEM campaigns, one coupon each, total `6280` POINTS |
| Original issuer / seller | `GREENPERKS_RETAIL` / `GREENPERKS_ONLINE`; neither replaces the signed buyer enterprise |
| Café selection | GP-C01..C12 and GP-A01..A06, 18 cases; session handle `greenperksCafeOperator` |
| Bistro selection | GP-B01..B11, 11 cases; session handle `greenperksBistroOperator` |
| Either-outlet terms | GP-A01..A06 retain both approved outlets; this reviewed selection uses café only |
| Separate unused refund | `GP-A01-UNUSED-REFUND`, `CIRCA_COUPON_GP-A01`, `CIRCA_COUPON_GP-A01_SKU`, `CIRCA_COUPON_GP-A01_PROMO`, `50` POINTS |
| Validity / substitution | 30 days from successful purchase / exact source SKU quantities, no substitutions |
| ITEM budget | `0` monetary budget; not an AED purchase or monetary benefit |
| Simulator | `LOCAL_SIMULATION`, `SIM:` receipt references, simulated true, deliveryVerified false |
| Redeemed reversals / monetary qualification | No redeemed reversals executed; monetaryBenefitsQualified false |

Each case in JSON contains its actual stored Product, Variant SKU, Promotion,
positive decimal-string price, issuer, selected outlet, staff session handle and
exact `items: [{sku, quantity, unit: 'EACH'}]`. The expected-terms section retains
the original descriptions, all allowed outlets, 30-day validity, budget and terms.
GP-C09 keeps two cookies; GP-B11 keeps two pasta and two soft drinks. No display
description is used to infer a delivery SKU or quantity.

The separate GP-A01 refund is never claimed or redeemed. Its owner preview and
original refund approval remain required. The runner executes it first and
requires confirmed original Payment refund, revoked entitlement and refunded
Order before ITEM spending. Its 50-point float is recycled only after that proof;
already-redeemed spending cannot be recycled. This selection needs at least
6280 available POINTS before starting when no cases are already purchased.

The broader 38-coupon source price total is 7763 POINTS (6280 ITEM + 1483 monetary).
That does not expand this runner to nine monetary redemptions or five asset sales.
The separate reviewed credit is defined by the explicit
[`circaLocalDemoCredit` contribution](circa-local-demo-credit.md), not this runner.
Its human permission and native atomic persistence remain independent gates.
This fixture neither requests nor credits funds, and a factory return is not
permission to invoke an unfunded native run.

## Native Caller Checkpoint

After funding and original owner prerequisites are independently satisfied,
Main supplies existing fresh sessions separately as `customer`,
`greenperksCafeOperator`, `greenperksBistroOperator` and the reviewed refund handle.
The two outlet sessions must be original `GREENPERKS_RETAIL` actors with actual
direct Store scopes; source record references are not authority. Supply an actual
fresh existing-owner funding observation and durable checkpoint sink, then invoke
the Checkout contract. Do not retain bearer tokens, coupon plaintext or validation
capabilities in JSON, checkpoints, logs or test evidence. Keep native execution
and source tests separate; source tests use an injected isolated port only.

## Existing Earning API Boundary

The original read-only inspection below explains why ordinary reward earnings
are not the demo-funding path. Select the governed sample-credit contribution
instead; it preserves exact source/intent metadata and independent human
authorization without granting general earnings to a demo employee.

The existing route is service-only POST `/nodics/loyaltyApi/v0/reward-earnings`,
permission `loyalty.rewards.earn`, exposure `loyaltyInternal`. The owner requires
an existing OPEN wallet and delegates EARN to the append-only ledger operation.
No dedicated sandbox funding route or automatic nPolicy approval check was found
in this route/controller/facade/earn path. An API's technical ability to earn is
not a test-credit authorization; human/operator approval and original owner
authority must be established independently, without impersonating a service.

The owner normalizes `walletCode`, `programCode`, `rewardTypeCode`, positive
`amount`, `scale`, `sourceType`, `sourceCode`, `targetType`, `targetCode`,
`idempotencyKey` and `correlationId`. The HTTP controller maps Idempotency-Key
and X-Correlation-Id. Original approval/source identity must remain unique and
stable across any approved replay. Its existing-ledger query scopes operation
type/key to wallet/program/reward type, but the EARN replay result does not itself
compare every new payload field with the original ledger. Preserve and read back
the exact original amount and source/target evidence; never change an amount
under an existing key or interpret replay as approval for a replacement command.

Payload `reasonCode`/`metadata` are not copied by `operationRequest`; do not assume
they preserve a human approval audit through this HTTP shape. The inspection sent
no earning request and claimed no nPolicy decision. The separate sample-credit
installer calls the existing Loyalty posting owner under its stricter contract;
it does not extend this public earning route.

## Validation

`node --test modules/circa.ewaste/test/circaItemCouponJourneySelection.test.js`
compares every exact case with actual source owners, source hashes, original
reviewed quantities, safe actor binding and nonimportability. The actual Checkout
runner's unfunded isolated preflight must return FUNDING_REQUIRED before any HTTP
dispatch or journal write. This is not native financial qualification.
