# Kickoff Local

Kickoff Local local environment composition boundary for Nodics Kickoff.

## Ownership

This group boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

After changes, run the nearest focused test or the Kickoff structure and documentation checks from the project root.

## Telegram tunnel origin

For a Local Circa Telegram tunnel, set `NODICS_LOCAL_TELEGRAM_ORIGIN` in
the private project `.env` to the exact HTTPS origin, without a path or trailing
slash. Restart the backend topology after changing it, loading that file with
`node --env-file=.env ./node_modules/.bin/nodics project:run topology:start:all`
after stopping the existing topology. An unset value adds no
origin; the standard localhost origins remain inherited. Update this value when
the temporary tunnel changes, and remove it when the tunnel is retired.
