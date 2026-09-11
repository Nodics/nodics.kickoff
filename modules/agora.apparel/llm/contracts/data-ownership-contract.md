# Agora Apparel data ownership

This customer/reference module owns its application sample data. Commerce and
WCMS schemas and publication operations remain framework-owned.

- Resolve active content and Commerce roots from their named sections in
  `data/manifest.json`; do not assume both use `sample-v001`.
- Include only Apparel merchandising assets and records. Shared renderer,
  type, template and commerce lifecycle contracts are intentional dependencies;
  another application's photos, product-media records and campaign copy are not.
- Keep the physical media files, asset manifest and derived Media records aligned.
  Multiple media identities may intentionally use the same owned file.
- Every media reference and component-media association must resolve an owned
  asset. Its component or product owner must exist in this application data pack.
- Every CMS page target must resolve a source component, including when the runtime
  previously retained a component imported by an older release.
- Hero component-media bindings must select the same images as the CMS slide data.
  Optional avatars must not force an application to import another pack's photos.
- Apply these checks to every retained content root. Remove superseded source
  trees that no current release selects; unclaimed version folders can be
  discovered as extra imports. Previous release contents remain in Git history.
- Change content release versions and hashes together. Keep local and Docker
  initialization publication versions aligned. Current content release: `0.0.7`.
- Source removal does not delete previously imported runtime records. Shared media
  identities can still serve another application. Resolve usage and retire records
  through the owning Media/WCMS lifecycle before any live deletion.

Run `npm run test:data-ownership` and `npm run test:multi-domain` from the Kickoff
root. The normal `npm test` gate also includes the ownership/reference checks.
