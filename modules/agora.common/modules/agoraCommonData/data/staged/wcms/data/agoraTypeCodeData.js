/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/wcms/data/agoraTypeCodeData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner agoraCommonData */

/** @description Agora page and component type contracts. */
module.exports = {
  record0: { code: 'agoraHomePageType', kind: 'PAGE', contractVersion: 1, active: true },
  record1: { code: 'agoraListingPageType', kind: 'PAGE', contractVersion: 1, active: true },
  record2: { code: 'agoraProductDetailPageType', kind: 'PAGE', contractVersion: 1, active: true },
  record3: { code: 'agoraCartPageType', kind: 'PAGE', contractVersion: 1, active: true },
  record4: { code: 'agoraCheckoutPageType', kind: 'PAGE', contractVersion: 1, active: true },
  record5: { code: 'agoraOrderConfirmationPageType', kind: 'PAGE', contractVersion: 1, active: true },
  record6: { code: 'agoraOrderHistoryPageType', kind: 'PAGE', contractVersion: 1, active: true },
  record7: { code: 'agoraHeaderType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record8: { code: 'agoraFooterType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record9: { code: 'agoraHeroBannerType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record10: { code: 'agoraCategoryRailType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record11: { code: 'agoraProductRailType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record12: { code: 'agoraProductListingType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record13: { code: 'agoraSearchListingType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record14: { code: 'agoraProductDetailType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record15: { code: 'agoraCartSummaryType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record16: { code: 'agoraCheckoutFlowType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record17: { code: 'agoraOrderConfirmationType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record18: { code: 'agoraOrderHistoryType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record19: { code: 'agoraOrderLifecycleType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record20: { code: 'agoraServicePromiseType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record21: { code: 'agoraBreadcrumbType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record22: { code: 'agoraRichTextType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record23: { code: 'agoraHeroCarouselType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record24: { code: 'agoraServiceTickerType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record25: { code: 'agoraCollectionGridType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record26: { code: 'agoraPromoGridType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record27: { code: 'agoraServicePromiseGridType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record28: { code: 'agoraTestimonialGridType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record29: { code: 'agoraMediaGalleryType', kind: 'COMPONENT', contractVersion: 1, active: true },
  record30: { code: 'agoraSpecialOfferSplitType', kind: 'COMPONENT', contractVersion: 1, active: true }
};
