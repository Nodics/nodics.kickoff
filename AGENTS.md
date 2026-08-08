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
- Project, environment, and server contributions load after product modules by
  index and customize services through the standard merge process.
- Add environments and servers only when Nodics Kickoff owns those runnable
  topologies.
- Keep runtime clean/build behavior scoped to the effective module graph for the
  server where the command is executed.
- Follow the Phase 0 contract from the checked-out `nodics.ai` framework
  repository at `llm/contracts/modularization-phase0-contract.md` before
  changing Nodics Kickoff dependency resolution, module skeletons, or runtime scripts.
