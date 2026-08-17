/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/discovery/headers/agoraDiscoveryHeader
 * @description Defines Kickoff project-owned import header records for this data pack.
 * @layer data-header
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

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
