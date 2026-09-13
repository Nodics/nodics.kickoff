# Nodics Kickoff Environments Agent Contract

## Inheritance

- Follow the Nodics Kickoff project contract: `../AGENTS.md`.

## Environment Work Rules

- Keep this group structural and non-runtime.
- Put environment-specific configuration in a concrete environment module.
- Put server-specific configuration in the concrete server module.
- Do not load configuration, lifecycle hooks, or services from this container.

Do not copy framework or shared project defaults into environment/server/node
properties. Keep only composition, deployment values and intentional differences;
validate the active owner and index order. Preserve explicit reset, secret,
provider qualification and authority boundaries. See
[the project configuration guide](../docs/pages/configuration-inheritance.md).
