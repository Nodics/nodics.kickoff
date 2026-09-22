module.exports = {
  "backofficeRegistration": {
    "connectionName": "default"
  },
  "backofficeApplicationInitialization": {
    "operatorOrigin": "http://localhost:3100"
  },
  "activeModules": {
    "groups": [
      "nodics.discovery",
      "nodics.copilot"
    ],
    "modules": [
      "redisCache",
      "circa.ewaste",
      "nexusCore",
      "search",
      "elastic",
      "nodics.kickoff",
      "kickoffCore",
      "kickoffApi",
      "kickoffInt",
      "axis",
      "ollamaProvider"
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
          "databaseName": "kickoffLocalPlatform"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpPort": 4300,
        "httpsPort": 4301
      }
    }
  }
};
