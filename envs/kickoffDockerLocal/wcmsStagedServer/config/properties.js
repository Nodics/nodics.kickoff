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
        "enabled": true
      }
    },
    "wcmsExperience": {
      "options": {
        "enabled": true
      }
    }
  },
  "httpHardening": {
    "cors": {
      "originEndpointOverrides": {
        "nexus": false
      }
    }
  },
  "activeModules": {
    "groups": ["nexus"],
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
      }
    }
  },
  "data": {
    "dataReleases": {
      "contributions": {
        "$config": "replace",
        "value": [
          {
            "moduleName": "axis",
            "sections": [
              "axisBaseline"
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
          "databaseName": "kickoffDockerLocalWcmsStaged"
        }
      }
    },
    "circa.ewaste": {},
    "search": {},
    "elastic": {},
    "cms": {},
    "editorial": {},
    "media": {},
    "publish": {},
    "wcmsExperience": {},
    "discoveryConfig": {},
    "discoveryMapping": {},
    "discoveryProjection": {},
    "discoveryPublication": {},
    "discoveryQuery": {},
    "discoveryRanking": {},
    "discoveryRuntime": {},
    "discoverySource": {},
    "cmsStaged": {}
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
          "releaseVersion": "0.0.0"
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
        "connectionName": "cmsOnline"
      }
    }
  },
  "editorial": {
    "workflow": {
      "processBaseUrl": "http://process:4330"
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
    "engagement": {
      "endpoint": {
        "$config": "runtime",
        "name": "engagementServer",
        "path": "servers.default.abstractEndpoint"
      },
      "remoteOnly": true
    },
    "engagementServer": {
      "endpoint": {
        "$config": "runtime",
        "name": "engagementServer",
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
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4312,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4313
      },
      "abstractEndpoint": {
        "httpHost": "wcms-staged",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "wcms-staged",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
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
  }
};
