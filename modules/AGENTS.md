# kickoffModules Agent Contract

## Inheritance

- Follow the Nodics Kickoff project contract: `../AGENTS.md`.
- AI tools that enter this directory directly must first recover the repository
  root `AGENTS.md`, then return here before editing a child module.

## Module Work Rules

- Treat this directory as the project module group for `nodics.kickoff`.
- Keep this group structural and non-runtime. Do not give it executable,
  configuration, lifecycle, service, or activation ownership.
- Concrete project behavior belongs in child modules.
- Do not activate child modules from here; server composition owns activation.
