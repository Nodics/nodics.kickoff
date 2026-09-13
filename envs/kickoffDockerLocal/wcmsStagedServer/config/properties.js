/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares wcmsStagedServer composition and isolated deployment overrides. @layer config @owner nodics.kickoff */
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
  "httpHardening": {
    "cors": {
      "allowedOrigins": [
        "http://localhost:4100",
        "http://127.0.0.1:4100"
      ],
      "deniedOrigins": [
        "http://localhost:4200",
        "http://127.0.0.1:4200"
      ]
    }
  },
  "activeModules": {
    "groups": [],
    "modules": [
      "cmsStaged",
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "nexus.web",
      {
        "$config": "composition",
        "name": "agora",
        "field": "projectPacks",
        "spread": true
      },
      "kickoffDockerLocal",
      "wcmsStagedServer",
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
  "publishEnabled": true,
  "runtimeRole": {
    "code": "WCMS_STAGED",
    "publication": "STAGED"
  },
  "apiExposure": {
    "categories": {
      "dataImport": {
        "enabled": true
      },
      "dataExport": {
        "enabled": true
      },
      "mediaManagement": {
        "enabled": true
      }
    }
  },
  "data": {
    "dataReleases": {
      "lifecycleMetadataRequired": true,
      "destinationEnforced": true,
      "environmentClass": "LOCAL_PRODUCTION_SIMULATION",
      "allowedDestinationRoles": [
        "WCMS_STAGED"
      ],
      "contributions": [
        {
          "moduleName": "axis",
          "sections": [
            "axisBaseline"
          ]
        }
      ]
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
          "databaseName": "kickoffDockerLocalWcmsStaged"
        }
      }
    },
    "circa.ewaste": {
      "$config": "ref",
      "path": [
        "database",
        "default"
      ]
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
    },
    "cmsStaged": {
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
          "basePath": "/var/lib/nodics/media-staged"
        }
      }
    }
  },
  "cms": {
    "publication": {
      "enabled": true,
      "runtimeRole": "STAGED",
      "baselines": {
        "axis": {
          "releaseCode": "axis:axisBaseline",
          "releaseVersion": "0.0.0",
          "rootType": "site",
          "rootCode": "axisCmsSite",
          "sourceVersion": "0"
        },
        "nexus": {
          "releaseCode": "nexus.web:nexusCorporateSite",
          "releaseVersion": "0.0.20",
          "dataType": "sample",
          "rootType": "site",
          "rootCode": "nexusCorporateSite",
          "sourceVersion": "0"
        },
        "nexusupdate": {
          "releaseCode": "nexus.web:nexusCorporateSiteUpdate",
          "releaseVersion": "0.0.0",
          "dataType": "sample",
          "rootType": "site",
          "rootCode": "nexusCorporateSite",
          "sourceVersion": "0"
        },
        "nexusecosystemrepair": {
          "releaseCode": "nexus.web:nexusCorporateEcosystemComponentRepair",
          "releaseVersion": "0.0.0",
          "dataType": "sample",
          "rootType": "site",
          "rootCode": "nexusCorporateSite",
          "sourceVersion": "0"
        },
        "agora": {
          "releaseCode": "agora.apparel:agoraApparelContentCatalog",
          "releaseVersion": "0.0.0",
          "dataType": "sample",
          "rootType": "site",
          "rootCode": "agoraStorefrontSite",
          "sourceVersion": "0"
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
          "releaseVersion": "0.16.12",
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
          "releaseVersion": "0.0.2",
          "rootType": "site",
          "rootCode": "kickoffDocumentationSite",
          "sourceVersion": "0"
        }
      },
      "targetTransportProvider": "DefaultCmsPublicationModuleTransportService",
      "workflow": {
        "target": {
          "moduleName": "process",
          "connectionName": "process",
          "connectionType": "abstract",
          "timeoutMs": 10000,
          "maxAttempts": 2
        }
      },
      "target": {
        "moduleName": "cms",
        "connectionName": "cmsOnline",
        "connectionType": "abstract"
      }
    }
  },
  "editorial": {
    "workflow": {
      "processBaseUrl": "http://process:4330"
    },
    "publication": {
      "runtimeRole": "STAGED",
      "targetTransportProvider": "DefaultEditorialPublicationModuleTransportService",
      "target": {
        "moduleName": "editorial",
        "connectionName": "cmsOnline",
        "connectionType": "abstract"
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
    "cmsStaged": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "cmsStaged"
      ]
    },
    "wcmsOnline": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsOnline"
      ]
    },
    "wcmsOnlineServer": {
      "$config": "ref",
      "path": [
        "configurationValues",
        "remoteEndpoints",
        "wcmsOnlineServer"
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
        "httpPort": 4312,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4313
      },
      "abstractEndpoint": {
        "httpHost": "wcms-staged",
        "httpPort": 4312,
        "httpsHost": "wcms-staged",
        "httpsPort": 4313
      }
    }
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "cms": "wcms.staged",
      "editorial": "wcms.staged",
      "media": "wcms.staged",
      "publish": "wcms.staged",
      "wcmsExperience": "wcms.staged",
      "discoveryConfig": "wcms.staged",
      "discoveryMapping": "wcms.staged",
      "discoveryProjection": "wcms.staged",
      "discoveryPublication": "wcms.staged",
      "discoveryQuery": "wcms.staged",
      "discoveryRanking": "wcms.staged",
      "discoveryRuntime": "wcms.staged",
      "discoverySource": "wcms.staged"
    }
  }
};
