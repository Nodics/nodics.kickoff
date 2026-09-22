module.exports = {
  "activeModules": {
    "groups": [
      "nexus"
    ],
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
  "runtimeRole": {
    "code": "WCMS_STAGED",
    "publication": "STAGED"
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalWcmsStaged"
        }
      }
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
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4312,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4313
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5312
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
