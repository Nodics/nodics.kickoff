/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/waste/circaWasteAssetData @description Supplies explicit local Circa sample wasteAsset records. @layer data @owner circa.ewaste */
module.exports = {
    "record0": {
        "code": "EWA-1042",
        "assetTypeCode": "SMARTPHONE",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1042",
        "sourceCategoryCode": "MOBILE_DEVICE",
        "sourceItemTypeCode": "SMARTPHONE",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1042_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1042_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1042_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "OWNED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1042_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1042_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-08-11T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Retired iPhone 12",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "MOBILE_DEVICE",
                "itemTypeCode": "SMARTPHONE",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-01"
            },
            "photo": {
                "code": "circa-asset-phone",
                "url": "/media/asset-phone.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 10,
            "illustrativeCarbonUnits": 10,
            "commerceProductRef": null
        },
        "active": true
    },
    "record1": {
        "code": "EWA-1047",
        "assetTypeCode": "LAPTOP",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1047",
        "sourceCategoryCode": "LAPTOP_COMPUTER",
        "sourceItemTypeCode": "LAPTOP",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1047_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1047_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1047_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "LISTED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1047_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1047_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-08-12T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Damaged ThinkPad T480",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "LAPTOP_COMPUTER",
                "itemTypeCode": "LAPTOP",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-03"
            },
            "photo": {
                "code": "circa-asset-laptop",
                "url": "/media/asset-laptop.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 22,
            "illustrativeCarbonUnits": 28,
            "commerceProductRef": {
                "module": "product",
                "schema": "product",
                "code": "circa-ewa-1047"
            }
        },
        "active": true
    },
    "record2": {
        "code": "EWA-1050",
        "assetTypeCode": "TABLET_DEVICE",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1050",
        "sourceCategoryCode": "TABLET",
        "sourceItemTypeCode": "TABLET_DEVICE",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1050_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1050_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1050_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "OWNED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1050_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1050_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-08-13T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Retired Galaxy Tab",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "TABLET",
                "itemTypeCode": "TABLET_DEVICE",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-02"
            },
            "photo": {
                "code": "circa-asset-tablet",
                "url": "/media/asset-tablet.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 14,
            "illustrativeCarbonUnits": 18,
            "commerceProductRef": null
        },
        "active": true
    },
    "record3": {
        "code": "EWA-1051",
        "assetTypeCode": "COMPUTER_MONITOR",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1051",
        "sourceCategoryCode": "MONITOR_DISPLAY",
        "sourceItemTypeCode": "COMPUTER_MONITOR",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1051_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1051_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1051_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "LISTED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1051_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1051_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-08-14T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Office LED Monitor",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "MONITOR_DISPLAY",
                "itemTypeCode": "COMPUTER_MONITOR",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-01"
            },
            "photo": {
                "code": "circa-asset-monitor",
                "url": "/media/asset-monitor.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 16,
            "illustrativeCarbonUnits": 22,
            "commerceProductRef": {
                "module": "product",
                "schema": "product",
                "code": "circa-ewa-1051"
            }
        },
        "active": true
    },
    "record4": {
        "code": "EWA-1052",
        "assetTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1052",
        "sourceCategoryCode": "MIXED_ELECTRONICS",
        "sourceItemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1052_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1052_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1052_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "LISTED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1052_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1052_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-08-15T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Home Wi-Fi Router",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "MIXED_ELECTRONICS",
                "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-03"
            },
            "photo": {
                "code": "circa-asset-router",
                "url": "/media/asset-router.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 8,
            "illustrativeCarbonUnits": 13,
            "commerceProductRef": {
                "module": "product",
                "schema": "product",
                "code": "circa-ewa-1052"
            }
        },
        "active": true
    },
    "record5": {
        "code": "EWA-1053",
        "assetTypeCode": "SMALL_HOME_APPLIANCE",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1053",
        "sourceCategoryCode": "SMALL_APPLIANCE",
        "sourceItemTypeCode": "SMALL_HOME_APPLIANCE",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1053_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1053_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1053_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "OWNED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1053_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1053_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-08-16T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Retired Inkjet Printer",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "SMALL_APPLIANCE",
                "itemTypeCode": "SMALL_HOME_APPLIANCE",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-02"
            },
            "photo": {
                "code": "circa-asset-printer",
                "url": "/media/asset-printer.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 18,
            "illustrativeCarbonUnits": 24,
            "commerceProductRef": null
        },
        "active": true
    },
    "record6": {
        "code": "EWA-1054",
        "assetTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1054",
        "sourceCategoryCode": "MIXED_ELECTRONICS",
        "sourceItemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1054_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1054_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1054_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "OWNED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1054_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1054_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-08-17T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Mechanical Keyboard",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "MIXED_ELECTRONICS",
                "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-01"
            },
            "photo": {
                "code": "circa-asset-keyboard",
                "url": "/media/asset-keyboard.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 5,
            "illustrativeCarbonUnits": 6,
            "commerceProductRef": null
        },
        "active": true
    },
    "record7": {
        "code": "EWA-1055",
        "assetTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1055",
        "sourceCategoryCode": "MIXED_ELECTRONICS",
        "sourceItemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1055_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1055_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1055_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "LISTED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1055_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1055_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-08-18T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Compact Digital Camera",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "MIXED_ELECTRONICS",
                "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-03"
            },
            "photo": {
                "code": "circa-asset-camera",
                "url": "/media/asset-camera.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 12,
            "illustrativeCarbonUnits": 15,
            "commerceProductRef": {
                "module": "product",
                "schema": "product",
                "code": "circa-ewa-1055"
            }
        },
        "active": true
    },
    "record8": {
        "code": "EWA-1056",
        "assetTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1056",
        "sourceCategoryCode": "MIXED_ELECTRONICS",
        "sourceItemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1056_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1056_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1056_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "OWNED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1056_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1056_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-08-19T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Portable Bluetooth Speaker",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "MIXED_ELECTRONICS",
                "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-02"
            },
            "photo": {
                "code": "circa-asset-speaker",
                "url": "/media/asset-speaker.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 7,
            "illustrativeCarbonUnits": 9,
            "commerceProductRef": null
        },
        "active": true
    },
    "record9": {
        "code": "EWA-1057",
        "assetTypeCode": "EARPHONES",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1057",
        "sourceCategoryCode": "CABLE_CHARGER",
        "sourceItemTypeCode": "EARPHONES",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1057_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1057_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1057_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "OWNED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1057_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1057_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-08-20T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Over-ear Headphones",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "CABLE_CHARGER",
                "itemTypeCode": "EARPHONES",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-01"
            },
            "photo": {
                "code": "circa-asset-headphones",
                "url": "/media/asset-headphones.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 6,
            "illustrativeCarbonUnits": 7,
            "commerceProductRef": null
        },
        "active": true
    },
    "record10": {
        "code": "EWA-1092",
        "assetTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "sourceSubmissionCode": "CIRCA_SUB_EWA-1092",
        "sourceCategoryCode": "MIXED_ELECTRONICS",
        "sourceItemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "ownerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-seller"
        },
        "originalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-seller"
        },
        "physicalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-seller"
        },
        "digitalOwnerRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-seller"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1092_REVIEW"
        },
        "impactRef": {
            "module": "wasteImpact",
            "schema": "wasteImpactResult",
            "code": "CIRCA_SUB_EWA-1092_IMPACT"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1092_PHOTO"
            }
        ],
        "custodyStatus": "CUSTOMER_HELD",
        "assetStatus": "LISTED",
        "rewardSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1092_OPENING_points"
            }
        ],
        "carbonSettlementRefs": [
            {
                "module": "loyaltyLedger",
                "schema": "rewardLedgerEntry",
                "code": "EWA-1092_OPENING_circaCarbon"
            }
        ],
        "createdAt": "2026-09-06T12:00:00.000Z",
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "facts": {
                "name": "Mesh Router Pair",
                "description": "Illustrative Circa sample item.",
                "categoryCode": "MIXED_ELECTRONICS",
                "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
                "conditionGrade": "RECYCLABLE",
                "quantity": 1,
                "preferredCollectionPointCode": "cc-dxb-02"
            },
            "photo": {
                "code": "circa-asset-router",
                "url": "/media/asset-router.svg"
            },
            "settlementStatus": "COMPLETED",
            "openingReward": 8,
            "illustrativeCarbonUnits": 13,
            "commerceProductRef": {
                "module": "product",
                "schema": "product",
                "code": "circa-ewa-1092"
            }
        },
        "active": true
    }
};
