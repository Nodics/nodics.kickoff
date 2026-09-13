# Administration configuration ownership

This customer module shares equal, environment-independent administrative
profile descriptors and package selections between the two Platform runtimes.
BackOffice remains the runtime authority; application data remains at its
application owner. Deployment targets and divergent profiles remain in the
selected environment/server. This module must not carry credentials or execute
imports/reset operations.

Only Platform selects it. Its index precedes the project and environment/server
layers. A non-runtime metadata flag would prevent inheritance and is not a
substitute for configuration-only ownership. Preserve the existing nConfig
loader and array-by-index merge semantics.

Read the [project guide](../../../../docs/pages/configuration-inheritance.md)
and run `node test/configurationInheritanceContract.test.js` from the project
root, then the Local and Docker Local runtime preparation tests.
