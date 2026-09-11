# agora.apparel

Agora Apparel product and content catalogs.

Use this README to understand what this module is for, which capability or composition boundary it owns, how it fits its parent hierarchy, and where developers or AI tools should continue reading.

For implementation rules, read this module `AGENTS.md` after the root-to-leaf ancestor `AGENTS.md` chain. For exact contracts and examples, read this module `llm/` guidance and the relevant global contracts under `modules/nSetup/llm`.

## Storefront navigation

The WCMS global header uses five primary paths: Home, Shop, New in, Collections, and Sale. Shop contains clothing, bags, and accessories; Collections contains brand discovery; Sale contains digital coupon products and the customer coupon wallet. Business users own labels, order, groups, media and destinations in `agoraApparelSharedComponentData.js`. The Apparel frontend controls responsive layout and menu interaction.
