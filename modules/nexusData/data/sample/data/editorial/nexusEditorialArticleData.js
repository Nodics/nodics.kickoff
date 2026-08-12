/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

const created = new Date('2026-08-11T00:00:00.000Z');
const updated = new Date('2026-08-11T00:00:00.000Z');
const publishFrom = new Date('2026-08-11T23:59:00.000Z');

function article(index, code, contentTypeCode, title, slug, summary, taxonomyTermCode, featuredMediaCode, special) {
    return {
        code: code,
        accessGroups: ['userGroup'],
        active: true,
        created: created,
        updated: updated,
        contentTypeCode: contentTypeCode,
        internalName: title.replace(/\.$/u, ''),
        description: summary,
        slug: slug,
        siteCodes: ['nexusCorporateSite'],
        authorCodes: ['nodicsEditorialTeam'],
        featuredMediaCode: featuredMediaCode,
        taxonomyTermCodes: [taxonomyTermCode],
        special: special === true,
        specialLabel: special === true ? (contentTypeCode === 'BLOG' ? 'Featured insight' : 'Featured release') : undefined,
        specialRank: special === true ? 10 : undefined,
        specialFrom: special === true ? created : undefined,
        specialUntil: undefined,
        specialVariant: special === true ? 'gold' : undefined,
        status: 'APPROVED',
        publishFrom: publishFrom,
        publicationCode: `${code}-publication-r1`,
        revision: 1,
        sequence: index
    };
}

/** @description Editorial authoring master records shown in Axis News and Blog workspaces. */
module.exports = {
    record0: article(
        1,
        'nexus-news-public-experience',
        'NEWS',
        'Nexus public experience now reads governed backend content.',
        'nexus-public-experience-governed-by-wcms',
        'News, blogs, testimonials, and contact forms are moving from static preview data to backend-owned delivery contracts.',
        'nexus-topic-platform',
        'nexusNewsPublicExperience',
        true
    ),
    record1: article(
        2,
        'nexus-news-axis-business-journey',
        'NEWS',
        'Axis business journeys align with registered runtime capability.',
        'axis-business-journeys-align-with-runtime-capability',
        'BackOffice navigation and workspaces now present authorized backend capability rather than frontend-owned assumptions.',
        'nexus-topic-axis',
        'nexusNewsAxisRuntime',
        false
    ),
    record2: article(
        3,
        'nexus-news-engagement-public-api',
        'NEWS',
        'Engagement APIs now power Nexus contact and testimonial journeys.',
        'engagement-public-api-connects-nexus-contact-and-testimonials',
        'The reference site can load approved testimonial projections and submit contact requests through the registered Engagement runtime.',
        'nexus-topic-engagement',
        'nexusNewsEngagementApi',
        false
    ),
    record3: article(
        4,
        'nexus-news-editorial-release-flow',
        'NEWS',
        'Editorial release flow validates governed News and Blog publishing.',
        'editorial-release-flow-validates-news-and-blog-publishing',
        'Authoring, approval, nPublish activation, online projection, and Nexus delivery now have a repeatable acceptance path.',
        'nexus-topic-editorial',
        'nexusNewsEditorialRelease',
        false
    ),
    record4: article(
        5,
        'nexus-blog-engagement-framework',
        'BLOG',
        'Building customer engagement as an enterprise capability.',
        'building-customer-engagement-as-an-enterprise-capability',
        'Reviews, feedback, testimonials, and contact submissions need one governed process from intake to approval and visibility.',
        'nexus-topic-engagement',
        'nexusBlogCustomerEngagement',
        false
    ),
    record5: article(
        6,
        'nexus-blog-editorial-publication',
        'BLOG',
        'Editorial publication without frontend data ownership.',
        'editorial-publication-without-frontend-data-ownership',
        'Nexus renderers stay executable and reusable while article truth is governed, localized, published, and delivered by WCMS.',
        'nexus-topic-editorial',
        'nexusBlogEditorialPublication',
        true
    ),
    record6: article(
        7,
        'nexus-blog-runtime-discovery',
        'BLOG',
        'Why runtime discovery beats hardcoded service URLs.',
        'why-runtime-discovery-beats-hardcoded-service-urls',
        'Customer projects stay portable when frontend experiences resolve backend ownership from the module registry and public bootstrap.',
        'nexus-topic-runtime',
        'nexusBlogRuntimeDiscovery',
        false
    ),
    record7: article(
        8,
        'nexus-blog-axis-business-operations',
        'BLOG',
        'Designing Axis for clean business operations.',
        'designing-axis-for-clean-business-operations',
        'A usable BackOffice should expose governed tasks clearly without duplicating module authority or overwhelming the operator.',
        'nexus-topic-operations',
        'nexusBlogAxisOperations',
        false
    )
};
