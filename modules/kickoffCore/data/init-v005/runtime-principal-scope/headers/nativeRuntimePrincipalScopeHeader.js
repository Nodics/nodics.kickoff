/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module kickoffCore/data/nativeRuntimePrincipalScope @description Exact Local service credential scope adoption for reviewed runtime deployment grants. @owner kickoffCore @layer data */
module.exports = { profile: { nativeRuntimePrincipalScope: { options: {
  enabled: true, schemaName: "employee", operation: "adoptRuntimeServiceScopesAll",
  dataFilePrefix: "nativeRuntimePrincipalScopeData", tenants: ["default"], userGroups: ["adminGroup"]
}, query: { code: "$code" } } } };
