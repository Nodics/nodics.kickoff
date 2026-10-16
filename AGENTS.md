# Nodics Kickoff Agent Contract

- `agora.apparel`, `agora.electronics`, `agora.telco` and `circa.ewaste` are
  demo data/composition ONLY. They consume `apparel`, `electronics`, `telco`
  and `eWaste` respectively. Keep reference identities, branding, media, sample
  records and explicit composition selections here; reusable behavior, defaults
  and access definitions belong to their existing implementing framework or
  accelerator owners. Do not retain reference adapters or create a catch-all.
  Genuine partner projects remain extensible under nSetup's customer contract.
- Profile owns standard bootstrap users, access mechanics and runtime assignments;
  implementing modules own their permission contributions and business-area access
  definitions. Demo identities/accounts/assignments are optional Kickoff data,
  never prerequisites for standard bootstrap or access administration.
- Axis uses business area + No access / View / Edit / Full control + Scope.
  Profile resolves effective access and backend owners enforce it. Full control
  never bypasses approval, ledger/financial rules, simulation gates or tenant
  isolation. Keep exact level mappings/runtime assignments with Profile and owners.
- The authorized reference/access refactor has no backwards compatibility. Update
  consumers and remove superseded adapters, routes, role aliases and duplicate
  definitions. Preserve historical evidence and installed receipts without
  treating them as current grants or authority for data replay/live operations.

- Nodics Kickoff is a customer/reference project, not a Nodics product module.
- Do not copy framework source into this repository.
- Partners write only to their own backend/frontend repositories. Treat Nodics
  framework and accelerator source as immutable dependencies. Reusable changes
  go through the separate Nodics contribution/request, review and release
  channel; a partner application request does not authorize framework edits.
- Follow the resolved framework's canonical
  `nodics.foundation/modules/nSetup/llm/contracts/customer-project-mode-contract.md`.
  Classify generic framework capability, domain accelerator and customer
  application ownership before placing functionality, data or documentation.
- Nodics Kickoff may default to the sample layout where it sits parallel to
  `nodics.ai`, but customer projects may live in any workspace layout.
- Consume the Nodics framework through declared package dependencies and/or an
  explicit local framework-root configuration.
- Customer modules such as `nodics.kickoff.platform` or `nodics.kickoff.cron` may extend
  framework functional modules to customize implementation. They do not rename
  the standard functional module identity exposed to BackOffice/Axis.
- Kickoff-wide documentation belongs in this customer backend project, not in
  `nodics.docs`, `nodics.platform/modules/axis`, or the `nodics.axis` frontend.
  Maintain CMS-importable documentation records directly in the governed project
  data tree, with no parallel `docs/` authoring source:

```text
data/
  docs-v001/
    records/
      documentation/
    headers/
    assets/
      documentation/
  manifest.json
```

- Use Kickoff CMS documentation data for project-wide setup, runtime composition,
  onboarding, qualification and operations. Framework capabilities and accelerator
  journeys remain in their owning `nodics.ai` modules, including the Circa
  reference journey in `nodics.accelerators/modules/waste/modules/eWaste/data/docs-v001`.
  Reference those canonical guides rather than copying them into the project.
  Only genuine partner customization guides belong in the owning customer module's
  `data/docs-v001`; do not invent customization content for an unchanged reference.
  Documentation images are Media records and same-release assets referenced by
  `mediaCode`; business imports must not implicitly select documentation packs,
  and documentation imports must not select business releases or grant access.
  Keep `README.md`
  files concise.
- Project, environment, and server contributions load after product modules by
  index and customize services through the standard merge process.
- The unreleased data directories are consolidated into `v001` within each data
  type. Section versions are independently pinned in the owning manifest;
  changed or frozen content may have explicit semantic successors. Do not force
  those versions back to `0.0.1` merely because the directory remains `v001`.
  Existing local installations may retain receipts for earlier bytes. Inspect
  installed history and use an explicitly approved governed fresh initialization
  or reset where needed; never rewrite receipts, bypass drift protection or replay
  Init over an established deployment. Future frozen releases use forward versions.
- Add environments and servers only when Nodics Kickoff owns those runnable
  topologies.
- Keep runtime clean/build behavior scoped to the effective module graph for the
  server where the command is executed.
- Follow the Phase 0 contract from the checked-out `nodics.ai` framework
  repository at `nodics.foundation/modules/nSetup/llm/contracts/modularization-phase0-contract.md` before
  changing Nodics Kickoff dependency resolution, module skeletons, or runtime scripts.

## AI tool GitHub entry path

A user may start this reference/customer-project journey directly from an AI
coding tool such as Codex, Claude Code, GitHub Copilot, or another
repository-aware assistant by providing the GitHub repository URL. In that path
the user does not need to download or run `nodics.installer` first.

When started from a repository URL, the AI tool must:

1. read this root `AGENTS.md` before project files;
2. read root `README.md` for the human setup and project overview;
3. descend through `modules/AGENTS.md`, `envs/AGENTS.md`, and the nearest
   module/environment `AGENTS.md` before making changes;
4. distinguish reference-project source changes from generated customer-local
   workspace changes;
5. use `nodics.installer` only when the user asks to create, repair, or operate
   a local customer workspace;
6. never commit generated customer-local output into this source repository.

For local setup requests, guide the user to the installer command or invoke the
installer after confirming the target workspace. For template, runtime,
environment, data-pack, or acceptance work, continue from this AGENTS hierarchy.

## AI operating role

Before changing this project, an AI tool must act as all of these roles
together:

- Expert business analyst: explain how the reference project helps a new
  customer, partner, administrator, or evaluator understand Nodics quickly.
- Enterprise architect: preserve the separation between framework modules,
  customer project modules, environment/server topology, Axis frontend, WCMS
  content ownership, Profile identity, and BackOffice runtime authority.
- Nodics framework expert: apply module extension, service merge order,
  functional-module identity, generated content-pack ownership, and
  runtime-scoped startup rules correctly.
- Domain expert: treat Kickoff as a reusable customer-project example that can
  teach commerce, content, media, workflow, integration, logistics, telco, or
  other domains without locking the framework to one sample domain.
- Principal engineer: prefer configuration/customization first, write exported
  and documented JavaScript where practical, place files in the correct project,
  module, environment, server, data, manifest, script, or test folder, and keep
  formatting clean.
- Quality analyst and tester: test fresh setup, repeat setup, failed
  dependency resolution, missing backend services, documentation import,
  module lifecycle, and regression boundaries.
- TechOps/DevOps reviewer: consider local prerequisites, explicit framework
  root configuration, safe database reset scope, ports, process lifecycle,
  logs, release synchronization, and beginner-friendly troubleshooting.

If these roles disagree, document the trade-off before implementation. Do not
solve a customer-project problem by moving framework ownership into Kickoff.

## Acceptance ownership language

- Kickoff acceptance checks may verify that the reference local stack can
  observe, consume, or compose framework-owned contracts.
- Kickoff acceptance checks must not name themselves, helper functions, log
  messages, errors, or documentation as if Kickoff owns a framework module
  contract.
- Use language such as "reference runtime observes the WCMS-owned Designer
  authoring model"; avoid any wording that sounds like this repository owns
  the provider module's Designer contract.
- If a check validates framework behavior directly, the owning framework module
  must also have the real contract test. Kickoff can keep only the local
  bootstrap/acceptance evidence.

## Coding and placement rules

- Use properties, server/environment deltas, project module overlays and
  documented extension seams for project customization. Missing framework or
  accelerator capabilities require a separate proposal to the Nodics team.
- Put constants and error/status values in the correct definition/configuration
  file; do not hide reusable statuses, API categories, lifecycle names, or
  registry states inside unrelated project properties.
- Keep source files export-friendly so customer overlays can replace or extend
  behavior through the Nodics merge/loading model.
- Every authored JavaScript or JSON-like configuration file should be
  formatter-clean, intentionally indented, and documented with file-level and
  exported-function comments where the file participates in runtime,
  documentation generation, setup, or acceptance.
- Update documentation directly in the owning CMS page/component records and
  validate the release hashes. Do not introduce a Markdown-to-CMS generator.

## Minimal configuration

Apply the framework's nSetup `customer-config-classification-contract.md`
mandatory default ownership gate. Kickoff selects deployments and demo packs;
it must not supply standard framework adapters, observer implementations,
schema/versioning mechanics or copied technical defaults. Split mixed objects:
preserve real endpoints, explicit opt-ins and exact release choices while moving
reusable mechanics to their implementing owners. A previous audit, equal-value
pin or source-shaped test is not a blanket exception. Preserve qualification,
approval, tenant isolation and simulation safeguards during correction.

Copilot knowledge selection is governed runtime data. Do not restore source
catalogs in Kickoff, Circa, Agora or deployment properties. Keep content with its
owner; active modules become candidates through nConfig. Read the framework's
`copilotKnowledge/llm/contracts/runtime-knowledge-configuration-contract.md`.

`kickoffApi` and `kickoffInt` are intentional customer extension templates.
Retain their standard module shape even when empty. Empty template hooks are not
duplicated implementations and do not justify removal or framework relocation.

Keep modules lightweight by separating reusable mechanisms from customer policy.
Common domain capabilities belong to framework functional modules; reusable
solution orchestration belongs to accelerators. Circa/Agora references retain
demo data/composition only. Genuine partner modules may own custom behavior,
presentation, integrations and policy through supported extension contracts.
Runtime servers own deployment composition, not business implementations. Apply
this to acceptance helpers and administrative descriptors too. Maintainer
extractions require focused owner tests, reference composition checks,
effective runtime configuration checks and explicit live-acceptance evidence.
Never move an entire customer application merely to reduce project line count.

Inherit framework defaults and declare only intentional customer/deployment
differences. Apply the resolved framework's
`nSetup/llm/contracts/customer-config-classification-contract.md`. Read
[the project configuration guide](data/docs-v001/records/documentation/kickoffDocumentationRelease002ComponentData.js).
Only project composition selections belong in `kickoffCore` under Platform
runtime-role profiles. Reusable administration/access descriptors belong to the
implementing framework owner, not `kickoffCore` or a new shared administration
module. Foundation nTooling owns reusable command behavior; customer selectors
and genuine project policy remain here.

Application-specific journey acceptance lives under `scripts/acceptance`
and are discovered by framework nTooling from conventional `*Service.mjs`
script names. Do not add `nodics.project.json` or duplicate discovered command
aliases in layered properties. Framework nTooling retains the shared executor
and metadata resolvers. Keep deployment aliases and application publication
identifiers in this project; never promote the reference journeys into universal
framework defaults.

Media seeding uses the protected framework `acceptance:media-seed` command.
The Agora/Nexus npm aliases supply only manifest-module selections; do not restore
project upload implementations. Append `-- --execute` to opt into Staged uploads.
Online publication remains a separate approved lifecycle, not a seed side effect.

Agora sample-data acceptance delegates to nImport's protected
`acceptance:staged-sample-data`; its npm alias contains only module/role selection.
Keep runtimes running through topology tooling before acceptance. Installation
requires `-- --execute-install`, not the retired storefront environment flag.
Do not restore customer copies of release-version, validation or CURRENT checks.

Complete reusable contract suites must not stay here merely because their helpers
are framework-owned. Capability registry, guided initialization and deployment
qualification now execute from BackOffice, CMS and nTooling. Invoke their existing
commands; do not restore project copies or shadow canonical aliases. Project tests
retain adoption checks and customer-specific assertions only. Mutating canonical
suites require explicit flags, and guided publication never uses emergency approval.
The reusable acceptance implementations have moved to their framework owners.
Keep customer npm aliases and declarative fixtures only. Commerce, Editorial,
Waste, Loyalty checkout, runtime grants and application bootstrap use protected
commands. Missing authorized setup or owner evidence is a prerequisite/gap,
never permission to restore direct database access or acceptance-owned grants.
The Local checklist documents current setup and verification. Keep dated
extraction results under `test/evidence/`, outside the published catalogue;
never mix historical passes with current live-readiness claims. Maintain source
links and catalogue related-page links between setup, validation and operations.

Keep canonical command adoption consolidated in `test/acceptanceInfrastructureContract.test.mjs`.
Customer bootstrap/deployment fixtures remain in `test/projectAcceptanceFixtures.test.js`;
application-specific fixtures belong under the respective application's `test/`.
Do not restore standalone wrapper tests per framework suite. Shared invariant tests
use independent fixtures in their framework owners, and generic test consumers
delegate to the framework rather than copying loader or policy mechanics here.


Application Builder reference choices are declared in this project's
`package.json` under `nodics.applicationBuilder`. The selected data modules opt
in through their own package metadata. Use an explicit frontend root, or select
`--frontend-code` when using an experience workspace with multiple storefronts.
These choices describe intended reference wiring; generated starter checks do
not replace Local/Docker deployment acceptance.

Apply the framework configuration coding restrictions through the existing
nSetup customer configuration classification contract. Do not add an environment
descriptor or duplicate endpoint/authentication catalogue. The customer may
override `bootstrapIdentity.adminPassword` only through governed configuration
bindings or runtime credential authority; authored source must not carry live
literal auth secrets or binding fallbacks. nAuth validates password strength.
Local provider defaults are inherited; only actual environment differences belong
here. Project validation enforces the static restrictions before commands run.


Backend startup, readiness and API acceptance must work without any frontend
repository or running frontend server. Do not declare frontend launch commands,
paths, lifecycle or UI tests in backend properties or backend acceptance runners.
Frontend applications own their servers, outage/retry presentation, and frontend
tests. Backend CORS and browser-session contracts are tested through APIs using
explicit security policy; they do not confer frontend lifecycle ownership.
