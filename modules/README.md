# kickoffModules

`kickoffModules` is the structural, non-runtime group for custom capability
modules owned by the `nodics.kickoff` reference project.

It contains:

- `kickoffCore` for shared project behavior.
- `kickoffApi` for project API customizations.
- `kickoffInt` for project integration customizations.

The group is never a runtime participant. The loader traverses it for child
discovery, while a server composition explicitly activates the required child
modules by their own identities.

Child modules:

- `kickoffCore`: project domain behavior;
- `kickoffApi`: project API-facing behavior;
- `kickoffInt`: project integration behavior.
