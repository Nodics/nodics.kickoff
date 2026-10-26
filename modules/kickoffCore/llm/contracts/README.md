# kickoffCore LLM Contracts

`kickoffCore` is a placeholder for project-owned core behavior. Do not use it to bypass framework ownership.

## Unreleased Runtime Authority Baseline

The two current Init sections share `data/init-v001` with distinct owned subtrees:
`runtime-assignments` contains the ten selected deployment grants, while
`runtime-principal-scope` contains the exact `apiAdmin` scope adoption instruction.
Keep semantic versions `0.0.9` and `0.0.3` respectively; directory consolidation
does not renumber releases. Only current manifest-declared files belong in this
unreleased data root. Remove superseded snapshots and retention metadata, including
obsolete files inside the canonical root. Do not retain compatibility packs.

Profile still owns `ensureDeploymentAll` and `adoptRuntimeServiceScopesAll`.
Preserve exact permissions, module ceilings, identity coordinates, scope
preconditions, EXPLICIT selection and LOCAL/PLATFORM admission. Recompute exact
Profile prerequisite pins and the dependent principal-scope checksum after source
consolidation. Test current baseline behavior with
`test/runtimeAssignmentDataPack.test.js`, including exact file inventory and
schema-qualified record identity uniqueness. Source-only consolidation never
modifies installed receipts or authorizes reset, initialization, grants or replay.

## Commerce Acceptance Publication Bindings

The project selects owner evidence for each apparel, electronics and telco
catalogue; Product owns the acceptance invariants. For each selected Product,
Pricing, Promotion, Inventory, Tax and Media owner, configuration must expose
`code`, `rootCode`, `sourceVersion` and `targetVersion` through the existing
`NODICS_AGORA_<DOMAIN>_<OWNER>_PUBLICATION_*` environment bindings. All bindings
default to empty. Supply values from the normally approved Online lifecycle,
never from intended versions, source release metadata or fabricated receipts.

Product's target identity can be an immutable graph digest rather than its
source version. A missing target binding remains a prerequisite failure even
when the other three fields are configured. A later deployment may replace its
own binding through nConfig without changing framework acceptance. The existing
`test/projectAcceptanceFixtures.test.js` checks all eighteen owner selections,
empty defaults, target overrides and source/target independence in native and
Docker Local. This source check does not prove installed approval or delivery.

## Local Search Reset Inventory

Both Commerce profiles select Product localized and search projections alongside
Discovery and Commerce Search projections. These selections authorize the
nSystem tenant-document reset only, not physical index deletion. Physical reset
requires a separately qualified offline nTooling/nSearch provider operation.

## Apparel Operational Contributions

The selected Apparel composition exposes only `agoraApparelOpeningStock` and
`agoraApparelPromotionSetup` to the COMMERCE release owner through its existing
inactive-module contribution references. It does not activate the Agora pack,
load Staged application services, select documentation, or authorize installation.
The application-owned profile supplies explicit post-publication steps and the
Inventory/Promotion owners retain authorization and provider prerequisites.
With Apparel deselected neither reference is present. Electronics and Telco have
no operational contribution until their requirements are reviewed.


## Local Commerce seller-proceeds authority

The existing `kickoff-local-commerce-runtime-deployment` v001 assignment includes
`loyalty.rewards.earn` for Digital's canonical `/reward-earnings` seller settlement.
Loyalty Ledger owns the permission catalogue; Profile's existing service group
already includes it. Keep the same `apiAdmin`, default tenant/enterprise, exact
Local Commerce instance, module ceiling and every other permission. This adds no
profile, role, release or framework default. Human administrator permissions and
read-evidence caller selections do not expand a runtime credential.

Retained installation uses the existing authorized native Admin and Profile's
administrative generated API, not replay of the create-preserve Init pack:

1. `GET /profile/v0/principalscopeassignment/code/kickoff-local-commerce-runtime-deployment`.
   Require exactly the retained ACTIVE/ALLOW service assignment with principal
   `apiAdmin`, tenant/enterprise `default`, DIRECT inheritance, matching code and
   scopeCode, and RUNTIME_DEPLOYMENT scope. Its runtimeScope must retain project
   `nodics.kickoff`, environment `kickoffLocal`, server `commerceServer`, instance
   `kickoff-local-commerce-1` and the complete current modules/permissions arrays.
2. `PATCH /profile/v0/principalscopeassignment` with `query: {code: original.code}`,
   `model: {runtimeScope: {...original.runtimeScope,
   permissions: [...new Set([...original.runtimeScope.permissions,
   "loyalty.rewards.earn"])]}}`, and `options: {returnModified: true}`.
   This schema declares neither a revision field nor managed concurrency.
   Profile preUpdate inventories the query and validates the effective assignment;
   schema authorization/record guards and postUpdate credential invalidation remain
   active. Persistence uses ordinary `updateItems`, not revision compare-and-set.
   A code selector alone is not an optimistic concurrency fence. Coordinate the
   update with other operators and verify the complete owner readback; do not
   infer no write from an error or automatically overwrite a changed assignment.
   The historical accepted request included `model.revision: 0`; retain that
   receipt unchanged, but it is not evidence of an enforced revision token.
3. Preserve all other top-level fields (including dates, identity, conditions,
   validity, reason/status, active/effect and scope pins) by leaving them out of
   the model. Copy the entire retained runtimeScope, including optional fields;
   do not replace it with source defaults. Read back the exact permission union,
   complete retained scope and identity. Do not treat an error as proof of no write.
4. Profile's postUpdate invalidates the existing principal's runtime credentials.
   Normal Commerce startup or its existing renewal loop reauthenticates the retained
   API-key proof through `GET /profile/v0/auth/token/default`, with deployment
   identity headers built by `buildRuntimeIdentityHeaders`; no key rotation or
   new assignment. `refreshInternalAuthTokens` fetches and installs the fresh token
   in existing tenant slots. This is an internal lifecycle method, not a new public
   refresh endpoint. A normal coordinated Commerce restart is the deterministic
   adoption path if no existing in-process operator facility is available.
   Since this Local deployment shares apiAdmin, other tokens for that principal
   may also need normal renewal. Never print credentials or infer renewal from health.

Source anchors: Profile `defaultPrincipalScopeGovernanceService.validateUpdate`
and `invalidateRuntimeScopeCredentials`; database
`defaultModelConcurrencyService.getField` and
`defaultModelsUpdateInitializerService.persistUpdates`; nService
`defaultInternalAuthenticationProviderService.fetchInternalAuthToken` and
`refreshInternalAuthTokens`. Existing captured purchases retain their original
proceeds idempotency key; this authority correction performs no financial command.


Observed Local adoption on 2026-10-25: governed PATCH returned HTTP 200 with
modifiedCount 1. Fresh owner readback confirmed only `loyalty.rewards.earn` was
added and the existing runtimeScope was preserved; no revision field was returned.
This does not establish revision 1 or managed CAS. Original receipts remain
`e06-commerce-earning-governed-assignment-update-20261025.json` and
`e06-commerce-earning-assignment-readback-20261025.json` in the acceptance evidence.
The generic legacy-counter regression applies to managed schemas only and is not
validation of this assignment's persistence path.

## Local Commerce carbon bundle runtime binding

The same Commerce assignment adds remote module `wasteCarbon` and exactly
`carbon.holdings.read`, `carbon.holdings.reserve`, `carbon.holdings.release`,
`carbon.holdings.transfer`, and `carbon.holdings.finalize`. The existing Local
Commerce package declares that remote owner without activating it in Commerce.
The existing apiAdmin principal-scope instruction carries those five permissions
because the framework service group does not supply them. No human permissions,
new role, profile, release, or registry/provider qualification is implied. The
three existing business access profiles remain separate from runtime bindings.

Source remains init-v001, assignment section 0.0.9 and principal-scope section
0.0.3. Pin both edited record hashes and the dependent principal-scope checksum.
The principal-scope section explicitly depends on the existing wasteCarbon
permissionCatalogue 0.0.1 and transferFinalizationPermission 0.0.2 owner releases;
Profile base Init does not select them. These prerequisites define permissions,
not provider qualification or installed grants.
This maintains the unreleased source baseline; it does not rewrite installed
CURRENT/import receipt hashes. Never force CURRENT or replay Init for adoption.

For retained adoption, the main operator owns the Local carbon qualification
selection and governed Profile PATCH. Follow the seller-proceeds GET/PATCH and
credential-renewal procedure above, adding the exact module and five permissions
to the retained complete runtimeScope arrays. Verify the existing principal's
allowed scopes through its owner before adoption; an assignment cannot replace
missing service-principal authority. Source scope instructions do not establish
live adoption. Preserve every other assignment and coordinate updates without a
managed revision claim. Verify exact before/after unions and retained identity,
then normal runtime credential renewal. Source tests prove composition only;
installed owner readback and normal mock bundle acceptance remain separate.
