/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module kickoffDockerLocal/config/activationTargets @description Routes cross-domain identity seed records only to Platform. */
module.exports = {
  "nodics.loyalty": {
    dataPackages: [
      {
        code: "loyaltyCore:core-enterprise-reference",
        classification: "core",
        owner: "nodics.loyalty",
        required: true,
        trigger: "ACTIVATION",
        targetModule: "profile",
        targetServer: "platformServer",
        targetDatabase: "kickoffDockerLocalPlatform",
        operation: "IMPORT",
      },
    ],
  },
  "nodics.waste": {
    dataPackages: [
      {
        code: "wasteCore:core-reference",
        classification: "core",
        owner: "nodics.waste",
        required: true,
        trigger: "ACTIVATION",
        targetModule: "profile",
        targetServer: "platformServer",
        targetDatabase: "kickoffDockerLocalPlatform",
        operation: "IMPORT",
      },
      {
        code: "wasteCollection:sample-profile-addresses",
        classification: "sample",
        owner: "nodics.waste",
        required: false,
        trigger: "USER",
        targetModule: "profile",
        targetServer: "platformServer",
        targetDatabase: "kickoffDockerLocalPlatform",
        operation: "IMPORT_SAMPLE",
      },
    ],
  },
};
