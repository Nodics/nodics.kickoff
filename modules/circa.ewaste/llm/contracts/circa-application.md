## Publication Workflow Preparation

Circa selects the explicit `media:mediaPublicationWorkflow` release on Process
before its data packages. Local's Platform configuration additionally declares
`product:productPublicationWorkflow`, `pricing:pricingPublicationWorkflow`,
`tax:taxPublicationWorkflow`, `promotion:promotionPublicationWorkflow` and
`inventory:inventoryPublicationWorkflow` through the framework's bounded
`preparation.prerequisites` list because that deployment selects those governed
publication providers. Docker Local does not select them and retains Media only.
These declarations reuse the existing Process destination contribution catalogue;
they do not widen discovery, enable providers or install security grants.

Process foundation completion is not evidence that explicit owner workflows are
installed. Clean preparation exposes their actual nImport receipt/version and
preflights every group before any write. Only explicit user preparation invokes
installation. Reviewers, permissions, exact retained publication versions and
Process decisions remain independent gates. Existing instances keep pinned
definitions; never borrow CMS approval or rewrite a prior workflow instance.
Later projects customize their selected providers and prerequisite descriptors
through their own application/deployment layers, not framework source copies.

## Profile Placement Forward Release

`circa.ewaste:profile` now selects version `0.0.5`, `sample-v007`, EXPLICIT,
REFERENCE, PLATFORM. Its stable source is checksummed; reference records do not
acquire artificial business versioning (`versioningPolicy: NONE`). Historical
`0.0.4` is retained in `retainedRoots.sample-v001.sections.profile` with its
original three file hashes and bytes unchanged.

Only the Customer `signUpAll` header adds approved `enterpriseCode: default`.
Address headers and both approved record files are unchanged. nImport validates
the explicit target through Profile, which requires a fresh active enterprise
and active exact import tenant. Only private awaited request admission carries
placement; no importer identity, row marker, inferred enterprise, fabricated
consent or eligibility exemption is supplied.

Platform readiness alone does not admit Customer import. Eligibility defaults
remain disabled/unqualified and no approved policy is invented. Profile must
report onboarding readiness first; without that evidence, do not retry Customer
preparation. The independent `circa.ewaste:operations` `0.0.2` selector contains
only staff and scope writes, but still requires active referenced groups and
principals, existing guard admission and credential-stamp owners. Selecting it
does not disable human-scope or canonical identity protections.

After both rebuilt Platform source and Profile onboarding readiness are proven,
the authorized operator validates
the exact `circa.ewaste:profile` catalogue version `0.0.5` and then prepares it
through the existing Axis application setup flow. Preserve old failed receipts;
do not force `0.0.4`, reset rows, or select the optional Commerce operational
snapshot. Existing eligibility/credential/consent requirements may still refuse
records; such refusal remains a genuine owner prerequisite, not a bypass.
Source/test passes do not establish live installation acceptance.

## Commerce Forward Release And Partial Import Recovery

The historical `circa.ewaste:commerce` version `0.0.4` mixed policy and
operational schemas under `PUBLISHABLE -> COMMERCE_STAGED`. Its exact section
snapshot and file hashes remain in `retainedRoots.sample-v001.sections.commerce`.
Do not edit, delete or relabel this evidence, its original files, failed run,
or already imported rows. Other active sibling sections remain independent.

The active selector remains `circa.ewaste:commerce`, now version `0.0.5`,
source root `sample-v005`, `EXPLICIT`, immutable and publishable to
`COMMERCE_STAGED`. Its 12 schema targets are store, priceBook, priceRow,
taxPolicy, warehouse, category, categoryLocalization, product,
productLocalization, productVariant, productVariantLocalization and promotion.
Existing record identities, references, prices and business terms remain
unchanged. Promotion budget retains policy limit only; `spent` is omitted.
No coupon, couponBatch or inventoryBalance target is included.

The separate `circa.ewaste:commerce-operational` version `0.0.1` in
`sample-v006` is immutable `OPERATIONAL_VERSIONED -> COMMERCE`, `EXPLICIT`
and optional in Circa setup. It retains only existing approved coupon,
couponBatch and inventoryBalance source records. It is not a publication
source, automatic preparation step, sale authorization or instruction to reset
stock. Its raw snapshot imports are backend-blocked: approved issuance must
use Promotion-owned operations, and stock quantities require Inventory-owned
movement evidence. Publication, qualified seller/issuer authority and
approved stock provenance are prerequisites, not grants created by a sample
or configuration flag. Even enabling existing qualification flags does not
turn raw snapshots into owner-approved operations. No new grant, flag,
credential, token, coupon code, person or business term is authored here.

Operator order:

1. Read the retained failed run through secured Import History and correlate
   `dataReleases` releaseCode/version/checksum with installation receipts,
   tenant, environment, destination and attempt status. Counters alone do not
   establish an immutable receipt or rollback.
2. Validate the forward policy selector with expected version `0.0.5`, then
   explicitly prepare it through nImport. Do not retry or force old `0.0.4`.
   Preserve the 74 reported successes and all existing operational rows.
3. Complete governed publication and verify current Online pointers and
   retained policy before exposing offers. Staged import alone is not live.
4. Review the optional operational selector separately. Existing approved
   source describes intended stock, not permission to overwrite it. Use the
   existing issuer and Inventory operations for approved effects, retaining
   idempotency and movement evidence. The snapshot pack stays blocked until
   a genuine owner-governed import protocol exists; never bypass it with direct
   DB writes, generic saveAll retries or enabled qualification flags.

The source fix does not migrate earlier misplaced rows, certify live receipts,
or run imports. Cleanup/migration requires a separately scoped owner plan.
Customer customization can author later immutable roots and layer existing
setup selectors; it cannot mutate retained releases or put operational state
in Staged publication. Rebuild before validating the new catalogue. CLI receipt
inspection requires supplied employee authority with history/detail and
release-view permissions; never scrape browser secrets or substitute unsigned
service identity.

## Nodics Circa Application Contract

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
