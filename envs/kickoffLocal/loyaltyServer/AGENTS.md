# Loyalty Server Agent Contract

- Follow the Nodics Kickoff project contract from the repository root `AGENTS.md`.
- Follow every ancestor `AGENTS.md` before changing this server boundary.
- This package owns only the responsibilities declared in `package.json.nodics.owns`.
- Keep reusable Loyalty behavior in `nodics.loyalty`; this server owns only local runtime composition, data-release destination policy, database selection, endpoint coordinates, and server-local guidance.
- Keep Commerce payment-provider behavior in Commerce. The Commerce-side `loyaltyRewardPaymentProvider` may call this server, but this server must not own product, coupon, order, payment-gateway, or settlement lifecycle.
- Keep `README.md` concise and module-level; detailed publishable documentation belongs in the owning documentation/content-pack source.
