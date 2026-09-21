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

/** @module wcmsStagedServer/config/properties @description Defines Local WCMS Staged role, coordinates, persistence, and Online target connection. */
module.exports = {
  "runtimeIdentity": {
    "instanceCode": "kickoff-local-wcms-staged-1",
    "remoteModules": [
      "profile",
      "backoffice",
      "workflow"
    ]
  },
  "defaultAuthDetail": {
    "apiKey": {
      "$config": "env",
      "name": "NODICS_WCMS_STAGED_API_KEY",
      "fallback": null
    }
  },
  "httpHardening": {
    "cors": {
      "originEndpointOverrides": {
        "nexus": false
      }
    }
  },
  "localResetProvider": {
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
    "groups": ["nexus"],
    "modules": [
      "redisCache",
      "axis",
      "circa.ewaste",
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
      "cmsStaged",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "nexus.web",
      {
        "$config": "composition",
        "name": "agora",
        "field": "projectPacks",
        "spread": true
      }
    ]
  },
  "publishEnabled": true,
  "runtimeRole": {
    "code": "WCMS_STAGED",
    "publication": "STAGED"
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
    "default": "wcms.staged"
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
  "data": {
    "dataReleases": {
      "initializationProfiles": {
        "localWcmsFoundation": {
          "enabled": true,
          "label": "Local WCMS foundation",
          "description": "Install the required initialization and core releases for the Local Staged content runtime.",
          "completionMessage": "The Staged content foundation is ready. You can review content in Axis and submit approved versions for Online publication.",
          "template": "foundation"
        },
        "localDocumentationFoundation": {
          "enabled": true,
          "label": "Local Documentation foundation",
          "description": "Install the WCMS initialization releases required before documentation content packs can be reviewed and published.",
          "completionMessage": "The Local Documentation foundation is ready. Import documentation packs through Setup and Accelerators or the Documentation dashboard, then publish approved content Online.",
          "template": "axisDocumentationFoundation"
        }
      },
      "contributions": {
        "$config": "replace",
        "value": [
          {
            "moduleName": "axis",
            "sections": [
              "axisBaseline",
              "core-v002"
            ]
          }
        ]
      }
    }
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "URI": "mongodb://127.0.0.1:27017/?replicaSet=nodicsLocal",
          "databaseName": "kickoffLocalWcmsStaged"
        }
      }
    }
  },
  "cms": {
    "publication": {
      "enabled": true,
      "runtimeRole": "STAGED",
      "baselines": {
        "nexusincremental": {
            "releaseCode": "nexus.web:nexusCorporateIncrementalProof",
            "releaseVersion": "0.0.0",
            "dataType": "sample",
            "rootType": "site",
            "rootCode": "nexusCorporateSite",
            "sourceVersion": "0"
          },
          "nexusprofessionalcopy": {
            "releaseCode": "nexus.web:nexusCorporateProfessionalCopyUpdate",
            "releaseVersion": "0.0.0",
            "dataType": "sample",
            "rootType": "site",
            "rootCode": "nexusCorporateSite",
            "sourceVersion": "0"
          },
        "axis": {
          "releaseVersion": "0.0.0"
        },
        "axisassistant": {
          "releaseVersion": "0.0.1"
        },
        "agoraapparel": {
          "releaseCode": "agora.apparel:agoraApparelContentCatalog",
          "releaseVersion": "0.0.7",
          "dataType": "sample",
          "rootType": "site",
          "rootCode": "agoraApparelSite",
          "sourceVersion": "0"
        },
        "agoraelectronics": {
          "releaseCode": "agora.electronics:agoraElectronicsContentCatalog",
          "releaseVersion": "0.0.2",
          "dataType": "sample",
          "rootType": "site",
          "rootCode": "agoraElectronicsSite",
          "sourceVersion": "0"
        },
        "agoratelco": {
          "releaseCode": "agora.telco:agoraTelcoContentCatalog",
          "releaseVersion": "0.0.2",
          "dataType": "sample",
          "rootType": "site",
          "rootCode": "agoraTelcoSite",
          "sourceVersion": "0"
        },
        "frameworkdocs": {
          "contentPackCode": "nodicsDocumentation",
          "releaseVersion": "0.16.14",
          "rootType": "site",
          "rootCode": "nodicsDocumentationSite",
          "sourceVersion": "0"
        },
        "axisdocs": {
          "contentPackCode": "axisDocumentation",
          "releaseVersion": "0.0.3",
          "rootType": "site",
          "rootCode": "axisDocumentationSite",
          "sourceVersion": "0"
        },
        "kickoffdocs": {
          "contentPackCode": "kickoffDocumentation",
          "releaseVersion": "0.0.3",
          "rootType": "site",
          "rootCode": "kickoffDocumentationSite",
          "sourceVersion": "0"
        }
      },
      "workflow": {
        "target": {
          "moduleName": "process",
          "connectionName": "process",
          "connectionType": "abstract",
          "timeoutMs": 10000,
          "maxAttempts": 2
        }
      },
      "targetTransportProvider": "DefaultCmsPublicationModuleTransportService",
      "target": {
        "moduleName": "cms",
        "connectionName": "cmsOnline"
      }
    }
  },
  "editorial": {
    "workflow": {
      "processBaseUrl": "http://127.0.0.1:4330"
    },
    "publication": {
      "targetTransportProvider": "DefaultEditorialPublicationModuleTransportService",
      "target": {
        "moduleName": "editorial",
        "connectionName": "cmsOnline",
        "connectionType": "abstract"
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4312,
        "httpsPort": 4313
      }
    },
    "profile": {
      "remoteOnly": true
    },
    "backoffice": {
      "remoteOnly": true
    }
  },
  "apiExposure": {
    "categories": {
      "dataExport": {
        "enabled": true
      }
    }
  },
  "tooling": {
    "runtime": {
      "code": "wcmsStaged",
      "script": "start:wcms:staged",
      "order": 3
    }
  }
};
