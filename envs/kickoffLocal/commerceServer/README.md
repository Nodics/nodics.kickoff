# Commerce Server

Reference customer full Commerce server.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

After changes, run the nearest focused test or the Kickoff structure and documentation checks from the project root.

This Local deployment declares a distinct runtime instance and an environment
reference for its retained service proof. Profile must hold the corresponding
service principal and approved deployment grant before startup. Missing proof
fails closed; never replace it with the shared bootstrap or administrator key.
After a full native-Local reset, start Profile's authority first so its governed
bootstrap can reconcile the explicitly configured deployment grants. Revoked,
disabled, differently owned or non-Local grants require operator provisioning;
startup does not reactivate them.

Reward checkout declares remote `loyaltyApi` and only the additional
`loyalty.rewards.reserve`, `capture`, `release` and `reverse` permissions in this
server's migration policy. The inherited wallet-read permission remains required.
These do not grant customers internal API access or activate Loyalty on Commerce.
Native-Local Profile bootstrap reconciles its generated proof and each approved
deployment separately. Rebuild/start Platform, then Commerce; inspect the retained
Commerce grant and test a customer purchase. Do not repair this through acceptance
scripts, administrator runtime groups or direct database writes.
