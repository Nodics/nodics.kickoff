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
