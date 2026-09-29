module.exports = {
  "credentials": {
    "telegram.bot.circa": {
      "value": null,
      "label": "Circa Telegram bot token",
      "status": "UNCONFIGURED",
      "secret": true,
      "credentialKind": "BOT_TOKEN"
    },
    "openai.circa": {
      "value": null,
      "label": "Circa OpenAI provider token",
      "status": "UNCONFIGURED",
      "secret": true,
      "credentialKind": "API_TOKEN"
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
          "databaseName": {
            "$config": "env",
            "name": "NODICS_DATABASE_NAME"
          }
        }
      }
    }
  },
  "cache": {
    "default": {
      "engines": {
        "redis": {
          "enabled": true,
          "options": {
            "url": {
              "$config": "env",
              "name": "REDIS_URL"
            },
            "host": null,
            "port": null,
            "password": {
              "$config": "env",
              "name": "REDIS_PASSWORD"
            },
            "sentinel": {
              "enabled": true,
              "name": "nodics",
              "password": {
                "$config": "env",
                "name": "REDIS_PASSWORD"
              },
              "endpoints": [
                {
                  "host": "redis-sentinel",
                  "port": 26379
                }
              ],
              "connectTimeout": 5000,
              "commandTimeout": 3000
            }
          }
        }
      }
    }
  },
  "tooling": {
    "acceptance": {
      "platformCommand": "acceptance:local",
      "commerceCommand": "acceptance:agora-commerce",
      "commerceDataCommand": "acceptance:agora-commerce-data",
      "commercePublicationCommand": "acceptance:agora-commerce-publication",
      "environmentUrls": {
        "NEXUS_CMS_URL": "wcmsOnline"
      },
      "urls": {
        "platform": { "server": "platformServer" },
        "wcmsStaged": { "server": "wcmsStagedServer" },
        "wcmsOnline": { "server": "wcmsOnlineServer" },
        "process": { "server": "processServer" },
        "engagement": { "server": "engagementServer" },
        "loyalty": { "server": "loyaltyServer" },
        "commerceStaged": { "server": "commerceStagedServer" },
        "commerce": { "server": "commerceServer" },
        "waste": { "server": "wasteServer" },
        "location": { "server": "locationServer" }
      }
    },
    "container": {
      "composeProjectName": "nodics-kickoff-docker-local",
      "composeFile": "envs/kickoffDockerLocal/docker/compose.yaml",
      "generatedDirectory": "envs/kickoffDockerLocal/generated",
      "environmentFile": "docker.env",
      "replicaSet": "nodicsDockerLocal",
      "mongodbHost": "mongodb",
      "redisPrimaryHost": "redis-primary",
      "hostPorts": [
        {"$config":"runtime","name":"platformServer","path":"servers.default.browserEndpoint.httpPort"},
        {"$config":"runtime","name":"wcmsStagedServer","path":"servers.default.browserEndpoint.httpPort"},
        {"$config":"runtime","name":"wcmsOnlineServer","path":"servers.default.browserEndpoint.httpPort"},
        {"$config":"runtime","name":"processServer","path":"servers.default.browserEndpoint.httpPort"},
        {"$config":"runtime","name":"engagementServer","path":"servers.default.browserEndpoint.httpPort"},
        {"$config":"runtime","name":"commerceServer","path":"servers.default.browserEndpoint.httpPort"},
        {"$config":"runtime","name":"commerceStagedServer","path":"servers.default.browserEndpoint.httpPort"},
        {"$config":"runtime","name":"loyaltyServer","path":"servers.default.browserEndpoint.httpPort"},
        {"$config":"runtime","name":"wasteServer","path":"servers.default.browserEndpoint.httpPort"},
        {"$config":"runtime","name":"locationServer","path":"servers.default.browserEndpoint.httpPort"}
      ],
      "nativeIsolationPorts": [
        4300,
        4312,
        4314,
        4330,
        4340,
        4350,
        4352,
        4360,
        4370,
        4380
      ],
      "resilience": {
        "backupDirectory": "envs/kickoffDockerLocal/generated/backups",
        "restoreConfirmationToken": "--confirm-replace-docker-local-data",
        "containers": {
          "mongodb": "nodics-kickoff-docker-local-mongodb-1",
          "redisPrimary": "nodics-kickoff-docker-local-redis-primary-1"
        },
        "volumes": {
          "redis": "nodics-kickoff-docker-local-redis",
          "mediaStaged": "nodics-kickoff-docker-local-media-staged",
          "mediaOnline": "nodics-kickoff-docker-local-media-online"
        }
      },
      "qualification": {
        "environmentContract": "test/dockerLocalEnvironmentContract.test.mjs",
        "runtimePrepare": "test/dockerLocalRuntimePrepare.test.js",
        "runtimePorts": [
          {"$config":"runtime","name":"platformServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"wcmsStagedServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"wcmsOnlineServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"processServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"engagementServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"commerceServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"commerceStagedServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"loyaltyServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"wasteServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"locationServer","path":"servers.default.browserEndpoint.httpPort"}
        ],
        "readLoadPorts": [
          {"$config":"runtime","name":"wcmsOnlineServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"platformServer","path":"servers.default.browserEndpoint.httpPort"}
        ],
        "readLoadRequests": 50,
        "containerPrefix": "nodics-kickoff-docker-local-",
        "containers": {
          "mongodb": "nodics-kickoff-docker-local-mongodb-1",
          "redisPrimary": "nodics-kickoff-docker-local-redis-primary-1",
          "redisSentinel": "nodics-kickoff-docker-local-redis-sentinel-1",
          "elasticsearch": "nodics-kickoff-docker-local-elasticsearch-1"
        },
        "hardenedContainers": [
          "platform",
          "wcms-staged",
          "wcms-online",
          "process",
          "engagement",
          "loyalty",
          "commerce",
          "commerce-staged",
          "waste",
          "location"
        ],
        "networkSeparation": {
          "applicationContainers": { "$config": "ref", "path": "tooling.container.qualification.hardenedContainers" },
          "requiredNetworks": ["nodics-kickoff-docker-local-application", "nodics-kickoff-docker-local-data"],
          "forbiddenNetworks": ["nodics-kickoff-docker-local-public"]
        }
      },
      "soak": {
        "durationSeconds": 1800,
        "publicationIntervalSeconds": 300,
        "concurrency": 12,
        "requestIntervalMs": 1000,
        "readinessPorts": [
          {"$config":"runtime","name":"platformServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"wcmsStagedServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"wcmsOnlineServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"processServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"engagementServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"commerceServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"commerceStagedServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"loyaltyServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"wasteServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"locationServer","path":"servers.default.browserEndpoint.httpPort"}
        ],
        "acceptanceCommand": "docker-local:acceptance"
      },
      "resilienceQualification": {
        "acceptanceCommand": "docker-local:acceptance",
        "restoreConfirmationToken": "--confirm-replace-docker-local-data",
        "readyPorts": [
          {"$config":"runtime","name":"platformServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"wcmsStagedServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"wcmsOnlineServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"processServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"engagementServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"commerceServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"commerceStagedServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"loyaltyServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"wasteServer","path":"servers.default.browserEndpoint.httpPort"},
          {"$config":"runtime","name":"locationServer","path":"servers.default.browserEndpoint.httpPort"}
        ],
        "readLoad": {
          "total": 1000,
          "concurrency": 40,
          "ports": [
            {"$config":"runtime","name":"wcmsOnlineServer","path":"servers.default.browserEndpoint.httpPort"},
            {"$config":"runtime","name":"platformServer","path":"servers.default.browserEndpoint.httpPort"}
          ]
        },
        "containers": {
          "redisPrimary": "nodics-kickoff-docker-local-redis-primary-1",
          "redisSentinel": "nodics-kickoff-docker-local-redis-sentinel-1",
          "redisReplica": "nodics-kickoff-docker-local-redis-replica-1"
        }
      },
      "code": "dockerLocal"
    }
  },
  "search": {
    "default": {
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
  "log": {
    "level": {
      "$config": "env",
      "name": "NODICS_LOG_LEVEL",
      "fallback": "info"
    }
  },
  "httpHardening": {
    "securityHeaders": {
      "headers": {
        "Cross-Origin-Resource-Policy": "cross-origin"
      }
    },
    "cors": {
      "originEndpoints": {
        "axis": {
          "port": 4100
        },
        "nexus": {
          "port": 4200
        },
        "agora": {
          "port": 6300
        },
        "agoraElectronics": {
          "port": 6400
        },
        "agoraTelco": {
          "port": 6500
        },
        "circa": {
          "port": 6600
        }
      }
    }
  },
  "profileCustomerBrowserSession": {
    "enabled": true,
    "refreshCookieName": "nodics_docker_customer_refresh",
    "csrfCookieName": "nodics_docker_customer_csrf",
    "allowInsecureLoopback": true,
    "sameSite": "Lax"
  },
  "profileBrowserSession": {
    "enabled": true,
    "refreshCookieName": "nodics_docker_axis_refresh",
    "csrfCookieName": "nodics_docker_axis_csrf",
    "allowInsecureLoopback": true,
    "sameSite": "Lax"
  },
  "localResetProvider": {
    "enabled": true,
    "environmentAllowlist": [
      "kickoffDockerLocal"
    ],
    "allowMissingModelServices": true,
    "enabledRuntimeRoles": [
      "WASTE",
      "LOCATION"
    ]
  }
};
