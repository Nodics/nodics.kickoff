/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.electronics/modules/agoraElectronics/data/staged/electronics/data/agoraElectronicsPageData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraElectronics
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

module.exports = { record0: { code: 'agoraElectronicsHomePage', name: 'Agora Electronics Home', active: true, cmsSite: ['agoraElectronicsSite'], typeCode: 'agoraElectronicsHomePageType', renderer: 'agora.electronics.page.home', template: 'agoraStorefrontPageTemplate', cmsComponents: [
    { target: 'agoraElectronicsGlobalHeader', slot: 'main', index: 0, active: true },
    { target: 'agoraElectronicsHomeHeroExperience', slot: 'main', index: 10, active: true },
    { target: 'agoraElectronicsHomeServiceTicker', slot: 'main', index: 15, active: true },
    { target: 'agoraElectronicsHomeCollectionGrid', slot: 'main', index: 20, active: true },
    { target: 'agoraElectronicsTopPicksProductRail', slot: 'main', index: 30, active: true },
    { target: 'agoraElectronicsEditorialPromoGrid', slot: 'main', index: 40, active: true },
    { target: 'agoraElectronicsSpecialOfferSplit', slot: 'main', index: 45, active: true },
    { target: 'agoraElectronicsBestSellingProductRail', slot: 'main', index: 50, active: true },
    { target: 'agoraElectronicsCustomerServicePromiseGrid', slot: 'main', index: 60, active: true },
    { target: 'agoraElectronicsCustomerTestimonials', slot: 'main', index: 70, active: true },
    { target: 'agoraElectronicsSocialGallery', slot: 'main', index: 80, active: true },
    { target: 'agoraElectronicsGlobalFooterExperience', slot: 'main', index: 90, active: true }
  ] } };
