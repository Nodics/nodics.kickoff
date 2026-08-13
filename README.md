# Nodics Kickoff

Nodics Kickoff is the reference customer project used to prove independently packaged
Nodics runtime groups and local runtime topologies. It demonstrates how a
customer can run Nodics locally, inspect the framework, and start
customization.

```text
nodics.kickoff/
  modules/
    kickoffCore/
    kickoffApi/
    kickoffInt/
  envs/
    kickoffLocal/
      platformServer/
      wcmsServer/
      processServer/
      commerceServer/
      engagementServer/
```

`platformServer extends nodics.platform`, which makes `nodics.core`
functionally available through Platform. `wcmsServer extends nodics.wcms`, and
`processServer extends nodics.process` while including `nodics.cron` in the
same Business Process & Automation runtime. There is no standalone Cron server
in Kickoff. `commerceServer extends nodics.commerce`
and composes Process for the full local Commerce lifecycle. `engagementServer`
extends `nodics.engagement`, includes `nodics.communication`, and enables the
reference contact experience while Process remains a separate runtime
dependency. Effective runtime loading and service
merging remain controlled by module indexes.

Kickoff may default to the sample layout where it sits parallel to
`nodics.ai`, the Nodics framework repository root. Customer projects may use
their own workspace name and folder structure, so framework dependency
resolution must also support explicit local framework-root configuration.

Customer projects can customize framework capabilities through project modules,
for example `nodics.kickoff.platform extends nodics.platform`. The functional module
identity remains `nodics.platform` / `Platform`; the customer module is an
implementation/customization layer, not a new BackOffice capability name.

`modules/` and `envs/` use the standard Nodics module-group shape for
consistent tooling and governance, but they are structural groups only. The
loader traverses them to discover their runtime children and never activates
the containers themselves.

Run:

```text
cp .env.example .env
npm run configure:framework
npm ci
npm test
npm run start:platform
npm run start:commerce
npm run start:engagement
npm run topology:start
npm run topology:status
npm run topology:stop
```

`topology:start` supervises all six direct-Node `kickoffLocal` backend
runtimes from one terminal. Use `topology:start:all` to include sibling Axis
and Nexus development servers. The supervisor refuses unknown busy ports and
stops only processes whose generated PID ownership belongs to this checkout.

For an independently configured containerized production simulation, use
`envs/kickoffDockerLocal`. It has separate ports, generated secrets,
authenticated MongoDB and Redis infrastructure, databases, media volumes,
Staged/Online runtimes, and Axis/Nexus containers. See
[envs/kickoffDockerLocal/README.md](envs/kickoffDockerLocal/README.md).
Its `docker-local:resilience` command qualifies checksum-backed recovery,
measured local RPO/RTO, restored publication state, bounded load, Sentinel
promotion, and application-transparent cache reconnection. Separate commands
qualify deterministic publication interruption/reconciliation contracts and a
30-minute mixed-read/publication soak while preserving explicit
external-evidence limitations.

The committed `.npmrc` keeps npm local `file:` dependencies as symbolic links
(`install-links=false`). This is required because `.nodics/framework/` is a
generated framework-link directory, not a registry-style packed dependency.
Use `npm ci` for deterministic clean installs; rerun `configure:framework`
first whenever the framework checkout moves.

For a complete zero-state local verification, use the Kickoff documentation
page "Local acceptance checklist" after importing the Kickoff documentation
content pack into WCMS.

When the stack is running, open Axis at <http://localhost:3100> and use the
Documentation group to read:

- Framework documentation from `nodics.ai/nodics.docs`;
- Nodics Axis product documentation from
  `nodics.ai/nodics.platform/modules/axis`;
- Nodics Kickoff project documentation from this repository;
- Swagger/OpenAPI reference grouped by backend-published runtime and module
  metadata.

Kickoff documentation should explain project setup, local bootstrap, sample
customization, environment/server topology, and project-owned data. It should
not document reusable framework behavior as if Kickoff owns it.

You can also run the automated local acceptance gates:

```text
npm run acceptance:local
npm run acceptance:local:fresh
npm run acceptance:capability-registry
```

`acceptance:local` verifies the current split Local stack through Nodics APIs
without directly reading or changing a database. `acceptance:local:fresh` is a
fail-closed placeholder until Platform owns a secured, bounded Local reset
API/service; it must not use a database shell as an acceptance shortcut.

`acceptance:capability-registry` is non-destructive to business data and expects
Platform plus the consolidated Process server to be running. It verifies that
Process and Cron are observed through `processServer`, temporarily exercises
Process registration and Axis activation, proves disabled Cron remains hidden,
and restores the original functional-module lifecycle state.

After local acceptance, use the project-owned deployment qualification pack:

```text
npm run qualification:deployment
npm run qualification:deployment:local
```

The first command prints a non-mutating plan. The second runs the strict
framework release gate, retained-data project acceptance, Axis verification,
and live Redis contracts, then writes sanitized local evidence under
`envs/kickoffLocal/generated/deployment-qualification/`. It never approves
production. Peak load, soak, penetration, managed-provider failover,
backup/restore, measured RPO/RTO, residency, real external providers, and human
accessibility remain named-owner deployment gates. See the generated Kickoff
documentation page “Deployment qualification” for the beginner and operator
journey. The bounded fresh-database variant requires the explicit
`--include-fresh` flag.

Update `NODICS_FRAMEWORK_ROOT` in `.env` when the framework checkout is not
located at the default sample location. The value may be absolute or relative
to this Nodics Kickoff project root. `npm run configure:framework` creates generated
links under `.nodics/framework/`, and the committed `package.json` installs
from those stable local links.

Do not commit `.nodics/`; it is machine-local generated setup.

Phase 0 work must stabilize dependency resolution, module skeletons, formatting,
and runtime-scoped clean/build behavior before more broad code movement.

Kickoff configuration follows the framework classification contract:

- project identity belongs in `config/`;
- local shared environment defaults belong in `envs/kickoffLocal/config/`;
- server topology, ports, server database names, and active module lists belong
  under each server config;
- module-owned defaults such as `apiExposure`, import/export, media management,
  provider defaults, permissions, limits, discovery flags, and tooling gates
  belong in the owning framework or customer module;
- project, environment, server, and node config files should contain only
  intentional deltas: topology, local coordinates, secret references, active
  runtime composition, or explicit enable/disable overrides;
- generated `temp/` files are runtime state, not authored project
  configuration.
