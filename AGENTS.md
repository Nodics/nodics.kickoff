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
manifest/
  docs-content-pack.json
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
