# Platform Server Agent Contract

- Local Platform enables the existing Runtime Governance capability so schema-owned
  provider secrets can use the nSystem encrypted configuration store. This does not
  enable Dynamo on sibling runtimes or grant customer configuration permissions.

- Follow the Nodics Kickoff project contract from the repository root `AGENTS.md`.
- Follow every ancestor `AGENTS.md` before changing this server boundary.
- This package owns only the responsibilities declared in `package.json.nodics.owns`.
- Keep reusable framework behavior in Nodics framework modules and project-specific behavior in the correct Kickoff module, environment, server, data, or test boundary.
- Keep `README.md` concise and module-level; detailed publishable documentation belongs in the owning documentation/content-pack source.
