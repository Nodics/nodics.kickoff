/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module circa.ewaste/data/sample-v001/network-points/headers/waste/sampleCollectionCentrePointHeader @description Imports demo collection-centre records into the Waste Collection authority. @layer data-header @owner circa.ewaste */
module.exports = {
    wasteCollection: {
        sampleCollectionCentrePointData: {
            options: {
                enabled: true,
                moduleName: 'wasteCollection',
                schemaName: 'wasteCollectionPoint',
                operation: 'saveAll',
                tenants: ['default'],
                dataFilePrefix: 'sampleCollectionCentrePointData',
                userGroups: ['adminGroup']
            },
            query: {
                code: '$code'
            }
        }
    }
};
