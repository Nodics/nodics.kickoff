/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination ENGAGEMENT @owner agoraData */

/** @description Import header for synthetic Agora customer-review sample evidence. */
const entry = (schemaName, dataFilePrefix) => ({
  options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix },
  query: { code: '$code', tenant: '$tenant' }
});

module.exports = {
  customerReview: {
    agoraCustomerReviewData: entry('customerReview', 'agoraCustomerReviewData'),
    agoraCustomerReviewAuthenticityEvidenceData: entry('customerReviewAuthenticityEvidence', 'agoraCustomerReviewAuthenticityEvidenceData'),
    agoraCustomerReviewModerationData: entry('customerReviewModeration', 'agoraCustomerReviewModerationData'),
    agoraCustomerReviewProjectionData: entry('customerReviewProjection', 'agoraCustomerReviewProjectionData'),
    agoraCustomerReviewAggregateData: entry('customerReviewAggregate', 'agoraCustomerReviewAggregateData')
  }
};
