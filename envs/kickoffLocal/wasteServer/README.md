# Waste Server

Reference customer Waste Management server runtime composition and configuration boundary for Nodics Kickoff.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, accelerator preset source, Loyalty rewards, coupon lifecycle, location providers, recycler adapters, logistics adapters, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to the local Waste runtime boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

After changes, run the nearest focused test or the Kickoff structure and runtime preparation checks from the project root.
