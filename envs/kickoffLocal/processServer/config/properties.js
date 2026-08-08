/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module kickoffLocal/processServer/config/properties
 * @description Defines only local Process server coordinates for the Kickoff reference environment.
 * @layer environment-server-config
 * @owner nodics.kickoff
 * @override Customer projects may change local host/port/topology without copying framework Process defaults.
 */
module.exports = {
    activeModules: {
        groups: [],
        modules: [
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'kickoffLocal',
            'processServer'
        ]
    },
    database: {
        default: {
            mongodb: {
                master: {
                    databaseName: 'kickoffLocalProcess'
                }
            }
        }
    },
    servers: {
        default: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4330,
                httpsHost: '127.0.0.1',
                httpsPort: 4331
            },
            abstractEndpoint: {
                httpHost: 'localhost',
                httpPort: 4330,
                httpsHost: 'localhost',
                httpsPort: 4331
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
