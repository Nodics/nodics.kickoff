/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

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
                presentation: {
                    title: 'Partner Nexus Customization',
                    kind: 'PROJECT',
                    category: 'accelerator',
                    order: 900,
                    summary: 'Partner-owned Nexus customization package layered over the corporate site accelerator.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process'],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'ACTIVATION', sampleDataTrigger: 'USER' }
                },
                dataPackages: [
                    { code: 'partnerSiteData:init', kind: 'INITIAL_DATA', required: true, trigger: 'ACTIVATION' }
                ],
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 10000, maxAttempts: 2 }
            }
        }
    },
    cms: {
        publication: {
            baselines: {
                partnernexus: {
                    releaseCode: 'partnerSiteData:partnerNexusCustomization',
                    releaseVersion: '0.0.0',
                    dataType: 'core',
                    rootType: 'site',
                    rootCode: 'nexusCorporateSite',
                    sourceVersion: '0'
                }
            }
        }
    }
};
