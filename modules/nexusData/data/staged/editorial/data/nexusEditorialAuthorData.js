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

/** @description Editorial authoring identities used by Nexus local News and Blog samples. */
module.exports = {
    record0: {
        code: 'nodicsEditorialTeam',
        accessGroups: ['userGroup'],
        active: true,
        created: created,
        updated: updated,
        description: 'Nexus editorial authoring identity for local News and Blog sample content.',
        displayName: 'Nodics Editorial Team',
        biography: {
            en: 'Framework, BackOffice, content, and implementation notes from the Nodics team.'
        },
        socialLinks: {
            github: 'https://github.com/Nodics',
            linkedin: 'https://www.linkedin.com/company/nodics'
        },
        status: 'ACTIVE'
    }
};
