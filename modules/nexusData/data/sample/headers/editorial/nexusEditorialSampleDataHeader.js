/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @description Sample Editorial authoring records and Online projections for Nexus local preview. */
module.exports = {
    editorial: {
        nexusEditorialAuthorData: { options: { enabled: true, schemaName: 'editorialAuthor', operation: 'saveAll', dataFilePrefix: 'nexusEditorialAuthorData', userGroups: ['adminGroup'] }, query: { code: '$code' } },
        nexusEditorialTaxonomyTermData: { options: { enabled: true, schemaName: 'editorialTaxonomyTerm', operation: 'saveAll', dataFilePrefix: 'nexusEditorialTaxonomyTermData', userGroups: ['adminGroup'] }, query: { code: '$code' } },
        nexusEditorialArticleData: { options: { enabled: true, schemaName: 'editorialArticle', operation: 'saveAll', dataFilePrefix: 'nexusEditorialArticleData', userGroups: ['adminGroup'] }, query: { code: '$code' } },
        nexusEditorialArticleLocalizationData: { options: { enabled: true, schemaName: 'editorialArticleLocalization', operation: 'saveAll', dataFilePrefix: 'nexusEditorialArticleLocalizationData', userGroups: ['adminGroup'] }, query: { code: '$code' } },
        nexusEditorialArticleTaxonomyData: { options: { enabled: true, schemaName: 'editorialArticleTaxonomy', operation: 'saveAll', dataFilePrefix: 'nexusEditorialArticleTaxonomyData', userGroups: ['adminGroup'] }, query: { code: '$code' } },
        nexusEditorialOnlineArticleData: { options: { enabled: true, schemaName: 'editorialOnlineArticle', operation: 'saveAll', dataFilePrefix: 'nexusEditorialOnlineArticleData', userGroups: ['adminGroup'] }, query: { code: '$code' } }
    }
};
