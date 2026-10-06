# Commerce Server Agent Contract

- Follow the Nodics Kickoff project contract from the repository root `AGENTS.md`.
- Follow every ancestor `AGENTS.md` before changing this server boundary.
- This package owns only the responsibilities declared in `package.json.nodics.owns`.
- Keep reusable framework behavior in Nodics framework modules and project-specific behavior in the correct Kickoff module, environment, server, data, or test boundary.
- Keep `README.md` concise and module-level; detailed publishable documentation belongs in the owning documentation/content-pack source.

This Local deployment declares a distinct runtime instance and an environment
reference for its retained service proof. Profile must hold the corresponding
service principal and approved deployment grant before startup. Missing proof
fails closed; never replace it with the shared bootstrap or administrator key.
Native-Local Profile bootstrap may reconcile its own active configured grants
and generated proof. Revoked, disabled, differently owned and non-Local grants
remain operator-owned. Reward-payment scopes belong only to this runtime's
explicit permission pin; test inherited startup permissions and sibling denials.
