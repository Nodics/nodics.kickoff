# Nexus Data

`nexus.web` is the Nodics Kickoff project module that contributes the corporate
Nodics Nexus Site, content catalog, page composition, navigation, renderer
keys, and public media policy. Reusable schemas and runtime behavior remain
owned by Nodics Catalog, WCMS/CMS, Media, Localization, and Publishing.

The physical layout makes the destination and lifecycle explicit:

- `data/staged/wcms` contains publishable CMS Site content imported only by
  `wcmsStagedServer` and promoted to Online only through `nPublish`;
- `data/staged/editorial` contains publishable Editorial authoring records for
  the Staged runtime;
- `data/operational/engagement` contains immutable-versioned Engagement data
  imported only by `engagementServer`; it is not copied through WCMS;
- `test/expectedOnlineProjections` contains acceptance expectations and is
  never runtime-importable.

These are governed seed/import payloads for the local Kickoff starter
application. They are not a static-site authoring model and are not the
standard way partners should maintain live content. See
`LIFECYCLE.md` for the executable classification matrix.

Application-specific documentation source belongs under `docs/`. When Nexus
documentation is introduced, its generator must emit only governed WCMS Staged
records under this module's `data/` tree and declare them in an immutable,
destination-qualified manifest section. Kickoff-wide setup and runtime guidance
remains in the repository-level `docs/`; executable renderer code remains in
the independent `nodics.nexus` frontend.

Verify the release contract with:

```bash
npm test
```

The manifest exposes three destination-qualified releases:
`nexusCorporateSite`, `nexusEditorialSource`, and
`nexusEngagementOperational`. It includes project-owned reference CMS
contracts for Editorial listing/detail pages and all nine standard Nexus
Editorial renderer mappings. It excludes Online projection fixtures, Wiki
documentation, customer submissions, and commerce-demo data.

Partners and project teams should customize live application content through
Axis, Schema Workbench, Page Designer, and governed data import/export
operations. DevOps may use physical data packs for bootstrap, migration,
environment promotion, or controlled sample data only. Executable renderer code
never belongs in this data module.
