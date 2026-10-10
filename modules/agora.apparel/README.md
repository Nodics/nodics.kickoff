# agora.apparel

Agora Apparel product and content catalogs.

The unreleased Commerce and content baseline is `0.0.1` in `sample-v001`,
including the corrected Apparel search header. Prior development iterations are
consolidated, not retained customer releases. Existing local receipts require
governed fresh initialization; installation and publication retain their normal approvals.

Use this README to understand what this module is for, which capability or composition boundary it owns, how it fits its parent hierarchy, and where developers or AI tools should continue reading.

For implementation rules, read this module `AGENTS.md` after the root-to-leaf ancestor `AGENTS.md` chain. For exact contracts and examples, read this module `llm/` guidance and the relevant global contracts under `modules/nSetup/llm`.

## Storefront navigation

The WCMS global header uses five primary paths: Home, Shop, New in, Collections, and Sale. Shop contains clothing, bags, and accessories; Collections contains brand discovery; Sale contains digital coupon products and the customer coupon wallet. Business users own labels, order, groups, media and destinations in `agoraApparelSharedComponentData.js`. The Apparel frontend controls responsive layout and menu interaction.

## Sample data ownership

The content pack contains Apparel media and merchandising, with shared
commerce/rendering contracts retained. Active release roots and versions come
from `data/manifest.json`. All retained content roots are checked for foreign
assets, orphan files and missing page/media references by
`npm run test:data-ownership` at the Kickoff root.

See [data ownership](llm/contracts/data-ownership-contract.md) for cleanup,
publication and previously imported runtime-record boundaries.

## Coordinated sample setup

The selected Commerce role admits reviewed reversals only for the retained
`agoraMainStore` checkout identity. Profile staff scope, persisted approval,
Fulfillment/Inventory evidence and original-capture Payment checks still govern
execution. Electronics and Telco are not admitted by a common order-code prefix.
The offline sandbox path proves no external charge, carrier handover or settlement.
Apparel also selects Fulfillment Core's `MANUAL_ATTESTATION` operations. Signed
staff may record a reviewed dispatch, returned package and inspection through
the owner APIs. A return cannot release Payment until every original shipped
quantity has an accepted inspection; cancellation is limited to undispatched
holds. Synthetic Local acceptance records do not certify real warehouse events.

The same application profile selects catalog records, CMS content and owned
assets, followed by explicit Online opening instructions under
`data/sample-v001/operations/records`. These are not balance or coupon snapshots.
The existing CMS and Media approvals remain in effect. Only after publication
does the profile submit its complete governed Commerce plan: all 61 Product roots,
Pricing, Inventory, Tax and three Promotion roots. Each uses normal Process review;
one Online Product never qualifies the remaining catalogue. Only after every root
has a matching approved activation receipt does Inventory admit opening stock and
Promotion admit budgets and encrypted coupon batches. A blocked contribution keeps the profile
incomplete; it must not be reported as a ready storefront.

See the [operational pack contract](llm/contracts/operational-pack.md) for exact
quantities, lifecycle, overrides, replay and current qualification limits.


This module explicitly participates in Application Builder through
`nodics.applicationBuilder.dataPack: true` in its package metadata. The owning
customer project declares frontend, domain and preset choices. Preserve the
module's existing import-manifest and content ownership rules; Builder metadata
does not import, publish or validate this module's live data.
