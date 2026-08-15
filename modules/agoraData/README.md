# Agora Data

`agoraData` is the Nodics Kickoff project content-pack module for the Nodics
Agora customer storefront.

This module packages governed seed/import records for Agora content and sample
commerce data. It does not own Commerce, WCMS, Media, Product, Pricing,
Inventory, Fulfillment, Payment, Engagement, Process, Search, or Publishing
runtime behavior.

The content pack now contains the governed V1 storefront seed for the first
end-to-end customer journey. It establishes the content-pack boundary, manifest
contract, documentation location, and tests while keeping runtime behavior in
the owning Nodics modules and the independent `nodics.agora` frontend.

Current V1 data scope:

```text
Home -> PLP/Search -> PDP -> cart -> checkout -> order confirmation ->
order history -> cancellation/return/refund request surfaces
```

Current records:

- Agora site, routes, templates, slots, components, navigation, renderer
  mappings, and policy/static content for the customer journey;
- category, category localization, product, product localization, variants, and
  variant localization;
- Product publication/search projection inputs through Product publication or
  governed import/search-target dispatch;
- price, inventory, tax, discovery configuration, and commerce-search ranking
  inputs where the first storefront slice needs them.

Promotions, reviews/ratings, wishlist/compare, exchange, appeal,
reconciliation-required handling, real carrier/payment-provider certification,
and licensed production media remain later owned-capability or release-gate
work. This module must not seed executable behavior for those capabilities.

Verify the scaffold boundary with:

```bash
npm test
```
