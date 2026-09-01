/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffLocal/loyaltyServer/config/properties @description Defines isolated local Loyalty coordinates and runtime configuration. @layer environment-server-config @owner nodics.kickoff @override Customer deployments provide their own database, provider, and endpoint configuration. */
module.exports = {
    activeModules: { groups: [], modules: ['nodics.kickoff', 'kickoffCore', 'kickoffApi', 'kickoffInt', 'kickoffLocal', 'loyaltyServer'] },
    runtimeRole: { code: 'LOYALTY', publication: 'OPERATIONAL' },
    runtimeAuthorityContexts: { modules: { loyalty: 'loyalty.operational' } },
    apiExposure: { categories: { serviceRegistry: { enabled: true }, dataImport: { enabled: true }, loyaltyInternal: { enabled: true } } },
    data: { dataReleases: { lifecycleMetadataRequired: true, destinationEnforced: true, environmentClass: 'LOCAL',
        allowedDestinationRoles: ['LOYALTY'],
        initializationProfiles: { localLoyaltyFoundation: { enabled: true,
            label: 'Local Loyalty foundation',
            description: 'Install Loyalty core releases for wallet, reward type, wallet reward, ledger, reservation, redemption, earning, and spend-policy validation.',
            completionMessage: 'The Local Loyalty foundation is ready. Operators can validate wallets, reward balances, ledgers, reservations, and redemptions.',
            steps: [{ dataType: 'core' }] } } } },
    loyalty: { capabilities: { wallet: true, rewardType: true, walletReward: true, ledger: true, earning: true, reservation: true, redemption: true, spendPolicy: true } },
    database: {
        default: { mongodb: { master: { databaseName: 'kickoffLocalLoyalty' } } },
        loyaltyCore: { mongodb: { master: { databaseName: 'kickoffLocalLoyalty' } } },
        loyaltyWallet: { mongodb: { master: { databaseName: 'kickoffLocalLoyalty' } } },
        loyaltyRewardType: { mongodb: { master: { databaseName: 'kickoffLocalLoyalty' } } },
        loyaltyLedger: { mongodb: { master: { databaseName: 'kickoffLocalLoyalty' } } },
        loyaltyEarning: { mongodb: { master: { databaseName: 'kickoffLocalLoyalty' } } },
        loyaltyReservation: { mongodb: { master: { databaseName: 'kickoffLocalLoyalty' } } },
        loyaltyRedemption: { mongodb: { master: { databaseName: 'kickoffLocalLoyalty' } } },
        loyaltySpendPolicy: { mongodb: { master: { databaseName: 'kickoffLocalLoyalty' } } }
    },
    servers: {
        default: { endpoint: { httpHost: '127.0.0.1', httpPort: 4360, httpsHost: '127.0.0.1', httpsPort: 4361 }, abstractEndpoint: { httpHost: 'localhost', httpPort: 4360, httpsHost: 'localhost', httpsPort: 4361 } },
        profile: { remoteOnly: true, endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        backoffice: { remoteOnly: true, endpoint: { httpHost: '127.0.0.1', httpPort: 4300, httpsHost: '127.0.0.1', httpsPort: 4301 } },
        process: { endpoint: { httpHost: '127.0.0.1', httpPort: 4330, httpsHost: '127.0.0.1', httpsPort: 4331 } },
        engagement: { endpoint: { httpHost: '127.0.0.1', httpPort: 4340, httpsHost: '127.0.0.1', httpsPort: 4341 } },
        commerce: { endpoint: { httpHost: '127.0.0.1', httpPort: 4350, httpsHost: '127.0.0.1', httpsPort: 4351 } },
        commerceServer: { endpoint: { httpHost: '127.0.0.1', httpPort: 4350, httpsHost: '127.0.0.1', httpsPort: 4351 } }
    }
};
