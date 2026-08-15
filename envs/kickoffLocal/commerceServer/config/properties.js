/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';
/** @module kickoffLocal/commerceServer/config/properties @description Defines isolated local Commerce coordinates. @layer environment-server-config @owner nodics.kickoff */
module.exports = {
    activeModules: { groups: [], modules: ['nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'kickoffLocal', 'commerceServer'] },
    runtimeRole: { code: 'COMMERCE', publication: 'OPERATIONAL' },
    apiExposure: { categories: { serviceRegistry: { enabled: true }, commerceCustomer: { enabled: true }, commercePublicationIngestion: { enabled: true } } },
    search: {
        product: { options: { enabled: true, fallback: false, engine: 'elastic' } },
        commerceSearchCore: { options: { enabled: true, fallback: false, engine: 'elastic' } },
        discoveryProjection: { options: { enabled: true, fallback: false, engine: 'elastic' } }
    },
    database: { default: { mongodb: { master: { databaseName: 'kickoffLocalCommerce' } } } },
    stripeProvider: { enabled: true, maturity: 'OFFLINE_CONFORMANCE', sandboxOnly: true, liveQualified: false },
    servers: {
        default: { endpoint: { httpHost: '127.0.0.1', httpPort: 4350, httpsHost: '127.0.0.1', httpsPort: 4351 }, abstractEndpoint: { httpHost: 'localhost', httpPort: 4350, httpsHost: 'localhost', httpsPort: 4351 } },
        profile: { endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        backoffice: { endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } }
    }
};
