/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module envs/kickoffLocal/wcmsServer/config/properties
 * @description Defines Kickoff project-owned layered configuration for this boundary.
 * @layer config
 * @owner wcmsServer
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = {
    activeModules: {
        groups: [],
        modules: [
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'nexusWebData',
            'kickoffLocal',
            'wcmsServer'
        ]
    },
    database: {
        default: {
            mongodb: {
                master: {
                    databaseName: 'kickoffLocalWcms'
                }
            }
        }
    },
    editorial: {
        workflow: {
            processBaseUrl: 'http://127.0.0.1:4330'
        }
    },
    servers: {
        default: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4310,
                httpsHost: '127.0.0.1',
                httpsPort: 4311
            },
            abstractEndpoint: {
                httpHost: 'localhost',
                httpPort: 4310,
                httpsHost: 'localhost',
                httpsPort: 4311
            }
        },
        profile: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            },
            abstractEndpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            }
        },
        backoffice: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            },
            abstractEndpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            }
        }
    }
};
