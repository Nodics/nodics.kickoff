# Nexus application documentation source

This directory is the ownership boundary for future Nexus-specific authored
documentation. It is intentionally not a runtime or import directory.

When application documentation is added:

- keep its catalogue and Markdown sources under this `docs/` directory;
- generate WCMS records into a dedicated path below `data/staged/wcms`;
- declare every generated file in one immutable `data/manifest.json` section;
- install into WCMS Staged through nImport, review through Axis, and publish
  through nPublish before Nexus can consume it from Online;
- preserve stable document, page, route, component and renderer codes;
- keep installation optional and available only through authorized Axis
  operations;
- never hand-edit generated records or perform direct database CRUD.

No Nexus documentation content is created by this structural change. A real
catalogue and generator should be added only with approved application-owned
documentation.
