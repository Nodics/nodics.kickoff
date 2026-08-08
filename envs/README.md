# Nodics Kickoff environments

`kickoff.environments` is the structural, non-runtime group containing the
Nodics Kickoff reference project's concrete environment modules.

The loader traverses this group to discover environments such as
`kickoffLocal`, but it never activates the container or loads its configuration
and lifecycle files. A selected concrete environment owns its server modules
and environment-specific configuration.
