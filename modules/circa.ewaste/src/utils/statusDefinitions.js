/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module circa.ewaste/utils/statusDefinitions @description Declares owned operation error codes. @layer utility @owner circa.ewaste */
module.exports = {
  ERR_CIRCA_JOURNEY_UNAVAILABLE: {
    code: "503",
    message: "Journey policy unavailable",
  },
  ERR_CIRCA_TELEGRAM_LAUNCH_INVALID: {
    code: "401",
    message: "Invalid Telegram launch",
  },
  ERR_CIRCA_TELEGRAM_UNAVAILABLE: {
    code: "503",
    message: "Telegram is not configured",
  },
  ERR_CIRCA_POSITION_INVALID: {
    code: "400",
    message: "Location unavailable",
  },
  ERR_CIRCA_POSITION_STALE: {
    code: "400",
    message: "Location reading expired",
  },
  ERR_CIRCA_POSITION_ACCURACY_REQUIRED: {
    code: "400",
    message: "Location accuracy unavailable",
  },
  ERR_CIRCA_POSITION_IMPRECISE: {
    code: "400",
    message: "Location too approximate",
  },
  ERR_CIRCA_ARRIVAL_REQUIRED: {
    code: "400",
    message: "Collection centre arrival required",
  },
  ERR_CIRCA_CONTACT_INVALID: {
    code: "400",
    message: "Contact invalid",
  },
  ERR_CIRCA_CONTACT_UNAVAILABLE: {
    code: "503",
    message: "Contact unavailable",
  },
  ERR_CIRCA_REGISTRATION_INVALID: {
    code: "400",
    message: "Registration invalid",
  },
};
