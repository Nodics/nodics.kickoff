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
            'wcmsServer'
        ]
    },
    apiExposure: {
        categories: {
            schemaWorkbench: {
                enabled: true
            },
            schemaMaintenance: {
                enabled: true
            },
            openApiContract: {
                enabled: true
            },
            mediaManagement: {
                enabled: true
            }
        }
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
