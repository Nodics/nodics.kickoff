/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/nexus.web/test/expectedOnlineProjections/nexusEditorialOnlineArticleData
 * @description Defines expected Kickoff Online projection fixtures for acceptance validation.
 * @layer test
 * @owner nexus.web
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle TEST_ONLY @description Expected Online projection; runtime import is prohibited. */

const components = require('../../data/staged/wcms/data/corporate/nexusComponentData');
const authoringArticles = require('../../data/staged/editorial/data/nexusEditorialArticleData');

const publishedAt = new Date('2026-08-11T23:59:00.000Z');
const created = new Date('2026-08-11T00:00:00.000Z');
const updated = new Date('2026-08-11T00:00:00.000Z');
const authoringByCode = new Map(Object.values(authoringArticles).map((article) => [article.code, article]));

const takeawaysByTitle = new Map(Object.values(components)
    .filter((component) => component.typeCode === 'nexusEditorialDetailType' && component.properties && component.properties.title)
    .map((component) => [component.properties.title, component.properties.takeaways || []]));

const nexusEditorialOnlineArticleData = {
    /**
     * Resolves expected takeaways for a projected article title.
     *
     * @param {string} title Article title.
     * @returns {string[]} Expected takeaway values.
     */
    takeaways: function (title) {
    return takeawaysByTitle.get(title) || [];
    },

    /**
     * Resolves expected special-article projection fields.
     *
     * @param {string} articleCode Source article code.
     * @returns {Object} Expected special projection fields.
     */
    special: function (articleCode) {
    const article = authoringByCode.get(articleCode) || {};
    return {
        special: article.special === true,
        specialLabel: article.specialLabel,
        specialRank: article.specialRank,
        specialFrom: article.specialFrom || null,
        specialUntil: article.specialUntil || null,
        specialVariant: article.specialVariant
    };
    },

    /**
     * Creates all expected published Editorial Online projection records.
     *
     * @returns {Object} Expected projection records keyed by import record id.
     */
    records: function () {
        return {
    record0: {
        code: 'nexus-news-public-experience-online-en',
        active: true,
        created: created,
        updated: updated,
        articleCode: 'nexus-news-public-experience',
        contentTypeCode: 'NEWS',
        siteCode: 'nexusCorporateSite',
        localeCode: 'en',
        slug: 'nexus-public-experience-governed-by-wcms',
        payload: {
            articleCode: 'nexus-news-public-experience',
            contentTypeCode: 'NEWS',
            slug: 'nexus-public-experience-governed-by-wcms',
            siteCode: 'nexusCorporateSite',
            localeCode: 'en',
            title: 'Nexus public experience now reads governed backend content.',
            summary: 'News, blogs, testimonials, and contact forms are moving from static preview data to backend-owned delivery contracts.',
            body: { blocks: [{ type: 'paragraph', text: 'Nodics Nexus is becoming the public gateway for the framework, product direction, documentation, and partner-facing evaluation journeys. The first corporate pages are now modeled as CMS-managed pages, components, and renderers instead of being hidden as frontend-only content.' }, { type: 'paragraph', text: 'Nexus renders the customer-facing experience while WCMS and Engagement own the content, submission, approval, and publication records.' }] },
            takeaways: this.takeaways('Nexus public experience now reads governed backend content.'),
            ...this.special('nexus-news-public-experience'),
            publishFrom: null,
            publishUntil: null
        },
        sourceRevision: 1,
        sourceHash: 'nexus-news-public-experience-v1',
        status: 'CURRENT',
        publishedAt: publishedAt
    },
    record1: {
        code: 'nexus-news-axis-business-journey-online-en',
        active: true,
        created: created,
        updated: updated,
        articleCode: 'nexus-news-axis-business-journey',
        contentTypeCode: 'NEWS',
        siteCode: 'nexusCorporateSite',
        localeCode: 'en',
        slug: 'axis-business-journeys-align-with-runtime-capability',
        payload: {
            articleCode: 'nexus-news-axis-business-journey',
            contentTypeCode: 'NEWS',
            slug: 'axis-business-journeys-align-with-runtime-capability',
            siteCode: 'nexusCorporateSite',
            localeCode: 'en',
            title: 'Axis business journeys align with registered runtime capability.',
            summary: 'BackOffice navigation and workspaces now present authorized backend capability rather than frontend-owned assumptions.',
            body: { blocks: [{ type: 'paragraph', text: 'Axis is the operational control plane for Nodics. Its navigation and workspaces should reflect registered modules, schemas, APIs, and business capabilities exposed by the running backend, not a hardcoded frontend wish list.' }, { type: 'paragraph', text: 'The platform keeps business operations discoverable from module contracts, schema metadata, and project-owned data releases.' }] },
            takeaways: this.takeaways('Axis business journeys align with registered runtime capability.'),
            ...this.special('nexus-news-axis-business-journey'),
            publishFrom: null,
            publishUntil: null
        },
        sourceRevision: 1,
        sourceHash: 'nexus-news-axis-business-journey-v1',
        status: 'CURRENT',
        publishedAt: publishedAt
    },
    record2: {
        code: 'nexus-news-engagement-public-api-online-en',
        active: true,
        created: created,
        updated: updated,
        articleCode: 'nexus-news-engagement-public-api',
        contentTypeCode: 'NEWS',
        siteCode: 'nexusCorporateSite',
        localeCode: 'en',
        slug: 'engagement-public-api-connects-nexus-contact-and-testimonials',
        payload: {
            articleCode: 'nexus-news-engagement-public-api',
            contentTypeCode: 'NEWS',
            slug: 'engagement-public-api-connects-nexus-contact-and-testimonials',
            siteCode: 'nexusCorporateSite',
            localeCode: 'en',
            title: 'Engagement APIs now power Nexus contact and testimonial journeys.',
            summary: 'The reference site can load approved testimonial projections and submit contact requests through the registered Engagement runtime.',
            body: { blocks: [{ type: 'paragraph', text: 'Nexus needs public interaction points, but public pages should not own internal customer records. Engagement provides the boundary for contact journeys, testimonial projections, editorial projections, and future customer-facing interaction data.' }, { type: 'paragraph', text: 'Nexus resolves the Engagement endpoint from Platform bootstrap, then reads public testimonial projections and posts validated contact submissions without owning customer data.' }] },
            takeaways: this.takeaways('Engagement APIs now power Nexus contact and testimonial journeys.'),
            ...this.special('nexus-news-engagement-public-api'),
            publishFrom: null,
            publishUntil: null
        },
        sourceRevision: 1,
        sourceHash: 'nexus-news-engagement-public-api-v1',
        status: 'CURRENT',
        publishedAt: publishedAt
    },
    record3: {
        code: 'nexus-news-editorial-release-flow-online-en',
        active: true,
        created: created,
        updated: updated,
        articleCode: 'nexus-news-editorial-release-flow',
        contentTypeCode: 'NEWS',
        siteCode: 'nexusCorporateSite',
        localeCode: 'en',
        slug: 'editorial-release-flow-validates-news-and-blog-publishing',
        payload: {
            articleCode: 'nexus-news-editorial-release-flow',
            contentTypeCode: 'NEWS',
            slug: 'editorial-release-flow-validates-news-and-blog-publishing',
            siteCode: 'nexusCorporateSite',
            localeCode: 'en',
            title: 'Editorial release flow validates governed News and Blog publishing.',
            summary: 'Authoring, approval, nPublish activation, online projection, and Nexus delivery now have a repeatable acceptance path.',
            body: { blocks: [{ type: 'paragraph', text: 'Editorial publishing in Nodics should be treated as a business capability. Articles and news updates need draft control, approval, public projection, route availability, and release validation so the website never becomes a collection of unmanaged static edits.' }, { type: 'paragraph', text: 'The live journey creates editorial records, routes them through workflow, publishes online projections, verifies delivery, and confirms rollback evidence.' }] },
            takeaways: this.takeaways('Editorial release flow validates governed News and Blog publishing.'),
            ...this.special('nexus-news-editorial-release-flow'),
            publishFrom: null,
            publishUntil: null
        },
        sourceRevision: 1,
        sourceHash: 'nexus-news-editorial-release-flow-v1',
        status: 'CURRENT',
        publishedAt: publishedAt
    },
    record4: {
        code: 'nexus-blog-engagement-framework-online-en',
        active: true,
        created: created,
        updated: updated,
        articleCode: 'nexus-blog-engagement-framework',
        contentTypeCode: 'BLOG',
        siteCode: 'nexusCorporateSite',
        localeCode: 'en',
        slug: 'building-customer-engagement-as-an-enterprise-capability',
        payload: {
            articleCode: 'nexus-blog-engagement-framework',
            contentTypeCode: 'BLOG',
            slug: 'building-customer-engagement-as-an-enterprise-capability',
            siteCode: 'nexusCorporateSite',
            localeCode: 'en',
            title: 'Building customer engagement as an enterprise capability.',
            summary: 'Reviews, feedback, testimonials, and contact submissions need one governed process from intake to approval and visibility.',
            body: { blocks: [{ type: 'paragraph', text: 'Customer-originated content looks simple on a website, but it becomes operationally sensitive as soon as it includes consent, moderation, routing, approval, privacy, and public visibility. Nodics treats Engagement as a capability so those concerns are modeled once and reused across journeys.' }, { type: 'paragraph', text: 'Engagement keeps customer-originated records, consent, moderation, lifecycle, and safe public projections behind explicit API contracts.' }] },
            takeaways: this.takeaways('Building customer engagement as an enterprise capability.'),
            ...this.special('nexus-blog-engagement-framework'),
            publishFrom: null,
            publishUntil: null
        },
        sourceRevision: 1,
        sourceHash: 'nexus-blog-engagement-framework-v1',
        status: 'CURRENT',
        publishedAt: publishedAt
    },
    record5: {
        code: 'nexus-blog-editorial-publication-online-en',
        active: true,
        created: created,
        updated: updated,
        articleCode: 'nexus-blog-editorial-publication',
        contentTypeCode: 'BLOG',
        siteCode: 'nexusCorporateSite',
        localeCode: 'en',
        slug: 'editorial-publication-without-frontend-data-ownership',
        payload: {
            articleCode: 'nexus-blog-editorial-publication',
            contentTypeCode: 'BLOG',
            slug: 'editorial-publication-without-frontend-data-ownership',
            siteCode: 'nexusCorporateSite',
            localeCode: 'en',
            title: 'Editorial publication without frontend data ownership.',
            summary: 'Nexus renderers stay executable and reusable while article truth is governed, localized, published, and delivered by WCMS.',
            body: { blocks: [{ type: 'paragraph', text: 'A corporate website becomes fragile when articles are hardcoded into components. Nodics keeps the renderer in the frontend and the editorial truth in backend-managed records, making publishing inspectable and eventually business-managed.' }, { type: 'paragraph', text: 'The customer project can seed sample records, WCMS can publish online projections, and Nexus can render lists and details through public delivery APIs.' }] },
            takeaways: this.takeaways('Editorial publication without frontend data ownership.'),
            ...this.special('nexus-blog-editorial-publication'),
            publishFrom: null,
            publishUntil: null
        },
        sourceRevision: 1,
        sourceHash: 'nexus-blog-editorial-publication-v1',
        status: 'CURRENT',
        publishedAt: publishedAt
    },
    record6: {
        code: 'nexus-blog-runtime-discovery-online-en',
        active: true,
        created: created,
        updated: updated,
        articleCode: 'nexus-blog-runtime-discovery',
        contentTypeCode: 'BLOG',
        siteCode: 'nexusCorporateSite',
        localeCode: 'en',
        slug: 'why-runtime-discovery-beats-hardcoded-service-urls',
        payload: {
            articleCode: 'nexus-blog-runtime-discovery',
            contentTypeCode: 'BLOG',
            slug: 'why-runtime-discovery-beats-hardcoded-service-urls',
            siteCode: 'nexusCorporateSite',
            localeCode: 'en',
            title: 'Why runtime discovery beats hardcoded service URLs.',
            summary: 'Customer projects stay portable when frontend experiences resolve backend ownership from the module registry and public bootstrap.',
            body: { blocks: [{ type: 'paragraph', text: 'Hardcoded service URLs make local demos, partner projects, and production deployments harder to trust. Nodics frontend applications should ask the platform where capabilities live for the current runtime and environment.' }, { type: 'paragraph', text: 'Nexus only knows the Platform bootstrap. Platform tells it where CMS, Editorial, Engagement, Localization, and Profile capabilities are available for the current runtime.' }] },
            takeaways: this.takeaways('Why runtime discovery beats hardcoded service URLs.'),
            ...this.special('nexus-blog-runtime-discovery'),
            publishFrom: null,
            publishUntil: null
        },
        sourceRevision: 1,
        sourceHash: 'nexus-blog-runtime-discovery-v1',
        status: 'CURRENT',
        publishedAt: publishedAt
    },
    record7: {
        code: 'nexus-blog-axis-business-operations-online-en',
        active: true,
        created: created,
        updated: updated,
        articleCode: 'nexus-blog-axis-business-operations',
        contentTypeCode: 'BLOG',
        siteCode: 'nexusCorporateSite',
        localeCode: 'en',
        slug: 'designing-axis-for-clean-business-operations',
        payload: {
            articleCode: 'nexus-blog-axis-business-operations',
            contentTypeCode: 'BLOG',
            slug: 'designing-axis-for-clean-business-operations',
            siteCode: 'nexusCorporateSite',
            localeCode: 'en',
            title: 'Designing Axis for clean business operations.',
            summary: 'A usable BackOffice should expose governed tasks clearly without duplicating module authority or overwhelming the operator.',
            body: { blocks: [{ type: 'paragraph', text: 'Axis should help business users and developers operate Nodics without turning every backend capability into a maze. The goal is not to expose everything everywhere; it is to expose the right evidence, actions, and boundaries for each task.' }, { type: 'paragraph', text: 'Axis composes capability, schema, workflow, and runtime evidence into crisp pages while backend modules remain the authority for operations and data contracts.' }] },
            takeaways: this.takeaways('Designing Axis for clean business operations.'),
            ...this.special('nexus-blog-axis-business-operations'),
            publishFrom: null,
            publishUntil: null
        },
        sourceRevision: 1,
        sourceHash: 'nexus-blog-axis-business-operations-v1',
        status: 'CURRENT',
        publishedAt: publishedAt
    }
        };
    }
};

/** @description Published Editorial Online projections for the Nexus reference site. */
module.exports = nexusEditorialOnlineArticleData.records();
