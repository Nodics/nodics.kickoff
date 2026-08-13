/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/**
 * @module nexusData/config/properties
 * @description Declares project-specific media policy for public Nexus content assets.
 * @layer configuration
 * @owner nexusData
 * @override A deployment may replace the local provider coordinates without changing CMS content records.
 */
module.exports = {
    media: {
        folders: {
            nexusContentAssets: {
                code: 'nexusContentAssets',
                name: 'Nexus Content Assets',
                description: 'Public corporate assets referenced by Nexus CMS components.',
                storagePrefix: 'media/content/nexus',
                access: 'PUBLIC',
                allowedExtensions: ['avif', 'webp', 'png', 'jpg', 'jpeg', 'svg'],
                allowedMimeTypes: ['image/avif', 'image/webp', 'image/png', 'image/jpeg', 'image/svg+xml'],
                maximumFileSizeBytes: 10485760,
                retentionDays: 0,
                status: 'ACTIVE'
            }
        }
    }
};
