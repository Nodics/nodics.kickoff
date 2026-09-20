/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";

/** @description Declares Docker environment policy and shared endpoint coordinates for nConfig layering. @layer config @owner nodics.kickoff */
module.exports = {
  "environment": {
    "class": "LOCAL_PRODUCTION_SIMULATION"
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
        "platform": "http://127.0.0.1:5300",
        "wcmsStaged": "http://127.0.0.1:5312",
        "wcmsOnline": "http://127.0.0.1:5314",
        "process": "http://127.0.0.1:5330",
        "engagement": "http://127.0.0.1:5340",
        "loyalty": "http://127.0.0.1:5360",
        "commerceStaged": "http://127.0.0.1:5352",
        "commerce": "http://127.0.0.1:5350",
        "waste": "http://127.0.0.1:5370",
        "location": "http://127.0.0.1:5380"
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
        5300,
        5312,
        5314,
        5330,
        5340,
        5350,
        5352,
        5360,
        5370,
        5380
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
          5300,
          5312,
          5314,
          5330,
          5340,
          5350,
          5352,
          5360,
          5370,
          5380
        ],
        "readLoadPorts": [
          5314,
          5300
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
          "location",
          "axis",
          "nexus",
          "agora-apparel",
          "agora-electronics",
          "agora-telco",
          "circa"
        ],
        "networkSeparation": {
          "publicContainer": "nodics-kickoff-docker-local-nexus-1",
          "applicationContainer": "nodics-kickoff-docker-local-wcms-staged-1"
        }
      },
      "soak": {
        "durationSeconds": 1800,
        "publicationIntervalSeconds": 300,
        "concurrency": 12,
        "requestIntervalMs": 1000,
        "readinessPorts": [
          5300,
          5312,
          5314,
          5330,
          5340,
          5350,
          5352,
          5360,
          5370,
          5380
        ],
        "acceptanceCommand": "docker-local:acceptance"
      },
      "resilienceQualification": {
        "acceptanceCommand": "docker-local:acceptance",
        "restoreConfirmationToken": "--confirm-replace-docker-local-data",
        "readyPorts": [
          5300,
          5312,
          5314,
          5330,
          5340,
          5350,
          5352,
          5360,
          5370,
          5380
        ],
        "readLoad": {
          "total": 1000,
          "concurrency": 40,
          "ports": [
            5314,
            5300
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
  }
};
