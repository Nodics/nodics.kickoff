/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

const articles = require('./nexusEditorialArticleData');

/** @description Primary topic links for Nexus local News and Blog authoring records. */
module.exports = Object.fromEntries(
    Object.values(articles).map((article, index) => {
        const termCode = article.taxonomyTermCodes[0];
        return [
            `record${index}`,
            {
                code: `${article.code}-${termCode}`,
                accessGroups: ['userGroup'],
                active: true,
                created: article.created,
                updated: article.updated,
                description: `Primary Nexus Editorial topic for ${article.code}.`,
                articleCode: article.code,
                termCode: termCode,
                relationType: 'PRIMARY'
            }
        ];
    })
);
