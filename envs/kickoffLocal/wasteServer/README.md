# Waste Server

Reference customer Waste Management server runtime composition and configuration boundary for Nodics Kickoff.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, accelerator preset source, Loyalty rewards, coupon lifecycle, location providers, recycler adapters, logistics adapters, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to the local Waste runtime boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

After changes, run the nearest focused test or the Kickoff structure and runtime preparation checks from the project root.

## Arrival radius

Local Waste defaults `eWaste.journey.arrivalRadiusMetres` to 200 metres
in this server's `config/properties.js`. Other environments inherit the eWaste
accelerator default of 50 metres. `CIRCA_EWASTE_ARRIVAL_RADIUS_METRES` can
explicitly override either default. Rebuild and restart Waste after changing
server properties. Browser and Telegram both use the backend policy; neither
needs a separate frontend setting. Fresh location and collection-point eligibility
checks still apply, and the distance boundary is inclusive.
The server module index follows the Circa application index so this deployment
override is applied after the accelerator default by nConfig.

## Photo metadata provider

Local eWaste photo metadata explicitly selects OpenAI `gpt-5.6-luna` with the dedicated `eWastePhotoMetadata` profile: high image detail, JSON object output, 2400 output tokens, reasoning disabled, 60-second timeout, and response storage disabled. Supply `OPENAI_EWASTE_API_KEY` through the selected environment credential binding; its API key needs Responses write access. The backend does not load a project `.env`. Customer guidance remains explicitly on Ollama `gemma3:4b`. Environmental calculations remain WasteImpact-owned. Restart Waste after changing these settings.

This Local deployment declares a distinct runtime instance and an environment
reference for its retained service proof. Profile must hold the corresponding
service principal and approved deployment grant before startup. Missing proof
fails closed; never replace it with the shared bootstrap or administrator key.
After a full Local reset, an authenticated operator must reprovision the approved
deployment grants through Profile before restarting this runtime.

The Local Waste deployment requests `loyaltyApi` for the existing owner wallet
projection. Its Profile deployment grant and API credential scope require the
bounded `loyalty.wallet.read` permission and `media.evidence.read` for
owner-authorized item evidence; other reward mutations need their own
explicit grants. Do not restore shared administrator groups to runtime tokens.

Telegram channel entry also requires the bounded Profile and Media permissions
on the Waste deployment grant and credential: `profile.externalIdentity.prepare`
for Profile's signed-launch browser handoff, `profile.customer.register` for
Profile-owned customer registration selected by the Circa demo, and `media.customer.upload`/
`location.location.read` for collection-centre arrival checks, and
`media.customer.read` for private customer evidence. Customer linking remains
authenticated with the customer's own bearer, and no broad administrator group
permissions are restored to runtime tokens.

Local Waste also requests the remote `commsApi` module and bounded
`communication.request` permission for its existing outcome-notification intent
handoff. The Communication-owned permission belongs in the exact governed Profile
assignment; startup cannot update retained grants and no acceptance script writes
assignments. This selection does
not enable SMTP, broaden recipients, qualify delivery, or grant sibling/Docker
runtimes new access. Installed grant and notification outcomes require separate
verification.

The separate Staged listing-proof caller is pinned to the original Local Commerce
Staged identity and `GREENPERKS_ONLINE`, with only
`waste.asset.listing.intent.read`. The existing Online Commerce sale caller is unchanged.

Local also selects `GREENPERKS_RETAIL` for the existing `commerceServer` runtime's
approved Enterprise certificate/bundle buy, sell and gift journeys. The exact
tenant, principal enterprise, service, project, environment, instance and retained
deployment-assignment coordinates are unchanged; the new entry contains only
`waste.asset.sale.transfer`. It does not add marketplace projection, Staged access,
human permissions or another target. Commerce still proves the current human,
typed owner and operation permission; Waste retains private runtime admission,
revision, lock and financial evidence checks. This is a deployment override, not
a framework default or proof of installed success. After the coordinated Waste
build, recheck Retail certificate holdings under a fresh Employee session. An
empty successful page is valid; a rejected dependency is not empty holdings.

After the Pricing writer-admission guard was independently reviewed, native
Local separately selects `commerce.product.read` and remote `pricing` for the
existing GREENPERKS_ONLINE / circaMainStore / circaPointsPriceBook listing proof.
The exact remote-only extension allowlist is `["pricing"]`; frozen namespace
snapshots and signed deployment identity are preserved. Pricing is not activated
on Waste and Waste receives no publication-writer mapping or staff role. Existing
enterprise scope is unchanged. Coordinated grant changes use authorized Profile
operations, not startup reconciliation; verify the new Pricing guard's installed/source match
before listing calls. Separately, the reviewed Local listing workflow explicitly
selects `eWaste.marketplace.listingHandoff.enabled`. This shared feature permits
retained intent capture and pending completion; it is not inspection-only. The
selection never executes a command, completes old intents or replays earlier
commands. Inspect the queue first under fresh human authority. Check effective
runtime-property provenance; do not rewrite retained overrides to force the flag.
Positive native describe/flag readback remains a post-restart acceptance gate.
Verify with
`node --test test/commerceOwnershipEvidenceAdoption.test.js`.
