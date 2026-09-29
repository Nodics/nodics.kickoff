/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";
/** @module circa.ewaste/service/defaultCircaEWasteRewardValuationService @description Applies Circa reward policy to original approval evidence; rewards remain separate from sourced impact and credit issuance. @owner circa.ewaste @layer service @override Later project policy may choose different reward rules without rewriting historical settlements. */
module.exports = {
  /** Supplies project rates and public error codes to the domain evidence calculation. */
  assess: function (request) {
    return SERVICE.DefaultEWasteWeightRewardValuationService.assess(
      request,
      (CONFIG.get("circaEWaste") || {}).rewardValuation,
      {
        policy: "ERR_CIRCA_VALUATION_POLICY",
        input: "ERR_CIRCA_VALUATION_INPUT",
      },
    );
  },
};
