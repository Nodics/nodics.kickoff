/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/**
 * @module partnerSiteData/config/properties
 * @description Contributes a partner-owned application profile and matching Staged CMS baseline.
 * @layer configuration
 * @owner partnerSiteData
 * @override Later partner modules may contribute additional uniquely named profiles and baselines.
 */
module.exports = {
    backofficeApplicationInitialization: {
        profiles: {
            partnernexus: {
                code: 'partnernexus',
                type: 'PARTNER_WEBSITE_CUSTOMIZATION',
                owner: 'partnerSiteData',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'partnernexus',
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            }
        }
    },
    cms: {
        publication: {
            baselines: {
                partnernexus: {
                    releaseCode: 'partnerSiteData:partnerNexusCustomization',
                    releaseVersion: '1.0.2',
                    dataType: 'core',
                    rootType: 'site',
                    rootCode: 'nexusCorporateSite',
                    sourceVersion: '0'
                }
            }
        }
    }
};
