# kickoffCore LLM Contracts

`kickoffCore` is a placeholder for project-owned core behavior. Do not use it to bypass framework ownership.

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
