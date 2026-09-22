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
      "nexus.web",
      "commsCore",
      "commsSchema",
      "commsVerification",
      "localCommsProvider",
      "commsApi",
      "engagementCore",
      "customerReview",
      "customerFeedback",
      "testimonial",
      "contactSubmission",
      "engagementComms",
      "engagementApi"
    ]
  },
  "runtimeRole": {
    "code": "ENGAGEMENT",
    "publication": "OPERATIONAL"
  },
  "engagement": {
    "capabilities": {
      "testimonial": true,
      "customerReview": true,
      "customerFeedback": true
    }
  },
  "customerFeedback": {
    "enabled": true
  },
  "database": {
    "default": {
      "mongodb": {
        "master": {
          "databaseName": "kickoffDockerLocalEngagement"
        }
      }
    }
  },
  "servers": {
    "default": {
      "endpoint": {
        "httpHost": "0.0.0.0",
        "httpPort": 4340,
        "httpsHost": "0.0.0.0",
        "httpsPort": 4341
      },
      "browserEndpoint": {
        "httpHost": "localhost",
        "httpPort": 5340
      },
      "abstractEndpoint": {
        "httpHost": "engagement",
        "httpPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpPort"
        },
        "httpsHost": "engagement",
        "httpsPort": {
          "$config": "ref",
          "path": "servers.default.endpoint.httpsPort"
        }
      }
    }
  },
  "runtimeAuthorityContexts": {
    "modules": {
      "publish": "engagement.operational"
    }
  }
};
