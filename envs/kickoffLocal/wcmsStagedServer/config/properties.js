module.exports = {
  // Controlled local qualification; retained/versioned Media forbids physical cleanup.
  "media": {
    "publication": {
      "versionProviderEnabled": true,
      "runtimeRole": "STAGED",
      "targetTransportProvider": "DefaultMediaPublicationModuleTransportService",
      "target": { "connectionName": "cmsOnline" }
    }
  },
  "publish": {
    "setup": { "observation": { "enabled": true } },
    "providers": {
      "versionProviders": { "media": "DefaultMediaPublicationVersionProviderService" },
      "domainAdapters": { "media": "DefaultMediaPublicationVersionProviderService" },
      "workflowProviders": { "media": "DefaultPublicationApprovalWorkflowService" }
    },
    "approvalWorkflow": {
      "target": { "connectionName": "process", "connectionType": "abstract", "runtimeRole": "PROCESS" }
    }
  },
  "activeModules": {
    "groups": [
      "nexus"
    ],
    "modules": [
      "vMongodb",
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
  "schemaPolicies": {
    "media": {
      "publicationVersioned": { "isVersionedEnabled": true, "versionedReadMode": "CURRENT" }
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
          "releaseVersion": "0.0.1",
          "dataType": "sample",
          "rootType": "site",
          "rootCode": "nexusCorporateSite",
          "sourceVersion": "0"
        },
        "nexusprofessionalcopy": {
          "releaseCode": "nexus.web:nexusCorporateProfessionalCopyUpdate",
          "releaseVersion": "0.0.1",
          "dataType": "sample",
          "rootType": "site",
          "rootCode": "nexusCorporateSite",
          "sourceVersion": "0"
        },
        "axis": {
          "releaseVersion": "0.0.1"
        },
        "axisassistant": {
          "releaseVersion": "0.0.1"
        },
        "frameworkdocs": {
          "contentPackCode": "nodicsDocumentation",
          "releaseVersion": "0.0.1",
          "rootType": "site",
          "rootCode": "nodicsDocumentationSite",
          "sourceVersion": "0"
        },
        "axisdocs": {
          "contentPackCode": "axisDocumentation",
          "releaseVersion": "0.0.1",
          "rootType": "site",
          "rootCode": "axisDocumentationSite",
          "sourceVersion": "0"
        }
      },
      "workflow": {
        "target": {
          "connectionName": "process"
        }
      },
      "targetTransportProvider": "DefaultCmsPublicationModuleTransportService",
      "target": {
        "connectionName": "cmsOnline"
      }
    }
  },
  "editorial": {
    "workflow": {
      "processConnectionName": "process"
    },
    "publication": {
      "targetTransportProvider": "DefaultEditorialPublicationModuleTransportService",
      "target": {
        "connectionName": "cmsOnline"
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
