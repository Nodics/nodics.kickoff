/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares engagementServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
module.exports = {
  "activeModules": {
    "groups": [],
    "modules": [
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "nexus.web",
      "commsCore",
      "commsSchema",
      "commsVerification",
      "localCommsProvider",
      "commsApi",
      "engagementCore",
      "customerReview",
      "customerFeedback",
      "testimonial",
      "contactSubmission",
      "engagementComms",
      "engagementApi"
    ]
  },
  "runtimeRole": {
    "code": "ENGAGEMENT",
    "publication": "OPERATIONAL"
  },
  "data": {
    "dataReleases": {
      "contributions": {
        "$config": "replace",
        "value": []
      }
    }
  },
  "engagement": {
    "capabilities": {
      "testimonial": true,
      "customerReview": true,
      "customerFeedback": true
    }
  },
  "customerFeedback": {
    "enabled": true
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalEngagement"
        }
      }
    },
    "commsCore": {},
    "commsSchema": {},
    "commsVerification": {},
    "localCommsProvider": {},
    "commsApi": {},
    "engagementCore": {},
    "customerReview": {},
    "customerFeedback": {},
    "testimonial": {},
    "contactSubmission": {},
    "engagementComms": {},
    "engagementApi": {}
  },
  "servers": {
    "platform": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "platformServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "profile": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "backoffice": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsStagedServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "cmsStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsOnline": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcmsOnlineServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "cmsOnline": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsOnlineServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "process": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "processServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "processServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerce": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerceServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerceStaged": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "commerceStagedServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "commerceStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "loyalty": {
      "endpoint": {
        "$config": "runtime",
        "name": "loyaltyServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "loyaltyServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "loyaltyServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "waste": {
      "endpoint": {
        "$config": "runtime",
        "name": "wasteServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wasteServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "wasteServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "location": {
      "endpoint": {
        "$config": "runtime",
        "name": "locationServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "locationServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "locationServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "wcms": {
      "endpoint": {
        "$config": "runtime",
        "name": "wcmsStagedServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4340,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4341
      },
      "abstractEndpoint": {
        "httpHost": "engagement",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "engagement",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "publish": "engagement.operational"
    }
  },
  "apiExposure": {
    "categories": {
      "dataImport": {
        "enabled": true
      }
    }
  }
};
