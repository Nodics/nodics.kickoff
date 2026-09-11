/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';
/** @module circa.ewaste/data/content/circaMediaData @description Hydrates declared sample images through Media provider storage. @layer data @owner circa.ewaste */
const assets = require('../assets/circa-media/assetManifest');
module.exports = Object.fromEntries(assets.map((asset, index) => ['record' + index, {
    code: asset.mediaCode, name: asset.name, description: asset.description,
    folderCode: asset.folderCode, formatCode: asset.formatCode,
    businessPurpose: asset.businessPurpose, ownerType: asset.ownerType,
    ownerReference: asset.ownerCode, reusable: false, legalHold: false, active: true,
    asset: { sourceFile: 'content/assets/circa-media/files/' + asset.fileName }
}]));
