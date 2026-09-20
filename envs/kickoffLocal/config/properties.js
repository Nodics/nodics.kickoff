/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/**
 * @module envs/kickoffLocal/config/properties
 * @description Defines Kickoff project-owned layered configuration for this boundary.
 * @layer config
 * @owner config
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = {
  "environment": {
    "class": "LOCAL"
  },
  "httpHardening": {
    "cors": {
      "allowedOrigins": [
        { "$config": "env", "name": "NODICS_LOCAL_TELEGRAM_ORIGIN" }
      ]
    }
  },
  "cache": {
    "default": {
      "engines": {
        "redis": {
          "enabled": true
        }
      }
    }
  }
};
