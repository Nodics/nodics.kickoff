# Kickoff Administration Agent Contract

Follow the project [AGENTS](../../AGENTS.md), [module-group contract](../AGENTS.md)
and this module's README before editing.

- Own only shared customer administration descriptors in `config/properties.js`.
- Keep generic behavior in framework capabilities; do not copy BackOffice
  services, provider registries, application records or orchestration here.
- Keep deployment targets, credentials, process/environment access, ports,
  project roots and local reset gates out of these defaults.
- Preserve Platform-only selection in Local and Docker Local. Do not extend
  functional groups to obtain configuration.
- Preserve index order before project/environment/server overlays. The module
  is runtime-loadable configuration, not an independent process.
- Apply the resolved framework's customer configuration classification contract.
- Update the project configuration guide and focused preparation/ownership
  checks when the defaults or consuming layers change. Regenerate AI context.
