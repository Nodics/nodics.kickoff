# Agora Data

`agoraData` is the Nodics Kickoff project content-pack module for the future
Nodics Agora customer storefront.

This module packages governed seed/import records for Agora content and sample
commerce data. It does not own Commerce, WCMS, Media, Product, Pricing,
Inventory, Fulfillment, Payment, Engagement, Process, Search, or Publishing
runtime behavior.

The initial scaffold is intentionally empty of runtime-importable sample data.
It establishes the content-pack boundary, manifest contract, documentation
location, and tests before Home -> PLP/Search -> PDP records are added.

Planned first data scope:

```text
Home -> PLP/Search -> PDP
```

Planned first records:

- Agora site, routes, templates, slots, components, navigation, renderer
  mappings, and policy/static content;
- category, category localization, product, product localization, variants, and
  variant localization;
- Product publication/search projection inputs through Product publication or
  governed import/search-target dispatch;
- price, inventory, optional promotion, optional fulfillment promise, and
  optional review summary records only where the first storefront slice needs
  them.

Cart, checkout, payment, order tracking, cancellation, return, refund, exchange,
appeal, and reconciliation records are out of scope for this initial scaffold.

Verify the scaffold boundary with:

```bash
npm test
```

