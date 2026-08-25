# Docker Local Engagement Server

Docker Local Engagement Server runtime composition and configuration boundary for Nodics Kickoff.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

After changes, run the nearest focused test or the Kickoff structure and documentation checks from the project root.
