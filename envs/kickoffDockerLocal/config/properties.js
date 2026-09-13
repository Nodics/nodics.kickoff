/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares Docker environment policy and shared endpoint coordinates for nConfig layering. @layer config @owner nodics.kickoff */
module.exports = {
  "environment": {
    "code": "kickoffDockerLocal",
    "qualificationClass": "LOCAL_PRODUCTION_SIMULATION"
  },
  "log": {
    "level": {
      "$config": "env",
      "name": "NODICS_LOG_LEVEL",
      "fallback": "info"
    }
  },
  "event": {
    "remotePublishEnabled": false
  },
  "authSecurity": {
    "jwt": {
      "secret": {
        "$config": "env",
        "name": "AUTH_JWT_SECRET"
      }
    },
    "apiKey": {
      "pepper": {
        "$config": "env",
        "name": "AUTH_API_KEY_PEPPER"
      }
    },
    "securityStamp": {
      "enabled": true,
      "failClosed": true,
      "allowMissingStamp": false,
      "cacheModuleName": "kickoffCore"
    },
    "refreshToken": {
      "requireDistributedCache": true
    }
  },
  "defaultAuthDetail": {
    "tenant": "default",
    "entCode": "default",
    "loginId": "apiAdmin",
    "apiKey": {
      "$config": "env",
      "name": "BOOTSTRAP_SERVICE_API_KEY"
    }
  },
  "bootstrapIdentity": {
    "source": "environment",
    "adminPassword": {
      "$config": "env",
      "name": "BOOTSTRAP_ADMIN_PASSWORD"
    },
    "servicePassword": {
      "$config": "env",
      "name": "BOOTSTRAP_SERVICE_PASSWORD"
    },
    "serviceApiKey": {
      "$config": "env",
      "name": "BOOTSTRAP_SERVICE_API_KEY"
    }
  },
  "httpHardening": {
    "securityHeaders": {
      "headers": {
        "Cross-Origin-Resource-Policy": "cross-origin"
      }
    },
    "cors": {
      "enabled": true,
      "allowedOrigins": [
        "http://localhost:4100",
        "http://127.0.0.1:4100",
        "http://localhost:4200",
        "http://127.0.0.1:4200",
        "http://localhost:6300",
        "http://127.0.0.1:6300",
        "http://localhost:6400",
        "http://127.0.0.1:6400",
        "http://localhost:6500",
        "http://127.0.0.1:6500",
        "http://localhost:6600",
        "http://127.0.0.1:6600"
      ],
      "allowedMethods": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "OPTIONS"
      ],
      "allowedHeaders": [
        "Content-Type",
        "Authorization",
        "Idempotency-Key",
        "X-CSRF-Token",
        "X-Request-Id",
        "X-Correlation-Id",
        "X-Nodics-Client-Contract-Version",
        "X-Enterprise-Code",
        "X-Tenant-Code",
        "Tenant",
        "X-Nodics-Enterprise",
        "X-Nodics-Tenant"
      ],
      "exposedHeaders": [
        "Retry-After",
        "X-Request-Id",
        "X-Correlation-Id",
        "X-RateLimit-Limit",
        "X-RateLimit-Remaining",
        "X-RateLimit-Reset",
        "ETag"
      ],
      "allowCredentials": true
    }
  },
  "data": {
    "dataReleases": {
      "types": {
        "sample": {
          "enabled": true,
          "operatorExecution": true
        }
      }
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "URI": {
            "$config": "env",
            "name": "NODICS_MONGODB_URI"
          },
          "databaseName": {
            "$config": "env",
            "name": "NODICS_DATABASE_NAME"
          }
        }
      }
    }
  },
  "agoraDomains": {
    "$config": "composition",
    "name": "agora"
  },
  "cache": {
    "enabled": true,
    "invalidation": {
      "crossNode": true
    },
    "kickoffCore": {
      "channels": {
        "auth": {
          "enabled": true,
          "engine": "redis",
          "fallback": false
        }
      },
      "engines": {
        "redis": {
          "enabled": true,
          "distributed": true,
          "atomicConsume": true,
          "options": {
            "url": {
              "$config": "env",
              "name": "REDIS_URL"
            },
            "host": null,
            "port": null,
            "database": 0,
            "prefix": "kickoffCore",
            "password": {
              "$config": "env",
              "name": "REDIS_PASSWORD"
            },
            "sentinel": {
              "enabled": true,
              "name": "nodics",
              "password": {
                "$config": "env",
                "name": "REDIS_PASSWORD"
              },
              "endpoints": [
                {
                  "host": "redis-sentinel",
                  "port": 26379
                }
              ],
              "connectTimeout": 5000,
              "commandTimeout": 3000,
              "retryDelayMs": 250,
              "maximumRetryDelayMs": 5000
            }
          }
        }
      }
    }
  },
  "configurationValues": {
    "remoteEndpoints": {
      "platform": {
        "endpoint": {
          "httpHost": "platform",
          "httpPort": 4300,
          "httpsHost": "platform",
          "httpsPort": 4301
        },
        "abstractEndpoint": {
          "httpHost": "platform",
          "httpPort": 4300,
          "httpsHost": "platform",
          "httpsPort": 4301
        },
        "remoteOnly": true
      },
      "platformServer": {
        "endpoint": {
          "httpHost": "platform",
          "httpPort": 4300,
          "httpsHost": "platform",
          "httpsPort": 4301
        },
        "abstractEndpoint": {
          "httpHost": "platform",
          "httpPort": 4300,
          "httpsHost": "platform",
          "httpsPort": 4301
        },
        "remoteOnly": true
      },
      "profile": {
        "endpoint": {
          "httpHost": "platform",
          "httpPort": 4300,
          "httpsHost": "platform",
          "httpsPort": 4301
        },
        "abstractEndpoint": {
          "httpHost": "platform",
          "httpPort": 4300,
          "httpsHost": "platform",
          "httpsPort": 4301
        },
        "remoteOnly": true
      },
      "backoffice": {
        "endpoint": {
          "httpHost": "platform",
          "httpPort": 4300,
          "httpsHost": "platform",
          "httpsPort": 4301
        },
        "abstractEndpoint": {
          "httpHost": "platform",
          "httpPort": 4300,
          "httpsHost": "platform",
          "httpsPort": 4301
        },
        "remoteOnly": true
      },
      "wcmsStaged": {
        "endpoint": {
          "httpHost": "wcms-staged",
          "httpPort": 4312,
          "httpsHost": "wcms-staged",
          "httpsPort": 4313
        },
        "abstractEndpoint": {
          "httpHost": "wcms-staged",
          "httpPort": 4312,
          "httpsHost": "wcms-staged",
          "httpsPort": 4313
        },
        "remoteOnly": true
      },
      "wcmsStagedServer": {
        "endpoint": {
          "httpHost": "wcms-staged",
          "httpPort": 4312,
          "httpsHost": "wcms-staged",
          "httpsPort": 4313
        },
        "abstractEndpoint": {
          "httpHost": "wcms-staged",
          "httpPort": 4312,
          "httpsHost": "wcms-staged",
          "httpsPort": 4313
        },
        "remoteOnly": true
      },
      "cmsStaged": {
        "endpoint": {
          "httpHost": "wcms-staged",
          "httpPort": 4312,
          "httpsHost": "wcms-staged",
          "httpsPort": 4313
        },
        "abstractEndpoint": {
          "httpHost": "wcms-staged",
          "httpPort": 4312,
          "httpsHost": "wcms-staged",
          "httpsPort": 4313
        },
        "remoteOnly": true
      },
      "wcmsOnline": {
        "endpoint": {
          "httpHost": "wcms-online",
          "httpPort": 4314,
          "httpsHost": "wcms-online",
          "httpsPort": 4315
        },
        "abstractEndpoint": {
          "httpHost": "wcms-online",
          "httpPort": 4314,
          "httpsHost": "wcms-online",
          "httpsPort": 4315
        },
        "remoteOnly": true
      },
      "wcmsOnlineServer": {
        "endpoint": {
          "httpHost": "wcms-online",
          "httpPort": 4314,
          "httpsHost": "wcms-online",
          "httpsPort": 4315
        },
        "abstractEndpoint": {
          "httpHost": "wcms-online",
          "httpPort": 4314,
          "httpsHost": "wcms-online",
          "httpsPort": 4315
        },
        "remoteOnly": true
      },
      "cmsOnline": {
        "endpoint": {
          "httpHost": "wcms-online",
          "httpPort": 4314,
          "httpsHost": "wcms-online",
          "httpsPort": 4315
        },
        "abstractEndpoint": {
          "httpHost": "wcms-online",
          "httpPort": 4314,
          "httpsHost": "wcms-online",
          "httpsPort": 4315
        },
        "remoteOnly": true
      },
      "process": {
        "endpoint": {
          "httpHost": "process",
          "httpPort": 4330,
          "httpsHost": "process",
          "httpsPort": 4331
        },
        "abstractEndpoint": {
          "httpHost": "process",
          "httpPort": 4330,
          "httpsHost": "process",
          "httpsPort": 4331
        },
        "remoteOnly": true
      },
      "processServer": {
        "endpoint": {
          "httpHost": "process",
          "httpPort": 4330,
          "httpsHost": "process",
          "httpsPort": 4331
        },
        "abstractEndpoint": {
          "httpHost": "process",
          "httpPort": 4330,
          "httpsHost": "process",
          "httpsPort": 4331
        },
        "remoteOnly": true
      },
      "commerceStaged": {
        "endpoint": {
          "httpHost": "commerce-staged",
          "httpPort": 4352,
          "httpsHost": "commerce-staged",
          "httpsPort": 4353
        },
        "abstractEndpoint": {
          "httpHost": "commerce-staged",
          "httpPort": 4352,
          "httpsHost": "commerce-staged",
          "httpsPort": 4353
        },
        "remoteOnly": true
      },
      "commerceStagedServer": {
        "endpoint": {
          "httpHost": "commerce-staged",
          "httpPort": 4352,
          "httpsHost": "commerce-staged",
          "httpsPort": 4353
        },
        "abstractEndpoint": {
          "httpHost": "commerce-staged",
          "httpPort": 4352,
          "httpsHost": "commerce-staged",
          "httpsPort": 4353
        },
        "remoteOnly": true
      },
      "engagement": {
        "endpoint": {
          "httpHost": "engagement",
          "httpPort": 4340,
          "httpsHost": "engagement",
          "httpsPort": 4341
        },
        "abstractEndpoint": {
          "httpHost": "engagement",
          "httpPort": 4340,
          "httpsHost": "engagement",
          "httpsPort": 4341
        },
        "remoteOnly": true
      },
      "engagementServer": {
        "endpoint": {
          "httpHost": "engagement",
          "httpPort": 4340,
          "httpsHost": "engagement",
          "httpsPort": 4341
        },
        "abstractEndpoint": {
          "httpHost": "engagement",
          "httpPort": 4340,
          "httpsHost": "engagement",
          "httpsPort": 4341
        },
        "remoteOnly": true
      },
      "loyalty": {
        "endpoint": {
          "httpHost": "loyalty",
          "httpPort": 4360,
          "httpsHost": "loyalty",
          "httpsPort": 4361
        },
        "abstractEndpoint": {
          "httpHost": "loyalty",
          "httpPort": 4360,
          "httpsHost": "loyalty",
          "httpsPort": 4361
        },
        "remoteOnly": true
      },
      "loyaltyServer": {
        "endpoint": {
          "httpHost": "loyalty",
          "httpPort": 4360,
          "httpsHost": "loyalty",
          "httpsPort": 4361
        },
        "abstractEndpoint": {
          "httpHost": "loyalty",
          "httpPort": 4360,
          "httpsHost": "loyalty",
          "httpsPort": 4361
        },
        "remoteOnly": true
      },
      "waste": {
        "endpoint": {
          "httpHost": "waste",
          "httpPort": 4370,
          "httpsHost": "waste",
          "httpsPort": 4371
        },
        "abstractEndpoint": {
          "httpHost": "waste",
          "httpPort": 4370,
          "httpsHost": "waste",
          "httpsPort": 4371
        },
        "remoteOnly": true
      },
      "wasteServer": {
        "endpoint": {
          "httpHost": "waste",
          "httpPort": 4370,
          "httpsHost": "waste",
          "httpsPort": 4371
        },
        "abstractEndpoint": {
          "httpHost": "waste",
          "httpPort": 4370,
          "httpsHost": "waste",
          "httpsPort": 4371
        },
        "remoteOnly": true
      },
      "location": {
        "endpoint": {
          "httpHost": "location",
          "httpPort": 4380,
          "httpsHost": "location",
          "httpsPort": 4381
        },
        "abstractEndpoint": {
          "httpHost": "location",
          "httpPort": 4380,
          "httpsHost": "location",
          "httpsPort": 4381
        },
        "remoteOnly": true
      },
      "locationServer": {
        "endpoint": {
          "httpHost": "location",
          "httpPort": 4380,
          "httpsHost": "location",
          "httpsPort": 4381
        },
        "abstractEndpoint": {
          "httpHost": "location",
          "httpPort": 4380,
          "httpsHost": "location",
          "httpsPort": 4381
        },
        "remoteOnly": true
      },
      "wcms": {
        "endpoint": {
          "httpHost": "wcms-staged",
          "httpPort": 4312,
          "httpsHost": "wcms-staged",
          "httpsPort": 4313
        },
        "abstractEndpoint": {
          "httpHost": "wcms-staged",
          "httpPort": 4312,
          "httpsHost": "wcms-staged",
          "httpsPort": 4313
        },
        "remoteOnly": true
      },
      "commerce": {
        "endpoint": {
          "httpHost": "commerce",
          "httpPort": 4350,
          "httpsHost": "commerce",
          "httpsPort": 4351
        },
        "abstractEndpoint": {
          "httpHost": "commerce",
          "httpPort": 4350,
          "httpsHost": "commerce",
          "httpsPort": 4351
        },
        "remoteOnly": true
      },
      "commerceServer": {
        "endpoint": {
          "httpHost": "commerce",
          "httpPort": 4350,
          "httpsHost": "commerce",
          "httpsPort": 4351
        },
        "abstractEndpoint": {
          "httpHost": "commerce",
          "httpPort": 4350,
          "httpsHost": "commerce",
          "httpsPort": 4351
        },
        "remoteOnly": true
      }
    }
  }
};
