# Kickoff Local

Kickoff Local local environment composition boundary for Nodics Kickoff.

## Ownership

This group boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

After changes, run the nearest focused test or the Kickoff structure and documentation checks from the project root.

## Telegram tunnel origin

Local Circa browser development uses the declared localhost origin in this
environment layer. A public Telegram tunnel URL is an operator/runtime override,
not a project `.env` setting and not a Local-named property. Keep the key generic
and environment-neutral, then supply the environment-specific value through the
governed runtime configuration path before restarting the topology. If the
runtime value is missing, Telegram-specific entry remains unavailable while the
local browser origin stays usable.
