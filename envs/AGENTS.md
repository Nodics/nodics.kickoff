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

Do not repeat the selected environment/server/node in `activeModules.modules`.
Inherit unchanged environment connection bindings. Endpoint aliases reference
the canonical deployment values while retaining protocol and authority flags.
Document intentional equal security/provider pins and their review trigger;
check resolved values and later consumer overrides before removing repetitions.

Local inherits standard nRouter API trust. Docker Local declares only its changed
published ports through `httpHardening.cors`; later layers can narrow the policy.
Frontend servers, containers, health gates and UI tests belong to their application
repositories. Backend properties must not contain a `frontends` catalogue.
nRouter supplies origin construction and header defaults; server denials remain
security policy. Local provider defaults remain framework-owned.
