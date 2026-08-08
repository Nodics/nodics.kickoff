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
            'platformServer'
        ]
    },
    profileBrowserSession: {
        enabled: true,
        refreshCookieName: 'nodics_axis_refresh',
        csrfCookieName: 'nodics_axis_csrf',
        cookiePath: '/nodics/profile/v0/employee/browser',
        csrfCookiePath: '/',
        sameSite: 'Lax',
        secure: false,
        maximumAgeSeconds: 86400
    },
    servers: {
        default: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            },
            abstractEndpoint: {
                httpHost: 'localhost',
                httpPort: 4300,
                httpsHost: 'localhost',
                httpsPort: 4301
            }
        }
    }
};
