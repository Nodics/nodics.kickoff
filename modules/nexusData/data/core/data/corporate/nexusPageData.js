/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @description Nexus corporate CMS pages. */
module.exports = {
  "record0": {
    "code": "nexusHomePage",
    "name": "Nodics Nexus Home",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateHomePageType",
    "template": "nexusCorporatePageTemplate",
    "renderer": "nexus.page.home",
    "cmsComponents": [
      {
        "code": "nexusHomePage2NexusHomeHero",
        "target": "nexusHomeBannerCarousel",
        "slot": "main",
        "index": 0,
        "active": true
      },
      {
        "target": "nexusHomeAbout",
        "slot": "main",
        "index": 1,
        "active": true
      },
      {
        "target": "nexusHomeWhy",
        "slot": "main",
        "index": 2,
        "active": true
      },
      {
        "target": "nexusHomeProducts",
        "slot": "main",
        "index": 3,
        "active": true
      },
      {
        "target": "nexusHomeTechnology",
        "slot": "main",
        "index": 4,
        "active": true
      },
      {
        "target": "nexusHomeSupport",
        "slot": "main",
        "index": 5,
        "active": true
      },
      {
        "target": "nexusHomeTestimonials",
        "slot": "main",
        "index": 6,
        "active": true
      },
      {
        "target": "nexusHomeBlogs",
        "slot": "main",
        "index": 7,
        "active": true
      },
      {
        "target": "nexusHomeNews",
        "slot": "main",
        "index": 8,
        "active": true
      },
      {
        "target": "nexusHomeGithub",
        "slot": "main",
        "index": 9,
        "active": true
      },
      {
        "target": "nexusHomeEcosystem",
        "slot": "main",
        "index": 10,
        "active": true
      },
      {
        "target": "nexusHomeContact",
        "slot": "main",
        "index": 11,
        "active": true
      }
    ]
  },
  "record1": {
    "code": "nexusAboutPage",
    "name": "About Nodics",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusAboutContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record2": {
    "code": "nexusFeaturesPage",
    "name": "Nodics Features",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusFeaturesContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record3": {
    "code": "nexusSupportPage",
    "name": "Nodics Support",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusSupportContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record4": {
    "code": "nexusInvestorsPage",
    "name": "Nodics Investors",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusInvestorsContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record5": {
    "code": "nexusDonatePage",
    "name": "Support Nodics",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusDonateContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record6": {
    "code": "nexusPlatformPage",
    "name": "Nodics Platform",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusPlatformContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record7": {
    "code": "nexusDevelopersPage",
    "name": "Developer Experience",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusDevelopersContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record8": {
    "code": "nexusEcosystemPage",
    "name": "Nodics Ecosystem",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusEcosystemContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record9": {
    "code": "nexusTestimonialsPage",
    "name": "Testimonials",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusTestimonialsContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record10": {
    "code": "nexusContactPage",
    "name": "Contact Nodics",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusContactContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record11": {
    "code": "nexusPrivacyPage",
    "name": "Privacy Policy",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusPrivacyContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record12": {
    "code": "nexusTermsPage",
    "name": "Terms of Use",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusTermsContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  },
  "record13": {
    "code": "nexusCookiesPage",
    "name": "Cookie Policy",
    "active": true,
    "cmsSite": [
      "nexusCorporateSite"
    ],
    "typeCode": "nexusCorporateStandardPageType",
    "template": "nexusCorporatePageTemplate",
    "cmsComponents": [
      {
        "target": "nexusCookiesContent",
        "slot": "main",
        "index": 0,
        "active": true
      }
    ]
  }
};
