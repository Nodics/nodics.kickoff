# Keep Kickoff configuration small

Kickoff inherits tested framework defaults. Its environment and server files
hold deployment choices and intentional differences. Shared customer
administration descriptions live once in `kickoffCore` as Platform runtime-role
profiles. Customers can change their applications without maintaining copies of
framework behavior or adding a separate configuration-only module.

For a beginner, start with the existing Local Platform example below and change
one value. Read the resulting prepared configuration before adding another
override; do not copy a complete framework file as a starting template.

## Business outcome

A business administrator chooses which applications to prepare and which
approved packages to install. Developers maintain those customer choices once;
operators maintain the actual deployment connections. Inherited defaults reduce
the settings a partner must learn while retaining explicit control over imports,
publication and reset operations.

## Understand the ownership before editing

| Customer application in Kickoff | Accelerator dependency in nodics.ai |
| --- | --- |
| agora.apparel | apparel |
| agora.electronics | electronics |
| agora.telco | telco |
| circa.ewaste | eWaste |

An application remains customer-owned when used as a demo or reference. Extract
only independently reusable domain behavior after an explicit ownership review;
do not move the application's identity, policies, profiles or data with it.

| Concern | Kickoff location | What stays inherited |
| --- | --- | --- |
| Shared project administration profiles | `modules/kickoffCore/config/properties.js` under Platform runtime-role profiles | BackOffice orchestration, permissions, validation and imports |
| Local Platform transport and local-only profile differences | `envs/kickoffLocal/platformServer/config/properties.js` | Shared customer descriptors and capability defaults |
| Docker Local Platform differences | `envs/kickoffDockerLocal/platformServer/config/properties.js` and its existing topology contributions | Shared customer descriptors and framework behavior |
| Local environment policy | `envs/kickoffLocal/config/properties.js` | Generic CORS cache duration and other unchanged capability defaults |
| Docker environment policy | `envs/kickoffDockerLocal/config/properties.js` | Generic defaults, with Docker-specific origins and headers retained |
| Customer commerce policy | Local/Docker Commerce and Commerce Staged properties | Neutral framework behavior; the actual Agora store remains explicit |
| Circa application policy | `modules/circa.ewaste/config/properties.js` | Waste, Profile, Location and BackOffice authorities |

`kickoffCore` owns project documentation and shared activation selections.
Agora application packs and profiles belong to their respective customer modules
here, just like Circa. Axis contributes disabled documentation setup descriptors;
Kickoff enables the selected entries. nConfig projects project profiles when the selected
runtime role is Platform. The descriptors contain no deployment credential,
port, listener, or startup behavior. Environment and server files still own the
actual deployment transport differences.

```mermaid
flowchart LR
  Capabilities["Framework capability defaults"] --> Local["Local Platform differences"]
  Capabilities --> Docker["Docker Local Platform differences"]
  Core["Kickoff Core Platform profiles"] --> Local
  Core --> Docker
  Local --> LocalRuntime["Prepared Local Platform"]
  Docker --> DockerRuntime["Prepared Docker Platform"]
```

## Why the ordering matters

Customer application packs use project-module indexes after framework defaults.
Platform and WCMS Staged select them through normal customer-module discovery,
without importing application ownership into the framework. Media descriptors use
`manifestModule` and a module-relative `manifestPath` for both customer and framework owners.
Customer runtime selection, reset boundaries, destination aliases and database
bindings stay here. Module manifests already supply activation-package facts;
the project entries only route those observed packages to selected runtimes.

`kickoffCore` is part of the project module graph. Its BackOffice descriptors
use `runtimeRoleProfiles.PLATFORM`, so Platform receives them and non-Platform
runtimes do not. The selected Platform server files keep deployment-specific
overrides such as operator origin or target transport details.

The normal nConfig loader remains authoritative. There is no additional loader,
profile registry, deployment process or project lifecycle script. Existing
Circa and other later-loaded contributions retain their own merge behavior.
An index change must be reviewed against the effective module order rather than
assumed safe from a directory name.

## Start with the smallest change

For Local employee browser sessions, the environment needs only its intentional
local policy:

```js
profileBrowserSession: {
    enabled: true,
    allowInsecureLoopback: true,
    sameSite: 'Lax'
}
```

Cookie names, cookie paths and maximum age come from Profile. These are local
settings; do not copy loopback relaxation into a production environment unless
that deployment explicitly supports local HTTP development. Docker keeps its
distinct cookie names at the Docker environment layer so Local and Docker browser
sessions remain separate.

For a Product catalogue limit, add only the value you intend to change under
an already active Commerce server:

```js
product: {
    discovery: { catalogue: { maximumCandidates: 800 } }
}
```

Omitting `maximumCandidates` uses Product's default. Other Product values do not
need to be copied. Changes to query budgets require performance review against
the intended catalogue size.

## Customize and extend safely

To change a shared application description, edit the matching Platform profile in
`modules/kickoffCore/config/properties.js`. To change a deployment
connection, edit that environment's Platform profile target. For example, a
Local-only timeout override is:

```js
backofficeApplicationInitialization: {
    profiles: {
        nexus: { target: { timeoutMs: 60000 } }
    }
}
```

Merge this difference into the existing Local Platform properties. Do not
replace the entire file or copy this target into the shared module. The profile
continues to inherit its description and package selections; Docker retains its
own target values. A node override can further specialize this scalar through
the existing selected-node configuration chain.

When adding a new application, first decide whether its descriptor belongs to
an already active application module or to administrative composition. Prefer
the application owner where it can contribute without activating unrelated
capabilities. Keep shared cross-application administration data here only when
that is the appropriate selected consumer. Local-only profiles remain Local
choices; identical data is shared only where both environments intend it.

When adding a new environment or server:

1. Follow the framework module-generation contract and choose a unique ordered
   index; do not copy an existing server's complete properties.
2. Declare actual composition, coordinates, authority and required deployment
   inputs.
3. Keep shared administration defaults in the owning project/application module
   and expose them through runtime-role profiles only for consuming runtimes.
4. Add only intentional differences, then run preparation and focused checks.
5. Test an unselected runtime to ensure that it does not gain application
   profiles or functional modules accidentally.

## Preserve arrays and operational safeguards

Backend qualification does not require a frontend checkout. Copilot source
selection is governed runtime data, not an environment-variable catalog.
The retired `NODICS_COPILOT_AXIS_*` source-selection variables no longer register
or activate sources. The current backend's active module graph supplies eligible
partitions. External content needs explicit owner registration and deployment
transport; it is not discovered by scanning sibling frontend checkouts.

Shared customer Engagement opt-ins live in Kickoff Core's `ENGAGEMENT` role
profile. Local notification templates and trusted-source bindings live in the
Local environment's matching role profile, without selecting Circa there.
Later deployment layers can still disable these choices.

Acceptance URL selectors resolve the selected server's published endpoint;
internal Editorial calls use the configured `processConnectionName` through
nRouter. Explicit legacy `processBaseUrl` overrides retain precedence. Do not
copy a second catalogue of listener, published or internal ports: they have
different consumers and must not be substituted for one another. Backend
container network qualification covers selected backend network boundaries;
external frontend qualification is separate. Docker execution remains a
separate validation step, not evidence supplied by configuration-only tests.

Current nConfig merges arrays by position. A shorter override can retain
inherited trailing entries; an empty array is not a general removal instruction.
Share a list only when its complete values and ownership match. Deployment
lists that differ remain explicitly owned at their boundary. Use an existing
capability-specific removal mechanism where available and verify the effective
result before changing an activation or reset inventory.

Local reset opt-in, its environment allowlist and explicit model service lists
remain Local configuration. Shared defaults do not enable Docker Local reset.
Provider sandbox restrictions and deployment-selected model names remain
explicit where they represent intentional operator policy. Data descriptors do
not themselves execute imports, grant permissions, approve Online publication
or change tenant authority.

Large remaining blocks are not automatically framework defaults: deployment
knowledge-source bindings, transport targets, local-only application profiles
and reset inventories can carry real customer or server choices. Their ownership
must be assessed individually. A shorter entry file that imports the same large
payload does not reduce customer maintenance by itself.

## Send store context explicitly

Cart and Shopping List no longer select a store from `customerApi.defaultStoreCode`.
The obsolete Cart fallback declarations have been removed from Local and Docker
Local Commerce/Commerce Staged configuration. Store identity remains customer-owned;
the existing Agora commerce client sends its configured store explicitly for Cart
creation and Shopping List operations.

Before upgrading other callers, make them send `storeCode` through their existing
request payload/query or service context. All supplied values must agree. Missing,
malformed or conflicting context is rejected; no neutral or sample store is invented.
There is no new configuration layer or store-specific API. Other application-level
store selections used by Product publication or other capabilities have independent
owners and are not removed by this change.

Existing explicit-store ID formats and persisted records are preserved. Keep saved
Cart IDs, including any produced by the older context-only hashing bug; recomputing
a new hash is not a migration. Missing/inconsistent stored context needs governed
repair. Identifier validation is not a Store master lookup or an authorization grant.
Re-run prepared Commerce compositions and real client acceptance before deployment.

## Verification before operating

From the Kickoff repository:

```sh
node --test test/configurationInheritanceContract.test.js test/guidedInitializationProfilesContract.test.js test/communicationActivationDataContract.test.js test/dockerLocalEnvironmentContract.test.mjs
node test/runtime-prepare.test.js
node test/dockerLocalRuntimePrepare.test.js
npm run docs:check
```

The customer configuration tests check selection scope, index order, profile
identity, environment-owned transports and reset selections. Node-override and
tenant-isolation behavior belongs to nConfig's `configurationBindingContract.test.js`;
CORS, provider inheritance and neutral domain defaults are tested by their framework
owners with independent fixtures. Existing runtime preparation checks use real nConfig resolution for
Local and Docker Local. Declaration tests compose the shared defaults instead
of assuming that a server file contains its entire effective configuration.

Compare Local and Docker Local runtimes across the supported domain selections:
all, none, Apparel, Electronics and Telco. These checks verify that Platform receives the
project-owned BackOffice descriptors through `kickoffCore` runtime-role profiles
while non-Platform runtimes do not. They prepare configuration and metadata; they do not
start listeners, reset databases, import packages or prove signed-in browser
behavior. Dated outcomes belong in `docs/evidence/`, not this operating guide.
Re-run the relevant operational journey after deploying/restarting
changed source through the usual project procedure.

## Common mistakes, troubleshooting and rollback

| Symptom | Check | Recovery |
| --- | --- | --- |
| Platform profile identity or package list is missing | Does `kickoffCore` still define Platform runtime-role profiles and does nConfig project them? | Restore the profile block; run preparation. |
| A target is missing | Does the selected environment still declare its profile transport? | Restore that environment's target; shared defaults intentionally do not supply it. |
| A Local setting appears in Docker | Was deployment data placed in the shared module? | Move it back to the appropriate environment and compare both runtimes. |
| An extra array item remains | Did a shorter array merge preserve a trailing entry? | Use supported removal semantics and inspect the effective list. |
| An unrelated server exposes shared profiles | Was the module selected by a common group or every server? | Restore Platform-only selection and run the unselected-runtime check. |
| Structure audit reports unrelated Circa gaps | Compare with the recorded baseline and inspect the owning work. | Keep those findings separate; do not overwrite ongoing Circa changes. |

Rollback restores the previous declarations together. Re-run preparation before
restarting. Do not revert unrelated Circa, content, initialization or framework
documentation changes.

Continue with the Customer Customization Guide for application extension and
the Local Runtime guide for deployment composition. The framework's permanent
rule is `nSetup/llm/contracts/customer-config-classification-contract.md` in the
resolved Foundation package.

## Commands and capability inventories

The framework supplies canonical acceptance operations. This project's server
aliases are discovered from `envs/*` server metadata. Customer npm aliases select
real applications and fixtures; they delegate to protected framework commands.
For example, `acceptance:agora-commerce` selects the Commerce journey owned by
the framework. Do not restore copied acceptance services under `scripts/acceptance`.
Moving ownership does not authorize executing that journey:
its existing credential, import, startup and destructive confirmation gates apply.

The shared documentation generator reads this project's `docs/catalogue.json`
publication metadata. Record/code prefixes and routes are stable persisted
identifiers; changing them requires an explicit content migration. Labels and
channels remain application choices. A different project supplies its own values
without editing framework source.

After source documentation changes, select a reviewed forward release before
generation. Stable generated content must not be overwritten under the same
version or output path. The framework generator accepts a new governed
`docs/catalogue.json.publication.contentPath` such as `core-v002` and preserves
the previous artifacts. Review installed receipts and publication history before
choosing the next version; local Git history alone cannot prove installed state.
`docs:check` remains a generation-consistency gate and may correctly fail while
a release-history issue is unresolved. Source validation and published readiness
must be reported separately.

Local reset definitions select capability inventories through module-owned
`localResetProvider.profiles` keyed by runtime role. Each profile selects
capability modules and required model checks for that runtime; adding a
contribution never enables reset by itself. Environment configuration owns the
enablement and allowlist, with optional runtime-role allowlists for constrained
environments such as Docker Local. Server `config/properties.js` files do not
repeat reset inventories. A later `serviceOverrides` false entry removes an
optional inherited service. Removing a required service fails before mutation.
Explicit optional service names for unavailable or historical models remain
visible until their owners are selected or their cleanup requirements are
retired. No reset is implied by configuration preparation or validation.

Foundation initialization profiles continue selecting their declared Init/Core
categories and destination roles. Release discovery and manifests determine each
capability's records; application bundles and captions remain project choices.

## Declarative environment and runtime configuration

`package.json` identifies modules, environments, servers and nodes. Existing
`config/properties.js` contributions supply their configuration. The retired
`nodics.environment.json` is neither required nor loaded, and no replacement
descriptor is introduced. nConfig owns binding and layering; nTooling projects
startup, container and acceptance inputs from that same configuration.

Root `activeModules.compositions.agora` describes this project's optional Agora
selection. Only selecting runtime contributions consume it. Independent cron or
website projects do not need Agora. Runtime provider/module selections stay
explicit; merely declaring an endpoint or connection never activates its owner.

Each server declares its own `servers.default.endpoint` port. Peer aliases use
`$config: runtime` to project that server's endpoint, retaining intentional
`remoteOnly`, advertised-host and HTTP-only differences. Module identity and
package versions come from existing metadata. Framework host defaults are inherited.
A node may override a target endpoint field; a later tenant override changes the
actual consumer endpoint. References preserve their contribution-time snapshot.
Missing, unsafe or cyclic targets fail before runtime startup.

Local startup order and dependencies remain in each server's `tooling.runtime`.
Acceptance runtime descriptors are selected from declared roles and existing
server metadata; ports and launch commands are not repeated in Local properties. Acceptance URL defaults use nTooling's `projectEndpointUrl` projection,
including the configured Axis origin. Explicit published-URL environment inputs
remain valid for proxy or container access. Local Redis inherits the framework
host, port and `localRuntimeAuth` prefix; its Redis block declares only
`enabled: true`. A different deployment namespace is an intentional later override.
Frontend applications own their startup commands and development ports. Backend
configuration declares only explicit CORS security policy for trusted origins. Container-specific inputs and real deployment differences remain
under the existing environment's `tooling` property. Reusable acceptance defaults
come from their framework capability owners; the Local tooling block is absent. This metadata never authorizes
imports, grants runtime scope or proves deployed readiness.

## Inherited provider and policy defaults

Local Elasticsearch uses the framework provider's `http://localhost:9200` default.
Kickoff Local declares no Elasticsearch address. Docker overrides it with the
container service address because that deployment differs. Apply this rule to
all provider settings: retain only actual environment differences, connection
selection and isolated database/namespace choices.

Framework defaults provide info logging, disabled remote event publication,
disabled database fallback for search, standard CORS headers/credential behavior,
and secured service-registry API exposure. Docker's logging environment input and
cross-origin resource header are deliberate deployment differences. Search and
cache providers still require explicit activation. Server database names and
Process's separate Cron database remain project deployment choices.

The effective deployment classification remains `environment.class` for nImport
release-scope checks, but nConfig derives it from the selected environment
module metadata. Do not author it in environment `properties.js`, and do not
infer it from a runtime name such as `kickoffLocal`. Sample releases are
available for authorized manual execution by default; only Init runs
automatically. Permissions, tenant/destination checks, release integrity and
durable receipts remain mandatory. A deployment may explicitly restrict Sample
execution without changing framework code.

## Credentials, initialization and runtime authentication

Auth policy and bootstrap credential bindings come from nAuth. Kickoff does not
declare a customer-root administrator password. Environment, server and node
layers may override `bootstrapIdentity.adminPassword` through nConfig when a
deployment intentionally supplies a different initial administrator credential.
This configures future initialization; changing it does not rotate an already
persisted administrator password. Use Profile credential operations for an
existing account.

Administrator bootstrap values, JWT secrets, peppers, service passwords/API
keys and binding fallbacks remain deployment inputs or governed runtime
configuration. Do not publish credential-bearing customer files or enable
blanket legacy-human/plaintext/missing-stamp compatibility exceptions.

Supply deployment inputs through the framework's environment bindings or the
existing layered external/secret-provider mechanism:

| Input | Purpose |
| --- | --- |
| `NODICS_JWT_SECRET` | Stable deployment signing material |
| `NODICS_API_KEY_PEPPER` | Stable API-key digest material |
| `NODICS_BOOTSTRAP_ADMIN_PASSWORD` | Initial human administrator provisioning |
| `NODICS_BOOTSTRAP_SERVICE_PASSWORD` | Initial service-principal provisioning |
| `NODICS_BOOTSTRAP_SERVICE_API_KEY` | Initial service API-key provisioning |
| `NODICS_API_KEY` | Current runtime proof inside one server process |

Each runtime server reads the same server-local `NODICS_API_KEY` binding from
its own effective configuration. A shared launcher or environment-wide
credential store may keep server-specific aliases while injecting the selected
value into the child process as `NODICS_API_KEY`. Missing retained proof remains
null; there is no fallback to a sample key or human administrator. Profile owns
runtime scope grants, tenant/enterprise validation, token issuance, renewal and
revocation.

Profile's `profileInitialization.requiredEmployeeLogins` defaults to the human and
service identities supplied by its Init release. Initialization checks no longer
use the runtime authentication login. Missing identities are detected independently
of current proof; existing Init receipts and mandatory identity reconciliation
continue to govern repair. Configuration changes do not reset stored credentials.

Each runtime explicitly selects the Redis provider. Each environment declares only
connection differences, and the shared `auth.auth` channel inherits strict nAuth
cache policy with no local fallback. Local inherits the framework prefix;
Docker retains its existing Redis/Sentinel deployment inputs. Missing required
credentials or cache capabilities fail through their existing owners.

Docker maps its persisted generated credential variables to the framework input
names. Fresh container setup generates random credentials once and retains them
on subsequent runs. It no longer provides a universal administrator password.
For an initialized deployment, bind its current signing secret and pepper before
restart. Use Profile's governed migration/rotation process for legacy records,
scopes/stamps or changed credentials; do not replay Init or restore revoked keys.

## Browser origins and later overrides

nRouter enables CORS by default for the standard Nodics localhost origins: Axis 3100, Nexus 3200, Agora Apparel 3300, Electronics 3400, Telco 3500 and Circa 3600. These shared API security defaults apply independently of Platform/accelerator activation and frontend health. Environments declare only different addresses or policy; server denials and explicit disablement remain supported. nRouter never reads a frontend launch catalogue. Exact origins, header policy and route authorization remain enforced.

Server `originEndpointOverrides` retains deliberate frontend denials. Numeric
loopback aliases and temporary IP addresses are not automatically added.
A different environment supplies its actual host/protocol or replaces the endpoint
collection through nConfig. Denials follow frontend identity when its address changes.
Tests cover custom HTTPS, empty/replaced collections, forbidden origins and headers.

## Application selections and optional features

Customer knowledge sources retain their classification, scopes, permissions and
explicit enablement in durable runtime configuration. Framework/project roots
inherit nConfig's trusted path bindings. Administrators select reviewed revisions,
inclusions and exclusions through existing governance, not module source edits.
Fresh installations start with no selected sources. Local Platform and Waste
explicitly opt into nDynamo durable properties in their server configuration;
Knowledge declares its existing governance-owner dependencies. Do not enable
persistence environment-wide: sibling runtimes without that owner must retain
their defaults. Source selection remains independent of ingestion authority.

Keep explicit content-pack, reset, publication baseline, provider, data-release,
store/catalogue, frontend and runtime identity selections. Their presence does not
mean they are copied framework defaults. Content-pack paths and presentation
mechanics inherit nImport; BackOffice resolves its standard target defaults.
The project documentation pack retains its governed CMS import/publication path.
Use `replace` for complete collection selection and `keyed` for identity changes;
ordinary arrays retain positional compatibility. Shorter arrays do not delete
inherited members without the explicit collection operation.

## Enforcement and verification

`project:validate` and the framework principle audit reject the retired descriptor,
profile bindings, duplicate endpoint/authentication catalogues and literal auth
secrets in authored properties, except the direct customer administrator bootstrap
override. The canonical framework coding restrictions live
in nSetup's customer configuration classification contract. The static audit never
executes customer property files and never prints credential values.

Tests use `test/helpers/configuration.js` to invoke the real nConfig and capability
consumers without starting infrastructure. All active runtime preparations, source
classification, later overrides and negative checks are part of closure evidence.
Prepared configuration and isolated contracts do not prove a deployed database,
Redis/Sentinel service, current grants, browser session or external AI provider.
Perform deployment acceptance after the normal selected-server build/restart.

MongoDB default names `masterLocal` and `testLocal` belong to the framework adapter.
Kickoff Local declares no default database-name block. Server-specific names,
including separate Staged/Online and Process/Cron databases, remain explicit
isolation overrides. This source cleanup does not migrate or rename existing data.

## Local extraction ownership (2026-09-28)

Complete capability-registry, guided-initialization and deployment-qualification
suites now live in BackOffice, CMS and nTooling. The existing npm aliases invoke
those owner commands without local script copies. Canonical command metadata
rejects project replacements and same-name script shadowing. Customer fixtures,
topology and application profile selection remain supported inputs.

Registry acceptance requires `--execute`; guided initialization additionally
requires `--approve-publications`. It uses normal Process approval, never an
implicit emergency override. `qualification:deployment` prints a plan by default;
its mandatory security/publication checks call framework tooling directly.
Customer journey results supplement canonical gates and cannot approve production.
Other mixed acceptance scripts remain extraction work, not approved examples of
customer ownership for reusable framework assertions.

Reusable domain behavior belongs to functional modules; reusable composed
industry behavior belongs to accelerators. Customer applications, scenarios,
data, selections and deployment bindings stay in Kickoff. The same rule applies
to configuration, tests and documentation. `kickoffApi` and `kickoffInt` remain
customer extension templates, not misplaced framework modules.

CMS and Editorial now own neutral publication transport defaults. Local Staged
retains peer connection selection, enablement and provider selection. Framework
defaults alone neither publish nor approve a release. Communication owns inert
Telegram technical defaults; Local Engagement selects the type and retains the
Circa credential reference, notification policy and trusted sources.

Framework documentation and Axis own their acceptance pack descriptors; Kickoff
owns its documentation descriptor and the explicit pack selection. nTooling
combines inert discovered defaults with the selected runtime's effective nConfig
acceptance policy, including custom modules. Static discovery is not activation.
Configuration placement enforcement also lives in nTooling's existing audit.

Local-only follow-up validation and remaining migrations are tracked in the
[local acceptance checklist](local-acceptance-checklist.md). Docker execution is
deferred; previous Docker evidence does not qualify this follow-up batch.

## Nexus accelerator migration

The `nexus` accelerator now owns the former Nexus reference content pack at
`nodics.accelerators/modules/nexus/modules/nexus.web` in the framework repository.
Its public module identity remains `nexus.web`; release codes, versions and all
data/media bytes are preserved. Kickoff no longer contains a duplicate content pack.

Platform explicitly selects `nexusCore` for administration descriptors; WCMS Staged
selects `nexus`, and Engagement selects the `nexus.web` operational release source.
The structural parent appearing in a graph does not imply CMS activation: Platform
and Engagement remain free of CMS services. `npm run nexus:test` dispatches the
module-owned `nexus:check` command. Customer media-seeding journeys remain explicit.

Common Nexus publication baselines and delivery defaults are accelerator-owned.
The Local-only incremental/professional-copy proof selections remain Local deltas;
Kickoff's combined Nexus/Agora acceptance profile list remains a project choice.
No data was imported, uploaded or published by this source migration.

## Application policy and role selection

Agora publication baselines belong to each owning application under
`cms.runtimeRoleProfiles.WCMS_STAGED`. Selecting no Agora domains supplies no
Agora baseline; Platform presentation identifies these profiles as applications.
Package selections, explicit user import triggers and Online approval remain intact.
Release pins still require the publication manifest consistency check.

Circa owns shared photo metadata and conversation selection under the WASTE
profiles of `wasteSubmission` and `eWaste`. Local and Docker Waste keep their
different public links. A later override of role policy must use the same
`runtimeRoleProfiles.WASTE` path; role profiles are folded into effective
configuration after ordinary namespace values. The eWaste journey supplies neutral
position-age, capture-timeout and centre-count defaults. An application must
supply its arrival radius: a missing radius fails closed before arrival decisions.

Local and Docker environments own Agora/Circa CORS origins for all API roles,
including roles where those applications are not active. nRouter retains only
framework origins and origin-construction behavior. Exact-origin and denial
semantics remain unchanged.

The Circa refund owner-port descriptor remains an explicit cross-runtime binding:
Commerce does not load eWaste. Do not activate the accelerator just to inherit
its descriptor. Copilot retains generic Knowledge-owned templates, but no authored
project source catalog. Existing installed selections must be migrated through
reviewed nDynamo property activation, never restored as application defaults.
Docker Platform does not activate Copilot Knowledge. Configuration checks do not
imply Docker live acceptance.
Telegram schema reuse likewise needs coordinated
provider availability and central schema routing; existing operational schemas
remain unchanged. Initialization package simplification is deferred: explicit
selection, destination, reset and approval controls remain authoritative.

Run `node --test test/applicationConfigurationOwnershipContract.test.js` with
the configuration, publishing and guided-initialization gates above, followed by
both Local and Docker runtime preparation tests. These checks do not start
listeners or import/publish data.
