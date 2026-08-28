/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/sample-v001/content/records/agoraApparelPageData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = { record0: { code: 'agoraApparelHomePage', name: 'Agora Apparel Home', active: true, cmsSite: ['agoraApparelSite'], typeCode: 'agoraApparelHomePageType', renderer: 'agora.apparel.page.home', template: 'agoraStorefrontPageTemplate', cmsComponents: [
    { target: 'agoraApparelGlobalHeader', slot: 'main', index: 0, active: true },
    { target: 'agoraApparelHomeHeroExperience', slot: 'main', index: 10, active: true },
    { target: 'agoraApparelHomeServiceTicker', slot: 'main', index: 15, active: true },
    { target: 'agoraApparelHomeCollectionGrid', slot: 'main', index: 20, active: true },
    { target: 'agoraApparelTopPicksProductRail', slot: 'main', index: 30, active: true },
    { target: 'agoraApparelEditorialPromoGrid', slot: 'main', index: 40, active: true },
    { target: 'agoraApparelSpecialOfferSplit', slot: 'main', index: 45, active: true },
    { target: 'agoraApparelBestSellingProductRail', slot: 'main', index: 50, active: true },
    { target: 'agoraApparelCustomerServicePromiseGrid', slot: 'main', index: 60, active: true },
    { target: 'agoraApparelCustomerTestimonials', slot: 'main', index: 70, active: true },
    { target: 'agoraApparelSocialGallery', slot: 'main', index: 80, active: true },
    { target: 'agoraApparelGlobalFooterExperience', slot: 'main', index: 90, active: true }
  ] } };
