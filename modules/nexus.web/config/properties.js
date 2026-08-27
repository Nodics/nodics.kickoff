/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module nexus.web/config/properties
 * @description Declares project-specific media policy for public Nexus content assets.
 * @layer configuration
 * @owner nexus.web
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
