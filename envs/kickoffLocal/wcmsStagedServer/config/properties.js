module.exports = {
  "activeModules": {
    "groups": [
      "nexus"
    ],
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
          "releaseVersion": "0.0.8",
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
    }
  }
};
