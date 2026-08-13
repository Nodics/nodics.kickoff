# Nexus Data Agent Contract

- Follow the Nodics Kickoff root and `modules/AGENTS.md` contracts.
- This module owns only project-specific Nexus content values, import releases,
  media policy deltas, deterministic generation, and acceptance evidence.
- Reuse Catalog, CMS, WCMS, Media, Localization, Profile, and Publishing
  schemas and services. Never redefine them here.
- Corporate content belongs to `nexusCorporateSite` and
  `nexusContentCatalog`. Do not add demo-commerce data until the corporate
  local qualification gate is complete and the demo phase is authorized.
- Do not introduce structured-source folders or generator-only authoring files
  for Nexus application content. Kickoff is a partner starter project, so
  physical files must remain limited to governed bootstrap/sample import
  payloads and their manifest integrity contract.
- Business-user content changes belong in Axis, Schema Workbench, Page
  Designer, and governed data import/export flows. DevOps may use data packs
  for bootstrap, migration, environment promotion, or controlled sample data.
- Keep renderer values logical and non-executable. Browser implementation
  belongs in the independent `nodics.nexus` frontend.
- Public content must not contain secrets, credentials, private endpoints,
  unverified claims, or unlicensed media.
- Every executable file must be declared by exactly one immutable manifest
  section whose `sourceRoot`, lifecycle, and destination role match its
  physical folder. Never place expected Online projections under `data/`.
- WCMS publishable releases must contain authoring source only. Engagement
  schemas remain on the Engagement runtime and must be classified
  `OPERATIONAL_VERSIONED`, not disguised as WCMS Staged content.
