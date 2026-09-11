/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/loyalty/header @description Imports the Circa sample section through owning generated services. @layer data-header @owner circa.ewaste */
module.exports = {
    "loyaltyProgram": {
        "circaLoyaltyProgramData": {
            "options": {
                "enabled": true,
                "schemaName": "loyaltyProgram",
                "operation": "saveAll",
                "dataFilePrefix": "circaLoyaltyProgramData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "loyaltyRewardType": {
        "circaLoyaltyRewardTypeData": {
            "options": {
                "enabled": true,
                "schemaName": "loyaltyRewardType",
                "operation": "saveAll",
                "dataFilePrefix": "circaLoyaltyRewardTypeData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "loyaltyWallet": {
        "circaLoyaltyWalletData": {
            "options": {
                "enabled": true,
                "schemaName": "loyaltyWallet",
                "operation": "saveAll",
                "dataFilePrefix": "circaLoyaltyWalletData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaLoyaltyWalletRewardBalanceData": {
            "options": {
                "enabled": true,
                "schemaName": "loyaltyWalletRewardBalance",
                "operation": "saveAll",
                "dataFilePrefix": "circaLoyaltyWalletRewardBalanceData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "loyaltyLedger": {
        "circaRewardLedgerEntryData": {
            "options": {
                "enabled": true,
                "schemaName": "rewardLedgerEntry",
                "operation": "saveAll",
                "dataFilePrefix": "circaRewardLedgerEntryData"
            },
            "query": {
                "code": "$code"
            }
        }
    }
};
