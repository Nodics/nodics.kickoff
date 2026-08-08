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
    "accessMode": "AUTHENTICATED",
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
          "searchText": "Kickoff project overview Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs. # Kickoff Project Overview\n\nNodics Kickoff is the reference customer project for running Nodics locally and\ndemonstrating how a partner or customer project consumes the framework. It is\nnot a standard Nodics functional module such as Core, Platform, WCMS, or Cron.\nIt is a project-owned runtime composition that shows how those modules can be\nassembled without copying framework source.\n\nKickoff owns project structure, local environment wiring, project modules,\nsample customization points, and project documentation. Framework\ndocumentation belongs in `nodics.docs`; Axis product documentation belongs in\nthe Platform `axis` backend module; browser renderers belong in `nodics.axis`.\nKickoff documentation that becomes CMS data belongs in this repository under\n`data/core/source/documentation` and is generated into this repository's own\ncontent pack.\n\n## Why Kickoff exists\n\nKickoff exists so a new team can feel Nodics before they design their own\nproject. A partner should be able to clone the framework, clone the reference\nproject, run a small set of commands, log in to Axis, and see the major backend\ncapabilities working together.\n\nThis matters because enterprise framework adoption usually fails at the first\nhour. If the first experience requires a developer to understand every module,\nevery dependency, every data import, and every environment property, the\nframework feels heavy even when the architecture is good. Kickoff keeps the\nfirst journey small: start the runtime, import governed seed data, open Axis,\nread the documentation, and then make one safe customization.\n\nFor a business evaluator, Kickoff demonstrates that Nodics can support a real\ncustomer project without asking the customer to fork framework code. For a\ndeveloper, it shows the concrete folder shape, package dependency model,\nenvironment wiring, server start commands, and project-owned extension points.\nFor an operator, it shows how one local project can run Platform, WCMS, and\nCron as separate processes while preserving the same module ownership rules\nthat production will use.\n\n## Beginner mental model\n\nThink of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample\nproduction line, and `nodics.axis` as the control room screen. The factory\nequipment provides standard capabilities such as Core, Platform, WCMS, Media,\nand Cron. The sample production line decides which equipment to connect for a\nlocal demonstration. The control room screen connects to the running backend\nand shows only the capabilities that the backend says are available and\nauthorized.\n\nKickoff is not the product every customer must ship. It is the smallest\ncomplete example of how a customer product can be structured.\n\n## What Kickoff demonstrates\n\n- how a customer project depends on Nodics framework packages;\n- how environment and server modules load after standard functional modules;\n- how Platform, WCMS, and Cron can run as separate local servers;\n- how project modules can customize runtime behavior without renaming the\n  standard functional module identity;\n- how customer-owned documentation can appear in Axis beside Framework,\n  Swaggers, and Nodics Axis.\n\n## Source map\n\nThe important Kickoff locations are:\n\n- `package.json` describes the project package and local scripts;\n- `.env` describes developer-specific framework checkout location and local\n  overrides;\n- `src/sync-framework-dependencies.js` prepares local framework package links;\n- `src/start-platform-server.js`, `src/start-wcms-server.js`, and\n  `src/start-cron-server.js` start local runtime servers;\n- `config/` contains project-level defaults;\n- `envs/kickoffLocal/` contains local environment and server composition;\n- `modules/` contains project-owned modules and customization examples;\n- `data/core/source/documentation/` contains authored Kickoff documentation;\n- `data/core/data/documentation/` and `manifest/docs-content-pack.json` are\n  generated content-pack outputs.\n\nAuthored documentation is the source. Generated records are the importable CMS\nprojection. Do not hand-edit generated records to fix documentation.\n\n## Runtime boundary\n\nKickoff is loaded after framework modules. That means it can contribute\nconfiguration, project modules, and project-owned documentation, but it must not\nmove framework behavior into the customer repository. A customer extension such\nas `kickoff.platform` may customize Platform implementation while the\nbusiness-facing functional identity remains `nodics.platform`.\n\nRuntime composition and code dependency are related but different. Package\ndependencies make framework modules available to the project. Server\nconfiguration decides which modules are loaded, in which order, for a specific\nruntime process. Service override behavior follows module loading and indexes,\nnot simply the order in `package.json`.\n\n```mermaid\nflowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.core\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.cron\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsServer, cronServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]\n```\n\nThis diagram is intentionally simple. Kickoff does not own the framework\nmodules and Axis does not own backend data. Kickoff composes the backend\nruntime, and Axis renders whatever Platform/WCMS say is active, authorized,\nand available.\n\n## Beginner story\n\nA new developer can think of Kickoff as a training project:\n\n1. It shows where a customer project keeps project modules.\n2. It shows where local environment/server configuration lives.\n3. It shows how to point at a framework checkout that may live anywhere on the\n   machine.\n4. It starts Platform, WCMS, and Cron without asking the developer to create a\n   production topology first.\n5. It ships project-owned documentation so Axis can show framework docs,\n   Axis docs, and customer-project docs side by side.\n\nAfter the developer understands this reference shape, they can create a real\ncustomer project with the same rules but different business modules, branding,\ndata, environments, and deployment choices.\n\n## Documentation boundary\n\nKickoff docs are imported through WCMS like any other governed CMS content\npack. Axis renders the resolved CMS page and does not own the documentation\nrecords. The BackOffice registry exposes the documentation source so the Axis\nDocumentation dashboard can discover it.\n\n## Common mistakes\n\n- Do not put framework documentation in Kickoff unless the page is explaining\n  how Kickoff consumes the framework.\n- Do not copy `nodics.core`, `nodics.platform`, `nodics.wcms`, or `nodics.cron`\n  source into this repository.\n- Do not move Axis renderers or browser code into Kickoff.\n- Do not assume a customer project will always sit beside `nodics.ai`; use the\n  framework-root configuration.\n- Do not change generated content-pack files without regenerating from source.\n- Do not rename functional capabilities when a customer module only customizes\n  their implementation.\n\n## How to know Kickoff is working\n\nKickoff is healthy when Platform starts, WCMS starts, the module registry shows\nmandatory functional modules as active, optional modules can be registered\nthrough Axis, documentation content packs can be imported or updated through\nBackOffice/WCMS, and Axis can render Framework, Swaggers, Nodics Axis, and\nNodics Kickoff documentation from backend-owned sources.\n\n## Continue\n\n- [Local runtime topology](local-runtime.md)\n- [Customer customization guide](customization-guide.md)\n"
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
          "searchText": "Local runtime topology Start and reason about the local Platform, WCMS, and Cron servers that make the reference project usable. # Local Runtime Topology\n\nKickoff provides a local reference topology so a developer can start Nodics and\nsee the major runtime surfaces without creating a new customer project first.\nThe local environment is `kickoffLocal`.\n\n## What this is\n\nThe local runtime topology is the smallest practical Nodics deployment on a\ndeveloper machine. It runs the framework as real backend servers, not as mocked\nscreens. That is important because Axis, BackOffice, module registration,\ncontent-pack import, API contracts, authentication, and WCMS routing all depend\non backend authority.\n\nThe goal is not to teach every production option on day one. The goal is to\ngive a beginner a reliable local loop: configure framework location, install\ndependencies, start servers, log in, import/update data, and observe the\nruntime from Axis.\n\n## Servers\n\nThe current local topology uses separate runtime servers:\n\n- `platformServer` starts the Platform runtime. It loads Core, Platform,\n  Profile, BackOffice, the Platform `axis` backend module, and Kickoff project\n  modules.\n- `wcmsServer` starts the WCMS runtime. It loads Core, WCMS, CMS, Media, and\n  Kickoff project modules. WCMS owns CMS sites, catalogs, pages, components,\n  routes, and documentation content-pack import.\n- `cronServer` starts the Cron runtime. It loads Core, Cron, cron jobs, and\n  Kickoff project modules.\n\nAxis is a separate frontend application. It connects to Platform for employee\nauthentication and BackOffice bootstrap, then uses the registered module\ncontracts to reach the authorized backend surfaces.\n\n## Start locally\n\nUse separate terminals from the Kickoff repository:\n\n```bash\nnpm run start:platform\nnpm run start:wcms\nnpm run start:cron\n```\n\nAxis normally runs from the `nodics.axis` repository:\n\n```bash\nnpm run dev\n```\n\nThe default local ports are:\n\n- Axis: `http://localhost:3100`\n- Platform: `http://localhost:4300`\n- WCMS: `http://localhost:4310`\n\n## Before starting\n\nFrom `nodics.kickoff`, copy and review local environment configuration:\n\n```bash\ncp .env.example .env\n```\n\nSet the framework checkout location:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nThe path may be absolute or relative to the Kickoff project root. This avoids a\nhard dependency on a fixed workspace layout. One developer may keep framework\ncode beside Kickoff; another may keep it in a different projects directory.\n\nThen prepare local file dependencies:\n\n```bash\nnpm run configure:framework\nnpm install\n```\n\n`configure:framework` updates the project-local dependency links so npm can\ninstall framework packages from the configured checkout. It does not make\nKickoff the owner of those modules.\n\n## Start sequence\n\nUse separate terminals so logs stay readable:\n\n1. Start Platform first. It owns Profile login, BackOffice bootstrap, module\n   registry, runtime catalogue projection, and OpenAPI contract discovery.\n2. Start WCMS second. It owns documentation sites, catalogs, pages, components,\n   routes, media metadata, and content delivery.\n3. Start Cron when scheduled behavior is needed. It proves optional functional\n   modules can be observed, registered, activated, deactivated, and\n   deregistered through the same registry lifecycle.\n4. Start Axis after backend servers are reachable. Axis reads its public\n   configuration, connects to Platform, authenticates the employee, and\n   discovers registered module endpoints from BackOffice.\n\n## Login and first checks\n\nOpen Axis at `http://localhost:3100`. For the local reference data, use:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nAfter login:\n\n- open the System and Integrations area and check the module registry;\n- confirm Core, Platform, and WCMS are active and not treated as optional;\n- if Cron is running, confirm it appears as an optional module that can move\n  through the lifecycle;\n- open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics\n  Kickoff are shown as separate documentation products;\n- import or update documentation packs only through the authorized Axis action.\n\n## Documentation import\n\nProject documentation is generated into a Kickoff content pack and imported\nthrough WCMS. The pack code is `kickoffDocumentation`; the CMS Site is\n`kickoffDocumentationSite`; the default route is `/docs/nodics-kickoff`.\n\nIf the documentation page is unavailable in Axis, check that WCMS is running,\nthe content pack is generated, and the latest pack version has been imported.\nThe content-pack service rejects changed content with the same immutable\nversion, so update the catalogue version whenever generated hashes change.\n\n## Troubleshooting\n\nIf Axis shows a BackOffice registry recovery page, Platform is not reachable,\nthe Platform port is wrong, or Axis public configuration points at the wrong\nbase URL. If Axis logs in but documentation routes show CMS recovery, WCMS may\nnot be running, the documentation source may not be registered, or the content\npack may not be imported. If an optional module appears only after refresh,\ncheck the module registry API response after each lifecycle operation before\nassuming the frontend state is wrong.\n\nIf npm cannot install framework packages, check `NODICS_FRAMEWORK_ROOT`, rerun\n`npm run configure:framework`, and confirm the configured directory contains\n`nodics.core`, `nodics.platform`, `nodics.wcms`, and any optional framework\nmodules used by the local server.\n\n## Production note\n\nThe local topology teaches ownership, not final infrastructure. Production may\nrun modules in separate processes, hosts, containers, or release units. That\ndoes not change documentation ownership, module identity, API authority, or the\nrule that Axis discovers runtime capability from BackOffice instead of keeping\nits own endpoint registry.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Customer customization guide](customization-guide.md)\n"
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
          "searchText": "Local acceptance checklist Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior. # Local Acceptance Checklist\n\nThis checklist is the beginner-friendly path for proving a fresh Nodics local\ninstallation from zero database state. Use it when you have cloned the three\nworking repositories, configured Kickoff, and want to confirm the backend\nframework, customer project, and Axis frontend are working together.\n\nThe checklist is intentionally explicit. A new developer should be able to\nfollow it without already knowing Nodics module loading, BackOffice bootstrap,\nWCMS content packs, or functional-module registration.\n\n## What this checklist proves\n\nThe acceptance run proves five things:\n\n| Area | What must be true |\n| --- | --- |\n| Framework checkout | Kickoff can resolve Core, Platform, WCMS, and Cron from the configured framework root. |\n| Runtime topology | Platform, WCMS, and Cron can start from the Kickoff local environment. |\n| Bootstrap data | Mandatory initialization data can be imported from module-owned releases. |\n| Axis access | Axis can connect to Platform, authenticate the local admin, and discover BackOffice bootstrap data. |\n| Module lifecycle | Core, Platform, and WCMS are mandatory/registered; Cron is observable as an optional runtime module. |\n\nIf any one of these fails, do not continue adding new functional modules. Fix\nthe contract break first, otherwise every later module will inherit a shaky\nlocal foundation.\n\n## Repository layout used by the reference run\n\nThe local reference setup normally looks like this:\n\n```text\nnodicsRoot/\n  nodics.ai/\n  nodics.axis/\n  nodics.kickoff/\n```\n\nThis layout is only a convenience. Customer projects may live anywhere. The\nimportant contract is that `nodics.kickoff/.env` tells Kickoff where the\nframework checkout lives.\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nUse an absolute path if your repositories are not parallel:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=/Users/example/projects/framework/nodics.ai\n```\n\n## Mandatory prerequisites\n\nBefore running the checklist, confirm these local services and tools are\navailable:\n\n1. Node.js 24 and npm.\n2. MongoDB running locally.\n3. The three repositories are cloned:\n   - `nodics.ai`\n   - `nodics.axis`\n   - `nodics.kickoff`\n4. `nodics.kickoff/.env` exists and points to the framework root.\n5. `nodics.axis/.env` points to the local Platform server.\n\nRun this from `nodics.kickoff`:\n\n```bash\ncp .env.example .env\nnpm run configure:framework\nnpm install\n```\n\nRun this from `nodics.axis`:\n\n```bash\ncp .env.example .env\nnpm install\n```\n\n## Fresh database reset\n\nUse a fresh database reset only for local developer acceptance. Do not run this\nagainst a shared development, QA, pre-production, or production database.\n\nThe local server configs own the exact database names. Read them before\ndropping anything. In the reference topology, the relevant server configs are:\n\n```text\nenvs/kickoffLocal/platformServer/config/properties.js\nenvs/kickoffLocal/wcmsServer/config/properties.js\nenvs/kickoffLocal/cronServer/config/properties.js\n```\n\nThe reset should remove only the local Kickoff runtime databases/schemas used\nby those servers. It must not delete a broad MongoDB instance, user home\nfolder, workspace folder, or unrelated project database.\n\n## Automated acceptance path\n\nMost maintainers should use the automated path first. It proves the same\ncontracts as the manual checklist and reduces human mistakes during repeated\nbootstrap tests.\n\nRun this from `nodics.kickoff`:\n\n```bash\nnpm run acceptance:local:fresh\n```\n\nThis command intentionally drops only the three reference local databases:\n\n- `kickoffLocal`\n- `kickoffLocalWcms`\n- `kickoffLocalCron`\n\nIt then starts any missing local servers, waits for Platform, WCMS, Cron, and\nAxis to become reachable, authenticates the local admin, imports the Framework,\nNodics Axis, and Nodics Kickoff documentation packs through WCMS, checks key\nAxis routes, verifies WCMS content counts, and runs the Axis live smoke with\nthe documentation and Cron lifecycle gates enabled.\n\nUse the safer non-destructive form when you only want to verify the current\nlocal state:\n\n```bash\nnpm run acceptance:local\n```\n\nThat version does not drop databases. It checks the currently running or\nstarted local topology and imports missing documentation packs if required.\n\n### What the automated command proves\n\n```mermaid\nflowchart TD\n  Start[\"Developer runs npm run acceptance:local:fresh\"] --> Drop[\"Drop only Kickoff local DBs\"]\n  Drop --> Platform[\"Start or reuse Platform on 4300\"]\n  Platform --> WCMS[\"Start or reuse WCMS on 4310\"]\n  WCMS --> Cron[\"Start or reuse Cron on 4320\"]\n  Cron --> Axis[\"Start or reuse Axis on 3100\"]\n  Axis --> Auth[\"Authenticate default/admin\"]\n  Auth --> Registry[\"Verify Core, Platform, WCMS, Cron observation\"]\n  Registry --> Docs[\"Import documentation packs through WCMS\"]\n  Docs --> Routes[\"Verify Axis routes\"]\n  Routes --> Counts[\"Verify WCMS catalog/site/page/component/route counts\"]\n  Counts --> Lifecycle[\"Run Cron register, activate, deactivate, deregister\"]\n  Lifecycle --> Pass[\"Acceptance pass\"]\n```\n\nThe command stops the servers it started after the acceptance gates complete.\nIf you want to keep the stack running so you can inspect Axis after the run,\nuse:\n\n```bash\nnode scripts/local-bootstrap-acceptance.mjs --drop-local-db --leave-started\n```\n\nThe command is deliberately conservative. It does not discover and drop random\nMongoDB databases. It does not kill unrelated processes. It does not create\nanother importer. It uses the existing Profile login, BackOffice registry,\nWCMS content-pack API, and Axis smoke test. This matters because acceptance\nmust prove the same path a real developer or operator uses.\n\n## Start the backend servers\n\nOpen three terminals from `nodics.kickoff`.\n\nTerminal 1:\n\n```bash\nnpm run start:platform\n```\n\nTerminal 2:\n\n```bash\nnpm run start:wcms\n```\n\nTerminal 3:\n\n```bash\nnpm run start:cron\n```\n\nExpected local ports:\n\n| Runtime | Port | Why it matters |\n| --- | ---: | --- |\n| Platform | 4300 | Profile login, BackOffice bootstrap, module registry, OpenAPI discovery. |\n| WCMS | 4310 | CMS sites, content catalogs, page/component data, documentation packs, media metadata. |\n| Cron | 4320 | Optional runtime module observation and registry lifecycle testing. |\n\nIf a port is already in use, confirm whether it is an earlier Nodics server\nfrom the same checkout. Do not kill unrelated processes by guessing.\n\n## Start Axis\n\nOpen another terminal from `nodics.axis`:\n\n```bash\nnpm run dev\n```\n\nAxis should be available at:\n\n```text\nhttp://localhost:3100\n```\n\n## Login\n\nOpen Axis and use the local reference credentials:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nSuccessful login proves:\n\n1. Axis can load public bootstrap from Platform.\n2. Profile can authenticate the local admin.\n3. Axis can retrieve authenticated BackOffice bootstrap data.\n4. Axis receives authorized navigation and runtime module projections.\n\n## Import initialization data\n\nIn Axis, open the import/initialization workspace and install the available\ninitialization releases.\n\nYou should see releases owned by active modules only. The system must not ask\nAxis to invent import data. Axis presents the operation; the owning backend\nmodule and nImport execute the import.\n\nExpected outcome:\n\n- mandatory Profile/bootstrap identity data is available;\n- core framework data required by Platform and WCMS is present;\n- documentation content packs can be imported or updated;\n- repeated import attempts with unchanged immutable releases do not corrupt\n  existing data.\n\n## Verify module registry\n\nOpen:\n\n```text\nSystem and Integrations → Module Registry\n```\n\nExpected state:\n\n| Functional module | Expected state | Why |\n| --- | --- | --- |\n| `nodics.core` | Registered and active | Required by every runtime. |\n| `nodics.platform` | Registered and active | Required for Profile, BackOffice, and Axis bootstrap. |\n| `nodics.wcms` | Registered and active | Required for CMS, documentation, and media/content management. |\n| `nodics.cron` | Optional, observed when Cron is running | Proves optional runtime modules can join the lifecycle. |\n\nCore, Platform, and WCMS are mandatory for this local Axis-backed acceptance\ntopology. They should not appear as removable optional modules. Cron may be\nregistered, activated, deactivated, and deregistered as an optional module.\n\n## Verify documentation\n\nOpen:\n\n```text\nDocumentation\n```\n\nExpected documentation products:\n\n- Framework\n- Swaggers\n- Nodics Axis\n- Nodics Kickoff\n\nThe products are intentionally separated by ownership:\n\n| Documentation product | Owning repository/module |\n| --- | --- |\n| Framework | `nodics.ai/nodics.docs` |\n| Nodics Axis | `nodics.ai/nodics.platform/modules/axis` |\n| Nodics Kickoff | `nodics.kickoff` |\n| Swagger/OpenAPI | Platform BackOffice/OpenAPI contracts |\n\nAxis is only the renderer. It must not own backend-importable documentation\ncontent.\n\n## Verify content and media\n\nOpen these Axis routes:\n\n```text\n/content\n/media\n/media/items\n/media/folders\n```\n\nExpected behavior:\n\n- `/content` shows the content dashboard and WCMS-owned summary sections.\n- `/media` shows media management, media records, and media-by-source sections.\n- `/media/items` and `/media/folders` open focused media workspaces instead of\n  falling into CMS recovery.\n- Any unavailable backend schema is reported as a backend/schema discovery\n  issue, not as a frontend-owned data model.\n\n## Verify Cron\n\nOpen:\n\n```text\n/cron\n```\n\nExpected behavior:\n\n- If Cron is running, Axis can observe the `nodics.cron` functional module.\n- If Cron is not registered, it appears as available to register.\n- Register moves it into the registered list without requiring a page refresh.\n- Activate changes lifecycle state without freezing buttons.\n- Deactivate and deregister return it to the correct next state.\n\nThe automated acceptance runner performs the full optional Cron lifecycle:\n\n```text\navailable → register → registered/inactive → activate → registered/active\nregistered/active → deactivate → registered/inactive → deregister → available\n```\n\nCron is optional for the project, so the final accepted state after the\nautomated lifecycle test is **available** rather than permanently registered.\nThat proves both the runtime observation path and the governed removal path.\n\nIf an action succeeds but the UI does not update, inspect the module registry\nAPI response immediately after the action. The frontend should refresh local\nquery state after each lifecycle operation.\n\n## Command-line smoke test\n\nAfter the servers and Axis are running, use the live smoke script from\n`nodics.axis`:\n\n```bash\nAXIS_EXPECT_MODULES=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live\n```\n\nExpected result:\n\n```text\nPASS Axis route /\nPASS Axis route /content\nPASS Axis route /media\nPASS Axis route /media/items\nPASS Axis route /media/folders\nPASS Axis route /cron\nPASS Axis route /system-integrations\nPASS Axis route /system\nPASS Axis route /system/modules\nPASS BackOffice public bootstrap\nPASS authenticated login for admin\nPASS module registry reachable\nPASS required modules registered: nodics.core, nodics.platform, nodics.wcms\nPASS optional runtime modules observed: nodics.cron\nPASS documentation pack nodicsDocumentation is CURRENT\nPASS documentation pack axisDocumentation is CURRENT\nPASS documentation pack kickoffDocumentation is CURRENT\nPASS cron lifecycle register\nPASS cron lifecycle activate\nPASS cron lifecycle deactivate\nPASS cron lifecycle deregister returns module to available\n```\n\n## Troubleshooting quick map\n\n| Symptom | Most likely boundary |\n| --- | --- |\n| Axis recovery says BackOffice registry unavailable | Platform server is not reachable or Axis points at the wrong Platform URL. |\n| Login fails | Profile data was not imported, credentials changed, or Platform is using a different database. |\n| Documentation route shows CMS recovery | WCMS is down, documentation pack is not imported, or the documentation source is not registered. |\n| Import page says API category is disabled | API exposure defaults belong in owning modules; check whether the runtime disabled the category at server level. |\n| Cron does not appear | Cron server is not running or has not reported its functional module observation. |\n| Module action succeeds only after refresh | Axis query invalidation or backend response envelope needs review. |\n| Media schema discovery unavailable | WCMS/media runtime is not exposing the expected schema workbench contract. |\n\n## Acceptance sign-off\n\nThe local acceptance run is complete when:\n\n1. Platform, WCMS, Cron, and Axis are running.\n2. Fresh local databases were created from module-owned import data.\n3. Admin login works.\n4. Module registry shows mandatory modules and optional Cron correctly.\n5. Documentation products are visible.\n6. Content and media routes render the expected workspaces.\n7. `npm run acceptance:local:fresh` passes, or the manual equivalent plus\n   `AXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live`\n   passes.\n8. No repo in the three-repo set has uncommitted acceptance changes.\n\nWhen all eight are true, the modularized foundation is ready for the next\nfunctional module.\n"
        },
        {
          "code": "kickoff.customization",
          "title": "Customer customization guide",
          "route": "/docs/nodics-kickoff/kickoff-customization",
          "section": "nodics-kickoff",
          "sectionTitle": "Nodics Kickoff",
          "sectionOrder": 10,
          "order": 40,
          "audience": [
            "architect",
            "developer",
            "operator"
          ],
          "summary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
          "searchText": "Customer customization guide Use Kickoff as a safe example for project modules, environment configuration, and customer overlays. # Customer Customization Guide\n\nKickoff is intentionally small. It should teach partners how to customize\nNodics safely without turning the reference project into another framework\nrepository.\n\nFor a beginner developer, the most important lesson is restraint. Do not start\nby editing framework files because they are easy to find. Start by asking who\nowns the behavior, whether configuration can solve the need, and which runtime\nserver should load the customization. That habit keeps the customer project\nupgradeable.\n\n## Why customization needs rules\n\nMost enterprise projects start with one urgent customer request. The quickest\nsolution is often to edit whatever file is easiest to find. That works for a\ndemo, but it becomes expensive when more customers, tenants, brands, modules,\nand releases arrive. Nodics customization rules keep the framework upgradeable\nand keep customer behavior visible in the customer project.\n\nThe rule is simple: customize in the most specific owner that needs the\nchange. Use configuration before code. Use a project module before editing a\nframework module. Use a later-loaded extension module before forking a standard\nfunctional module. Create a new functional module only when the business\ncapability is genuinely new.\n\n## How a developer or AI tool should think\n\nKickoff is a reference customer project, so every change teaches future\ncustomers what “good” looks like. A developer or AI tool should not behave like\na script that only edits the nearest file. It should behave like a small expert\nteam:\n\n| Role | What to check in Kickoff |\n| --- | --- |\n| Business analyst | Does this make the first-hour customer experience clearer, safer, or more convincing? |\n| Enterprise architect | Does the change preserve framework, customer project, runtime server, Axis, WCMS, Profile, and BackOffice ownership? |\n| Nodics framework expert | Is the behavior a project customization, a framework capability, a server topology decision, or generated content-pack output? |\n| Domain expert | Is the sample reusable enough for future commerce, workflow, content, integration, or industry-specific examples? |\n| Principal engineer | Can this be solved through configuration, project module overlay, generated documentation source, or a small exported function? |\n| QA and tester | Does the setup work from zero database state, repeated runs, missing services, and failed dependency resolution? |\n| TechOps/DevOps reviewer | Are framework paths, local databases, ports, logs, reset scope, and rollback behavior safe and understandable? |\n\nIf the answer is unclear, stop and name the ownership decision before editing.\nFor example, changing the local WCMS database name belongs in server\nconfiguration, while changing the import checksum rule belongs in the owning\nframework import service.\n\n## File placement examples\n\nUse these examples when deciding where code or data belongs:\n\n| Need | Correct owner | Why |\n| --- | --- | --- |\n| Change local Platform port | `envs/kickoffLocal/platformServer/config` | It is server topology, not framework behavior. |\n| Add a project-only service | `modules/<project-module>` | Customer behavior should load after framework modules. |\n| Explain Kickoff setup in Axis docs | `nodics.kickoff/data/core/source/documentation` | Kickoff owns project documentation that becomes CMS data. |\n| Change Axis renderer behavior | `nodics.axis` | Browser rendering is frontend code, not customer backend data. |\n| Change framework-wide import validation | `nodics.ai` owning module | Shared behavior belongs to the framework owner. |\n| Change generated CMS record text | Source Markdown, then regenerate | Generated files are projections and must not become manual authority. |\n\n## Safe customization model\n\nCustomer projects can add project modules under `modules/` and environment or\nserver contributions under `envs/`. These contributions load after standard\nNodics functional modules and can override or extend services through the\nnormal module merge process.\n\nSafe customizations include:\n\n- project-specific configuration;\n- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;\n- customer extension modules such as a future `kickoff.platform`;\n- environment-specific properties for local, testing, pre-production, and\n  production;\n- project-owned CMS documentation content packs;\n- sample data or initialization flows that belong to the customer project.\n\n## Two customization types\n\n### Code-level customization\n\nUse code-level customization when behavior changes: a service needs different\nlogic, a route needs a project-specific policy, a schema needs project fields,\nor an integration must call a customer system. Keep the implementation in a\nKickoff module or a customer extension module. Add tests next to the changed\nowner and document the boundary in the module README or documentation page.\n\nExample mental model:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nHere `kickoff.platform` can override or compose Platform services because it\nloads later. Axis and BackOffice should still show the functional capability as\nPlatform unless the customer intentionally exposes a new business capability.\n\n### Axis and WCMS customization\n\nUse governed frontend customization when an administrator changes content,\nlabels, navigation, documentation, images, or page composition through Axis\nand WCMS. The browser renderer stays in `nodics.axis`; the content records live\nin the backend owner. For example, changing a demo site logo should become a\ngoverned WCMS, Media, or content update, not a hard-coded replacement inside\nthe Axis source repository.\n\n## What not to customize in Kickoff\n\nDo not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not\nrename standard functional identities such as `nodics.platform` just because a\ncustomer extension customizes their behavior. Do not put backend-importable CMS\ndata into the frontend repository. Do not place framework documentation in the\ncustomer project unless it is truly project-specific guidance.\n\n## Extension example\n\nA customer may later create a module such as `kickoff.platform` to customize\nPlatform behavior. A Platform server could load:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nBackOffice and Axis should still present the functional capability as Platform\nunless the customer explicitly exposes a separate functional module. The\nextension changes implementation; it does not create a new product identity.\n\n## Documentation rule\n\nCustomer documentation follows the same ownership rule:\n\n- framework guidance goes to `nodics.docs`;\n- Axis product guidance goes to Platform `modules/axis`;\n- Kickoff/project guidance goes to `nodics.kickoff`;\n- browser rendering remains in `nodics.axis`.\n\nWhen Kickoff docs change, update the source page, bump the catalogue version if\nthe generated content changes, regenerate the pack, import it through WCMS, and\nverify the route in Axis.\n\n## Step-by-step: add a small project module\n\n1. Create or choose a module under `modules/`.\n2. Give the module a clear package identity and index so load order is\n   intentional.\n3. Add only project-owned services, data, configuration, or routes.\n4. Register the module in the relevant environment/server composition.\n5. Start the server and verify logs show the module loading after framework\n   modules.\n6. Add or update tests proving the project behavior.\n7. Update Kickoff documentation if the customization is part of the reference\n   journey.\n\nDo not use this flow to move framework behavior into Kickoff. If the behavior\nbelongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and\nimplement it in the owning framework module instead.\n\n## Step-by-step: add project documentation\n\n1. Add or update Markdown under\n   `data/core/source/documentation/pages/`.\n2. Update `data/core/source/documentation/catalogue.json`.\n3. Bump the catalogue version when generated content changes.\n4. Run `npm run docs:generate`.\n5. Run `npm run test:documentation`.\n6. Import or update the content pack through Axis.\n7. Open the generated `/docs/nodics-kickoff` route in Axis and verify\n   navigation, search, headings, and previous/next links.\n\n## DevOps and rollback notes\n\nProject customizations should be deployable and reversible. Keep project\nconfiguration separate from private secrets. Record which environment and\nserver a customization affects. If a release fails, rollback should remove or\ndisable the project layer without requiring a framework source rollback.\n\nOperators should be able to answer three questions during rollback: which\nproject module introduced the change, which server graph loaded it, and which\ncontent-pack or configuration version went live. If those answers are unclear,\nthe customization is not ready for a production environment.\n\nGenerated documentation and seed data should be versioned immutably. If content\nchanges with the same version, the import service should reject it so operators\ndo not silently install a different release under an already-trusted identity.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Local runtime topology](local-runtime.md)\n"
        }
      ]
    },
    "active": true
  },
  "record1": {
    "code": "kickoffDocsComponentkickoffOverview",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "AUTHENTICATED",
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
          "text": "Beginner mental model",
          "anchor": "kickoffOverview-2-beginner-mental-model",
          "level": 2
        },
        {
          "text": "What Kickoff demonstrates",
          "anchor": "kickoffOverview-3-what-kickoff-demonstrates",
          "level": 2
        },
        {
          "text": "Source map",
          "anchor": "kickoffOverview-4-source-map",
          "level": 2
        },
        {
          "text": "Runtime boundary",
          "anchor": "kickoffOverview-5-runtime-boundary",
          "level": 2
        },
        {
          "text": "Beginner story",
          "anchor": "kickoffOverview-6-beginner-story",
          "level": 2
        },
        {
          "text": "Documentation boundary",
          "anchor": "kickoffOverview-7-documentation-boundary",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffOverview-8-common-mistakes",
          "level": 2
        },
        {
          "text": "How to know Kickoff is working",
          "anchor": "kickoffOverview-9-how-to-know-kickoff-is-working",
          "level": 2
        },
        {
          "text": "Continue",
          "anchor": "kickoffOverview-10-continue",
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
          "text": "For a business evaluator, Kickoff demonstrates that Nodics can support a real customer project without asking the customer to fork framework code. For a developer, it shows the concrete folder shape, package dependency model, environment wiring, server start commands, and project-owned extension points. For an operator, it shows how one local project can run Platform, WCMS, and Cron as separate processes while preserving the same module ownership rules that production will use."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Beginner mental model",
          "anchor": "kickoffOverview-2-beginner-mental-model"
        },
        {
          "kind": "paragraph",
          "text": "Think of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample production line, and `nodics.axis` as the control room screen. The factory equipment provides standard capabilities such as Core, Platform, WCMS, Media, and Cron. The sample production line decides which equipment to connect for a local demonstration. The control room screen connects to the running backend and shows only the capabilities that the backend says are available and authorized."
        },
        {
          "kind": "paragraph",
          "text": "Kickoff is not the product every customer must ship. It is the smallest complete example of how a customer product can be structured."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What Kickoff demonstrates",
          "anchor": "kickoffOverview-3-what-kickoff-demonstrates"
        },
        {
          "kind": "unordered-list",
          "items": [
            "how a customer project depends on Nodics framework packages;",
            "how environment and server modules load after standard functional modules;",
            "how Platform, WCMS, and Cron can run as separate local servers;",
            "how project modules can customize runtime behavior without renaming the standard functional module identity;",
            "how customer-owned documentation can appear in Axis beside Framework, Swaggers, and Nodics Axis."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Source map",
          "anchor": "kickoffOverview-4-source-map"
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
            "`src/start-platform-server.js`, `src/start-wcms-server.js`, and `src/start-cron-server.js` start local runtime servers;",
            "`config/` contains project-level defaults;",
            "`envs/kickoffLocal/` contains local environment and server composition;",
            "`modules/` contains project-owned modules and customization examples;",
            "`data/core/source/documentation/` contains authored Kickoff documentation;",
            "`data/core/data/documentation/` and `manifest/docs-content-pack.json` are generated content-pack outputs."
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
          "anchor": "kickoffOverview-5-runtime-boundary"
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
          "text": "flowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.core\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.cron\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsServer, cronServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]"
        },
        {
          "kind": "paragraph",
          "text": "This diagram is intentionally simple. Kickoff does not own the framework modules and Axis does not own backend data. Kickoff composes the backend runtime, and Axis renders whatever Platform/WCMS say is active, authorized, and available."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Beginner story",
          "anchor": "kickoffOverview-6-beginner-story"
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
            "It starts Platform, WCMS, and Cron without asking the developer to create a production topology first.",
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
          "anchor": "kickoffOverview-7-documentation-boundary"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff docs are imported through WCMS like any other governed CMS content pack. Axis renders the resolved CMS page and does not own the documentation records. The BackOffice registry exposes the documentation source so the Axis Documentation dashboard can discover it."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffOverview-8-common-mistakes"
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
          "anchor": "kickoffOverview-9-how-to-know-kickoff-is-working"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff is healthy when Platform starts, WCMS starts, the module registry shows mandatory functional modules as active, optional modules can be registered through Axis, documentation content packs can be imported or updated through BackOffice/WCMS, and Axis can render Framework, Swaggers, Nodics Axis, and Nodics Kickoff documentation from backend-owned sources."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Continue",
          "anchor": "kickoffOverview-10-continue"
        },
        {
          "kind": "unordered-list",
          "items": [
            "[Local runtime topology](local-runtime.md)",
            "[Customer customization guide](customization-guide.md)"
          ]
        }
      ],
      "searchText": "Kickoff project overview Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs. # Kickoff Project Overview\n\nNodics Kickoff is the reference customer project for running Nodics locally and\ndemonstrating how a partner or customer project consumes the framework. It is\nnot a standard Nodics functional module such as Core, Platform, WCMS, or Cron.\nIt is a project-owned runtime composition that shows how those modules can be\nassembled without copying framework source.\n\nKickoff owns project structure, local environment wiring, project modules,\nsample customization points, and project documentation. Framework\ndocumentation belongs in `nodics.docs`; Axis product documentation belongs in\nthe Platform `axis` backend module; browser renderers belong in `nodics.axis`.\nKickoff documentation that becomes CMS data belongs in this repository under\n`data/core/source/documentation` and is generated into this repository's own\ncontent pack.\n\n## Why Kickoff exists\n\nKickoff exists so a new team can feel Nodics before they design their own\nproject. A partner should be able to clone the framework, clone the reference\nproject, run a small set of commands, log in to Axis, and see the major backend\ncapabilities working together.\n\nThis matters because enterprise framework adoption usually fails at the first\nhour. If the first experience requires a developer to understand every module,\nevery dependency, every data import, and every environment property, the\nframework feels heavy even when the architecture is good. Kickoff keeps the\nfirst journey small: start the runtime, import governed seed data, open Axis,\nread the documentation, and then make one safe customization.\n\nFor a business evaluator, Kickoff demonstrates that Nodics can support a real\ncustomer project without asking the customer to fork framework code. For a\ndeveloper, it shows the concrete folder shape, package dependency model,\nenvironment wiring, server start commands, and project-owned extension points.\nFor an operator, it shows how one local project can run Platform, WCMS, and\nCron as separate processes while preserving the same module ownership rules\nthat production will use.\n\n## Beginner mental model\n\nThink of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample\nproduction line, and `nodics.axis` as the control room screen. The factory\nequipment provides standard capabilities such as Core, Platform, WCMS, Media,\nand Cron. The sample production line decides which equipment to connect for a\nlocal demonstration. The control room screen connects to the running backend\nand shows only the capabilities that the backend says are available and\nauthorized.\n\nKickoff is not the product every customer must ship. It is the smallest\ncomplete example of how a customer product can be structured.\n\n## What Kickoff demonstrates\n\n- how a customer project depends on Nodics framework packages;\n- how environment and server modules load after standard functional modules;\n- how Platform, WCMS, and Cron can run as separate local servers;\n- how project modules can customize runtime behavior without renaming the\n  standard functional module identity;\n- how customer-owned documentation can appear in Axis beside Framework,\n  Swaggers, and Nodics Axis.\n\n## Source map\n\nThe important Kickoff locations are:\n\n- `package.json` describes the project package and local scripts;\n- `.env` describes developer-specific framework checkout location and local\n  overrides;\n- `src/sync-framework-dependencies.js` prepares local framework package links;\n- `src/start-platform-server.js`, `src/start-wcms-server.js`, and\n  `src/start-cron-server.js` start local runtime servers;\n- `config/` contains project-level defaults;\n- `envs/kickoffLocal/` contains local environment and server composition;\n- `modules/` contains project-owned modules and customization examples;\n- `data/core/source/documentation/` contains authored Kickoff documentation;\n- `data/core/data/documentation/` and `manifest/docs-content-pack.json` are\n  generated content-pack outputs.\n\nAuthored documentation is the source. Generated records are the importable CMS\nprojection. Do not hand-edit generated records to fix documentation.\n\n## Runtime boundary\n\nKickoff is loaded after framework modules. That means it can contribute\nconfiguration, project modules, and project-owned documentation, but it must not\nmove framework behavior into the customer repository. A customer extension such\nas `kickoff.platform` may customize Platform implementation while the\nbusiness-facing functional identity remains `nodics.platform`.\n\nRuntime composition and code dependency are related but different. Package\ndependencies make framework modules available to the project. Server\nconfiguration decides which modules are loaded, in which order, for a specific\nruntime process. Service override behavior follows module loading and indexes,\nnot simply the order in `package.json`.\n\n```mermaid\nflowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.core\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.cron\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsServer, cronServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]\n```\n\nThis diagram is intentionally simple. Kickoff does not own the framework\nmodules and Axis does not own backend data. Kickoff composes the backend\nruntime, and Axis renders whatever Platform/WCMS say is active, authorized,\nand available.\n\n## Beginner story\n\nA new developer can think of Kickoff as a training project:\n\n1. It shows where a customer project keeps project modules.\n2. It shows where local environment/server configuration lives.\n3. It shows how to point at a framework checkout that may live anywhere on the\n   machine.\n4. It starts Platform, WCMS, and Cron without asking the developer to create a\n   production topology first.\n5. It ships project-owned documentation so Axis can show framework docs,\n   Axis docs, and customer-project docs side by side.\n\nAfter the developer understands this reference shape, they can create a real\ncustomer project with the same rules but different business modules, branding,\ndata, environments, and deployment choices.\n\n## Documentation boundary\n\nKickoff docs are imported through WCMS like any other governed CMS content\npack. Axis renders the resolved CMS page and does not own the documentation\nrecords. The BackOffice registry exposes the documentation source so the Axis\nDocumentation dashboard can discover it.\n\n## Common mistakes\n\n- Do not put framework documentation in Kickoff unless the page is explaining\n  how Kickoff consumes the framework.\n- Do not copy `nodics.core`, `nodics.platform`, `nodics.wcms`, or `nodics.cron`\n  source into this repository.\n- Do not move Axis renderers or browser code into Kickoff.\n- Do not assume a customer project will always sit beside `nodics.ai`; use the\n  framework-root configuration.\n- Do not change generated content-pack files without regenerating from source.\n- Do not rename functional capabilities when a customer module only customizes\n  their implementation.\n\n## How to know Kickoff is working\n\nKickoff is healthy when Platform starts, WCMS starts, the module registry shows\nmandatory functional modules as active, optional modules can be registered\nthrough Axis, documentation content packs can be imported or updated through\nBackOffice/WCMS, and Axis can render Framework, Swaggers, Nodics Axis, and\nNodics Kickoff documentation from backend-owned sources.\n\n## Continue\n\n- [Local runtime topology](local-runtime.md)\n- [Customer customization guide](customization-guide.md)\n",
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
        "wordCount": 1063,
        "checksum": "cf03f8ecc6c99357c2bedf0b0670151348179ebf236832fc7709edbaf06112d2"
      }
    },
    "active": true
  },
  "record2": {
    "code": "kickoffDocsComponentkickoffLocalRuntime",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "AUTHENTICATED",
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
          "text": "Continue",
          "anchor": "kickoffLocalRuntime-10-continue",
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
            "`cronServer` starts the Cron runtime. It loads Core, Cron, cron jobs, and Kickoff project modules."
          ]
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
          "text": "npm run start:platform\nnpm run start:wcms\nnpm run start:cron"
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
            "WCMS: `http://localhost:4310`"
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
            "Start Cron when scheduled behavior is needed. It proves optional functional modules can be observed, registered, activated, deactivated, and deregistered through the same registry lifecycle.",
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
            "if Cron is running, confirm it appears as an optional module that can move through the lifecycle;",
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
          "text": "Continue",
          "anchor": "kickoffLocalRuntime-10-continue"
        },
        {
          "kind": "unordered-list",
          "items": [
            "[Kickoff project overview](project-overview.md)",
            "[Customer customization guide](customization-guide.md)"
          ]
        }
      ],
      "searchText": "Local runtime topology Start and reason about the local Platform, WCMS, and Cron servers that make the reference project usable. # Local Runtime Topology\n\nKickoff provides a local reference topology so a developer can start Nodics and\nsee the major runtime surfaces without creating a new customer project first.\nThe local environment is `kickoffLocal`.\n\n## What this is\n\nThe local runtime topology is the smallest practical Nodics deployment on a\ndeveloper machine. It runs the framework as real backend servers, not as mocked\nscreens. That is important because Axis, BackOffice, module registration,\ncontent-pack import, API contracts, authentication, and WCMS routing all depend\non backend authority.\n\nThe goal is not to teach every production option on day one. The goal is to\ngive a beginner a reliable local loop: configure framework location, install\ndependencies, start servers, log in, import/update data, and observe the\nruntime from Axis.\n\n## Servers\n\nThe current local topology uses separate runtime servers:\n\n- `platformServer` starts the Platform runtime. It loads Core, Platform,\n  Profile, BackOffice, the Platform `axis` backend module, and Kickoff project\n  modules.\n- `wcmsServer` starts the WCMS runtime. It loads Core, WCMS, CMS, Media, and\n  Kickoff project modules. WCMS owns CMS sites, catalogs, pages, components,\n  routes, and documentation content-pack import.\n- `cronServer` starts the Cron runtime. It loads Core, Cron, cron jobs, and\n  Kickoff project modules.\n\nAxis is a separate frontend application. It connects to Platform for employee\nauthentication and BackOffice bootstrap, then uses the registered module\ncontracts to reach the authorized backend surfaces.\n\n## Start locally\n\nUse separate terminals from the Kickoff repository:\n\n```bash\nnpm run start:platform\nnpm run start:wcms\nnpm run start:cron\n```\n\nAxis normally runs from the `nodics.axis` repository:\n\n```bash\nnpm run dev\n```\n\nThe default local ports are:\n\n- Axis: `http://localhost:3100`\n- Platform: `http://localhost:4300`\n- WCMS: `http://localhost:4310`\n\n## Before starting\n\nFrom `nodics.kickoff`, copy and review local environment configuration:\n\n```bash\ncp .env.example .env\n```\n\nSet the framework checkout location:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nThe path may be absolute or relative to the Kickoff project root. This avoids a\nhard dependency on a fixed workspace layout. One developer may keep framework\ncode beside Kickoff; another may keep it in a different projects directory.\n\nThen prepare local file dependencies:\n\n```bash\nnpm run configure:framework\nnpm install\n```\n\n`configure:framework` updates the project-local dependency links so npm can\ninstall framework packages from the configured checkout. It does not make\nKickoff the owner of those modules.\n\n## Start sequence\n\nUse separate terminals so logs stay readable:\n\n1. Start Platform first. It owns Profile login, BackOffice bootstrap, module\n   registry, runtime catalogue projection, and OpenAPI contract discovery.\n2. Start WCMS second. It owns documentation sites, catalogs, pages, components,\n   routes, media metadata, and content delivery.\n3. Start Cron when scheduled behavior is needed. It proves optional functional\n   modules can be observed, registered, activated, deactivated, and\n   deregistered through the same registry lifecycle.\n4. Start Axis after backend servers are reachable. Axis reads its public\n   configuration, connects to Platform, authenticates the employee, and\n   discovers registered module endpoints from BackOffice.\n\n## Login and first checks\n\nOpen Axis at `http://localhost:3100`. For the local reference data, use:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nAfter login:\n\n- open the System and Integrations area and check the module registry;\n- confirm Core, Platform, and WCMS are active and not treated as optional;\n- if Cron is running, confirm it appears as an optional module that can move\n  through the lifecycle;\n- open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics\n  Kickoff are shown as separate documentation products;\n- import or update documentation packs only through the authorized Axis action.\n\n## Documentation import\n\nProject documentation is generated into a Kickoff content pack and imported\nthrough WCMS. The pack code is `kickoffDocumentation`; the CMS Site is\n`kickoffDocumentationSite`; the default route is `/docs/nodics-kickoff`.\n\nIf the documentation page is unavailable in Axis, check that WCMS is running,\nthe content pack is generated, and the latest pack version has been imported.\nThe content-pack service rejects changed content with the same immutable\nversion, so update the catalogue version whenever generated hashes change.\n\n## Troubleshooting\n\nIf Axis shows a BackOffice registry recovery page, Platform is not reachable,\nthe Platform port is wrong, or Axis public configuration points at the wrong\nbase URL. If Axis logs in but documentation routes show CMS recovery, WCMS may\nnot be running, the documentation source may not be registered, or the content\npack may not be imported. If an optional module appears only after refresh,\ncheck the module registry API response after each lifecycle operation before\nassuming the frontend state is wrong.\n\nIf npm cannot install framework packages, check `NODICS_FRAMEWORK_ROOT`, rerun\n`npm run configure:framework`, and confirm the configured directory contains\n`nodics.core`, `nodics.platform`, `nodics.wcms`, and any optional framework\nmodules used by the local server.\n\n## Production note\n\nThe local topology teaches ownership, not final infrastructure. Production may\nrun modules in separate processes, hosts, containers, or release units. That\ndoes not change documentation ownership, module identity, API authority, or the\nrule that Axis discovers runtime capability from BackOffice instead of keeping\nits own endpoint registry.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Customer customization guide](customization-guide.md)\n",
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
        "wordCount": 821,
        "checksum": "146226705d50edc58278048273c3a74d62c99402f1b15fc34f220069d2997c05"
      }
    },
    "active": true
  },
  "record3": {
    "code": "kickoffDocsComponentkickoffLocalAcceptance",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "AUTHENTICATED",
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
          "text": "Verify Cron",
          "anchor": "kickoffLocalAcceptance-14-verify-cron",
          "level": 2
        },
        {
          "text": "Command-line smoke test",
          "anchor": "kickoffLocalAcceptance-15-command-line-smoke-test",
          "level": 2
        },
        {
          "text": "Troubleshooting quick map",
          "anchor": "kickoffLocalAcceptance-16-troubleshooting-quick-map",
          "level": 2
        },
        {
          "text": "Acceptance sign-off",
          "anchor": "kickoffLocalAcceptance-17-acceptance-sign-off",
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
              "Platform, WCMS, and Cron can start from the Kickoff local environment."
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
          "text": "envs/kickoffLocal/platformServer/config/properties.js\nenvs/kickoffLocal/wcmsServer/config/properties.js\nenvs/kickoffLocal/cronServer/config/properties.js"
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
          "text": "This command intentionally drops only the three reference local databases:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "`kickoffLocal`",
            "`kickoffLocalWcms`",
            "`kickoffLocalCron`"
          ]
        },
        {
          "kind": "paragraph",
          "text": "It then starts any missing local servers, waits for Platform, WCMS, Cron, and Axis to become reachable, authenticates the local admin, imports the Framework, Nodics Axis, and Nodics Kickoff documentation packs through WCMS, checks key Axis routes, verifies WCMS content counts, and runs the Axis live smoke with the documentation and Cron lifecycle gates enabled."
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
          "text": "flowchart TD\n  Start[\"Developer runs npm run acceptance:local:fresh\"] --> Drop[\"Drop only Kickoff local DBs\"]\n  Drop --> Platform[\"Start or reuse Platform on 4300\"]\n  Platform --> WCMS[\"Start or reuse WCMS on 4310\"]\n  WCMS --> Cron[\"Start or reuse Cron on 4320\"]\n  Cron --> Axis[\"Start or reuse Axis on 3100\"]\n  Axis --> Auth[\"Authenticate default/admin\"]\n  Auth --> Registry[\"Verify Core, Platform, WCMS, Cron observation\"]\n  Registry --> Docs[\"Import documentation packs through WCMS\"]\n  Docs --> Routes[\"Verify Axis routes\"]\n  Routes --> Counts[\"Verify WCMS catalog/site/page/component/route counts\"]\n  Counts --> Lifecycle[\"Run Cron register, activate, deactivate, deregister\"]\n  Lifecycle --> Pass[\"Acceptance pass\"]"
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
          "text": "npm run start:cron"
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
              "Cron",
              "4320",
              "Optional runtime module observation and registry lifecycle testing."
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
              "`nodics.cron`",
              "Optional, observed when Cron is running",
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
          "text": "/content\n/media\n/media/items\n/media/folders"
        },
        {
          "kind": "paragraph",
          "text": "Expected behavior:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "`/content` shows the content dashboard and WCMS-owned summary sections.",
            "`/media` shows media management, media records, and media-by-source sections.",
            "`/media/items` and `/media/folders` open focused media workspaces instead of falling into CMS recovery.",
            "Any unavailable backend schema is reported as a backend/schema discovery issue, not as a frontend-owned data model."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verify Cron",
          "anchor": "kickoffLocalAcceptance-14-verify-cron"
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
            "If Cron is running, Axis can observe the `nodics.cron` functional module.",
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
          "anchor": "kickoffLocalAcceptance-15-command-line-smoke-test"
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
          "text": "PASS Axis route /\nPASS Axis route /content\nPASS Axis route /media\nPASS Axis route /media/items\nPASS Axis route /media/folders\nPASS Axis route /cron\nPASS Axis route /system-integrations\nPASS Axis route /system\nPASS Axis route /system/modules\nPASS BackOffice public bootstrap\nPASS authenticated login for admin\nPASS module registry reachable\nPASS required modules registered: nodics.core, nodics.platform, nodics.wcms\nPASS optional runtime modules observed: nodics.cron\nPASS documentation pack nodicsDocumentation is CURRENT\nPASS documentation pack axisDocumentation is CURRENT\nPASS documentation pack kickoffDocumentation is CURRENT\nPASS cron lifecycle register\nPASS cron lifecycle activate\nPASS cron lifecycle deactivate\nPASS cron lifecycle deregister returns module to available"
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Troubleshooting quick map",
          "anchor": "kickoffLocalAcceptance-16-troubleshooting-quick-map"
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
              "Cron server is not running or has not reported its functional module observation."
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
          "anchor": "kickoffLocalAcceptance-17-acceptance-sign-off"
        },
        {
          "kind": "paragraph",
          "text": "The local acceptance run is complete when:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Platform, WCMS, Cron, and Axis are running.",
            "Fresh local databases were created from module-owned import data.",
            "Admin login works.",
            "Module registry shows mandatory modules and optional Cron correctly.",
            "Documentation products are visible.",
            "Content and media routes render the expected workspaces.",
            "`npm run acceptance:local:fresh` passes, or the manual equivalent plus `AXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live` passes.",
            "No repo in the three-repo set has uncommitted acceptance changes."
          ]
        },
        {
          "kind": "paragraph",
          "text": "When all eight are true, the modularized foundation is ready for the next functional module."
        }
      ],
      "searchText": "Local acceptance checklist Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior. # Local Acceptance Checklist\n\nThis checklist is the beginner-friendly path for proving a fresh Nodics local\ninstallation from zero database state. Use it when you have cloned the three\nworking repositories, configured Kickoff, and want to confirm the backend\nframework, customer project, and Axis frontend are working together.\n\nThe checklist is intentionally explicit. A new developer should be able to\nfollow it without already knowing Nodics module loading, BackOffice bootstrap,\nWCMS content packs, or functional-module registration.\n\n## What this checklist proves\n\nThe acceptance run proves five things:\n\n| Area | What must be true |\n| --- | --- |\n| Framework checkout | Kickoff can resolve Core, Platform, WCMS, and Cron from the configured framework root. |\n| Runtime topology | Platform, WCMS, and Cron can start from the Kickoff local environment. |\n| Bootstrap data | Mandatory initialization data can be imported from module-owned releases. |\n| Axis access | Axis can connect to Platform, authenticate the local admin, and discover BackOffice bootstrap data. |\n| Module lifecycle | Core, Platform, and WCMS are mandatory/registered; Cron is observable as an optional runtime module. |\n\nIf any one of these fails, do not continue adding new functional modules. Fix\nthe contract break first, otherwise every later module will inherit a shaky\nlocal foundation.\n\n## Repository layout used by the reference run\n\nThe local reference setup normally looks like this:\n\n```text\nnodicsRoot/\n  nodics.ai/\n  nodics.axis/\n  nodics.kickoff/\n```\n\nThis layout is only a convenience. Customer projects may live anywhere. The\nimportant contract is that `nodics.kickoff/.env` tells Kickoff where the\nframework checkout lives.\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nUse an absolute path if your repositories are not parallel:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=/Users/example/projects/framework/nodics.ai\n```\n\n## Mandatory prerequisites\n\nBefore running the checklist, confirm these local services and tools are\navailable:\n\n1. Node.js 24 and npm.\n2. MongoDB running locally.\n3. The three repositories are cloned:\n   - `nodics.ai`\n   - `nodics.axis`\n   - `nodics.kickoff`\n4. `nodics.kickoff/.env` exists and points to the framework root.\n5. `nodics.axis/.env` points to the local Platform server.\n\nRun this from `nodics.kickoff`:\n\n```bash\ncp .env.example .env\nnpm run configure:framework\nnpm install\n```\n\nRun this from `nodics.axis`:\n\n```bash\ncp .env.example .env\nnpm install\n```\n\n## Fresh database reset\n\nUse a fresh database reset only for local developer acceptance. Do not run this\nagainst a shared development, QA, pre-production, or production database.\n\nThe local server configs own the exact database names. Read them before\ndropping anything. In the reference topology, the relevant server configs are:\n\n```text\nenvs/kickoffLocal/platformServer/config/properties.js\nenvs/kickoffLocal/wcmsServer/config/properties.js\nenvs/kickoffLocal/cronServer/config/properties.js\n```\n\nThe reset should remove only the local Kickoff runtime databases/schemas used\nby those servers. It must not delete a broad MongoDB instance, user home\nfolder, workspace folder, or unrelated project database.\n\n## Automated acceptance path\n\nMost maintainers should use the automated path first. It proves the same\ncontracts as the manual checklist and reduces human mistakes during repeated\nbootstrap tests.\n\nRun this from `nodics.kickoff`:\n\n```bash\nnpm run acceptance:local:fresh\n```\n\nThis command intentionally drops only the three reference local databases:\n\n- `kickoffLocal`\n- `kickoffLocalWcms`\n- `kickoffLocalCron`\n\nIt then starts any missing local servers, waits for Platform, WCMS, Cron, and\nAxis to become reachable, authenticates the local admin, imports the Framework,\nNodics Axis, and Nodics Kickoff documentation packs through WCMS, checks key\nAxis routes, verifies WCMS content counts, and runs the Axis live smoke with\nthe documentation and Cron lifecycle gates enabled.\n\nUse the safer non-destructive form when you only want to verify the current\nlocal state:\n\n```bash\nnpm run acceptance:local\n```\n\nThat version does not drop databases. It checks the currently running or\nstarted local topology and imports missing documentation packs if required.\n\n### What the automated command proves\n\n```mermaid\nflowchart TD\n  Start[\"Developer runs npm run acceptance:local:fresh\"] --> Drop[\"Drop only Kickoff local DBs\"]\n  Drop --> Platform[\"Start or reuse Platform on 4300\"]\n  Platform --> WCMS[\"Start or reuse WCMS on 4310\"]\n  WCMS --> Cron[\"Start or reuse Cron on 4320\"]\n  Cron --> Axis[\"Start or reuse Axis on 3100\"]\n  Axis --> Auth[\"Authenticate default/admin\"]\n  Auth --> Registry[\"Verify Core, Platform, WCMS, Cron observation\"]\n  Registry --> Docs[\"Import documentation packs through WCMS\"]\n  Docs --> Routes[\"Verify Axis routes\"]\n  Routes --> Counts[\"Verify WCMS catalog/site/page/component/route counts\"]\n  Counts --> Lifecycle[\"Run Cron register, activate, deactivate, deregister\"]\n  Lifecycle --> Pass[\"Acceptance pass\"]\n```\n\nThe command stops the servers it started after the acceptance gates complete.\nIf you want to keep the stack running so you can inspect Axis after the run,\nuse:\n\n```bash\nnode scripts/local-bootstrap-acceptance.mjs --drop-local-db --leave-started\n```\n\nThe command is deliberately conservative. It does not discover and drop random\nMongoDB databases. It does not kill unrelated processes. It does not create\nanother importer. It uses the existing Profile login, BackOffice registry,\nWCMS content-pack API, and Axis smoke test. This matters because acceptance\nmust prove the same path a real developer or operator uses.\n\n## Start the backend servers\n\nOpen three terminals from `nodics.kickoff`.\n\nTerminal 1:\n\n```bash\nnpm run start:platform\n```\n\nTerminal 2:\n\n```bash\nnpm run start:wcms\n```\n\nTerminal 3:\n\n```bash\nnpm run start:cron\n```\n\nExpected local ports:\n\n| Runtime | Port | Why it matters |\n| --- | ---: | --- |\n| Platform | 4300 | Profile login, BackOffice bootstrap, module registry, OpenAPI discovery. |\n| WCMS | 4310 | CMS sites, content catalogs, page/component data, documentation packs, media metadata. |\n| Cron | 4320 | Optional runtime module observation and registry lifecycle testing. |\n\nIf a port is already in use, confirm whether it is an earlier Nodics server\nfrom the same checkout. Do not kill unrelated processes by guessing.\n\n## Start Axis\n\nOpen another terminal from `nodics.axis`:\n\n```bash\nnpm run dev\n```\n\nAxis should be available at:\n\n```text\nhttp://localhost:3100\n```\n\n## Login\n\nOpen Axis and use the local reference credentials:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nSuccessful login proves:\n\n1. Axis can load public bootstrap from Platform.\n2. Profile can authenticate the local admin.\n3. Axis can retrieve authenticated BackOffice bootstrap data.\n4. Axis receives authorized navigation and runtime module projections.\n\n## Import initialization data\n\nIn Axis, open the import/initialization workspace and install the available\ninitialization releases.\n\nYou should see releases owned by active modules only. The system must not ask\nAxis to invent import data. Axis presents the operation; the owning backend\nmodule and nImport execute the import.\n\nExpected outcome:\n\n- mandatory Profile/bootstrap identity data is available;\n- core framework data required by Platform and WCMS is present;\n- documentation content packs can be imported or updated;\n- repeated import attempts with unchanged immutable releases do not corrupt\n  existing data.\n\n## Verify module registry\n\nOpen:\n\n```text\nSystem and Integrations → Module Registry\n```\n\nExpected state:\n\n| Functional module | Expected state | Why |\n| --- | --- | --- |\n| `nodics.core` | Registered and active | Required by every runtime. |\n| `nodics.platform` | Registered and active | Required for Profile, BackOffice, and Axis bootstrap. |\n| `nodics.wcms` | Registered and active | Required for CMS, documentation, and media/content management. |\n| `nodics.cron` | Optional, observed when Cron is running | Proves optional runtime modules can join the lifecycle. |\n\nCore, Platform, and WCMS are mandatory for this local Axis-backed acceptance\ntopology. They should not appear as removable optional modules. Cron may be\nregistered, activated, deactivated, and deregistered as an optional module.\n\n## Verify documentation\n\nOpen:\n\n```text\nDocumentation\n```\n\nExpected documentation products:\n\n- Framework\n- Swaggers\n- Nodics Axis\n- Nodics Kickoff\n\nThe products are intentionally separated by ownership:\n\n| Documentation product | Owning repository/module |\n| --- | --- |\n| Framework | `nodics.ai/nodics.docs` |\n| Nodics Axis | `nodics.ai/nodics.platform/modules/axis` |\n| Nodics Kickoff | `nodics.kickoff` |\n| Swagger/OpenAPI | Platform BackOffice/OpenAPI contracts |\n\nAxis is only the renderer. It must not own backend-importable documentation\ncontent.\n\n## Verify content and media\n\nOpen these Axis routes:\n\n```text\n/content\n/media\n/media/items\n/media/folders\n```\n\nExpected behavior:\n\n- `/content` shows the content dashboard and WCMS-owned summary sections.\n- `/media` shows media management, media records, and media-by-source sections.\n- `/media/items` and `/media/folders` open focused media workspaces instead of\n  falling into CMS recovery.\n- Any unavailable backend schema is reported as a backend/schema discovery\n  issue, not as a frontend-owned data model.\n\n## Verify Cron\n\nOpen:\n\n```text\n/cron\n```\n\nExpected behavior:\n\n- If Cron is running, Axis can observe the `nodics.cron` functional module.\n- If Cron is not registered, it appears as available to register.\n- Register moves it into the registered list without requiring a page refresh.\n- Activate changes lifecycle state without freezing buttons.\n- Deactivate and deregister return it to the correct next state.\n\nThe automated acceptance runner performs the full optional Cron lifecycle:\n\n```text\navailable → register → registered/inactive → activate → registered/active\nregistered/active → deactivate → registered/inactive → deregister → available\n```\n\nCron is optional for the project, so the final accepted state after the\nautomated lifecycle test is **available** rather than permanently registered.\nThat proves both the runtime observation path and the governed removal path.\n\nIf an action succeeds but the UI does not update, inspect the module registry\nAPI response immediately after the action. The frontend should refresh local\nquery state after each lifecycle operation.\n\n## Command-line smoke test\n\nAfter the servers and Axis are running, use the live smoke script from\n`nodics.axis`:\n\n```bash\nAXIS_EXPECT_MODULES=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live\n```\n\nExpected result:\n\n```text\nPASS Axis route /\nPASS Axis route /content\nPASS Axis route /media\nPASS Axis route /media/items\nPASS Axis route /media/folders\nPASS Axis route /cron\nPASS Axis route /system-integrations\nPASS Axis route /system\nPASS Axis route /system/modules\nPASS BackOffice public bootstrap\nPASS authenticated login for admin\nPASS module registry reachable\nPASS required modules registered: nodics.core, nodics.platform, nodics.wcms\nPASS optional runtime modules observed: nodics.cron\nPASS documentation pack nodicsDocumentation is CURRENT\nPASS documentation pack axisDocumentation is CURRENT\nPASS documentation pack kickoffDocumentation is CURRENT\nPASS cron lifecycle register\nPASS cron lifecycle activate\nPASS cron lifecycle deactivate\nPASS cron lifecycle deregister returns module to available\n```\n\n## Troubleshooting quick map\n\n| Symptom | Most likely boundary |\n| --- | --- |\n| Axis recovery says BackOffice registry unavailable | Platform server is not reachable or Axis points at the wrong Platform URL. |\n| Login fails | Profile data was not imported, credentials changed, or Platform is using a different database. |\n| Documentation route shows CMS recovery | WCMS is down, documentation pack is not imported, or the documentation source is not registered. |\n| Import page says API category is disabled | API exposure defaults belong in owning modules; check whether the runtime disabled the category at server level. |\n| Cron does not appear | Cron server is not running or has not reported its functional module observation. |\n| Module action succeeds only after refresh | Axis query invalidation or backend response envelope needs review. |\n| Media schema discovery unavailable | WCMS/media runtime is not exposing the expected schema workbench contract. |\n\n## Acceptance sign-off\n\nThe local acceptance run is complete when:\n\n1. Platform, WCMS, Cron, and Axis are running.\n2. Fresh local databases were created from module-owned import data.\n3. Admin login works.\n4. Module registry shows mandatory modules and optional Cron correctly.\n5. Documentation products are visible.\n6. Content and media routes render the expected workspaces.\n7. `npm run acceptance:local:fresh` passes, or the manual equivalent plus\n   `AXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live`\n   passes.\n8. No repo in the three-repo set has uncommitted acceptance changes.\n\nWhen all eight are true, the modularized foundation is ready for the next\nfunctional module.\n",
      "previous": {
        "title": "Local runtime topology",
        "route": "/docs/nodics-kickoff/kickoff-local-runtime"
      },
      "next": {
        "title": "Customer customization guide",
        "route": "/docs/nodics-kickoff/kickoff-customization"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "data/core/source/documentation/pages/local-acceptance-checklist.md",
        "wordCount": 1801,
        "checksum": "5d30432a11e723efb6e5a6e4aeb8e35af0fca705d900ce46a26a8407ca73ccd9"
      }
    },
    "active": true
  },
  "record4": {
    "code": "kickoffDocsComponentkickoffCustomization",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "AUTHENTICATED",
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
          "text": "How a developer or AI tool should think",
          "anchor": "kickoffCustomization-2-how-a-developer-or-ai-tool-should-think",
          "level": 2
        },
        {
          "text": "File placement examples",
          "anchor": "kickoffCustomization-3-file-placement-examples",
          "level": 2
        },
        {
          "text": "Safe customization model",
          "anchor": "kickoffCustomization-4-safe-customization-model",
          "level": 2
        },
        {
          "text": "Two customization types",
          "anchor": "kickoffCustomization-5-two-customization-types",
          "level": 2
        },
        {
          "text": "Code-level customization",
          "anchor": "kickoffCustomization-6-code-level-customization",
          "level": 3
        },
        {
          "text": "Axis and WCMS customization",
          "anchor": "kickoffCustomization-7-axis-and-wcms-customization",
          "level": 3
        },
        {
          "text": "What not to customize in Kickoff",
          "anchor": "kickoffCustomization-8-what-not-to-customize-in-kickoff",
          "level": 2
        },
        {
          "text": "Extension example",
          "anchor": "kickoffCustomization-9-extension-example",
          "level": 2
        },
        {
          "text": "Documentation rule",
          "anchor": "kickoffCustomization-10-documentation-rule",
          "level": 2
        },
        {
          "text": "Step-by-step: add a small project module",
          "anchor": "kickoffCustomization-11-step-by-step-add-a-small-project-module",
          "level": 2
        },
        {
          "text": "Step-by-step: add project documentation",
          "anchor": "kickoffCustomization-12-step-by-step-add-project-documentation",
          "level": 2
        },
        {
          "text": "DevOps and rollback notes",
          "anchor": "kickoffCustomization-13-devops-and-rollback-notes",
          "level": 2
        },
        {
          "text": "Continue",
          "anchor": "kickoffCustomization-14-continue",
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
          "text": "How a developer or AI tool should think",
          "anchor": "kickoffCustomization-2-how-a-developer-or-ai-tool-should-think"
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
          "anchor": "kickoffCustomization-3-file-placement-examples"
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
          "text": "Safe customization model",
          "anchor": "kickoffCustomization-4-safe-customization-model"
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
          "anchor": "kickoffCustomization-5-two-customization-types"
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "Code-level customization",
          "anchor": "kickoffCustomization-6-code-level-customization"
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
          "anchor": "kickoffCustomization-7-axis-and-wcms-customization"
        },
        {
          "kind": "paragraph",
          "text": "Use governed frontend customization when an administrator changes content, labels, navigation, documentation, images, or page composition through Axis and WCMS. The browser renderer stays in `nodics.axis`; the content records live in the backend owner. For example, changing a demo site logo should become a governed WCMS, Media, or content update, not a hard-coded replacement inside the Axis source repository."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What not to customize in Kickoff",
          "anchor": "kickoffCustomization-8-what-not-to-customize-in-kickoff"
        },
        {
          "kind": "paragraph",
          "text": "Do not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not rename standard functional identities such as `nodics.platform` just because a customer extension customizes their behavior. Do not put backend-importable CMS data into the frontend repository. Do not place framework documentation in the customer project unless it is truly project-specific guidance."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Extension example",
          "anchor": "kickoffCustomization-9-extension-example"
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
          "anchor": "kickoffCustomization-10-documentation-rule"
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
          "anchor": "kickoffCustomization-11-step-by-step-add-a-small-project-module"
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
          "kind": "paragraph",
          "text": "Do not use this flow to move framework behavior into Kickoff. If the behavior belongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and implement it in the owning framework module instead."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Step-by-step: add project documentation",
          "anchor": "kickoffCustomization-12-step-by-step-add-project-documentation"
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
          "anchor": "kickoffCustomization-13-devops-and-rollback-notes"
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
          "text": "Continue",
          "anchor": "kickoffCustomization-14-continue"
        },
        {
          "kind": "unordered-list",
          "items": [
            "[Kickoff project overview](project-overview.md)",
            "[Local runtime topology](local-runtime.md)"
          ]
        }
      ],
      "searchText": "Customer customization guide Use Kickoff as a safe example for project modules, environment configuration, and customer overlays. # Customer Customization Guide\n\nKickoff is intentionally small. It should teach partners how to customize\nNodics safely without turning the reference project into another framework\nrepository.\n\nFor a beginner developer, the most important lesson is restraint. Do not start\nby editing framework files because they are easy to find. Start by asking who\nowns the behavior, whether configuration can solve the need, and which runtime\nserver should load the customization. That habit keeps the customer project\nupgradeable.\n\n## Why customization needs rules\n\nMost enterprise projects start with one urgent customer request. The quickest\nsolution is often to edit whatever file is easiest to find. That works for a\ndemo, but it becomes expensive when more customers, tenants, brands, modules,\nand releases arrive. Nodics customization rules keep the framework upgradeable\nand keep customer behavior visible in the customer project.\n\nThe rule is simple: customize in the most specific owner that needs the\nchange. Use configuration before code. Use a project module before editing a\nframework module. Use a later-loaded extension module before forking a standard\nfunctional module. Create a new functional module only when the business\ncapability is genuinely new.\n\n## How a developer or AI tool should think\n\nKickoff is a reference customer project, so every change teaches future\ncustomers what “good” looks like. A developer or AI tool should not behave like\na script that only edits the nearest file. It should behave like a small expert\nteam:\n\n| Role | What to check in Kickoff |\n| --- | --- |\n| Business analyst | Does this make the first-hour customer experience clearer, safer, or more convincing? |\n| Enterprise architect | Does the change preserve framework, customer project, runtime server, Axis, WCMS, Profile, and BackOffice ownership? |\n| Nodics framework expert | Is the behavior a project customization, a framework capability, a server topology decision, or generated content-pack output? |\n| Domain expert | Is the sample reusable enough for future commerce, workflow, content, integration, or industry-specific examples? |\n| Principal engineer | Can this be solved through configuration, project module overlay, generated documentation source, or a small exported function? |\n| QA and tester | Does the setup work from zero database state, repeated runs, missing services, and failed dependency resolution? |\n| TechOps/DevOps reviewer | Are framework paths, local databases, ports, logs, reset scope, and rollback behavior safe and understandable? |\n\nIf the answer is unclear, stop and name the ownership decision before editing.\nFor example, changing the local WCMS database name belongs in server\nconfiguration, while changing the import checksum rule belongs in the owning\nframework import service.\n\n## File placement examples\n\nUse these examples when deciding where code or data belongs:\n\n| Need | Correct owner | Why |\n| --- | --- | --- |\n| Change local Platform port | `envs/kickoffLocal/platformServer/config` | It is server topology, not framework behavior. |\n| Add a project-only service | `modules/<project-module>` | Customer behavior should load after framework modules. |\n| Explain Kickoff setup in Axis docs | `nodics.kickoff/data/core/source/documentation` | Kickoff owns project documentation that becomes CMS data. |\n| Change Axis renderer behavior | `nodics.axis` | Browser rendering is frontend code, not customer backend data. |\n| Change framework-wide import validation | `nodics.ai` owning module | Shared behavior belongs to the framework owner. |\n| Change generated CMS record text | Source Markdown, then regenerate | Generated files are projections and must not become manual authority. |\n\n## Safe customization model\n\nCustomer projects can add project modules under `modules/` and environment or\nserver contributions under `envs/`. These contributions load after standard\nNodics functional modules and can override or extend services through the\nnormal module merge process.\n\nSafe customizations include:\n\n- project-specific configuration;\n- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;\n- customer extension modules such as a future `kickoff.platform`;\n- environment-specific properties for local, testing, pre-production, and\n  production;\n- project-owned CMS documentation content packs;\n- sample data or initialization flows that belong to the customer project.\n\n## Two customization types\n\n### Code-level customization\n\nUse code-level customization when behavior changes: a service needs different\nlogic, a route needs a project-specific policy, a schema needs project fields,\nor an integration must call a customer system. Keep the implementation in a\nKickoff module or a customer extension module. Add tests next to the changed\nowner and document the boundary in the module README or documentation page.\n\nExample mental model:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nHere `kickoff.platform` can override or compose Platform services because it\nloads later. Axis and BackOffice should still show the functional capability as\nPlatform unless the customer intentionally exposes a new business capability.\n\n### Axis and WCMS customization\n\nUse governed frontend customization when an administrator changes content,\nlabels, navigation, documentation, images, or page composition through Axis\nand WCMS. The browser renderer stays in `nodics.axis`; the content records live\nin the backend owner. For example, changing a demo site logo should become a\ngoverned WCMS, Media, or content update, not a hard-coded replacement inside\nthe Axis source repository.\n\n## What not to customize in Kickoff\n\nDo not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not\nrename standard functional identities such as `nodics.platform` just because a\ncustomer extension customizes their behavior. Do not put backend-importable CMS\ndata into the frontend repository. Do not place framework documentation in the\ncustomer project unless it is truly project-specific guidance.\n\n## Extension example\n\nA customer may later create a module such as `kickoff.platform` to customize\nPlatform behavior. A Platform server could load:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nBackOffice and Axis should still present the functional capability as Platform\nunless the customer explicitly exposes a separate functional module. The\nextension changes implementation; it does not create a new product identity.\n\n## Documentation rule\n\nCustomer documentation follows the same ownership rule:\n\n- framework guidance goes to `nodics.docs`;\n- Axis product guidance goes to Platform `modules/axis`;\n- Kickoff/project guidance goes to `nodics.kickoff`;\n- browser rendering remains in `nodics.axis`.\n\nWhen Kickoff docs change, update the source page, bump the catalogue version if\nthe generated content changes, regenerate the pack, import it through WCMS, and\nverify the route in Axis.\n\n## Step-by-step: add a small project module\n\n1. Create or choose a module under `modules/`.\n2. Give the module a clear package identity and index so load order is\n   intentional.\n3. Add only project-owned services, data, configuration, or routes.\n4. Register the module in the relevant environment/server composition.\n5. Start the server and verify logs show the module loading after framework\n   modules.\n6. Add or update tests proving the project behavior.\n7. Update Kickoff documentation if the customization is part of the reference\n   journey.\n\nDo not use this flow to move framework behavior into Kickoff. If the behavior\nbelongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and\nimplement it in the owning framework module instead.\n\n## Step-by-step: add project documentation\n\n1. Add or update Markdown under\n   `data/core/source/documentation/pages/`.\n2. Update `data/core/source/documentation/catalogue.json`.\n3. Bump the catalogue version when generated content changes.\n4. Run `npm run docs:generate`.\n5. Run `npm run test:documentation`.\n6. Import or update the content pack through Axis.\n7. Open the generated `/docs/nodics-kickoff` route in Axis and verify\n   navigation, search, headings, and previous/next links.\n\n## DevOps and rollback notes\n\nProject customizations should be deployable and reversible. Keep project\nconfiguration separate from private secrets. Record which environment and\nserver a customization affects. If a release fails, rollback should remove or\ndisable the project layer without requiring a framework source rollback.\n\nOperators should be able to answer three questions during rollback: which\nproject module introduced the change, which server graph loaded it, and which\ncontent-pack or configuration version went live. If those answers are unclear,\nthe customization is not ready for a production environment.\n\nGenerated documentation and seed data should be versioned immutably. If content\nchanges with the same version, the import service should reject it so operators\ndo not silently install a different release under an already-trusted identity.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Local runtime topology](local-runtime.md)\n",
      "previous": {
        "title": "Local acceptance checklist",
        "route": "/docs/nodics-kickoff/kickoff-local-acceptance"
      },
      "next": null,
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "modules",
        "path": "data/core/source/documentation/pages/customization-guide.md",
        "wordCount": 1292,
        "checksum": "2febd5d0a232714d29f135e430ce95f2ed4660ec4b520afd222a69d09ce0bb9b"
      }
    },
    "active": true
  }
};
