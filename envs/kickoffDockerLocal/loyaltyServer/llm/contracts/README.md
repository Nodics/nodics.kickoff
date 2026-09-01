# Docker Local Loyalty Server Contracts

This folder contains maintained AI/developer contracts for the Docker Local Loyalty Server boundary. Keep this README concise and put only durable module-specific rules here.

- Follow the root and ancestor AGENTS chain before changing this package.
- Keep wallet, reward, balance, ledger, reservation, redemption, expiry, adjustment, and reversal behavior in `nodics.loyalty`.
- Keep Commerce `loyaltyRewardPaymentProvider` behavior in Commerce Payment; this server provides Loyalty APIs and runtime coordinates only.
- Regenerate module context after metadata, README, AGENTS, source, data, or test changes.
