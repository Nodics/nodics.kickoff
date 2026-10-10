# Circa customer backend

Follow the project root and modules AGENTS. This `circa.ewaste` customer module
owns Circa identity, site composition, registration/contact adapters, branding,
content, sample data, valuation and deployment configuration over eWaste.
The framework has one eWaste domain accelerator, with no separate Circa accelerator.

Reusable domain orchestration belongs in eWaste. Generic Waste schemas and
lifecycles remain in nodics.waste. Keep Profile, Media, Loyalty, Commerce,
Location and Engagement state behind their owning operations. Reuse the trusted
eWaste request mapper rather than copying identity/permission logic.

CONFIG.circaEWaste owns app presentation and sample valuation. CONFIG.eWaste
contains intentional domain policy deltas only. Preserve existing applicationCode,
orderCodePrefix and data release identity when migrating an active installation.
Import samples only into a new environment through governed destination APIs;
never reset transactional ownership or opening ledgers during a code refactor.

Reference adoption selects EXPLICIT `core-v001` Waste policy and `sample-v001`
demo sections at version 0.0.1 through nImport source-key inheritance. The
policy root stays aligned with the lower-layer eWaste core root so Circa
overrides compose after eWaste source records. Read the existing data
compatibility section in `llm/contracts/circa-application.md`. Fresh-only
eligibility still requires parent/operator verification, and active demo samples
must not be replayed over real customer history.

Run npm test for project adapter/configuration contracts and the frontend live
journey against a local test runtime. Keep illustrative outcomes explicit.

Circa has one customer demonstration dataset, not separate full/partial modes.
Its setup requires customer, enterprise/staff, location, Waste, Loyalty, Store, Commerce
and content sections. USER-triggered selection remains explicit and each owner
still enforces onboarding, stock, issuance, consent and financial admission.
Never report the demo ready from CMS publication alone or make a rejected owner
step optional to obtain a green status. The canonical reference guides belong to
`nodics.ai/nodics.accelerators/modules/waste/modules/eWaste/data/docs-v001`,
selected by its `referenceDocumentation` manifest section, not a hardcoded frozen
payload filename. Semantic successors remain under `docs-v001`; preserve imported
payload bytes and resolve active record families through the canonical contract.
Do not copy framework
journey guides into this module. Only actual partner customization adds local
documentation data, imported independently of business records.

The complete `test/fixtures/circaDemoPolicyProposal.json` terms were explicitly
approved by the human operator on 2026-10-09 for fictional native `kickoffLocal`
testing only, including 100 coupon units per campaign and the exact nine monetary
budgets, not a uniform budget of 100. Preserve its original proposal hash and
review metadata. This test fixture is neither an importable pack nor runtime
authority: approval does not waive signed issuer consent, Profile scopes,
retained publication, installed private persistence, ITEM delivery, payment or
asset-transfer gates. Adopt terms through their existing owner-controlled packs
and operations; never enable production policy or rewrite installed receipts.

The human additionally approved explicitly simulated ITEM delivery for native
Local testing and keeping already-redeemed benefit reversals disabled. Only
`kickoffLocal` selects the framework's LOCAL_SIMULATION owner and exact environment
allowlist; Docker remains off. Preserve all 29 original bundle quantities and
visible simulated/unverified labels with SIM: receipt handles. This is not real
delivery, Store/consent/private-persistence qualification or import authorization
for installed history. Unused coupon and original asset refunds retain their
separate policies. See the local application contract; no duplicate guide belongs
in this project module's documentation data.

Approved Local human roles use separate sample contributions: credit role then
credit staff assignment for only the original online administrator, and opening
role then opening staff assignments for only the three original issuer
administrators. Keep exact permissions and additive Profile owner dispatch;
never replay employee snapshots or add broad administration, general earn or
core-import authority. Read the local credit/opening contracts and source handoff
under test/evidence before adoption. Preserve the unchanged 118/revision-0 credit
guard and install the original credit before buyer wallet mutations. Platform
prerequisites and sealed observation remain deployment-owned.

The separate Local unused-coupon review role and additive staff assignment grant
only `commerce.refund.exception.adjudicate`. They never make missing policy
automatically refundable. Preserve Order's exact deployment-pinned original
case/capture/unused-entitlement adjudication, private phase handoff and immutable
purchase terms. Read `llm/contracts/circa-local-unused-refund-exception.md`;
never add credit, retarget another purchase or enable redeemed-benefit reversal.

Keep the marketplace and four issuer outlet Store references in the EXPLICIT
`circa.ewaste:store` sample-v001 REFERENCE pack, COMMERCE, before publication.
The approved marketplace association is GREENPERKS_ONLINE; the catalogue's
Product, pricing, tax and warehouse source belongs to that marketplace, while
each Promotion policy belongs to its canonical issuer. Do not couple Stores to
coupon/batch/balance snapshots or include them in Staged publication. Preserve
Store identities and portable Profile/Location references; source rows grant no
enterprise authority, seller consent, membership or operational scope. Generated
Store `saveAll` may update existing records under managed revision rules; do not
claim insert-only safety, disable concurrency or rewrite installed receipts.

`circa.ewaste:circaPublicationPlan` retains the complete inert 84-root inventory.
Execute only its four exact authority-scoped subsets: circaCataloguePublicationPlan
under GREENPERKS_ONLINE, and circaGreenPerksPublicationPlan,
circaRenewWorksPublicationPlan and circaLoopCyclePublicationPlan under their
respective signed issuers. Mixed-enterprise inventory is never one authorized
submission or permission to override the signed caller. Preserve existing
GOVERNED_PUBLICATIONS/Process approval and required AFTER_PUBLICATION gates.
The retired commerce-operational snapshots are removed, not migrated or replayed.
Each issuer selects its own circa*Budget instructions, reviews consent through
Promotion, then selects its circa*Issuance instructions referencing the exact
original admission checksum. Keep those six nImport installer selections explicit,
native Local only and v001; no stock, tokens, spent, grants or auth overrides belong
in their JSON. Source selection grants neither approval nor supply. Read
llm/contracts/circa-promotion-setup.md before changing this sequence.

Native kickoffLocal has ten required operator-scoped after-publication stages:
four publication subsets and six separate budget/issuance packs. Preserve exact
`operatorEnterpriseCode` bindings and explicit `afterPublicationStepCode`
selection. Foreign pending stages remain required and visible; never infer global
readiness from one operator's local success. The local pre-sale ownership policy
is a before-publication prerequisite. Do not restore the retired operational
pack, execute the mixed publication inventory, or treat historical receipts as
current authority or qualification evidence.
The separate nonimportable issuer review checklist requires the canonical
consent purpose ISSUED_COUPON_BENEFIT_V1; budget intent never installs a grant.
circaDigitalOwnershipPolicies is a separate explicit Local-only WASTE reference
selection. Preserve its original transfer refund metadata before genuine sale
reservation, full captured POINTS proceeds to the original seller and NONE
carbon settlement. Never patch an older retained sale to add refund eligibility.
Product variants and both localization families must retain DIGITAL attributes.
The installed sample-v001 sections remain immutable. The separately selected
sample-v001 circaAssetClassification section contains only ten en/ar Product
localization successors for the five original assets. It adds DIGITAL_OWNERSHIP
delivery and DIGITAL_COMMERCE inventory discriminators without changing any
other source value. Import through deployment-owned nImport version-aware
saveAll, then separately select circaAssetClassificationPublicationPlan for five
ordinary governed Product successor publications under GREENPERKS_ONLINE.
The plan requires original root version 1 and seals version 2; differing native
root/business values require reviewed reconciliation, not plan-pin retargeting.
Do not append these steps to an already admitted circa setup plan or rewrite
prior journals. The inert test/fixtures/circaAssetClassificationSetupSelection.json
supplies the required BEFORE/AFTER selections for a separately reviewed forward
setup profile; native profile/observation digest selection stays deployment-owned.
Unsupported asset delivery must reject through its owner, never fall back to
physical balances. Do not manufacture seller consent, campaign budgets or item
fulfillment from catalogue labels or the demoPurchaseUnits quantity target.

A partner adopting this reference creates its own application identity and writes
only to its customer project. Reusable eWaste or Waste enhancements go to the
Nodics team through the separate contribution/request and release process;
partners do not move implementation into, or patch, either Nodics-owned layer.

Registration adapters forward business form fields to Profile without local
credential validation or identity construction. Telegram adapters delegate
channel entry/origin composition to eWaste. Application binding belongs in the
project's `eWaste.channelAuthentication` delta; Profile provider-secret bindings
remain with the owning configured runtime.

Arrival validation uses fresh usable coordinates and direct distance within the configured inclusive centre radius, uniformly on Web and Telegram. Accuracy is optional observation metadata, never an arrival gate; preserve valid reported accuracy and represent missing/invalid accuracy as null. Preserve distinct unusable-coordinate and stale-reading failures, current centre eligibility checks, and saved drafts/evidence on rejected checks. Map selection and caller-provided arrival claims never grant arrival.

Circa permits one employee with both review and approval grants to perform both on the same submission. Keep `requireDifferentApprover: false`; preserve role checks, Profile scope, prior verification and separate actor audit records.

Circa selects the eWaste OpenAI environmental assessment provider first, with the local WARM electronics adapter as configured fallback. The separate environmental call uses normalized item metadata and retrieved references; invalid or timed-out responses advance to fallback. Customer labels are Potential CO₂e savings, Carbon equivalent (tCO₂e), and Carbon units for existing rewards. The latter are not issued credits. Estimates preserve weight bounds, provider/model provenance, source references, geography and scenario assumptions. Missing defensible evidence remains unknown. Rewards use original approval evidence; later reassessments and explicit acceptance do not revalue existing balances. Axis approved-submission detail exposes assessment history and review-before-accept actions; asset detail exposes read-only history.

Keep the canonical router and utility registry files even when empty. They are
inherited extension points, not copied framework implementations. `package.json`
`nodics.owns` must reflect actual source responsibilities, including `utility`.
See `llm/examples/README.md` for customer extension and rejection examples.

Impact assessment is mandatory in the eWaste journey. Circa returns the domain-prepared assessment and propagates provider/profile failures for retry; it must not convert them into an empty ready draft. Partial input-only coverage remains explicit and does not imply carbon calculation.
