# Loyalty Server Agent Contract

- Follow the Nodics Kickoff project contract from the repository root `AGENTS.md`.
- Follow every ancestor `AGENTS.md` before changing this server boundary.
- This package owns only the responsibilities declared in `package.json.nodics.owns`.
- Keep reusable Loyalty behavior in `nodics.loyalty`; this server owns only local runtime composition, data-release destination policy, database selection, endpoint coordinates, and server-local guidance.
- Keep Commerce payment-provider behavior in Commerce. The Commerce-side `loyaltyRewardPaymentProvider` may call this server, but this server must not own product, coupon, order, payment-gateway, or settlement lifecycle.
- Keep `README.md` concise and module-level; detailed publishable documentation belongs in the owning documentation/content-pack source.

This Local deployment declares a distinct runtime instance and an environment
reference for its retained service proof. Profile must hold the corresponding
service principal and approved deployment grant before startup. Missing proof
fails closed; never replace it with the shared bootstrap or administrator key.
After a full Local reset, an authenticated operator must reprovision the approved
deployment grants through Profile before restarting this runtime.
