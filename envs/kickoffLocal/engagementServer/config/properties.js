/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffLocal/engagementServer/config/properties @description Enables the contact experience and local coordinates only for the reference Engagement server. @layer environment-server-config @owner nodics.kickoff @override Customer deployments provide their own feature, database, provider, and endpoint configuration. */
module.exports = {
    activeModules: { groups: [], modules: ['nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'nexus.web', 'kickoffLocal', 'engagementServer'] },
    runtimeRole: { code: 'ENGAGEMENT', publication: 'OPERATIONAL' },
    runtimeAuthorityContexts: { modules: { publish: 'engagement.operational' } },
    data: { dataReleases: { lifecycleMetadataRequired: true, destinationEnforced: true, environmentClass: 'LOCAL',
        allowedDestinationRoles: ['ENGAGEMENT'],
        initializationProfiles: { localEngagementFoundation: { enabled: true,
            label: 'Local Engagement foundation',
            description: 'Install Engagement core and sample communication releases for local contact, testimonial, review, feedback, and notification validation.',
            completionMessage: 'The Local Engagement foundation is ready. Operators can validate engagement journeys with governed templates and runtime data.',
            steps: [{ dataType: 'core' }, { dataType: 'sample' }] } } } },
    engagement: { capabilities: { contactSubmission: true, testimonial: true, customerReview: true, customerFeedback: true } },
    customerFeedback: { enabled: true },
    database: {
        default: { mongodb: { master: { databaseName: 'kickoffLocalEngagement' } } },
        commsSchema: { mongodb: { master: { databaseName: 'kickoffLocalEngagement' } } },
        contactSubmission: { mongodb: { master: { databaseName: 'kickoffLocalEngagement' } } },
        customerFeedback: { mongodb: { master: { databaseName: 'kickoffLocalEngagement' } } },
        customerReview: { mongodb: { master: { databaseName: 'kickoffLocalEngagement' } } },
        engagementCore: { mongodb: { master: { databaseName: 'kickoffLocalEngagement' } } },
        testimonial: { mongodb: { master: { databaseName: 'kickoffLocalEngagement' } } }
    },
    servers: {
        default: { endpoint: { httpHost: '127.0.0.1', httpPort: 4340, httpsHost: '127.0.0.1', httpsPort: 4341 }, abstractEndpoint: { httpHost: 'localhost', httpPort: 4340, httpsHost: 'localhost', httpsPort: 4341 } },
        profile: { remoteOnly: true, endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        backoffice: { remoteOnly: true, endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        process: { endpoint: { httpHost: '127.0.0.1', httpPort: 4330, httpsHost: '127.0.0.1', httpsPort: 4331 } }
    }
};
