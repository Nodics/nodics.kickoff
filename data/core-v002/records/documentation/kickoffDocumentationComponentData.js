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
          "group": "discover-kickoff",
          "groupTitle": "Discover Kickoff",
          "groupOrder": 10,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 10,
          "parentId": "discover-kickoff",
          "hierarchyPath": [
            "Discover Kickoff",
            "Kickoff project overview"
          ],
          "hierarchyDepth": 2,
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
            "kickoff.functional-journeys",
            "kickoff.local-setup-to-live",
            "kickoff.local-acceptance"
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
          "searchText": "Kickoff project overview Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs. # Kickoff Project Overview\n\nNodics Kickoff is the reference customer project for running Nodics locally and\ndemonstrating how a partner or customer project consumes the framework. It is\nnot a standard Nodics functional module such as Core, Platform, WCMS, or Cron.\nIt is a project-owned runtime composition that shows how those modules can be\nassembled without copying framework source.\n\nKickoff owns project structure, local environment wiring, project modules,\nsample customization points, and project documentation. Framework\ndocumentation belongs in `nodics.docs`; Axis product documentation belongs in\nthe Platform `axis` backend module; browser renderers belong in `nodics.axis`.\nKickoff-wide documentation source belongs in this repository under `docs/` and\nis generated into this repository's governed content pack. Documentation for a\nspecific installed application belongs under that application's data module,\nfor example `modules/circa.ewaste/docs/`. Agora Apparel, Electronics and Telco\nare also customer applications under this project's `modules/`, consuming\nthe respective reusable framework accelerators.\n\n## Why Kickoff exists\n\nNew developers and administrators can begin with\n[Local setup to live](local-setup-to-live-runbook.md). Developers and QA use the\n[Local acceptance checklist](local-acceptance-checklist.md) to select non-live\nchecks or an authorized live journey. Operators continue to\n[Local publishing operations](local-publishing-operations.md), and release\nowners to [Deployment qualification](deployment-qualification.md). These pages\nare available from the repository before installation and through the Kickoff\ndocumentation navigation after governed publication.\n\nKickoff exists so a new team can feel Nodics before they design their own\nproject. A partner should be able to clone the framework, clone the reference\nproject, run a small set of commands, log in to Axis, and see the major backend\ncapabilities working together.\n\nThis matters because enterprise framework adoption usually fails at the first\nhour. If the first experience requires a developer to understand every module,\nevery dependency, every data import, and every environment property, the\nframework feels heavy even when the architecture is good. Kickoff keeps the\nfirst journey small: start the runtime, import governed seed data, open Axis,\nread the documentation, and then make one safe customization.\n\nFor a business evaluator, Kickoff demonstrates that Nodics can support a real\ncustomer project without asking the customer to fork framework code. For a\ndeveloper, it shows the concrete folder shape, package dependency model,\nenvironment wiring, server start commands, and project-owned extension points.\nFor an operator, it shows how one local project can run Platform, WCMS, and a\ncombined Business Process & Automation runtime while preserving the same module\nownership rules that production will use.\n\n## What a new customer should learn\n\nKickoff should answer the questions a new customer asks before trusting a\nframework:\n\n| Question | Kickoff answer |\n| --- | --- |\n| Can I run it locally without designing my full product first? | Yes. Kickoff provides ready local Platform, WCMS, Process and Automation, and Axis wiring. |\n| Do I have to edit framework source to customize? | No. Customer modules and server/environment configuration load after framework modules. |\n| Can documentation and content be imported like real governed data? | Yes. Kickoff ships a project-owned documentation content pack. |\n| Can optional modules be added later? | Yes. Process demonstrates observed optional runtime capability and registry lifecycle while exposing workflow and cronjob capabilities. |\n| Can accelerators be customized without changing framework code? | Yes. Waste Management loads `nodics.waste`, `eWaste`, and Circa-owned Waste policy data without changing framework or accelerator source. |\n| Can an accelerator be imported before its business capabilities are active? | No. The setup journey blocks it until required capabilities such as Commerce, Discovery, or Engagement are registered and active. |\n| Can my real project use a different folder layout? | Yes. `NODICS_FRAMEWORK_ROOT` points Kickoff to the framework checkout. |\n\nThis makes Kickoff more than a sample app. It is the adoption proof for the\nwhole framework.\n\n## Beginner mental model\n\nThink of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample\nproduction line, `nodics.exp` as the frontend workspace shelf, and Axis, Nexus,\nand Agora as separate customer-facing screens. The factory equipment provides\nstandard capabilities such as Core, Platform, WCMS, Media, Process, Commerce,\nand Engagement. The sample production line decides which equipment to\nconnect for a local demonstration. The screens connect to the running backend\nand show only the capabilities that the backend says are available and\nauthorized.\n\nKickoff is not the product every customer must ship. It is the smallest\ncomplete example of how a customer product can be structured.\n\n```mermaid\nflowchart LR\n  Framework[\"Framework equipment<br/>nodics.ai\"] --> Project[\"Reference production line<br/>nodics.kickoff\"]\n  Project --> Servers[\"Local runtime servers\"]\n  Servers --> Platform[\"Platform: login and BackOffice\"]\n  Servers --> WCMS[\"WCMS: content and docs\"]\n  Servers --> Automation[\"Process server: workflows and scheduled capability\"]\n  Servers --> Commerce[\"Commerce and Engagement\"]\n  UiWorkspace[\"Frontend workspace<br/>nodics.exp\"] --> Axis[\"BackOffice<br/>nodics.axis\"]\n  UiWorkspace --> Nexus[\"Corporate site<br/>nodics.nexus\"]\n  UiWorkspace --> Agora[\"Commerce storefront<br/>nodics.agora.apparel\"]\n  Axis --> Platform\n  Axis --> WCMS\n  Axis --> Automation\n  Nexus --> WCMS\n  Agora --> Commerce\n```\n\nThe metaphor is useful because it prevents a common mistake. You do not move\nfactory equipment into a frontend application, and you do not hardcode screens\ninto the production line. Each part has a job.\n\n## What Kickoff demonstrates\n\n- how a customer project depends on Nodics framework packages;\n- how environment and server modules load after standard functional modules;\n- how Platform, WCMS Staged, WCMS Online, Process and Automation, Engagement, and\n  Commerce can run as separate ownership domains while serving three frontends;\n- how Waste Management runs as a separate backend with framework, accelerator,\n  scenario, and Circa application policy layers;\n- how project modules can customize runtime behavior without renaming the\n  standard functional module identity;\n- how customer-owned documentation can appear in Axis beside Framework,\n  Swaggers, and Nodics Axis.\n\n## Source map\n\nThe important Kickoff locations are:\n\n- `package.json` describes the project package and local scripts;\n- `package.json.name` declares the canonical stable project identity;\n- project command aliases are discovered from `envs/*` server metadata and\n  conventional `scripts/acceptance/*Service.mjs` files; do not create\n  `nodics.project.json`;\n- `package.json.nodics` declares human-readable project metadata;\n- `envs/<environment>/config/properties.js` declares environment domain\n  selections, topology, acceptance, and qualification profile facts;\n- `modules/*/data/manifest.json` declares module-owned data packs;\n- `envs/<environment>/*Server/package.json` declares the framework packages\n  required to bootstrap each runtime;\n- `config/` contains project-level defaults;\n- `envs/kickoffLocal/` contains local environment and server composition;\n- `modules/` contains project-owned modules and customization examples;\n- `docs/` contains authored Kickoff-wide documentation;\n- `data/core-v001/records/documentation/` and the documentation section in `data/manifest.json` are\n  generated content-pack outputs.\n\nAuthored documentation is the source. Generated records are the importable CMS\nprojection. Do not hand-edit generated records to fix documentation.\n\n## Runtime boundary\n\nKickoff is loaded after framework modules. That means it can contribute\nconfiguration, project modules, and project-owned documentation, but it must not\nmove framework behavior into the customer repository. A customer extension such\nas `kickoff.platform` may customize Platform implementation while the\nbusiness-facing functional identity remains `nodics.platform`.\n\nRuntime composition and code dependency are related but different. Package\ndependencies make framework modules available to the project. Server\nconfiguration decides which modules are loaded, in which order, for a specific\nruntime process. Service override behavior follows module loading and indexes,\nnot simply the order in `package.json`.\n\n```mermaid\nflowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.foundation\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.process\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsStagedServer, wcmsOnlineServer, processServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]\n```\n\nThis diagram is intentionally simple. Kickoff does not own the framework\nmodules and Axis does not own backend data. Kickoff composes the backend\nruntime, and Axis renders whatever Platform/WCMS say is active, authorized,\nand available.\n\n## First customization promise\n\nA beginner should be able to make a first safe customization without fear.\nGood first customizations are intentionally small:\n\n- change a local property in the correct environment or server file;\n- add or update a Kickoff documentation page;\n- add a project-only service in a Kickoff module;\n- add project sample data that belongs to the customer project;\n- change WCMS-managed content through Axis after import.\n\nBad first customizations are also easy to name:\n\n- editing `nodics.foundation` because a project-specific rule is needed;\n- putting CMS import data into `nodics.axis`;\n- changing generated files without changing their source;\n- changing a standard functional module identity because a project customized\n  implementation;\n- hiding a status, error code, permission, or lifecycle state in an unrelated\n  property file.\n\nKickoff exists to teach the safe path first.\n\n## Beginner story\n\nA new developer can think of Kickoff as a training project:\n\n1. It shows where a customer project keeps project modules.\n2. It shows where local environment/server configuration lives.\n3. It shows how to point at a framework checkout that may live anywhere on the\n   machine.\n4. It starts Platform, WCMS, and the composed Process and Automation runtime\n   without asking the developer to create a production topology first.\n5. It ships project-owned documentation so Axis can show framework docs,\n   Axis docs, and customer-project docs side by side.\n\nAfter the developer understands this reference shape, they can create a real\ncustomer project with the same rules but different business modules, branding,\ndata, environments, and deployment choices.\n\n## First successful setup journey\n\nOn a fresh schema, do not start by importing accelerator data in isolation.\nThe user journey is intentionally ordered so Axis, module lifecycle, content\npacks, and Online delivery all agree.\n\n```mermaid\nflowchart LR\n  Axis[\"Initialize Axis baseline\"]\n  Modules[\"Register required capabilities\"]\n  Apps[\"Initialize Nexus and Agora packs\"]\n  Publish[\"Approve and publish Online\"]\n  Storefront[\"Open Nexus or Agora\"]\n  Docs[\"Import documentation packs\"]\n  Swagger[\"Open Swagger/OpenAPI\"]\n\n  Axis --> Modules --> Apps --> Publish --> Storefront\n  Axis -. parallel .-> Docs\n  Axis -. generated .-> Swagger\n```\n\n| Step | What the user does in Axis | Why it comes here |\n| --- | --- | --- |\n| 1. Initialize Axis baseline | Complete the empty-database Axis setup so the managed BackOffice workspace, CMS baseline, and admin access are available. | Without Axis baseline, there is no reliable control plane for guided setup. |\n| 2. Register capabilities | Open Module Registry and register/activate the capabilities required by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when those features are enabled. | A running server or visible import pack is not enough. The project must declare the capability as registered and active. |\n| 3. Initialize applications | Open Setup and Accelerators and initialize Nexus, Agora Apparel, Agora Electronics, or Agora Telco. | Application initialization imports the complete site preparation package: CMS pages, routes, navigation, media metadata, media artifacts, commerce catalog data, and operational data owned by the pack. |\n| 4. Publish Online | Review publishable Staged changes, approve through the governed task, and publish to Online. | Public applications consume Online only. Until Online has approved content, they show a customer-friendly maintenance state. |\n| 5. Verify in browser | Open Nexus and Agora storefronts and confirm the expected Online content, media, navigation, and business data appear. | Browser verification proves the same path a customer sees, not only backend import success. |\n\nDocumentation packs follow the same Staged-to-Online governance, but they do\nnot block application setup. They can be imported and approved in parallel.\nSwagger/OpenAPI is generated from the active runtime contracts and should stay\navailable independently of CMS documentation publication.\n\n## Documentation boundary\n\nKickoff docs are imported through WCMS like any other governed CMS content\npack. Axis renders the resolved CMS page and does not own the documentation\nrecords. The BackOffice registry exposes the documentation source so the Axis\nDocumentation dashboard can discover it.\n\n## Common mistakes\n\n- Do not put framework documentation in Kickoff unless the page is explaining\n  how Kickoff consumes the framework.\n- Do not copy `nodics.foundation`, `nodics.platform`, `nodics.wcms`, or `nodics.process`\n  source into this repository.\n- Do not move Axis renderers or browser code into Kickoff.\n- Do not assume a customer project will always sit beside `nodics.ai`; use the\n  framework-root configuration.\n- Do not change generated content-pack files without regenerating from source.\n- Do not rename functional capabilities when a customer module only customizes\n  their implementation.\n\n## How to know Kickoff is working\n\nKickoff is healthy when Platform starts, WCMS starts, the module registry shows\nmandatory functional modules as active, optional modules can be registered\nthrough Axis, documentation content packs can be imported or updated through\nBackOffice/WCMS, Setup and Accelerators blocks applications whose required\nbusiness capabilities are not registered, and Axis can render Framework,\nSwaggers, Nodics Axis, and Nodics Kickoff documentation from backend-owned\nsources.\n\n## Verification\n\nVerify Kickoff as a reference customer project by proving that it can run the\nframework without becoming framework source. The local proof is to configure\nthe framework root, install dependencies, start the six backend runtimes plus\nAxis, Nexus, and Agora, log in, initialize the Axis baseline, register required\nbusiness capabilities, import required data releases, publish to Online, open\nthe Kickoff documentation product, and verify Agora's multi-domain storefront. The project\nshould contribute its own docs and sample behavior while framework docs still\ncome from `nodics.docs` and Axis product docs still come from the Platform Axis\nbackend module.\n\nFor repository verification, run the Kickoff documentation contract test,\nruntime prepare tests, and local acceptance script when project behavior,\nenvironment/server configuration, documentation packs, or generated data\nchange. If a future customer copies the reference project, the docs should\nteach them where to replace the project name and where not to create\nframework-level assumptions.\n\n## What to read next\n\nRead Kickoff in this order:\n\n1. **Local runtime topology** to understand which servers start and why.\n2. **Local acceptance checklist** to prove the environment from a fresh local\n   database.\n3. **Customer customization guide** to learn how to change behavior without\n   damaging framework ownership.\n4. Framework documentation for Core, Platform, WCMS, Cron, imports, and DevOps\n   once the local system is running.\n\n## Continue\n\n- [Local runtime topology](local-runtime.md)\n- [Customer customization guide](customization-guide.md)\n"
        },
        {
          "code": "kickoff.local-runtime",
          "title": "Local runtime topology",
          "route": "/docs/nodics-kickoff/kickoff-local-runtime",
          "section": "run-kickoff-locally",
          "sectionTitle": "Run Kickoff Locally",
          "sectionOrder": 20,
          "group": "run-kickoff-locally",
          "groupTitle": "Run Kickoff Locally",
          "groupOrder": 20,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 10,
          "parentId": "run-kickoff-locally",
          "hierarchyPath": [
            "Run Kickoff Locally",
            "Local runtime topology"
          ],
          "hierarchyDepth": 2,
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
            "kickoff.deployment-qualification",
            "kickoff.local-setup-to-live"
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
          "searchText": "Local runtime topology Start and reason about the local Platform, WCMS, and Process servers that make the reference project usable. # Local Runtime Topology\n\nKickoff provides a local reference topology so a developer can start Nodics and\nsee the major runtime surfaces without creating a new customer project first.\nThe local environment is `kickoffLocal`.\n\n## What this is\n\nThe local runtime topology is the smallest practical Nodics deployment on a\ndeveloper machine. It runs the framework as real backend servers, not as mocked\nscreens. That is important because Axis, BackOffice, module registration,\ncontent-pack import, API contracts, authentication, and WCMS routing all depend\non backend authority.\n\nThe goal is not to teach every production option on day one. The goal is to\ngive a beginner a reliable local loop: configure framework location, install\ndependencies, start servers, log in, import/update data, and observe the\nruntime from Axis.\n\n| Runtime part | Business purpose | Developer/operator responsibility |\n| --- | --- | --- |\n| Platform | Employee login, BackOffice bootstrap, module registry, and API discovery | Start first, verify Profile and BackOffice are reachable, and keep tokens out of logs |\n| WCMS Staged and Online | Governed content, media, documentation, and public delivery | Keep Staged authoring separate from Online delivery and import content packs through governance |\n| Process and Automation | Workflow, cronjob, scheduled capability, and recovery evidence | Start when process or scheduled behavior is being tested and avoid duplicate scheduler authority |\n| Waste Management | Generic waste submission, collection acceptance, verification, receipt, impact, and accelerator/project presets | Keep Waste separate from Loyalty and Location, and load project overlays after scenario accelerator data |\n| Axis | Employee control plane for setup, import, documentation, and operations | Point to the correct Platform URL and verify only authorized capabilities appear |\n| Nexus and Agora accelerators | Public/customer-facing proof of Online delivery | Consume Online and customer-safe APIs only, never Staged or internal operations |\n\n## Servers\n\nThe current local topology uses separate runtime servers:\n\n- `platformServer` starts the Platform runtime. It loads Core, Platform,\n  Profile, BackOffice, the Platform `axis` backend module, and Kickoff project\n  modules.\n- `wcmsStagedServer` starts the WCMS Staged runtime. It loads Core, WCMS, CMS,\n  Media, and Kickoff content-pack modules for authoring, import, review, and\n  publication-source behavior.\n- `wcmsOnlineServer` starts the WCMS Online runtime. It loads the approved\n  delivery boundary for public CMS, media, Nexus, and Agora consumption.\n- `processServer` starts the combined Business Process & Automation runtime.\n  It loads Core, Process, cronjob, workflow modules, and Kickoff project\n  modules. The `workflow` module owns process/workflow definitions; the\n  `cronjob` module owns job definitions, triggers, scheduler state, and\n  execution lifecycle.\n- `wasteServer` starts the isolated Waste Management runtime. It loads\n  `nodics.waste`, the Waste accelerator umbrella, `eWaste`, and the\n  Circa application module while keeping Loyalty, Location, vendor, recycler,\n  and logistics integrations in their owning layers.\n\nKickoff intentionally has no standalone cronjob server. Scheduled automation is\navailable only through `processServer`, preventing accidental duplicate\nscheduler processes while cronjob retains ownership of its job lifecycle.\n\nAxis, Nexus, and Agora are separate frontend applications grouped locally by\nthe optional `nodics.exp` workspace. `nodics.exp` owns frontend discovery and\ntooling only; each application still owns its own source, release, tests, and\nruntime behavior. Axis connects to Platform for employee authentication and\nBackOffice bootstrap. Nexus consumes WCMS Online and Engagement public delivery\ncontracts. Agora consumes Platform, WCMS Online, Engagement, and Commerce\ncustomer contracts.\n\n## Optional capabilities and failures\n\nThe reference configuration no longer makes Location a prerequisite for all\nWaste activation or startup, and it does not impose a Commerce/Discovery\nactivation gate on the Accelerators umbrella. Concrete domain dependencies and\nrequired reference validation still apply. Activate only the business\ncapabilities selected for the project through the existing Module Registry.\n\nFoundation, Platform and WCMS remain protected functional roots. Process and\nLocalization are optional; existing registered/enabled state is preserved when\nupgrading their metadata. No reset or automatic deactivation is performed.\n\nAfter a successful supervised launch, a runtime exit leaves its peers running.\nInspect `npm run topology:status` and the affected log. Its existing `start:*`\ncommand can restore it independently in an operator-owned terminal. Stop that\nindependent process explicitly before restarting the full supervised topology.\nStartup errors still fail the requested launch. These behaviors use the existing\nenvironment profile, module metadata and framework supervisor, not another\nconfiguration layer.\n\n## Start locally\n\nUse separate terminals from the Kickoff repository:\n\n```bash\nnpm run start:platform\nnpm run start:wcms:staged\nnpm run start:wcms:online\nnpm run start:process\n```\n\nAlternatively, the governed supervisor starts the selected backends in\ndependency order. Do not combine this with already running individual servers:\n\n```bash\nnpm run topology:start\n```\n\nIn the preferred local checkout, frontend applications live under\n`../nodics.exp/`:\n\n```text\nnodicsRoot/\n├── nodics.ai/\n├── nodics.kickoff/\n└── nodics.exp/\n    ├── nodics.axis/\n    ├── nodics.nexus/\n    └── nodics.agora.apparel/\n```\n\nStart frontends independently with `npm run dev` in their own repositories,\nwherever they are located. Backend topology does not discover, start, stop or\nqualify frontend processes. Follow each frontend's own test and browser guidance.\n\nContinue with [Local setup to live](local-setup-to-live-runbook.md) for the\nadministrator journey, then [Local acceptance](local-acceptance-checklist.md)\nfor developer and QA verification. These source guides are usable before any\ndocumentation pack is installed.\n\nThe default local ports are:\n\n- Axis: `http://localhost:3100`\n- Nexus: `http://localhost:3200`\n- Agora Apparel: `http://localhost:3300`\n- Agora Electronics: `http://localhost:3400`\n- Agora Telco: `http://localhost:3500`\n- Circa eWaste: `http://localhost:3600`\n- Platform: `http://localhost:4300`\n- WCMS Staged: `http://localhost:4312`\n- WCMS Online: `http://localhost:4314`\n- Process and Automation: `http://localhost:4330`\n- Engagement: `http://localhost:4340`\n- Commerce: `http://localhost:4350`\n- Waste Management: `http://localhost:4370`\n\n## Before starting\n\nReview `config/properties.js` and the selected `envs/<environment>/config`\nlayers before starting. Kickoff keeps local configuration in Nodics layered\nproperties, not in project-owned `.env` files. Server startup should use the\nselected environment and fail only when a property required for safe boot is\nmissing.\n\nThen install project dependencies:\n\n```bash\nnpm install\n```\n\nKickoff does not copy or symlink framework modules into `.nodics/`. Project\nscripts call `nodics`, installed from the declared `nodics.foundation` dependency.\nIts framework-owned entry point delegates to the existing command registry and\nruntime resolver. The project no longer owns a JavaScript dispatcher.\nFor example, `npm exec -- nodics start --env kickoffLocal --server platform`\nselects a server directly. `npm exec -- nodics build --env kickoffLocal --server platform`\ngenerates that server's shared artifacts. Add `--node <name>` to select a declared\nnode without creating node-owned output. Clean/build require a selected server.\n\n## Start sequence\n\nUse separate terminals so logs stay readable:\n\n1. Start Platform first. It owns Profile login, BackOffice bootstrap, module\n   registry, runtime catalogue projection, and OpenAPI contract discovery.\n2. Start WCMS second. It owns documentation sites, catalogs, pages, components,\n   routes, media metadata, and content delivery.\n3. Start Process and Automation when process/workflow or scheduled behavior is\n   needed. It proves `workflow` and `cronjob` can share one runtime environment\n   under `nodics.process` while keeping separate module ownership.\n4. Start Waste Management when waste submission, acceptance, receipt, impact,\n   or Waste accelerator data is being tested. Its local initialization profile\n   installs `eWaste:core-reference` followed by\n   `circa.ewaste:waste-policy`.\n5. Start Axis, Nexus, and Agora after backend servers are reachable. Each\n   frontend uses only its governed backend contracts and configured CORS origin.\n\n## Login and first checks\n\nOpen Axis at `http://localhost:3100`. For the local reference data, use:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: configured bootstrap administrator password\n```\n\nAfter login:\n\n- open the System and Integrations area and check the module registry;\n- confirm Core, Platform, and WCMS are active and not treated as optional;\n- register and activate required business capabilities before initializing a\n  customer-facing application: Agora requires Commerce and Discovery; Nexus\n  requires its public content and engagement capabilities when those features\n  are enabled;\n- if Process and Automation is running, confirm Process appears from the\n  composed runtime and exposes both `workflow` and `cronjob` capabilities;\n- open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics\n  Kickoff are shown as separate documentation products;\n- import or update documentation packs only through the authorized Axis action.\n\n## Fresh environment setup order\n\nA fresh local schema is ready only after four governed lanes are complete.\nDo not treat a successful import button as proof that a storefront is ready;\nthe setup page must also show required capabilities, publication state, and\nOnline readiness.\n\n| Order | Axis workspace | What must happen | User-visible result |\n| ---: | --- | --- | --- |\n| 1 | Empty-database Axis setup | Initialize the managed Axis baseline, BackOffice workspace, CMS baseline, admin access, and required core data. | Axis leaves recovery mode and exposes authorized navigation. |\n| 2 | Module Registry | Register and activate functional capabilities needed by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when enabled. | Setup and Accelerators no longer shows a capability-blocked state for that application. |\n| 3 | Setup and Accelerators | Initialize Nexus or Agora application packs. A complete pack imports CMS content, routes, navigation, media metadata, media artifacts, commerce data, search/discovery data, and operational data owned by that application. | The application row shows initialized Staged data and the next publishing action. |\n| 4 | Publishing and approval | Request approval, review evidence, approve or reject, and publish the approved release to Online. | Nexus and Agora can render Online content; otherwise they show the maintenance page. |\n\nDocumentation packs are independent from accelerator setup. Framework, Axis,\nand Kickoff documentation can be imported, reviewed, and published in parallel\nwith application setup. Swagger/OpenAPI is generated from active runtime\ncontracts and should not be hidden behind documentation content-pack approval.\n\n## Documentation import\n\nProject documentation is generated into a Kickoff content pack and imported\nthrough WCMS. The pack code is `kickoffDocumentation`; the CMS Site is\n`kickoffDocumentationSite`; the default route is `/docs/nodics-kickoff`.\n\nIf the documentation page is unavailable in Axis, check that WCMS is running,\nthe content pack is generated, and the latest pack version has been imported.\nThe content-pack service rejects changed content with the same immutable\nversion, so update the catalogue version whenever generated hashes change.\n\n## Troubleshooting\n\nIf Axis shows a BackOffice registry recovery page, Platform is not reachable,\nthe Platform port is wrong, or Axis public configuration points at the wrong\nbase URL. If Axis logs in but documentation routes show CMS recovery, WCMS may\nnot be running, the documentation source may not be registered, or the content\npack may not be imported. If an optional module appears only after refresh,\ncheck the module registry API response after each lifecycle operation before\nassuming the frontend state is wrong.\n\nIf Nodics scripts cannot locate framework packages, check `NODICS_FRAMEWORK_ROOT`\nand confirm the configured directory contains `nodics.foundation`,\n`nodics.platform`, `nodics.wcms`, and any optional framework modules used by the\nlocal server.\n\n## Production note\n\nThe local topology teaches ownership, not final infrastructure. Production may\nrun modules in separate processes, hosts, containers, or release units. That\ndoes not change documentation ownership, module identity, API authority, or the\nrule that Axis discovers runtime capability from BackOffice instead of keeping\nits own endpoint registry.\n\n## Common mistakes\n\n- Starting only the frontend and assuming backend discovery should work.\n- Putting long inherited property blocks into a server config when the project\n  only needs a small override.\n- Assuming every framework module in the checkout is active for every server.\n  The configured runtime graph decides what loads.\n- Treating Cron as owned by Process just because the reference workspace can\n  run both in the same `processServer`.\n- Using local ports, database names, or project names as permanent framework\n  assumptions.\n- Forgetting that restart should preserve persisted registry and imported\n  content state.\n\n## Verification\n\nUse these focused checks when changing Waste composition:\n\n```bash\nnpm run test:waste-overlay\nnpm run test:waste-runtime\nnpm run acceptance:waste-management\n```\n\n`test:waste-overlay` proves the Circa-owned Waste policy data\ncontract. `test:waste-runtime` proves the server composition, initialization\nprofile, and active modules. `acceptance:waste-management` installs the\nschema-driven accelerator and application policy releases, validates persisted\nrecords, and runs the generic acceptance, submission, lifecycle, and impact\njourney.\n\nThe final pre-Builder gate must use a fresh Local database and qualify all nine\nruntimes together: Platform, WCMS Staged, WCMS Online, Process, Engagement,\nCommerce, Waste Management, Axis, Nexus, and Agora. Verify the topology from\nthe customer project, not from framework internals. Platform should expose login,\nBackOffice bootstrap, registry, and API discovery. WCMS should expose content,\ndocumentation, media, and import/export delivery. Process and Automation should\nreport Process runtime availability with workflow and cronjob technical modules\nfrom the composed server.\nAxis should connect through Platform and WCMS instead of local hardcoded module\nstate.\n\nFor a beginner-friendly proof, open Axis after the servers start and inspect\nDashboard, System and Integrations, Module Registry, Imports and Exports,\nContent and Experience, Media, Business Process & Automation, and\nDocumentation. The UI should explain the same topology that the server\nconfiguration declares.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Customer customization guide](customization-guide.md)\n\nFrontend startup and verification are independent. Run `npm run dev` and `npm test`\ninside each frontend application. Backend topology and API acceptance do not start\nfrontend servers or wait for their health.\n\nProcess runtime identity explicitly includes CMS for the governed publication\ndecision callback. Platform routes the operational Commerce reference activation\nrelease to Commerce, matching its COMMERCE destination; Staged remains the product\nauthoring destination. These are Local deployment bindings, not new module defaults.\n"
        },
        {
          "code": "kickoff.local-setup-to-live",
          "title": "Local setup to live runbook",
          "route": "/docs/nodics-kickoff/kickoff-local-setup-to-live",
          "section": "run-kickoff-locally",
          "sectionTitle": "Run Kickoff Locally",
          "sectionOrder": 20,
          "group": "run-kickoff-locally",
          "groupTitle": "Run Kickoff Locally",
          "groupOrder": 20,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 15,
          "parentId": "run-kickoff-locally",
          "hierarchyPath": [
            "Run Kickoff Locally",
            "Local setup to live runbook"
          ],
          "hierarchyDepth": 2,
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
          "searchText": "Local setup to live runbook Follow the screenshot-guided path from local startup to Axis login, guided setup, publication, and live Nexus and Agora verification. # Local Setup to Live Runbook\n\nStart here for the administrator and new-developer screen journey. Use the\n[Local acceptance checklist](local-acceptance-checklist.md) for prerequisites,\nnon-live checks, mutation warnings and sign-off. Backend developers can first\nread [Local runtime](local-runtime.md); operators use\n[Local publishing operations](local-publishing-operations.md) for recovery.\n\nThis runbook is the new-user golden path for making the Nodics reference stack\nlive on a developer machine. It starts from a local checkout, opens Axis, signs\nin, follows the guided setup workspaces, publishes governed data to Online, and\nverifies Nexus and Agora in the browser.\n\nThe normal-path screenshots show the current local reference UI. The\nfirst-launch screenshots document the bundled recovery path from the current\nAxis component contract because this captured environment already had Axis\nbaseline data. Recapture those first-launch images from a clean schema during\nthe next fresh acceptance run.\n\nFor beginners, the safe mental model is: start the stack, sign in to Axis,\nfollow the highlighted backend-owned setup cards, approve publication, then\nopen the public applications. Business users should read the status and next\naction on each screen. Developers should use the file paths and commands when a\nstatus points to a configuration, release, or module problem. Operators should\nkeep the command output, screenshots, and browser checks as setup evidence.\n\n## What live means\n\nIn Nodics, live does not mean that a frontend server is running. A local setup\nis live when these conditions are true:\n\n| Area | Live condition |\n| --- | --- |\n| Backend topology | Platform, WCMS Staged, WCMS Online, Process, Engagement, Commerce, Axis, Nexus, and Agora are reachable on their local ports. |\n| Axis control plane | The admin can sign in and the dashboard shows runtime, module, release, publishing, and application readiness. |\n| Module foundation | Required modules are registered and active through backend-owned registry contracts. |\n| Release data | Init, core, and sample releases are current or intentionally skipped by policy. |\n| Application packs | Nexus and Agora accelerator packs have prepared Staged content and any required Commerce data. |\n| Publication | Publishable content has moved from Staged to Online through approval and audit evidence. |\n| Public verification | Nexus and Agora render Online content, navigation, media, and business data from backend contracts. |\n\n## Repository layout\n\nUse the reference layout unless your project already documents another one:\n\n```text\nnodicsRoot/\n  nodics.ai/\n  nodics.kickoff/\n  nodics.exp/\n    nodics.axis/\n    nodics.nexus/\n    nodics.agora.apparel/\n```\n\n`nodics.ai` is the framework checkout. `nodics.kickoff` is the reference\ncustomer project and owns the local runtime composition. `nodics.exp` groups\nfrontend applications. Axis is the employee BackOffice, Nexus is the corporate\nsite, and Agora is the commerce storefront.\n\n## Prepare the project\n\nRun the first setup from `nodics.kickoff`:\n\n```bash\nnpm ci\nnpm run nodics:project:validate\n```\n\nReview Kickoff package dependencies and layered configuration, then confirm\nthey resolve the intended framework checkout and local runtime values.\n\nRun frontend setup from each frontend repository that will be opened:\n\n```bash\ncd ../nodics.exp/nodics.axis\nnpm ci\n```\n\nRepeat dependency installation for Nexus and Agora when their local\nrepositories have not been installed yet.\n\n## Start the local stack\n\nFrom `nodics.kickoff`, start the selected local backends:\n\n```bash\nnpm run topology:start\n```\n\nThis starts backend runtimes in dependency-aware order. It does not start\nfrontends. Run `npm run dev` separately inside Axis and each selected frontend\nrepository; use those repositories' own verification instructions. Backend\ntopology status and stop apply only to the owned backend processes.\n\nUse this command from another terminal to inspect status:\n\n```bash\nnpm run topology:status\n```\n\nThe expected local URLs are:\n\n| Surface | URL | Purpose |\n| --- | --- | --- |\n| Axis | `http://localhost:3100` | Employee setup and operations workspace. |\n| Nexus | `http://localhost:3200` | Public corporate site using Online content. |\n| Agora Apparel | `http://localhost:3300` | Public storefront using Online content and Commerce data. |\n| Agora Electronics | `http://localhost:3400` | Electronics storefront. |\n| Agora Telco | `http://localhost:3500` | Telco storefront. |\n| Circa eWaste | `http://localhost:3600` | Guided eWaste submission and customer account. |\n| Platform | `http://localhost:4300` | Profile, BackOffice, registry, and bootstrap authority. |\n| WCMS Online | `http://localhost:4314` | Online public content runtime. |\n| Process | `http://localhost:4330` | Workflow, approval, and automation runtime. |\n| WCMS Staged | `http://localhost:4312` | Staged content authoring and import runtime. |\n| Engagement | `http://localhost:4340` | Contact, review, feedback, and communication runtime. |\n| Commerce | `http://localhost:4350` | Operational Commerce runtime. |\n| Commerce Staged | `http://localhost:4352` | Staged Commerce catalog and storefront preparation runtime. |\n\nStop only the topology owned by this checkout:\n\n```bash\nnpm run topology:stop\n```\n\n## First launch before Axis data exists\n\nOn a fresh schema, Axis may not show the managed CMS login immediately. This is\nexpected. Axis first falls back to a small bundled recovery login whose only\njob is to authenticate the bootstrap operator and move the managed Axis\nbaseline through the governed release flow.\n\n![Axis first-launch recovery login](../assets/images/local-setup/axis-first-launch-recovery-login.jpg \"Axis first-launch recovery login\")\n\nUse the local reference admin account:\n\n```text\nUsername: admin\nPassword: configured bootstrap administrator password\n```\n\nAfter login, if the Axis baseline is not Online yet, Axis opens the\ninitialization workspace instead of the normal dashboard.\n\n![Axis first-launch initialization](../assets/images/local-setup/axis-first-launch-initialize.jpg \"Axis first-launch initialization\")\n\nFollow this first-run path:\n\n1. Confirm the release chip points to the Axis baseline release.\n2. Click **Initialize and submit** to import the baseline into Staged and submit\n   the governed publication request.\n3. Click **Refresh status** until the workspace shows the approval-ready state.\n4. Open the publication details or Process approval task and review the release\n   checksum, entity counts, validation status, target site, catalog, workflow\n   reference, impact, and recovery guidance.\n5. Approve the publication so the managed Axis CMS baseline becomes Online.\n6. Refresh or reopen Axis and verify that the bundled recovery workspace has\n   retired.\n\nDo not skip this by writing Axis data directly to Online. The first launch\nstill follows the same Staged, Process approval, Online publication, and audit\nprinciples as other governed content.\n\n## Open Axis\n\nOpen Axis:\n\n```text\nhttp://localhost:3100\n```\n\nAfter the first-launch baseline is Online, or when the schema already has Axis\ndata, the first screen should be the managed employee login page.\n\n![Axis login](../assets/images/local-setup/axis-entry.jpg \"Axis login\")\n\nUse the local reference admin account:\n\n```text\nUsername: admin\nPassword: configured bootstrap administrator password\n```\n\nAfter login, Axis should land on the dashboard.\n\n![Axis dashboard](../assets/images/local-setup/axis-dashboard.jpg \"Axis dashboard\")\n\nUse the dashboard as the operator map:\n\n| Dashboard area | What to check |\n| --- | --- |\n| Next actions | Shows whether the next step is registry, data import, publication, or application verification. |\n| Application overview | Shows active modules, data readiness, Online-ready sources, routes, workbenches, and tenant. |\n| Release and publication cards | Show whether data is current, pending, blocked, or waiting for approval. |\n| Application cards | Show whether Nexus and Agora are Online-ready or still blocked. |\n\n## Register and activate modules\n\nOpen **System and Integrations -> Module Registry**, or navigate directly:\n\n```text\nhttp://localhost:3100/registry\n```\n\n![Module Registry](../assets/images/local-setup/module-registry.jpg \"Module Registry\")\n\nThe registry is not only a visual list. It is the backend-owned activation\nsurface for functional capabilities. A capability should be registered and\nactive before importing an application pack that depends on it.\n\nCheck these states:\n\n| Capability group | Expected local result |\n| --- | --- |\n| Core, Platform, WCMS | Registered and active. These are the foundation. |\n| Process and Automation | Active when workflow, approval, and cronjob behavior is needed. |\n| Commerce and Discovery | Active before Agora catalog and product search setup. |\n| Engagement | Active before contact, review, feedback, or communication journeys are verified. |\n\nIf an accelerator says setup is blocked, return to Module Registry and activate\nthe missing capability instead of forcing import data manually.\n\n## Install release data\n\nOpen **System and Integrations -> Import and Export Workspace**, or navigate\ndirectly:\n\n```text\nhttp://localhost:3100/operations/imports-exports\n```\n\n![Imports and exports](../assets/images/local-setup/imports-and-exports.jpg \"Imports and exports\")\n\nStart with **Guided setup**. Guided profiles are declared by backend runtimes\nunder `data.dataReleases.initializationProfiles`; Axis discovers and renders\nthem. Axis must not invent data authority or silently combine release lists.\n\nUse this order:\n\n| Guided profile | Why it matters |\n| --- | --- |\n| Local Platform foundation | Prepares login, profile, catalog, authorization, localization, and BackOffice data. |\n| Local WCMS foundation | Prepares Staged content runtime, CMS baseline, and publication preparation. |\n| Local Documentation foundation | Prepares WCMS prerequisites before documentation content packs are reviewed and published. |\n| Local Commerce foundation | Prepares operational Commerce services. |\n| Local Commerce Staged catalog foundation | Prepares Agora catalog, product, price, inventory, and search preview data. |\n| Local Process and Workflow foundation | Prepares approval and workflow definitions. |\n| Local Engagement foundation | Prepares communication and customer interaction data. |\n\nFor each profile:\n\n1. Read the label and description.\n2. Review the step list and release counts.\n3. Click **Validate plan**.\n4. If validation passes and releases are not current, click **Validate and initialize**.\n5. Refresh the workspace and confirm the profile becomes `CURRENT` or shows a\n   clear operator-friendly blocker.\n\nUse **Initialization data**, **Core data**, and **Sample data** only when an\nadministrator needs advanced release-level control.\n\n## Initialize applications\n\nOpen **Publishing -> Setup and Accelerators**, or navigate directly:\n\n```text\nhttp://localhost:3100/setup-accelerators\n```\n\n![Setup and Accelerators](../assets/images/local-setup/setup-accelerators.jpg \"Setup and Accelerators\")\n\nThis page prepares project accelerators such as Nexus and Agora. It should\nshow friendly status instead of raw technical exceptions.\n\n| Status | Meaning |\n| --- | --- |\n| Setup blocked | A required capability, content catalog, communication, or data foundation is missing. Fix the blocker first. |\n| Ready to initialize | Required capabilities are active and the pack can be prepared. |\n| Staged current | Staged data is installed at the expected version and checksum. |\n| Pending approval | Staged data is ready but not yet Online. |\n| Online ready | Online publication is available and public apps can render it. |\n\nInitialize Nexus and Agora only after their blockers are resolved. A complete\napplication pack may prepare CMS pages, routes, navigation, media records,\nphysical media artifacts, Commerce catalog data, search/discovery data, and\noperational data owned by that application.\n\n## Approve and publish\n\nOpen the approval queue:\n\n```text\nhttp://localhost:3100/process/tasks\n```\n\n![Process approval queue](../assets/images/local-setup/process-approval-queue.jpg \"Process approval queue\")\n\nReview the publication evidence before approving. Approval should explain what\nwill be visible Online, which source release is involved, and what rollback\nmeans if activation fails.\n\nOpen the Publishing dashboard:\n\n```text\nhttp://localhost:3100/publishing\n```\n\n![Publishing dashboard](../assets/images/local-setup/publishing.jpg \"Publishing dashboard\")\n\nPublishing is the only path from Staged content to Online content. Do not\nwrite directly into Online schema or Online media storage. If publication is\nblocked, fix the Staged data, approval task, workflow configuration, media\ndependency, or Online runtime readiness that the page reports.\n\n## Publish documentation\n\nOpen Documentation:\n\n```text\nhttp://localhost:3100/docs\n```\n\n![Documentation dashboard](../assets/images/local-setup/documentation-dashboard.jpg \"Documentation dashboard\")\n\nFramework, Axis, and Kickoff documentation are governed content packs. Import\nand approve them through Axis and Process. They should flow from Staged to\nOnline like other publishable content.\n\nOpen Swagger/OpenAPI:\n\n```text\nhttp://localhost:3100/docs/swaggers\n```\n\n![Swagger reference](../assets/images/local-setup/swagger-reference.jpg \"Swagger reference\")\n\nSwagger is different from documentation content packs. It is generated from\nlive runtime API contracts and should remain accessible when API sources are\navailable, even if documentation publication is still waiting for approval.\n\n## Verify Nexus\n\nOpen Nexus:\n\n```text\nhttp://localhost:3200\n```\n\n![Nexus Online](../assets/images/local-setup/nexus-online.jpg \"Nexus Online\")\n\nVerify:\n\n| Area | Evidence |\n| --- | --- |\n| Header and navigation | Links come from Online content and route contracts. |\n| Hero and content sections | Text, images, and components render from published content. |\n| Documentation links | Documentation routes open only when their packs are Online or intentionally available. |\n| No maintenance fallback | The app should not show setup or unpublished-content fallback after Online publication succeeds. |\n\n## Verify Agora Apparel\n\nOpen Agora:\n\n```text\nhttp://localhost:3300\nhttp://localhost:3400\nhttp://localhost:3500\nhttp://localhost:3600\n```\n\n![Agora Apparel Online](../assets/images/local-setup/agora-apparel-online.jpg \"Agora Apparel Online\")\n\nVerify:\n\n| Area | Evidence |\n| --- | --- |\n| Storefront home | Banner, category, and merchandising content render from Online/Staged-approved sources. |\n| Product catalog | Product, category, price, inventory, and image data are present. |\n| Search and discovery | Product search and filters return meaningful results. |\n| Media | Product and CMS images load through the media contract, not hardcoded frontend paths. |\n\n## Troubleshooting checkpoints\n\n| Symptom | Likely cause | Where to fix |\n| --- | --- | --- |\n| Axis login page does not open | Axis frontend is not running or `3100` is occupied. | Check the Axis terminal and start it from its own repository; backend topology does not manage Axis. |\n| Bundled recovery login appears every time | The managed Axis baseline is not Online, publication was not approved, or the CMS route did not load. | Use the first-launch initialization workspace, then check Process approval and WCMS Online readiness. |\n| Initialize Axis stays approval pending | The baseline import finished, but the governed Process task has not been approved or published. | Open `/process/tasks`, review the task, approve it, then refresh Axis. |\n| Login fails for local admin | Platform/Profile is unavailable or seed data is missing. | Check Platform server logs and guided Platform foundation data. |\n| Dashboard shows few modules | Module Registry has not activated optional capabilities. | Open `/registry` and activate required capabilities. |\n| Guided setup shows only one profile after config changes | Servers are still running old runtime configuration. | Restart the local topology and reload Axis. |\n| Accelerator setup is blocked | A required capability, catalog, communication, or release dependency is missing. | Read the friendly blocker, then fix registry or release data. |\n| Approval queue is empty | The pack is not initialized, workflow data is missing, or the task is already processed. | Check Setup and Accelerators, Process foundation, and Publishing dashboard. |\n| Nexus or Agora shows fallback content | Staged data was not approved/published to Online. | Publish through Process and verify WCMS Online readiness. |\n| Images are broken | Physical media assets did not import or publish with media records. | Check media import evidence, asset manifest, and Online media publication. |\n\n## Screenshot maintenance rule\n\nScreenshots are part of the onboarding contract. When the first-launch\nrecovery login, Initialize Axis workspace, managed login page, dashboard,\nregistry, imports, setup, publishing, documentation, Nexus, or Agora journey\nchanges materially, update the matching image under:\n\n```text\ndocs/assets/images/local-setup/\n```\n\nBefore regenerating, review the catalogue version and content path. Stable\nrelease changes require a forward version and unused `core-vNNN` path. Do not\noverwrite old release bytes; reconcile uncertain installed receipt/publication\nhistory first. Then generate and validate the selected successor content pack:\n\n```bash\nnpm run docs:generate\nnpm run docs:check\n```\n\nKeep screenshots focused on decision points. Do not add decorative images that\nhide the actual operator action, backend state, or public verification result.\n\n## Common mistakes\n\nAvoid these mistakes during a first local setup:\n\n- Opening Nexus or Agora first and assuming a running frontend means Online\n  data has been published.\n- Importing sample data before the required module capability is registered and\n  active.\n- Treating Axis as the data authority. Axis renders backend-owned profiles,\n  releases, approvals, and actions.\n- Restarting only the frontend after changing backend runtime profile\n  configuration.\n- Approving publication before reviewing the Staged source, version, media, and\n  target Online role.\n- Fixing broken images in the frontend instead of checking media import,\n  physical asset staging, media records, and Online media publication.\n- Hand-editing generated documentation records instead of changing the authored\n  markdown and regenerating the content pack.\n\n## Verification\n\nRun these commands after changing this guide, screenshots, catalogue metadata,\nor setup behavior, after the release-identity review above:\n\n```bash\nnpm run docs:generate\nnpm run docs:check\nnpm run nodics:project:validate\n```\n\nThe local qualification contracts do not require live initialization:\n\n```bash\nnpm run test:qualification\n```\n\nFor authorized live initialization, follow the checklist's explicit\n`--execute --approve-publications` path. Do not run mutating acceptance simply\nbecause documentation changed.\n\nBrowser verification should include the first-launch recovery login and\nInitialize Axis workspace on a fresh schema, then managed Axis login,\ndashboard, Module Registry, Imports and Exports, Setup and Accelerators,\nProcess approval queue, Publishing, Documentation, Swagger, Nexus, and Agora.\nCapture new screenshots when any of those screens changes materially.\n\n## Final proof\n\nA new user can call the local setup complete only after this evidence exists:\n\n1. `npm run topology:status` shows the owned local runtimes are reachable.\n2. On a fresh schema, bundled Axis recovery login opens and the Initialize Axis\n   workspace can submit the baseline.\n3. After baseline approval, managed Axis login works with the local admin.\n4. Dashboard, Module Registry, Imports and Exports, Setup and Accelerators,\n   Process tasks, Publishing, Documentation, and Swagger pages open.\n5. Required modules are active.\n6. Guided setup profiles are current or have a clear blocker.\n7. Application packs are Staged current or Online ready.\n8. Publication approvals have been processed.\n9. Nexus and Agora render public Online experiences in the browser.\n10. Media images load on public pages.\n11. Any remaining blocker has a friendly operator message and a developer owner.\n\nFrontend startup and verification are independent. Run `npm run dev` and `npm test`\ninside each frontend application. Backend topology and API acceptance do not start\nfrontend servers or wait for their health.\n"
        },
        {
          "code": "kickoff.local-acceptance",
          "title": "Local acceptance checklist",
          "route": "/docs/nodics-kickoff/kickoff-local-acceptance",
          "section": "run-kickoff-locally",
          "sectionTitle": "Run Kickoff Locally",
          "sectionOrder": 20,
          "group": "run-kickoff-locally",
          "groupTitle": "Run Kickoff Locally",
          "groupOrder": 20,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 20,
          "parentId": "run-kickoff-locally",
          "hierarchyPath": [
            "Run Kickoff Locally",
            "Local acceptance checklist"
          ],
          "hierarchyDepth": 2,
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
          "summary": "Verify Kickoff configuration, authorized Local initialization, publication and separate frontend journeys; distinguish static checks, live evidence and release gates.",
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
            "kickoff.functional-journeys",
            "kickoff.local-setup-to-live",
            "kickoff.configuration-inheritance",
            "kickoff.deployment-qualification"
          ],
          "searchKeywords": [
            "acceptance",
            "fresh local",
            "verification",
            "checklist",
            "local validation",
            "developer onboarding",
            "QA",
            "setup verification"
          ],
          "topicKeywords": [
            "import",
            "module lifecycle",
            "documentation",
            "media",
            "cron"
          ],
          "searchText": "Local acceptance checklist Verify Kickoff configuration, authorized Local initialization, publication and separate frontend journeys; distinguish static checks, live evidence and release gates. # Local Acceptance Checklist\n\nUse this page to verify the Kickoff reference customer project on a developer\nmachine. It connects setup to evidence: configuration checks first, authorized\nbackend initialization next, and frontend verification separately. It is not an\nexecutable test, a second definition of framework rules, or production approval.\n\n## Choose your path\n\nFor beginners, start with the setup runbook and return here for verification.\nDo not run every command at once: complete the non-live checks first, then ask\nthe environment owner before selecting a mutating journey.\n\n| Audience | Start here | Continue when |\n| --- | --- | --- |\n| New developer or administrator | [Local setup to live runbook](local-setup-to-live-runbook.md) | The selected backends and independently started Axis frontend are reachable. |\n| Backend developer | [Local runtime](local-runtime.md) and [configuration inheritance](configuration-inheritance.md) | Project validation and configuration-only preparation pass. |\n| QA engineer | This checklist, then [functional journeys](functional-journeys.md) | Prerequisites are available and each result has scoped evidence. |\n| Operator | [Local publishing operations](local-publishing-operations.md) | Import, approval, Online delivery and recovery evidence are understood. |\n| Release owner or architect | [Deployment qualification](deployment-qualification.md) | Local results and outstanding external gates are recorded separately. |\n\nRead these source pages directly before any documentation pack is installed.\nAfter governed publication, open Axis Documentation, select Nodics Kickoff,\nthen **Run Kickoff Locally > Local acceptance checklist**. Its catalogue group\nis Acceptance and Verification. Search for the page title, local validation,\ndeveloper onboarding, QA, or setup verification. Related pages provide the\nsame reading path in the published documentation; source links support repository\nreaders without a running server.\n\n## Prerequisites and authority\n\n```mermaid\nflowchart TD\n  Source[\"Read setup and verify configuration\"] --> Ready[\"Start selected backends\"]\n  Ready --> Review[\"Review scope and authorize live changes\"]\n  Review --> Init[\"Initialize through owner APIs\"]\n  Init --> Publish[\"Review and approve governed publication\"]\n  Publish --> API[\"Collect backend delivery evidence\"]\n  API --> Browser[\"Verify independently started frontends\"]\n  Browser --> Report[\"Record results and unresolved gates\"]\n  Report --> Release[\"Review deployment qualification plan\"]\n```\n\nInstall the declared project dependencies with `npm ci` from this repository.\nResolve the framework through the package dependency or supported explicit\nframework-root configuration. Project identity comes from `package.json.name`;\nenvironment and server choices come from their layered properties and package\nmetadata. Do not create a separate project descriptor or copy framework checks.\n\nFor live acceptance, provision the configured local providers and authorized\nbootstrap identity. Inspect the selected environment before executing anything\nthat imports data, changes module lifecycle, approves a publication or resets\nstate. Do not put credentials in this page or attach tokens to evidence.\n\nBackOffice owns bootstrap and capability discovery; nImport owns governed\nimports; CMS, Process and nPublish own publication; functional modules own their\nbusiness APIs. Kickoff selects customer applications, fixtures and deployment\ncoordinates. The commands below delegate to those framework owners.\n\nBackend validation needs neither a frontend checkout nor a frontend server.\nBrowser validation additionally needs Axis and each selected application,\ninstalled and started in its own repository. Docker execution is a separate\nqualification activity, not part of this Local checklist.\n\n## Verification without live mutation\n\nRun these from `nodics.kickoff` before starting a live acceptance journey:\n\n```bash\nnpm run nodics:project:validate\nnpm run test:documentation\nnpm run test:qualification\nnpm run test:agora-commerce\nnpm run prepare:runtime\n```\n\nThese check project adoption, generated documentation consistency, customer\nfixtures and configuration graphs. Runtime preparation does not launch servers\nor prove provider connectivity. Static container contracts in the qualification\ntests do not execute or qualify Docker. A passing test command is evidence only\nfor the assertions it actually runs, not proof that every application works.\n\nIf documentation source changed, review the catalogue version and content path\nbefore running `npm run docs:generate`, then rerun `npm run test:documentation`.\nStable release changes require a forward version and unused `core-vNNN` path;\nnever overwrite released bytes or repair generated CMS records by hand. Resolve\nuncertain installed receipt/publication history before selecting a successor.\nSource validation alone does not prove that updated pages are published Online.\n\n## Start the selected local backends\n\nInspect and start the owned topology from this repository:\n\n```bash\nnpm run topology:preflight\nnpm run topology:start\n```\n\nKeep the supervisor terminal open. From another terminal use\n`npm run topology:status`; stop the owned backends with\n`npm run topology:stop`. Preflight and readiness output identify the effective\nruntime coordinates. Consult Local runtime for the reference ports rather than\nassuming a copied address matches a customized environment.\n\nTopology commands manage backends only. Start Axis and the required customer\nfrontends separately with `npm run dev` in each frontend repository. Backend\nstop does not stop those frontend processes. Never kill an unrelated process\nmerely because it occupies a configured port.\n\n## Authorized initialization and publication\n\nPrefer retained-data acceptance when no reset is needed. The following command\nis **mutating**: it can initialize selected data and approve governed publications.\nUse it only with authorization for the selected isolated Local environment:\n\n```bash\nnpm run acceptance:local -- --execute --approve-publications\n```\n\nThe backends must already be running. To let the runner own their startup,\nsupply `--start-runtimes`; it cleans up its own children unless\n`--leave-started` is also supplied. These flags do not start frontends.\n\nFor the focused guided initialization journey, review its prerequisites and use:\n\n```bash\nnpm run acceptance:guided-initialization -- --execute --approve-publications\n```\n\nBoth commands use normal authorized owner APIs. Neither gives permission to\nbypass an unavailable approval task, manufacture publication evidence, grant\nmissing privileges, write directly to Online, or access a database directly.\n\nA fresh run is optional and destructive to selected Local data. Review reset\nscope and recovery evidence, stop the existing owned backend topology, and\nconfirm no other process is using its runtimes before invoking:\n\n```bash\nnpm run acceptance:local:fresh -- --execute --approve-publications\n```\n\nThe alias selects owned startup and the governed Platform Local reset. Never\nrun it against shared development or production data. A failed authorization,\nreadiness or reset receipt is a blocker, not permission for a database-shell\nworkaround. Ordinary documentation edits never require a reset.\n\n## Manual setup and browser verification\n\nFollow the screenshot-guided setup runbook for the actual UI actions. This\ntable defines the customer evidence to collect, not additional framework rules.\n\n| Check | Required evidence |\n| --- | --- |\n| Backend readiness | Selected runtimes report ready through their own APIs. |\n| Axis first launch | Authorized login works; a missing managed baseline is initialized and approved through the normal recovery workspace. |\n| Capability availability | Required application capabilities are registered and active; blocked setup explains the missing owner prerequisite. |\n| Data readiness | Selected module-owned releases report their expected installed version and checksum. |\n| Publication | Staged validation, Process decision and Online receipt refer to the same release. Pending approval is not Online success. |\n| Documentation | Kickoff pages are discoverable after pack publication; related pages open. Swagger remains an independent runtime API reference. |\n| Application delivery | Selected Nexus, Agora or Circa journeys use their owning backend contracts; published routes, media and data are visible. |\n| Frontend behavior | Each frontend passes its own checks and browser review; backend API success alone does not prove rendering or accessibility. |\n\nDo not mark an approval-pending workspace as complete just because import passed.\nInspect the current task status, assignee, permissions and publication details.\nFollow Local publishing operations for supported recovery; do not reopen or\nreplace workflow state through direct persistence changes.\n\n## Record results and blockers\n\nRecord the date, repository commit and dirty-state identity, selected environment,\ncommand with secrets removed, exit status, relevant release/checksum receipts,\nand reviewer. Keep generated runtime reports under their existing ignored output\nlocations and retain sanitized evidence in the release or issue system.\n\nDistinguish PASSED, FAILED, BLOCKED and NOT EXECUTED in the human report. A missing\nprovider, permission, owner API, domain publication adapter or funded test wallet\nremains a named blocker. A test that reports partial acceptance is not full\nqualification, even if some requests succeeded. Resolve the owning prerequisite\nand rerun the affected gate before claiming completion.\n\nHistorical extraction results are preserved separately in\n`docs/evidence/2026-09-28-acceptance-cleanup-history.md`. They are not a published\nsetup page, current readiness evidence, or instructions for a new deployment.\n\n## Common mistakes\n\n| Symptom | Check first | Next action |\n| --- | --- | --- |\n| Configuration check fails | Dependency resolution and selected environment | Fix the owning project contribution before live execution. |\n| Backend port is busy | Topology PID ownership and status | Stop only a process you own; do not bypass admission checks. |\n| Axis does not open | Axis frontend terminal | Start Axis independently and verify its configured backend. |\n| Initialization is blocked | Required capability, authorization and release state | Resolve the owning prerequisite through governed APIs. |\n| Publication stays pending | Process task state, assignee and decision permission | Review publication details and follow supported workflow recovery. |\n| Checklist is absent in Axis | Kickoff documentation import and Online receipt | Read the repository page meanwhile; publish the selected pack normally. |\n\n- Treating generated documentation, a running frontend, or a passing unit test\n  as proof of a completed live application journey.\n- Assuming backend topology launches Axis or the storefronts.\n- Running mutating acceptance or fresh reset as a routine documentation check.\n- Approving content without reviewing the target, version, checksum and workflow.\n- Editing immutable/generated data or bypassing owner APIs to clear a blocker.\n- Copying historical results into a new release report without rerunning checks.\n- Treating this project guide as the source of reusable framework rules.\n\n## Sign-off and next step\n\nThe developer and QA reviewer should be able to reproduce the selected journey,\nexplain every blocked or omitted capability, and associate results with the same\nsource and environment. The operator verifies the published release and recovery\nevidence. Business reviewers verify the intended application outcome, not merely\na list of passing technical commands.\n\nProceed to Deployment qualification for a non-mutating plan:\n\n```bash\nnpm run qualification:deployment\n```\n\nReview that plan before opting into its live gates. Production security,\nperformance, accessibility, real providers, backup/recovery and accountable-owner\napproval remain separate. Local completion never authorizes production by itself.\n"
        },
        {
          "code": "kickoff.local-publishing-operations",
          "title": "Local publishing operations",
          "route": "/docs/nodics-kickoff/kickoff-local-publishing-operations",
          "section": "publish-and-qualify",
          "sectionTitle": "Publish and Qualify",
          "sectionOrder": 30,
          "group": "publish-and-qualify",
          "groupTitle": "Publish and Qualify",
          "groupOrder": 30,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 10,
          "parentId": "publish-and-qualify",
          "hierarchyPath": [
            "Publish and Qualify",
            "Local publishing operations"
          ],
          "hierarchyDepth": 2,
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
          "searchText": "Local publishing operations Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access. # Local publishing operations\n\nFor operators: first complete the prerequisites in\n[Local acceptance](local-acceptance-checklist.md). Administrators can follow\n[Local setup to live](local-setup-to-live-runbook.md) for the UI sequence.\nAfter publication evidence is collected, continue to\n[Deployment qualification](deployment-qualification.md).\n\n## Scope and authority\n\nThis runbook operates the `kickoffLocal` Staged-to-Online publishing lifecycle.\nIt is Local evidence only: it does not approve Development, QA, PreProd, Prod,\nphysical datastore switching, or a production storefront launch. WCMS Staged\nowns authoring and release freeze, `nPublish` owns lifecycle transitions,\nProcess owns approval workflow state, WCMS Online owns deployed visibility,\nand Axis is the employee control plane. Nexus and Agora consume Online only.\n\nOperators and automation must use Nodics APIs, generated services, and the\nproject commands below. They must never repair, seed, version, publish, restore,\nor verify content through direct database CRUD. Database credentials and\nconnectivity are evaluated by runtime readiness; the topology preflight does\nnot open its own database connection.\n\n| Publishing area | Business question answered | Correct Kickoff action | Authority that decides |\n| --- | --- | --- | --- |\n| Import and upgrade | Which release is installed and can it be trusted? | Run retained or fresh acceptance through project commands | nImport validates immutable release identity and checksums |\n| Capability gating | Is the target application allowed to become usable? | Register and activate required functional capabilities before initializing the application pack | BackOffice Module Registry and the owning module decide capability readiness |\n| Staged review | What content or data is ready for approval? | Inspect Staged state through Axis and governed APIs | WCMS Staged and owning modules hold authoring state |\n| Approval and activation | What is allowed to become visible Online? | Use workflow-backed publication actions | nPublish and Process coordinate approval and Online activation |\n| Recovery | How do we retry or roll back a failed local release? | Use documented retry, rollback, backup, and restore commands | Runtime services preserve lifecycle, audit, and integrity evidence |\n\n## Preflight, start, inspect, and stop\n\nRun from `nodics.kickoff`:\n\n```text\nnpm run topology:preflight\nnpm run topology:start\nnpm run topology:status\nnpm run topology:stop\n```\n\nPreflight verifies repository availability and required ports. Startup refuses\nbusy ports, starts dependencies in order, waits for HTTP readiness, records only\nits own process identities, and fails closed if a managed child exits. Stop\nsignals only the validated supervisor and releases children in reverse order.\n\n## Supported initialization and release upgrade\n\nUse `npm run acceptance:local:fresh -- --execute --approve-publications` only\nwhen an authorized bounded Local reset is intended, after reviewing the\nchecklist's isolation, recovery and owned-startup prerequisites.\nThe command resets through the governed Platform API; it does not issue database\ncommands. Use `npm run acceptance:local -- --execute --approve-publications`\nfor authorized retained-schema initialization,\ncontent-pack upgrade, repeat installation, and publication verification.\n\nImmutable content-pack files use portable source revision zero. During a\ngoverned content-pack upgrade, nImport reads the latest Staged record through its\ngenerated schema service and supplies the next optimistic revision. A concurrent\nwriter can still win between read and save; persistence then rejects the import,\nand the operator reviews import-run diagnostics before retrying. Ordinary imports\nand API writes do not receive this release-only reconciliation.\n\nAn upgrade is successful only when the content-pack status is `CURRENT`, the\nexpected release version and checksum are visible, Staged import diagnostics have\nno unresolved failures, publication reaches `ONLINE`, and Online delivery returns\nthe expected projection. Never resolve an upgrade by changing stored revisions.\n\n## Failure, retry, rollback, and recovery\n\n- A validation or approval rejection leaves Online unchanged. Correct Staged\n  content, create or select the intended version, and submit again.\n- Workflow timeouts and response loss are retried only through the bounded,\n  idempotent Process and publication contracts. Correlation ID and operation key\n  must remain stable for the retry.\n- A Staged, Process, or Online interruption is recovered by restarting the\n  supervised topology and running retained acceptance. Reconciliation resumes\n  durable lifecycle and outbox state; it must not manufacture database state.\n- A failed deployment is reconciled before retry. If activation cannot be\n  completed safely, invoke the governed publication rollback operation and\n  verify the prior Online pointer and delivery response.\n- Unexpected supervised child exit must stop the remaining topology. Inspect the\n  generated runtime logs, correct the cause, run preflight, and start again.\n\n## Import, export, backup, and restore boundaries\n\nLocal acceptance proves secured Staged export, checksum and provenance, media-\nbacked validation/import, tenant rejection, and Online/Process export denial.\nThis is a logical data portability and recovery exercise, not a physical database\nbackup certification. Physical backup, restore, point-in-time recovery, RPO, and\nRTO require database-provider procedures and non-Local qualification. Restored\nauthoritative data must be followed by Nodics projection rebuild and API-based\ncount/checksum reconciliation.\n\n## Observability and audit\n\nUse publication operations and diagnostics APIs to inspect lifecycle state,\nfailure and stuck totals, safe failure codes, actor identity, correlation ID,\nrevision, target version, deployment receipts, audit reconciliation, and outbox\ndelivery. Logs must omit tokens, credentials, provider paths, raw payloads, and\nprotected business or personal data. Exported evidence is sanitized before it is\nshared.\n\nRequired Local signals are publication count, failure count, stuck count,\nduration per bounded contract, retry outcome, rollback outcome, readiness, and\nOnline delivery verification. Production queue depth, p95/p99, throughput, soak,\nprojection lag, alerts, and capacity targets remain external evidence.\n\n## Concurrency, retention, and cleanup\n\nLifecycle revisions prevent conflicting transitions. Stable publication codes,\noperation keys, receipts, Online pointers, and outbox identities make identical\nreplays converge. Concurrent editors must publish explicit frozen versions;\npublishing never means “latest at execution time.”\n\nPrevious content versions remain governed history. Online manifests and rollback\nreferences protect required versions. Media cleanup uses retention time, active\nand rollback references, batch limits, and legal hold; it removes only expired,\nunreferenced publication media through the media service. Generated supervisor\nstate and import staging follow their owning cleanup lifecycle.\n\n## Qualification and evidence\n\nRun:\n\n```text\nnpm run qualification:publishing-capacity\nnpm run qualification:publishing-soak\nnpm run qualification:security-boundary\nnpm run qualification:deployment:local -- --include-fresh\n```\n\nThe bounded capacity suite covers freeze, deployment, activation, delivery,\nresponse-loss retry, rollback, transaction abort, media retention, concurrent\nactivation/receipt convergence, workflow handoff, publication operations, and\naudit reconciliation. The deployment report records command outcomes, durations,\nrepository commits, explicit external gaps, and an integrity digest. It never\nself-approves production.\n\nThe Local sustained-reliability gate repeats six publication, workflow,\noutbox, reconciliation, rollback, and media-retention contracts for 25 cycles\n(150 executions) under explicit elapsed-time and process-memory-growth budgets.\nThe automated security boundary executes authentication, authorization, cache\nmutation, import/export, remote transport, BackOffice, Engagement, publication\nauthority, and atomic-audit contracts. These close Local regression evidence;\nthey do not replace production-scale soak or an independent penetration test.\n\nFor the isolated `kickoffDockerLocal` production simulation, run the Docker\nLocal build, start, acceptance, qualification, resilience, interruption, and\nsoak commands defined in `package.json`. Keep this environment separate from\nnative `kickoffLocal`; it owns its own ports, secrets, databases, Redis\ntopology, networks, and Staged/Online media volumes.\n\nThe qualified 2026-08-13 closure completed API-only retained-data acceptance,\nseven target-release reconciliations, Redis Sentinel promotion with\nauthentication and publication continuity, a 1.744-second backup/RPO rehearsal,\na 55.420-second restore/RTO against the 300-second Local target, and a 30-minute\nsoak of 20,088 requests with zero errors, six publication runs, 12 ms p95, 15 ms\np99, and 56 resource samples. This is reproducible Local evidence, not a\nproduction approval. Independent penetration testing and human\nassistive-technology review remain external.\n\nTroubleshoot using stable error codes. `ERR_IMP_00003` indicates immutable release\nintegrity/version policy, `ERR_IMP_00010` is an aggregate record-dispatch failure,\nand `ERR_MDL_00004` indicates an optimistic revision conflict. Preserve the\ncorrelation ID and sanitized import/publication diagnostics when escalating.\n\n## Common mistakes\n\nA common mistake is treating a content-pack update as a database migration and\nmanually changing `versionId`, installed-release history, or the Online pointer.\nThat destroys the evidence needed for retry and rollback. Another mistake is\nstarting Nexus against Staged because authoring content appears there first;\npublic clients must remain Online-only. Do not run multiple unmanaged copies of\nthe same Local server, kill a PID copied from stale state, reuse an old checksum\nunder the same release version, or declare success only because processes are\nlistening. Readiness, authority, workflow, publication, and delivery must all be\nverified.\n\nOperators should also avoid interpreting Local contract timing as production\ncapacity, logical export as physical backup, retryable-phase warnings as final\nfailure, or an integrity digest as human approval. Inspect the final import-run\nand publication states. Documentation source belongs in this project, generated\nCMS data comes from the generator, and frontend applications must not become the\nauthority for content-pack installation or publication state.\n\n## Verification\n\nFor a normal retained upgrade, run preflight, retained acceptance, publishing\ncapacity qualification, and the project test suite. For a deliberate clean-room\nexercise, run fresh acceptance once and retained acceptance immediately after it\nto prove restart-safe idempotency. Confirm that all expected packs are `CURRENT`,\nthe new documentation page is delivered from Online, the publication operations\nsummary has no unexplained failed or stuck item, and `topology:status` reports no\nmanaged process after shutdown.\n\nReview the generated qualification report for command exit codes, durations,\nsource commits, explicit external gaps, and a valid SHA-256 digest. Independently\nrun Framework, Axis, and Nexus verification before committing the coordinated\nbaseline. Finally run `git diff --check`, documentation generation in check mode,\ncredential-pattern scanning, and the zero-direct-database audit over the changed\nfiles. A beginner or partner developer should be able to follow this sequence\nwithout knowing a MongoDB collection name or using a database shell.\n\nFrontend startup and verification are independent. Run `npm run dev` and `npm test`\ninside each frontend application. Backend topology and API acceptance do not start\nfrontend servers or wait for their health.\n"
        },
        {
          "code": "kickoff.deployment-qualification",
          "title": "Deployment qualification",
          "route": "/docs/nodics-kickoff/kickoff-deployment-qualification",
          "section": "publish-and-qualify",
          "sectionTitle": "Publish and Qualify",
          "sectionOrder": 30,
          "group": "publish-and-qualify",
          "groupTitle": "Publish and Qualify",
          "groupOrder": 30,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 20,
          "parentId": "publish-and-qualify",
          "hierarchyPath": [
            "Publish and Qualify",
            "Deployment qualification"
          ],
          "hierarchyDepth": 2,
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
            "kickoff.local-publishing-operations",
            "kickoff.local-acceptance"
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
          "searchText": "Deployment qualification Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off. # Deployment qualification\n\nRelease owners and architects should start with the\n[Local acceptance checklist](local-acceptance-checklist.md). Developers use\n[Local setup to live](local-setup-to-live-runbook.md) for onboarding; operators\nuse [Local publishing operations](local-publishing-operations.md) for recovery.\n\nDeployment qualification is the bridge between a release candidate that works\nlocally and a release that accountable owners may approve for production. The\nframework-owned runner coordinates evidence from the framework, reference\nproject and local Redis, but it cannot approve production by itself.\nFrontend verification belongs to each frontend repository and is collected\nseparately; this backend runner does not launch or test Axis.\n\nFor beginners, the safest way to read this page is as an evidence map. Kickoff\ncan prove that the local reference stack behaves consistently, but business\napproval still needs named owners for production topology, security, providers,\naccessibility, performance, recovery, and data governance.\n\n## Start here\n\nFrom `nodics.kickoff`, print the plan without running anything:\n\n```bash\nnpm run qualification:deployment\n```\n\nThe JSON plan identifies each gate, its owner, the command that would run, and\nwhat it proves. It contains no credentials or provider URLs.\n\nAfter reviewing the plan and obtaining authorization, run the Local gates.\nThey include builds, live-provider tests and mutating retained-data acceptance:\n\n```bash\nnpm run qualification:deployment:local\n```\n\nThe runner executes publishing and security contracts, the strict framework\nrelease gate, retained-data Kickoff acceptance, and the live Redis cache and distributed\nregistry contracts. It writes sanitized evidence to:\n\n```text\nenvs/kickoffLocal/generated/deployment-qualification/latest.json\n```\n\nThe generated report is local operational evidence and is intentionally\nignored by Git. Archive it in the deployment system that owns the release.\n\n## Fresh bootstrap is intentionally separate\n\nFresh native acceptance clears configured data through the Platform Local\nreset coordinator and its runtime-owner services. It does not drop MongoDB\ndatabases or their schema/index definitions directly. The Local composition\ncovers Platform, WCMS Staged/Online, Process, Commerce Staged/Operational,\nEngagement, Loyalty, Location, and Waste, with Platform last. Retain the\nacknowledged receipt from all ten owners and restart the topology to clear\nin-process state before initialization. Because this mutates local data, it is\nnever included by default:\n\n```bash\nnpm run qualification:deployment:local -- --include-fresh\n```\n\nNever use this flag against a shared development, qualification,\npre-production, or production database. Use an isolated disposable Kickoff\nenvironment and verify the configured database names first.\n\n## What local evidence does and does not prove\n\n| Gate               | Local proof                                                                          | Still required before production                                           |\n| ------------------ | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |\n| Framework          | Clean build, generated contracts, governance, dependency audit, and automated suites | Deployment-image and target-runtime confirmation                           |\n| Kickoff            | Integrated runtime, documentation, lifecycle, and business-user smoke journey        | Production topology and operational ownership                              |\n| Frontends (separate evidence) | Each application's own formatting, lint, type safety, tests and build | Browser/device and human assistive-technology matrix |\n| Redis              | Real local cache and distributed-registry behavior                                   | Managed TLS/authentication, topology, isolation, failover, and recovery    |\n| Payments/providers | Mock and offline contract behavior                                                   | Real non-production credentials, callbacks, failure handling, and rollback |\n\nLocal success must never be translated into `productionApproved: true`. The\nreport fixes this value to `false` and keeps every external evidence class at\n`NOT_EXECUTED`.\n\n## Production-only evidence register\n\nNamed owners must attach evidence for all applicable rows:\n\n| Evidence               | Accountable owner                 | Minimum completion evidence                                                                                                             |\n| ---------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |\n| Peak load              | Performance owner                 | Workload model, dataset, topology, p95/p99, throughput, error rate, saturation, queue age, projection lag, and integrity reconciliation |\n| Soak                   | Operations owner                  | Sustained duration, memory/CPU trends, retry growth, drift, storage/index growth, and post-run reconciliation                           |\n| Penetration            | Security owner                    | Authenticated attack surface, tenant isolation, validation, replay, export, webhook, and privilege-escalation results with disposition  |\n| Managed cache failover | Platform owner                    | TLS/authentication, topology, tenant isolation, node/provider loss, recovery time, and data-consistency results                         |\n| Backup and restore     | Data owner                        | Backup identity, restore procedure, authoritative counts/hashes, projection rebuild, and reconciliation                                 |\n| Regional residency     | Infrastructure and privacy owners | Allowed-region routing, evacuation, deletion propagation, and cross-region leakage results                                              |\n| RPO/RTO                | Operations owner                  | Measured recovery point and recovery time compared with approved objectives                                                             |\n| External providers     | Provider owners                   | Credential source, consent, callbacks, residency, observability, degraded behavior, rollback, and key rotation                          |\n| Accessibility          | Product accessibility owner       | Keyboard, screen reader, zoom/reflow, contrast, browser, and supported-device results                                                   |\n\n## Recommended execution order\n\n```mermaid\nflowchart TD\n  Plan[\"Review qualification plan and authorize mutation\"] --> Local[\"Run Local evidence gates\"]\n  Local --> Fresh{\"Isolated fresh environment available?\"}\n  Fresh -- \"yes\" --> Bootstrap[\"Run bounded fresh bootstrap\"]\n  Fresh -- \"no\" --> Provision[\"Provision qualification environment\"]\n  Bootstrap --> Provision\n  Provision --> Providers[\"Qualify managed cache and external providers\"]\n  Providers --> Load[\"Run peak load and soak\"]\n  Load --> Recovery[\"Run failover, backup restore, and RPO/RTO\"]\n  Recovery --> Security[\"Complete penetration and residency review\"]\n  Security --> Accessibility[\"Complete human accessibility matrix\"]\n  Accessibility --> Review[\"Accountable-owner evidence review\"]\n  Review --> Decision{\"All gates passed or residual risk accepted?\"}\n  Decision -- \"no\" --> Hold[\"Keep publication blocked\"]\n  Decision -- \"yes\" --> Release[\"Approve merge, tag, and publication\"]\n```\n\nRun functional success paths before destructive resilience tests. Run load\nbefore failover only when the test plan explicitly needs a stable baseline.\nRestore the environment and reconcile data after every destructive exercise.\n\n## Failure and recovery\n\nThe runner continues through local gates so one report shows every attempted\ncheck. Any non-zero command becomes `FAILED` with a stable failure code; raw\nenvironment variables and secrets are excluded. Investigate the owning\nrepository first, rerun the focused failing command, then rerun the pack.\n\nIf Redis is unavailable, start or configure an approved test endpoint and set\n`NODICS_CACHE_REDIS_URL` only in the execution environment. Do not commit it.\nResolve the framework through the declared dependency or supported explicit\nframework-root configuration. Frontend locations and test commands belong\nto the respective frontend projects, not this backend qualification profile.\n\n## Customization boundary\n\nThe runner implementation belongs to framework tooling. The root\n`package.json.name` owns stable project identity. Do not create\n`nodics.project.json`; tooling discovers command aliases from environment server\nmetadata and conventional acceptance scripts. Thin command aliases and\nhuman-readable project metadata live in `package.json`. Domain selections and qualification profile facts live\nbeside the environment, for example\n`envs/kickoffLocal/config/properties.js`. Data packs are owned by\nmodule data manifests. Runtime server startup facts stay with the selected\nenvironment server packages.\nA generated customer project should reuse the framework runner through project\ncommands and change only its project-owned facts while retaining the safety\nproperties:\n\n- dry plan by default;\n- destructive checks explicitly opted in;\n- no secrets or provider URLs in reports;\n- external evidence remains separate from local automation;\n- no automatic production approval;\n- named owners and measurable completion criteria.\n\nDo not move customer workloads, credentials, acceptance data, or risk decisions\ninto `nodics.ai`. Framework modules own reusable contracts and orchestration;\nthe customer project owns its environments, qualification targets, and release\ndecision.\n\n## Common mistakes\n\n- Treating local Redis as proof of a managed Redis topology, TLS, authentication,\n  failover, or regional recovery.\n- Calling mock Stripe or offline provider contracts a live-provider test.\n- running `--include-fresh` without checking that the target is the isolated\n  Kickoff local environment;\n- publishing the generated JSON as a production approval even though it records\n  only command outcomes and fixes `productionApproved` to `false`;\n- pasting secrets, bearer tokens, provider URLs, customer data, or raw security\n  findings into a shared evidence report;\n- accepting average latency while ignoring p95/p99, errors, saturation, queue\n  age, projection lag, and post-run data integrity;\n- running failover or restore exercises without a rollback plan and named\n  operational owner;\n- letting Axis automation replace keyboard, screen-reader, zoom, contrast, and\n  supported-device testing by a qualified human;\n- merging or tagging merely because local gates passed while production-only\n  evidence still says `NOT_EXECUTED`.\n\n## Verification\n\nDevelopers can verify the runner contract without starting the full stack:\n\n```bash\nnpm run test:qualification\nnpm run qualification:deployment\n```\n\nConfirm the plan lists framework contracts, the release gate, retained-data\nacceptance and live Redis checks, plus nine explicit external gates, sanitized\nvalues and `productionApproved: false`. The retained-data journey is mutating\neven though no fresh reset is selected. Then\nrun `npm run qualification:deployment:local` in the prepared local workspace.\nConfirm every attempted local gate is `PASSED`, the report is written only\nunder the ignored `envs/kickoffLocal/generated` path, and all production-only\ngates remain visible.\n\nOperators should archive the local report with the immutable repository commit\nidentifiers, deployment image identifiers, environment name, external test\nreports, and accountable-owner decisions. Before approval, independently\nconfirm that each external result belongs to the same release candidate and\nenvironment topology. A missing, stale, differently scoped, or unverifiable\nartifact remains pending; silence is never a pass.\n"
        },
        {
          "code": "kickoff.customization",
          "title": "Customer customization guide",
          "route": "/docs/nodics-kickoff/kickoff-customization",
          "section": "customize-customer-projects",
          "sectionTitle": "Customize Customer Projects",
          "sectionOrder": 40,
          "group": "customize-customer-projects",
          "groupTitle": "Customize Customer Projects",
          "groupOrder": 40,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 10,
          "parentId": "customize-customer-projects",
          "hierarchyPath": [
            "Customize Customer Projects",
            "Customer customization guide"
          ],
          "hierarchyDepth": 2,
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
            "kickoff.local-acceptance",
            "kickoff.configuration-inheritance"
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
          "searchText": "Customer customization guide Use Kickoff as a safe example for project modules, environment configuration, and customer overlays. # Customer Customization Guide\n\nKickoff is intentionally small. It should teach partners how to customize\nNodics safely without turning the reference project into another framework\nrepository.\n\nFor a beginner developer, the most important lesson is restraint. Do not start\nby editing framework files because they are easy to find. Start by asking who\nowns the behavior, whether configuration can solve the need, and which runtime\nserver should load the customization. That habit keeps the customer project\nupgradeable.\n\n## Why customization needs rules\n\nMost enterprise projects start with one urgent customer request. The quickest\nsolution is often to edit whatever file is easiest to find. That works for a\ndemo, but it becomes expensive when more customers, tenants, brands, modules,\nand releases arrive. Nodics customization rules keep the framework upgradeable\nand keep customer behavior visible in the customer project.\n\nThe rule is simple: customize in the most specific owner that needs the\nchange. Use configuration before code. Use a project module before editing a\nframework module. Partners customize their own repositories only. Submit reusable\ncapability gaps through the Nodics contribution process; framework maintenance\nrequires separate authorization and review. Use existing supported extension\npoints before proposing a genuinely new functional module.\n\n## Customization decision tree\n\nUse this decision tree before changing code:\n\n```mermaid\nflowchart TD\n  Need[\"Need to change behavior or content\"] --> Config{\"Can configuration solve it?\"}\n  Config -- \"yes\" --> Env[\"Use project, environment, server, node, tenant, or provider configuration\"]\n  Config -- \"no\" --> Existing{\"Does an existing functional module own it?\"}\n  Existing -- \"yes\" --> ProjectModule{\"Is it customer-specific?\"}\n  ProjectModule -- \"yes\" --> Overlay[\"Create or update a customer/project module loaded after the framework owner\"]\n  ProjectModule -- \"no\" --> Framework[\"Submit to the Nodics owner for review, implementation and release\"]\n  Existing -- \"no\" --> NewModule[\"Propose capability ownership through the Nodics contribution process\"]\n  Env --> Verify[\"Regenerate artifacts and run acceptance\"]\n  Overlay --> Verify\n  Framework --> Verify\n  NewModule --> Verify\n```\n\nIf you cannot answer the ownership question, do not code yet. A wrong owner is\nmore expensive than a missing implementation because it creates a hidden\ncontract future teams will inherit.\n\n## How a developer or AI tool should think\n\nKickoff is a reference customer project, so every change teaches future\ncustomers what “good” looks like. A developer or AI tool should not behave like\na script that only edits the nearest file. It should behave like a small expert\nteam:\n\n| Role | What to check in Kickoff |\n| --- | --- |\n| Business analyst | Does this make the first-hour customer experience clearer, safer, or more convincing? |\n| Enterprise architect | Does the change preserve framework, customer project, runtime server, Axis, WCMS, Profile, and BackOffice ownership? |\n| Nodics framework expert | Is the behavior a project customization, a framework capability, a server topology decision, or generated content-pack output? |\n| Domain expert | Is the sample reusable enough for future commerce, workflow, content, integration, or industry-specific examples? |\n| Principal engineer | Can this be solved through configuration, project module overlay, generated documentation source, or a small exported function? |\n| QA and tester | Does the setup work from zero database state, repeated runs, missing services, and failed dependency resolution? |\n| TechOps/DevOps reviewer | Are framework paths, local databases, ports, logs, reset scope, and rollback behavior safe and understandable? |\n\nIf the answer is unclear, stop and name the ownership decision before editing.\nFor example, changing the local WCMS database name belongs in server\nconfiguration, while changing the import checksum rule belongs in the owning\nframework import service.\n\n## File placement examples\n\nUse these examples when deciding where code or data belongs:\n\n| Need | Correct owner | Why |\n| --- | --- | --- |\n| Change local Platform port | `envs/kickoffLocal/platformServer/config` | It is server topology, not framework behavior. |\n| Add a project-only service | `modules/<project-module>` | Customer behavior should load after framework modules. |\n| Explain Kickoff setup in Axis docs | `nodics.kickoff/docs` | Kickoff owns project-wide documentation that becomes CMS data. |\n| Change Axis renderer behavior | `nodics.axis` | Browser rendering is frontend code, not customer backend data. |\n| Change framework-wide import validation | `nodics.ai` owning module | Shared behavior belongs to the framework owner. |\n| Change generated CMS record text | Source Markdown, then regenerate | Generated files are projections and must not become manual authority. |\n| Add Circa Waste categories or presets | `modules/circa.ewaste/data/core-v001/waste-policy` | Waste values are schema-driven application policy data, not framework source edits. |\n\n## Configuration-first examples\n\nConfiguration-first does not mean \"put everything in properties.\" It means use\nthe correct configuration owner before writing code.\n\n| Example change | Better first move | Why |\n| --- | --- | --- |\n| Local WCMS port must change | Server config under `envs/.../wcmsStagedServer/config` or `envs/.../wcmsOnlineServer/config` | Port is topology, not shared framework behavior. |\n| A project wants a different public label | WCMS/Axis content or project-owned documentation/content data | The label is presentation/content, not service logic. |\n| A framework checkout path differs | Update the declared framework package dependency and lockfile | Workspace layout is project setup, not runtime configuration. |\n| Project identity is needed | `package.json.name` | Do not duplicate it in root descriptors or `config/properties.js`. |\n| A local domain selection is needed | Existing environment/server `config/properties.js` and package composition metadata | Runtime composition belongs to the selected deployment; do not introduce an environment descriptor. |\n| A new API category should be enabled | Owning module default property, with server override only to disable or narrow it | Defaults belong to the module that owns the API. |\n| A new lifecycle state is needed | Owning status-definition file | Status values are contracts, not casual properties. |\n| A customer needs different Profile behavior | Customer extension module loaded after Platform/Profile owner | Customer behavior should not fork framework source. |\n\n## Safe customization model\n\nCustomer projects can add project modules under `modules/` and environment or\nserver contributions under `envs/`. These contributions load after standard\nNodics functional modules and can override or extend services through the\nnormal module merge process.\n\nSafe customizations include:\n\n- project-specific configuration;\n- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;\n- customer extension modules such as a future `kickoff.platform`;\n- environment-specific properties for local, testing, pre-production, and\n  production;\n- project-owned CMS documentation content packs;\n- sample data or initialization flows that belong to the customer project.\n\n## Two customization types\n\n### Code-level customization\n\nUse code-level customization when behavior changes: a service needs different\nlogic, a route needs a project-specific policy, a schema needs project fields,\nor an integration must call a customer system. Keep the implementation in a\nKickoff module or a customer extension module. Add tests next to the changed\nowner and document the boundary in the module README or documentation page.\n\nExample mental model:\n\n```text\nnodics.foundation\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nHere `kickoff.platform` can override or compose Platform services because it\nloads later. Axis and BackOffice should still show the functional capability as\nPlatform unless the customer intentionally exposes a new business capability.\n\n### Axis and WCMS customization\n\nUse governed frontend customization when an administrator changes content,\nlabels, navigation, documentation, images, or page composition through Axis\nand WCMS. The browser renderer stays in `nodics.axis`; the content records live\nin the backend owner. For example, changing a demo site logo should become a\ngoverned WCMS, Media, or content update, not a hard-coded replacement inside\nthe Axis source repository.\n\n### Documentation customization\n\nDocumentation customization is content customization. If a customer wants\ntheir own onboarding guide, project setup page, API usage note, operational\nrunbook, or business process explanation, the content belongs in the customer\nproject documentation pack.\n\nThe source lives under:\n\n```text\ndocs/\n  catalogue.json\n  pages/\n```\n\nThe generated files live under:\n\n```text\ndata/core-v001/records/documentation/\ndata/manifest.json\n```\n\nEdit the source, bump the catalogue version, regenerate, test, import, and\nverify in Axis. Never hand-edit the generated CMS records to make a page look\nright.\n\n### Waste Management customization\n\nWaste Management follows the same layered customization model as other Nodics\ncapabilities:\n\n```text\nnodics.waste\n  -> waste accelerator umbrella\n    -> eWaste scenario accelerator\n      -> circa.ewaste Waste policy\n```\n\nUse `modules/circa.ewaste/data/core-v001/waste-policy` for Circa-owned Waste\npolicy data. It can add or override family, category, material, evidence policy,\ncollection preset, acceptance rule, impact metric, and impact profile records\nthrough a manifest-backed data release. The local Waste server installs\n`eWaste:core-reference` first and `circa.ewaste:waste-policy` second, so Circa\nvalues can extend the accelerator without changing framework or accelerator\ncode.\n\nDo not put reward formulas, coupon codes, map-provider secrets, vendor\ncontracts, recycler adapters, logistics adapters, or tenant-scoped rows in\nWaste reference data. Loyalty, Location, Commerce, provider integrations, and\nproject journey modules own those concerns.\n\n## What not to customize in Kickoff\n\nDo not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not\nrename standard functional identities such as `nodics.platform` just because a\ncustomer extension customizes their behavior. Do not put backend-importable CMS\ndata into the frontend repository. Do not place framework documentation in the\ncustomer project unless it is truly project-specific guidance.\n\n## Extension example\n\nA customer may later create a module such as `kickoff.platform` to customize\nPlatform behavior. A Platform server could load:\n\n```text\nnodics.foundation\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nBackOffice and Axis should still present the functional capability as Platform\nunless the customer explicitly exposes a separate functional module. The\nextension changes implementation; it does not create a new product identity.\n\n## Documentation rule\n\nCustomer documentation follows the same ownership rule:\n\n- framework guidance goes to `nodics.docs`;\n- Axis product guidance goes to Platform `modules/axis`;\n- Kickoff/project guidance goes to `nodics.kickoff`;\n- browser rendering remains in `nodics.axis`.\n\nWhen Kickoff docs change, update the source page, bump the catalogue version if\nthe generated content changes, regenerate the pack, import it through WCMS, and\nverify the route in Axis.\n\n## Step-by-step: add a small project module\n\n1. Create or choose a module under `modules/`.\n2. Give the module a clear package identity and index so load order is\n   intentional.\n3. Add only project-owned services, data, configuration, or routes.\n4. Register the module in the relevant environment/server composition.\n5. Start the server and verify logs show the module loading after framework\n   modules.\n6. Add or update tests proving the project behavior.\n7. Update Kickoff documentation if the customization is part of the reference\n   journey.\n\n### Example: adding a project service\n\nSuppose a customer wants a project-only greeting service for a demo dashboard.\nThe safe thought process is:\n\n1. The behavior is not framework-wide.\n2. The behavior belongs to the customer project.\n3. The implementation should live under a project module, for example\n   `modules/kickoffCore`.\n4. The service should be exported so a later module can override or compose it.\n5. A test should prove the default behavior and the override path.\n6. The documentation should explain the example if it teaches future partners.\n\nDo not add that demo service to `nodics.foundation` only because every runtime loads\nCore. Core is the shared foundation, not a bucket for convenient code.\n\nDo not use this flow to move framework behavior into Kickoff. If the behavior\nbelongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and\nimplement it in the owning framework module instead.\n\n## Step-by-step: add project documentation\n\n1. Add or update Markdown under\n   `docs/pages/`.\n2. Update `docs/catalogue.json`.\n3. Bump the catalogue version when generated content changes.\n4. Run `npm run docs:generate`.\n5. Run `npm run test:documentation`.\n6. Import or update the content pack through Axis.\n7. Open the generated `/docs/nodics-kickoff` route in Axis and verify\n   navigation, search, headings, and previous/next links.\n\n## DevOps and rollback notes\n\nProject customizations should be deployable and reversible. Keep project\nconfiguration separate from private secrets. Record which environment and\nserver a customization affects. If a release fails, rollback should remove or\ndisable the project layer without requiring a framework source rollback.\n\nOperators should be able to answer three questions during rollback: which\nproject module introduced the change, which server graph loaded it, and which\ncontent-pack or configuration version went live. If those answers are unclear,\nthe customization is not ready for a production environment.\n\nGenerated documentation and seed data should be versioned immutably. If content\nchanges with the same version, the import service should reject it so operators\ndo not silently install a different release under an already-trusted identity.\n\n## Common mistakes\n\n- Editing framework files for a project-only demonstration change.\n- Treating the reference project name as a requirement for every customer\n  project.\n- Putting customer documentation into the framework docs module.\n- Changing a standard functional module identity when only a customer overlay\n  is being added.\n- Copying whole framework property trees into an environment/server config\n  instead of overriding only the narrow property the project needs.\n- Editing generated documentation data after a checksum failure instead of\n  updating source Markdown, regenerating, and bumping the release when\n  required.\n\n## Verification\n\nVerify a customer customization from the outside and from the owner. From the\noutside, start the relevant local server, open Axis, and confirm the visible\nbehavior changes only for the project that owns it. From the owner, run the\nproject tests, regenerate project documentation content when docs changed,\nvalidate the content-pack manifest, and run the local acceptance script when\nruntime, import, module registry, documentation, or Axis behavior is affected.\n\nIf a customization changes Platform, WCMS, Cron, or another framework\ncapability through a project overlay, the evidence must show both the default\nframework behavior and the project-specific override. A beginner should be\nable to read the evidence and understand where the change lives, why it does\nnot fork the framework, and how to remove or roll it back.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Local runtime topology](local-runtime.md)\n\n## Keep configuration small\n\nUse [Keep Kickoff configuration small](configuration-inheritance.md) for the\nownership map, shared administration module, minimal overrides, array behavior,\nstore-default migration and preparation checks. Inherit capability defaults;\nkeep deployment transports and operational gates at their environment/server.\n"
        },
        {
          "code": "kickoff.configuration-inheritance",
          "title": "Keep Kickoff configuration small",
          "route": "/docs/nodics-kickoff/kickoff-configuration-inheritance",
          "section": "customize-customer-projects",
          "sectionTitle": "Customize Customer Projects",
          "sectionOrder": 40,
          "group": "customize-customer-projects",
          "groupTitle": "Customize Customer Projects",
          "groupOrder": 40,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 11,
          "parentId": "customize-customer-projects",
          "hierarchyPath": [
            "Customize Customer Projects",
            "Keep Kickoff configuration small"
          ],
          "hierarchyDepth": 2,
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
          "summary": "Inherit framework defaults, share customer administration descriptors and keep deployment choices at their owners.",
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
            "kickoff.customization",
            "kickoff.local-runtime"
          ],
          "searchKeywords": [
            "configuration",
            "inheritance",
            "defaults",
            "administration",
            "environment",
            "server"
          ],
          "topicKeywords": [
            "ownership",
            "minimal configuration",
            "deployment overrides"
          ],
          "searchText": "Keep Kickoff configuration small Inherit framework defaults, share customer administration descriptors and keep deployment choices at their owners. # Keep Kickoff configuration small\n\nKickoff inherits tested framework defaults. Its environment and server files\nhold deployment choices and intentional differences. Shared customer\nadministration descriptions live once in `kickoffCore` as Platform runtime-role\nprofiles. Customers can change their applications without maintaining copies of\nframework behavior or adding a separate configuration-only module.\n\nFor a beginner, start with the existing Local Platform example below and change\none value. Read the resulting prepared configuration before adding another\noverride; do not copy a complete framework file as a starting template.\n\n## Business outcome\n\nA business administrator chooses which applications to prepare and which\napproved packages to install. Developers maintain those customer choices once;\noperators maintain the actual deployment connections. Inherited defaults reduce\nthe settings a partner must learn while retaining explicit control over imports,\npublication and reset operations.\n\n## Understand the ownership before editing\n\n| Customer application in Kickoff | Accelerator dependency in nodics.ai |\n| --- | --- |\n| agora.apparel | apparel |\n| agora.electronics | electronics |\n| agora.telco | telco |\n| circa.ewaste | eWaste |\n\nAn application remains customer-owned when used as a demo or reference. Extract\nonly independently reusable domain behavior after an explicit ownership review;\ndo not move the application's identity, policies, profiles or data with it.\n\n| Concern | Kickoff location | What stays inherited |\n| --- | --- | --- |\n| Shared project administration profiles | `modules/kickoffCore/config/properties.js` under Platform runtime-role profiles | BackOffice orchestration, permissions, validation and imports |\n| Local Platform transport and local-only profile differences | `envs/kickoffLocal/platformServer/config/properties.js` | Shared customer descriptors and capability defaults |\n| Docker Local Platform differences | `envs/kickoffDockerLocal/platformServer/config/properties.js` and its existing topology contributions | Shared customer descriptors and framework behavior |\n| Local environment policy | `envs/kickoffLocal/config/properties.js` | Generic CORS cache duration and other unchanged capability defaults |\n| Docker environment policy | `envs/kickoffDockerLocal/config/properties.js` | Generic defaults, with Docker-specific origins and headers retained |\n| Customer commerce policy | Local/Docker Commerce and Commerce Staged properties | Neutral framework behavior; the actual Agora store remains explicit |\n| Circa application policy | `modules/circa.ewaste/config/properties.js` | Waste, Profile, Location and BackOffice authorities |\n\n`kickoffCore` owns project documentation and shared activation selections.\nAgora application packs and profiles belong to their respective customer modules\nhere, just like Circa. Axis contributes disabled documentation setup descriptors;\nKickoff enables the selected entries. nConfig projects project profiles when the selected\nruntime role is Platform. The descriptors contain no deployment credential,\nport, listener, or startup behavior. Environment and server files still own the\nactual deployment transport differences.\n\n```mermaid\nflowchart LR\n  Capabilities[\"Framework capability defaults\"] --> Local[\"Local Platform differences\"]\n  Capabilities --> Docker[\"Docker Local Platform differences\"]\n  Core[\"Kickoff Core Platform profiles\"] --> Local\n  Core --> Docker\n  Local --> LocalRuntime[\"Prepared Local Platform\"]\n  Docker --> DockerRuntime[\"Prepared Docker Platform\"]\n```\n\n## Why the ordering matters\n\nCustomer application packs use project-module indexes after framework defaults.\nPlatform and WCMS Staged select them through normal customer-module discovery,\nwithout importing application ownership into the framework. Media descriptors use\n`manifestModule` and a module-relative `manifestPath` for both customer and framework owners.\nCustomer runtime selection, reset boundaries, destination aliases and database\nbindings stay here. Module manifests already supply activation-package facts;\nthe project entries only route those observed packages to selected runtimes.\n\n`kickoffCore` is part of the project module graph. Its BackOffice descriptors\nuse `runtimeRoleProfiles.PLATFORM`, so Platform receives them and non-Platform\nruntimes do not. The selected Platform server files keep deployment-specific\noverrides such as operator origin or target transport details.\n\nThe normal nConfig loader remains authoritative. There is no additional loader,\nprofile registry, deployment process or project lifecycle script. Existing\nCirca and other later-loaded contributions retain their own merge behavior.\nAn index change must be reviewed against the effective module order rather than\nassumed safe from a directory name.\n\n## Start with the smallest change\n\nFor Local employee browser sessions, the environment needs only its intentional\nlocal policy:\n\n```js\nprofileBrowserSession: {\n    enabled: true,\n    allowInsecureLoopback: true,\n    sameSite: 'Lax'\n}\n```\n\nCookie names, cookie paths and maximum age come from Profile. These are local\nsettings; do not copy loopback relaxation into a production environment unless\nthat deployment explicitly supports local HTTP development. Docker keeps its\ndistinct cookie names at the Docker environment layer so Local and Docker browser\nsessions remain separate.\n\nFor a Product catalogue limit, add only the value you intend to change under\nan already active Commerce server:\n\n```js\nproduct: {\n    discovery: { catalogue: { maximumCandidates: 800 } }\n}\n```\n\nOmitting `maximumCandidates` uses Product's default. Other Product values do not\nneed to be copied. Changes to query budgets require performance review against\nthe intended catalogue size.\n\n## Customize and extend safely\n\nTo change a shared application description, edit the matching Platform profile in\n`modules/kickoffCore/config/properties.js`. To change a deployment\nconnection, edit that environment's Platform profile target. For example, a\nLocal-only timeout override is:\n\n```js\nbackofficeApplicationInitialization: {\n    profiles: {\n        nexus: { target: { timeoutMs: 60000 } }\n    }\n}\n```\n\nMerge this difference into the existing Local Platform properties. Do not\nreplace the entire file or copy this target into the shared module. The profile\ncontinues to inherit its description and package selections; Docker retains its\nown target values. A node override can further specialize this scalar through\nthe existing selected-node configuration chain.\n\nWhen adding a new application, first decide whether its descriptor belongs to\nan already active application module or to administrative composition. Prefer\nthe application owner where it can contribute without activating unrelated\ncapabilities. Keep shared cross-application administration data here only when\nthat is the appropriate selected consumer. Local-only profiles remain Local\nchoices; identical data is shared only where both environments intend it.\n\nWhen adding a new environment or server:\n\n1. Follow the framework module-generation contract and choose a unique ordered\n   index; do not copy an existing server's complete properties.\n2. Declare actual composition, coordinates, authority and required deployment\n   inputs.\n3. Keep shared administration defaults in the owning project/application module\n   and expose them through runtime-role profiles only for consuming runtimes.\n4. Add only intentional differences, then run preparation and focused checks.\n5. Test an unselected runtime to ensure that it does not gain application\n   profiles or functional modules accidentally.\n\n## Preserve arrays and operational safeguards\n\nBackend qualification does not require a frontend checkout. Axis knowledge is\nan explicit external-source choice: supply `NODICS_COPILOT_AXIS_ROOT` and enable\n`NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED`; source-code ingestion additionally uses\n`NODICS_COPILOT_AXIS_SOURCE_CODE_ENABLED`. Missing selections stay disabled.\nThe Local composition source belongs only to the Local Platform profile.\n\nShared customer Engagement opt-ins live in Kickoff Core's `ENGAGEMENT` role\nprofile. Local notification templates and trusted-source bindings live in the\nLocal environment's matching role profile, without selecting Circa there.\nLater deployment layers can still disable these choices.\n\nAcceptance URL selectors resolve the selected server's published endpoint;\ninternal Editorial calls use the configured `processConnectionName` through\nnRouter. Explicit legacy `processBaseUrl` overrides retain precedence. Do not\ncopy a second catalogue of listener, published or internal ports: they have\ndifferent consumers and must not be substituted for one another. Backend\ncontainer network qualification covers selected backend network boundaries;\nexternal frontend qualification is separate. Docker execution remains a\nseparate validation step, not evidence supplied by configuration-only tests.\n\nCurrent nConfig merges arrays by position. A shorter override can retain\ninherited trailing entries; an empty array is not a general removal instruction.\nShare a list only when its complete values and ownership match. Deployment\nlists that differ remain explicitly owned at their boundary. Use an existing\ncapability-specific removal mechanism where available and verify the effective\nresult before changing an activation or reset inventory.\n\nLocal reset opt-in, its environment allowlist and explicit model service lists\nremain Local configuration. Shared defaults do not enable Docker Local reset.\nProvider sandbox restrictions and deployment-selected model names remain\nexplicit where they represent intentional operator policy. Data descriptors do\nnot themselves execute imports, grant permissions, approve Online publication\nor change tenant authority.\n\nLarge remaining blocks are not automatically framework defaults: deployment\nknowledge-source bindings, transport targets, local-only application profiles\nand reset inventories can carry real customer or server choices. Their ownership\nmust be assessed individually. A shorter entry file that imports the same large\npayload does not reduce customer maintenance by itself.\n\n## Send store context explicitly\n\nCart and Shopping List no longer select a store from `customerApi.defaultStoreCode`.\nThe obsolete Cart fallback declarations have been removed from Local and Docker\nLocal Commerce/Commerce Staged configuration. Store identity remains customer-owned;\nthe existing Agora commerce client sends its configured store explicitly for Cart\ncreation and Shopping List operations.\n\nBefore upgrading other callers, make them send `storeCode` through their existing\nrequest payload/query or service context. All supplied values must agree. Missing,\nmalformed or conflicting context is rejected; no neutral or sample store is invented.\nThere is no new configuration layer or store-specific API. Other application-level\nstore selections used by Product publication or other capabilities have independent\nowners and are not removed by this change.\n\nExisting explicit-store ID formats and persisted records are preserved. Keep saved\nCart IDs, including any produced by the older context-only hashing bug; recomputing\na new hash is not a migration. Missing/inconsistent stored context needs governed\nrepair. Identifier validation is not a Store master lookup or an authorization grant.\nRe-run prepared Commerce compositions and real client acceptance before deployment.\n\n## Verification before operating\n\nFrom the Kickoff repository:\n\n```sh\nnode --test test/configurationInheritanceContract.test.js test/guidedInitializationProfilesContract.test.js test/communicationActivationDataContract.test.js test/dockerLocalEnvironmentContract.test.mjs\nnode test/runtime-prepare.test.js\nnode test/dockerLocalRuntimePrepare.test.js\nnpm run docs:check\n```\n\nThe customer configuration tests check selection scope, index order, profile\nidentity, environment-owned transports and reset selections. Node-override and\ntenant-isolation behavior belongs to nConfig's `configurationBindingContract.test.js`;\nCORS, provider inheritance and neutral domain defaults are tested by their framework\nowners with independent fixtures. Existing runtime preparation checks use real nConfig resolution for\nLocal and Docker Local. Declaration tests compose the shared defaults instead\nof assuming that a server file contains its entire effective configuration.\n\nCompare Local and Docker Local runtimes across the supported domain selections:\nall, none, Apparel, Electronics and Telco. These checks verify that Platform receives the\nproject-owned BackOffice descriptors through `kickoffCore` runtime-role profiles\nwhile non-Platform runtimes do not. They prepare configuration and metadata; they do not\nstart listeners, reset databases, import packages or prove signed-in browser\nbehavior. Dated outcomes belong in `docs/evidence/`, not this operating guide.\nRe-run the relevant operational journey after deploying/restarting\nchanged source through the usual project procedure.\n\n## Common mistakes, troubleshooting and rollback\n\n| Symptom | Check | Recovery |\n| --- | --- | --- |\n| Platform profile identity or package list is missing | Does `kickoffCore` still define Platform runtime-role profiles and does nConfig project them? | Restore the profile block; run preparation. |\n| A target is missing | Does the selected environment still declare its profile transport? | Restore that environment's target; shared defaults intentionally do not supply it. |\n| A Local setting appears in Docker | Was deployment data placed in the shared module? | Move it back to the appropriate environment and compare both runtimes. |\n| An extra array item remains | Did a shorter array merge preserve a trailing entry? | Use supported removal semantics and inspect the effective list. |\n| An unrelated server exposes shared profiles | Was the module selected by a common group or every server? | Restore Platform-only selection and run the unselected-runtime check. |\n| Structure audit reports unrelated Circa gaps | Compare with the recorded baseline and inspect the owning work. | Keep those findings separate; do not overwrite ongoing Circa changes. |\n\nRollback restores the previous declarations together. Re-run preparation before\nrestarting. Do not revert unrelated Circa, content, initialization or framework\ndocumentation changes.\n\nContinue with the Customer Customization Guide for application extension and\nthe Local Runtime guide for deployment composition. The framework's permanent\nrule is `nSetup/llm/contracts/customer-config-classification-contract.md` in the\nresolved Foundation package.\n\n## Commands and capability inventories\n\nThe framework supplies canonical acceptance operations. This project's server\naliases are discovered from `envs/*` server metadata. Customer npm aliases select\nreal applications and fixtures; they delegate to protected framework commands.\nFor example, `acceptance:agora-commerce` selects the Commerce journey owned by\nthe framework. Do not restore copied acceptance services under `scripts/acceptance`.\nMoving ownership does not authorize executing that journey:\nits existing credential, import, startup and destructive confirmation gates apply.\n\nThe shared documentation generator reads this project's `docs/catalogue.json`\npublication metadata. Record/code prefixes and routes are stable persisted\nidentifiers; changing them requires an explicit content migration. Labels and\nchannels remain application choices. A different project supplies its own values\nwithout editing framework source.\n\nAfter source documentation changes, select a reviewed forward release before\ngeneration. Stable generated content must not be overwritten under the same\nversion or output path. The framework generator accepts a new governed\n`docs/catalogue.json.publication.contentPath` such as `core-v002` and preserves\nthe previous artifacts. Review installed receipts and publication history before\nchoosing the next version; local Git history alone cannot prove installed state.\n`docs:check` remains a generation-consistency gate and may correctly fail while\na release-history issue is unresolved. Source validation and published readiness\nmust be reported separately.\n\nLocal reset definitions select capability inventories through module-owned\n`localResetProvider.profiles` keyed by runtime role. Each profile selects\ncapability modules and required model checks for that runtime; adding a\ncontribution never enables reset by itself. Environment configuration owns the\nenablement and allowlist, with optional runtime-role allowlists for constrained\nenvironments such as Docker Local. Server `config/properties.js` files do not\nrepeat reset inventories. A later `serviceOverrides` false entry removes an\noptional inherited service. Removing a required service fails before mutation.\nExplicit optional service names for unavailable or historical models remain\nvisible until their owners are selected or their cleanup requirements are\nretired. No reset is implied by configuration preparation or validation.\n\nFoundation initialization profiles continue selecting their declared Init/Core\ncategories and destination roles. Release discovery and manifests determine each\ncapability's records; application bundles and captions remain project choices.\n\n## Declarative environment and runtime configuration\n\n`package.json` identifies modules, environments, servers and nodes. Existing\n`config/properties.js` contributions supply their configuration. The retired\n`nodics.environment.json` is neither required nor loaded, and no replacement\ndescriptor is introduced. nConfig owns binding and layering; nTooling projects\nstartup, container and acceptance inputs from that same configuration.\n\nRoot `activeModules.compositions.agora` describes this project's optional Agora\nselection. Only selecting runtime contributions consume it. Independent cron or\nwebsite projects do not need Agora. Runtime provider/module selections stay\nexplicit; merely declaring an endpoint or connection never activates its owner.\n\nEach server declares its own `servers.default.endpoint` port. Peer aliases use\n`$config: runtime` to project that server's endpoint, retaining intentional\n`remoteOnly`, advertised-host and HTTP-only differences. Module identity and\npackage versions come from existing metadata. Framework host defaults are inherited.\nA node may override a target endpoint field; a later tenant override changes the\nactual consumer endpoint. References preserve their contribution-time snapshot.\nMissing, unsafe or cyclic targets fail before runtime startup.\n\nLocal startup order and dependencies remain in each server's `tooling.runtime`.\nAcceptance runtime descriptors are selected from declared roles and existing\nserver metadata; ports and launch commands are not repeated in Local properties. Acceptance URL defaults use nTooling's `projectEndpointUrl` projection,\nincluding the configured Axis origin. Explicit published-URL environment inputs\nremain valid for proxy or container access. Local Redis inherits the framework\nhost, port and `localRuntimeAuth` prefix; its Redis block declares only\n`enabled: true`. A different deployment namespace is an intentional later override.\nFrontend applications own their startup commands and development ports. Backend\nconfiguration declares only explicit CORS security policy for trusted origins. Container-specific inputs and real deployment differences remain\nunder the existing environment's `tooling` property. Reusable acceptance defaults\ncome from their framework capability owners; the Local tooling block is absent. This metadata never authorizes\nimports, grants runtime scope or proves deployed readiness.\n\n## Inherited provider and policy defaults\n\nLocal Elasticsearch uses the framework provider's `http://localhost:9200` default.\nKickoff Local declares no Elasticsearch address. Docker overrides it with the\ncontainer service address because that deployment differs. Apply this rule to\nall provider settings: retain only actual environment differences, connection\nselection and isolated database/namespace choices.\n\nFramework defaults provide info logging, disabled remote event publication,\ndisabled database fallback for search, standard CORS headers/credential behavior,\nand secured service-registry API exposure. Docker's logging environment input and\ncross-origin resource header are deliberate deployment differences. Search and\ncache providers still require explicit activation. Server database names and\nProcess's separate Cron database remain project deployment choices.\n\nThe effective deployment classification remains `environment.class` for nImport\nrelease-scope checks, but nConfig derives it from the selected environment\nmodule metadata. Do not author it in environment `properties.js`, and do not\ninfer it from a runtime name such as `kickoffLocal`. Sample releases are\navailable for authorized manual execution by default; only Init runs\nautomatically. Permissions, tenant/destination checks, release integrity and\ndurable receipts remain mandatory. A deployment may explicitly restrict Sample\nexecution without changing framework code.\n\n## Credentials, initialization and runtime authentication\n\nAuth policy and bootstrap credential bindings come from nAuth. Kickoff does not\ndeclare a customer-root administrator password. Environment, server and node\nlayers may override `bootstrapIdentity.adminPassword` through nConfig when a\ndeployment intentionally supplies a different initial administrator credential.\nThis configures future initialization; changing it does not rotate an already\npersisted administrator password. Use Profile credential operations for an\nexisting account.\n\nAdministrator bootstrap values, JWT secrets, peppers, service passwords/API\nkeys and binding fallbacks remain deployment inputs or governed runtime\nconfiguration. Do not publish credential-bearing customer files or enable\nblanket legacy-human/plaintext/missing-stamp compatibility exceptions.\n\nSupply deployment inputs through the framework's environment bindings or the\nexisting layered external/secret-provider mechanism:\n\n| Input | Purpose |\n| --- | --- |\n| `NODICS_JWT_SECRET` | Stable deployment signing material |\n| `NODICS_API_KEY_PEPPER` | Stable API-key digest material |\n| `NODICS_BOOTSTRAP_ADMIN_PASSWORD` | Initial human administrator provisioning |\n| `NODICS_BOOTSTRAP_SERVICE_PASSWORD` | Initial service-principal provisioning |\n| `NODICS_BOOTSTRAP_SERVICE_API_KEY` | Initial service API-key provisioning |\n| `NODICS_API_KEY` | Current runtime proof inside one server process |\n\nEach runtime server reads the same server-local `NODICS_API_KEY` binding from\nits own effective configuration. A shared launcher or environment-wide\ncredential store may keep server-specific aliases while injecting the selected\nvalue into the child process as `NODICS_API_KEY`. Missing retained proof remains\nnull; there is no fallback to a sample key or human administrator. Profile owns\nruntime scope grants, tenant/enterprise validation, token issuance, renewal and\nrevocation.\n\nProfile's `profileInitialization.requiredEmployeeLogins` defaults to the human and\nservice identities supplied by its Init release. Initialization checks no longer\nuse the runtime authentication login. Missing identities are detected independently\nof current proof; existing Init receipts and mandatory identity reconciliation\ncontinue to govern repair. Configuration changes do not reset stored credentials.\n\nEach runtime explicitly selects the Redis provider. Each environment declares only\nconnection differences, and the shared `auth.auth` channel inherits strict nAuth\ncache policy with no local fallback. Local inherits the framework prefix;\nDocker retains its existing Redis/Sentinel deployment inputs. Missing required\ncredentials or cache capabilities fail through their existing owners.\n\nDocker maps its persisted generated credential variables to the framework input\nnames. Fresh container setup generates random credentials once and retains them\non subsequent runs. It no longer provides a universal administrator password.\nFor an initialized deployment, bind its current signing secret and pepper before\nrestart. Use Profile's governed migration/rotation process for legacy records,\nscopes/stamps or changed credentials; do not replay Init or restore revoked keys.\n\n## Browser origins and later overrides\n\nnRouter enables CORS by default for the standard Nodics localhost origins: Axis 3100, Nexus 3200, Agora Apparel 3300, Electronics 3400, Telco 3500 and Circa 3600. These shared API security defaults apply independently of Platform/accelerator activation and frontend health. Environments declare only different addresses or policy; server denials and explicit disablement remain supported. nRouter never reads a frontend launch catalogue. Exact origins, header policy and route authorization remain enforced.\n\nServer `originEndpointOverrides` retains deliberate frontend denials. Numeric\nloopback aliases and temporary IP addresses are not automatically added.\nA different environment supplies its actual host/protocol or replaces the endpoint\ncollection through nConfig. Denials follow frontend identity when its address changes.\nTests cover custom HTTPS, empty/replaced collections, forbidden origins and headers.\n\n## Application selections and optional features\n\nCustomer knowledge sources retain their classification, scopes, permissions and\nexplicit enablement. Repository roots use nConfig context/path bindings. Framework\nand project source versions inherit package metadata unless the operator supplies\nan intentional version override. There is no `configurationValues.knowledge` helper\nregistry. Source selection is independent of source-ingestion authority.\n\nKeep explicit content-pack, reset, publication baseline, provider, data-release,\nstore/catalogue, frontend and runtime identity selections. Their presence does not\nmean they are copied framework defaults. Content-pack paths and presentation\nmechanics inherit nImport; BackOffice resolves its standard target defaults.\nThe project documentation pack retains its governed CMS import/publication path.\nUse `replace` for complete collection selection and `keyed` for identity changes;\nordinary arrays retain positional compatibility. Shorter arrays do not delete\ninherited members without the explicit collection operation.\n\n## Enforcement and verification\n\n`project:validate` and the framework principle audit reject the retired descriptor,\nprofile bindings, duplicate endpoint/authentication catalogues and literal auth\nsecrets in authored properties, except the direct customer administrator bootstrap\noverride. The canonical framework coding restrictions live\nin nSetup's customer configuration classification contract. The static audit never\nexecutes customer property files and never prints credential values.\n\nTests use `test/helpers/configuration.js` to invoke the real nConfig and capability\nconsumers without starting infrastructure. All active runtime preparations, source\nclassification, later overrides and negative checks are part of closure evidence.\nPrepared configuration and isolated contracts do not prove a deployed database,\nRedis/Sentinel service, current grants, browser session or external AI provider.\nPerform deployment acceptance after the normal selected-server build/restart.\n\nMongoDB default names `masterLocal` and `testLocal` belong to the framework adapter.\nKickoff Local declares no default database-name block. Server-specific names,\nincluding separate Staged/Online and Process/Cron databases, remain explicit\nisolation overrides. This source cleanup does not migrate or rename existing data.\n\n## Local extraction ownership (2026-09-28)\n\nComplete capability-registry, guided-initialization and deployment-qualification\nsuites now live in BackOffice, CMS and nTooling. The existing npm aliases invoke\nthose owner commands without local script copies. Canonical command metadata\nrejects project replacements and same-name script shadowing. Customer fixtures,\ntopology and application profile selection remain supported inputs.\n\nRegistry acceptance requires `--execute`; guided initialization additionally\nrequires `--approve-publications`. It uses normal Process approval, never an\nimplicit emergency override. `qualification:deployment` prints a plan by default;\nits mandatory security/publication checks call framework tooling directly.\nCustomer journey results supplement canonical gates and cannot approve production.\nOther mixed acceptance scripts remain extraction work, not approved examples of\ncustomer ownership for reusable framework assertions.\n\nReusable domain behavior belongs to functional modules; reusable composed\nindustry behavior belongs to accelerators. Customer applications, scenarios,\ndata, selections and deployment bindings stay in Kickoff. The same rule applies\nto configuration, tests and documentation. `kickoffApi` and `kickoffInt` remain\ncustomer extension templates, not misplaced framework modules.\n\nCMS and Editorial now own neutral publication transport defaults. Local Staged\nretains peer connection selection, enablement and provider selection. Framework\ndefaults alone neither publish nor approve a release. Communication owns inert\nTelegram technical defaults; Local Engagement selects the type and retains the\nCirca credential reference, notification policy and trusted sources.\n\nFramework documentation and Axis own their acceptance pack descriptors; Kickoff\nowns its documentation descriptor and the explicit pack selection. nTooling\ncombines inert discovered defaults with the selected runtime's effective nConfig\nacceptance policy, including custom modules. Static discovery is not activation.\nConfiguration placement enforcement also lives in nTooling's existing audit.\n\nLocal-only follow-up validation and remaining migrations are tracked in the\n[local acceptance checklist](local-acceptance-checklist.md). Docker execution is\ndeferred; previous Docker evidence does not qualify this follow-up batch.\n\n## Nexus accelerator migration\n\nThe `nexus` accelerator now owns the former Nexus reference content pack at\n`nodics.accelerators/modules/nexus/modules/nexus.web` in the framework repository.\nIts public module identity remains `nexus.web`; release codes, versions and all\ndata/media bytes are preserved. Kickoff no longer contains a duplicate content pack.\n\nPlatform explicitly selects `nexusCore` for administration descriptors; WCMS Staged\nselects `nexus`, and Engagement selects the `nexus.web` operational release source.\nThe structural parent appearing in a graph does not imply CMS activation: Platform\nand Engagement remain free of CMS services. `npm run nexus:test` dispatches the\nmodule-owned `nexus:check` command. Customer media-seeding journeys remain explicit.\n\nCommon Nexus publication baselines and delivery defaults are accelerator-owned.\nThe Local-only incremental/professional-copy proof selections remain Local deltas;\nKickoff's combined Nexus/Agora acceptance profile list remains a project choice.\nNo data was imported, uploaded or published by this source migration.\n\n## Application policy and role selection\n\nAgora publication baselines belong to each owning application under\n`cms.runtimeRoleProfiles.WCMS_STAGED`. Selecting no Agora domains supplies no\nAgora baseline; Platform presentation identifies these profiles as applications.\nPackage selections, explicit user import triggers and Online approval remain intact.\nRelease pins still require the publication manifest consistency check.\n\nCirca owns shared photo metadata and conversation selection under the WASTE\nprofiles of `wasteSubmission` and `eWaste`. Local and Docker Waste keep their\ndifferent public links. A later override of role policy must use the same\n`runtimeRoleProfiles.WASTE` path; role profiles are folded into effective\nconfiguration after ordinary namespace values. The eWaste journey supplies neutral\nposition-age, capture-timeout and centre-count defaults. An application must\nsupply its arrival radius: a missing radius fails closed before arrival decisions.\n\nLocal and Docker environments own Agora/Circa CORS origins for all API roles,\nincluding roles where those applications are not active. nRouter retains only\nframework origins and origin-construction behavior. Exact-origin and denial\nsemantics remain unchanged.\n\nThe Circa refund owner-port descriptor remains an explicit cross-runtime binding:\nCommerce does not load eWaste. Do not activate the accelerator just to inherit\nits descriptor. Copilot source controls now use opt-in Knowledge-owned templates;\nproject definitions retain roots, identities, versions, enablement and scope.\nNormalized Local and Docker source definitions match the pre-extraction snapshot.\nDocker Platform still does not activate Copilot Knowledge: these definitions\nremain inert there, and configuration checks do not imply Docker live acceptance.\nTelegram schema reuse likewise needs coordinated\nprovider availability and central schema routing; existing operational schemas\nremain unchanged. Initialization package simplification is deferred: explicit\nselection, destination, reset and approval controls remain authoritative.\n\nRun `node --test test/applicationConfigurationOwnershipContract.test.js` with\nthe configuration, publishing and guided-initialization gates above, followed by\nboth Local and Docker runtime preparation tests. These checks do not start\nlisteners or import/publish data.\n"
        },
        {
          "code": "kickoff.functional-journeys",
          "title": "Commerce and Engagement functional journeys",
          "route": "/docs/nodics-kickoff/kickoff-functional-journeys",
          "section": "functional-journeys",
          "sectionTitle": "Functional Journeys",
          "sectionOrder": 50,
          "group": "functional-journeys",
          "groupTitle": "Functional Journeys",
          "groupOrder": 50,
          "subgroup": null,
          "subgroupTitle": null,
          "order": 10,
          "parentId": "functional-journeys",
          "hierarchyPath": [
            "Functional Journeys",
            "Commerce and Engagement functional journeys"
          ],
          "hierarchyDepth": 2,
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
      "group": "discover-kickoff",
      "groupTitle": "Discover Kickoff",
      "parentId": "discover-kickoff",
      "hierarchyPath": [
        "Discover Kickoff",
        "Kickoff project overview"
      ],
      "hierarchyDepth": 2,
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
        "kickoff.functional-journeys",
        "kickoff.local-setup-to-live",
        "kickoff.local-acceptance"
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
          "text": "Kickoff owns project structure, local environment wiring, project modules, sample customization points, and project documentation. Framework documentation belongs in `nodics.docs`; Axis product documentation belongs in the Platform `axis` backend module; browser renderers belong in `nodics.axis`. Kickoff-wide documentation source belongs in this repository under `docs/` and is generated into this repository's governed content pack. Documentation for a specific installed application belongs under that application's data module, for example `modules/circa.ewaste/docs/`. Agora Apparel, Electronics and Telco are also customer applications under this project's `modules/`, consuming the respective reusable framework accelerators."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Why Kickoff exists",
          "anchor": "kickoffOverview-1-why-kickoff-exists"
        },
        {
          "kind": "paragraph",
          "text": "New developers and administrators can begin with [Local setup to live](local-setup-to-live-runbook.md). Developers and QA use the [Local acceptance checklist](local-acceptance-checklist.md) to select non-live checks or an authorized live journey. Operators continue to [Local publishing operations](local-publishing-operations.md), and release owners to [Deployment qualification](deployment-qualification.md). These pages are available from the repository before installation and through the Kickoff documentation navigation after governed publication."
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
              "Yes. Waste Management loads `nodics.waste`, `eWaste`, and Circa-owned Waste policy data without changing framework or accelerator source."
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
            "how Waste Management runs as a separate backend with framework, accelerator, scenario, and Circa application policy layers;",
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
            "`package.json.name` declares the canonical stable project identity;",
            "project command aliases are discovered from `envs/*` server metadata and conventional `scripts/acceptance/*Service.mjs` files; do not create `nodics.project.json`;",
            "`package.json.nodics` declares human-readable project metadata;",
            "`envs/<environment>/config/properties.js` declares environment domain selections, topology, acceptance, and qualification profile facts;",
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
      "searchText": "Kickoff project overview Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs. # Kickoff Project Overview\n\nNodics Kickoff is the reference customer project for running Nodics locally and\ndemonstrating how a partner or customer project consumes the framework. It is\nnot a standard Nodics functional module such as Core, Platform, WCMS, or Cron.\nIt is a project-owned runtime composition that shows how those modules can be\nassembled without copying framework source.\n\nKickoff owns project structure, local environment wiring, project modules,\nsample customization points, and project documentation. Framework\ndocumentation belongs in `nodics.docs`; Axis product documentation belongs in\nthe Platform `axis` backend module; browser renderers belong in `nodics.axis`.\nKickoff-wide documentation source belongs in this repository under `docs/` and\nis generated into this repository's governed content pack. Documentation for a\nspecific installed application belongs under that application's data module,\nfor example `modules/circa.ewaste/docs/`. Agora Apparel, Electronics and Telco\nare also customer applications under this project's `modules/`, consuming\nthe respective reusable framework accelerators.\n\n## Why Kickoff exists\n\nNew developers and administrators can begin with\n[Local setup to live](local-setup-to-live-runbook.md). Developers and QA use the\n[Local acceptance checklist](local-acceptance-checklist.md) to select non-live\nchecks or an authorized live journey. Operators continue to\n[Local publishing operations](local-publishing-operations.md), and release\nowners to [Deployment qualification](deployment-qualification.md). These pages\nare available from the repository before installation and through the Kickoff\ndocumentation navigation after governed publication.\n\nKickoff exists so a new team can feel Nodics before they design their own\nproject. A partner should be able to clone the framework, clone the reference\nproject, run a small set of commands, log in to Axis, and see the major backend\ncapabilities working together.\n\nThis matters because enterprise framework adoption usually fails at the first\nhour. If the first experience requires a developer to understand every module,\nevery dependency, every data import, and every environment property, the\nframework feels heavy even when the architecture is good. Kickoff keeps the\nfirst journey small: start the runtime, import governed seed data, open Axis,\nread the documentation, and then make one safe customization.\n\nFor a business evaluator, Kickoff demonstrates that Nodics can support a real\ncustomer project without asking the customer to fork framework code. For a\ndeveloper, it shows the concrete folder shape, package dependency model,\nenvironment wiring, server start commands, and project-owned extension points.\nFor an operator, it shows how one local project can run Platform, WCMS, and a\ncombined Business Process & Automation runtime while preserving the same module\nownership rules that production will use.\n\n## What a new customer should learn\n\nKickoff should answer the questions a new customer asks before trusting a\nframework:\n\n| Question | Kickoff answer |\n| --- | --- |\n| Can I run it locally without designing my full product first? | Yes. Kickoff provides ready local Platform, WCMS, Process and Automation, and Axis wiring. |\n| Do I have to edit framework source to customize? | No. Customer modules and server/environment configuration load after framework modules. |\n| Can documentation and content be imported like real governed data? | Yes. Kickoff ships a project-owned documentation content pack. |\n| Can optional modules be added later? | Yes. Process demonstrates observed optional runtime capability and registry lifecycle while exposing workflow and cronjob capabilities. |\n| Can accelerators be customized without changing framework code? | Yes. Waste Management loads `nodics.waste`, `eWaste`, and Circa-owned Waste policy data without changing framework or accelerator source. |\n| Can an accelerator be imported before its business capabilities are active? | No. The setup journey blocks it until required capabilities such as Commerce, Discovery, or Engagement are registered and active. |\n| Can my real project use a different folder layout? | Yes. `NODICS_FRAMEWORK_ROOT` points Kickoff to the framework checkout. |\n\nThis makes Kickoff more than a sample app. It is the adoption proof for the\nwhole framework.\n\n## Beginner mental model\n\nThink of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample\nproduction line, `nodics.exp` as the frontend workspace shelf, and Axis, Nexus,\nand Agora as separate customer-facing screens. The factory equipment provides\nstandard capabilities such as Core, Platform, WCMS, Media, Process, Commerce,\nand Engagement. The sample production line decides which equipment to\nconnect for a local demonstration. The screens connect to the running backend\nand show only the capabilities that the backend says are available and\nauthorized.\n\nKickoff is not the product every customer must ship. It is the smallest\ncomplete example of how a customer product can be structured.\n\n```mermaid\nflowchart LR\n  Framework[\"Framework equipment<br/>nodics.ai\"] --> Project[\"Reference production line<br/>nodics.kickoff\"]\n  Project --> Servers[\"Local runtime servers\"]\n  Servers --> Platform[\"Platform: login and BackOffice\"]\n  Servers --> WCMS[\"WCMS: content and docs\"]\n  Servers --> Automation[\"Process server: workflows and scheduled capability\"]\n  Servers --> Commerce[\"Commerce and Engagement\"]\n  UiWorkspace[\"Frontend workspace<br/>nodics.exp\"] --> Axis[\"BackOffice<br/>nodics.axis\"]\n  UiWorkspace --> Nexus[\"Corporate site<br/>nodics.nexus\"]\n  UiWorkspace --> Agora[\"Commerce storefront<br/>nodics.agora.apparel\"]\n  Axis --> Platform\n  Axis --> WCMS\n  Axis --> Automation\n  Nexus --> WCMS\n  Agora --> Commerce\n```\n\nThe metaphor is useful because it prevents a common mistake. You do not move\nfactory equipment into a frontend application, and you do not hardcode screens\ninto the production line. Each part has a job.\n\n## What Kickoff demonstrates\n\n- how a customer project depends on Nodics framework packages;\n- how environment and server modules load after standard functional modules;\n- how Platform, WCMS Staged, WCMS Online, Process and Automation, Engagement, and\n  Commerce can run as separate ownership domains while serving three frontends;\n- how Waste Management runs as a separate backend with framework, accelerator,\n  scenario, and Circa application policy layers;\n- how project modules can customize runtime behavior without renaming the\n  standard functional module identity;\n- how customer-owned documentation can appear in Axis beside Framework,\n  Swaggers, and Nodics Axis.\n\n## Source map\n\nThe important Kickoff locations are:\n\n- `package.json` describes the project package and local scripts;\n- `package.json.name` declares the canonical stable project identity;\n- project command aliases are discovered from `envs/*` server metadata and\n  conventional `scripts/acceptance/*Service.mjs` files; do not create\n  `nodics.project.json`;\n- `package.json.nodics` declares human-readable project metadata;\n- `envs/<environment>/config/properties.js` declares environment domain\n  selections, topology, acceptance, and qualification profile facts;\n- `modules/*/data/manifest.json` declares module-owned data packs;\n- `envs/<environment>/*Server/package.json` declares the framework packages\n  required to bootstrap each runtime;\n- `config/` contains project-level defaults;\n- `envs/kickoffLocal/` contains local environment and server composition;\n- `modules/` contains project-owned modules and customization examples;\n- `docs/` contains authored Kickoff-wide documentation;\n- `data/core-v001/records/documentation/` and the documentation section in `data/manifest.json` are\n  generated content-pack outputs.\n\nAuthored documentation is the source. Generated records are the importable CMS\nprojection. Do not hand-edit generated records to fix documentation.\n\n## Runtime boundary\n\nKickoff is loaded after framework modules. That means it can contribute\nconfiguration, project modules, and project-owned documentation, but it must not\nmove framework behavior into the customer repository. A customer extension such\nas `kickoff.platform` may customize Platform implementation while the\nbusiness-facing functional identity remains `nodics.platform`.\n\nRuntime composition and code dependency are related but different. Package\ndependencies make framework modules available to the project. Server\nconfiguration decides which modules are loaded, in which order, for a specific\nruntime process. Service override behavior follows module loading and indexes,\nnot simply the order in `package.json`.\n\n```mermaid\nflowchart LR\n  FrameworkRoot[\"Framework checkout<br/>nodics.ai\"] --> Core[\"nodics.foundation\"]\n  FrameworkRoot --> Platform[\"nodics.platform\"]\n  FrameworkRoot --> WCMS[\"nodics.wcms\"]\n  FrameworkRoot --> Cron[\"nodics.process\"]\n  Core --> Project[\"nodics.kickoff<br/>reference customer project\"]\n  Platform --> Project\n  WCMS --> Project\n  Cron --> Project\n  Project --> Servers[\"kickoffLocal servers<br/>platformServer, wcmsStagedServer, wcmsOnlineServer, processServer\"]\n  Servers --> Axis[\"nodics.axis<br/>frontend renderer\"]\n```\n\nThis diagram is intentionally simple. Kickoff does not own the framework\nmodules and Axis does not own backend data. Kickoff composes the backend\nruntime, and Axis renders whatever Platform/WCMS say is active, authorized,\nand available.\n\n## First customization promise\n\nA beginner should be able to make a first safe customization without fear.\nGood first customizations are intentionally small:\n\n- change a local property in the correct environment or server file;\n- add or update a Kickoff documentation page;\n- add a project-only service in a Kickoff module;\n- add project sample data that belongs to the customer project;\n- change WCMS-managed content through Axis after import.\n\nBad first customizations are also easy to name:\n\n- editing `nodics.foundation` because a project-specific rule is needed;\n- putting CMS import data into `nodics.axis`;\n- changing generated files without changing their source;\n- changing a standard functional module identity because a project customized\n  implementation;\n- hiding a status, error code, permission, or lifecycle state in an unrelated\n  property file.\n\nKickoff exists to teach the safe path first.\n\n## Beginner story\n\nA new developer can think of Kickoff as a training project:\n\n1. It shows where a customer project keeps project modules.\n2. It shows where local environment/server configuration lives.\n3. It shows how to point at a framework checkout that may live anywhere on the\n   machine.\n4. It starts Platform, WCMS, and the composed Process and Automation runtime\n   without asking the developer to create a production topology first.\n5. It ships project-owned documentation so Axis can show framework docs,\n   Axis docs, and customer-project docs side by side.\n\nAfter the developer understands this reference shape, they can create a real\ncustomer project with the same rules but different business modules, branding,\ndata, environments, and deployment choices.\n\n## First successful setup journey\n\nOn a fresh schema, do not start by importing accelerator data in isolation.\nThe user journey is intentionally ordered so Axis, module lifecycle, content\npacks, and Online delivery all agree.\n\n```mermaid\nflowchart LR\n  Axis[\"Initialize Axis baseline\"]\n  Modules[\"Register required capabilities\"]\n  Apps[\"Initialize Nexus and Agora packs\"]\n  Publish[\"Approve and publish Online\"]\n  Storefront[\"Open Nexus or Agora\"]\n  Docs[\"Import documentation packs\"]\n  Swagger[\"Open Swagger/OpenAPI\"]\n\n  Axis --> Modules --> Apps --> Publish --> Storefront\n  Axis -. parallel .-> Docs\n  Axis -. generated .-> Swagger\n```\n\n| Step | What the user does in Axis | Why it comes here |\n| --- | --- | --- |\n| 1. Initialize Axis baseline | Complete the empty-database Axis setup so the managed BackOffice workspace, CMS baseline, and admin access are available. | Without Axis baseline, there is no reliable control plane for guided setup. |\n| 2. Register capabilities | Open Module Registry and register/activate the capabilities required by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when those features are enabled. | A running server or visible import pack is not enough. The project must declare the capability as registered and active. |\n| 3. Initialize applications | Open Setup and Accelerators and initialize Nexus, Agora Apparel, Agora Electronics, or Agora Telco. | Application initialization imports the complete site preparation package: CMS pages, routes, navigation, media metadata, media artifacts, commerce catalog data, and operational data owned by the pack. |\n| 4. Publish Online | Review publishable Staged changes, approve through the governed task, and publish to Online. | Public applications consume Online only. Until Online has approved content, they show a customer-friendly maintenance state. |\n| 5. Verify in browser | Open Nexus and Agora storefronts and confirm the expected Online content, media, navigation, and business data appear. | Browser verification proves the same path a customer sees, not only backend import success. |\n\nDocumentation packs follow the same Staged-to-Online governance, but they do\nnot block application setup. They can be imported and approved in parallel.\nSwagger/OpenAPI is generated from the active runtime contracts and should stay\navailable independently of CMS documentation publication.\n\n## Documentation boundary\n\nKickoff docs are imported through WCMS like any other governed CMS content\npack. Axis renders the resolved CMS page and does not own the documentation\nrecords. The BackOffice registry exposes the documentation source so the Axis\nDocumentation dashboard can discover it.\n\n## Common mistakes\n\n- Do not put framework documentation in Kickoff unless the page is explaining\n  how Kickoff consumes the framework.\n- Do not copy `nodics.foundation`, `nodics.platform`, `nodics.wcms`, or `nodics.process`\n  source into this repository.\n- Do not move Axis renderers or browser code into Kickoff.\n- Do not assume a customer project will always sit beside `nodics.ai`; use the\n  framework-root configuration.\n- Do not change generated content-pack files without regenerating from source.\n- Do not rename functional capabilities when a customer module only customizes\n  their implementation.\n\n## How to know Kickoff is working\n\nKickoff is healthy when Platform starts, WCMS starts, the module registry shows\nmandatory functional modules as active, optional modules can be registered\nthrough Axis, documentation content packs can be imported or updated through\nBackOffice/WCMS, Setup and Accelerators blocks applications whose required\nbusiness capabilities are not registered, and Axis can render Framework,\nSwaggers, Nodics Axis, and Nodics Kickoff documentation from backend-owned\nsources.\n\n## Verification\n\nVerify Kickoff as a reference customer project by proving that it can run the\nframework without becoming framework source. The local proof is to configure\nthe framework root, install dependencies, start the six backend runtimes plus\nAxis, Nexus, and Agora, log in, initialize the Axis baseline, register required\nbusiness capabilities, import required data releases, publish to Online, open\nthe Kickoff documentation product, and verify Agora's multi-domain storefront. The project\nshould contribute its own docs and sample behavior while framework docs still\ncome from `nodics.docs` and Axis product docs still come from the Platform Axis\nbackend module.\n\nFor repository verification, run the Kickoff documentation contract test,\nruntime prepare tests, and local acceptance script when project behavior,\nenvironment/server configuration, documentation packs, or generated data\nchange. If a future customer copies the reference project, the docs should\nteach them where to replace the project name and where not to create\nframework-level assumptions.\n\n## What to read next\n\nRead Kickoff in this order:\n\n1. **Local runtime topology** to understand which servers start and why.\n2. **Local acceptance checklist** to prove the environment from a fresh local\n   database.\n3. **Customer customization guide** to learn how to change behavior without\n   damaging framework ownership.\n4. Framework documentation for Core, Platform, WCMS, Cron, imports, and DevOps\n   once the local system is running.\n\n## Continue\n\n- [Local runtime topology](local-runtime.md)\n- [Customer customization guide](customization-guide.md)\n",
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
        "wordCount": 2246,
        "checksum": "5e0ca1bbb6a6e1905f398b6b1394b121710619f80331630c217a5837e37a2927"
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
      "group": "run-kickoff-locally",
      "groupTitle": "Run Kickoff Locally",
      "parentId": "run-kickoff-locally",
      "hierarchyPath": [
        "Run Kickoff Locally",
        "Local runtime topology"
      ],
      "hierarchyDepth": 2,
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
        "kickoff.deployment-qualification",
        "kickoff.local-setup-to-live"
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
          "text": "Optional capabilities and failures",
          "anchor": "kickoffLocalRuntime-3-optional-capabilities-and-failures",
          "level": 2
        },
        {
          "text": "Start locally",
          "anchor": "kickoffLocalRuntime-4-start-locally",
          "level": 2
        },
        {
          "text": "Before starting",
          "anchor": "kickoffLocalRuntime-5-before-starting",
          "level": 2
        },
        {
          "text": "Start sequence",
          "anchor": "kickoffLocalRuntime-6-start-sequence",
          "level": 2
        },
        {
          "text": "Login and first checks",
          "anchor": "kickoffLocalRuntime-7-login-and-first-checks",
          "level": 2
        },
        {
          "text": "Fresh environment setup order",
          "anchor": "kickoffLocalRuntime-8-fresh-environment-setup-order",
          "level": 2
        },
        {
          "text": "Documentation import",
          "anchor": "kickoffLocalRuntime-9-documentation-import",
          "level": 2
        },
        {
          "text": "Troubleshooting",
          "anchor": "kickoffLocalRuntime-10-troubleshooting",
          "level": 2
        },
        {
          "text": "Production note",
          "anchor": "kickoffLocalRuntime-11-production-note",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffLocalRuntime-12-common-mistakes",
          "level": 2
        },
        {
          "text": "Verification",
          "anchor": "kickoffLocalRuntime-13-verification",
          "level": 2
        },
        {
          "text": "Continue",
          "anchor": "kickoffLocalRuntime-14-continue",
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
            "`wasteServer` starts the isolated Waste Management runtime. It loads `nodics.waste`, the Waste accelerator umbrella, `eWaste`, and the Circa application module while keeping Loyalty, Location, vendor, recycler, and logistics integrations in their owning layers."
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
          "text": "Optional capabilities and failures",
          "anchor": "kickoffLocalRuntime-3-optional-capabilities-and-failures"
        },
        {
          "kind": "paragraph",
          "text": "The reference configuration no longer makes Location a prerequisite for all Waste activation or startup, and it does not impose a Commerce/Discovery activation gate on the Accelerators umbrella. Concrete domain dependencies and required reference validation still apply. Activate only the business capabilities selected for the project through the existing Module Registry."
        },
        {
          "kind": "paragraph",
          "text": "Foundation, Platform and WCMS remain protected functional roots. Process and Localization are optional; existing registered/enabled state is preserved when upgrading their metadata. No reset or automatic deactivation is performed."
        },
        {
          "kind": "paragraph",
          "text": "After a successful supervised launch, a runtime exit leaves its peers running. Inspect `npm run topology:status` and the affected log. Its existing `start:*` command can restore it independently in an operator-owned terminal. Stop that independent process explicitly before restarting the full supervised topology. Startup errors still fail the requested launch. These behaviors use the existing environment profile, module metadata and framework supervisor, not another configuration layer."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start locally",
          "anchor": "kickoffLocalRuntime-4-start-locally"
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
          "text": "Alternatively, the governed supervisor starts the selected backends in dependency order. Do not combine this with already running individual servers:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:start"
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
          "text": "Start frontends independently with `npm run dev` in their own repositories, wherever they are located. Backend topology does not discover, start, stop or qualify frontend processes. Follow each frontend's own test and browser guidance."
        },
        {
          "kind": "paragraph",
          "text": "Continue with [Local setup to live](local-setup-to-live-runbook.md) for the administrator journey, then [Local acceptance](local-acceptance-checklist.md) for developer and QA verification. These source guides are usable before any documentation pack is installed."
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
            "Agora Apparel: `http://localhost:3300`",
            "Agora Electronics: `http://localhost:3400`",
            "Agora Telco: `http://localhost:3500`",
            "Circa eWaste: `http://localhost:3600`",
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
          "anchor": "kickoffLocalRuntime-5-before-starting"
        },
        {
          "kind": "paragraph",
          "text": "Review `config/properties.js` and the selected `envs/<environment>/config` layers before starting. Kickoff keeps local configuration in Nodics layered properties, not in project-owned `.env` files. Server startup should use the selected environment and fail only when a property required for safe boot is missing."
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
          "text": "Kickoff does not copy or symlink framework modules into `.nodics/`. Project scripts call `nodics`, installed from the declared `nodics.foundation` dependency. Its framework-owned entry point delegates to the existing command registry and runtime resolver. The project no longer owns a JavaScript dispatcher. For example, `npm exec -- nodics start --env kickoffLocal --server platform` selects a server directly. `npm exec -- nodics build --env kickoffLocal --server platform` generates that server's shared artifacts. Add `--node <name>` to select a declared node without creating node-owned output. Clean/build require a selected server."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start sequence",
          "anchor": "kickoffLocalRuntime-6-start-sequence"
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
            "Start Waste Management when waste submission, acceptance, receipt, impact, or Waste accelerator data is being tested. Its local initialization profile installs `eWaste:core-reference` followed by `circa.ewaste:waste-policy`.",
            "Start Axis, Nexus, and Agora after backend servers are reachable. Each frontend uses only its governed backend contracts and configured CORS origin."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Login and first checks",
          "anchor": "kickoffLocalRuntime-7-login-and-first-checks"
        },
        {
          "kind": "paragraph",
          "text": "Open Axis at `http://localhost:3100`. For the local reference data, use:"
        },
        {
          "kind": "code",
          "language": "text",
          "text": "Enterprise: default\nLogin ID: admin\nPassword: configured bootstrap administrator password"
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
          "anchor": "kickoffLocalRuntime-8-fresh-environment-setup-order"
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
          "anchor": "kickoffLocalRuntime-9-documentation-import"
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
          "anchor": "kickoffLocalRuntime-10-troubleshooting"
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
          "anchor": "kickoffLocalRuntime-11-production-note"
        },
        {
          "kind": "paragraph",
          "text": "The local topology teaches ownership, not final infrastructure. Production may run modules in separate processes, hosts, containers, or release units. That does not change documentation ownership, module identity, API authority, or the rule that Axis discovers runtime capability from BackOffice instead of keeping its own endpoint registry."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffLocalRuntime-12-common-mistakes"
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
          "anchor": "kickoffLocalRuntime-13-verification"
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
          "text": "`test:waste-overlay` proves the Circa-owned Waste policy data contract. `test:waste-runtime` proves the server composition, initialization profile, and active modules. `acceptance:waste-management` installs the schema-driven accelerator and application policy releases, validates persisted records, and runs the generic acceptance, submission, lifecycle, and impact journey."
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
          "anchor": "kickoffLocalRuntime-14-continue"
        },
        {
          "kind": "unordered-list",
          "items": [
            "[Kickoff project overview](project-overview.md)",
            "[Customer customization guide](customization-guide.md)"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Frontend startup and verification are independent. Run `npm run dev` and `npm test` inside each frontend application. Backend topology and API acceptance do not start frontend servers or wait for their health."
        },
        {
          "kind": "paragraph",
          "text": "Process runtime identity explicitly includes CMS for the governed publication decision callback. Platform routes the operational Commerce reference activation release to Commerce, matching its COMMERCE destination; Staged remains the product authoring destination. These are Local deployment bindings, not new module defaults."
        }
      ],
      "searchText": "Local runtime topology Start and reason about the local Platform, WCMS, and Process servers that make the reference project usable. # Local Runtime Topology\n\nKickoff provides a local reference topology so a developer can start Nodics and\nsee the major runtime surfaces without creating a new customer project first.\nThe local environment is `kickoffLocal`.\n\n## What this is\n\nThe local runtime topology is the smallest practical Nodics deployment on a\ndeveloper machine. It runs the framework as real backend servers, not as mocked\nscreens. That is important because Axis, BackOffice, module registration,\ncontent-pack import, API contracts, authentication, and WCMS routing all depend\non backend authority.\n\nThe goal is not to teach every production option on day one. The goal is to\ngive a beginner a reliable local loop: configure framework location, install\ndependencies, start servers, log in, import/update data, and observe the\nruntime from Axis.\n\n| Runtime part | Business purpose | Developer/operator responsibility |\n| --- | --- | --- |\n| Platform | Employee login, BackOffice bootstrap, module registry, and API discovery | Start first, verify Profile and BackOffice are reachable, and keep tokens out of logs |\n| WCMS Staged and Online | Governed content, media, documentation, and public delivery | Keep Staged authoring separate from Online delivery and import content packs through governance |\n| Process and Automation | Workflow, cronjob, scheduled capability, and recovery evidence | Start when process or scheduled behavior is being tested and avoid duplicate scheduler authority |\n| Waste Management | Generic waste submission, collection acceptance, verification, receipt, impact, and accelerator/project presets | Keep Waste separate from Loyalty and Location, and load project overlays after scenario accelerator data |\n| Axis | Employee control plane for setup, import, documentation, and operations | Point to the correct Platform URL and verify only authorized capabilities appear |\n| Nexus and Agora accelerators | Public/customer-facing proof of Online delivery | Consume Online and customer-safe APIs only, never Staged or internal operations |\n\n## Servers\n\nThe current local topology uses separate runtime servers:\n\n- `platformServer` starts the Platform runtime. It loads Core, Platform,\n  Profile, BackOffice, the Platform `axis` backend module, and Kickoff project\n  modules.\n- `wcmsStagedServer` starts the WCMS Staged runtime. It loads Core, WCMS, CMS,\n  Media, and Kickoff content-pack modules for authoring, import, review, and\n  publication-source behavior.\n- `wcmsOnlineServer` starts the WCMS Online runtime. It loads the approved\n  delivery boundary for public CMS, media, Nexus, and Agora consumption.\n- `processServer` starts the combined Business Process & Automation runtime.\n  It loads Core, Process, cronjob, workflow modules, and Kickoff project\n  modules. The `workflow` module owns process/workflow definitions; the\n  `cronjob` module owns job definitions, triggers, scheduler state, and\n  execution lifecycle.\n- `wasteServer` starts the isolated Waste Management runtime. It loads\n  `nodics.waste`, the Waste accelerator umbrella, `eWaste`, and the\n  Circa application module while keeping Loyalty, Location, vendor, recycler,\n  and logistics integrations in their owning layers.\n\nKickoff intentionally has no standalone cronjob server. Scheduled automation is\navailable only through `processServer`, preventing accidental duplicate\nscheduler processes while cronjob retains ownership of its job lifecycle.\n\nAxis, Nexus, and Agora are separate frontend applications grouped locally by\nthe optional `nodics.exp` workspace. `nodics.exp` owns frontend discovery and\ntooling only; each application still owns its own source, release, tests, and\nruntime behavior. Axis connects to Platform for employee authentication and\nBackOffice bootstrap. Nexus consumes WCMS Online and Engagement public delivery\ncontracts. Agora consumes Platform, WCMS Online, Engagement, and Commerce\ncustomer contracts.\n\n## Optional capabilities and failures\n\nThe reference configuration no longer makes Location a prerequisite for all\nWaste activation or startup, and it does not impose a Commerce/Discovery\nactivation gate on the Accelerators umbrella. Concrete domain dependencies and\nrequired reference validation still apply. Activate only the business\ncapabilities selected for the project through the existing Module Registry.\n\nFoundation, Platform and WCMS remain protected functional roots. Process and\nLocalization are optional; existing registered/enabled state is preserved when\nupgrading their metadata. No reset or automatic deactivation is performed.\n\nAfter a successful supervised launch, a runtime exit leaves its peers running.\nInspect `npm run topology:status` and the affected log. Its existing `start:*`\ncommand can restore it independently in an operator-owned terminal. Stop that\nindependent process explicitly before restarting the full supervised topology.\nStartup errors still fail the requested launch. These behaviors use the existing\nenvironment profile, module metadata and framework supervisor, not another\nconfiguration layer.\n\n## Start locally\n\nUse separate terminals from the Kickoff repository:\n\n```bash\nnpm run start:platform\nnpm run start:wcms:staged\nnpm run start:wcms:online\nnpm run start:process\n```\n\nAlternatively, the governed supervisor starts the selected backends in\ndependency order. Do not combine this with already running individual servers:\n\n```bash\nnpm run topology:start\n```\n\nIn the preferred local checkout, frontend applications live under\n`../nodics.exp/`:\n\n```text\nnodicsRoot/\n├── nodics.ai/\n├── nodics.kickoff/\n└── nodics.exp/\n    ├── nodics.axis/\n    ├── nodics.nexus/\n    └── nodics.agora.apparel/\n```\n\nStart frontends independently with `npm run dev` in their own repositories,\nwherever they are located. Backend topology does not discover, start, stop or\nqualify frontend processes. Follow each frontend's own test and browser guidance.\n\nContinue with [Local setup to live](local-setup-to-live-runbook.md) for the\nadministrator journey, then [Local acceptance](local-acceptance-checklist.md)\nfor developer and QA verification. These source guides are usable before any\ndocumentation pack is installed.\n\nThe default local ports are:\n\n- Axis: `http://localhost:3100`\n- Nexus: `http://localhost:3200`\n- Agora Apparel: `http://localhost:3300`\n- Agora Electronics: `http://localhost:3400`\n- Agora Telco: `http://localhost:3500`\n- Circa eWaste: `http://localhost:3600`\n- Platform: `http://localhost:4300`\n- WCMS Staged: `http://localhost:4312`\n- WCMS Online: `http://localhost:4314`\n- Process and Automation: `http://localhost:4330`\n- Engagement: `http://localhost:4340`\n- Commerce: `http://localhost:4350`\n- Waste Management: `http://localhost:4370`\n\n## Before starting\n\nReview `config/properties.js` and the selected `envs/<environment>/config`\nlayers before starting. Kickoff keeps local configuration in Nodics layered\nproperties, not in project-owned `.env` files. Server startup should use the\nselected environment and fail only when a property required for safe boot is\nmissing.\n\nThen install project dependencies:\n\n```bash\nnpm install\n```\n\nKickoff does not copy or symlink framework modules into `.nodics/`. Project\nscripts call `nodics`, installed from the declared `nodics.foundation` dependency.\nIts framework-owned entry point delegates to the existing command registry and\nruntime resolver. The project no longer owns a JavaScript dispatcher.\nFor example, `npm exec -- nodics start --env kickoffLocal --server platform`\nselects a server directly. `npm exec -- nodics build --env kickoffLocal --server platform`\ngenerates that server's shared artifacts. Add `--node <name>` to select a declared\nnode without creating node-owned output. Clean/build require a selected server.\n\n## Start sequence\n\nUse separate terminals so logs stay readable:\n\n1. Start Platform first. It owns Profile login, BackOffice bootstrap, module\n   registry, runtime catalogue projection, and OpenAPI contract discovery.\n2. Start WCMS second. It owns documentation sites, catalogs, pages, components,\n   routes, media metadata, and content delivery.\n3. Start Process and Automation when process/workflow or scheduled behavior is\n   needed. It proves `workflow` and `cronjob` can share one runtime environment\n   under `nodics.process` while keeping separate module ownership.\n4. Start Waste Management when waste submission, acceptance, receipt, impact,\n   or Waste accelerator data is being tested. Its local initialization profile\n   installs `eWaste:core-reference` followed by\n   `circa.ewaste:waste-policy`.\n5. Start Axis, Nexus, and Agora after backend servers are reachable. Each\n   frontend uses only its governed backend contracts and configured CORS origin.\n\n## Login and first checks\n\nOpen Axis at `http://localhost:3100`. For the local reference data, use:\n\n```text\nEnterprise: default\nLogin ID: admin\nPassword: configured bootstrap administrator password\n```\n\nAfter login:\n\n- open the System and Integrations area and check the module registry;\n- confirm Core, Platform, and WCMS are active and not treated as optional;\n- register and activate required business capabilities before initializing a\n  customer-facing application: Agora requires Commerce and Discovery; Nexus\n  requires its public content and engagement capabilities when those features\n  are enabled;\n- if Process and Automation is running, confirm Process appears from the\n  composed runtime and exposes both `workflow` and `cronjob` capabilities;\n- open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics\n  Kickoff are shown as separate documentation products;\n- import or update documentation packs only through the authorized Axis action.\n\n## Fresh environment setup order\n\nA fresh local schema is ready only after four governed lanes are complete.\nDo not treat a successful import button as proof that a storefront is ready;\nthe setup page must also show required capabilities, publication state, and\nOnline readiness.\n\n| Order | Axis workspace | What must happen | User-visible result |\n| ---: | --- | --- | --- |\n| 1 | Empty-database Axis setup | Initialize the managed Axis baseline, BackOffice workspace, CMS baseline, admin access, and required core data. | Axis leaves recovery mode and exposes authorized navigation. |\n| 2 | Module Registry | Register and activate functional capabilities needed by the target application. Agora requires Commerce and Discovery; Nexus requires its public content and engagement capabilities when enabled. | Setup and Accelerators no longer shows a capability-blocked state for that application. |\n| 3 | Setup and Accelerators | Initialize Nexus or Agora application packs. A complete pack imports CMS content, routes, navigation, media metadata, media artifacts, commerce data, search/discovery data, and operational data owned by that application. | The application row shows initialized Staged data and the next publishing action. |\n| 4 | Publishing and approval | Request approval, review evidence, approve or reject, and publish the approved release to Online. | Nexus and Agora can render Online content; otherwise they show the maintenance page. |\n\nDocumentation packs are independent from accelerator setup. Framework, Axis,\nand Kickoff documentation can be imported, reviewed, and published in parallel\nwith application setup. Swagger/OpenAPI is generated from active runtime\ncontracts and should not be hidden behind documentation content-pack approval.\n\n## Documentation import\n\nProject documentation is generated into a Kickoff content pack and imported\nthrough WCMS. The pack code is `kickoffDocumentation`; the CMS Site is\n`kickoffDocumentationSite`; the default route is `/docs/nodics-kickoff`.\n\nIf the documentation page is unavailable in Axis, check that WCMS is running,\nthe content pack is generated, and the latest pack version has been imported.\nThe content-pack service rejects changed content with the same immutable\nversion, so update the catalogue version whenever generated hashes change.\n\n## Troubleshooting\n\nIf Axis shows a BackOffice registry recovery page, Platform is not reachable,\nthe Platform port is wrong, or Axis public configuration points at the wrong\nbase URL. If Axis logs in but documentation routes show CMS recovery, WCMS may\nnot be running, the documentation source may not be registered, or the content\npack may not be imported. If an optional module appears only after refresh,\ncheck the module registry API response after each lifecycle operation before\nassuming the frontend state is wrong.\n\nIf Nodics scripts cannot locate framework packages, check `NODICS_FRAMEWORK_ROOT`\nand confirm the configured directory contains `nodics.foundation`,\n`nodics.platform`, `nodics.wcms`, and any optional framework modules used by the\nlocal server.\n\n## Production note\n\nThe local topology teaches ownership, not final infrastructure. Production may\nrun modules in separate processes, hosts, containers, or release units. That\ndoes not change documentation ownership, module identity, API authority, or the\nrule that Axis discovers runtime capability from BackOffice instead of keeping\nits own endpoint registry.\n\n## Common mistakes\n\n- Starting only the frontend and assuming backend discovery should work.\n- Putting long inherited property blocks into a server config when the project\n  only needs a small override.\n- Assuming every framework module in the checkout is active for every server.\n  The configured runtime graph decides what loads.\n- Treating Cron as owned by Process just because the reference workspace can\n  run both in the same `processServer`.\n- Using local ports, database names, or project names as permanent framework\n  assumptions.\n- Forgetting that restart should preserve persisted registry and imported\n  content state.\n\n## Verification\n\nUse these focused checks when changing Waste composition:\n\n```bash\nnpm run test:waste-overlay\nnpm run test:waste-runtime\nnpm run acceptance:waste-management\n```\n\n`test:waste-overlay` proves the Circa-owned Waste policy data\ncontract. `test:waste-runtime` proves the server composition, initialization\nprofile, and active modules. `acceptance:waste-management` installs the\nschema-driven accelerator and application policy releases, validates persisted\nrecords, and runs the generic acceptance, submission, lifecycle, and impact\njourney.\n\nThe final pre-Builder gate must use a fresh Local database and qualify all nine\nruntimes together: Platform, WCMS Staged, WCMS Online, Process, Engagement,\nCommerce, Waste Management, Axis, Nexus, and Agora. Verify the topology from\nthe customer project, not from framework internals. Platform should expose login,\nBackOffice bootstrap, registry, and API discovery. WCMS should expose content,\ndocumentation, media, and import/export delivery. Process and Automation should\nreport Process runtime availability with workflow and cronjob technical modules\nfrom the composed server.\nAxis should connect through Platform and WCMS instead of local hardcoded module\nstate.\n\nFor a beginner-friendly proof, open Axis after the servers start and inspect\nDashboard, System and Integrations, Module Registry, Imports and Exports,\nContent and Experience, Media, Business Process & Automation, and\nDocumentation. The UI should explain the same topology that the server\nconfiguration declares.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Customer customization guide](customization-guide.md)\n\nFrontend startup and verification are independent. Run `npm run dev` and `npm test`\ninside each frontend application. Backend topology and API acceptance do not start\nfrontend servers or wait for their health.\n\nProcess runtime identity explicitly includes CMS for the governed publication\ndecision callback. Platform routes the operational Commerce reference activation\nrelease to Commerce, matching its COMMERCE destination; Staged remains the product\nauthoring destination. These are Local deployment bindings, not new module defaults.\n",
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
        "wordCount": 2121,
        "checksum": "cb63fbaec31249035efa34d5ef2e1fad8a03f0521b9b6a425f97bf4ae2abefed"
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
      "group": "run-kickoff-locally",
      "groupTitle": "Run Kickoff Locally",
      "parentId": "run-kickoff-locally",
      "hierarchyPath": [
        "Run Kickoff Locally",
        "Local setup to live runbook"
      ],
      "hierarchyDepth": 2,
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
          "text": "Start here for the administrator and new-developer screen journey. Use the [Local acceptance checklist](local-acceptance-checklist.md) for prerequisites, non-live checks, mutation warnings and sign-off. Backend developers can first read [Local runtime](local-runtime.md); operators use [Local publishing operations](local-publishing-operations.md) for recovery."
        },
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
          "text": "npm ci\nnpm run nodics:project:validate"
        },
        {
          "kind": "paragraph",
          "text": "Review Kickoff package dependencies and layered configuration, then confirm they resolve the intended framework checkout and local runtime values."
        },
        {
          "kind": "paragraph",
          "text": "Run frontend setup from each frontend repository that will be opened:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "cd ../nodics.exp/nodics.axis\nnpm ci"
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
          "text": "From `nodics.kickoff`, start the selected local backends:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:start"
        },
        {
          "kind": "paragraph",
          "text": "This starts backend runtimes in dependency-aware order. It does not start frontends. Run `npm run dev` separately inside Axis and each selected frontend repository; use those repositories' own verification instructions. Backend topology status and stop apply only to the owned backend processes."
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
              "Agora Electronics",
              "`http://localhost:3400`",
              "Electronics storefront."
            ],
            [
              "Agora Telco",
              "`http://localhost:3500`",
              "Telco storefront."
            ],
            [
              "Circa eWaste",
              "`http://localhost:3600`",
              "Guided eWaste submission and customer account."
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
          "text": "Username: admin\nPassword: configured bootstrap administrator password"
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
          "text": "Username: admin\nPassword: configured bootstrap administrator password"
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
          "text": "http://localhost:3300\nhttp://localhost:3400\nhttp://localhost:3500\nhttp://localhost:3600"
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
              "Check the Axis terminal and start it from its own repository; backend topology does not manage Axis."
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
          "text": "Before regenerating, review the catalogue version and content path. Stable release changes require a forward version and unused `core-vNNN` path. Do not overwrite old release bytes; reconcile uncertain installed receipt/publication history first. Then generate and validate the selected successor content pack:"
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
          "text": "Run these commands after changing this guide, screenshots, catalogue metadata, or setup behavior, after the release-identity review above:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run docs:generate\nnpm run docs:check\nnpm run nodics:project:validate"
        },
        {
          "kind": "paragraph",
          "text": "The local qualification contracts do not require live initialization:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run test:qualification"
        },
        {
          "kind": "paragraph",
          "text": "For authorized live initialization, follow the checklist's explicit `--execute --approve-publications` path. Do not run mutating acceptance simply because documentation changed."
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
        },
        {
          "kind": "paragraph",
          "text": "Frontend startup and verification are independent. Run `npm run dev` and `npm test` inside each frontend application. Backend topology and API acceptance do not start frontend servers or wait for their health."
        }
      ],
      "searchText": "Local setup to live runbook Follow the screenshot-guided path from local startup to Axis login, guided setup, publication, and live Nexus and Agora verification. # Local Setup to Live Runbook\n\nStart here for the administrator and new-developer screen journey. Use the\n[Local acceptance checklist](local-acceptance-checklist.md) for prerequisites,\nnon-live checks, mutation warnings and sign-off. Backend developers can first\nread [Local runtime](local-runtime.md); operators use\n[Local publishing operations](local-publishing-operations.md) for recovery.\n\nThis runbook is the new-user golden path for making the Nodics reference stack\nlive on a developer machine. It starts from a local checkout, opens Axis, signs\nin, follows the guided setup workspaces, publishes governed data to Online, and\nverifies Nexus and Agora in the browser.\n\nThe normal-path screenshots show the current local reference UI. The\nfirst-launch screenshots document the bundled recovery path from the current\nAxis component contract because this captured environment already had Axis\nbaseline data. Recapture those first-launch images from a clean schema during\nthe next fresh acceptance run.\n\nFor beginners, the safe mental model is: start the stack, sign in to Axis,\nfollow the highlighted backend-owned setup cards, approve publication, then\nopen the public applications. Business users should read the status and next\naction on each screen. Developers should use the file paths and commands when a\nstatus points to a configuration, release, or module problem. Operators should\nkeep the command output, screenshots, and browser checks as setup evidence.\n\n## What live means\n\nIn Nodics, live does not mean that a frontend server is running. A local setup\nis live when these conditions are true:\n\n| Area | Live condition |\n| --- | --- |\n| Backend topology | Platform, WCMS Staged, WCMS Online, Process, Engagement, Commerce, Axis, Nexus, and Agora are reachable on their local ports. |\n| Axis control plane | The admin can sign in and the dashboard shows runtime, module, release, publishing, and application readiness. |\n| Module foundation | Required modules are registered and active through backend-owned registry contracts. |\n| Release data | Init, core, and sample releases are current or intentionally skipped by policy. |\n| Application packs | Nexus and Agora accelerator packs have prepared Staged content and any required Commerce data. |\n| Publication | Publishable content has moved from Staged to Online through approval and audit evidence. |\n| Public verification | Nexus and Agora render Online content, navigation, media, and business data from backend contracts. |\n\n## Repository layout\n\nUse the reference layout unless your project already documents another one:\n\n```text\nnodicsRoot/\n  nodics.ai/\n  nodics.kickoff/\n  nodics.exp/\n    nodics.axis/\n    nodics.nexus/\n    nodics.agora.apparel/\n```\n\n`nodics.ai` is the framework checkout. `nodics.kickoff` is the reference\ncustomer project and owns the local runtime composition. `nodics.exp` groups\nfrontend applications. Axis is the employee BackOffice, Nexus is the corporate\nsite, and Agora is the commerce storefront.\n\n## Prepare the project\n\nRun the first setup from `nodics.kickoff`:\n\n```bash\nnpm ci\nnpm run nodics:project:validate\n```\n\nReview Kickoff package dependencies and layered configuration, then confirm\nthey resolve the intended framework checkout and local runtime values.\n\nRun frontend setup from each frontend repository that will be opened:\n\n```bash\ncd ../nodics.exp/nodics.axis\nnpm ci\n```\n\nRepeat dependency installation for Nexus and Agora when their local\nrepositories have not been installed yet.\n\n## Start the local stack\n\nFrom `nodics.kickoff`, start the selected local backends:\n\n```bash\nnpm run topology:start\n```\n\nThis starts backend runtimes in dependency-aware order. It does not start\nfrontends. Run `npm run dev` separately inside Axis and each selected frontend\nrepository; use those repositories' own verification instructions. Backend\ntopology status and stop apply only to the owned backend processes.\n\nUse this command from another terminal to inspect status:\n\n```bash\nnpm run topology:status\n```\n\nThe expected local URLs are:\n\n| Surface | URL | Purpose |\n| --- | --- | --- |\n| Axis | `http://localhost:3100` | Employee setup and operations workspace. |\n| Nexus | `http://localhost:3200` | Public corporate site using Online content. |\n| Agora Apparel | `http://localhost:3300` | Public storefront using Online content and Commerce data. |\n| Agora Electronics | `http://localhost:3400` | Electronics storefront. |\n| Agora Telco | `http://localhost:3500` | Telco storefront. |\n| Circa eWaste | `http://localhost:3600` | Guided eWaste submission and customer account. |\n| Platform | `http://localhost:4300` | Profile, BackOffice, registry, and bootstrap authority. |\n| WCMS Online | `http://localhost:4314` | Online public content runtime. |\n| Process | `http://localhost:4330` | Workflow, approval, and automation runtime. |\n| WCMS Staged | `http://localhost:4312` | Staged content authoring and import runtime. |\n| Engagement | `http://localhost:4340` | Contact, review, feedback, and communication runtime. |\n| Commerce | `http://localhost:4350` | Operational Commerce runtime. |\n| Commerce Staged | `http://localhost:4352` | Staged Commerce catalog and storefront preparation runtime. |\n\nStop only the topology owned by this checkout:\n\n```bash\nnpm run topology:stop\n```\n\n## First launch before Axis data exists\n\nOn a fresh schema, Axis may not show the managed CMS login immediately. This is\nexpected. Axis first falls back to a small bundled recovery login whose only\njob is to authenticate the bootstrap operator and move the managed Axis\nbaseline through the governed release flow.\n\n![Axis first-launch recovery login](../assets/images/local-setup/axis-first-launch-recovery-login.jpg \"Axis first-launch recovery login\")\n\nUse the local reference admin account:\n\n```text\nUsername: admin\nPassword: configured bootstrap administrator password\n```\n\nAfter login, if the Axis baseline is not Online yet, Axis opens the\ninitialization workspace instead of the normal dashboard.\n\n![Axis first-launch initialization](../assets/images/local-setup/axis-first-launch-initialize.jpg \"Axis first-launch initialization\")\n\nFollow this first-run path:\n\n1. Confirm the release chip points to the Axis baseline release.\n2. Click **Initialize and submit** to import the baseline into Staged and submit\n   the governed publication request.\n3. Click **Refresh status** until the workspace shows the approval-ready state.\n4. Open the publication details or Process approval task and review the release\n   checksum, entity counts, validation status, target site, catalog, workflow\n   reference, impact, and recovery guidance.\n5. Approve the publication so the managed Axis CMS baseline becomes Online.\n6. Refresh or reopen Axis and verify that the bundled recovery workspace has\n   retired.\n\nDo not skip this by writing Axis data directly to Online. The first launch\nstill follows the same Staged, Process approval, Online publication, and audit\nprinciples as other governed content.\n\n## Open Axis\n\nOpen Axis:\n\n```text\nhttp://localhost:3100\n```\n\nAfter the first-launch baseline is Online, or when the schema already has Axis\ndata, the first screen should be the managed employee login page.\n\n![Axis login](../assets/images/local-setup/axis-entry.jpg \"Axis login\")\n\nUse the local reference admin account:\n\n```text\nUsername: admin\nPassword: configured bootstrap administrator password\n```\n\nAfter login, Axis should land on the dashboard.\n\n![Axis dashboard](../assets/images/local-setup/axis-dashboard.jpg \"Axis dashboard\")\n\nUse the dashboard as the operator map:\n\n| Dashboard area | What to check |\n| --- | --- |\n| Next actions | Shows whether the next step is registry, data import, publication, or application verification. |\n| Application overview | Shows active modules, data readiness, Online-ready sources, routes, workbenches, and tenant. |\n| Release and publication cards | Show whether data is current, pending, blocked, or waiting for approval. |\n| Application cards | Show whether Nexus and Agora are Online-ready or still blocked. |\n\n## Register and activate modules\n\nOpen **System and Integrations -> Module Registry**, or navigate directly:\n\n```text\nhttp://localhost:3100/registry\n```\n\n![Module Registry](../assets/images/local-setup/module-registry.jpg \"Module Registry\")\n\nThe registry is not only a visual list. It is the backend-owned activation\nsurface for functional capabilities. A capability should be registered and\nactive before importing an application pack that depends on it.\n\nCheck these states:\n\n| Capability group | Expected local result |\n| --- | --- |\n| Core, Platform, WCMS | Registered and active. These are the foundation. |\n| Process and Automation | Active when workflow, approval, and cronjob behavior is needed. |\n| Commerce and Discovery | Active before Agora catalog and product search setup. |\n| Engagement | Active before contact, review, feedback, or communication journeys are verified. |\n\nIf an accelerator says setup is blocked, return to Module Registry and activate\nthe missing capability instead of forcing import data manually.\n\n## Install release data\n\nOpen **System and Integrations -> Import and Export Workspace**, or navigate\ndirectly:\n\n```text\nhttp://localhost:3100/operations/imports-exports\n```\n\n![Imports and exports](../assets/images/local-setup/imports-and-exports.jpg \"Imports and exports\")\n\nStart with **Guided setup**. Guided profiles are declared by backend runtimes\nunder `data.dataReleases.initializationProfiles`; Axis discovers and renders\nthem. Axis must not invent data authority or silently combine release lists.\n\nUse this order:\n\n| Guided profile | Why it matters |\n| --- | --- |\n| Local Platform foundation | Prepares login, profile, catalog, authorization, localization, and BackOffice data. |\n| Local WCMS foundation | Prepares Staged content runtime, CMS baseline, and publication preparation. |\n| Local Documentation foundation | Prepares WCMS prerequisites before documentation content packs are reviewed and published. |\n| Local Commerce foundation | Prepares operational Commerce services. |\n| Local Commerce Staged catalog foundation | Prepares Agora catalog, product, price, inventory, and search preview data. |\n| Local Process and Workflow foundation | Prepares approval and workflow definitions. |\n| Local Engagement foundation | Prepares communication and customer interaction data. |\n\nFor each profile:\n\n1. Read the label and description.\n2. Review the step list and release counts.\n3. Click **Validate plan**.\n4. If validation passes and releases are not current, click **Validate and initialize**.\n5. Refresh the workspace and confirm the profile becomes `CURRENT` or shows a\n   clear operator-friendly blocker.\n\nUse **Initialization data**, **Core data**, and **Sample data** only when an\nadministrator needs advanced release-level control.\n\n## Initialize applications\n\nOpen **Publishing -> Setup and Accelerators**, or navigate directly:\n\n```text\nhttp://localhost:3100/setup-accelerators\n```\n\n![Setup and Accelerators](../assets/images/local-setup/setup-accelerators.jpg \"Setup and Accelerators\")\n\nThis page prepares project accelerators such as Nexus and Agora. It should\nshow friendly status instead of raw technical exceptions.\n\n| Status | Meaning |\n| --- | --- |\n| Setup blocked | A required capability, content catalog, communication, or data foundation is missing. Fix the blocker first. |\n| Ready to initialize | Required capabilities are active and the pack can be prepared. |\n| Staged current | Staged data is installed at the expected version and checksum. |\n| Pending approval | Staged data is ready but not yet Online. |\n| Online ready | Online publication is available and public apps can render it. |\n\nInitialize Nexus and Agora only after their blockers are resolved. A complete\napplication pack may prepare CMS pages, routes, navigation, media records,\nphysical media artifacts, Commerce catalog data, search/discovery data, and\noperational data owned by that application.\n\n## Approve and publish\n\nOpen the approval queue:\n\n```text\nhttp://localhost:3100/process/tasks\n```\n\n![Process approval queue](../assets/images/local-setup/process-approval-queue.jpg \"Process approval queue\")\n\nReview the publication evidence before approving. Approval should explain what\nwill be visible Online, which source release is involved, and what rollback\nmeans if activation fails.\n\nOpen the Publishing dashboard:\n\n```text\nhttp://localhost:3100/publishing\n```\n\n![Publishing dashboard](../assets/images/local-setup/publishing.jpg \"Publishing dashboard\")\n\nPublishing is the only path from Staged content to Online content. Do not\nwrite directly into Online schema or Online media storage. If publication is\nblocked, fix the Staged data, approval task, workflow configuration, media\ndependency, or Online runtime readiness that the page reports.\n\n## Publish documentation\n\nOpen Documentation:\n\n```text\nhttp://localhost:3100/docs\n```\n\n![Documentation dashboard](../assets/images/local-setup/documentation-dashboard.jpg \"Documentation dashboard\")\n\nFramework, Axis, and Kickoff documentation are governed content packs. Import\nand approve them through Axis and Process. They should flow from Staged to\nOnline like other publishable content.\n\nOpen Swagger/OpenAPI:\n\n```text\nhttp://localhost:3100/docs/swaggers\n```\n\n![Swagger reference](../assets/images/local-setup/swagger-reference.jpg \"Swagger reference\")\n\nSwagger is different from documentation content packs. It is generated from\nlive runtime API contracts and should remain accessible when API sources are\navailable, even if documentation publication is still waiting for approval.\n\n## Verify Nexus\n\nOpen Nexus:\n\n```text\nhttp://localhost:3200\n```\n\n![Nexus Online](../assets/images/local-setup/nexus-online.jpg \"Nexus Online\")\n\nVerify:\n\n| Area | Evidence |\n| --- | --- |\n| Header and navigation | Links come from Online content and route contracts. |\n| Hero and content sections | Text, images, and components render from published content. |\n| Documentation links | Documentation routes open only when their packs are Online or intentionally available. |\n| No maintenance fallback | The app should not show setup or unpublished-content fallback after Online publication succeeds. |\n\n## Verify Agora Apparel\n\nOpen Agora:\n\n```text\nhttp://localhost:3300\nhttp://localhost:3400\nhttp://localhost:3500\nhttp://localhost:3600\n```\n\n![Agora Apparel Online](../assets/images/local-setup/agora-apparel-online.jpg \"Agora Apparel Online\")\n\nVerify:\n\n| Area | Evidence |\n| --- | --- |\n| Storefront home | Banner, category, and merchandising content render from Online/Staged-approved sources. |\n| Product catalog | Product, category, price, inventory, and image data are present. |\n| Search and discovery | Product search and filters return meaningful results. |\n| Media | Product and CMS images load through the media contract, not hardcoded frontend paths. |\n\n## Troubleshooting checkpoints\n\n| Symptom | Likely cause | Where to fix |\n| --- | --- | --- |\n| Axis login page does not open | Axis frontend is not running or `3100` is occupied. | Check the Axis terminal and start it from its own repository; backend topology does not manage Axis. |\n| Bundled recovery login appears every time | The managed Axis baseline is not Online, publication was not approved, or the CMS route did not load. | Use the first-launch initialization workspace, then check Process approval and WCMS Online readiness. |\n| Initialize Axis stays approval pending | The baseline import finished, but the governed Process task has not been approved or published. | Open `/process/tasks`, review the task, approve it, then refresh Axis. |\n| Login fails for local admin | Platform/Profile is unavailable or seed data is missing. | Check Platform server logs and guided Platform foundation data. |\n| Dashboard shows few modules | Module Registry has not activated optional capabilities. | Open `/registry` and activate required capabilities. |\n| Guided setup shows only one profile after config changes | Servers are still running old runtime configuration. | Restart the local topology and reload Axis. |\n| Accelerator setup is blocked | A required capability, catalog, communication, or release dependency is missing. | Read the friendly blocker, then fix registry or release data. |\n| Approval queue is empty | The pack is not initialized, workflow data is missing, or the task is already processed. | Check Setup and Accelerators, Process foundation, and Publishing dashboard. |\n| Nexus or Agora shows fallback content | Staged data was not approved/published to Online. | Publish through Process and verify WCMS Online readiness. |\n| Images are broken | Physical media assets did not import or publish with media records. | Check media import evidence, asset manifest, and Online media publication. |\n\n## Screenshot maintenance rule\n\nScreenshots are part of the onboarding contract. When the first-launch\nrecovery login, Initialize Axis workspace, managed login page, dashboard,\nregistry, imports, setup, publishing, documentation, Nexus, or Agora journey\nchanges materially, update the matching image under:\n\n```text\ndocs/assets/images/local-setup/\n```\n\nBefore regenerating, review the catalogue version and content path. Stable\nrelease changes require a forward version and unused `core-vNNN` path. Do not\noverwrite old release bytes; reconcile uncertain installed receipt/publication\nhistory first. Then generate and validate the selected successor content pack:\n\n```bash\nnpm run docs:generate\nnpm run docs:check\n```\n\nKeep screenshots focused on decision points. Do not add decorative images that\nhide the actual operator action, backend state, or public verification result.\n\n## Common mistakes\n\nAvoid these mistakes during a first local setup:\n\n- Opening Nexus or Agora first and assuming a running frontend means Online\n  data has been published.\n- Importing sample data before the required module capability is registered and\n  active.\n- Treating Axis as the data authority. Axis renders backend-owned profiles,\n  releases, approvals, and actions.\n- Restarting only the frontend after changing backend runtime profile\n  configuration.\n- Approving publication before reviewing the Staged source, version, media, and\n  target Online role.\n- Fixing broken images in the frontend instead of checking media import,\n  physical asset staging, media records, and Online media publication.\n- Hand-editing generated documentation records instead of changing the authored\n  markdown and regenerating the content pack.\n\n## Verification\n\nRun these commands after changing this guide, screenshots, catalogue metadata,\nor setup behavior, after the release-identity review above:\n\n```bash\nnpm run docs:generate\nnpm run docs:check\nnpm run nodics:project:validate\n```\n\nThe local qualification contracts do not require live initialization:\n\n```bash\nnpm run test:qualification\n```\n\nFor authorized live initialization, follow the checklist's explicit\n`--execute --approve-publications` path. Do not run mutating acceptance simply\nbecause documentation changed.\n\nBrowser verification should include the first-launch recovery login and\nInitialize Axis workspace on a fresh schema, then managed Axis login,\ndashboard, Module Registry, Imports and Exports, Setup and Accelerators,\nProcess approval queue, Publishing, Documentation, Swagger, Nexus, and Agora.\nCapture new screenshots when any of those screens changes materially.\n\n## Final proof\n\nA new user can call the local setup complete only after this evidence exists:\n\n1. `npm run topology:status` shows the owned local runtimes are reachable.\n2. On a fresh schema, bundled Axis recovery login opens and the Initialize Axis\n   workspace can submit the baseline.\n3. After baseline approval, managed Axis login works with the local admin.\n4. Dashboard, Module Registry, Imports and Exports, Setup and Accelerators,\n   Process tasks, Publishing, Documentation, and Swagger pages open.\n5. Required modules are active.\n6. Guided setup profiles are current or have a clear blocker.\n7. Application packs are Staged current or Online ready.\n8. Publication approvals have been processed.\n9. Nexus and Agora render public Online experiences in the browser.\n10. Media images load on public pages.\n11. Any remaining blocker has a friendly operator message and a developer owner.\n\nFrontend startup and verification are independent. Run `npm run dev` and `npm test`\ninside each frontend application. Backend topology and API acceptance do not start\nfrontend servers or wait for their health.\n",
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
        "wordCount": 2725,
        "checksum": "676143be48b647ea7135ea59d4f74f01202bad2626dc6b7d3dc375c3b8fa17c4"
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
      "group": "run-kickoff-locally",
      "groupTitle": "Run Kickoff Locally",
      "parentId": "run-kickoff-locally",
      "hierarchyPath": [
        "Run Kickoff Locally",
        "Local acceptance checklist"
      ],
      "hierarchyDepth": 2,
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
      "summary": "Verify Kickoff configuration, authorized Local initialization, publication and separate frontend journeys; distinguish static checks, live evidence and release gates.",
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
        "kickoff.functional-journeys",
        "kickoff.local-setup-to-live",
        "kickoff.configuration-inheritance",
        "kickoff.deployment-qualification"
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
        "checklist",
        "local validation",
        "developer onboarding",
        "QA",
        "setup verification"
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
          "text": "Choose your path",
          "anchor": "kickoffLocalAcceptance-1-choose-your-path",
          "level": 2
        },
        {
          "text": "Prerequisites and authority",
          "anchor": "kickoffLocalAcceptance-2-prerequisites-and-authority",
          "level": 2
        },
        {
          "text": "Verification without live mutation",
          "anchor": "kickoffLocalAcceptance-3-verification-without-live-mutation",
          "level": 2
        },
        {
          "text": "Start the selected local backends",
          "anchor": "kickoffLocalAcceptance-4-start-the-selected-local-backends",
          "level": 2
        },
        {
          "text": "Authorized initialization and publication",
          "anchor": "kickoffLocalAcceptance-5-authorized-initialization-and-publication",
          "level": 2
        },
        {
          "text": "Manual setup and browser verification",
          "anchor": "kickoffLocalAcceptance-6-manual-setup-and-browser-verification",
          "level": 2
        },
        {
          "text": "Record results and blockers",
          "anchor": "kickoffLocalAcceptance-7-record-results-and-blockers",
          "level": 2
        },
        {
          "text": "Common mistakes",
          "anchor": "kickoffLocalAcceptance-8-common-mistakes",
          "level": 2
        },
        {
          "text": "Sign-off and next step",
          "anchor": "kickoffLocalAcceptance-9-sign-off-and-next-step",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Use this page to verify the Kickoff reference customer project on a developer machine. It connects setup to evidence: configuration checks first, authorized backend initialization next, and frontend verification separately. It is not an executable test, a second definition of framework rules, or production approval."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Choose your path",
          "anchor": "kickoffLocalAcceptance-1-choose-your-path"
        },
        {
          "kind": "paragraph",
          "text": "For beginners, start with the setup runbook and return here for verification. Do not run every command at once: complete the non-live checks first, then ask the environment owner before selecting a mutating journey."
        },
        {
          "kind": "table",
          "headers": [
            "Audience",
            "Start here",
            "Continue when"
          ],
          "rows": [
            [
              "New developer or administrator",
              "[Local setup to live runbook](local-setup-to-live-runbook.md)",
              "The selected backends and independently started Axis frontend are reachable."
            ],
            [
              "Backend developer",
              "[Local runtime](local-runtime.md) and [configuration inheritance](configuration-inheritance.md)",
              "Project validation and configuration-only preparation pass."
            ],
            [
              "QA engineer",
              "This checklist, then [functional journeys](functional-journeys.md)",
              "Prerequisites are available and each result has scoped evidence."
            ],
            [
              "Operator",
              "[Local publishing operations](local-publishing-operations.md)",
              "Import, approval, Online delivery and recovery evidence are understood."
            ],
            [
              "Release owner or architect",
              "[Deployment qualification](deployment-qualification.md)",
              "Local results and outstanding external gates are recorded separately."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Read these source pages directly before any documentation pack is installed. After governed publication, open Axis Documentation, select Nodics Kickoff, then **Run Kickoff Locally > Local acceptance checklist**. Its catalogue group is Acceptance and Verification. Search for the page title, local validation, developer onboarding, QA, or setup verification. Related pages provide the same reading path in the published documentation; source links support repository readers without a running server."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Prerequisites and authority",
          "anchor": "kickoffLocalAcceptance-2-prerequisites-and-authority"
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart TD\n  Source[\"Read setup and verify configuration\"] --> Ready[\"Start selected backends\"]\n  Ready --> Review[\"Review scope and authorize live changes\"]\n  Review --> Init[\"Initialize through owner APIs\"]\n  Init --> Publish[\"Review and approve governed publication\"]\n  Publish --> API[\"Collect backend delivery evidence\"]\n  API --> Browser[\"Verify independently started frontends\"]\n  Browser --> Report[\"Record results and unresolved gates\"]\n  Report --> Release[\"Review deployment qualification plan\"]"
        },
        {
          "kind": "paragraph",
          "text": "Install the declared project dependencies with `npm ci` from this repository. Resolve the framework through the package dependency or supported explicit framework-root configuration. Project identity comes from `package.json.name`; environment and server choices come from their layered properties and package metadata. Do not create a separate project descriptor or copy framework checks."
        },
        {
          "kind": "paragraph",
          "text": "For live acceptance, provision the configured local providers and authorized bootstrap identity. Inspect the selected environment before executing anything that imports data, changes module lifecycle, approves a publication or resets state. Do not put credentials in this page or attach tokens to evidence."
        },
        {
          "kind": "paragraph",
          "text": "BackOffice owns bootstrap and capability discovery; nImport owns governed imports; CMS, Process and nPublish own publication; functional modules own their business APIs. Kickoff selects customer applications, fixtures and deployment coordinates. The commands below delegate to those framework owners."
        },
        {
          "kind": "paragraph",
          "text": "Backend validation needs neither a frontend checkout nor a frontend server. Browser validation additionally needs Axis and each selected application, installed and started in its own repository. Docker execution is a separate qualification activity, not part of this Local checklist."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification without live mutation",
          "anchor": "kickoffLocalAcceptance-3-verification-without-live-mutation"
        },
        {
          "kind": "paragraph",
          "text": "Run these from `nodics.kickoff` before starting a live acceptance journey:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run nodics:project:validate\nnpm run test:documentation\nnpm run test:qualification\nnpm run test:agora-commerce\nnpm run prepare:runtime"
        },
        {
          "kind": "paragraph",
          "text": "These check project adoption, generated documentation consistency, customer fixtures and configuration graphs. Runtime preparation does not launch servers or prove provider connectivity. Static container contracts in the qualification tests do not execute or qualify Docker. A passing test command is evidence only for the assertions it actually runs, not proof that every application works."
        },
        {
          "kind": "paragraph",
          "text": "If documentation source changed, review the catalogue version and content path before running `npm run docs:generate`, then rerun `npm run test:documentation`. Stable release changes require a forward version and unused `core-vNNN` path; never overwrite released bytes or repair generated CMS records by hand. Resolve uncertain installed receipt/publication history before selecting a successor. Source validation alone does not prove that updated pages are published Online."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start the selected local backends",
          "anchor": "kickoffLocalAcceptance-4-start-the-selected-local-backends"
        },
        {
          "kind": "paragraph",
          "text": "Inspect and start the owned topology from this repository:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run topology:preflight\nnpm run topology:start"
        },
        {
          "kind": "paragraph",
          "text": "Keep the supervisor terminal open. From another terminal use `npm run topology:status`; stop the owned backends with `npm run topology:stop`. Preflight and readiness output identify the effective runtime coordinates. Consult Local runtime for the reference ports rather than assuming a copied address matches a customized environment."
        },
        {
          "kind": "paragraph",
          "text": "Topology commands manage backends only. Start Axis and the required customer frontends separately with `npm run dev` in each frontend repository. Backend stop does not stop those frontend processes. Never kill an unrelated process merely because it occupies a configured port."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Authorized initialization and publication",
          "anchor": "kickoffLocalAcceptance-5-authorized-initialization-and-publication"
        },
        {
          "kind": "paragraph",
          "text": "Prefer retained-data acceptance when no reset is needed. The following command is **mutating**: it can initialize selected data and approve governed publications. Use it only with authorization for the selected isolated Local environment:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run acceptance:local -- --execute --approve-publications"
        },
        {
          "kind": "paragraph",
          "text": "The backends must already be running. To let the runner own their startup, supply `--start-runtimes`; it cleans up its own children unless `--leave-started` is also supplied. These flags do not start frontends."
        },
        {
          "kind": "paragraph",
          "text": "For the focused guided initialization journey, review its prerequisites and use:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run acceptance:guided-initialization -- --execute --approve-publications"
        },
        {
          "kind": "paragraph",
          "text": "Both commands use normal authorized owner APIs. Neither gives permission to bypass an unavailable approval task, manufacture publication evidence, grant missing privileges, write directly to Online, or access a database directly."
        },
        {
          "kind": "paragraph",
          "text": "A fresh run is optional and destructive to selected Local data. Review reset scope and recovery evidence, stop the existing owned backend topology, and confirm no other process is using its runtimes before invoking:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run acceptance:local:fresh -- --execute --approve-publications"
        },
        {
          "kind": "paragraph",
          "text": "The alias selects owned startup and the governed Platform Local reset. Never run it against shared development or production data. A failed authorization, readiness or reset receipt is a blocker, not permission for a database-shell workaround. Ordinary documentation edits never require a reset."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Manual setup and browser verification",
          "anchor": "kickoffLocalAcceptance-6-manual-setup-and-browser-verification"
        },
        {
          "kind": "paragraph",
          "text": "Follow the screenshot-guided setup runbook for the actual UI actions. This table defines the customer evidence to collect, not additional framework rules."
        },
        {
          "kind": "table",
          "headers": [
            "Check",
            "Required evidence"
          ],
          "rows": [
            [
              "Backend readiness",
              "Selected runtimes report ready through their own APIs."
            ],
            [
              "Axis first launch",
              "Authorized login works; a missing managed baseline is initialized and approved through the normal recovery workspace."
            ],
            [
              "Capability availability",
              "Required application capabilities are registered and active; blocked setup explains the missing owner prerequisite."
            ],
            [
              "Data readiness",
              "Selected module-owned releases report their expected installed version and checksum."
            ],
            [
              "Publication",
              "Staged validation, Process decision and Online receipt refer to the same release. Pending approval is not Online success."
            ],
            [
              "Documentation",
              "Kickoff pages are discoverable after pack publication; related pages open. Swagger remains an independent runtime API reference."
            ],
            [
              "Application delivery",
              "Selected Nexus, Agora or Circa journeys use their owning backend contracts; published routes, media and data are visible."
            ],
            [
              "Frontend behavior",
              "Each frontend passes its own checks and browser review; backend API success alone does not prove rendering or accessibility."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Do not mark an approval-pending workspace as complete just because import passed. Inspect the current task status, assignee, permissions and publication details. Follow Local publishing operations for supported recovery; do not reopen or replace workflow state through direct persistence changes."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Record results and blockers",
          "anchor": "kickoffLocalAcceptance-7-record-results-and-blockers"
        },
        {
          "kind": "paragraph",
          "text": "Record the date, repository commit and dirty-state identity, selected environment, command with secrets removed, exit status, relevant release/checksum receipts, and reviewer. Keep generated runtime reports under their existing ignored output locations and retain sanitized evidence in the release or issue system."
        },
        {
          "kind": "paragraph",
          "text": "Distinguish PASSED, FAILED, BLOCKED and NOT EXECUTED in the human report. A missing provider, permission, owner API, domain publication adapter or funded test wallet remains a named blocker. A test that reports partial acceptance is not full qualification, even if some requests succeeded. Resolve the owning prerequisite and rerun the affected gate before claiming completion."
        },
        {
          "kind": "paragraph",
          "text": "Historical extraction results are preserved separately in `docs/evidence/2026-09-28-acceptance-cleanup-history.md`. They are not a published setup page, current readiness evidence, or instructions for a new deployment."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes",
          "anchor": "kickoffLocalAcceptance-8-common-mistakes"
        },
        {
          "kind": "table",
          "headers": [
            "Symptom",
            "Check first",
            "Next action"
          ],
          "rows": [
            [
              "Configuration check fails",
              "Dependency resolution and selected environment",
              "Fix the owning project contribution before live execution."
            ],
            [
              "Backend port is busy",
              "Topology PID ownership and status",
              "Stop only a process you own; do not bypass admission checks."
            ],
            [
              "Axis does not open",
              "Axis frontend terminal",
              "Start Axis independently and verify its configured backend."
            ],
            [
              "Initialization is blocked",
              "Required capability, authorization and release state",
              "Resolve the owning prerequisite through governed APIs."
            ],
            [
              "Publication stays pending",
              "Process task state, assignee and decision permission",
              "Review publication details and follow supported workflow recovery."
            ],
            [
              "Checklist is absent in Axis",
              "Kickoff documentation import and Online receipt",
              "Read the repository page meanwhile; publish the selected pack normally."
            ]
          ]
        },
        {
          "kind": "unordered-list",
          "items": [
            "Treating generated documentation, a running frontend, or a passing unit test as proof of a completed live application journey.",
            "Assuming backend topology launches Axis or the storefronts.",
            "Running mutating acceptance or fresh reset as a routine documentation check.",
            "Approving content without reviewing the target, version, checksum and workflow.",
            "Editing immutable/generated data or bypassing owner APIs to clear a blocker.",
            "Copying historical results into a new release report without rerunning checks.",
            "Treating this project guide as the source of reusable framework rules."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Sign-off and next step",
          "anchor": "kickoffLocalAcceptance-9-sign-off-and-next-step"
        },
        {
          "kind": "paragraph",
          "text": "The developer and QA reviewer should be able to reproduce the selected journey, explain every blocked or omitted capability, and associate results with the same source and environment. The operator verifies the published release and recovery evidence. Business reviewers verify the intended application outcome, not merely a list of passing technical commands."
        },
        {
          "kind": "paragraph",
          "text": "Proceed to Deployment qualification for a non-mutating plan:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run qualification:deployment"
        },
        {
          "kind": "paragraph",
          "text": "Review that plan before opting into its live gates. Production security, performance, accessibility, real providers, backup/recovery and accountable-owner approval remain separate. Local completion never authorizes production by itself."
        }
      ],
      "searchText": "Local acceptance checklist Verify Kickoff configuration, authorized Local initialization, publication and separate frontend journeys; distinguish static checks, live evidence and release gates. # Local Acceptance Checklist\n\nUse this page to verify the Kickoff reference customer project on a developer\nmachine. It connects setup to evidence: configuration checks first, authorized\nbackend initialization next, and frontend verification separately. It is not an\nexecutable test, a second definition of framework rules, or production approval.\n\n## Choose your path\n\nFor beginners, start with the setup runbook and return here for verification.\nDo not run every command at once: complete the non-live checks first, then ask\nthe environment owner before selecting a mutating journey.\n\n| Audience | Start here | Continue when |\n| --- | --- | --- |\n| New developer or administrator | [Local setup to live runbook](local-setup-to-live-runbook.md) | The selected backends and independently started Axis frontend are reachable. |\n| Backend developer | [Local runtime](local-runtime.md) and [configuration inheritance](configuration-inheritance.md) | Project validation and configuration-only preparation pass. |\n| QA engineer | This checklist, then [functional journeys](functional-journeys.md) | Prerequisites are available and each result has scoped evidence. |\n| Operator | [Local publishing operations](local-publishing-operations.md) | Import, approval, Online delivery and recovery evidence are understood. |\n| Release owner or architect | [Deployment qualification](deployment-qualification.md) | Local results and outstanding external gates are recorded separately. |\n\nRead these source pages directly before any documentation pack is installed.\nAfter governed publication, open Axis Documentation, select Nodics Kickoff,\nthen **Run Kickoff Locally > Local acceptance checklist**. Its catalogue group\nis Acceptance and Verification. Search for the page title, local validation,\ndeveloper onboarding, QA, or setup verification. Related pages provide the\nsame reading path in the published documentation; source links support repository\nreaders without a running server.\n\n## Prerequisites and authority\n\n```mermaid\nflowchart TD\n  Source[\"Read setup and verify configuration\"] --> Ready[\"Start selected backends\"]\n  Ready --> Review[\"Review scope and authorize live changes\"]\n  Review --> Init[\"Initialize through owner APIs\"]\n  Init --> Publish[\"Review and approve governed publication\"]\n  Publish --> API[\"Collect backend delivery evidence\"]\n  API --> Browser[\"Verify independently started frontends\"]\n  Browser --> Report[\"Record results and unresolved gates\"]\n  Report --> Release[\"Review deployment qualification plan\"]\n```\n\nInstall the declared project dependencies with `npm ci` from this repository.\nResolve the framework through the package dependency or supported explicit\nframework-root configuration. Project identity comes from `package.json.name`;\nenvironment and server choices come from their layered properties and package\nmetadata. Do not create a separate project descriptor or copy framework checks.\n\nFor live acceptance, provision the configured local providers and authorized\nbootstrap identity. Inspect the selected environment before executing anything\nthat imports data, changes module lifecycle, approves a publication or resets\nstate. Do not put credentials in this page or attach tokens to evidence.\n\nBackOffice owns bootstrap and capability discovery; nImport owns governed\nimports; CMS, Process and nPublish own publication; functional modules own their\nbusiness APIs. Kickoff selects customer applications, fixtures and deployment\ncoordinates. The commands below delegate to those framework owners.\n\nBackend validation needs neither a frontend checkout nor a frontend server.\nBrowser validation additionally needs Axis and each selected application,\ninstalled and started in its own repository. Docker execution is a separate\nqualification activity, not part of this Local checklist.\n\n## Verification without live mutation\n\nRun these from `nodics.kickoff` before starting a live acceptance journey:\n\n```bash\nnpm run nodics:project:validate\nnpm run test:documentation\nnpm run test:qualification\nnpm run test:agora-commerce\nnpm run prepare:runtime\n```\n\nThese check project adoption, generated documentation consistency, customer\nfixtures and configuration graphs. Runtime preparation does not launch servers\nor prove provider connectivity. Static container contracts in the qualification\ntests do not execute or qualify Docker. A passing test command is evidence only\nfor the assertions it actually runs, not proof that every application works.\n\nIf documentation source changed, review the catalogue version and content path\nbefore running `npm run docs:generate`, then rerun `npm run test:documentation`.\nStable release changes require a forward version and unused `core-vNNN` path;\nnever overwrite released bytes or repair generated CMS records by hand. Resolve\nuncertain installed receipt/publication history before selecting a successor.\nSource validation alone does not prove that updated pages are published Online.\n\n## Start the selected local backends\n\nInspect and start the owned topology from this repository:\n\n```bash\nnpm run topology:preflight\nnpm run topology:start\n```\n\nKeep the supervisor terminal open. From another terminal use\n`npm run topology:status`; stop the owned backends with\n`npm run topology:stop`. Preflight and readiness output identify the effective\nruntime coordinates. Consult Local runtime for the reference ports rather than\nassuming a copied address matches a customized environment.\n\nTopology commands manage backends only. Start Axis and the required customer\nfrontends separately with `npm run dev` in each frontend repository. Backend\nstop does not stop those frontend processes. Never kill an unrelated process\nmerely because it occupies a configured port.\n\n## Authorized initialization and publication\n\nPrefer retained-data acceptance when no reset is needed. The following command\nis **mutating**: it can initialize selected data and approve governed publications.\nUse it only with authorization for the selected isolated Local environment:\n\n```bash\nnpm run acceptance:local -- --execute --approve-publications\n```\n\nThe backends must already be running. To let the runner own their startup,\nsupply `--start-runtimes`; it cleans up its own children unless\n`--leave-started` is also supplied. These flags do not start frontends.\n\nFor the focused guided initialization journey, review its prerequisites and use:\n\n```bash\nnpm run acceptance:guided-initialization -- --execute --approve-publications\n```\n\nBoth commands use normal authorized owner APIs. Neither gives permission to\nbypass an unavailable approval task, manufacture publication evidence, grant\nmissing privileges, write directly to Online, or access a database directly.\n\nA fresh run is optional and destructive to selected Local data. Review reset\nscope and recovery evidence, stop the existing owned backend topology, and\nconfirm no other process is using its runtimes before invoking:\n\n```bash\nnpm run acceptance:local:fresh -- --execute --approve-publications\n```\n\nThe alias selects owned startup and the governed Platform Local reset. Never\nrun it against shared development or production data. A failed authorization,\nreadiness or reset receipt is a blocker, not permission for a database-shell\nworkaround. Ordinary documentation edits never require a reset.\n\n## Manual setup and browser verification\n\nFollow the screenshot-guided setup runbook for the actual UI actions. This\ntable defines the customer evidence to collect, not additional framework rules.\n\n| Check | Required evidence |\n| --- | --- |\n| Backend readiness | Selected runtimes report ready through their own APIs. |\n| Axis first launch | Authorized login works; a missing managed baseline is initialized and approved through the normal recovery workspace. |\n| Capability availability | Required application capabilities are registered and active; blocked setup explains the missing owner prerequisite. |\n| Data readiness | Selected module-owned releases report their expected installed version and checksum. |\n| Publication | Staged validation, Process decision and Online receipt refer to the same release. Pending approval is not Online success. |\n| Documentation | Kickoff pages are discoverable after pack publication; related pages open. Swagger remains an independent runtime API reference. |\n| Application delivery | Selected Nexus, Agora or Circa journeys use their owning backend contracts; published routes, media and data are visible. |\n| Frontend behavior | Each frontend passes its own checks and browser review; backend API success alone does not prove rendering or accessibility. |\n\nDo not mark an approval-pending workspace as complete just because import passed.\nInspect the current task status, assignee, permissions and publication details.\nFollow Local publishing operations for supported recovery; do not reopen or\nreplace workflow state through direct persistence changes.\n\n## Record results and blockers\n\nRecord the date, repository commit and dirty-state identity, selected environment,\ncommand with secrets removed, exit status, relevant release/checksum receipts,\nand reviewer. Keep generated runtime reports under their existing ignored output\nlocations and retain sanitized evidence in the release or issue system.\n\nDistinguish PASSED, FAILED, BLOCKED and NOT EXECUTED in the human report. A missing\nprovider, permission, owner API, domain publication adapter or funded test wallet\nremains a named blocker. A test that reports partial acceptance is not full\nqualification, even if some requests succeeded. Resolve the owning prerequisite\nand rerun the affected gate before claiming completion.\n\nHistorical extraction results are preserved separately in\n`docs/evidence/2026-09-28-acceptance-cleanup-history.md`. They are not a published\nsetup page, current readiness evidence, or instructions for a new deployment.\n\n## Common mistakes\n\n| Symptom | Check first | Next action |\n| --- | --- | --- |\n| Configuration check fails | Dependency resolution and selected environment | Fix the owning project contribution before live execution. |\n| Backend port is busy | Topology PID ownership and status | Stop only a process you own; do not bypass admission checks. |\n| Axis does not open | Axis frontend terminal | Start Axis independently and verify its configured backend. |\n| Initialization is blocked | Required capability, authorization and release state | Resolve the owning prerequisite through governed APIs. |\n| Publication stays pending | Process task state, assignee and decision permission | Review publication details and follow supported workflow recovery. |\n| Checklist is absent in Axis | Kickoff documentation import and Online receipt | Read the repository page meanwhile; publish the selected pack normally. |\n\n- Treating generated documentation, a running frontend, or a passing unit test\n  as proof of a completed live application journey.\n- Assuming backend topology launches Axis or the storefronts.\n- Running mutating acceptance or fresh reset as a routine documentation check.\n- Approving content without reviewing the target, version, checksum and workflow.\n- Editing immutable/generated data or bypassing owner APIs to clear a blocker.\n- Copying historical results into a new release report without rerunning checks.\n- Treating this project guide as the source of reusable framework rules.\n\n## Sign-off and next step\n\nThe developer and QA reviewer should be able to reproduce the selected journey,\nexplain every blocked or omitted capability, and associate results with the same\nsource and environment. The operator verifies the published release and recovery\nevidence. Business reviewers verify the intended application outcome, not merely\na list of passing technical commands.\n\nProceed to Deployment qualification for a non-mutating plan:\n\n```bash\nnpm run qualification:deployment\n```\n\nReview that plan before opting into its live gates. Production security,\nperformance, accessibility, real providers, backup/recovery and accountable-owner\napproval remain separate. Local completion never authorizes production by itself.\n",
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
        "wordCount": 1587,
        "checksum": "74be22e370c6777f96b3aeca139b93d7891c6e2e9d92c46350b4ec3cf62610d4"
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
      "group": "publish-and-qualify",
      "groupTitle": "Publish and Qualify",
      "parentId": "publish-and-qualify",
      "hierarchyPath": [
        "Publish and Qualify",
        "Local publishing operations"
      ],
      "hierarchyDepth": 2,
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
          "kind": "paragraph",
          "text": "For operators: first complete the prerequisites in [Local acceptance](local-acceptance-checklist.md). Administrators can follow [Local setup to live](local-setup-to-live-runbook.md) for the UI sequence. After publication evidence is collected, continue to [Deployment qualification](deployment-qualification.md)."
        },
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
          "text": "npm run topology:preflight\nnpm run topology:start\nnpm run topology:status\nnpm run topology:stop"
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
          "text": "Use `npm run acceptance:local:fresh -- --execute --approve-publications` only when an authorized bounded Local reset is intended, after reviewing the checklist's isolation, recovery and owned-startup prerequisites. The command resets through the governed Platform API; it does not issue database commands. Use `npm run acceptance:local -- --execute --approve-publications` for authorized retained-schema initialization, content-pack upgrade, repeat installation, and publication verification."
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
        },
        {
          "kind": "paragraph",
          "text": "Frontend startup and verification are independent. Run `npm run dev` and `npm test` inside each frontend application. Backend topology and API acceptance do not start frontend servers or wait for their health."
        }
      ],
      "searchText": "Local publishing operations Operate, diagnose, recover, upgrade, retain, and qualify the Local Staged-to-Online publishing lifecycle without direct database access. # Local publishing operations\n\nFor operators: first complete the prerequisites in\n[Local acceptance](local-acceptance-checklist.md). Administrators can follow\n[Local setup to live](local-setup-to-live-runbook.md) for the UI sequence.\nAfter publication evidence is collected, continue to\n[Deployment qualification](deployment-qualification.md).\n\n## Scope and authority\n\nThis runbook operates the `kickoffLocal` Staged-to-Online publishing lifecycle.\nIt is Local evidence only: it does not approve Development, QA, PreProd, Prod,\nphysical datastore switching, or a production storefront launch. WCMS Staged\nowns authoring and release freeze, `nPublish` owns lifecycle transitions,\nProcess owns approval workflow state, WCMS Online owns deployed visibility,\nand Axis is the employee control plane. Nexus and Agora consume Online only.\n\nOperators and automation must use Nodics APIs, generated services, and the\nproject commands below. They must never repair, seed, version, publish, restore,\nor verify content through direct database CRUD. Database credentials and\nconnectivity are evaluated by runtime readiness; the topology preflight does\nnot open its own database connection.\n\n| Publishing area | Business question answered | Correct Kickoff action | Authority that decides |\n| --- | --- | --- | --- |\n| Import and upgrade | Which release is installed and can it be trusted? | Run retained or fresh acceptance through project commands | nImport validates immutable release identity and checksums |\n| Capability gating | Is the target application allowed to become usable? | Register and activate required functional capabilities before initializing the application pack | BackOffice Module Registry and the owning module decide capability readiness |\n| Staged review | What content or data is ready for approval? | Inspect Staged state through Axis and governed APIs | WCMS Staged and owning modules hold authoring state |\n| Approval and activation | What is allowed to become visible Online? | Use workflow-backed publication actions | nPublish and Process coordinate approval and Online activation |\n| Recovery | How do we retry or roll back a failed local release? | Use documented retry, rollback, backup, and restore commands | Runtime services preserve lifecycle, audit, and integrity evidence |\n\n## Preflight, start, inspect, and stop\n\nRun from `nodics.kickoff`:\n\n```text\nnpm run topology:preflight\nnpm run topology:start\nnpm run topology:status\nnpm run topology:stop\n```\n\nPreflight verifies repository availability and required ports. Startup refuses\nbusy ports, starts dependencies in order, waits for HTTP readiness, records only\nits own process identities, and fails closed if a managed child exits. Stop\nsignals only the validated supervisor and releases children in reverse order.\n\n## Supported initialization and release upgrade\n\nUse `npm run acceptance:local:fresh -- --execute --approve-publications` only\nwhen an authorized bounded Local reset is intended, after reviewing the\nchecklist's isolation, recovery and owned-startup prerequisites.\nThe command resets through the governed Platform API; it does not issue database\ncommands. Use `npm run acceptance:local -- --execute --approve-publications`\nfor authorized retained-schema initialization,\ncontent-pack upgrade, repeat installation, and publication verification.\n\nImmutable content-pack files use portable source revision zero. During a\ngoverned content-pack upgrade, nImport reads the latest Staged record through its\ngenerated schema service and supplies the next optimistic revision. A concurrent\nwriter can still win between read and save; persistence then rejects the import,\nand the operator reviews import-run diagnostics before retrying. Ordinary imports\nand API writes do not receive this release-only reconciliation.\n\nAn upgrade is successful only when the content-pack status is `CURRENT`, the\nexpected release version and checksum are visible, Staged import diagnostics have\nno unresolved failures, publication reaches `ONLINE`, and Online delivery returns\nthe expected projection. Never resolve an upgrade by changing stored revisions.\n\n## Failure, retry, rollback, and recovery\n\n- A validation or approval rejection leaves Online unchanged. Correct Staged\n  content, create or select the intended version, and submit again.\n- Workflow timeouts and response loss are retried only through the bounded,\n  idempotent Process and publication contracts. Correlation ID and operation key\n  must remain stable for the retry.\n- A Staged, Process, or Online interruption is recovered by restarting the\n  supervised topology and running retained acceptance. Reconciliation resumes\n  durable lifecycle and outbox state; it must not manufacture database state.\n- A failed deployment is reconciled before retry. If activation cannot be\n  completed safely, invoke the governed publication rollback operation and\n  verify the prior Online pointer and delivery response.\n- Unexpected supervised child exit must stop the remaining topology. Inspect the\n  generated runtime logs, correct the cause, run preflight, and start again.\n\n## Import, export, backup, and restore boundaries\n\nLocal acceptance proves secured Staged export, checksum and provenance, media-\nbacked validation/import, tenant rejection, and Online/Process export denial.\nThis is a logical data portability and recovery exercise, not a physical database\nbackup certification. Physical backup, restore, point-in-time recovery, RPO, and\nRTO require database-provider procedures and non-Local qualification. Restored\nauthoritative data must be followed by Nodics projection rebuild and API-based\ncount/checksum reconciliation.\n\n## Observability and audit\n\nUse publication operations and diagnostics APIs to inspect lifecycle state,\nfailure and stuck totals, safe failure codes, actor identity, correlation ID,\nrevision, target version, deployment receipts, audit reconciliation, and outbox\ndelivery. Logs must omit tokens, credentials, provider paths, raw payloads, and\nprotected business or personal data. Exported evidence is sanitized before it is\nshared.\n\nRequired Local signals are publication count, failure count, stuck count,\nduration per bounded contract, retry outcome, rollback outcome, readiness, and\nOnline delivery verification. Production queue depth, p95/p99, throughput, soak,\nprojection lag, alerts, and capacity targets remain external evidence.\n\n## Concurrency, retention, and cleanup\n\nLifecycle revisions prevent conflicting transitions. Stable publication codes,\noperation keys, receipts, Online pointers, and outbox identities make identical\nreplays converge. Concurrent editors must publish explicit frozen versions;\npublishing never means “latest at execution time.”\n\nPrevious content versions remain governed history. Online manifests and rollback\nreferences protect required versions. Media cleanup uses retention time, active\nand rollback references, batch limits, and legal hold; it removes only expired,\nunreferenced publication media through the media service. Generated supervisor\nstate and import staging follow their owning cleanup lifecycle.\n\n## Qualification and evidence\n\nRun:\n\n```text\nnpm run qualification:publishing-capacity\nnpm run qualification:publishing-soak\nnpm run qualification:security-boundary\nnpm run qualification:deployment:local -- --include-fresh\n```\n\nThe bounded capacity suite covers freeze, deployment, activation, delivery,\nresponse-loss retry, rollback, transaction abort, media retention, concurrent\nactivation/receipt convergence, workflow handoff, publication operations, and\naudit reconciliation. The deployment report records command outcomes, durations,\nrepository commits, explicit external gaps, and an integrity digest. It never\nself-approves production.\n\nThe Local sustained-reliability gate repeats six publication, workflow,\noutbox, reconciliation, rollback, and media-retention contracts for 25 cycles\n(150 executions) under explicit elapsed-time and process-memory-growth budgets.\nThe automated security boundary executes authentication, authorization, cache\nmutation, import/export, remote transport, BackOffice, Engagement, publication\nauthority, and atomic-audit contracts. These close Local regression evidence;\nthey do not replace production-scale soak or an independent penetration test.\n\nFor the isolated `kickoffDockerLocal` production simulation, run the Docker\nLocal build, start, acceptance, qualification, resilience, interruption, and\nsoak commands defined in `package.json`. Keep this environment separate from\nnative `kickoffLocal`; it owns its own ports, secrets, databases, Redis\ntopology, networks, and Staged/Online media volumes.\n\nThe qualified 2026-08-13 closure completed API-only retained-data acceptance,\nseven target-release reconciliations, Redis Sentinel promotion with\nauthentication and publication continuity, a 1.744-second backup/RPO rehearsal,\na 55.420-second restore/RTO against the 300-second Local target, and a 30-minute\nsoak of 20,088 requests with zero errors, six publication runs, 12 ms p95, 15 ms\np99, and 56 resource samples. This is reproducible Local evidence, not a\nproduction approval. Independent penetration testing and human\nassistive-technology review remain external.\n\nTroubleshoot using stable error codes. `ERR_IMP_00003` indicates immutable release\nintegrity/version policy, `ERR_IMP_00010` is an aggregate record-dispatch failure,\nand `ERR_MDL_00004` indicates an optimistic revision conflict. Preserve the\ncorrelation ID and sanitized import/publication diagnostics when escalating.\n\n## Common mistakes\n\nA common mistake is treating a content-pack update as a database migration and\nmanually changing `versionId`, installed-release history, or the Online pointer.\nThat destroys the evidence needed for retry and rollback. Another mistake is\nstarting Nexus against Staged because authoring content appears there first;\npublic clients must remain Online-only. Do not run multiple unmanaged copies of\nthe same Local server, kill a PID copied from stale state, reuse an old checksum\nunder the same release version, or declare success only because processes are\nlistening. Readiness, authority, workflow, publication, and delivery must all be\nverified.\n\nOperators should also avoid interpreting Local contract timing as production\ncapacity, logical export as physical backup, retryable-phase warnings as final\nfailure, or an integrity digest as human approval. Inspect the final import-run\nand publication states. Documentation source belongs in this project, generated\nCMS data comes from the generator, and frontend applications must not become the\nauthority for content-pack installation or publication state.\n\n## Verification\n\nFor a normal retained upgrade, run preflight, retained acceptance, publishing\ncapacity qualification, and the project test suite. For a deliberate clean-room\nexercise, run fresh acceptance once and retained acceptance immediately after it\nto prove restart-safe idempotency. Confirm that all expected packs are `CURRENT`,\nthe new documentation page is delivered from Online, the publication operations\nsummary has no unexplained failed or stuck item, and `topology:status` reports no\nmanaged process after shutdown.\n\nReview the generated qualification report for command exit codes, durations,\nsource commits, explicit external gaps, and a valid SHA-256 digest. Independently\nrun Framework, Axis, and Nexus verification before committing the coordinated\nbaseline. Finally run `git diff --check`, documentation generation in check mode,\ncredential-pattern scanning, and the zero-direct-database audit over the changed\nfiles. A beginner or partner developer should be able to follow this sequence\nwithout knowing a MongoDB collection name or using a database shell.\n\nFrontend startup and verification are independent. Run `npm run dev` and `npm test`\ninside each frontend application. Backend topology and API acceptance do not start\nfrontend servers or wait for their health.\n",
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
        "wordCount": 1548,
        "checksum": "f82db964d9af22a50f3b1c42afb1264143b80e2e0e3b41238ac9cac595dc1552"
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
      "group": "publish-and-qualify",
      "groupTitle": "Publish and Qualify",
      "parentId": "publish-and-qualify",
      "hierarchyPath": [
        "Publish and Qualify",
        "Deployment qualification"
      ],
      "hierarchyDepth": 2,
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
        "kickoff.local-publishing-operations",
        "kickoff.local-acceptance"
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
          "text": "Release owners and architects should start with the [Local acceptance checklist](local-acceptance-checklist.md). Developers use [Local setup to live](local-setup-to-live-runbook.md) for onboarding; operators use [Local publishing operations](local-publishing-operations.md) for recovery."
        },
        {
          "kind": "paragraph",
          "text": "Deployment qualification is the bridge between a release candidate that works locally and a release that accountable owners may approve for production. The framework-owned runner coordinates evidence from the framework, reference project and local Redis, but it cannot approve production by itself. Frontend verification belongs to each frontend repository and is collected separately; this backend runner does not launch or test Axis."
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
          "text": "After reviewing the plan and obtaining authorization, run the Local gates. They include builds, live-provider tests and mutating retained-data acceptance:"
        },
        {
          "kind": "code",
          "language": "bash",
          "text": "npm run qualification:deployment:local"
        },
        {
          "kind": "paragraph",
          "text": "The runner executes publishing and security contracts, the strict framework release gate, retained-data Kickoff acceptance, and the live Redis cache and distributed registry contracts. It writes sanitized evidence to:"
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
          "text": "Fresh native acceptance clears configured data through the Platform Local reset coordinator and its runtime-owner services. It does not drop MongoDB databases or their schema/index definitions directly. The Local composition covers Platform, WCMS Staged/Online, Process, Commerce Staged/Operational, Engagement, Loyalty, Location, and Waste, with Platform last. Retain the acknowledged receipt from all ten owners and restart the topology to clear in-process state before initialization. Because this mutates local data, it is never included by default:"
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
              "Frontends (separate evidence)",
              "Each application's own formatting, lint, type safety, tests and build",
              "Browser/device and human assistive-technology matrix"
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
          "text": "flowchart TD\n  Plan[\"Review qualification plan and authorize mutation\"] --> Local[\"Run Local evidence gates\"]\n  Local --> Fresh{\"Isolated fresh environment available?\"}\n  Fresh -- \"yes\" --> Bootstrap[\"Run bounded fresh bootstrap\"]\n  Fresh -- \"no\" --> Provision[\"Provision qualification environment\"]\n  Bootstrap --> Provision\n  Provision --> Providers[\"Qualify managed cache and external providers\"]\n  Providers --> Load[\"Run peak load and soak\"]\n  Load --> Recovery[\"Run failover, backup restore, and RPO/RTO\"]\n  Recovery --> Security[\"Complete penetration and residency review\"]\n  Security --> Accessibility[\"Complete human accessibility matrix\"]\n  Accessibility --> Review[\"Accountable-owner evidence review\"]\n  Review --> Decision{\"All gates passed or residual risk accepted?\"}\n  Decision -- \"no\" --> Hold[\"Keep publication blocked\"]\n  Decision -- \"yes\" --> Release[\"Approve merge, tag, and publication\"]"
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
          "text": "If Redis is unavailable, start or configure an approved test endpoint and set `NODICS_CACHE_REDIS_URL` only in the execution environment. Do not commit it. Resolve the framework through the declared dependency or supported explicit framework-root configuration. Frontend locations and test commands belong to the respective frontend projects, not this backend qualification profile."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Customization boundary",
          "anchor": "kickoffDeploymentQualification-7-customization-boundary"
        },
        {
          "kind": "paragraph",
          "text": "The runner implementation belongs to framework tooling. The root `package.json.name` owns stable project identity. Do not create `nodics.project.json`; tooling discovers command aliases from environment server metadata and conventional acceptance scripts. Thin command aliases and human-readable project metadata live in `package.json`. Domain selections and qualification profile facts live beside the environment, for example `envs/kickoffLocal/config/properties.js`. Data packs are owned by module data manifests. Runtime server startup facts stay with the selected environment server packages. A generated customer project should reuse the framework runner through project commands and change only its project-owned facts while retaining the safety properties:"
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
          "text": "Confirm the plan lists framework contracts, the release gate, retained-data acceptance and live Redis checks, plus nine explicit external gates, sanitized values and `productionApproved: false`. The retained-data journey is mutating even though no fresh reset is selected. Then run `npm run qualification:deployment:local` in the prepared local workspace. Confirm every attempted local gate is `PASSED`, the report is written only under the ignored `envs/kickoffLocal/generated` path, and all production-only gates remain visible."
        },
        {
          "kind": "paragraph",
          "text": "Operators should archive the local report with the immutable repository commit identifiers, deployment image identifiers, environment name, external test reports, and accountable-owner decisions. Before approval, independently confirm that each external result belongs to the same release candidate and environment topology. A missing, stale, differently scoped, or unverifiable artifact remains pending; silence is never a pass."
        }
      ],
      "searchText": "Deployment qualification Run the governed local evidence pack and coordinate production-only load, resilience, security, provider, recovery, and accessibility sign-off. # Deployment qualification\n\nRelease owners and architects should start with the\n[Local acceptance checklist](local-acceptance-checklist.md). Developers use\n[Local setup to live](local-setup-to-live-runbook.md) for onboarding; operators\nuse [Local publishing operations](local-publishing-operations.md) for recovery.\n\nDeployment qualification is the bridge between a release candidate that works\nlocally and a release that accountable owners may approve for production. The\nframework-owned runner coordinates evidence from the framework, reference\nproject and local Redis, but it cannot approve production by itself.\nFrontend verification belongs to each frontend repository and is collected\nseparately; this backend runner does not launch or test Axis.\n\nFor beginners, the safest way to read this page is as an evidence map. Kickoff\ncan prove that the local reference stack behaves consistently, but business\napproval still needs named owners for production topology, security, providers,\naccessibility, performance, recovery, and data governance.\n\n## Start here\n\nFrom `nodics.kickoff`, print the plan without running anything:\n\n```bash\nnpm run qualification:deployment\n```\n\nThe JSON plan identifies each gate, its owner, the command that would run, and\nwhat it proves. It contains no credentials or provider URLs.\n\nAfter reviewing the plan and obtaining authorization, run the Local gates.\nThey include builds, live-provider tests and mutating retained-data acceptance:\n\n```bash\nnpm run qualification:deployment:local\n```\n\nThe runner executes publishing and security contracts, the strict framework\nrelease gate, retained-data Kickoff acceptance, and the live Redis cache and distributed\nregistry contracts. It writes sanitized evidence to:\n\n```text\nenvs/kickoffLocal/generated/deployment-qualification/latest.json\n```\n\nThe generated report is local operational evidence and is intentionally\nignored by Git. Archive it in the deployment system that owns the release.\n\n## Fresh bootstrap is intentionally separate\n\nFresh native acceptance clears configured data through the Platform Local\nreset coordinator and its runtime-owner services. It does not drop MongoDB\ndatabases or their schema/index definitions directly. The Local composition\ncovers Platform, WCMS Staged/Online, Process, Commerce Staged/Operational,\nEngagement, Loyalty, Location, and Waste, with Platform last. Retain the\nacknowledged receipt from all ten owners and restart the topology to clear\nin-process state before initialization. Because this mutates local data, it is\nnever included by default:\n\n```bash\nnpm run qualification:deployment:local -- --include-fresh\n```\n\nNever use this flag against a shared development, qualification,\npre-production, or production database. Use an isolated disposable Kickoff\nenvironment and verify the configured database names first.\n\n## What local evidence does and does not prove\n\n| Gate               | Local proof                                                                          | Still required before production                                           |\n| ------------------ | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |\n| Framework          | Clean build, generated contracts, governance, dependency audit, and automated suites | Deployment-image and target-runtime confirmation                           |\n| Kickoff            | Integrated runtime, documentation, lifecycle, and business-user smoke journey        | Production topology and operational ownership                              |\n| Frontends (separate evidence) | Each application's own formatting, lint, type safety, tests and build | Browser/device and human assistive-technology matrix |\n| Redis              | Real local cache and distributed-registry behavior                                   | Managed TLS/authentication, topology, isolation, failover, and recovery    |\n| Payments/providers | Mock and offline contract behavior                                                   | Real non-production credentials, callbacks, failure handling, and rollback |\n\nLocal success must never be translated into `productionApproved: true`. The\nreport fixes this value to `false` and keeps every external evidence class at\n`NOT_EXECUTED`.\n\n## Production-only evidence register\n\nNamed owners must attach evidence for all applicable rows:\n\n| Evidence               | Accountable owner                 | Minimum completion evidence                                                                                                             |\n| ---------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |\n| Peak load              | Performance owner                 | Workload model, dataset, topology, p95/p99, throughput, error rate, saturation, queue age, projection lag, and integrity reconciliation |\n| Soak                   | Operations owner                  | Sustained duration, memory/CPU trends, retry growth, drift, storage/index growth, and post-run reconciliation                           |\n| Penetration            | Security owner                    | Authenticated attack surface, tenant isolation, validation, replay, export, webhook, and privilege-escalation results with disposition  |\n| Managed cache failover | Platform owner                    | TLS/authentication, topology, tenant isolation, node/provider loss, recovery time, and data-consistency results                         |\n| Backup and restore     | Data owner                        | Backup identity, restore procedure, authoritative counts/hashes, projection rebuild, and reconciliation                                 |\n| Regional residency     | Infrastructure and privacy owners | Allowed-region routing, evacuation, deletion propagation, and cross-region leakage results                                              |\n| RPO/RTO                | Operations owner                  | Measured recovery point and recovery time compared with approved objectives                                                             |\n| External providers     | Provider owners                   | Credential source, consent, callbacks, residency, observability, degraded behavior, rollback, and key rotation                          |\n| Accessibility          | Product accessibility owner       | Keyboard, screen reader, zoom/reflow, contrast, browser, and supported-device results                                                   |\n\n## Recommended execution order\n\n```mermaid\nflowchart TD\n  Plan[\"Review qualification plan and authorize mutation\"] --> Local[\"Run Local evidence gates\"]\n  Local --> Fresh{\"Isolated fresh environment available?\"}\n  Fresh -- \"yes\" --> Bootstrap[\"Run bounded fresh bootstrap\"]\n  Fresh -- \"no\" --> Provision[\"Provision qualification environment\"]\n  Bootstrap --> Provision\n  Provision --> Providers[\"Qualify managed cache and external providers\"]\n  Providers --> Load[\"Run peak load and soak\"]\n  Load --> Recovery[\"Run failover, backup restore, and RPO/RTO\"]\n  Recovery --> Security[\"Complete penetration and residency review\"]\n  Security --> Accessibility[\"Complete human accessibility matrix\"]\n  Accessibility --> Review[\"Accountable-owner evidence review\"]\n  Review --> Decision{\"All gates passed or residual risk accepted?\"}\n  Decision -- \"no\" --> Hold[\"Keep publication blocked\"]\n  Decision -- \"yes\" --> Release[\"Approve merge, tag, and publication\"]\n```\n\nRun functional success paths before destructive resilience tests. Run load\nbefore failover only when the test plan explicitly needs a stable baseline.\nRestore the environment and reconcile data after every destructive exercise.\n\n## Failure and recovery\n\nThe runner continues through local gates so one report shows every attempted\ncheck. Any non-zero command becomes `FAILED` with a stable failure code; raw\nenvironment variables and secrets are excluded. Investigate the owning\nrepository first, rerun the focused failing command, then rerun the pack.\n\nIf Redis is unavailable, start or configure an approved test endpoint and set\n`NODICS_CACHE_REDIS_URL` only in the execution environment. Do not commit it.\nResolve the framework through the declared dependency or supported explicit\nframework-root configuration. Frontend locations and test commands belong\nto the respective frontend projects, not this backend qualification profile.\n\n## Customization boundary\n\nThe runner implementation belongs to framework tooling. The root\n`package.json.name` owns stable project identity. Do not create\n`nodics.project.json`; tooling discovers command aliases from environment server\nmetadata and conventional acceptance scripts. Thin command aliases and\nhuman-readable project metadata live in `package.json`. Domain selections and qualification profile facts live\nbeside the environment, for example\n`envs/kickoffLocal/config/properties.js`. Data packs are owned by\nmodule data manifests. Runtime server startup facts stay with the selected\nenvironment server packages.\nA generated customer project should reuse the framework runner through project\ncommands and change only its project-owned facts while retaining the safety\nproperties:\n\n- dry plan by default;\n- destructive checks explicitly opted in;\n- no secrets or provider URLs in reports;\n- external evidence remains separate from local automation;\n- no automatic production approval;\n- named owners and measurable completion criteria.\n\nDo not move customer workloads, credentials, acceptance data, or risk decisions\ninto `nodics.ai`. Framework modules own reusable contracts and orchestration;\nthe customer project owns its environments, qualification targets, and release\ndecision.\n\n## Common mistakes\n\n- Treating local Redis as proof of a managed Redis topology, TLS, authentication,\n  failover, or regional recovery.\n- Calling mock Stripe or offline provider contracts a live-provider test.\n- running `--include-fresh` without checking that the target is the isolated\n  Kickoff local environment;\n- publishing the generated JSON as a production approval even though it records\n  only command outcomes and fixes `productionApproved` to `false`;\n- pasting secrets, bearer tokens, provider URLs, customer data, or raw security\n  findings into a shared evidence report;\n- accepting average latency while ignoring p95/p99, errors, saturation, queue\n  age, projection lag, and post-run data integrity;\n- running failover or restore exercises without a rollback plan and named\n  operational owner;\n- letting Axis automation replace keyboard, screen-reader, zoom, contrast, and\n  supported-device testing by a qualified human;\n- merging or tagging merely because local gates passed while production-only\n  evidence still says `NOT_EXECUTED`.\n\n## Verification\n\nDevelopers can verify the runner contract without starting the full stack:\n\n```bash\nnpm run test:qualification\nnpm run qualification:deployment\n```\n\nConfirm the plan lists framework contracts, the release gate, retained-data\nacceptance and live Redis checks, plus nine explicit external gates, sanitized\nvalues and `productionApproved: false`. The retained-data journey is mutating\neven though no fresh reset is selected. Then\nrun `npm run qualification:deployment:local` in the prepared local workspace.\nConfirm every attempted local gate is `PASSED`, the report is written only\nunder the ignored `envs/kickoffLocal/generated` path, and all production-only\ngates remain visible.\n\nOperators should archive the local report with the immutable repository commit\nidentifiers, deployment image identifiers, environment name, external test\nreports, and accountable-owner decisions. Before approval, independently\nconfirm that each external result belongs to the same release candidate and\nenvironment topology. A missing, stale, differently scoped, or unverifiable\nartifact remains pending; silence is never a pass.\n",
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
        "wordCount": 1350,
        "checksum": "a1115aaa751a9ed04a3b2f9aaa432c2778f21e1613c26e14170e467daba83efe"
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
      "group": "customize-customer-projects",
      "groupTitle": "Customize Customer Projects",
      "parentId": "customize-customer-projects",
      "hierarchyPath": [
        "Customize Customer Projects",
        "Customer customization guide"
      ],
      "hierarchyDepth": 2,
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
        "kickoff.local-acceptance",
        "kickoff.configuration-inheritance"
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
        },
        {
          "text": "Keep configuration small",
          "anchor": "kickoffCustomization-22-keep-configuration-small",
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
          "text": "The rule is simple: customize in the most specific owner that needs the change. Use configuration before code. Use a project module before editing a framework module. Partners customize their own repositories only. Submit reusable capability gaps through the Nodics contribution process; framework maintenance requires separate authorization and review. Use existing supported extension points before proposing a genuinely new functional module."
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
          "text": "flowchart TD\n  Need[\"Need to change behavior or content\"] --> Config{\"Can configuration solve it?\"}\n  Config -- \"yes\" --> Env[\"Use project, environment, server, node, tenant, or provider configuration\"]\n  Config -- \"no\" --> Existing{\"Does an existing functional module own it?\"}\n  Existing -- \"yes\" --> ProjectModule{\"Is it customer-specific?\"}\n  ProjectModule -- \"yes\" --> Overlay[\"Create or update a customer/project module loaded after the framework owner\"]\n  ProjectModule -- \"no\" --> Framework[\"Submit to the Nodics owner for review, implementation and release\"]\n  Existing -- \"no\" --> NewModule[\"Propose capability ownership through the Nodics contribution process\"]\n  Env --> Verify[\"Regenerate artifacts and run acceptance\"]\n  Overlay --> Verify\n  Framework --> Verify\n  NewModule --> Verify"
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
              "Add Circa Waste categories or presets",
              "`modules/circa.ewaste/data/core-v001/waste-policy`",
              "Waste values are schema-driven application policy data, not framework source edits."
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
              "Update the declared framework package dependency and lockfile",
              "Workspace layout is project setup, not runtime configuration."
            ],
            [
              "Project identity is needed",
              "`package.json.name`",
              "Do not duplicate it in root descriptors or `config/properties.js`."
            ],
            [
              "A local domain selection is needed",
              "Existing environment/server `config/properties.js` and package composition metadata",
              "Runtime composition belongs to the selected deployment; do not introduce an environment descriptor."
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
          "text": "nodics.waste\n  -> waste accelerator umbrella\n    -> eWaste scenario accelerator\n      -> circa.ewaste Waste policy"
        },
        {
          "kind": "paragraph",
          "text": "Use `modules/circa.ewaste/data/core-v001/waste-policy` for Circa-owned Waste policy data. It can add or override family, category, material, evidence policy, collection preset, acceptance rule, impact metric, and impact profile records through a manifest-backed data release. The local Waste server installs `eWaste:core-reference` first and `circa.ewaste:waste-policy` second, so Circa values can extend the accelerator without changing framework or accelerator code."
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
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Keep configuration small",
          "anchor": "kickoffCustomization-22-keep-configuration-small"
        },
        {
          "kind": "paragraph",
          "text": "Use [Keep Kickoff configuration small](configuration-inheritance.md) for the ownership map, shared administration module, minimal overrides, array behavior, store-default migration and preparation checks. Inherit capability defaults; keep deployment transports and operational gates at their environment/server."
        }
      ],
      "searchText": "Customer customization guide Use Kickoff as a safe example for project modules, environment configuration, and customer overlays. # Customer Customization Guide\n\nKickoff is intentionally small. It should teach partners how to customize\nNodics safely without turning the reference project into another framework\nrepository.\n\nFor a beginner developer, the most important lesson is restraint. Do not start\nby editing framework files because they are easy to find. Start by asking who\nowns the behavior, whether configuration can solve the need, and which runtime\nserver should load the customization. That habit keeps the customer project\nupgradeable.\n\n## Why customization needs rules\n\nMost enterprise projects start with one urgent customer request. The quickest\nsolution is often to edit whatever file is easiest to find. That works for a\ndemo, but it becomes expensive when more customers, tenants, brands, modules,\nand releases arrive. Nodics customization rules keep the framework upgradeable\nand keep customer behavior visible in the customer project.\n\nThe rule is simple: customize in the most specific owner that needs the\nchange. Use configuration before code. Use a project module before editing a\nframework module. Partners customize their own repositories only. Submit reusable\ncapability gaps through the Nodics contribution process; framework maintenance\nrequires separate authorization and review. Use existing supported extension\npoints before proposing a genuinely new functional module.\n\n## Customization decision tree\n\nUse this decision tree before changing code:\n\n```mermaid\nflowchart TD\n  Need[\"Need to change behavior or content\"] --> Config{\"Can configuration solve it?\"}\n  Config -- \"yes\" --> Env[\"Use project, environment, server, node, tenant, or provider configuration\"]\n  Config -- \"no\" --> Existing{\"Does an existing functional module own it?\"}\n  Existing -- \"yes\" --> ProjectModule{\"Is it customer-specific?\"}\n  ProjectModule -- \"yes\" --> Overlay[\"Create or update a customer/project module loaded after the framework owner\"]\n  ProjectModule -- \"no\" --> Framework[\"Submit to the Nodics owner for review, implementation and release\"]\n  Existing -- \"no\" --> NewModule[\"Propose capability ownership through the Nodics contribution process\"]\n  Env --> Verify[\"Regenerate artifacts and run acceptance\"]\n  Overlay --> Verify\n  Framework --> Verify\n  NewModule --> Verify\n```\n\nIf you cannot answer the ownership question, do not code yet. A wrong owner is\nmore expensive than a missing implementation because it creates a hidden\ncontract future teams will inherit.\n\n## How a developer or AI tool should think\n\nKickoff is a reference customer project, so every change teaches future\ncustomers what “good” looks like. A developer or AI tool should not behave like\na script that only edits the nearest file. It should behave like a small expert\nteam:\n\n| Role | What to check in Kickoff |\n| --- | --- |\n| Business analyst | Does this make the first-hour customer experience clearer, safer, or more convincing? |\n| Enterprise architect | Does the change preserve framework, customer project, runtime server, Axis, WCMS, Profile, and BackOffice ownership? |\n| Nodics framework expert | Is the behavior a project customization, a framework capability, a server topology decision, or generated content-pack output? |\n| Domain expert | Is the sample reusable enough for future commerce, workflow, content, integration, or industry-specific examples? |\n| Principal engineer | Can this be solved through configuration, project module overlay, generated documentation source, or a small exported function? |\n| QA and tester | Does the setup work from zero database state, repeated runs, missing services, and failed dependency resolution? |\n| TechOps/DevOps reviewer | Are framework paths, local databases, ports, logs, reset scope, and rollback behavior safe and understandable? |\n\nIf the answer is unclear, stop and name the ownership decision before editing.\nFor example, changing the local WCMS database name belongs in server\nconfiguration, while changing the import checksum rule belongs in the owning\nframework import service.\n\n## File placement examples\n\nUse these examples when deciding where code or data belongs:\n\n| Need | Correct owner | Why |\n| --- | --- | --- |\n| Change local Platform port | `envs/kickoffLocal/platformServer/config` | It is server topology, not framework behavior. |\n| Add a project-only service | `modules/<project-module>` | Customer behavior should load after framework modules. |\n| Explain Kickoff setup in Axis docs | `nodics.kickoff/docs` | Kickoff owns project-wide documentation that becomes CMS data. |\n| Change Axis renderer behavior | `nodics.axis` | Browser rendering is frontend code, not customer backend data. |\n| Change framework-wide import validation | `nodics.ai` owning module | Shared behavior belongs to the framework owner. |\n| Change generated CMS record text | Source Markdown, then regenerate | Generated files are projections and must not become manual authority. |\n| Add Circa Waste categories or presets | `modules/circa.ewaste/data/core-v001/waste-policy` | Waste values are schema-driven application policy data, not framework source edits. |\n\n## Configuration-first examples\n\nConfiguration-first does not mean \"put everything in properties.\" It means use\nthe correct configuration owner before writing code.\n\n| Example change | Better first move | Why |\n| --- | --- | --- |\n| Local WCMS port must change | Server config under `envs/.../wcmsStagedServer/config` or `envs/.../wcmsOnlineServer/config` | Port is topology, not shared framework behavior. |\n| A project wants a different public label | WCMS/Axis content or project-owned documentation/content data | The label is presentation/content, not service logic. |\n| A framework checkout path differs | Update the declared framework package dependency and lockfile | Workspace layout is project setup, not runtime configuration. |\n| Project identity is needed | `package.json.name` | Do not duplicate it in root descriptors or `config/properties.js`. |\n| A local domain selection is needed | Existing environment/server `config/properties.js` and package composition metadata | Runtime composition belongs to the selected deployment; do not introduce an environment descriptor. |\n| A new API category should be enabled | Owning module default property, with server override only to disable or narrow it | Defaults belong to the module that owns the API. |\n| A new lifecycle state is needed | Owning status-definition file | Status values are contracts, not casual properties. |\n| A customer needs different Profile behavior | Customer extension module loaded after Platform/Profile owner | Customer behavior should not fork framework source. |\n\n## Safe customization model\n\nCustomer projects can add project modules under `modules/` and environment or\nserver contributions under `envs/`. These contributions load after standard\nNodics functional modules and can override or extend services through the\nnormal module merge process.\n\nSafe customizations include:\n\n- project-specific configuration;\n- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;\n- customer extension modules such as a future `kickoff.platform`;\n- environment-specific properties for local, testing, pre-production, and\n  production;\n- project-owned CMS documentation content packs;\n- sample data or initialization flows that belong to the customer project.\n\n## Two customization types\n\n### Code-level customization\n\nUse code-level customization when behavior changes: a service needs different\nlogic, a route needs a project-specific policy, a schema needs project fields,\nor an integration must call a customer system. Keep the implementation in a\nKickoff module or a customer extension module. Add tests next to the changed\nowner and document the boundary in the module README or documentation page.\n\nExample mental model:\n\n```text\nnodics.foundation\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nHere `kickoff.platform` can override or compose Platform services because it\nloads later. Axis and BackOffice should still show the functional capability as\nPlatform unless the customer intentionally exposes a new business capability.\n\n### Axis and WCMS customization\n\nUse governed frontend customization when an administrator changes content,\nlabels, navigation, documentation, images, or page composition through Axis\nand WCMS. The browser renderer stays in `nodics.axis`; the content records live\nin the backend owner. For example, changing a demo site logo should become a\ngoverned WCMS, Media, or content update, not a hard-coded replacement inside\nthe Axis source repository.\n\n### Documentation customization\n\nDocumentation customization is content customization. If a customer wants\ntheir own onboarding guide, project setup page, API usage note, operational\nrunbook, or business process explanation, the content belongs in the customer\nproject documentation pack.\n\nThe source lives under:\n\n```text\ndocs/\n  catalogue.json\n  pages/\n```\n\nThe generated files live under:\n\n```text\ndata/core-v001/records/documentation/\ndata/manifest.json\n```\n\nEdit the source, bump the catalogue version, regenerate, test, import, and\nverify in Axis. Never hand-edit the generated CMS records to make a page look\nright.\n\n### Waste Management customization\n\nWaste Management follows the same layered customization model as other Nodics\ncapabilities:\n\n```text\nnodics.waste\n  -> waste accelerator umbrella\n    -> eWaste scenario accelerator\n      -> circa.ewaste Waste policy\n```\n\nUse `modules/circa.ewaste/data/core-v001/waste-policy` for Circa-owned Waste\npolicy data. It can add or override family, category, material, evidence policy,\ncollection preset, acceptance rule, impact metric, and impact profile records\nthrough a manifest-backed data release. The local Waste server installs\n`eWaste:core-reference` first and `circa.ewaste:waste-policy` second, so Circa\nvalues can extend the accelerator without changing framework or accelerator\ncode.\n\nDo not put reward formulas, coupon codes, map-provider secrets, vendor\ncontracts, recycler adapters, logistics adapters, or tenant-scoped rows in\nWaste reference data. Loyalty, Location, Commerce, provider integrations, and\nproject journey modules own those concerns.\n\n## What not to customize in Kickoff\n\nDo not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not\nrename standard functional identities such as `nodics.platform` just because a\ncustomer extension customizes their behavior. Do not put backend-importable CMS\ndata into the frontend repository. Do not place framework documentation in the\ncustomer project unless it is truly project-specific guidance.\n\n## Extension example\n\nA customer may later create a module such as `kickoff.platform` to customize\nPlatform behavior. A Platform server could load:\n\n```text\nnodics.foundation\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nBackOffice and Axis should still present the functional capability as Platform\nunless the customer explicitly exposes a separate functional module. The\nextension changes implementation; it does not create a new product identity.\n\n## Documentation rule\n\nCustomer documentation follows the same ownership rule:\n\n- framework guidance goes to `nodics.docs`;\n- Axis product guidance goes to Platform `modules/axis`;\n- Kickoff/project guidance goes to `nodics.kickoff`;\n- browser rendering remains in `nodics.axis`.\n\nWhen Kickoff docs change, update the source page, bump the catalogue version if\nthe generated content changes, regenerate the pack, import it through WCMS, and\nverify the route in Axis.\n\n## Step-by-step: add a small project module\n\n1. Create or choose a module under `modules/`.\n2. Give the module a clear package identity and index so load order is\n   intentional.\n3. Add only project-owned services, data, configuration, or routes.\n4. Register the module in the relevant environment/server composition.\n5. Start the server and verify logs show the module loading after framework\n   modules.\n6. Add or update tests proving the project behavior.\n7. Update Kickoff documentation if the customization is part of the reference\n   journey.\n\n### Example: adding a project service\n\nSuppose a customer wants a project-only greeting service for a demo dashboard.\nThe safe thought process is:\n\n1. The behavior is not framework-wide.\n2. The behavior belongs to the customer project.\n3. The implementation should live under a project module, for example\n   `modules/kickoffCore`.\n4. The service should be exported so a later module can override or compose it.\n5. A test should prove the default behavior and the override path.\n6. The documentation should explain the example if it teaches future partners.\n\nDo not add that demo service to `nodics.foundation` only because every runtime loads\nCore. Core is the shared foundation, not a bucket for convenient code.\n\nDo not use this flow to move framework behavior into Kickoff. If the behavior\nbelongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and\nimplement it in the owning framework module instead.\n\n## Step-by-step: add project documentation\n\n1. Add or update Markdown under\n   `docs/pages/`.\n2. Update `docs/catalogue.json`.\n3. Bump the catalogue version when generated content changes.\n4. Run `npm run docs:generate`.\n5. Run `npm run test:documentation`.\n6. Import or update the content pack through Axis.\n7. Open the generated `/docs/nodics-kickoff` route in Axis and verify\n   navigation, search, headings, and previous/next links.\n\n## DevOps and rollback notes\n\nProject customizations should be deployable and reversible. Keep project\nconfiguration separate from private secrets. Record which environment and\nserver a customization affects. If a release fails, rollback should remove or\ndisable the project layer without requiring a framework source rollback.\n\nOperators should be able to answer three questions during rollback: which\nproject module introduced the change, which server graph loaded it, and which\ncontent-pack or configuration version went live. If those answers are unclear,\nthe customization is not ready for a production environment.\n\nGenerated documentation and seed data should be versioned immutably. If content\nchanges with the same version, the import service should reject it so operators\ndo not silently install a different release under an already-trusted identity.\n\n## Common mistakes\n\n- Editing framework files for a project-only demonstration change.\n- Treating the reference project name as a requirement for every customer\n  project.\n- Putting customer documentation into the framework docs module.\n- Changing a standard functional module identity when only a customer overlay\n  is being added.\n- Copying whole framework property trees into an environment/server config\n  instead of overriding only the narrow property the project needs.\n- Editing generated documentation data after a checksum failure instead of\n  updating source Markdown, regenerating, and bumping the release when\n  required.\n\n## Verification\n\nVerify a customer customization from the outside and from the owner. From the\noutside, start the relevant local server, open Axis, and confirm the visible\nbehavior changes only for the project that owns it. From the owner, run the\nproject tests, regenerate project documentation content when docs changed,\nvalidate the content-pack manifest, and run the local acceptance script when\nruntime, import, module registry, documentation, or Axis behavior is affected.\n\nIf a customization changes Platform, WCMS, Cron, or another framework\ncapability through a project overlay, the evidence must show both the default\nframework behavior and the project-specific override. A beginner should be\nable to read the evidence and understand where the change lives, why it does\nnot fork the framework, and how to remove or roll it back.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Local runtime topology](local-runtime.md)\n\n## Keep configuration small\n\nUse [Keep Kickoff configuration small](configuration-inheritance.md) for the\nownership map, shared administration module, minimal overrides, array behavior,\nstore-default migration and preparation checks. Inherit capability defaults;\nkeep deployment transports and operational gates at their environment/server.\n",
      "previous": {
        "title": "Deployment qualification",
        "route": "/docs/nodics-kickoff/kickoff-deployment-qualification"
      },
      "next": {
        "title": "Keep Kickoff configuration small",
        "route": "/docs/nodics-kickoff/kickoff-configuration-inheritance"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "modules",
        "path": "docs/pages/customization-guide.md",
        "wordCount": 2231,
        "checksum": "2f7b080fc458a3fa1cae2199a048f85d9fa91ef81e3715317ad3eb8810b1305a"
      }
    },
    "active": true
  },
  "record8": {
    "code": "kickoffDocsComponentkickoffConfigurationInheritance",
    "typeCode": "kickoffDocumentationArticleComponentType",
    "renderer": "documentation.component.article",
    "accessMode": "PUBLIC",
    "properties": {
      "code": "kickoff.configuration-inheritance",
      "title": "Keep Kickoff configuration small",
      "route": "/docs/nodics-kickoff/kickoff-configuration-inheritance",
      "section": "customize-customer-projects",
      "sectionTitle": "Customize Customer Projects",
      "group": "customize-customer-projects",
      "groupTitle": "Customize Customer Projects",
      "parentId": "customize-customer-projects",
      "hierarchyPath": [
        "Customize Customer Projects",
        "Keep Kickoff configuration small"
      ],
      "hierarchyDepth": 2,
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
      "summary": "Inherit framework defaults, share customer administration descriptors and keep deployment choices at their owners.",
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
        "kickoff.customization",
        "kickoff.local-runtime"
      ],
      "visualRequirements": [
        "diagram",
        "comparison-table",
        "code-example"
      ],
      "searchKeywords": [
        "configuration",
        "inheritance",
        "defaults",
        "administration",
        "environment",
        "server"
      ],
      "topicKeywords": [
        "ownership",
        "minimal configuration",
        "deployment overrides"
      ],
      "headings": [
        {
          "text": "Business outcome",
          "anchor": "kickoffConfigurationInheritance-1-business-outcome",
          "level": 2
        },
        {
          "text": "Understand the ownership before editing",
          "anchor": "kickoffConfigurationInheritance-2-understand-the-ownership-before-editing",
          "level": 2
        },
        {
          "text": "Why the ordering matters",
          "anchor": "kickoffConfigurationInheritance-3-why-the-ordering-matters",
          "level": 2
        },
        {
          "text": "Start with the smallest change",
          "anchor": "kickoffConfigurationInheritance-4-start-with-the-smallest-change",
          "level": 2
        },
        {
          "text": "Customize and extend safely",
          "anchor": "kickoffConfigurationInheritance-5-customize-and-extend-safely",
          "level": 2
        },
        {
          "text": "Preserve arrays and operational safeguards",
          "anchor": "kickoffConfigurationInheritance-6-preserve-arrays-and-operational-safeguards",
          "level": 2
        },
        {
          "text": "Send store context explicitly",
          "anchor": "kickoffConfigurationInheritance-7-send-store-context-explicitly",
          "level": 2
        },
        {
          "text": "Verification before operating",
          "anchor": "kickoffConfigurationInheritance-8-verification-before-operating",
          "level": 2
        },
        {
          "text": "Common mistakes, troubleshooting and rollback",
          "anchor": "kickoffConfigurationInheritance-9-common-mistakes-troubleshooting-and-rollback",
          "level": 2
        },
        {
          "text": "Commands and capability inventories",
          "anchor": "kickoffConfigurationInheritance-10-commands-and-capability-inventories",
          "level": 2
        },
        {
          "text": "Declarative environment and runtime configuration",
          "anchor": "kickoffConfigurationInheritance-11-declarative-environment-and-runtime-configuration",
          "level": 2
        },
        {
          "text": "Inherited provider and policy defaults",
          "anchor": "kickoffConfigurationInheritance-12-inherited-provider-and-policy-defaults",
          "level": 2
        },
        {
          "text": "Credentials, initialization and runtime authentication",
          "anchor": "kickoffConfigurationInheritance-13-credentials-initialization-and-runtime-authentication",
          "level": 2
        },
        {
          "text": "Browser origins and later overrides",
          "anchor": "kickoffConfigurationInheritance-14-browser-origins-and-later-overrides",
          "level": 2
        },
        {
          "text": "Application selections and optional features",
          "anchor": "kickoffConfigurationInheritance-15-application-selections-and-optional-features",
          "level": 2
        },
        {
          "text": "Enforcement and verification",
          "anchor": "kickoffConfigurationInheritance-16-enforcement-and-verification",
          "level": 2
        },
        {
          "text": "Local extraction ownership (2026-09-28)",
          "anchor": "kickoffConfigurationInheritance-17-local-extraction-ownership-2026-09-28",
          "level": 2
        },
        {
          "text": "Nexus accelerator migration",
          "anchor": "kickoffConfigurationInheritance-18-nexus-accelerator-migration",
          "level": 2
        },
        {
          "text": "Application policy and role selection",
          "anchor": "kickoffConfigurationInheritance-19-application-policy-and-role-selection",
          "level": 2
        }
      ],
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Kickoff inherits tested framework defaults. Its environment and server files hold deployment choices and intentional differences. Shared customer administration descriptions live once in `kickoffCore` as Platform runtime-role profiles. Customers can change their applications without maintaining copies of framework behavior or adding a separate configuration-only module."
        },
        {
          "kind": "paragraph",
          "text": "For a beginner, start with the existing Local Platform example below and change one value. Read the resulting prepared configuration before adding another override; do not copy a complete framework file as a starting template."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Business outcome",
          "anchor": "kickoffConfigurationInheritance-1-business-outcome"
        },
        {
          "kind": "paragraph",
          "text": "A business administrator chooses which applications to prepare and which approved packages to install. Developers maintain those customer choices once; operators maintain the actual deployment connections. Inherited defaults reduce the settings a partner must learn while retaining explicit control over imports, publication and reset operations."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Understand the ownership before editing",
          "anchor": "kickoffConfigurationInheritance-2-understand-the-ownership-before-editing"
        },
        {
          "kind": "table",
          "headers": [
            "Customer application in Kickoff",
            "Accelerator dependency in nodics.ai"
          ],
          "rows": [
            [
              "agora.apparel",
              "apparel"
            ],
            [
              "agora.electronics",
              "electronics"
            ],
            [
              "agora.telco",
              "telco"
            ],
            [
              "circa.ewaste",
              "eWaste"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "An application remains customer-owned when used as a demo or reference. Extract only independently reusable domain behavior after an explicit ownership review; do not move the application's identity, policies, profiles or data with it."
        },
        {
          "kind": "table",
          "headers": [
            "Concern",
            "Kickoff location",
            "What stays inherited"
          ],
          "rows": [
            [
              "Shared project administration profiles",
              "`modules/kickoffCore/config/properties.js` under Platform runtime-role profiles",
              "BackOffice orchestration, permissions, validation and imports"
            ],
            [
              "Local Platform transport and local-only profile differences",
              "`envs/kickoffLocal/platformServer/config/properties.js`",
              "Shared customer descriptors and capability defaults"
            ],
            [
              "Docker Local Platform differences",
              "`envs/kickoffDockerLocal/platformServer/config/properties.js` and its existing topology contributions",
              "Shared customer descriptors and framework behavior"
            ],
            [
              "Local environment policy",
              "`envs/kickoffLocal/config/properties.js`",
              "Generic CORS cache duration and other unchanged capability defaults"
            ],
            [
              "Docker environment policy",
              "`envs/kickoffDockerLocal/config/properties.js`",
              "Generic defaults, with Docker-specific origins and headers retained"
            ],
            [
              "Customer commerce policy",
              "Local/Docker Commerce and Commerce Staged properties",
              "Neutral framework behavior; the actual Agora store remains explicit"
            ],
            [
              "Circa application policy",
              "`modules/circa.ewaste/config/properties.js`",
              "Waste, Profile, Location and BackOffice authorities"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "`kickoffCore` owns project documentation and shared activation selections. Agora application packs and profiles belong to their respective customer modules here, just like Circa. Axis contributes disabled documentation setup descriptors; Kickoff enables the selected entries. nConfig projects project profiles when the selected runtime role is Platform. The descriptors contain no deployment credential, port, listener, or startup behavior. Environment and server files still own the actual deployment transport differences."
        },
        {
          "kind": "diagram",
          "language": "mermaid",
          "text": "flowchart LR\n  Capabilities[\"Framework capability defaults\"] --> Local[\"Local Platform differences\"]\n  Capabilities --> Docker[\"Docker Local Platform differences\"]\n  Core[\"Kickoff Core Platform profiles\"] --> Local\n  Core --> Docker\n  Local --> LocalRuntime[\"Prepared Local Platform\"]\n  Docker --> DockerRuntime[\"Prepared Docker Platform\"]"
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Why the ordering matters",
          "anchor": "kickoffConfigurationInheritance-3-why-the-ordering-matters"
        },
        {
          "kind": "paragraph",
          "text": "Customer application packs use project-module indexes after framework defaults. Platform and WCMS Staged select them through normal customer-module discovery, without importing application ownership into the framework. Media descriptors use `manifestModule` and a module-relative `manifestPath` for both customer and framework owners. Customer runtime selection, reset boundaries, destination aliases and database bindings stay here. Module manifests already supply activation-package facts; the project entries only route those observed packages to selected runtimes."
        },
        {
          "kind": "paragraph",
          "text": "`kickoffCore` is part of the project module graph. Its BackOffice descriptors use `runtimeRoleProfiles.PLATFORM`, so Platform receives them and non-Platform runtimes do not. The selected Platform server files keep deployment-specific overrides such as operator origin or target transport details."
        },
        {
          "kind": "paragraph",
          "text": "The normal nConfig loader remains authoritative. There is no additional loader, profile registry, deployment process or project lifecycle script. Existing Circa and other later-loaded contributions retain their own merge behavior. An index change must be reviewed against the effective module order rather than assumed safe from a directory name."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start with the smallest change",
          "anchor": "kickoffConfigurationInheritance-4-start-with-the-smallest-change"
        },
        {
          "kind": "paragraph",
          "text": "For Local employee browser sessions, the environment needs only its intentional local policy:"
        },
        {
          "kind": "code",
          "language": "js",
          "text": "profileBrowserSession: {\n    enabled: true,\n    allowInsecureLoopback: true,\n    sameSite: 'Lax'\n}"
        },
        {
          "kind": "paragraph",
          "text": "Cookie names, cookie paths and maximum age come from Profile. These are local settings; do not copy loopback relaxation into a production environment unless that deployment explicitly supports local HTTP development. Docker keeps its distinct cookie names at the Docker environment layer so Local and Docker browser sessions remain separate."
        },
        {
          "kind": "paragraph",
          "text": "For a Product catalogue limit, add only the value you intend to change under an already active Commerce server:"
        },
        {
          "kind": "code",
          "language": "js",
          "text": "product: {\n    discovery: { catalogue: { maximumCandidates: 800 } }\n}"
        },
        {
          "kind": "paragraph",
          "text": "Omitting `maximumCandidates` uses Product's default. Other Product values do not need to be copied. Changes to query budgets require performance review against the intended catalogue size."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Customize and extend safely",
          "anchor": "kickoffConfigurationInheritance-5-customize-and-extend-safely"
        },
        {
          "kind": "paragraph",
          "text": "To change a shared application description, edit the matching Platform profile in `modules/kickoffCore/config/properties.js`. To change a deployment connection, edit that environment's Platform profile target. For example, a Local-only timeout override is:"
        },
        {
          "kind": "code",
          "language": "js",
          "text": "backofficeApplicationInitialization: {\n    profiles: {\n        nexus: { target: { timeoutMs: 60000 } }\n    }\n}"
        },
        {
          "kind": "paragraph",
          "text": "Merge this difference into the existing Local Platform properties. Do not replace the entire file or copy this target into the shared module. The profile continues to inherit its description and package selections; Docker retains its own target values. A node override can further specialize this scalar through the existing selected-node configuration chain."
        },
        {
          "kind": "paragraph",
          "text": "When adding a new application, first decide whether its descriptor belongs to an already active application module or to administrative composition. Prefer the application owner where it can contribute without activating unrelated capabilities. Keep shared cross-application administration data here only when that is the appropriate selected consumer. Local-only profiles remain Local choices; identical data is shared only where both environments intend it."
        },
        {
          "kind": "paragraph",
          "text": "When adding a new environment or server:"
        },
        {
          "kind": "ordered-list",
          "items": [
            "Follow the framework module-generation contract and choose a unique ordered index; do not copy an existing server's complete properties.",
            "Declare actual composition, coordinates, authority and required deployment inputs.",
            "Keep shared administration defaults in the owning project/application module and expose them through runtime-role profiles only for consuming runtimes.",
            "Add only intentional differences, then run preparation and focused checks.",
            "Test an unselected runtime to ensure that it does not gain application profiles or functional modules accidentally."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Preserve arrays and operational safeguards",
          "anchor": "kickoffConfigurationInheritance-6-preserve-arrays-and-operational-safeguards"
        },
        {
          "kind": "paragraph",
          "text": "Backend qualification does not require a frontend checkout. Axis knowledge is an explicit external-source choice: supply `NODICS_COPILOT_AXIS_ROOT` and enable `NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED`; source-code ingestion additionally uses `NODICS_COPILOT_AXIS_SOURCE_CODE_ENABLED`. Missing selections stay disabled. The Local composition source belongs only to the Local Platform profile."
        },
        {
          "kind": "paragraph",
          "text": "Shared customer Engagement opt-ins live in Kickoff Core's `ENGAGEMENT` role profile. Local notification templates and trusted-source bindings live in the Local environment's matching role profile, without selecting Circa there. Later deployment layers can still disable these choices."
        },
        {
          "kind": "paragraph",
          "text": "Acceptance URL selectors resolve the selected server's published endpoint; internal Editorial calls use the configured `processConnectionName` through nRouter. Explicit legacy `processBaseUrl` overrides retain precedence. Do not copy a second catalogue of listener, published or internal ports: they have different consumers and must not be substituted for one another. Backend container network qualification covers selected backend network boundaries; external frontend qualification is separate. Docker execution remains a separate validation step, not evidence supplied by configuration-only tests."
        },
        {
          "kind": "paragraph",
          "text": "Current nConfig merges arrays by position. A shorter override can retain inherited trailing entries; an empty array is not a general removal instruction. Share a list only when its complete values and ownership match. Deployment lists that differ remain explicitly owned at their boundary. Use an existing capability-specific removal mechanism where available and verify the effective result before changing an activation or reset inventory."
        },
        {
          "kind": "paragraph",
          "text": "Local reset opt-in, its environment allowlist and explicit model service lists remain Local configuration. Shared defaults do not enable Docker Local reset. Provider sandbox restrictions and deployment-selected model names remain explicit where they represent intentional operator policy. Data descriptors do not themselves execute imports, grant permissions, approve Online publication or change tenant authority."
        },
        {
          "kind": "paragraph",
          "text": "Large remaining blocks are not automatically framework defaults: deployment knowledge-source bindings, transport targets, local-only application profiles and reset inventories can carry real customer or server choices. Their ownership must be assessed individually. A shorter entry file that imports the same large payload does not reduce customer maintenance by itself."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Send store context explicitly",
          "anchor": "kickoffConfigurationInheritance-7-send-store-context-explicitly"
        },
        {
          "kind": "paragraph",
          "text": "Cart and Shopping List no longer select a store from `customerApi.defaultStoreCode`. The obsolete Cart fallback declarations have been removed from Local and Docker Local Commerce/Commerce Staged configuration. Store identity remains customer-owned; the existing Agora commerce client sends its configured store explicitly for Cart creation and Shopping List operations."
        },
        {
          "kind": "paragraph",
          "text": "Before upgrading other callers, make them send `storeCode` through their existing request payload/query or service context. All supplied values must agree. Missing, malformed or conflicting context is rejected; no neutral or sample store is invented. There is no new configuration layer or store-specific API. Other application-level store selections used by Product publication or other capabilities have independent owners and are not removed by this change."
        },
        {
          "kind": "paragraph",
          "text": "Existing explicit-store ID formats and persisted records are preserved. Keep saved Cart IDs, including any produced by the older context-only hashing bug; recomputing a new hash is not a migration. Missing/inconsistent stored context needs governed repair. Identifier validation is not a Store master lookup or an authorization grant. Re-run prepared Commerce compositions and real client acceptance before deployment."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Verification before operating",
          "anchor": "kickoffConfigurationInheritance-8-verification-before-operating"
        },
        {
          "kind": "paragraph",
          "text": "From the Kickoff repository:"
        },
        {
          "kind": "code",
          "language": "sh",
          "text": "node --test test/configurationInheritanceContract.test.js test/guidedInitializationProfilesContract.test.js test/communicationActivationDataContract.test.js test/dockerLocalEnvironmentContract.test.mjs\nnode test/runtime-prepare.test.js\nnode test/dockerLocalRuntimePrepare.test.js\nnpm run docs:check"
        },
        {
          "kind": "paragraph",
          "text": "The customer configuration tests check selection scope, index order, profile identity, environment-owned transports and reset selections. Node-override and tenant-isolation behavior belongs to nConfig's `configurationBindingContract.test.js`; CORS, provider inheritance and neutral domain defaults are tested by their framework owners with independent fixtures. Existing runtime preparation checks use real nConfig resolution for Local and Docker Local. Declaration tests compose the shared defaults instead of assuming that a server file contains its entire effective configuration."
        },
        {
          "kind": "paragraph",
          "text": "Compare Local and Docker Local runtimes across the supported domain selections: all, none, Apparel, Electronics and Telco. These checks verify that Platform receives the project-owned BackOffice descriptors through `kickoffCore` runtime-role profiles while non-Platform runtimes do not. They prepare configuration and metadata; they do not start listeners, reset databases, import packages or prove signed-in browser behavior. Dated outcomes belong in `docs/evidence/`, not this operating guide. Re-run the relevant operational journey after deploying/restarting changed source through the usual project procedure."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes, troubleshooting and rollback",
          "anchor": "kickoffConfigurationInheritance-9-common-mistakes-troubleshooting-and-rollback"
        },
        {
          "kind": "table",
          "headers": [
            "Symptom",
            "Check",
            "Recovery"
          ],
          "rows": [
            [
              "Platform profile identity or package list is missing",
              "Does `kickoffCore` still define Platform runtime-role profiles and does nConfig project them?",
              "Restore the profile block; run preparation."
            ],
            [
              "A target is missing",
              "Does the selected environment still declare its profile transport?",
              "Restore that environment's target; shared defaults intentionally do not supply it."
            ],
            [
              "A Local setting appears in Docker",
              "Was deployment data placed in the shared module?",
              "Move it back to the appropriate environment and compare both runtimes."
            ],
            [
              "An extra array item remains",
              "Did a shorter array merge preserve a trailing entry?",
              "Use supported removal semantics and inspect the effective list."
            ],
            [
              "An unrelated server exposes shared profiles",
              "Was the module selected by a common group or every server?",
              "Restore Platform-only selection and run the unselected-runtime check."
            ],
            [
              "Structure audit reports unrelated Circa gaps",
              "Compare with the recorded baseline and inspect the owning work.",
              "Keep those findings separate; do not overwrite ongoing Circa changes."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Rollback restores the previous declarations together. Re-run preparation before restarting. Do not revert unrelated Circa, content, initialization or framework documentation changes."
        },
        {
          "kind": "paragraph",
          "text": "Continue with the Customer Customization Guide for application extension and the Local Runtime guide for deployment composition. The framework's permanent rule is `nSetup/llm/contracts/customer-config-classification-contract.md` in the resolved Foundation package."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Commands and capability inventories",
          "anchor": "kickoffConfigurationInheritance-10-commands-and-capability-inventories"
        },
        {
          "kind": "paragraph",
          "text": "The framework supplies canonical acceptance operations. This project's server aliases are discovered from `envs/*` server metadata. Customer npm aliases select real applications and fixtures; they delegate to protected framework commands. For example, `acceptance:agora-commerce` selects the Commerce journey owned by the framework. Do not restore copied acceptance services under `scripts/acceptance`. Moving ownership does not authorize executing that journey: its existing credential, import, startup and destructive confirmation gates apply."
        },
        {
          "kind": "paragraph",
          "text": "The shared documentation generator reads this project's `docs/catalogue.json` publication metadata. Record/code prefixes and routes are stable persisted identifiers; changing them requires an explicit content migration. Labels and channels remain application choices. A different project supplies its own values without editing framework source."
        },
        {
          "kind": "paragraph",
          "text": "After source documentation changes, select a reviewed forward release before generation. Stable generated content must not be overwritten under the same version or output path. The framework generator accepts a new governed `docs/catalogue.json.publication.contentPath` such as `core-v002` and preserves the previous artifacts. Review installed receipts and publication history before choosing the next version; local Git history alone cannot prove installed state. `docs:check` remains a generation-consistency gate and may correctly fail while a release-history issue is unresolved. Source validation and published readiness must be reported separately."
        },
        {
          "kind": "paragraph",
          "text": "Local reset definitions select capability inventories through module-owned `localResetProvider.profiles` keyed by runtime role. Each profile selects capability modules and required model checks for that runtime; adding a contribution never enables reset by itself. Environment configuration owns the enablement and allowlist, with optional runtime-role allowlists for constrained environments such as Docker Local. Server `config/properties.js` files do not repeat reset inventories. A later `serviceOverrides` false entry removes an optional inherited service. Removing a required service fails before mutation. Explicit optional service names for unavailable or historical models remain visible until their owners are selected or their cleanup requirements are retired. No reset is implied by configuration preparation or validation."
        },
        {
          "kind": "paragraph",
          "text": "Foundation initialization profiles continue selecting their declared Init/Core categories and destination roles. Release discovery and manifests determine each capability's records; application bundles and captions remain project choices."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Declarative environment and runtime configuration",
          "anchor": "kickoffConfigurationInheritance-11-declarative-environment-and-runtime-configuration"
        },
        {
          "kind": "paragraph",
          "text": "`package.json` identifies modules, environments, servers and nodes. Existing `config/properties.js` contributions supply their configuration. The retired `nodics.environment.json` is neither required nor loaded, and no replacement descriptor is introduced. nConfig owns binding and layering; nTooling projects startup, container and acceptance inputs from that same configuration."
        },
        {
          "kind": "paragraph",
          "text": "Root `activeModules.compositions.agora` describes this project's optional Agora selection. Only selecting runtime contributions consume it. Independent cron or website projects do not need Agora. Runtime provider/module selections stay explicit; merely declaring an endpoint or connection never activates its owner."
        },
        {
          "kind": "paragraph",
          "text": "Each server declares its own `servers.default.endpoint` port. Peer aliases use `$config: runtime` to project that server's endpoint, retaining intentional `remoteOnly`, advertised-host and HTTP-only differences. Module identity and package versions come from existing metadata. Framework host defaults are inherited. A node may override a target endpoint field; a later tenant override changes the actual consumer endpoint. References preserve their contribution-time snapshot. Missing, unsafe or cyclic targets fail before runtime startup."
        },
        {
          "kind": "paragraph",
          "text": "Local startup order and dependencies remain in each server's `tooling.runtime`. Acceptance runtime descriptors are selected from declared roles and existing server metadata; ports and launch commands are not repeated in Local properties. Acceptance URL defaults use nTooling's `projectEndpointUrl` projection, including the configured Axis origin. Explicit published-URL environment inputs remain valid for proxy or container access. Local Redis inherits the framework host, port and `localRuntimeAuth` prefix; its Redis block declares only `enabled: true`. A different deployment namespace is an intentional later override. Frontend applications own their startup commands and development ports. Backend configuration declares only explicit CORS security policy for trusted origins. Container-specific inputs and real deployment differences remain under the existing environment's `tooling` property. Reusable acceptance defaults come from their framework capability owners; the Local tooling block is absent. This metadata never authorizes imports, grants runtime scope or proves deployed readiness."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Inherited provider and policy defaults",
          "anchor": "kickoffConfigurationInheritance-12-inherited-provider-and-policy-defaults"
        },
        {
          "kind": "paragraph",
          "text": "Local Elasticsearch uses the framework provider's `http://localhost:9200` default. Kickoff Local declares no Elasticsearch address. Docker overrides it with the container service address because that deployment differs. Apply this rule to all provider settings: retain only actual environment differences, connection selection and isolated database/namespace choices."
        },
        {
          "kind": "paragraph",
          "text": "Framework defaults provide info logging, disabled remote event publication, disabled database fallback for search, standard CORS headers/credential behavior, and secured service-registry API exposure. Docker's logging environment input and cross-origin resource header are deliberate deployment differences. Search and cache providers still require explicit activation. Server database names and Process's separate Cron database remain project deployment choices."
        },
        {
          "kind": "paragraph",
          "text": "The effective deployment classification remains `environment.class` for nImport release-scope checks, but nConfig derives it from the selected environment module metadata. Do not author it in environment `properties.js`, and do not infer it from a runtime name such as `kickoffLocal`. Sample releases are available for authorized manual execution by default; only Init runs automatically. Permissions, tenant/destination checks, release integrity and durable receipts remain mandatory. A deployment may explicitly restrict Sample execution without changing framework code."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Credentials, initialization and runtime authentication",
          "anchor": "kickoffConfigurationInheritance-13-credentials-initialization-and-runtime-authentication"
        },
        {
          "kind": "paragraph",
          "text": "Auth policy and bootstrap credential bindings come from nAuth. Kickoff does not declare a customer-root administrator password. Environment, server and node layers may override `bootstrapIdentity.adminPassword` through nConfig when a deployment intentionally supplies a different initial administrator credential. This configures future initialization; changing it does not rotate an already persisted administrator password. Use Profile credential operations for an existing account."
        },
        {
          "kind": "paragraph",
          "text": "Administrator bootstrap values, JWT secrets, peppers, service passwords/API keys and binding fallbacks remain deployment inputs or governed runtime configuration. Do not publish credential-bearing customer files or enable blanket legacy-human/plaintext/missing-stamp compatibility exceptions."
        },
        {
          "kind": "paragraph",
          "text": "Supply deployment inputs through the framework's environment bindings or the existing layered external/secret-provider mechanism:"
        },
        {
          "kind": "table",
          "headers": [
            "Input",
            "Purpose"
          ],
          "rows": [
            [
              "`NODICS_JWT_SECRET`",
              "Stable deployment signing material"
            ],
            [
              "`NODICS_API_KEY_PEPPER`",
              "Stable API-key digest material"
            ],
            [
              "`NODICS_BOOTSTRAP_ADMIN_PASSWORD`",
              "Initial human administrator provisioning"
            ],
            [
              "`NODICS_BOOTSTRAP_SERVICE_PASSWORD`",
              "Initial service-principal provisioning"
            ],
            [
              "`NODICS_BOOTSTRAP_SERVICE_API_KEY`",
              "Initial service API-key provisioning"
            ],
            [
              "`NODICS_API_KEY`",
              "Current runtime proof inside one server process"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Each runtime server reads the same server-local `NODICS_API_KEY` binding from its own effective configuration. A shared launcher or environment-wide credential store may keep server-specific aliases while injecting the selected value into the child process as `NODICS_API_KEY`. Missing retained proof remains null; there is no fallback to a sample key or human administrator. Profile owns runtime scope grants, tenant/enterprise validation, token issuance, renewal and revocation."
        },
        {
          "kind": "paragraph",
          "text": "Profile's `profileInitialization.requiredEmployeeLogins` defaults to the human and service identities supplied by its Init release. Initialization checks no longer use the runtime authentication login. Missing identities are detected independently of current proof; existing Init receipts and mandatory identity reconciliation continue to govern repair. Configuration changes do not reset stored credentials."
        },
        {
          "kind": "paragraph",
          "text": "Each runtime explicitly selects the Redis provider. Each environment declares only connection differences, and the shared `auth.auth` channel inherits strict nAuth cache policy with no local fallback. Local inherits the framework prefix; Docker retains its existing Redis/Sentinel deployment inputs. Missing required credentials or cache capabilities fail through their existing owners."
        },
        {
          "kind": "paragraph",
          "text": "Docker maps its persisted generated credential variables to the framework input names. Fresh container setup generates random credentials once and retains them on subsequent runs. It no longer provides a universal administrator password. For an initialized deployment, bind its current signing secret and pepper before restart. Use Profile's governed migration/rotation process for legacy records, scopes/stamps or changed credentials; do not replay Init or restore revoked keys."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Browser origins and later overrides",
          "anchor": "kickoffConfigurationInheritance-14-browser-origins-and-later-overrides"
        },
        {
          "kind": "paragraph",
          "text": "nRouter enables CORS by default for the standard Nodics localhost origins: Axis 3100, Nexus 3200, Agora Apparel 3300, Electronics 3400, Telco 3500 and Circa 3600. These shared API security defaults apply independently of Platform/accelerator activation and frontend health. Environments declare only different addresses or policy; server denials and explicit disablement remain supported. nRouter never reads a frontend launch catalogue. Exact origins, header policy and route authorization remain enforced."
        },
        {
          "kind": "paragraph",
          "text": "Server `originEndpointOverrides` retains deliberate frontend denials. Numeric loopback aliases and temporary IP addresses are not automatically added. A different environment supplies its actual host/protocol or replaces the endpoint collection through nConfig. Denials follow frontend identity when its address changes. Tests cover custom HTTPS, empty/replaced collections, forbidden origins and headers."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Application selections and optional features",
          "anchor": "kickoffConfigurationInheritance-15-application-selections-and-optional-features"
        },
        {
          "kind": "paragraph",
          "text": "Customer knowledge sources retain their classification, scopes, permissions and explicit enablement. Repository roots use nConfig context/path bindings. Framework and project source versions inherit package metadata unless the operator supplies an intentional version override. There is no `configurationValues.knowledge` helper registry. Source selection is independent of source-ingestion authority."
        },
        {
          "kind": "paragraph",
          "text": "Keep explicit content-pack, reset, publication baseline, provider, data-release, store/catalogue, frontend and runtime identity selections. Their presence does not mean they are copied framework defaults. Content-pack paths and presentation mechanics inherit nImport; BackOffice resolves its standard target defaults. The project documentation pack retains its governed CMS import/publication path. Use `replace` for complete collection selection and `keyed` for identity changes; ordinary arrays retain positional compatibility. Shorter arrays do not delete inherited members without the explicit collection operation."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Enforcement and verification",
          "anchor": "kickoffConfigurationInheritance-16-enforcement-and-verification"
        },
        {
          "kind": "paragraph",
          "text": "`project:validate` and the framework principle audit reject the retired descriptor, profile bindings, duplicate endpoint/authentication catalogues and literal auth secrets in authored properties, except the direct customer administrator bootstrap override. The canonical framework coding restrictions live in nSetup's customer configuration classification contract. The static audit never executes customer property files and never prints credential values."
        },
        {
          "kind": "paragraph",
          "text": "Tests use `test/helpers/configuration.js` to invoke the real nConfig and capability consumers without starting infrastructure. All active runtime preparations, source classification, later overrides and negative checks are part of closure evidence. Prepared configuration and isolated contracts do not prove a deployed database, Redis/Sentinel service, current grants, browser session or external AI provider. Perform deployment acceptance after the normal selected-server build/restart."
        },
        {
          "kind": "paragraph",
          "text": "MongoDB default names `masterLocal` and `testLocal` belong to the framework adapter. Kickoff Local declares no default database-name block. Server-specific names, including separate Staged/Online and Process/Cron databases, remain explicit isolation overrides. This source cleanup does not migrate or rename existing data."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Local extraction ownership (2026-09-28)",
          "anchor": "kickoffConfigurationInheritance-17-local-extraction-ownership-2026-09-28"
        },
        {
          "kind": "paragraph",
          "text": "Complete capability-registry, guided-initialization and deployment-qualification suites now live in BackOffice, CMS and nTooling. The existing npm aliases invoke those owner commands without local script copies. Canonical command metadata rejects project replacements and same-name script shadowing. Customer fixtures, topology and application profile selection remain supported inputs."
        },
        {
          "kind": "paragraph",
          "text": "Registry acceptance requires `--execute`; guided initialization additionally requires `--approve-publications`. It uses normal Process approval, never an implicit emergency override. `qualification:deployment` prints a plan by default; its mandatory security/publication checks call framework tooling directly. Customer journey results supplement canonical gates and cannot approve production. Other mixed acceptance scripts remain extraction work, not approved examples of customer ownership for reusable framework assertions."
        },
        {
          "kind": "paragraph",
          "text": "Reusable domain behavior belongs to functional modules; reusable composed industry behavior belongs to accelerators. Customer applications, scenarios, data, selections and deployment bindings stay in Kickoff. The same rule applies to configuration, tests and documentation. `kickoffApi` and `kickoffInt` remain customer extension templates, not misplaced framework modules."
        },
        {
          "kind": "paragraph",
          "text": "CMS and Editorial now own neutral publication transport defaults. Local Staged retains peer connection selection, enablement and provider selection. Framework defaults alone neither publish nor approve a release. Communication owns inert Telegram technical defaults; Local Engagement selects the type and retains the Circa credential reference, notification policy and trusted sources."
        },
        {
          "kind": "paragraph",
          "text": "Framework documentation and Axis own their acceptance pack descriptors; Kickoff owns its documentation descriptor and the explicit pack selection. nTooling combines inert discovered defaults with the selected runtime's effective nConfig acceptance policy, including custom modules. Static discovery is not activation. Configuration placement enforcement also lives in nTooling's existing audit."
        },
        {
          "kind": "paragraph",
          "text": "Local-only follow-up validation and remaining migrations are tracked in the [local acceptance checklist](local-acceptance-checklist.md). Docker execution is deferred; previous Docker evidence does not qualify this follow-up batch."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Nexus accelerator migration",
          "anchor": "kickoffConfigurationInheritance-18-nexus-accelerator-migration"
        },
        {
          "kind": "paragraph",
          "text": "The `nexus` accelerator now owns the former Nexus reference content pack at `nodics.accelerators/modules/nexus/modules/nexus.web` in the framework repository. Its public module identity remains `nexus.web`; release codes, versions and all data/media bytes are preserved. Kickoff no longer contains a duplicate content pack."
        },
        {
          "kind": "paragraph",
          "text": "Platform explicitly selects `nexusCore` for administration descriptors; WCMS Staged selects `nexus`, and Engagement selects the `nexus.web` operational release source. The structural parent appearing in a graph does not imply CMS activation: Platform and Engagement remain free of CMS services. `npm run nexus:test` dispatches the module-owned `nexus:check` command. Customer media-seeding journeys remain explicit."
        },
        {
          "kind": "paragraph",
          "text": "Common Nexus publication baselines and delivery defaults are accelerator-owned. The Local-only incremental/professional-copy proof selections remain Local deltas; Kickoff's combined Nexus/Agora acceptance profile list remains a project choice. No data was imported, uploaded or published by this source migration."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Application policy and role selection",
          "anchor": "kickoffConfigurationInheritance-19-application-policy-and-role-selection"
        },
        {
          "kind": "paragraph",
          "text": "Agora publication baselines belong to each owning application under `cms.runtimeRoleProfiles.WCMS_STAGED`. Selecting no Agora domains supplies no Agora baseline; Platform presentation identifies these profiles as applications. Package selections, explicit user import triggers and Online approval remain intact. Release pins still require the publication manifest consistency check."
        },
        {
          "kind": "paragraph",
          "text": "Circa owns shared photo metadata and conversation selection under the WASTE profiles of `wasteSubmission` and `eWaste`. Local and Docker Waste keep their different public links. A later override of role policy must use the same `runtimeRoleProfiles.WASTE` path; role profiles are folded into effective configuration after ordinary namespace values. The eWaste journey supplies neutral position-age, capture-timeout and centre-count defaults. An application must supply its arrival radius: a missing radius fails closed before arrival decisions."
        },
        {
          "kind": "paragraph",
          "text": "Local and Docker environments own Agora/Circa CORS origins for all API roles, including roles where those applications are not active. nRouter retains only framework origins and origin-construction behavior. Exact-origin and denial semantics remain unchanged."
        },
        {
          "kind": "paragraph",
          "text": "The Circa refund owner-port descriptor remains an explicit cross-runtime binding: Commerce does not load eWaste. Do not activate the accelerator just to inherit its descriptor. Copilot source controls now use opt-in Knowledge-owned templates; project definitions retain roots, identities, versions, enablement and scope. Normalized Local and Docker source definitions match the pre-extraction snapshot. Docker Platform still does not activate Copilot Knowledge: these definitions remain inert there, and configuration checks do not imply Docker live acceptance. Telegram schema reuse likewise needs coordinated provider availability and central schema routing; existing operational schemas remain unchanged. Initialization package simplification is deferred: explicit selection, destination, reset and approval controls remain authoritative."
        },
        {
          "kind": "paragraph",
          "text": "Run `node --test test/applicationConfigurationOwnershipContract.test.js` with the configuration, publishing and guided-initialization gates above, followed by both Local and Docker runtime preparation tests. These checks do not start listeners or import/publish data."
        }
      ],
      "searchText": "Keep Kickoff configuration small Inherit framework defaults, share customer administration descriptors and keep deployment choices at their owners. # Keep Kickoff configuration small\n\nKickoff inherits tested framework defaults. Its environment and server files\nhold deployment choices and intentional differences. Shared customer\nadministration descriptions live once in `kickoffCore` as Platform runtime-role\nprofiles. Customers can change their applications without maintaining copies of\nframework behavior or adding a separate configuration-only module.\n\nFor a beginner, start with the existing Local Platform example below and change\none value. Read the resulting prepared configuration before adding another\noverride; do not copy a complete framework file as a starting template.\n\n## Business outcome\n\nA business administrator chooses which applications to prepare and which\napproved packages to install. Developers maintain those customer choices once;\noperators maintain the actual deployment connections. Inherited defaults reduce\nthe settings a partner must learn while retaining explicit control over imports,\npublication and reset operations.\n\n## Understand the ownership before editing\n\n| Customer application in Kickoff | Accelerator dependency in nodics.ai |\n| --- | --- |\n| agora.apparel | apparel |\n| agora.electronics | electronics |\n| agora.telco | telco |\n| circa.ewaste | eWaste |\n\nAn application remains customer-owned when used as a demo or reference. Extract\nonly independently reusable domain behavior after an explicit ownership review;\ndo not move the application's identity, policies, profiles or data with it.\n\n| Concern | Kickoff location | What stays inherited |\n| --- | --- | --- |\n| Shared project administration profiles | `modules/kickoffCore/config/properties.js` under Platform runtime-role profiles | BackOffice orchestration, permissions, validation and imports |\n| Local Platform transport and local-only profile differences | `envs/kickoffLocal/platformServer/config/properties.js` | Shared customer descriptors and capability defaults |\n| Docker Local Platform differences | `envs/kickoffDockerLocal/platformServer/config/properties.js` and its existing topology contributions | Shared customer descriptors and framework behavior |\n| Local environment policy | `envs/kickoffLocal/config/properties.js` | Generic CORS cache duration and other unchanged capability defaults |\n| Docker environment policy | `envs/kickoffDockerLocal/config/properties.js` | Generic defaults, with Docker-specific origins and headers retained |\n| Customer commerce policy | Local/Docker Commerce and Commerce Staged properties | Neutral framework behavior; the actual Agora store remains explicit |\n| Circa application policy | `modules/circa.ewaste/config/properties.js` | Waste, Profile, Location and BackOffice authorities |\n\n`kickoffCore` owns project documentation and shared activation selections.\nAgora application packs and profiles belong to their respective customer modules\nhere, just like Circa. Axis contributes disabled documentation setup descriptors;\nKickoff enables the selected entries. nConfig projects project profiles when the selected\nruntime role is Platform. The descriptors contain no deployment credential,\nport, listener, or startup behavior. Environment and server files still own the\nactual deployment transport differences.\n\n```mermaid\nflowchart LR\n  Capabilities[\"Framework capability defaults\"] --> Local[\"Local Platform differences\"]\n  Capabilities --> Docker[\"Docker Local Platform differences\"]\n  Core[\"Kickoff Core Platform profiles\"] --> Local\n  Core --> Docker\n  Local --> LocalRuntime[\"Prepared Local Platform\"]\n  Docker --> DockerRuntime[\"Prepared Docker Platform\"]\n```\n\n## Why the ordering matters\n\nCustomer application packs use project-module indexes after framework defaults.\nPlatform and WCMS Staged select them through normal customer-module discovery,\nwithout importing application ownership into the framework. Media descriptors use\n`manifestModule` and a module-relative `manifestPath` for both customer and framework owners.\nCustomer runtime selection, reset boundaries, destination aliases and database\nbindings stay here. Module manifests already supply activation-package facts;\nthe project entries only route those observed packages to selected runtimes.\n\n`kickoffCore` is part of the project module graph. Its BackOffice descriptors\nuse `runtimeRoleProfiles.PLATFORM`, so Platform receives them and non-Platform\nruntimes do not. The selected Platform server files keep deployment-specific\noverrides such as operator origin or target transport details.\n\nThe normal nConfig loader remains authoritative. There is no additional loader,\nprofile registry, deployment process or project lifecycle script. Existing\nCirca and other later-loaded contributions retain their own merge behavior.\nAn index change must be reviewed against the effective module order rather than\nassumed safe from a directory name.\n\n## Start with the smallest change\n\nFor Local employee browser sessions, the environment needs only its intentional\nlocal policy:\n\n```js\nprofileBrowserSession: {\n    enabled: true,\n    allowInsecureLoopback: true,\n    sameSite: 'Lax'\n}\n```\n\nCookie names, cookie paths and maximum age come from Profile. These are local\nsettings; do not copy loopback relaxation into a production environment unless\nthat deployment explicitly supports local HTTP development. Docker keeps its\ndistinct cookie names at the Docker environment layer so Local and Docker browser\nsessions remain separate.\n\nFor a Product catalogue limit, add only the value you intend to change under\nan already active Commerce server:\n\n```js\nproduct: {\n    discovery: { catalogue: { maximumCandidates: 800 } }\n}\n```\n\nOmitting `maximumCandidates` uses Product's default. Other Product values do not\nneed to be copied. Changes to query budgets require performance review against\nthe intended catalogue size.\n\n## Customize and extend safely\n\nTo change a shared application description, edit the matching Platform profile in\n`modules/kickoffCore/config/properties.js`. To change a deployment\nconnection, edit that environment's Platform profile target. For example, a\nLocal-only timeout override is:\n\n```js\nbackofficeApplicationInitialization: {\n    profiles: {\n        nexus: { target: { timeoutMs: 60000 } }\n    }\n}\n```\n\nMerge this difference into the existing Local Platform properties. Do not\nreplace the entire file or copy this target into the shared module. The profile\ncontinues to inherit its description and package selections; Docker retains its\nown target values. A node override can further specialize this scalar through\nthe existing selected-node configuration chain.\n\nWhen adding a new application, first decide whether its descriptor belongs to\nan already active application module or to administrative composition. Prefer\nthe application owner where it can contribute without activating unrelated\ncapabilities. Keep shared cross-application administration data here only when\nthat is the appropriate selected consumer. Local-only profiles remain Local\nchoices; identical data is shared only where both environments intend it.\n\nWhen adding a new environment or server:\n\n1. Follow the framework module-generation contract and choose a unique ordered\n   index; do not copy an existing server's complete properties.\n2. Declare actual composition, coordinates, authority and required deployment\n   inputs.\n3. Keep shared administration defaults in the owning project/application module\n   and expose them through runtime-role profiles only for consuming runtimes.\n4. Add only intentional differences, then run preparation and focused checks.\n5. Test an unselected runtime to ensure that it does not gain application\n   profiles or functional modules accidentally.\n\n## Preserve arrays and operational safeguards\n\nBackend qualification does not require a frontend checkout. Axis knowledge is\nan explicit external-source choice: supply `NODICS_COPILOT_AXIS_ROOT` and enable\n`NODICS_COPILOT_AXIS_KNOWLEDGE_ENABLED`; source-code ingestion additionally uses\n`NODICS_COPILOT_AXIS_SOURCE_CODE_ENABLED`. Missing selections stay disabled.\nThe Local composition source belongs only to the Local Platform profile.\n\nShared customer Engagement opt-ins live in Kickoff Core's `ENGAGEMENT` role\nprofile. Local notification templates and trusted-source bindings live in the\nLocal environment's matching role profile, without selecting Circa there.\nLater deployment layers can still disable these choices.\n\nAcceptance URL selectors resolve the selected server's published endpoint;\ninternal Editorial calls use the configured `processConnectionName` through\nnRouter. Explicit legacy `processBaseUrl` overrides retain precedence. Do not\ncopy a second catalogue of listener, published or internal ports: they have\ndifferent consumers and must not be substituted for one another. Backend\ncontainer network qualification covers selected backend network boundaries;\nexternal frontend qualification is separate. Docker execution remains a\nseparate validation step, not evidence supplied by configuration-only tests.\n\nCurrent nConfig merges arrays by position. A shorter override can retain\ninherited trailing entries; an empty array is not a general removal instruction.\nShare a list only when its complete values and ownership match. Deployment\nlists that differ remain explicitly owned at their boundary. Use an existing\ncapability-specific removal mechanism where available and verify the effective\nresult before changing an activation or reset inventory.\n\nLocal reset opt-in, its environment allowlist and explicit model service lists\nremain Local configuration. Shared defaults do not enable Docker Local reset.\nProvider sandbox restrictions and deployment-selected model names remain\nexplicit where they represent intentional operator policy. Data descriptors do\nnot themselves execute imports, grant permissions, approve Online publication\nor change tenant authority.\n\nLarge remaining blocks are not automatically framework defaults: deployment\nknowledge-source bindings, transport targets, local-only application profiles\nand reset inventories can carry real customer or server choices. Their ownership\nmust be assessed individually. A shorter entry file that imports the same large\npayload does not reduce customer maintenance by itself.\n\n## Send store context explicitly\n\nCart and Shopping List no longer select a store from `customerApi.defaultStoreCode`.\nThe obsolete Cart fallback declarations have been removed from Local and Docker\nLocal Commerce/Commerce Staged configuration. Store identity remains customer-owned;\nthe existing Agora commerce client sends its configured store explicitly for Cart\ncreation and Shopping List operations.\n\nBefore upgrading other callers, make them send `storeCode` through their existing\nrequest payload/query or service context. All supplied values must agree. Missing,\nmalformed or conflicting context is rejected; no neutral or sample store is invented.\nThere is no new configuration layer or store-specific API. Other application-level\nstore selections used by Product publication or other capabilities have independent\nowners and are not removed by this change.\n\nExisting explicit-store ID formats and persisted records are preserved. Keep saved\nCart IDs, including any produced by the older context-only hashing bug; recomputing\na new hash is not a migration. Missing/inconsistent stored context needs governed\nrepair. Identifier validation is not a Store master lookup or an authorization grant.\nRe-run prepared Commerce compositions and real client acceptance before deployment.\n\n## Verification before operating\n\nFrom the Kickoff repository:\n\n```sh\nnode --test test/configurationInheritanceContract.test.js test/guidedInitializationProfilesContract.test.js test/communicationActivationDataContract.test.js test/dockerLocalEnvironmentContract.test.mjs\nnode test/runtime-prepare.test.js\nnode test/dockerLocalRuntimePrepare.test.js\nnpm run docs:check\n```\n\nThe customer configuration tests check selection scope, index order, profile\nidentity, environment-owned transports and reset selections. Node-override and\ntenant-isolation behavior belongs to nConfig's `configurationBindingContract.test.js`;\nCORS, provider inheritance and neutral domain defaults are tested by their framework\nowners with independent fixtures. Existing runtime preparation checks use real nConfig resolution for\nLocal and Docker Local. Declaration tests compose the shared defaults instead\nof assuming that a server file contains its entire effective configuration.\n\nCompare Local and Docker Local runtimes across the supported domain selections:\nall, none, Apparel, Electronics and Telco. These checks verify that Platform receives the\nproject-owned BackOffice descriptors through `kickoffCore` runtime-role profiles\nwhile non-Platform runtimes do not. They prepare configuration and metadata; they do not\nstart listeners, reset databases, import packages or prove signed-in browser\nbehavior. Dated outcomes belong in `docs/evidence/`, not this operating guide.\nRe-run the relevant operational journey after deploying/restarting\nchanged source through the usual project procedure.\n\n## Common mistakes, troubleshooting and rollback\n\n| Symptom | Check | Recovery |\n| --- | --- | --- |\n| Platform profile identity or package list is missing | Does `kickoffCore` still define Platform runtime-role profiles and does nConfig project them? | Restore the profile block; run preparation. |\n| A target is missing | Does the selected environment still declare its profile transport? | Restore that environment's target; shared defaults intentionally do not supply it. |\n| A Local setting appears in Docker | Was deployment data placed in the shared module? | Move it back to the appropriate environment and compare both runtimes. |\n| An extra array item remains | Did a shorter array merge preserve a trailing entry? | Use supported removal semantics and inspect the effective list. |\n| An unrelated server exposes shared profiles | Was the module selected by a common group or every server? | Restore Platform-only selection and run the unselected-runtime check. |\n| Structure audit reports unrelated Circa gaps | Compare with the recorded baseline and inspect the owning work. | Keep those findings separate; do not overwrite ongoing Circa changes. |\n\nRollback restores the previous declarations together. Re-run preparation before\nrestarting. Do not revert unrelated Circa, content, initialization or framework\ndocumentation changes.\n\nContinue with the Customer Customization Guide for application extension and\nthe Local Runtime guide for deployment composition. The framework's permanent\nrule is `nSetup/llm/contracts/customer-config-classification-contract.md` in the\nresolved Foundation package.\n\n## Commands and capability inventories\n\nThe framework supplies canonical acceptance operations. This project's server\naliases are discovered from `envs/*` server metadata. Customer npm aliases select\nreal applications and fixtures; they delegate to protected framework commands.\nFor example, `acceptance:agora-commerce` selects the Commerce journey owned by\nthe framework. Do not restore copied acceptance services under `scripts/acceptance`.\nMoving ownership does not authorize executing that journey:\nits existing credential, import, startup and destructive confirmation gates apply.\n\nThe shared documentation generator reads this project's `docs/catalogue.json`\npublication metadata. Record/code prefixes and routes are stable persisted\nidentifiers; changing them requires an explicit content migration. Labels and\nchannels remain application choices. A different project supplies its own values\nwithout editing framework source.\n\nAfter source documentation changes, select a reviewed forward release before\ngeneration. Stable generated content must not be overwritten under the same\nversion or output path. The framework generator accepts a new governed\n`docs/catalogue.json.publication.contentPath` such as `core-v002` and preserves\nthe previous artifacts. Review installed receipts and publication history before\nchoosing the next version; local Git history alone cannot prove installed state.\n`docs:check` remains a generation-consistency gate and may correctly fail while\na release-history issue is unresolved. Source validation and published readiness\nmust be reported separately.\n\nLocal reset definitions select capability inventories through module-owned\n`localResetProvider.profiles` keyed by runtime role. Each profile selects\ncapability modules and required model checks for that runtime; adding a\ncontribution never enables reset by itself. Environment configuration owns the\nenablement and allowlist, with optional runtime-role allowlists for constrained\nenvironments such as Docker Local. Server `config/properties.js` files do not\nrepeat reset inventories. A later `serviceOverrides` false entry removes an\noptional inherited service. Removing a required service fails before mutation.\nExplicit optional service names for unavailable or historical models remain\nvisible until their owners are selected or their cleanup requirements are\nretired. No reset is implied by configuration preparation or validation.\n\nFoundation initialization profiles continue selecting their declared Init/Core\ncategories and destination roles. Release discovery and manifests determine each\ncapability's records; application bundles and captions remain project choices.\n\n## Declarative environment and runtime configuration\n\n`package.json` identifies modules, environments, servers and nodes. Existing\n`config/properties.js` contributions supply their configuration. The retired\n`nodics.environment.json` is neither required nor loaded, and no replacement\ndescriptor is introduced. nConfig owns binding and layering; nTooling projects\nstartup, container and acceptance inputs from that same configuration.\n\nRoot `activeModules.compositions.agora` describes this project's optional Agora\nselection. Only selecting runtime contributions consume it. Independent cron or\nwebsite projects do not need Agora. Runtime provider/module selections stay\nexplicit; merely declaring an endpoint or connection never activates its owner.\n\nEach server declares its own `servers.default.endpoint` port. Peer aliases use\n`$config: runtime` to project that server's endpoint, retaining intentional\n`remoteOnly`, advertised-host and HTTP-only differences. Module identity and\npackage versions come from existing metadata. Framework host defaults are inherited.\nA node may override a target endpoint field; a later tenant override changes the\nactual consumer endpoint. References preserve their contribution-time snapshot.\nMissing, unsafe or cyclic targets fail before runtime startup.\n\nLocal startup order and dependencies remain in each server's `tooling.runtime`.\nAcceptance runtime descriptors are selected from declared roles and existing\nserver metadata; ports and launch commands are not repeated in Local properties. Acceptance URL defaults use nTooling's `projectEndpointUrl` projection,\nincluding the configured Axis origin. Explicit published-URL environment inputs\nremain valid for proxy or container access. Local Redis inherits the framework\nhost, port and `localRuntimeAuth` prefix; its Redis block declares only\n`enabled: true`. A different deployment namespace is an intentional later override.\nFrontend applications own their startup commands and development ports. Backend\nconfiguration declares only explicit CORS security policy for trusted origins. Container-specific inputs and real deployment differences remain\nunder the existing environment's `tooling` property. Reusable acceptance defaults\ncome from their framework capability owners; the Local tooling block is absent. This metadata never authorizes\nimports, grants runtime scope or proves deployed readiness.\n\n## Inherited provider and policy defaults\n\nLocal Elasticsearch uses the framework provider's `http://localhost:9200` default.\nKickoff Local declares no Elasticsearch address. Docker overrides it with the\ncontainer service address because that deployment differs. Apply this rule to\nall provider settings: retain only actual environment differences, connection\nselection and isolated database/namespace choices.\n\nFramework defaults provide info logging, disabled remote event publication,\ndisabled database fallback for search, standard CORS headers/credential behavior,\nand secured service-registry API exposure. Docker's logging environment input and\ncross-origin resource header are deliberate deployment differences. Search and\ncache providers still require explicit activation. Server database names and\nProcess's separate Cron database remain project deployment choices.\n\nThe effective deployment classification remains `environment.class` for nImport\nrelease-scope checks, but nConfig derives it from the selected environment\nmodule metadata. Do not author it in environment `properties.js`, and do not\ninfer it from a runtime name such as `kickoffLocal`. Sample releases are\navailable for authorized manual execution by default; only Init runs\nautomatically. Permissions, tenant/destination checks, release integrity and\ndurable receipts remain mandatory. A deployment may explicitly restrict Sample\nexecution without changing framework code.\n\n## Credentials, initialization and runtime authentication\n\nAuth policy and bootstrap credential bindings come from nAuth. Kickoff does not\ndeclare a customer-root administrator password. Environment, server and node\nlayers may override `bootstrapIdentity.adminPassword` through nConfig when a\ndeployment intentionally supplies a different initial administrator credential.\nThis configures future initialization; changing it does not rotate an already\npersisted administrator password. Use Profile credential operations for an\nexisting account.\n\nAdministrator bootstrap values, JWT secrets, peppers, service passwords/API\nkeys and binding fallbacks remain deployment inputs or governed runtime\nconfiguration. Do not publish credential-bearing customer files or enable\nblanket legacy-human/plaintext/missing-stamp compatibility exceptions.\n\nSupply deployment inputs through the framework's environment bindings or the\nexisting layered external/secret-provider mechanism:\n\n| Input | Purpose |\n| --- | --- |\n| `NODICS_JWT_SECRET` | Stable deployment signing material |\n| `NODICS_API_KEY_PEPPER` | Stable API-key digest material |\n| `NODICS_BOOTSTRAP_ADMIN_PASSWORD` | Initial human administrator provisioning |\n| `NODICS_BOOTSTRAP_SERVICE_PASSWORD` | Initial service-principal provisioning |\n| `NODICS_BOOTSTRAP_SERVICE_API_KEY` | Initial service API-key provisioning |\n| `NODICS_API_KEY` | Current runtime proof inside one server process |\n\nEach runtime server reads the same server-local `NODICS_API_KEY` binding from\nits own effective configuration. A shared launcher or environment-wide\ncredential store may keep server-specific aliases while injecting the selected\nvalue into the child process as `NODICS_API_KEY`. Missing retained proof remains\nnull; there is no fallback to a sample key or human administrator. Profile owns\nruntime scope grants, tenant/enterprise validation, token issuance, renewal and\nrevocation.\n\nProfile's `profileInitialization.requiredEmployeeLogins` defaults to the human and\nservice identities supplied by its Init release. Initialization checks no longer\nuse the runtime authentication login. Missing identities are detected independently\nof current proof; existing Init receipts and mandatory identity reconciliation\ncontinue to govern repair. Configuration changes do not reset stored credentials.\n\nEach runtime explicitly selects the Redis provider. Each environment declares only\nconnection differences, and the shared `auth.auth` channel inherits strict nAuth\ncache policy with no local fallback. Local inherits the framework prefix;\nDocker retains its existing Redis/Sentinel deployment inputs. Missing required\ncredentials or cache capabilities fail through their existing owners.\n\nDocker maps its persisted generated credential variables to the framework input\nnames. Fresh container setup generates random credentials once and retains them\non subsequent runs. It no longer provides a universal administrator password.\nFor an initialized deployment, bind its current signing secret and pepper before\nrestart. Use Profile's governed migration/rotation process for legacy records,\nscopes/stamps or changed credentials; do not replay Init or restore revoked keys.\n\n## Browser origins and later overrides\n\nnRouter enables CORS by default for the standard Nodics localhost origins: Axis 3100, Nexus 3200, Agora Apparel 3300, Electronics 3400, Telco 3500 and Circa 3600. These shared API security defaults apply independently of Platform/accelerator activation and frontend health. Environments declare only different addresses or policy; server denials and explicit disablement remain supported. nRouter never reads a frontend launch catalogue. Exact origins, header policy and route authorization remain enforced.\n\nServer `originEndpointOverrides` retains deliberate frontend denials. Numeric\nloopback aliases and temporary IP addresses are not automatically added.\nA different environment supplies its actual host/protocol or replaces the endpoint\ncollection through nConfig. Denials follow frontend identity when its address changes.\nTests cover custom HTTPS, empty/replaced collections, forbidden origins and headers.\n\n## Application selections and optional features\n\nCustomer knowledge sources retain their classification, scopes, permissions and\nexplicit enablement. Repository roots use nConfig context/path bindings. Framework\nand project source versions inherit package metadata unless the operator supplies\nan intentional version override. There is no `configurationValues.knowledge` helper\nregistry. Source selection is independent of source-ingestion authority.\n\nKeep explicit content-pack, reset, publication baseline, provider, data-release,\nstore/catalogue, frontend and runtime identity selections. Their presence does not\nmean they are copied framework defaults. Content-pack paths and presentation\nmechanics inherit nImport; BackOffice resolves its standard target defaults.\nThe project documentation pack retains its governed CMS import/publication path.\nUse `replace` for complete collection selection and `keyed` for identity changes;\nordinary arrays retain positional compatibility. Shorter arrays do not delete\ninherited members without the explicit collection operation.\n\n## Enforcement and verification\n\n`project:validate` and the framework principle audit reject the retired descriptor,\nprofile bindings, duplicate endpoint/authentication catalogues and literal auth\nsecrets in authored properties, except the direct customer administrator bootstrap\noverride. The canonical framework coding restrictions live\nin nSetup's customer configuration classification contract. The static audit never\nexecutes customer property files and never prints credential values.\n\nTests use `test/helpers/configuration.js` to invoke the real nConfig and capability\nconsumers without starting infrastructure. All active runtime preparations, source\nclassification, later overrides and negative checks are part of closure evidence.\nPrepared configuration and isolated contracts do not prove a deployed database,\nRedis/Sentinel service, current grants, browser session or external AI provider.\nPerform deployment acceptance after the normal selected-server build/restart.\n\nMongoDB default names `masterLocal` and `testLocal` belong to the framework adapter.\nKickoff Local declares no default database-name block. Server-specific names,\nincluding separate Staged/Online and Process/Cron databases, remain explicit\nisolation overrides. This source cleanup does not migrate or rename existing data.\n\n## Local extraction ownership (2026-09-28)\n\nComplete capability-registry, guided-initialization and deployment-qualification\nsuites now live in BackOffice, CMS and nTooling. The existing npm aliases invoke\nthose owner commands without local script copies. Canonical command metadata\nrejects project replacements and same-name script shadowing. Customer fixtures,\ntopology and application profile selection remain supported inputs.\n\nRegistry acceptance requires `--execute`; guided initialization additionally\nrequires `--approve-publications`. It uses normal Process approval, never an\nimplicit emergency override. `qualification:deployment` prints a plan by default;\nits mandatory security/publication checks call framework tooling directly.\nCustomer journey results supplement canonical gates and cannot approve production.\nOther mixed acceptance scripts remain extraction work, not approved examples of\ncustomer ownership for reusable framework assertions.\n\nReusable domain behavior belongs to functional modules; reusable composed\nindustry behavior belongs to accelerators. Customer applications, scenarios,\ndata, selections and deployment bindings stay in Kickoff. The same rule applies\nto configuration, tests and documentation. `kickoffApi` and `kickoffInt` remain\ncustomer extension templates, not misplaced framework modules.\n\nCMS and Editorial now own neutral publication transport defaults. Local Staged\nretains peer connection selection, enablement and provider selection. Framework\ndefaults alone neither publish nor approve a release. Communication owns inert\nTelegram technical defaults; Local Engagement selects the type and retains the\nCirca credential reference, notification policy and trusted sources.\n\nFramework documentation and Axis own their acceptance pack descriptors; Kickoff\nowns its documentation descriptor and the explicit pack selection. nTooling\ncombines inert discovered defaults with the selected runtime's effective nConfig\nacceptance policy, including custom modules. Static discovery is not activation.\nConfiguration placement enforcement also lives in nTooling's existing audit.\n\nLocal-only follow-up validation and remaining migrations are tracked in the\n[local acceptance checklist](local-acceptance-checklist.md). Docker execution is\ndeferred; previous Docker evidence does not qualify this follow-up batch.\n\n## Nexus accelerator migration\n\nThe `nexus` accelerator now owns the former Nexus reference content pack at\n`nodics.accelerators/modules/nexus/modules/nexus.web` in the framework repository.\nIts public module identity remains `nexus.web`; release codes, versions and all\ndata/media bytes are preserved. Kickoff no longer contains a duplicate content pack.\n\nPlatform explicitly selects `nexusCore` for administration descriptors; WCMS Staged\nselects `nexus`, and Engagement selects the `nexus.web` operational release source.\nThe structural parent appearing in a graph does not imply CMS activation: Platform\nand Engagement remain free of CMS services. `npm run nexus:test` dispatches the\nmodule-owned `nexus:check` command. Customer media-seeding journeys remain explicit.\n\nCommon Nexus publication baselines and delivery defaults are accelerator-owned.\nThe Local-only incremental/professional-copy proof selections remain Local deltas;\nKickoff's combined Nexus/Agora acceptance profile list remains a project choice.\nNo data was imported, uploaded or published by this source migration.\n\n## Application policy and role selection\n\nAgora publication baselines belong to each owning application under\n`cms.runtimeRoleProfiles.WCMS_STAGED`. Selecting no Agora domains supplies no\nAgora baseline; Platform presentation identifies these profiles as applications.\nPackage selections, explicit user import triggers and Online approval remain intact.\nRelease pins still require the publication manifest consistency check.\n\nCirca owns shared photo metadata and conversation selection under the WASTE\nprofiles of `wasteSubmission` and `eWaste`. Local and Docker Waste keep their\ndifferent public links. A later override of role policy must use the same\n`runtimeRoleProfiles.WASTE` path; role profiles are folded into effective\nconfiguration after ordinary namespace values. The eWaste journey supplies neutral\nposition-age, capture-timeout and centre-count defaults. An application must\nsupply its arrival radius: a missing radius fails closed before arrival decisions.\n\nLocal and Docker environments own Agora/Circa CORS origins for all API roles,\nincluding roles where those applications are not active. nRouter retains only\nframework origins and origin-construction behavior. Exact-origin and denial\nsemantics remain unchanged.\n\nThe Circa refund owner-port descriptor remains an explicit cross-runtime binding:\nCommerce does not load eWaste. Do not activate the accelerator just to inherit\nits descriptor. Copilot source controls now use opt-in Knowledge-owned templates;\nproject definitions retain roots, identities, versions, enablement and scope.\nNormalized Local and Docker source definitions match the pre-extraction snapshot.\nDocker Platform still does not activate Copilot Knowledge: these definitions\nremain inert there, and configuration checks do not imply Docker live acceptance.\nTelegram schema reuse likewise needs coordinated\nprovider availability and central schema routing; existing operational schemas\nremain unchanged. Initialization package simplification is deferred: explicit\nselection, destination, reset and approval controls remain authoritative.\n\nRun `node --test test/applicationConfigurationOwnershipContract.test.js` with\nthe configuration, publishing and guided-initialization gates above, followed by\nboth Local and Docker runtime preparation tests. These checks do not start\nlisteners or import/publish data.\n",
      "previous": {
        "title": "Customer customization guide",
        "route": "/docs/nodics-kickoff/kickoff-customization"
      },
      "next": {
        "title": "Commerce and Engagement functional journeys",
        "route": "/docs/nodics-kickoff/kickoff-functional-journeys"
      },
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "modules",
        "path": "docs/pages/configuration-inheritance.md",
        "wordCount": 4223,
        "checksum": "30412cab657a37ae70243542613a0fa48db8b746ac61712e2504e37ebd64580a"
      }
    },
    "active": true
  },
  "record9": {
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
      "group": "functional-journeys",
      "groupTitle": "Functional Journeys",
      "parentId": "functional-journeys",
      "hierarchyPath": [
        "Functional Journeys",
        "Commerce and Engagement functional journeys"
      ],
      "hierarchyDepth": 2,
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
        "title": "Keep Kickoff configuration small",
        "route": "/docs/nodics-kickoff/kickoff-configuration-inheritance"
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
