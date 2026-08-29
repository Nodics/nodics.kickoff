/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
'use strict';
const agoraDomains = require('../../../../config/agora-domain-composition').resolve();
const commerceSearchRuntimeModules = ['search', 'elastic'];
const commerceAuthorityModules = [
    'apparelProduct', 'cart', 'checkoutCore', 'commerceSearchCore', 'customerList',
    'discoveryConfig', 'discoveryMapping', 'discoveryProjection', 'discoveryRanking', 'discoverySource',
    'electronicsProduct', 'fulfillmentCore', 'inventory', 'order', 'paymentCore', 'pricing',
    'product', 'promotion', 'store', 'tax', 'telcoCatalog', 'telcoProvisioning', 'telcoSubscription'
];
/** @module kickoffLocal/commerceServer/config/properties @description Defines isolated local Commerce coordinates. @layer environment-server-config @owner nodics.kickoff */
module.exports = {
    activeModules: { groups: [...agoraDomains.frameworkGroups], modules: [...commerceSearchRuntimeModules, ...agoraDomains.sharedModules, 'nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'kickoffLocal', 'commerceServer'] },
    runtimeRole: { code: 'COMMERCE', publication: 'OPERATIONAL' },
    runtimeAuthorityContexts: { modules: Object.fromEntries(commerceAuthorityModules.map(moduleName => [moduleName, 'commerce.operational'])) },
    apiExposure: { categories: { serviceRegistry: { enabled: true }, dataImport: { enabled: true },
        commerceCustomer: { enabled: true }, commercePublicationIngestion: { enabled: true } } },
    search: {
        product: { options: { enabled: true, fallback: false, engine: 'elastic' } },
        commerceSearchCore: { options: { enabled: true, fallback: false, engine: 'elastic' } },
        discoveryProjection: { options: { enabled: true, fallback: false, engine: 'elastic' } }
    },
    product: {
        publication: {
            searchEnrichment: {
                domains: { enabled: true, contributors: agoraDomains.productSearchContributors, missingBehavior: 'error' }
            }
        },
        discovery: {
            mediaDeliveryBaseUrl: 'http://127.0.0.1:4314/nodics/media/v0/content'
        }
    },
    cart: {
        customerApi: {
            defaultStoreCode: 'agoraMainStore',
            defaultChannelCode: 'web',
            defaultLocale: 'en',
            defaultJurisdiction: 'AE',
            defaultCurrency: 'AED'
        }
    },
    data: { dataReleases: { lifecycleMetadataRequired: true, destinationEnforced: true, environmentClass: 'LOCAL',
        allowedDestinationRoles: ['COMMERCE'],
        initializationProfiles: { localCommerceFoundation: { enabled: true,
            label: 'Local Commerce foundation',
            description: 'Install required operational Commerce core releases for product, cart, pricing, inventory, tax, checkout, fulfillment, payment, and discovery services.',
            completionMessage: 'The Local Commerce foundation is ready. Commerce runtime can accept governed catalogue and storefront data.',
            steps: [{ dataType: 'core' }] } } } },
    database: { default: { mongodb: { master: { databaseName: 'kickoffLocalCommerce' } } } },
    stripeProvider: { enabled: true, maturity: 'OFFLINE_CONFORMANCE', sandboxOnly: true, liveQualified: false },
    servers: {
        default: { endpoint: { httpHost: '127.0.0.1', httpPort: 4350, httpsHost: '127.0.0.1', httpsPort: 4351 }, abstractEndpoint: { httpHost: 'localhost', httpPort: 4350, httpsHost: 'localhost', httpsPort: 4351 } },
        profile: { endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        backoffice: { endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } }
    }
};
