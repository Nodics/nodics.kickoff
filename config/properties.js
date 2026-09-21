/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module config/properties
 * @description Defines Kickoff project-owned layered configuration for this boundary.
 * @layer module
 * @owner kickoff
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = {
  "tooling": {
    "acceptance": {
      "guidedInitialization": {
        "publicationProfiles": {
          "$config": "replace",
          "value": ["nexus", "nexusupdate", "nexusecosystemrepair", "agoraapparel", "agoraelectronics", "agoratelco"]
        }
      }
    }
  },
  "data": {
    "contentPacks": {
      "packs": {
        "kickoffDocumentation": {
          "source": {
            "manifestSection": "documentation"
          },
          "presentation": {
            "title": "Nodics Kickoff documentation"
          }
        }
      }
    }
  },
  "activeModules": {
    "compositions": {
      "agora": {
        "environmentVariable": "NODICS_AGORA_DOMAINS",
        "selection": "all",
        "domains": [
          {
            "code": "apparel",
            "frameworkGroup": "apparel",
            "projectPack": "agora.apparel",
            "productSearchContributor": {
              "serviceName": "DefaultApparelProductSearchEnrichmentService",
              "required": true
            },
            "publication": {
              "storeCode": "agoraMainStore",
              "catalogVersion": "agoraApparelStaged",
              "releaseCode": "agoraApparelCommerceCatalog",
              "recordPrefix": "agoraApparel"
            }
          },
          {
            "code": "electronics",
            "frameworkGroup": "electronics",
            "projectPack": "agora.electronics",
            "productSearchContributor": {
              "serviceName": "DefaultElectronicsProductSearchEnrichmentService",
              "required": true
            },
            "publication": {
              "storeCode": "agoraElectronicsStore",
              "catalogVersion": "agoraElectronicsStaged",
              "releaseCode": "agoraElectronicsCommerceCatalog",
              "recordPrefix": "agoraElectronics"
            }
          },
          {
            "code": "telco",
            "frameworkGroup": "telco",
            "projectPack": "agora.telco",
            "impliedProductSearchContributorDomains": [
              "electronics"
            ],
            "productSearchContributor": {
              "serviceName": "DefaultTelcoProductSearchEnrichmentService",
              "required": true
            },
            "publication": {
              "storeCode": "agoraTelcoStore",
              "catalogVersion": "agoraTelcoStaged",
              "releaseCode": "agoraTelcoCommerceCatalog",
              "recordPrefix": "agoraTelco"
            }
          }
        ],
        "sharedModules": [
          {
            "module": "domainCommerceCore",
            "minSelectedDomains": 2
          }
        ],
        "emptySelections": [
          "none",
          "commerce"
        ]
      }
    }
  }
};
