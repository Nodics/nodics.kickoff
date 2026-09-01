# Waste Server Contracts

This folder contains maintained AI/developer contracts for the Waste Server boundary. Keep this README concise and put only durable module-specific rules here.

- Follow the root and ancestor AGENTS chain before changing this package.
- Keep generic Waste Management behavior in `nodics.waste`.
- Keep scenario/domain accelerator presets under `nodics.accelerators/modules/waste`.
- Keep project overlays in the customer project layer and load them after accelerator presets.
- Keep Loyalty, coupon, map, location-provider, recycler-adapter, and logistics-adapter behavior outside this server unless a later integration layer explicitly owns that adapter.
- Regenerate module context after metadata, README, AGENTS, source, data, or test changes.
