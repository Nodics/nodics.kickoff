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

The initial release contains only `nexusCorporateSite` and
`nexusContentCatalog`. It intentionally excludes Wiki documentation, News,
Blogs, and all commerce-demo data.
