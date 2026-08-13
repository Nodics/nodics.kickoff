/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

'use strict';

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner nexusData */

const created = new Date('2026-08-11T00:00:00.000Z');
const updated = new Date('2026-08-11T00:00:00.000Z');

function topic(code, name, slug, description) {
    return {
        code: code,
        accessGroups: ['userGroup'],
        active: true,
        created: created,
        updated: updated,
        description: description,
        taxonomyCode: 'nexusEditorialTopic',
        name: name,
        slug: slug,
        metadata: {
            siteCode: 'nexusCorporateSite',
            description: description
        }
    };
}

/** @description Editorial taxonomy terms used by Nexus local News and Blog samples. */
module.exports = {
    record0: topic('nexus-topic-platform', 'Platform', 'platform', 'Framework and public Nexus platform evolution.'),
    record1: topic('nexus-topic-axis', 'Axis', 'axis', 'BackOffice operations and business-user governance.'),
    record2: topic('nexus-topic-engagement', 'Engagement', 'engagement', 'Contact, testimonial, feedback, and customer engagement capability.'),
    record3: topic('nexus-topic-editorial', 'Editorial', 'editorial', 'Authoring, localization, approval, and publication flows.'),
    record4: topic('nexus-topic-runtime', 'Runtime', 'runtime', 'Runtime discovery, bootstrap, and service composition.'),
    record5: topic('nexus-topic-operations', 'Operations', 'operations', 'Operational control, schema visibility, and delivery workflows.')
};
