/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/waste/circaWasteSubmissionData @description Supplies explicit local Circa sample wasteSubmission records. @layer data @owner circa.ewaste */
module.exports = {
    "record0": {
        "code": "CIRCA_SUB_EWA-1042",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "MOBILE_DEVICE",
        "itemTypeCode": "SMARTPHONE",
        "quantity": 1,
        "submittedFacts": {
            "name": "Retired iPhone 12",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MOBILE_DEVICE",
            "itemTypeCode": "SMARTPHONE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "confirmedFacts": {
            "name": "Retired iPhone 12",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MOBILE_DEVICE",
            "itemTypeCode": "SMARTPHONE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1042_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-phone",
                "url": "/media/asset-phone.svg"
            },
            "submittedAt": "2026-08-10T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-08-11T12:00:00.000Z"
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
        "active": true
    },
    "record1": {
        "code": "CIRCA_SUB_EWA-1047",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "LAPTOP_COMPUTER",
        "itemTypeCode": "LAPTOP",
        "quantity": 1,
        "submittedFacts": {
            "name": "Damaged ThinkPad T480",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "LAPTOP_COMPUTER",
            "itemTypeCode": "LAPTOP",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "confirmedFacts": {
            "name": "Damaged ThinkPad T480",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "LAPTOP_COMPUTER",
            "itemTypeCode": "LAPTOP",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1047_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-laptop",
                "url": "/media/asset-laptop.svg"
            },
            "submittedAt": "2026-08-11T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-08-12T12:00:00.000Z"
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
        "active": true
    },
    "record2": {
        "code": "CIRCA_SUB_EWA-1050",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "TABLET",
        "itemTypeCode": "TABLET_DEVICE",
        "quantity": 1,
        "submittedFacts": {
            "name": "Retired Galaxy Tab",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "TABLET",
            "itemTypeCode": "TABLET_DEVICE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "confirmedFacts": {
            "name": "Retired Galaxy Tab",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "TABLET",
            "itemTypeCode": "TABLET_DEVICE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1050_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-tablet",
                "url": "/media/asset-tablet.svg"
            },
            "submittedAt": "2026-08-12T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-08-13T12:00:00.000Z"
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
        "active": true
    },
    "record3": {
        "code": "CIRCA_SUB_EWA-1051",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "MONITOR_DISPLAY",
        "itemTypeCode": "COMPUTER_MONITOR",
        "quantity": 1,
        "submittedFacts": {
            "name": "Office LED Monitor",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MONITOR_DISPLAY",
            "itemTypeCode": "COMPUTER_MONITOR",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "confirmedFacts": {
            "name": "Office LED Monitor",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MONITOR_DISPLAY",
            "itemTypeCode": "COMPUTER_MONITOR",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1051_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-monitor",
                "url": "/media/asset-monitor.svg"
            },
            "submittedAt": "2026-08-13T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-08-14T12:00:00.000Z"
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
        "active": true
    },
    "record4": {
        "code": "CIRCA_SUB_EWA-1052",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "MIXED_ELECTRONICS",
        "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "quantity": 1,
        "submittedFacts": {
            "name": "Home Wi-Fi Router",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "confirmedFacts": {
            "name": "Home Wi-Fi Router",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1052_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-router",
                "url": "/media/asset-router.svg"
            },
            "submittedAt": "2026-08-14T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-08-15T12:00:00.000Z"
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
        "active": true
    },
    "record5": {
        "code": "CIRCA_SUB_EWA-1053",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "SMALL_APPLIANCE",
        "itemTypeCode": "SMALL_HOME_APPLIANCE",
        "quantity": 1,
        "submittedFacts": {
            "name": "Retired Inkjet Printer",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "SMALL_APPLIANCE",
            "itemTypeCode": "SMALL_HOME_APPLIANCE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "confirmedFacts": {
            "name": "Retired Inkjet Printer",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "SMALL_APPLIANCE",
            "itemTypeCode": "SMALL_HOME_APPLIANCE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1053_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-printer",
                "url": "/media/asset-printer.svg"
            },
            "submittedAt": "2026-08-15T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-08-16T12:00:00.000Z"
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
        "active": true
    },
    "record6": {
        "code": "CIRCA_SUB_EWA-1054",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "MIXED_ELECTRONICS",
        "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "quantity": 1,
        "submittedFacts": {
            "name": "Mechanical Keyboard",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "confirmedFacts": {
            "name": "Mechanical Keyboard",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1054_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-keyboard",
                "url": "/media/asset-keyboard.svg"
            },
            "submittedAt": "2026-08-16T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-08-17T12:00:00.000Z"
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
        "active": true
    },
    "record7": {
        "code": "CIRCA_SUB_EWA-1055",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "MIXED_ELECTRONICS",
        "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "quantity": 1,
        "submittedFacts": {
            "name": "Compact Digital Camera",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "confirmedFacts": {
            "name": "Compact Digital Camera",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1055_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-camera",
                "url": "/media/asset-camera.svg"
            },
            "submittedAt": "2026-08-17T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-08-18T12:00:00.000Z"
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
        "active": true
    },
    "record8": {
        "code": "CIRCA_SUB_EWA-1056",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "MIXED_ELECTRONICS",
        "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "quantity": 1,
        "submittedFacts": {
            "name": "Portable Bluetooth Speaker",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "confirmedFacts": {
            "name": "Portable Bluetooth Speaker",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1056_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-speaker",
                "url": "/media/asset-speaker.svg"
            },
            "submittedAt": "2026-08-18T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-08-19T12:00:00.000Z"
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
        "active": true
    },
    "record9": {
        "code": "CIRCA_SUB_EWA-1057",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "CABLE_CHARGER",
        "itemTypeCode": "EARPHONES",
        "quantity": 1,
        "submittedFacts": {
            "name": "Over-ear Headphones",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "CABLE_CHARGER",
            "itemTypeCode": "EARPHONES",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "confirmedFacts": {
            "name": "Over-ear Headphones",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "CABLE_CHARGER",
            "itemTypeCode": "EARPHONES",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1057_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-headphones",
                "url": "/media/asset-headphones.svg"
            },
            "submittedAt": "2026-08-19T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-08-20T12:00:00.000Z"
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
        "active": true
    },
    "record10": {
        "code": "CIRCA_SUB_EWA-1060",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "SUBMITTED",
        "categoryCode": "LAPTOP_COMPUTER",
        "itemTypeCode": "LAPTOP",
        "quantity": 1,
        "submittedFacts": {
            "name": "Office Chromebook",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "LAPTOP_COMPUTER",
            "itemTypeCode": "LAPTOP",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "confirmedFacts": {
            "name": "Office Chromebook",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "LAPTOP_COMPUTER",
            "itemTypeCode": "LAPTOP",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1060_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-laptop",
                "url": "/media/asset-laptop.svg"
            },
            "submittedAt": "2026-08-20T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": null
        },
        "active": true
    },
    "record11": {
        "code": "CIRCA_SUB_EWA-1061",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "SUBMITTED",
        "categoryCode": "MONITOR_DISPLAY",
        "itemTypeCode": "COMPUTER_MONITOR",
        "quantity": 1,
        "submittedFacts": {
            "name": "Home Office Monitor",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MONITOR_DISPLAY",
            "itemTypeCode": "COMPUTER_MONITOR",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "confirmedFacts": {
            "name": "Home Office Monitor",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MONITOR_DISPLAY",
            "itemTypeCode": "COMPUTER_MONITOR",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1061_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-monitor",
                "url": "/media/asset-monitor.svg"
            },
            "submittedAt": "2026-08-21T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": null
        },
        "active": true
    },
    "record12": {
        "code": "CIRCA_SUB_EWA-1062",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "SUBMITTED",
        "categoryCode": "SMALL_APPLIANCE",
        "itemTypeCode": "SMALL_HOME_APPLIANCE",
        "quantity": 1,
        "submittedFacts": {
            "name": "Portable Photo Printer",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "SMALL_APPLIANCE",
            "itemTypeCode": "SMALL_HOME_APPLIANCE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "confirmedFacts": {
            "name": "Portable Photo Printer",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "SMALL_APPLIANCE",
            "itemTypeCode": "SMALL_HOME_APPLIANCE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1062_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-printer",
                "url": "/media/asset-printer.svg"
            },
            "submittedAt": "2026-08-22T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": null
        },
        "active": true
    },
    "record13": {
        "code": "CIRCA_SUB_EWA-1063",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "SUBMITTED",
        "categoryCode": "MIXED_ELECTRONICS",
        "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "quantity": 1,
        "submittedFacts": {
            "name": "Compact Wireless Keyboard",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "confirmedFacts": {
            "name": "Compact Wireless Keyboard",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1063_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-keyboard",
                "url": "/media/asset-keyboard.svg"
            },
            "submittedAt": "2026-08-23T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": null
        },
        "active": true
    },
    "record14": {
        "code": "CIRCA_SUB_EWA-1064",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "SUBMITTED",
        "categoryCode": "TABLET",
        "itemTypeCode": "TABLET_DEVICE",
        "quantity": 1,
        "submittedFacts": {
            "name": "Retired Android Tablet",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "TABLET",
            "itemTypeCode": "TABLET_DEVICE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "confirmedFacts": {
            "name": "Retired Android Tablet",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "TABLET",
            "itemTypeCode": "TABLET_DEVICE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1064_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-tablet",
                "url": "/media/asset-tablet.svg"
            },
            "submittedAt": "2026-08-24T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": null
        },
        "active": true
    },
    "record15": {
        "code": "CIRCA_SUB_EWA-1070",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "REJECTED",
        "categoryCode": "MOBILE_DEVICE",
        "itemTypeCode": "SMARTPHONE",
        "quantity": 1,
        "submittedFacts": {
            "name": "Smartphone with Blurred Evidence",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MOBILE_DEVICE",
            "itemTypeCode": "SMARTPHONE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "confirmedFacts": {
            "name": "Smartphone with Blurred Evidence",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MOBILE_DEVICE",
            "itemTypeCode": "SMARTPHONE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1070_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-phone",
                "url": "/media/asset-phone.svg"
            },
            "submittedAt": "2026-08-25T10:00:00.000Z",
            "publicReason": "The photo is too blurred to verify the device. Submit a clear photo of the complete item.",
            "reviewedAt": "2026-08-26T12:00:00.000Z"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1070_REVIEW"
        },
        "active": true
    },
    "record16": {
        "code": "CIRCA_SUB_EWA-1071",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "REJECTED",
        "categoryCode": "LAPTOP_COMPUTER",
        "itemTypeCode": "LAPTOP",
        "quantity": 1,
        "submittedFacts": {
            "name": "Duplicate Laptop Submission",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "LAPTOP_COMPUTER",
            "itemTypeCode": "LAPTOP",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "confirmedFacts": {
            "name": "Duplicate Laptop Submission",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "LAPTOP_COMPUTER",
            "itemTypeCode": "LAPTOP",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1071_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-laptop",
                "url": "/media/asset-laptop.svg"
            },
            "submittedAt": "2026-08-26T10:00:00.000Z",
            "publicReason": "This device matches an existing submission. Continue with the original submission.",
            "reviewedAt": "2026-08-27T12:00:00.000Z"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1071_REVIEW"
        },
        "active": true
    },
    "record17": {
        "code": "CIRCA_SUB_EWA-1072",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "REJECTED",
        "categoryCode": "MIXED_ELECTRONICS",
        "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "quantity": 1,
        "submittedFacts": {
            "name": "Router with Mismatched Evidence",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "confirmedFacts": {
            "name": "Router with Mismatched Evidence",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1072_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-router",
                "url": "/media/asset-router.svg"
            },
            "submittedAt": "2026-08-27T10:00:00.000Z",
            "publicReason": "The submitted photo does not match the declared item. Correct the item details and evidence.",
            "reviewedAt": "2026-08-28T12:00:00.000Z"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1072_REVIEW"
        },
        "active": true
    },
    "record18": {
        "code": "CIRCA_SUB_EWA-1073",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "REJECTED",
        "categoryCode": "SMALL_APPLIANCE",
        "itemTypeCode": "SMALL_HOME_APPLIANCE",
        "quantity": 1,
        "submittedFacts": {
            "name": "Incomplete Printer Evidence",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "SMALL_APPLIANCE",
            "itemTypeCode": "SMALL_HOME_APPLIANCE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "confirmedFacts": {
            "name": "Incomplete Printer Evidence",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "SMALL_APPLIANCE",
            "itemTypeCode": "SMALL_HOME_APPLIANCE",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-01"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1073_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-printer",
                "url": "/media/asset-printer.svg"
            },
            "submittedAt": "2026-08-28T10:00:00.000Z",
            "publicReason": "The evidence only shows packaging. A photo of the actual electronic item is required.",
            "reviewedAt": "2026-08-29T12:00:00.000Z"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1073_REVIEW"
        },
        "active": true
    },
    "record19": {
        "code": "CIRCA_SUB_EWA-1074",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-customer"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "REJECTED",
        "categoryCode": "CABLE_CHARGER",
        "itemTypeCode": "EARPHONES",
        "quantity": 1,
        "submittedFacts": {
            "name": "Headphones Outside Centre Acceptance",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "CABLE_CHARGER",
            "itemTypeCode": "EARPHONES",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "confirmedFacts": {
            "name": "Headphones Outside Centre Acceptance",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "CABLE_CHARGER",
            "itemTypeCode": "EARPHONES",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-03"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1074_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-headphones",
                "url": "/media/asset-headphones.svg"
            },
            "submittedAt": "2026-08-29T10:00:00.000Z",
            "publicReason": "The selected sample centre does not accept this item category. Choose an eligible collection centre.",
            "reviewedAt": "2026-08-30T12:00:00.000Z"
        },
        "verificationRef": {
            "module": "wasteVerification",
            "schema": "wasteVerification",
            "code": "CIRCA_SUB_EWA-1074_REVIEW"
        },
        "active": true
    },
    "record20": {
        "code": "CIRCA_SUB_EWA-1092",
        "submitterRef": {
            "module": "profile",
            "schema": "customer",
            "code": "circa-seller"
        },
        "submissionChannel": "CUSTOMER_APP",
        "submissionStatus": "APPROVED",
        "categoryCode": "MIXED_ELECTRONICS",
        "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
        "quantity": 1,
        "submittedFacts": {
            "name": "Mesh Router Pair",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "confirmedFacts": {
            "name": "Mesh Router Pair",
            "description": "Illustrative Circa sample item.",
            "categoryCode": "MIXED_ELECTRONICS",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "conditionGrade": "RECYCLABLE",
            "quantity": 1,
            "preferredCollectionPointCode": "cc-dxb-02"
        },
        "evidenceRefs": [
            {
                "module": "wasteSubmission",
                "schema": "wasteEvidence",
                "code": "CIRCA_SUB_EWA-1092_PHOTO"
            }
        ],
        "revision": 0,
        "sourceContext": {
            "applicationCode": "CIRCA_EWASTE"
        },
        "metadata": {
            "sample": true,
            "photo": {
                "code": "circa-asset-router",
                "url": "/media/asset-router.svg"
            },
            "submittedAt": "2026-09-05T10:00:00.000Z",
            "publicReason": null,
            "reviewedAt": "2026-09-06T12:00:00.000Z"
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
        "active": true
    }
};
