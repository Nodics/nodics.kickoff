/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/config/properties @description Declares Circa demo identity, presentation, fixtures and inert data-pack composition over framework owners. @layer config @owner circa.ewaste @override Customer projects replace sample data selections and branding. */
module.exports = {
  "tooling": {
    "acceptance": {
      "wasteManagement": {
        "fixture": {
          "dataModule": "circa.ewaste",
          "ruleRecordsPath": "data/sample-v001/waste-policy/records/eWasteAcceptanceRuleData.js",
          "impactProfileRecordsPath": "data/sample-v001/waste-policy/records/eWasteImpactProfileData.js",
          "impactProfileCode": "CIRCA_VERIFIED_DEVICE_RECOVERY",
          "runId": "circa-waste-acceptance-001",
          "submissionCode": "CIRCA_ACCEPTANCE_SUB_001",
          "resultCode": "CIRCA_ACCEPTANCE_IMPACT_001",
          "requiresReceipt": true,
          "collectionPoint": {
            "code": "CIRCA_ACCEPTANCE_CP_001",
            "collectionPointType": "E_WASTE_DROP_OFF"
          },
          "facts": {
            "familyCode": "ELECTRONICS",
            "categoryCode": "SMART_HOME_DEVICE",
            "itemTypeCode": "UNKNOWN_ELECTRONIC_ITEM",
            "materialTypeCodes": [
              "CIRCUIT_BOARD",
              "COPPER",
              "PLASTIC_CASING"
            ],
            "conditionGrade": "RECYCLABLE",
            "quantity": 2,
            "weight": "3.5"
          },
          "expectedMetrics": [
            {
              "metricCode": "EWASTE_WEIGHT_KG",
              "value": "3.5"
            },
            {
              "metricCode": "RECOVERABLE_MATERIAL_ESTIMATE_KG",
              "value": "2.52"
            }
          ]
        }
      }
    }
  },
  "data": {
    "dataReleases": {
      "runtimeRoleProfiles": {
        "PLATFORM": {
          "initializationProfiles": {
            "circaIdentityAuthority": {
              "enabled": true,
              "label": "Circa identity authority",
              "description": "Fresh Circa installations require this explicit role-definition prerequisite before demo setup. Existing demo installations are not replayed.",
              "completionMessage": "Circa role definitions are installed. Staff assignments remain separate governed actions.",
              "steps": {
                "$config": "replace",
                "value": [
                  {
                    "dataType": "init",
                    "releaseCodes": [
                      "loyaltyWallet:specialAccessGroups",
                      "loyaltyWallet:specialAccessRoles",
                      "import:specialAccessGroups",
                      "import:specialAccessRoles",
                      "inventory:specialAccessGroups",
                      "inventory:specialAccessRoles",
                      "order:specialAccessGroups",
                      "order:specialAccessRoles"
                    ]
                  }
                ]
              }
            }
          }
        },
        "WASTE": {
          "initializationProfiles": {
            "localWasteFoundation": {
              "enabled": true,
              "label": "Waste foundation",
              "description": "Install Waste Management reference releases for schema-driven family, category, material, collection, evidence, receipt, and impact presets.",
              "completionMessage": "The Waste foundation is ready. Operators can validate collection eligibility, submissions, evidence, receipts, and impact calculations.",
              "steps": {
                "$config": "replace",
                "value": [
                  {
                    "dataType": "core",
                    "releaseCodes": [
                      "wasteMaterial:core-v001",
                      "eWaste:core-reference"
                    ]
                  },
                  {
                    "dataType": "sample",
                    "releaseCodes": [
                      "circa.ewaste:waste-policy"
                    ]
                  }
                ]
              }
            }
          }
        }
      }
    }
  },
  "cms": {
    "publication": {
      "baselines": {
        "circa": {
          "releaseCode": "circa.ewaste:content",
          "releaseVersion": "0.0.2",
          "dataType": "sample",
          "rootType": "site",
          "rootCode": "circaSite",
          "sourceVersion": "0"
        }
      }
    }
  },
  "backofficeApplicationInitialization": {
    "profiles": {
      "circa": {
        "code": "circa",
        "type": "STOREFRONT_DOMAIN_BUNDLE",
        "owner": "circa.ewaste",
        "applicationCode": "CIRCA_EWASTE",
        "siteCode": "circaSite",
        "baselineCode": "circa",
        "presentation": {
          "title": "Circa eWaste",
          "visual": {
            "mediaCode": "circa-hero-circular-value",
            "alt": "Circa circular value"
          },
          "kind": "PROJECT",
          "category": "application",
          "order": 240,
          "summary": "Circa customer demo with enterprises, collection centres, assets, rewards and partner offers.",
          "requiredFunctionalModules": [
            {
              "code": "nodics.location",
              "label": "Location capability"
            },
            {
              "code": "nodics.waste",
              "label": "Waste Management capability"
            },
            {
              "code": "nodics.loyalty",
              "label": "Loyalty capability"
            },
            {
              "code": "nodics.commerce",
              "label": "Commerce capability"
            }
          ],
          "activationPolicy": {
            "approvalRequiredForOnline": true,
            "requiredDataTrigger": "USER",
            "sampleDataTrigger": "USER"
          }
        },
        "dataPackages": {
          "$config": "replace",
          "value": [
            {
              "code": "media:mediaPublicationWorkflow",
              "kind": "Media publication approval workflow",
              "required": true,
              "trigger": "USER",
              "dataType": "init",
              "targetServer": "process",
              "targetRuntimeRole": "PROCESS"
            },
            {
              "code": "locationMap:init-v001",
              "kind": "Map provider foundation",
              "required": true,
              "trigger": "USER",
              "dataType": "init",
              "targetServer": "locationServer",
              "targetRuntimeRole": "LOCATION"
            },
            {
              "code": "locationMap:core-map-reference",
              "kind": "Map styles and layers",
              "required": true,
              "trigger": "USER",
              "dataType": "core",
              "targetServer": "locationServer",
              "targetRuntimeRole": "LOCATION"
            },
            {
              "code": "wasteMaterial:core-v001",
              "kind": "Waste material foundation",
              "required": true,
              "trigger": "USER",
              "dataType": "core",
              "targetServer": "wasteServer",
              "targetRuntimeRole": "WASTE"
            },
            {
              "code": "eWaste:core-reference",
              "kind": "Electronics submission presets",
              "required": true,
              "trigger": "USER",
              "dataType": "core",
              "targetServer": "wasteServer",
              "targetRuntimeRole": "WASTE"
            },
            {
              "code": "circa.ewaste:waste-policy",
              "kind": "Circa collection policy",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "wasteServer",
              "targetRuntimeRole": "WASTE"
            },
            {
              "code": "wasteCollection:sample-profile-addresses",
              "kind": "Collection network addresses",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "platformServer",
              "targetRuntimeRole": "PLATFORM"
            },
            {
              "code": "circa.ewaste:profile",
              "kind": "Local sample customer profiles",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "platformServer",
              "targetRuntimeRole": "PLATFORM"
            },
            {
              "code": "circa.ewaste:operations",
              "kind": "Local operator access",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "platformServer",
              "targetRuntimeRole": "PLATFORM"
            },
            {
              "code": "wasteCollection:sample-locations",
              "kind": "Collection network locations",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "locationServer",
              "targetRuntimeRole": "LOCATION"
            },
            {
              "code": "circa.ewaste:location",
              "kind": "Collection centre locations",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "locationServer",
              "targetRuntimeRole": "LOCATION"
            },
            {
              "code": "wasteCollection:sample-collection-points",
              "kind": "Collection network points",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "wasteServer",
              "targetRuntimeRole": "WASTE"
            },
            {
              "code": "circa.ewaste:waste",
              "kind": "Demo assets and collection journeys",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "wasteServer",
              "targetRuntimeRole": "WASTE"
            },
            {
              "code": "circa.ewaste:loyalty",
              "kind": "Local reward programme",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "loyaltyServer",
              "targetRuntimeRole": "LOYALTY"
            },
            {
              "code": "circa.ewaste:store",
              "kind": "Store and redemption outlet references",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "commerce",
              "targetRuntimeRole": "COMMERCE"
            },
            {
              "code": "circa.ewaste:commerce",
              "kind": "Circular catalogue source",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "commerceStaged",
              "targetRuntimeRole": "COMMERCE_STAGED"
            },
            {
              "code": "circa.ewaste:circaGreenPerksBudget",
              "kind": "GreenPerks issuer opening budget",
              "operatorEnterpriseCode": "GREENPERKS_RETAIL",
              "required": true,
              "trigger": "USER",
              "phase": "AFTER_PUBLICATION",
              "dataType": "sample",
              "targetServer": "commerce",
              "targetRuntimeRole": "COMMERCE"
            },
            {
              "code": "circa.ewaste:circaGreenPerksIssuance",
              "kind": "GreenPerks protected coupon issuance after consent",
              "operatorEnterpriseCode": "GREENPERKS_RETAIL",
              "required": true,
              "trigger": "USER",
              "phase": "AFTER_PUBLICATION",
              "dataType": "sample",
              "targetServer": "commerce",
              "targetRuntimeRole": "COMMERCE"
            },
            {
              "code": "circa.ewaste:circaRenewWorksBudget",
              "kind": "RenewWorks issuer opening budget",
              "operatorEnterpriseCode": "RENEWWORKS_REPAIR_REUSE",
              "required": true,
              "trigger": "USER",
              "phase": "AFTER_PUBLICATION",
              "dataType": "sample",
              "targetServer": "commerce",
              "targetRuntimeRole": "COMMERCE"
            },
            {
              "code": "circa.ewaste:circaRenewWorksIssuance",
              "kind": "RenewWorks protected coupon issuance after consent",
              "operatorEnterpriseCode": "RENEWWORKS_REPAIR_REUSE",
              "required": true,
              "trigger": "USER",
              "phase": "AFTER_PUBLICATION",
              "dataType": "sample",
              "targetServer": "commerce",
              "targetRuntimeRole": "COMMERCE"
            },
            {
              "code": "circa.ewaste:circaLoopCycleBudget",
              "kind": "LoopCycle issuer opening budget",
              "operatorEnterpriseCode": "LOOPCYCLE_RECYCLING",
              "required": true,
              "trigger": "USER",
              "phase": "AFTER_PUBLICATION",
              "dataType": "sample",
              "targetServer": "commerce",
              "targetRuntimeRole": "COMMERCE"
            },
            {
              "code": "circa.ewaste:circaLoopCycleIssuance",
              "kind": "LoopCycle protected coupon issuance after consent",
              "operatorEnterpriseCode": "LOOPCYCLE_RECYCLING",
              "required": true,
              "trigger": "USER",
              "phase": "AFTER_PUBLICATION",
              "dataType": "sample",
              "targetServer": "commerce",
              "targetRuntimeRole": "COMMERCE"
            },
            {
              "code": "circa.ewaste:content",
              "kind": "Website content",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "wcmsStaged",
              "targetRuntimeRole": "WCMS_STAGED"
            },
            {
              "code": "circa.ewaste:customer-workspace",
              "kind": "Customer item workspace content",
              "required": true,
              "trigger": "USER",
              "dataType": "sample",
              "targetServer": "wcmsStaged",
              "targetRuntimeRole": "WCMS_STAGED"
            },
            {
              "code": "circa.ewaste:media",
              "type": "MEDIA_ASSET_MANIFEST",
              "kind": "Website media",
              "required": true,
              "trigger": "USER",
              "targetServer": "wcmsStaged",
              "targetRuntimeRole": "WCMS_STAGED",
              "manifestModule": "circa.ewaste",
              "manifestPath": "data/sample-v001/content/assets/circa-media/assetManifest.js",
              "businessPurpose": "CIRCA_SAMPLE_CONTENT"
            }
          ]
        }
      }
    }
  },
  "eWaste": {
    "application": {
      "code": "CIRCA_EWASTE",
      "displayName": "Nodics Circa eWaste",
      "frontendModuleName": "nodics.circa.eWaste",
      "projectModuleName": "circa.ewaste",
      "visual": {
        "mediaCode": "circa-hero-circular-value",
        "alt": "Circa circular value"
      },
      "requiredScenarioModules": [
        "eWaste",
        "wasteRecycling"
      ]
    },
    "applicationCode": "CIRCA_EWASTE",
    "presentation": {
      "brandName": "Circa",
      "brandByline": "by Nodics",
      "sampleMode": true,
      "walletLabels": {
        "points": "Reward points",
        "circaCarbon": "Carbon units"
      }
    }
  }
};
