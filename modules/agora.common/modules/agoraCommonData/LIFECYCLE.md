# Agora Data Lifecycle

This module uses the governed data-release lifecycle model from Nodics Kickoff.

## Current scaffold state

The current module scaffold has no runtime-importable data sections. Its
`data/manifest.json` is intentionally empty until the first Home -> PLP/Search
-> PDP seed scope is finalized.

## Planned sections

| Section | Lifecycle | Destination role | Purpose |
| --- | --- | --- | --- |
| `agoraStorefrontSite` | `PUBLISHABLE` | `WCMS_STAGED` | Agora site, routes, pages, templates, slots, components, navigation, renderer mappings, and policy/static content. |
| `agoraProductCatalogSource` | To confirm | To confirm | Product/category/localization/variant source and Product publication/search projection inputs. |
| `agoraCommerceOperational` | `OPERATIONAL_VERSIONED` | To confirm | Store/channel, price, tax, promotion, inventory and fulfillment sample records required by the first storefront slice. |
| `agoraEngagementOperational` | `OPERATIONAL_VERSIONED` | To confirm | Optional public rating/review/question configuration records if enabled for V1 discovery. |

Do not add cart, checkout, payment transaction, order, cancellation, return,
refund, RMA, inspection, exchange, appeal, or reconciliation records until their
backend customer contracts are implemented or explicitly verified.

