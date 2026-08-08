# Kickoff Project Overview

Nodics Kickoff is the reference customer project for running Nodics locally and
demonstrating how a partner or customer project consumes the framework. It is
not a standard Nodics functional module such as Core, Platform, WCMS, or Cron.
It is a project-owned runtime composition that shows how those modules can be
assembled without copying framework source.

Kickoff owns project structure, local environment wiring, project modules,
sample customization points, and project documentation. Framework
documentation belongs in `nodics.docs`; Axis product documentation belongs in
the Platform `axis` backend module; browser renderers belong in `nodics.axis`.
Kickoff documentation that becomes CMS data belongs in this repository under
`data/core/source/documentation` and is generated into this repository's own
content pack.

## Why Kickoff exists

Kickoff exists so a new team can feel Nodics before they design their own
project. A partner should be able to clone the framework, clone the reference
project, run a small set of commands, log in to Axis, and see the major backend
capabilities working together.

This matters because enterprise framework adoption usually fails at the first
hour. If the first experience requires a developer to understand every module,
every dependency, every data import, and every environment property, the
framework feels heavy even when the architecture is good. Kickoff keeps the
first journey small: start the runtime, import governed seed data, open Axis,
read the documentation, and then make one safe customization.

For a business evaluator, Kickoff demonstrates that Nodics can support a real
customer project without asking the customer to fork framework code. For a
developer, it shows the concrete folder shape, package dependency model,
environment wiring, server start commands, and project-owned extension points.
For an operator, it shows how one local project can run Platform, WCMS, and
Cron as separate processes while preserving the same module ownership rules
that production will use.

## Beginner mental model

Think of `nodics.ai` as the factory equipment, `nodics.kickoff` as the sample
production line, and `nodics.axis` as the control room screen. The factory
equipment provides standard capabilities such as Core, Platform, WCMS, Media,
and Cron. The sample production line decides which equipment to connect for a
local demonstration. The control room screen connects to the running backend
and shows only the capabilities that the backend says are available and
authorized.

Kickoff is not the product every customer must ship. It is the smallest
complete example of how a customer product can be structured.

## What Kickoff demonstrates

- how a customer project depends on Nodics framework packages;
- how environment and server modules load after standard functional modules;
- how Platform, WCMS, and Cron can run as separate local servers;
- how project modules can customize runtime behavior without renaming the
  standard functional module identity;
- how customer-owned documentation can appear in Axis beside Framework,
  Swaggers, and Nodics Axis.

## Source map

The important Kickoff locations are:

- `package.json` describes the project package and local scripts;
- `.env` describes developer-specific framework checkout location and local
  overrides;
- `src/sync-framework-dependencies.js` prepares local framework package links;
- `src/start-platform-server.js`, `src/start-wcms-server.js`, and
  `src/start-cron-server.js` start local runtime servers;
- `config/` contains project-level defaults;
- `envs/kickoffLocal/` contains local environment and server composition;
- `modules/` contains project-owned modules and customization examples;
- `data/core/source/documentation/` contains authored Kickoff documentation;
- `data/core/data/documentation/` and `manifest/docs-content-pack.json` are
  generated content-pack outputs.

Authored documentation is the source. Generated records are the importable CMS
projection. Do not hand-edit generated records to fix documentation.

## Runtime boundary

Kickoff is loaded after framework modules. That means it can contribute
configuration, project modules, and project-owned documentation, but it must not
move framework behavior into the customer repository. A customer extension such
as `kickoff.platform` may customize Platform implementation while the
business-facing functional identity remains `nodics.platform`.

Runtime composition and code dependency are related but different. Package
dependencies make framework modules available to the project. Server
configuration decides which modules are loaded, in which order, for a specific
runtime process. Service override behavior follows module loading and indexes,
not simply the order in `package.json`.

## Documentation boundary

Kickoff docs are imported through WCMS like any other governed CMS content
pack. Axis renders the resolved CMS page and does not own the documentation
records. The BackOffice registry exposes the documentation source so the Axis
Documentation dashboard can discover it.

## Common mistakes

- Do not put framework documentation in Kickoff unless the page is explaining
  how Kickoff consumes the framework.
- Do not copy `nodics.core`, `nodics.platform`, `nodics.wcms`, or `nodics.cron`
  source into this repository.
- Do not move Axis renderers or browser code into Kickoff.
- Do not assume a customer project will always sit beside `nodics.ai`; use the
  framework-root configuration.
- Do not change generated content-pack files without regenerating from source.
- Do not rename functional capabilities when a customer module only customizes
  their implementation.

## How to know Kickoff is working

Kickoff is healthy when Platform starts, WCMS starts, the module registry shows
mandatory functional modules as active, optional modules can be registered
through Axis, documentation content packs can be imported or updated through
BackOffice/WCMS, and Axis can render Framework, Swaggers, Nodics Axis, and
Nodics Kickoff documentation from backend-owned sources.

## Continue

- [Local runtime topology](local-runtime.md)
- [Customer customization guide](customization-guide.md)
