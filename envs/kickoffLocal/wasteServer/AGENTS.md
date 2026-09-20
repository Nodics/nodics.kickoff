# Waste Server Agent Contract

- Follow the Nodics Kickoff project contract from the repository root `AGENTS.md`.
- Follow every ancestor `AGENTS.md` before changing this server boundary.
- This package owns only the responsibilities declared in `package.json.nodics.owns`.
- Keep reusable Waste Management schemas, APIs, services, and contracts in `nodics.waste`; this server owns only local runtime composition, data-release destination policy, database selection, endpoint coordinates, and server-local guidance.
- Keep accelerator preset ownership in `nodics.accelerators/modules/waste` and scenario accelerators under that umbrella.
- Keep Loyalty reward, coupon, map, location-provider, recycler-adapter, and logistics-adapter behavior outside this server unless a later project integration explicitly contributes an adapter layer.
- Keep `README.md` concise and module-level; detailed publishable documentation belongs in the owning documentation/content-pack source.

This Local deployment declares a distinct runtime instance and an environment
reference for its retained service proof. Profile must hold the corresponding
service principal and approved deployment grant before startup. Missing proof
fails closed; never replace it with the shared bootstrap or administrator key.
After a full Local reset, an authenticated operator must reprovision the approved
deployment grants through Profile before restarting this runtime.
