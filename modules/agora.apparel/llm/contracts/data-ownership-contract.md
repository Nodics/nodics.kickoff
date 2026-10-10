# Agora Apparel data ownership

Commerce catalog release `0.0.1` (`sample-v001/commerce`) contains publishable catalog/policy
records only. The pre-customer development iterations are consolidated. Coupons, coupon batches
and stock balances are not imported to Staged. Stock receiving/opening and coupon
issuance must use their operational Online owners with independent evidence.
Explicit `sample-v001/operations` contributions now carry opening instructions
in the same coordinated application profile, deferred until publication and
executed through the existing nImport custom-owner contract. They are not generic
record imports. Catalog publication alone does not establish sellable stock.
See [operational pack](operational-pack.md) for receipt coverage, ordering,
retry behavior and the unresolved secure coupon-retention blocker. WCMS release and
Media manifests are unchanged. `test:data-ownership` enforces this separation.
Promotion authoring excludes operational analytics and budget spending. Category
and localized category records have explicit import headers. The admission test
checks actual owner policy validation and rejects unclaimed record files before
installation. Future frozen releases remain immutable and retained.

This customer application module owns its application sample data. Commerce and
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
- Apply these checks to every retained content root. Preserve immutable old roots
  through the existing manifest's validated `retainedRoots` contract; unclaimed
  version folders can otherwise be discovered as extra imports. Generate forward
  releases through nTooling and keep old payload bytes, hashes and release codes.
- Commerce `agoraApparelCommerceCatalog` and the content section use the initial
  `0.0.1` baseline in `sample-v001`, including the corrected Apparel search record
  prefix. Existing development receipts require governed fresh initialization,
  not downgrade or replay. Source validation does not claim live publication.
- Change content release versions and hashes together through the governed release
  lifecycle. Keep local and Docker initialization publication versions aligned;
  read current versions from `data/manifest.json` rather than this guide.
- Source removal does not delete previously imported runtime records. Shared media
  identities can still serve another application. Resolve usage and retire records
  through the owning Media/WCMS lifecycle before any live deletion.

Run `npm run test:data-ownership` and `npm run test:multi-domain` from the Kickoff
root. Application data and profiles remain customer-owned.
