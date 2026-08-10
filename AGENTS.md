# Nodics Kickoff Agent Contract

- Nodics Kickoff is a customer/reference project, not a Nodics product module.
- Do not copy framework source into this repository.
- Nodics Kickoff may default to the sample layout where it sits parallel to
  `nodics.ai`, but customer projects may live in any workspace layout.
- Consume the Nodics framework through declared package dependencies and/or an
  explicit local framework-root configuration.
- Customer modules such as `nodics.kickoff.platform` or `nodics.kickoff.cron` may extend
  framework functional modules to customize implementation. They do not rename
  the standard functional module identity exposed to BackOffice/Axis.
- Kickoff-specific documentation belongs in this customer backend project, not
  in `nodics.docs`, `nodics.platform/modules/axis`, or the `nodics.axis`
  frontend. When Kickoff supplies CMS-importable documentation, use this
  project-owned content-pack structure:

```text
data/
  core/
    source/
      documentation/
    data/
      documentation/
    headers/
data/
  manifest.json
```

- Use that structure for Kickoff setup, demo business flows, sample data,
  project modules, custom API behavior, onboarding, and project extension
  guidance. Keep `README.md` as a concise human overview and keep permanent
  detailed guidance in the generated documentation content pack.
- Project, environment, and server contributions load after product modules by
  index and customize services through the standard merge process.
- Add environments and servers only when Nodics Kickoff owns those runnable
  topologies.
- Keep runtime clean/build behavior scoped to the effective module graph for the
  server where the command is executed.
- Follow the Phase 0 contract from the checked-out `nodics.ai` framework
  repository at `llm/contracts/modularization-phase0-contract.md` before
  changing Nodics Kickoff dependency resolution, module skeletons, or runtime scripts.

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

- Prefer properties, server/environment deltas, project module overlays, and
  documented configuration seams before changing framework code.
- Put constants and error/status values in the correct definition/configuration
  file; do not hide reusable statuses, API categories, lifecycle names, or
  registry states inside unrelated project properties.
- Keep source files export-friendly so customer overlays can replace or extend
  behavior through the Nodics merge/loading model.
- Every authored JavaScript or JSON-like configuration file should be
  formatter-clean, intentionally indented, and documented with file-level and
  exported-function comments where the file participates in runtime,
  documentation generation, setup, or acceptance.
- Do not hand-edit generated documentation data to fix source documentation.
  Update `data/core/source/documentation`, then regenerate the content pack.
