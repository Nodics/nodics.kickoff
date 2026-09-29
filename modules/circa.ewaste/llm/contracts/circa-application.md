# Nodics Circa Application Contract

**Nodics Circa** is the reference customer-owned application experience for
e-waste and circular asset journeys.

Circa composes reusable Nodics frameworks. It must not become the owner of Waste
truth, wallet ledger, coupon, commerce, media or location lifecycle machinery.
It does own Circa branding, content, application selections and policy records
expressed through those capabilities' supported contracts.

## Application Responsibilities

Circa owns its customer experience requirements and composition for:

- presenting a public single-page Circa site that explains the business idea,
  customer participation model, environmental outcome, customer benefit, trust
  model, eligibility, and support path
- creating e-waste submissions with photos, description, quantity or weight,
  category or item type, condition, and preferred collection point when
  available
- showing staged, submitted, approved, rejected, received, and
  impact-calculated submission states
- showing approved customer-owned waste assets and certificate-style evidence
- showing reward-point and carbon-credit wallet projections without owning the
  ledger
- starting sell, gift, donate, redeem, and coupon-purchase flows when policy
  allows them
- showing customer asset dashboard listings, filters, detail pages, and
  policy-driven asset actions
- showing tradeable approved assets in Circa Shop through Product/Commerce
  listing projections
- surfacing coupon marketplace offers and customer-owned coupon entitlements
  through Promotion/Coupon contracts

## Ownership Boundaries

Circa does not own:

- `nodics.waste` taxonomy, submission truth, verification, receipt, impact,
  movement, compliance, or approved asset records
- Media upload, file storage, thumbnails, secure access, retention, or raw
  photo/document records
- Wallet/Loyalty reward points, carbon credits, reserve, debit, transfer,
  reversal, expiry, or balance
- Promotion/Coupon coupon listings, issuer enterprise rules, coupon entitlement,
  coupon claim, or store/POS redemption
- Commerce/Product listings, bids, orders, payment, settlement, or fulfillment
- Location/map coordinates, geocoding, nearby search, visibility, or map-provider
  state

Circa owns its branding, campaign copy, partner-specific choices and policy
deltas. Provider secrets remain governed deployment references rather than
authored content. Illustrative environmental estimates are not certification
claims. Reusable business mechanics and canonical schemas remain with their
framework/accelerator owners even when Circa first requests the capability.

## Policy Rule

### Existing Data Compatibility

The old sample taxonomy remains an immutable compatibility snapshot: 20 records
equal to the old eWaste defaults, four impact-profile overrides and 28 customer
additions. The selected reference-only successor is `circa.ewaste:waste-policy`
version `0.0.1` in `core-v002`, above `eWaste:core-reference` version `0.0.1` in
the same source sequence. Both are EXPLICIT. Existing nImport source-key
composition supplies shared fields from eWaste and applies 24 Circa profile
selection deltas plus the customer additions and final core policy. Matching
filenames, export keys and header targets are required; these are not runtime
JavaScript imports of mutable framework records. MOBILE_DEVICE's customer name,
profile and revision-2 policy win once in the final composed record.

The old `core-v001:waste-policy` and `sample-v001:waste` sections remain exact
snapshots under `retainedRoots` with `scope: SECTIONS`. Unrelated sibling sections
remain active and are not copied or frozen. The current sample successor is
`circa.ewaste:waste` version `0.0.5` in `sample-v004`: it excludes category,
item-type and impact-profile writes. It is EXPLICIT and optional in application
preparation. This prevents automatic sample replay during reference adoption;
it is not an importer-enforced fresh-only flag. The parent/operator must establish
a genuinely fresh sample destination before explicitly selecting it. Never use
this transaction pack to upgrade an installed customer's references.

For reference adoption use the existing nImport core validation/install API with
`releaseCodes: ["eWaste:core-reference", "circa.ewaste:waste-policy"]` and
`expectedReleases: { "eWaste:core-reference": "0.0.1", "circa.ewaste:waste-policy": "0.0.1" }`.
The existing Local Waste foundation profile selects material foundation first
and these same reference owners. Canonical discovery orders the matching v002
releases by owner index; composition requires a CURRENT baseline receipt with
matching checksum/version, or a selected predecessor during preflight. Explicit
version pins reject stale selections. No new dependency or migration registry
exists. Source alignment and these pins must be requalified for later versions.

Offline tests execute canonical nImport processing with in-memory receipt and
persistence ports. They preserve all historical Circa keys, the exact profile
metadata, collection/acceptance policy, and old saved assessments; they assert
no submission/asset/impact-result writes during core adoption and no unrelated
baseline replay. Eleven sample results retain `CIRCA_SAMPLE_OPENING` unchanged.
Installed receipts, divergent operator policy, live imports and recovery remain
separate parent-owned gates. Unknown provenance blocks operational adoption.

Marketplace eligibility, asset transfer, reward settlement, carbon-credit
settlement, and coupon-redemption settlement behavior must resolve from
schema-backed policy records that business users can manage in Axis BackOffice.

Default e-waste policies may ship with the `eWaste` accelerator, but Circa must
not hardcode sale, gift, donation, reward consumption, carbon transfer, coupon
purchase, issuer-enterprise settlement, or default-enterprise settlement
behavior.

Use `circa-reusable-backlog.md` as customer requirement-origin context, not
framework implementation authority or evidence that a capability is complete.
Resolve current contracts in the owning Waste, eWaste, Loyalty, Commerce,
Location, Profile and Communication modules before implementation.

## Public Customer Journey

The first-time visitor lands on a single-page public Circa experience. The page
must explain what Circa is, what problem it solves, how e-waste submission
works, how customers participate, what environmental difference they make, how
they benefit, and where they can get help.

The primary navigation must include:

- `Submit Waste`
- `Find Collection Center`
- `Shop`
- `Help`

`Submit Waste` opens the guided e-waste journey. The user is asked to login
with username or email and password. A new customer registration asks only for
email, name, and password, then registers and logs in the customer. OTP remains
deferred and must not be forced into the MVP journey.

After login, Circa shows a conversational submission UI. Before asking for an
image, Circa requests or confirms customer location and checks for nearby
collection centers through Location/Waste Collection contracts. If no collection
center is nearby, Circa shows visible collection centers and a motivational
message asking the customer to reach out or visit an available center.

When location is confirmed, the customer can capture a photo with camera or
upload a file. AI extracts suggested metadata from the image and Circa shows a
minimal confirmation summary:

- generated item name
- e-waste type, category, family, or material
- estimated reward points
- estimated carbon credits
- customer and environmental benefit summary

These values are estimates until admin approval. When the customer confirms,
Circa creates the submission, sends it for approval, and shows an under-approval
message explaining that the customer will be notified.

## Admin Approval Journey

Axis BackOffice must expose a separate waste asset/submission review section for
business users. Admin lists are status-driven and should include:

- `Pending Review`
- `Approved Assets`
- `Rejected Assets`
- `Needs More Info` when policy enables it

From a submitted asset, the business user can open the detail page, view the
original customer evidence, AI-extracted data, customer-submitted fields,
collection-center context, impact estimates, policy matches, and audit history.
The business user can update the final verified data and then approve or reject
the submission.

Approval creates or updates the customer-owned asset, triggers wallet settlement
for reward points and carbon credits through Loyalty/Wallet contracts, and sends
an approval notification. Rejection requires a reason and sends a rejection
notification to the customer.

Original photo/evidence and raw AI output are immutable evidence. Admin final
data is a verified overlay with audit history, not a silent overwrite.

## Customer Asset Dashboard

After login, customers have a dashboard where they can see their own submitted
and approved assets. The dashboard should behave like a product-listing style
component while keeping the domain object as a waste asset.

Customer dashboard filters should support:

- approval status
- ownership status
- tradeability status
- family, category, material, and item type
- collection center or region
- reward-point range
- carbon-credit range
- submission date
- verification result

Asset cards should show the image thumbnail, verified or generated item name,
status, category/material, reward-point summary, carbon-credit summary,
submission date, and available primary action.

Clicking an asset opens the asset detail page. The detail page shows the image,
status, ownership badge, reward and carbon summary, original evidence,
AI-suggested data, admin-verified data, notifications, wallet references,
ownership history, and available actions.

For approved assets, policy may enable:

- trade or list for sale
- gift
- donate or recycle
- redeem rewards for coupon
- view ownership and wallet history
- view verification certificate/evidence

Wallet balance and ledger truth remain owned by Loyalty/Wallet. Circa only shows
wallet projections and transaction references.

## Circa Shop Journey

When a customer marks an approved asset as tradeable, Waste validates ownership
and policy eligibility, creates or requests a Product/Commerce projection, and
stores the projection reference. The waste asset moves to listed status and the
projected item appears in Circa `Shop`.

Circa `Shop` shows all tradeable approved assets using Product/Commerce listing
contracts. Listing, bid, cart, order, payment, and sale completion remain owned
by Product/Commerce. Waste owns the asset lifecycle and ownership transition.

Shop cards should show asset image, verified name, category/material, carbon
credits attached, asking reward points or bid state, seller display name or
masked identity, collection/transfer mode, and verification badge.
