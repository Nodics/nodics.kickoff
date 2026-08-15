/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraData */

/** @description Core import header for the Nodics Agora generic Discovery configuration release. */
const entry = (schemaName, dataFilePrefix) => ({
  options: { enabled: true, schemaName, operation: 'saveAll', dataFilePrefix },
  query: { code: '$code', tenant: '$tenant' }
});

module.exports = {
  discoveryConfig: {
    agoraDiscoveryIndexConfigurationData: entry('discoveryIndexConfiguration', 'agoraDiscoveryIndexConfigurationData'),
    agoraDiscoverySourceMixConfigurationData: entry('discoverySourceMixConfiguration', 'agoraDiscoverySourceMixConfigurationData'),
    agoraDiscoveryQueryProfileData: entry('discoveryQueryProfile', 'agoraDiscoveryQueryProfileData'),
    agoraDiscoveryFacetProfileData: entry('discoveryFacetProfile', 'agoraDiscoveryFacetProfileData'),
    agoraDiscoveryRankingProfileData: entry('discoveryRankingProfile', 'agoraDiscoveryRankingProfileData'),
    agoraDiscoveryPublicationPolicyData: entry('discoveryPublicationPolicy', 'agoraDiscoveryPublicationPolicyData')
  },
  discoveryMapping: {
    agoraDiscoveryFieldMappingData: entry('discoveryFieldMapping', 'agoraDiscoveryFieldMappingData')
  }
};
