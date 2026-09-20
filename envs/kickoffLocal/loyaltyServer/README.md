# Loyalty Server

Reference customer Loyalty server runtime composition and configuration boundary for Nodics Kickoff.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, Commerce payment providers, coupon lifecycle, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to the local Loyalty runtime boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

After changes, run the nearest focused test or the Kickoff structure and runtime preparation checks from the project root.

This Local deployment declares a distinct runtime instance and an environment
reference for its retained service proof. Profile must hold the corresponding
service principal and approved deployment grant before startup. Missing proof
fails closed; never replace it with the shared bootstrap or administrator key.
After a full Local reset, an authenticated operator must reprovision the approved
deployment grants through Profile before restarting this runtime.
