# Kickoff Local

Kickoff Local local environment composition boundary for Nodics Kickoff.

## Ownership

This group boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

Platform and Waste keep thin late `postInit` delegates to Copilot's framework
startup service. Do not copy source loops, service authorization or ingestion
report handling into these entrypoints. Project modules select source scope and
failure/log policy through `copilot.knowledge.ingestion.startup`; this environment
opts Waste into `ingestOnStart`. Later layers can disable startup. Docker Waste
does not inherit this Local opt-in. No startup indexing runs during static tests.

After changes, run the nearest focused test or the Kickoff structure and documentation checks from the project root.

## Telegram tunnel origin

Local Circa browser development uses the declared localhost origin in this
environment layer. A public Telegram tunnel URL is an operator/runtime override,
not a project `.env` setting and not a Local-named property. Keep the key generic
and environment-neutral, then supply the environment-specific value through the
governed runtime configuration path before restarting the topology. If the
runtime value is missing, Telegram-specific entry remains unavailable while the
local browser origin stays usable.
