# Nexus Data Agent Contract

- Follow the Nodics Kickoff root and `modules/AGENTS.md` contracts.
- This module owns only project-specific Nexus content values, import releases,
  media policy deltas, deterministic generation, and acceptance evidence.
- Reuse Catalog, CMS, WCMS, Media, Localization, Profile, and Publishing
  schemas and services. Never redefine them here.
- Corporate content belongs to `nexusCorporateSite` and
  `nexusContentCatalog`. Do not add demo-commerce data until the corporate
  local qualification gate is complete and the demo phase is authorized.
- Edit canonical files under `data/core/source`; regenerate committed import
  artifacts. Do not hand-edit files under `data/core/data` or the generated
  hashes in `data/manifest.json`.
- Keep renderer values logical and non-executable. Browser implementation
  belongs in the independent `nodics.nexus` frontend.
- Public content must not contain secrets, credentials, private endpoints,
  unverified claims, or unlicensed media.
