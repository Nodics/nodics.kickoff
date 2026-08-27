/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.telco/data/staged/telco/data/agoraTelcoPageData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.telco
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = { record0: { code: 'agoraTelcoHomePage', name: 'Agora Telco Home', active: true, cmsSite: ['agoraTelcoSite'], typeCode: 'agoraTelcoHomePageType', renderer: 'agora.telco.page.home', template: 'agoraStorefrontPageTemplate', cmsComponents: [
    { target: 'agoraTelcoGlobalHeader', slot: 'main', index: 0, active: true },
    { target: 'agoraTelcoHomeHeroExperience', slot: 'main', index: 10, active: true },
    { target: 'agoraTelcoHomeServiceTicker', slot: 'main', index: 15, active: true },
    { target: 'agoraTelcoHomeCollectionGrid', slot: 'main', index: 20, active: true },
    { target: 'agoraTelcoTopPicksProductRail', slot: 'main', index: 30, active: true },
    { target: 'agoraTelcoEditorialPromoGrid', slot: 'main', index: 40, active: true },
    { target: 'agoraTelcoSpecialOfferSplit', slot: 'main', index: 45, active: true },
    { target: 'agoraTelcoBestSellingProductRail', slot: 'main', index: 50, active: true },
    { target: 'agoraTelcoCustomerServicePromiseGrid', slot: 'main', index: 60, active: true },
    { target: 'agoraTelcoCustomerTestimonials', slot: 'main', index: 70, active: true },
    { target: 'agoraTelcoSocialGallery', slot: 'main', index: 80, active: true },
    { target: 'agoraTelcoGlobalFooterExperience', slot: 'main', index: 90, active: true }
  ] } };
