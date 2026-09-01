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
          "code": "discover-kickoff",
          "title": "Discover Kickoff",
          "order": 10,
          "summary": "Project identity, ownership boundaries, and the business reason Kickoff exists as a reference customer workspace.",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "lifecycleState": "ONLINE"
        },
        {
          "code": "run-kickoff-locally",
          "title": "Run Kickoff Locally",
          "order": 20,
          "summary": "Local runtime topology, start sequence, acceptance checks, and developer/operator verification for the reference stack.",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "lifecycleState": "ONLINE"
        },
        {
          "code": "publish-and-qualify",
          "title": "Publish and Qualify",
          "order": 30,
          "summary": "Local publishing operations, deployment qualification evidence, recovery rules, and production-boundary discipline.",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "lifecycleState": "ONLINE"
        },
        {
          "code": "customize-customer-projects",
          "title": "Customize Customer Projects",
          "order": 40,
          "summary": "Project-layer customization examples, configuration-first decisions, documentation placement, and rollback-safe extension guidance.",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "lifecycleState": "ONLINE"
        },
        {
          "code": "functional-journeys",
          "title": "Functional Journeys",
          "order": 50,
          "summary": "Commerce, Engagement, provider, privacy, reversal, and operator journeys demonstrated by the reference customer project.",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "lifecycleState": "ONLINE"
        }
      ],
      "items": [
        {
          "code": "kickoff.overview",
          "title": "Kickoff project overview",
          "route": "/docs/nodics-kickoff",
          "section": "discover-kickoff",
          "sectionTitle": "Discover Kickoff",
          "sectionOrder": 10,
          "group": "project-identity-and-ownership",
          "groupTitle": "Project Identity and Ownership",
          "groupOrder": 10,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 10,
          "parentId": "nodics-kickoff",
          "hierarchyPath": [
            "Nodics Kickoff",
            "Discover Kickoff",
            "Kickoff project overview"
          ],
          "hierarchyDepth": 3,
          "documentType": "overview",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "businessAudience": [
            "business-user",
            "administrator",
            "operator"
          ],
          "technicalAudience": [
            "architect",
            "developer",
            "qa",
            "ai-tool"
          ],
          "summary": "Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs.",
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "allowedRoles": [],
          "allowedGroups": [],
          "allowedPermissions": [],
          "lifecycleState": "ONLINE",
          "maturityState": "operational",
          "implementationState": "current",
          "relatedPages": [
            "kickoff.local-runtime",
            "kickoff.customization",
            "kickoff.functional-journeys"
          ],
          "searchKeywords": [
            "kickoff",
            "reference project",
            "customer project",
            "documentation"
          ],
          "topicKeywords": [
            "ownership",
            "project boundary",
            "local adoption"
          ],
          "searchText": "Kickoff project overview Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs. # Kickoff Project Overview\n\nNodics Kickoff is the reference customer project for running Nodics locally and\ndemonstrating how a partner or customer project consumes the framework. It is\nnot a standard Nodics functional module such as Core, Platform, WCMS, or Cron.\nIt is a project-owned runtime composition that shows how those modules can be\nassembled without copying framework source.\n\nKickoff owns project structure, local environment wiring, project modules,\nsample customization points, and project documentation. Framework\ndocumentation belongs in `nodics.docs`; Axis product documentation belongs in\nthe Platform `axis` backend module; browser renderers belong in `nodics.axis`.\nKickoff-wide documentation source belongs in this repository under `docs/` and\nis generated into this repository's governed content pack. Documentation for a\nspecific installed application belongs under that application's data module,\nfor example `modules/nexus.web/docs/` or `modules/agora.apparel/docs/`.\n\n## Why Kickoff exists\n\nKickoff exists so a new team can feel Nodics before they design their own\nproject. A partner should be able to clone the framework, clone the reference\nproject, run a small set of commands, log in to Axis, and see the major backend\ncapabilities working together.\n\nThis matters because enterprise framework adoption usually fails at the first\nhour. If the first experience requires a developer to understand every module,\nevery dependency, every data import, and every environment property, the\nframework feels heavy even when the architecture is good. Kickoff keeps the\nfirst journey small: start the runtime, import governed seed data, open Axis,\nread the documentation, and then make one safe customization.\n\nFor a business evaluator, Kickoff demonstrates that Nodics can support a real\ncustomer project without asking the customer to fork framework code. For a\ndeveloper, it shows the concrete folder shape, package dependency model,\nenvironment wiring, server start commands, and project-owned extension points.\nFor an operator, it shows how one local project can run Platform, WCMS, and a\ncombined Business Process & Automation runtime while preserving the same module\nownership rules that production will use.\n\n## What a new customer should learn\n\nKickoff should answer the questions a new customer asks before trusting a\nframework:\n\n| Question | Kickoff answer |\n| --- | --- |\n| Can I run it locally without designing my full product first? | Yes. Kickoff provides ready local Platform, WCMS, Process and Automation, and Axis wiring. |\n| Do I have to edit framework source to customize? | No. Customer modules and server/environment configuration load after framework modules. |\n| Can documentation and content be imported like real governed data? | Yes. Kickoff ships a project-owned documentation content pack. |\n| Can optional modules be added later? | Yes. Process demonstrates observed optional runtime capability and registry lifecycle while exposing workflow and cronjob capabilities. |\n| Can accelerators be customized without changing framework code? | Yes. Waste Management loads `nodics.waste`, `eWaste`, and the `kickoffWaste` project overlay as separate layers. |\n| Can an accelerator be imported before its business capabilities are active? | No. The setup journey blocks it until required capabilities such as Commerce, Discovery, or Engagement are registered and active. |\n| Can my real project use a different folder layout? | Yes. `NODICS_FRAMEWORK_ROOT` points Kickoff to the framework checkout. |\n\nThis makes Kickoff more than a sample app. It is the adoption proof for the\nwhole framework.\n\n## Beginner mental model\n\nThink of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample\nproduction line, `nodics.exp` as the frontend workspace shelf, and Axis, Nexus,\nand Agora as separate customer-facing screens. The factory equipment provides\nstandard capabilities such as Core, Platform, WCMS, Media, Process, Commerce,\nand Engagement. The sample production line decides which equipment to\nconnect for a local demonstration. The screens connect to the running backend\nand show only the capabilities that the backend says are available and\nauthorized.\n\nKickoff is not the product every customer must ship. It is the smallest\ncomplete example of how a customer product can be structured.\n\n```mermaid\nflowchart LR\n  Framework[\"Framework equipment<br/>nodics.ai\"] --> Project[\"Reference production line<br/>nodics.kickoff\"]\n  Project --> Servers[\"Local runtime servers\"]\n  Servers --> Platform[\"Platform: login and BackOffice\"]\n  Servers --> WCMS[\"WCMS: content and docs\"]\n  Servers --> Automation[\"Process server: workflows and scheduled capability\"]\n  Servers --> Commerce[\"Commerce and Engagement\"]\n  UiWorkspace[\"Frontend workspace<br/>nodics.exp\"] --> Axis[\"BackOffice<br/>nodics.axis\"]\n  UiWorkspace --> Nexus[\"Corporate site<br/>nodics.nexus\"]\n  UiWorkspace --> Agora[\"Commerce storefront<br/>nodics.agora.apparel\"]\n  Axis --> Platform\n  Axis --> WCMS\n  Axis --> Automation\n  Nexus --> WCMS\n  Agora --> Commerce\n```\n\nThe metaphor is useful because it prevents a common mistake. You do not move\nfactory equipment into a frontend application, and you do not hardcode screens\ninto the production line. Each part has a job.\n\n## What Kickoff demonstrates\n\n- how a customer project depends on Nodics framework packages;\n- how environment and server modules load after standard functional modules;\n- how Platform, WCMS Staged, WCMS Online, Process and Automation, Engagement, and\n  Commerce can run as separate ownership domains while serving three frontends;\n- how Waste Management runs as a separate backend with framework, accelerator,\n  scenario, and project overlay layers;\n- how project modules can customize runtime behavior without renaming the\n  standard functional module identity;\n- how customer-owned documentation can appear in Axis beside Framework,\n  Swaggers, and Nodics Axis.\n\n## Source map\n\nThe important Kickoff locations are:\n\n- `package.json` describes the project package and local scripts;\n- `.env` describes developer-specific framework checkout location and local\n  overrides;\n- `package.json.name` declares the canonical stable project identity;\n- `nodics.project.json`, when present, declares only project-owned command or\n  acceptance overrides;\n- `package.json.nodics` declares human-readable project metadata;\n- `envs/<environment>/nodics.environment.json` declares environment domain\n  selections, topology, acceptance, and qualification profile facts;\n- `modules/*/data/manifest.json` declares module-owned data packs;\n- `envs/<environment>/*Server/package.json` declares the framework packages\n  required to bootstrap each runtime;\n- `config/` contains project-level defaults;\n- `envs/kickoffLocal/` contains local environment and server composition;\n- `modules/` contains project-owned modules and customization examples;\n- `docs/` contains authored Kickoff-wide documentation;\n- `data/core-v001/records/documentation/` and the documentation section in `data/manifest.json` are\n  generated content-pack outputs.\n\nAuthored documentation is the source. Generated records are the importable CMS\nprojection. Do not hand-edit generated records to fix documentation.\n\n## Runtime boundary\n\nKickoff is loaded after framework modules. That means it can contribute\nconfiguration, project modules, and project-owned documentation, but it must not\nmove framework behavior into the customer repository. A customer extension such\nas `kickoff.platform` may customize Platform implementation while the\nbusiness-facing functional identity remains `nodics.platform`.\n\nRuntime composition and code dependency are related but different. Package\ndependencies make framework modules available to the project. Server\nconfiguration decides which modules are loaded, in which order, for a specific\nruntime process. Service override behavior follows module loading and indexes,\nnot simply the order in `package.json`.\n\n```mermaid\nflowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.foundation\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.process\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsStagedServer, wcmsOnlineServer, processServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]\n```\n\nThis diagram is intentionally simple. Kickoff does not own the framework\nmodules and Axis does not own backend data. Kickoff composes the backend\nruntime, and Axis renders whatever Platform/WCMS say is active, authorized,\nand available.\n\n## First customization promise\n\nA beginner should be able to make a first safe customization without fear.\nGood first customizations are intentionally small:\n\n- change a local property in the correct environment or server file;\n- add or update a Kickoff documentation page;\n- add a project-only service in a Kickoff module;\n- add project sample data that belongs to the customer project;\n- change WCMS-managed content through Axis after import.\n\nBad first customizations are also easy to name:\n\n- editing `nodics.foundation` because a project-specific rule is needed;\n- putting CMS import data into `nodics.axis`;\n- changing generated files without changing their source;\n- changing a standard functional module identity because a project customized\n  implementation;\n- hiding a status, error code, permission, or lifecycle state in an unrelated\n  property file.\n\nKickoff exists to teach the safe path first.\n\n## Beginner story\n\nA new developer can think of Kickoff as a training project:\n\n1. It shows where a customer project keeps project modules.\n2. It shows where local environment/server configuration lives.\n3. It shows how to point at a framework checkout that may live anywhere on the\n   machine.\n4. It starts Platform, WCMS, and the composed Process and Automation runtime\n   without asking the developer to create a production topology first.\n5. It ships project-owned documentation so Axis can show framework docs,\n   Axis docs, and customer-project docs side by side.\n\nAfter the developer understands this reference shape, they can create a real\ncustomer project with the same rules but different business modules, branding,\ndata, environments, and deployment choices.\n\n## First successful setup journey\n\nOn a fresh schema, do not start by importing accelerator data in isolation.\nThe user journey is intentionally ordered so Axis, module lifecycle, content\npacks, and Online delivery all agree.\n\n```mermaid\nflowchart LR\n  Axis[\"Initialize Axis baseline\"]\n  Modules[\"Register required capabilities\"]\n  Apps[\"Initialize Nexus and Agora packs\"]\n  Publish[\"Approve and publish Online\"]\n  Storefront[\"Open Nexus or Agora\"]\n  Docs[\"Import documentation packs\"]\n  Swagger[\"Open Swagger/OpenAPI\"]\n\n  Axis --> Modules --> Apps --> Publish --> Storefront\n  Axis -. parallel .-> Docs\n  Axis -. generated .-> Swagger\n```\n\n| Step | What the user does in Axis | Why it comes here |\n| --- | --- | --- |\n| 1. Initialize Axis baseline | Complete the empty-database Axis setup so the managed BackOffice workspace, CMS baseline, and admin access are available. | Without Axis baseline, there is no reliable control plane for guided setup. |\n| 2. Register capabilities | Open Module Registry and register/activate the capabilities required by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when those features are enabled. | A running server or visible import pack is not enough. The project must declare the capability as registered and active. |\n| 3. Initialize applications | Open Setup and Accelerators and initialize Nexus, Agora Apparel, Agora Electronics, or Agora Telco. | Application initialization imports the complete site preparation package: CMS pages, routes, navigation, media metadata, media artifacts, commerce catalog data, and operational data owned by the pack. |\n| 4. Publish Online | Review publishable Staged changes, approve through the governed task, and publish to Online. | Public applications consume Online only. Until Online has approved content, they show a customer-friendly maintenance state. |\n| 5. Verify in browser | Open Nexus and Agora storefronts and confirm the expected Online content, media, navigation, and business data appear. | Browser verification proves the same path a customer sees, not only backend import success. |\n\nDocumentation packs follow the same Staged-to-Online governance, but they do\nnot block application setup. They can be imported and approved in parallel.\nSwagger/OpenAPI is generated from the active runtime contracts and should stay\navailable independently of CMS documentation publication.\n\n## Documentation boundary\n\nKickoff docs are imported through WCMS like any other governed CMS content\npack. Axis renders the resolved CMS page and does not own the documentation\nrecords. The BackOffice registry exposes the documentation source so the Axis\nDocumentation dashboard can discover it.\n\n## Common mistakes\n\n- Do not put framework documentation in Kickoff unless the page is explaining\n  how Kickoff consumes the framework.\n- Do not copy `nodics.foundation`, `nodics.platform`, `nodics.wcms`, or `nodics.process`\n  source into this repository.\n- Do not move Axis renderers or browser code into Kickoff.\n- Do not assume a customer project will always sit beside `nodics.ai`; use the\n  framework-root configuration.\n- Do not change generated content-pack files without regenerating from source.\n- Do not rename functional capabilities when a customer module only customizes\n  their implementation.\n\n## How to know Kickoff is working\n\nKickoff is healthy when Platform starts, WCMS starts, the module registry shows\nmandatory functional modules as active, optional modules can be registered\nthrough Axis, documentation content packs can be imported or updated through\nBackOffice/WCMS, Setup and Accelerators blocks applications whose required\nbusiness capabilities are not registered, and Axis can render Framework,\nSwaggers, Nodics Axis, and Nodics Kickoff documentation from backend-owned\nsources.\n\n## Verification\n\nVerify Kickoff as a reference customer project by proving that it can run the\nframework without becoming framework source. The local proof is to configure\nthe framework root, install dependencies, start the six backend runtimes plus\nAxis, Nexus, and Agora, log in, initialize the Axis baseline, register required\nbusiness capabilities, import required data releases, publish to Online, open\nthe Kickoff documentation product, and verify Agora's multi-domain storefront. The project\nshould contribute its own docs and sample behavior while framework docs still\ncome from `nodics.docs` and Axis product docs still come from the Platform Axis\nbackend module.\n\nFor repository verification, run the Kickoff documentation contract test,\nruntime prepare tests, and local acceptance script when project behavior,\nenvironment/server configuration, documentation packs, or generated data\nchange. If a future customer copies the reference project, the docs should\nteach them where to replace the project name and where not to create\nframework-level assumptions.\n\n## What to read next\n\nRead Kickoff in this order:\n\n1. **Local runtime topology** to understand which servers start and why.\n2. **Local acceptance checklist** to prove the environment from a fresh local\n   database.\n3. **Customer customization guide** to learn how to change behavior without\n   damaging framework ownership.\n4. Framework documentation for Core, Platform, WCMS, Cron, imports, and DevOps\n   once the local system is running.\n\n## Continue\n\n- [Local runtime topology](local-runtime.md)\n- [Customer customization guide](customization-guide.md)\n"
        },
        {
          "code": "kickoff.local-runtime",
          "title": "Local runtime topology",
          "route": "/docs/nodics-kickoff/kickoff-local-runtime",
          "section": "run-kickoff-locally",
          "sectionTitle": "Run Kickoff Locally",
          "sectionOrder": 20,
          "group": "runtime-topology",
          "groupTitle": "Runtime Topology",
          "groupOrder": 10,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 10,
          "parentId": "run-kickoff-locally",
          "hierarchyPath": [
            "Nodics Kickoff",
            "Run Kickoff Locally",
            "Local runtime topology"
          ],
          "hierarchyDepth": 3,
          "documentType": "operations",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "businessAudience": [
            "administrator",
            "operator"
          ],
          "technicalAudience": [
            "architect",
            "developer",
            "qa",
            "ai-tool"
          ],
          "summary": "Start and reason about the local Platform, WCMS, and Process servers that make the reference project usable.",
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "allowedRoles": [],
          "allowedGroups": [],
          "allowedPermissions": [],
          "lifecycleState": "ONLINE",
          "maturityState": "operational",
          "implementationState": "current",
          "relatedPages": [
            "kickoff.overview",
            "kickoff.local-acceptance",
            "kickoff.deployment-qualification"
          ],
          "searchKeywords": [
            "local runtime",
            "topology",
            "start",
            "servers"
          ],
          "topicKeywords": [
            "platform",
            "wcms",
            "process",
            "axis",
            "nexus",
            "agora"
          ],
          "searchText": "Local runtime topology Start and reason about the local Platform, WCMS, and Process servers that make the reference project usable. # Local Runtime Topology\n\nKickoff provides a local reference topology so a developer can start Nodics and\nsee the major runtime surfaces without creating a new customer project first.\nThe local environment is `kickoffLocal`.\n\n## What this is\n\nThe local runtime topology is the smallest practical Nodics deployment on a\ndeveloper machine. It runs the framework as real backend servers, not as mocked\nscreens. That is important because Axis, BackOffice, module registration,\ncontent-pack import, API contracts, authentication, and WCMS routing all depend\non backend authority.\n\nThe goal is not to teach every production option on day one. The goal is to\ngive a beginner a reliable local loop: configure framework location, install\ndependencies, start servers, log in, import/update data, and observe the\nruntime from Axis.\n\n| Runtime part | Business purpose | Developer/operator responsibility |\n| --- | --- | --- |\n| Platform | Employee login, BackOffice bootstrap, module registry, and API discovery | Start first, verify Profile and BackOffice are reachable, and keep tokens out of logs |\n| WCMS Staged and Online | Governed content, media, documentation, and public delivery | Keep Staged authoring separate from Online delivery and import content packs through governance |\n| Process and Automation | Workflow, cronjob, scheduled capability, and recovery evidence | Start when process or scheduled behavior is being tested and avoid duplicate scheduler authority |\n| Waste Management | Generic waste submission, collection acceptance, verification, receipt, impact, and accelerator/project presets | Keep Waste separate from Loyalty and Location, and load project overlays after scenario accelerator data |\n| Axis | Employee control plane for setup, import, documentation, and operations | Point to the correct Platform URL and verify only authorized capabilities appear |\n| Nexus and Agora accelerators | Public/customer-facing proof of Online delivery | Consume Online and customer-safe APIs only, never Staged or internal operations |\n\n## Servers\n\nThe current local topology uses separate runtime servers:\n\n- `platformServer` starts the Platform runtime. It loads Core, Platform,\n  Profile, BackOffice, the Platform `axis` backend module, and Kickoff project\n  modules.\n- `wcmsStagedServer` starts the WCMS Staged runtime. It loads Core, WCMS, CMS,\n  Media, and Kickoff content-pack modules for authoring, import, review, and\n  publication-source behavior.\n- `wcmsOnlineServer` starts the WCMS Online runtime. It loads the approved\n  delivery boundary for public CMS, media, Nexus, and Agora consumption.\n- `processServer` starts the combined Business Process & Automation runtime.\n  It loads Core, Process, cronjob, workflow modules, and Kickoff project\n  modules. The `workflow` module owns process/workflow definitions; the\n  `cronjob` module owns job definitions, triggers, scheduler state, and\n  execution lifecycle.\n- `wasteServer` starts the isolated Waste Management runtime. It loads\n  `nodics.waste`, the Waste accelerator umbrella, `eWaste`, and the\n  project-owned `kickoffWaste` overlay while keeping Loyalty, Location, vendor,\n  recycler, and logistics integrations in their owning layers.\n\nKickoff intentionally has no standalone cronjob server. Scheduled automation is\navailable only through `processServer`, preventing accidental duplicate\nscheduler processes while cronjob retains ownership of its job lifecycle.\n\nAxis, Nexus, and Agora are separate frontend applications grouped locally by\nthe optional `nodics.exp` workspace. `nodics.exp` owns frontend discovery and\ntooling only; each application still owns its own source, release, tests, and\nruntime behavior. Axis connects to Platform for employee authentication and\nBackOffice bootstrap. Nexus consumes WCMS Online and Engagement public delivery\ncontracts. Agora consumes Platform, WCMS Online, Engagement, and Commerce\ncustomer contracts.\n\n## Start locally\n\nUse separate terminals from the Kickoff repository:\n\n```bash\nnpm run start:platform\nnpm run start:wcms:staged\nnpm run start:wcms:online\nnpm run start:process\n```\n\nThe governed supervisor starts all three frontends with the nine backends:\n\n```bash\nnpm run topology:start:all\n```\n\nIn the preferred local checkout, frontend applications live under\n`../nodics.exp/`:\n\n```text\nnodicsRoot/\n├── nodics.ai/\n├── nodics.kickoff/\n└── nodics.exp/\n    ├── nodics.axis/\n    ├── nodics.nexus/\n    └── nodics.agora.apparel/\n```\n\nIf a developer keeps the frontend apps somewhere else, set the explicit root\nenvironment variables used by the relevant script, for example\n`NODICS_AXIS_ROOT` for Axis smoke and `NODICS_QUALIFICATION_AXIS_ROOT`,\n`NODICS_QUALIFICATION_NEXUS_ROOT`, and `NODICS_QUALIFICATION_AGORA_ROOT` for\ndeployment qualification evidence.\n\nThe default local ports are:\n\n- Axis: `http://localhost:3100`\n- Nexus: `http://localhost:3200`\n- Agora: `http://localhost:3300`\n- Platform: `http://localhost:4300`\n- WCMS Staged: `http://localhost:4312`\n- WCMS Online: `http://localhost:4314`\n- Process and Automation: `http://localhost:4330`\n- Engagement: `http://localhost:4340`\n- Commerce: `http://localhost:4350`\n- Waste Management: `http://localhost:4370`\n\n## Before starting\n\nFrom `nodics.kickoff`, copy and review local environment configuration:\n\n```bash\ncp .env.example .env\n```\n\nSet the framework checkout location:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nThe path may be absolute or relative to the Kickoff project root. This avoids a\nhard dependency on a fixed workspace layout. One developer may keep framework\ncode beside Kickoff; another may keep it in a different projects directory.\n\nThen install project dependencies:\n\n```bash\nnpm install\n```\n\nKickoff does not copy or symlink framework modules into `.nodics/`. Project\nscripts call `scripts/nodics-project.js`, which reads `.env`, locates\n`nodics.ai`, and delegates lifecycle/startup work to framework-owned tooling.\n\n## Start sequence\n\nUse separate terminals so logs stay readable:\n\n1. Start Platform first. It owns Profile login, BackOffice bootstrap, module\n   registry, runtime catalogue projection, and OpenAPI contract discovery.\n2. Start WCMS second. It owns documentation sites, catalogs, pages, components,\n   routes, media metadata, and content delivery.\n3. Start Process and Automation when process/workflow or scheduled behavior is\n   needed. It proves `workflow` and `cronjob` can share one runtime environment\n   under `nodics.process` while keeping separate module ownership.\n4. Start Waste Management when waste submission, acceptance, receipt, impact,\n   or Waste accelerator data is being tested. Its local initialization profile\n   installs `eWaste:core-reference` followed by\n   `kickoffWaste:project-reference`.\n5. Start Axis, Nexus, and Agora after backend servers are reachable. Each\n   frontend uses only its governed backend contracts and configured CORS origin.\n\n## Login and first checks\n\nOpen Axis at `http://localhost:3100`. For the local reference data, use:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nAfter login:\n\n- open the System and Integrations area and check the module registry;\n- confirm Core, Platform, and WCMS are active and not treated as optional;\n- register and activate required business capabilities before initializing a\n  customer-facing application: Agora requires Commerce and Discovery; Nexus\n  requires its public content and engagement capabilities when those features\n  are enabled;\n- if Process and Automation is running, confirm Process appears from the\n  composed runtime and exposes both `workflow` and `cronjob` capabilities;\n- open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics\n  Kickoff are shown as separate documentation products;\n- import or update documentation packs only through the authorized Axis action.\n\n## Fresh environment setup order\n\nA fresh local schema is ready only after four governed lanes are complete.\nDo not treat a successful import button as proof that a storefront is ready;\nthe setup page must also show required capabilities, publication state, and\nOnline readiness.\n\n| Order | Axis workspace | What must happen | User-visible result |\n| ---: | --- | --- | --- |\n| 1 | Empty-database Axis setup | Initialize the managed Axis baseline, BackOffice workspace, CMS baseline, admin access, and required core data. | Axis leaves recovery mode and exposes authorized navigation. |\n| 2 | Module Registry | Register and activate functional capabilities needed by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when enabled. | Setup and Accelerators no longer shows a capability-blocked state for that application. |\n| 3 | Setup and Accelerators | Initialize Nexus or Agora application packs. A complete pack imports CMS content, routes, navigation, media metadata, media artifacts, commerce data, search/discovery data, and operational data owned by that application. | The application row shows initialized Staged data and the next publishing action. |\n| 4 | Publishing and approval | Request approval, review evidence, approve or reject, and publish the approved release to Online. | Nexus and Agora can render Online content; otherwise they show the maintenance page. |\n\nDocumentation packs are independent from accelerator setup. Framework, Axis,\nand Kickoff documentation can be imported, reviewed, and published in parallel\nwith application setup. Swagger/OpenAPI is generated from active runtime\ncontracts and should not be hidden behind documentation content-pack approval.\n\n## Documentation import\n\nProject documentation is generated into a Kickoff content pack and imported\nthrough WCMS. The pack code is `kickoffDocumentation`; the CMS Site is\n`kickoffDocumentationSite`; the default route is `/docs/nodics-kickoff`.\n\nIf the documentation page is unavailable in Axis, check that WCMS is running,\nthe content pack is generated, and the latest pack version has been imported.\nThe content-pack service rejects changed content with the same immutable\nversion, so update the catalogue version whenever generated hashes change.\n\n## Troubleshooting\n\nIf Axis shows a BackOffice registry recovery page, Platform is not reachable,\nthe Platform port is wrong, or Axis public configuration points at the wrong\nbase URL. If Axis logs in but documentation routes show CMS recovery, WCMS may\nnot be running, the documentation source may not be registered, or the content\npack may not be imported. If an optional module appears only after refresh,\ncheck the module registry API response after each lifecycle operation before\nassuming the frontend state is wrong.\n\nIf Nodics scripts cannot locate framework packages, check `NODICS_FRAMEWORK_ROOT`\nand confirm the configured directory contains `nodics.foundation`,\n`nodics.platform`, `nodics.wcms`, and any optional framework modules used by the\nlocal server.\n\n## Production note\n\nThe local topology teaches ownership, not final infrastructure. Production may\nrun modules in separate processes, hosts, containers, or release units. That\ndoes not change documentation ownership, module identity, API authority, or the\nrule that Axis discovers runtime capability from BackOffice instead of keeping\nits own endpoint registry.\n\n## Common mistakes\n\n- Starting only the frontend and assuming backend discovery should work.\n- Putting long inherited property blocks into a server config when the project\n  only needs a small override.\n- Assuming every framework module in the checkout is active for every server.\n  The configured runtime graph decides what loads.\n- Treating Cron as owned by Process just because the reference workspace can\n  run both in the same `processServer`.\n- Using local ports, database names, or project names as permanent framework\n  assumptions.\n- Forgetting that restart should preserve persisted registry and imported\n  content state.\n\n## Verification\n\nUse these focused checks when changing Waste composition:\n\n```bash\nnpm run test:waste-overlay\nnpm run test:waste-runtime\nnpm run acceptance:waste-management\n```\n\n`test:waste-overlay` proves the project-owned `kickoffWaste` data overlay\ncontract. `test:waste-runtime` proves the server composition, initialization\nprofile, and active modules. `acceptance:waste-management` installs the\nschema-driven accelerator and project releases, validates persisted records,\nand runs the generic acceptance, submission, lifecycle, and impact journey.\n\nThe final pre-Builder gate must use a fresh Local database and qualify all nine\nruntimes together: Platform, WCMS Staged, WCMS Online, Process, Engagement,\nCommerce, Waste Management, Axis, Nexus, and Agora. Verify the topology from\nthe customer project, not from framework internals. Platform should expose login,\nBackOffice bootstrap, registry, and API discovery. WCMS should expose content,\ndocumentation, media, and import/export delivery. Process and Automation should\nreport Process runtime availability with workflow and cronjob technical modules\nfrom the composed server.\nAxis should connect through Platform and WCMS instead of local hardcoded module\nstate.\n\nFor a beginner-friendly proof, open Axis after the servers start and inspect\nDashboard, System and Integrations, Module Registry, Imports and Exports,\nContent and Experience, Media, Business Process & Automation, and\nDocumentation. The UI should explain the same topology that the server\nconfiguration declares.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Customer customization guide](customization-guide.md)\n"
        },
        {
          "code": "kickoff.local-setup-to-live",
          "title": "Local setup to live runbook",
          "route": "/docs/nodics-kickoff/kickoff-local-setup-to-live",
          "section": "run-kickoff-locally",
          "sectionTitle": "Run Kickoff Locally",
          "sectionOrder": 20,
          "group": "runtime-topology",
          "groupTitle": "Runtime Topology",
          "groupOrder": 10,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 15,
          "parentId": "run-kickoff-locally",
          "hierarchyPath": [
            "Nodics Kickoff",
            "Run Kickoff Locally",
            "Local setup to live runbook"
          ],
          "hierarchyDepth": 3,
          "documentType": "how-to",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "businessAudience": [
            "business-user",
            "administrator",
            "operator"
          ],
          "technicalAudience": [
            "architect",
            "developer",
            "qa",
            "ai-tool"
          ],
          "summary": "Follow the screenshot-guided path from local startup to Axis login, guided setup, publication, and live Nexus and Agora verification.",
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "allowedRoles": [],
          "allowedGroups": [],
          "allowedPermissions": [],
          "lifecycleState": "ONLINE",
          "maturityState": "operational",
          "implementationState": "current",
          "relatedPages": [
            "kickoff.local-runtime",
            "kickoff.local-acceptance",
            "kickoff.local-publishing-operations"
          ],
          "searchKeywords": [
            "local setup",
            "axis login",
            "guided setup",
            "live verification",
            "screenshots"
          ],
          "topicKeywords": [
            "axis",
            "module registry",
            "data import",
            "publishing",
            "nexus",
            "agora"
          ],
          "searchText": "Local setup to live runbook Follow the screenshot-guided path from local startup to Axis login, guided setup, publication, and live Nexus and Agora verification. # Local Setup to Live Runbook\n\nThis runbook is the new-user golden path for making the Nodics reference stack\nlive on a developer machine. It starts from a local checkout, opens Axis, signs\nin, follows the guided setup workspaces, publishes governed data to Online, and\nverifies Nexus and Agora in the browser.\n\nThe normal-path screenshots show the current local reference UI. The\nfirst-launch screenshots document the bundled recovery path from the current\nAxis component contract because this captured environment already had Axis\nbaseline data. Recapture those first-launch images from a clean schema during\nthe next fresh acceptance run.\n\nFor beginners, the safe mental model is: start the stack, sign in to Axis,\nfollow the highlighted backend-owned setup cards, approve publication, then\nopen the public applications. Business users should read the status and next\naction on each screen. Developers should use the file paths and commands when a\nstatus points to a configuration, release, or module problem. Operators should\nkeep the command output, screenshots, and browser checks as setup evidence.\n\n## What live means\n\nIn Nodics, live does not mean that a frontend server is running. A local setup\nis live when these conditions are true:\n\n| Area | Live condition |\n| --- | --- |\n| Backend topology | Platform, WCMS Staged, WCMS Online, Process, Engagement, Commerce, Axis, Nexus, and Agora are reachable on their local ports. |\n| Axis control plane | The admin can sign in and the dashboard shows runtime, module, release, publishing, and application readiness. |\n| Module foundation | Required modules are registered and active through backend-owned registry contracts. |\n| Release data | Init, core, and sample releases are current or intentionally skipped by policy. |\n| Application packs | Nexus and Agora accelerator packs have prepared Staged content and any required Commerce data. |\n| Publication | Publishable content has moved from Staged to Online through approval and audit evidence. |\n| Public verification | Nexus and Agora render Online content, navigation, media, and business data from backend contracts. |\n\n## Repository layout\n\nUse the reference layout unless your project already documents another one:\n\n```text\nnodicsRoot/\n  nodics.ai/\n  nodics.kickoff/\n  nodics.exp/\n    nodics.axis/\n    nodics.nexus/\n    nodics.agora.apparel/\n```\n\n`nodics.ai` is the framework checkout. `nodics.kickoff` is the reference\ncustomer project and owns the local runtime composition. `nodics.exp` groups\nfrontend applications. Axis is the employee BackOffice, Nexus is the corporate\nsite, and Agora is the commerce storefront.\n\n## Prepare the project\n\nRun the first setup from `nodics.kickoff`:\n\n```bash\ncp .env.example .env\nnpm install\nnpm run nodics:project:validate\n```\n\nReview `nodics.kickoff/.env` and confirm the framework root:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nRun frontend setup from each frontend repository that will be opened:\n\n```bash\ncd ../nodics.exp/nodics.axis\ncp .env.example .env\nnpm install\n```\n\nRepeat dependency installation for Nexus and Agora when their local\nrepositories have not been installed yet.\n\n## Start the local stack\n\nFrom `nodics.kickoff`, start the full local stack:\n\n```bash\nnpm run topology:start:all\n```\n\nThis starts backend runtimes and frontends in dependency-aware order. Use this\ncommand when a new user wants to see the whole product work together.\n\nUse this command from another terminal to inspect status:\n\n```bash\nnpm run topology:status\n```\n\nThe expected local URLs are:\n\n| Surface | URL | Purpose |\n| --- | --- | --- |\n| Axis | `http://localhost:3100` | Employee setup and operations workspace. |\n| Nexus | `http://localhost:3200` | Public corporate site using Online content. |\n| Agora Apparel | `http://localhost:3300` | Public storefront using Online content and Commerce data. |\n| Platform | `http://localhost:4300` | Profile, BackOffice, registry, and bootstrap authority. |\n| WCMS Online | `http://localhost:4314` | Online public content runtime. |\n| Process | `http://localhost:4330` | Workflow, approval, and automation runtime. |\n| WCMS Staged | `http://localhost:4312` | Staged content authoring and import runtime. |\n| Engagement | `http://localhost:4340` | Contact, review, feedback, and communication runtime. |\n| Commerce | `http://localhost:4350` | Operational Commerce runtime. |\n| Commerce Staged | `http://localhost:4352` | Staged Commerce catalog and storefront preparation runtime. |\n\nStop only the topology owned by this checkout:\n\n```bash\nnpm run topology:stop\n```\n\n## First launch before Axis data exists\n\nOn a fresh schema, Axis may not show the managed CMS login immediately. This is\nexpected. Axis first falls back to a small bundled recovery login whose only\njob is to authenticate the bootstrap operator and move the managed Axis\nbaseline through the governed release flow.\n\n![Axis first-launch recovery login](../assets/images/local-setup/axis-first-launch-recovery-login.jpg \"Axis first-launch recovery login\")\n\nUse the local reference admin account:\n\n```text\nUsername: admin\nPassword: adminPassword\n```\n\nAfter login, if the Axis baseline is not Online yet, Axis opens the\ninitialization workspace instead of the normal dashboard.\n\n![Axis first-launch initialization](../assets/images/local-setup/axis-first-launch-initialize.jpg \"Axis first-launch initialization\")\n\nFollow this first-run path:\n\n1. Confirm the release chip points to the Axis baseline release.\n2. Click **Initialize and submit** to import the baseline into Staged and submit\n   the governed publication request.\n3. Click **Refresh status** until the workspace shows the approval-ready state.\n4. Open the publication details or Process approval task and review the release\n   checksum, entity counts, validation status, target site, catalog, workflow\n   reference, impact, and recovery guidance.\n5. Approve the publication so the managed Axis CMS baseline becomes Online.\n6. Refresh or reopen Axis and verify that the bundled recovery workspace has\n   retired.\n\nDo not skip this by writing Axis data directly to Online. The first launch\nstill follows the same Staged, Process approval, Online publication, and audit\nprinciples as other governed content.\n\n## Open Axis\n\nOpen Axis:\n\n```text\nhttp://localhost:3100\n```\n\nAfter the first-launch baseline is Online, or when the schema already has Axis\ndata, the first screen should be the managed employee login page.\n\n![Axis login](../assets/images/local-setup/axis-entry.jpg \"Axis login\")\n\nUse the local reference admin account:\n\n```text\nUsername: admin\nPassword: adminPassword\n```\n\nAfter login, Axis should land on the dashboard.\n\n![Axis dashboard](../assets/images/local-setup/axis-dashboard.jpg \"Axis dashboard\")\n\nUse the dashboard as the operator map:\n\n| Dashboard area | What to check |\n| --- | --- |\n| Next actions | Shows whether the next step is registry, data import, publication, or application verification. |\n| Application overview | Shows active modules, data readiness, Online-ready sources, routes, workbenches, and tenant. |\n| Release and publication cards | Show whether data is current, pending, blocked, or waiting for approval. |\n| Application cards | Show whether Nexus and Agora are Online-ready or still blocked. |\n\n## Register and activate modules\n\nOpen **System and Integrations -> Module Registry**, or navigate directly:\n\n```text\nhttp://localhost:3100/registry\n```\n\n![Module Registry](../assets/images/local-setup/module-registry.jpg \"Module Registry\")\n\nThe registry is not only a visual list. It is the backend-owned activation\nsurface for functional capabilities. A capability should be registered and\nactive before importing an application pack that depends on it.\n\nCheck these states:\n\n| Capability group | Expected local result |\n| --- | --- |\n| Core, Platform, WCMS | Registered and active. These are the foundation. |\n| Process and Automation | Active when workflow, approval, and cronjob behavior is needed. |\n| Commerce and Discovery | Active before Agora catalog and product search setup. |\n| Engagement | Active before contact, review, feedback, or communication journeys are verified. |\n\nIf an accelerator says setup is blocked, return to Module Registry and activate\nthe missing capability instead of forcing import data manually.\n\n## Install release data\n\nOpen **System and Integrations -> Import and Export Workspace**, or navigate\ndirectly:\n\n```text\nhttp://localhost:3100/operations/imports-exports\n```\n\n![Imports and exports](../assets/images/local-setup/imports-and-exports.jpg \"Imports and exports\")\n\nStart with **Guided setup**. Guided profiles are declared by backend runtimes\nunder `data.dataReleases.initializationProfiles`; Axis discovers and renders\nthem. Axis must not invent data authority or silently combine release lists.\n\nUse this order:\n\n| Guided profile | Why it matters |\n| --- | --- |\n| Local Platform foundation | Prepares login, profile, catalog, authorization, localization, and BackOffice data. |\n| Local WCMS foundation | Prepares Staged content runtime, CMS baseline, and publication preparation. |\n| Local Documentation foundation | Prepares WCMS prerequisites before documentation content packs are reviewed and published. |\n| Local Commerce foundation | Prepares operational Commerce services. |\n| Local Commerce Staged catalog foundation | Prepares Agora catalog, product, price, inventory, and search preview data. |\n| Local Process and Workflow foundation | Prepares approval and workflow definitions. |\n| Local Engagement foundation | Prepares communication and customer interaction data. |\n\nFor each profile:\n\n1. Read the label and description.\n2. Review the step list and release counts.\n3. Click **Validate plan**.\n4. If validation passes and releases are not current, click **Validate and initialize**.\n5. Refresh the workspace and confirm the profile becomes `CURRENT` or shows a\n   clear operator-friendly blocker.\n\nUse **Initialization data**, **Core data**, and **Sample data** only when an\nadministrator needs advanced release-level control.\n\n## Initialize applications\n\nOpen **Publishing -> Setup and Accelerators**, or navigate directly:\n\n```text\nhttp://localhost:3100/setup-accelerators\n```\n\n![Setup and Accelerators](../assets/images/local-setup/setup-accelerators.jpg \"Setup and Accelerators\")\n\nThis page prepares project accelerators such as Nexus and Agora. It should\nshow friendly status instead of raw technical exceptions.\n\n| Status | Meaning |\n| --- | --- |\n| Setup blocked | A required capability, content catalog, communication, or data foundation is missing. Fix the blocker first. |\n| Ready to initialize | Required capabilities are active and the pack can be prepared. |\n| Staged current | Staged data is installed at the expected version and checksum. |\n| Pending approval | Staged data is ready but not yet Online. |\n| Online ready | Online publication is available and public apps can render it. |\n\nInitialize Nexus and Agora only after their blockers are resolved. A complete\napplication pack may prepare CMS pages, routes, navigation, media records,\nphysical media artifacts, Commerce catalog data, search/discovery data, and\noperational data owned by that application.\n\n## Approve and publish\n\nOpen the approval queue:\n\n```text\nhttp://localhost:3100/process/tasks\n```\n\n![Process approval queue](../assets/images/local-setup/process-approval-queue.jpg \"Process approval queue\")\n\nReview the publication evidence before approving. Approval should explain what\nwill be visible Online, which source release is involved, and what rollback\nmeans if activation fails.\n\nOpen the Publishing dashboard:\n\n```text\nhttp://localhost:3100/publishing\n```\n\n![Publishing dashboard](../assets/images/local-setup/publishing.jpg \"Publishing dashboard\")\n\nPublishing is the only path from Staged content to Online content. Do not\nwrite directly into Online schema or Online media storage. If publication is\nblocked, fix the Staged data, approval task, workflow configuration, media\ndependency, or Online runtime readiness that the page reports.\n\n## Publish documentation\n\nOpen Documentation:\n\n```text\nhttp://localhost:3100/docs\n```\n\n![Documentation dashboard](../assets/images/local-setup/documentation-dashboard.jpg \"Documentation dashboard\")\n\nFramework, Axis, and Kickoff documentation are governed content packs. Import\nand approve them through Axis and Process. They should flow from Staged to\nOnline like other publishable content.\n\nOpen Swagger/OpenAPI:\n\n```text\nhttp://localhost:3100/docs/swaggers\n```\n\n![Swagger reference](../assets/images/local-setup/swagger-reference.jpg \"Swagger reference\")\n\nSwagger is different from documentation content packs. It is generated from\nlive runtime API contracts and should remain accessible when API sources are\navailable, even if documentation publication is still waiting for approval.\n\n## Verify Nexus\n\nOpen Nexus:\n\n```text\nhttp://localhost:3200\n```\n\n![Nexus Online](../assets/images/local-setup/nexus-online.jpg \"Nexus Online\")\n\nVerify:\n\n| Area | Evidence |\n| --- | --- |\n| Header and navigation | Links come from Online content and route contracts. |\n| Hero and content sections | Text, images, and components render from published content. |\n| Documentation links | Documentation routes open only when their packs are Online or intentionally available. |\n| No maintenance fallback | The app should not show setup or unpublished-content fallback after Online publication succeeds. |\n\n## Verify Agora Apparel\n\nOpen Agora:\n\n```text\nhttp://localhost:3300\n```\n\n![Agora Apparel Online](../assets/images/local-setup/agora-apparel-online.jpg \"Agora Apparel Online\")\n\nVerify:\n\n| Area | Evidence |\n| --- | --- |\n| Storefront home | Banner, category, and merchandising content render from Online/Staged-approved sources. |\n| Product catalog | Product, category, price, inventory, and image data are present. |\n| Search and discovery | Product search and filters return meaningful results. |\n| Media | Product and CMS images load through the media contract, not hardcoded frontend paths. |\n\n## Troubleshooting checkpoints\n\n| Symptom | Likely cause | Where to fix |\n| --- | --- | --- |\n| Axis login page does not open | Axis frontend is not running or `3100` is occupied. | Run `npm run topology:status`, then restart the owned topology. |\n| Bundled recovery login appears every time | The managed Axis baseline is not Online, publication was not approved, or the CMS route did not load. | Use the first-launch initialization workspace, then check Process approval and WCMS Online readiness. |\n| Initialize Axis stays approval pending | The baseline import finished, but the governed Process task has not been approved or published. | Open `/process/tasks`, review the task, approve it, then refresh Axis. |\n| Login fails for local admin | Platform/Profile is unavailable or seed data is missing. | Check Platform server logs and guided Platform foundation data. |\n| Dashboard shows few modules | Module Registry has not activated optional capabilities. | Open `/registry` and activate required capabilities. |\n| Guided setup shows only one profile after config changes | Servers are still running old runtime configuration. | Restart the local topology and reload Axis. |\n| Accelerator setup is blocked | A required capability, catalog, communication, or release dependency is missing. | Read the friendly blocker, then fix registry or release data. |\n| Approval queue is empty | The pack is not initialized, workflow data is missing, or the task is already processed. | Check Setup and Accelerators, Process foundation, and Publishing dashboard. |\n| Nexus or Agora shows fallback content | Staged data was not approved/published to Online. | Publish through Process and verify WCMS Online readiness. |\n| Images are broken | Physical media assets did not import or publish with media records. | Check media import evidence, asset manifest, and Online media publication. |\n\n## Screenshot maintenance rule\n\nScreenshots are part of the onboarding contract. When the first-launch\nrecovery login, Initialize Axis workspace, managed login page, dashboard,\nregistry, imports, setup, publishing, documentation, Nexus, or Agora journey\nchanges materially, update the matching image under:\n\n```text\ndocs/assets/images/local-setup/\n```\n\nThen regenerate and validate the Kickoff documentation content pack:\n\n```bash\nnpm run docs:generate\nnpm run docs:check\n```\n\nKeep screenshots focused on decision points. Do not add decorative images that\nhide the actual operator action, backend state, or public verification result.\n\n## Common mistakes\n\nAvoid these mistakes during a first local setup:\n\n- Opening Nexus or Agora first and assuming a running frontend means Online\n  data has been published.\n- Importing sample data before the required module capability is registered and\n  active.\n- Treating Axis as the data authority. Axis renders backend-owned profiles,\n  releases, approvals, and actions.\n- Restarting only the frontend after changing backend runtime profile\n  configuration.\n- Approving publication before reviewing the Staged source, version, media, and\n  target Online role.\n- Fixing broken images in the frontend instead of checking media import,\n  physical asset staging, media records, and Online media publication.\n- Hand-editing generated documentation records instead of changing the authored\n  markdown and regenerating the content pack.\n\n## Verification\n\nRun these commands after changing this guide, screenshots, catalogue metadata,\nor setup behavior:\n\n```bash\nnpm run docs:generate\nnpm run docs:check\nnpm run nodics:project:validate\n```\n\nWhen setup behavior changes, also run the guided initialization and local\nqualification contracts:\n\n```bash\nnpm run acceptance:guided-initialization\nnpm run test:qualification\n```\n\nBrowser verification should include the first-launch recovery login and\nInitialize Axis workspace on a fresh schema, then managed Axis login,\ndashboard, Module Registry, Imports and Exports, Setup and Accelerators,\nProcess approval queue, Publishing, Documentation, Swagger, Nexus, and Agora.\nCapture new screenshots when any of those screens changes materially.\n\n## Final proof\n\nA new user can call the local setup complete only after this evidence exists:\n\n1. `npm run topology:status` shows the owned local runtimes are reachable.\n2. On a fresh schema, bundled Axis recovery login opens and the Initialize Axis\n   workspace can submit the baseline.\n3. After baseline approval, managed Axis login works with the local admin.\n4. Dashboard, Module Registry, Imports and Exports, Setup and Accelerators,\n   Process tasks, Publishing, Documentation, and Swagger pages open.\n5. Required modules are active.\n6. Guided setup profiles are current or have a clear blocker.\n7. Application packs are Staged current or Online ready.\n8. Publication approvals have been processed.\n9. Nexus and Agora render public Online experiences in the browser.\n10. Media images load on public pages.\n11. Any remaining blocker has a friendly operator message and a developer owner.\n"
        },
        {
          "code": "kickoff.local-acceptance",
          "title": "Local acceptance checklist",
          "route": "/docs/nodics-kickoff/kickoff-local-acceptance",
          "section": "run-kickoff-locally",
          "sectionTitle": "Run Kickoff Locally",
          "sectionOrder": 20,
          "group": "acceptance-and-verification",
          "groupTitle": "Acceptance and Verification",
          "groupOrder": 20,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 20,
          "parentId": "run-kickoff-locally",
          "hierarchyPath": [
            "Nodics Kickoff",
            "Run Kickoff Locally",
            "Local acceptance checklist"
          ],
          "hierarchyDepth": 3,
          "documentType": "operations",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "businessAudience": [
            "business-user",
            "administrator",
            "operator"
          ],
          "technicalAudience": [
            "architect",
            "developer",
            "qa",
            "ai-tool"
          ],
          "summary": "Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior.",
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "allowedRoles": [],
          "allowedGroups": [],
          "allowedPermissions": [],
          "lifecycleState": "ONLINE",
          "maturityState": "operational",
          "implementationState": "current",
          "relatedPages": [
            "kickoff.local-runtime",
            "kickoff.local-publishing-operations",
            "kickoff.functional-journeys"
          ],
          "searchKeywords": [
            "acceptance",
            "fresh local",
            "verification",
            "checklist"
          ],
          "topicKeywords": [
            "import",
            "module lifecycle",
            "documentation",
            "media",
            "cron"
          ],
          "searchText": "Local acceptance checklist Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior. # Local Acceptance Checklist\n\nThis checklist is the beginner-friendly path for proving a fresh Nodics local\ninstallation from zero database state. Use it when you have cloned the\nframework, the Kickoff customer project, and the frontend workspace, configured\nKickoff, and want to confirm the backend framework, customer project, Axis,\nNexus, and Agora are working together.\n\nThe checklist is intentionally explicit. A new developer should be able to\nfollow it without already knowing Nodics module loading, BackOffice bootstrap,\nWCMS content packs, or functional-module registration.\n\nFrom a business perspective, this checklist proves that a new team can start\nthe reference project, import governed data, open Axis, inspect documentation,\nand see public/customer-facing surfaces without first designing a production\ntopology. It gives decision makers a visible adoption proof and gives\ndevelopers/operators the command evidence needed to repeat or diagnose the\nsame setup.\n\n## What this checklist proves\n\nThe acceptance run proves six things:\n\n| Area | What must be true |\n| --- | --- |\n| Framework checkout | Kickoff can resolve Core, Platform, WCMS, and Process from the configured framework root. |\n| Runtime topology | Platform, WCMS, and the composed Process and Automation runtime can start from the Kickoff local environment. |\n| Bootstrap data | Mandatory initialization data can be imported from module-owned releases. |\n| Axis access | Axis can connect to Platform, authenticate the local admin, and discover BackOffice bootstrap data. |\n| Module lifecycle | Core, Platform, and WCMS are mandatory/registered; Process is observable as an optional runtime module with workflow and cronjob technical modules. |\n| Application readiness | Nexus and Agora setup is blocked until the required business capabilities are registered, active, imported, approved, and visible through Online delivery. |\n\nIf any one of these fails, do not continue adding new functional modules. Fix\nthe contract break first, otherwise every later module will inherit a shaky\nlocal foundation.\n\n## Repository layout used by the reference run\n\nThe local reference setup normally looks like this:\n\n```text\nnodicsRoot/\n  nodics.ai/\n  nodics.kickoff/\n  nodics.exp/\n    nodics.axis/\n    nodics.nexus/\n    nodics.agora.apparel/\n```\n\nThis layout is only a convenience. Customer projects may live anywhere. The\nimportant contract is that `nodics.kickoff/.env` tells Kickoff where the\nframework checkout lives.\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nUse an absolute path if your repositories are not parallel:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=/Users/example/projects/framework/nodics.ai\n```\n\n## Mandatory prerequisites\n\nBefore running the checklist, confirm these local services and tools are\navailable:\n\n1. Node.js 24 and npm.\n2. MongoDB running locally.\n3. The required repositories are cloned:\n   - `nodics.ai`\n   - `nodics.kickoff`\n   - `nodics.exp` with `nodics.axis`, `nodics.nexus`, and Agora applications\n4. `nodics.kickoff/.env` exists and points to the framework root.\n5. `nodics.exp/nodics.axis/.env` points to the local Platform server.\n\nRun this from `nodics.kickoff`:\n\n```bash\ncp .env.example .env\nnpm install\n```\n\nRun this from `nodics.exp/nodics.axis`:\n\n```bash\ncp .env.example .env\nnpm install\n```\n\n## Fresh schema reset\n\nNo contributor, AI agent, test, migration, or acceptance script may read or\nmutate Nodics databases directly. A fresh-schema run must use the governed\nPlatform Local reset API/service with authorization, audit, explicit runtime\ntargets, and recovery evidence. Never substitute a database shell command.\n\nBefore running `acceptance:local:fresh`, stop any existing local topology owned\nby this checkout. The command refuses to reset while Platform, WCMS, Process,\nEngagement, Commerce, Axis, Nexus, or Agora are still listening from another\nprocess.\n\n## Fresh-schema user journey\n\nUse this order when the database is empty and the user wants Axis, Nexus,\nAgora, and documentation to work from a clean state.\n\n| Order | User action | Required evidence before moving on |\n| ---: | --- | --- |\n| 1 | Start the local topology from `nodics.kickoff`. | Platform, WCMS Staged, WCMS Online, Process, Engagement, Commerce, Axis, Nexus, and Agora are reachable on their configured local ports. |\n| 2 | Open Axis and complete the empty-database Axis setup. | Axis baseline, BackOffice navigation, Profile admin access, and CMS baseline are initialized through governed APIs. |\n| 3 | Open Module Registry and register/activate required capabilities. | Core, Platform, and WCMS are mandatory and active. Agora setup requires Commerce and Discovery. Nexus setup requires its public content capability and any enabled engagement capability. |\n| 4 | Open Setup and Accelerators. | Rows clearly show whether each application is ready, blocked by missing capabilities, waiting for approval, published Online, or already current. |\n| 5 | Initialize Nexus or Agora packs only after required capabilities are ready. | The import includes CMS pages, routes, navigation, media records, physical media artifacts, commerce catalog data, search/discovery data, and operational data owned by the selected pack. |\n| 6 | Publish to Online through the same screen or approval queue. | Staged changes are reviewed, approved or rejected by an authorized user, then promoted to Online with audit evidence. |\n| 7 | Verify public applications in the browser. | Nexus and Agora render Online content. If Online content is absent, they show a customer-friendly maintenance page, not hardcoded demo content. |\n\nDocumentation has a parallel lane. Framework, Axis, and Kickoff documentation\npacks can be imported and approved while application setup is in progress.\nDocumentation publication controls documentation pages only. It must not hide\nSwagger/OpenAPI, because Swagger/OpenAPI is generated from active backend\ncontracts rather than CMS documentation content.\n\n## Automated acceptance path\n\nMost maintainers should use the automated path first. It proves the same\ncontracts as the manual checklist and reduces human mistakes during repeated\nbootstrap tests.\n\nUse the non-destructive API-only form:\n\n```bash\nnpm run acceptance:local\n```\n\nThis checks the running or newly started split WCMS topology and imports\nmissing releases only through Nodics APIs. `acceptance:local:fresh` first\nperforms the governed Platform Local reset and then proves the clean bootstrap\npath through the same APIs and browser-facing contracts.\n\n### What the automated command proves\n\n```mermaid\nflowchart TD\n  Start[\"Developer runs npm run acceptance:local\"] --> Platform[\"Start or reuse Platform on 4300\"]\n  Platform --> Staged[\"Start or reuse WCMS Staged on 4312\"]\n  Staged --> Online[\"Start or reuse WCMS Online on 4314\"]\n  Online --> Process[\"Start or reuse Process and Automation on 4330\"]\n  Process --> Axis[\"Start or reuse Axis on 3100\"]\n  Axis --> Auth[\"Authenticate default/admin\"]\n  Auth --> Baseline[\"Verify Axis baseline\"]\n  Baseline --> Registry[\"Verify mandatory and required functional capabilities\"]\n  Registry --> Apps[\"Initialize application packs only when capability gates pass\"]\n  Registry --> Docs[\"Import documentation packs through WCMS\"]\n  Docs --> Swagger[\"Verify Swagger/OpenAPI is independent from docs publication\"]\n  Apps --> Publish[\"Verify Staged-to-Online publication path\"]\n  Publish --> Routes[\"Verify Axis, Nexus, and Agora browser routes\"]\n  Routes --> Designer[\"Verify Content Designer catalog-first route\"]\n  Designer --> Lifecycle[\"Run Cron register, activate, deactivate, deregister\"]\n  Lifecycle --> Pass[\"Acceptance pass\"]\n```\n\nThe command stops the servers it started after the acceptance gates complete.\nTo keep the API-qualified stack running, use:\n\n```bash\nnpm run acceptance:local -- --leave-started\n```\n\nThe command does not inspect or mutate a database directly, kill unrelated\nprocesses, or create another importer. It uses the existing Profile login, BackOffice registry,\nWCMS content-pack API, and Axis smoke test. This matters because acceptance\nmust prove the same path a real developer or operator uses.\n\n## Start and stop the complete Local topology\n\nThe normal direct-Node workflow is supervised from one terminal:\n\n```bash\nnpm run topology:start\n```\n\nThis starts Platform, WCMS Online, Process, WCMS Staged, Engagement, and\nCommerce in dependency-aware order. It waits for each low-disclosure readiness\nendpoint before starting the next runtime and writes generated logs and PID\nownership beneath `envs/kickoffLocal/generated/local-topology`.\n\nTo include Axis, Nexus, and Agora frontend applications from the local\n`nodics.exp` workspace:\n\n```bash\nnpm run topology:start:all\n```\n\nFrom another terminal, inspect readiness and ownership:\n\n```bash\nnpm run topology:status\n```\n\nStop only the topology owned by this checkout:\n\n```bash\nnpm run topology:stop\n```\n\nThe stop command validates the recorded supervisor PID and command before\nsending a signal. A busy port without matching ownership is reported as\n`EXTERNAL_OR_UNKNOWN` and is never killed. Ctrl+C in the supervisor terminal\nperforms the same bounded reverse-order graceful shutdown.\n\n## Start individual backend servers\n\nFor focused debugging, open separate terminals from `nodics.kickoff`.\n\nTerminal 1:\n\n```bash\nnpm run start:platform\n```\n\nTerminal 2:\n\n```bash\nnpm run start:wcms:staged\n```\n\nTerminal 3:\n\n```bash\nnpm run start:wcms:online\n```\n\nTerminal 4:\n\n```bash\nnpm run start:process\n```\n\nExpected local ports:\n\n| Runtime | Port | Why it matters |\n| --- | ---: | --- |\n| Platform | 4300 | Profile login, BackOffice bootstrap, module registry, OpenAPI discovery. |\n| WCMS Staged | 4312 | Versioned CMS authoring, imports, validation, and publication source. |\n| WCMS Online | 4314 | Published CMS delivery and authenticated publication target only. |\n| Process and Automation | 4330 | Process/workflow APIs plus optional Cron observation and registry lifecycle testing. |\n\nIf a port is already in use, confirm whether it is an earlier Nodics server\nfrom the same checkout. Do not kill unrelated processes by guessing.\n\n## Start Axis\n\nOpen another terminal from `nodics.exp/nodics.axis`:\n\n```bash\nnpm run dev\n```\n\nAxis should be available at:\n\n```text\nhttp://localhost:3100\n```\n\n## Login\n\nOpen Axis and use the local reference credentials:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nSuccessful login proves:\n\n1. Axis can load public bootstrap from Platform.\n2. Profile can authenticate the local admin.\n3. Axis can retrieve authenticated BackOffice bootstrap data.\n4. Axis receives authorized navigation and runtime module projections.\n\n## Import initialization data\n\nIn Axis, open the import/initialization workspace and install the available\ninitialization releases.\n\nYou should see releases owned by active modules only. The system must not ask\nAxis to invent import data. Axis presents the operation; the owning backend\nmodule and nImport execute the import.\n\nExpected outcome:\n\n- mandatory Profile/bootstrap identity data is available;\n- core framework data required by Platform and WCMS is present;\n- documentation content packs can be imported or updated;\n- repeated import attempts with unchanged immutable releases do not corrupt\n  existing data.\n\n## Verify module registry\n\nOpen:\n\n```text\nSystem and Integrations → Module Registry\n```\n\nExpected state:\n\n| Functional module | Expected state | Why |\n| --- | --- | --- |\n| `nodics.foundation` | Registered and active | Required by every runtime. |\n| `nodics.platform` | Registered and active | Required for Profile, BackOffice, and Axis bootstrap. |\n| `nodics.wcms` | Registered and active | Required for CMS, documentation, and media/content management. |\n| `nodics.process` | Optional, observed when Process and Automation is running | Proves process/workflow capability can join the lifecycle. |\n| Cron and scheduled automation | Technical capability under the Process runtime | Proves scheduled jobs can be discovered without creating a second scheduler authority. |\n| Commerce | Required before Agora application packs can become usable | Provides catalog, product, cart, order, price, stock, and checkout capability for storefronts. |\n| Discovery | Required before Agora application packs can become usable | Provides search/discovery readiness for product and content lookup. |\n| Engagement | Required before Nexus engagement features can become usable | Provides public engagement APIs for corporate-site interaction features. |\n\nCore, Platform, and WCMS are mandatory for this local Axis-backed acceptance\ntopology. They should not appear as removable optional modules. Cron may be\nregistered, activated, deactivated, and deregistered as an optional module.\nAgora and Nexus setup must remain blocked until their required functional\ncapabilities are registered and active. A visible content pack is not enough.\n\n## Verify documentation\n\nOpen:\n\n```text\nDocumentation\n```\n\nExpected documentation products:\n\n- Framework\n- Swaggers\n- Nodics Axis\n- Nodics Kickoff\n\nThe products are intentionally separated by ownership:\n\n| Documentation product | Owning repository/module |\n| --- | --- |\n| Framework | `nodics.ai/nodics.docs` |\n| Nodics Axis | `nodics.ai/nodics.platform/modules/axis` |\n| Nodics Kickoff | `nodics.kickoff` |\n| Swagger/OpenAPI | Platform BackOffice/OpenAPI contracts |\n\nAxis is only the renderer. It must not own backend-importable documentation\ncontent. Documentation packs can be imported, approved, and published in\nparallel with application setup. Swagger/OpenAPI should remain visible whenever\nthe authenticated runtime exposes generated OpenAPI contracts, even if CMS\ndocumentation packs are not yet published.\n\n## Verify application setup and Online delivery\n\nOpen:\n\n```text\nSetup and Accelerators\n```\n\nExpected behavior:\n\n- Axis shows each application as a compact row with clear status, required\n  capabilities, next action, refresh, and expandable detail.\n- A row is **blocked** when a required capability is not registered, inactive,\n  unavailable, or offline. The next action should point the user to Module\n  Registry instead of allowing a misleading import.\n- Agora Apparel, Agora Electronics, and Agora Telco require Commerce and\n  Discovery before their application packs can become usable.\n- Nexus requires the public content capability and any enabled engagement\n  capability before its public site pack can become usable.\n- Initializing an application pack must prepare the complete site, not only a\n  small metadata record: CMS content, routes, navigation, media records,\n  physical media artifacts, commerce catalog/search data where applicable, and\n  operational data owned by the pack.\n- Public frontends consume Online only. Before approval and publication they\n  show the maintenance page. They must not render hardcoded sample data from\n  the frontend repository.\n\n## Verify content and media\n\nOpen these Axis routes:\n\n```text\n/content\n/content/designer\n/media\n/media/items\n/media/folders\n```\n\nExpected behavior:\n\n- `/content` shows the content dashboard and WCMS-owned summary sections.\n- `/content/designer` shows the governed Page Designer foundation. It should\n  explain the catalog-first sequence and support dynamic template slots rather\n  than assuming a fixed header/main/footer page shape.\n- `/media` shows media management, media records, and media-by-source sections.\n- `/media/items` and `/media/folders` open focused media workspaces instead of\n  falling into CMS recovery.\n- Any unavailable backend schema is reported as a backend/schema discovery\n  issue, not as a frontend-owned data model.\n\n### Verify Page Designer authoring model\n\nOpen:\n\n```text\nContent and Experience → Web Content Management System → Page Designer\n```\n\nThe Designer is not expected to look exactly like the final website in a\nbrowser. It is the authoring and structure view. A beginner should understand\nthis chain:\n\n```mermaid\nflowchart TD\n  Catalog[\"Content Catalog\"]\n  Site[\"Site\"]\n  Template[\"Page Template\"]\n  Page[\"Page\"]\n  Slots[\"Template Slots: any number\"]\n  Sections[\"Page Sections\"]\n  Components[\"Component Instances\"]\n  Media[\"Governed Media\"]\n  Route[\"Page Route\"]\n  Nav[\"Navigation Node\"]\n\n  Catalog --> Site\n  Catalog --> Template\n  Site --> Page\n  Template --> Page\n  Page --> Slots\n  Slots --> Sections\n  Sections --> Components\n  Components --> Media\n  Page --> Route\n  Route --> Nav\n```\n\nThis acceptance step proves only that the reference local stack can consume the\nWCMS-owned authoring model. The contract itself belongs to WCMS. If the\nDesigner metadata is wrong, fix the owning WCMS contract and tests first; do\nnot move catalog, site, template, slot, page, component, or media authority\ninto the reference project or into the Axis frontend.\n\nExpected Designer evidence:\n\n| Area | Expected behavior |\n| --- | --- |\n| Catalog-first sequence | The UI starts from content catalog, then site, template, page, slots, sections, components, media, route, and navigation. |\n| Dynamic slots | Slot names come from template data; the UI must not assume only three slots. |\n| Backend authority | Save/validate actions call WCMS/CMS authoring APIs, not browser-local persistence. |\n| Media governance | Media association points to nMedia records or sets; it never asks for a filesystem path. |\n| Publish readiness | Designer can validate readiness, but publishing remains CMS/nPublish authority. |\n\nIf Designer loads but cannot validate or save, inspect the WCMS server first:\n`cmsAuthoring` API exposure must be enabled, the user must have\n`cms.backoffice.manage`, the selected Site must belong to the selected Content\nCatalog, and the selected Template must expose the slots being edited.\n\n## Verify Cron\n\nOpen:\n\n```text\n/cron\n```\n\nExpected behavior:\n\n- If Process and Automation is running, Axis can observe the Process\n  functional module and the CronJob technical capability from the same runtime.\n- If Cron is not registered, it appears as available to register.\n- Register moves it into the registered list without requiring a page refresh.\n- Activate changes lifecycle state without freezing buttons.\n- Deactivate and deregister return it to the correct next state.\n\nThe automated acceptance runner performs the full optional Cron lifecycle:\n\n```text\navailable → register → registered/inactive → activate → registered/active\nregistered/active → deactivate → registered/inactive → deregister → available\n```\n\nCron is optional for the project, so the final accepted state after the\nautomated lifecycle test is **available** rather than permanently registered.\nThat proves both the runtime observation path and the governed removal path.\n\nIf an action succeeds but the UI does not update, inspect the module registry\nAPI response immediately after the action. The frontend should refresh local\nquery state after each lifecycle operation.\n\n## Command-line smoke test\n\nAfter the servers and Axis are running, use the live smoke script from\n`nodics.exp/nodics.axis`:\n\n```bash\nAXIS_EXPECT_MODULES=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live\n```\n\nExpected result:\n\n```text\nPASS Axis route /\nPASS Axis route /content\nPASS Axis route /content/designer\nPASS Axis route /media\nPASS Axis route /media/items\nPASS Axis route /media/folders\nPASS Axis route /cron\nPASS Axis route /system-integrations\nPASS Axis route /registry\nPASS Axis route /operations/imports-exports\nPASS Axis route /docs/swaggers\nPASS BackOffice public bootstrap\nPASS authenticated login for admin\nPASS module registry reachable\nPASS required modules registered: nodics.foundation, nodics.platform, nodics.wcms\nPASS optional runtime modules observed: nodics.process\nPASS documentation pack nodicsDocumentation is CURRENT\nPASS documentation pack axisDocumentation is CURRENT\nPASS documentation pack kickoffDocumentation is CURRENT\nPASS cron lifecycle register\nPASS cron lifecycle activate\nPASS cron lifecycle deactivate\nPASS cron lifecycle deregister returns module to available\n```\n\n## Troubleshooting quick map\n\n| Symptom | Most likely boundary |\n| --- | --- |\n| Axis recovery says BackOffice registry unavailable | Platform server is not reachable or Axis points at the wrong Platform URL. |\n| Login fails | Profile data was not imported, credentials changed, or Platform is using a different database. |\n| Documentation route shows CMS recovery | WCMS is down, documentation pack is not imported, or the documentation source is not registered. |\n| Import page says API category is disabled | API exposure defaults belong in owning modules; check whether the runtime disabled the category at server level. |\n| Process does not appear | Process and Automation server is not running, or the runtime has not reported its functional module observation. |\n| Module action succeeds only after refresh | Axis query invalidation or backend response envelope needs review. |\n| Media schema discovery unavailable | WCMS/media runtime is not exposing the expected schema workbench contract. |\n\n## Acceptance sign-off\n\nThe local acceptance run is complete when:\n\n1. Platform, WCMS, Process and Automation, and Axis are running.\n2. Required releases were qualified through Nodics import/publication APIs.\n3. Admin login works.\n4. Module registry shows mandatory modules and optional Cron correctly.\n5. Documentation products are visible.\n6. Content and media routes render the expected workspaces.\n7. The Page Designer route shows the catalog-first model and does not invent a\n   fixed slot shape or frontend-owned content persistence.\n8. `npm run acceptance:local` passes, or the manual equivalent plus\n   `AXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live`\n   passes.\n9. No repo in the three-repo set has uncommitted acceptance changes.\n\nWhen all nine are true, the modularized foundation is ready for the next\nfunctional module.\n\n## Common mistakes\n\n- Treating a running Node process as proof that the customer project is ready.\n- Skipping content-pack import and then wondering why Axis documentation or\n  WCMS pages are unavailable.\n- Reading, dropping, or modifying a database directly during a test instead of\n  using an authorized Nodics API/service.\n- Accepting a module lifecycle flow that requires a browser refresh after\n  register, activate, deactivate, or deregister.\n- Ignoring an `INVALID RELEASE` message because the release still appears in\n  the list.\n- Verifying only Platform while forgetting WCMS, documentation, media, Process,\n  Cron, and Axis routes.\n\n## Verification\n\nRun the API-only checklist repeatedly when confidence matters. The expected\nresult is idempotent release qualification, mandatory module visibility,\noptional Cron lifecycle handling, fresh-schema reset through the governed\nPlatform Local reset API, and Axis rendering without manual database inspection\nor edits.\n\nFor project documentation changes, regenerate the Kickoff documentation pack,\nrun the documentation contract test, start Platform and WCMS, import or update\nthe Kickoff docs release, and open `/docs/nodics-kickoff` in Axis. If the page\nonly works because it was hardcoded in the frontend, the acceptance result is\nnot valid.\n"
        },
        {
          "code": "kickoff.local-publishing-operations",
          "title": "Local publishing operations",
          "route": "/docs/nodics-kickoff/kickoff-local-publishing-operations",
          "section": "publish-and-qualify",
          "sectionTitle": "Publish and Qualify",
          "sectionOrder": 30,
          "group": "publishing-operations",
          "groupTitle": "Publishing Operations",
          "groupOrder": 10,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 10,
          "parentId": "publish-and-qualify",
          "hierarchyPath": [
            "Nodics Kickoff",
            "Publish and Qualify",
            "Local publishing operations"
          ],
          "hierarchyDepth": 3,
          "documentType": "operations",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "businessAudience": [
            "business-user",
            "administrator",
            "operator"
          ],
          "technicalAudience": [
            "architect",
            "developer",
            "qa",
            "ai-tool"
          ],
          "summary": "Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access.",
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "allowedRoles": [],
          "allowedGroups": [],
          "allowedPermissions": [],
          "lifecycleState": "ONLINE",
          "maturityState": "operational",
          "implementationState": "current",
          "relatedPages": [
            "kickoff.local-acceptance",
            "kickoff.deployment-qualification"
          ],
          "searchKeywords": [
            "publishing",
            "staged",
            "online",
            "recovery"
          ],
          "topicKeywords": [
            "nPublish",
            "WCMS",
            "Process",
            "rollback"
          ],
          "searchText": "Local publishing operations Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access. # Local publishing operations\n\n## Scope and authority\n\nThis runbook operates the `kickoffLocal` Staged-to-Online publishing lifecycle.\nIt is Local evidence only: it does not approve Development, QA, PreProd, Prod,\nphysical datastore switching, or a production storefront launch. WCMS Staged\nowns authoring and release freeze, `nPublish` owns lifecycle transitions,\nProcess owns approval workflow state, WCMS Online owns deployed visibility,\nand Axis is the employee control plane. Nexus and Agora consume Online only.\n\nOperators and automation must use Nodics APIs, generated services, and the\nproject commands below. They must never repair, seed, version, publish, restore,\nor verify content through direct database CRUD. Database credentials and\nconnectivity are evaluated by runtime readiness; the topology preflight does\nnot open its own database connection.\n\n| Publishing area | Business question answered | Correct Kickoff action | Authority that decides |\n| --- | --- | --- | --- |\n| Import and upgrade | Which release is installed and can it be trusted? | Run retained or fresh acceptance through project commands | nImport validates immutable release identity and checksums |\n| Capability gating | Is the target application allowed to become usable? | Register and activate required functional capabilities before initializing the application pack | BackOffice Module Registry and the owning module decide capability readiness |\n| Staged review | What content or data is ready for approval? | Inspect Staged state through Axis and governed APIs | WCMS Staged and owning modules hold authoring state |\n| Approval and activation | What is allowed to become visible Online? | Use workflow-backed publication actions | nPublish and Process coordinate approval and Online activation |\n| Recovery | How do we retry or roll back a failed local release? | Use documented retry, rollback, backup, and restore commands | Runtime services preserve lifecycle, audit, and integrity evidence |\n\n## Preflight, start, inspect, and stop\n\nRun from `nodics.kickoff`:\n\n```text\nnpm run topology:preflight\nnpm run topology:start:all\nnpm run topology:status\nnpm run topology:stop\n```\n\nPreflight verifies repository availability and required ports. Startup refuses\nbusy ports, starts dependencies in order, waits for HTTP readiness, records only\nits own process identities, and fails closed if a managed child exits. Stop\nsignals only the validated supervisor and releases children in reverse order.\n\n## Supported initialization and release upgrade\n\nUse `npm run acceptance:local:fresh` only when a bounded Local reset is intended.\nThe command resets through the governed Platform API; it does not issue database\ncommands. Use `npm run acceptance:local` for retained-schema initialization,\ncontent-pack upgrade, repeat installation, and publication verification.\n\nImmutable content-pack files use portable source revision zero. During a\ngoverned content-pack upgrade, nImport reads the latest Staged record through its\ngenerated schema service and supplies the next optimistic revision. A concurrent\nwriter can still win between read and save; persistence then rejects the import,\nand the operator reviews import-run diagnostics before retrying. Ordinary imports\nand API writes do not receive this release-only reconciliation.\n\nAn upgrade is successful only when the content-pack status is `CURRENT`, the\nexpected release version and checksum are visible, Staged import diagnostics have\nno unresolved failures, publication reaches `ONLINE`, and Online delivery returns\nthe expected projection. Never resolve an upgrade by changing stored revisions.\n\n## Failure, retry, rollback, and recovery\n\n- A validation or approval rejection leaves Online unchanged. Correct Staged\n  content, create or select the intended version, and submit again.\n- Workflow timeouts and response loss are retried only through the bounded,\n  idempotent Process and publication contracts. Correlation ID and operation key\n  must remain stable for the retry.\n- A Staged, Process, or Online interruption is recovered by restarting the\n  supervised topology and running retained acceptance. Reconciliation resumes\n  durable lifecycle and outbox state; it must not manufacture database state.\n- A failed deployment is reconciled before retry. If activation cannot be\n  completed safely, invoke the governed publication rollback operation and\n  verify the prior Online pointer and delivery response.\n- Unexpected supervised child exit must stop the remaining topology. Inspect the\n  generated runtime logs, correct the cause, run preflight, and start again.\n\n## Import, export, backup, and restore boundaries\n\nLocal acceptance proves secured Staged export, checksum and provenance, media-\nbacked validation/import, tenant rejection, and Online/Process export denial.\nThis is a logical data portability and recovery exercise, not a physical database\nbackup certification. Physical backup, restore, point-in-time recovery, RPO, and\nRTO require database-provider procedures and non-Local qualification. Restored\nauthoritative data must be followed by Nodics projection rebuild and API-based\ncount/checksum reconciliation.\n\n## Observability and audit\n\nUse publication operations and diagnostics APIs to inspect lifecycle state,\nfailure and stuck totals, safe failure codes, actor identity, correlation ID,\nrevision, target version, deployment receipts, audit reconciliation, and outbox\ndelivery. Logs must omit tokens, credentials, provider paths, raw payloads, and\nprotected business or personal data. Exported evidence is sanitized before it is\nshared.\n\nRequired Local signals are publication count, failure count, stuck count,\nduration per bounded contract, retry outcome, rollback outcome, readiness, and\nOnline delivery verification. Production queue depth, p95/p99, throughput, soak,\nprojection lag, alerts, and capacity targets remain external evidence.\n\n## Concurrency, retention, and cleanup\n\nLifecycle revisions prevent conflicting transitions. Stable publication codes,\noperation keys, receipts, Online pointers, and outbox identities make identical\nreplays converge. Concurrent editors must publish explicit frozen versions;\npublishing never means “latest at execution time.”\n\nPrevious content versions remain governed history. Online manifests and rollback\nreferences protect required versions. Media cleanup uses retention time, active\nand rollback references, batch limits, and legal hold; it removes only expired,\nunreferenced publication media through the media service. Generated supervisor\nstate and import staging follow their owning cleanup lifecycle.\n\n## Qualification and evidence\n\nRun:\n\n```text\nnpm run qualification:publishing-capacity\nnpm run qualification:publishing-soak\nnpm run qualification:security-boundary\nnpm run qualification:deployment:local -- --include-fresh\n```\n\nThe bounded capacity suite covers freeze, deployment, activation, delivery,\nresponse-loss retry, rollback, transaction abort, media retention, concurrent\nactivation/receipt convergence, workflow handoff, publication operations, and\naudit reconciliation. The deployment report records command outcomes, durations,\nrepository commits, explicit external gaps, and an integrity digest. It never\nself-approves production.\n\nThe Local sustained-reliability gate repeats six publication, workflow,\noutbox, reconciliation, rollback, and media-retention contracts for 25 cycles\n(150 executions) under explicit elapsed-time and process-memory-growth budgets.\nThe automated security boundary executes authentication, authorization, cache\nmutation, import/export, remote transport, BackOffice, Engagement, publication\nauthority, and atomic-audit contracts. These close Local regression evidence;\nthey do not replace production-scale soak or an independent penetration test.\n\nFor the isolated `kickoffDockerLocal` production simulation, run the Docker\nLocal build, start, acceptance, qualification, resilience, interruption, and\nsoak commands defined in `package.json`. Keep this environment separate from\nnative `kickoffLocal`; it owns its own ports, secrets, databases, Redis\ntopology, networks, and Staged/Online media volumes.\n\nThe qualified 2026-08-13 closure completed API-only retained-data acceptance,\nseven target-release reconciliations, Redis Sentinel promotion with\nauthentication and publication continuity, a 1.744-second backup/RPO rehearsal,\na 55.420-second restore/RTO against the 300-second Local target, and a 30-minute\nsoak of 20,088 requests with zero errors, six publication runs, 12 ms p95, 15 ms\np99, and 56 resource samples. This is reproducible Local evidence, not a\nproduction approval. Independent penetration testing and human\nassistive-technology review remain external.\n\nTroubleshoot using stable error codes. `ERR_IMP_00003` indicates immutable release\nintegrity/version policy, `ERR_IMP_00010` is an aggregate record-dispatch failure,\nand `ERR_MDL_00004` indicates an optimistic revision conflict. Preserve the\ncorrelation ID and sanitized import/publication diagnostics when escalating.\n\n## Common mistakes\n\nA common mistake is treating a content-pack update as a database migration and\nmanually changing `versionId`, installed-release history, or the Online pointer.\nThat destroys the evidence needed for retry and rollback. Another mistake is\nstarting Nexus against Staged because authoring content appears there first;\npublic clients must remain Online-only. Do not run multiple unmanaged copies of\nthe same Local server, kill a PID copied from stale state, reuse an old checksum\nunder the same release version, or declare success only because processes are\nlistening. Readiness, authority, workflow, publication, and delivery must all be\nverified.\n\nOperators should also avoid interpreting Local contract timing as production\ncapacity, logical export as physical backup, retryable-phase warnings as final\nfailure, or an integrity digest as human approval. Inspect the final import-run\nand publication states. Documentation source belongs in this project, generated\nCMS data comes from the generator, and frontend applications must not become the\nauthority for content-pack installation or publication state.\n\n## Verification\n\nFor a normal retained upgrade, run preflight, retained acceptance, publishing\ncapacity qualification, and the project test suite. For a deliberate clean-room\nexercise, run fresh acceptance once and retained acceptance immediately after it\nto prove restart-safe idempotency. Confirm that all expected packs are `CURRENT`,\nthe new documentation page is delivered from Online, the publication operations\nsummary has no unexplained failed or stuck item, and `topology:status` reports no\nmanaged process after shutdown.\n\nReview the generated qualification report for command exit codes, durations,\nsource commits, explicit external gaps, and a valid SHA-256 digest. Independently\nrun Framework, Axis, and Nexus verification before committing the coordinated\nbaseline. Finally run `git diff --check`, documentation generation in check mode,\ncredential-pattern scanning, and the zero-direct-database audit over the changed\nfiles. A beginner or partner developer should be able to follow this sequence\nwithout knowing a MongoDB collection name or using a database shell.\n"
        },
        {
          "code": "kickoff.deployment-qualification",
          "title": "Deployment qualification",
          "route": "/docs/nodics-kickoff/kickoff-deployment-qualification",
          "section": "publish-and-qualify",
          "sectionTitle": "Publish and Qualify",
          "sectionOrder": 30,
          "group": "deployment-qualification",
          "groupTitle": "Deployment Qualification",
          "groupOrder": 20,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 20,
          "parentId": "publish-and-qualify",
          "hierarchyPath": [
            "Nodics Kickoff",
            "Publish and Qualify",
            "Deployment qualification"
          ],
          "hierarchyDepth": 3,
          "documentType": "operations",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "businessAudience": [
            "administrator",
            "operator"
          ],
          "technicalAudience": [
            "architect",
            "developer",
            "qa",
            "ai-tool"
          ],
          "summary": "Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off.",
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "allowedRoles": [],
          "allowedGroups": [],
          "allowedPermissions": [],
          "lifecycleState": "ONLINE",
          "maturityState": "operational",
          "implementationState": "current",
          "relatedPages": [
            "kickoff.local-runtime",
            "kickoff.local-publishing-operations"
          ],
          "searchKeywords": [
            "deployment",
            "qualification",
            "evidence",
            "production"
          ],
          "topicKeywords": [
            "security",
            "resilience",
            "load",
            "provider"
          ],
          "searchText": "Deployment qualification Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off. # Deployment qualification\n\nDeployment qualification is the bridge between a release candidate that works\nlocally and a release that accountable owners may approve for production. The\nKickoff runner coordinates evidence from the framework, reference project,\nAxis, and local Redis, but it deliberately cannot approve production by itself.\n\nFor beginners, the safest way to read this page is as an evidence map. Kickoff\ncan prove that the local reference stack behaves consistently, but business\napproval still needs named owners for production topology, security, providers,\naccessibility, performance, recovery, and data governance.\n\n## Start here\n\nFrom `nodics.kickoff`, print the plan without running anything:\n\n```bash\nnpm run qualification:deployment\n```\n\nThe JSON plan identifies each gate, its owner, the command that would run, and\nwhat it proves. It contains no credentials or provider URLs.\n\nRun the safe local gates:\n\n```bash\nnpm run qualification:deployment:local\n```\n\nThe runner executes the strict framework release gate, retained-data Kickoff\nacceptance, Axis verification, and the live Redis cache and distributed\nregistry contracts. It writes sanitized evidence to:\n\n```text\nenvs/kickoffLocal/generated/deployment-qualification/latest.json\n```\n\nThe generated report is local operational evidence and is intentionally\nignored by Git. Archive it in the deployment system that owns the release.\n\n## Fresh bootstrap is intentionally separate\n\nFresh acceptance drops only the documented Kickoff local databases. Because it\nmutates local data, it is never included by default:\n\n```bash\nnpm run qualification:deployment:local -- --include-fresh\n```\n\nNever use this flag against a shared development, qualification,\npre-production, or production database. Use an isolated disposable Kickoff\nenvironment and verify the configured database names first.\n\n## What local evidence does and does not prove\n\n| Gate | Local proof | Still required before production |\n| --- | --- | --- |\n| Framework | Clean build, generated contracts, governance, dependency audit, and automated suites | Deployment-image and target-runtime confirmation |\n| Kickoff | Integrated runtime, documentation, lifecycle, and business-user smoke journey | Production topology and operational ownership |\n| Axis | Formatting, lint, type safety, automated tests, and production bundle | Supported browser/device and human assistive-technology matrix |\n| Redis | Real local cache and distributed-registry behavior | Managed TLS/authentication, topology, isolation, failover, and recovery |\n| Payments/providers | Mock and offline contract behavior | Real non-production credentials, callbacks, failure handling, and rollback |\n\nLocal success must never be translated into `productionApproved: true`. The\nreport fixes this value to `false` and keeps every external evidence class at\n`NOT_EXECUTED`.\n\n## Production-only evidence register\n\nNamed owners must attach evidence for all applicable rows:\n\n| Evidence | Accountable owner | Minimum completion evidence |\n| --- | --- | --- |\n| Peak load | Performance owner | Workload model, dataset, topology, p95/p99, throughput, error rate, saturation, queue age, projection lag, and integrity reconciliation |\n| Soak | Operations owner | Sustained duration, memory/CPU trends, retry growth, drift, storage/index growth, and post-run reconciliation |\n| Penetration | Security owner | Authenticated attack surface, tenant isolation, validation, replay, export, webhook, and privilege-escalation results with disposition |\n| Managed cache failover | Platform owner | TLS/authentication, topology, tenant isolation, node/provider loss, recovery time, and data-consistency results |\n| Backup and restore | Data owner | Backup identity, restore procedure, authoritative counts/hashes, projection rebuild, and reconciliation |\n| Regional residency | Infrastructure and privacy owners | Allowed-region routing, evacuation, deletion propagation, and cross-region leakage results |\n| RPO/RTO | Operations owner | Measured recovery point and recovery time compared with approved objectives |\n| External providers | Provider owners | Credential source, consent, callbacks, residency, observability, degraded behavior, rollback, and key rotation |\n| Accessibility | Product accessibility owner | Keyboard, screen reader, zoom/reflow, contrast, browser, and supported-device results |\n\n## Recommended execution order\n\n```mermaid\nflowchart TD\n  Plan[\"Print qualification plan\"] --> Local[\"Run safe local evidence\"]\n  Local --> Fresh{\"Isolated fresh environment available?\"}\n  Fresh -- \"yes\" --> Bootstrap[\"Run bounded fresh bootstrap\"]\n  Fresh -- \"no\" --> Provision[\"Provision qualification environment\"]\n  Bootstrap --> Provision\n  Provision --> Providers[\"Qualify managed cache and external providers\"]\n  Providers --> Load[\"Run peak load and soak\"]\n  Load --> Recovery[\"Run failover, backup restore, and RPO/RTO\"]\n  Recovery --> Security[\"Complete penetration and residency review\"]\n  Security --> Accessibility[\"Complete human accessibility matrix\"]\n  Accessibility --> Review[\"Accountable-owner evidence review\"]\n  Review --> Decision{\"All gates passed or residual risk accepted?\"}\n  Decision -- \"no\" --> Hold[\"Keep publication blocked\"]\n  Decision -- \"yes\" --> Release[\"Approve merge, tag, and publication\"]\n```\n\nRun functional success paths before destructive resilience tests. Run load\nbefore failover only when the test plan explicitly needs a stable baseline.\nRestore the environment and reconcile data after every destructive exercise.\n\n## Failure and recovery\n\nThe runner continues through local gates so one report shows every attempted\ncheck. Any non-zero command becomes `FAILED` with a stable failure code; raw\nenvironment variables and secrets are excluded. Investigate the owning\nrepository first, rerun the focused failing command, then rerun the pack.\n\nIf Redis is unavailable, start or configure an approved test endpoint and set\n`NODICS_CACHE_REDIS_URL` only in the execution environment. Do not commit it.\nIf the framework, Axis, or Kickoff checkout lives elsewhere, provide\n`NODICS_QUALIFICATION_FRAMEWORK_ROOT` or `NODICS_QUALIFICATION_AXIS_ROOT`.\n\n## Customization boundary\n\nThe runner implementation belongs to framework tooling. The root\n`package.json.name` owns stable project identity. `nodics.project.json` is\noptional and reserved for project-owned command or acceptance overrides; it must\nnot declare `projectCode` or `contractVersion`. Thin command aliases and human-readable project metadata\nlive in `package.json`. Domain selections and qualification profile facts live\nbeside the environment, for example\n`envs/kickoffDockerLocal/nodics.environment.json`. Data packs are owned by\nmodule data manifests. Runtime server startup facts stay with the selected\nenvironment server packages.\nA generated customer project should reuse the framework runner through project\ncommands and change only its project-owned facts while retaining the safety\nproperties:\n\n- dry plan by default;\n- destructive checks explicitly opted in;\n- no secrets or provider URLs in reports;\n- external evidence remains separate from local automation;\n- no automatic production approval;\n- named owners and measurable completion criteria.\n\nDo not move customer workloads, credentials, acceptance data, or risk decisions\ninto `nodics.ai`. Framework modules own reusable contracts and orchestration;\nthe customer project owns its environments, qualification targets, and release\ndecision.\n\n## Common mistakes\n\n- Treating local Redis as proof of a managed Redis topology, TLS, authentication,\n  failover, or regional recovery.\n- Calling mock Stripe or offline provider contracts a live-provider test.\n- running `--include-fresh` without checking that the target is the isolated\n  Kickoff local environment;\n- publishing the generated JSON as a production approval even though it records\n  only command outcomes and fixes `productionApproved` to `false`;\n- pasting secrets, bearer tokens, provider URLs, customer data, or raw security\n  findings into a shared evidence report;\n- accepting average latency while ignoring p95/p99, errors, saturation, queue\n  age, projection lag, and post-run data integrity;\n- running failover or restore exercises without a rollback plan and named\n  operational owner;\n- letting Axis automation replace keyboard, screen-reader, zoom, contrast, and\n  supported-device testing by a qualified human;\n- merging or tagging merely because local gates passed while production-only\n  evidence still says `NOT_EXECUTED`.\n\n## Verification\n\nDevelopers can verify the runner contract without starting the full stack:\n\n```bash\nnpm run test:qualification\nnpm run qualification:deployment\n```\n\nConfirm the plan contains five non-destructive local gates, nine explicit\nexternal gates, no environment values, and `productionApproved: false`. Then\nrun `npm run qualification:deployment:local` in the prepared local workspace.\nConfirm every attempted local gate is `PASSED`, the report is written only\nunder the ignored `envs/kickoffLocal/generated` path, and all production-only\ngates remain visible.\n\nOperators should archive the local report with the immutable repository commit\nidentifiers, deployment image identifiers, environment name, external test\nreports, and accountable-owner decisions. Before approval, independently\nconfirm that each external result belongs to the same release candidate and\nenvironment topology. A missing, stale, differently scoped, or unverifiable\nartifact remains pending; silence is never a pass.\n"
        },
        {
          "code": "kickoff.customization",
          "title": "Customer customization guide",
          "route": "/docs/nodics-kickoff/kickoff-customization",
          "section": "customize-customer-projects",
          "sectionTitle": "Customize Customer Projects",
          "sectionOrder": 40,
          "group": "project-customization",
          "groupTitle": "Project Customization",
          "groupOrder": 10,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 10,
          "parentId": "customize-customer-projects",
          "hierarchyPath": [
            "Nodics Kickoff",
            "Customize Customer Projects",
            "Customer customization guide"
          ],
          "hierarchyDepth": 3,
          "documentType": "customization",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "businessAudience": [
            "business-user",
            "administrator"
          ],
          "technicalAudience": [
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "summary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "allowedRoles": [],
          "allowedGroups": [],
          "allowedPermissions": [],
          "lifecycleState": "ONLINE",
          "maturityState": "operational",
          "implementationState": "current",
          "relatedPages": [
            "kickoff.overview",
            "kickoff.local-runtime",
            "kickoff.local-acceptance"
          ],
          "searchKeywords": [
            "customization",
            "project module",
            "overlay",
            "configuration"
          ],
          "topicKeywords": [
            "extension",
            "rollback",
            "generated docs",
            "customer layer"
          ],
          "searchText": "Customer customization guide Use Kickoff as a safe example for project modules, environment configuration, and customer overlays. # Customer Customization Guide\n\nKickoff is intentionally small. It should teach partners how to customize\nNodics safely without turning the reference project into another framework\nrepository.\n\nFor a beginner developer, the most important lesson is restraint. Do not start\nby editing framework files because they are easy to find. Start by asking who\nowns the behavior, whether configuration can solve the need, and which runtime\nserver should load the customization. That habit keeps the customer project\nupgradeable.\n\n## Why customization needs rules\n\nMost enterprise projects start with one urgent customer request. The quickest\nsolution is often to edit whatever file is easiest to find. That works for a\ndemo, but it becomes expensive when more customers, tenants, brands, modules,\nand releases arrive. Nodics customization rules keep the framework upgradeable\nand keep customer behavior visible in the customer project.\n\nThe rule is simple: customize in the most specific owner that needs the\nchange. Use configuration before code. Use a project module before editing a\nframework module. Use a later-loaded extension module before forking a standard\nfunctional module. Create a new functional module only when the business\ncapability is genuinely new.\n\n## Customization decision tree\n\nUse this decision tree before changing code:\n\n```mermaid\nflowchart TD\n  Need[\"Need to change behavior or content\"] --> Config{\"Can configuration solve it?\"}\n  Config -- \"yes\" --> Env[\"Use project, environment, server, node, tenant, or provider configuration\"]\n  Config -- \"no\" --> Existing{\"Does an existing functional module own it?\"}\n  Existing -- \"yes\" --> ProjectModule{\"Is it customer-specific?\"}\n  ProjectModule -- \"yes\" --> Overlay[\"Create or update a customer/project module loaded after the framework owner\"]\n  ProjectModule -- \"no\" --> Framework[\"Change the owning framework module with tests and docs\"]\n  Existing -- \"no\" --> NewModule[\"Design a new functional module with explicit ownership\"]\n  Env --> Verify[\"Regenerate artifacts and run acceptance\"]\n  Overlay --> Verify\n  Framework --> Verify\n  NewModule --> Verify\n```\n\nIf you cannot answer the ownership question, do not code yet. A wrong owner is\nmore expensive than a missing implementation because it creates a hidden\ncontract future teams will inherit.\n\n## How a developer or AI tool should think\n\nKickoff is a reference customer project, so every change teaches future\ncustomers what “good” looks like. A developer or AI tool should not behave like\na script that only edits the nearest file. It should behave like a small expert\nteam:\n\n| Role | What to check in Kickoff |\n| --- | --- |\n| Business analyst | Does this make the first-hour customer experience clearer, safer, or more convincing? |\n| Enterprise architect | Does the change preserve framework, customer project, runtime server, Axis, WCMS, Profile, and BackOffice ownership? |\n| Nodics framework expert | Is the behavior a project customization, a framework capability, a server topology decision, or generated content-pack output? |\n| Domain expert | Is the sample reusable enough for future commerce, workflow, content, integration, or industry-specific examples? |\n| Principal engineer | Can this be solved through configuration, project module overlay, generated documentation source, or a small exported function? |\n| QA and tester | Does the setup work from zero database state, repeated runs, missing services, and failed dependency resolution? |\n| TechOps/DevOps reviewer | Are framework paths, local databases, ports, logs, reset scope, and rollback behavior safe and understandable? |\n\nIf the answer is unclear, stop and name the ownership decision before editing.\nFor example, changing the local WCMS database name belongs in server\nconfiguration, while changing the import checksum rule belongs in the owning\nframework import service.\n\n## File placement examples\n\nUse these examples when deciding where code or data belongs:\n\n| Need | Correct owner | Why |\n| --- | --- | --- |\n| Change local Platform port | `envs/kickoffLocal/platformServer/config` | It is server topology, not framework behavior. |\n| Add a project-only service | `modules/<project-module>` | Customer behavior should load after framework modules. |\n| Explain Kickoff setup in Axis docs | `nodics.kickoff/docs` | Kickoff owns project-wide documentation that becomes CMS data. |\n| Change Axis renderer behavior | `nodics.axis` | Browser rendering is frontend code, not customer backend data. |\n| Change framework-wide import validation | `nodics.ai` owning module | Shared behavior belongs to the framework owner. |\n| Change generated CMS record text | Source Markdown, then regenerate | Generated files are projections and must not become manual authority. |\n| Add project Waste categories or presets | `modules/kickoffWaste/data` | Waste values are schema-driven project overlay data, not framework source edits. |\n\n## Configuration-first examples\n\nConfiguration-first does not mean \"put everything in properties.\" It means use\nthe correct configuration owner before writing code.\n\n| Example change | Better first move | Why |\n| --- | --- | --- |\n| Local WCMS port must change | Server config under `envs/.../wcmsStagedServer/config` or `envs/.../wcmsOnlineServer/config` | Port is topology, not shared framework behavior. |\n| A project wants a different public label | WCMS/Axis content or project-owned documentation/content data | The label is presentation/content, not service logic. |\n| A framework checkout path differs | `.env` with `NODICS_FRAMEWORK_ROOT` | Workspace layout is deployment- and developer-specific. |\n| Project identity is needed | `package.json.name` | Do not duplicate it in `nodics.project.json` or `config/properties.js`. |\n| A local domain selection is needed | `envs/<environment>/nodics.environment.json` | Runtime composition belongs to the selected environment, not a root helper file. |\n| A new API category should be enabled | Owning module default property, with server override only to disable or narrow it | Defaults belong to the module that owns the API. |\n| A new lifecycle state is needed | Owning status-definition file | Status values are contracts, not casual properties. |\n| A customer needs different Profile behavior | Customer extension module loaded after Platform/Profile owner | Customer behavior should not fork framework source. |\n\n## Safe customization model\n\nCustomer projects can add project modules under `modules/` and environment or\nserver contributions under `envs/`. These contributions load after standard\nNodics functional modules and can override or extend services through the\nnormal module merge process.\n\nSafe customizations include:\n\n- project-specific configuration;\n- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;\n- customer extension modules such as a future `kickoff.platform`;\n- environment-specific properties for local, testing, pre-production, and\n  production;\n- project-owned CMS documentation content packs;\n- sample data or initialization flows that belong to the customer project.\n\n## Two customization types\n\n### Code-level customization\n\nUse code-level customization when behavior changes: a service needs different\nlogic, a route needs a project-specific policy, a schema needs project fields,\nor an integration must call a customer system. Keep the implementation in a\nKickoff module or a customer extension module. Add tests next to the changed\nowner and document the boundary in the module README or documentation page.\n\nExample mental model:\n\n```text\nnodics.foundation\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nHere `kickoff.platform` can override or compose Platform services because it\nloads later. Axis and BackOffice should still show the functional capability as\nPlatform unless the customer intentionally exposes a new business capability.\n\n### Axis and WCMS customization\n\nUse governed frontend customization when an administrator changes content,\nlabels, navigation, documentation, images, or page composition through Axis\nand WCMS. The browser renderer stays in `nodics.axis`; the content records live\nin the backend owner. For example, changing a demo site logo should become a\ngoverned WCMS, Media, or content update, not a hard-coded replacement inside\nthe Axis source repository.\n\n### Documentation customization\n\nDocumentation customization is content customization. If a customer wants\ntheir own onboarding guide, project setup page, API usage note, operational\nrunbook, or business process explanation, the content belongs in the customer\nproject documentation pack.\n\nThe source lives under:\n\n```text\ndocs/\n  catalogue.json\n  pages/\n```\n\nThe generated files live under:\n\n```text\ndata/core-v001/records/documentation/\ndata/manifest.json\n```\n\nEdit the source, bump the catalogue version, regenerate, test, import, and\nverify in Axis. Never hand-edit the generated CMS records to make a page look\nright.\n\n### Waste Management customization\n\nWaste Management follows the same layered customization model as other Nodics\ncapabilities:\n\n```text\nnodics.waste\n  -> waste accelerator umbrella\n    -> eWaste scenario accelerator\n      -> kickoffWaste project overlay\n```\n\nUse `modules/kickoffWaste` for Kickoff-owned Waste data. It can add or override\nfamily, category, material, evidence policy, collection preset, acceptance rule,\nimpact metric, and impact profile records through a manifest-backed data\nrelease. The local Waste server installs `eWaste:core-reference` first and\n`kickoffWaste:project-reference` second, so project values can extend the\naccelerator without changing framework or accelerator code.\n\nDo not put reward formulas, coupon codes, map-provider secrets, vendor\ncontracts, recycler adapters, logistics adapters, or tenant-scoped rows in\nWaste reference data. Loyalty, Location, Commerce, provider integrations, and\nproject journey modules own those concerns.\n\n## What not to customize in Kickoff\n\nDo not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not\nrename standard functional identities such as `nodics.platform` just because a\ncustomer extension customizes their behavior. Do not put backend-importable CMS\ndata into the frontend repository. Do not place framework documentation in the\ncustomer project unless it is truly project-specific guidance.\n\n## Extension example\n\nA customer may later create a module such as `kickoff.platform` to customize\nPlatform behavior. A Platform server could load:\n\n```text\nnodics.foundation\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nBackOffice and Axis should still present the functional capability as Platform\nunless the customer explicitly exposes a separate functional module. The\nextension changes implementation; it does not create a new product identity.\n\n## Documentation rule\n\nCustomer documentation follows the same ownership rule:\n\n- framework guidance goes to `nodics.docs`;\n- Axis product guidance goes to Platform `modules/axis`;\n- Kickoff/project guidance goes to `nodics.kickoff`;\n- browser rendering remains in `nodics.axis`.\n\nWhen Kickoff docs change, update the source page, bump the catalogue version if\nthe generated content changes, regenerate the pack, import it through WCMS, and\nverify the route in Axis.\n\n## Step-by-step: add a small project module\n\n1. Create or choose a module under `modules/`.\n2. Give the module a clear package identity and index so load order is\n   intentional.\n3. Add only project-owned services, data, configuration, or routes.\n4. Register the module in the relevant environment/server composition.\n5. Start the server and verify logs show the module loading after framework\n   modules.\n6. Add or update tests proving the project behavior.\n7. Update Kickoff documentation if the customization is part of the reference\n   journey.\n\n### Example: adding a project service\n\nSuppose a customer wants a project-only greeting service for a demo dashboard.\nThe safe thought process is:\n\n1. The behavior is not framework-wide.\n2. The behavior belongs to the customer project.\n3. The implementation should live under a project module, for example\n   `modules/kickoffCore`.\n4. The service should be exported so a later module can override or compose it.\n5. A test should prove the default behavior and the override path.\n6. The documentation should explain the example if it teaches future partners.\n\nDo not add that demo service to `nodics.foundation` only because every runtime loads\nCore. Core is the shared foundation, not a bucket for convenient code.\n\nDo not use this flow to move framework behavior into Kickoff. If the behavior\nbelongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and\nimplement it in the owning framework module instead.\n\n## Step-by-step: add project documentation\n\n1. Add or update Markdown under\n   `docs/pages/`.\n2. Update `docs/catalogue.json`.\n3. Bump the catalogue version when generated content changes.\n4. Run `npm run docs:generate`.\n5. Run `npm run test:documentation`.\n6. Import or update the content pack through Axis.\n7. Open the generated `/docs/nodics-kickoff` route in Axis and verify\n   navigation, search, headings, and previous/next links.\n\n## DevOps and rollback notes\n\nProject customizations should be deployable and reversible. Keep project\nconfiguration separate from private secrets. Record which environment and\nserver a customization affects. If a release fails, rollback should remove or\ndisable the project layer without requiring a framework source rollback.\n\nOperators should be able to answer three questions during rollback: which\nproject module introduced the change, which server graph loaded it, and which\ncontent-pack or configuration version went live. If those answers are unclear,\nthe customization is not ready for a production environment.\n\nGenerated documentation and seed data should be versioned immutably. If content\nchanges with the same version, the import service should reject it so operators\ndo not silently install a different release under an already-trusted identity.\n\n## Common mistakes\n\n- Editing framework files for a project-only demonstration change.\n- Treating the reference project name as a requirement for every customer\n  project.\n- Putting customer documentation into the framework docs module.\n- Changing a standard functional module identity when only a customer overlay\n  is being added.\n- Copying whole framework property trees into an environment/server config\n  instead of overriding only the narrow property the project needs.\n- Editing generated documentation data after a checksum failure instead of\n  updating source Markdown, regenerating, and bumping the release when\n  required.\n\n## Verification\n\nVerify a customer customization from the outside and from the owner. From the\noutside, start the relevant local server, open Axis, and confirm the visible\nbehavior changes only for the project that owns it. From the owner, run the\nproject tests, regenerate project documentation content when docs changed,\nvalidate the content-pack manifest, and run the local acceptance script when\nruntime, import, module registry, documentation, or Axis behavior is affected.\n\nIf a customization changes Platform, WCMS, Cron, or another framework\ncapability through a project overlay, the evidence must show both the default\nframework behavior and the project-specific override. A beginner should be\nable to read the evidence and understand where the change lives, why it does\nnot fork the framework, and how to remove or roll it back.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Local runtime topology](local-runtime.md)\n"
        },
        {
          "code": "kickoff.functional-journeys",
          "title": "Commerce and Engagement functional journeys",
          "route": "/docs/nodics-kickoff/kickoff-functional-journeys",
          "section": "functional-journeys",
          "sectionTitle": "Functional Journeys",
          "sectionOrder": 50,
          "group": "commerce-and-engagement-journeys",
          "groupTitle": "Commerce and Engagement Journeys",
          "groupOrder": 10,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 10,
          "parentId": "functional-journeys",
          "hierarchyPath": [
            "Nodics Kickoff",
            "Functional Journeys",
            "Commerce and Engagement functional journeys"
          ],
          "hierarchyDepth": 3,
          "documentType": "how-to",
          "audience": [
            "business-user",
            "administrator",
            "architect",
            "developer",
            "operator",
            "qa",
            "ai-tool"
          ],
          "businessAudience": [
            "business-user",
            "administrator",
            "operator"
          ],
          "technicalAudience": [
            "architect",
            "developer",
            "qa",
            "ai-tool"
          ],
          "summary": "Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence.",
          "visibility": "public",
          "accessMode": "PUBLIC",
          "publiclyAvailable": true,
          "requiresAuthentication": false,
          "allowedRoles": [],
          "allowedGroups": [],
          "allowedPermissions": [],
          "lifecycleState": "ONLINE",
          "maturityState": "operational",
          "implementationState": "current",
          "relatedPages": [
            "kickoff.overview",
            "kickoff.local-acceptance",
            "kickoff.customization"
          ],
          "searchKeywords": [
            "commerce",
            "engagement",
            "customer journey",
            "provider"
          ],
          "topicKeywords": [
            "checkout",
            "orders",
            "reviews",
            "contact",
            "privacy"
          ],
          "searchText": "Commerce and Engagement functional journeys Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence. # Commerce and Engagement functional journeys\n\nThis page is the beginner and operator route through the Nodics reference journeys. It explains what can be demonstrated locally, which module owns each decision, what Axis displays, and how to recover safely. Kickoff composes the reference environment; it does not become the authority for Commerce, Engagement, Payment, Communication, Process, Profile, Media, or WCMS records.\n\n| Journey area | Business outcome | Kickoff proves | Owning authority |\n| --- | --- | --- | --- |\n| Commerce discovery | A customer can browse published products and product detail | Online projections, search-backed delivery, and customer-safe APIs are reachable | Commerce, Discovery, WCMS Online, and Media |\n| Cart and checkout | A customer can move from intent to order placement | Authenticated customer flow, cart sync, calculation, and order confirmation behave together | Profile, Cart, Checkout, Pricing, Tax, Inventory, Payment, and Fulfillment |\n| Order reversal | A customer or operator can request cancellation, return, or refund safely | Eligibility, reason options, history, and non-owner rejection remain visible and governed | Order, Payment, Fulfillment, Inventory, and Process |\n| Engagement | Customer contact, review, testimonial, and feedback evidence is actionable | Intake, operator queue, lifecycle action, withdrawal, and public projection paths are testable | Engagement, Communication, Process, Profile, and WCMS |\n\n## Understand the product journey\n\nA customer-facing journey is not complete when an HTTP request merely returns success. The full path is customer intent, validated intake, durable business state, an eligible operator action, visibility or fulfillment, and a safe withdrawal or reversal. Every step carries a tenant and correlation identity. Repeated commands use an idempotency key, and state-changing operator commands use an expected revision so two operators cannot silently overwrite each other.\n\nThe local reference uses deterministic providers. They create realistic, content-safe evidence but do not claim that a production account, sender, carrier, or payment merchant is qualified. Sandbox-capable adapters remain disabled until their secret references and environment policy are supplied.\n\n## Plan roles, prerequisites, and ownership\n\nDevelopers start Platform before Commerce or Engagement because authentication, tenant context, and Profile ownership fail closed when Platform is unavailable. Business operators use Axis at `http://localhost:3100`; customer calls use the documented public or customer API surfaces. The local administrator may inspect operator journeys, but a customer-owned route must still be tested with a customer principal before deployment qualification.\n\nThe principal owners are:\n\n- Checkout and Order coordinate placement and reversal checkpoints without taking Payment, Inventory, or Fulfillment authority.\n- Payment owns authorization, capture, void, refund, provider evidence, and reconciliation.\n- Engagement API owns public, customer, operator, and integration exposure while Contact, Review, Feedback, and Testimonial own their records and transitions.\n- Communication owns templates, suppression, delivery attempts, callbacks, and provider-neutral evidence.\n- Process owns workflow definitions, instances, tasks, recovery incidents, retries, dead-letter state, and compensation progress. Domain modules own the business action and reversal adapters.\n- Axis renders backend-owned capability metadata and calls secured action routes; it does not duplicate lifecycle rules.\n\n## Configure and start locally\n\nInstall the workspace dependencies and use Kickoff project commands rather than constructing an undocumented module graph. Run `npm run start:platform` first, then the Commerce, Engagement, and Loyalty start commands in separate terminals as needed. The command aliases execute framework-owned runtime startup tooling; that tooling discovers server bootstrap facts from the selected environment server packages. Readiness must pass before invoking a journey. Do not place provider credentials in source, sample data, browser storage, or documentation. Environment-specific secret references belong in secured layered configuration.\n\nRun `npm run acceptance:functional` from `nodics.kickoff` for the automated effective-server proof. The runner reuses healthy local servers or starts only what it needs, authenticates through Platform, uses unique correlation and idempotency values, and stops only processes that it started. It does not edit MongoDB directly.\n\n## Operate Engagement in Axis\n\nOpen Customer Engagement in Axis. The page groups contact work, testimonials, reviews, feedback, operations, automation, and resilience without creating duplicate application shells. Select a saved or quick-filtered view, open one record, inspect its timeline and linked evidence, and use only actions shown as eligible for the current status.\n\nThe feedback reference journey submits an anonymous record, then performs `TRIAGE`, `ASSIGN`, `START`, `RESOLVE`, and `CONFIRM`. Confirm closure is intentionally separate from resolution. Reopen remains available when new customer evidence arrives. Contact work supports start, request information, resolve, close, reopen, spam handling, and handoff recovery. Review moderation supports approval, quarantine, rejection, and restoration. Testimonial operations preserve editorial version, customer consent, publication projection, emergency hide, and reconciliation as separate evidence.\n\nIf an action reports a revision conflict, reload the record and review the newer timeline. Never retry with a guessed revision. If a provider or Process handoff fails, keep the customer record accepted, inspect the deferred or dead-letter evidence, then use the dedicated recovery action. Do not change a domain record through generic schema CRUD.\n\n## Operate Commerce and reversals\n\nThe Commerce contract exposes cart calculation, checkout placement, and order reversal routes. A placement proceeds through deterministic checkpoints so failure after pricing, inventory reservation, payment authorization, order creation, or fulfillment submission can be compensated by the owning domain. Replaying the same idempotency key returns existing evidence instead of duplicating the order or payment.\n\nCancellation, return, and refund are not synonyms. Cancellation governs an eligible unfulfilled order or line, Return governs the physical or logical return case, and Refund governs money movement. Axis presents these as an Order Lifecycle journey and links payment, inventory, fulfillment, workflow, and audit evidence. Operators must inspect eligibility and preview impact before confirming a destructive or financial action.\n\n## Integrate providers safely\n\nProvider adapters implement a bounded port: validate enabled state and sandbox policy, resolve credentials by reference, send only the minimum permitted payload, produce a content-free provider reference, authenticate callbacks, reject replay, and expose health and reconciliation. Local providers are deterministic test doubles. Sandbox-capable providers are implementation evidence, while production qualification requires a deployment-owned account and sign-off.\n\nFor email and SMS, verify suppression before delivery and store no rendered content in events. For payment, use provider tokens rather than card data. For carrier and helpdesk handoff, keep external identifiers as references and let Commerce or Contact retain business lifecycle authority. A provider outage must yield retryable evidence, not an untracked domain-state change.\n\n## Privacy, data, and recovery\n\nEvery export requires a purpose, an allow-listed field set, masking, a maximum record count, an audit identity, and a checksum. Batch and repair operations require preview, approval, idempotency, per-item outcomes, and resumability. Core operations may coordinate commands, but each command returns to the owning domain service.\n\nWhen an automated Process ACTION fails, open the recovery queue in the existing Process Operations workspace. Inspect the stable error code and attempt budget, then retry with the displayed expected attempt or run the registered domain compensation. A stale attempt fails with a conflict; an exhausted incident stays dead-lettered. Process records the recovery outcome but never edits Commerce, Engagement, or another domain record directly.\n\nRetention evaluates policy and legal hold before archive or anonymization. Erasure must not delete records that regulation or an active legal hold requires; instead it records the denied or deferred outcome. Dead-letter replay uses the original bounded command identity and increments attempt evidence. Operators should be able to trace the original correlation identifier from customer intake through domain state, provider attempt, workflow, visibility, and recovery.\n\n## Observe and troubleshoot\n\nUse readiness first, then domain dashboards and timelines. Important signals include placement and reversal failure counts, provider latency and callback rejection, moderation and resolution SLA, overdue queue items, dead letters, replay outcomes, export failures, and projection drift. Logs and events must carry codes and correlation identifiers without message bodies, secrets, tokens, personal contact details, or payment data.\n\nWhen a public Engagement request fails, confirm a correlation header exists and that the feature is enabled in the effective server. When an operator queue appears empty, confirm pagination controls were not interpreted as persistence filters. When Axis hides an action, inspect current status, permission, and backend metadata before assuming a frontend defect. When a provider is disabled, do not enable it merely to make a test green; use the deterministic local adapter or supply a governed sandbox configuration.\n\n## Common mistakes\n\n- Calling a foundation or local mock “production complete.”\n- Starting Commerce or Engagement without Platform and then weakening fail-closed dependencies.\n- Editing MongoDB to create demo state instead of using a governed API or import.\n- Adding a second heavy Axis page when backend metadata can express the journey cleanly.\n- Letting a cross-domain batch mutate repository records directly.\n- Logging message content, addresses, credentials, tokens, or provider callback payloads.\n- Treating deployment qualification as a substitute for functional implementation.\n\n## Verification\n\nRun the owning package tests, then `npm run acceptance:functional` in Kickoff. Verify that submission is visible to an authorized operator, all lifecycle actions increment revision, closure is visible, public projections contain only approved data, and withdrawal or reversal removes eligibility without erasing required audit evidence. Run Axis verification after metadata changes and check keyboard navigation, responsive layout, action confirmation, empty states, error recovery, and permission-denied behavior.\n\nFor provider work, run success, timeout, rejection, duplicate callback, replay, reconciliation, and disabled-configuration contracts. For operational work, prove preview, approval, partial failure, resume, idempotent replay, legal hold, masked export, and repair evidence. Qualification against real external accounts, production-scale load, disaster recovery infrastructure, and formal accessibility sign-off remains a later environment gate.\n"
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
      "section": "discover-kickoff",
      "sectionTitle": "Discover Kickoff",
      "group": "project-identity-and-ownership",
      "groupTitle": "Project Identity and Ownership",
      "parentId": "nodics-kickoff",
      "hierarchyPath": [
        "Nodics Kickoff",
        "Discover Kickoff",
        "Kickoff project overview"
      ],
      "hierarchyDepth": 3,
      "documentType": "overview",
      "audience": [
        "business-user",
        "administrator",
        "architect",
        "developer",
        "operator",
        "qa",
        "ai-tool"
      ],
      "businessAudience": [
        "business-user",
        "administrator",
        "operator"
      ],
      "technicalAudience": [
        "architect",
        "developer",
        "qa",
        "ai-tool"
      ],
      "summary": "Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs.",
      "visibility": "public",
      "accessMode": "PUBLIC",
      "publiclyAvailable": true,
      "requiresAuthentication": false,
      "allowedRoles": [],
      "allowedGroups": [],
      "allowedPermissions": [],
      "lifecycleState": "ONLINE",
      "maturityState": "operational",
      "implementationState": "current",
      "relatedPages": [
        "kickoff.local-runtime",
        "kickoff.customization",
        "kickoff.functional-journeys"
      ],
      "visualRequirements": [
        "architecture-diagram",
        "table",
        "code-example"
      ],
      "searchKeywords": [
        "kickoff",
        "reference project",
        "customer project",
        "documentation"
      ],
      "topicKeywords": [
        "ownership",
        "project boundary",
        "local adoption"
      ],
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
          "text": "First successful setup journey",
          "anchor": "kickoffOverview-9-first-successful-setup-journey",
          "level": 2
        },
        {
          "text": "Documentation boundary",
          "anchor": "kickoffOverview-10-documentation-boundary",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffOverview-11-common-mistakes",
          "level": 2
        },
        {
          "text": "How to know Kickoff is working",
          "anchor": "kickoffOverview-12-how-to-know-kickoff-is-working",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffOverview-13-verification",
          "level": 2
        },
        {
          "text": "What to read next",
          "anchor": "kickoffOverview-14-what-to-read-next",
          "level": 2
        },
        {
          "text": "Continue",
          "anchor": "kickoffOverview-15-continue",
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
          "text": "Kickoff owns project structure, local environment wiring, project modules, sample customization points, and project documentation. Framework documentation belongs in `nodics.docs`; Axis product documentation belongs in the Platform `axis` backend module; browser renderers belong in `nodics.axis`. Kickoff-wide documentation source belongs in this repository under `docs/` and is generated into this repository's governed content pack. Documentation for a specific installed application belongs under that application's data module, for example `modules/nexus.web/docs/` or `modules/agora.apparel/docs/`."
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
              "Yes. Kickoff provides ready local Platform, WCMS, Process and Automation, and Axis wiring."
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
              "Yes. Process demonstrates observed optional runtime capability and registry lifecycle while exposing workflow and cronjob capabilities."
            ],
            [
              "Can accelerators be customized without changing framework code?",
              "Yes. Waste Management loads `nodics.waste`, `eWaste`, and the `kickoffWaste` project overlay as separate layers."
            ],
            [
              "Can an accelerator be imported before its business capabilities are active?",
              "No. The setup journey blocks it until required capabilities such as Commerce, Discovery, or Engagement are registered and active."
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
          "text": "Think of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample production line, `nodics.exp` as the frontend workspace shelf, and Axis, Nexus, and Agora as separate customer-facing screens. The factory equipment provides standard capabilities such as Core, Platform, WCMS, Media, Process, Commerce, and Engagement. The sample production line decides which equipment to connect for a local demonstration. The screens connect to the running backend and show only the capabilities that the backend says are available and authorized."
        },
        {
          "kind": "paragraph",
          "text": "Kickoff is not the product every customer must ship. It is the smallest complete example of how a customer product can be structured."
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart LR\n  Framework[\"Framework equipment<br/>nodics.ai\"] --> Project[\"Reference production line<br/>nodics.kickoff\"]\n  Project --> Servers[\"Local runtime servers\"]\n  Servers --> Platform[\"Platform: login and BackOffice\"]\n  Servers --> WCMS[\"WCMS: content and docs\"]\n  Servers --> Automation[\"Process server: workflows and scheduled capability\"]\n  Servers --> Commerce[\"Commerce and Engagement\"]\n  UiWorkspace[\"Frontend workspace<br/>nodics.exp\"] --> Axis[\"BackOffice<br/>nodics.axis\"]\n  UiWorkspace --> Nexus[\"Corporate site<br/>nodics.nexus\"]\n  UiWorkspace --> Agora[\"Commerce storefront<br/>nodics.agora.apparel\"]\n  Axis --> Platform\n  Axis --> WCMS\n  Axis --> Automation\n  Nexus --> WCMS\n  Agora --> Commerce"
        },
        {
          "kind": "paragraph",
          "text": "The metaphor is useful because it prevents a common mistake. You do not move factory equipment into a frontend application, and you do not hardcode screens into the production line. Each part has a job."
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
            "how Platform, WCMS Staged, WCMS Online, Process and Automation, Engagement, and Commerce can run as separate ownership domains while serving three frontends;",
            "how Waste Management runs as a separate backend with framework, accelerator, scenario, and project overlay layers;",
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
            "`package.json.name` declares the canonical stable project identity;",
            "`nodics.project.json`, when present, declares only project-owned command or acceptance overrides;",
            "`package.json.nodics` declares human-readable project metadata;",
            "`envs/<environment>/nodics.environment.json` declares environment domain selections, topology, acceptance, and qualification profile facts;",
            "`modules/*/data/manifest.json` declares module-owned data packs;",
            "`envs/<environment>/*Server/package.json` declares the framework packages required to bootstrap each runtime;",
            "`config/` contains project-level defaults;",
            "`envs/kickoffLocal/` contains local environment and server composition;",
            "`modules/` contains project-owned modules and customization examples;",
            "`docs/` contains authored Kickoff-wide documentation;",
            "`data/core-v001/records/documentation/` and the documentation section in `data/manifest.json` are generated content-pack outputs."
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
          "text": "flowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.foundation\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.process\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsStagedServer, wcmsOnlineServer, processServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]"
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
            "editing `nodics.foundation` because a project-specific rule is needed;",
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
            "It starts Platform, WCMS, and the composed Process and Automation runtime without asking the developer to create a production topology first.",
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
          "text": "First successful setup journey",
          "anchor": "kickoffOverview-9-first-successful-setup-journey"
        },
        {
          "kind": "paragraph",
          "text": "On a fresh schema, do not start by importing accelerator data in isolation. The user journey is intentionally ordered so Axis, module lifecycle, content packs, and Online delivery all agree."
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart LR\n  Axis[\"Initialize Axis baseline\"]\n  Modules[\"Register required capabilities\"]\n  Apps[\"Initialize Nexus and Agora packs\"]\n  Publish[\"Approve and publish Online\"]\n  Storefront[\"Open Nexus or Agora\"]\n  Docs[\"Import documentation packs\"]\n  Swagger[\"Open Swagger/OpenAPI\"]\n\n  Axis --> Modules --> Apps --> Publish --> Storefront\n  Axis -. parallel .-> Docs\n  Axis -. generated .-> Swagger"
        },
        {
          "kind": "table",
          "headers": [
            "Step",
            "What the user does in Axis",
            "Why it comes here"
          ],
          "rows": [
            [
              "1. Initialize Axis baseline",
              "Complete the empty-database Axis setup so the managed BackOffice workspace, CMS baseline, and admin access are available.",
              "Without Axis baseline, there is no reliable control plane for guided setup."
            ],
            [
              "2. Register capabilities",
              "Open Module Registry and register/activate the capabilities required by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when those features are enabled.",
              "A running server or visible import pack is not enough. The project must declare the capability as registered and active."
            ],
            [
              "3. Initialize applications",
              "Open Setup and Accelerators and initialize Nexus, Agora Apparel, Agora Electronics, or Agora Telco.",
              "Application initialization imports the complete site preparation package: CMS pages, routes, navigation, media metadata, media artifacts, commerce catalog data, and operational data owned by the pack."
            ],
            [
              "4. Publish Online",
              "Review publishable Staged changes, approve through the governed task, and publish to Online.",
              "Public applications consume Online only. Until Online has approved content, they show a customer-friendly maintenance state."
            ],
            [
              "5. Verify in browser",
              "Open Nexus and Agora storefronts and confirm the expected Online content, media, navigation, and business data appear.",
              "Browser verification proves the same path a customer sees, not only backend import success."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Documentation packs follow the same Staged-to-Online governance, but they do not block application setup. They can be imported and approved in parallel. Swagger/OpenAPI is generated from the active runtime contracts and should stay available independently of CMS documentation publication."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Documentation boundary",
          "anchor": "kickoffOverview-10-documentation-boundary"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff docs are imported through WCMS like any other governed CMS content pack. Axis renders the resolved CMS page and does not own the documentation records. The BackOffice registry exposes the documentation source so the Axis Documentation dashboard can discover it."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffOverview-11-common-mistakes"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Do not put framework documentation in Kickoff unless the page is explaining how Kickoff consumes the framework.",
            "Do not copy `nodics.foundation`, `nodics.platform`, `nodics.wcms`, or `nodics.process` source into this repository.",
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
          "anchor": "kickoffOverview-12-how-to-know-kickoff-is-working"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff is healthy when Platform starts, WCMS starts, the module registry shows mandatory functional modules as active, optional modules can be registered through Axis, documentation content packs can be imported or updated through BackOffice/WCMS, Setup and Accelerators blocks applications whose required business capabilities are not registered, and Axis can render Framework, Swaggers, Nodics Axis, and Nodics Kickoff documentation from backend-owned sources."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification",
          "anchor": "kickoffOverview-13-verification"
        },
        {
          "kind": "paragraph",
          "text": "Verify Kickoff as a reference customer project by proving that it can run the framework without becoming framework source. The local proof is to configure the framework root, install dependencies, start the six backend runtimes plus Axis, Nexus, and Agora, log in, initialize the Axis baseline, register required business capabilities, import required data releases, publish to Online, open the Kickoff documentation product, and verify Agora's multi-domain storefront. The project should contribute its own docs and sample behavior while framework docs still come from `nodics.docs` and Axis product docs still come from the Platform Axis backend module."
        },
        {
          "kind": "paragraph",
          "text": "For repository verification, run the Kickoff documentation contract test, runtime prepare tests, and local acceptance script when project behavior, environment/server configuration, documentation packs, or generated data change. If a future customer copies the reference project, the docs should teach them where to replace the project name and where not to create framework-level assumptions."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What to read next",
          "anchor": "kickoffOverview-14-what-to-read-next"
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
          "anchor": "kickoffOverview-15-continue"
        },
        {
          "kind": "unordered-list",
          "items": [
            "[Local runtime topology](local-runtime.md)",
            "[Customer customization guide](customization-guide.md)"
          ]
        }
      ],
      "searchText": "Kickoff project overview Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs. # Kickoff Project Overview\n\nNodics Kickoff is the reference customer project for running Nodics locally and\ndemonstrating how a partner or customer project consumes the framework. It is\nnot a standard Nodics functional module such as Core, Platform, WCMS, or Cron.\nIt is a project-owned runtime composition that shows how those modules can be\nassembled without copying framework source.\n\nKickoff owns project structure, local environment wiring, project modules,\nsample customization points, and project documentation. Framework\ndocumentation belongs in `nodics.docs`; Axis product documentation belongs in\nthe Platform `axis` backend module; browser renderers belong in `nodics.axis`.\nKickoff-wide documentation source belongs in this repository under `docs/` and\nis generated into this repository's governed content pack. Documentation for a\nspecific installed application belongs under that application's data module,\nfor example `modules/nexus.web/docs/` or `modules/agora.apparel/docs/`.\n\n## Why Kickoff exists\n\nKickoff exists so a new team can feel Nodics before they design their own\nproject. A partner should be able to clone the framework, clone the reference\nproject, run a small set of commands, log in to Axis, and see the major backend\ncapabilities working together.\n\nThis matters because enterprise framework adoption usually fails at the first\nhour. If the first experience requires a developer to understand every module,\nevery dependency, every data import, and every environment property, the\nframework feels heavy even when the architecture is good. Kickoff keeps the\nfirst journey small: start the runtime, import governed seed data, open Axis,\nread the documentation, and then make one safe customization.\n\nFor a business evaluator, Kickoff demonstrates that Nodics can support a real\ncustomer project without asking the customer to fork framework code. For a\ndeveloper, it shows the concrete folder shape, package dependency model,\nenvironment wiring, server start commands, and project-owned extension points.\nFor an operator, it shows how one local project can run Platform, WCMS, and a\ncombined Business Process & Automation runtime while preserving the same module\nownership rules that production will use.\n\n## What a new customer should learn\n\nKickoff should answer the questions a new customer asks before trusting a\nframework:\n\n| Question | Kickoff answer |\n| --- | --- |\n| Can I run it locally without designing my full product first? | Yes. Kickoff provides ready local Platform, WCMS, Process and Automation, and Axis wiring. |\n| Do I have to edit framework source to customize? | No. Customer modules and server/environment configuration load after framework modules. |\n| Can documentation and content be imported like real governed data? | Yes. Kickoff ships a project-owned documentation content pack. |\n| Can optional modules be added later? | Yes. Process demonstrates observed optional runtime capability and registry lifecycle while exposing workflow and cronjob capabilities. |\n| Can accelerators be customized without changing framework code? | Yes. Waste Management loads `nodics.waste`, `eWaste`, and the `kickoffWaste` project overlay as separate layers. |\n| Can an accelerator be imported before its business capabilities are active? | No. The setup journey blocks it until required capabilities such as Commerce, Discovery, or Engagement are registered and active. |\n| Can my real project use a different folder layout? | Yes. `NODICS_FRAMEWORK_ROOT` points Kickoff to the framework checkout. |\n\nThis makes Kickoff more than a sample app. It is the adoption proof for the\nwhole framework.\n\n## Beginner mental model\n\nThink of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample\nproduction line, `nodics.exp` as the frontend workspace shelf, and Axis, Nexus,\nand Agora as separate customer-facing screens. The factory equipment provides\nstandard capabilities such as Core, Platform, WCMS, Media, Process, Commerce,\nand Engagement. The sample production line decides which equipment to\nconnect for a local demonstration. The screens connect to the running backend\nand show only the capabilities that the backend says are available and\nauthorized.\n\nKickoff is not the product every customer must ship. It is the smallest\ncomplete example of how a customer product can be structured.\n\n```mermaid\nflowchart LR\n  Framework[\"Framework equipment<br/>nodics.ai\"] --> Project[\"Reference production line<br/>nodics.kickoff\"]\n  Project --> Servers[\"Local runtime servers\"]\n  Servers --> Platform[\"Platform: login and BackOffice\"]\n  Servers --> WCMS[\"WCMS: content and docs\"]\n  Servers --> Automation[\"Process server: workflows and scheduled capability\"]\n  Servers --> Commerce[\"Commerce and Engagement\"]\n  UiWorkspace[\"Frontend workspace<br/>nodics.exp\"] --> Axis[\"BackOffice<br/>nodics.axis\"]\n  UiWorkspace --> Nexus[\"Corporate site<br/>nodics.nexus\"]\n  UiWorkspace --> Agora[\"Commerce storefront<br/>nodics.agora.apparel\"]\n  Axis --> Platform\n  Axis --> WCMS\n  Axis --> Automation\n  Nexus --> WCMS\n  Agora --> Commerce\n```\n\nThe metaphor is useful because it prevents a common mistake. You do not move\nfactory equipment into a frontend application, and you do not hardcode screens\ninto the production line. Each part has a job.\n\n## What Kickoff demonstrates\n\n- how a customer project depends on Nodics framework packages;\n- how environment and server modules load after standard functional modules;\n- how Platform, WCMS Staged, WCMS Online, Process and Automation, Engagement, and\n  Commerce can run as separate ownership domains while serving three frontends;\n- how Waste Management runs as a separate backend with framework, accelerator,\n  scenario, and project overlay layers;\n- how project modules can customize runtime behavior without renaming the\n  standard functional module identity;\n- how customer-owned documentation can appear in Axis beside Framework,\n  Swaggers, and Nodics Axis.\n\n## Source map\n\nThe important Kickoff locations are:\n\n- `package.json` describes the project package and local scripts;\n- `.env` describes developer-specific framework checkout location and local\n  overrides;\n- `package.json.name` declares the canonical stable project identity;\n- `nodics.project.json`, when present, declares only project-owned command or\n  acceptance overrides;\n- `package.json.nodics` declares human-readable project metadata;\n- `envs/<environment>/nodics.environment.json` declares environment domain\n  selections, topology, acceptance, and qualification profile facts;\n- `modules/*/data/manifest.json` declares module-owned data packs;\n- `envs/<environment>/*Server/package.json` declares the framework packages\n  required to bootstrap each runtime;\n- `config/` contains project-level defaults;\n- `envs/kickoffLocal/` contains local environment and server composition;\n- `modules/` contains project-owned modules and customization examples;\n- `docs/` contains authored Kickoff-wide documentation;\n- `data/core-v001/records/documentation/` and the documentation section in `data/manifest.json` are\n  generated content-pack outputs.\n\nAuthored documentation is the source. Generated records are the importable CMS\nprojection. Do not hand-edit generated records to fix documentation.\n\n## Runtime boundary\n\nKickoff is loaded after framework modules. That means it can contribute\nconfiguration, project modules, and project-owned documentation, but it must not\nmove framework behavior into the customer repository. A customer extension such\nas `kickoff.platform` may customize Platform implementation while the\nbusiness-facing functional identity remains `nodics.platform`.\n\nRuntime composition and code dependency are related but different. Package\ndependencies make framework modules available to the project. Server\nconfiguration decides which modules are loaded, in which order, for a specific\nruntime process. Service override behavior follows module loading and indexes,\nnot simply the order in `package.json`.\n\n```mermaid\nflowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.foundation\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.process\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsStagedServer, wcmsOnlineServer, processServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]\n```\n\nThis diagram is intentionally simple. Kickoff does not own the framework\nmodules and Axis does not own backend data. Kickoff composes the backend\nruntime, and Axis renders whatever Platform/WCMS say is active, authorized,\nand available.\n\n## First customization promise\n\nA beginner should be able to make a first safe customization without fear.\nGood first customizations are intentionally small:\n\n- change a local property in the correct environment or server file;\n- add or update a Kickoff documentation page;\n- add a project-only service in a Kickoff module;\n- add project sample data that belongs to the customer project;\n- change WCMS-managed content through Axis after import.\n\nBad first customizations are also easy to name:\n\n- editing `nodics.foundation` because a project-specific rule is needed;\n- putting CMS import data into `nodics.axis`;\n- changing generated files without changing their source;\n- changing a standard functional module identity because a project customized\n  implementation;\n- hiding a status, error code, permission, or lifecycle state in an unrelated\n  property file.\n\nKickoff exists to teach the safe path first.\n\n## Beginner story\n\nA new developer can think of Kickoff as a training project:\n\n1. It shows where a customer project keeps project modules.\n2. It shows where local environment/server configuration lives.\n3. It shows how to point at a framework checkout that may live anywhere on the\n   machine.\n4. It starts Platform, WCMS, and the composed Process and Automation runtime\n   without asking the developer to create a production topology first.\n5. It ships project-owned documentation so Axis can show framework docs,\n   Axis docs, and customer-project docs side by side.\n\nAfter the developer understands this reference shape, they can create a real\ncustomer project with the same rules but different business modules, branding,\ndata, environments, and deployment choices.\n\n## First successful setup journey\n\nOn a fresh schema, do not start by importing accelerator data in isolation.\nThe user journey is intentionally ordered so Axis, module lifecycle, content\npacks, and Online delivery all agree.\n\n```mermaid\nflowchart LR\n  Axis[\"Initialize Axis baseline\"]\n  Modules[\"Register required capabilities\"]\n  Apps[\"Initialize Nexus and Agora packs\"]\n  Publish[\"Approve and publish Online\"]\n  Storefront[\"Open Nexus or Agora\"]\n  Docs[\"Import documentation packs\"]\n  Swagger[\"Open Swagger/OpenAPI\"]\n\n  Axis --> Modules --> Apps --> Publish --> Storefront\n  Axis -. parallel .-> Docs\n  Axis -. generated .-> Swagger\n```\n\n| Step | What the user does in Axis | Why it comes here |\n| --- | --- | --- |\n| 1. Initialize Axis baseline | Complete the empty-database Axis setup so the managed BackOffice workspace, CMS baseline, and admin access are available. | Without Axis baseline, there is no reliable control plane for guided setup. |\n| 2. Register capabilities | Open Module Registry and register/activate the capabilities required by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when those features are enabled. | A running server or visible import pack is not enough. The project must declare the capability as registered and active. |\n| 3. Initialize applications | Open Setup and Accelerators and initialize Nexus, Agora Apparel, Agora Electronics, or Agora Telco. | Application initialization imports the complete site preparation package: CMS pages, routes, navigation, media metadata, media artifacts, commerce catalog data, and operational data owned by the pack. |\n| 4. Publish Online | Review publishable Staged changes, approve through the governed task, and publish to Online. | Public applications consume Online only. Until Online has approved content, they show a customer-friendly maintenance state. |\n| 5. Verify in browser | Open Nexus and Agora storefronts and confirm the expected Online content, media, navigation, and business data appear. | Browser verification proves the same path a customer sees, not only backend import success. |\n\nDocumentation packs follow the same Staged-to-Online governance, but they do\nnot block application setup. They can be imported and approved in parallel.\nSwagger/OpenAPI is generated from the active runtime contracts and should stay\navailable independently of CMS documentation publication.\n\n## Documentation boundary\n\nKickoff docs are imported through WCMS like any other governed CMS content\npack. Axis renders the resolved CMS page and does not own the documentation\nrecords. The BackOffice registry exposes the documentation source so the Axis\nDocumentation dashboard can discover it.\n\n## Common mistakes\n\n- Do not put framework documentation in Kickoff unless the page is explaining\n  how Kickoff consumes the framework.\n- Do not copy `nodics.foundation`, `nodics.platform`, `nodics.wcms`, or `nodics.process`\n  source into this repository.\n- Do not move Axis renderers or browser code into Kickoff.\n- Do not assume a customer project will always sit beside `nodics.ai`; use the\n  framework-root configuration.\n- Do not change generated content-pack files without regenerating from source.\n- Do not rename functional capabilities when a customer module only customizes\n  their implementation.\n\n## How to know Kickoff is working\n\nKickoff is healthy when Platform starts, WCMS starts, the module registry shows\nmandatory functional modules as active, optional modules can be registered\nthrough Axis, documentation content packs can be imported or updated through\nBackOffice/WCMS, Setup and Accelerators blocks applications whose required\nbusiness capabilities are not registered, and Axis can render Framework,\nSwaggers, Nodics Axis, and Nodics Kickoff documentation from backend-owned\nsources.\n\n## Verification\n\nVerify Kickoff as a reference customer project by proving that it can run the\nframework without becoming framework source. The local proof is to configure\nthe framework root, install dependencies, start the six backend runtimes plus\nAxis, Nexus, and Agora, log in, initialize the Axis baseline, register required\nbusiness capabilities, import required data releases, publish to Online, open\nthe Kickoff documentation product, and verify Agora's multi-domain storefront. The project\nshould contribute its own docs and sample behavior while framework docs still\ncome from `nodics.docs` and Axis product docs still come from the Platform Axis\nbackend module.\n\nFor repository verification, run the Kickoff documentation contract test,\nruntime prepare tests, and local acceptance script when project behavior,\nenvironment/server configuration, documentation packs, or generated data\nchange. If a future customer copies the reference project, the docs should\nteach them where to replace the project name and where not to create\nframework-level assumptions.\n\n## What to read next\n\nRead Kickoff in this order:\n\n1. **Local runtime topology** to understand which servers start and why.\n2. **Local acceptance checklist** to prove the environment from a fresh local\n   database.\n3. **Customer customization guide** to learn how to change behavior without\n   damaging framework ownership.\n4. Framework documentation for Core, Platform, WCMS, Cron, imports, and DevOps\n   once the local system is running.\n\n## Continue\n\n- [Local runtime topology](local-runtime.md)\n- [Customer customization guide](customization-guide.md)\n",
      "previous": null,
      "next": {
        "title": "Local runtime topology",
        "route": "/docs/nodics-kickoff/kickoff-local-runtime"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "nodics.kickoff",
        "path": "docs/pages/project-overview.md",
        "wordCount": 2161,
        "checksum": "86de4cf69989d4569b612744f6b2744314c573c4d5aee3c70d450cf602add8d4"
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
      "section": "run-kickoff-locally",
      "sectionTitle": "Run Kickoff Locally",
      "group": "runtime-topology",
      "groupTitle": "Runtime Topology",
      "parentId": "run-kickoff-locally",
      "hierarchyPath": [
        "Nodics Kickoff",
        "Run Kickoff Locally",
        "Local runtime topology"
      ],
      "hierarchyDepth": 3,
      "documentType": "operations",
      "audience": [
        "business-user",
        "administrator",
        "architect",
        "developer",
        "operator",
        "qa",
        "ai-tool"
      ],
      "businessAudience": [
        "administrator",
        "operator"
      ],
      "technicalAudience": [
        "architect",
        "developer",
        "qa",
        "ai-tool"
      ],
      "summary": "Start and reason about the local Platform, WCMS, and Process servers that make the reference project usable.",
      "visibility": "public",
      "accessMode": "PUBLIC",
      "publiclyAvailable": true,
      "requiresAuthentication": false,
      "allowedRoles": [],
      "allowedGroups": [],
      "allowedPermissions": [],
      "lifecycleState": "ONLINE",
      "maturityState": "operational",
      "implementationState": "current",
      "relatedPages": [
        "kickoff.overview",
        "kickoff.local-acceptance",
        "kickoff.deployment-qualification"
      ],
      "visualRequirements": [
        "troubleshooting-matrix",
        "command-example"
      ],
      "searchKeywords": [
        "local runtime",
        "topology",
        "start",
        "servers"
      ],
      "topicKeywords": [
        "platform",
        "wcms",
        "process",
        "axis",
        "nexus",
        "agora"
      ],
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
          "text": "Fresh environment setup order",
          "anchor": "kickoffLocalRuntime-7-fresh-environment-setup-order",
          "level": 2
        },
        {
          "text": "Documentation import",
          "anchor": "kickoffLocalRuntime-8-documentation-import",
          "level": 2
        },
        {
          "text": "Troubleshooting",
          "anchor": "kickoffLocalRuntime-9-troubleshooting",
          "level": 2
        },
        {
          "text": "Production note",
          "anchor": "kickoffLocalRuntime-10-production-note",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffLocalRuntime-11-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffLocalRuntime-12-verification",
          "level": 2
        },
        {
          "text": "Continue",
          "anchor": "kickoffLocalRuntime-13-continue",
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
          "kind": "table",
          "headers": [
            "Runtime part",
            "Business purpose",
            "Developer/operator responsibility"
          ],
          "rows": [
            [
              "Platform",
              "Employee login, BackOffice bootstrap, module registry, and API discovery",
              "Start first, verify Profile and BackOffice are reachable, and keep tokens out of logs"
            ],
            [
              "WCMS Staged and Online",
              "Governed content, media, documentation, and public delivery",
              "Keep Staged authoring separate from Online delivery and import content packs through governance"
            ],
            [
              "Process and Automation",
              "Workflow, cronjob, scheduled capability, and recovery evidence",
              "Start when process or scheduled behavior is being tested and avoid duplicate scheduler authority"
            ],
            [
              "Waste Management",
              "Generic waste submission, collection acceptance, verification, receipt, impact, and accelerator/project presets",
              "Keep Waste separate from Loyalty and Location, and load project overlays after scenario accelerator data"
            ],
            [
              "Axis",
              "Employee control plane for setup, import, documentation, and operations",
              "Point to the correct Platform URL and verify only authorized capabilities appear"
            ],
            [
              "Nexus and Agora accelerators",
              "Public/customer-facing proof of Online delivery",
              "Consume Online and customer-safe APIs only, never Staged or internal operations"
            ]
          ]
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
            "`wcmsStagedServer` starts the WCMS Staged runtime. It loads Core, WCMS, CMS, Media, and Kickoff content-pack modules for authoring, import, review, and publication-source behavior.",
            "`wcmsOnlineServer` starts the WCMS Online runtime. It loads the approved delivery boundary for public CMS, media, Nexus, and Agora consumption.",
            "`processServer` starts the combined Business Process & Automation runtime. It loads Core, Process, cronjob, workflow modules, and Kickoff project modules. The `workflow` module owns process/workflow definitions; the `cronjob` module owns job definitions, triggers, scheduler state, and execution lifecycle.",
            "`wasteServer` starts the isolated Waste Management runtime. It loads `nodics.waste`, the Waste accelerator umbrella, `eWaste`, and the project-owned `kickoffWaste` overlay while keeping Loyalty, Location, vendor, recycler, and logistics integrations in their owning layers."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Kickoff intentionally has no standalone cronjob server. Scheduled automation is available only through `processServer`, preventing accidental duplicate scheduler processes while cronjob retains ownership of its job lifecycle."
        },
        {
          "kind": "paragraph",
          "text": "Axis, Nexus, and Agora are separate frontend applications grouped locally by the optional `nodics.exp` workspace. `nodics.exp` owns frontend discovery and tooling only; each application still owns its own source, release, tests, and runtime behavior. Axis connects to Platform for employee authentication and BackOffice bootstrap. Nexus consumes WCMS Online and Engagement public delivery contracts. Agora consumes Platform, WCMS Online, Engagement, and Commerce customer contracts."
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
          "text": "npm run start:platform\nnpm run start:wcms:staged\nnpm run start:wcms:online\nnpm run start:process"
        },
        {
          "kind": "paragraph",
          "text": "The governed supervisor starts all three frontends with the nine backends:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:start:all"
        },
        {
          "kind": "paragraph",
          "text": "In the preferred local checkout, frontend applications live under `../nodics.exp/`:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "nodicsRoot/\n├── nodics.ai/\n├── nodics.kickoff/\n└── nodics.exp/\n    ├── nodics.axis/\n    ├── nodics.nexus/\n    └── nodics.agora.apparel/"
        },
        {
          "kind": "paragraph",
          "text": "If a developer keeps the frontend apps somewhere else, set the explicit root environment variables used by the relevant script, for example `NODICS_AXIS_ROOT` for Axis smoke and `NODICS_QUALIFICATION_AXIS_ROOT`, `NODICS_QUALIFICATION_NEXUS_ROOT`, and `NODICS_QUALIFICATION_AGORA_ROOT` for deployment qualification evidence."
        },
        {
          "kind": "paragraph",
          "text": "The default local ports are:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Axis: `http://localhost:3100`",
            "Nexus: `http://localhost:3200`",
            "Agora: `http://localhost:3300`",
            "Platform: `http://localhost:4300`",
            "WCMS Staged: `http://localhost:4312`",
            "WCMS Online: `http://localhost:4314`",
            "Process and Automation: `http://localhost:4330`",
            "Engagement: `http://localhost:4340`",
            "Commerce: `http://localhost:4350`",
            "Waste Management: `http://localhost:4370`"
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
          "text": "Then install project dependencies:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm install"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff does not copy or symlink framework modules into `.nodics/`. Project scripts call `scripts/nodics-project.js`, which reads `.env`, locates `nodics.ai`, and delegates lifecycle/startup work to framework-owned tooling."
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
            "Start Process and Automation when process/workflow or scheduled behavior is needed. It proves `workflow` and `cronjob` can share one runtime environment under `nodics.process` while keeping separate module ownership.",
            "Start Waste Management when waste submission, acceptance, receipt, impact, or Waste accelerator data is being tested. Its local initialization profile installs `eWaste:core-reference` followed by `kickoffWaste:project-reference`.",
            "Start Axis, Nexus, and Agora after backend servers are reachable. Each frontend uses only its governed backend contracts and configured CORS origin."
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
            "register and activate required business capabilities before initializing a customer-facing application: Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when those features are enabled;",
            "if Process and Automation is running, confirm Process appears from the composed runtime and exposes both `workflow` and `cronjob` capabilities;",
            "open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics Kickoff are shown as separate documentation products;",
            "import or update documentation packs only through the authorized Axis action."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Fresh environment setup order",
          "anchor": "kickoffLocalRuntime-7-fresh-environment-setup-order"
        },
        {
          "kind": "paragraph",
          "text": "A fresh local schema is ready only after four governed lanes are complete. Do not treat a successful import button as proof that a storefront is ready; the setup page must also show required capabilities, publication state, and Online readiness."
        },
        {
          "kind": "table",
          "headers": [
            "Order",
            "Axis workspace",
            "What must happen",
            "User-visible result"
          ],
          "rows": [
            [
              "1",
              "Empty-database Axis setup",
              "Initialize the managed Axis baseline, BackOffice workspace, CMS baseline, admin access, and required core data.",
              "Axis leaves recovery mode and exposes authorized navigation."
            ],
            [
              "2",
              "Module Registry",
              "Register and activate functional capabilities needed by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when enabled.",
              "Setup and Accelerators no longer shows a capability-blocked state for that application."
            ],
            [
              "3",
              "Setup and Accelerators",
              "Initialize Nexus or Agora application packs. A complete pack imports CMS content, routes, navigation, media metadata, media artifacts, commerce data, search/discovery data, and operational data owned by that application.",
              "The application row shows initialized Staged data and the next publishing action."
            ],
            [
              "4",
              "Publishing and approval",
              "Request approval, review evidence, approve or reject, and publish the approved release to Online.",
              "Nexus and Agora can render Online content; otherwise they show the maintenance page."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Documentation packs are independent from accelerator setup. Framework, Axis, and Kickoff documentation can be imported, reviewed, and published in parallel with application setup. Swagger/OpenAPI is generated from active runtime contracts and should not be hidden behind documentation content-pack approval."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Documentation import",
          "anchor": "kickoffLocalRuntime-8-documentation-import"
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
          "anchor": "kickoffLocalRuntime-9-troubleshooting"
        },
        {
          "kind": "paragraph",
          "text": "If Axis shows a BackOffice registry recovery page, Platform is not reachable, the Platform port is wrong, or Axis public configuration points at the wrong base URL. If Axis logs in but documentation routes show CMS recovery, WCMS may not be running, the documentation source may not be registered, or the content pack may not be imported. If an optional module appears only after refresh, check the module registry API response after each lifecycle operation before assuming the frontend state is wrong."
        },
        {
          "kind": "paragraph",
          "text": "If Nodics scripts cannot locate framework packages, check `NODICS_FRAMEWORK_ROOT` and confirm the configured directory contains `nodics.foundation`, `nodics.platform`, `nodics.wcms`, and any optional framework modules used by the local server."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Production note",
          "anchor": "kickoffLocalRuntime-10-production-note"
        },
        {
          "kind": "paragraph",
          "text": "The local topology teaches ownership, not final infrastructure. Production may run modules in separate processes, hosts, containers, or release units. That does not change documentation ownership, module identity, API authority, or the rule that Axis discovers runtime capability from BackOffice instead of keeping its own endpoint registry."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffLocalRuntime-11-common-mistakes"
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
          "anchor": "kickoffLocalRuntime-12-verification"
        },
        {
          "kind": "paragraph",
          "text": "Use these focused checks when changing Waste composition:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run test:waste-overlay\nnpm run test:waste-runtime\nnpm run acceptance:waste-management"
        },
        {
          "kind": "paragraph",
          "text": "`test:waste-overlay` proves the project-owned `kickoffWaste` data overlay contract. `test:waste-runtime` proves the server composition, initialization profile, and active modules. `acceptance:waste-management` installs the schema-driven accelerator and project releases, validates persisted records, and runs the generic acceptance, submission, lifecycle, and impact journey."
        },
        {
          "kind": "paragraph",
          "text": "The final pre-Builder gate must use a fresh Local database and qualify all nine runtimes together: Platform, WCMS Staged, WCMS Online, Process, Engagement, Commerce, Waste Management, Axis, Nexus, and Agora. Verify the topology from the customer project, not from framework internals. Platform should expose login, BackOffice bootstrap, registry, and API discovery. WCMS should expose content, documentation, media, and import/export delivery. Process and Automation should report Process runtime availability with workflow and cronjob technical modules from the composed server. Axis should connect through Platform and WCMS instead of local hardcoded module state."
        },
        {
          "kind": "paragraph",
          "text": "For a beginner-friendly proof, open Axis after the servers start and inspect Dashboard, System and Integrations, Module Registry, Imports and Exports, Content and Experience, Media, Business Process & Automation, and Documentation. The UI should explain the same topology that the server configuration declares."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Continue",
          "anchor": "kickoffLocalRuntime-13-continue"
        },
        {
          "kind": "unordered-list",
          "items": [
            "[Kickoff project overview](project-overview.md)",
            "[Customer customization guide](customization-guide.md)"
          ]
        }
      ],
      "searchText": "Local runtime topology Start and reason about the local Platform, WCMS, and Process servers that make the reference project usable. # Local Runtime Topology\n\nKickoff provides a local reference topology so a developer can start Nodics and\nsee the major runtime surfaces without creating a new customer project first.\nThe local environment is `kickoffLocal`.\n\n## What this is\n\nThe local runtime topology is the smallest practical Nodics deployment on a\ndeveloper machine. It runs the framework as real backend servers, not as mocked\nscreens. That is important because Axis, BackOffice, module registration,\ncontent-pack import, API contracts, authentication, and WCMS routing all depend\non backend authority.\n\nThe goal is not to teach every production option on day one. The goal is to\ngive a beginner a reliable local loop: configure framework location, install\ndependencies, start servers, log in, import/update data, and observe the\nruntime from Axis.\n\n| Runtime part | Business purpose | Developer/operator responsibility |\n| --- | --- | --- |\n| Platform | Employee login, BackOffice bootstrap, module registry, and API discovery | Start first, verify Profile and BackOffice are reachable, and keep tokens out of logs |\n| WCMS Staged and Online | Governed content, media, documentation, and public delivery | Keep Staged authoring separate from Online delivery and import content packs through governance |\n| Process and Automation | Workflow, cronjob, scheduled capability, and recovery evidence | Start when process or scheduled behavior is being tested and avoid duplicate scheduler authority |\n| Waste Management | Generic waste submission, collection acceptance, verification, receipt, impact, and accelerator/project presets | Keep Waste separate from Loyalty and Location, and load project overlays after scenario accelerator data |\n| Axis | Employee control plane for setup, import, documentation, and operations | Point to the correct Platform URL and verify only authorized capabilities appear |\n| Nexus and Agora accelerators | Public/customer-facing proof of Online delivery | Consume Online and customer-safe APIs only, never Staged or internal operations |\n\n## Servers\n\nThe current local topology uses separate runtime servers:\n\n- `platformServer` starts the Platform runtime. It loads Core, Platform,\n  Profile, BackOffice, the Platform `axis` backend module, and Kickoff project\n  modules.\n- `wcmsStagedServer` starts the WCMS Staged runtime. It loads Core, WCMS, CMS,\n  Media, and Kickoff content-pack modules for authoring, import, review, and\n  publication-source behavior.\n- `wcmsOnlineServer` starts the WCMS Online runtime. It loads the approved\n  delivery boundary for public CMS, media, Nexus, and Agora consumption.\n- `processServer` starts the combined Business Process & Automation runtime.\n  It loads Core, Process, cronjob, workflow modules, and Kickoff project\n  modules. The `workflow` module owns process/workflow definitions; the\n  `cronjob` module owns job definitions, triggers, scheduler state, and\n  execution lifecycle.\n- `wasteServer` starts the isolated Waste Management runtime. It loads\n  `nodics.waste`, the Waste accelerator umbrella, `eWaste`, and the\n  project-owned `kickoffWaste` overlay while keeping Loyalty, Location, vendor,\n  recycler, and logistics integrations in their owning layers.\n\nKickoff intentionally has no standalone cronjob server. Scheduled automation is\navailable only through `processServer`, preventing accidental duplicate\nscheduler processes while cronjob retains ownership of its job lifecycle.\n\nAxis, Nexus, and Agora are separate frontend applications grouped locally by\nthe optional `nodics.exp` workspace. `nodics.exp` owns frontend discovery and\ntooling only; each application still owns its own source, release, tests, and\nruntime behavior. Axis connects to Platform for employee authentication and\nBackOffice bootstrap. Nexus consumes WCMS Online and Engagement public delivery\ncontracts. Agora consumes Platform, WCMS Online, Engagement, and Commerce\ncustomer contracts.\n\n## Start locally\n\nUse separate terminals from the Kickoff repository:\n\n```bash\nnpm run start:platform\nnpm run start:wcms:staged\nnpm run start:wcms:online\nnpm run start:process\n```\n\nThe governed supervisor starts all three frontends with the nine backends:\n\n```bash\nnpm run topology:start:all\n```\n\nIn the preferred local checkout, frontend applications live under\n`../nodics.exp/`:\n\n```text\nnodicsRoot/\n├── nodics.ai/\n├── nodics.kickoff/\n└── nodics.exp/\n    ├── nodics.axis/\n    ├── nodics.nexus/\n    └── nodics.agora.apparel/\n```\n\nIf a developer keeps the frontend apps somewhere else, set the explicit root\nenvironment variables used by the relevant script, for example\n`NODICS_AXIS_ROOT` for Axis smoke and `NODICS_QUALIFICATION_AXIS_ROOT`,\n`NODICS_QUALIFICATION_NEXUS_ROOT`, and `NODICS_QUALIFICATION_AGORA_ROOT` for\ndeployment qualification evidence.\n\nThe default local ports are:\n\n- Axis: `http://localhost:3100`\n- Nexus: `http://localhost:3200`\n- Agora: `http://localhost:3300`\n- Platform: `http://localhost:4300`\n- WCMS Staged: `http://localhost:4312`\n- WCMS Online: `http://localhost:4314`\n- Process and Automation: `http://localhost:4330`\n- Engagement: `http://localhost:4340`\n- Commerce: `http://localhost:4350`\n- Waste Management: `http://localhost:4370`\n\n## Before starting\n\nFrom `nodics.kickoff`, copy and review local environment configuration:\n\n```bash\ncp .env.example .env\n```\n\nSet the framework checkout location:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nThe path may be absolute or relative to the Kickoff project root. This avoids a\nhard dependency on a fixed workspace layout. One developer may keep framework\ncode beside Kickoff; another may keep it in a different projects directory.\n\nThen install project dependencies:\n\n```bash\nnpm install\n```\n\nKickoff does not copy or symlink framework modules into `.nodics/`. Project\nscripts call `scripts/nodics-project.js`, which reads `.env`, locates\n`nodics.ai`, and delegates lifecycle/startup work to framework-owned tooling.\n\n## Start sequence\n\nUse separate terminals so logs stay readable:\n\n1. Start Platform first. It owns Profile login, BackOffice bootstrap, module\n   registry, runtime catalogue projection, and OpenAPI contract discovery.\n2. Start WCMS second. It owns documentation sites, catalogs, pages, components,\n   routes, media metadata, and content delivery.\n3. Start Process and Automation when process/workflow or scheduled behavior is\n   needed. It proves `workflow` and `cronjob` can share one runtime environment\n   under `nodics.process` while keeping separate module ownership.\n4. Start Waste Management when waste submission, acceptance, receipt, impact,\n   or Waste accelerator data is being tested. Its local initialization profile\n   installs `eWaste:core-reference` followed by\n   `kickoffWaste:project-reference`.\n5. Start Axis, Nexus, and Agora after backend servers are reachable. Each\n   frontend uses only its governed backend contracts and configured CORS origin.\n\n## Login and first checks\n\nOpen Axis at `http://localhost:3100`. For the local reference data, use:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nAfter login:\n\n- open the System and Integrations area and check the module registry;\n- confirm Core, Platform, and WCMS are active and not treated as optional;\n- register and activate required business capabilities before initializing a\n  customer-facing application: Agora requires Commerce and Discovery; Nexus\n  requires its public content and engagement capabilities when those features\n  are enabled;\n- if Process and Automation is running, confirm Process appears from the\n  composed runtime and exposes both `workflow` and `cronjob` capabilities;\n- open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics\n  Kickoff are shown as separate documentation products;\n- import or update documentation packs only through the authorized Axis action.\n\n## Fresh environment setup order\n\nA fresh local schema is ready only after four governed lanes are complete.\nDo not treat a successful import button as proof that a storefront is ready;\nthe setup page must also show required capabilities, publication state, and\nOnline readiness.\n\n| Order | Axis workspace | What must happen | User-visible result |\n| ---: | --- | --- | --- |\n| 1 | Empty-database Axis setup | Initialize the managed Axis baseline, BackOffice workspace, CMS baseline, admin access, and required core data. | Axis leaves recovery mode and exposes authorized navigation. |\n| 2 | Module Registry | Register and activate functional capabilities needed by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when enabled. | Setup and Accelerators no longer shows a capability-blocked state for that application. |\n| 3 | Setup and Accelerators | Initialize Nexus or Agora application packs. A complete pack imports CMS content, routes, navigation, media metadata, media artifacts, commerce data, search/discovery data, and operational data owned by that application. | The application row shows initialized Staged data and the next publishing action. |\n| 4 | Publishing and approval | Request approval, review evidence, approve or reject, and publish the approved release to Online. | Nexus and Agora can render Online content; otherwise they show the maintenance page. |\n\nDocumentation packs are independent from accelerator setup. Framework, Axis,\nand Kickoff documentation can be imported, reviewed, and published in parallel\nwith application setup. Swagger/OpenAPI is generated from active runtime\ncontracts and should not be hidden behind documentation content-pack approval.\n\n## Documentation import\n\nProject documentation is generated into a Kickoff content pack and imported\nthrough WCMS. The pack code is `kickoffDocumentation`; the CMS Site is\n`kickoffDocumentationSite`; the default route is `/docs/nodics-kickoff`.\n\nIf the documentation page is unavailable in Axis, check that WCMS is running,\nthe content pack is generated, and the latest pack version has been imported.\nThe content-pack service rejects changed content with the same immutable\nversion, so update the catalogue version whenever generated hashes change.\n\n## Troubleshooting\n\nIf Axis shows a BackOffice registry recovery page, Platform is not reachable,\nthe Platform port is wrong, or Axis public configuration points at the wrong\nbase URL. If Axis logs in but documentation routes show CMS recovery, WCMS may\nnot be running, the documentation source may not be registered, or the content\npack may not be imported. If an optional module appears only after refresh,\ncheck the module registry API response after each lifecycle operation before\nassuming the frontend state is wrong.\n\nIf Nodics scripts cannot locate framework packages, check `NODICS_FRAMEWORK_ROOT`\nand confirm the configured directory contains `nodics.foundation`,\n`nodics.platform`, `nodics.wcms`, and any optional framework modules used by the\nlocal server.\n\n## Production note\n\nThe local topology teaches ownership, not final infrastructure. Production may\nrun modules in separate processes, hosts, containers, or release units. That\ndoes not change documentation ownership, module identity, API authority, or the\nrule that Axis discovers runtime capability from BackOffice instead of keeping\nits own endpoint registry.\n\n## Common mistakes\n\n- Starting only the frontend and assuming backend discovery should work.\n- Putting long inherited property blocks into a server config when the project\n  only needs a small override.\n- Assuming every framework module in the checkout is active for every server.\n  The configured runtime graph decides what loads.\n- Treating Cron as owned by Process just because the reference workspace can\n  run both in the same `processServer`.\n- Using local ports, database names, or project names as permanent framework\n  assumptions.\n- Forgetting that restart should preserve persisted registry and imported\n  content state.\n\n## Verification\n\nUse these focused checks when changing Waste composition:\n\n```bash\nnpm run test:waste-overlay\nnpm run test:waste-runtime\nnpm run acceptance:waste-management\n```\n\n`test:waste-overlay` proves the project-owned `kickoffWaste` data overlay\ncontract. `test:waste-runtime` proves the server composition, initialization\nprofile, and active modules. `acceptance:waste-management` installs the\nschema-driven accelerator and project releases, validates persisted records,\nand runs the generic acceptance, submission, lifecycle, and impact journey.\n\nThe final pre-Builder gate must use a fresh Local database and qualify all nine\nruntimes together: Platform, WCMS Staged, WCMS Online, Process, Engagement,\nCommerce, Waste Management, Axis, Nexus, and Agora. Verify the topology from\nthe customer project, not from framework internals. Platform should expose login,\nBackOffice bootstrap, registry, and API discovery. WCMS should expose content,\ndocumentation, media, and import/export delivery. Process and Automation should\nreport Process runtime availability with workflow and cronjob technical modules\nfrom the composed server.\nAxis should connect through Platform and WCMS instead of local hardcoded module\nstate.\n\nFor a beginner-friendly proof, open Axis after the servers start and inspect\nDashboard, System and Integrations, Module Registry, Imports and Exports,\nContent and Experience, Media, Business Process & Automation, and\nDocumentation. The UI should explain the same topology that the server\nconfiguration declares.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Customer customization guide](customization-guide.md)\n",
      "previous": {
        "title": "Kickoff project overview",
        "route": "/docs/nodics-kickoff"
      },
      "next": {
        "title": "Local setup to live runbook",
        "route": "/docs/nodics-kickoff/kickoff-local-setup-to-live"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "docs/pages/local-runtime.md",
        "wordCount": 1789,
        "checksum": "628544abef5bd2e15d529bf52913b744045e39dd807af45003e12ff026fb97ba"
      }
    },
    "active": true
  },
  "record3": {
    "code": "kickoffDocsComponentkickoffLocalSetupToLive",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.local-setup-to-live",
      "title": "Local setup to live runbook",
      "route": "/docs/nodics-kickoff/kickoff-local-setup-to-live",
      "section": "run-kickoff-locally",
      "sectionTitle": "Run Kickoff Locally",
      "group": "runtime-topology",
      "groupTitle": "Runtime Topology",
      "parentId": "run-kickoff-locally",
      "hierarchyPath": [
        "Nodics Kickoff",
        "Run Kickoff Locally",
        "Local setup to live runbook"
      ],
      "hierarchyDepth": 3,
      "documentType": "how-to",
      "audience": [
        "business-user",
        "administrator",
        "architect",
        "developer",
        "operator",
        "qa",
        "ai-tool"
      ],
      "businessAudience": [
        "business-user",
        "administrator",
        "operator"
      ],
      "technicalAudience": [
        "architect",
        "developer",
        "qa",
        "ai-tool"
      ],
      "summary": "Follow the screenshot-guided path from local startup to Axis login, guided setup, publication, and live Nexus and Agora verification.",
      "visibility": "public",
      "accessMode": "PUBLIC",
      "publiclyAvailable": true,
      "requiresAuthentication": false,
      "allowedRoles": [],
      "allowedGroups": [],
      "allowedPermissions": [],
      "lifecycleState": "ONLINE",
      "maturityState": "operational",
      "implementationState": "current",
      "relatedPages": [
        "kickoff.local-runtime",
        "kickoff.local-acceptance",
        "kickoff.local-publishing-operations"
      ],
      "visualRequirements": [
        "screenshot",
        "command-example",
        "troubleshooting-matrix"
      ],
      "searchKeywords": [
        "local setup",
        "axis login",
        "guided setup",
        "live verification",
        "screenshots"
      ],
      "topicKeywords": [
        "axis",
        "module registry",
        "data import",
        "publishing",
        "nexus",
        "agora"
      ],
      "headings": [
        {
          "text": "What live means",
          "anchor": "kickoffLocalSetupToLive-1-what-live-means",
          "level": 2
        },
        {
          "text": "Repository layout",
          "anchor": "kickoffLocalSetupToLive-2-repository-layout",
          "level": 2
        },
        {
          "text": "Prepare the project",
          "anchor": "kickoffLocalSetupToLive-3-prepare-the-project",
          "level": 2
        },
        {
          "text": "Start the local stack",
          "anchor": "kickoffLocalSetupToLive-4-start-the-local-stack",
          "level": 2
        },
        {
          "text": "First launch before Axis data exists",
          "anchor": "kickoffLocalSetupToLive-5-first-launch-before-axis-data-exists",
          "level": 2
        },
        {
          "text": "Open Axis",
          "anchor": "kickoffLocalSetupToLive-6-open-axis",
          "level": 2
        },
        {
          "text": "Register and activate modules",
          "anchor": "kickoffLocalSetupToLive-7-register-and-activate-modules",
          "level": 2
        },
        {
          "text": "Install release data",
          "anchor": "kickoffLocalSetupToLive-8-install-release-data",
          "level": 2
        },
        {
          "text": "Initialize applications",
          "anchor": "kickoffLocalSetupToLive-9-initialize-applications",
          "level": 2
        },
        {
          "text": "Approve and publish",
          "anchor": "kickoffLocalSetupToLive-10-approve-and-publish",
          "level": 2
        },
        {
          "text": "Publish documentation",
          "anchor": "kickoffLocalSetupToLive-11-publish-documentation",
          "level": 2
        },
        {
          "text": "Verify Nexus",
          "anchor": "kickoffLocalSetupToLive-12-verify-nexus",
          "level": 2
        },
        {
          "text": "Verify Agora Apparel",
          "anchor": "kickoffLocalSetupToLive-13-verify-agora-apparel",
          "level": 2
        },
        {
          "text": "Troubleshooting checkpoints",
          "anchor": "kickoffLocalSetupToLive-14-troubleshooting-checkpoints",
          "level": 2
        },
        {
          "text": "Screenshot maintenance rule",
          "anchor": "kickoffLocalSetupToLive-15-screenshot-maintenance-rule",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffLocalSetupToLive-16-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffLocalSetupToLive-17-verification",
          "level": 2
        },
        {
          "text": "Final proof",
          "anchor": "kickoffLocalSetupToLive-18-final-proof",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "paragraph",
          "text": "This runbook is the new-user golden path for making the Nodics reference stack live on a developer machine. It starts from a local checkout, opens Axis, signs in, follows the guided setup workspaces, publishes governed data to Online, and verifies Nexus and Agora in the browser."
        },
        {
          "kind": "paragraph",
          "text": "The normal-path screenshots show the current local reference UI. The first-launch screenshots document the bundled recovery path from the current Axis component contract because this captured environment already had Axis baseline data. Recapture those first-launch images from a clean schema during the next fresh acceptance run."
        },
        {
          "kind": "paragraph",
          "text": "For beginners, the safe mental model is: start the stack, sign in to Axis, follow the highlighted backend-owned setup cards, approve publication, then open the public applications. Business users should read the status and next action on each screen. Developers should use the file paths and commands when a status points to a configuration, release, or module problem. Operators should keep the command output, screenshots, and browser checks as setup evidence."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What live means",
          "anchor": "kickoffLocalSetupToLive-1-what-live-means"
        },
        {
          "kind": "paragraph",
          "text": "In Nodics, live does not mean that a frontend server is running. A local setup is live when these conditions are true:"
        },
        {
          "kind": "table",
          "headers": [
            "Area",
            "Live condition"
          ],
          "rows": [
            [
              "Backend topology",
              "Platform, WCMS Staged, WCMS Online, Process, Engagement, Commerce, Axis, Nexus, and Agora are reachable on their local ports."
            ],
            [
              "Axis control plane",
              "The admin can sign in and the dashboard shows runtime, module, release, publishing, and application readiness."
            ],
            [
              "Module foundation",
              "Required modules are registered and active through backend-owned registry contracts."
            ],
            [
              "Release data",
              "Init, core, and sample releases are current or intentionally skipped by policy."
            ],
            [
              "Application packs",
              "Nexus and Agora accelerator packs have prepared Staged content and any required Commerce data."
            ],
            [
              "Publication",
              "Publishable content has moved from Staged to Online through approval and audit evidence."
            ],
            [
              "Public verification",
              "Nexus and Agora render Online content, navigation, media, and business data from backend contracts."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Repository layout",
          "anchor": "kickoffLocalSetupToLive-2-repository-layout"
        },
        {
          "kind": "paragraph",
          "text": "Use the reference layout unless your project already documents another one:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "nodicsRoot/\n  nodics.ai/\n  nodics.kickoff/\n  nodics.exp/\n    nodics.axis/\n    nodics.nexus/\n    nodics.agora.apparel/"
        },
        {
          "kind": "paragraph",
          "text": "`nodics.ai` is the framework checkout. `nodics.kickoff` is the reference customer project and owns the local runtime composition. `nodics.exp` groups frontend applications. Axis is the employee BackOffice, Nexus is the corporate site, and Agora is the commerce storefront."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Prepare the project",
          "anchor": "kickoffLocalSetupToLive-3-prepare-the-project"
        },
        {
          "kind": "paragraph",
          "text": "Run the first setup from `nodics.kickoff`:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "cp .env.example .env\nnpm install\nnpm run nodics:project:validate"
        },
        {
          "kind": "paragraph",
          "text": "Review `nodics.kickoff/.env` and confirm the framework root:"
        },
        {
          "kind": "code",
          "language": "dotenv",
          "text": "NODICS_FRAMEWORK_ROOT=../nodics.ai"
        },
        {
          "kind": "paragraph",
          "text": "Run frontend setup from each frontend repository that will be opened:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "cd ../nodics.exp/nodics.axis\ncp .env.example .env\nnpm install"
        },
        {
          "kind": "paragraph",
          "text": "Repeat dependency installation for Nexus and Agora when their local repositories have not been installed yet."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start the local stack",
          "anchor": "kickoffLocalSetupToLive-4-start-the-local-stack"
        },
        {
          "kind": "paragraph",
          "text": "From `nodics.kickoff`, start the full local stack:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:start:all"
        },
        {
          "kind": "paragraph",
          "text": "This starts backend runtimes and frontends in dependency-aware order. Use this command when a new user wants to see the whole product work together."
        },
        {
          "kind": "paragraph",
          "text": "Use this command from another terminal to inspect status:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:status"
        },
        {
          "kind": "paragraph",
          "text": "The expected local URLs are:"
        },
        {
          "kind": "table",
          "headers": [
            "Surface",
            "URL",
            "Purpose"
          ],
          "rows": [
            [
              "Axis",
              "`http://localhost:3100`",
              "Employee setup and operations workspace."
            ],
            [
              "Nexus",
              "`http://localhost:3200`",
              "Public corporate site using Online content."
            ],
            [
              "Agora Apparel",
              "`http://localhost:3300`",
              "Public storefront using Online content and Commerce data."
            ],
            [
              "Platform",
              "`http://localhost:4300`",
              "Profile, BackOffice, registry, and bootstrap authority."
            ],
            [
              "WCMS Online",
              "`http://localhost:4314`",
              "Online public content runtime."
            ],
            [
              "Process",
              "`http://localhost:4330`",
              "Workflow, approval, and automation runtime."
            ],
            [
              "WCMS Staged",
              "`http://localhost:4312`",
              "Staged content authoring and import runtime."
            ],
            [
              "Engagement",
              "`http://localhost:4340`",
              "Contact, review, feedback, and communication runtime."
            ],
            [
              "Commerce",
              "`http://localhost:4350`",
              "Operational Commerce runtime."
            ],
            [
              "Commerce Staged",
              "`http://localhost:4352`",
              "Staged Commerce catalog and storefront preparation runtime."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Stop only the topology owned by this checkout:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:stop"
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "First launch before Axis data exists",
          "anchor": "kickoffLocalSetupToLive-5-first-launch-before-axis-data-exists"
        },
        {
          "kind": "paragraph",
          "text": "On a fresh schema, Axis may not show the managed CMS login immediately. This is expected. Axis first falls back to a small bundled recovery login whose only job is to authenticate the bootstrap operator and move the managed Axis baseline through the governed release flow."
        },
        {
          "kind": "image",
          "alt": "Axis first-launch recovery login",
          "source": "../assets/images/local-setup/axis-first-launch-recovery-login.jpg",
          "title": "Axis first-launch recovery login"
        },
        {
          "kind": "paragraph",
          "text": "Use the local reference admin account:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "Username: admin\nPassword: adminPassword"
        },
        {
          "kind": "paragraph",
          "text": "After login, if the Axis baseline is not Online yet, Axis opens the initialization workspace instead of the normal dashboard."
        },
        {
          "kind": "image",
          "alt": "Axis first-launch initialization",
          "source": "../assets/images/local-setup/axis-first-launch-initialize.jpg",
          "title": "Axis first-launch initialization"
        },
        {
          "kind": "paragraph",
          "text": "Follow this first-run path:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Confirm the release chip points to the Axis baseline release.",
            "Click **Initialize and submit** to import the baseline into Staged and submit the governed publication request.",
            "Click **Refresh status** until the workspace shows the approval-ready state.",
            "Open the publication details or Process approval task and review the release checksum, entity counts, validation status, target site, catalog, workflow reference, impact, and recovery guidance.",
            "Approve the publication so the managed Axis CMS baseline becomes Online.",
            "Refresh or reopen Axis and verify that the bundled recovery workspace has retired."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Do not skip this by writing Axis data directly to Online. The first launch still follows the same Staged, Process approval, Online publication, and audit principles as other governed content."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Open Axis",
          "anchor": "kickoffLocalSetupToLive-6-open-axis"
        },
        {
          "kind": "paragraph",
          "text": "Open Axis:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3100"
        },
        {
          "kind": "paragraph",
          "text": "After the first-launch baseline is Online, or when the schema already has Axis data, the first screen should be the managed employee login page."
        },
        {
          "kind": "image",
          "alt": "Axis login",
          "source": "../assets/images/local-setup/axis-entry.jpg",
          "title": "Axis login"
        },
        {
          "kind": "paragraph",
          "text": "Use the local reference admin account:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "Username: admin\nPassword: adminPassword"
        },
        {
          "kind": "paragraph",
          "text": "After login, Axis should land on the dashboard."
        },
        {
          "kind": "image",
          "alt": "Axis dashboard",
          "source": "../assets/images/local-setup/axis-dashboard.jpg",
          "title": "Axis dashboard"
        },
        {
          "kind": "paragraph",
          "text": "Use the dashboard as the operator map:"
        },
        {
          "kind": "table",
          "headers": [
            "Dashboard area",
            "What to check"
          ],
          "rows": [
            [
              "Next actions",
              "Shows whether the next step is registry, data import, publication, or application verification."
            ],
            [
              "Application overview",
              "Shows active modules, data readiness, Online-ready sources, routes, workbenches, and tenant."
            ],
            [
              "Release and publication cards",
              "Show whether data is current, pending, blocked, or waiting for approval."
            ],
            [
              "Application cards",
              "Show whether Nexus and Agora are Online-ready or still blocked."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Register and activate modules",
          "anchor": "kickoffLocalSetupToLive-7-register-and-activate-modules"
        },
        {
          "kind": "paragraph",
          "text": "Open **System and Integrations -> Module Registry**, or navigate directly:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3100/registry"
        },
        {
          "kind": "image",
          "alt": "Module Registry",
          "source": "../assets/images/local-setup/module-registry.jpg",
          "title": "Module Registry"
        },
        {
          "kind": "paragraph",
          "text": "The registry is not only a visual list. It is the backend-owned activation surface for functional capabilities. A capability should be registered and active before importing an application pack that depends on it."
        },
        {
          "kind": "paragraph",
          "text": "Check these states:"
        },
        {
          "kind": "table",
          "headers": [
            "Capability group",
            "Expected local result"
          ],
          "rows": [
            [
              "Core, Platform, WCMS",
              "Registered and active. These are the foundation."
            ],
            [
              "Process and Automation",
              "Active when workflow, approval, and cronjob behavior is needed."
            ],
            [
              "Commerce and Discovery",
              "Active before Agora catalog and product search setup."
            ],
            [
              "Engagement",
              "Active before contact, review, feedback, or communication journeys are verified."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "If an accelerator says setup is blocked, return to Module Registry and activate the missing capability instead of forcing import data manually."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Install release data",
          "anchor": "kickoffLocalSetupToLive-8-install-release-data"
        },
        {
          "kind": "paragraph",
          "text": "Open **System and Integrations -> Import and Export Workspace**, or navigate directly:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3100/operations/imports-exports"
        },
        {
          "kind": "image",
          "alt": "Imports and exports",
          "source": "../assets/images/local-setup/imports-and-exports.jpg",
          "title": "Imports and exports"
        },
        {
          "kind": "paragraph",
          "text": "Start with **Guided setup**. Guided profiles are declared by backend runtimes under `data.dataReleases.initializationProfiles`; Axis discovers and renders them. Axis must not invent data authority or silently combine release lists."
        },
        {
          "kind": "paragraph",
          "text": "Use this order:"
        },
        {
          "kind": "table",
          "headers": [
            "Guided profile",
            "Why it matters"
          ],
          "rows": [
            [
              "Local Platform foundation",
              "Prepares login, profile, catalog, authorization, localization, and BackOffice data."
            ],
            [
              "Local WCMS foundation",
              "Prepares Staged content runtime, CMS baseline, and publication preparation."
            ],
            [
              "Local Documentation foundation",
              "Prepares WCMS prerequisites before documentation content packs are reviewed and published."
            ],
            [
              "Local Commerce foundation",
              "Prepares operational Commerce services."
            ],
            [
              "Local Commerce Staged catalog foundation",
              "Prepares Agora catalog, product, price, inventory, and search preview data."
            ],
            [
              "Local Process and Workflow foundation",
              "Prepares approval and workflow definitions."
            ],
            [
              "Local Engagement foundation",
              "Prepares communication and customer interaction data."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "For each profile:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Read the label and description.",
            "Review the step list and release counts.",
            "Click **Validate plan**.",
            "If validation passes and releases are not current, click **Validate and initialize**.",
            "Refresh the workspace and confirm the profile becomes `CURRENT` or shows a clear operator-friendly blocker."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Use **Initialization data**, **Core data**, and **Sample data** only when an administrator needs advanced release-level control."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Initialize applications",
          "anchor": "kickoffLocalSetupToLive-9-initialize-applications"
        },
        {
          "kind": "paragraph",
          "text": "Open **Publishing -> Setup and Accelerators**, or navigate directly:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3100/setup-accelerators"
        },
        {
          "kind": "image",
          "alt": "Setup and Accelerators",
          "source": "../assets/images/local-setup/setup-accelerators.jpg",
          "title": "Setup and Accelerators"
        },
        {
          "kind": "paragraph",
          "text": "This page prepares project accelerators such as Nexus and Agora. It should show friendly status instead of raw technical exceptions."
        },
        {
          "kind": "table",
          "headers": [
            "Status",
            "Meaning"
          ],
          "rows": [
            [
              "Setup blocked",
              "A required capability, content catalog, communication, or data foundation is missing. Fix the blocker first."
            ],
            [
              "Ready to initialize",
              "Required capabilities are active and the pack can be prepared."
            ],
            [
              "Staged current",
              "Staged data is installed at the expected version and checksum."
            ],
            [
              "Pending approval",
              "Staged data is ready but not yet Online."
            ],
            [
              "Online ready",
              "Online publication is available and public apps can render it."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Initialize Nexus and Agora only after their blockers are resolved. A complete application pack may prepare CMS pages, routes, navigation, media records, physical media artifacts, Commerce catalog data, search/discovery data, and operational data owned by that application."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Approve and publish",
          "anchor": "kickoffLocalSetupToLive-10-approve-and-publish"
        },
        {
          "kind": "paragraph",
          "text": "Open the approval queue:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3100/process/tasks"
        },
        {
          "kind": "image",
          "alt": "Process approval queue",
          "source": "../assets/images/local-setup/process-approval-queue.jpg",
          "title": "Process approval queue"
        },
        {
          "kind": "paragraph",
          "text": "Review the publication evidence before approving. Approval should explain what will be visible Online, which source release is involved, and what rollback means if activation fails."
        },
        {
          "kind": "paragraph",
          "text": "Open the Publishing dashboard:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3100/publishing"
        },
        {
          "kind": "image",
          "alt": "Publishing dashboard",
          "source": "../assets/images/local-setup/publishing.jpg",
          "title": "Publishing dashboard"
        },
        {
          "kind": "paragraph",
          "text": "Publishing is the only path from Staged content to Online content. Do not write directly into Online schema or Online media storage. If publication is blocked, fix the Staged data, approval task, workflow configuration, media dependency, or Online runtime readiness that the page reports."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Publish documentation",
          "anchor": "kickoffLocalSetupToLive-11-publish-documentation"
        },
        {
          "kind": "paragraph",
          "text": "Open Documentation:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3100/docs"
        },
        {
          "kind": "image",
          "alt": "Documentation dashboard",
          "source": "../assets/images/local-setup/documentation-dashboard.jpg",
          "title": "Documentation dashboard"
        },
        {
          "kind": "paragraph",
          "text": "Framework, Axis, and Kickoff documentation are governed content packs. Import and approve them through Axis and Process. They should flow from Staged to Online like other publishable content."
        },
        {
          "kind": "paragraph",
          "text": "Open Swagger/OpenAPI:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3100/docs/swaggers"
        },
        {
          "kind": "image",
          "alt": "Swagger reference",
          "source": "../assets/images/local-setup/swagger-reference.jpg",
          "title": "Swagger reference"
        },
        {
          "kind": "paragraph",
          "text": "Swagger is different from documentation content packs. It is generated from live runtime API contracts and should remain accessible when API sources are available, even if documentation publication is still waiting for approval."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verify Nexus",
          "anchor": "kickoffLocalSetupToLive-12-verify-nexus"
        },
        {
          "kind": "paragraph",
          "text": "Open Nexus:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3200"
        },
        {
          "kind": "image",
          "alt": "Nexus Online",
          "source": "../assets/images/local-setup/nexus-online.jpg",
          "title": "Nexus Online"
        },
        {
          "kind": "paragraph",
          "text": "Verify:"
        },
        {
          "kind": "table",
          "headers": [
            "Area",
            "Evidence"
          ],
          "rows": [
            [
              "Header and navigation",
              "Links come from Online content and route contracts."
            ],
            [
              "Hero and content sections",
              "Text, images, and components render from published content."
            ],
            [
              "Documentation links",
              "Documentation routes open only when their packs are Online or intentionally available."
            ],
            [
              "No maintenance fallback",
              "The app should not show setup or unpublished-content fallback after Online publication succeeds."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verify Agora Apparel",
          "anchor": "kickoffLocalSetupToLive-13-verify-agora-apparel"
        },
        {
          "kind": "paragraph",
          "text": "Open Agora:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "http://localhost:3300"
        },
        {
          "kind": "image",
          "alt": "Agora Apparel Online",
          "source": "../assets/images/local-setup/agora-apparel-online.jpg",
          "title": "Agora Apparel Online"
        },
        {
          "kind": "paragraph",
          "text": "Verify:"
        },
        {
          "kind": "table",
          "headers": [
            "Area",
            "Evidence"
          ],
          "rows": [
            [
              "Storefront home",
              "Banner, category, and merchandising content render from Online/Staged-approved sources."
            ],
            [
              "Product catalog",
              "Product, category, price, inventory, and image data are present."
            ],
            [
              "Search and discovery",
              "Product search and filters return meaningful results."
            ],
            [
              "Media",
              "Product and CMS images load through the media contract, not hardcoded frontend paths."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Troubleshooting checkpoints",
          "anchor": "kickoffLocalSetupToLive-14-troubleshooting-checkpoints"
        },
        {
          "kind": "table",
          "headers": [
            "Symptom",
            "Likely cause",
            "Where to fix"
          ],
          "rows": [
            [
              "Axis login page does not open",
              "Axis frontend is not running or `3100` is occupied.",
              "Run `npm run topology:status`, then restart the owned topology."
            ],
            [
              "Bundled recovery login appears every time",
              "The managed Axis baseline is not Online, publication was not approved, or the CMS route did not load.",
              "Use the first-launch initialization workspace, then check Process approval and WCMS Online readiness."
            ],
            [
              "Initialize Axis stays approval pending",
              "The baseline import finished, but the governed Process task has not been approved or published.",
              "Open `/process/tasks`, review the task, approve it, then refresh Axis."
            ],
            [
              "Login fails for local admin",
              "Platform/Profile is unavailable or seed data is missing.",
              "Check Platform server logs and guided Platform foundation data."
            ],
            [
              "Dashboard shows few modules",
              "Module Registry has not activated optional capabilities.",
              "Open `/registry` and activate required capabilities."
            ],
            [
              "Guided setup shows only one profile after config changes",
              "Servers are still running old runtime configuration.",
              "Restart the local topology and reload Axis."
            ],
            [
              "Accelerator setup is blocked",
              "A required capability, catalog, communication, or release dependency is missing.",
              "Read the friendly blocker, then fix registry or release data."
            ],
            [
              "Approval queue is empty",
              "The pack is not initialized, workflow data is missing, or the task is already processed.",
              "Check Setup and Accelerators, Process foundation, and Publishing dashboard."
            ],
            [
              "Nexus or Agora shows fallback content",
              "Staged data was not approved/published to Online.",
              "Publish through Process and verify WCMS Online readiness."
            ],
            [
              "Images are broken",
              "Physical media assets did not import or publish with media records.",
              "Check media import evidence, asset manifest, and Online media publication."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Screenshot maintenance rule",
          "anchor": "kickoffLocalSetupToLive-15-screenshot-maintenance-rule"
        },
        {
          "kind": "paragraph",
          "text": "Screenshots are part of the onboarding contract. When the first-launch recovery login, Initialize Axis workspace, managed login page, dashboard, registry, imports, setup, publishing, documentation, Nexus, or Agora journey changes materially, update the matching image under:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "docs/assets/images/local-setup/"
        },
        {
          "kind": "paragraph",
          "text": "Then regenerate and validate the Kickoff documentation content pack:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run docs:generate\nnpm run docs:check"
        },
        {
          "kind": "paragraph",
          "text": "Keep screenshots focused on decision points. Do not add decorative images that hide the actual operator action, backend state, or public verification result."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffLocalSetupToLive-16-common-mistakes"
        },
        {
          "kind": "paragraph",
          "text": "Avoid these mistakes during a first local setup:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Opening Nexus or Agora first and assuming a running frontend means Online data has been published.",
            "Importing sample data before the required module capability is registered and active.",
            "Treating Axis as the data authority. Axis renders backend-owned profiles, releases, approvals, and actions.",
            "Restarting only the frontend after changing backend runtime profile configuration.",
            "Approving publication before reviewing the Staged source, version, media, and target Online role.",
            "Fixing broken images in the frontend instead of checking media import, physical asset staging, media records, and Online media publication.",
            "Hand-editing generated documentation records instead of changing the authored markdown and regenerating the content pack."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification",
          "anchor": "kickoffLocalSetupToLive-17-verification"
        },
        {
          "kind": "paragraph",
          "text": "Run these commands after changing this guide, screenshots, catalogue metadata, or setup behavior:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run docs:generate\nnpm run docs:check\nnpm run nodics:project:validate"
        },
        {
          "kind": "paragraph",
          "text": "When setup behavior changes, also run the guided initialization and local qualification contracts:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run acceptance:guided-initialization\nnpm run test:qualification"
        },
        {
          "kind": "paragraph",
          "text": "Browser verification should include the first-launch recovery login and Initialize Axis workspace on a fresh schema, then managed Axis login, dashboard, Module Registry, Imports and Exports, Setup and Accelerators, Process approval queue, Publishing, Documentation, Swagger, Nexus, and Agora. Capture new screenshots when any of those screens changes materially."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Final proof",
          "anchor": "kickoffLocalSetupToLive-18-final-proof"
        },
        {
          "kind": "paragraph",
          "text": "A new user can call the local setup complete only after this evidence exists:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "`npm run topology:status` shows the owned local runtimes are reachable.",
            "On a fresh schema, bundled Axis recovery login opens and the Initialize Axis workspace can submit the baseline.",
            "After baseline approval, managed Axis login works with the local admin.",
            "Dashboard, Module Registry, Imports and Exports, Setup and Accelerators, Process tasks, Publishing, Documentation, and Swagger pages open.",
            "Required modules are active.",
            "Guided setup profiles are current or have a clear blocker.",
            "Application packs are Staged current or Online ready.",
            "Publication approvals have been processed.",
            "Nexus and Agora render public Online experiences in the browser.",
            "Media images load on public pages.",
            "Any remaining blocker has a friendly operator message and a developer owner."
          ]
        }
      ],
      "searchText": "Local setup to live runbook Follow the screenshot-guided path from local startup to Axis login, guided setup, publication, and live Nexus and Agora verification. # Local Setup to Live Runbook\n\nThis runbook is the new-user golden path for making the Nodics reference stack\nlive on a developer machine. It starts from a local checkout, opens Axis, signs\nin, follows the guided setup workspaces, publishes governed data to Online, and\nverifies Nexus and Agora in the browser.\n\nThe normal-path screenshots show the current local reference UI. The\nfirst-launch screenshots document the bundled recovery path from the current\nAxis component contract because this captured environment already had Axis\nbaseline data. Recapture those first-launch images from a clean schema during\nthe next fresh acceptance run.\n\nFor beginners, the safe mental model is: start the stack, sign in to Axis,\nfollow the highlighted backend-owned setup cards, approve publication, then\nopen the public applications. Business users should read the status and next\naction on each screen. Developers should use the file paths and commands when a\nstatus points to a configuration, release, or module problem. Operators should\nkeep the command output, screenshots, and browser checks as setup evidence.\n\n## What live means\n\nIn Nodics, live does not mean that a frontend server is running. A local setup\nis live when these conditions are true:\n\n| Area | Live condition |\n| --- | --- |\n| Backend topology | Platform, WCMS Staged, WCMS Online, Process, Engagement, Commerce, Axis, Nexus, and Agora are reachable on their local ports. |\n| Axis control plane | The admin can sign in and the dashboard shows runtime, module, release, publishing, and application readiness. |\n| Module foundation | Required modules are registered and active through backend-owned registry contracts. |\n| Release data | Init, core, and sample releases are current or intentionally skipped by policy. |\n| Application packs | Nexus and Agora accelerator packs have prepared Staged content and any required Commerce data. |\n| Publication | Publishable content has moved from Staged to Online through approval and audit evidence. |\n| Public verification | Nexus and Agora render Online content, navigation, media, and business data from backend contracts. |\n\n## Repository layout\n\nUse the reference layout unless your project already documents another one:\n\n```text\nnodicsRoot/\n  nodics.ai/\n  nodics.kickoff/\n  nodics.exp/\n    nodics.axis/\n    nodics.nexus/\n    nodics.agora.apparel/\n```\n\n`nodics.ai` is the framework checkout. `nodics.kickoff` is the reference\ncustomer project and owns the local runtime composition. `nodics.exp` groups\nfrontend applications. Axis is the employee BackOffice, Nexus is the corporate\nsite, and Agora is the commerce storefront.\n\n## Prepare the project\n\nRun the first setup from `nodics.kickoff`:\n\n```bash\ncp .env.example .env\nnpm install\nnpm run nodics:project:validate\n```\n\nReview `nodics.kickoff/.env` and confirm the framework root:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nRun frontend setup from each frontend repository that will be opened:\n\n```bash\ncd ../nodics.exp/nodics.axis\ncp .env.example .env\nnpm install\n```\n\nRepeat dependency installation for Nexus and Agora when their local\nrepositories have not been installed yet.\n\n## Start the local stack\n\nFrom `nodics.kickoff`, start the full local stack:\n\n```bash\nnpm run topology:start:all\n```\n\nThis starts backend runtimes and frontends in dependency-aware order. Use this\ncommand when a new user wants to see the whole product work together.\n\nUse this command from another terminal to inspect status:\n\n```bash\nnpm run topology:status\n```\n\nThe expected local URLs are:\n\n| Surface | URL | Purpose |\n| --- | --- | --- |\n| Axis | `http://localhost:3100` | Employee setup and operations workspace. |\n| Nexus | `http://localhost:3200` | Public corporate site using Online content. |\n| Agora Apparel | `http://localhost:3300` | Public storefront using Online content and Commerce data. |\n| Platform | `http://localhost:4300` | Profile, BackOffice, registry, and bootstrap authority. |\n| WCMS Online | `http://localhost:4314` | Online public content runtime. |\n| Process | `http://localhost:4330` | Workflow, approval, and automation runtime. |\n| WCMS Staged | `http://localhost:4312` | Staged content authoring and import runtime. |\n| Engagement | `http://localhost:4340` | Contact, review, feedback, and communication runtime. |\n| Commerce | `http://localhost:4350` | Operational Commerce runtime. |\n| Commerce Staged | `http://localhost:4352` | Staged Commerce catalog and storefront preparation runtime. |\n\nStop only the topology owned by this checkout:\n\n```bash\nnpm run topology:stop\n```\n\n## First launch before Axis data exists\n\nOn a fresh schema, Axis may not show the managed CMS login immediately. This is\nexpected. Axis first falls back to a small bundled recovery login whose only\njob is to authenticate the bootstrap operator and move the managed Axis\nbaseline through the governed release flow.\n\n![Axis first-launch recovery login](../assets/images/local-setup/axis-first-launch-recovery-login.jpg \"Axis first-launch recovery login\")\n\nUse the local reference admin account:\n\n```text\nUsername: admin\nPassword: adminPassword\n```\n\nAfter login, if the Axis baseline is not Online yet, Axis opens the\ninitialization workspace instead of the normal dashboard.\n\n![Axis first-launch initialization](../assets/images/local-setup/axis-first-launch-initialize.jpg \"Axis first-launch initialization\")\n\nFollow this first-run path:\n\n1. Confirm the release chip points to the Axis baseline release.\n2. Click **Initialize and submit** to import the baseline into Staged and submit\n   the governed publication request.\n3. Click **Refresh status** until the workspace shows the approval-ready state.\n4. Open the publication details or Process approval task and review the release\n   checksum, entity counts, validation status, target site, catalog, workflow\n   reference, impact, and recovery guidance.\n5. Approve the publication so the managed Axis CMS baseline becomes Online.\n6. Refresh or reopen Axis and verify that the bundled recovery workspace has\n   retired.\n\nDo not skip this by writing Axis data directly to Online. The first launch\nstill follows the same Staged, Process approval, Online publication, and audit\nprinciples as other governed content.\n\n## Open Axis\n\nOpen Axis:\n\n```text\nhttp://localhost:3100\n```\n\nAfter the first-launch baseline is Online, or when the schema already has Axis\ndata, the first screen should be the managed employee login page.\n\n![Axis login](../assets/images/local-setup/axis-entry.jpg \"Axis login\")\n\nUse the local reference admin account:\n\n```text\nUsername: admin\nPassword: adminPassword\n```\n\nAfter login, Axis should land on the dashboard.\n\n![Axis dashboard](../assets/images/local-setup/axis-dashboard.jpg \"Axis dashboard\")\n\nUse the dashboard as the operator map:\n\n| Dashboard area | What to check |\n| --- | --- |\n| Next actions | Shows whether the next step is registry, data import, publication, or application verification. |\n| Application overview | Shows active modules, data readiness, Online-ready sources, routes, workbenches, and tenant. |\n| Release and publication cards | Show whether data is current, pending, blocked, or waiting for approval. |\n| Application cards | Show whether Nexus and Agora are Online-ready or still blocked. |\n\n## Register and activate modules\n\nOpen **System and Integrations -> Module Registry**, or navigate directly:\n\n```text\nhttp://localhost:3100/registry\n```\n\n![Module Registry](../assets/images/local-setup/module-registry.jpg \"Module Registry\")\n\nThe registry is not only a visual list. It is the backend-owned activation\nsurface for functional capabilities. A capability should be registered and\nactive before importing an application pack that depends on it.\n\nCheck these states:\n\n| Capability group | Expected local result |\n| --- | --- |\n| Core, Platform, WCMS | Registered and active. These are the foundation. |\n| Process and Automation | Active when workflow, approval, and cronjob behavior is needed. |\n| Commerce and Discovery | Active before Agora catalog and product search setup. |\n| Engagement | Active before contact, review, feedback, or communication journeys are verified. |\n\nIf an accelerator says setup is blocked, return to Module Registry and activate\nthe missing capability instead of forcing import data manually.\n\n## Install release data\n\nOpen **System and Integrations -> Import and Export Workspace**, or navigate\ndirectly:\n\n```text\nhttp://localhost:3100/operations/imports-exports\n```\n\n![Imports and exports](../assets/images/local-setup/imports-and-exports.jpg \"Imports and exports\")\n\nStart with **Guided setup**. Guided profiles are declared by backend runtimes\nunder `data.dataReleases.initializationProfiles`; Axis discovers and renders\nthem. Axis must not invent data authority or silently combine release lists.\n\nUse this order:\n\n| Guided profile | Why it matters |\n| --- | --- |\n| Local Platform foundation | Prepares login, profile, catalog, authorization, localization, and BackOffice data. |\n| Local WCMS foundation | Prepares Staged content runtime, CMS baseline, and publication preparation. |\n| Local Documentation foundation | Prepares WCMS prerequisites before documentation content packs are reviewed and published. |\n| Local Commerce foundation | Prepares operational Commerce services. |\n| Local Commerce Staged catalog foundation | Prepares Agora catalog, product, price, inventory, and search preview data. |\n| Local Process and Workflow foundation | Prepares approval and workflow definitions. |\n| Local Engagement foundation | Prepares communication and customer interaction data. |\n\nFor each profile:\n\n1. Read the label and description.\n2. Review the step list and release counts.\n3. Click **Validate plan**.\n4. If validation passes and releases are not current, click **Validate and initialize**.\n5. Refresh the workspace and confirm the profile becomes `CURRENT` or shows a\n   clear operator-friendly blocker.\n\nUse **Initialization data**, **Core data**, and **Sample data** only when an\nadministrator needs advanced release-level control.\n\n## Initialize applications\n\nOpen **Publishing -> Setup and Accelerators**, or navigate directly:\n\n```text\nhttp://localhost:3100/setup-accelerators\n```\n\n![Setup and Accelerators](../assets/images/local-setup/setup-accelerators.jpg \"Setup and Accelerators\")\n\nThis page prepares project accelerators such as Nexus and Agora. It should\nshow friendly status instead of raw technical exceptions.\n\n| Status | Meaning |\n| --- | --- |\n| Setup blocked | A required capability, content catalog, communication, or data foundation is missing. Fix the blocker first. |\n| Ready to initialize | Required capabilities are active and the pack can be prepared. |\n| Staged current | Staged data is installed at the expected version and checksum. |\n| Pending approval | Staged data is ready but not yet Online. |\n| Online ready | Online publication is available and public apps can render it. |\n\nInitialize Nexus and Agora only after their blockers are resolved. A complete\napplication pack may prepare CMS pages, routes, navigation, media records,\nphysical media artifacts, Commerce catalog data, search/discovery data, and\noperational data owned by that application.\n\n## Approve and publish\n\nOpen the approval queue:\n\n```text\nhttp://localhost:3100/process/tasks\n```\n\n![Process approval queue](../assets/images/local-setup/process-approval-queue.jpg \"Process approval queue\")\n\nReview the publication evidence before approving. Approval should explain what\nwill be visible Online, which source release is involved, and what rollback\nmeans if activation fails.\n\nOpen the Publishing dashboard:\n\n```text\nhttp://localhost:3100/publishing\n```\n\n![Publishing dashboard](../assets/images/local-setup/publishing.jpg \"Publishing dashboard\")\n\nPublishing is the only path from Staged content to Online content. Do not\nwrite directly into Online schema or Online media storage. If publication is\nblocked, fix the Staged data, approval task, workflow configuration, media\ndependency, or Online runtime readiness that the page reports.\n\n## Publish documentation\n\nOpen Documentation:\n\n```text\nhttp://localhost:3100/docs\n```\n\n![Documentation dashboard](../assets/images/local-setup/documentation-dashboard.jpg \"Documentation dashboard\")\n\nFramework, Axis, and Kickoff documentation are governed content packs. Import\nand approve them through Axis and Process. They should flow from Staged to\nOnline like other publishable content.\n\nOpen Swagger/OpenAPI:\n\n```text\nhttp://localhost:3100/docs/swaggers\n```\n\n![Swagger reference](../assets/images/local-setup/swagger-reference.jpg \"Swagger reference\")\n\nSwagger is different from documentation content packs. It is generated from\nlive runtime API contracts and should remain accessible when API sources are\navailable, even if documentation publication is still waiting for approval.\n\n## Verify Nexus\n\nOpen Nexus:\n\n```text\nhttp://localhost:3200\n```\n\n![Nexus Online](../assets/images/local-setup/nexus-online.jpg \"Nexus Online\")\n\nVerify:\n\n| Area | Evidence |\n| --- | --- |\n| Header and navigation | Links come from Online content and route contracts. |\n| Hero and content sections | Text, images, and components render from published content. |\n| Documentation links | Documentation routes open only when their packs are Online or intentionally available. |\n| No maintenance fallback | The app should not show setup or unpublished-content fallback after Online publication succeeds. |\n\n## Verify Agora Apparel\n\nOpen Agora:\n\n```text\nhttp://localhost:3300\n```\n\n![Agora Apparel Online](../assets/images/local-setup/agora-apparel-online.jpg \"Agora Apparel Online\")\n\nVerify:\n\n| Area | Evidence |\n| --- | --- |\n| Storefront home | Banner, category, and merchandising content render from Online/Staged-approved sources. |\n| Product catalog | Product, category, price, inventory, and image data are present. |\n| Search and discovery | Product search and filters return meaningful results. |\n| Media | Product and CMS images load through the media contract, not hardcoded frontend paths. |\n\n## Troubleshooting checkpoints\n\n| Symptom | Likely cause | Where to fix |\n| --- | --- | --- |\n| Axis login page does not open | Axis frontend is not running or `3100` is occupied. | Run `npm run topology:status`, then restart the owned topology. |\n| Bundled recovery login appears every time | The managed Axis baseline is not Online, publication was not approved, or the CMS route did not load. | Use the first-launch initialization workspace, then check Process approval and WCMS Online readiness. |\n| Initialize Axis stays approval pending | The baseline import finished, but the governed Process task has not been approved or published. | Open `/process/tasks`, review the task, approve it, then refresh Axis. |\n| Login fails for local admin | Platform/Profile is unavailable or seed data is missing. | Check Platform server logs and guided Platform foundation data. |\n| Dashboard shows few modules | Module Registry has not activated optional capabilities. | Open `/registry` and activate required capabilities. |\n| Guided setup shows only one profile after config changes | Servers are still running old runtime configuration. | Restart the local topology and reload Axis. |\n| Accelerator setup is blocked | A required capability, catalog, communication, or release dependency is missing. | Read the friendly blocker, then fix registry or release data. |\n| Approval queue is empty | The pack is not initialized, workflow data is missing, or the task is already processed. | Check Setup and Accelerators, Process foundation, and Publishing dashboard. |\n| Nexus or Agora shows fallback content | Staged data was not approved/published to Online. | Publish through Process and verify WCMS Online readiness. |\n| Images are broken | Physical media assets did not import or publish with media records. | Check media import evidence, asset manifest, and Online media publication. |\n\n## Screenshot maintenance rule\n\nScreenshots are part of the onboarding contract. When the first-launch\nrecovery login, Initialize Axis workspace, managed login page, dashboard,\nregistry, imports, setup, publishing, documentation, Nexus, or Agora journey\nchanges materially, update the matching image under:\n\n```text\ndocs/assets/images/local-setup/\n```\n\nThen regenerate and validate the Kickoff documentation content pack:\n\n```bash\nnpm run docs:generate\nnpm run docs:check\n```\n\nKeep screenshots focused on decision points. Do not add decorative images that\nhide the actual operator action, backend state, or public verification result.\n\n## Common mistakes\n\nAvoid these mistakes during a first local setup:\n\n- Opening Nexus or Agora first and assuming a running frontend means Online\n  data has been published.\n- Importing sample data before the required module capability is registered and\n  active.\n- Treating Axis as the data authority. Axis renders backend-owned profiles,\n  releases, approvals, and actions.\n- Restarting only the frontend after changing backend runtime profile\n  configuration.\n- Approving publication before reviewing the Staged source, version, media, and\n  target Online role.\n- Fixing broken images in the frontend instead of checking media import,\n  physical asset staging, media records, and Online media publication.\n- Hand-editing generated documentation records instead of changing the authored\n  markdown and regenerating the content pack.\n\n## Verification\n\nRun these commands after changing this guide, screenshots, catalogue metadata,\nor setup behavior:\n\n```bash\nnpm run docs:generate\nnpm run docs:check\nnpm run nodics:project:validate\n```\n\nWhen setup behavior changes, also run the guided initialization and local\nqualification contracts:\n\n```bash\nnpm run acceptance:guided-initialization\nnpm run test:qualification\n```\n\nBrowser verification should include the first-launch recovery login and\nInitialize Axis workspace on a fresh schema, then managed Axis login,\ndashboard, Module Registry, Imports and Exports, Setup and Accelerators,\nProcess approval queue, Publishing, Documentation, Swagger, Nexus, and Agora.\nCapture new screenshots when any of those screens changes materially.\n\n## Final proof\n\nA new user can call the local setup complete only after this evidence exists:\n\n1. `npm run topology:status` shows the owned local runtimes are reachable.\n2. On a fresh schema, bundled Axis recovery login opens and the Initialize Axis\n   workspace can submit the baseline.\n3. After baseline approval, managed Axis login works with the local admin.\n4. Dashboard, Module Registry, Imports and Exports, Setup and Accelerators,\n   Process tasks, Publishing, Documentation, and Swagger pages open.\n5. Required modules are active.\n6. Guided setup profiles are current or have a clear blocker.\n7. Application packs are Staged current or Online ready.\n8. Publication approvals have been processed.\n9. Nexus and Agora render public Online experiences in the browser.\n10. Media images load on public pages.\n11. Any remaining blocker has a friendly operator message and a developer owner.\n",
      "previous": {
        "title": "Local runtime topology",
        "route": "/docs/nodics-kickoff/kickoff-local-runtime"
      },
      "next": {
        "title": "Local acceptance checklist",
        "route": "/docs/nodics-kickoff/kickoff-local-acceptance"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "docs/pages/local-setup-to-live-runbook.md",
        "wordCount": 2538,
        "checksum": "e1e951d3ab0474abe8fefa812ea8ba434990178107253871267d6ce39f1e8dd9"
      }
    },
    "active": true
  },
  "record4": {
    "code": "kickoffDocsComponentkickoffLocalAcceptance",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.local-acceptance",
      "title": "Local acceptance checklist",
      "route": "/docs/nodics-kickoff/kickoff-local-acceptance",
      "section": "run-kickoff-locally",
      "sectionTitle": "Run Kickoff Locally",
      "group": "acceptance-and-verification",
      "groupTitle": "Acceptance and Verification",
      "parentId": "run-kickoff-locally",
      "hierarchyPath": [
        "Nodics Kickoff",
        "Run Kickoff Locally",
        "Local acceptance checklist"
      ],
      "hierarchyDepth": 3,
      "documentType": "operations",
      "audience": [
        "business-user",
        "administrator",
        "architect",
        "developer",
        "operator",
        "qa",
        "ai-tool"
      ],
      "businessAudience": [
        "business-user",
        "administrator",
        "operator"
      ],
      "technicalAudience": [
        "architect",
        "developer",
        "qa",
        "ai-tool"
      ],
      "summary": "Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior.",
      "visibility": "public",
      "accessMode": "PUBLIC",
      "publiclyAvailable": true,
      "requiresAuthentication": false,
      "allowedRoles": [],
      "allowedGroups": [],
      "allowedPermissions": [],
      "lifecycleState": "ONLINE",
      "maturityState": "operational",
      "implementationState": "current",
      "relatedPages": [
        "kickoff.local-runtime",
        "kickoff.local-publishing-operations",
        "kickoff.functional-journeys"
      ],
      "visualRequirements": [
        "diagram",
        "troubleshooting-matrix",
        "command-example"
      ],
      "searchKeywords": [
        "acceptance",
        "fresh local",
        "verification",
        "checklist"
      ],
      "topicKeywords": [
        "import",
        "module lifecycle",
        "documentation",
        "media",
        "cron"
      ],
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
          "text": "Fresh schema reset",
          "anchor": "kickoffLocalAcceptance-4-fresh-schema-reset",
          "level": 2
        },
        {
          "text": "Fresh-schema user journey",
          "anchor": "kickoffLocalAcceptance-5-fresh-schema-user-journey",
          "level": 2
        },
        {
          "text": "Automated acceptance path",
          "anchor": "kickoffLocalAcceptance-6-automated-acceptance-path",
          "level": 2
        },
        {
          "text": "What the automated command proves",
          "anchor": "kickoffLocalAcceptance-7-what-the-automated-command-proves",
          "level": 3
        },
        {
          "text": "Start and stop the complete Local topology",
          "anchor": "kickoffLocalAcceptance-8-start-and-stop-the-complete-local-topology",
          "level": 2
        },
        {
          "text": "Start individual backend servers",
          "anchor": "kickoffLocalAcceptance-9-start-individual-backend-servers",
          "level": 2
        },
        {
          "text": "Start Axis",
          "anchor": "kickoffLocalAcceptance-10-start-axis",
          "level": 2
        },
        {
          "text": "Login",
          "anchor": "kickoffLocalAcceptance-11-login",
          "level": 2
        },
        {
          "text": "Import initialization data",
          "anchor": "kickoffLocalAcceptance-12-import-initialization-data",
          "level": 2
        },
        {
          "text": "Verify module registry",
          "anchor": "kickoffLocalAcceptance-13-verify-module-registry",
          "level": 2
        },
        {
          "text": "Verify documentation",
          "anchor": "kickoffLocalAcceptance-14-verify-documentation",
          "level": 2
        },
        {
          "text": "Verify application setup and Online delivery",
          "anchor": "kickoffLocalAcceptance-15-verify-application-setup-and-online-delivery",
          "level": 2
        },
        {
          "text": "Verify content and media",
          "anchor": "kickoffLocalAcceptance-16-verify-content-and-media",
          "level": 2
        },
        {
          "text": "Verify Page Designer authoring model",
          "anchor": "kickoffLocalAcceptance-17-verify-page-designer-authoring-model",
          "level": 3
        },
        {
          "text": "Verify Cron",
          "anchor": "kickoffLocalAcceptance-18-verify-cron",
          "level": 2
        },
        {
          "text": "Command-line smoke test",
          "anchor": "kickoffLocalAcceptance-19-command-line-smoke-test",
          "level": 2
        },
        {
          "text": "Troubleshooting quick map",
          "anchor": "kickoffLocalAcceptance-20-troubleshooting-quick-map",
          "level": 2
        },
        {
          "text": "Acceptance sign-off",
          "anchor": "kickoffLocalAcceptance-21-acceptance-sign-off",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffLocalAcceptance-22-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffLocalAcceptance-23-verification",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "paragraph",
          "text": "This checklist is the beginner-friendly path for proving a fresh Nodics local installation from zero database state. Use it when you have cloned the framework, the Kickoff customer project, and the frontend workspace, configured Kickoff, and want to confirm the backend framework, customer project, Axis, Nexus, and Agora are working together."
        },
        {
          "kind": "paragraph",
          "text": "The checklist is intentionally explicit. A new developer should be able to follow it without already knowing Nodics module loading, BackOffice bootstrap, WCMS content packs, or functional-module registration."
        },
        {
          "kind": "paragraph",
          "text": "From a business perspective, this checklist proves that a new team can start the reference project, import governed data, open Axis, inspect documentation, and see public/customer-facing surfaces without first designing a production topology. It gives decision makers a visible adoption proof and gives developers/operators the command evidence needed to repeat or diagnose the same setup."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What this checklist proves",
          "anchor": "kickoffLocalAcceptance-1-what-this-checklist-proves"
        },
        {
          "kind": "paragraph",
          "text": "The acceptance run proves six things:"
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
              "Kickoff can resolve Core, Platform, WCMS, and Process from the configured framework root."
            ],
            [
              "Runtime topology",
              "Platform, WCMS, and the composed Process and Automation runtime can start from the Kickoff local environment."
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
              "Core, Platform, and WCMS are mandatory/registered; Process is observable as an optional runtime module with workflow and cronjob technical modules."
            ],
            [
              "Application readiness",
              "Nexus and Agora setup is blocked until the required business capabilities are registered, active, imported, approved, and visible through Online delivery."
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
          "text": "nodicsRoot/\n  nodics.ai/\n  nodics.kickoff/\n  nodics.exp/\n    nodics.axis/\n    nodics.nexus/\n    nodics.agora.apparel/"
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
            "The required repositories are cloned:"
          ]
        },
        {
          "kind": "unordered-list",
          "items": [
            "`nodics.ai`",
            "`nodics.kickoff`",
            "`nodics.exp` with `nodics.axis`, `nodics.nexus`, and Agora applications"
          ]
        },
        {
          "kind": "ordered-list",
          "items": [
            "`nodics.kickoff/.env` exists and points to the framework root.",
            "`nodics.exp/nodics.axis/.env` points to the local Platform server."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Run this from `nodics.kickoff`:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "cp .env.example .env\nnpm install"
        },
        {
          "kind": "paragraph",
          "text": "Run this from `nodics.exp/nodics.axis`:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "cp .env.example .env\nnpm install"
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Fresh schema reset",
          "anchor": "kickoffLocalAcceptance-4-fresh-schema-reset"
        },
        {
          "kind": "paragraph",
          "text": "No contributor, AI agent, test, migration, or acceptance script may read or mutate Nodics databases directly. A fresh-schema run must use the governed Platform Local reset API/service with authorization, audit, explicit runtime targets, and recovery evidence. Never substitute a database shell command."
        },
        {
          "kind": "paragraph",
          "text": "Before running `acceptance:local:fresh`, stop any existing local topology owned by this checkout. The command refuses to reset while Platform, WCMS, Process, Engagement, Commerce, Axis, Nexus, or Agora are still listening from another process."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Fresh-schema user journey",
          "anchor": "kickoffLocalAcceptance-5-fresh-schema-user-journey"
        },
        {
          "kind": "paragraph",
          "text": "Use this order when the database is empty and the user wants Axis, Nexus, Agora, and documentation to work from a clean state."
        },
        {
          "kind": "table",
          "headers": [
            "Order",
            "User action",
            "Required evidence before moving on"
          ],
          "rows": [
            [
              "1",
              "Start the local topology from `nodics.kickoff`.",
              "Platform, WCMS Staged, WCMS Online, Process, Engagement, Commerce, Axis, Nexus, and Agora are reachable on their configured local ports."
            ],
            [
              "2",
              "Open Axis and complete the empty-database Axis setup.",
              "Axis baseline, BackOffice navigation, Profile admin access, and CMS baseline are initialized through governed APIs."
            ],
            [
              "3",
              "Open Module Registry and register/activate required capabilities.",
              "Core, Platform, and WCMS are mandatory and active. Agora setup requires Commerce and Discovery. Nexus setup requires its public content capability and any enabled engagement capability."
            ],
            [
              "4",
              "Open Setup and Accelerators.",
              "Rows clearly show whether each application is ready, blocked by missing capabilities, waiting for approval, published Online, or already current."
            ],
            [
              "5",
              "Initialize Nexus or Agora packs only after required capabilities are ready.",
              "The import includes CMS pages, routes, navigation, media records, physical media artifacts, commerce catalog data, search/discovery data, and operational data owned by the selected pack."
            ],
            [
              "6",
              "Publish to Online through the same screen or approval queue.",
              "Staged changes are reviewed, approved or rejected by an authorized user, then promoted to Online with audit evidence."
            ],
            [
              "7",
              "Verify public applications in the browser.",
              "Nexus and Agora render Online content. If Online content is absent, they show a customer-friendly maintenance page, not hardcoded demo content."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Documentation has a parallel lane. Framework, Axis, and Kickoff documentation packs can be imported and approved while application setup is in progress. Documentation publication controls documentation pages only. It must not hide Swagger/OpenAPI, because Swagger/OpenAPI is generated from active backend contracts rather than CMS documentation content."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Automated acceptance path",
          "anchor": "kickoffLocalAcceptance-6-automated-acceptance-path"
        },
        {
          "kind": "paragraph",
          "text": "Most maintainers should use the automated path first. It proves the same contracts as the manual checklist and reduces human mistakes during repeated bootstrap tests."
        },
        {
          "kind": "paragraph",
          "text": "Use the non-destructive API-only form:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run acceptance:local"
        },
        {
          "kind": "paragraph",
          "text": "This checks the running or newly started split WCMS topology and imports missing releases only through Nodics APIs. `acceptance:local:fresh` first performs the governed Platform Local reset and then proves the clean bootstrap path through the same APIs and browser-facing contracts."
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "What the automated command proves",
          "anchor": "kickoffLocalAcceptance-7-what-the-automated-command-proves"
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart TD\n  Start[\"Developer runs npm run acceptance:local\"] --> Platform[\"Start or reuse Platform on 4300\"]\n  Platform --> Staged[\"Start or reuse WCMS Staged on 4312\"]\n  Staged --> Online[\"Start or reuse WCMS Online on 4314\"]\n  Online --> Process[\"Start or reuse Process and Automation on 4330\"]\n  Process --> Axis[\"Start or reuse Axis on 3100\"]\n  Axis --> Auth[\"Authenticate default/admin\"]\n  Auth --> Baseline[\"Verify Axis baseline\"]\n  Baseline --> Registry[\"Verify mandatory and required functional capabilities\"]\n  Registry --> Apps[\"Initialize application packs only when capability gates pass\"]\n  Registry --> Docs[\"Import documentation packs through WCMS\"]\n  Docs --> Swagger[\"Verify Swagger/OpenAPI is independent from docs publication\"]\n  Apps --> Publish[\"Verify Staged-to-Online publication path\"]\n  Publish --> Routes[\"Verify Axis, Nexus, and Agora browser routes\"]\n  Routes --> Designer[\"Verify Content Designer catalog-first route\"]\n  Designer --> Lifecycle[\"Run Cron register, activate, deactivate, deregister\"]\n  Lifecycle --> Pass[\"Acceptance pass\"]"
        },
        {
          "kind": "paragraph",
          "text": "The command stops the servers it started after the acceptance gates complete. To keep the API-qualified stack running, use:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run acceptance:local -- --leave-started"
        },
        {
          "kind": "paragraph",
          "text": "The command does not inspect or mutate a database directly, kill unrelated processes, or create another importer. It uses the existing Profile login, BackOffice registry, WCMS content-pack API, and Axis smoke test. This matters because acceptance must prove the same path a real developer or operator uses."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start and stop the complete Local topology",
          "anchor": "kickoffLocalAcceptance-8-start-and-stop-the-complete-local-topology"
        },
        {
          "kind": "paragraph",
          "text": "The normal direct-Node workflow is supervised from one terminal:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:start"
        },
        {
          "kind": "paragraph",
          "text": "This starts Platform, WCMS Online, Process, WCMS Staged, Engagement, and Commerce in dependency-aware order. It waits for each low-disclosure readiness endpoint before starting the next runtime and writes generated logs and PID ownership beneath `envs/kickoffLocal/generated/local-topology`."
        },
        {
          "kind": "paragraph",
          "text": "To include Axis, Nexus, and Agora frontend applications from the local `nodics.exp` workspace:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:start:all"
        },
        {
          "kind": "paragraph",
          "text": "From another terminal, inspect readiness and ownership:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:status"
        },
        {
          "kind": "paragraph",
          "text": "Stop only the topology owned by this checkout:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:stop"
        },
        {
          "kind": "paragraph",
          "text": "The stop command validates the recorded supervisor PID and command before sending a signal. A busy port without matching ownership is reported as `EXTERNAL_OR_UNKNOWN` and is never killed. Ctrl+C in the supervisor terminal performs the same bounded reverse-order graceful shutdown."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start individual backend servers",
          "anchor": "kickoffLocalAcceptance-9-start-individual-backend-servers"
        },
        {
          "kind": "paragraph",
          "text": "For focused debugging, open separate terminals from `nodics.kickoff`."
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
          "text": "npm run start:wcms:staged"
        },
        {
          "kind": "paragraph",
          "text": "Terminal 3:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run start:wcms:online"
        },
        {
          "kind": "paragraph",
          "text": "Terminal 4:"
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
              "WCMS Staged",
              "4312",
              "Versioned CMS authoring, imports, validation, and publication source."
            ],
            [
              "WCMS Online",
              "4314",
              "Published CMS delivery and authenticated publication target only."
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
          "anchor": "kickoffLocalAcceptance-10-start-axis"
        },
        {
          "kind": "paragraph",
          "text": "Open another terminal from `nodics.exp/nodics.axis`:"
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
          "anchor": "kickoffLocalAcceptance-11-login"
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
          "anchor": "kickoffLocalAcceptance-12-import-initialization-data"
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
          "anchor": "kickoffLocalAcceptance-13-verify-module-registry"
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
              "`nodics.foundation`",
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
              "Cron and scheduled automation",
              "Technical capability under the Process runtime",
              "Proves scheduled jobs can be discovered without creating a second scheduler authority."
            ],
            [
              "Commerce",
              "Required before Agora application packs can become usable",
              "Provides catalog, product, cart, order, price, stock, and checkout capability for storefronts."
            ],
            [
              "Discovery",
              "Required before Agora application packs can become usable",
              "Provides search/discovery readiness for product and content lookup."
            ],
            [
              "Engagement",
              "Required before Nexus engagement features can become usable",
              "Provides public engagement APIs for corporate-site interaction features."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Core, Platform, and WCMS are mandatory for this local Axis-backed acceptance topology. They should not appear as removable optional modules. Cron may be registered, activated, deactivated, and deregistered as an optional module. Agora and Nexus setup must remain blocked until their required functional capabilities are registered and active. A visible content pack is not enough."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verify documentation",
          "anchor": "kickoffLocalAcceptance-14-verify-documentation"
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
          "text": "Axis is only the renderer. It must not own backend-importable documentation content. Documentation packs can be imported, approved, and published in parallel with application setup. Swagger/OpenAPI should remain visible whenever the authenticated runtime exposes generated OpenAPI contracts, even if CMS documentation packs are not yet published."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verify application setup and Online delivery",
          "anchor": "kickoffLocalAcceptance-15-verify-application-setup-and-online-delivery"
        },
        {
          "kind": "paragraph",
          "text": "Open:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "Setup and Accelerators"
        },
        {
          "kind": "paragraph",
          "text": "Expected behavior:"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Axis shows each application as a compact row with clear status, required capabilities, next action, refresh, and expandable detail.",
            "A row is **blocked** when a required capability is not registered, inactive, unavailable, or offline. The next action should point the user to Module Registry instead of allowing a misleading import.",
            "Agora Apparel, Agora Electronics, and Agora Telco require Commerce and Discovery before their application packs can become usable.",
            "Nexus requires the public content capability and any enabled engagement capability before its public site pack can become usable.",
            "Initializing an application pack must prepare the complete site, not only a small metadata record: CMS content, routes, navigation, media records, physical media artifacts, commerce catalog/search data where applicable, and operational data owned by the pack.",
            "Public frontends consume Online only. Before approval and publication they show the maintenance page. They must not render hardcoded sample data from the frontend repository."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verify content and media",
          "anchor": "kickoffLocalAcceptance-16-verify-content-and-media"
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
          "anchor": "kickoffLocalAcceptance-17-verify-page-designer-authoring-model"
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
          "anchor": "kickoffLocalAcceptance-18-verify-cron"
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
            "If Process and Automation is running, Axis can observe the Process functional module and the CronJob technical capability from the same runtime.",
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
          "anchor": "kickoffLocalAcceptance-19-command-line-smoke-test"
        },
        {
          "kind": "paragraph",
          "text": "After the servers and Axis are running, use the live smoke script from `nodics.exp/nodics.axis`:"
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
          "text": "PASS Axis route /\nPASS Axis route /content\nPASS Axis route /content/designer\nPASS Axis route /media\nPASS Axis route /media/items\nPASS Axis route /media/folders\nPASS Axis route /cron\nPASS Axis route /system-integrations\nPASS Axis route /registry\nPASS Axis route /operations/imports-exports\nPASS Axis route /docs/swaggers\nPASS BackOffice public bootstrap\nPASS authenticated login for admin\nPASS module registry reachable\nPASS required modules registered: nodics.foundation, nodics.platform, nodics.wcms\nPASS optional runtime modules observed: nodics.process\nPASS documentation pack nodicsDocumentation is CURRENT\nPASS documentation pack axisDocumentation is CURRENT\nPASS documentation pack kickoffDocumentation is CURRENT\nPASS cron lifecycle register\nPASS cron lifecycle activate\nPASS cron lifecycle deactivate\nPASS cron lifecycle deregister returns module to available"
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Troubleshooting quick map",
          "anchor": "kickoffLocalAcceptance-20-troubleshooting-quick-map"
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
              "Process does not appear",
              "Process and Automation server is not running, or the runtime has not reported its functional module observation."
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
          "anchor": "kickoffLocalAcceptance-21-acceptance-sign-off"
        },
        {
          "kind": "paragraph",
          "text": "The local acceptance run is complete when:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Platform, WCMS, Process and Automation, and Axis are running.",
            "Required releases were qualified through Nodics import/publication APIs.",
            "Admin login works.",
            "Module registry shows mandatory modules and optional Cron correctly.",
            "Documentation products are visible.",
            "Content and media routes render the expected workspaces.",
            "The Page Designer route shows the catalog-first model and does not invent a fixed slot shape or frontend-owned content persistence.",
            "`npm run acceptance:local` passes, or the manual equivalent plus `AXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live` passes.",
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
          "anchor": "kickoffLocalAcceptance-22-common-mistakes"
        },
        {
          "kind": "unordered-list",
          "items": [
            "Treating a running Node process as proof that the customer project is ready.",
            "Skipping content-pack import and then wondering why Axis documentation or WCMS pages are unavailable.",
            "Reading, dropping, or modifying a database directly during a test instead of using an authorized Nodics API/service.",
            "Accepting a module lifecycle flow that requires a browser refresh after register, activate, deactivate, or deregister.",
            "Ignoring an `INVALID RELEASE` message because the release still appears in the list.",
            "Verifying only Platform while forgetting WCMS, documentation, media, Process, Cron, and Axis routes."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification",
          "anchor": "kickoffLocalAcceptance-23-verification"
        },
        {
          "kind": "paragraph",
          "text": "Run the API-only checklist repeatedly when confidence matters. The expected result is idempotent release qualification, mandatory module visibility, optional Cron lifecycle handling, fresh-schema reset through the governed Platform Local reset API, and Axis rendering without manual database inspection or edits."
        },
        {
          "kind": "paragraph",
          "text": "For project documentation changes, regenerate the Kickoff documentation pack, run the documentation contract test, start Platform and WCMS, import or update the Kickoff docs release, and open `/docs/nodics-kickoff` in Axis. If the page only works because it was hardcoded in the frontend, the acceptance result is not valid."
        }
      ],
      "searchText": "Local acceptance checklist Run a fresh local database bootstrap and verify Platform, WCMS, Cron, Axis, documentation, media, and module lifecycle behavior. # Local Acceptance Checklist\n\nThis checklist is the beginner-friendly path for proving a fresh Nodics local\ninstallation from zero database state. Use it when you have cloned the\nframework, the Kickoff customer project, and the frontend workspace, configured\nKickoff, and want to confirm the backend framework, customer project, Axis,\nNexus, and Agora are working together.\n\nThe checklist is intentionally explicit. A new developer should be able to\nfollow it without already knowing Nodics module loading, BackOffice bootstrap,\nWCMS content packs, or functional-module registration.\n\nFrom a business perspective, this checklist proves that a new team can start\nthe reference project, import governed data, open Axis, inspect documentation,\nand see public/customer-facing surfaces without first designing a production\ntopology. It gives decision makers a visible adoption proof and gives\ndevelopers/operators the command evidence needed to repeat or diagnose the\nsame setup.\n\n## What this checklist proves\n\nThe acceptance run proves six things:\n\n| Area | What must be true |\n| --- | --- |\n| Framework checkout | Kickoff can resolve Core, Platform, WCMS, and Process from the configured framework root. |\n| Runtime topology | Platform, WCMS, and the composed Process and Automation runtime can start from the Kickoff local environment. |\n| Bootstrap data | Mandatory initialization data can be imported from module-owned releases. |\n| Axis access | Axis can connect to Platform, authenticate the local admin, and discover BackOffice bootstrap data. |\n| Module lifecycle | Core, Platform, and WCMS are mandatory/registered; Process is observable as an optional runtime module with workflow and cronjob technical modules. |\n| Application readiness | Nexus and Agora setup is blocked until the required business capabilities are registered, active, imported, approved, and visible through Online delivery. |\n\nIf any one of these fails, do not continue adding new functional modules. Fix\nthe contract break first, otherwise every later module will inherit a shaky\nlocal foundation.\n\n## Repository layout used by the reference run\n\nThe local reference setup normally looks like this:\n\n```text\nnodicsRoot/\n  nodics.ai/\n  nodics.kickoff/\n  nodics.exp/\n    nodics.axis/\n    nodics.nexus/\n    nodics.agora.apparel/\n```\n\nThis layout is only a convenience. Customer projects may live anywhere. The\nimportant contract is that `nodics.kickoff/.env` tells Kickoff where the\nframework checkout lives.\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=../nodics.ai\n```\n\nUse an absolute path if your repositories are not parallel:\n\n```dotenv\nNODICS_FRAMEWORK_ROOT=/Users/example/projects/framework/nodics.ai\n```\n\n## Mandatory prerequisites\n\nBefore running the checklist, confirm these local services and tools are\navailable:\n\n1. Node.js 24 and npm.\n2. MongoDB running locally.\n3. The required repositories are cloned:\n   - `nodics.ai`\n   - `nodics.kickoff`\n   - `nodics.exp` with `nodics.axis`, `nodics.nexus`, and Agora applications\n4. `nodics.kickoff/.env` exists and points to the framework root.\n5. `nodics.exp/nodics.axis/.env` points to the local Platform server.\n\nRun this from `nodics.kickoff`:\n\n```bash\ncp .env.example .env\nnpm install\n```\n\nRun this from `nodics.exp/nodics.axis`:\n\n```bash\ncp .env.example .env\nnpm install\n```\n\n## Fresh schema reset\n\nNo contributor, AI agent, test, migration, or acceptance script may read or\nmutate Nodics databases directly. A fresh-schema run must use the governed\nPlatform Local reset API/service with authorization, audit, explicit runtime\ntargets, and recovery evidence. Never substitute a database shell command.\n\nBefore running `acceptance:local:fresh`, stop any existing local topology owned\nby this checkout. The command refuses to reset while Platform, WCMS, Process,\nEngagement, Commerce, Axis, Nexus, or Agora are still listening from another\nprocess.\n\n## Fresh-schema user journey\n\nUse this order when the database is empty and the user wants Axis, Nexus,\nAgora, and documentation to work from a clean state.\n\n| Order | User action | Required evidence before moving on |\n| ---: | --- | --- |\n| 1 | Start the local topology from `nodics.kickoff`. | Platform, WCMS Staged, WCMS Online, Process, Engagement, Commerce, Axis, Nexus, and Agora are reachable on their configured local ports. |\n| 2 | Open Axis and complete the empty-database Axis setup. | Axis baseline, BackOffice navigation, Profile admin access, and CMS baseline are initialized through governed APIs. |\n| 3 | Open Module Registry and register/activate required capabilities. | Core, Platform, and WCMS are mandatory and active. Agora setup requires Commerce and Discovery. Nexus setup requires its public content capability and any enabled engagement capability. |\n| 4 | Open Setup and Accelerators. | Rows clearly show whether each application is ready, blocked by missing capabilities, waiting for approval, published Online, or already current. |\n| 5 | Initialize Nexus or Agora packs only after required capabilities are ready. | The import includes CMS pages, routes, navigation, media records, physical media artifacts, commerce catalog data, search/discovery data, and operational data owned by the selected pack. |\n| 6 | Publish to Online through the same screen or approval queue. | Staged changes are reviewed, approved or rejected by an authorized user, then promoted to Online with audit evidence. |\n| 7 | Verify public applications in the browser. | Nexus and Agora render Online content. If Online content is absent, they show a customer-friendly maintenance page, not hardcoded demo content. |\n\nDocumentation has a parallel lane. Framework, Axis, and Kickoff documentation\npacks can be imported and approved while application setup is in progress.\nDocumentation publication controls documentation pages only. It must not hide\nSwagger/OpenAPI, because Swagger/OpenAPI is generated from active backend\ncontracts rather than CMS documentation content.\n\n## Automated acceptance path\n\nMost maintainers should use the automated path first. It proves the same\ncontracts as the manual checklist and reduces human mistakes during repeated\nbootstrap tests.\n\nUse the non-destructive API-only form:\n\n```bash\nnpm run acceptance:local\n```\n\nThis checks the running or newly started split WCMS topology and imports\nmissing releases only through Nodics APIs. `acceptance:local:fresh` first\nperforms the governed Platform Local reset and then proves the clean bootstrap\npath through the same APIs and browser-facing contracts.\n\n### What the automated command proves\n\n```mermaid\nflowchart TD\n  Start[\"Developer runs npm run acceptance:local\"] --> Platform[\"Start or reuse Platform on 4300\"]\n  Platform --> Staged[\"Start or reuse WCMS Staged on 4312\"]\n  Staged --> Online[\"Start or reuse WCMS Online on 4314\"]\n  Online --> Process[\"Start or reuse Process and Automation on 4330\"]\n  Process --> Axis[\"Start or reuse Axis on 3100\"]\n  Axis --> Auth[\"Authenticate default/admin\"]\n  Auth --> Baseline[\"Verify Axis baseline\"]\n  Baseline --> Registry[\"Verify mandatory and required functional capabilities\"]\n  Registry --> Apps[\"Initialize application packs only when capability gates pass\"]\n  Registry --> Docs[\"Import documentation packs through WCMS\"]\n  Docs --> Swagger[\"Verify Swagger/OpenAPI is independent from docs publication\"]\n  Apps --> Publish[\"Verify Staged-to-Online publication path\"]\n  Publish --> Routes[\"Verify Axis, Nexus, and Agora browser routes\"]\n  Routes --> Designer[\"Verify Content Designer catalog-first route\"]\n  Designer --> Lifecycle[\"Run Cron register, activate, deactivate, deregister\"]\n  Lifecycle --> Pass[\"Acceptance pass\"]\n```\n\nThe command stops the servers it started after the acceptance gates complete.\nTo keep the API-qualified stack running, use:\n\n```bash\nnpm run acceptance:local -- --leave-started\n```\n\nThe command does not inspect or mutate a database directly, kill unrelated\nprocesses, or create another importer. It uses the existing Profile login, BackOffice registry,\nWCMS content-pack API, and Axis smoke test. This matters because acceptance\nmust prove the same path a real developer or operator uses.\n\n## Start and stop the complete Local topology\n\nThe normal direct-Node workflow is supervised from one terminal:\n\n```bash\nnpm run topology:start\n```\n\nThis starts Platform, WCMS Online, Process, WCMS Staged, Engagement, and\nCommerce in dependency-aware order. It waits for each low-disclosure readiness\nendpoint before starting the next runtime and writes generated logs and PID\nownership beneath `envs/kickoffLocal/generated/local-topology`.\n\nTo include Axis, Nexus, and Agora frontend applications from the local\n`nodics.exp` workspace:\n\n```bash\nnpm run topology:start:all\n```\n\nFrom another terminal, inspect readiness and ownership:\n\n```bash\nnpm run topology:status\n```\n\nStop only the topology owned by this checkout:\n\n```bash\nnpm run topology:stop\n```\n\nThe stop command validates the recorded supervisor PID and command before\nsending a signal. A busy port without matching ownership is reported as\n`EXTERNAL_OR_UNKNOWN` and is never killed. Ctrl+C in the supervisor terminal\nperforms the same bounded reverse-order graceful shutdown.\n\n## Start individual backend servers\n\nFor focused debugging, open separate terminals from `nodics.kickoff`.\n\nTerminal 1:\n\n```bash\nnpm run start:platform\n```\n\nTerminal 2:\n\n```bash\nnpm run start:wcms:staged\n```\n\nTerminal 3:\n\n```bash\nnpm run start:wcms:online\n```\n\nTerminal 4:\n\n```bash\nnpm run start:process\n```\n\nExpected local ports:\n\n| Runtime | Port | Why it matters |\n| --- | ---: | --- |\n| Platform | 4300 | Profile login, BackOffice bootstrap, module registry, OpenAPI discovery. |\n| WCMS Staged | 4312 | Versioned CMS authoring, imports, validation, and publication source. |\n| WCMS Online | 4314 | Published CMS delivery and authenticated publication target only. |\n| Process and Automation | 4330 | Process/workflow APIs plus optional Cron observation and registry lifecycle testing. |\n\nIf a port is already in use, confirm whether it is an earlier Nodics server\nfrom the same checkout. Do not kill unrelated processes by guessing.\n\n## Start Axis\n\nOpen another terminal from `nodics.exp/nodics.axis`:\n\n```bash\nnpm run dev\n```\n\nAxis should be available at:\n\n```text\nhttp://localhost:3100\n```\n\n## Login\n\nOpen Axis and use the local reference credentials:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: adminPassword\n```\n\nSuccessful login proves:\n\n1. Axis can load public bootstrap from Platform.\n2. Profile can authenticate the local admin.\n3. Axis can retrieve authenticated BackOffice bootstrap data.\n4. Axis receives authorized navigation and runtime module projections.\n\n## Import initialization data\n\nIn Axis, open the import/initialization workspace and install the available\ninitialization releases.\n\nYou should see releases owned by active modules only. The system must not ask\nAxis to invent import data. Axis presents the operation; the owning backend\nmodule and nImport execute the import.\n\nExpected outcome:\n\n- mandatory Profile/bootstrap identity data is available;\n- core framework data required by Platform and WCMS is present;\n- documentation content packs can be imported or updated;\n- repeated import attempts with unchanged immutable releases do not corrupt\n  existing data.\n\n## Verify module registry\n\nOpen:\n\n```text\nSystem and Integrations → Module Registry\n```\n\nExpected state:\n\n| Functional module | Expected state | Why |\n| --- | --- | --- |\n| `nodics.foundation` | Registered and active | Required by every runtime. |\n| `nodics.platform` | Registered and active | Required for Profile, BackOffice, and Axis bootstrap. |\n| `nodics.wcms` | Registered and active | Required for CMS, documentation, and media/content management. |\n| `nodics.process` | Optional, observed when Process and Automation is running | Proves process/workflow capability can join the lifecycle. |\n| Cron and scheduled automation | Technical capability under the Process runtime | Proves scheduled jobs can be discovered without creating a second scheduler authority. |\n| Commerce | Required before Agora application packs can become usable | Provides catalog, product, cart, order, price, stock, and checkout capability for storefronts. |\n| Discovery | Required before Agora application packs can become usable | Provides search/discovery readiness for product and content lookup. |\n| Engagement | Required before Nexus engagement features can become usable | Provides public engagement APIs for corporate-site interaction features. |\n\nCore, Platform, and WCMS are mandatory for this local Axis-backed acceptance\ntopology. They should not appear as removable optional modules. Cron may be\nregistered, activated, deactivated, and deregistered as an optional module.\nAgora and Nexus setup must remain blocked until their required functional\ncapabilities are registered and active. A visible content pack is not enough.\n\n## Verify documentation\n\nOpen:\n\n```text\nDocumentation\n```\n\nExpected documentation products:\n\n- Framework\n- Swaggers\n- Nodics Axis\n- Nodics Kickoff\n\nThe products are intentionally separated by ownership:\n\n| Documentation product | Owning repository/module |\n| --- | --- |\n| Framework | `nodics.ai/nodics.docs` |\n| Nodics Axis | `nodics.ai/nodics.platform/modules/axis` |\n| Nodics Kickoff | `nodics.kickoff` |\n| Swagger/OpenAPI | Platform BackOffice/OpenAPI contracts |\n\nAxis is only the renderer. It must not own backend-importable documentation\ncontent. Documentation packs can be imported, approved, and published in\nparallel with application setup. Swagger/OpenAPI should remain visible whenever\nthe authenticated runtime exposes generated OpenAPI contracts, even if CMS\ndocumentation packs are not yet published.\n\n## Verify application setup and Online delivery\n\nOpen:\n\n```text\nSetup and Accelerators\n```\n\nExpected behavior:\n\n- Axis shows each application as a compact row with clear status, required\n  capabilities, next action, refresh, and expandable detail.\n- A row is **blocked** when a required capability is not registered, inactive,\n  unavailable, or offline. The next action should point the user to Module\n  Registry instead of allowing a misleading import.\n- Agora Apparel, Agora Electronics, and Agora Telco require Commerce and\n  Discovery before their application packs can become usable.\n- Nexus requires the public content capability and any enabled engagement\n  capability before its public site pack can become usable.\n- Initializing an application pack must prepare the complete site, not only a\n  small metadata record: CMS content, routes, navigation, media records,\n  physical media artifacts, commerce catalog/search data where applicable, and\n  operational data owned by the pack.\n- Public frontends consume Online only. Before approval and publication they\n  show the maintenance page. They must not render hardcoded sample data from\n  the frontend repository.\n\n## Verify content and media\n\nOpen these Axis routes:\n\n```text\n/content\n/content/designer\n/media\n/media/items\n/media/folders\n```\n\nExpected behavior:\n\n- `/content` shows the content dashboard and WCMS-owned summary sections.\n- `/content/designer` shows the governed Page Designer foundation. It should\n  explain the catalog-first sequence and support dynamic template slots rather\n  than assuming a fixed header/main/footer page shape.\n- `/media` shows media management, media records, and media-by-source sections.\n- `/media/items` and `/media/folders` open focused media workspaces instead of\n  falling into CMS recovery.\n- Any unavailable backend schema is reported as a backend/schema discovery\n  issue, not as a frontend-owned data model.\n\n### Verify Page Designer authoring model\n\nOpen:\n\n```text\nContent and Experience → Web Content Management System → Page Designer\n```\n\nThe Designer is not expected to look exactly like the final website in a\nbrowser. It is the authoring and structure view. A beginner should understand\nthis chain:\n\n```mermaid\nflowchart TD\n  Catalog[\"Content Catalog\"]\n  Site[\"Site\"]\n  Template[\"Page Template\"]\n  Page[\"Page\"]\n  Slots[\"Template Slots: any number\"]\n  Sections[\"Page Sections\"]\n  Components[\"Component Instances\"]\n  Media[\"Governed Media\"]\n  Route[\"Page Route\"]\n  Nav[\"Navigation Node\"]\n\n  Catalog --> Site\n  Catalog --> Template\n  Site --> Page\n  Template --> Page\n  Page --> Slots\n  Slots --> Sections\n  Sections --> Components\n  Components --> Media\n  Page --> Route\n  Route --> Nav\n```\n\nThis acceptance step proves only that the reference local stack can consume the\nWCMS-owned authoring model. The contract itself belongs to WCMS. If the\nDesigner metadata is wrong, fix the owning WCMS contract and tests first; do\nnot move catalog, site, template, slot, page, component, or media authority\ninto the reference project or into the Axis frontend.\n\nExpected Designer evidence:\n\n| Area | Expected behavior |\n| --- | --- |\n| Catalog-first sequence | The UI starts from content catalog, then site, template, page, slots, sections, components, media, route, and navigation. |\n| Dynamic slots | Slot names come from template data; the UI must not assume only three slots. |\n| Backend authority | Save/validate actions call WCMS/CMS authoring APIs, not browser-local persistence. |\n| Media governance | Media association points to nMedia records or sets; it never asks for a filesystem path. |\n| Publish readiness | Designer can validate readiness, but publishing remains CMS/nPublish authority. |\n\nIf Designer loads but cannot validate or save, inspect the WCMS server first:\n`cmsAuthoring` API exposure must be enabled, the user must have\n`cms.backoffice.manage`, the selected Site must belong to the selected Content\nCatalog, and the selected Template must expose the slots being edited.\n\n## Verify Cron\n\nOpen:\n\n```text\n/cron\n```\n\nExpected behavior:\n\n- If Process and Automation is running, Axis can observe the Process\n  functional module and the CronJob technical capability from the same runtime.\n- If Cron is not registered, it appears as available to register.\n- Register moves it into the registered list without requiring a page refresh.\n- Activate changes lifecycle state without freezing buttons.\n- Deactivate and deregister return it to the correct next state.\n\nThe automated acceptance runner performs the full optional Cron lifecycle:\n\n```text\navailable → register → registered/inactive → activate → registered/active\nregistered/active → deactivate → registered/inactive → deregister → available\n```\n\nCron is optional for the project, so the final accepted state after the\nautomated lifecycle test is **available** rather than permanently registered.\nThat proves both the runtime observation path and the governed removal path.\n\nIf an action succeeds but the UI does not update, inspect the module registry\nAPI response immediately after the action. The frontend should refresh local\nquery state after each lifecycle operation.\n\n## Command-line smoke test\n\nAfter the servers and Axis are running, use the live smoke script from\n`nodics.exp/nodics.axis`:\n\n```bash\nAXIS_EXPECT_MODULES=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 npm run smoke:live\nAXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live\n```\n\nExpected result:\n\n```text\nPASS Axis route /\nPASS Axis route /content\nPASS Axis route /content/designer\nPASS Axis route /media\nPASS Axis route /media/items\nPASS Axis route /media/folders\nPASS Axis route /cron\nPASS Axis route /system-integrations\nPASS Axis route /registry\nPASS Axis route /operations/imports-exports\nPASS Axis route /docs/swaggers\nPASS BackOffice public bootstrap\nPASS authenticated login for admin\nPASS module registry reachable\nPASS required modules registered: nodics.foundation, nodics.platform, nodics.wcms\nPASS optional runtime modules observed: nodics.process\nPASS documentation pack nodicsDocumentation is CURRENT\nPASS documentation pack axisDocumentation is CURRENT\nPASS documentation pack kickoffDocumentation is CURRENT\nPASS cron lifecycle register\nPASS cron lifecycle activate\nPASS cron lifecycle deactivate\nPASS cron lifecycle deregister returns module to available\n```\n\n## Troubleshooting quick map\n\n| Symptom | Most likely boundary |\n| --- | --- |\n| Axis recovery says BackOffice registry unavailable | Platform server is not reachable or Axis points at the wrong Platform URL. |\n| Login fails | Profile data was not imported, credentials changed, or Platform is using a different database. |\n| Documentation route shows CMS recovery | WCMS is down, documentation pack is not imported, or the documentation source is not registered. |\n| Import page says API category is disabled | API exposure defaults belong in owning modules; check whether the runtime disabled the category at server level. |\n| Process does not appear | Process and Automation server is not running, or the runtime has not reported its functional module observation. |\n| Module action succeeds only after refresh | Axis query invalidation or backend response envelope needs review. |\n| Media schema discovery unavailable | WCMS/media runtime is not exposing the expected schema workbench contract. |\n\n## Acceptance sign-off\n\nThe local acceptance run is complete when:\n\n1. Platform, WCMS, Process and Automation, and Axis are running.\n2. Required releases were qualified through Nodics import/publication APIs.\n3. Admin login works.\n4. Module registry shows mandatory modules and optional Cron correctly.\n5. Documentation products are visible.\n6. Content and media routes render the expected workspaces.\n7. The Page Designer route shows the catalog-first model and does not invent a\n   fixed slot shape or frontend-owned content persistence.\n8. `npm run acceptance:local` passes, or the manual equivalent plus\n   `AXIS_EXPECT_MODULES=1 AXIS_EXPECT_DOCUMENTATION=1 AXIS_CRON_LIFECYCLE=1 npm run smoke:live`\n   passes.\n9. No repo in the three-repo set has uncommitted acceptance changes.\n\nWhen all nine are true, the modularized foundation is ready for the next\nfunctional module.\n\n## Common mistakes\n\n- Treating a running Node process as proof that the customer project is ready.\n- Skipping content-pack import and then wondering why Axis documentation or\n  WCMS pages are unavailable.\n- Reading, dropping, or modifying a database directly during a test instead of\n  using an authorized Nodics API/service.\n- Accepting a module lifecycle flow that requires a browser refresh after\n  register, activate, deactivate, or deregister.\n- Ignoring an `INVALID RELEASE` message because the release still appears in\n  the list.\n- Verifying only Platform while forgetting WCMS, documentation, media, Process,\n  Cron, and Axis routes.\n\n## Verification\n\nRun the API-only checklist repeatedly when confidence matters. The expected\nresult is idempotent release qualification, mandatory module visibility,\noptional Cron lifecycle handling, fresh-schema reset through the governed\nPlatform Local reset API, and Axis rendering without manual database inspection\nor edits.\n\nFor project documentation changes, regenerate the Kickoff documentation pack,\nrun the documentation contract test, start Platform and WCMS, import or update\nthe Kickoff docs release, and open `/docs/nodics-kickoff` in Axis. If the page\nonly works because it was hardcoded in the frontend, the acceptance result is\nnot valid.\n",
      "previous": {
        "title": "Local setup to live runbook",
        "route": "/docs/nodics-kickoff/kickoff-local-setup-to-live"
      },
      "next": {
        "title": "Local publishing operations",
        "route": "/docs/nodics-kickoff/kickoff-local-publishing-operations"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "docs/pages/local-acceptance-checklist.md",
        "wordCount": 3143,
        "checksum": "472aac81eb3d7039d44f656131d423b7834679fb1c85d6ff9456fd9edfe974e9"
      }
    },
    "active": true
  },
  "record5": {
    "code": "kickoffDocsComponentkickoffLocalPublishingOperations",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.local-publishing-operations",
      "title": "Local publishing operations",
      "route": "/docs/nodics-kickoff/kickoff-local-publishing-operations",
      "section": "publish-and-qualify",
      "sectionTitle": "Publish and Qualify",
      "group": "publishing-operations",
      "groupTitle": "Publishing Operations",
      "parentId": "publish-and-qualify",
      "hierarchyPath": [
        "Nodics Kickoff",
        "Publish and Qualify",
        "Local publishing operations"
      ],
      "hierarchyDepth": 3,
      "documentType": "operations",
      "audience": [
        "business-user",
        "administrator",
        "architect",
        "developer",
        "operator",
        "qa",
        "ai-tool"
      ],
      "businessAudience": [
        "business-user",
        "administrator",
        "operator"
      ],
      "technicalAudience": [
        "architect",
        "developer",
        "qa",
        "ai-tool"
      ],
      "summary": "Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access.",
      "visibility": "public",
      "accessMode": "PUBLIC",
      "publiclyAvailable": true,
      "requiresAuthentication": false,
      "allowedRoles": [],
      "allowedGroups": [],
      "allowedPermissions": [],
      "lifecycleState": "ONLINE",
      "maturityState": "operational",
      "implementationState": "current",
      "relatedPages": [
        "kickoff.local-acceptance",
        "kickoff.deployment-qualification"
      ],
      "visualRequirements": [
        "troubleshooting-matrix",
        "code-example"
      ],
      "searchKeywords": [
        "publishing",
        "staged",
        "online",
        "recovery"
      ],
      "topicKeywords": [
        "nPublish",
        "WCMS",
        "Process",
        "rollback"
      ],
      "headings": [
        {
          "text": "Scope and authority",
          "anchor": "kickoffLocalPublishingOperations-1-scope-and-authority",
          "level": 2
        },
        {
          "text": "Preflight, start, inspect, and stop",
          "anchor": "kickoffLocalPublishingOperations-2-preflight-start-inspect-and-stop",
          "level": 2
        },
        {
          "text": "Supported initialization and release upgrade",
          "anchor": "kickoffLocalPublishingOperations-3-supported-initialization-and-release-upgrade",
          "level": 2
        },
        {
          "text": "Failure, retry, rollback, and recovery",
          "anchor": "kickoffLocalPublishingOperations-4-failure-retry-rollback-and-recovery",
          "level": 2
        },
        {
          "text": "Import, export, backup, and restore boundaries",
          "anchor": "kickoffLocalPublishingOperations-5-import-export-backup-and-restore-boundaries",
          "level": 2
        },
        {
          "text": "Observability and audit",
          "anchor": "kickoffLocalPublishingOperations-6-observability-and-audit",
          "level": 2
        },
        {
          "text": "Concurrency, retention, and cleanup",
          "anchor": "kickoffLocalPublishingOperations-7-concurrency-retention-and-cleanup",
          "level": 2
        },
        {
          "text": "Qualification and evidence",
          "anchor": "kickoffLocalPublishingOperations-8-qualification-and-evidence",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffLocalPublishingOperations-9-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffLocalPublishingOperations-10-verification",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "heading",
          "level": 2,
          "text": "Scope and authority",
          "anchor": "kickoffLocalPublishingOperations-1-scope-and-authority"
        },
        {
          "kind": "paragraph",
          "text": "This runbook operates the `kickoffLocal` Staged-to-Online publishing lifecycle. It is Local evidence only: it does not approve Development, QA, PreProd, Prod, physical datastore switching, or a production storefront launch. WCMS Staged owns authoring and release freeze, `nPublish` owns lifecycle transitions, Process owns approval workflow state, WCMS Online owns deployed visibility, and Axis is the employee control plane. Nexus and Agora consume Online only."
        },
        {
          "kind": "paragraph",
          "text": "Operators and automation must use Nodics APIs, generated services, and the project commands below. They must never repair, seed, version, publish, restore, or verify content through direct database CRUD. Database credentials and connectivity are evaluated by runtime readiness; the topology preflight does not open its own database connection."
        },
        {
          "kind": "table",
          "headers": [
            "Publishing area",
            "Business question answered",
            "Correct Kickoff action",
            "Authority that decides"
          ],
          "rows": [
            [
              "Import and upgrade",
              "Which release is installed and can it be trusted?",
              "Run retained or fresh acceptance through project commands",
              "nImport validates immutable release identity and checksums"
            ],
            [
              "Capability gating",
              "Is the target application allowed to become usable?",
              "Register and activate required functional capabilities before initializing the application pack",
              "BackOffice Module Registry and the owning module decide capability readiness"
            ],
            [
              "Staged review",
              "What content or data is ready for approval?",
              "Inspect Staged state through Axis and governed APIs",
              "WCMS Staged and owning modules hold authoring state"
            ],
            [
              "Approval and activation",
              "What is allowed to become visible Online?",
              "Use workflow-backed publication actions",
              "nPublish and Process coordinate approval and Online activation"
            ],
            [
              "Recovery",
              "How do we retry or roll back a failed local release?",
              "Use documented retry, rollback, backup, and restore commands",
              "Runtime services preserve lifecycle, audit, and integrity evidence"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Preflight, start, inspect, and stop",
          "anchor": "kickoffLocalPublishingOperations-2-preflight-start-inspect-and-stop"
        },
        {
          "kind": "paragraph",
          "text": "Run from `nodics.kickoff`:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "npm run topology:preflight\nnpm run topology:start:all\nnpm run topology:status\nnpm run topology:stop"
        },
        {
          "kind": "paragraph",
          "text": "Preflight verifies repository availability and required ports. Startup refuses busy ports, starts dependencies in order, waits for HTTP readiness, records only its own process identities, and fails closed if a managed child exits. Stop signals only the validated supervisor and releases children in reverse order."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Supported initialization and release upgrade",
          "anchor": "kickoffLocalPublishingOperations-3-supported-initialization-and-release-upgrade"
        },
        {
          "kind": "paragraph",
          "text": "Use `npm run acceptance:local:fresh` only when a bounded Local reset is intended. The command resets through the governed Platform API; it does not issue database commands. Use `npm run acceptance:local` for retained-schema initialization, content-pack upgrade, repeat installation, and publication verification."
        },
        {
          "kind": "paragraph",
          "text": "Immutable content-pack files use portable source revision zero. During a governed content-pack upgrade, nImport reads the latest Staged record through its generated schema service and supplies the next optimistic revision. A concurrent writer can still win between read and save; persistence then rejects the import, and the operator reviews import-run diagnostics before retrying. Ordinary imports and API writes do not receive this release-only reconciliation."
        },
        {
          "kind": "paragraph",
          "text": "An upgrade is successful only when the content-pack status is `CURRENT`, the expected release version and checksum are visible, Staged import diagnostics have no unresolved failures, publication reaches `ONLINE`, and Online delivery returns the expected projection. Never resolve an upgrade by changing stored revisions."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Failure, retry, rollback, and recovery",
          "anchor": "kickoffLocalPublishingOperations-4-failure-retry-rollback-and-recovery"
        },
        {
          "kind": "unordered-list",
          "items": [
            "A validation or approval rejection leaves Online unchanged. Correct Staged content, create or select the intended version, and submit again.",
            "Workflow timeouts and response loss are retried only through the bounded, idempotent Process and publication contracts. Correlation ID and operation key must remain stable for the retry.",
            "A Staged, Process, or Online interruption is recovered by restarting the supervised topology and running retained acceptance. Reconciliation resumes durable lifecycle and outbox state; it must not manufacture database state.",
            "A failed deployment is reconciled before retry. If activation cannot be completed safely, invoke the governed publication rollback operation and verify the prior Online pointer and delivery response.",
            "Unexpected supervised child exit must stop the remaining topology. Inspect the generated runtime logs, correct the cause, run preflight, and start again."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Import, export, backup, and restore boundaries",
          "anchor": "kickoffLocalPublishingOperations-5-import-export-backup-and-restore-boundaries"
        },
        {
          "kind": "paragraph",
          "text": "Local acceptance proves secured Staged export, checksum and provenance, media- backed validation/import, tenant rejection, and Online/Process export denial. This is a logical data portability and recovery exercise, not a physical database backup certification. Physical backup, restore, point-in-time recovery, RPO, and RTO require database-provider procedures and non-Local qualification. Restored authoritative data must be followed by Nodics projection rebuild and API-based count/checksum reconciliation."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Observability and audit",
          "anchor": "kickoffLocalPublishingOperations-6-observability-and-audit"
        },
        {
          "kind": "paragraph",
          "text": "Use publication operations and diagnostics APIs to inspect lifecycle state, failure and stuck totals, safe failure codes, actor identity, correlation ID, revision, target version, deployment receipts, audit reconciliation, and outbox delivery. Logs must omit tokens, credentials, provider paths, raw payloads, and protected business or personal data. Exported evidence is sanitized before it is shared."
        },
        {
          "kind": "paragraph",
          "text": "Required Local signals are publication count, failure count, stuck count, duration per bounded contract, retry outcome, rollback outcome, readiness, and Online delivery verification. Production queue depth, p95/p99, throughput, soak, projection lag, alerts, and capacity targets remain external evidence."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Concurrency, retention, and cleanup",
          "anchor": "kickoffLocalPublishingOperations-7-concurrency-retention-and-cleanup"
        },
        {
          "kind": "paragraph",
          "text": "Lifecycle revisions prevent conflicting transitions. Stable publication codes, operation keys, receipts, Online pointers, and outbox identities make identical replays converge. Concurrent editors must publish explicit frozen versions; publishing never means “latest at execution time.”"
        },
        {
          "kind": "paragraph",
          "text": "Previous content versions remain governed history. Online manifests and rollback references protect required versions. Media cleanup uses retention time, active and rollback references, batch limits, and legal hold; it removes only expired, unreferenced publication media through the media service. Generated supervisor state and import staging follow their owning cleanup lifecycle."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Qualification and evidence",
          "anchor": "kickoffLocalPublishingOperations-8-qualification-and-evidence"
        },
        {
          "kind": "paragraph",
          "text": "Run:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "npm run qualification:publishing-capacity\nnpm run qualification:publishing-soak\nnpm run qualification:security-boundary\nnpm run qualification:deployment:local -- --include-fresh"
        },
        {
          "kind": "paragraph",
          "text": "The bounded capacity suite covers freeze, deployment, activation, delivery, response-loss retry, rollback, transaction abort, media retention, concurrent activation/receipt convergence, workflow handoff, publication operations, and audit reconciliation. The deployment report records command outcomes, durations, repository commits, explicit external gaps, and an integrity digest. It never self-approves production."
        },
        {
          "kind": "paragraph",
          "text": "The Local sustained-reliability gate repeats six publication, workflow, outbox, reconciliation, rollback, and media-retention contracts for 25 cycles (150 executions) under explicit elapsed-time and process-memory-growth budgets. The automated security boundary executes authentication, authorization, cache mutation, import/export, remote transport, BackOffice, Engagement, publication authority, and atomic-audit contracts. These close Local regression evidence; they do not replace production-scale soak or an independent penetration test."
        },
        {
          "kind": "paragraph",
          "text": "For the isolated `kickoffDockerLocal` production simulation, run the Docker Local build, start, acceptance, qualification, resilience, interruption, and soak commands defined in `package.json`. Keep this environment separate from native `kickoffLocal`; it owns its own ports, secrets, databases, Redis topology, networks, and Staged/Online media volumes."
        },
        {
          "kind": "paragraph",
          "text": "The qualified 2026-08-13 closure completed API-only retained-data acceptance, seven target-release reconciliations, Redis Sentinel promotion with authentication and publication continuity, a 1.744-second backup/RPO rehearsal, a 55.420-second restore/RTO against the 300-second Local target, and a 30-minute soak of 20,088 requests with zero errors, six publication runs, 12 ms p95, 15 ms p99, and 56 resource samples. This is reproducible Local evidence, not a production approval. Independent penetration testing and human assistive-technology review remain external."
        },
        {
          "kind": "paragraph",
          "text": "Troubleshoot using stable error codes. `ERR_IMP_00003` indicates immutable release integrity/version policy, `ERR_IMP_00010` is an aggregate record-dispatch failure, and `ERR_MDL_00004` indicates an optimistic revision conflict. Preserve the correlation ID and sanitized import/publication diagnostics when escalating."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffLocalPublishingOperations-9-common-mistakes"
        },
        {
          "kind": "paragraph",
          "text": "A common mistake is treating a content-pack update as a database migration and manually changing `versionId`, installed-release history, or the Online pointer. That destroys the evidence needed for retry and rollback. Another mistake is starting Nexus against Staged because authoring content appears there first; public clients must remain Online-only. Do not run multiple unmanaged copies of the same Local server, kill a PID copied from stale state, reuse an old checksum under the same release version, or declare success only because processes are listening. Readiness, authority, workflow, publication, and delivery must all be verified."
        },
        {
          "kind": "paragraph",
          "text": "Operators should also avoid interpreting Local contract timing as production capacity, logical export as physical backup, retryable-phase warnings as final failure, or an integrity digest as human approval. Inspect the final import-run and publication states. Documentation source belongs in this project, generated CMS data comes from the generator, and frontend applications must not become the authority for content-pack installation or publication state."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification",
          "anchor": "kickoffLocalPublishingOperations-10-verification"
        },
        {
          "kind": "paragraph",
          "text": "For a normal retained upgrade, run preflight, retained acceptance, publishing capacity qualification, and the project test suite. For a deliberate clean-room exercise, run fresh acceptance once and retained acceptance immediately after it to prove restart-safe idempotency. Confirm that all expected packs are `CURRENT`, the new documentation page is delivered from Online, the publication operations summary has no unexplained failed or stuck item, and `topology:status` reports no managed process after shutdown."
        },
        {
          "kind": "paragraph",
          "text": "Review the generated qualification report for command exit codes, durations, source commits, explicit external gaps, and a valid SHA-256 digest. Independently run Framework, Axis, and Nexus verification before committing the coordinated baseline. Finally run `git diff --check`, documentation generation in check mode, credential-pattern scanning, and the zero-direct-database audit over the changed files. A beginner or partner developer should be able to follow this sequence without knowing a MongoDB collection name or using a database shell."
        }
      ],
      "searchText": "Local publishing operations Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access. # Local publishing operations\n\n## Scope and authority\n\nThis runbook operates the `kickoffLocal` Staged-to-Online publishing lifecycle.\nIt is Local evidence only: it does not approve Development, QA, PreProd, Prod,\nphysical datastore switching, or a production storefront launch. WCMS Staged\nowns authoring and release freeze, `nPublish` owns lifecycle transitions,\nProcess owns approval workflow state, WCMS Online owns deployed visibility,\nand Axis is the employee control plane. Nexus and Agora consume Online only.\n\nOperators and automation must use Nodics APIs, generated services, and the\nproject commands below. They must never repair, seed, version, publish, restore,\nor verify content through direct database CRUD. Database credentials and\nconnectivity are evaluated by runtime readiness; the topology preflight does\nnot open its own database connection.\n\n| Publishing area | Business question answered | Correct Kickoff action | Authority that decides |\n| --- | --- | --- | --- |\n| Import and upgrade | Which release is installed and can it be trusted? | Run retained or fresh acceptance through project commands | nImport validates immutable release identity and checksums |\n| Capability gating | Is the target application allowed to become usable? | Register and activate required functional capabilities before initializing the application pack | BackOffice Module Registry and the owning module decide capability readiness |\n| Staged review | What content or data is ready for approval? | Inspect Staged state through Axis and governed APIs | WCMS Staged and owning modules hold authoring state |\n| Approval and activation | What is allowed to become visible Online? | Use workflow-backed publication actions | nPublish and Process coordinate approval and Online activation |\n| Recovery | How do we retry or roll back a failed local release? | Use documented retry, rollback, backup, and restore commands | Runtime services preserve lifecycle, audit, and integrity evidence |\n\n## Preflight, start, inspect, and stop\n\nRun from `nodics.kickoff`:\n\n```text\nnpm run topology:preflight\nnpm run topology:start:all\nnpm run topology:status\nnpm run topology:stop\n```\n\nPreflight verifies repository availability and required ports. Startup refuses\nbusy ports, starts dependencies in order, waits for HTTP readiness, records only\nits own process identities, and fails closed if a managed child exits. Stop\nsignals only the validated supervisor and releases children in reverse order.\n\n## Supported initialization and release upgrade\n\nUse `npm run acceptance:local:fresh` only when a bounded Local reset is intended.\nThe command resets through the governed Platform API; it does not issue database\ncommands. Use `npm run acceptance:local` for retained-schema initialization,\ncontent-pack upgrade, repeat installation, and publication verification.\n\nImmutable content-pack files use portable source revision zero. During a\ngoverned content-pack upgrade, nImport reads the latest Staged record through its\ngenerated schema service and supplies the next optimistic revision. A concurrent\nwriter can still win between read and save; persistence then rejects the import,\nand the operator reviews import-run diagnostics before retrying. Ordinary imports\nand API writes do not receive this release-only reconciliation.\n\nAn upgrade is successful only when the content-pack status is `CURRENT`, the\nexpected release version and checksum are visible, Staged import diagnostics have\nno unresolved failures, publication reaches `ONLINE`, and Online delivery returns\nthe expected projection. Never resolve an upgrade by changing stored revisions.\n\n## Failure, retry, rollback, and recovery\n\n- A validation or approval rejection leaves Online unchanged. Correct Staged\n  content, create or select the intended version, and submit again.\n- Workflow timeouts and response loss are retried only through the bounded,\n  idempotent Process and publication contracts. Correlation ID and operation key\n  must remain stable for the retry.\n- A Staged, Process, or Online interruption is recovered by restarting the\n  supervised topology and running retained acceptance. Reconciliation resumes\n  durable lifecycle and outbox state; it must not manufacture database state.\n- A failed deployment is reconciled before retry. If activation cannot be\n  completed safely, invoke the governed publication rollback operation and\n  verify the prior Online pointer and delivery response.\n- Unexpected supervised child exit must stop the remaining topology. Inspect the\n  generated runtime logs, correct the cause, run preflight, and start again.\n\n## Import, export, backup, and restore boundaries\n\nLocal acceptance proves secured Staged export, checksum and provenance, media-\nbacked validation/import, tenant rejection, and Online/Process export denial.\nThis is a logical data portability and recovery exercise, not a physical database\nbackup certification. Physical backup, restore, point-in-time recovery, RPO, and\nRTO require database-provider procedures and non-Local qualification. Restored\nauthoritative data must be followed by Nodics projection rebuild and API-based\ncount/checksum reconciliation.\n\n## Observability and audit\n\nUse publication operations and diagnostics APIs to inspect lifecycle state,\nfailure and stuck totals, safe failure codes, actor identity, correlation ID,\nrevision, target version, deployment receipts, audit reconciliation, and outbox\ndelivery. Logs must omit tokens, credentials, provider paths, raw payloads, and\nprotected business or personal data. Exported evidence is sanitized before it is\nshared.\n\nRequired Local signals are publication count, failure count, stuck count,\nduration per bounded contract, retry outcome, rollback outcome, readiness, and\nOnline delivery verification. Production queue depth, p95/p99, throughput, soak,\nprojection lag, alerts, and capacity targets remain external evidence.\n\n## Concurrency, retention, and cleanup\n\nLifecycle revisions prevent conflicting transitions. Stable publication codes,\noperation keys, receipts, Online pointers, and outbox identities make identical\nreplays converge. Concurrent editors must publish explicit frozen versions;\npublishing never means “latest at execution time.”\n\nPrevious content versions remain governed history. Online manifests and rollback\nreferences protect required versions. Media cleanup uses retention time, active\nand rollback references, batch limits, and legal hold; it removes only expired,\nunreferenced publication media through the media service. Generated supervisor\nstate and import staging follow their owning cleanup lifecycle.\n\n## Qualification and evidence\n\nRun:\n\n```text\nnpm run qualification:publishing-capacity\nnpm run qualification:publishing-soak\nnpm run qualification:security-boundary\nnpm run qualification:deployment:local -- --include-fresh\n```\n\nThe bounded capacity suite covers freeze, deployment, activation, delivery,\nresponse-loss retry, rollback, transaction abort, media retention, concurrent\nactivation/receipt convergence, workflow handoff, publication operations, and\naudit reconciliation. The deployment report records command outcomes, durations,\nrepository commits, explicit external gaps, and an integrity digest. It never\nself-approves production.\n\nThe Local sustained-reliability gate repeats six publication, workflow,\noutbox, reconciliation, rollback, and media-retention contracts for 25 cycles\n(150 executions) under explicit elapsed-time and process-memory-growth budgets.\nThe automated security boundary executes authentication, authorization, cache\nmutation, import/export, remote transport, BackOffice, Engagement, publication\nauthority, and atomic-audit contracts. These close Local regression evidence;\nthey do not replace production-scale soak or an independent penetration test.\n\nFor the isolated `kickoffDockerLocal` production simulation, run the Docker\nLocal build, start, acceptance, qualification, resilience, interruption, and\nsoak commands defined in `package.json`. Keep this environment separate from\nnative `kickoffLocal`; it owns its own ports, secrets, databases, Redis\ntopology, networks, and Staged/Online media volumes.\n\nThe qualified 2026-08-13 closure completed API-only retained-data acceptance,\nseven target-release reconciliations, Redis Sentinel promotion with\nauthentication and publication continuity, a 1.744-second backup/RPO rehearsal,\na 55.420-second restore/RTO against the 300-second Local target, and a 30-minute\nsoak of 20,088 requests with zero errors, six publication runs, 12 ms p95, 15 ms\np99, and 56 resource samples. This is reproducible Local evidence, not a\nproduction approval. Independent penetration testing and human\nassistive-technology review remain external.\n\nTroubleshoot using stable error codes. `ERR_IMP_00003` indicates immutable release\nintegrity/version policy, `ERR_IMP_00010` is an aggregate record-dispatch failure,\nand `ERR_MDL_00004` indicates an optimistic revision conflict. Preserve the\ncorrelation ID and sanitized import/publication diagnostics when escalating.\n\n## Common mistakes\n\nA common mistake is treating a content-pack update as a database migration and\nmanually changing `versionId`, installed-release history, or the Online pointer.\nThat destroys the evidence needed for retry and rollback. Another mistake is\nstarting Nexus against Staged because authoring content appears there first;\npublic clients must remain Online-only. Do not run multiple unmanaged copies of\nthe same Local server, kill a PID copied from stale state, reuse an old checksum\nunder the same release version, or declare success only because processes are\nlistening. Readiness, authority, workflow, publication, and delivery must all be\nverified.\n\nOperators should also avoid interpreting Local contract timing as production\ncapacity, logical export as physical backup, retryable-phase warnings as final\nfailure, or an integrity digest as human approval. Inspect the final import-run\nand publication states. Documentation source belongs in this project, generated\nCMS data comes from the generator, and frontend applications must not become the\nauthority for content-pack installation or publication state.\n\n## Verification\n\nFor a normal retained upgrade, run preflight, retained acceptance, publishing\ncapacity qualification, and the project test suite. For a deliberate clean-room\nexercise, run fresh acceptance once and retained acceptance immediately after it\nto prove restart-safe idempotency. Confirm that all expected packs are `CURRENT`,\nthe new documentation page is delivered from Online, the publication operations\nsummary has no unexplained failed or stuck item, and `topology:status` reports no\nmanaged process after shutdown.\n\nReview the generated qualification report for command exit codes, durations,\nsource commits, explicit external gaps, and a valid SHA-256 digest. Independently\nrun Framework, Axis, and Nexus verification before committing the coordinated\nbaseline. Finally run `git diff --check`, documentation generation in check mode,\ncredential-pattern scanning, and the zero-direct-database audit over the changed\nfiles. A beginner or partner developer should be able to follow this sequence\nwithout knowing a MongoDB collection name or using a database shell.\n",
      "previous": {
        "title": "Local acceptance checklist",
        "route": "/docs/nodics-kickoff/kickoff-local-acceptance"
      },
      "next": {
        "title": "Deployment qualification",
        "route": "/docs/nodics-kickoff/kickoff-deployment-qualification"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "docs/pages/local-publishing-operations.md",
        "wordCount": 1467,
        "checksum": "b5f033ac7d2e6c84f91e34f5bd12e9aac824c0a52d590e65a69bbb72abac4959"
      }
    },
    "active": true
  },
  "record6": {
    "code": "kickoffDocsComponentkickoffDeploymentQualification",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.deployment-qualification",
      "title": "Deployment qualification",
      "route": "/docs/nodics-kickoff/kickoff-deployment-qualification",
      "section": "publish-and-qualify",
      "sectionTitle": "Publish and Qualify",
      "group": "deployment-qualification",
      "groupTitle": "Deployment Qualification",
      "parentId": "publish-and-qualify",
      "hierarchyPath": [
        "Nodics Kickoff",
        "Publish and Qualify",
        "Deployment qualification"
      ],
      "hierarchyDepth": 3,
      "documentType": "operations",
      "audience": [
        "business-user",
        "administrator",
        "architect",
        "developer",
        "operator",
        "qa",
        "ai-tool"
      ],
      "businessAudience": [
        "administrator",
        "operator"
      ],
      "technicalAudience": [
        "architect",
        "developer",
        "qa",
        "ai-tool"
      ],
      "summary": "Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off.",
      "visibility": "public",
      "accessMode": "PUBLIC",
      "publiclyAvailable": true,
      "requiresAuthentication": false,
      "allowedRoles": [],
      "allowedGroups": [],
      "allowedPermissions": [],
      "lifecycleState": "ONLINE",
      "maturityState": "operational",
      "implementationState": "current",
      "relatedPages": [
        "kickoff.local-runtime",
        "kickoff.local-publishing-operations"
      ],
      "visualRequirements": [
        "diagram",
        "troubleshooting-matrix",
        "command-example"
      ],
      "searchKeywords": [
        "deployment",
        "qualification",
        "evidence",
        "production"
      ],
      "topicKeywords": [
        "security",
        "resilience",
        "load",
        "provider"
      ],
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
          "kind": "paragraph",
          "text": "For beginners, the safest way to read this page is as an evidence map. Kickoff can prove that the local reference stack behaves consistently, but business approval still needs named owners for production topology, security, providers, accessibility, performance, recovery, and data governance."
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
          "text": "npm run qualification:deployment:local -- --include-fresh"
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
          "text": "The runner implementation belongs to framework tooling. The root `package.json.name` owns stable project identity. `nodics.project.json` is optional and reserved for project-owned command or acceptance overrides; it must not declare `projectCode` or `contractVersion`. Thin command aliases and human-readable project metadata live in `package.json`. Domain selections and qualification profile facts live beside the environment, for example `envs/kickoffDockerLocal/nodics.environment.json`. Data packs are owned by module data manifests. Runtime server startup facts stay with the selected environment server packages. A generated customer project should reuse the framework runner through project commands and change only its project-owned facts while retaining the safety properties:"
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
          "text": "Do not move customer workloads, credentials, acceptance data, or risk decisions into `nodics.ai`. Framework modules own reusable contracts and orchestration; the customer project owns its environments, qualification targets, and release decision."
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
      "searchText": "Deployment qualification Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off. # Deployment qualification\n\nDeployment qualification is the bridge between a release candidate that works\nlocally and a release that accountable owners may approve for production. The\nKickoff runner coordinates evidence from the framework, reference project,\nAxis, and local Redis, but it deliberately cannot approve production by itself.\n\nFor beginners, the safest way to read this page is as an evidence map. Kickoff\ncan prove that the local reference stack behaves consistently, but business\napproval still needs named owners for production topology, security, providers,\naccessibility, performance, recovery, and data governance.\n\n## Start here\n\nFrom `nodics.kickoff`, print the plan without running anything:\n\n```bash\nnpm run qualification:deployment\n```\n\nThe JSON plan identifies each gate, its owner, the command that would run, and\nwhat it proves. It contains no credentials or provider URLs.\n\nRun the safe local gates:\n\n```bash\nnpm run qualification:deployment:local\n```\n\nThe runner executes the strict framework release gate, retained-data Kickoff\nacceptance, Axis verification, and the live Redis cache and distributed\nregistry contracts. It writes sanitized evidence to:\n\n```text\nenvs/kickoffLocal/generated/deployment-qualification/latest.json\n```\n\nThe generated report is local operational evidence and is intentionally\nignored by Git. Archive it in the deployment system that owns the release.\n\n## Fresh bootstrap is intentionally separate\n\nFresh acceptance drops only the documented Kickoff local databases. Because it\nmutates local data, it is never included by default:\n\n```bash\nnpm run qualification:deployment:local -- --include-fresh\n```\n\nNever use this flag against a shared development, qualification,\npre-production, or production database. Use an isolated disposable Kickoff\nenvironment and verify the configured database names first.\n\n## What local evidence does and does not prove\n\n| Gate | Local proof | Still required before production |\n| --- | --- | --- |\n| Framework | Clean build, generated contracts, governance, dependency audit, and automated suites | Deployment-image and target-runtime confirmation |\n| Kickoff | Integrated runtime, documentation, lifecycle, and business-user smoke journey | Production topology and operational ownership |\n| Axis | Formatting, lint, type safety, automated tests, and production bundle | Supported browser/device and human assistive-technology matrix |\n| Redis | Real local cache and distributed-registry behavior | Managed TLS/authentication, topology, isolation, failover, and recovery |\n| Payments/providers | Mock and offline contract behavior | Real non-production credentials, callbacks, failure handling, and rollback |\n\nLocal success must never be translated into `productionApproved: true`. The\nreport fixes this value to `false` and keeps every external evidence class at\n`NOT_EXECUTED`.\n\n## Production-only evidence register\n\nNamed owners must attach evidence for all applicable rows:\n\n| Evidence | Accountable owner | Minimum completion evidence |\n| --- | --- | --- |\n| Peak load | Performance owner | Workload model, dataset, topology, p95/p99, throughput, error rate, saturation, queue age, projection lag, and integrity reconciliation |\n| Soak | Operations owner | Sustained duration, memory/CPU trends, retry growth, drift, storage/index growth, and post-run reconciliation |\n| Penetration | Security owner | Authenticated attack surface, tenant isolation, validation, replay, export, webhook, and privilege-escalation results with disposition |\n| Managed cache failover | Platform owner | TLS/authentication, topology, tenant isolation, node/provider loss, recovery time, and data-consistency results |\n| Backup and restore | Data owner | Backup identity, restore procedure, authoritative counts/hashes, projection rebuild, and reconciliation |\n| Regional residency | Infrastructure and privacy owners | Allowed-region routing, evacuation, deletion propagation, and cross-region leakage results |\n| RPO/RTO | Operations owner | Measured recovery point and recovery time compared with approved objectives |\n| External providers | Provider owners | Credential source, consent, callbacks, residency, observability, degraded behavior, rollback, and key rotation |\n| Accessibility | Product accessibility owner | Keyboard, screen reader, zoom/reflow, contrast, browser, and supported-device results |\n\n## Recommended execution order\n\n```mermaid\nflowchart TD\n  Plan[\"Print qualification plan\"] --> Local[\"Run safe local evidence\"]\n  Local --> Fresh{\"Isolated fresh environment available?\"}\n  Fresh -- \"yes\" --> Bootstrap[\"Run bounded fresh bootstrap\"]\n  Fresh -- \"no\" --> Provision[\"Provision qualification environment\"]\n  Bootstrap --> Provision\n  Provision --> Providers[\"Qualify managed cache and external providers\"]\n  Providers --> Load[\"Run peak load and soak\"]\n  Load --> Recovery[\"Run failover, backup restore, and RPO/RTO\"]\n  Recovery --> Security[\"Complete penetration and residency review\"]\n  Security --> Accessibility[\"Complete human accessibility matrix\"]\n  Accessibility --> Review[\"Accountable-owner evidence review\"]\n  Review --> Decision{\"All gates passed or residual risk accepted?\"}\n  Decision -- \"no\" --> Hold[\"Keep publication blocked\"]\n  Decision -- \"yes\" --> Release[\"Approve merge, tag, and publication\"]\n```\n\nRun functional success paths before destructive resilience tests. Run load\nbefore failover only when the test plan explicitly needs a stable baseline.\nRestore the environment and reconcile data after every destructive exercise.\n\n## Failure and recovery\n\nThe runner continues through local gates so one report shows every attempted\ncheck. Any non-zero command becomes `FAILED` with a stable failure code; raw\nenvironment variables and secrets are excluded. Investigate the owning\nrepository first, rerun the focused failing command, then rerun the pack.\n\nIf Redis is unavailable, start or configure an approved test endpoint and set\n`NODICS_CACHE_REDIS_URL` only in the execution environment. Do not commit it.\nIf the framework, Axis, or Kickoff checkout lives elsewhere, provide\n`NODICS_QUALIFICATION_FRAMEWORK_ROOT` or `NODICS_QUALIFICATION_AXIS_ROOT`.\n\n## Customization boundary\n\nThe runner implementation belongs to framework tooling. The root\n`package.json.name` owns stable project identity. `nodics.project.json` is\noptional and reserved for project-owned command or acceptance overrides; it must\nnot declare `projectCode` or `contractVersion`. Thin command aliases and human-readable project metadata\nlive in `package.json`. Domain selections and qualification profile facts live\nbeside the environment, for example\n`envs/kickoffDockerLocal/nodics.environment.json`. Data packs are owned by\nmodule data manifests. Runtime server startup facts stay with the selected\nenvironment server packages.\nA generated customer project should reuse the framework runner through project\ncommands and change only its project-owned facts while retaining the safety\nproperties:\n\n- dry plan by default;\n- destructive checks explicitly opted in;\n- no secrets or provider URLs in reports;\n- external evidence remains separate from local automation;\n- no automatic production approval;\n- named owners and measurable completion criteria.\n\nDo not move customer workloads, credentials, acceptance data, or risk decisions\ninto `nodics.ai`. Framework modules own reusable contracts and orchestration;\nthe customer project owns its environments, qualification targets, and release\ndecision.\n\n## Common mistakes\n\n- Treating local Redis as proof of a managed Redis topology, TLS, authentication,\n  failover, or regional recovery.\n- Calling mock Stripe or offline provider contracts a live-provider test.\n- running `--include-fresh` without checking that the target is the isolated\n  Kickoff local environment;\n- publishing the generated JSON as a production approval even though it records\n  only command outcomes and fixes `productionApproved` to `false`;\n- pasting secrets, bearer tokens, provider URLs, customer data, or raw security\n  findings into a shared evidence report;\n- accepting average latency while ignoring p95/p99, errors, saturation, queue\n  age, projection lag, and post-run data integrity;\n- running failover or restore exercises without a rollback plan and named\n  operational owner;\n- letting Axis automation replace keyboard, screen-reader, zoom, contrast, and\n  supported-device testing by a qualified human;\n- merging or tagging merely because local gates passed while production-only\n  evidence still says `NOT_EXECUTED`.\n\n## Verification\n\nDevelopers can verify the runner contract without starting the full stack:\n\n```bash\nnpm run test:qualification\nnpm run qualification:deployment\n```\n\nConfirm the plan contains five non-destructive local gates, nine explicit\nexternal gates, no environment values, and `productionApproved: false`. Then\nrun `npm run qualification:deployment:local` in the prepared local workspace.\nConfirm every attempted local gate is `PASSED`, the report is written only\nunder the ignored `envs/kickoffLocal/generated` path, and all production-only\ngates remain visible.\n\nOperators should archive the local report with the immutable repository commit\nidentifiers, deployment image identifiers, environment name, external test\nreports, and accountable-owner decisions. Before approval, independently\nconfirm that each external result belongs to the same release candidate and\nenvironment topology. A missing, stale, differently scoped, or unverifiable\nartifact remains pending; silence is never a pass.\n",
      "previous": {
        "title": "Local publishing operations",
        "route": "/docs/nodics-kickoff/kickoff-local-publishing-operations"
      },
      "next": {
        "title": "Customer customization guide",
        "route": "/docs/nodics-kickoff/kickoff-customization"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "docs/pages/deployment-qualification.md",
        "wordCount": 1187,
        "checksum": "f61abc2f37c7088f4ee0babfb5cc62968a543e6f23f2c153c07457c54689c0fa"
      }
    },
    "active": true
  },
  "record7": {
    "code": "kickoffDocsComponentkickoffCustomization",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.customization",
      "title": "Customer customization guide",
      "route": "/docs/nodics-kickoff/kickoff-customization",
      "section": "customize-customer-projects",
      "sectionTitle": "Customize Customer Projects",
      "group": "project-customization",
      "groupTitle": "Project Customization",
      "parentId": "customize-customer-projects",
      "hierarchyPath": [
        "Nodics Kickoff",
        "Customize Customer Projects",
        "Customer customization guide"
      ],
      "hierarchyDepth": 3,
      "documentType": "customization",
      "audience": [
        "business-user",
        "administrator",
        "architect",
        "developer",
        "operator",
        "qa",
        "ai-tool"
      ],
      "businessAudience": [
        "business-user",
        "administrator"
      ],
      "technicalAudience": [
        "architect",
        "developer",
        "operator",
        "qa",
        "ai-tool"
      ],
      "summary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
      "visibility": "public",
      "accessMode": "PUBLIC",
      "publiclyAvailable": true,
      "requiresAuthentication": false,
      "allowedRoles": [],
      "allowedGroups": [],
      "allowedPermissions": [],
      "lifecycleState": "ONLINE",
      "maturityState": "operational",
      "implementationState": "current",
      "relatedPages": [
        "kickoff.overview",
        "kickoff.local-runtime",
        "kickoff.local-acceptance"
      ],
      "visualRequirements": [
        "diagram",
        "comparison-table",
        "code-example"
      ],
      "searchKeywords": [
        "customization",
        "project module",
        "overlay",
        "configuration"
      ],
      "topicKeywords": [
        "extension",
        "rollback",
        "generated docs",
        "customer layer"
      ],
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
          "text": "Waste Management customization",
          "anchor": "kickoffCustomization-11-waste-management-customization",
          "level": 3
        },
        {
          "text": "What not to customize in Kickoff",
          "anchor": "kickoffCustomization-12-what-not-to-customize-in-kickoff",
          "level": 2
        },
        {
          "text": "Extension example",
          "anchor": "kickoffCustomization-13-extension-example",
          "level": 2
        },
        {
          "text": "Documentation rule",
          "anchor": "kickoffCustomization-14-documentation-rule",
          "level": 2
        },
        {
          "text": "Step-by-step: add a small project module",
          "anchor": "kickoffCustomization-15-step-by-step-add-a-small-project-module",
          "level": 2
        },
        {
          "text": "Example: adding a project service",
          "anchor": "kickoffCustomization-16-example-adding-a-project-service",
          "level": 3
        },
        {
          "text": "Step-by-step: add project documentation",
          "anchor": "kickoffCustomization-17-step-by-step-add-project-documentation",
          "level": 2
        },
        {
          "text": "DevOps and rollback notes",
          "anchor": "kickoffCustomization-18-devops-and-rollback-notes",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffCustomization-19-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffCustomization-20-verification",
          "level": 2
        },
        {
          "text": "Continue",
          "anchor": "kickoffCustomization-21-continue",
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
              "`nodics.kickoff/docs`",
              "Kickoff owns project-wide documentation that becomes CMS data."
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
            ],
            [
              "Add project Waste categories or presets",
              "`modules/kickoffWaste/data`",
              "Waste values are schema-driven project overlay data, not framework source edits."
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
              "Server config under `envs/.../wcmsStagedServer/config` or `envs/.../wcmsOnlineServer/config`",
              "Port is topology, not shared framework behavior."
            ],
            [
              "A project wants a different public label",
              "WCMS/Axis content or project-owned documentation/content data",
              "The label is presentation/content, not service logic."
            ],
            [
              "A framework checkout path differs",
              "`.env` with `NODICS_FRAMEWORK_ROOT`",
              "Workspace layout is deployment- and developer-specific."
            ],
            [
              "Project identity is needed",
              "`package.json.name`",
              "Do not duplicate it in `nodics.project.json` or `config/properties.js`."
            ],
            [
              "A local domain selection is needed",
              "`envs/<environment>/nodics.environment.json`",
              "Runtime composition belongs to the selected environment, not a root helper file."
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
          "text": "nodics.foundation\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer"
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
          "text": "docs/\n  catalogue.json\n  pages/"
        },
        {
          "kind": "paragraph",
          "text": "The generated files live under:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "data/core-v001/records/documentation/\ndata/manifest.json"
        },
        {
          "kind": "paragraph",
          "text": "Edit the source, bump the catalogue version, regenerate, test, import, and verify in Axis. Never hand-edit the generated CMS records to make a page look right."
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "Waste Management customization",
          "anchor": "kickoffCustomization-11-waste-management-customization"
        },
        {
          "kind": "paragraph",
          "text": "Waste Management follows the same layered customization model as other Nodics capabilities:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "nodics.waste\n  -> waste accelerator umbrella\n    -> eWaste scenario accelerator\n      -> kickoffWaste project overlay"
        },
        {
          "kind": "paragraph",
          "text": "Use `modules/kickoffWaste` for Kickoff-owned Waste data. It can add or override family, category, material, evidence policy, collection preset, acceptance rule, impact metric, and impact profile records through a manifest-backed data release. The local Waste server installs `eWaste:core-reference` first and `kickoffWaste:project-reference` second, so project values can extend the accelerator without changing framework or accelerator code."
        },
        {
          "kind": "paragraph",
          "text": "Do not put reward formulas, coupon codes, map-provider secrets, vendor contracts, recycler adapters, logistics adapters, or tenant-scoped rows in Waste reference data. Loyalty, Location, Commerce, provider integrations, and project journey modules own those concerns."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What not to customize in Kickoff",
          "anchor": "kickoffCustomization-12-what-not-to-customize-in-kickoff"
        },
        {
          "kind": "paragraph",
          "text": "Do not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not rename standard functional identities such as `nodics.platform` just because a customer extension customizes their behavior. Do not put backend-importable CMS data into the frontend repository. Do not place framework documentation in the customer project unless it is truly project-specific guidance."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Extension example",
          "anchor": "kickoffCustomization-13-extension-example"
        },
        {
          "kind": "paragraph",
          "text": "A customer may later create a module such as `kickoff.platform` to customize Platform behavior. A Platform server could load:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "nodics.foundation\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer"
        },
        {
          "kind": "paragraph",
          "text": "BackOffice and Axis should still present the functional capability as Platform unless the customer explicitly exposes a separate functional module. The extension changes implementation; it does not create a new product identity."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Documentation rule",
          "anchor": "kickoffCustomization-14-documentation-rule"
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
          "anchor": "kickoffCustomization-15-step-by-step-add-a-small-project-module"
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
          "anchor": "kickoffCustomization-16-example-adding-a-project-service"
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
          "text": "Do not add that demo service to `nodics.foundation` only because every runtime loads Core. Core is the shared foundation, not a bucket for convenient code."
        },
        {
          "kind": "paragraph",
          "text": "Do not use this flow to move framework behavior into Kickoff. If the behavior belongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and implement it in the owning framework module instead."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Step-by-step: add project documentation",
          "anchor": "kickoffCustomization-17-step-by-step-add-project-documentation"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Add or update Markdown under `docs/pages/`.",
            "Update `docs/catalogue.json`.",
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
          "anchor": "kickoffCustomization-18-devops-and-rollback-notes"
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
          "anchor": "kickoffCustomization-19-common-mistakes"
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
          "anchor": "kickoffCustomization-20-verification"
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
          "anchor": "kickoffCustomization-21-continue"
        },
        {
          "kind": "unordered-list",
          "items": [
            "[Kickoff project overview](project-overview.md)",
            "[Local runtime topology](local-runtime.md)"
          ]
        }
      ],
      "searchText": "Customer customization guide Use Kickoff as a safe example for project modules, environment configuration, and customer overlays. # Customer Customization Guide\n\nKickoff is intentionally small. It should teach partners how to customize\nNodics safely without turning the reference project into another framework\nrepository.\n\nFor a beginner developer, the most important lesson is restraint. Do not start\nby editing framework files because they are easy to find. Start by asking who\nowns the behavior, whether configuration can solve the need, and which runtime\nserver should load the customization. That habit keeps the customer project\nupgradeable.\n\n## Why customization needs rules\n\nMost enterprise projects start with one urgent customer request. The quickest\nsolution is often to edit whatever file is easiest to find. That works for a\ndemo, but it becomes expensive when more customers, tenants, brands, modules,\nand releases arrive. Nodics customization rules keep the framework upgradeable\nand keep customer behavior visible in the customer project.\n\nThe rule is simple: customize in the most specific owner that needs the\nchange. Use configuration before code. Use a project module before editing a\nframework module. Use a later-loaded extension module before forking a standard\nfunctional module. Create a new functional module only when the business\ncapability is genuinely new.\n\n## Customization decision tree\n\nUse this decision tree before changing code:\n\n```mermaid\nflowchart TD\n  Need[\"Need to change behavior or content\"] --> Config{\"Can configuration solve it?\"}\n  Config -- \"yes\" --> Env[\"Use project, environment, server, node, tenant, or provider configuration\"]\n  Config -- \"no\" --> Existing{\"Does an existing functional module own it?\"}\n  Existing -- \"yes\" --> ProjectModule{\"Is it customer-specific?\"}\n  ProjectModule -- \"yes\" --> Overlay[\"Create or update a customer/project module loaded after the framework owner\"]\n  ProjectModule -- \"no\" --> Framework[\"Change the owning framework module with tests and docs\"]\n  Existing -- \"no\" --> NewModule[\"Design a new functional module with explicit ownership\"]\n  Env --> Verify[\"Regenerate artifacts and run acceptance\"]\n  Overlay --> Verify\n  Framework --> Verify\n  NewModule --> Verify\n```\n\nIf you cannot answer the ownership question, do not code yet. A wrong owner is\nmore expensive than a missing implementation because it creates a hidden\ncontract future teams will inherit.\n\n## How a developer or AI tool should think\n\nKickoff is a reference customer project, so every change teaches future\ncustomers what “good” looks like. A developer or AI tool should not behave like\na script that only edits the nearest file. It should behave like a small expert\nteam:\n\n| Role | What to check in Kickoff |\n| --- | --- |\n| Business analyst | Does this make the first-hour customer experience clearer, safer, or more convincing? |\n| Enterprise architect | Does the change preserve framework, customer project, runtime server, Axis, WCMS, Profile, and BackOffice ownership? |\n| Nodics framework expert | Is the behavior a project customization, a framework capability, a server topology decision, or generated content-pack output? |\n| Domain expert | Is the sample reusable enough for future commerce, workflow, content, integration, or industry-specific examples? |\n| Principal engineer | Can this be solved through configuration, project module overlay, generated documentation source, or a small exported function? |\n| QA and tester | Does the setup work from zero database state, repeated runs, missing services, and failed dependency resolution? |\n| TechOps/DevOps reviewer | Are framework paths, local databases, ports, logs, reset scope, and rollback behavior safe and understandable? |\n\nIf the answer is unclear, stop and name the ownership decision before editing.\nFor example, changing the local WCMS database name belongs in server\nconfiguration, while changing the import checksum rule belongs in the owning\nframework import service.\n\n## File placement examples\n\nUse these examples when deciding where code or data belongs:\n\n| Need | Correct owner | Why |\n| --- | --- | --- |\n| Change local Platform port | `envs/kickoffLocal/platformServer/config` | It is server topology, not framework behavior. |\n| Add a project-only service | `modules/<project-module>` | Customer behavior should load after framework modules. |\n| Explain Kickoff setup in Axis docs | `nodics.kickoff/docs` | Kickoff owns project-wide documentation that becomes CMS data. |\n| Change Axis renderer behavior | `nodics.axis` | Browser rendering is frontend code, not customer backend data. |\n| Change framework-wide import validation | `nodics.ai` owning module | Shared behavior belongs to the framework owner. |\n| Change generated CMS record text | Source Markdown, then regenerate | Generated files are projections and must not become manual authority. |\n| Add project Waste categories or presets | `modules/kickoffWaste/data` | Waste values are schema-driven project overlay data, not framework source edits. |\n\n## Configuration-first examples\n\nConfiguration-first does not mean \"put everything in properties.\" It means use\nthe correct configuration owner before writing code.\n\n| Example change | Better first move | Why |\n| --- | --- | --- |\n| Local WCMS port must change | Server config under `envs/.../wcmsStagedServer/config` or `envs/.../wcmsOnlineServer/config` | Port is topology, not shared framework behavior. |\n| A project wants a different public label | WCMS/Axis content or project-owned documentation/content data | The label is presentation/content, not service logic. |\n| A framework checkout path differs | `.env` with `NODICS_FRAMEWORK_ROOT` | Workspace layout is deployment- and developer-specific. |\n| Project identity is needed | `package.json.name` | Do not duplicate it in `nodics.project.json` or `config/properties.js`. |\n| A local domain selection is needed | `envs/<environment>/nodics.environment.json` | Runtime composition belongs to the selected environment, not a root helper file. |\n| A new API category should be enabled | Owning module default property, with server override only to disable or narrow it | Defaults belong to the module that owns the API. |\n| A new lifecycle state is needed | Owning status-definition file | Status values are contracts, not casual properties. |\n| A customer needs different Profile behavior | Customer extension module loaded after Platform/Profile owner | Customer behavior should not fork framework source. |\n\n## Safe customization model\n\nCustomer projects can add project modules under `modules/` and environment or\nserver contributions under `envs/`. These contributions load after standard\nNodics functional modules and can override or extend services through the\nnormal module merge process.\n\nSafe customizations include:\n\n- project-specific configuration;\n- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;\n- customer extension modules such as a future `kickoff.platform`;\n- environment-specific properties for local, testing, pre-production, and\n  production;\n- project-owned CMS documentation content packs;\n- sample data or initialization flows that belong to the customer project.\n\n## Two customization types\n\n### Code-level customization\n\nUse code-level customization when behavior changes: a service needs different\nlogic, a route needs a project-specific policy, a schema needs project fields,\nor an integration must call a customer system. Keep the implementation in a\nKickoff module or a customer extension module. Add tests next to the changed\nowner and document the boundary in the module README or documentation page.\n\nExample mental model:\n\n```text\nnodics.foundation\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nHere `kickoff.platform` can override or compose Platform services because it\nloads later. Axis and BackOffice should still show the functional capability as\nPlatform unless the customer intentionally exposes a new business capability.\n\n### Axis and WCMS customization\n\nUse governed frontend customization when an administrator changes content,\nlabels, navigation, documentation, images, or page composition through Axis\nand WCMS. The browser renderer stays in `nodics.axis`; the content records live\nin the backend owner. For example, changing a demo site logo should become a\ngoverned WCMS, Media, or content update, not a hard-coded replacement inside\nthe Axis source repository.\n\n### Documentation customization\n\nDocumentation customization is content customization. If a customer wants\ntheir own onboarding guide, project setup page, API usage note, operational\nrunbook, or business process explanation, the content belongs in the customer\nproject documentation pack.\n\nThe source lives under:\n\n```text\ndocs/\n  catalogue.json\n  pages/\n```\n\nThe generated files live under:\n\n```text\ndata/core-v001/records/documentation/\ndata/manifest.json\n```\n\nEdit the source, bump the catalogue version, regenerate, test, import, and\nverify in Axis. Never hand-edit the generated CMS records to make a page look\nright.\n\n### Waste Management customization\n\nWaste Management follows the same layered customization model as other Nodics\ncapabilities:\n\n```text\nnodics.waste\n  -> waste accelerator umbrella\n    -> eWaste scenario accelerator\n      -> kickoffWaste project overlay\n```\n\nUse `modules/kickoffWaste` for Kickoff-owned Waste data. It can add or override\nfamily, category, material, evidence policy, collection preset, acceptance rule,\nimpact metric, and impact profile records through a manifest-backed data\nrelease. The local Waste server installs `eWaste:core-reference` first and\n`kickoffWaste:project-reference` second, so project values can extend the\naccelerator without changing framework or accelerator code.\n\nDo not put reward formulas, coupon codes, map-provider secrets, vendor\ncontracts, recycler adapters, logistics adapters, or tenant-scoped rows in\nWaste reference data. Loyalty, Location, Commerce, provider integrations, and\nproject journey modules own those concerns.\n\n## What not to customize in Kickoff\n\nDo not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not\nrename standard functional identities such as `nodics.platform` just because a\ncustomer extension customizes their behavior. Do not put backend-importable CMS\ndata into the frontend repository. Do not place framework documentation in the\ncustomer project unless it is truly project-specific guidance.\n\n## Extension example\n\nA customer may later create a module such as `kickoff.platform` to customize\nPlatform behavior. A Platform server could load:\n\n```text\nnodics.foundation\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nBackOffice and Axis should still present the functional capability as Platform\nunless the customer explicitly exposes a separate functional module. The\nextension changes implementation; it does not create a new product identity.\n\n## Documentation rule\n\nCustomer documentation follows the same ownership rule:\n\n- framework guidance goes to `nodics.docs`;\n- Axis product guidance goes to Platform `modules/axis`;\n- Kickoff/project guidance goes to `nodics.kickoff`;\n- browser rendering remains in `nodics.axis`.\n\nWhen Kickoff docs change, update the source page, bump the catalogue version if\nthe generated content changes, regenerate the pack, import it through WCMS, and\nverify the route in Axis.\n\n## Step-by-step: add a small project module\n\n1. Create or choose a module under `modules/`.\n2. Give the module a clear package identity and index so load order is\n   intentional.\n3. Add only project-owned services, data, configuration, or routes.\n4. Register the module in the relevant environment/server composition.\n5. Start the server and verify logs show the module loading after framework\n   modules.\n6. Add or update tests proving the project behavior.\n7. Update Kickoff documentation if the customization is part of the reference\n   journey.\n\n### Example: adding a project service\n\nSuppose a customer wants a project-only greeting service for a demo dashboard.\nThe safe thought process is:\n\n1. The behavior is not framework-wide.\n2. The behavior belongs to the customer project.\n3. The implementation should live under a project module, for example\n   `modules/kickoffCore`.\n4. The service should be exported so a later module can override or compose it.\n5. A test should prove the default behavior and the override path.\n6. The documentation should explain the example if it teaches future partners.\n\nDo not add that demo service to `nodics.foundation` only because every runtime loads\nCore. Core is the shared foundation, not a bucket for convenient code.\n\nDo not use this flow to move framework behavior into Kickoff. If the behavior\nbelongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and\nimplement it in the owning framework module instead.\n\n## Step-by-step: add project documentation\n\n1. Add or update Markdown under\n   `docs/pages/`.\n2. Update `docs/catalogue.json`.\n3. Bump the catalogue version when generated content changes.\n4. Run `npm run docs:generate`.\n5. Run `npm run test:documentation`.\n6. Import or update the content pack through Axis.\n7. Open the generated `/docs/nodics-kickoff` route in Axis and verify\n   navigation, search, headings, and previous/next links.\n\n## DevOps and rollback notes\n\nProject customizations should be deployable and reversible. Keep project\nconfiguration separate from private secrets. Record which environment and\nserver a customization affects. If a release fails, rollback should remove or\ndisable the project layer without requiring a framework source rollback.\n\nOperators should be able to answer three questions during rollback: which\nproject module introduced the change, which server graph loaded it, and which\ncontent-pack or configuration version went live. If those answers are unclear,\nthe customization is not ready for a production environment.\n\nGenerated documentation and seed data should be versioned immutably. If content\nchanges with the same version, the import service should reject it so operators\ndo not silently install a different release under an already-trusted identity.\n\n## Common mistakes\n\n- Editing framework files for a project-only demonstration change.\n- Treating the reference project name as a requirement for every customer\n  project.\n- Putting customer documentation into the framework docs module.\n- Changing a standard functional module identity when only a customer overlay\n  is being added.\n- Copying whole framework property trees into an environment/server config\n  instead of overriding only the narrow property the project needs.\n- Editing generated documentation data after a checksum failure instead of\n  updating source Markdown, regenerating, and bumping the release when\n  required.\n\n## Verification\n\nVerify a customer customization from the outside and from the owner. From the\noutside, start the relevant local server, open Axis, and confirm the visible\nbehavior changes only for the project that owns it. From the owner, run the\nproject tests, regenerate project documentation content when docs changed,\nvalidate the content-pack manifest, and run the local acceptance script when\nruntime, import, module registry, documentation, or Axis behavior is affected.\n\nIf a customization changes Platform, WCMS, Cron, or another framework\ncapability through a project overlay, the evidence must show both the default\nframework behavior and the project-specific override. A beginner should be\nable to read the evidence and understand where the change lives, why it does\nnot fork the framework, and how to remove or roll it back.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Local runtime topology](local-runtime.md)\n",
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
        "path": "docs/pages/customization-guide.md",
        "wordCount": 2158,
        "checksum": "f82ccf1cbc7306d2d54906e04039097e130a09997990f38bc1e76bc10625ae80"
      }
    },
    "active": true
  },
  "record8": {
    "code": "kickoffDocsComponentkickoffFunctionalJourneys",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.functional-journeys",
      "title": "Commerce and Engagement functional journeys",
      "route": "/docs/nodics-kickoff/kickoff-functional-journeys",
      "section": "functional-journeys",
      "sectionTitle": "Functional Journeys",
      "group": "commerce-and-engagement-journeys",
      "groupTitle": "Commerce and Engagement Journeys",
      "parentId": "functional-journeys",
      "hierarchyPath": [
        "Nodics Kickoff",
        "Functional Journeys",
        "Commerce and Engagement functional journeys"
      ],
      "hierarchyDepth": 3,
      "documentType": "how-to",
      "audience": [
        "business-user",
        "administrator",
        "architect",
        "developer",
        "operator",
        "qa",
        "ai-tool"
      ],
      "businessAudience": [
        "business-user",
        "administrator",
        "operator"
      ],
      "technicalAudience": [
        "architect",
        "developer",
        "qa",
        "ai-tool"
      ],
      "summary": "Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence.",
      "visibility": "public",
      "accessMode": "PUBLIC",
      "publiclyAvailable": true,
      "requiresAuthentication": false,
      "allowedRoles": [],
      "allowedGroups": [],
      "allowedPermissions": [],
      "lifecycleState": "ONLINE",
      "maturityState": "operational",
      "implementationState": "current",
      "relatedPages": [
        "kickoff.overview",
        "kickoff.local-acceptance",
        "kickoff.customization"
      ],
      "visualRequirements": [
        "table"
      ],
      "searchKeywords": [
        "commerce",
        "engagement",
        "customer journey",
        "provider"
      ],
      "topicKeywords": [
        "checkout",
        "orders",
        "reviews",
        "contact",
        "privacy"
      ],
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
          "kind": "table",
          "headers": [
            "Journey area",
            "Business outcome",
            "Kickoff proves",
            "Owning authority"
          ],
          "rows": [
            [
              "Commerce discovery",
              "A customer can browse published products and product detail",
              "Online projections, search-backed delivery, and customer-safe APIs are reachable",
              "Commerce, Discovery, WCMS Online, and Media"
            ],
            [
              "Cart and checkout",
              "A customer can move from intent to order placement",
              "Authenticated customer flow, cart sync, calculation, and order confirmation behave together",
              "Profile, Cart, Checkout, Pricing, Tax, Inventory, Payment, and Fulfillment"
            ],
            [
              "Order reversal",
              "A customer or operator can request cancellation, return, or refund safely",
              "Eligibility, reason options, history, and non-owner rejection remain visible and governed",
              "Order, Payment, Fulfillment, Inventory, and Process"
            ],
            [
              "Engagement",
              "Customer contact, review, testimonial, and feedback evidence is actionable",
              "Intake, operator queue, lifecycle action, withdrawal, and public projection paths are testable",
              "Engagement, Communication, Process, Profile, and WCMS"
            ]
          ]
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
          "text": "Install the workspace dependencies and use Kickoff project commands rather than constructing an undocumented module graph. Run `npm run start:platform` first, then the Commerce, Engagement, and Loyalty start commands in separate terminals as needed. The command aliases execute framework-owned runtime startup tooling; that tooling discovers server bootstrap facts from the selected environment server packages. Readiness must pass before invoking a journey. Do not place provider credentials in source, sample data, browser storage, or documentation. Environment-specific secret references belong in secured layered configuration."
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
      "searchText": "Commerce and Engagement functional journeys Follow the local customer, operator, visibility, reversal, recovery, privacy, and provider-sandbox journeys with clear ownership and verification evidence. # Commerce and Engagement functional journeys\n\nThis page is the beginner and operator route through the Nodics reference journeys. It explains what can be demonstrated locally, which module owns each decision, what Axis displays, and how to recover safely. Kickoff composes the reference environment; it does not become the authority for Commerce, Engagement, Payment, Communication, Process, Profile, Media, or WCMS records.\n\n| Journey area | Business outcome | Kickoff proves | Owning authority |\n| --- | --- | --- | --- |\n| Commerce discovery | A customer can browse published products and product detail | Online projections, search-backed delivery, and customer-safe APIs are reachable | Commerce, Discovery, WCMS Online, and Media |\n| Cart and checkout | A customer can move from intent to order placement | Authenticated customer flow, cart sync, calculation, and order confirmation behave together | Profile, Cart, Checkout, Pricing, Tax, Inventory, Payment, and Fulfillment |\n| Order reversal | A customer or operator can request cancellation, return, or refund safely | Eligibility, reason options, history, and non-owner rejection remain visible and governed | Order, Payment, Fulfillment, Inventory, and Process |\n| Engagement | Customer contact, review, testimonial, and feedback evidence is actionable | Intake, operator queue, lifecycle action, withdrawal, and public projection paths are testable | Engagement, Communication, Process, Profile, and WCMS |\n\n## Understand the product journey\n\nA customer-facing journey is not complete when an HTTP request merely returns success. The full path is customer intent, validated intake, durable business state, an eligible operator action, visibility or fulfillment, and a safe withdrawal or reversal. Every step carries a tenant and correlation identity. Repeated commands use an idempotency key, and state-changing operator commands use an expected revision so two operators cannot silently overwrite each other.\n\nThe local reference uses deterministic providers. They create realistic, content-safe evidence but do not claim that a production account, sender, carrier, or payment merchant is qualified. Sandbox-capable adapters remain disabled until their secret references and environment policy are supplied.\n\n## Plan roles, prerequisites, and ownership\n\nDevelopers start Platform before Commerce or Engagement because authentication, tenant context, and Profile ownership fail closed when Platform is unavailable. Business operators use Axis at `http://localhost:3100`; customer calls use the documented public or customer API surfaces. The local administrator may inspect operator journeys, but a customer-owned route must still be tested with a customer principal before deployment qualification.\n\nThe principal owners are:\n\n- Checkout and Order coordinate placement and reversal checkpoints without taking Payment, Inventory, or Fulfillment authority.\n- Payment owns authorization, capture, void, refund, provider evidence, and reconciliation.\n- Engagement API owns public, customer, operator, and integration exposure while Contact, Review, Feedback, and Testimonial own their records and transitions.\n- Communication owns templates, suppression, delivery attempts, callbacks, and provider-neutral evidence.\n- Process owns workflow definitions, instances, tasks, recovery incidents, retries, dead-letter state, and compensation progress. Domain modules own the business action and reversal adapters.\n- Axis renders backend-owned capability metadata and calls secured action routes; it does not duplicate lifecycle rules.\n\n## Configure and start locally\n\nInstall the workspace dependencies and use Kickoff project commands rather than constructing an undocumented module graph. Run `npm run start:platform` first, then the Commerce, Engagement, and Loyalty start commands in separate terminals as needed. The command aliases execute framework-owned runtime startup tooling; that tooling discovers server bootstrap facts from the selected environment server packages. Readiness must pass before invoking a journey. Do not place provider credentials in source, sample data, browser storage, or documentation. Environment-specific secret references belong in secured layered configuration.\n\nRun `npm run acceptance:functional` from `nodics.kickoff` for the automated effective-server proof. The runner reuses healthy local servers or starts only what it needs, authenticates through Platform, uses unique correlation and idempotency values, and stops only processes that it started. It does not edit MongoDB directly.\n\n## Operate Engagement in Axis\n\nOpen Customer Engagement in Axis. The page groups contact work, testimonials, reviews, feedback, operations, automation, and resilience without creating duplicate application shells. Select a saved or quick-filtered view, open one record, inspect its timeline and linked evidence, and use only actions shown as eligible for the current status.\n\nThe feedback reference journey submits an anonymous record, then performs `TRIAGE`, `ASSIGN`, `START`, `RESOLVE`, and `CONFIRM`. Confirm closure is intentionally separate from resolution. Reopen remains available when new customer evidence arrives. Contact work supports start, request information, resolve, close, reopen, spam handling, and handoff recovery. Review moderation supports approval, quarantine, rejection, and restoration. Testimonial operations preserve editorial version, customer consent, publication projection, emergency hide, and reconciliation as separate evidence.\n\nIf an action reports a revision conflict, reload the record and review the newer timeline. Never retry with a guessed revision. If a provider or Process handoff fails, keep the customer record accepted, inspect the deferred or dead-letter evidence, then use the dedicated recovery action. Do not change a domain record through generic schema CRUD.\n\n## Operate Commerce and reversals\n\nThe Commerce contract exposes cart calculation, checkout placement, and order reversal routes. A placement proceeds through deterministic checkpoints so failure after pricing, inventory reservation, payment authorization, order creation, or fulfillment submission can be compensated by the owning domain. Replaying the same idempotency key returns existing evidence instead of duplicating the order or payment.\n\nCancellation, return, and refund are not synonyms. Cancellation governs an eligible unfulfilled order or line, Return governs the physical or logical return case, and Refund governs money movement. Axis presents these as an Order Lifecycle journey and links payment, inventory, fulfillment, workflow, and audit evidence. Operators must inspect eligibility and preview impact before confirming a destructive or financial action.\n\n## Integrate providers safely\n\nProvider adapters implement a bounded port: validate enabled state and sandbox policy, resolve credentials by reference, send only the minimum permitted payload, produce a content-free provider reference, authenticate callbacks, reject replay, and expose health and reconciliation. Local providers are deterministic test doubles. Sandbox-capable providers are implementation evidence, while production qualification requires a deployment-owned account and sign-off.\n\nFor email and SMS, verify suppression before delivery and store no rendered content in events. For payment, use provider tokens rather than card data. For carrier and helpdesk handoff, keep external identifiers as references and let Commerce or Contact retain business lifecycle authority. A provider outage must yield retryable evidence, not an untracked domain-state change.\n\n## Privacy, data, and recovery\n\nEvery export requires a purpose, an allow-listed field set, masking, a maximum record count, an audit identity, and a checksum. Batch and repair operations require preview, approval, idempotency, per-item outcomes, and resumability. Core operations may coordinate commands, but each command returns to the owning domain service.\n\nWhen an automated Process ACTION fails, open the recovery queue in the existing Process Operations workspace. Inspect the stable error code and attempt budget, then retry with the displayed expected attempt or run the registered domain compensation. A stale attempt fails with a conflict; an exhausted incident stays dead-lettered. Process records the recovery outcome but never edits Commerce, Engagement, or another domain record directly.\n\nRetention evaluates policy and legal hold before archive or anonymization. Erasure must not delete records that regulation or an active legal hold requires; instead it records the denied or deferred outcome. Dead-letter replay uses the original bounded command identity and increments attempt evidence. Operators should be able to trace the original correlation identifier from customer intake through domain state, provider attempt, workflow, visibility, and recovery.\n\n## Observe and troubleshoot\n\nUse readiness first, then domain dashboards and timelines. Important signals include placement and reversal failure counts, provider latency and callback rejection, moderation and resolution SLA, overdue queue items, dead letters, replay outcomes, export failures, and projection drift. Logs and events must carry codes and correlation identifiers without message bodies, secrets, tokens, personal contact details, or payment data.\n\nWhen a public Engagement request fails, confirm a correlation header exists and that the feature is enabled in the effective server. When an operator queue appears empty, confirm pagination controls were not interpreted as persistence filters. When Axis hides an action, inspect current status, permission, and backend metadata before assuming a frontend defect. When a provider is disabled, do not enable it merely to make a test green; use the deterministic local adapter or supply a governed sandbox configuration.\n\n## Common mistakes\n\n- Calling a foundation or local mock “production complete.”\n- Starting Commerce or Engagement without Platform and then weakening fail-closed dependencies.\n- Editing MongoDB to create demo state instead of using a governed API or import.\n- Adding a second heavy Axis page when backend metadata can express the journey cleanly.\n- Letting a cross-domain batch mutate repository records directly.\n- Logging message content, addresses, credentials, tokens, or provider callback payloads.\n- Treating deployment qualification as a substitute for functional implementation.\n\n## Verification\n\nRun the owning package tests, then `npm run acceptance:functional` in Kickoff. Verify that submission is visible to an authorized operator, all lifecycle actions increment revision, closure is visible, public projections contain only approved data, and withdrawal or reversal removes eligibility without erasing required audit evidence. Run Axis verification after metadata changes and check keyboard navigation, responsive layout, action confirmation, empty states, error recovery, and permission-denied behavior.\n\nFor provider work, run success, timeout, rejection, duplicate callback, replay, reconciliation, and disabled-configuration contracts. For operational work, prove preview, approval, partial failure, resume, idempotent replay, legal hold, masked export, and repair evidence. Qualification against real external accounts, production-scale load, disaster recovery infrastructure, and formal accessibility sign-off remains a later environment gate.\n",
      "previous": {
        "title": "Customer customization guide",
        "route": "/docs/nodics-kickoff/kickoff-customization"
      },
      "next": null,
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "kickoffLocal",
        "path": "docs/pages/functional-journeys.md",
        "wordCount": 1510,
        "checksum": "b836ca89d948b684578b9110ccaf98bc8f6385926ef7dd5ba9d2e252a56abbb5"
      }
    },
    "active": true
  }
};
