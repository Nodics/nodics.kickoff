# kickoffInt Agent Contract

## Inheritance

- Follow the Nodics Kickoff project contract: `../../AGENTS.md`.

## Module Work Rules

- Keep this module inactive unless explicitly selected by server composition.
- Add project-owned integration behavior here only after checking reusable framework/provider capabilities first.
- Preserve provider governance, diagnostics, retry/rollback expectations, access control, and layered configuration.

Editorial reviewer assignments belong in this module's `config/properties.js`
under `process.definitionContributions.reviewerAssignments`. Local and Docker
Process runtimes consume that policy through Workflow's generic customization;
do not duplicate service overrides in servers. Queue selection does not authorize
contribution ownership migration or change immutable released payloads.

The PROCESS role explicitly allows discovery of `editorial:editorialWorkflows`.
This selection does not activate Editorial or install its EXPLICIT release.
Observe installed provenance through the secured Init validation API before
configuring deployment-specific transitions and executing a governed import.
