# Kickoff Administration

Shared customer administration descriptors for the Local and Docker Local
Platform runtimes. BackOffice retains orchestration, authorization and import
ownership. This module contributes configuration only and starts no server.

`config/properties.js` owns common profile descriptions and package selections.
Deployment targets, credentials, local-only profiles and reset gates remain in
their environment/server layers. Index `950.10` places these defaults before
project and deployment overlays; only Platform selects the module.

Read [the configuration guide](../../docs/pages/configuration-inheritance.md),
[the local contract](llm/contracts/README.md) and
[the override example](llm/examples/README.md). Verify from the project root with
`node test/configurationInheritanceContract.test.js` and both runtime preparation
tests. This boundary was generated with the framework structure generator using
configuration/LLM ownership and no source or test scaffolding.
