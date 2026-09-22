# Waste Server

Reference customer Waste Management server runtime composition and configuration boundary for Nodics Kickoff.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, accelerator preset source, Loyalty rewards, coupon lifecycle, location providers, recycler adapters, logistics adapters, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to the local Waste runtime boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

After changes, run the nearest focused test or the Kickoff structure and runtime preparation checks from the project root.

## Photo metadata provider

Local eWaste photo metadata explicitly selects OpenAI `gpt-5.6-luna` with the dedicated `eWastePhotoMetadata` profile: high image detail, JSON object output, 1200 output tokens, reasoning disabled, 60-second timeout, and response storage disabled. Set `OPENAI_EWASTE_API_KEY` in the ignored backend `.env`; its API key needs Responses write access. Customer guidance remains explicitly on Ollama `gemma3:4b`. Environmental calculations remain WasteImpact-owned. Restart Waste after changing these settings.

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
Circa-owned local customer registration, and `media.customer.upload`/
`location.location.read` for collection-centre arrival checks, and
`media.customer.read` for private customer evidence. Customer linking remains
authenticated with the customer's own bearer, and no broad administrator group
permissions are restored to runtime tokens.
