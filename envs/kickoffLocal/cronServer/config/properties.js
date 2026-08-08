'use strict';

module.exports = {
    activeModules: {
        groups: [],
        modules: [
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'kickoffLocal',
            'cronServer'
        ]
    },
    database: {
        default: {
            mongodb: {
                master: {
                    databaseName: 'kickoffLocalCron'
                }
            }
        }
    },
    servers: {
        default: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4320,
                httpsHost: '127.0.0.1',
                httpsPort: 4321
            },
            abstractEndpoint: {
                httpHost: 'localhost',
                httpPort: 4320,
                httpsHost: 'localhost',
                httpsPort: 4321
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
