/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module circa.ewaste/service/defaultCircaTelegramLaunchService
 * @description Retains Circa's Telegram launch/origin adapter over eWaste channel orchestration. Profile remains identity and session authority.
 * @owner circa.ewaste @layer service
 * @override Project layers select the host channel; reusable policy and origin mapping live in eWaste and application references come from layered configuration.
 */
module.exports = {
  /** Delegates an authenticated Telegram origin to the eWaste channel contract. */
  validate: function (raw, request) {
    return SERVICE.DefaultEWasteChannelAuthenticationService.origin(
      raw,
      request,
      "TELEGRAM",
    );
  },
  /** Keeps the existing project launch endpoint as a thin compatibility adapter. */
  bootstrap: function (raw, request) {
    return SERVICE.DefaultEWasteChannelAuthenticationService.bootstrap(
      raw,
      request,
      "TELEGRAM",
    );
  },
};
