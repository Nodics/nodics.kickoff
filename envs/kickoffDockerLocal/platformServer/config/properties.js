module.exports = {
  "activeModules": {
    "groups": [],
    "modules": [
      "redisCache",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "circa.ewaste",
      "nexusCore",
      "axis",
      "search",
      "elastic",
      "ollamaProvider",
      "profile",
      "backoffice",
      "localizationCore",
      "localizationApi"
    ]
  },
  "runtimeRole": {
    "code": "PLATFORM",
    "publication": "OPERATIONAL"
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalPlatform"
        }
      }
    }
  },
  "backofficeApplicationInitialization": {
    "operatorOrigin": "http://localhost:4100"
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4300,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4301
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5300
      },
      "abstractEndpoint": {
        "httpHost": "platform",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "platform",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
  }
};
