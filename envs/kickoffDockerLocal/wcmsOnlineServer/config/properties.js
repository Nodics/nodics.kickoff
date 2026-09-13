/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares wcmsOnlineServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
module.exports = {
  "search": {
    "discoveryProjection": {
      "options": {
        "enabled": true,
        "fallback": false,
        "engine": "elastic"
      },
      "elastic": {
        "connection": {
          "hosts": [
            {
              "$config": "env",
              "name": "NODICS_ELASTICSEARCH_URL",
              "fallback": "http://elasticsearch:9200"
            }
          ]
        }
      }
    },
    "wcmsExperience": {
      "options": {
        "enabled": true,
        "fallback": false,
        "engine": "elastic"
      },
      "elastic": {
        "connection": {
          "hosts": [
            {
              "$config": "env",
              "name": "NODICS_ELASTICSEARCH_URL",
              "fallback": "http://elasticsearch:9200"
            }
          ]
        }
      }
    }
  },
  "activeModules": {
    "groups": [],
    "modules": [
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "kickoffDockerLocal",
      "wcmsOnlineServer",
      "search",
      "elastic",
      "cms",
      "editorial",
      "media",
      "publish",
      "wcmsExperience",
      "discoveryConfig",
      "discoveryMapping",
      "discoveryProjection",
      "discoveryPublication",
      "discoveryQuery",
      "discoveryRanking",
      "discoveryRuntime",
      "discoverySource"
    ]
  },
  "publishEnabled": false,
  "runtimeRole": {
    "code": "WCMS_ONLINE",
    "publication": "ONLINE"
  },
  "data": {
    "dataReleases": {
      "lifecycleMetadataRequired": true,
      "destinationEnforced": true,
      "environmentClass": "LOCAL_PRODUCTION_SIMULATION",
      "allowedDestinationRoles": [],
      "contributions": []
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
          "databaseName": "kickoffDockerLocalWcmsOnline"
        }
      }
    },
    "search": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "elastic": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "cms": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "editorial": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "media": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "publish": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "wcmsExperience": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryConfig": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryMapping": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryProjection": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryPublication": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryQuery": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryRanking": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoveryRuntime": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    },
    "discoverySource": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
    }
  },
  "media": {
    "storage": {
      "providers": {
        "local": {
          "basePath": "/var/lib/nodics/media-online"
        }
      }
    }
  },
  "cms": {
    "publication": {
      "enabled": true,
      "runtimeRole": "ONLINE",
      "targetTransportProvider": null
    },
    "delivery": {
      "mediaDeliveryBaseUrl": "http://localhost:5314/nodics/media/v0/content"
    }
  },
  "editorial": {
    "publication": {
      "runtimeRole": "ONLINE",
      "targetTransportProvider": null
    }
  },
  "apiExposure": {
    "categories": {
      "schemaApi": {
        "enabled": false
      },
      "schemaMaintenance": {
        "enabled": false
      },
      "dataImport": {
        "enabled": false
      },
      "dataExport": {
        "enabled": false
      },
      "mediaManagement": {
        "enabled": false
      },
      "mediaDelivery": {
        "enabled": true
      }
    }
  },
  "servers": {
    "platform": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "platform"
      ]
    },
    "platformServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "platformServer"
      ]
    },
    "profile": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "profile"
      ]
    },
    "backoffice": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "backoffice"
      ]
    },
    "wcmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsStaged"
      ]
    },
    "wcmsStagedServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsStagedServer"
      ]
    },
    "cmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsStaged"
      ]
    },
    "cmsOnline": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsOnline"
      ]
    },
    "process": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "process"
      ]
    },
    "processServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "processServer"
      ]
    },
    "commerce": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerce"
      ]
    },
    "commerceServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceServer"
      ]
    },
    "commerceStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceStaged"
      ]
    },
    "commerceStagedServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "commerceStagedServer"
      ]
    },
    "engagement": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "engagement"
      ]
    },
    "engagementServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "engagementServer"
      ]
    },
    "loyalty": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "loyalty"
      ]
    },
    "loyaltyServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "loyaltyServer"
      ]
    },
    "waste": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "waste"
      ]
    },
    "wasteServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wasteServer"
      ]
    },
    "location": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "location"
      ]
    },
    "locationServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "locationServer"
      ]
    },
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4314,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4315
      },
      "abstractEndpoint": {
        "httpHost": "wcms-online",
        "httpPort": 4314,
        "httpsHost": "wcms-online",
        "httpsPort": 4315
      }
    }
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "cms": "wcms.online",
      "editorial": "wcms.online",
      "media": "wcms.online",
      "publish": "wcms.online",
      "wcmsExperience": "wcms.online",
      "discoveryConfig": "wcms.online",
      "discoveryMapping": "wcms.online",
      "discoveryProjection": "wcms.online",
      "discoveryPublication": "wcms.online",
      "discoveryQuery": "wcms.online",
      "discoveryRanking": "wcms.online",
      "discoveryRuntime": "wcms.online",
      "discoverySource": "wcms.online"
    }
  }
};
