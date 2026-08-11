# Nexus Data

`nexusData` is the Nodics Kickoff project module that contributes the corporate
Nodics Nexus Site, content catalog, page composition, navigation, renderer
keys, and public media policy. Reusable schemas and runtime behavior remain
owned by Nodics Catalog, WCMS/CMS, Media, Localization, and Publishing.

Canonical source lives under `data/core/source`. Generate and verify the core
import release with:

```bash
npm run generate
npm run check
npm test
```

The release contains only `nexusCorporateSite` and `nexusContentCatalog`. It
includes project-owned reference CMS contracts for Editorial listing/detail
pages and all nine standard Nexus Editorial renderer mappings. It excludes
Wiki documentation and commerce-demo data.

Customers customize the pattern by editing structured source, registering a
project renderer key in their Nexus frontend, regenerating the aggregate
manifest, and retaining the backend/frontend contract version. Executable
renderer code never belongs in this data module.
