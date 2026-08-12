# Nexus Data

`nexusData` is the Nodics Kickoff project module that contributes the corporate
Nodics Nexus Site, content catalog, page composition, navigation, renderer
keys, and public media policy. Reusable schemas and runtime behavior remain
owned by Nodics Catalog, WCMS/CMS, Media, Localization, and Publishing.

The committed files under `data/core/data`, `data/core/headers`, and
`data/sample` are governed seed/import payloads for the local Kickoff starter
application. They are not a static-site authoring model and they are not the
standard way partners should maintain live content.

Verify the release contract with:

```bash
npm test
```

The release contains only `nexusCorporateSite` and `nexusContentCatalog`. It
includes project-owned reference CMS contracts for Editorial listing/detail
pages and all nine standard Nexus Editorial renderer mappings. It excludes
Wiki documentation and commerce-demo data.

Partners and project teams should customize live application content through
Axis, Schema Workbench, Page Designer, and governed data import/export
operations. DevOps may use physical data packs for bootstrap, migration,
environment promotion, or controlled sample data only. Executable renderer code
never belongs in this data module.
