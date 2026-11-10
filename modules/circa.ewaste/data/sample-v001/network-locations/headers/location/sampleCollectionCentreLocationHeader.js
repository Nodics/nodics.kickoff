/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/sample-v001/network-locations/headers/location/sampleCollectionCentreLocationHeader @description Imports demo collection-centre map locations into the Location authority. @layer data-header @owner circa.ewaste */
module.exports = {
    locationCore: {
        sampleCollectionCentreLocationData: {
            options: {
                enabled: true,
                moduleName: 'locationCore',
                schemaName: 'location',
                operation: 'saveAll',
                tenants: ['default'],
                dataFilePrefix: 'sampleCollectionCentreLocationData',
                userGroups: ['adminGroup']
            },
            query: {
                code: '$code'
            }
        }
    }
};
