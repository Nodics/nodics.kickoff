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
[the project configuration guide](../data/docs-v001/records/documentation/kickoffDocumentationComponentData.js).

Do not repeat the selected environment/server/node in `activeModules.modules`.
Inherit unchanged environment connection bindings. Endpoint aliases reference
the canonical deployment values while retaining protocol and authority flags.
Document intentional equal security/provider pins and their review trigger;
check resolved values and later consumer overrides before removing repetitions.

Local declares customer browser origins while inheriting framework browser origins.
Docker Local declares its published ports through `httpHardening.cors`; later layers can narrow the policy.
Frontend servers, containers, health gates and UI tests belong to their application
repositories. Backend properties must not contain a `frontends` catalogue.
nRouter supplies origin construction and header defaults; server denials remain
security policy. Local provider defaults remain framework-owned.

Inherit CMS, Editorial and Process neutral transport defaults; retain explicit
connections, provider opt-ins, publication roles and action allowlists. Do not
restore branchless database `selected` bindings: they resolve to no contribution.
Verify schema-derived participation and database isolation through the existing
configuration inheritance test before removing any actual module exception.
