# Local Runtime Topology

Kickoff provides a local reference topology so a developer can start Nodics and
see the major runtime surfaces without creating a new customer project first.
The local environment is `kickoffLocal`.

## Disposable Native Local Rebuild

This is an operator maintenance route, not routine startup, a production reset
or permission to execute these actions. Prefer retained-data testing unless the
owner explicitly authorizes destruction. The governed Platform Local reset
clears selected records/search projections through owner APIs; it does **not**
physically drop all schemas or establish an empty auth namespace. See the
[framework Local reset contract](../../../nodics.ai/nodics.foundation/modules/nSystem/llm/contracts/local-reset.md)
and [maintenance outage contract](../../../nodics.ai/nodics.foundation/modules/nTooling/llm/contracts/tooling-governance-contracts.md#maintenance-outage-evidence).
These repository-relative framework links assume the reference sibling layout;
other installations must resolve the same contract in their selected framework.

### Exact Scope And Isolation

Current native source declares ten backend runtimes and eleven Mongo database
names, including the additional Cron database selected by Process:

| Owner selection | Mongo database |
| --- | --- |
| Platform | `kickoffLocalPlatform` |
| WCMS Staged / Online | `kickoffLocalWcmsStaged`, `kickoffLocalWcmsOnline` |
| Process / Cron | `kickoffLocalProcess`, `kickoffLocalCron` |
| Commerce Staged / Online | `kickoffLocalCommerceStaged`, `kickoffLocalCommerce` |
| Engagement / Loyalty | `kickoffLocalEngagement`, `kickoffLocalLoyalty` |
| Location / Waste | `kickoffLocalLocation`, `kickoffLocalWaste` |

This is a source inventory, not approval for every installation. Before effects,
resolve effective server/module database options, endpoint identity and later
overrides; compare them with the approved exact eleven-target plan. Reject any
shared, unexpected or unresolved target. Never derive a drop set from
`kickoffLocal*` or a global database list. Explicitly disposable data need not be
backed up when the owner waives preservation; all other targets remain protected.

Native Local's Redis engine prefix is `kickoffLocalRuntimeAuth`; the cache owner
constructs the auth storage namespace `auth_kickoffLocalRuntimeAuth_`. Both nAuth
and Profile auth/refresh consumers must resolve that same isolated selection.
The prefix is not sufficient proof of exclusivity: establish no other deployment,
writer, issuer or consumer shares it at the actual Redis endpoint/database.
Docker Local retains a different selection and is not covered by native Local
approval. Do not erase `auth_localRuntimeAuth_`, shared `nodics` state or any
namespace merely because it looks old. Stale principal stamps, sessions and
handoffs are security state, not harmless application-cache entries.

Native search uses explicit physical indexes
`kickofflocal_discoverydocumentprojection`, `kickofflocal_productlocalized`,
`kickofflocal_productsearchprojection` and
`kickofflocal_commercesearchruleprojection`; logical names remain unchanged.
WCMS Experience uses the existing Discovery projection, not another physical
index. An isolated index name does not grant deletion permission. Shared search,
Redis and Media storage remain outside this approved Mongo/auth reset scope.
For a full fresh claim, verify retained deployment projections/bytes are empty
or intentionally reusable through their owners; otherwise report residual state.

### Stopped-Stack Sequence

1. Obtain explicit disposable-target and isolated-auth-state authorization;
   decide whether preservation is waived. Record exact approved targets and
   source/effective configuration, not credentials or key contents.
2. Stop the owned backend supervisor with `npm run topology:stop`. Confirm all
   ten selected ports are down and no participating backend, scheduler, import
   worker or independently launched writer remains. Use the existing nTooling
   maintenance outage evidence and explicit operator exclusion; port checks alone
   are insufficient. Keep writers stopped throughout the provider actions.
3. Preflight Mongo endpoint/database identity and Redis endpoint/database plus
   the exact namespace above. Establish exclusivity, bounded inventory and
   separate approval before any deletion. Do not start a runtime merely to obtain
   an auth token for maintenance against already dropped persistence.
4. Through the separately approved provider maintenance route, drop only the
   eleven exact Mongo targets and clear only the reviewed isolated auth state.
   These are coordinated operations, not an atomic transaction. If either fails
   or becomes uncertain, keep the stack stopped and reconcile both inventories.
   No global Redis flush, wildcard database drop or shared-provider purge is allowed.
5. Require acknowledged Mongo drops with zero remaining collections in every
   target and a bounded count-only verification of zero matching isolated auth
   keys. Do not log key names/values or assume a fixed number of keys. Preserve
   shared state and record excluded/residual provider scope explicitly.
6. Restart through `npm run topology:start`; require all ten selected backends
   ready, then verify normal Axis login and owner readiness. Startup must never
   autoerase the security cache or weaken versioned principal writes. A stale
   cache-write failure is a reset reconciliation failure, not a retry workaround.
7. Continue initialization/imports through normal Axis owner workspaces and
   governed release selection. This browser acceptance route must **not** invoke
   `acceptance:local:fresh` or another acceptance runner that auto-imports or
   approves data. Backend readiness is not completed browser acceptance.

Framework nTooling now owns `project:local-reset-maintenance` and delegates to
the exact configured Mongo/Redis owners. After review, from the project root:

```sh
nodics project:local-reset-maintenance \
  --environment=kickoffLocal --project=nodics.kickoff \
  --databases=kickoffLocalPlatform,kickoffLocalWcmsStaged,kickoffLocalWcmsOnline,kickoffLocalProcess,kickoffLocalCron,kickoffLocalCommerceStaged,kickoffLocalCommerce,kickoffLocalEngagement,kickoffLocalLoyalty,kickoffLocalLocation,kickoffLocalWaste \
  --auth-namespace=auth_kickoffLocalRuntimeAuth_
```

This default dry-run checks exact configuration and outage only, not provider
inventory/emptiness. It does not stop running runtimes; a live stack causes refusal.
Only after target review and explicit destruction authorization may the operator
append `--execute --exclusive-deployment --writers-excluded`. These are operator
attestations, not independent proof; do not provide them if another deployment
or writer could share the targets. No secret is a CLI argument.

Execution inspects all targets within provider bounds, rechecks configuration
and outage, physically drops and verifies the selected Mongo databases, then
removes only unchanged reviewed auth keys and verifies zero matches. Shared
providers remain untouched. Count-only receipts distinguish completed from
partial/uncertain effects. Any failure blocks restart; reconcile before a new
reviewed attempt, never blind-retry or lower auth versions. The command closes
its own clients but never starts/stops services, grants access, imports releases
or runs acceptance. Continue normal Axis UI imports only after approved restart.

Installed qualification remains separate from source tests. Current support is
native standalone Mongo/Redis with conservative environment-prefixed names;
replicas, Sentinel, ambiguous/proxy endpoints and scopes exceeding bounds refuse.
Operator outage/exclusivity cannot be inferred from naming or a port scan alone.

### Observed Recovery And Evidence Boundary

The coordinating operator reported on 2026-10-01: all ten backends stopped;
eleven approved disposable Local databases physically dropped; the first start
failed on a stale versioned auth principal write. With ports stopped again,
removing exactly six keys from the proven exclusive namespace and repeating the
eleven drops allowed all ten backends to start. Shared Redis/search/Media were
untouched. This is supplied operational evidence, not a reset executed or
independently replayed by this documentation task. Six is an observed count,
not a prescribed deletion set. Do not use this recovery to claim empty shared
providers or qualified application journeys.

Source anchors: `envs/kickoffLocal/config/properties.js` (prefix), each selected
server's `config/properties.js` (database options),
`envs/kickoffLocal/src/search/indexes.js` (physical index selection),
`test/nativeLocalProviderIsolation.test.js` (real owner configuration/loader,
without provider connections), and framework
`DefaultLocalResetProviderService`, `DefaultCacheConfigurationService`,
`DefaultRedisCacheService` and `verifyMaintenanceOutage`. These sources establish
scope/mechanics; approved live receipts establish actual effects.

## What this is

The local runtime topology is the smallest practical Nodics deployment on a
developer machine. It runs the framework as real backend servers, not as mocked
screens. That is important because Axis, BackOffice, module registration,
content-pack import, API contracts, authentication, and WCMS routing all depend
on backend authority.

The goal is not to teach every production option on day one. The goal is to
give a beginner a reliable local loop: configure framework location, install
dependencies, start servers, log in, import/update data, and observe the
runtime from Axis.

| Runtime part | Business purpose | Developer/operator responsibility |
| --- | --- | --- |
| Platform | Employee login, BackOffice bootstrap, module registry, and API discovery | Start first, verify Profile and BackOffice are reachable, and keep tokens out of logs |
| WCMS Staged and Online | Governed content, media, documentation, and public delivery | Keep Staged authoring separate from Online delivery and import content packs through governance |
| Process and Automation | Workflow, cronjob, scheduled capability, and recovery evidence | Start when process or scheduled behavior is being tested and avoid duplicate scheduler authority |
| Waste Management | Generic waste submission, collection acceptance, verification, receipt, impact, and accelerator/project presets | Keep Waste separate from Loyalty and Location, and load project overlays after scenario accelerator data |
| Axis | Employee control plane for setup, import, documentation, and operations | Point to the correct Platform URL and verify only authorized capabilities appear |
| Nexus and Agora accelerators | Public/customer-facing proof of Online delivery | Consume Online and customer-safe APIs only, never Staged or internal operations |

## Servers

The current local topology uses separate runtime servers:

- `platformServer` starts the Platform runtime. It loads Core, Platform,
  Profile, BackOffice, the Platform `axis` backend module, and Kickoff project
  modules.
- `wcmsStagedServer` starts the WCMS Staged runtime. It loads Core, WCMS, CMS,
  Media, and Kickoff content-pack modules for authoring, import, review, and
  publication-source behavior.
- `wcmsOnlineServer` starts the WCMS Online runtime. It loads the approved
  delivery boundary for public CMS, media, Nexus, and Agora consumption.
- `processServer` starts the combined Business Process & Automation runtime.
  It loads Core, Process, cronjob, workflow modules, and Kickoff project
  modules. The `workflow` module owns process/workflow definitions; the
  `cronjob` module owns job definitions, triggers, scheduler state, and
  execution lifecycle.
- `wasteServer` starts the isolated Waste Management runtime. It loads
  `nodics.waste`, the Waste accelerator umbrella, `eWaste`, and the
  Circa application module while keeping Loyalty, Location, vendor, recycler,
  and logistics integrations in their owning layers.

Kickoff intentionally has no standalone cronjob server. Scheduled automation is
available only through `processServer`, preventing accidental duplicate
scheduler processes while cronjob retains ownership of its job lifecycle.

Axis, Nexus, and Agora are separate frontend applications grouped locally by
the optional `nodics.exp` workspace. `nodics.exp` owns frontend discovery and
tooling only; each application still owns its own source, release, tests, and
runtime behavior. Axis connects to Platform for employee authentication and
BackOffice bootstrap. Nexus consumes WCMS Online and Engagement public delivery
contracts. Agora consumes Platform, WCMS Online, Engagement, and Commerce
customer contracts.

## Optional capabilities and failures

The reference configuration no longer makes Location a prerequisite for all
Waste activation or startup, and it does not impose a Commerce/Discovery
activation gate on the Accelerators umbrella. Concrete domain dependencies and
required reference validation still apply. Activate only the business
capabilities selected for the project through the existing Module Registry.

Foundation, Platform and WCMS remain protected functional roots. Process and
Localization are optional; existing registered/enabled state is preserved when
upgrading their metadata. No reset or automatic deactivation is performed.

After a successful supervised launch, a runtime exit leaves its peers running.
Inspect `npm run topology:status` and the affected log. Its existing `start:*`
command can restore it independently in an operator-owned terminal. Stop that
independent process explicitly before restarting the full supervised topology.
Startup errors still fail the requested launch. These behaviors use the existing
environment profile, module metadata and framework supervisor, not another
configuration layer.

## Start locally

Use separate terminals from the Kickoff repository:

```bash
npm run start:platform
npm run start:wcms:staged
npm run start:wcms:online
npm run start:process
```

Alternatively, the governed supervisor starts the selected backends in
dependency order. Do not combine this with already running individual servers:

```bash
npm run topology:start
```

In the preferred local checkout, frontend applications live under
`../nodics.exp/`:

```text
nodicsRoot/
├── nodics.ai/
├── nodics.kickoff/
└── nodics.exp/
    ├── nodics.axis/
    ├── nodics.nexus/
    └── nodics.agora.apparel/
```

Start frontends independently with `npm run dev` in their own repositories,
wherever they are located. Backend topology does not discover, start, stop or
qualify frontend processes. Follow each frontend's own test and browser guidance.

Continue with [Local setup to live](local-setup-to-live-runbook.md) for the
administrator journey, then [Local acceptance](local-acceptance-checklist.md)
for developer and QA verification. These source guides are usable before any
documentation pack is installed.

The default local ports are:

- Axis: `http://localhost:3100`
- Nexus: `http://localhost:3200`
- Agora Apparel: `http://localhost:3300`
- Agora Electronics: `http://localhost:3400`
- Agora Telco: `http://localhost:3500`
- Circa eWaste: `http://localhost:3600`
- Platform: `http://localhost:4300`
- WCMS Staged: `http://localhost:4312`
- WCMS Online: `http://localhost:4314`
- Process and Automation: `http://localhost:4330`
- Engagement: `http://localhost:4340`
- Commerce: `http://localhost:4350`
- Waste Management: `http://localhost:4370`

## Before starting

Review `config/properties.js` and the selected `envs/<environment>/config`
layers before starting. Kickoff keeps local configuration in Nodics layered
properties, not in project-owned `.env` files. Server startup should use the
selected environment and fail only when a property required for safe boot is
missing.

Then install project dependencies:

```bash
npm install
```

Kickoff does not copy or symlink framework modules into `.nodics/`. Project
scripts call `nodics`, installed from the declared `nodics.foundation` dependency.
Its framework-owned entry point delegates to the existing command registry and
runtime resolver. The project no longer owns a JavaScript dispatcher.
For example, `npm exec -- nodics start --env kickoffLocal --server platform`
selects a server directly. `npm exec -- nodics build --env kickoffLocal --server platform`
generates that server's shared artifacts. Add `--node <name>` to select a declared
node without creating node-owned output. Clean/build require a selected server.

## Start sequence

Use separate terminals so logs stay readable:

1. Start Platform first. It owns Profile login, BackOffice bootstrap, module
   registry, runtime catalogue projection, and OpenAPI contract discovery.
2. Start WCMS second. It owns documentation sites, catalogs, pages, components,
   routes, media metadata, and content delivery.
3. Start Process and Automation when process/workflow or scheduled behavior is
   needed. It proves `workflow` and `cronjob` can share one runtime environment
   under `nodics.process` while keeping separate module ownership.
4. Start Waste Management when waste submission, acceptance, receipt, impact,
   or Waste accelerator data is being tested. Its local initialization profile
   installs `eWaste:core-reference` followed by
   `circa.ewaste:waste-policy`.
5. Start Axis, Nexus, and Agora after backend servers are reachable. Each
   frontend uses only its governed backend contracts and configured CORS origin.

## Login and first checks

Open Axis at `http://localhost:3100`. For the local reference data, use:

```text
Enterprise: default
Login ID: admin
Password: configured bootstrap administrator password
```

After login:

- open the System and Integrations area and check the module registry;
- confirm Core, Platform, and WCMS are active and not treated as optional;
- register and activate required business capabilities before initializing a
  customer-facing application: Agora requires Commerce and Discovery; Nexus
  requires its public content and engagement capabilities when those features
  are enabled;
- if Process and Automation is running, confirm Process appears from the
  composed runtime and exposes both `workflow` and `cronjob` capabilities;
- open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics
  Kickoff are shown as separate documentation products;
- import or update documentation packs only through the authorized Axis action.

## Fresh environment setup order

A fresh local schema is ready only after four governed lanes are complete.
Do not treat a successful import button as proof that a storefront is ready;
the setup page must also show required capabilities, publication state, and
Online readiness.

| Order | Axis workspace | What must happen | User-visible result |
| ---: | --- | --- | --- |
| 1 | Empty-database Axis setup | Initialize the managed Axis baseline, BackOffice workspace, CMS baseline, admin access, and required core data. | Axis leaves recovery mode and exposes authorized navigation. |
| 2 | Module Registry | Register and activate functional capabilities needed by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when enabled. | Setup and Accelerators no longer shows a capability-blocked state for that application. |
| 3 | Setup and Accelerators | Initialize Nexus or Agora application packs. A complete pack imports CMS content, routes, navigation, media metadata, media artifacts, commerce data, search/discovery data, and operational data owned by that application. | The application row shows initialized Staged data and the next publishing action. |
| 4 | Publishing and approval | Request approval, review evidence, approve or reject, and publish the approved release to Online. | Nexus and Agora can render Online content; otherwise they show the maintenance page. |

Documentation packs are independent from accelerator setup. Framework, Axis,
and Kickoff documentation can be imported, reviewed, and published in parallel
with application setup. Swagger/OpenAPI is generated from active runtime
contracts and should not be hidden behind documentation content-pack approval.

## Documentation import

Project documentation is generated into a Kickoff content pack and imported
through WCMS. The pack code is `kickoffDocumentation`; the CMS Site is
`kickoffDocumentationSite`; the default route is `/docs/nodics-kickoff`.

If the documentation page is unavailable in Axis, check that WCMS is running,
the content pack is generated, and the latest pack version has been imported.
The content-pack service rejects changed content with the same immutable
version, so update the catalogue version whenever generated hashes change.

## Troubleshooting

If Axis shows a BackOffice registry recovery page, Platform is not reachable,
the Platform port is wrong, or Axis public configuration points at the wrong
base URL. If Axis logs in but documentation routes show CMS recovery, WCMS may
not be running, the documentation source may not be registered, or the content
pack may not be imported. If an optional module appears only after refresh,
check the module registry API response after each lifecycle operation before
assuming the frontend state is wrong.

If Nodics scripts cannot locate framework packages, check `NODICS_FRAMEWORK_ROOT`
and confirm the configured directory contains `nodics.foundation`,
`nodics.platform`, `nodics.wcms`, and any optional framework modules used by the
local server.

## Production note

The local topology teaches ownership, not final infrastructure. Production may
run modules in separate processes, hosts, containers, or release units. That
does not change documentation ownership, module identity, API authority, or the
rule that Axis discovers runtime capability from BackOffice instead of keeping
its own endpoint registry.

## Common mistakes

- Starting only the frontend and assuming backend discovery should work.
- Putting long inherited property blocks into a server config when the project
  only needs a small override.
- Assuming every framework module in the checkout is active for every server.
  The configured runtime graph decides what loads.
- Treating Cron as owned by Process just because the reference workspace can
  run both in the same `processServer`.
- Using local ports, database names, or project names as permanent framework
  assumptions.
- Forgetting that restart should preserve persisted registry and imported
  content state.

## Verification

Use these focused checks when changing Waste composition:

```bash
npm run test:waste-overlay
npm run test:waste-runtime
npm run acceptance:waste-management
```

`test:waste-overlay` proves the Circa-owned Waste policy data
contract. `test:waste-runtime` proves the server composition, initialization
profile, and active modules. `acceptance:waste-management` installs the
schema-driven accelerator and application policy releases, validates persisted
records, and runs the generic acceptance, submission, lifecycle, and impact
journey.

The final pre-Builder gate must use a fresh Local database and qualify all nine
runtimes together: Platform, WCMS Staged, WCMS Online, Process, Engagement,
Commerce, Waste Management, Axis, Nexus, and Agora. Verify the topology from
the customer project, not from framework internals. Platform should expose login,
BackOffice bootstrap, registry, and API discovery. WCMS should expose content,
documentation, media, and import/export delivery. Process and Automation should
report Process runtime availability with workflow and cronjob technical modules
from the composed server.
Axis should connect through Platform and WCMS instead of local hardcoded module
state.

For a beginner-friendly proof, open Axis after the servers start and inspect
Dashboard, System and Integrations, Module Registry, Imports and Exports,
Content and Experience, Media, Business Process & Automation, and
Documentation. The UI should explain the same topology that the server
configuration declares.

## Continue

- [Kickoff project overview](project-overview.md)
- [Customer customization guide](customization-guide.md)

Frontend startup and verification are independent. Run `npm run dev` and `npm test`
inside each frontend application. Backend topology and API acceptance do not start
frontend servers or wait for their health.

Process runtime identity explicitly includes CMS for the governed publication
decision callback. Platform routes the operational Commerce reference activation
release to Commerce, matching its COMMERCE destination; Staged remains the product
authoring destination. These are Local deployment bindings, not new module defaults.

## Local employee email: sending-runtime configuration

This section is for the Kickoff runtime maintainer, not the person registering in
Axis. It describes the project-specific bindings under
`envs/kickoffLocal/engagementServer/config/properties.js`. Communication's existing
SMTP provider owns the transport; Profile owns registration, recovery and access.
The provider remains disabled until deliberately enabled with complete test inputs.
Adding this configuration neither enables employee registration nor approves users.

The reference server selects the framework's `SMTP` provider type. It inherits
its bounded timeouts, required TLS, test-only restriction and disabled production
qualification. It does not instantiate an SMTP client in Profile, create a second
configuration file, or distribute email credentials to other servers.

| Runtime input | Meaning | When absent |
| --- | --- | --- |
| `NODICS_EMPLOYEE_SMTP_ENABLED` | Exactly `true` or `false`; explicit sending opt-in. | `false`; no SMTP transport is created. |
| `NODICS_EMPLOYEE_SMTP_HOST` | Approved SMTP server hostname. | Inherited empty host; not ready to send. |
| `NODICS_EMPLOYEE_SMTP_PORT` | Optional numeric port selection. | Inherits provider port 587. |
| `NODICS_EMPLOYEE_SMTP_SECURE` | Optional implicit-TLS selection, exactly `true`/`false`. | Inherits `false` with required STARTTLS. |
| `NODICS_EMPLOYEE_EMAIL_SENDER` | Approved single sender mailbox and SMTP username. | `null`; not ready to send. |
| `NODICS_EMPLOYEE_SMTP_PASSWORD` | Privately supplied test SMTP credential. | `null`; not ready to send. |
| `smtpCommsProvider.allowedRecipients` | Exact approved Local capture recipients; later configuration overrides require separate approval. | The three `axis-onboarding-acceptance.test` addresses listed below; sending remains disabled. |

Port 465 requires explicit implicit TLS. The project does not disable certificate
validation or permit remote plaintext. Use an approved secret-injection mechanism;
never put real values into this guide, source control, screenshots or chat. This
reference binding is password-mode; an OAuth deployment must supply the existing
provider's complete OAuth credential object through an approved later layer.

### Configure and verify this deployment

#### Registration Prerequisites

Local Platform exposes two independent, default-false operator attestations:
`NODICS_LOCAL_REGISTRATION_INVENTORY_QUALIFIED` and
`NODICS_LOCAL_REGISTRATION_CLAIM_INDEX_QUALIFIED`. Select them only after the
authenticated installed-owner inventory/source review and exact native
EnterpriseAccessAssignment claim-index inspection. Neither starting the
assessment nor enabling onboarding changes these attestations. The installed
runner does not set them or certify runtime/source identity. Record the actual
deployment revision/build separately. These selections do not qualify password
recovery, membership switching, Team operations or another environment.

For the approved capture-only browser session, bind SMTP to `127.0.0.1:1025`
with explicit `NODICS_EMPLOYEE_SMTP_ENABLED=true`,
`NODICS_EMPLOYEE_SMTP_SECURE=false`, `NODICS_EMPLOYEE_SMTP_REQUIRE_TLS=false`,
`NODICS_EMPLOYEE_SMTP_ALLOW_INSECURE_LOOPBACK=true` and
`NODICS_EMPLOYEE_VERIFICATION_STORE_ENABLED=true`. This exception is limited to
loopback; remote plaintext remains refused. Mailpit must have no relay and must
enforce the same three-recipient allowlist as the provider. The approved synthetic
sender is `no-reply@axis-onboarding-acceptance.test`; supply an ephemeral private
test credential only to the capture transport. Do not reuse it for real SMTP.
Registration and delivery remain browser acceptance cases, not inferred passes
from configuration or provider inspection.

Local Platform declares `commsApi` as a remote module and contributes exactly
`communication.request` and `communication.verification.execute` to its existing
runtime deployment grant. This is not activation of Communication inside Platform
and does not grant callback/retry capabilities. The signed source/target module
checks and Communication's own service, permission and private-capture admission
remain mandatory. These additions are scoped to Local Platform, not Docker or
other runtime declarations.

For previously created Local tenants, Platform explicitly selects only `commsApi`
in `profileTenantProvisioning.localRuntimeRemoteModuleExtensions`. Profile still
requires the original deployment identity, immutable namespace bindings, its fresh
authenticated grant and the server's resolved remote-module declaration. No
active/storage module growth or new server enrollment is allowed by this setting.
Other runtimes and Docker retain the framework's empty extension allowlist.

#### Employee Review Deployment Selection

Outcome: support the mailbox-proven employee application review through the
existing Process owner, without approving identity qualification or sending.
Ownership/layer: Local `processServer/config/properties.js` selects deployment
capabilities; Profile owns the definition/action and Communication owns proof
and delivery. The corresponding configuration-inheritance fixture checks Local
selection, owner declarations and Docker isolation. No workflow graph, callback
implementation or grants are copied into the customer project.

Local selects only `profileEmployeeApplicationReview` for internal starts and
`profile.applyEmployeeApplicationDecision` from Profile's existing remote owner
declaration. The `profile` target resolves the existing Platform connection.
The inherited `process.instance.start.internal` permission, both signed owner
module scopes, published version checks and completed-task callback requirement
remain mandatory. Internal retirement and Profile qualification remain off.
Install `profile:employeeApplicationReview` through Process initialization before
starting a review; source selection is not an installed receipt or permission.
Profile's named review connection, reviewer authority and callback delegation
still require independent setup and verification. Apply source configuration
only through a coordinated restart; source tests do not update running processes.

#### Enterprise Setup Continuation

Local Platform exposes three independent, disabled-by-default environment
bindings under the framework-owned `enterpriseManagement.setupContinuation`:

- `NODICS_LOCAL_ENTERPRISE_SETUP_INSPECTION_QUALIFIED` selects read-only setup inspection after its owner checks.
- `NODICS_LOCAL_ENTERPRISE_SETUP_PRIVACY_QUALIFIED` records independently reviewed private generated-read/write, cache, export, index and capture checks.
- `NODICS_LOCAL_ENTERPRISE_SETUP_RESUME_QUALIFIED` selects continuation only after the additional serialization and effect-recovery evidence.

Onboarding enablement does not turn these on. They apply only to Local Platform;
Docker and other deployments keep their own qualification. Inspect the saved
enterprise through Axis first. Only its current owner projection may admit
continuation using the retained original intent and expected revision. Do not
repeat Create, reconstruct a lost browser key, or use a database edit to complete
an interrupted administrator nomination. Read-only qualification does not qualify
resume, employee registration, delivery, or production use.

#### Bootstrap Identity Source Review

`NODICS_LOCAL_BOOTSTRAP_IDENTITY_REVIEW_ENABLED=true` selects the existing
Profile bootstrap-source comparison only on Local Platform. It defaults to
false and requires the separately enabled read-only identity assessment.
The framework owns the approved release selector, complete inventory comparison,
fresh human authority, short-lived proof and audit acknowledgement. Kickoff
does not duplicate that logic or define a list of exempt identities.

Review succeeds only for exact source metadata and installed release provenance
in the authority tenant. Unexpected non-authority bootstrap copies, altered
records or other findings remain unresolved. This setting neither repairs data
nor grants inventory, claim-index, credential-write or browser qualification.
After the approved review session, disable the review and assessment selections.
Docker and other servers/deployments do not inherit this Local Platform switch.

#### Communication Qualification Without Delivery

For the approved isolated onboarding capture session, use the existing SMTP
provider, not a second OTP transport. The Local deployment operator owns the capture listener and its
private credential. The approved Mailpit listener is `127.0.0.1:1025`, with
the private capture inbox at `127.0.0.1:8025`. Supply SMTP port `1025` through
`NODICS_EMPLOYEE_SMTP_PORT`, and set `NODICS_EMPLOYEE_SMTP_SECURE=false`,
`NODICS_EMPLOYEE_SMTP_REQUIRE_TLS=false` and
`NODICS_EMPLOYEE_SMTP_ALLOW_INSECURE_LOOPBACK=true`. The provider refuses this
plaintext selection for non-loopback hosts; certificate verification remains
enabled for TLS. The listener must accept SMTP AUTH with username
`noreply@nodics-local.test` and a non-empty privately supplied capture password.
It must not relay outside the local capture store or expose OTP contents in logs.

The Local deployment fixes its recipient allowlist to
`admin@axis-onboarding-acceptance.test`,
`operator@axis-onboarding-acceptance.test` and
`applicant@axis-onboarding-acceptance.test`. The sender binding is
`NODICS_EMPLOYEE_EMAIL_SENDER=noreply@nodics-local.test`. Sending still defaults
off. `NODICS_EMPLOYEE_VERIFICATION_STORE_ENABLED` also defaults false; only
Profile is trusted by this Local store selection. Turn it on only after
installed owner checks, and do not confuse source selection with qualification.
Registration/recovery purposes stay pinned by Profile's existing owner policies;
the sending runtime does not supply arbitrary browser-selected proof purposes.

Keep SMTP disabled. With an already authorized human session, inspect the
Engagement runtime's `GET /nodics/system/v0/schema/indexes/module/commsSchema/schema/commsVerificationChallenge`
and compare the desired and installed indexes, tenant/master scope and actual
managed revision policy. The index owner requires `system.schema.view`; missing
authority is a blocked check, not permission to use a database client or rebuild
indexes. Counts/index metadata alone do not prove CAS or proof consumption.

Verify the effective stored-verification selection and trusted Profile source;
the signed runtime grant must contain `commsApi`, `profile` and
`communication.verification.execute` in the admitted tenant/deployment. Record
only bounded non-secret identity/version/permission evidence, never bearer
credentials. Configuration or decoded JWT claims alone are not proof of accepted
signature or fresh deployed authorization. Use the normal secured owner boundary.

Private capture qualification requires `log.requestPrivacy.qualified` plus
`captureMode: disabled`, early router middleware/private entry and independent
proxy/APM/provider capture evidence. Refusal with `ERR_RTR_00005` demonstrates a
closed boundary, not a qualified delivery path. Read-only checks cannot prove
real competing store mutations, expiry/replay consumption or end-to-end private
capture. Those require separately authorized isolated owner acceptance. No OTP
issue, proof consumption, provider send or mailbox assumption belongs in this
read-only phase; mailbox receipt remains a later explicitly approved gate.

1. Select **Kickoff Local / Engagement**. Its effective runtime includes
   Communication; Platform remains the caller and must not receive this SMTP
   credential. Do not apply this selection to Docker Local by implication.
2. Keep sending disabled while preparing the approved sender, recipient and host.
   The exact sender reference is `communication.senders.kickoffEmployeeMail`.
   The credential reference is `runtimeConfiguration.credentials.kickoffEmployeeMail`.
   Its username refers to that sender; changing a business contact does not change it.
3. Supply private runtime inputs using the deployment's existing approved secret
   mechanism. Ordinary employees and enterprise administrators do not fill these
   settings in Axis. No real credential is needed for the configuration tests below.
4. Run the existing project tests from the Kickoff root:

   ```sh
   node --test test/communicationActivationDataContract.test.js test/applicationConfigurationOwnershipContract.test.js
   ```

   These resolve actual configuration with artificial inputs and inspect the
   existing provider's non-sending health operation. They never contact the example
   SMTP host, start the application stack or change a real user's password.
5. Qualify the actual caller-to-Communication grants, verifier, storage and delivery
   path in an isolated environment before enabling a registration journey. A
   passing binding test is not evidence for those independent prerequisites.
6. Activate sending only in the intended worker's controlled configuration. Apply
   changes through the established runtime lifecycle; do not restart unrelated
   services or reset schemas. Source edits do not change a process already running.
7. Send an approved test through the existing Communication operation and separately
   confirm mailbox receipt. Record only non-secret intent/attempt references and
   outcomes. Never claim delivered-to-inbox from queue insertion or SMTP acceptance.

### Templates and responsibility boundaries

| Template code selected in Engagement | Profile-owned purpose | Message content |
| --- | --- | --- |
| `profile.employee.emailVerification` | `EMPLOYEE_EMAIL_VERIFICATION` | Current verification code and expiry. |
| `profileEmployeeRecoveryCode` | `EMPLOYEE_PASSWORD_RECOVERY` | Recovery code, expiry and unsolicited-request guidance. |
| `profileEmployeePasswordReset` | `EMPLOYEE_PASSWORD_RESET_CONFIRMATION` | Confirmed reset time; no password or verification code. |

These local templates allow only `profile` as their source and `EMAIL` as their
channel. The existing `eWaste` trusted source, Telegram provider selection and
waste-outcome template are preserved. A source allowlist is not a runtime grant:
the secured Communication API must still authenticate and authorize the caller.
Template content and provider selection cannot approve or activate employees.

```text
Profile's authorized registration/recovery operation
  -> existing secured Communication connection
  -> Local Engagement's purpose-matched template
  -> existing claimed delivery intent and SMTP provider
  -> approved SMTP server
  -> recipient mailbox (receipt must be observed separately)
```

The first steps preserve the existing owners. The SMTP provider receives an
already-claimed delivery operation; it does not validate employment or grant
access. A `CONFIGURED` health result means the references and local settings were
accepted, not that a connection was opened. `SUC_COMMS_SMTP_ACCEPTED` records SMTP
server acceptance, not inbox placement. An interrupted send remains uncertain
until resolved through the existing delivery policy; do not blindly resend it.

### Worked configuration example and recovery

The automated fixture supplies `sender@example.test`, `recipient@example.test`,
`smtp.example.test` and a clearly artificial password value. It sets the enable
input only inside the test harness, not in the real server process. Effective
configuration then uses the existing SMTP type, inherited port 587 and required
STARTTLS. The provider reports configuration readiness without connecting. The
same fake inputs do not appear in Platform or Docker Local credential bindings.
These values are examples, not usable mailboxes or approved real recipients.

| Observation | Safe next action |
| --- | --- |
| Provider disabled | Verify the selected worker and deliberate enable input. Do not enable every runtime. |
| Provider unconfigured | Check required non-secret references and secure credential availability without printing values. |
| Wrong recipient suppressed | Confirm the test recipient; do not remove the allowlist to make delivery pass. |
| TLS or authentication fails | Correct the approved binding. Do not weaken TLS or copy another service's credentials. |
| Older code rejected | Use the newest code; never bypass the verification owner. |
| Reset succeeded but notice failed | Preserve the reset outcome. Retry only its notification through the existing owner, not the password operation. |

### Customize and extend safely

Change only the project/server binding or existing template selection for this
deployment. Keep provider mechanics and transport tests with Communication.
A later credential mode or sender must still satisfy the canonical provider
contract. Existing grants, OTP rules and registration qualification remain
independent. Extend the existing project configuration tests when changing these
choices; do not create a parallel configuration loader or mail sender. Keep this
source section, its generated documentation release and observed runtime evidence
as distinct states. This source guide is not a claim of deployment or inbox acceptance.
