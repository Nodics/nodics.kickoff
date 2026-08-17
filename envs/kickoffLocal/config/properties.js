/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module envs/kickoffLocal/config/properties
 * @description Defines Kickoff project-owned layered configuration for this boundary.
 * @layer config
 * @owner config
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = {
    environment: { code: 'kickoffLocal' },
    log: {
        level: 'info'
    },
    event: {
        remotePublishEnabled: false
    },
    httpHardening: {
        cors: {
            enabled: true,
            allowedOrigins: [
                'http://localhost:3100',
                'http://127.0.0.1:3100',
                'http://172.20.10.2:3100',
                'http://localhost:3200',
                'http://127.0.0.1:3200',
                'http://localhost:3300',
                'http://127.0.0.1:3300'
            ],
            allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
            allowedHeaders: [
                'Content-Type',
                'Authorization',
                'Idempotency-Key',
                'X-CSRF-Token',
                'X-Request-Id',
                'X-Correlation-Id',
                'X-Nodics-Client-Contract-Version',
                'X-Enterprise-Code',
                'X-Tenant-Code',
                'Tenant',
                'X-Nodics-Enterprise',
                'X-Nodics-Tenant'
            ],
            exposedHeaders: [
                'Retry-After',
                'X-Request-Id',
                'X-Correlation-Id',
                'X-RateLimit-Limit',
                'X-RateLimit-Remaining',
                'X-RateLimit-Reset',
                'ETag'
            ],
            allowCredentials: true,
            maxAge: 600
        }
    },
    apiExposure: {
        categories: {
            serviceRegistry: {
                enabled: true
            }
        }
    },
    data: {
        dataReleases: {
            types: {
                sample: {
                    enabled: true,
                    operatorExecution: true
                }
            }
        }
    },
    database: {
        default: {
            mongodb: {
                master: {
                    databaseName: 'kickoffLocal'
                }
            }
        }
    },
    defaultAuthDetail: {
        tenant: 'default',
        entCode: 'default',
        loginId: 'admin',
        apiKey: '944515ac-bbac-51cd-ac7e-3bbbb3c81bff'
    },
    bootstrapIdentity: {
        source: 'localSample',
        adminPassword: 'adminPassword',
        servicePassword: 'servicePassword',
        serviceApiKey: '944515ac-bbac-51cd-ac7e-3bbbb3c81bff'
    },
    authSecurity: {
        jwt: {
            secret: 'kickoff-local-jwt-secret-development-only-change-before-shared-use'
        },
        compatibility: {
            allowInsecureDevelopmentSecret: true,
            allowLocalBootstrapIdentity: true
        },
        apiKey: {
            requireScopes: false,
            allowLegacyHumanPrincipals: true,
            allowLegacyPlaintextLookup: true,
            pepper: 'kickoff-local-api-key-pepper-development-only-change-before-shared-use'
        },
        securityStamp: {
            failClosed: false,
            allowMissingStamp: true
        },
        refreshToken: {
            requireDistributedCache: false
        }
    },
    cache: {
        invalidation: {
            crossNode: false
        }
    }
};
