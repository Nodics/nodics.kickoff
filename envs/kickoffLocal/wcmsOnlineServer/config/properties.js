module.exports = {
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
    }
  },
  "editorial": {
    "publication": {
      "runtimeRole": "ONLINE",
      "targetTransportProvider": null
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4314,
        "httpsPort": 4315
      }
    }
  }
};
