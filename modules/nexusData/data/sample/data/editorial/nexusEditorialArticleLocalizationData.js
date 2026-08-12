/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

const onlineArticles = require('./nexusEditorialOnlineArticleData');
const components = require('../../../core/data/corporate/nexusComponentData');
const created = new Date('2026-08-11T00:00:00.000Z');
const updated = new Date('2026-08-11T00:00:00.000Z');

const detailsByTitle = new Map(Object.values(components)
    .filter((component) => component.typeCode === 'nexusEditorialDetailType' && component.properties && component.properties.title)
    .map((component) => [component.properties.title, component.properties]));

function bodyBlocks(payload) {
    const detail = detailsByTitle.get(payload.title);
    const blocks = [];
    if (detail && detail.bodyText) {
        blocks.push({ type: 'paragraph', text: detail.bodyText });
    }
    if (payload.body && (!detail || !String(detail.bodyText || '').includes(payload.body))) {
        blocks.push({ type: 'paragraph', text: payload.body });
    }
    if (detail && Array.isArray(detail.sections)) {
        detail.sections.forEach((section) => {
            blocks.push({ type: 'heading', text: section.title });
            blocks.push({ type: 'paragraph', text: section.body });
        });
    }
    return blocks.length > 0 ? blocks : [{ type: 'paragraph', text: payload.summary }];
}

function localization(record) {
    const payload = record.payload;
    const detail = detailsByTitle.get(payload.title);
    return {
        code: `${payload.articleCode}-en`,
        accessGroups: ['userGroup'],
        active: true,
        created: created,
        updated: updated,
        description: payload.summary,
        articleCode: payload.articleCode,
        localeCode: 'en',
        title: payload.title,
        summary: payload.summary,
        body: {
            blocks: bodyBlocks(payload)
        },
        takeaways: Array.isArray(payload.takeaways) ? payload.takeaways : (Array.isArray(detail && detail.takeaways) ? detail.takeaways : []),
        seo: {
            title: payload.title,
            description: payload.summary
        },
        slug: payload.slug,
        status: 'READY',
        revision: 1
    };
}

/** @description Localized editorial copy for Nexus local News and Blog authoring records. */
module.exports = Object.fromEntries(Object.values(onlineArticles).map((record, index) => [`record${index}`, localization(record)]));
