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
          "searchText": "Kickoff project overview Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs. # Kickoff Project Overview\n\nNodics Kickoff is the reference customer project for running Nodics locally and\ndemonstrating how a partner or customer project consumes the framework. It is\nnot a standard Nodics functional module such as Core, Platform, WCMS, or Cron.\nIt is a project-owned runtime composition that shows how those modules can be\nassembled without copying framework source.\n\nKickoff owns project structure, local environment wiring, project modules,\nsample customization points, and project documentation. Framework\ndocumentation belongs in `nodics.docs`; Axis product documentation belongs in\nthe Platform `axis` backend module; browser renderers belong in `nodics.axis`.\nKickoff documentation that becomes CMS data belongs in this repository under\n`data/core/source/documentation` and is generated into this repository's own\ncontent pack.\n\n## Why Kickoff exists\n\nKickoff exists so a new team can feel Nodics before they design their own\nproject. A partner should be able to clone the framework, clone the reference\nproject, run a small set of commands, log in to Axis, and see the major backend\ncapabilities working together.\n\nThis matters because enterprise framework adoption usually fails at the first\nhour. If the first experience requires a developer to understand every module,\nevery dependency, every data import, and every environment property, the\nframework feels heavy even when the architecture is good. Kickoff keeps the\nfirst journey small: start the runtime, import governed seed data, open Axis,\nread the documentation, and then make one safe customization.\n\nFor a business evaluator, Kickoff demonstrates that Nodics can support a real\ncustomer project without asking the customer to fork framework code. For a\ndeveloper, it shows the concrete folder shape, package dependency model,\nenvironment wiring, server start commands, and project-owned extension points.\nFor an operator, it shows how one local project can run Platform, WCMS, and\nCron as separate processes while preserving the same module ownership rules\nthat production will use.\n\n## Beginner mental model\n\nThink of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample\nproduction line, and `nodics.axis` as the control room screen. The factory\nequipment provides standard capabilities such as Core, Platform, WCMS, Media,\nand Cron. The sample production line decides which equipment to connect for a\nlocal demonstration. The control room screen connects to the running backend\nand shows only the capabilities that the backend says are available and\nauthorized.\n\nKickoff is not the product every customer must ship. It is the smallest\ncomplete example of how a customer product can be structured.\n\n## What Kickoff demonstrates\n\n- how a customer project depends on Nodics framework packages;\n- how environment and server modules load after standard functional modules;\n- how Platform, WCMS, and Cron can run as separate local servers;\n- how project modules can customize runtime behavior without renaming the\n  standard functional module identity;\n- how customer-owned documentation can appear in Axis beside Framework,\n  Swaggers, and Nodics Axis.\n\n## Source map\n\nThe important Kickoff locations are:\n\n- `package.json` describes the project package and local scripts;\n- `.env` describes developer-specific framework checkout location and local\n  overrides;\n- `src/sync-framework-dependencies.js` prepares local framework package links;\n- `src/start-platform-server.js`, `src/start-wcms-server.js`, and\n  `src/start-cron-server.js` start local runtime servers;\n- `config/` contains project-level defaults;\n- `envs/kickoffLocal/` contains local environment and server composition;\n- `modules/` contains project-owned modules and customization examples;\n- `data/core/source/documentation/` contains authored Kickoff documentation;\n- `data/core/data/documentation/` and `manifest/docs-content-pack.json` are\n  generated content-pack outputs.\n\nAuthored documentation is the source. Generated records are the importable CMS\nprojection. Do not hand-edit generated records to fix documentation.\n\n## Runtime boundary\n\nKickoff is loaded after framework modules. That means it can contribute\nconfiguration, project modules, and project-owned documentation, but it must not\nmove framework behavior into the customer repository. A customer extension such\nas `kickoff.platform` may customize Platform implementation while the\nbusiness-facing functional identity remains `nodics.platform`.\n\nRuntime composition and code dependency are related but different. Package\ndependencies make framework modules available to the project. Server\nconfiguration decides which modules are loaded, in which order, for a specific\nruntime process. Service override behavior follows module loading and indexes,\nnot simply the order in `package.json`.\n\n## Documentation boundary\n\nKickoff docs are imported through WCMS like any other governed CMS content\npack. Axis renders the resolved CMS page and does not own the documentation\nrecords. The BackOffice registry exposes the documentation source so the Axis\nDocumentation dashboard can discover it.\n\n## Common mistakes\n\n- Do not put framework documentation in Kickoff unless the page is explaining\n  how Kickoff consumes the framework.\n- Do not copy `nodics.core`, `nodics.platform`, `nodics.wcms`, or `nodics.cron`\n  source into this repository.\n- Do not move Axis renderers or browser code into Kickoff.\n- Do not assume a customer project will always sit beside `nodics.ai`; use the\n  framework-root configuration.\n- Do not change generated content-pack files without regenerating from source.\n- Do not rename functional capabilities when a customer module only customizes\n  their implementation.\n\n## How to know Kickoff is working\n\nKickoff is healthy when Platform starts, WCMS starts, the module registry shows\nmandatory functional modules as active, optional modules can be registered\nthrough Axis, documentation content packs can be imported or updated through\nBackOffice/WCMS, and Axis can render Framework, Swaggers, Nodics Axis, and\nNodics Kickoff documentation from backend-owned sources.\n\n## Continue\n\n- [Local runtime topology](local-runtime.md)\n- [Customer customization guide](customization-guide.md)\n"
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
          "code": "kickoff.customization",
          "title": "Customer customization guide",
          "route": "/docs/nodics-kickoff/kickoff-customization",
          "section": "nodics-kickoff",
          "sectionTitle": "Nodics Kickoff",
          "sectionOrder": 10,
          "order": 30,
          "audience": [
            "architect",
            "developer",
            "operator"
          ],
          "summary": "Use Kickoff as a safe example for project modules, environment configuration, and customer overlays.",
          "searchText": "Customer customization guide Use Kickoff as a safe example for project modules, environment configuration, and customer overlays. # Customer Customization Guide\n\nKickoff is intentionally small. It should teach partners how to customize\nNodics safely without turning the reference project into another framework\nrepository.\n\n## Why customization needs rules\n\nMost enterprise projects start with one urgent customer request. The quickest\nsolution is often to edit whatever file is easiest to find. That works for a\ndemo, but it becomes expensive when more customers, tenants, brands, modules,\nand releases arrive. Nodics customization rules keep the framework upgradeable\nand keep customer behavior visible in the customer project.\n\nThe rule is simple: customize in the most specific owner that needs the\nchange. Use configuration before code. Use a project module before editing a\nframework module. Use a later-loaded extension module before forking a standard\nfunctional module. Create a new functional module only when the business\ncapability is genuinely new.\n\n## Safe customization model\n\nCustomer projects can add project modules under `modules/` and environment or\nserver contributions under `envs/`. These contributions load after standard\nNodics functional modules and can override or extend services through the\nnormal module merge process.\n\nSafe customizations include:\n\n- project-specific configuration;\n- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;\n- customer extension modules such as a future `kickoff.platform`;\n- environment-specific properties for local, testing, pre-production, and\n  production;\n- project-owned CMS documentation content packs;\n- sample data or initialization flows that belong to the customer project.\n\n## Two customization types\n\n### Code-level customization\n\nUse code-level customization when behavior changes: a service needs different\nlogic, a route needs a project-specific policy, a schema needs project fields,\nor an integration must call a customer system. Keep the implementation in a\nKickoff module or a customer extension module. Add tests next to the changed\nowner and document the boundary in the module README or documentation page.\n\nExample mental model:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nHere `kickoff.platform` can override or compose Platform services because it\nloads later. Axis and BackOffice should still show the functional capability as\nPlatform unless the customer intentionally exposes a new business capability.\n\n### Axis and WCMS customization\n\nUse governed frontend customization when an administrator changes content,\nlabels, navigation, documentation, images, or page composition through Axis\nand WCMS. The browser renderer stays in `nodics.axis`; the content records live\nin the backend owner. For example, changing a demo site logo should become a\ngoverned WCMS, Media, or content update, not a hard-coded replacement inside\nthe Axis source repository.\n\n## What not to customize in Kickoff\n\nDo not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not\nrename standard functional identities such as `nodics.platform` just because a\ncustomer extension customizes their behavior. Do not put backend-importable CMS\ndata into the frontend repository. Do not place framework documentation in the\ncustomer project unless it is truly project-specific guidance.\n\n## Extension example\n\nA customer may later create a module such as `kickoff.platform` to customize\nPlatform behavior. A Platform server could load:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nBackOffice and Axis should still present the functional capability as Platform\nunless the customer explicitly exposes a separate functional module. The\nextension changes implementation; it does not create a new product identity.\n\n## Documentation rule\n\nCustomer documentation follows the same ownership rule:\n\n- framework guidance goes to `nodics.docs`;\n- Axis product guidance goes to Platform `modules/axis`;\n- Kickoff/project guidance goes to `nodics.kickoff`;\n- browser rendering remains in `nodics.axis`.\n\nWhen Kickoff docs change, update the source page, bump the catalogue version if\nthe generated content changes, regenerate the pack, import it through WCMS, and\nverify the route in Axis.\n\n## Step-by-step: add a small project module\n\n1. Create or choose a module under `modules/`.\n2. Give the module a clear package identity and index so load order is\n   intentional.\n3. Add only project-owned services, data, configuration, or routes.\n4. Register the module in the relevant environment/server composition.\n5. Start the server and verify logs show the module loading after framework\n   modules.\n6. Add or update tests proving the project behavior.\n7. Update Kickoff documentation if the customization is part of the reference\n   journey.\n\nDo not use this flow to move framework behavior into Kickoff. If the behavior\nbelongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and\nimplement it in the owning framework module instead.\n\n## Step-by-step: add project documentation\n\n1. Add or update Markdown under\n   `data/core/source/documentation/pages/`.\n2. Update `data/core/source/documentation/catalogue.json`.\n3. Bump the catalogue version when generated content changes.\n4. Run `npm run docs:generate`.\n5. Run `npm run test:documentation`.\n6. Import or update the content pack through Axis.\n7. Open the generated `/docs/nodics-kickoff` route in Axis and verify\n   navigation, search, headings, and previous/next links.\n\n## DevOps and rollback notes\n\nProject customizations should be deployable and reversible. Keep project\nconfiguration separate from private secrets. Record which environment and\nserver a customization affects. If a release fails, rollback should remove or\ndisable the project layer without requiring a framework source rollback.\n\nGenerated documentation and seed data should be versioned immutably. If content\nchanges with the same version, the import service should reject it so operators\ndo not silently install a different release under an already-trusted identity.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Local runtime topology](local-runtime.md)\n"
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
        "Why Kickoff exists",
        "Beginner mental model",
        "What Kickoff demonstrates",
        "Source map",
        "Runtime boundary",
        "Documentation boundary",
        "Common mistakes",
        "How to know Kickoff is working",
        "Continue"
      ],
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "Kickoff Project Overview"
        },
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
          "text": "Why Kickoff exists"
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
          "text": "Beginner mental model"
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
          "text": "What Kickoff demonstrates"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "how a customer project depends on Nodics framework packages;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "how environment and server modules load after standard functional modules;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "how Platform, WCMS, and Cron can run as separate local servers;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "how project modules can customize runtime behavior without renaming the"
          ]
        },
        {
          "kind": "paragraph",
          "text": "standard functional module identity;"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "how customer-owned documentation can appear in Axis beside Framework,"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Swaggers, and Nodics Axis."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Source map"
        },
        {
          "kind": "paragraph",
          "text": "The important Kickoff locations are:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`package.json` describes the project package and local scripts;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`.env` describes developer-specific framework checkout location and local"
          ]
        },
        {
          "kind": "paragraph",
          "text": "overrides;"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`src/sync-framework-dependencies.js` prepares local framework package links;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`src/start-platform-server.js`, `src/start-wcms-server.js`, and"
          ]
        },
        {
          "kind": "paragraph",
          "text": "`src/start-cron-server.js` start local runtime servers;"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`config/` contains project-level defaults;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`envs/kickoffLocal/` contains local environment and server composition;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`modules/` contains project-owned modules and customization examples;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`data/core/source/documentation/` contains authored Kickoff documentation;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`data/core/data/documentation/` and `manifest/docs-content-pack.json` are"
          ]
        },
        {
          "kind": "paragraph",
          "text": "generated content-pack outputs."
        },
        {
          "kind": "paragraph",
          "text": "Authored documentation is the source. Generated records are the importable CMS projection. Do not hand-edit generated records to fix documentation."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Runtime boundary"
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
          "kind": "heading",
          "level": 2,
          "text": "Documentation boundary"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff docs are imported through WCMS like any other governed CMS content pack. Axis renders the resolved CMS page and does not own the documentation records. The BackOffice registry exposes the documentation source so the Axis Documentation dashboard can discover it."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Common mistakes"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Do not put framework documentation in Kickoff unless the page is explaining"
          ]
        },
        {
          "kind": "paragraph",
          "text": "how Kickoff consumes the framework."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Do not copy `nodics.core`, `nodics.platform`, `nodics.wcms`, or `nodics.cron`"
          ]
        },
        {
          "kind": "paragraph",
          "text": "source into this repository."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Do not move Axis renderers or browser code into Kickoff."
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Do not assume a customer project will always sit beside `nodics.ai`; use the"
          ]
        },
        {
          "kind": "paragraph",
          "text": "framework-root configuration."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Do not change generated content-pack files without regenerating from source."
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Do not rename functional capabilities when a customer module only customizes"
          ]
        },
        {
          "kind": "paragraph",
          "text": "their implementation."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "How to know Kickoff is working"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff is healthy when Platform starts, WCMS starts, the module registry shows mandatory functional modules as active, optional modules can be registered through Axis, documentation content packs can be imported or updated through BackOffice/WCMS, and Axis can render Framework, Swaggers, Nodics Axis, and Nodics Kickoff documentation from backend-owned sources."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Continue"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "[Local runtime topology](local-runtime.md)"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "[Customer customization guide](customization-guide.md)"
          ]
        }
      ],
      "searchText": "Kickoff project overview Understand what Nodics Kickoff owns, how it demonstrates the framework, and where project-owned documentation belongs. # Kickoff Project Overview\n\nNodics Kickoff is the reference customer project for running Nodics locally and\ndemonstrating how a partner or customer project consumes the framework. It is\nnot a standard Nodics functional module such as Core, Platform, WCMS, or Cron.\nIt is a project-owned runtime composition that shows how those modules can be\nassembled without copying framework source.\n\nKickoff owns project structure, local environment wiring, project modules,\nsample customization points, and project documentation. Framework\ndocumentation belongs in `nodics.docs`; Axis product documentation belongs in\nthe Platform `axis` backend module; browser renderers belong in `nodics.axis`.\nKickoff documentation that becomes CMS data belongs in this repository under\n`data/core/source/documentation` and is generated into this repository's own\ncontent pack.\n\n## Why Kickoff exists\n\nKickoff exists so a new team can feel Nodics before they design their own\nproject. A partner should be able to clone the framework, clone the reference\nproject, run a small set of commands, log in to Axis, and see the major backend\ncapabilities working together.\n\nThis matters because enterprise framework adoption usually fails at the first\nhour. If the first experience requires a developer to understand every module,\nevery dependency, every data import, and every environment property, the\nframework feels heavy even when the architecture is good. Kickoff keeps the\nfirst journey small: start the runtime, import governed seed data, open Axis,\nread the documentation, and then make one safe customization.\n\nFor a business evaluator, Kickoff demonstrates that Nodics can support a real\ncustomer project without asking the customer to fork framework code. For a\ndeveloper, it shows the concrete folder shape, package dependency model,\nenvironment wiring, server start commands, and project-owned extension points.\nFor an operator, it shows how one local project can run Platform, WCMS, and\nCron as separate processes while preserving the same module ownership rules\nthat production will use.\n\n## Beginner mental model\n\nThink of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample\nproduction line, and `nodics.axis` as the control room screen. The factory\nequipment provides standard capabilities such as Core, Platform, WCMS, Media,\nand Cron. The sample production line decides which equipment to connect for a\nlocal demonstration. The control room screen connects to the running backend\nand shows only the capabilities that the backend says are available and\nauthorized.\n\nKickoff is not the product every customer must ship. It is the smallest\ncomplete example of how a customer product can be structured.\n\n## What Kickoff demonstrates\n\n- how a customer project depends on Nodics framework packages;\n- how environment and server modules load after standard functional modules;\n- how Platform, WCMS, and Cron can run as separate local servers;\n- how project modules can customize runtime behavior without renaming the\n  standard functional module identity;\n- how customer-owned documentation can appear in Axis beside Framework,\n  Swaggers, and Nodics Axis.\n\n## Source map\n\nThe important Kickoff locations are:\n\n- `package.json` describes the project package and local scripts;\n- `.env` describes developer-specific framework checkout location and local\n  overrides;\n- `src/sync-framework-dependencies.js` prepares local framework package links;\n- `src/start-platform-server.js`, `src/start-wcms-server.js`, and\n  `src/start-cron-server.js` start local runtime servers;\n- `config/` contains project-level defaults;\n- `envs/kickoffLocal/` contains local environment and server composition;\n- `modules/` contains project-owned modules and customization examples;\n- `data/core/source/documentation/` contains authored Kickoff documentation;\n- `data/core/data/documentation/` and `manifest/docs-content-pack.json` are\n  generated content-pack outputs.\n\nAuthored documentation is the source. Generated records are the importable CMS\nprojection. Do not hand-edit generated records to fix documentation.\n\n## Runtime boundary\n\nKickoff is loaded after framework modules. That means it can contribute\nconfiguration, project modules, and project-owned documentation, but it must not\nmove framework behavior into the customer repository. A customer extension such\nas `kickoff.platform` may customize Platform implementation while the\nbusiness-facing functional identity remains `nodics.platform`.\n\nRuntime composition and code dependency are related but different. Package\ndependencies make framework modules available to the project. Server\nconfiguration decides which modules are loaded, in which order, for a specific\nruntime process. Service override behavior follows module loading and indexes,\nnot simply the order in `package.json`.\n\n## Documentation boundary\n\nKickoff docs are imported through WCMS like any other governed CMS content\npack. Axis renders the resolved CMS page and does not own the documentation\nrecords. The BackOffice registry exposes the documentation source so the Axis\nDocumentation dashboard can discover it.\n\n## Common mistakes\n\n- Do not put framework documentation in Kickoff unless the page is explaining\n  how Kickoff consumes the framework.\n- Do not copy `nodics.core`, `nodics.platform`, `nodics.wcms`, or `nodics.cron`\n  source into this repository.\n- Do not move Axis renderers or browser code into Kickoff.\n- Do not assume a customer project will always sit beside `nodics.ai`; use the\n  framework-root configuration.\n- Do not change generated content-pack files without regenerating from source.\n- Do not rename functional capabilities when a customer module only customizes\n  their implementation.\n\n## How to know Kickoff is working\n\nKickoff is healthy when Platform starts, WCMS starts, the module registry shows\nmandatory functional modules as active, optional modules can be registered\nthrough Axis, documentation content packs can be imported or updated through\nBackOffice/WCMS, and Axis can render Framework, Swaggers, Nodics Axis, and\nNodics Kickoff documentation from backend-owned sources.\n\n## Continue\n\n- [Local runtime topology](local-runtime.md)\n- [Customer customization guide](customization-guide.md)\n",
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
        "wordCount": 861,
        "checksum": "799d53ab09ef47b8af094a3ea2bcf4f1ac885e2a02d77f4ce2cd541147051532"
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
        "What this is",
        "Servers",
        "Start locally",
        "Before starting",
        "Start sequence",
        "Login and first checks",
        "Documentation import",
        "Troubleshooting",
        "Production note",
        "Continue"
      ],
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "Local Runtime Topology"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff provides a local reference topology so a developer can start Nodics and see the major runtime surfaces without creating a new customer project first. The local environment is `kickoffLocal`."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What this is"
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
          "text": "Servers"
        },
        {
          "kind": "paragraph",
          "text": "The current local topology uses separate runtime servers:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`platformServer` starts the Platform runtime. It loads Core, Platform,"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Profile, BackOffice, the Platform `axis` backend module, and Kickoff project modules."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`wcmsServer` starts the WCMS runtime. It loads Core, WCMS, CMS, Media, and"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Kickoff project modules. WCMS owns CMS sites, catalogs, pages, components, routes, and documentation content-pack import."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "`cronServer` starts the Cron runtime. It loads Core, Cron, cron jobs, and"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Kickoff project modules."
        },
        {
          "kind": "paragraph",
          "text": "Axis is a separate frontend application. It connects to Platform for employee authentication and BackOffice bootstrap, then uses the registered module contracts to reach the authorized backend surfaces."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start locally"
        },
        {
          "kind": "paragraph",
          "text": "Use separate terminals from the Kickoff repository:"
        },
        {
          "kind": "paragraph",
          "text": "```bash"
        },
        {
          "kind": "paragraph",
          "text": "npm run start:platform npm run start:wcms npm run start:cron"
        },
        {
          "kind": "paragraph",
          "text": "```"
        },
        {
          "kind": "paragraph",
          "text": "Axis normally runs from the `nodics.axis` repository:"
        },
        {
          "kind": "paragraph",
          "text": "```bash"
        },
        {
          "kind": "paragraph",
          "text": "npm run dev"
        },
        {
          "kind": "paragraph",
          "text": "```"
        },
        {
          "kind": "paragraph",
          "text": "The default local ports are:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Axis: `http://localhost:3100`"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Platform: `http://localhost:4300`"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "WCMS: `http://localhost:4310`"
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Before starting"
        },
        {
          "kind": "paragraph",
          "text": "From `nodics.kickoff`, copy and review local environment configuration:"
        },
        {
          "kind": "paragraph",
          "text": "```bash"
        },
        {
          "kind": "paragraph",
          "text": "cp .env.example .env"
        },
        {
          "kind": "paragraph",
          "text": "```"
        },
        {
          "kind": "paragraph",
          "text": "Set the framework checkout location:"
        },
        {
          "kind": "paragraph",
          "text": "```dotenv"
        },
        {
          "kind": "paragraph",
          "text": "NODICS_FRAMEWORK_ROOT=../nodics.ai"
        },
        {
          "kind": "paragraph",
          "text": "```"
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
          "kind": "paragraph",
          "text": "```bash"
        },
        {
          "kind": "paragraph",
          "text": "npm run configure:framework npm install"
        },
        {
          "kind": "paragraph",
          "text": "```"
        },
        {
          "kind": "paragraph",
          "text": "`configure:framework` updates the project-local dependency links so npm can install framework packages from the configured checkout. It does not make Kickoff the owner of those modules."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Start sequence"
        },
        {
          "kind": "paragraph",
          "text": "Use separate terminals so logs stay readable:"
        },
        {
          "kind": "paragraph",
          "text": "1. Start Platform first. It owns Profile login, BackOffice bootstrap, module registry, runtime catalogue projection, and OpenAPI contract discovery. 2. Start WCMS second. It owns documentation sites, catalogs, pages, components, routes, media metadata, and content delivery. 3. Start Cron when scheduled behavior is needed. It proves optional functional modules can be observed, registered, activated, deactivated, and deregistered through the same registry lifecycle. 4. Start Axis after backend servers are reachable. Axis reads its public configuration, connects to Platform, authenticates the employee, and discovers registered module endpoints from BackOffice."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Login and first checks"
        },
        {
          "kind": "paragraph",
          "text": "Open Axis at `http://localhost:3100`. For the local reference data, use:"
        },
        {
          "kind": "paragraph",
          "text": "```text"
        },
        {
          "kind": "paragraph",
          "text": "Enterprise: default Login ID: admin Password: adminPassword"
        },
        {
          "kind": "paragraph",
          "text": "```"
        },
        {
          "kind": "paragraph",
          "text": "After login:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "open the System and Integrations area and check the module registry;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "confirm Core, Platform, and WCMS are active and not treated as optional;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "if Cron is running, confirm it appears as an optional module that can move"
          ]
        },
        {
          "kind": "paragraph",
          "text": "through the lifecycle;"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "open Documentation and verify Framework, Swaggers, Nodics Axis, and Nodics"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Kickoff are shown as separate documentation products;"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "import or update documentation packs only through the authorized Axis action."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Documentation import"
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
          "text": "Troubleshooting"
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
          "text": "Production note"
        },
        {
          "kind": "paragraph",
          "text": "The local topology teaches ownership, not final infrastructure. Production may run modules in separate processes, hosts, containers, or release units. That does not change documentation ownership, module identity, API authority, or the rule that Axis discovers runtime capability from BackOffice instead of keeping its own endpoint registry."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Continue"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "[Kickoff project overview](project-overview.md)"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
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
        "title": "Customer customization guide",
        "route": "/docs/nodics-kickoff/kickoff-customization"
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
        "Why customization needs rules",
        "Safe customization model",
        "Two customization types",
        "Code-level customization",
        "Axis and WCMS customization",
        "What not to customize in Kickoff",
        "Extension example",
        "Documentation rule",
        "Step-by-step: add a small project module",
        "Step-by-step: add project documentation",
        "DevOps and rollback notes",
        "Continue"
      ],
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "Customer Customization Guide"
        },
        {
          "kind": "paragraph",
          "text": "Kickoff is intentionally small. It should teach partners how to customize Nodics safely without turning the reference project into another framework repository."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Why customization needs rules"
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
          "text": "Safe customization model"
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
          "kind": "list",
          "ordered": false,
          "items": [
            "project-specific configuration;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "customer extension modules such as a future `kickoff.platform`;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "environment-specific properties for local, testing, pre-production, and"
          ]
        },
        {
          "kind": "paragraph",
          "text": "production;"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "project-owned CMS documentation content packs;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "sample data or initialization flows that belong to the customer project."
          ]
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Two customization types"
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "Code-level customization"
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
          "kind": "paragraph",
          "text": "```text"
        },
        {
          "kind": "paragraph",
          "text": "nodics.core nodics.platform kickoff.platform nodics.kickoff kickoffLocal platformServer"
        },
        {
          "kind": "paragraph",
          "text": "```"
        },
        {
          "kind": "paragraph",
          "text": "Here `kickoff.platform` can override or compose Platform services because it loads later. Axis and BackOffice should still show the functional capability as Platform unless the customer intentionally exposes a new business capability."
        },
        {
          "kind": "heading",
          "level": 3,
          "text": "Axis and WCMS customization"
        },
        {
          "kind": "paragraph",
          "text": "Use governed frontend customization when an administrator changes content, labels, navigation, documentation, images, or page composition through Axis and WCMS. The browser renderer stays in `nodics.axis`; the content records live in the backend owner. For example, changing a demo site logo should become a governed WCMS, Media, or content update, not a hard-coded replacement inside the Axis source repository."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "What not to customize in Kickoff"
        },
        {
          "kind": "paragraph",
          "text": "Do not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not rename standard functional identities such as `nodics.platform` just because a customer extension customizes their behavior. Do not put backend-importable CMS data into the frontend repository. Do not place framework documentation in the customer project unless it is truly project-specific guidance."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Extension example"
        },
        {
          "kind": "paragraph",
          "text": "A customer may later create a module such as `kickoff.platform` to customize Platform behavior. A Platform server could load:"
        },
        {
          "kind": "paragraph",
          "text": "```text"
        },
        {
          "kind": "paragraph",
          "text": "nodics.core nodics.platform kickoff.platform nodics.kickoff kickoffLocal platformServer"
        },
        {
          "kind": "paragraph",
          "text": "```"
        },
        {
          "kind": "paragraph",
          "text": "BackOffice and Axis should still present the functional capability as Platform unless the customer explicitly exposes a separate functional module. The extension changes implementation; it does not create a new product identity."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Documentation rule"
        },
        {
          "kind": "paragraph",
          "text": "Customer documentation follows the same ownership rule:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "framework guidance goes to `nodics.docs`;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Axis product guidance goes to Platform `modules/axis`;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Kickoff/project guidance goes to `nodics.kickoff`;"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
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
          "text": "Step-by-step: add a small project module"
        },
        {
          "kind": "paragraph",
          "text": "1. Create or choose a module under `modules/`. 2. Give the module a clear package identity and index so load order is intentional. 3. Add only project-owned services, data, configuration, or routes. 4. Register the module in the relevant environment/server composition. 5. Start the server and verify logs show the module loading after framework modules. 6. Add or update tests proving the project behavior. 7. Update Kickoff documentation if the customization is part of the reference journey."
        },
        {
          "kind": "paragraph",
          "text": "Do not use this flow to move framework behavior into Kickoff. If the behavior belongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and implement it in the owning framework module instead."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Step-by-step: add project documentation"
        },
        {
          "kind": "paragraph",
          "text": "1. Add or update Markdown under `data/core/source/documentation/pages/`. 2. Update `data/core/source/documentation/catalogue.json`. 3. Bump the catalogue version when generated content changes. 4. Run `npm run docs:generate`. 5. Run `npm run test:documentation`. 6. Import or update the content pack through Axis. 7. Open the generated `/docs/nodics-kickoff` route in Axis and verify navigation, search, headings, and previous/next links."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "DevOps and rollback notes"
        },
        {
          "kind": "paragraph",
          "text": "Project customizations should be deployable and reversible. Keep project configuration separate from private secrets. Record which environment and server a customization affects. If a release fails, rollback should remove or disable the project layer without requiring a framework source rollback."
        },
        {
          "kind": "paragraph",
          "text": "Generated documentation and seed data should be versioned immutably. If content changes with the same version, the import service should reject it so operators do not silently install a different release under an already-trusted identity."
        },
        {
          "kind": "heading",
          "level": 2,
          "text": "Continue"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "[Kickoff project overview](project-overview.md)"
          ]
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "[Local runtime topology](local-runtime.md)"
          ]
        }
      ],
      "searchText": "Customer customization guide Use Kickoff as a safe example for project modules, environment configuration, and customer overlays. # Customer Customization Guide\n\nKickoff is intentionally small. It should teach partners how to customize\nNodics safely without turning the reference project into another framework\nrepository.\n\n## Why customization needs rules\n\nMost enterprise projects start with one urgent customer request. The quickest\nsolution is often to edit whatever file is easiest to find. That works for a\ndemo, but it becomes expensive when more customers, tenants, brands, modules,\nand releases arrive. Nodics customization rules keep the framework upgradeable\nand keep customer behavior visible in the customer project.\n\nThe rule is simple: customize in the most specific owner that needs the\nchange. Use configuration before code. Use a project module before editing a\nframework module. Use a later-loaded extension module before forking a standard\nfunctional module. Create a new functional module only when the business\ncapability is genuinely new.\n\n## Safe customization model\n\nCustomer projects can add project modules under `modules/` and environment or\nserver contributions under `envs/`. These contributions load after standard\nNodics functional modules and can override or extend services through the\nnormal module merge process.\n\nSafe customizations include:\n\n- project-specific configuration;\n- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;\n- customer extension modules such as a future `kickoff.platform`;\n- environment-specific properties for local, testing, pre-production, and\n  production;\n- project-owned CMS documentation content packs;\n- sample data or initialization flows that belong to the customer project.\n\n## Two customization types\n\n### Code-level customization\n\nUse code-level customization when behavior changes: a service needs different\nlogic, a route needs a project-specific policy, a schema needs project fields,\nor an integration must call a customer system. Keep the implementation in a\nKickoff module or a customer extension module. Add tests next to the changed\nowner and document the boundary in the module README or documentation page.\n\nExample mental model:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nHere `kickoff.platform` can override or compose Platform services because it\nloads later. Axis and BackOffice should still show the functional capability as\nPlatform unless the customer intentionally exposes a new business capability.\n\n### Axis and WCMS customization\n\nUse governed frontend customization when an administrator changes content,\nlabels, navigation, documentation, images, or page composition through Axis\nand WCMS. The browser renderer stays in `nodics.axis`; the content records live\nin the backend owner. For example, changing a demo site logo should become a\ngoverned WCMS, Media, or content update, not a hard-coded replacement inside\nthe Axis source repository.\n\n## What not to customize in Kickoff\n\nDo not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not\nrename standard functional identities such as `nodics.platform` just because a\ncustomer extension customizes their behavior. Do not put backend-importable CMS\ndata into the frontend repository. Do not place framework documentation in the\ncustomer project unless it is truly project-specific guidance.\n\n## Extension example\n\nA customer may later create a module such as `kickoff.platform` to customize\nPlatform behavior. A Platform server could load:\n\n```text\nnodics.core\nnodics.platform\nkickoff.platform\nnodics.kickoff\nkickoffLocal\nplatformServer\n```\n\nBackOffice and Axis should still present the functional capability as Platform\nunless the customer explicitly exposes a separate functional module. The\nextension changes implementation; it does not create a new product identity.\n\n## Documentation rule\n\nCustomer documentation follows the same ownership rule:\n\n- framework guidance goes to `nodics.docs`;\n- Axis product guidance goes to Platform `modules/axis`;\n- Kickoff/project guidance goes to `nodics.kickoff`;\n- browser rendering remains in `nodics.axis`.\n\nWhen Kickoff docs change, update the source page, bump the catalogue version if\nthe generated content changes, regenerate the pack, import it through WCMS, and\nverify the route in Axis.\n\n## Step-by-step: add a small project module\n\n1. Create or choose a module under `modules/`.\n2. Give the module a clear package identity and index so load order is\n   intentional.\n3. Add only project-owned services, data, configuration, or routes.\n4. Register the module in the relevant environment/server composition.\n5. Start the server and verify logs show the module loading after framework\n   modules.\n6. Add or update tests proving the project behavior.\n7. Update Kickoff documentation if the customization is part of the reference\n   journey.\n\nDo not use this flow to move framework behavior into Kickoff. If the behavior\nbelongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and\nimplement it in the owning framework module instead.\n\n## Step-by-step: add project documentation\n\n1. Add or update Markdown under\n   `data/core/source/documentation/pages/`.\n2. Update `data/core/source/documentation/catalogue.json`.\n3. Bump the catalogue version when generated content changes.\n4. Run `npm run docs:generate`.\n5. Run `npm run test:documentation`.\n6. Import or update the content pack through Axis.\n7. Open the generated `/docs/nodics-kickoff` route in Axis and verify\n   navigation, search, headings, and previous/next links.\n\n## DevOps and rollback notes\n\nProject customizations should be deployable and reversible. Keep project\nconfiguration separate from private secrets. Record which environment and\nserver a customization affects. If a release fails, rollback should remove or\ndisable the project layer without requiring a framework source rollback.\n\nGenerated documentation and seed data should be versioned immutably. If content\nchanges with the same version, the import service should reject it so operators\ndo not silently install a different release under an already-trusted identity.\n\n## Continue\n\n- [Kickoff project overview](project-overview.md)\n- [Local runtime topology](local-runtime.md)\n",
      "previous": {
        "title": "Local runtime topology",
        "route": "/docs/nodics-kickoff/kickoff-local-runtime"
      },
      "next": null,
      "source": {
        "repository": "nodics.kickoff",
        "functionalModule": "nodics.kickoff",
        "technicalModule": "modules",
        "path": "data/core/source/documentation/pages/customization-guide.md",
        "wordCount": 868,
        "checksum": "d527513081cb8adebcc99aa63ed9f9c743a3c242f8623565c91be54ca2b7e729"
      }
    },
    "active": true
  }
};
