/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';

/** @module kickoffDockerLocal/config/properties @description Defines environment-wide Docker Local isolation and security policy. */
module.exports = {
    environment: { code: 'kickoffDockerLocal', qualificationClass: 'LOCAL_PRODUCTION_SIMULATION' },
    log: { level: process.env.NODICS_LOG_LEVEL || 'info' },
    event: { remotePublishEnabled: false },
    authSecurity: { apiKey: { pepper: process.env.AUTH_API_KEY_PEPPER } },
    defaultAuthDetail: { tenant: 'default', entCode: 'default', loginId: 'apiAdmin', apiKey: process.env.BOOTSTRAP_SERVICE_API_KEY },
    bootstrapIdentity: { source: 'environment', adminPassword: process.env.BOOTSTRAP_ADMIN_PASSWORD,
        servicePassword: process.env.BOOTSTRAP_SERVICE_PASSWORD, serviceApiKey: process.env.BOOTSTRAP_SERVICE_API_KEY },
    httpHardening: { cors: {
        enabled: true,
        allowedOrigins: ['http://localhost:4100', 'http://127.0.0.1:4100', 'http://localhost:4200', 'http://127.0.0.1:4200'],
        allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Idempotency-Key', 'X-CSRF-Token', 'X-Request-Id',
            'X-Correlation-Id', 'X-Nodics-Client-Contract-Version', 'X-Enterprise-Code', 'X-Nodics-Enterprise', 'X-Nodics-Tenant'],
        exposedHeaders: ['Retry-After', 'X-Request-Id', 'X-Correlation-Id', 'X-RateLimit-Limit', 'X-RateLimit-Remaining',
            'X-RateLimit-Reset', 'ETag'],
        allowCredentials: true,
        maxAge: 600
    } },
    data: { dataReleases: { types: { sample: { enabled: true, operatorExecution: true } } } },
    database: { default: { mongodb: { master: {
        URI: process.env.NODICS_MONGODB_URI,
        databaseName: process.env.NODICS_DATABASE_NAME
    } } } }
};
