# agora.apparel

Agora Apparel product and content catalogs.

Use this README to understand what this module is for, which capability or composition boundary it owns, how it fits its parent hierarchy, and where developers or AI tools should continue reading.

For implementation rules, read this module `AGENTS.md` after the root-to-leaf ancestor `AGENTS.md` chain. For exact contracts and examples, read this module `llm/` guidance and the relevant global contracts under `modules/nSetup/llm`.

## Storefront navigation

The WCMS global header uses five primary paths: Home, Shop, New in, Collections, and Sale. Shop contains clothing, bags, and accessories; Collections contains brand discovery; Sale contains digital coupon products and the customer coupon wallet. Business users own labels, order, groups, media and destinations in `agoraApparelSharedComponentData.js`. The Apparel frontend controls responsive layout and menu interaction.

## Sample data ownership

The content pack contains Apparel media and merchandising, with shared
commerce/rendering contracts retained. Active release roots and versions come
from `data/manifest.json`. All retained content roots are checked for foreign
assets, orphan files and missing page/media references by
`npm run test:data-ownership` at the project root.

See [data ownership](llm/contracts/data-ownership-contract.md) for cleanup,
publication and previously imported runtime-record boundaries.


This module explicitly participates in Application Builder through
`nodics.applicationBuilder.dataPack: true` in its package metadata. The owning
customer project declares frontend, domain and preset choices. Preserve the
module's existing import-manifest and content ownership rules; Builder metadata
does not import, publish or validate this module's live data.
