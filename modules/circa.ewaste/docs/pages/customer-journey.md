# Connected Circa local customer journey

Updated: 2026-09-09

## Scope and authority

`circa.ewaste` owns Circa site composition, application identity, reference data
and layered deployment policy. The single `eWaste` domain accelerator composes
reusable electronic-waste journeys; it defines no parallel domain schemas.
Waste stores submissions, evidence references, reviews, assets and ownership
events. Profile stores identity. Media stores original files. Copilot supplies
advisory extraction and conversation. Loyalty owns balances and ledger entries.
Commerce owns listings, prices, inventory, orders and coupon entitlements.
Engagement owns contact intake. Location owns coordinates.

The configured impact provider uses the sourced EPA WARM electronics method. Any supported later configuration
layer can select another adapter, factor set, defaults or valuation service.
No carbon metric in this sample is a certified credit.

## Start the local topology

From the Kickoff project, use its existing `topology:start:all` command or the
individual `start:*` commands. Required runtimes are Profile/Platform 4300,
WCMS Staged/Media 4312, WCMS Online 4314 when publishing content, Process 4330,
Engagement 4340, Commerce Online 4350, Commerce Staged 4352, Loyalty 4360,
Waste 4370, and Location 4380. Axis runs separately at its configured frontend
port 3300; Electronics uses 3400, Telco uses 3500 and Circa uses 3600.

Local dependencies include MongoDB, Elasticsearch and Ollama. The configured
local Copilot profile uses `gemma3:4b`; keep model credentials and identity tokens
out of source and frontend configuration. Browser photo analysis uses the actual
local provider, and errors leave the draft editable.

Use `npm run configure:framework` to validate the project composition. This
validation does not certify the running customer journey.

## Governed sample import

Each section in `data/manifest.json` has checksummed source files and a declared
runtime destination. With an authorized local employee session, submit
`POST /nodics/import/v0/sample/install` on the destination runtime with:

```json
{"releaseCodes":["circa.ewaste:profile"],"options":{"recursive":false}}
```

Select the corresponding section and destination:

| Section | Runtime | Main records |
| --- | --- | --- |
| `profile` | 4300 | Three sample customers and addresses |
| `location` | 4380 | Sample collection coordinates |
| `waste` | 4370 | Taxonomy, collection points, submissions, reviews, assets and impact evidence |
| `loyalty` | 4360 | Reward types/program, wallets, opening balances and immutable opening ledger |
| `commerce` | 4352 | Products, variants, localizations, prices, inventory, coupon pools and tax policy |
| `content` | 4312 | 18 governed original/illustrative image and brand assets |

Media records declare `asset.sourceFile`; nImport hydrates the files through the
Media storage provider. An assets-only folder is not an import of media records.

Import is an initial environment operation. Do not reimport opening balances or
ownership over an environment already used for transactions. Preserve that
history, or use a separately provisioned clean local environment.

## Commerce publication

Publish the `circaStaged` catalogue for `circaMainStore` with Product's governed
`POST /nodics/product/v0/products/publication/search`, requesting
`includeProjectionSnapshots: true`. Send the returned snapshots to Online
`POST /nodics/product/v0/internal/products/publication/search/restore`.
Publish Pricing, Inventory, Promotion and Tax operational records through their
own internal publication/restore APIs, following the existing Commerce
publication acceptance service. Do not import a Staged product pack directly
into Online or synthesize publication provenance.

For the explicitly configured local sample, confirmed customer listing uses
Product authoring, Staged publication and Online restoration. The application
checks customer-visible discovery before acknowledging publication. An incomplete
publication retains its command and can be retried with the same details.
Production deployments can disable `autoPublishListings` for moderation.

The storefront currently bundles the same authored public artwork for delivery;
Media holds its imported records. Full WCMS composition and Online Media/CMS
publication are separate from the working customer transactions.

## Walk through the experience

1. Open Circa at http://localhost:3600. Browse banners, centres, assets and coupons.
2. Sign in as `customer@circa.local` with local sample password `CircaDemo!2026`,
   or register a new account. The seller and recipient sample logins use the
   same password: `seller@circa.local` and `recipient@circa.local`.
3. Open Submit Waste. Existing location permission triggers fresh capture without
   another sharing button. Otherwise use the host permission/recovery controls.
   Within 100 metres, continue directly to the nearby centre and photo controls;
   ambiguous nearby centres require one choice. Outside the radius, use the
   nearest three centre cards/directions and recheck arrival when there.
4. Take a photo or upload JPEG, PNG or WebP (up to 5 MB). Media stores it privately;
   attachment and submission recheck fresh location on the backend. Analysis runs
   automatically and prepares the editable preview. Optional help preserves the
   preview; an explicit correction revalidates the changed facts. Failed analysis
   retains evidence and offers retry or essential manual entry.
5. Use one Confirm and submit action. The canonical Waste record supplies the
   receipt and centre handling instruction. My Account shows the recorded status
   and reviewer comment. The current project extension records queue handoff;
   individual assignment and source-channel push delivery remain open work.
6. In Axis, open Waste asset approval. Review the original image and confirmed
   facts, enter a verified name or feedback, review the decision, and confirm.
   Rejection requires a public reason. Approval creates an asset and settles
   configured rewards through Loyalty. Pending settlement is not shown as paid.
7. Return to My Account and Wallet. Check the asset, status and ledger entry.
8. Review and confirm a partner coupon purchase. Commerce issues the entitlement;
   reveal it from the owning customer's account. Sample merchant claims are
   illustrative and do not promise real-world redemption.
9. List an eligible owned asset, gift it to another customer, or purchase another
   customer's available listing. The buyer pays the authoritative Commerce price.
   Seller proceeds and attached-carbon movement use Loyalty ledger references.
   Original approval points remain with their original contributor.
10. Send a local Contact enquiry. Engagement returns a persisted reference;
    verification/delivery follow the configured support workflow.

## Shared Web and Telegram submission implementation — 2026-09-09

`src/features/submission/useSubmissionJourney.ts` in the frontend contains the
shared interaction controller. `SubmissionAssistant` renders the common controls;
`channels/journeyHost.ts` handles browser/Telegram location, cancellation and map
handoff. `/telegram` loads the official SDK and verifies signed launch context on
the backend before showing the shared journey. eWaste owns channel-entry policy:
linked customers can establish a Profile session through fresh provider proof;
unlinked customers use the shared email/password sign-in or name/email/password
registration form. Profile owns validation, canonical customer/link persistence
and session issuance. Email OTP is removed.

Circa project services apply 100-metre inclusive arrival, a maximum 60-second
observation age, maximum 50-metre accuracy, and bounded 12-second device capture.
Telegram Desktop may omit horizontal accuracy. The client tries a bounded browser
location capture when native accuracy is missing or exceeds the backend policy,
without retrying a denied native permission. If neither source provides a usable
reading, unknown accuracy still fails closed. Distinct errors identify missing
accuracy, approximate location and expired readings; retry preserves the draft and
photo. Mobile retry stays visible in the bottom action bar. Values are intentional project settings under
`circaEWaste.journey`; permission grant is distinct from position freshness.
Location projections and available Waste Collection records supply the centres.
The service uses current centre state again before evidence/submission. Browser
coordinates are client observations, not tamper-proof proof of physical presence.

The Telegram validator follows the [official launch validation contract](https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app).
It rejects duplicate fields, invalid signatures, expired/future launches and
invalid subjects. Stable numeric subject/bot ID are persisted as origin on the
Waste draft only after an authenticated customer creates it. A signed launch is
not a Profile token. The supplied local bot passes `getMe`; its token is held in
ignored `.env` configuration (`CIRCA_TELEGRAM_BOT_TOKEN`, file mode 0600), never in
the frontend or tracked source. A reachable HTTPS Mini App URL and actual-client
acceptance are still required. No webhook or bot menu URL was changed.

Known scope limits: the full agreed size/material/weight-provenance extraction,
customer knowledge publication/retrieval, complete Axis
outcome pagination/counts and notification delivery remain open owner work.
Historical unsourced assessments do not establish public carbon claims; the compact card
therefore does not invent certified or earned credits. WhatsApp and changes to
settlement/physical receipt remain deferred.

New checks: 17 project backend tests; 18 frontend tests plus typecheck/build;
17 existing Axis review tests. Live Web proof covers registration, existing-grant
capture, private upload, actual configured vision analysis, side-question
readiness, correction, confirmation, reload and mobile layout. GPS was emulated
in Chromium; this does not qualify native phone or Telegram location/camera.
The same new submission passed scoped queue visibility, customer denial of staff
queue access, independent verification, blank-rejection rejection, a recorded
rejection with replay, and matching customer status/comment. These checks do not
qualify the missing source-delivery or complete review-history contracts.

## Evidence and current state

The opening primary customer has 20 submissions: 10 approved, 5 submitted for
review and 5 rejected, funded by 118 opening points and 152 illustrative carbon
units. Real local browser operations subsequently create submissions, approvals,
purchases and transfers, so current totals intentionally differ.

Browser evidence on 2026-09-08 covers authentication, registration, private photo
submission, explicit confirmation, account persistence, Axis approval, coupon
purchase/reveal, gifting, asset listing, buyer purchase, map expansion and mobile
layout. The final fresh browser run also verifies actual Gemma photo analysis,
unambiguous tablet correction, approval settlement and immediate Online
discovery after listing publication, with no browser page errors.

Focused verification includes frontend typecheck/tests/build, Axis types and
review interaction tests, Waste and Loyalty contracts, Product publication and
discovery, Checkout, reward payment authorization/price guards, and Media routes,
reference lookup and upload. Validation records live separately from Git state.
Live security checks return 404 for cross-customer submission/photo access,
403 for customer access to staff reviews, 401 for anonymous account access,
and 409 for attempts to edit submitted evidence. The owner can read the original
photo. The frontend verification passes four interaction tests plus types/build;
Axis passes its types and three review tests; the focused integration suite passes
62 checks, with 14 further accelerator/publication checks and 18 impact-provider
checks. These focused results do not claim whole-repository regression coverage.

Run `npm run test:live` in the storefront for the repeatable fresh registration,
submission and responsive browser check. To include approval and publication,
set `CIRCA_REVIEW_SESSION_FILE` to a private local JSON file containing an
authorized employee `token`. Set `CIRCA_EVIDENCE_DIR` to a local output directory
for screenshots and the sanitized result. Do not commit session files. This
check creates real local records and must target a test environment.

No release commit, push, deployment or synchronization was requested.

## Deployment gates

- Fixed-price digital ownership is the sample policy. Bidding, holds, disputes,
  physical custody/delivery and final business role hierarchy need approved
  deployment policies and corresponding operational screens.
- Real merchant/POS redemption, certified environmental outcomes and external
  contact delivery require configured providers and business acceptance.
- The page shell is a React application with layered presentation configuration;
  complete WCMS component authoring/publication remains a distinct extension.
- Browser testing does not establish screen-reader certification, camera behavior
  on physical phones, or distributed crash/financial reconciliation certification.

## Domain accelerator consolidation

The former application-named accelerator has been removed. Domain services and
routes now belong to eWaste at `/nodics/eWaste/v0`; Circa site composition,
registrations and contact use `/nodics/circa.ewaste/v0` in this customer module.
The Waste runtime enables `eWasteCustomer` and `circaCustomer` API categories.
Axis review discovers the `eWaste` endpoint from BackOffice.

Set domain overrides in CONFIG.eWaste; retain Circa presentation and sample
valuation under CONFIG.circaEWaste. The configured valuation service replaces a
hardcoded application dependency. CIRCA_EWASTE applicationCode and CIRCA_ORDER_
orderCodePrefix remain unchanged for existing drafts, purchases and retries.
Update clients and restart affected runtimes together; the removed mixed-case
application accelerator/API is not registered as an alias. Do not reimport data
or reset ledgers during this structural migration.


## Operational roles and independent approval

The `circa.ewaste:operations` sample release installs seven local staff accounts
and Profile `principalScopeAssignment` records without resetting customer
submissions, ownership, wallets or orders. Each login is the role slug below
followed by `@circa.local`; the local-only password is `CircaDemo!2026`.
Replace these identities and assignments before deployment.

| Role slug | Scope | Permitted work |
| --- | --- | --- |
| administrator | Default enterprise | Waste review, verification, approval, audit, marketplace moderation and coupon management; no platform-administrator group |
| centre-operator | Collection centre `cc-dxb-01` | Read assigned submissions and original evidence |
| verifier | Collection centre `cc-dxb-01` | Review evidence and confirm corrected facts; cannot approve |
| approver | Collection centre `cc-dxb-01` | Approve or reject verified facts; cannot edit verification |
| Employee with both grants / administrator | Within authorized scope | Review and approve the same submission; each action keeps its own audit evidence |
| coupon-manager | Default enterprise | Commerce promotion management and merchant redemption permission; no Waste review access |
| marketplace-moderator | Default enterprise | Listing moderation permission and Commerce product/order read access; no original evidence or verification |
| auditor | Default enterprise | Read review and settlement references; no evidence images or mutations |

Profile owns identity, group membership and effective scopes. The canonical
nAuth group targets supply permissions. Waste reads `/identity/scopes/me` using
the current employee token; caller-selected principal identifiers are ignored.
An explicit deny scope overrides an allow. Missing or unavailable Profile scope
resolution blocks access. Collection-centre assignments use Profile's existing
business-unit scope and Waste's persisted collection-point reference.

Circa enables `waste.operations.requireScopes` and `requireVerification`,
and sets `requireDifferentApprover: false`. A verifier reviews the original evidence, corrects
facts, previews and confirms verification. Verification moves the submission
under review but creates neither assets nor rewards. An employee with approval
permission reviews those facts and confirms approval or rejection. Review and
approval are independent permissions: review-only staff cannot approve,
approval-only staff cannot record verification, and an administrator or any
employee granted both can verify and approve the same submission. Both actions
retain separate audit records even when the actor is the same. Rejection needs a
reason. Approval alone starts the established asset and Loyalty settlement flow.
The approver cannot silently change verified facts or the assigned centre.

Axis consumes `/nodics/eWaste/v0/operations/context`, `/reviews`,
`/reviews/:code/verify`, `/reviews/:code` and `/operations/audit`. Availability
flags guide controls; the backend rechecks identity, permission, scope,
confirmation and revision for each request. Queue and audit reads are bounded
at 100 visible rows from a 500-record candidate window; this first operational
slice has no cursor pagination and must not be treated as exhaustive audit export.

For a retry after an uncertain response, keep the same command reference and
refresh the submission before another decision. A stale revision, another
centre or missing permission fails before settlement. Existing
historical approved records remain valid; new decisions follow the active policy.

Partners assign their own employees and scopes through Profile and configure
policy in their own project. They do not copy role authorization into Axis or
patch framework source. Framework maintainers verify scope denials and role
separation with `wasteOperationalRolesContract.test.js`; the connected role
qualification also signs in separately as verifier and approver.

The customer browser acceptance supports `CIRCA_REVIEW_SESSION_FILE` and,
when independent verification is enabled, `CIRCA_VERIFIER_SESSION_FILE`.
Each private file contains a `token` obtained through Profile. Do not commit it.
Sample photo input is fetched from published Media, so frontend public files
cannot bypass Online publication.

## Negotiated purchases and merchant operations

The local deployment trades digital asset ownership. Physical custody, transport,
inspection and delivery remain a configurable future policy extension. No local
purchase claims physical fulfillment.

For an eligible published asset, a customer reviews and submits a positive whole
point bid. The seller reviews acceptance in My Account; the buyer then checks out
at that exact price. Holds occur at Checkout after acceptance, not while bids are
open. Buyers may withdraw before acceptance. Bid validity is 24 hours in the
sample configuration, with a maximum of 100000 points. Original approval rewards
remain with the contributor; attached illustrative carbon follows asset ownership.

For purchased coupons, My Account offers a reviewed merchant request. The coupon
manager signs into Axis Merchant Coupon Fulfillment, loads scoped merchant requests and confirms
fulfillment. The local sample provider produces a durable receipt without contacting
an external POS. Both parties can reload the receipt; uncertain responses retain
the same command. Promotion rejects expired campaign benefits. This sample does
not settle carbon on coupon purchase or merchant redemption.

Purchase history includes cancellation, refund and dispute review requests.
Moderators use Axis **Manual Purchase Reviews** under Order Lifecycle Operations.
Customer and employee confirmations record the case and outcome only. Points,
asset ownership and prior carbon transfers remain unchanged; automatic refund and
reversal policies are not enabled. Manual resolution must not be described as a
completed refund unless the separate owning-domain operations actually occurred.

Configuration lives in the customer module: `bidding`,
`digitalCore.merchantRedemption`, `order.disputes` and `eWaste.marketplace`.
A partner supplies its own merchant provider and approved production policies in
its project; framework/accelerator improvements go through the separate Nodics
maintainer channel.

## Enterprise merchant fulfillment and refunds

Customers use the existing purchased coupon code display. A registered employee
of the issuing Profile enterprise validates the presented code and confirms its
receipt in Axis, under the Merchant Operator role or equivalent authorized role.
There is no merchant workspace or additional presentation screen in Circa.
Local sample coupon associations resolve to the configured Profile enterprise;
real partner enterprises and staff are managed through Profile's enterprise/user
journey. External POS connectors are a later integration.

A marketplace moderator can preview and explicitly approve a full reward-point
refund. Unused coupons are revoked. Digital asset refunds recover sale proceeds
and attached carbon and restore the former owner. Original waste-submission
rewards stay unchanged. A used coupon, onward-transferred asset or unavailable
seller proceeds/carbon needs manual resolution. Incomplete executions remain
visible for recovery under the original case and command.


## Account and channel ownership

Circa's registration endpoint forwards only account-form fields to Profile's
`/customer/registrations` operation. Profile performs normalization, identity
construction and registration through its existing pipeline. The frontend uses
one `CustomerAuthentication` component on Web and embedded channels.

`eWaste.channelAuthentication` selects enabled channels and the configured Profile
application. eWaste's `/authentication/channels/:channel/entry` decides whether to
show the shared form or request verified linked-channel authentication. The
browser completes an opaque one-use handoff directly on Profile's
`/customer/browser/external/complete` endpoint; refresh credentials remain in
Profile's HttpOnly cookie and access credentials stay in client memory. A fresh
entry is required after a lost or expired handoff. A channel identifier supplied
without valid provider proof never creates a session.

After shared account authentication, the eWaste link operation delegates the
verified association to Profile. An existing link cannot be taken over by another
account; a conflict is shown without changing ownership. Explicit logout leaves
the shared form available without immediately triggering another channel login.
Circa's Telegram backend adapter selects the host and delegates origin handling
to eWaste. Provider identity validation remains in Profile and message delivery
remains in Communication.

Web and emulated Telegram browser acceptance covers registration, same-account
linking, seamless reopening, handoff replay rejection, link conflicts, logout and
the existing HTTPS preview's Secure/HttpOnly cookies. Native Telegram client
acceptance and a future WhatsApp adapter remain separate. No messages are sent by
these authentication checks.

Circa selects the eWaste WARM electronics adapter. Customer labels are Potential CO₂e savings, Carbon equivalent (tCO₂e), and Carbon units for existing rewards. The latter are not issued credits. No customer-facing illustrative/demo qualifiers are used. The sourced estimate preserves weight bounds, factor source/version, US reference geography and assumed landfill/recycling scenarios. Unknown coverage or weight produces an unavailable assessment, not a default factor. Rewards use original approval evidence; later reassessments and explicit acceptance do not revalue existing balances. Axis approved-submission detail exposes assessment history and review-before-accept actions; asset detail exposes read-only history.
