# Agora Data Agent Contract

- Follow the Nodics Kickoff root and `modules/AGENTS.md` contracts.
- This module owns only project-specific Agora content values, import releases,
  deterministic generation inputs, documentation, and acceptance evidence.
- Reuse WCMS, Media, Product, Pricing, Tax, Promotion, Inventory, Fulfillment,
  Payment, Profile, Engagement, Process, Publishing, Import, and Search schemas
  and services. Never redefine them here.
- Do not implement Commerce calculations, Product discovery, search indexing,
  payment execution, fulfillment execution, lifecycle workflows, API routers,
  controllers, services, pipelines, or browser renderers in this module.
- Renderer values are logical keys only. Executable renderer code belongs in
  the independent `nodics.agora` frontend.
- Public content must not contain secrets, credentials, private endpoints,
  unverified claims, unlicensed media, or reference-site runtime dependencies.
- Every runtime-importable file under `data/` must be declared by exactly one
  immutable manifest section whose lifecycle and destination role match its
  physical folder.
- Expected Online projections and acceptance fixtures belong under `test/`, not
  under `data/`.
- The implemented V1 customer journey scope is Home -> PLP/Search -> PDP ->
  cart -> checkout -> order confirmation -> order history -> cancellation,
  return and refund lifecycle request surfaces. This module may seed the WCMS
  composition and sample catalog/operational inputs for that journey only after
  the owning backend customer APIs are implemented or explicitly verified.
