# Historical Local Acceptance and Ownership Notes

Captured from the Local acceptance checklist during its 2026-09-28 documentation
alignment. This is historical source/test evidence, not current setup guidance or
a statement that the live environment is ready. Earlier open items may be
superseded by later entries. Do not execute embedded commands as a runbook.
Use [the current checklist](../pages/local-acceptance-checklist.md) for setup and
verification. This file is intentionally outside the published catalogue.

### Lightweight customer implementation (2026-09-27)

Authorized mode: Nodics-maintainer implementation across framework and Kickoff.
Outcome: retain customer applications and policy while extracting reusable
mechanisms and removing duplicate configuration. Studied sources include nSetup
ownership/configuration contracts, Circa services, eWaste marketplace/conversation
owners, Local/Docker profiles, nRouter defaults and acceptance scripts.

Owners: Location for generic distance; eWaste for reusable journey, marketplace,
guidance and valuation mechanisms; existing provider/runtime-configuration owners
for credential forms; nTooling for reusable acceptance mechanics. Kickoff retains
application IDs, data, rates, selections, approval/reset policy and deployment
bindings. No database reset, direct database access or automatic publication is
part of this refactor. Preserve public routes, authorization, revisions,
idempotency, evidence privacy and credential isolation.

- [x] Extract reusable service behavior with customer adapters and negative tests.
- [x] Consolidate safe configuration and shared acceptance mechanics without
  widening opt-in policies. Four provider/metadata candidates remain below.
- [x] Compare Local/Docker role behavior and later-layer customization.
- [x] Update canonical principles, owner contracts and regression boundaries.
- [x] Ownership/placement review PASS for this batch: services in Location/eWaste,
  shared tooling in nTooling, policy in customer modules, topology in runtimes.
  Existing unrelated changes were preserved; customer records were not moved.
- [x] Focused tests and full Local/Docker preparation pass; project validation,
  204-package metadata validation and generated documentation checks pass.
- [x] Rebuild/restart all ten local backend runtimes through the supervisor;
  each reports ready. No database reset or direct database access occurred.
- [x] With explicit user approval, register/activate the required Location,
  Waste, Loyalty and Commerce capabilities; prepare Circa's governed data/media
  and approve its publication through an ordinary Process task, without emergency
  override. Circa reports READY/ONLINE; API returns 20 centres, 46 item types and
  36 categories.
- [x] Circa browser test passes registration, actual photo analysis, arrival,
  guidance, correction, confirmation and account persistence. Strict rerun also
  passes mobile map expand/collapse, overflow and page-error checks. Two test
  customers/submissions were created through public APIs; staff approval, reward
  settlement, Telegram and marketplace checkout were not exercised live.

Focused evidence: `node --test modules/circa.ewaste/test/*.test.js` passes 45;
the complete eWaste module suite passes 97; Circa frontend `npm test` passes 162
and typecheck passes; Axis initialization/dashboard selection passes 93.
Application configuration/ownership, Router, nConfig projection/binding and
nTooling helper/governance tests also pass. Preparation is not Docker live proof.
The full Kickoff `npm test` passes after the documentation-contract correction,
including data ownership, documentation, Nexus, qualification and runtime preparation.
The frontend evidence is under its `test-results/live/`; latest receipt is
`WST_6988010ADCCE51523984B340`.

Additional in-scope corrections: refresh three stale hashes in the explicitly
mutable eWaste `0.0.0` development manifest without changing record payloads;
replace the obsolete documentation test's removed Kickoff service dependency
with actual CMS projection and BackOffice profile checks; make the frontend live
map check wait for CMS rendering instead of silently skipping during loading.

Remaining ownership work, intentionally not disguised as completed extraction:

- Copilot source definitions: the consumer owner is active on Local Platform,
  but absent on Docker Platform. Qualify contribution availability before
  replacing all project definitions with owner references; do not activate an
  unrelated provider just to shorten configuration.
- Refund owner-port descriptor: Commerce consumes a cross-runtime eWaste port
  while eWaste is not locally active there. Retain the explicit project binding;
  moving it only into eWaste removes required Commerce configuration.
- Telegram credential forms: Axis resolves schemas through Platform-local
  System configuration, whereas authentication/delivery providers live on
  different runtimes. Provider-owned reuse needs per-schema owner discovery and
  routing across list/read/validate/save/reload. The unused template experiment
  was removed; current credential scope and form behavior remain unchanged.
- Application initialization metadata: preserve curated release selections and
  approval policy. Further reduction requires a tested owner-manifest projection,
  not inferred dependency activation or a second descriptor authority.

The broad principle audit still reports two pre-existing top-level functions in
`defaultProjectRuntimeStartService.js` (lines 26 and 34), outside this batch's
edits. The focused governance regression passes. Do not call this a clean release
gate or a production qualification.

### Customer-application ownership correction (2026-09-27)

- [x] The earlier Agora relocation was incorrect and has been reversed. All
  three Agora applications, profiles, media and data belong in Kickoff, like
  Circa. Framework accelerators provide reusable domains, not their consumers.
- [x] Preserve all 200 moved data files byte-for-byte, including manifests,
  release identities and checksums. No import or persisted-record migration ran.
- [x] Local and Docker runtime preparation, guided initialization, optional
  domain selection, media confinement and repeated release execution pass.
- [x] Compare resolved reset services, required services and search indexes
  across all ten Local runtimes with the pre-change snapshot: unchanged.
- [x] Framework documentation setup metadata is inherited from Axis and remains
  disabled until selected by the customer. Circa inherits the eWaste asset policy.
- [x] Application Builder discovers the Agora packs from the customer project;
  duplicate source owners remain rejected. Independent customer generation passes.
- [x] Project validation, 204-package metadata validation, generated documentation checks
  and scoped semantic/whitespace review pass. Existing unrelated edits were retained.
- [ ] Full framework structure gate: zero errors, but four existing warnings in
  nexusCore, wasteReward and wasteVerification prevent the strict gate passing.
- [x] The legacy documentation-test blocker was resolved in the lightweight
  implementation above by testing the actual CMS/BackOffice owners. Full Kickoff
  `npm test` now passes without restoring the removed customer service.
- [x] Subsequent user-authorized live restart, Circa setup/publication and browser
  acceptance passed as recorded above. Other applications and Docker were not
  live-qualified by that Circa run.

Preserve customer source ownership when committing or deploying. No data reset
is needed. The canonical rules are nSetup's customer-project-mode and customer
configuration classification contracts. Framework boundary checks run with `npm test`
in `nodics.accelerators`; project checks include `test:data-ownership`,
`test/multiDomainKickoffContract.test.mjs` and the runtime preparation tests.

### Whole-project extraction follow-up (2026-09-28)

Scope includes Foundation tooling/configuration, Copilot, Commerce acceptance,
Process/Editorial, Communication, and all customer accelerator consumers.

- [x] Move configuration-only child probing and qualification evidence mechanics
  to nTooling; retain customer selection, scenarios and deployment decisions.
- [x] Reuse nTooling startup and TCP probing in the three Agora Commerce
  acceptance scripts; cleanup owns only children created by that invocation.
- [x] Move reusable Copilot source controls to opt-in Knowledge templates.
  Compare all ten normalized sources for Local and Docker with their previous
  definitions: unchanged. Source identities and customer boundaries remain local.
- [x] Move bounded eWaste catalogue mechanics/defaults to the accelerator and
  preserve a thin Circa adapter with application override hooks.
- [x] Classify Agora/Circa release descriptors as applications and remove the
  duplicate Local Commerce Circa activation entry. Preserve kickoffApi/kickoffInt.
- [ ] Editorial workflow relocation needs a provenance migration: installed
  definitions belong to processServer:init-v001, and reconciliation correctly
  rejects replacing that owner with an Editorial contribution.
- [ ] eWaste sample deduplication needs a versioned migration and prerequisite
  proof: Circa waste data is version 0.0.4, and direct sample imports must not
  lose required records. Do not silently rewrite immutable release checksums.
- [ ] Replace Loyalty checkout acceptance's existing direct MongoDB operations
  with Profile/Loyalty/Commerce owner APIs before promoting any of that logic.
  That acceptance script was not executed during this extraction.
- [ ] Telegram schema routing, cross-runtime refund descriptors, initialization
  metadata and reset inventories still need explicit owner discovery contracts.
  Preserve customer selection and authorization rather than activating owners
  merely to obtain configuration.
- [x] Resolve two unclaimed legacy Sunmarke source files with release metadata
  provenance before removal; the Local-only follow-up below records the result.

Configuration and unit checks are not live application acceptance. This batch
does not reset/import data, approve publication or restart running applications.
Use the focused extraction tests, project ownership gates and runtime preparation
before scheduling fresh browser/API acceptance.

Verification for this batch: full Kickoff `npm test` passes, as do 132 focused
framework tests and 63 project/application tests. The runtime preparation test
now checks normalized Copilot registry entries rather than duplicated raw fields.
Framework `llm:generate` and `llm:validate` pass for 202 module contexts; both
repository whitespace checks pass. These are scoped gates, not a full framework
release qualification or deployed journey test.

### Framework-owned suite migration (2026-09-28)

Maintainer implementation scope: move complete reusable capability-registration,
guided-publication and deployment-qualification suites to BackOffice, CMS and
nTooling respectively. Existing tooling commands remain the entrypoint; customer
fixtures, application/profile selection and deployment credentials remain inputs.
No runtime authority, database schema or automatic activation changes are intended.
Canonical suite commands must reject customer replacement, including lower-index
contributions and project-script alias collisions. Guided approval must require
explicit operator intent and must not use emergency override.

Validation: independent-project command discovery and override rejection,
owner-suite success/failure tests, Kickoff adoption and remaining acceptance
contracts, generated documentation and Local-only runtime preparation. Do not
execute destructive qualification, broad production gates or Docker for this batch.
The remaining suites need their own domain/fixture and API-boundary review; this
batch does not mark those migrations complete.

- [x] Remove the three project implementation files; preserve existing public
  command aliases through capability-owned `tooling.commands` contributions.
- [x] Move deployment qualification's substantive tests to nTooling; retain a
  thin customer adoption check, without parallel local assertion implementations.
- [x] Reserve canonical commands before index ordering. Reject earlier/later
  overrides, replacement arguments and project-script alias collisions. Existing
  noncanonical tooling customization remains supported.
- [x] Keep import/help inert and require explicit mutation intent. CMS approval
  uses normal Process authority; denial cannot trigger emergency retry.
- [x] Test independent partner inputs, success, failed assertions, denied
  activation/approval, state restoration, idempotency and Online import denial.

Remaining script ownership map (not completed by this batch):

Media follow-up (2026-09-28): implementation and owner tests now live in framework
Media under the protected `acceptance:media-seed` command. Both project media seed
files were removed. The existing npm aliases retain only application module
selections; direct `project:run acceptance:agora-cms-media-seed` and
`project:run acceptance:nexus-cms-media-seed` are replaced by the canonical command.
Use `npm run acceptance:agora-cms-media-seed -- --execute` or
`npm run acceptance:nexus-cms-media-seed -- --execute` for authorized Staged upload.
`--help` is inert. The former Nexus default direct Online import and bootstrap
service-key fallback are removed; use normal publication approval separately.

Media ownership review: PASS. Framework Media owns manifest validation and
upload/integrity assertions, nTooling retains shared multipart transport and
command discovery, and application manifests/data/business purpose stay in their
existing owners. Effective Platform nConfig selects descriptors; no parallel
registry, activation, runtime override or data-release change was introduced.
The 11 remaining mixed scripts still require extraction review.

Media verification: 16 focused framework tests and seven project adoption tests
pass. Real Local configuration preflight resolves 37 Nexus and 99 Agora assets.
Both npm aliases reach canonical help. Local runtime preparation, project
validation and ownership governance pass (4,492 files, zero findings). These are
isolated and configuration-level checks: no live upload, Online import, approval,
schema reset or Docker run was performed for this batch.

Additional finding, not fixed in this batch: BackOffice
`defaultBackofficeApplicationInitializationService.uploadMediaAsset` also treats
duplicate-like error text as success. Review that runtime preparation path and
its integrity evidence separately; the new Media suite fails closed instead.

Sample-data follow-up (2026-09-28): the Agora data script is removed. nImport now
owns protected `acceptance:staged-sample-data`; the existing npm alias selects
`COMMERCE_STAGED` and the three Agora application modules. Effective Platform
profiles supply release identities without reading `kickoffCore` or raw manifests.
The customer test checks adoption only; complete success/failure assertions live
with nImport and work with independent partner fixtures.

Start the selected Platform and Staged runtimes through topology tooling before
running `npm run acceptance:agora-commerce-data`. This is validation-only;
`-- --execute-install` explicitly installs. The old storefront environment flag
no longer enables installation. Local bootstrap, live qualification and the
container qualification invocation now pass the explicit flag. Container source
compatibility is maintained, but Docker execution remains deferred.

Ownership review: PASS for this extraction. nImport owns catalogue/validation/
installation invariants; the project owns application selection and journey order;
topology tooling owns process lifecycle. No data releases, schemas, permissions,
runtime defaults or publication policy were changed. Catalogue versions are never
guessed, immutable-release errors propagate, and installation success requires
CURRENT evidence for the expected versions. Ten mixed scripts remain.

Validation: ten focused framework tests and ten project adoption/regression tests
pass. Effective Local configuration selects the three Agora Commerce releases;
all nine Local runtime preparation checks and project validation pass. Ownership
governance reports 4,491 files and zero findings. No live import, database reset,
publication approval or Docker execution was performed in this batch.

| Remaining scripts | Reusable owner and retained customer input |
| --- | --- |
| Agora Commerce, publication and live qualification | Commerce/Catalog/Publishing contracts; customer products, catalogs, scenarios and fixture expectations remain inputs. |
| Editorial live journey | Editorial suite; site fixture and installed workflow provenance require explicit inputs/migration. |
| Functional journey | Engagement and Commerce suites; project selects the combined scenario. |
| Local bootstrap | nTooling orchestration plus capability-owned assertions; project retains documentation/application selections and reset authorization. |
| Loyalty reward checkout | Loyalty/Commerce suites after replacing direct persistence and permission mutation with owner APIs. |
| Runtime deployment grants | Runtime identity/BackOffice suite after effective-graph and provisioning-authority review. |
| Waste BackOffice discovery and management | Waste suites; Circa-specific fixtures and selections remain customer-owned. |

Ownership review: PASS for the three migrated suites and command governance;
the remaining mixed suites are explicitly open. No domain/runtime implementation,
active module selection, reset inventory or business data release changed in this
batch. Generated documentation records were refreshed from their authored sources.
This is not complete framework-wide cleanup or enforced organization-wide CI.

Verification: 23 focused framework tests and nine project adoption/regression
tests pass. All ten Local runtime preparation checks pass. Existing command
aliases resolve owner help without performing acceptance operations;
`qualification:deployment` prints seven planned Local gates and nine pending
external evidence classes, with production approval false. No mutating suite,
publication approval, reset or Docker command was executed for this migration.
Live evidence in earlier sections predates this batch and is not a fresh live
qualification of the newly moved suites.

### Local-only deep ownership follow-up (2026-09-28)

Docker execution is deferred at the user's request. The authored project
inventory, excluding Docker environment files and generated/ignored output,
contains 621 files: 319 data/media, 118 documentation/other, 60 configuration,
50 tests, 42 module metadata, 16 application source and 16 acceptance scripts.
This is an inventory and ownership review, not a claim that every journey has
been live-qualified. All ten Local runtime configurations were inspected.

- [x] Move customer property-placement enforcement into nTooling's existing
  design principle audit; retain thin project adoption tests. Parse configuration
  without execution and support arbitrary server names and quoted keys.
- [x] Share bounded Process task lookup/claim/completion and two further
  acceptance startup/cleanup adapters. Customer correlation, decisions and
  timing remain explicit; failures do not authorize another task or decision.
- [x] Move neutral CMS/Editorial transport defaults to their functional owners.
  Preserve Local connection bindings, enablement and publication policy.
- [x] Move inert Telegram provider technical defaults to Communication. Keep
  Circa credentials, channel selection and notification policy in deployment.
- [x] Move Framework/Axis documentation acceptance metadata to those owners.
  Keep Kickoff's descriptor and pack selection local. Resolve active custom
  module acceptance policy through the existing configuration-only nConfig probe.
- [x] Fix static contribution parsing of quoted property keys; configuration
  comments, strings and adjacent properties must not become contributions.
- [x] Remove two unclaimed old Sunmarke payload files and relocate their
  descriptor to the current sample-v003 source root. Current payloads are intact.
- [x] Detect two pre-existing Circa manifest checksum mismatches. Preserve the
  payloads and declare new Location 0.0.4 and Operations 0.0.2 releases with
  matching checksums. These new releases have not been imported by this cleanup.
- [x] Remove the runtime-grant acceptance script's literal password fallback;
  require supplied or locally provisioned credentials.
- [x] Compare before/after effective module graphs and reset targets for all ten
  Local runtimes: unchanged. Effective Staged CMS/Editorial publication policy
  also remains unchanged. Provider defaults do not select or enable a provider.

Remaining work is not a reason to move customer authority into the framework:

- [ ] Migrate Editorial workflow contribution provenance before moving installed
  definitions. Keep reconciliation's owner check intact.
- [ ] Establish sample-release prerequisites before deduplicating Circa domain
  seeds; direct sample imports must remain complete and versioned.
- [ ] Add owner-API evidence/provisioning support before removing direct MongoDB
  access from Loyalty acceptance. Do not promote or execute that script as-is.
- [ ] Define cross-runtime schema and refund descriptor discovery without loading
  inactive modules solely to obtain their configuration.
- [ ] Review runtime-grant provisioning against the effective graph and explicit
  authorization contract before extracting further administration mechanics.

Retain explicit historical/inactive reset-service names where current framework
contributions cannot represent them. Keep initialization selections and approval
gates, customer content and the intentional kickoffApi/kickoffInt templates.
No explicit schema reset, sample import or publication approval ran in this follow-up.

Verification for the Local-only follow-up: 67 focused project tests and 47 focused
framework tests pass, along with all ten Local preparation checks, project
validation, documentation checks and generated LLM context validation. Some
configuration regression tests also inspect Docker overlays statically; no Docker
runtime, build or acceptance command was executed in this follow-up.

Local preflight passed. `topology:start:all` built all ten Local servers and each
reported ready; `topology:status` independently confirmed all ten ready. Using the
existing local operator credentials, read-only BackOffice bootstrap and module
registration APIs returned HTTP 200 (25 catalogue entries, 313 navigation entries
and eight functional registrations). The test-owned topology was stopped after
the checks. Runtime startup may perform its normal governed Init/reconciliation;
no explicit sample import, reset, registration transition or approval was requested.
This smoke does not qualify every customer journey, frontend rendering, external
provider delivery or the pending new Circa sample releases.

Run the API-only checklist repeatedly when confidence matters. The expected
result is idempotent release qualification, mandatory module visibility,
optional Cron lifecycle handling, fresh-schema reset through the governed
Platform Local reset API, and Axis rendering without manual database inspection
or edits.

For project documentation changes, regenerate the Kickoff documentation pack,
run the documentation contract test, start Platform and WCMS, import or update
the Kickoff docs release, and open `/docs/nodics-kickoff` in Axis. If the page
only works because it was hardcoded in the frontend, the acceptance result is
not valid.

Frontend startup and verification are independent. Run `npm run dev` and `npm test`
inside each frontend application. Backend topology and API acceptance do not start
frontend servers or wait for their health.

The API-only Local map check accepts either a configured Mapbox descriptor or its
explicitly permitted OSM fallback descriptor when no deployment key is supplied.
It rejects a missing/disallowed fallback and does not claim live external-provider
acceptance. Browsers qualify actual tile rendering separately.

### Remaining Ten Suite Extraction (2026-09-28)

This entry supersedes the earlier open script-migration inventory, not its live
evidence limits. All ten remaining reusable implementations have been removed
from `scripts/acceptance`; the customer keeps npm aliases, fixtures, application
data and adoption checks. Customer application modules and kickoffApi/kickoffInt
remain in this repository.

| Former project suite | Canonical owner / command |
| --- | --- |
| Commerce journey | Checkout Core / `acceptance:commerce-journey` |
| Commerce publication | Product / `acceptance:commerce-publication` |
| Commerce live qualification | nTooling composition / `qualification:commerce-live` |
| Editorial live journey | Editorial / `acceptance:editorial-live` |
| Functional journey | nTooling composing Checkout and Engagement / `acceptance:functional` |
| Local bootstrap | BackOffice / `acceptance:local` |
| Loyalty reward checkout | Loyalty Reward Payment Provider / `acceptance:loyalty-reward-checkout` |
| Runtime grants | Profile / `acceptance:runtime-grants` |
| Waste BackOffice discovery | Waste Core / `acceptance:waste-backoffice` |
| Waste management | Waste API / `acceptance:waste-management` |

Ownership review: PASS for this extraction scope. Reusable assertions and their
tests live with owners; fixtures and selected application identities remain here.
Shared configuration uses the effective selected runtime's nConfig projection.
Pre-existing unrelated data/configuration edits were retained. Registry protection
covers independent projects and all ten retired script names. This is source and
isolated-test evidence, not live deployment qualification.

Validation: owner suite tests, shared API/workflow/cleanup tests, command ownership,
customer adoption/configuration tests, project validation and ownership checks
pass. All nine existing runtime-preparation checks pass; this is not a claim that
ten live runtimes were launched. All ten extracted CLI help paths are inert.
Static Docker contract checks ran; Docker execution remains deferred.

Live prerequisites and explicit gaps:

- Commerce publication requires exact approved Online receipts from each owning
  capability. The checked-out Product, Pricing, Promotion, Inventory, Tax and
  Media modules do not register the corresponding nPublish domain adapters, so
  this is an implementation prerequisite, not merely missing environment values.
  Direct Online import/restore and service-key fallback were removed;
  the acceptance suite does not manufacture missing transfer evidence.
- Loyalty checkout requires an existing funded customer wallet and authorized
  service credentials. Reservation/redemption/payment-record evidence lacks the
  required owner API coverage; API success still reports `fullAcceptance: false`
  and exits 2. Direct database writes and permission grants are not substitutes.
- Waste management proves its secured API contract, not governed data import or
  CURRENT release state or persisted records. Impact requires an already-authorized
  service token. Those live checks remain separate nImport/Waste qualification.
- Profile grant acceptance is read-only. Native Profile bootstrap remains the
  grant provisioning authority; no acceptance-owned grants or password fallback.
- Editorial contribution provenance remains customer-owned until an explicit
  installed-definition migration. No workflow provenance was silently renamed.

No live database reset, sample import, approval, wallet spending or server startup
was performed for this extraction batch. Run the governed Local journeys with
their documented prerequisites before claiming application or release readiness.
Generated documentation checks pass for all nine customer pages; framework LLM
context generation and validation pass for 202 modules. No production readiness
is inferred from these checks.

### Test Ownership Cleanup (2026-09-28)

Scope: maintainer-authorized test-only ownership cleanup following the acceptance
implementation extraction. Classify individual assertions: framework rules move
to their existing capability owners with independent fixtures; customer data,
binding names, module selections and deployment coordinates remain customer-owned.
No business policy, runtime activation, schema or publication authority changes.

Readiness evidence: root/module contracts, the nSetup customer-project contract,
the listed customer tests, existing owner tests, nConfig's configuration-only
probe, nTooling command discovery and package test entrypoints were inspected.
Reuse existing owners and harnesses; no new configuration layer or test registry.
Validation covers moved owner assertions, retained customer assertions, public
test entrypoints, preparation, documentation and ownership. Live/Docker execution
is outside this batch.

- Consolidate per-suite command adoption in `test/acceptanceInfrastructureContract.test.mjs`.
  Delete the separate Commerce journey/data/publication and deployment-adoption files.
- Combine customer bootstrap and server choices in `test/projectAcceptanceFixtures.test.js`;
  move generic CMS publication defaults and Communication adapter defaults to owner tests.
- Keep Apparel Loyalty product and external binding assertions in
  `modules/agora.apparel/test/loyaltyCheckoutFixtures.test.mjs`; generic missing/empty
  fixture rejection belongs to the Loyalty Reward Provider test suite.
- Share configuration-test consumer mechanics through nTooling's
  `test/helpers/projectConfiguration.js`. The customer helper binds only its root
  and default environment selections; it does not reimplement loader semantics.
- Keep documentation records, Agora media/data closure, Circa overlays, selected
  application graphs and environment coordinates in customer tests. Do not move
  those fixtures into framework merely to empty the project test directory.

Additional ownership review completed:

- Configuration merge/binding behavior belongs to nConfig; CORS enforcement to
  nRouter; connection inheritance to Database, Search and Redis Cache. eWaste
  owns the neutral arrival-radius requirement. Customer tests retain the actual
  Local/Docker endpoint, policy and application-activation selections.
- Runtime preparation mechanics, topology dependency/PID rules and offline
  container integrity contracts now live in nTooling with independent temporary
  projects. Kickoff retains its nine runtime graphs and selected deployment
  coordinates. Preparation does not start providers, hooks or listeners.
- nPublish owns operation authorization contracts; CMS owns service-only target
  routes and guided acceptance boundaries. Kickoff retains release pins and its
  Staged/Online/Process composition.
- Nexus owns reusable corporate-content declarations. Product and Commerce
  Search already cover index partitions, locale policy and publication routing;
  nImport covers release lifecycle and destination rejection. Duplicate generic
  assertions were removed, while actual Agora seed and projection checks remain.
- Documentation generator record shape, import order, omitted optional fields
  and generated hashes are checked in nTooling's independent documentation
  identity fixture. Kickoff retains authored content depth, concrete identities,
  navigation/access choices, source boundaries and application record closure.

Validation: PASS for the scoped owner tests and retained customer contracts.
The refreshed Commerce entrypoint passes 12 cases; the customer data,
documentation, multi-domain, Nexus and Waste group passes 23; configuration
inheritance and application ownership pass 9. Qualification passes all its
contract commands, and all nine Local runtime preparation scenarios pass.
The new harness/preparation/topology/offline-container group passes 8 cases;
the publication, Product/Search, nImport, Nexus, environment and documentation
owner group passes 38; independent documentation generation passes 2.
Other focused configuration/provider and acceptance-default owner tests pass.

Seven former root test files are consolidated or replaced. Remaining project
tests are intentional customer composition/data regression coverage, not a
second implementation of framework acceptance rules. The canonical contract
now requires assertion-level classification, independent owner fixtures and
updated test entrypoints. Framework ownership provides one upgrade contract;
it cannot prevent a partner from skipping verification in its own repository.

No Local servers or Docker workloads were started, and no data was imported,
reset, approved or published. Offline container checks do not qualify Docker.
The live prerequisites listed above remain unresolved by this test-only work.
