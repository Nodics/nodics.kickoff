/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/data/sample-v001/credit-role/records/circaLocalDemoCreditGroupData @description Approved Local human permission set; the original credit source and Loyalty eligibility remain independent. @layer data @owner circa.ewaste */
module.exports = {
  circaLocalDemoCredit: {
    code: "circaLocalDemoCreditUserGroup",
    name: "Circa Local Demo Credit",
    active: true,
    parentGroups: ["employeeUserGroup"],
    permissions: ["loyalty.sampleCredit.apply", "import.sample.run", "import.release.view", "import.release.validate"],
  },
};
