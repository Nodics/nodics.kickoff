/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/nexus.web/data/staged/editorial/data/nexusEditorialTaxonomyTermData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner nexus.web
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner nexus.web */

const created = new Date('2026-08-11T00:00:00.000Z');
const updated = new Date('2026-08-11T00:00:00.000Z');

const nexusEditorialTaxonomyTermData = {
    /**
     * Creates one Nexus editorial taxonomy term record.
     *
     * @param {string} code Term code.
     * @param {string} name Term name.
     * @param {string} slug Term slug.
     * @param {string} description Term description.
     * @returns {Object} Editorial taxonomy term record.
     */
    topic: function (code, name, slug, description) {
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
    },

    /**
     * Creates all Nexus editorial taxonomy term records.
     *
     * @returns {Object} Editorial taxonomy term records keyed by import record id.
     */
    records: function () {
        return {
    record0: this.topic('nexus-topic-platform', 'Platform', 'platform', 'Framework and public Nexus platform evolution.'),
    record1: this.topic('nexus-topic-axis', 'Axis', 'axis', 'BackOffice operations and business-user governance.'),
    record2: this.topic('nexus-topic-engagement', 'Engagement', 'engagement', 'Contact, testimonial, feedback, and customer engagement capability.'),
    record3: this.topic('nexus-topic-editorial', 'Editorial', 'editorial', 'Authoring, localization, approval, and publication flows.'),
    record4: this.topic('nexus-topic-runtime', 'Runtime', 'runtime', 'Runtime discovery, bootstrap, and service composition.'),
    record5: this.topic('nexus-topic-operations', 'Operations', 'operations', 'Operational control, schema visibility, and delivery workflows.')
        };
    }
};

/** @description Editorial taxonomy terms used by Nexus local News and Blog samples. */
module.exports = nexusEditorialTaxonomyTermData.records();
