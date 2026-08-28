/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/nexus.web/data/sample-v001/content/records/wcms/corporate/nexusTypeCodeData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner nexus.web
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner nexus.web */

/** @description Nexus corporate page and component type contracts. */
module.exports = {
  "record0": {
    "code": "nexusCorporateHomePageType",
    "kind": "PAGE",
    "contractVersion": 0,
    "active": true
  },
  "record1": {
    "code": "nexusCorporateStandardPageType",
    "kind": "PAGE",
    "contractVersion": 0,
    "active": true
  },
  "record2": {
    "code": "nexusPageHeroType",
    "kind": "COMPONENT",
    "propertySchema": {
      "title": {
        "localized": true,
        "requiredLocales": [
          "en"
        ]
      },
      "body": {
        "localized": true
      }
    },
    "contractVersion": 0,
    "active": true
  },
  "record3": {
    "code": "nexusBannerCarouselType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record4": {
    "code": "nexusBannerSlideType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record5": {
    "code": "nexusContentSectionType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record6": {
    "code": "nexusCardGridType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record7": {
    "code": "nexusTechnologyType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record8": {
    "code": "nexusGithubType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record9": {
    "code": "nexusTestimonialsType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record10": {
    "code": "nexusNewsCarouselType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record11": {
    "code": "nexusBlogCarouselType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record12": {
    "code": "nexusContactType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record13": {
    "code": "nexusEditorialListingType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record14": {
    "code": "nexusEditorialCardType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record15": {
    "code": "nexusEditorialDetailType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record16": {
    "code": "nexusEditorialFeaturedType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record17": {
    "code": "nexusEditorialLatestType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record18": {
    "code": "nexusEditorialTaxonomyType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record19": {
    "code": "nexusEditorialAuthorType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record20": {
    "code": "nexusEditorialRelatedType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record21": {
    "code": "nexusEditorialSeriesType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record22": {
    "code": "nexusCorporateSiteHeaderType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  },
  "record23": {
    "code": "nexusCorporateSiteFooterType",
    "kind": "COMPONENT",
    "contractVersion": 0,
    "active": true
  }
};
