# Local Runtime Topology

Kickoff provides a local reference topology so a developer can start Nodics and
see the major runtime surfaces without creating a new customer project first.
The local environment is `kickoffLocal`.

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

## Servers

The current local topology uses separate runtime servers:

- `platformServer` starts the Platform runtime. It loads Core, Platform,
  Profile, BackOffice, the Platform `axis` backend module, and Kickoff project
  modules.
- `wcmsServer` starts the WCMS runtime. It loads Core, WCMS, CMS, Media, and
  Kickoff project modules. WCMS owns CMS sites, catalogs, pages, components,
  routes, and documentation content-pack import.
- `processServer` starts the combined Business Process & Automation runtime.
  It loads Core, Cron, Process, cron jobs, workflow modules, and Kickoff
  project modules. Process owns process/workflow definitions; Cron still owns
  job definitions, triggers, scheduler state, and execution lifecycle.
- `cronServer` remains available for standalone Cron-focused development. It
  loads Core, Cron, cron jobs, and Kickoff project modules without Process.

Axis is a separate frontend application. It connects to Platform for employee
authentication and BackOffice bootstrap, then uses the registered module
contracts to reach the authorized backend surfaces.

## Start locally

Use separate terminals from the Kickoff repository:

```bash
npm run start:platform
npm run start:wcms
npm run start:process
```

Axis normally runs from the `nodics.axis` repository:

```bash
npm run dev
```

The default local ports are:

- Axis: `http://localhost:3100`
- Platform: `http://localhost:4300`
- WCMS: `http://localhost:4310`
- Process and Automation: `http://localhost:4330`

## Before starting

From `nodics.kickoff`, copy and review local environment configuration:

```bash
cp .env.example .env
```

Set the framework checkout location:

```dotenv
NODICS_FRAMEWORK_ROOT=../nodics.ai
```

The path may be absolute or relative to the Kickoff project root. This avoids a
hard dependency on a fixed workspace layout. One developer may keep framework
code beside Kickoff; another may keep it in a different projects directory.

Then prepare local file dependencies:

```bash
npm run configure:framework
npm install
```

`configure:framework` updates the project-local dependency links so npm can
install framework packages from the configured checkout. It does not make
Kickoff the owner of those modules.

## Start sequence

Use separate terminals so logs stay readable:

1. Start Platform first. It owns Profile login, BackOffice bootstrap, module
   registry, runtime catalogue projection, and OpenAPI contract discovery.
2. Start WCMS second. It owns documentation sites, catalogs, pages, components,
   routes, media metadata, and content delivery.
3. Start Process and Automation when process/workflow or scheduled behavior is
   needed. It proves `nodics.process` and `nodics.cron` can share one runtime
   environment while keeping separate functional ownership.
4. Start Axis after backend servers are reachable. Axis reads its public
   configuration, connects to Platform, authenticates the employee, and
   discovers registered module endpoints from BackOffice.

## Login and first checks

Open Axis at `http://localhost:3100`. For the local reference data, use:

```text
Enterprise: default
Login ID: admin
Password: adminPassword
```

After login:

- open the System and Integrations area and check the module registry;
- confirm Core, Platform, and WCMS are active and not treated as optional;
- if Process and Automation is running, confirm Process and Cron appear from
  the composed runtime and Cron can move through the optional lifecycle;
- open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics
  Kickoff are shown as separate documentation products;
- import or update documentation packs only through the authorized Axis action.

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

If npm cannot install framework packages, check `NODICS_FRAMEWORK_ROOT`, rerun
`npm run configure:framework`, and confirm the configured directory contains
`nodics.core`, `nodics.platform`, `nodics.wcms`, and any optional framework
modules used by the local server.

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

Verify local runtime topology by starting each server from the customer
project, not from framework internals. Platform should expose login,
BackOffice bootstrap, registry, and API discovery. WCMS should expose content,
documentation, media, and import/export delivery. Process and Automation should
report Process and optional Cron runtime availability from the composed server.
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
