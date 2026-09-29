# agora.apparel contracts

## Reward checkout fixture

This application owns only the declarative fixture at
`config/properties.js` -> `tooling.acceptance.loyaltyRewardCheckout`.
Commerce's `loyaltyRewardProvider` owns the protected acceptance suite and rules.
The suite resolves the fixture through Platform's effective application graph;
operational Commerce does not load this data pack. API operations still select
their normal Platform, Commerce and Loyalty runtime roles.
Known selections are the Style Pass 5 coupon/digital variant, Agora store, default
points program and the deployed Loyalty reward provider. Product price is not
authorization to spend; the maximum spend has no authored default.

Customer/wallet identity, checkout contact, shipping address and maximum reward
amount use existing nConfig `$config: env` bindings with no fallback. Missing or
empty bindings resolve as absent and the framework fixture validation rejects
before API activity. Provide a real, isolated, funded test wallet whose owner
matches the existing Profile customer and Commerce principal. Never invent IDs,
grant permissions, or seed wallet/ledger rows to make acceptance pass.

See the [invocation example](../examples/README.md) for every binding. Credentials
are separate external inputs; never commit real identifiers, contact data or
tokens. Preserve this application's other CMS and initialization configuration.
Later deployment layers may select different fixture data without copying rules.

Execution requires `--execute` and spends rewards/allocates a coupon. It does not
start servers, register a customer, fund a wallet, or issue privileged credentials.
The service token must already have legitimate Loyalty wallet-read authority;
Commerce must already have its normal reserve/capture grants. Denial is an error,
not a request to mutate permissions. Review correlated cart/order evidence after
failure before retrying, since the checkout might have completed.

Evidence limits: API checks cover exact balance deltas, correlated reserve/capture
ledger entries, checkout checkpoints, order payment identity and owned entitlement.
They do not independently read reservation/redemption statuses, payment transaction
entries or delivery rows, nor prove persisted-row request-context exclusion.
Successful API evidence remains `fullAcceptance: false`, with explicit gaps and
CLI exit 2. Do not treat that result as full live or production qualification.
This fixture addition itself performs no live checkout or provisioning.
