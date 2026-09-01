/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module modules/kickoffWaste/config/properties @description Declares Kickoff Waste overlay metadata without taking framework ownership. @layer config @owner kickoffWaste */
module.exports = {
    waste: {
        projectOverlay: {
            enabled: true,
            module: 'kickoffWaste',
            releaseCode: 'kickoffWaste:project-reference',
            layerKind: 'PROJECT'
        }
    }
};
