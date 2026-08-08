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
      cronServer/
```

`platformServer extends nodics.platform`, which makes `nodics.core`
functionally available through Platform. `wcmsServer extends nodics.wcms`, and
`cronServer extends nodics.cron`. Effective runtime loading and service merging
remain controlled by module indexes.

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
npm install
npm test
npm run start:platform
```

For a complete zero-state local verification, use the Kickoff documentation
page "Local acceptance checklist" after importing the Kickoff documentation
content pack into WCMS.

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
