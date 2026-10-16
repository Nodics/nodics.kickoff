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
Profile authority must hold the selected governed deployment assignment before
this runtime starts. Optional demo data may provide first-install assignments;
existing grants require authorized Profile updates. Startup does not reactivate
revoked or disabled assignments or infer rights from server configuration.

Reward checkout declares remote `loyaltyApi`; its governed Profile assignment
requires the owner-defined `loyalty.rewards.reserve`, `capture`, `release` and
`reverse` permissions plus wallet-read access. These rights belong in the
implementing owners' Profile-managed packs, not this server's migration policy.
These do not grant customers internal API access or activate Loyalty on Commerce.
Profile governs each exact deployment assignment separately. Coordinated runtime
validation must inspect the retained Commerce grant and test a customer purchase;
source configuration alone proves neither. Do not repair this through acceptance
scripts, administrator runtime groups or direct database writes.

Pricing's existing Online `sourceAuthority` binding explicitly selects only the
original Local Staged publisher's signed deployment coordinates. This preserves
the reviewed transport and enterprise selection while adopting the shared writer
guard; Waste read callers receive no mapping. Verify with
`node --test test/commerceOwnershipEvidenceAdoption.test.js`. Source configuration
does not prove installed publication or authorize replay.

The Local environment's COMMERCE API-exposure profile enables only the
Store-owned `storePlacementRead` route. This server selects
`store.placementRead` for the original Staged deployment. Its one exact placement
is `circaMainStore` / `GREENPERKS_ONLINE`; the service retains signed tenant and
enterprise claims, two fresh bounded generated reads and private admission.
No generic schema authority, Store write, import, staff or publication grant is
contributed. This source selection is not native acceptance; rebuild/start and
installed readback require separate coordinated clearance. Run
`node --test test/commerceOwnershipEvidenceAdoption.test.js`.
