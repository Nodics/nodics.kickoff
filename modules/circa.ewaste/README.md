# Circa customer backend

`circa.ewaste` composes the Circa website over the reusable `eWaste` domain
accelerator. It owns application identity, presentation, registration/contact
adapters, sample valuation and deployment deltas, plus governed sample content.

Its site API `/nodics/circa.ewaste/v0` serves experience, registrations, contact and Telegram launch validation.
Domain journeys use `/nodics/eWaste/v0`. Owning frameworks keep submissions,
assets, wallets, orders, coupons, media and locations. Sample records retain their
existing release identities and must not be reimported over transaction history.

Circa checks arrival without creating a submission. Photo preparation analyzes
temporary bytes first, then saves Media and a prepared Waste draft after success.
The old empty-draft creation route is rejected. Closing before analysis succeeds
cancels preparation; a failed replacement retains the previously saved item.
Drafts remain separate from submitted items in the customer workspace.

Run `npm test` for project adapters and configuration. See
[the connected journey guide](docs/pages/customer-journey.md) and
[application contracts](llm/contracts/README.md) for configuration and acceptance.

Published page composition and artwork are delivered from WCMS Online. The
`operations` sample release supplies independent verifier/approver roles and
Profile-owned scopes; see the guide's operational-role matrix before assigning
staff or running approval acceptance.

The shared submission now applies permission-aware fresh arrival and automatic
photo analysis through project policy adapters. Web browser acceptance is recorded
in the guide; durable Telegram identity links, source notifications, rich metadata
and full review-history contracts remain pending. The `/telegram` shell is not
actual Telegram end-to-end qualification.

Location recovery distinguishes unavailable, expired, missing-accuracy and approximate readings. Desktop capture may fall back to browser geolocation; the backend still requires the configured accuracy and arrival radius. A failed check preserves saved evidence and cannot confirm arrival.

The `customer-workspace` core release adds `/account/waste` WCMS composition for
customer listing, Quick view and full item detail, with no transactional samples.
It owns the banner, labels and detail section order. Customer initialization
includes this release before publishing the Circa site. Existing installations
install only `circa.ewaste:customer-workspace` into WCMS Staged, then create and
validate a `cms` / `pageRoute` publication for `circaWasteWorkspaceRoute` using
its actual saved source version. Request approval and complete the normal Process
review to activate Online; do not reimport the old sample ownership/ledger data.

The frontend renderer is shared by web, mobile and Telegram. eWaste supplies
owner-scoped pagination, details and domain actions, while the canonical Waste
item descriptor remains authoritative. See the frontend `customer-workspace`
live acceptance for read-only listing/detail checks and cancelled command previews.

Circa selects the eWaste OpenAI environmental assessment provider first, with the local WARM electronics adapter as configured fallback. The separate environmental call uses normalized item metadata and retrieved references; invalid or timed-out responses advance to fallback. Customer labels are Potential CO₂e savings, Carbon equivalent (tCO₂e), and Carbon units for existing rewards. The latter are not issued credits. Estimates preserve weight bounds, provider/model provenance, source references, geography and scenario assumptions. Missing defensible evidence remains unknown. Rewards use original approval evidence; later reassessments and explicit acceptance do not revalue existing balances. Axis approved-submission detail exposes assessment history and review-before-accept actions; asset detail exposes read-only history.

The [Shop and Coupons catalogue guide](docs/pages/catalogue.md) describes public product browsing, the supported Circa discovery extension, ownership boundaries and reference deployment limits.

The Circa setup profile prepares its Location map foundation, Waste presets,
local sample profiles/operator access, collection centres, reward programme,
Commerce Staged catalogue and published website. These sample releases are
limited to Local and Local Production Simulation. Commerce projection publication
remains a separate governed operation; website publication does not activate a
Commerce catalogue. Reinitializing sample operational data is for fresh local
qualification environments, never a production-data refresh.

Keep the canonical router and utility registry files even when empty. They are
inherited extension points, not copied framework implementations. `package.json`
`nodics.owns` must reflect actual source responsibilities, including `utility`.
See `llm/examples/README.md` for customer extension and rejection examples.

Impact assessment is mandatory in the eWaste journey. Circa returns the domain-prepared assessment and propagates provider/profile failures for retry; it must not convert them into an empty ready draft. Partial input-only coverage remains explicit and does not imply carbon calculation.
