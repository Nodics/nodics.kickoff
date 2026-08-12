/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @description Generated Nodics Kickoff documentation navigation and article content. */
module.exports = {
  "record0": {
    "code": "kickoffDocumentationNavigation",
    "typeCode": "kickoffDocumentationNavigationComponentType",
    "renderer": "documentation.component.navigation",
    "accessMode": "PUBLIC",
    "properties": {
      "title": "Nodics Kickoff",
      "searchLabel": "Search Kickoff documentation",
      "searchPlaceholder": "Search setup, runtime, modules, and customization",
      "emptyMessage": "No Kickoff documentation matches your search.",
      "sections": [
        {
          "code": "nodics-kickoff",
          "title": "Nodics Kickoff",
          "order": 10
        }
      ],
      "items": [
        {
          "code": "kickoff.overview",
          "title": "Kickoff project overview",
          "route": "/docs/nodics-kickoff",
          "section": "nodics-kickoff",
          "sectionTitle": "Nodics Kickoff",
          "sectionOrder": 10,
          "order": 10,
          "audience": [
            "architect",
            "developer",
            "operator"
          ],
          "summary": "Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs.",
          "searchText": "Kickoff project overview Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs. # Kickoff Project Overview\n\nNodics Kickoff is the reference customer project for running Nodics locally and\ndemonstrating how a partner or customer project consumes the framework. It is\nnot a standard Nodics functional module such as Core, Platform, WCMS, or Cron.\nIt is a project-owned runtime composition that shows how those modules can be\nassembled without copying framework source.\n\nKickoff owns project structure, local environment wiring, project modules,\nsample customization points, and project documentation. Framework\ndocumentation belongs in `nodics.docs`; Axis product documentation belongs in\nthe Platform `axis` backend module; browser renderers belong in `nodics.axis`.\nKickoff documentation that becomes CMS data belongs in this repository under\n`data/core/source/documentation` and is generated into this repository's own\ncontent pack.\n\n## Why Kickoff exists\n\nKickoff exists so a new team can feel Nodics before they design their own\nproject. A partner should be able to clone the framework, clone the reference\nproject, run a small set of commands, log in to Axis, and see the major backend\ncapabilities working together.\n\nThis matters because enterprise framework adoption usually fails at the first\nhour. If the first experience requires a developer to understand every module,\nevery dependency, every data import, and every environment property, the\nframework feels heavy even when the architecture is good. Kickoff keeps the\nfirst journey small: start the runtime, import governed seed data, open Axis,\nread the documentation, and then make one safe customization.\n\nFor a business evaluator, Kickoff demonstrates that Nodics can support a real\ncustomer project without asking the customer to fork framework code. For a\ndeveloper, it shows the concrete folder shape, package dependency model,\nenvironment wiring, server start commands, and project-owned extension points.\nFor an operator, it shows how one local project can run Platform, WCMS, and a\ncombined Business Process & Automation runtime while preserving the same module\nownership rules that production will use.\n\n## What a new customer should learn\n\nKickoff should answer the questions a new customer asks before trusting a\nframework:\n\n| Question | Kickoff answer |\n| --- | --- |\n| Can I run it locally without designing my full product first? | Yes. Kickoff provides ready local Platform, WCMS, Process/Cron, and Axis wiring. |\n| Do I have to edit framework source to customize? | No. Customer modules and server/environment configuration load after framework modules. |\n| Can documentation and content be imported like real governed data? | Yes. Kickoff ships a project-owned documentation content pack. |\n| Can optional modules be added later? | Yes. Cron demonstrates observed optional runtime capability and registry lifecycle. |\n| Can my real project use a different folder layout? | Yes. `NODICS_FRAMEWORK_ROOT` points Kickoff to the framework checkout. |\n\nThis makes Kickoff more than a sample app. It is the adoption proof for the\nwhole framework.\n\n## Beginner mental model\n\nThink of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample\nproduction line, and `nodics.axis` as the control room screen. The factory\nequipment provides standard capabilities such as Core, Platform, WCMS, Media,\nCron, and Process. The sample production line decides which equipment to\nconnect for a local demonstration. The control room screen connects to the\nrunning backend and shows only the capabilities that the backend says are\navailable and authorized.\n\nKickoff is not the product every customer must ship. It is the smallest\ncomplete example of how a customer product can be structured.\n\n```mermaid\nflowchart LR\n  Framework[\"Framework equipment<br/>nodics.ai\"] --> Project[\"Reference production line<br/>nodics.kickoff\"]\n  Project --> Servers[\"Local runtime servers\"]\n  Servers --> Platform[\"Platform: login and BackOffice\"]\n  Servers --> WCMS[\"WCMS: content and docs\"]\n  Servers --> Automation[\"Process server: workflows and scheduled capability\"]\n  Axis[\"Control room<br/>nodics.axis\"] --> Platform\n  Axis --> WCMS\n  Axis --> Automation\n```\n\nThe metaphor is useful because it prevents a common mistake. You do not move\nfactory equipment into the control room, and you do not hardcode control-room\nscreens into the production line. Each part has a job.\n\n## What Kickoff demonstrates\n\n- how a customer project depends on Nodics framework packages;\n- how environment and server modules load after standard functional modules;\n- how Platform, WCMS, and Process/Cron can run as separate ownership domains\n  while sharing a local automation server;\n- how project modules can customize runtime behavior without renaming the\n  standard functional module identity;\n- how customer-owned documentation can appear in Axis beside Framework,\n  Swaggers, and Nodics Axis.\n\n## Source map\n\nThe important Kickoff locations are:\n\n- `package.json` describes the project package and local scripts;\n- `.env` describes developer-specific framework checkout location and local\n  overrides;\n- `src/sync-framework-dependencies.js` prepares local framework package links;\n- `src/start-platform-server.js`, `src/start-wcms-server.js`, and\n  `src/start-process-server.js` start the core local runtime servers;\n- `config/` contains project-level defaults;\n- `envs/kickoffLocal/` contains local environment and server composition;\n- `modules/` contains project-owned modules and customization examples;\n- `data/core/source/documentation/` contains authored Kickoff documentation;\n- `data/core/data/documentation/` and the documentation section in `data/manifest.json` are\n  generated content-pack outputs.\n\nAuthored documentation is the source. Generated records are the importable CMS\nprojection. Do not hand-edit generated records to fix documentation.\n\n## Runtime boundary\n\nKickoff is loaded after framework modules. That means it can contribute\nconfiguration, project modules, and project-owned documentation, but it must not\nmove framework behavior into the customer repository. A customer extension such\nas `kickoff.platform` may customize Platform implementation while the\nbusiness-facing functional identity remains `nodics.platform`.\n\nRuntime composition and code dependency are related but different. Package\ndependencies make framework modules available to the project. Server\nconfiguration decides which modules are loaded, in which order, for a specific\nruntime process. Service override behavior follows module loading and indexes,\nnot simply the order in `package.json`.\n\n```mermaid\nflowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.core\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.cron\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsServer, processServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]\n```\n\nThis diagram is intentionally simple. Kickoff does not own the framework\nmodules and Axis does not own backend data. Kickoff composes the backend\nruntime, and Axis renders whatever Platform/WCMS say is active, authorized,\nand available.\n\n## First customization promise\n\nA beginner should be able to make a first safe customization without fear.\nGood first customizations are intentionally small:\n\n- change a local property in the correct environment or server file;\n- add or update a Kickoff documentation page;\n- add a project-only service in a Kickoff module;\n- add project sample data that belongs to the customer project;\n- change WCMS-managed content through Axis after import.\n\nBad first customizations are also easy to name:\n\n- editing `nodics.core` because a project-specific rule is needed;\n- putting CMS import data into `nodics.axis`;\n- changing generated files without changing their source;\n- changing a standard functional module identity because a project customized\n  implementation;\n- hiding a status, error code, permission, or lifecycle state in an unrelated\n  property file.\n\nKickoff exists to teach the safe path first.\n\n## Beginner story\n\nA new developer can think of Kickoff as a training project:\n\n1. It shows where a customer project keeps project modules.\n2. It shows where local environment/server configuration lives.\n3. It shows how to point at a framework checkout that may live anywhere on the\n   machine.\n4. It starts Platform, WCMS, and the composed Process/Cron automation runtime\n   without asking the developer to create a production topology first.\n5. It ships project-owned documentation so Axis can show framework docs,\n   Axis docs, and customer-project docs side by side.\n\nAfter the developer understands this reference shape, they can create a real\ncustomer project with the same rules but different business modules, branding,\ndata, environments, and deployment choices.\n\n## Documentation boundary\n\nKickoff docs are imported through WCMS like any other governed CMS content\npack. Axis renders the resolved CMS page and does not own the documentation\nrecords. The BackOffice registry exposes the documentation source so the Axis\nDocumentation dashboard can discover it.\n\n## Common mistakes\n\n- Do not put framework documentation in Kickoff unless the page is explaining\n  how Kickoff consumes the framework.\n- Do not copy `nodics.core`, `nodics.platform`, `nodics.wcms`, or `nodics.cron`\n  source into this repository.\n- Do not move Axis renderers or browser code into Kickoff.\n- Do not assume a customer project will always sit beside `nodics.ai`; use the\n  framework-root configuration.\n- Do not change generated content-pack files without regenerating from source.\n- Do not rename functional capabilities when a customer module only customizes\n  their implementation.\n\n## How to know Kickoff is working\n\nKickoff is healthy when Platform starts, WCMS starts, the module registry shows\nmandatory functional modules as active, optional modules can be registered\nthrough Axis, documentation content packs can be imported or updated through\nBackOffice/WCMS, and Axis can render Framework, Swaggers, Nodics Axis, and\nNodics Kickoff documentation from backend-owned sources.\n\n## Verification\n\nVerify Kickoff as a reference customer project by proving that it can run the\nframework without becoming framework source. The local proof is to configure\nthe framework root, install dependencies, start Platform, WCMS, and Process\nwhen needed, start Axis, log in, import required data releases, and open the\nKickoff documentation product. The project should contribute its own docs and\nsample behavior while framework docs still come from `nodics.docs` and Axis\nproduct docs still come from the Platform Axis backend module.\n\nFor repository verification, run the Kickoff documentation contract test,\nruntime prepare tests, and local acceptance script when project behavior,\nenvironment/server configuration, documentation packs, or generated data\nchange. If a future customer copies the reference project, the docs should\nteach them where to replace the project name and where not to create\nframework-level assumptions.\n\n## What to read next\n\nRead Kickoff in this order:\n\n1. **Local runtime topology** to understand which servers start and why.\n2. **Local acceptance checklist** to prove the environment from a fresh local\n   database.\n3. **Customer customization guide** to learn how to change behavior without\n   damaging framework ownership.\n4. Framework documentation for Core, Platform, WCMS, Cron, imports, and DevOps\n   once the local system is running.\n\n## Continue\n\n- [Local runtime topology](local-runtime.md)\n- [Customer customization guide](customization-guide.md)\n"
        },
        {
          "code": "kickoff.local-runtime",
          "title": "Local runtime topology",
          "route": "/docs/nodics-kickoff/kickoff-local-runtime",
          "section": "nodics-kickoff",
          "sectionTitle": "Nodics Kickoff",
          "sectionOrder": 10,
          "order": 20,
          "audience": [
            "architect",
            "developer",
            "operator"
          ],
          "summary": "Start and reason about the local Platform, WCMS, and Cron servers that make the reference project usable.",
          "searchText": "Local runtime topology Start and reason about the local Platform, WCMS, and Cron servers that make the reference project usable. # Local Runtime Topology\n\nKickoff provides a local reference topology so a developer can start Nodics and\nsee the major runtime surfaces without creating a new customer project first.\nThe local environment is `kickoffLocal`.\n\n## What this is\n\nThe local runtime topology is the smallest practical Nodics deployment on a\ndeveloper machine. It runs the framework as real backend servers, not as mocked\nscreens. That is important because Axis, BackOffice, module registration,\ncontent-pack import, API contracts, authentication, and WCMS routing all depend\non backend authority.\n\nThe goal is not to teach every production option on day one. The goal is to\ngive a beginner a reliable local loop: configure framework location, install\ndependencies, start servers, log in, import/update data, and observe the\nruntime from Axis.\n\n## Servers\n\nThe current local topology uses separate runtime servers:\n\n- `platformServer` starts the Platform runtime. It loads Core, Platform,\n  Profile, BackOffice, the Platform `axis` backend module, and Kickoff project\n  modules.\n- `wcmsServer` starts the WCMS runtime. It loads Core, WCMS, CMS, Media, and\n  Kickoff project modules. WCMS owns CMS sites, catalogs, pages, components,\n  routes, and documentation content-pack import.\n- `processServer` starts the combined Business Process & Automation runtime.\n  It loads Core, Cron, Process, cron jobs, workflow modules, and Kickoff\n  project modules. Process owns process/workflow definitions; Cron still owns\n  job definitions, triggers, scheduler state, and execution lifecycle.\n\nKickoff intentionally has no standalone Cron server. Scheduled automation is\navailable only through `processServer`, preventing accidental duplicate\nscheduler processes while Cron retains ownership of its job lifecycle.\n\nAxis is a separate frontend application. It connects to Platform for employee\nauthentication and BackOffice bootstrap, then uses the registered module\ncontracts to reach the authorized backend surfaces.\n\n## Start locally\n\nUse separate terminals from the Kickoff repository:\n\n```bash\nnpm run start:platform\nnpm run start:wcms\nnpm run start:process\n```\n\nAxis normally runs from the `nodics.axis` repository:\n\n```bash\nnpm run dev\n```\n\nThe default local ports are:\n\n- Axis: `http://localhost:3100`\n- Platform: `http://localhost:4300`\n- WCMS: `http://localhost:4310`\n- Process and Automation: `http://localhost:4330`\n\n## Before starting\n\nFrom `nodics.kickoff`, copy and review local environment configuration:\n\n```bash\ncp .env.example .env\n```\n\nSet the framework checkout location:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nThe path may be absolute or relative to the Kickoff project root. This avoids a\nhard dependency on a fixed workspace layout. One developer may keep framework\ncode beside Kickoff; another may keep it in a different projects directory.\n\nThen prepare local file dependencies:\n\n```bash\nnpm run configure:framework\nnpm install\n```\n\n`configure:framework` updates the project-local dependency links so npm can\ninstall framework packages from the configured checkout. It does not make\nKickoff the owner of those modules.\n\n## Start sequence\n\nUse separate terminals so logs stay readable:\n\n1. Start Platform first. It owns Profile login, BackOffice bootstrap, module\n   registry, runtime catalogue projection, and OpenAPI contract discovery.\n2. Start WCMS second. It owns documentation sites, catalogs, pages, components,\n   routes, media metadata, and content delivery.\n3. Start Process and Automation when process/workflow or scheduled behavior is\n   needed. It proves `nodics.process` and `nodics.cron` can share one runtime\n   environment while keeping separate functional ownership.\n4. Start Axis after backend servers are reachable. Axis reads its public\n   configuration, connects to Platform, authenticates the employee, and\n   discovers registered module endpoints from BackOffice.\n\n## Login and first checks\n\nOpen Axis at `http://localhost:3100`. For the local reference data, use:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nAfter login:\n\n- open the System and Integrations area and check the module registry;\n- confirm Core, Platform, and WCMS are active and not treated as optional;\n- if Process and Automation is running, confirm Process and Cron appear from\n  the composed runtime and Cron can move through the optional lifecycle;\n- open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics\n  Kickoff are shown as separate documentation products;\n- import or update documentation packs only through the authorized Axis action.\n\n## Documentation import\n\nProject documentation is generated into a Kickoff content pack and imported\nthrough WCMS. The pack code is `kickoffDocumentation`; the CMS Site is\n`kickoffDocumentationSite`; the default route is `/docs/nodics-kickoff`.\n\nIf the documentation page is unavailable in Axis, check that WCMS is running,\nthe content pack is generated, and the latest pack version has been imported.\nThe content-pack service rejects changed content with the same immutable\nversion, so update the catalogue version whenever generated hashes change.\n\n## Troubleshooting\n\nIf Axis shows a BackOffice registry recovery page, Platform is not reachable,\nthe Platform port is wrong, or Axis public configuration points at the wrong\nbase URL. If Axis logs in but documentation routes show CMS recovery, WCMS may\nnot be running, the documentation source may not be registered, or the content\npack may not be imported. If an optional module appears only after refresh,\ncheck the module registry API response after each lifecycle operation before\nassuming the frontend state is wrong.\n\nIf npm cannot install framework packages, check `NODICS_FRAMEWORK_ROOT`, rerun\n`npm run configure:framework`, and confirm the configured directory contains\n`nodics.core`, `nodics.platform`, `nodics.wcms`, and any optional framework\nmodules used by the local server.\n\n## Production note\n\nThe local topology teaches ownership, not final infrastructure. Production may\nrun modules in separate processes, hosts, containers, or release units. That\ndoes not change documentation ownership, module identity, API authority, or the\nrule that Axis discovers runtime capability from BackOffice instead of keeping\nits own endpoint registry.\n\n## Common mistakes\n\n- Starting only the frontend and assuming backend discovery should work.\n- Putting long inherited property blocks into a server config when the project\n  only needs a small override.\n- Assuming every framework module in the checkout is active for every server.\n  The configured runtime graph decides what loads.\n- Treating Cron as owned by Process just because the reference workspace can\n  run both in the same `processServer`.\n- Using local ports, database names, or project names as permanent framework\n  assumptions.\n- Forgetting that restart should preserve persisted registry and imported\n  content state.\n\n## Verification\n\nVerify local runtime topology by starting each server from the customer\nproject, not from framework internals. Platform should expose login,\nBackOffice bootstrap, registry, and API discovery. WCMS should expose content,\ndocumentation, media, and import/export delivery. Process and Automation should\nreport Process and optional Cron runtime availability from the composed server.\nAxis should connect through Platform and WCMS instead of local hardcoded module\nstate.\n\nFor a beginner-friendly proof, open Axis after the servers start and inspect\nDashboard, System and Integrations, Module Registry, Imports and Exports,\nContent and Experience, Media, Business Process & Automation, and\nDocumentation. The UI should explain the same topology that the server\nconfiguration declares.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Customer customization guide](customization-guide.md)\n"
        },
        {
          "code": "kickoff.local-acceptance",
          "title": "Local acceptance checklist",
          "route": "/docs/nodics-kickoff/kickoff-local-acceptance",
          "section": "nodics-kickoff",
          "sectionTitle": "Nodics Kickoff",
          "sectionOrder": 10,
          "order": 30,
          "audience": [
            "architect",
            "developer",
            "operator"
          ],
          "summary": "Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior.",
          "searchText": "Local acceptance checklist Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior. # Local Acceptance Checklist\n\nThis checklist is the beginner-friendly path for proving a fresh Nodics local\ninstallation from zero database state. Use it when you have cloned the three\nworking repositories, configured Kickoff, and want to confirm the backend\nframework, customer project, and Axis frontend are working together.\n\nThe checklist is intentionally explicit. A new developer should be able to\nfollow it without already knowing Nodics module loading, BackOffice bootstrap,\nWCMS content packs, or functional-module registration.\n\n## What this checklist proves\n\nThe acceptance run proves five things:\n\n| Area | What must be true |\n| --- | --- |\n| Framework checkout | Kickoff can resolve Core, Platform, WCMS, and Cron from the configured framework root. |\n| Runtime topology | Platform, WCMS, and the composed Process/Cron automation runtime can start from the Kickoff local environment. |\n| Bootstrap data | Mandatory initialization data can be imported from module-owned releases. |\n| Axis access | Axis can connect to Platform, authenticate the local admin, and discover BackOffice bootstrap data. |\n| Module lifecycle | Core, Platform, and WCMS are mandatory/registered; Cron is observable as an optional runtime module. |\n\nIf any one of these fails, do not continue adding new functional modules. Fix\nthe contract break first, otherwise every later module will inherit a shaky\nlocal foundation.\n\n## Repository layout used by the reference run\n\nThe local reference setup normally looks like this:\n\n```text\nnodicsRoot/\n  nodics.ai/\n  nodics.axis/\n  nodics.kickoff/\n```\n\nThis layout is only a convenience. Customer projects may live anywhere. The\nimportant contract is that `nodics.kickoff/.env` tells Kickoff where the\nframework checkout lives.\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nUse an absolute path if your repositories are not parallel:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=/Users/example/projects/framework/nodics.ai\n```\n\n## Mandatory prerequisites\n\nBefore running the checklist, confirm these local services and tools are\navailable:\n\n1. Node.js 24 and npm.\n2. MongoDB running locally.\n3. The three repositories are cloned:\n   - `nodics.ai`\n   - `nodics.axis`\n   - `nodics.kickoff`\n4. `nodics.kickoff/.env` exists and points to the framework root.\n5. `nodics.axis/.env` points to the local Platform server.\n\nRun this from `nodics.kickoff`:\n\n```bash\ncp .env.example .env\nnpm run configure:framework\nnpm install\n```\n\nRun this from `nodics.axis`:\n\n```bash\ncp .env.example .env\nnpm install\n```\n\n## Fresh database reset\n\nUse a fresh database reset only for local developer acceptance. Do not run this\nagainst a shared development, QA, pre-production, or production database.\n\nThe local server configs own the exact database names. Read them before\ndropping anything. In the reference topology, the relevant server configs are:\n\n```text\nenvs/kickoffLocal/platformServer/config/properties.js\nenvs/kickoffLocal/wcmsServer/config/properties.js\nenvs/kickoffLocal/processServer/config/properties.js\n```\n\nThe reset should remove only the local Kickoff runtime databases/schemas used\nby those servers. It must not delete a broad MongoDB instance, user home\nfolder, workspace folder, or unrelated project database.\n\n## Automated acceptance path\n\nMost maintainers should use the automated path first. It proves the same\ncontracts as the manual checklist and reduces human mistakes during repeated\nbootstrap tests.\n\nRun this from `nodics.kickoff`:\n\n```bash\nnpm run acceptance:local:fresh\n```\n\nThis command intentionally drops only the bounded reference local databases:\n\n- `kickoffLocal`\n- `kickoffLocalWcms`\n- `kickoffLocalCron`\n- `kickoffLocalProcess`\n\nIt then starts any missing local servers, waits for Platform, WCMS, the\ncomposed Process/Cron automation runtime, and Axis to become reachable,\nauthenticates the local admin, imports the Framework, Nodics Axis, and Nodics\nKickoff documentation packs through WCMS, checks key Axis routes, verifies WCMS\ncontent counts, and runs the Axis live smoke with the documentation and Cron\nlifecycle gates enabled.\n\nUse the safer non-destructive form when you only want to verify the current\nlocal state:\n\n```bash\nnpm run acceptance:local\n```\n\nThat version does not drop databases. It checks the currently running or\nstarted local topology and imports missing documentation packs if required.\n\n### What the automated command proves\n\n```mermaid\nflowchart TD\n  Start[\"Developer runs npm run acceptance:local:fresh\"] --> Drop[\"Drop only Kickoff local DBs\"]\n  Drop --> Platform[\"Start or reuse Platform on 4300\"]\n  Platform --> WCMS[\"Start or reuse WCMS on 4310\"]\n  WCMS --> Process[\"Start or reuse Process/Cron on 4330\"]\n  Process --> Axis[\"Start or reuse Axis on 3100\"]\n  Axis --> Auth[\"Authenticate default/admin\"]\n  Auth --> Registry[\"Verify Core, Platform, WCMS, Cron observation\"]\n  Registry --> Docs[\"Import documentation packs through WCMS\"]\n  Docs --> Routes[\"Verify Axis routes\"]\n  Routes --> Designer[\"Verify Content Designer catalog-first route\"]\n  Designer --> Counts[\"Verify WCMS catalog/site/page/component/route counts\"]\n  Counts --> Lifecycle[\"Run Cron register, activate, deactivate, deregister\"]\n  Lifecycle --> Pass[\"Acceptance pass\"]\n```\n\nThe command stops the servers it started after the acceptance gates complete.\nIf you want to keep the stack running so you can inspect Axis after the run,\nuse:\n\n```bash\nnode scripts/local-bootstrap-acceptance.mjs --drop-local-db --leave-started\n```\n\nThe command is deliberately conservative. It does not discover and drop random\nMongoDB databases. It does not kill unrelated processes. It does not create\nanother importer. It uses the existing Profile login, BackOffice registry,\nWCMS content-pack API, and Axis smoke test. This matters because acceptance\nmust prove the same path a real developer or operator uses.\n\n## Start the backend servers\n\nOpen three terminals from `nodics.kickoff`.\n\nTerminal 1:\n\n```bash\nnpm run start:platform\n```\n\nTerminal 2:\n\n```bash\nnpm run start:wcms\n```\n\nTerminal 3:\n\n```bash\nnpm run start:process\n```\n\nExpected local ports:\n\n| Runtime | Port | Why it matters |\n| --- | ---: | --- |\n| Platform | 4300 | Profile login, BackOffice bootstrap, module registry, OpenAPI discovery. |\n| WCMS | 4310 | CMS sites, content catalogs, page/component data, documentation packs, media metadata. |\n| Process and Automation | 4330 | Process/workflow APIs plus optional Cron observation and registry lifecycle testing. |\n\nIf a port is already in use, confirm whether it is an earlier Nodics server\nfrom the same checkout. Do not kill unrelated processes by guessing.\n\n## Start Axis\n\nOpen another terminal from `nodics.axis`:\n\n```bash\nnpm run dev\n```\n\nAxis should be available at:\n\n```text\nhttp://localhost:3100\n```\n\n## Login\n\nOpen Axis and use the local reference credentials:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nSuccessful login proves:\n\n1. Axis can load public bootstrap from Platform.\n2. Profile can authenticate the local admin.\n3. Axis can retrieve authenticated BackOffice bootstrap data.\n4. Axis receives authorized navigation and runtime module projections.\n\n## Import initialization data\n\nIn Axis, open the import/initialization workspace and install the available\ninitialization releases.\n\nYou should see releases owned by active modules only. The system must not ask\nAxis to invent import data. Axis presents the operation; the owning backend\nmodule and nImport execute the import.\n\nExpected outcome:\n\n- mandatory Profile/bootstrap identity data is available;\n- core framework data required by Platform and WCMS is present;\n- documentation content packs can be imported or updated;\n- repeated import attempts with unchanged immutable releases do not corrupt\n  existing data.\n\n## Verify module registry\n\nOpen:\n\n```text\nSystem and Integrations → Module Registry\n```\n\nExpected state:\n\n| Functional module | Expected state | Why |\n| --- | --- | --- |\n| `nodics.core` | Registered and active | Required by every runtime. |\n| `nodics.platform` | Registered and active | Required for Profile, BackOffice, and Axis bootstrap. |\n| `nodics.wcms` | Registered and active | Required for CMS, documentation, and media/content management. |\n| `nodics.process` | Optional, observed when Process and Automation is running | Proves process/workflow capability can join the lifecycle. |\n| `nodics.cron` | Optional, observed when Process and Automation or standalone Cron is running | Proves optional runtime modules can join the lifecycle. |\n\nCore, Platform, and WCMS are mandatory for this local Axis-backed acceptance\ntopology. They should not appear as removable optional modules. Cron may be\nregistered, activated, deactivated, and deregistered as an optional module.\n\n## Verify documentation\n\nOpen:\n\n```text\nDocumentation\n```\n\nExpected documentation products:\n\n- Framework\n- Swaggers\n- Nodics Axis\n- Nodics Kickoff\n\nThe products are intentionally separated by ownership:\n\n| Documentation product | Owning repository/module |\n| --- | --- |\n| Framework | `nodics.ai/nodics.docs` |\n| Nodics Axis | `nodics.ai/nodics.platform/modules/axis` |\n| Nodics Kickoff | `nodics.kickoff` |\n| Swagger/OpenAPI | Platform BackOffice/OpenAPI contracts |\n\nAxis is only the renderer. It must not own backend-importable documentation\ncontent.\n\n## Verify content and media\n\nOpen these Axis routes:\n\n```text\n/content\n/content/designer\n/media\n/media/items\n/media/folders\n```\n\nExpected behavior:\n\n- `/content` shows the content dashboard and WCMS-owned summary sections.\n- `/content/designer` shows the governed Page Designer foundation. It should\n  explain the catalog-first sequence and support dynamic template slots rather\n  than assuming a fixed header/main/footer page shape.\n- `/media` shows media management, media records, and media-by-source sections.\n- `/media/items` and `/media/folders` open focused media workspaces instead of\n  falling into CMS recovery.\n- Any unavailable backend schema is reported as a backend/schema discovery\n  issue, not as a frontend-owned data model.\n\n### Verify Page Designer authoring model\n\nOpen:\n\n```text\nContent and Experience → Web Content Management System → Page Designer\n```\n\nThe Designer is not expected to look exactly like the final website in a\nbrowser. It is the authoring and structure view. A beginner should understand\nthis chain:\n\n```mermaid\nflowchart TD\n  Catalog[\"Content Catalog\"]\n  Site[\"Site\"]\n  Template[\"Page Template\"]\n  Page[\"Page\"]\n  Slots[\"Template Slots: any number\"]\n  Sections[\"Page Sections\"]\n  Components[\"Component Instances\"]\n  Media[\"Governed Media\"]\n  Route[\"Page Route\"]\n  Nav[\"Navigation Node\"]\n\n  Catalog --> Site\n  Catalog --> Template\n  Site --> Page\n  Template --> Page\n  Page --> Slots\n  Slots --> Sections\n  Sections --> Components\n  Components --> Media\n  Page --> Route\n  Route --> Nav\n```\n\nThis acceptance step proves only that the reference local stack can consume the\nWCMS-owned authoring model. The contract itself belongs to WCMS. If the\nDesigner metadata is wrong, fix the owning WCMS contract and tests first; do\nnot move catalog, site, template, slot, page, component, or media authority\ninto the reference project or into the Axis frontend.\n\nExpected Designer evidence:\n\n| Area | Expected behavior |\n| --- | --- |\n| Catalog-first sequence | The UI starts from content catalog, then site, template, page, slots, sections, components, media, route, and navigation. |\n| Dynamic slots | Slot names come from template data; the UI must not assume only three slots. |\n| Backend authority | Save/validate actions call WCMS/CMS authoring APIs, not browser-local persistence. |\n| Media governance | Media association points to nMedia records or sets; it never asks for a filesystem path. |\n| Publish readiness | Designer can validate readiness, but publishing remains CMS/nPublish authority. |\n\nIf Designer loads but cannot validate or save, inspect the WCMS server first:\n`cmsAuthoring` API exposure must be enabled, the user must have\n`cms.backoffice.manage`, the selected Site must belong to the selected Content\nCatalog, and the selected Template must expose the slots being edited.\n\n## Verify Cron\n\nOpen:\n\n```text\n/cron\n```\n\nExpected behavior:\n\n- If Process and Automation is running, Axis can observe both `nodics.process`\n  and `nodics.cron` from the same runtime.\n- If Cron is not registered, it appears as available to register.\n- Register moves it into the registered list without requiring a page refresh.\n- Activate changes lifecycle state without freezing buttons.\n- Deactivate and deregister return it to the correct next state.\n\nThe automated acceptance runner performs the full optional Cron lifecycle:\n\n```text\navailable → register → registered/inactive → activate → registered/active\nregistered/active → deactivate → registered/inactive → deregister → available\n```\n\nCron is optional for the project, so the final accepted state after the\nautomated lifecycle test is **available** rather than permanently registered.\nThat proves both the runtime observation path and the governed removal path.\n\nIf an action succeeds but the UI does not update, inspect the module registry\nAPI response immediately after the action. The frontend should refresh local\nquery state after each lifecycle operation.\n\n## Command-line smoke test\n\nAfter the servers and Axis are running, use the live smoke script from\n`nodics.axis`:\n\n```bash\nAXIS_EXPECT_MODULES=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live\n```\n\nExpected result:\n\n```text\nPASS Axis route /\nPASS Axis route /content\nPASS Axis route /content/designer\nPASS Axis route /media\nPASS Axis route /media/items\nPASS Axis route /media/folders\nPASS Axis route /cron\nPASS Axis route /system-integrations\nPASS Axis route /registry\nPASS Axis route /operations/imports-exports\nPASS Axis route /docs/swaggers\nPASS BackOffice public bootstrap\nPASS authenticated login for admin\nPASS module registry reachable\nPASS required modules registered: nodics.core, nodics.platform, nodics.wcms\nPASS optional runtime modules observed: nodics.cron\nPASS documentation pack nodicsDocumentation is CURRENT\nPASS documentation pack axisDocumentation is CURRENT\nPASS documentation pack kickoffDocumentation is CURRENT\nPASS cron lifecycle register\nPASS cron lifecycle activate\nPASS cron lifecycle deactivate\nPASS cron lifecycle deregister returns module to available\n```\n\n## Troubleshooting quick map\n\n| Symptom | Most likely boundary |\n| --- | --- |\n| Axis recovery says BackOffice registry unavailable | Platform server is not reachable or Axis points at the wrong Platform URL. |\n| Login fails | Profile data was not imported, credentials changed, or Platform is using a different database. |\n| Documentation route shows CMS recovery | WCMS is down, documentation pack is not imported, or the documentation source is not registered. |\n| Import page says API category is disabled | API exposure defaults belong in owning modules; check whether the runtime disabled the category at server level. |\n| Cron does not appear | Process and Automation server or standalone Cron server is not running, or the runtime has not reported its functional module observation. |\n| Module action succeeds only after refresh | Axis query invalidation or backend response envelope needs review. |\n| Media schema discovery unavailable | WCMS/media runtime is not exposing the expected schema workbench contract. |\n\n## Acceptance sign-off\n\nThe local acceptance run is complete when:\n\n1. Platform, WCMS, Process and Automation, and Axis are running.\n2. Fresh local databases were created from module-owned import data.\n3. Admin login works.\n4. Module registry shows mandatory modules and optional Cron correctly.\n5. Documentation products are visible.\n6. Content and media routes render the expected workspaces.\n7. The Page Designer route shows the catalog-first model and does not invent a\n   fixed slot shape or frontend-owned content persistence.\n8. `npm run acceptance:local:fresh` passes, or the manual equivalent plus\n   `AXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live`\n   passes.\n9. No repo in the three-repo set has uncommitted acceptance changes.\n\nWhen all nine are true, the modularized foundation is ready for the next\nfunctional module.\n\n## Common mistakes\n\n- Treating a running Node process as proof that the customer project is ready.\n- Skipping content-pack import and then wondering why Axis documentation or\n  WCMS pages are unavailable.\n- Dropping or modifying broad databases during a local test instead of using\n  the bounded fresh-bootstrap command intended for the reference environment.\n- Accepting a module lifecycle flow that requires a browser refresh after\n  register, activate, deactivate, or deregister.\n- Ignoring an `INVALID RELEASE` message because the release still appears in\n  the list.\n- Verifying only Platform while forgetting WCMS, documentation, media, Process,\n  Cron, and Axis routes.\n\n## Verification\n\nRun the checklist twice when confidence matters: once against the currently\nrunning local database and once with the bounded fresh-bootstrap option. The\nexpected result is repeatability. The system should rebuild from backend-owned\ndata, import documentation and initialization releases through governed APIs,\nshow healthy CMS record counts, expose mandatory modules, handle optional Cron\nlifecycle, and render Axis routes without manual database edits.\n\nFor project documentation changes, regenerate the Kickoff documentation pack,\nrun the documentation contract test, start Platform and WCMS, import or update\nthe Kickoff docs release, and open `/docs/nodics-kickoff` in Axis. If the page\nonly works because it was hardcoded in the frontend, the acceptance result is\nnot valid.\n"
        },
        {
          "code": "kickoff.deployment-qualification",
          "title": "Deployment qualification",
          "route": "/docs/nodics-kickoff/kickoff-deployment-qualification",
          "section": "nodics-kickoff",
          "sectionTitle": "Nodics Kickoff",
          "sectionOrder": 10,
          "order": 40,
          "audience": [
            "architect",
            "developer",
            "operator"
          ],
          "summary": "Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off.",
          "searchText": "Deployment qualification Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off. # Deployment qualification\n\nDeployment qualification is the bridge between a release candidate that works\nlocally and a release that accountable owners may approve for production. The\nKickoff runner coordinates evidence from the framework, reference project,\nAxis, and local Redis, but it deliberately cannot approve production by itself.\n\n## Start here\n\nFrom `nodics.kickoff`, print the plan without running anything:\n\n```bash\nnpm run qualification:deployment\n```\n\nThe JSON plan identifies each gate, its owner, the command that would run, and\nwhat it proves. It contains no credentials or provider URLs.\n\nRun the safe local gates:\n\n```bash\nnpm run qualification:deployment:local\n```\n\nThe runner executes the strict framework release gate, retained-data Kickoff\nacceptance, Axis verification, and the live Redis cache and distributed\nregistry contracts. It writes sanitized evidence to:\n\n```text\nenvs/kickoffLocal/generated/deployment-qualification/latest.json\n```\n\nThe generated report is local operational evidence and is intentionally\nignored by Git. Archive it in the deployment system that owns the release.\n\n## Fresh bootstrap is intentionally separate\n\nFresh acceptance drops only the documented Kickoff local databases. Because it\nmutates local data, it is never included by default:\n\n```bash\nnode scripts/deployment-qualification.mjs --execute-local --include-fresh\n```\n\nNever use this flag against a shared development, qualification,\npre-production, or production database. Use an isolated disposable Kickoff\nenvironment and verify the configured database names first.\n\n## What local evidence does and does not prove\n\n| Gate | Local proof | Still required before production |\n| --- | --- | --- |\n| Framework | Clean build, generated contracts, governance, dependency audit, and automated suites | Deployment-image and target-runtime confirmation |\n| Kickoff | Integrated runtime, documentation, lifecycle, and business-user smoke journey | Production topology and operational ownership |\n| Axis | Formatting, lint, type safety, automated tests, and production bundle | Supported browser/device and human assistive-technology matrix |\n| Redis | Real local cache and distributed-registry behavior | Managed TLS/authentication, topology, isolation, failover, and recovery |\n| Payments/providers | Mock and offline contract behavior | Real non-production credentials, callbacks, failure handling, and rollback |\n\nLocal success must never be translated into `productionApproved: true`. The\nreport fixes this value to `false` and keeps every external evidence class at\n`NOT_EXECUTED`.\n\n## Production-only evidence register\n\nNamed owners must attach evidence for all applicable rows:\n\n| Evidence | Accountable owner | Minimum completion evidence |\n| --- | --- | --- |\n| Peak load | Performance owner | Workload model, dataset, topology, p95/p99, throughput, error rate, saturation, queue age, projection lag, and integrity reconciliation |\n| Soak | Operations owner | Sustained duration, memory/CPU trends, retry growth, drift, storage/index growth, and post-run reconciliation |\n| Penetration | Security owner | Authenticated attack surface, tenant isolation, validation, replay, export, webhook, and privilege-escalation results with disposition |\n| Managed cache failover | Platform owner | TLS/authentication, topology, tenant isolation, node/provider loss, recovery time, and data-consistency results |\n| Backup and restore | Data owner | Backup identity, restore procedure, authoritative counts/hashes, projection rebuild, and reconciliation |\n| Regional residency | Infrastructure and privacy owners | Allowed-region routing, evacuation, deletion propagation, and cross-region leakage results |\n| RPO/RTO | Operations owner | Measured recovery point and recovery time compared with approved objectives |\n| External providers | Provider owners | Credential source, consent, callbacks, residency, observability, degraded behavior, rollback, and key rotation |\n| Accessibility | Product accessibility owner | Keyboard, screen reader, zoom/reflow, contrast, browser, and supported-device results |\n\n## Recommended execution order\n\n```mermaid\nflowchart TD\n  Plan[\"Print qualification plan\"] --> Local[\"Run safe local evidence\"]\n  Local --> Fresh{\"Isolated fresh environment available?\"}\n  Fresh -- \"yes\" --> Bootstrap[\"Run bounded fresh bootstrap\"]\n  Fresh -- \"no\" --> Provision[\"Provision qualification environment\"]\n  Bootstrap --> Provision\n  Provision --> Providers[\"Qualify managed cache and external providers\"]\n  Providers --> Load[\"Run peak load and soak\"]\n  Load --> Recovery[\"Run failover, backup restore, and RPO/RTO\"]\n  Recovery --> Security[\"Complete penetration and residency review\"]\n  Security --> Accessibility[\"Complete human accessibility matrix\"]\n  Accessibility --> Review[\"Accountable-owner evidence review\"]\n  Review --> Decision{\"All gates passed or residual risk accepted?\"}\n  Decision -- \"no\" --> Hold[\"Keep publication blocked\"]\n  Decision -- \"yes\" --> Release[\"Approve merge, tag, and publication\"]\n```\n\nRun functional success paths before destructive resilience tests. Run load\nbefore failover only when the test plan explicitly needs a stable baseline.\nRestore the environment and reconcile data after every destructive exercise.\n\n## Failure and recovery\n\nThe runner continues through local gates so one report shows every attempted\ncheck. Any non-zero command becomes `FAILED` with a stable failure code; raw\nenvironment variables and secrets are excluded. Investigate the owning\nrepository first, rerun the focused failing command, then rerun the pack.\n\nIf Redis is unavailable, start or configure an approved test endpoint and set\n`NODICS_CACHE_REDIS_URL` only in the execution environment. Do not commit it.\nIf the framework, Axis, or Kickoff checkout lives elsewhere, provide\n`NODICS_QUALIFICATION_FRAMEWORK_ROOT` or `NODICS_QUALIFICATION_AXIS_ROOT`.\n\n## Customization boundary\n\nThis runner belongs to the reference customer project because it coordinates a\nspecific multi-repository deployment journey. A real customer project should\ncopy the pattern into its own project tooling, change only its repository\ncoordinates and qualification gates, and retain the safety properties:\n\n- dry plan by default;\n- destructive checks explicitly opted in;\n- no secrets or provider URLs in reports;\n- external evidence remains separate from local automation;\n- no automatic production approval;\n- named owners and measurable completion criteria.\n\nDo not move customer workloads, credentials, environments, acceptance targets,\nor risk decisions into `nodics.ai`. Framework modules own reusable contracts;\nthe customer deployment owns its qualification and release decision.\n\n## Common mistakes\n\n- Treating local Redis as proof of a managed Redis topology, TLS, authentication,\n  failover, or regional recovery.\n- Calling mock Stripe or offline provider contracts a live-provider test.\n- running `--include-fresh` without checking that the target is the isolated\n  Kickoff local environment;\n- publishing the generated JSON as a production approval even though it records\n  only command outcomes and fixes `productionApproved` to `false`;\n- pasting secrets, bearer tokens, provider URLs, customer data, or raw security\n  findings into a shared evidence report;\n- accepting average latency while ignoring p95/p99, errors, saturation, queue\n  age, projection lag, and post-run data integrity;\n- running failover or restore exercises without a rollback plan and named\n  operational owner;\n- letting Axis automation replace keyboard, screen-reader, zoom, contrast, and\n  supported-device testing by a qualified human;\n- merging or tagging merely because local gates passed while production-only\n  evidence still says `NOT_EXECUTED`.\n\n## Verification\n\nDevelopers can verify the runner contract without starting the full stack:\n\n```bash\nnpm run test:qualification\nnpm run qualification:deployment\n```\n\nConfirm the plan contains five non-destructive local gates, nine explicit\nexternal gates, no environment values, and `productionApproved: false`. Then\nrun `npm run qualification:deployment:local` in the prepared local workspace.\nConfirm every attempted local gate is `PASSED`, the report is written only\nunder the ignored `envs/kickoffLocal/generated` path, and all production-only\ngates remain visible.\n\nOperators should archive the local report with the immutable repository commit\nidentifiers, deployment image identifiers, environment name, external test\nreports, and accountable-owner decisions. Before approval, independently\nconfirm that each external result belongs to the same release candidate and\nenvironment topology. A missing, stale, differently scoped, or unverifiable\nartifact remains pending; silence is never a pass.\n"
        },
        {
          "code": "kickoff.customization",
          "title": "Customer customization guide",
          "route": "/docs/nodics-kickoff/kickoff-customization",
          "section": "nodics-kickoff",
          "sectionTitle": "Nodics Kickoff",
          "sectionOrder": 10,
          "order": 50,
          "audience": [
            "architect",
            "developer",
            "operator"
          ],
          "summary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
          "searchText": "Customer customization guide Use Kickoff as a safe example for project modules, environment configuration, and customer overlays. # Customer Customization Guide\n\nKickoff is intentionally small. It should teach partners how to customize\nNodics safely without turning the reference project into another framework\nrepository.\n\nFor a beginner developer, the most important lesson is restraint. Do not start\nby editing framework files because they are easy to find. Start by asking who\nowns the behavior, whether configuration can solve the need, and which runtime\nserver should load the customization. That habit keeps the customer project\nupgradeable.\n\n## Why customization needs rules\n\nMost enterprise projects start with one urgent customer request. The quickest\nsolution is often to edit whatever file is easiest to find. That works for a\ndemo, but it becomes expensive when more customers, tenants, brands, modules,\nand releases arrive. Nodics customization rules keep the framework upgradeable\nand keep customer behavior visible in the customer project.\n\nThe rule is simple: customize in the most specific owner that needs the\nchange. Use configuration before code. Use a project module before editing a\nframework module. Use a later-loaded extension module before forking a standard\nfunctional module. Create a new functional module only when the business\ncapability is genuinely new.\n\n## Customization decision tree\n\nUse this decision tree before changing code:\n\n```mermaid\nflowchart TD\n  Need[\"Need to change behavior or content\"] --> Config{\"Can configuration solve it?\"}\n  Config -- \"yes\" --> Env[\"Use project, environment, server, node, tenant, or provider configuration\"]\n  Config -- \"no\" --> Existing{\"Does an existing functional module own it?\"}\n  Existing -- \"yes\" --> ProjectModule{\"Is it customer-specific?\"}\n  ProjectModule -- \"yes\" --> Overlay[\"Create or update a customer/project module loaded after the framework owner\"]\n  ProjectModule -- \"no\" --> Framework[\"Change the owning framework module with tests and docs\"]\n  Existing -- \"no\" --> NewModule[\"Design a new functional module with explicit ownership\"]\n  Env --> Verify[\"Regenerate artifacts and run acceptance\"]\n  Overlay --> Verify\n  Framework --> Verify\n  NewModule --> Verify\n```\n\nIf you cannot answer the ownership question, do not code yet. A wrong owner is\nmore expensive than a missing implementation because it creates a hidden\ncontract future teams will inherit.\n\n## How a developer or AI tool should think\n\nKickoff is a reference customer project, so every change teaches future\ncustomers what “good” looks like. A developer or AI tool should not behave like\na script that only edits the nearest file. It should behave like a small expert\nteam:\n\n| Role | What to check in Kickoff |\n| --- | --- |\n| Business analyst | Does this make the first-hour customer experience clearer, safer, or more convincing? |\n| Enterprise architect | Does the change preserve framework, customer project, runtime server, Axis, WCMS, Profile, and BackOffice ownership? |\n| Nodics framework expert | Is the behavior a project customization, a framework capability, a server topology decision, or generated content-pack output? |\n| Domain expert | Is the sample reusable enough for future commerce, workflow, content, integration, or industry-specific examples? |\n| Principal engineer | Can this be solved through configuration, project module overlay, generated documentation source, or a small exported function? |\n| QA and tester | Does the setup work from zero database state, repeated runs, missing services, and failed dependency resolution? |\n| TechOps/DevOps reviewer | Are framework paths, local databases, ports, logs, reset scope, and rollback behavior safe and understandable? |\n\nIf the answer is unclear, stop and name the ownership decision before editing.\nFor example, changing the local WCMS database name belongs in server\nconfiguration, while changing the import checksum rule belongs in the owning\nframework import service.\n\n## File placement examples\n\nUse these examples when deciding where code or data belongs:\n\n| Need | Correct owner | Why |\n| --- | --- | --- |\n| Change local Platform port | `envs/kickoffLocal/platformServer/config` | It is server topology, not framework behavior. |\n| Add a project-only service | `modules/<project-module>` | Customer behavior should load after framework modules. |\n| Explain Kickoff setup in Axis docs | `nodics.kickoff/data/core/source/documentation` | Kickoff owns project documentation that becomes CMS data. |\n| Change Axis renderer behavior | `nodics.axis` | Browser rendering is frontend code, not customer backend data. |\n| Change framework-wide import validation | `nodics.ai` owning module | Shared behavior belongs to the framework owner. |\n| Change generated CMS record text | Source Markdown, then regenerate | Generated files are projections and must not become manual authority. |\n\n## Configuration-first examples\n\nConfiguration-first does not mean \"put everything in properties.\" It means use\nthe correct configuration owner before writing code.\n\n| Example change | Better first move | Why |\n| --- | --- | --- |\n| Local WCMS port must change | Server config under `envs/.../wcmsServer/config` | Port is topology, not shared framework behavior. |\n| A project wants a different public label | WCMS/Axis content or project-owned documentation/content data | The label is presentation/content, not service logic. |\n| A local dependency path differs | `.env` with `NODICS_FRAMEWORK_ROOT`, then `configure:framework` | Workspace layout is developer-specific. |\n| A new API category should be enabled | Owning module default property, with server override only to disable or narrow it | Defaults belong to the module that owns the API. |\n| A new lifecycle state is needed | Owning status-definition file | Status values are contracts, not casual properties. |\n| A customer needs different Profile behavior | Customer extension module loaded after Platform/Profile owner | Customer behavior should not fork framework source. |\n\n## Safe customization model\n\nCustomer projects can add project modules under `modules/` and environment or\nserver contributions under `envs/`. These contributions load after standard\nNodics functional modules and can override or extend services through the\nnormal module merge process.\n\nSafe customizations include:\n\n- project-specific configuration;\n- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;\n- customer extension modules such as a future `kickoff.platform`;\n- environment-specific properties for local, testing, pre-production, and\n  production;\n- project-owned CMS documentation content packs;\n- sample data or initialization flows that belong to the customer project.\n\n## Two customization types\n\n### Code-level customization\n\nUse code-level customization when behavior changes: a service needs different\nlogic, a route needs a project-specific policy, a schema needs project fields,\nor an integration must call a customer system. Keep the implementation in a\nKickoff module or a customer extension module. Add tests next to the changed\nowner and document the boundary in the module README or documentation page.\n\nExample mental model:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nHere `kickoff.platform` can override or compose Platform services because it\nloads later. Axis and BackOffice should still show the functional capability as\nPlatform unless the customer intentionally exposes a new business capability.\n\n### Axis and WCMS customization\n\nUse governed frontend customization when an administrator changes content,\nlabels, navigation, documentation, images, or page composition through Axis\nand WCMS. The browser renderer stays in `nodics.axis`; the content records live\nin the backend owner. For example, changing a demo site logo should become a\ngoverned WCMS, Media, or content update, not a hard-coded replacement inside\nthe Axis source repository.\n\n### Documentation customization\n\nDocumentation customization is content customization. If a customer wants\ntheir own onboarding guide, project setup page, API usage note, operational\nrunbook, or business process explanation, the content belongs in the customer\nproject documentation pack.\n\nThe source lives under:\n\n```text\ndata/core/source/documentation/\n  catalogue.json\n  pages/\n```\n\nThe generated files live under:\n\n```text\ndata/core/data/documentation/\ndata/manifest.json\n```\n\nEdit the source, bump the catalogue version, regenerate, test, import, and\nverify in Axis. Never hand-edit the generated CMS records to make a page look\nright.\n\n## What not to customize in Kickoff\n\nDo not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not\nrename standard functional identities such as `nodics.platform` just because a\ncustomer extension customizes their behavior. Do not put backend-importable CMS\ndata into the frontend repository. Do not place framework documentation in the\ncustomer project unless it is truly project-specific guidance.\n\n## Extension example\n\nA customer may later create a module such as `kickoff.platform` to customize\nPlatform behavior. A Platform server could load:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nBackOffice and Axis should still present the functional capability as Platform\nunless the customer explicitly exposes a separate functional module. The\nextension changes implementation; it does not create a new product identity.\n\n## Documentation rule\n\nCustomer documentation follows the same ownership rule:\n\n- framework guidance goes to `nodics.docs`;\n- Axis product guidance goes to Platform `modules/axis`;\n- Kickoff/project guidance goes to `nodics.kickoff`;\n- browser rendering remains in `nodics.axis`.\n\nWhen Kickoff docs change, update the source page, bump the catalogue version if\nthe generated content changes, regenerate the pack, import it through WCMS, and\nverify the route in Axis.\n\n## Step-by-step: add a small project module\n\n1. Create or choose a module under `modules/`.\n2. Give the module a clear package identity and index so load order is\n   intentional.\n3. Add only project-owned services, data, configuration, or routes.\n4. Register the module in the relevant environment/server composition.\n5. Start the server and verify logs show the module loading after framework\n   modules.\n6. Add or update tests proving the project behavior.\n7. Update Kickoff documentation if the customization is part of the reference\n   journey.\n\n### Example: adding a project service\n\nSuppose a customer wants a project-only greeting service for a demo dashboard.\nThe safe thought process is:\n\n1. The behavior is not framework-wide.\n2. The behavior belongs to the customer project.\n3. The implementation should live under a project module, for example\n   `modules/kickoffCore`.\n4. The service should be exported so a later module can override or compose it.\n5. A test should prove the default behavior and the override path.\n6. The documentation should explain the example if it teaches future partners.\n\nDo not add that demo service to `nodics.core` only because every runtime loads\nCore. Core is the shared foundation, not a bucket for convenient code.\n\nDo not use this flow to move framework behavior into Kickoff. If the behavior\nbelongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and\nimplement it in the owning framework module instead.\n\n## Step-by-step: add project documentation\n\n1. Add or update Markdown under\n   `data/core/source/documentation/pages/`.\n2. Update `data/core/source/documentation/catalogue.json`.\n3. Bump the catalogue version when generated content changes.\n4. Run `npm run docs:generate`.\n5. Run `npm run test:documentation`.\n6. Import or update the content pack through Axis.\n7. Open the generated `/docs/nodics-kickoff` route in Axis and verify\n   navigation, search, headings, and previous/next links.\n\n## DevOps and rollback notes\n\nProject customizations should be deployable and reversible. Keep project\nconfiguration separate from private secrets. Record which environment and\nserver a customization affects. If a release fails, rollback should remove or\ndisable the project layer without requiring a framework source rollback.\n\nOperators should be able to answer three questions during rollback: which\nproject module introduced the change, which server graph loaded it, and which\ncontent-pack or configuration version went live. If those answers are unclear,\nthe customization is not ready for a production environment.\n\nGenerated documentation and seed data should be versioned immutably. If content\nchanges with the same version, the import service should reject it so operators\ndo not silently install a different release under an already-trusted identity.\n\n## Common mistakes\n\n- Editing framework files for a project-only demonstration change.\n- Treating the reference project name as a requirement for every customer\n  project.\n- Putting customer documentation into the framework docs module.\n- Changing a standard functional module identity when only a customer overlay\n  is being added.\n- Copying whole framework property trees into an environment/server config\n  instead of overriding only the narrow property the project needs.\n- Editing generated documentation data after a checksum failure instead of\n  updating source Markdown, regenerating, and bumping the release when\n  required.\n\n## Verification\n\nVerify a customer customization from the outside and from the owner. From the\noutside, start the relevant local server, open Axis, and confirm the visible\nbehavior changes only for the project that owns it. From the owner, run the\nproject tests, regenerate project documentation content when docs changed,\nvalidate the content-pack manifest, and run the local acceptance script when\nruntime, import, module registry, documentation, or Axis behavior is affected.\n\nIf a customization changes Platform, WCMS, Cron, or another framework\ncapability through a project overlay, the evidence must show both the default\nframework behavior and the project-specific override. A beginner should be\nable to read the evidence and understand where the change lives, why it does\nnot fork the framework, and how to remove or roll it back.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Local runtime topology](local-runtime.md)\n"
        },
        {
          "code": "kickoff.functional-journeys",
          "title": "Commerce and Engagement functional journeys",
          "route": "/docs/nodics-kickoff/kickoff-functional-journeys",
          "section": "nodics-kickoff",
          "sectionTitle": "Nodics Kickoff",
          "sectionOrder": 10,
          "order": 60,
          "audience": [
            "architect",
            "developer",
            "operator"
          ],
          "summary": "Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence.",
          "searchText": "Commerce and Engagement functional journeys Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence. # Commerce and Engagement functional journeys\n\nThis page is the beginner and operator route through the Nodics reference journeys. It explains what can be demonstrated locally, which module owns each decision, what Axis displays, and how to recover safely. Kickoff composes the reference environment; it does not become the authority for Commerce, Engagement, Payment, Communication, Process, Profile, Media, or WCMS records.\n\n## Understand the product journey\n\nA customer-facing journey is not complete when an HTTP request merely returns success. The full path is customer intent, validated intake, durable business state, an eligible operator action, visibility or fulfillment, and a safe withdrawal or reversal. Every step carries a tenant and correlation identity. Repeated commands use an idempotency key, and state-changing operator commands use an expected revision so two operators cannot silently overwrite each other.\n\nThe local reference uses deterministic providers. They create realistic, content-safe evidence but do not claim that a production account, sender, carrier, or payment merchant is qualified. Sandbox-capable adapters remain disabled until their secret references and environment policy are supplied.\n\n## Plan roles, prerequisites, and ownership\n\nDevelopers start Platform before Commerce or Engagement because authentication, tenant context, and Profile ownership fail closed when Platform is unavailable. Business operators use Axis at `http://localhost:3100`; customer calls use the documented public or customer API surfaces. The local administrator may inspect operator journeys, but a customer-owned route must still be tested with a customer principal before deployment qualification.\n\nThe principal owners are:\n\n- Checkout and Order coordinate placement and reversal checkpoints without taking Payment, Inventory, or Fulfillment authority.\n- Payment owns authorization, capture, void, refund, provider evidence, and reconciliation.\n- Engagement API owns public, customer, operator, and integration exposure while Contact, Review, Feedback, and Testimonial own their records and transitions.\n- Communication owns templates, suppression, delivery attempts, callbacks, and provider-neutral evidence.\n- Process owns workflow definitions, instances, tasks, recovery incidents, retries, dead-letter state, and compensation progress. Domain modules own the business action and reversal adapters.\n- Axis renders backend-owned capability metadata and calls secured action routes; it does not duplicate lifecycle rules.\n\n## Configure and start locally\n\nInstall the workspace dependencies and use Kickoff scripts rather than constructing an undocumented module graph. Run `npm run start:platform` first, then the Commerce and Engagement start scripts in separate terminals. Readiness must pass before invoking a journey. Do not place provider credentials in source, sample data, browser storage, or documentation. Environment-specific secret references belong in secured layered configuration.\n\nRun `npm run acceptance:functional` from `nodics.kickoff` for the automated effective-server proof. The runner reuses healthy local servers or starts only what it needs, authenticates through Platform, uses unique correlation and idempotency values, and stops only processes that it started. It does not edit MongoDB directly.\n\n## Operate Engagement in Axis\n\nOpen Customer Engagement in Axis. The page groups contact work, testimonials, reviews, feedback, operations, automation, and resilience without creating duplicate application shells. Select a saved or quick-filtered view, open one record, inspect its timeline and linked evidence, and use only actions shown as eligible for the current status.\n\nThe feedback reference journey submits an anonymous record, then performs `TRIAGE`, `ASSIGN`, `START`, `RESOLVE`, and `CONFIRM`. Confirm closure is intentionally separate from resolution. Reopen remains available when new customer evidence arrives. Contact work supports start, request information, resolve, close, reopen, spam handling, and handoff recovery. Review moderation supports approval, quarantine, rejection, and restoration. Testimonial operations preserve editorial version, customer consent, publication projection, emergency hide, and reconciliation as separate evidence.\n\nIf an action reports a revision conflict, reload the record and review the newer timeline. Never retry with a guessed revision. If a provider or Process handoff fails, keep the customer record accepted, inspect the deferred or dead-letter evidence, then use the dedicated recovery action. Do not change a domain record through generic schema CRUD.\n\n## Operate Commerce and reversals\n\nThe Commerce contract exposes cart calculation, checkout placement, and order reversal routes. A placement proceeds through deterministic checkpoints so failure after pricing, inventory reservation, payment authorization, order creation, or fulfillment submission can be compensated by the owning domain. Replaying the same idempotency key returns existing evidence instead of duplicating the order or payment.\n\nCancellation, return, and refund are not synonyms. Cancellation governs an eligible unfulfilled order or line, Return governs the physical or logical return case, and Refund governs money movement. Axis presents these as an Order Lifecycle journey and links payment, inventory, fulfillment, workflow, and audit evidence. Operators must inspect eligibility and preview impact before confirming a destructive or financial action.\n\n## Integrate providers safely\n\nProvider adapters implement a bounded port: validate enabled state and sandbox policy, resolve credentials by reference, send only the minimum permitted payload, produce a content-free provider reference, authenticate callbacks, reject replay, and expose health and reconciliation. Local providers are deterministic test doubles. Sandbox-capable providers are implementation evidence, while production qualification requires a deployment-owned account and sign-off.\n\nFor email and SMS, verify suppression before delivery and store no rendered content in events. For payment, use provider tokens rather than card data. For carrier and helpdesk handoff, keep external identifiers as references and let Commerce or Contact retain business lifecycle authority. A provider outage must yield retryable evidence, not an untracked domain-state change.\n\n## Privacy, data, and recovery\n\nEvery export requires a purpose, an allow-listed field set, masking, a maximum record count, an audit identity, and a checksum. Batch and repair operations require preview, approval, idempotency, per-item outcomes, and resumability. Core operations may coordinate commands, but each command returns to the owning domain service.\n\nWhen an automated Process ACTION fails, open the recovery queue in the existing Process Operations workspace. Inspect the stable error code and attempt budget, then retry with the displayed expected attempt or run the registered domain compensation. A stale attempt fails with a conflict; an exhausted incident stays dead-lettered. Process records the recovery outcome but never edits Commerce, Engagement, or another domain record directly.\n\nRetention evaluates policy and legal hold before archive or anonymization. Erasure must not delete records that regulation or an active legal hold requires; instead it records the denied or deferred outcome. Dead-letter replay uses the original bounded command identity and increments attempt evidence. Operators should be able to trace the original correlation identifier from customer intake through domain state, provider attempt, workflow, visibility, and recovery.\n\n## Observe and troubleshoot\n\nUse readiness first, then domain dashboards and timelines. Important signals include placement and reversal failure counts, provider latency and callback rejection, moderation and resolution SLA, overdue queue items, dead letters, replay outcomes, export failures, and projection drift. Logs and events must carry codes and correlation identifiers without message bodies, secrets, tokens, personal contact details, or payment data.\n\nWhen a public Engagement request fails, confirm a correlation header exists and that the feature is enabled in the effective server. When an operator queue appears empty, confirm pagination controls were not interpreted as persistence filters. When Axis hides an action, inspect current status, permission, and backend metadata before assuming a frontend defect. When a provider is disabled, do not enable it merely to make a test green; use the deterministic local adapter or supply a governed sandbox configuration.\n\n## Common mistakes\n\n- Calling a foundation or local mock “production complete.”\n- Starting Commerce or Engagement without Platform and then weakening fail-closed dependencies.\n- Editing MongoDB to create demo state instead of using a governed API or import.\n- Adding a second heavy Axis page when backend metadata can express the journey cleanly.\n- Letting a cross-domain batch mutate repository records directly.\n- Logging message content, addresses, credentials, tokens, or provider callback payloads.\n- Treating deployment qualification as a substitute for functional implementation.\n\n## Verification\n\nRun the owning package tests, then `npm run acceptance:functional` in Kickoff. Verify that submission is visible to an authorized operator, all lifecycle actions increment revision, closure is visible, public projections contain only approved data, and withdrawal or reversal removes eligibility without erasing required audit evidence. Run Axis verification after metadata changes and check keyboard navigation, responsive layout, action confirmation, empty states, error recovery, and permission-denied behavior.\n\nFor provider work, run success, timeout, rejection, duplicate callback, replay, reconciliation, and disabled-configuration contracts. For operational work, prove preview, approval, partial failure, resume, idempotent replay, legal hold, masked export, and repair evidence. Qualification against real external accounts, production-scale load, disaster recovery infrastructure, and formal accessibility sign-off remains a later environment gate.\n"
        }
      ]
    },
    "active": true
  },
  "record1": {
    "code": "kickoffDocsComponentkickoffOverview",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.overview",
      "title": "Kickoff project overview",
      "route": "/docs/nodics-kickoff",
      "section": "nodics-kickoff",
      "sectionTitle": "Nodics Kickoff",
      "audience": [
        "architect",
        "developer",
        "operator"
      ],
      "summary": "Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs.",
      "headings": [
        {
          "text": "Why Kickoff exists",
          "anchor": "kickoffOverview-1-why-kickoff-exists",
          "level": 2
        },
        {
          "text": "What a new customer should learn",
          "anchor": "kickoffOverview-2-what-a-new-customer-should-learn",
          "level": 2
        },
        {
          "text": "Beginner mental model",
          "anchor": "kickoffOverview-3-beginner-mental-model",
          "level": 2
        },
        {
          "text": "What Kickoff demonstrates",
          "anchor": "kickoffOverview-4-what-kickoff-demonstrates",
          "level": 2
        },
        {
          "text": "Source map",
          "anchor": "kickoffOverview-5-source-map",
          "level": 2
        },
        {
          "text": "Runtime boundary",
          "anchor": "kickoffOverview-6-runtime-boundary",
          "level": 2
        },
        {
          "text": "First customization promise",
          "anchor": "kickoffOverview-7-first-customization-promise",
          "level": 2
        },
        {
          "text": "Beginner story",
          "anchor": "kickoffOverview-8-beginner-story",
          "level": 2
        },
        {
          "text": "Documentation boundary",
          "anchor": "kickoffOverview-9-documentation-boundary",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffOverview-10-common-mistakes",
          "level": 2
        },
        {
          "text": "How to know Kickoff is working",
          "anchor": "kickoffOverview-11-how-to-know-kickoff-is-working",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffOverview-12-verification",
          "level": 2
        },
        {
          "text": "What to read next",
          "anchor": "kickoffOverview-13-what-to-read-next",
          "level": 2
        },
        {
          "text": "Continue",
          "anchor": "kickoffOverview-14-continue",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Nodics Kickoff is the reference customer project for running Nodics locally and demonstrating how a partner or customer project consumes the framework. It is not a standard Nodics functional module such as Core, Platform, WCMS, or Cron. It is a project-owned runtime composition that shows how those modules can be assembled without copying framework source."
        },
        {
          "kind": "paragraph",
          "text": "Kickoff owns project structure, local environment wiring, project modules, sample customization points, and project documentation. Framework documentation belongs in `nodics.docs`; Axis product documentation belongs in the Platform `axis` backend module; browser renderers belong in `nodics.axis`. Kickoff documentation that becomes CMS data belongs in this repository under `data/core/source/documentation` and is generated into this repository's own content pack."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Why Kickoff exists",
          "anchor": "kickoffOverview-1-why-kickoff-exists"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff exists so a new team can feel Nodics before they design their own project. A partner should be able to clone the framework, clone the reference project, run a small set of commands, log in to Axis, and see the major backend capabilities working together."
        },
        {
          "kind": "paragraph",
          "text": "This matters because enterprise framework adoption usually fails at the first hour. If the first experience requires a developer to understand every module, every dependency, every data import, and every environment property, the framework feels heavy even when the architecture is good. Kickoff keeps the first journey small: start the runtime, import governed seed data, open Axis, read the documentation, and then make one safe customization."
        },
        {
          "kind": "paragraph",
          "text": "For a business evaluator, Kickoff demonstrates that Nodics can support a real customer project without asking the customer to fork framework code. For a developer, it shows the concrete folder shape, package dependency model, environment wiring, server start commands, and project-owned extension points. For an operator, it shows how one local project can run Platform, WCMS, and a combined Business Process & Automation runtime while preserving the same module ownership rules that production will use."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What a new customer should learn",
          "anchor": "kickoffOverview-2-what-a-new-customer-should-learn"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff should answer the questions a new customer asks before trusting a framework:"
        },
        {
          "kind": "table",
          "headers": [
            "Question",
            "Kickoff answer"
          ],
          "rows": [
            [
              "Can I run it locally without designing my full product first?",
              "Yes. Kickoff provides ready local Platform, WCMS, Process/Cron, and Axis wiring."
            ],
            [
              "Do I have to edit framework source to customize?",
              "No. Customer modules and server/environment configuration load after framework modules."
            ],
            [
              "Can documentation and content be imported like real governed data?",
              "Yes. Kickoff ships a project-owned documentation content pack."
            ],
            [
              "Can optional modules be added later?",
              "Yes. Cron demonstrates observed optional runtime capability and registry lifecycle."
            ],
            [
              "Can my real project use a different folder layout?",
              "Yes. `NODICS_FRAMEWORK_ROOT` points Kickoff to the framework checkout."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "This makes Kickoff more than a sample app. It is the adoption proof for the whole framework."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Beginner mental model",
          "anchor": "kickoffOverview-3-beginner-mental-model"
        },
        {
          "kind": "paragraph",
          "text": "Think of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample production line, and `nodics.axis` as the control room screen. The factory equipment provides standard capabilities such as Core, Platform, WCMS, Media, Cron, and Process. The sample production line decides which equipment to connect for a local demonstration. The control room screen connects to the running backend and shows only the capabilities that the backend says are available and authorized."
        },
        {
          "kind": "paragraph",
          "text": "Kickoff is not the product every customer must ship. It is the smallest complete example of how a customer product can be structured."
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart LR\n  Framework[\"Framework equipment<br/>nodics.ai\"] --> Project[\"Reference production line<br/>nodics.kickoff\"]\n  Project --> Servers[\"Local runtime servers\"]\n  Servers --> Platform[\"Platform: login and BackOffice\"]\n  Servers --> WCMS[\"WCMS: content and docs\"]\n  Servers --> Automation[\"Process server: workflows and scheduled capability\"]\n  Axis[\"Control room<br/>nodics.axis\"] --> Platform\n  Axis --> WCMS\n  Axis --> Automation"
        },
        {
          "kind": "paragraph",
          "text": "The metaphor is useful because it prevents a common mistake. You do not move factory equipment into the control room, and you do not hardcode control-room screens into the production line. Each part has a job."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What Kickoff demonstrates",
          "anchor": "kickoffOverview-4-what-kickoff-demonstrates"
        },
        {
          "kind": "unordered-list",
          "items": [
            "how a customer project depends on Nodics framework packages;",
            "how environment and server modules load after standard functional modules;",
            "how Platform, WCMS, and Process/Cron can run as separate ownership domains while sharing a local automation server;",
            "how project modules can customize runtime behavior without renaming the standard functional module identity;",
            "how customer-owned documentation can appear in Axis beside Framework, Swaggers, and Nodics Axis."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Source map",
          "anchor": "kickoffOverview-5-source-map"
        },
        {
          "kind": "paragraph",
          "text": "The important Kickoff locations are:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "`package.json` describes the project package and local scripts;",
            "`.env` describes developer-specific framework checkout location and local overrides;",
            "`src/sync-framework-dependencies.js` prepares local framework package links;",
            "`src/start-platform-server.js`, `src/start-wcms-server.js`, and `src/start-process-server.js` start the core local runtime servers;",
            "`config/` contains project-level defaults;",
            "`envs/kickoffLocal/` contains local environment and server composition;",
            "`modules/` contains project-owned modules and customization examples;",
            "`data/core/source/documentation/` contains authored Kickoff documentation;",
            "`data/core/data/documentation/` and the documentation section in `data/manifest.json` are generated content-pack outputs."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Authored documentation is the source. Generated records are the importable CMS projection. Do not hand-edit generated records to fix documentation."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Runtime boundary",
          "anchor": "kickoffOverview-6-runtime-boundary"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff is loaded after framework modules. That means it can contribute configuration, project modules, and project-owned documentation, but it must not move framework behavior into the customer repository. A customer extension such as `kickoff.platform` may customize Platform implementation while the business-facing functional identity remains `nodics.platform`."
        },
        {
          "kind": "paragraph",
          "text": "Runtime composition and code dependency are related but different. Package dependencies make framework modules available to the project. Server configuration decides which modules are loaded, in which order, for a specific runtime process. Service override behavior follows module loading and indexes, not simply the order in `package.json`."
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.core\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.cron\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsServer, processServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]"
        },
        {
          "kind": "paragraph",
          "text": "This diagram is intentionally simple. Kickoff does not own the framework modules and Axis does not own backend data. Kickoff composes the backend runtime, and Axis renders whatever Platform/WCMS say is active, authorized, and available."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "First customization promise",
          "anchor": "kickoffOverview-7-first-customization-promise"
        },
        {
          "kind": "paragraph",
          "text": "A beginner should be able to make a first safe customization without fear. Good first customizations are intentionally small:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "change a local property in the correct environment or server file;",
            "add or update a Kickoff documentation page;",
            "add a project-only service in a Kickoff module;",
            "add project sample data that belongs to the customer project;",
            "change WCMS-managed content through Axis after import."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Bad first customizations are also easy to name:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "editing `nodics.core` because a project-specific rule is needed;",
            "putting CMS import data into `nodics.axis`;",
            "changing generated files without changing their source;",
            "changing a standard functional module identity because a project customized implementation;",
            "hiding a status, error code, permission, or lifecycle state in an unrelated property file."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Kickoff exists to teach the safe path first."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Beginner story",
          "anchor": "kickoffOverview-8-beginner-story"
        },
        {
          "kind": "paragraph",
          "text": "A new developer can think of Kickoff as a training project:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "It shows where a customer project keeps project modules.",
            "It shows where local environment/server configuration lives.",
            "It shows how to point at a framework checkout that may live anywhere on the machine.",
            "It starts Platform, WCMS, and the composed Process/Cron automation runtime without asking the developer to create a production topology first.",
            "It ships project-owned documentation so Axis can show framework docs, Axis docs, and customer-project docs side by side."
          ]
        },
        {
          "kind": "paragraph",
          "text": "After the developer understands this reference shape, they can create a real customer project with the same rules but different business modules, branding, data, environments, and deployment choices."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Documentation boundary",
          "anchor": "kickoffOverview-9-documentation-boundary"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff docs are imported through WCMS like any other governed CMS content pack. Axis renders the resolved CMS page and does not own the documentation records. The BackOffice registry exposes the documentation source so the Axis Documentation dashboard can discover it."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffOverview-10-common-mistakes"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Do not put framework documentation in Kickoff unless the page is explaining how Kickoff consumes the framework.",
            "Do not copy `nodics.core`, `nodics.platform`, `nodics.wcms`, or `nodics.cron` source into this repository.",
            "Do not move Axis renderers or browser code into Kickoff.",
            "Do not assume a customer project will always sit beside `nodics.ai`; use the framework-root configuration.",
            "Do not change generated content-pack files without regenerating from source.",
            "Do not rename functional capabilities when a customer module only customizes their implementation."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "How to know Kickoff is working",
          "anchor": "kickoffOverview-11-how-to-know-kickoff-is-working"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff is healthy when Platform starts, WCMS starts, the module registry shows mandatory functional modules as active, optional modules can be registered through Axis, documentation content packs can be imported or updated through BackOffice/WCMS, and Axis can render Framework, Swaggers, Nodics Axis, and Nodics Kickoff documentation from backend-owned sources."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification",
          "anchor": "kickoffOverview-12-verification"
        },
        {
          "kind": "paragraph",
          "text": "Verify Kickoff as a reference customer project by proving that it can run the framework without becoming framework source. The local proof is to configure the framework root, install dependencies, start Platform, WCMS, and Process when needed, start Axis, log in, import required data releases, and open the Kickoff documentation product. The project should contribute its own docs and sample behavior while framework docs still come from `nodics.docs` and Axis product docs still come from the Platform Axis backend module."
        },
        {
          "kind": "paragraph",
          "text": "For repository verification, run the Kickoff documentation contract test, runtime prepare tests, and local acceptance script when project behavior, environment/server configuration, documentation packs, or generated data change. If a future customer copies the reference project, the docs should teach them where to replace the project name and where not to create framework-level assumptions."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What to read next",
          "anchor": "kickoffOverview-13-what-to-read-next"
        },
        {
          "kind": "paragraph",
          "text": "Read Kickoff in this order:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "**Local runtime topology** to understand which servers start and why.",
            "**Local acceptance checklist** to prove the environment from a fresh local database.",
            "**Customer customization guide** to learn how to change behavior without damaging framework ownership.",
            "Framework documentation for Core, Platform, WCMS, Cron, imports, and DevOps once the local system is running."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Continue",
          "anchor": "kickoffOverview-14-continue"
        },
        {
          "kind": "unordered-list",
          "items": [
            "[Local runtime topology](local-runtime.md)",
            "[Customer customization guide](customization-guide.md)"
          ]
        }
      ],
      "searchText": "Kickoff project overview Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs. # Kickoff Project Overview\n\nNodics Kickoff is the reference customer project for running Nodics locally and\ndemonstrating how a partner or customer project consumes the framework. It is\nnot a standard Nodics functional module such as Core, Platform, WCMS, or Cron.\nIt is a project-owned runtime composition that shows how those modules can be\nassembled without copying framework source.\n\nKickoff owns project structure, local environment wiring, project modules,\nsample customization points, and project documentation. Framework\ndocumentation belongs in `nodics.docs`; Axis product documentation belongs in\nthe Platform `axis` backend module; browser renderers belong in `nodics.axis`.\nKickoff documentation that becomes CMS data belongs in this repository under\n`data/core/source/documentation` and is generated into this repository's own\ncontent pack.\n\n## Why Kickoff exists\n\nKickoff exists so a new team can feel Nodics before they design their own\nproject. A partner should be able to clone the framework, clone the reference\nproject, run a small set of commands, log in to Axis, and see the major backend\ncapabilities working together.\n\nThis matters because enterprise framework adoption usually fails at the first\nhour. If the first experience requires a developer to understand every module,\nevery dependency, every data import, and every environment property, the\nframework feels heavy even when the architecture is good. Kickoff keeps the\nfirst journey small: start the runtime, import governed seed data, open Axis,\nread the documentation, and then make one safe customization.\n\nFor a business evaluator, Kickoff demonstrates that Nodics can support a real\ncustomer project without asking the customer to fork framework code. For a\ndeveloper, it shows the concrete folder shape, package dependency model,\nenvironment wiring, server start commands, and project-owned extension points.\nFor an operator, it shows how one local project can run Platform, WCMS, and a\ncombined Business Process & Automation runtime while preserving the same module\nownership rules that production will use.\n\n## What a new customer should learn\n\nKickoff should answer the questions a new customer asks before trusting a\nframework:\n\n| Question | Kickoff answer |\n| --- | --- |\n| Can I run it locally without designing my full product first? | Yes. Kickoff provides ready local Platform, WCMS, Process/Cron, and Axis wiring. |\n| Do I have to edit framework source to customize? | No. Customer modules and server/environment configuration load after framework modules. |\n| Can documentation and content be imported like real governed data? | Yes. Kickoff ships a project-owned documentation content pack. |\n| Can optional modules be added later? | Yes. Cron demonstrates observed optional runtime capability and registry lifecycle. |\n| Can my real project use a different folder layout? | Yes. `NODICS_FRAMEWORK_ROOT` points Kickoff to the framework checkout. |\n\nThis makes Kickoff more than a sample app. It is the adoption proof for the\nwhole framework.\n\n## Beginner mental model\n\nThink of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample\nproduction line, and `nodics.axis` as the control room screen. The factory\nequipment provides standard capabilities such as Core, Platform, WCMS, Media,\nCron, and Process. The sample production line decides which equipment to\nconnect for a local demonstration. The control room screen connects to the\nrunning backend and shows only the capabilities that the backend says are\navailable and authorized.\n\nKickoff is not the product every customer must ship. It is the smallest\ncomplete example of how a customer product can be structured.\n\n```mermaid\nflowchart LR\n  Framework[\"Framework equipment<br/>nodics.ai\"] --> Project[\"Reference production line<br/>nodics.kickoff\"]\n  Project --> Servers[\"Local runtime servers\"]\n  Servers --> Platform[\"Platform: login and BackOffice\"]\n  Servers --> WCMS[\"WCMS: content and docs\"]\n  Servers --> Automation[\"Process server: workflows and scheduled capability\"]\n  Axis[\"Control room<br/>nodics.axis\"] --> Platform\n  Axis --> WCMS\n  Axis --> Automation\n```\n\nThe metaphor is useful because it prevents a common mistake. You do not move\nfactory equipment into the control room, and you do not hardcode control-room\nscreens into the production line. Each part has a job.\n\n## What Kickoff demonstrates\n\n- how a customer project depends on Nodics framework packages;\n- how environment and server modules load after standard functional modules;\n- how Platform, WCMS, and Process/Cron can run as separate ownership domains\n  while sharing a local automation server;\n- how project modules can customize runtime behavior without renaming the\n  standard functional module identity;\n- how customer-owned documentation can appear in Axis beside Framework,\n  Swaggers, and Nodics Axis.\n\n## Source map\n\nThe important Kickoff locations are:\n\n- `package.json` describes the project package and local scripts;\n- `.env` describes developer-specific framework checkout location and local\n  overrides;\n- `src/sync-framework-dependencies.js` prepares local framework package links;\n- `src/start-platform-server.js`, `src/start-wcms-server.js`, and\n  `src/start-process-server.js` start the core local runtime servers;\n- `config/` contains project-level defaults;\n- `envs/kickoffLocal/` contains local environment and server composition;\n- `modules/` contains project-owned modules and customization examples;\n- `data/core/source/documentation/` contains authored Kickoff documentation;\n- `data/core/data/documentation/` and the documentation section in `data/manifest.json` are\n  generated content-pack outputs.\n\nAuthored documentation is the source. Generated records are the importable CMS\nprojection. Do not hand-edit generated records to fix documentation.\n\n## Runtime boundary\n\nKickoff is loaded after framework modules. That means it can contribute\nconfiguration, project modules, and project-owned documentation, but it must not\nmove framework behavior into the customer repository. A customer extension such\nas `kickoff.platform` may customize Platform implementation while the\nbusiness-facing functional identity remains `nodics.platform`.\n\nRuntime composition and code dependency are related but different. Package\ndependencies make framework modules available to the project. Server\nconfiguration decides which modules are loaded, in which order, for a specific\nruntime process. Service override behavior follows module loading and indexes,\nnot simply the order in `package.json`.\n\n```mermaid\nflowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.core\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.cron\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsServer, processServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]\n```\n\nThis diagram is intentionally simple. Kickoff does not own the framework\nmodules and Axis does not own backend data. Kickoff composes the backend\nruntime, and Axis renders whatever Platform/WCMS say is active, authorized,\nand available.\n\n## First customization promise\n\nA beginner should be able to make a first safe customization without fear.\nGood first customizations are intentionally small:\n\n- change a local property in the correct environment or server file;\n- add or update a Kickoff documentation page;\n- add a project-only service in a Kickoff module;\n- add project sample data that belongs to the customer project;\n- change WCMS-managed content through Axis after import.\n\nBad first customizations are also easy to name:\n\n- editing `nodics.core` because a project-specific rule is needed;\n- putting CMS import data into `nodics.axis`;\n- changing generated files without changing their source;\n- changing a standard functional module identity because a project customized\n  implementation;\n- hiding a status, error code, permission, or lifecycle state in an unrelated\n  property file.\n\nKickoff exists to teach the safe path first.\n\n## Beginner story\n\nA new developer can think of Kickoff as a training project:\n\n1. It shows where a customer project keeps project modules.\n2. It shows where local environment/server configuration lives.\n3. It shows how to point at a framework checkout that may live anywhere on the\n   machine.\n4. It starts Platform, WCMS, and the composed Process/Cron automation runtime\n   without asking the developer to create a production topology first.\n5. It ships project-owned documentation so Axis can show framework docs,\n   Axis docs, and customer-project docs side by side.\n\nAfter the developer understands this reference shape, they can create a real\ncustomer project with the same rules but different business modules, branding,\ndata, environments, and deployment choices.\n\n## Documentation boundary\n\nKickoff docs are imported through WCMS like any other governed CMS content\npack. Axis renders the resolved CMS page and does not own the documentation\nrecords. The BackOffice registry exposes the documentation source so the Axis\nDocumentation dashboard can discover it.\n\n## Common mistakes\n\n- Do not put framework documentation in Kickoff unless the page is explaining\n  how Kickoff consumes the framework.\n- Do not copy `nodics.core`, `nodics.platform`, `nodics.wcms`, or `nodics.cron`\n  source into this repository.\n- Do not move Axis renderers or browser code into Kickoff.\n- Do not assume a customer project will always sit beside `nodics.ai`; use the\n  framework-root configuration.\n- Do not change generated content-pack files without regenerating from source.\n- Do not rename functional capabilities when a customer module only customizes\n  their implementation.\n\n## How to know Kickoff is working\n\nKickoff is healthy when Platform starts, WCMS starts, the module registry shows\nmandatory functional modules as active, optional modules can be registered\nthrough Axis, documentation content packs can be imported or updated through\nBackOffice/WCMS, and Axis can render Framework, Swaggers, Nodics Axis, and\nNodics Kickoff documentation from backend-owned sources.\n\n## Verification\n\nVerify Kickoff as a reference customer project by proving that it can run the\nframework without becoming framework source. The local proof is to configure\nthe framework root, install dependencies, start Platform, WCMS, and Process\nwhen needed, start Axis, log in, import required data releases, and open the\nKickoff documentation product. The project should contribute its own docs and\nsample behavior while framework docs still come from `nodics.docs` and Axis\nproduct docs still come from the Platform Axis backend module.\n\nFor repository verification, run the Kickoff documentation contract test,\nruntime prepare tests, and local acceptance script when project behavior,\nenvironment/server configuration, documentation packs, or generated data\nchange. If a future customer copies the reference project, the docs should\nteach them where to replace the project name and where not to create\nframework-level assumptions.\n\n## What to read next\n\nRead Kickoff in this order:\n\n1. **Local runtime topology** to understand which servers start and why.\n2. **Local acceptance checklist** to prove the environment from a fresh local\n   database.\n3. **Customer customization guide** to learn how to change behavior without\n   damaging framework ownership.\n4. Framework documentation for Core, Platform, WCMS, Cron, imports, and DevOps\n   once the local system is running.\n\n## Continue\n\n- [Local runtime topology](local-runtime.md)\n- [Customer customization guide](customization-guide.md)\n",
      "previous": null,
      "next": {
        "title": "Local runtime topology",
        "route": "/docs/nodics-kickoff/kickoff-local-runtime"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "nodics.kickoff",
        "path": "data/core/source/documentation/pages/project-overview.md",
        "wordCount": 1633,
        "checksum": "2bc827e4ff59b489b42a2f25135067038a672b76a233682a6cb457ad4456ccb5"
      }
    },
    "active": true
  },
  "record2": {
    "code": "kickoffDocsComponentkickoffLocalRuntime",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.local-runtime",
      "title": "Local runtime topology",
      "route": "/docs/nodics-kickoff/kickoff-local-runtime",
      "section": "nodics-kickoff",
      "sectionTitle": "Nodics Kickoff",
      "audience": [
        "architect",
        "developer",
        "operator"
      ],
      "summary": "Start and reason about the local Platform, WCMS, and Cron servers that make the reference project usable.",
      "headings": [
        {
          "text": "What this is",
          "anchor": "kickoffLocalRuntime-1-what-this-is",
          "level": 2
        },
        {
          "text": "Servers",
          "anchor": "kickoffLocalRuntime-2-servers",
          "level": 2
        },
        {
          "text": "Start locally",
          "anchor": "kickoffLocalRuntime-3-start-locally",
          "level": 2
        },
        {
          "text": "Before starting",
          "anchor": "kickoffLocalRuntime-4-before-starting",
          "level": 2
        },
        {
          "text": "Start sequence",
          "anchor": "kickoffLocalRuntime-5-start-sequence",
          "level": 2
        },
        {
          "text": "Login and first checks",
          "anchor": "kickoffLocalRuntime-6-login-and-first-checks",
          "level": 2
        },
        {
          "text": "Documentation import",
          "anchor": "kickoffLocalRuntime-7-documentation-import",
          "level": 2
        },
        {
          "text": "Troubleshooting",
          "anchor": "kickoffLocalRuntime-8-troubleshooting",
          "level": 2
        },
        {
          "text": "Production note",
          "anchor": "kickoffLocalRuntime-9-production-note",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffLocalRuntime-10-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffLocalRuntime-11-verification",
          "level": 2
        },
        {
          "text": "Continue",
          "anchor": "kickoffLocalRuntime-12-continue",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Kickoff provides a local reference topology so a developer can start Nodics and see the major runtime surfaces without creating a new customer project first. The local environment is `kickoffLocal`."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What this is",
          "anchor": "kickoffLocalRuntime-1-what-this-is"
        },
        {
          "kind": "paragraph",
          "text": "The local runtime topology is the smallest practical Nodics deployment on a developer machine. It runs the framework as real backend servers, not as mocked screens. That is important because Axis, BackOffice, module registration, content-pack import, API contracts, authentication, and WCMS routing all depend on backend authority."
        },
        {
          "kind": "paragraph",
          "text": "The goal is not to teach every production option on day one. The goal is to give a beginner a reliable local loop: configure framework location, install dependencies, start servers, log in, import/update data, and observe the runtime from Axis."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Servers",
          "anchor": "kickoffLocalRuntime-2-servers"
        },
        {
          "kind": "paragraph",
          "text": "The current local topology uses separate runtime servers:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "`platformServer` starts the Platform runtime. It loads Core, Platform, Profile, BackOffice, the Platform `axis` backend module, and Kickoff project modules.",
            "`wcmsServer` starts the WCMS runtime. It loads Core, WCMS, CMS, Media, and Kickoff project modules. WCMS owns CMS sites, catalogs, pages, components, routes, and documentation content-pack import.",
            "`processServer` starts the combined Business Process & Automation runtime. It loads Core, Cron, Process, cron jobs, workflow modules, and Kickoff project modules. Process owns process/workflow definitions; Cron still owns job definitions, triggers, scheduler state, and execution lifecycle."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Kickoff intentionally has no standalone Cron server. Scheduled automation is available only through `processServer`, preventing accidental duplicate scheduler processes while Cron retains ownership of its job lifecycle."
        },
        {
          "kind": "paragraph",
          "text": "Axis is a separate frontend application. It connects to Platform for employee authentication and BackOffice bootstrap, then uses the registered module contracts to reach the authorized backend surfaces."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start locally",
          "anchor": "kickoffLocalRuntime-3-start-locally"
        },
        {
          "kind": "paragraph",
          "text": "Use separate terminals from the Kickoff repository:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run start:platform\nnpm run start:wcms\nnpm run start:process"
        },
        {
          "kind": "paragraph",
          "text": "Axis normally runs from the `nodics.axis` repository:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run dev"
        },
        {
          "kind": "paragraph",
          "text": "The default local ports are:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Axis: `http://localhost:3100`",
            "Platform: `http://localhost:4300`",
            "WCMS: `http://localhost:4310`",
            "Process and Automation: `http://localhost:4330`"
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Before starting",
          "anchor": "kickoffLocalRuntime-4-before-starting"
        },
        {
          "kind": "paragraph",
          "text": "From `nodics.kickoff`, copy and review local environment configuration:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "cp .env.example .env"
        },
        {
          "kind": "paragraph",
          "text": "Set the framework checkout location:"
        },
        {
          "kind": "code",
          "language": "dotenv",
          "text": "NODICS_FRAMEWORK_ROOT=../nodics.ai"
        },
        {
          "kind": "paragraph",
          "text": "The path may be absolute or relative to the Kickoff project root. This avoids a hard dependency on a fixed workspace layout. One developer may keep framework code beside Kickoff; another may keep it in a different projects directory."
        },
        {
          "kind": "paragraph",
          "text": "Then prepare local file dependencies:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run configure:framework\nnpm install"
        },
        {
          "kind": "paragraph",
          "text": "`configure:framework` updates the project-local dependency links so npm can install framework packages from the configured checkout. It does not make Kickoff the owner of those modules."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start sequence",
          "anchor": "kickoffLocalRuntime-5-start-sequence"
        },
        {
          "kind": "paragraph",
          "text": "Use separate terminals so logs stay readable:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Start Platform first. It owns Profile login, BackOffice bootstrap, module registry, runtime catalogue projection, and OpenAPI contract discovery.",
            "Start WCMS second. It owns documentation sites, catalogs, pages, components, routes, media metadata, and content delivery.",
            "Start Process and Automation when process/workflow or scheduled behavior is needed. It proves `nodics.process` and `nodics.cron` can share one runtime environment while keeping separate functional ownership.",
            "Start Axis after backend servers are reachable. Axis reads its public configuration, connects to Platform, authenticates the employee, and discovers registered module endpoints from BackOffice."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Login and first checks",
          "anchor": "kickoffLocalRuntime-6-login-and-first-checks"
        },
        {
          "kind": "paragraph",
          "text": "Open Axis at `http://localhost:3100`. For the local reference data, use:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "Enterprise: default\nLogin ID: admin\nPassword: adminPassword"
        },
        {
          "kind": "paragraph",
          "text": "After login:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "open the System and Integrations area and check the module registry;",
            "confirm Core, Platform, and WCMS are active and not treated as optional;",
            "if Process and Automation is running, confirm Process and Cron appear from the composed runtime and Cron can move through the optional lifecycle;",
            "open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics Kickoff are shown as separate documentation products;",
            "import or update documentation packs only through the authorized Axis action."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Documentation import",
          "anchor": "kickoffLocalRuntime-7-documentation-import"
        },
        {
          "kind": "paragraph",
          "text": "Project documentation is generated into a Kickoff content pack and imported through WCMS. The pack code is `kickoffDocumentation`; the CMS Site is `kickoffDocumentationSite`; the default route is `/docs/nodics-kickoff`."
        },
        {
          "kind": "paragraph",
          "text": "If the documentation page is unavailable in Axis, check that WCMS is running, the content pack is generated, and the latest pack version has been imported. The content-pack service rejects changed content with the same immutable version, so update the catalogue version whenever generated hashes change."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Troubleshooting",
          "anchor": "kickoffLocalRuntime-8-troubleshooting"
        },
        {
          "kind": "paragraph",
          "text": "If Axis shows a BackOffice registry recovery page, Platform is not reachable, the Platform port is wrong, or Axis public configuration points at the wrong base URL. If Axis logs in but documentation routes show CMS recovery, WCMS may not be running, the documentation source may not be registered, or the content pack may not be imported. If an optional module appears only after refresh, check the module registry API response after each lifecycle operation before assuming the frontend state is wrong."
        },
        {
          "kind": "paragraph",
          "text": "If npm cannot install framework packages, check `NODICS_FRAMEWORK_ROOT`, rerun `npm run configure:framework`, and confirm the configured directory contains `nodics.core`, `nodics.platform`, `nodics.wcms`, and any optional framework modules used by the local server."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Production note",
          "anchor": "kickoffLocalRuntime-9-production-note"
        },
        {
          "kind": "paragraph",
          "text": "The local topology teaches ownership, not final infrastructure. Production may run modules in separate processes, hosts, containers, or release units. That does not change documentation ownership, module identity, API authority, or the rule that Axis discovers runtime capability from BackOffice instead of keeping its own endpoint registry."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffLocalRuntime-10-common-mistakes"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Starting only the frontend and assuming backend discovery should work.",
            "Putting long inherited property blocks into a server config when the project only needs a small override.",
            "Assuming every framework module in the checkout is active for every server. The configured runtime graph decides what loads.",
            "Treating Cron as owned by Process just because the reference workspace can run both in the same `processServer`.",
            "Using local ports, database names, or project names as permanent framework assumptions.",
            "Forgetting that restart should preserve persisted registry and imported content state."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification",
          "anchor": "kickoffLocalRuntime-11-verification"
        },
        {
          "kind": "paragraph",
          "text": "Verify local runtime topology by starting each server from the customer project, not from framework internals. Platform should expose login, BackOffice bootstrap, registry, and API discovery. WCMS should expose content, documentation, media, and import/export delivery. Process and Automation should report Process and optional Cron runtime availability from the composed server. Axis should connect through Platform and WCMS instead of local hardcoded module state."
        },
        {
          "kind": "paragraph",
          "text": "For a beginner-friendly proof, open Axis after the servers start and inspect Dashboard, System and Integrations, Module Registry, Imports and Exports, Content and Experience, Media, Business Process & Automation, and Documentation. The UI should explain the same topology that the server configuration declares."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Continue",
          "anchor": "kickoffLocalRuntime-12-continue"
        },
        {
          "kind": "unordered-list",
          "items": [
            "[Kickoff project overview](project-overview.md)",
            "[Customer customization guide](customization-guide.md)"
          ]
        }
      ],
      "searchText": "Local runtime topology Start and reason about the local Platform, WCMS, and Cron servers that make the reference project usable. # Local Runtime Topology\n\nKickoff provides a local reference topology so a developer can start Nodics and\nsee the major runtime surfaces without creating a new customer project first.\nThe local environment is `kickoffLocal`.\n\n## What this is\n\nThe local runtime topology is the smallest practical Nodics deployment on a\ndeveloper machine. It runs the framework as real backend servers, not as mocked\nscreens. That is important because Axis, BackOffice, module registration,\ncontent-pack import, API contracts, authentication, and WCMS routing all depend\non backend authority.\n\nThe goal is not to teach every production option on day one. The goal is to\ngive a beginner a reliable local loop: configure framework location, install\ndependencies, start servers, log in, import/update data, and observe the\nruntime from Axis.\n\n## Servers\n\nThe current local topology uses separate runtime servers:\n\n- `platformServer` starts the Platform runtime. It loads Core, Platform,\n  Profile, BackOffice, the Platform `axis` backend module, and Kickoff project\n  modules.\n- `wcmsServer` starts the WCMS runtime. It loads Core, WCMS, CMS, Media, and\n  Kickoff project modules. WCMS owns CMS sites, catalogs, pages, components,\n  routes, and documentation content-pack import.\n- `processServer` starts the combined Business Process & Automation runtime.\n  It loads Core, Cron, Process, cron jobs, workflow modules, and Kickoff\n  project modules. Process owns process/workflow definitions; Cron still owns\n  job definitions, triggers, scheduler state, and execution lifecycle.\n\nKickoff intentionally has no standalone Cron server. Scheduled automation is\navailable only through `processServer`, preventing accidental duplicate\nscheduler processes while Cron retains ownership of its job lifecycle.\n\nAxis is a separate frontend application. It connects to Platform for employee\nauthentication and BackOffice bootstrap, then uses the registered module\ncontracts to reach the authorized backend surfaces.\n\n## Start locally\n\nUse separate terminals from the Kickoff repository:\n\n```bash\nnpm run start:platform\nnpm run start:wcms\nnpm run start:process\n```\n\nAxis normally runs from the `nodics.axis` repository:\n\n```bash\nnpm run dev\n```\n\nThe default local ports are:\n\n- Axis: `http://localhost:3100`\n- Platform: `http://localhost:4300`\n- WCMS: `http://localhost:4310`\n- Process and Automation: `http://localhost:4330`\n\n## Before starting\n\nFrom `nodics.kickoff`, copy and review local environment configuration:\n\n```bash\ncp .env.example .env\n```\n\nSet the framework checkout location:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nThe path may be absolute or relative to the Kickoff project root. This avoids a\nhard dependency on a fixed workspace layout. One developer may keep framework\ncode beside Kickoff; another may keep it in a different projects directory.\n\nThen prepare local file dependencies:\n\n```bash\nnpm run configure:framework\nnpm install\n```\n\n`configure:framework` updates the project-local dependency links so npm can\ninstall framework packages from the configured checkout. It does not make\nKickoff the owner of those modules.\n\n## Start sequence\n\nUse separate terminals so logs stay readable:\n\n1. Start Platform first. It owns Profile login, BackOffice bootstrap, module\n   registry, runtime catalogue projection, and OpenAPI contract discovery.\n2. Start WCMS second. It owns documentation sites, catalogs, pages, components,\n   routes, media metadata, and content delivery.\n3. Start Process and Automation when process/workflow or scheduled behavior is\n   needed. It proves `nodics.process` and `nodics.cron` can share one runtime\n   environment while keeping separate functional ownership.\n4. Start Axis after backend servers are reachable. Axis reads its public\n   configuration, connects to Platform, authenticates the employee, and\n   discovers registered module endpoints from BackOffice.\n\n## Login and first checks\n\nOpen Axis at `http://localhost:3100`. For the local reference data, use:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nAfter login:\n\n- open the System and Integrations area and check the module registry;\n- confirm Core, Platform, and WCMS are active and not treated as optional;\n- if Process and Automation is running, confirm Process and Cron appear from\n  the composed runtime and Cron can move through the optional lifecycle;\n- open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics\n  Kickoff are shown as separate documentation products;\n- import or update documentation packs only through the authorized Axis action.\n\n## Documentation import\n\nProject documentation is generated into a Kickoff content pack and imported\nthrough WCMS. The pack code is `kickoffDocumentation`; the CMS Site is\n`kickoffDocumentationSite`; the default route is `/docs/nodics-kickoff`.\n\nIf the documentation page is unavailable in Axis, check that WCMS is running,\nthe content pack is generated, and the latest pack version has been imported.\nThe content-pack service rejects changed content with the same immutable\nversion, so update the catalogue version whenever generated hashes change.\n\n## Troubleshooting\n\nIf Axis shows a BackOffice registry recovery page, Platform is not reachable,\nthe Platform port is wrong, or Axis public configuration points at the wrong\nbase URL. If Axis logs in but documentation routes show CMS recovery, WCMS may\nnot be running, the documentation source may not be registered, or the content\npack may not be imported. If an optional module appears only after refresh,\ncheck the module registry API response after each lifecycle operation before\nassuming the frontend state is wrong.\n\nIf npm cannot install framework packages, check `NODICS_FRAMEWORK_ROOT`, rerun\n`npm run configure:framework`, and confirm the configured directory contains\n`nodics.core`, `nodics.platform`, `nodics.wcms`, and any optional framework\nmodules used by the local server.\n\n## Production note\n\nThe local topology teaches ownership, not final infrastructure. Production may\nrun modules in separate processes, hosts, containers, or release units. That\ndoes not change documentation ownership, module identity, API authority, or the\nrule that Axis discovers runtime capability from BackOffice instead of keeping\nits own endpoint registry.\n\n## Common mistakes\n\n- Starting only the frontend and assuming backend discovery should work.\n- Putting long inherited property blocks into a server config when the project\n  only needs a small override.\n- Assuming every framework module in the checkout is active for every server.\n  The configured runtime graph decides what loads.\n- Treating Cron as owned by Process just because the reference workspace can\n  run both in the same `processServer`.\n- Using local ports, database names, or project names as permanent framework\n  assumptions.\n- Forgetting that restart should preserve persisted registry and imported\n  content state.\n\n## Verification\n\nVerify local runtime topology by starting each server from the customer\nproject, not from framework internals. Platform should expose login,\nBackOffice bootstrap, registry, and API discovery. WCMS should expose content,\ndocumentation, media, and import/export delivery. Process and Automation should\nreport Process and optional Cron runtime availability from the composed server.\nAxis should connect through Platform and WCMS instead of local hardcoded module\nstate.\n\nFor a beginner-friendly proof, open Axis after the servers start and inspect\nDashboard, System and Integrations, Module Registry, Imports and Exports,\nContent and Experience, Media, Business Process & Automation, and\nDocumentation. The UI should explain the same topology that the server\nconfiguration declares.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Customer customization guide](customization-guide.md)\n",
      "previous": {
        "title": "Kickoff project overview",
        "route": "/docs/nodics-kickoff"
      },
      "next": {
        "title": "Local acceptance checklist",
        "route": "/docs/nodics-kickoff/kickoff-local-acceptance"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "data/core/source/documentation/pages/local-runtime.md",
        "wordCount": 1082,
        "checksum": "4c8f014aa3c28ac19fd49e80e74d226bb13b0bad9f09f01377633a08d4a0d87c"
      }
    },
    "active": true
  },
  "record3": {
    "code": "kickoffDocsComponentkickoffLocalAcceptance",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.local-acceptance",
      "title": "Local acceptance checklist",
      "route": "/docs/nodics-kickoff/kickoff-local-acceptance",
      "section": "nodics-kickoff",
      "sectionTitle": "Nodics Kickoff",
      "audience": [
        "architect",
        "developer",
        "operator"
      ],
      "summary": "Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior.",
      "headings": [
        {
          "text": "What this checklist proves",
          "anchor": "kickoffLocalAcceptance-1-what-this-checklist-proves",
          "level": 2
        },
        {
          "text": "Repository layout used by the reference run",
          "anchor": "kickoffLocalAcceptance-2-repository-layout-used-by-the-reference-run",
          "level": 2
        },
        {
          "text": "Mandatory prerequisites",
          "anchor": "kickoffLocalAcceptance-3-mandatory-prerequisites",
          "level": 2
        },
        {
          "text": "Fresh database reset",
          "anchor": "kickoffLocalAcceptance-4-fresh-database-reset",
          "level": 2
        },
        {
          "text": "Automated acceptance path",
          "anchor": "kickoffLocalAcceptance-5-automated-acceptance-path",
          "level": 2
        },
        {
          "text": "What the automated command proves",
          "anchor": "kickoffLocalAcceptance-6-what-the-automated-command-proves",
          "level": 3
        },
        {
          "text": "Start the backend servers",
          "anchor": "kickoffLocalAcceptance-7-start-the-backend-servers",
          "level": 2
        },
        {
          "text": "Start Axis",
          "anchor": "kickoffLocalAcceptance-8-start-axis",
          "level": 2
        },
        {
          "text": "Login",
          "anchor": "kickoffLocalAcceptance-9-login",
          "level": 2
        },
        {
          "text": "Import initialization data",
          "anchor": "kickoffLocalAcceptance-10-import-initialization-data",
          "level": 2
        },
        {
          "text": "Verify module registry",
          "anchor": "kickoffLocalAcceptance-11-verify-module-registry",
          "level": 2
        },
        {
          "text": "Verify documentation",
          "anchor": "kickoffLocalAcceptance-12-verify-documentation",
          "level": 2
        },
        {
          "text": "Verify content and media",
          "anchor": "kickoffLocalAcceptance-13-verify-content-and-media",
          "level": 2
        },
        {
          "text": "Verify Page Designer authoring model",
          "anchor": "kickoffLocalAcceptance-14-verify-page-designer-authoring-model",
          "level": 3
        },
        {
          "text": "Verify Cron",
          "anchor": "kickoffLocalAcceptance-15-verify-cron",
          "level": 2
        },
        {
          "text": "Command-line smoke test",
          "anchor": "kickoffLocalAcceptance-16-command-line-smoke-test",
          "level": 2
        },
        {
          "text": "Troubleshooting quick map",
          "anchor": "kickoffLocalAcceptance-17-troubleshooting-quick-map",
          "level": 2
        },
        {
          "text": "Acceptance sign-off",
          "anchor": "kickoffLocalAcceptance-18-acceptance-sign-off",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffLocalAcceptance-19-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffLocalAcceptance-20-verification",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "paragraph",
          "text": "This checklist is the beginner-friendly path for proving a fresh Nodics local installation from zero database state. Use it when you have cloned the three working repositories, configured Kickoff, and want to confirm the backend framework, customer project, and Axis frontend are working together."
        },
        {
          "kind": "paragraph",
          "text": "The checklist is intentionally explicit. A new developer should be able to follow it without already knowing Nodics module loading, BackOffice bootstrap, WCMS content packs, or functional-module registration."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What this checklist proves",
          "anchor": "kickoffLocalAcceptance-1-what-this-checklist-proves"
        },
        {
          "kind": "paragraph",
          "text": "The acceptance run proves five things:"
        },
        {
          "kind": "table",
          "headers": [
            "Area",
            "What must be true"
          ],
          "rows": [
            [
              "Framework checkout",
              "Kickoff can resolve Core, Platform, WCMS, and Cron from the configured framework root."
            ],
            [
              "Runtime topology",
              "Platform, WCMS, and the composed Process/Cron automation runtime can start from the Kickoff local environment."
            ],
            [
              "Bootstrap data",
              "Mandatory initialization data can be imported from module-owned releases."
            ],
            [
              "Axis access",
              "Axis can connect to Platform, authenticate the local admin, and discover BackOffice bootstrap data."
            ],
            [
              "Module lifecycle",
              "Core, Platform, and WCMS are mandatory/registered; Cron is observable as an optional runtime module."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "If any one of these fails, do not continue adding new functional modules. Fix the contract break first, otherwise every later module will inherit a shaky local foundation."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Repository layout used by the reference run",
          "anchor": "kickoffLocalAcceptance-2-repository-layout-used-by-the-reference-run"
        },
        {
          "kind": "paragraph",
          "text": "The local reference setup normally looks like this:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "nodicsRoot/\n  nodics.ai/\n  nodics.axis/\n  nodics.kickoff/"
        },
        {
          "kind": "paragraph",
          "text": "This layout is only a convenience. Customer projects may live anywhere. The important contract is that `nodics.kickoff/.env` tells Kickoff where the framework checkout lives."
        },
        {
          "kind": "code",
          "language": "dotenv",
          "text": "NODICS_FRAMEWORK_ROOT=../nodics.ai"
        },
        {
          "kind": "paragraph",
          "text": "Use an absolute path if your repositories are not parallel:"
        },
        {
          "kind": "code",
          "language": "dotenv",
          "text": "NODICS_FRAMEWORK_ROOT=/Users/example/projects/framework/nodics.ai"
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Mandatory prerequisites",
          "anchor": "kickoffLocalAcceptance-3-mandatory-prerequisites"
        },
        {
          "kind": "paragraph",
          "text": "Before running the checklist, confirm these local services and tools are available:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Node.js 24 and npm.",
            "MongoDB running locally.",
            "The three repositories are cloned:"
          ]
        },
        {
          "kind": "unordered-list",
          "items": [
            "`nodics.ai`",
            "`nodics.axis`",
            "`nodics.kickoff`"
          ]
        },
        {
          "kind": "ordered-list",
          "items": [
            "`nodics.kickoff/.env` exists and points to the framework root.",
            "`nodics.axis/.env` points to the local Platform server."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Run this from `nodics.kickoff`:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "cp .env.example .env\nnpm run configure:framework\nnpm install"
        },
        {
          "kind": "paragraph",
          "text": "Run this from `nodics.axis`:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "cp .env.example .env\nnpm install"
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Fresh database reset",
          "anchor": "kickoffLocalAcceptance-4-fresh-database-reset"
        },
        {
          "kind": "paragraph",
          "text": "Use a fresh database reset only for local developer acceptance. Do not run this against a shared development, QA, pre-production, or production database."
        },
        {
          "kind": "paragraph",
          "text": "The local server configs own the exact database names. Read them before dropping anything. In the reference topology, the relevant server configs are:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "envs/kickoffLocal/platformServer/config/properties.js\nenvs/kickoffLocal/wcmsServer/config/properties.js\nenvs/kickoffLocal/processServer/config/properties.js"
        },
        {
          "kind": "paragraph",
          "text": "The reset should remove only the local Kickoff runtime databases/schemas used by those servers. It must not delete a broad MongoDB instance, user home folder, workspace folder, or unrelated project database."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Automated acceptance path",
          "anchor": "kickoffLocalAcceptance-5-automated-acceptance-path"
        },
        {
          "kind": "paragraph",
          "text": "Most maintainers should use the automated path first. It proves the same contracts as the manual checklist and reduces human mistakes during repeated bootstrap tests."
        },
        {
          "kind": "paragraph",
          "text": "Run this from `nodics.kickoff`:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run acceptance:local:fresh"
        },
        {
          "kind": "paragraph",
          "text": "This command intentionally drops only the bounded reference local databases:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "`kickoffLocal`",
            "`kickoffLocalWcms`",
            "`kickoffLocalCron`",
            "`kickoffLocalProcess`"
          ]
        },
        {
          "kind": "paragraph",
          "text": "It then starts any missing local servers, waits for Platform, WCMS, the composed Process/Cron automation runtime, and Axis to become reachable, authenticates the local admin, imports the Framework, Nodics Axis, and Nodics Kickoff documentation packs through WCMS, checks key Axis routes, verifies WCMS content counts, and runs the Axis live smoke with the documentation and Cron lifecycle gates enabled."
        },
        {
          "kind": "paragraph",
          "text": "Use the safer non-destructive form when you only want to verify the current local state:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run acceptance:local"
        },
        {
          "kind": "paragraph",
          "text": "That version does not drop databases. It checks the currently running or started local topology and imports missing documentation packs if required."
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "What the automated command proves",
          "anchor": "kickoffLocalAcceptance-6-what-the-automated-command-proves"
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart TD\n  Start[\"Developer runs npm run acceptance:local:fresh\"] --> Drop[\"Drop only Kickoff local DBs\"]\n  Drop --> Platform[\"Start or reuse Platform on 4300\"]\n  Platform --> WCMS[\"Start or reuse WCMS on 4310\"]\n  WCMS --> Process[\"Start or reuse Process/Cron on 4330\"]\n  Process --> Axis[\"Start or reuse Axis on 3100\"]\n  Axis --> Auth[\"Authenticate default/admin\"]\n  Auth --> Registry[\"Verify Core, Platform, WCMS, Cron observation\"]\n  Registry --> Docs[\"Import documentation packs through WCMS\"]\n  Docs --> Routes[\"Verify Axis routes\"]\n  Routes --> Designer[\"Verify Content Designer catalog-first route\"]\n  Designer --> Counts[\"Verify WCMS catalog/site/page/component/route counts\"]\n  Counts --> Lifecycle[\"Run Cron register, activate, deactivate, deregister\"]\n  Lifecycle --> Pass[\"Acceptance pass\"]"
        },
        {
          "kind": "paragraph",
          "text": "The command stops the servers it started after the acceptance gates complete. If you want to keep the stack running so you can inspect Axis after the run, use:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "node scripts/local-bootstrap-acceptance.mjs --drop-local-db --leave-started"
        },
        {
          "kind": "paragraph",
          "text": "The command is deliberately conservative. It does not discover and drop random MongoDB databases. It does not kill unrelated processes. It does not create another importer. It uses the existing Profile login, BackOffice registry, WCMS content-pack API, and Axis smoke test. This matters because acceptance must prove the same path a real developer or operator uses."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start the backend servers",
          "anchor": "kickoffLocalAcceptance-7-start-the-backend-servers"
        },
        {
          "kind": "paragraph",
          "text": "Open three terminals from `nodics.kickoff`."
        },
        {
          "kind": "paragraph",
          "text": "Terminal 1:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run start:platform"
        },
        {
          "kind": "paragraph",
          "text": "Terminal 2:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run start:wcms"
        },
        {
          "kind": "paragraph",
          "text": "Terminal 3:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run start:process"
        },
        {
          "kind": "paragraph",
          "text": "Expected local ports:"
        },
        {
          "kind": "table",
          "headers": [
            "Runtime",
            "Port",
            "Why it matters"
          ],
          "rows": [
            [
              "Platform",
              "4300",
              "Profile login, BackOffice bootstrap, module registry, OpenAPI discovery."
            ],
            [
              "WCMS",
              "4310",
              "CMS sites, content catalogs, page/component data, documentation packs, media metadata."
            ],
            [
              "Process and Automation",
              "4330",
              "Process/workflow APIs plus optional Cron observation and registry lifecycle testing."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "If a port is already in use, confirm whether it is an earlier Nodics server from the same checkout. Do not kill unrelated processes by guessing."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start Axis",
          "anchor": "kickoffLocalAcceptance-8-start-axis"
        },
        {
          "kind": "paragraph",
          "text": "Open another terminal from `nodics.axis`:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run dev"
        },
        {
          "kind": "paragraph",
          "text": "Axis should be available at:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3100"
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Login",
          "anchor": "kickoffLocalAcceptance-9-login"
        },
        {
          "kind": "paragraph",
          "text": "Open Axis and use the local reference credentials:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "Enterprise: default\nLogin ID: admin\nPassword: adminPassword"
        },
        {
          "kind": "paragraph",
          "text": "Successful login proves:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Axis can load public bootstrap from Platform.",
            "Profile can authenticate the local admin.",
            "Axis can retrieve authenticated BackOffice bootstrap data.",
            "Axis receives authorized navigation and runtime module projections."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Import initialization data",
          "anchor": "kickoffLocalAcceptance-10-import-initialization-data"
        },
        {
          "kind": "paragraph",
          "text": "In Axis, open the import/initialization workspace and install the available initialization releases."
        },
        {
          "kind": "paragraph",
          "text": "You should see releases owned by active modules only. The system must not ask Axis to invent import data. Axis presents the operation; the owning backend module and nImport execute the import."
        },
        {
          "kind": "paragraph",
          "text": "Expected outcome:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "mandatory Profile/bootstrap identity data is available;",
            "core framework data required by Platform and WCMS is present;",
            "documentation content packs can be imported or updated;",
            "repeated import attempts with unchanged immutable releases do not corrupt existing data."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verify module registry",
          "anchor": "kickoffLocalAcceptance-11-verify-module-registry"
        },
        {
          "kind": "paragraph",
          "text": "Open:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "System and Integrations → Module Registry"
        },
        {
          "kind": "paragraph",
          "text": "Expected state:"
        },
        {
          "kind": "table",
          "headers": [
            "Functional module",
            "Expected state",
            "Why"
          ],
          "rows": [
            [
              "`nodics.core`",
              "Registered and active",
              "Required by every runtime."
            ],
            [
              "`nodics.platform`",
              "Registered and active",
              "Required for Profile, BackOffice, and Axis bootstrap."
            ],
            [
              "`nodics.wcms`",
              "Registered and active",
              "Required for CMS, documentation, and media/content management."
            ],
            [
              "`nodics.process`",
              "Optional, observed when Process and Automation is running",
              "Proves process/workflow capability can join the lifecycle."
            ],
            [
              "`nodics.cron`",
              "Optional, observed when Process and Automation or standalone Cron is running",
              "Proves optional runtime modules can join the lifecycle."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Core, Platform, and WCMS are mandatory for this local Axis-backed acceptance topology. They should not appear as removable optional modules. Cron may be registered, activated, deactivated, and deregistered as an optional module."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verify documentation",
          "anchor": "kickoffLocalAcceptance-12-verify-documentation"
        },
        {
          "kind": "paragraph",
          "text": "Open:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "Documentation"
        },
        {
          "kind": "paragraph",
          "text": "Expected documentation products:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Framework",
            "Swaggers",
            "Nodics Axis",
            "Nodics Kickoff"
          ]
        },
        {
          "kind": "paragraph",
          "text": "The products are intentionally separated by ownership:"
        },
        {
          "kind": "table",
          "headers": [
            "Documentation product",
            "Owning repository/module"
          ],
          "rows": [
            [
              "Framework",
              "`nodics.ai/nodics.docs`"
            ],
            [
              "Nodics Axis",
              "`nodics.ai/nodics.platform/modules/axis`"
            ],
            [
              "Nodics Kickoff",
              "`nodics.kickoff`"
            ],
            [
              "Swagger/OpenAPI",
              "Platform BackOffice/OpenAPI contracts"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Axis is only the renderer. It must not own backend-importable documentation content."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verify content and media",
          "anchor": "kickoffLocalAcceptance-13-verify-content-and-media"
        },
        {
          "kind": "paragraph",
          "text": "Open these Axis routes:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "/content\n/content/designer\n/media\n/media/items\n/media/folders"
        },
        {
          "kind": "paragraph",
          "text": "Expected behavior:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "`/content` shows the content dashboard and WCMS-owned summary sections.",
            "`/content/designer` shows the governed Page Designer foundation. It should explain the catalog-first sequence and support dynamic template slots rather than assuming a fixed header/main/footer page shape.",
            "`/media` shows media management, media records, and media-by-source sections.",
            "`/media/items` and `/media/folders` open focused media workspaces instead of falling into CMS recovery.",
            "Any unavailable backend schema is reported as a backend/schema discovery issue, not as a frontend-owned data model."
          ]
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "Verify Page Designer authoring model",
          "anchor": "kickoffLocalAcceptance-14-verify-page-designer-authoring-model"
        },
        {
          "kind": "paragraph",
          "text": "Open:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "Content and Experience → Web Content Management System → Page Designer"
        },
        {
          "kind": "paragraph",
          "text": "The Designer is not expected to look exactly like the final website in a browser. It is the authoring and structure view. A beginner should understand this chain:"
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart TD\n  Catalog[\"Content Catalog\"]\n  Site[\"Site\"]\n  Template[\"Page Template\"]\n  Page[\"Page\"]\n  Slots[\"Template Slots: any number\"]\n  Sections[\"Page Sections\"]\n  Components[\"Component Instances\"]\n  Media[\"Governed Media\"]\n  Route[\"Page Route\"]\n  Nav[\"Navigation Node\"]\n\n  Catalog --> Site\n  Catalog --> Template\n  Site --> Page\n  Template --> Page\n  Page --> Slots\n  Slots --> Sections\n  Sections --> Components\n  Components --> Media\n  Page --> Route\n  Route --> Nav"
        },
        {
          "kind": "paragraph",
          "text": "This acceptance step proves only that the reference local stack can consume the WCMS-owned authoring model. The contract itself belongs to WCMS. If the Designer metadata is wrong, fix the owning WCMS contract and tests first; do not move catalog, site, template, slot, page, component, or media authority into the reference project or into the Axis frontend."
        },
        {
          "kind": "paragraph",
          "text": "Expected Designer evidence:"
        },
        {
          "kind": "table",
          "headers": [
            "Area",
            "Expected behavior"
          ],
          "rows": [
            [
              "Catalog-first sequence",
              "The UI starts from content catalog, then site, template, page, slots, sections, components, media, route, and navigation."
            ],
            [
              "Dynamic slots",
              "Slot names come from template data; the UI must not assume only three slots."
            ],
            [
              "Backend authority",
              "Save/validate actions call WCMS/CMS authoring APIs, not browser-local persistence."
            ],
            [
              "Media governance",
              "Media association points to nMedia records or sets; it never asks for a filesystem path."
            ],
            [
              "Publish readiness",
              "Designer can validate readiness, but publishing remains CMS/nPublish authority."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "If Designer loads but cannot validate or save, inspect the WCMS server first: `cmsAuthoring` API exposure must be enabled, the user must have `cms.backoffice.manage`, the selected Site must belong to the selected Content Catalog, and the selected Template must expose the slots being edited."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verify Cron",
          "anchor": "kickoffLocalAcceptance-15-verify-cron"
        },
        {
          "kind": "paragraph",
          "text": "Open:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "/cron"
        },
        {
          "kind": "paragraph",
          "text": "Expected behavior:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "If Process and Automation is running, Axis can observe both `nodics.process` and `nodics.cron` from the same runtime.",
            "If Cron is not registered, it appears as available to register.",
            "Register moves it into the registered list without requiring a page refresh.",
            "Activate changes lifecycle state without freezing buttons.",
            "Deactivate and deregister return it to the correct next state."
          ]
        },
        {
          "kind": "paragraph",
          "text": "The automated acceptance runner performs the full optional Cron lifecycle:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "available → register → registered/inactive → activate → registered/active\nregistered/active → deactivate → registered/inactive → deregister → available"
        },
        {
          "kind": "paragraph",
          "text": "Cron is optional for the project, so the final accepted state after the automated lifecycle test is **available** rather than permanently registered. That proves both the runtime observation path and the governed removal path."
        },
        {
          "kind": "paragraph",
          "text": "If an action succeeds but the UI does not update, inspect the module registry API response immediately after the action. The frontend should refresh local query state after each lifecycle operation."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Command-line smoke test",
          "anchor": "kickoffLocalAcceptance-16-command-line-smoke-test"
        },
        {
          "kind": "paragraph",
          "text": "After the servers and Axis are running, use the live smoke script from `nodics.axis`:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "AXIS_EXPECT_MODULES=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live"
        },
        {
          "kind": "paragraph",
          "text": "Expected result:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "PASS Axis route /\nPASS Axis route /content\nPASS Axis route /content/designer\nPASS Axis route /media\nPASS Axis route /media/items\nPASS Axis route /media/folders\nPASS Axis route /cron\nPASS Axis route /system-integrations\nPASS Axis route /registry\nPASS Axis route /operations/imports-exports\nPASS Axis route /docs/swaggers\nPASS BackOffice public bootstrap\nPASS authenticated login for admin\nPASS module registry reachable\nPASS required modules registered: nodics.core, nodics.platform, nodics.wcms\nPASS optional runtime modules observed: nodics.cron\nPASS documentation pack nodicsDocumentation is CURRENT\nPASS documentation pack axisDocumentation is CURRENT\nPASS documentation pack kickoffDocumentation is CURRENT\nPASS cron lifecycle register\nPASS cron lifecycle activate\nPASS cron lifecycle deactivate\nPASS cron lifecycle deregister returns module to available"
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Troubleshooting quick map",
          "anchor": "kickoffLocalAcceptance-17-troubleshooting-quick-map"
        },
        {
          "kind": "table",
          "headers": [
            "Symptom",
            "Most likely boundary"
          ],
          "rows": [
            [
              "Axis recovery says BackOffice registry unavailable",
              "Platform server is not reachable or Axis points at the wrong Platform URL."
            ],
            [
              "Login fails",
              "Profile data was not imported, credentials changed, or Platform is using a different database."
            ],
            [
              "Documentation route shows CMS recovery",
              "WCMS is down, documentation pack is not imported, or the documentation source is not registered."
            ],
            [
              "Import page says API category is disabled",
              "API exposure defaults belong in owning modules; check whether the runtime disabled the category at server level."
            ],
            [
              "Cron does not appear",
              "Process and Automation server or standalone Cron server is not running, or the runtime has not reported its functional module observation."
            ],
            [
              "Module action succeeds only after refresh",
              "Axis query invalidation or backend response envelope needs review."
            ],
            [
              "Media schema discovery unavailable",
              "WCMS/media runtime is not exposing the expected schema workbench contract."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Acceptance sign-off",
          "anchor": "kickoffLocalAcceptance-18-acceptance-sign-off"
        },
        {
          "kind": "paragraph",
          "text": "The local acceptance run is complete when:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Platform, WCMS, Process and Automation, and Axis are running.",
            "Fresh local databases were created from module-owned import data.",
            "Admin login works.",
            "Module registry shows mandatory modules and optional Cron correctly.",
            "Documentation products are visible.",
            "Content and media routes render the expected workspaces.",
            "The Page Designer route shows the catalog-first model and does not invent a fixed slot shape or frontend-owned content persistence.",
            "`npm run acceptance:local:fresh` passes, or the manual equivalent plus `AXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live` passes.",
            "No repo in the three-repo set has uncommitted acceptance changes."
          ]
        },
        {
          "kind": "paragraph",
          "text": "When all nine are true, the modularized foundation is ready for the next functional module."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffLocalAcceptance-19-common-mistakes"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Treating a running Node process as proof that the customer project is ready.",
            "Skipping content-pack import and then wondering why Axis documentation or WCMS pages are unavailable.",
            "Dropping or modifying broad databases during a local test instead of using the bounded fresh-bootstrap command intended for the reference environment.",
            "Accepting a module lifecycle flow that requires a browser refresh after register, activate, deactivate, or deregister.",
            "Ignoring an `INVALID RELEASE` message because the release still appears in the list.",
            "Verifying only Platform while forgetting WCMS, documentation, media, Process, Cron, and Axis routes."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification",
          "anchor": "kickoffLocalAcceptance-20-verification"
        },
        {
          "kind": "paragraph",
          "text": "Run the checklist twice when confidence matters: once against the currently running local database and once with the bounded fresh-bootstrap option. The expected result is repeatability. The system should rebuild from backend-owned data, import documentation and initialization releases through governed APIs, show healthy CMS record counts, expose mandatory modules, handle optional Cron lifecycle, and render Axis routes without manual database edits."
        },
        {
          "kind": "paragraph",
          "text": "For project documentation changes, regenerate the Kickoff documentation pack, run the documentation contract test, start Platform and WCMS, import or update the Kickoff docs release, and open `/docs/nodics-kickoff` in Axis. If the page only works because it was hardcoded in the frontend, the acceptance result is not valid."
        }
      ],
      "searchText": "Local acceptance checklist Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior. # Local Acceptance Checklist\n\nThis checklist is the beginner-friendly path for proving a fresh Nodics local\ninstallation from zero database state. Use it when you have cloned the three\nworking repositories, configured Kickoff, and want to confirm the backend\nframework, customer project, and Axis frontend are working together.\n\nThe checklist is intentionally explicit. A new developer should be able to\nfollow it without already knowing Nodics module loading, BackOffice bootstrap,\nWCMS content packs, or functional-module registration.\n\n## What this checklist proves\n\nThe acceptance run proves five things:\n\n| Area | What must be true |\n| --- | --- |\n| Framework checkout | Kickoff can resolve Core, Platform, WCMS, and Cron from the configured framework root. |\n| Runtime topology | Platform, WCMS, and the composed Process/Cron automation runtime can start from the Kickoff local environment. |\n| Bootstrap data | Mandatory initialization data can be imported from module-owned releases. |\n| Axis access | Axis can connect to Platform, authenticate the local admin, and discover BackOffice bootstrap data. |\n| Module lifecycle | Core, Platform, and WCMS are mandatory/registered; Cron is observable as an optional runtime module. |\n\nIf any one of these fails, do not continue adding new functional modules. Fix\nthe contract break first, otherwise every later module will inherit a shaky\nlocal foundation.\n\n## Repository layout used by the reference run\n\nThe local reference setup normally looks like this:\n\n```text\nnodicsRoot/\n  nodics.ai/\n  nodics.axis/\n  nodics.kickoff/\n```\n\nThis layout is only a convenience. Customer projects may live anywhere. The\nimportant contract is that `nodics.kickoff/.env` tells Kickoff where the\nframework checkout lives.\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nUse an absolute path if your repositories are not parallel:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=/Users/example/projects/framework/nodics.ai\n```\n\n## Mandatory prerequisites\n\nBefore running the checklist, confirm these local services and tools are\navailable:\n\n1. Node.js 24 and npm.\n2. MongoDB running locally.\n3. The three repositories are cloned:\n   - `nodics.ai`\n   - `nodics.axis`\n   - `nodics.kickoff`\n4. `nodics.kickoff/.env` exists and points to the framework root.\n5. `nodics.axis/.env` points to the local Platform server.\n\nRun this from `nodics.kickoff`:\n\n```bash\ncp .env.example .env\nnpm run configure:framework\nnpm install\n```\n\nRun this from `nodics.axis`:\n\n```bash\ncp .env.example .env\nnpm install\n```\n\n## Fresh database reset\n\nUse a fresh database reset only for local developer acceptance. Do not run this\nagainst a shared development, QA, pre-production, or production database.\n\nThe local server configs own the exact database names. Read them before\ndropping anything. In the reference topology, the relevant server configs are:\n\n```text\nenvs/kickoffLocal/platformServer/config/properties.js\nenvs/kickoffLocal/wcmsServer/config/properties.js\nenvs/kickoffLocal/processServer/config/properties.js\n```\n\nThe reset should remove only the local Kickoff runtime databases/schemas used\nby those servers. It must not delete a broad MongoDB instance, user home\nfolder, workspace folder, or unrelated project database.\n\n## Automated acceptance path\n\nMost maintainers should use the automated path first. It proves the same\ncontracts as the manual checklist and reduces human mistakes during repeated\nbootstrap tests.\n\nRun this from `nodics.kickoff`:\n\n```bash\nnpm run acceptance:local:fresh\n```\n\nThis command intentionally drops only the bounded reference local databases:\n\n- `kickoffLocal`\n- `kickoffLocalWcms`\n- `kickoffLocalCron`\n- `kickoffLocalProcess`\n\nIt then starts any missing local servers, waits for Platform, WCMS, the\ncomposed Process/Cron automation runtime, and Axis to become reachable,\nauthenticates the local admin, imports the Framework, Nodics Axis, and Nodics\nKickoff documentation packs through WCMS, checks key Axis routes, verifies WCMS\ncontent counts, and runs the Axis live smoke with the documentation and Cron\nlifecycle gates enabled.\n\nUse the safer non-destructive form when you only want to verify the current\nlocal state:\n\n```bash\nnpm run acceptance:local\n```\n\nThat version does not drop databases. It checks the currently running or\nstarted local topology and imports missing documentation packs if required.\n\n### What the automated command proves\n\n```mermaid\nflowchart TD\n  Start[\"Developer runs npm run acceptance:local:fresh\"] --> Drop[\"Drop only Kickoff local DBs\"]\n  Drop --> Platform[\"Start or reuse Platform on 4300\"]\n  Platform --> WCMS[\"Start or reuse WCMS on 4310\"]\n  WCMS --> Process[\"Start or reuse Process/Cron on 4330\"]\n  Process --> Axis[\"Start or reuse Axis on 3100\"]\n  Axis --> Auth[\"Authenticate default/admin\"]\n  Auth --> Registry[\"Verify Core, Platform, WCMS, Cron observation\"]\n  Registry --> Docs[\"Import documentation packs through WCMS\"]\n  Docs --> Routes[\"Verify Axis routes\"]\n  Routes --> Designer[\"Verify Content Designer catalog-first route\"]\n  Designer --> Counts[\"Verify WCMS catalog/site/page/component/route counts\"]\n  Counts --> Lifecycle[\"Run Cron register, activate, deactivate, deregister\"]\n  Lifecycle --> Pass[\"Acceptance pass\"]\n```\n\nThe command stops the servers it started after the acceptance gates complete.\nIf you want to keep the stack running so you can inspect Axis after the run,\nuse:\n\n```bash\nnode scripts/local-bootstrap-acceptance.mjs --drop-local-db --leave-started\n```\n\nThe command is deliberately conservative. It does not discover and drop random\nMongoDB databases. It does not kill unrelated processes. It does not create\nanother importer. It uses the existing Profile login, BackOffice registry,\nWCMS content-pack API, and Axis smoke test. This matters because acceptance\nmust prove the same path a real developer or operator uses.\n\n## Start the backend servers\n\nOpen three terminals from `nodics.kickoff`.\n\nTerminal 1:\n\n```bash\nnpm run start:platform\n```\n\nTerminal 2:\n\n```bash\nnpm run start:wcms\n```\n\nTerminal 3:\n\n```bash\nnpm run start:process\n```\n\nExpected local ports:\n\n| Runtime | Port | Why it matters |\n| --- | ---: | --- |\n| Platform | 4300 | Profile login, BackOffice bootstrap, module registry, OpenAPI discovery. |\n| WCMS | 4310 | CMS sites, content catalogs, page/component data, documentation packs, media metadata. |\n| Process and Automation | 4330 | Process/workflow APIs plus optional Cron observation and registry lifecycle testing. |\n\nIf a port is already in use, confirm whether it is an earlier Nodics server\nfrom the same checkout. Do not kill unrelated processes by guessing.\n\n## Start Axis\n\nOpen another terminal from `nodics.axis`:\n\n```bash\nnpm run dev\n```\n\nAxis should be available at:\n\n```text\nhttp://localhost:3100\n```\n\n## Login\n\nOpen Axis and use the local reference credentials:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nSuccessful login proves:\n\n1. Axis can load public bootstrap from Platform.\n2. Profile can authenticate the local admin.\n3. Axis can retrieve authenticated BackOffice bootstrap data.\n4. Axis receives authorized navigation and runtime module projections.\n\n## Import initialization data\n\nIn Axis, open the import/initialization workspace and install the available\ninitialization releases.\n\nYou should see releases owned by active modules only. The system must not ask\nAxis to invent import data. Axis presents the operation; the owning backend\nmodule and nImport execute the import.\n\nExpected outcome:\n\n- mandatory Profile/bootstrap identity data is available;\n- core framework data required by Platform and WCMS is present;\n- documentation content packs can be imported or updated;\n- repeated import attempts with unchanged immutable releases do not corrupt\n  existing data.\n\n## Verify module registry\n\nOpen:\n\n```text\nSystem and Integrations → Module Registry\n```\n\nExpected state:\n\n| Functional module | Expected state | Why |\n| --- | --- | --- |\n| `nodics.core` | Registered and active | Required by every runtime. |\n| `nodics.platform` | Registered and active | Required for Profile, BackOffice, and Axis bootstrap. |\n| `nodics.wcms` | Registered and active | Required for CMS, documentation, and media/content management. |\n| `nodics.process` | Optional, observed when Process and Automation is running | Proves process/workflow capability can join the lifecycle. |\n| `nodics.cron` | Optional, observed when Process and Automation or standalone Cron is running | Proves optional runtime modules can join the lifecycle. |\n\nCore, Platform, and WCMS are mandatory for this local Axis-backed acceptance\ntopology. They should not appear as removable optional modules. Cron may be\nregistered, activated, deactivated, and deregistered as an optional module.\n\n## Verify documentation\n\nOpen:\n\n```text\nDocumentation\n```\n\nExpected documentation products:\n\n- Framework\n- Swaggers\n- Nodics Axis\n- Nodics Kickoff\n\nThe products are intentionally separated by ownership:\n\n| Documentation product | Owning repository/module |\n| --- | --- |\n| Framework | `nodics.ai/nodics.docs` |\n| Nodics Axis | `nodics.ai/nodics.platform/modules/axis` |\n| Nodics Kickoff | `nodics.kickoff` |\n| Swagger/OpenAPI | Platform BackOffice/OpenAPI contracts |\n\nAxis is only the renderer. It must not own backend-importable documentation\ncontent.\n\n## Verify content and media\n\nOpen these Axis routes:\n\n```text\n/content\n/content/designer\n/media\n/media/items\n/media/folders\n```\n\nExpected behavior:\n\n- `/content` shows the content dashboard and WCMS-owned summary sections.\n- `/content/designer` shows the governed Page Designer foundation. It should\n  explain the catalog-first sequence and support dynamic template slots rather\n  than assuming a fixed header/main/footer page shape.\n- `/media` shows media management, media records, and media-by-source sections.\n- `/media/items` and `/media/folders` open focused media workspaces instead of\n  falling into CMS recovery.\n- Any unavailable backend schema is reported as a backend/schema discovery\n  issue, not as a frontend-owned data model.\n\n### Verify Page Designer authoring model\n\nOpen:\n\n```text\nContent and Experience → Web Content Management System → Page Designer\n```\n\nThe Designer is not expected to look exactly like the final website in a\nbrowser. It is the authoring and structure view. A beginner should understand\nthis chain:\n\n```mermaid\nflowchart TD\n  Catalog[\"Content Catalog\"]\n  Site[\"Site\"]\n  Template[\"Page Template\"]\n  Page[\"Page\"]\n  Slots[\"Template Slots: any number\"]\n  Sections[\"Page Sections\"]\n  Components[\"Component Instances\"]\n  Media[\"Governed Media\"]\n  Route[\"Page Route\"]\n  Nav[\"Navigation Node\"]\n\n  Catalog --> Site\n  Catalog --> Template\n  Site --> Page\n  Template --> Page\n  Page --> Slots\n  Slots --> Sections\n  Sections --> Components\n  Components --> Media\n  Page --> Route\n  Route --> Nav\n```\n\nThis acceptance step proves only that the reference local stack can consume the\nWCMS-owned authoring model. The contract itself belongs to WCMS. If the\nDesigner metadata is wrong, fix the owning WCMS contract and tests first; do\nnot move catalog, site, template, slot, page, component, or media authority\ninto the reference project or into the Axis frontend.\n\nExpected Designer evidence:\n\n| Area | Expected behavior |\n| --- | --- |\n| Catalog-first sequence | The UI starts from content catalog, then site, template, page, slots, sections, components, media, route, and navigation. |\n| Dynamic slots | Slot names come from template data; the UI must not assume only three slots. |\n| Backend authority | Save/validate actions call WCMS/CMS authoring APIs, not browser-local persistence. |\n| Media governance | Media association points to nMedia records or sets; it never asks for a filesystem path. |\n| Publish readiness | Designer can validate readiness, but publishing remains CMS/nPublish authority. |\n\nIf Designer loads but cannot validate or save, inspect the WCMS server first:\n`cmsAuthoring` API exposure must be enabled, the user must have\n`cms.backoffice.manage`, the selected Site must belong to the selected Content\nCatalog, and the selected Template must expose the slots being edited.\n\n## Verify Cron\n\nOpen:\n\n```text\n/cron\n```\n\nExpected behavior:\n\n- If Process and Automation is running, Axis can observe both `nodics.process`\n  and `nodics.cron` from the same runtime.\n- If Cron is not registered, it appears as available to register.\n- Register moves it into the registered list without requiring a page refresh.\n- Activate changes lifecycle state without freezing buttons.\n- Deactivate and deregister return it to the correct next state.\n\nThe automated acceptance runner performs the full optional Cron lifecycle:\n\n```text\navailable → register → registered/inactive → activate → registered/active\nregistered/active → deactivate → registered/inactive → deregister → available\n```\n\nCron is optional for the project, so the final accepted state after the\nautomated lifecycle test is **available** rather than permanently registered.\nThat proves both the runtime observation path and the governed removal path.\n\nIf an action succeeds but the UI does not update, inspect the module registry\nAPI response immediately after the action. The frontend should refresh local\nquery state after each lifecycle operation.\n\n## Command-line smoke test\n\nAfter the servers and Axis are running, use the live smoke script from\n`nodics.axis`:\n\n```bash\nAXIS_EXPECT_MODULES=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live\n```\n\nExpected result:\n\n```text\nPASS Axis route /\nPASS Axis route /content\nPASS Axis route /content/designer\nPASS Axis route /media\nPASS Axis route /media/items\nPASS Axis route /media/folders\nPASS Axis route /cron\nPASS Axis route /system-integrations\nPASS Axis route /registry\nPASS Axis route /operations/imports-exports\nPASS Axis route /docs/swaggers\nPASS BackOffice public bootstrap\nPASS authenticated login for admin\nPASS module registry reachable\nPASS required modules registered: nodics.core, nodics.platform, nodics.wcms\nPASS optional runtime modules observed: nodics.cron\nPASS documentation pack nodicsDocumentation is CURRENT\nPASS documentation pack axisDocumentation is CURRENT\nPASS documentation pack kickoffDocumentation is CURRENT\nPASS cron lifecycle register\nPASS cron lifecycle activate\nPASS cron lifecycle deactivate\nPASS cron lifecycle deregister returns module to available\n```\n\n## Troubleshooting quick map\n\n| Symptom | Most likely boundary |\n| --- | --- |\n| Axis recovery says BackOffice registry unavailable | Platform server is not reachable or Axis points at the wrong Platform URL. |\n| Login fails | Profile data was not imported, credentials changed, or Platform is using a different database. |\n| Documentation route shows CMS recovery | WCMS is down, documentation pack is not imported, or the documentation source is not registered. |\n| Import page says API category is disabled | API exposure defaults belong in owning modules; check whether the runtime disabled the category at server level. |\n| Cron does not appear | Process and Automation server or standalone Cron server is not running, or the runtime has not reported its functional module observation. |\n| Module action succeeds only after refresh | Axis query invalidation or backend response envelope needs review. |\n| Media schema discovery unavailable | WCMS/media runtime is not exposing the expected schema workbench contract. |\n\n## Acceptance sign-off\n\nThe local acceptance run is complete when:\n\n1. Platform, WCMS, Process and Automation, and Axis are running.\n2. Fresh local databases were created from module-owned import data.\n3. Admin login works.\n4. Module registry shows mandatory modules and optional Cron correctly.\n5. Documentation products are visible.\n6. Content and media routes render the expected workspaces.\n7. The Page Designer route shows the catalog-first model and does not invent a\n   fixed slot shape or frontend-owned content persistence.\n8. `npm run acceptance:local:fresh` passes, or the manual equivalent plus\n   `AXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live`\n   passes.\n9. No repo in the three-repo set has uncommitted acceptance changes.\n\nWhen all nine are true, the modularized foundation is ready for the next\nfunctional module.\n\n## Common mistakes\n\n- Treating a running Node process as proof that the customer project is ready.\n- Skipping content-pack import and then wondering why Axis documentation or\n  WCMS pages are unavailable.\n- Dropping or modifying broad databases during a local test instead of using\n  the bounded fresh-bootstrap command intended for the reference environment.\n- Accepting a module lifecycle flow that requires a browser refresh after\n  register, activate, deactivate, or deregister.\n- Ignoring an `INVALID RELEASE` message because the release still appears in\n  the list.\n- Verifying only Platform while forgetting WCMS, documentation, media, Process,\n  Cron, and Axis routes.\n\n## Verification\n\nRun the checklist twice when confidence matters: once against the currently\nrunning local database and once with the bounded fresh-bootstrap option. The\nexpected result is repeatability. The system should rebuild from backend-owned\ndata, import documentation and initialization releases through governed APIs,\nshow healthy CMS record counts, expose mandatory modules, handle optional Cron\nlifecycle, and render Axis routes without manual database edits.\n\nFor project documentation changes, regenerate the Kickoff documentation pack,\nrun the documentation contract test, start Platform and WCMS, import or update\nthe Kickoff docs release, and open `/docs/nodics-kickoff` in Axis. If the page\nonly works because it was hardcoded in the frontend, the acceptance result is\nnot valid.\n",
      "previous": {
        "title": "Local runtime topology",
        "route": "/docs/nodics-kickoff/kickoff-local-runtime"
      },
      "next": {
        "title": "Deployment qualification",
        "route": "/docs/nodics-kickoff/kickoff-deployment-qualification"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "data/core/source/documentation/pages/local-acceptance-checklist.md",
        "wordCount": 2413,
        "checksum": "8ea2203302e3076d4c49688830adc0a07720acfc377616b666bc79c35fba34de"
      }
    },
    "active": true
  },
  "record4": {
    "code": "kickoffDocsComponentkickoffDeploymentQualification",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.deployment-qualification",
      "title": "Deployment qualification",
      "route": "/docs/nodics-kickoff/kickoff-deployment-qualification",
      "section": "nodics-kickoff",
      "sectionTitle": "Nodics Kickoff",
      "audience": [
        "architect",
        "developer",
        "operator"
      ],
      "summary": "Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off.",
      "headings": [
        {
          "text": "Start here",
          "anchor": "kickoffDeploymentQualification-1-start-here",
          "level": 2
        },
        {
          "text": "Fresh bootstrap is intentionally separate",
          "anchor": "kickoffDeploymentQualification-2-fresh-bootstrap-is-intentionally-separate",
          "level": 2
        },
        {
          "text": "What local evidence does and does not prove",
          "anchor": "kickoffDeploymentQualification-3-what-local-evidence-does-and-does-not-prove",
          "level": 2
        },
        {
          "text": "Production-only evidence register",
          "anchor": "kickoffDeploymentQualification-4-production-only-evidence-register",
          "level": 2
        },
        {
          "text": "Recommended execution order",
          "anchor": "kickoffDeploymentQualification-5-recommended-execution-order",
          "level": 2
        },
        {
          "text": "Failure and recovery",
          "anchor": "kickoffDeploymentQualification-6-failure-and-recovery",
          "level": 2
        },
        {
          "text": "Customization boundary",
          "anchor": "kickoffDeploymentQualification-7-customization-boundary",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffDeploymentQualification-8-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffDeploymentQualification-9-verification",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Deployment qualification is the bridge between a release candidate that works locally and a release that accountable owners may approve for production. The Kickoff runner coordinates evidence from the framework, reference project, Axis, and local Redis, but it deliberately cannot approve production by itself."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start here",
          "anchor": "kickoffDeploymentQualification-1-start-here"
        },
        {
          "kind": "paragraph",
          "text": "From `nodics.kickoff`, print the plan without running anything:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run qualification:deployment"
        },
        {
          "kind": "paragraph",
          "text": "The JSON plan identifies each gate, its owner, the command that would run, and what it proves. It contains no credentials or provider URLs."
        },
        {
          "kind": "paragraph",
          "text": "Run the safe local gates:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run qualification:deployment:local"
        },
        {
          "kind": "paragraph",
          "text": "The runner executes the strict framework release gate, retained-data Kickoff acceptance, Axis verification, and the live Redis cache and distributed registry contracts. It writes sanitized evidence to:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "envs/kickoffLocal/generated/deployment-qualification/latest.json"
        },
        {
          "kind": "paragraph",
          "text": "The generated report is local operational evidence and is intentionally ignored by Git. Archive it in the deployment system that owns the release."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Fresh bootstrap is intentionally separate",
          "anchor": "kickoffDeploymentQualification-2-fresh-bootstrap-is-intentionally-separate"
        },
        {
          "kind": "paragraph",
          "text": "Fresh acceptance drops only the documented Kickoff local databases. Because it mutates local data, it is never included by default:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "node scripts/deployment-qualification.mjs --execute-local --include-fresh"
        },
        {
          "kind": "paragraph",
          "text": "Never use this flag against a shared development, qualification, pre-production, or production database. Use an isolated disposable Kickoff environment and verify the configured database names first."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What local evidence does and does not prove",
          "anchor": "kickoffDeploymentQualification-3-what-local-evidence-does-and-does-not-prove"
        },
        {
          "kind": "table",
          "headers": [
            "Gate",
            "Local proof",
            "Still required before production"
          ],
          "rows": [
            [
              "Framework",
              "Clean build, generated contracts, governance, dependency audit, and automated suites",
              "Deployment-image and target-runtime confirmation"
            ],
            [
              "Kickoff",
              "Integrated runtime, documentation, lifecycle, and business-user smoke journey",
              "Production topology and operational ownership"
            ],
            [
              "Axis",
              "Formatting, lint, type safety, automated tests, and production bundle",
              "Supported browser/device and human assistive-technology matrix"
            ],
            [
              "Redis",
              "Real local cache and distributed-registry behavior",
              "Managed TLS/authentication, topology, isolation, failover, and recovery"
            ],
            [
              "Payments/providers",
              "Mock and offline contract behavior",
              "Real non-production credentials, callbacks, failure handling, and rollback"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Local success must never be translated into `productionApproved: true`. The report fixes this value to `false` and keeps every external evidence class at `NOT_EXECUTED`."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Production-only evidence register",
          "anchor": "kickoffDeploymentQualification-4-production-only-evidence-register"
        },
        {
          "kind": "paragraph",
          "text": "Named owners must attach evidence for all applicable rows:"
        },
        {
          "kind": "table",
          "headers": [
            "Evidence",
            "Accountable owner",
            "Minimum completion evidence"
          ],
          "rows": [
            [
              "Peak load",
              "Performance owner",
              "Workload model, dataset, topology, p95/p99, throughput, error rate, saturation, queue age, projection lag, and integrity reconciliation"
            ],
            [
              "Soak",
              "Operations owner",
              "Sustained duration, memory/CPU trends, retry growth, drift, storage/index growth, and post-run reconciliation"
            ],
            [
              "Penetration",
              "Security owner",
              "Authenticated attack surface, tenant isolation, validation, replay, export, webhook, and privilege-escalation results with disposition"
            ],
            [
              "Managed cache failover",
              "Platform owner",
              "TLS/authentication, topology, tenant isolation, node/provider loss, recovery time, and data-consistency results"
            ],
            [
              "Backup and restore",
              "Data owner",
              "Backup identity, restore procedure, authoritative counts/hashes, projection rebuild, and reconciliation"
            ],
            [
              "Regional residency",
              "Infrastructure and privacy owners",
              "Allowed-region routing, evacuation, deletion propagation, and cross-region leakage results"
            ],
            [
              "RPO/RTO",
              "Operations owner",
              "Measured recovery point and recovery time compared with approved objectives"
            ],
            [
              "External providers",
              "Provider owners",
              "Credential source, consent, callbacks, residency, observability, degraded behavior, rollback, and key rotation"
            ],
            [
              "Accessibility",
              "Product accessibility owner",
              "Keyboard, screen reader, zoom/reflow, contrast, browser, and supported-device results"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Recommended execution order",
          "anchor": "kickoffDeploymentQualification-5-recommended-execution-order"
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart TD\n  Plan[\"Print qualification plan\"] --> Local[\"Run safe local evidence\"]\n  Local --> Fresh{\"Isolated fresh environment available?\"}\n  Fresh -- \"yes\" --> Bootstrap[\"Run bounded fresh bootstrap\"]\n  Fresh -- \"no\" --> Provision[\"Provision qualification environment\"]\n  Bootstrap --> Provision\n  Provision --> Providers[\"Qualify managed cache and external providers\"]\n  Providers --> Load[\"Run peak load and soak\"]\n  Load --> Recovery[\"Run failover, backup restore, and RPO/RTO\"]\n  Recovery --> Security[\"Complete penetration and residency review\"]\n  Security --> Accessibility[\"Complete human accessibility matrix\"]\n  Accessibility --> Review[\"Accountable-owner evidence review\"]\n  Review --> Decision{\"All gates passed or residual risk accepted?\"}\n  Decision -- \"no\" --> Hold[\"Keep publication blocked\"]\n  Decision -- \"yes\" --> Release[\"Approve merge, tag, and publication\"]"
        },
        {
          "kind": "paragraph",
          "text": "Run functional success paths before destructive resilience tests. Run load before failover only when the test plan explicitly needs a stable baseline. Restore the environment and reconcile data after every destructive exercise."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Failure and recovery",
          "anchor": "kickoffDeploymentQualification-6-failure-and-recovery"
        },
        {
          "kind": "paragraph",
          "text": "The runner continues through local gates so one report shows every attempted check. Any non-zero command becomes `FAILED` with a stable failure code; raw environment variables and secrets are excluded. Investigate the owning repository first, rerun the focused failing command, then rerun the pack."
        },
        {
          "kind": "paragraph",
          "text": "If Redis is unavailable, start or configure an approved test endpoint and set `NODICS_CACHE_REDIS_URL` only in the execution environment. Do not commit it. If the framework, Axis, or Kickoff checkout lives elsewhere, provide `NODICS_QUALIFICATION_FRAMEWORK_ROOT` or `NODICS_QUALIFICATION_AXIS_ROOT`."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Customization boundary",
          "anchor": "kickoffDeploymentQualification-7-customization-boundary"
        },
        {
          "kind": "paragraph",
          "text": "This runner belongs to the reference customer project because it coordinates a specific multi-repository deployment journey. A real customer project should copy the pattern into its own project tooling, change only its repository coordinates and qualification gates, and retain the safety properties:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "dry plan by default;",
            "destructive checks explicitly opted in;",
            "no secrets or provider URLs in reports;",
            "external evidence remains separate from local automation;",
            "no automatic production approval;",
            "named owners and measurable completion criteria."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Do not move customer workloads, credentials, environments, acceptance targets, or risk decisions into `nodics.ai`. Framework modules own reusable contracts; the customer deployment owns its qualification and release decision."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffDeploymentQualification-8-common-mistakes"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Treating local Redis as proof of a managed Redis topology, TLS, authentication, failover, or regional recovery.",
            "Calling mock Stripe or offline provider contracts a live-provider test.",
            "running `--include-fresh` without checking that the target is the isolated Kickoff local environment;",
            "publishing the generated JSON as a production approval even though it records only command outcomes and fixes `productionApproved` to `false`;",
            "pasting secrets, bearer tokens, provider URLs, customer data, or raw security findings into a shared evidence report;",
            "accepting average latency while ignoring p95/p99, errors, saturation, queue age, projection lag, and post-run data integrity;",
            "running failover or restore exercises without a rollback plan and named operational owner;",
            "letting Axis automation replace keyboard, screen-reader, zoom, contrast, and supported-device testing by a qualified human;",
            "merging or tagging merely because local gates passed while production-only evidence still says `NOT_EXECUTED`."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification",
          "anchor": "kickoffDeploymentQualification-9-verification"
        },
        {
          "kind": "paragraph",
          "text": "Developers can verify the runner contract without starting the full stack:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run test:qualification\nnpm run qualification:deployment"
        },
        {
          "kind": "paragraph",
          "text": "Confirm the plan contains five non-destructive local gates, nine explicit external gates, no environment values, and `productionApproved: false`. Then run `npm run qualification:deployment:local` in the prepared local workspace. Confirm every attempted local gate is `PASSED`, the report is written only under the ignored `envs/kickoffLocal/generated` path, and all production-only gates remain visible."
        },
        {
          "kind": "paragraph",
          "text": "Operators should archive the local report with the immutable repository commit identifiers, deployment image identifiers, environment name, external test reports, and accountable-owner decisions. Before approval, independently confirm that each external result belongs to the same release candidate and environment topology. A missing, stale, differently scoped, or unverifiable artifact remains pending; silence is never a pass."
        }
      ],
      "searchText": "Deployment qualification Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off. # Deployment qualification\n\nDeployment qualification is the bridge between a release candidate that works\nlocally and a release that accountable owners may approve for production. The\nKickoff runner coordinates evidence from the framework, reference project,\nAxis, and local Redis, but it deliberately cannot approve production by itself.\n\n## Start here\n\nFrom `nodics.kickoff`, print the plan without running anything:\n\n```bash\nnpm run qualification:deployment\n```\n\nThe JSON plan identifies each gate, its owner, the command that would run, and\nwhat it proves. It contains no credentials or provider URLs.\n\nRun the safe local gates:\n\n```bash\nnpm run qualification:deployment:local\n```\n\nThe runner executes the strict framework release gate, retained-data Kickoff\nacceptance, Axis verification, and the live Redis cache and distributed\nregistry contracts. It writes sanitized evidence to:\n\n```text\nenvs/kickoffLocal/generated/deployment-qualification/latest.json\n```\n\nThe generated report is local operational evidence and is intentionally\nignored by Git. Archive it in the deployment system that owns the release.\n\n## Fresh bootstrap is intentionally separate\n\nFresh acceptance drops only the documented Kickoff local databases. Because it\nmutates local data, it is never included by default:\n\n```bash\nnode scripts/deployment-qualification.mjs --execute-local --include-fresh\n```\n\nNever use this flag against a shared development, qualification,\npre-production, or production database. Use an isolated disposable Kickoff\nenvironment and verify the configured database names first.\n\n## What local evidence does and does not prove\n\n| Gate | Local proof | Still required before production |\n| --- | --- | --- |\n| Framework | Clean build, generated contracts, governance, dependency audit, and automated suites | Deployment-image and target-runtime confirmation |\n| Kickoff | Integrated runtime, documentation, lifecycle, and business-user smoke journey | Production topology and operational ownership |\n| Axis | Formatting, lint, type safety, automated tests, and production bundle | Supported browser/device and human assistive-technology matrix |\n| Redis | Real local cache and distributed-registry behavior | Managed TLS/authentication, topology, isolation, failover, and recovery |\n| Payments/providers | Mock and offline contract behavior | Real non-production credentials, callbacks, failure handling, and rollback |\n\nLocal success must never be translated into `productionApproved: true`. The\nreport fixes this value to `false` and keeps every external evidence class at\n`NOT_EXECUTED`.\n\n## Production-only evidence register\n\nNamed owners must attach evidence for all applicable rows:\n\n| Evidence | Accountable owner | Minimum completion evidence |\n| --- | --- | --- |\n| Peak load | Performance owner | Workload model, dataset, topology, p95/p99, throughput, error rate, saturation, queue age, projection lag, and integrity reconciliation |\n| Soak | Operations owner | Sustained duration, memory/CPU trends, retry growth, drift, storage/index growth, and post-run reconciliation |\n| Penetration | Security owner | Authenticated attack surface, tenant isolation, validation, replay, export, webhook, and privilege-escalation results with disposition |\n| Managed cache failover | Platform owner | TLS/authentication, topology, tenant isolation, node/provider loss, recovery time, and data-consistency results |\n| Backup and restore | Data owner | Backup identity, restore procedure, authoritative counts/hashes, projection rebuild, and reconciliation |\n| Regional residency | Infrastructure and privacy owners | Allowed-region routing, evacuation, deletion propagation, and cross-region leakage results |\n| RPO/RTO | Operations owner | Measured recovery point and recovery time compared with approved objectives |\n| External providers | Provider owners | Credential source, consent, callbacks, residency, observability, degraded behavior, rollback, and key rotation |\n| Accessibility | Product accessibility owner | Keyboard, screen reader, zoom/reflow, contrast, browser, and supported-device results |\n\n## Recommended execution order\n\n```mermaid\nflowchart TD\n  Plan[\"Print qualification plan\"] --> Local[\"Run safe local evidence\"]\n  Local --> Fresh{\"Isolated fresh environment available?\"}\n  Fresh -- \"yes\" --> Bootstrap[\"Run bounded fresh bootstrap\"]\n  Fresh -- \"no\" --> Provision[\"Provision qualification environment\"]\n  Bootstrap --> Provision\n  Provision --> Providers[\"Qualify managed cache and external providers\"]\n  Providers --> Load[\"Run peak load and soak\"]\n  Load --> Recovery[\"Run failover, backup restore, and RPO/RTO\"]\n  Recovery --> Security[\"Complete penetration and residency review\"]\n  Security --> Accessibility[\"Complete human accessibility matrix\"]\n  Accessibility --> Review[\"Accountable-owner evidence review\"]\n  Review --> Decision{\"All gates passed or residual risk accepted?\"}\n  Decision -- \"no\" --> Hold[\"Keep publication blocked\"]\n  Decision -- \"yes\" --> Release[\"Approve merge, tag, and publication\"]\n```\n\nRun functional success paths before destructive resilience tests. Run load\nbefore failover only when the test plan explicitly needs a stable baseline.\nRestore the environment and reconcile data after every destructive exercise.\n\n## Failure and recovery\n\nThe runner continues through local gates so one report shows every attempted\ncheck. Any non-zero command becomes `FAILED` with a stable failure code; raw\nenvironment variables and secrets are excluded. Investigate the owning\nrepository first, rerun the focused failing command, then rerun the pack.\n\nIf Redis is unavailable, start or configure an approved test endpoint and set\n`NODICS_CACHE_REDIS_URL` only in the execution environment. Do not commit it.\nIf the framework, Axis, or Kickoff checkout lives elsewhere, provide\n`NODICS_QUALIFICATION_FRAMEWORK_ROOT` or `NODICS_QUALIFICATION_AXIS_ROOT`.\n\n## Customization boundary\n\nThis runner belongs to the reference customer project because it coordinates a\nspecific multi-repository deployment journey. A real customer project should\ncopy the pattern into its own project tooling, change only its repository\ncoordinates and qualification gates, and retain the safety properties:\n\n- dry plan by default;\n- destructive checks explicitly opted in;\n- no secrets or provider URLs in reports;\n- external evidence remains separate from local automation;\n- no automatic production approval;\n- named owners and measurable completion criteria.\n\nDo not move customer workloads, credentials, environments, acceptance targets,\nor risk decisions into `nodics.ai`. Framework modules own reusable contracts;\nthe customer deployment owns its qualification and release decision.\n\n## Common mistakes\n\n- Treating local Redis as proof of a managed Redis topology, TLS, authentication,\n  failover, or regional recovery.\n- Calling mock Stripe or offline provider contracts a live-provider test.\n- running `--include-fresh` without checking that the target is the isolated\n  Kickoff local environment;\n- publishing the generated JSON as a production approval even though it records\n  only command outcomes and fixes `productionApproved` to `false`;\n- pasting secrets, bearer tokens, provider URLs, customer data, or raw security\n  findings into a shared evidence report;\n- accepting average latency while ignoring p95/p99, errors, saturation, queue\n  age, projection lag, and post-run data integrity;\n- running failover or restore exercises without a rollback plan and named\n  operational owner;\n- letting Axis automation replace keyboard, screen-reader, zoom, contrast, and\n  supported-device testing by a qualified human;\n- merging or tagging merely because local gates passed while production-only\n  evidence still says `NOT_EXECUTED`.\n\n## Verification\n\nDevelopers can verify the runner contract without starting the full stack:\n\n```bash\nnpm run test:qualification\nnpm run qualification:deployment\n```\n\nConfirm the plan contains five non-destructive local gates, nine explicit\nexternal gates, no environment values, and `productionApproved: false`. Then\nrun `npm run qualification:deployment:local` in the prepared local workspace.\nConfirm every attempted local gate is `PASSED`, the report is written only\nunder the ignored `envs/kickoffLocal/generated` path, and all production-only\ngates remain visible.\n\nOperators should archive the local report with the immutable repository commit\nidentifiers, deployment image identifiers, environment name, external test\nreports, and accountable-owner decisions. Before approval, independently\nconfirm that each external result belongs to the same release candidate and\nenvironment topology. A missing, stale, differently scoped, or unverifiable\nartifact remains pending; silence is never a pass.\n",
      "previous": {
        "title": "Local acceptance checklist",
        "route": "/docs/nodics-kickoff/kickoff-local-acceptance"
      },
      "next": {
        "title": "Customer customization guide",
        "route": "/docs/nodics-kickoff/kickoff-customization"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "data/core/source/documentation/pages/deployment-qualification.md",
        "wordCount": 1078,
        "checksum": "878403101cf7672ea77dca3f72daed9a73eb53b1193439fa8b45ae0041308aac"
      }
    },
    "active": true
  },
  "record5": {
    "code": "kickoffDocsComponentkickoffCustomization",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.customization",
      "title": "Customer customization guide",
      "route": "/docs/nodics-kickoff/kickoff-customization",
      "section": "nodics-kickoff",
      "sectionTitle": "Nodics Kickoff",
      "audience": [
        "architect",
        "developer",
        "operator"
      ],
      "summary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
      "headings": [
        {
          "text": "Why customization needs rules",
          "anchor": "kickoffCustomization-1-why-customization-needs-rules",
          "level": 2
        },
        {
          "text": "Customization decision tree",
          "anchor": "kickoffCustomization-2-customization-decision-tree",
          "level": 2
        },
        {
          "text": "How a developer or AI tool should think",
          "anchor": "kickoffCustomization-3-how-a-developer-or-ai-tool-should-think",
          "level": 2
        },
        {
          "text": "File placement examples",
          "anchor": "kickoffCustomization-4-file-placement-examples",
          "level": 2
        },
        {
          "text": "Configuration-first examples",
          "anchor": "kickoffCustomization-5-configuration-first-examples",
          "level": 2
        },
        {
          "text": "Safe customization model",
          "anchor": "kickoffCustomization-6-safe-customization-model",
          "level": 2
        },
        {
          "text": "Two customization types",
          "anchor": "kickoffCustomization-7-two-customization-types",
          "level": 2
        },
        {
          "text": "Code-level customization",
          "anchor": "kickoffCustomization-8-code-level-customization",
          "level": 3
        },
        {
          "text": "Axis and WCMS customization",
          "anchor": "kickoffCustomization-9-axis-and-wcms-customization",
          "level": 3
        },
        {
          "text": "Documentation customization",
          "anchor": "kickoffCustomization-10-documentation-customization",
          "level": 3
        },
        {
          "text": "What not to customize in Kickoff",
          "anchor": "kickoffCustomization-11-what-not-to-customize-in-kickoff",
          "level": 2
        },
        {
          "text": "Extension example",
          "anchor": "kickoffCustomization-12-extension-example",
          "level": 2
        },
        {
          "text": "Documentation rule",
          "anchor": "kickoffCustomization-13-documentation-rule",
          "level": 2
        },
        {
          "text": "Step-by-step: add a small project module",
          "anchor": "kickoffCustomization-14-step-by-step-add-a-small-project-module",
          "level": 2
        },
        {
          "text": "Example: adding a project service",
          "anchor": "kickoffCustomization-15-example-adding-a-project-service",
          "level": 3
        },
        {
          "text": "Step-by-step: add project documentation",
          "anchor": "kickoffCustomization-16-step-by-step-add-project-documentation",
          "level": 2
        },
        {
          "text": "DevOps and rollback notes",
          "anchor": "kickoffCustomization-17-devops-and-rollback-notes",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffCustomization-18-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffCustomization-19-verification",
          "level": 2
        },
        {
          "text": "Continue",
          "anchor": "kickoffCustomization-20-continue",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Kickoff is intentionally small. It should teach partners how to customize Nodics safely without turning the reference project into another framework repository."
        },
        {
          "kind": "paragraph",
          "text": "For a beginner developer, the most important lesson is restraint. Do not start by editing framework files because they are easy to find. Start by asking who owns the behavior, whether configuration can solve the need, and which runtime server should load the customization. That habit keeps the customer project upgradeable."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Why customization needs rules",
          "anchor": "kickoffCustomization-1-why-customization-needs-rules"
        },
        {
          "kind": "paragraph",
          "text": "Most enterprise projects start with one urgent customer request. The quickest solution is often to edit whatever file is easiest to find. That works for a demo, but it becomes expensive when more customers, tenants, brands, modules, and releases arrive. Nodics customization rules keep the framework upgradeable and keep customer behavior visible in the customer project."
        },
        {
          "kind": "paragraph",
          "text": "The rule is simple: customize in the most specific owner that needs the change. Use configuration before code. Use a project module before editing a framework module. Use a later-loaded extension module before forking a standard functional module. Create a new functional module only when the business capability is genuinely new."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Customization decision tree",
          "anchor": "kickoffCustomization-2-customization-decision-tree"
        },
        {
          "kind": "paragraph",
          "text": "Use this decision tree before changing code:"
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart TD\n  Need[\"Need to change behavior or content\"] --> Config{\"Can configuration solve it?\"}\n  Config -- \"yes\" --> Env[\"Use project, environment, server, node, tenant, or provider configuration\"]\n  Config -- \"no\" --> Existing{\"Does an existing functional module own it?\"}\n  Existing -- \"yes\" --> ProjectModule{\"Is it customer-specific?\"}\n  ProjectModule -- \"yes\" --> Overlay[\"Create or update a customer/project module loaded after the framework owner\"]\n  ProjectModule -- \"no\" --> Framework[\"Change the owning framework module with tests and docs\"]\n  Existing -- \"no\" --> NewModule[\"Design a new functional module with explicit ownership\"]\n  Env --> Verify[\"Regenerate artifacts and run acceptance\"]\n  Overlay --> Verify\n  Framework --> Verify\n  NewModule --> Verify"
        },
        {
          "kind": "paragraph",
          "text": "If you cannot answer the ownership question, do not code yet. A wrong owner is more expensive than a missing implementation because it creates a hidden contract future teams will inherit."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "How a developer or AI tool should think",
          "anchor": "kickoffCustomization-3-how-a-developer-or-ai-tool-should-think"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff is a reference customer project, so every change teaches future customers what “good” looks like. A developer or AI tool should not behave like a script that only edits the nearest file. It should behave like a small expert team:"
        },
        {
          "kind": "table",
          "headers": [
            "Role",
            "What to check in Kickoff"
          ],
          "rows": [
            [
              "Business analyst",
              "Does this make the first-hour customer experience clearer, safer, or more convincing?"
            ],
            [
              "Enterprise architect",
              "Does the change preserve framework, customer project, runtime server, Axis, WCMS, Profile, and BackOffice ownership?"
            ],
            [
              "Nodics framework expert",
              "Is the behavior a project customization, a framework capability, a server topology decision, or generated content-pack output?"
            ],
            [
              "Domain expert",
              "Is the sample reusable enough for future commerce, workflow, content, integration, or industry-specific examples?"
            ],
            [
              "Principal engineer",
              "Can this be solved through configuration, project module overlay, generated documentation source, or a small exported function?"
            ],
            [
              "QA and tester",
              "Does the setup work from zero database state, repeated runs, missing services, and failed dependency resolution?"
            ],
            [
              "TechOps/DevOps reviewer",
              "Are framework paths, local databases, ports, logs, reset scope, and rollback behavior safe and understandable?"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "If the answer is unclear, stop and name the ownership decision before editing. For example, changing the local WCMS database name belongs in server configuration, while changing the import checksum rule belongs in the owning framework import service."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "File placement examples",
          "anchor": "kickoffCustomization-4-file-placement-examples"
        },
        {
          "kind": "paragraph",
          "text": "Use these examples when deciding where code or data belongs:"
        },
        {
          "kind": "table",
          "headers": [
            "Need",
            "Correct owner",
            "Why"
          ],
          "rows": [
            [
              "Change local Platform port",
              "`envs/kickoffLocal/platformServer/config`",
              "It is server topology, not framework behavior."
            ],
            [
              "Add a project-only service",
              "`modules/<project-module>`",
              "Customer behavior should load after framework modules."
            ],
            [
              "Explain Kickoff setup in Axis docs",
              "`nodics.kickoff/data/core/source/documentation`",
              "Kickoff owns project documentation that becomes CMS data."
            ],
            [
              "Change Axis renderer behavior",
              "`nodics.axis`",
              "Browser rendering is frontend code, not customer backend data."
            ],
            [
              "Change framework-wide import validation",
              "`nodics.ai` owning module",
              "Shared behavior belongs to the framework owner."
            ],
            [
              "Change generated CMS record text",
              "Source Markdown, then regenerate",
              "Generated files are projections and must not become manual authority."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Configuration-first examples",
          "anchor": "kickoffCustomization-5-configuration-first-examples"
        },
        {
          "kind": "paragraph",
          "text": "Configuration-first does not mean \"put everything in properties.\" It means use the correct configuration owner before writing code."
        },
        {
          "kind": "table",
          "headers": [
            "Example change",
            "Better first move",
            "Why"
          ],
          "rows": [
            [
              "Local WCMS port must change",
              "Server config under `envs/.../wcmsServer/config`",
              "Port is topology, not shared framework behavior."
            ],
            [
              "A project wants a different public label",
              "WCMS/Axis content or project-owned documentation/content data",
              "The label is presentation/content, not service logic."
            ],
            [
              "A local dependency path differs",
              "`.env` with `NODICS_FRAMEWORK_ROOT`, then `configure:framework`",
              "Workspace layout is developer-specific."
            ],
            [
              "A new API category should be enabled",
              "Owning module default property, with server override only to disable or narrow it",
              "Defaults belong to the module that owns the API."
            ],
            [
              "A new lifecycle state is needed",
              "Owning status-definition file",
              "Status values are contracts, not casual properties."
            ],
            [
              "A customer needs different Profile behavior",
              "Customer extension module loaded after Platform/Profile owner",
              "Customer behavior should not fork framework source."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Safe customization model",
          "anchor": "kickoffCustomization-6-safe-customization-model"
        },
        {
          "kind": "paragraph",
          "text": "Customer projects can add project modules under `modules/` and environment or server contributions under `envs/`. These contributions load after standard Nodics functional modules and can override or extend services through the normal module merge process."
        },
        {
          "kind": "paragraph",
          "text": "Safe customizations include:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "project-specific configuration;",
            "customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;",
            "customer extension modules such as a future `kickoff.platform`;",
            "environment-specific properties for local, testing, pre-production, and production;",
            "project-owned CMS documentation content packs;",
            "sample data or initialization flows that belong to the customer project."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Two customization types",
          "anchor": "kickoffCustomization-7-two-customization-types"
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "Code-level customization",
          "anchor": "kickoffCustomization-8-code-level-customization"
        },
        {
          "kind": "paragraph",
          "text": "Use code-level customization when behavior changes: a service needs different logic, a route needs a project-specific policy, a schema needs project fields, or an integration must call a customer system. Keep the implementation in a Kickoff module or a customer extension module. Add tests next to the changed owner and document the boundary in the module README or documentation page."
        },
        {
          "kind": "paragraph",
          "text": "Example mental model:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "nodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer"
        },
        {
          "kind": "paragraph",
          "text": "Here `kickoff.platform` can override or compose Platform services because it loads later. Axis and BackOffice should still show the functional capability as Platform unless the customer intentionally exposes a new business capability."
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "Axis and WCMS customization",
          "anchor": "kickoffCustomization-9-axis-and-wcms-customization"
        },
        {
          "kind": "paragraph",
          "text": "Use governed frontend customization when an administrator changes content, labels, navigation, documentation, images, or page composition through Axis and WCMS. The browser renderer stays in `nodics.axis`; the content records live in the backend owner. For example, changing a demo site logo should become a governed WCMS, Media, or content update, not a hard-coded replacement inside the Axis source repository."
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "Documentation customization",
          "anchor": "kickoffCustomization-10-documentation-customization"
        },
        {
          "kind": "paragraph",
          "text": "Documentation customization is content customization. If a customer wants their own onboarding guide, project setup page, API usage note, operational runbook, or business process explanation, the content belongs in the customer project documentation pack."
        },
        {
          "kind": "paragraph",
          "text": "The source lives under:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "data/core/source/documentation/\n  catalogue.json\n  pages/"
        },
        {
          "kind": "paragraph",
          "text": "The generated files live under:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "data/core/data/documentation/\ndata/manifest.json"
        },
        {
          "kind": "paragraph",
          "text": "Edit the source, bump the catalogue version, regenerate, test, import, and verify in Axis. Never hand-edit the generated CMS records to make a page look right."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What not to customize in Kickoff",
          "anchor": "kickoffCustomization-11-what-not-to-customize-in-kickoff"
        },
        {
          "kind": "paragraph",
          "text": "Do not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not rename standard functional identities such as `nodics.platform` just because a customer extension customizes their behavior. Do not put backend-importable CMS data into the frontend repository. Do not place framework documentation in the customer project unless it is truly project-specific guidance."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Extension example",
          "anchor": "kickoffCustomization-12-extension-example"
        },
        {
          "kind": "paragraph",
          "text": "A customer may later create a module such as `kickoff.platform` to customize Platform behavior. A Platform server could load:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "nodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer"
        },
        {
          "kind": "paragraph",
          "text": "BackOffice and Axis should still present the functional capability as Platform unless the customer explicitly exposes a separate functional module. The extension changes implementation; it does not create a new product identity."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Documentation rule",
          "anchor": "kickoffCustomization-13-documentation-rule"
        },
        {
          "kind": "paragraph",
          "text": "Customer documentation follows the same ownership rule:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "framework guidance goes to `nodics.docs`;",
            "Axis product guidance goes to Platform `modules/axis`;",
            "Kickoff/project guidance goes to `nodics.kickoff`;",
            "browser rendering remains in `nodics.axis`."
          ]
        },
        {
          "kind": "paragraph",
          "text": "When Kickoff docs change, update the source page, bump the catalogue version if the generated content changes, regenerate the pack, import it through WCMS, and verify the route in Axis."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Step-by-step: add a small project module",
          "anchor": "kickoffCustomization-14-step-by-step-add-a-small-project-module"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Create or choose a module under `modules/`.",
            "Give the module a clear package identity and index so load order is intentional.",
            "Add only project-owned services, data, configuration, or routes.",
            "Register the module in the relevant environment/server composition.",
            "Start the server and verify logs show the module loading after framework modules.",
            "Add or update tests proving the project behavior.",
            "Update Kickoff documentation if the customization is part of the reference journey."
          ]
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "Example: adding a project service",
          "anchor": "kickoffCustomization-15-example-adding-a-project-service"
        },
        {
          "kind": "paragraph",
          "text": "Suppose a customer wants a project-only greeting service for a demo dashboard. The safe thought process is:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "The behavior is not framework-wide.",
            "The behavior belongs to the customer project.",
            "The implementation should live under a project module, for example `modules/kickoffCore`.",
            "The service should be exported so a later module can override or compose it.",
            "A test should prove the default behavior and the override path.",
            "The documentation should explain the example if it teaches future partners."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Do not add that demo service to `nodics.core` only because every runtime loads Core. Core is the shared foundation, not a bucket for convenient code."
        },
        {
          "kind": "paragraph",
          "text": "Do not use this flow to move framework behavior into Kickoff. If the behavior belongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and implement it in the owning framework module instead."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Step-by-step: add project documentation",
          "anchor": "kickoffCustomization-16-step-by-step-add-project-documentation"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Add or update Markdown under `data/core/source/documentation/pages/`.",
            "Update `data/core/source/documentation/catalogue.json`.",
            "Bump the catalogue version when generated content changes.",
            "Run `npm run docs:generate`.",
            "Run `npm run test:documentation`.",
            "Import or update the content pack through Axis.",
            "Open the generated `/docs/nodics-kickoff` route in Axis and verify navigation, search, headings, and previous/next links."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "DevOps and rollback notes",
          "anchor": "kickoffCustomization-17-devops-and-rollback-notes"
        },
        {
          "kind": "paragraph",
          "text": "Project customizations should be deployable and reversible. Keep project configuration separate from private secrets. Record which environment and server a customization affects. If a release fails, rollback should remove or disable the project layer without requiring a framework source rollback."
        },
        {
          "kind": "paragraph",
          "text": "Operators should be able to answer three questions during rollback: which project module introduced the change, which server graph loaded it, and which content-pack or configuration version went live. If those answers are unclear, the customization is not ready for a production environment."
        },
        {
          "kind": "paragraph",
          "text": "Generated documentation and seed data should be versioned immutably. If content changes with the same version, the import service should reject it so operators do not silently install a different release under an already-trusted identity."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffCustomization-18-common-mistakes"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Editing framework files for a project-only demonstration change.",
            "Treating the reference project name as a requirement for every customer project.",
            "Putting customer documentation into the framework docs module.",
            "Changing a standard functional module identity when only a customer overlay is being added.",
            "Copying whole framework property trees into an environment/server config instead of overriding only the narrow property the project needs.",
            "Editing generated documentation data after a checksum failure instead of updating source Markdown, regenerating, and bumping the release when required."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification",
          "anchor": "kickoffCustomization-19-verification"
        },
        {
          "kind": "paragraph",
          "text": "Verify a customer customization from the outside and from the owner. From the outside, start the relevant local server, open Axis, and confirm the visible behavior changes only for the project that owns it. From the owner, run the project tests, regenerate project documentation content when docs changed, validate the content-pack manifest, and run the local acceptance script when runtime, import, module registry, documentation, or Axis behavior is affected."
        },
        {
          "kind": "paragraph",
          "text": "If a customization changes Platform, WCMS, Cron, or another framework capability through a project overlay, the evidence must show both the default framework behavior and the project-specific override. A beginner should be able to read the evidence and understand where the change lives, why it does not fork the framework, and how to remove or roll it back."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Continue",
          "anchor": "kickoffCustomization-20-continue"
        },
        {
          "kind": "unordered-list",
          "items": [
            "[Kickoff project overview](project-overview.md)",
            "[Local runtime topology](local-runtime.md)"
          ]
        }
      ],
      "searchText": "Customer customization guide Use Kickoff as a safe example for project modules, environment configuration, and customer overlays. # Customer Customization Guide\n\nKickoff is intentionally small. It should teach partners how to customize\nNodics safely without turning the reference project into another framework\nrepository.\n\nFor a beginner developer, the most important lesson is restraint. Do not start\nby editing framework files because they are easy to find. Start by asking who\nowns the behavior, whether configuration can solve the need, and which runtime\nserver should load the customization. That habit keeps the customer project\nupgradeable.\n\n## Why customization needs rules\n\nMost enterprise projects start with one urgent customer request. The quickest\nsolution is often to edit whatever file is easiest to find. That works for a\ndemo, but it becomes expensive when more customers, tenants, brands, modules,\nand releases arrive. Nodics customization rules keep the framework upgradeable\nand keep customer behavior visible in the customer project.\n\nThe rule is simple: customize in the most specific owner that needs the\nchange. Use configuration before code. Use a project module before editing a\nframework module. Use a later-loaded extension module before forking a standard\nfunctional module. Create a new functional module only when the business\ncapability is genuinely new.\n\n## Customization decision tree\n\nUse this decision tree before changing code:\n\n```mermaid\nflowchart TD\n  Need[\"Need to change behavior or content\"] --> Config{\"Can configuration solve it?\"}\n  Config -- \"yes\" --> Env[\"Use project, environment, server, node, tenant, or provider configuration\"]\n  Config -- \"no\" --> Existing{\"Does an existing functional module own it?\"}\n  Existing -- \"yes\" --> ProjectModule{\"Is it customer-specific?\"}\n  ProjectModule -- \"yes\" --> Overlay[\"Create or update a customer/project module loaded after the framework owner\"]\n  ProjectModule -- \"no\" --> Framework[\"Change the owning framework module with tests and docs\"]\n  Existing -- \"no\" --> NewModule[\"Design a new functional module with explicit ownership\"]\n  Env --> Verify[\"Regenerate artifacts and run acceptance\"]\n  Overlay --> Verify\n  Framework --> Verify\n  NewModule --> Verify\n```\n\nIf you cannot answer the ownership question, do not code yet. A wrong owner is\nmore expensive than a missing implementation because it creates a hidden\ncontract future teams will inherit.\n\n## How a developer or AI tool should think\n\nKickoff is a reference customer project, so every change teaches future\ncustomers what “good” looks like. A developer or AI tool should not behave like\na script that only edits the nearest file. It should behave like a small expert\nteam:\n\n| Role | What to check in Kickoff |\n| --- | --- |\n| Business analyst | Does this make the first-hour customer experience clearer, safer, or more convincing? |\n| Enterprise architect | Does the change preserve framework, customer project, runtime server, Axis, WCMS, Profile, and BackOffice ownership? |\n| Nodics framework expert | Is the behavior a project customization, a framework capability, a server topology decision, or generated content-pack output? |\n| Domain expert | Is the sample reusable enough for future commerce, workflow, content, integration, or industry-specific examples? |\n| Principal engineer | Can this be solved through configuration, project module overlay, generated documentation source, or a small exported function? |\n| QA and tester | Does the setup work from zero database state, repeated runs, missing services, and failed dependency resolution? |\n| TechOps/DevOps reviewer | Are framework paths, local databases, ports, logs, reset scope, and rollback behavior safe and understandable? |\n\nIf the answer is unclear, stop and name the ownership decision before editing.\nFor example, changing the local WCMS database name belongs in server\nconfiguration, while changing the import checksum rule belongs in the owning\nframework import service.\n\n## File placement examples\n\nUse these examples when deciding where code or data belongs:\n\n| Need | Correct owner | Why |\n| --- | --- | --- |\n| Change local Platform port | `envs/kickoffLocal/platformServer/config` | It is server topology, not framework behavior. |\n| Add a project-only service | `modules/<project-module>` | Customer behavior should load after framework modules. |\n| Explain Kickoff setup in Axis docs | `nodics.kickoff/data/core/source/documentation` | Kickoff owns project documentation that becomes CMS data. |\n| Change Axis renderer behavior | `nodics.axis` | Browser rendering is frontend code, not customer backend data. |\n| Change framework-wide import validation | `nodics.ai` owning module | Shared behavior belongs to the framework owner. |\n| Change generated CMS record text | Source Markdown, then regenerate | Generated files are projections and must not become manual authority. |\n\n## Configuration-first examples\n\nConfiguration-first does not mean \"put everything in properties.\" It means use\nthe correct configuration owner before writing code.\n\n| Example change | Better first move | Why |\n| --- | --- | --- |\n| Local WCMS port must change | Server config under `envs/.../wcmsServer/config` | Port is topology, not shared framework behavior. |\n| A project wants a different public label | WCMS/Axis content or project-owned documentation/content data | The label is presentation/content, not service logic. |\n| A local dependency path differs | `.env` with `NODICS_FRAMEWORK_ROOT`, then `configure:framework` | Workspace layout is developer-specific. |\n| A new API category should be enabled | Owning module default property, with server override only to disable or narrow it | Defaults belong to the module that owns the API. |\n| A new lifecycle state is needed | Owning status-definition file | Status values are contracts, not casual properties. |\n| A customer needs different Profile behavior | Customer extension module loaded after Platform/Profile owner | Customer behavior should not fork framework source. |\n\n## Safe customization model\n\nCustomer projects can add project modules under `modules/` and environment or\nserver contributions under `envs/`. These contributions load after standard\nNodics functional modules and can override or extend services through the\nnormal module merge process.\n\nSafe customizations include:\n\n- project-specific configuration;\n- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;\n- customer extension modules such as a future `kickoff.platform`;\n- environment-specific properties for local, testing, pre-production, and\n  production;\n- project-owned CMS documentation content packs;\n- sample data or initialization flows that belong to the customer project.\n\n## Two customization types\n\n### Code-level customization\n\nUse code-level customization when behavior changes: a service needs different\nlogic, a route needs a project-specific policy, a schema needs project fields,\nor an integration must call a customer system. Keep the implementation in a\nKickoff module or a customer extension module. Add tests next to the changed\nowner and document the boundary in the module README or documentation page.\n\nExample mental model:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nHere `kickoff.platform` can override or compose Platform services because it\nloads later. Axis and BackOffice should still show the functional capability as\nPlatform unless the customer intentionally exposes a new business capability.\n\n### Axis and WCMS customization\n\nUse governed frontend customization when an administrator changes content,\nlabels, navigation, documentation, images, or page composition through Axis\nand WCMS. The browser renderer stays in `nodics.axis`; the content records live\nin the backend owner. For example, changing a demo site logo should become a\ngoverned WCMS, Media, or content update, not a hard-coded replacement inside\nthe Axis source repository.\n\n### Documentation customization\n\nDocumentation customization is content customization. If a customer wants\ntheir own onboarding guide, project setup page, API usage note, operational\nrunbook, or business process explanation, the content belongs in the customer\nproject documentation pack.\n\nThe source lives under:\n\n```text\ndata/core/source/documentation/\n  catalogue.json\n  pages/\n```\n\nThe generated files live under:\n\n```text\ndata/core/data/documentation/\ndata/manifest.json\n```\n\nEdit the source, bump the catalogue version, regenerate, test, import, and\nverify in Axis. Never hand-edit the generated CMS records to make a page look\nright.\n\n## What not to customize in Kickoff\n\nDo not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not\nrename standard functional identities such as `nodics.platform` just because a\ncustomer extension customizes their behavior. Do not put backend-importable CMS\ndata into the frontend repository. Do not place framework documentation in the\ncustomer project unless it is truly project-specific guidance.\n\n## Extension example\n\nA customer may later create a module such as `kickoff.platform` to customize\nPlatform behavior. A Platform server could load:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nBackOffice and Axis should still present the functional capability as Platform\nunless the customer explicitly exposes a separate functional module. The\nextension changes implementation; it does not create a new product identity.\n\n## Documentation rule\n\nCustomer documentation follows the same ownership rule:\n\n- framework guidance goes to `nodics.docs`;\n- Axis product guidance goes to Platform `modules/axis`;\n- Kickoff/project guidance goes to `nodics.kickoff`;\n- browser rendering remains in `nodics.axis`.\n\nWhen Kickoff docs change, update the source page, bump the catalogue version if\nthe generated content changes, regenerate the pack, import it through WCMS, and\nverify the route in Axis.\n\n## Step-by-step: add a small project module\n\n1. Create or choose a module under `modules/`.\n2. Give the module a clear package identity and index so load order is\n   intentional.\n3. Add only project-owned services, data, configuration, or routes.\n4. Register the module in the relevant environment/server composition.\n5. Start the server and verify logs show the module loading after framework\n   modules.\n6. Add or update tests proving the project behavior.\n7. Update Kickoff documentation if the customization is part of the reference\n   journey.\n\n### Example: adding a project service\n\nSuppose a customer wants a project-only greeting service for a demo dashboard.\nThe safe thought process is:\n\n1. The behavior is not framework-wide.\n2. The behavior belongs to the customer project.\n3. The implementation should live under a project module, for example\n   `modules/kickoffCore`.\n4. The service should be exported so a later module can override or compose it.\n5. A test should prove the default behavior and the override path.\n6. The documentation should explain the example if it teaches future partners.\n\nDo not add that demo service to `nodics.core` only because every runtime loads\nCore. Core is the shared foundation, not a bucket for convenient code.\n\nDo not use this flow to move framework behavior into Kickoff. If the behavior\nbelongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and\nimplement it in the owning framework module instead.\n\n## Step-by-step: add project documentation\n\n1. Add or update Markdown under\n   `data/core/source/documentation/pages/`.\n2. Update `data/core/source/documentation/catalogue.json`.\n3. Bump the catalogue version when generated content changes.\n4. Run `npm run docs:generate`.\n5. Run `npm run test:documentation`.\n6. Import or update the content pack through Axis.\n7. Open the generated `/docs/nodics-kickoff` route in Axis and verify\n   navigation, search, headings, and previous/next links.\n\n## DevOps and rollback notes\n\nProject customizations should be deployable and reversible. Keep project\nconfiguration separate from private secrets. Record which environment and\nserver a customization affects. If a release fails, rollback should remove or\ndisable the project layer without requiring a framework source rollback.\n\nOperators should be able to answer three questions during rollback: which\nproject module introduced the change, which server graph loaded it, and which\ncontent-pack or configuration version went live. If those answers are unclear,\nthe customization is not ready for a production environment.\n\nGenerated documentation and seed data should be versioned immutably. If content\nchanges with the same version, the import service should reject it so operators\ndo not silently install a different release under an already-trusted identity.\n\n## Common mistakes\n\n- Editing framework files for a project-only demonstration change.\n- Treating the reference project name as a requirement for every customer\n  project.\n- Putting customer documentation into the framework docs module.\n- Changing a standard functional module identity when only a customer overlay\n  is being added.\n- Copying whole framework property trees into an environment/server config\n  instead of overriding only the narrow property the project needs.\n- Editing generated documentation data after a checksum failure instead of\n  updating source Markdown, regenerating, and bumping the release when\n  required.\n\n## Verification\n\nVerify a customer customization from the outside and from the owner. From the\noutside, start the relevant local server, open Axis, and confirm the visible\nbehavior changes only for the project that owns it. From the owner, run the\nproject tests, regenerate project documentation content when docs changed,\nvalidate the content-pack manifest, and run the local acceptance script when\nruntime, import, module registry, documentation, or Axis behavior is affected.\n\nIf a customization changes Platform, WCMS, Cron, or another framework\ncapability through a project overlay, the evidence must show both the default\nframework behavior and the project-specific override. A beginner should be\nable to read the evidence and understand where the change lives, why it does\nnot fork the framework, and how to remove or roll it back.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Local runtime topology](local-runtime.md)\n",
      "previous": {
        "title": "Deployment qualification",
        "route": "/docs/nodics-kickoff/kickoff-deployment-qualification"
      },
      "next": {
        "title": "Commerce and Engagement functional journeys",
        "route": "/docs/nodics-kickoff/kickoff-functional-journeys"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "modules",
        "path": "data/core/source/documentation/pages/customization-guide.md",
        "wordCount": 1987,
        "checksum": "04695d5273cf5ba324b30dfa58876832b1977e63374925fc5578c788161e0e54"
      }
    },
    "active": true
  },
  "record6": {
    "code": "kickoffDocsComponentkickoffFunctionalJourneys",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.functional-journeys",
      "title": "Commerce and Engagement functional journeys",
      "route": "/docs/nodics-kickoff/kickoff-functional-journeys",
      "section": "nodics-kickoff",
      "sectionTitle": "Nodics Kickoff",
      "audience": [
        "architect",
        "developer",
        "operator"
      ],
      "summary": "Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence.",
      "headings": [
        {
          "text": "Understand the product journey",
          "anchor": "kickoffFunctionalJourneys-1-understand-the-product-journey",
          "level": 2
        },
        {
          "text": "Plan roles, prerequisites, and ownership",
          "anchor": "kickoffFunctionalJourneys-2-plan-roles-prerequisites-and-ownership",
          "level": 2
        },
        {
          "text": "Configure and start locally",
          "anchor": "kickoffFunctionalJourneys-3-configure-and-start-locally",
          "level": 2
        },
        {
          "text": "Operate Engagement in Axis",
          "anchor": "kickoffFunctionalJourneys-4-operate-engagement-in-axis",
          "level": 2
        },
        {
          "text": "Operate Commerce and reversals",
          "anchor": "kickoffFunctionalJourneys-5-operate-commerce-and-reversals",
          "level": 2
        },
        {
          "text": "Integrate providers safely",
          "anchor": "kickoffFunctionalJourneys-6-integrate-providers-safely",
          "level": 2
        },
        {
          "text": "Privacy, data, and recovery",
          "anchor": "kickoffFunctionalJourneys-7-privacy-data-and-recovery",
          "level": 2
        },
        {
          "text": "Observe and troubleshoot",
          "anchor": "kickoffFunctionalJourneys-8-observe-and-troubleshoot",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffFunctionalJourneys-9-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffFunctionalJourneys-10-verification",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "paragraph",
          "text": "This page is the beginner and operator route through the Nodics reference journeys. It explains what can be demonstrated locally, which module owns each decision, what Axis displays, and how to recover safely. Kickoff composes the reference environment; it does not become the authority for Commerce, Engagement, Payment, Communication, Process, Profile, Media, or WCMS records."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Understand the product journey",
          "anchor": "kickoffFunctionalJourneys-1-understand-the-product-journey"
        },
        {
          "kind": "paragraph",
          "text": "A customer-facing journey is not complete when an HTTP request merely returns success. The full path is customer intent, validated intake, durable business state, an eligible operator action, visibility or fulfillment, and a safe withdrawal or reversal. Every step carries a tenant and correlation identity. Repeated commands use an idempotency key, and state-changing operator commands use an expected revision so two operators cannot silently overwrite each other."
        },
        {
          "kind": "paragraph",
          "text": "The local reference uses deterministic providers. They create realistic, content-safe evidence but do not claim that a production account, sender, carrier, or payment merchant is qualified. Sandbox-capable adapters remain disabled until their secret references and environment policy are supplied."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Plan roles, prerequisites, and ownership",
          "anchor": "kickoffFunctionalJourneys-2-plan-roles-prerequisites-and-ownership"
        },
        {
          "kind": "paragraph",
          "text": "Developers start Platform before Commerce or Engagement because authentication, tenant context, and Profile ownership fail closed when Platform is unavailable. Business operators use Axis at `http://localhost:3100`; customer calls use the documented public or customer API surfaces. The local administrator may inspect operator journeys, but a customer-owned route must still be tested with a customer principal before deployment qualification."
        },
        {
          "kind": "paragraph",
          "text": "The principal owners are:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Checkout and Order coordinate placement and reversal checkpoints without taking Payment, Inventory, or Fulfillment authority.",
            "Payment owns authorization, capture, void, refund, provider evidence, and reconciliation.",
            "Engagement API owns public, customer, operator, and integration exposure while Contact, Review, Feedback, and Testimonial own their records and transitions.",
            "Communication owns templates, suppression, delivery attempts, callbacks, and provider-neutral evidence.",
            "Process owns workflow definitions, instances, tasks, recovery incidents, retries, dead-letter state, and compensation progress. Domain modules own the business action and reversal adapters.",
            "Axis renders backend-owned capability metadata and calls secured action routes; it does not duplicate lifecycle rules."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Configure and start locally",
          "anchor": "kickoffFunctionalJourneys-3-configure-and-start-locally"
        },
        {
          "kind": "paragraph",
          "text": "Install the workspace dependencies and use Kickoff scripts rather than constructing an undocumented module graph. Run `npm run start:platform` first, then the Commerce and Engagement start scripts in separate terminals. Readiness must pass before invoking a journey. Do not place provider credentials in source, sample data, browser storage, or documentation. Environment-specific secret references belong in secured layered configuration."
        },
        {
          "kind": "paragraph",
          "text": "Run `npm run acceptance:functional` from `nodics.kickoff` for the automated effective-server proof. The runner reuses healthy local servers or starts only what it needs, authenticates through Platform, uses unique correlation and idempotency values, and stops only processes that it started. It does not edit MongoDB directly."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Operate Engagement in Axis",
          "anchor": "kickoffFunctionalJourneys-4-operate-engagement-in-axis"
        },
        {
          "kind": "paragraph",
          "text": "Open Customer Engagement in Axis. The page groups contact work, testimonials, reviews, feedback, operations, automation, and resilience without creating duplicate application shells. Select a saved or quick-filtered view, open one record, inspect its timeline and linked evidence, and use only actions shown as eligible for the current status."
        },
        {
          "kind": "paragraph",
          "text": "The feedback reference journey submits an anonymous record, then performs `TRIAGE`, `ASSIGN`, `START`, `RESOLVE`, and `CONFIRM`. Confirm closure is intentionally separate from resolution. Reopen remains available when new customer evidence arrives. Contact work supports start, request information, resolve, close, reopen, spam handling, and handoff recovery. Review moderation supports approval, quarantine, rejection, and restoration. Testimonial operations preserve editorial version, customer consent, publication projection, emergency hide, and reconciliation as separate evidence."
        },
        {
          "kind": "paragraph",
          "text": "If an action reports a revision conflict, reload the record and review the newer timeline. Never retry with a guessed revision. If a provider or Process handoff fails, keep the customer record accepted, inspect the deferred or dead-letter evidence, then use the dedicated recovery action. Do not change a domain record through generic schema CRUD."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Operate Commerce and reversals",
          "anchor": "kickoffFunctionalJourneys-5-operate-commerce-and-reversals"
        },
        {
          "kind": "paragraph",
          "text": "The Commerce contract exposes cart calculation, checkout placement, and order reversal routes. A placement proceeds through deterministic checkpoints so failure after pricing, inventory reservation, payment authorization, order creation, or fulfillment submission can be compensated by the owning domain. Replaying the same idempotency key returns existing evidence instead of duplicating the order or payment."
        },
        {
          "kind": "paragraph",
          "text": "Cancellation, return, and refund are not synonyms. Cancellation governs an eligible unfulfilled order or line, Return governs the physical or logical return case, and Refund governs money movement. Axis presents these as an Order Lifecycle journey and links payment, inventory, fulfillment, workflow, and audit evidence. Operators must inspect eligibility and preview impact before confirming a destructive or financial action."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Integrate providers safely",
          "anchor": "kickoffFunctionalJourneys-6-integrate-providers-safely"
        },
        {
          "kind": "paragraph",
          "text": "Provider adapters implement a bounded port: validate enabled state and sandbox policy, resolve credentials by reference, send only the minimum permitted payload, produce a content-free provider reference, authenticate callbacks, reject replay, and expose health and reconciliation. Local providers are deterministic test doubles. Sandbox-capable providers are implementation evidence, while production qualification requires a deployment-owned account and sign-off."
        },
        {
          "kind": "paragraph",
          "text": "For email and SMS, verify suppression before delivery and store no rendered content in events. For payment, use provider tokens rather than card data. For carrier and helpdesk handoff, keep external identifiers as references and let Commerce or Contact retain business lifecycle authority. A provider outage must yield retryable evidence, not an untracked domain-state change."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Privacy, data, and recovery",
          "anchor": "kickoffFunctionalJourneys-7-privacy-data-and-recovery"
        },
        {
          "kind": "paragraph",
          "text": "Every export requires a purpose, an allow-listed field set, masking, a maximum record count, an audit identity, and a checksum. Batch and repair operations require preview, approval, idempotency, per-item outcomes, and resumability. Core operations may coordinate commands, but each command returns to the owning domain service."
        },
        {
          "kind": "paragraph",
          "text": "When an automated Process ACTION fails, open the recovery queue in the existing Process Operations workspace. Inspect the stable error code and attempt budget, then retry with the displayed expected attempt or run the registered domain compensation. A stale attempt fails with a conflict; an exhausted incident stays dead-lettered. Process records the recovery outcome but never edits Commerce, Engagement, or another domain record directly."
        },
        {
          "kind": "paragraph",
          "text": "Retention evaluates policy and legal hold before archive or anonymization. Erasure must not delete records that regulation or an active legal hold requires; instead it records the denied or deferred outcome. Dead-letter replay uses the original bounded command identity and increments attempt evidence. Operators should be able to trace the original correlation identifier from customer intake through domain state, provider attempt, workflow, visibility, and recovery."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Observe and troubleshoot",
          "anchor": "kickoffFunctionalJourneys-8-observe-and-troubleshoot"
        },
        {
          "kind": "paragraph",
          "text": "Use readiness first, then domain dashboards and timelines. Important signals include placement and reversal failure counts, provider latency and callback rejection, moderation and resolution SLA, overdue queue items, dead letters, replay outcomes, export failures, and projection drift. Logs and events must carry codes and correlation identifiers without message bodies, secrets, tokens, personal contact details, or payment data."
        },
        {
          "kind": "paragraph",
          "text": "When a public Engagement request fails, confirm a correlation header exists and that the feature is enabled in the effective server. When an operator queue appears empty, confirm pagination controls were not interpreted as persistence filters. When Axis hides an action, inspect current status, permission, and backend metadata before assuming a frontend defect. When a provider is disabled, do not enable it merely to make a test green; use the deterministic local adapter or supply a governed sandbox configuration."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffFunctionalJourneys-9-common-mistakes"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Calling a foundation or local mock “production complete.”",
            "Starting Commerce or Engagement without Platform and then weakening fail-closed dependencies.",
            "Editing MongoDB to create demo state instead of using a governed API or import.",
            "Adding a second heavy Axis page when backend metadata can express the journey cleanly.",
            "Letting a cross-domain batch mutate repository records directly.",
            "Logging message content, addresses, credentials, tokens, or provider callback payloads.",
            "Treating deployment qualification as a substitute for functional implementation."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification",
          "anchor": "kickoffFunctionalJourneys-10-verification"
        },
        {
          "kind": "paragraph",
          "text": "Run the owning package tests, then `npm run acceptance:functional` in Kickoff. Verify that submission is visible to an authorized operator, all lifecycle actions increment revision, closure is visible, public projections contain only approved data, and withdrawal or reversal removes eligibility without erasing required audit evidence. Run Axis verification after metadata changes and check keyboard navigation, responsive layout, action confirmation, empty states, error recovery, and permission-denied behavior."
        },
        {
          "kind": "paragraph",
          "text": "For provider work, run success, timeout, rejection, duplicate callback, replay, reconciliation, and disabled-configuration contracts. For operational work, prove preview, approval, partial failure, resume, idempotent replay, legal hold, masked export, and repair evidence. Qualification against real external accounts, production-scale load, disaster recovery infrastructure, and formal accessibility sign-off remains a later environment gate."
        }
      ],
      "searchText": "Commerce and Engagement functional journeys Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence. # Commerce and Engagement functional journeys\n\nThis page is the beginner and operator route through the Nodics reference journeys. It explains what can be demonstrated locally, which module owns each decision, what Axis displays, and how to recover safely. Kickoff composes the reference environment; it does not become the authority for Commerce, Engagement, Payment, Communication, Process, Profile, Media, or WCMS records.\n\n## Understand the product journey\n\nA customer-facing journey is not complete when an HTTP request merely returns success. The full path is customer intent, validated intake, durable business state, an eligible operator action, visibility or fulfillment, and a safe withdrawal or reversal. Every step carries a tenant and correlation identity. Repeated commands use an idempotency key, and state-changing operator commands use an expected revision so two operators cannot silently overwrite each other.\n\nThe local reference uses deterministic providers. They create realistic, content-safe evidence but do not claim that a production account, sender, carrier, or payment merchant is qualified. Sandbox-capable adapters remain disabled until their secret references and environment policy are supplied.\n\n## Plan roles, prerequisites, and ownership\n\nDevelopers start Platform before Commerce or Engagement because authentication, tenant context, and Profile ownership fail closed when Platform is unavailable. Business operators use Axis at `http://localhost:3100`; customer calls use the documented public or customer API surfaces. The local administrator may inspect operator journeys, but a customer-owned route must still be tested with a customer principal before deployment qualification.\n\nThe principal owners are:\n\n- Checkout and Order coordinate placement and reversal checkpoints without taking Payment, Inventory, or Fulfillment authority.\n- Payment owns authorization, capture, void, refund, provider evidence, and reconciliation.\n- Engagement API owns public, customer, operator, and integration exposure while Contact, Review, Feedback, and Testimonial own their records and transitions.\n- Communication owns templates, suppression, delivery attempts, callbacks, and provider-neutral evidence.\n- Process owns workflow definitions, instances, tasks, recovery incidents, retries, dead-letter state, and compensation progress. Domain modules own the business action and reversal adapters.\n- Axis renders backend-owned capability metadata and calls secured action routes; it does not duplicate lifecycle rules.\n\n## Configure and start locally\n\nInstall the workspace dependencies and use Kickoff scripts rather than constructing an undocumented module graph. Run `npm run start:platform` first, then the Commerce and Engagement start scripts in separate terminals. Readiness must pass before invoking a journey. Do not place provider credentials in source, sample data, browser storage, or documentation. Environment-specific secret references belong in secured layered configuration.\n\nRun `npm run acceptance:functional` from `nodics.kickoff` for the automated effective-server proof. The runner reuses healthy local servers or starts only what it needs, authenticates through Platform, uses unique correlation and idempotency values, and stops only processes that it started. It does not edit MongoDB directly.\n\n## Operate Engagement in Axis\n\nOpen Customer Engagement in Axis. The page groups contact work, testimonials, reviews, feedback, operations, automation, and resilience without creating duplicate application shells. Select a saved or quick-filtered view, open one record, inspect its timeline and linked evidence, and use only actions shown as eligible for the current status.\n\nThe feedback reference journey submits an anonymous record, then performs `TRIAGE`, `ASSIGN`, `START`, `RESOLVE`, and `CONFIRM`. Confirm closure is intentionally separate from resolution. Reopen remains available when new customer evidence arrives. Contact work supports start, request information, resolve, close, reopen, spam handling, and handoff recovery. Review moderation supports approval, quarantine, rejection, and restoration. Testimonial operations preserve editorial version, customer consent, publication projection, emergency hide, and reconciliation as separate evidence.\n\nIf an action reports a revision conflict, reload the record and review the newer timeline. Never retry with a guessed revision. If a provider or Process handoff fails, keep the customer record accepted, inspect the deferred or dead-letter evidence, then use the dedicated recovery action. Do not change a domain record through generic schema CRUD.\n\n## Operate Commerce and reversals\n\nThe Commerce contract exposes cart calculation, checkout placement, and order reversal routes. A placement proceeds through deterministic checkpoints so failure after pricing, inventory reservation, payment authorization, order creation, or fulfillment submission can be compensated by the owning domain. Replaying the same idempotency key returns existing evidence instead of duplicating the order or payment.\n\nCancellation, return, and refund are not synonyms. Cancellation governs an eligible unfulfilled order or line, Return governs the physical or logical return case, and Refund governs money movement. Axis presents these as an Order Lifecycle journey and links payment, inventory, fulfillment, workflow, and audit evidence. Operators must inspect eligibility and preview impact before confirming a destructive or financial action.\n\n## Integrate providers safely\n\nProvider adapters implement a bounded port: validate enabled state and sandbox policy, resolve credentials by reference, send only the minimum permitted payload, produce a content-free provider reference, authenticate callbacks, reject replay, and expose health and reconciliation. Local providers are deterministic test doubles. Sandbox-capable providers are implementation evidence, while production qualification requires a deployment-owned account and sign-off.\n\nFor email and SMS, verify suppression before delivery and store no rendered content in events. For payment, use provider tokens rather than card data. For carrier and helpdesk handoff, keep external identifiers as references and let Commerce or Contact retain business lifecycle authority. A provider outage must yield retryable evidence, not an untracked domain-state change.\n\n## Privacy, data, and recovery\n\nEvery export requires a purpose, an allow-listed field set, masking, a maximum record count, an audit identity, and a checksum. Batch and repair operations require preview, approval, idempotency, per-item outcomes, and resumability. Core operations may coordinate commands, but each command returns to the owning domain service.\n\nWhen an automated Process ACTION fails, open the recovery queue in the existing Process Operations workspace. Inspect the stable error code and attempt budget, then retry with the displayed expected attempt or run the registered domain compensation. A stale attempt fails with a conflict; an exhausted incident stays dead-lettered. Process records the recovery outcome but never edits Commerce, Engagement, or another domain record directly.\n\nRetention evaluates policy and legal hold before archive or anonymization. Erasure must not delete records that regulation or an active legal hold requires; instead it records the denied or deferred outcome. Dead-letter replay uses the original bounded command identity and increments attempt evidence. Operators should be able to trace the original correlation identifier from customer intake through domain state, provider attempt, workflow, visibility, and recovery.\n\n## Observe and troubleshoot\n\nUse readiness first, then domain dashboards and timelines. Important signals include placement and reversal failure counts, provider latency and callback rejection, moderation and resolution SLA, overdue queue items, dead letters, replay outcomes, export failures, and projection drift. Logs and events must carry codes and correlation identifiers without message bodies, secrets, tokens, personal contact details, or payment data.\n\nWhen a public Engagement request fails, confirm a correlation header exists and that the feature is enabled in the effective server. When an operator queue appears empty, confirm pagination controls were not interpreted as persistence filters. When Axis hides an action, inspect current status, permission, and backend metadata before assuming a frontend defect. When a provider is disabled, do not enable it merely to make a test green; use the deterministic local adapter or supply a governed sandbox configuration.\n\n## Common mistakes\n\n- Calling a foundation or local mock “production complete.”\n- Starting Commerce or Engagement without Platform and then weakening fail-closed dependencies.\n- Editing MongoDB to create demo state instead of using a governed API or import.\n- Adding a second heavy Axis page when backend metadata can express the journey cleanly.\n- Letting a cross-domain batch mutate repository records directly.\n- Logging message content, addresses, credentials, tokens, or provider callback payloads.\n- Treating deployment qualification as a substitute for functional implementation.\n\n## Verification\n\nRun the owning package tests, then `npm run acceptance:functional` in Kickoff. Verify that submission is visible to an authorized operator, all lifecycle actions increment revision, closure is visible, public projections contain only approved data, and withdrawal or reversal removes eligibility without erasing required audit evidence. Run Axis verification after metadata changes and check keyboard navigation, responsive layout, action confirmation, empty states, error recovery, and permission-denied behavior.\n\nFor provider work, run success, timeout, rejection, duplicate callback, replay, reconciliation, and disabled-configuration contracts. For operational work, prove preview, approval, partial failure, resume, idempotent replay, legal hold, masked export, and repair evidence. Qualification against real external accounts, production-scale load, disaster recovery infrastructure, and formal accessibility sign-off remains a later environment gate.\n",
      "previous": {
        "title": "Customer customization guide",
        "route": "/docs/nodics-kickoff/kickoff-customization"
      },
      "next": null,
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "data/core/source/documentation/pages/functional-journeys.md",
        "wordCount": 1362,
        "checksum": "5a11337bc92b7cb6c3e2899eca2c9b01706242186fa5ba769733b800544e7455"
      }
    },
    "active": true
  }
};
