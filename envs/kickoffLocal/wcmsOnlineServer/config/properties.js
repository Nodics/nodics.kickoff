/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";
const wcmsSearchRuntimeModules = ["search", "elastic"];
const wcmsAuthorityModules = [
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
  "discoverySource",
];

/** @module wcmsOnlineServer/config/properties @description Defines the non-versioned Local WCMS Online target and delivery boundary. */
module.exports = {
  "runtimeIdentity": {
    "instanceCode": "kickoff-local-wcms-online-1",
    "remoteModules": [
      "profile",
      "backoffice"
    ]
  },
  "defaultAuthDetail": {
    "apiKey": {
      "$config": "env",
      "name": "NODICS_LOCAL_WCMS_ONLINE_API_KEY",
      "fallback": null
    }
  },
  "localResetProvider": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffLocal"
    ],
    "allowMissingModelServices": true,
    "requiredServiceNames": [
      "DefaultCmsDocumentationAccessPolicyService",
      "DefaultCmsDocumentationDashboardService",
      "DefaultCmsDocumentationNavigationService",
      "DefaultCmsDocumentationNodeService",
      "DefaultCmsDocumentationPageService",
      "DefaultCmsDocumentationProductService",
      "DefaultCmsDocumentationPublicationStateService",
      "DefaultCmsDocumentationSearchMetadataService"
    ],
    "modules": {
      "cms": true,
      "editorial": true,
      "import": true,
      "media": true,
      "publish": true,
      "search": true,
      "system": true,
      "token": true,
      "validator": true
    },
    "serviceNames": {
      "$config": "replace",
      "value": [
        "DefaultEmsFailedMessagesService",
        "DefaultWorkflow2SchemaService"
      ]
    },
    "searchIndexes": [
      {
        "moduleName": "discoveryProjection",
        "indexName": "discoveryDocumentProjection"
      }
    ]
  },
  "activeModules": {
    "groups": [],
    "modules": [
      "redisCache",
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
      "discoverySource",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt"
    ]
  },
  "publishEnabled": false,
  "runtimeRole": {
    "code": "WCMS_ONLINE",
    "publication": "ONLINE"
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "cms": true,
      "editorial": true,
      "media": true,
      "publish": true,
      "wcmsExperience": true,
      "discoveryConfig": true,
      "discoveryMapping": true,
      "discoveryProjection": true,
      "discoveryPublication": true,
      "discoveryQuery": true,
      "discoveryRanking": true,
      "discoveryRuntime": true,
      "discoverySource": true
    },
    "default": "wcms.online"
  },
  "search": {
    "discoveryProjection": {
      "options": {
        "enabled": true
      }
    },
    "wcmsExperience": {
      "options": {
        "enabled": true
      }
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "URI": "mongodb://127.0.0.1:27017/?replicaSet=nodicsLocal",
          "databaseName": "kickoffLocalWcmsOnline"
        }
      }
    }
  },
  "cms": {
    "publication": {
      "enabled": true,
      "runtimeRole": "ONLINE"
    },
    "delivery": {
      "mediaDeliveryBaseUrl": "http://127.0.0.1:4314/nodics/media/v0/content"
    }
  },
  "editorial": {
    "publication": {
      "runtimeRole": "ONLINE",
      "targetTransportProvider": null
    }
  },
  "data": {
    "dataReleases": {
      "allowedDestinationRoles": {
        "$config": "replace",
        "value": []
      }
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
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4314,
        "httpsPort": 4315
      }
    },
    "profile": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.endpoint"
      },
      "remoteOnly": true
    },
    "backoffice": {
      "endpoint": {
        "$config": "runtime",
        "name": "platformServer",
        "path": "servers.default.endpoint"
      },
      "remoteOnly": true
    }
  },
  "tooling": {
    "runtime": {
      "code": "wcmsOnline",
      "script": "start:wcms:online",
      "order": 1
    }
  }
};
