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
- Kickoff-wide documentation belongs in this customer backend project, not in
  `nodics.docs`, `nodics.platform/modules/axis`, or the `nodics.axis` frontend.
  Author permanent Kickoff-wide source under `docs/`; generate CMS-importable
  records into the governed project data tree:

```text
docs/
  catalogue.json
  pages/
data/
  core/
    data/
      documentation/
    headers/
  manifest.json
```

- Use Kickoff `docs/` for project-wide setup, runtime composition, onboarding,
  customization, qualification and operations. Application-specific
  documentation belongs under the owning application data module, for example
  `modules/nexus.web/modules/nexusWebData/docs/` or `modules/agora.common/modules/agoraCommonData/docs/`; its generated records
  belong in that module's lifecycle-qualified `data/` release. Keep `README.md`
  files concise.
- Project, environment, and server contributions load after product modules by
  index and customize services through the standard merge process.
- Add environments and servers only when Nodics Kickoff owns those runnable
  topologies.
- Keep runtime clean/build behavior scoped to the effective module graph for the
  server where the command is executed.
- Follow the Phase 0 contract from the checked-out `nodics.ai` framework
  repository at `llm/contracts/modularization-phase0-contract.md` before
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
  Update the owning `docs/` source, then regenerate the content pack.
