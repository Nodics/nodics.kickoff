/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner nexusData */

const authoringArticles = require('./nexusEditorialArticleData');
const components = require('../../wcms/data/corporate/nexusComponentData');
const created = new Date('2026-08-11T00:00:00.000Z');
const updated = new Date('2026-08-11T00:00:00.000Z');

const detailsByTitle = new Map(Object.values(components)
    .filter((component) => component.typeCode === 'nexusEditorialDetailType' && component.properties && component.properties.title)
    .map((component) => [component.properties.title, component.properties]));

function bodyBlocks(article) {
    const detail = detailsByTitle.get(article.internalName) || detailsByTitle.get(`${article.internalName}.`);
    const blocks = [];
    if (detail && detail.bodyText) {
        blocks.push({ type: 'paragraph', text: detail.bodyText });
    }
    if (detail && Array.isArray(detail.sections)) {
        detail.sections.forEach((section) => {
            blocks.push({ type: 'heading', text: section.title });
            blocks.push({ type: 'paragraph', text: section.body });
        });
    }
    return blocks.length > 0 ? blocks : [{ type: 'paragraph', text: article.description }];
}

function localization(article) {
    const title = article.internalName.endsWith('.') ? article.internalName : `${article.internalName}.`;
    const detail = detailsByTitle.get(title) || detailsByTitle.get(article.internalName);
    return {
        code: `${article.code}-en`,
        accessGroups: ['userGroup'],
        active: true,
        created: created,
        updated: updated,
        description: article.description,
        articleCode: article.code,
        localeCode: 'en',
        title: title,
        summary: article.description,
        body: {
            blocks: bodyBlocks(article)
        },
        takeaways: Array.isArray(detail && detail.takeaways) ? detail.takeaways : [],
        seo: {
            title: title,
            description: article.description
        },
        slug: article.slug,
        status: 'READY',
        revision: 1
    };
}

/** @description Localized editorial copy for Nexus local News and Blog authoring records. */
module.exports = Object.fromEntries(Object.values(authoringArticles).map((article, index) => [`record${index}`, localization(article)]));
