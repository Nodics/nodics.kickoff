/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module nodics.kickoff/modules/kickoffInt/config/properties
 * @description Nodics Kickoff integration project-module configuration defaults.
 * @layer config
 * @owner kickoffInt
 * @override Later active modules may override these defaults through configuration layering.
 */
module.exports = {
    data: {
        dataReleases: {
            runtimeRoleProfiles: {
                PROCESS: {
                    contributions: [
                        { moduleName: 'editorial', sections: ['editorialWorkflows'] }
                    ]
                }
            }
        }
    },
    process: {
        definitionContributions: {
            reviewerAssignments: {
                editorialApproval: {
                    ownerModule: 'editorial',
                    contributionOwner: 'editorial',
                    nodeAssignees: {
                        editorialReview: 'editorialReviewQueue'
                    }
                }
            }
        }
    }
};
