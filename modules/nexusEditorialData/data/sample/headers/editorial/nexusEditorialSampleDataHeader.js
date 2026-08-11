/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @description Sample Editorial Online projections consumed by the Nexus public site. */
module.exports = {
    editorial: {
        nexusEditorialOnlineArticleData: { options: { enabled: true, schemaName: 'editorialOnlineArticle', operation: 'saveAll', dataFilePrefix: 'nexusEditorialOnlineArticleData', userGroups: ['adminGroup'] }, query: { code: '$code' } }
    }
};
