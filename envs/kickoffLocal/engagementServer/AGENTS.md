# Customer Engagement Server Agent Contract

- Follow the Nodics Kickoff project contract from the repository root `AGENTS.md`.
- Follow every ancestor `AGENTS.md` before changing this server boundary.
- This package owns only the responsibilities declared in `package.json.nodics.owns`.
- Keep reusable framework behavior in Nodics framework modules and project-specific behavior in the correct Kickoff module, environment, server, data, or test boundary.
- Keep `README.md` concise and module-level; detailed publishable documentation belongs in the owning documentation/content-pack source.

This Local deployment declares a distinct runtime instance and an environment
reference for its retained service proof. Profile must hold the corresponding
service principal and approved deployment grant before startup. Missing proof
fails closed; never replace it with the shared bootstrap or administrator key.
After a full Local reset, an authenticated operator must reprovision the approved
deployment grants through Profile before restarting this runtime.
