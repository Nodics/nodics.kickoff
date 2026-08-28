/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffLocal/processServer/data/init-v001/records/editorial/defaultEditorialProcessDefinitionVersionData @description Deploys immutable reference Editorial workflow versions into Process. @layer project-data @owner nodics.kickoff */
const definitions = require('./defaultEditorialProcessDefinitionData');
module.exports = {
    record0: { code: 'editorialApproval_v1', name: 'Editorial Approval', definitionCode: 'editorialApproval', version: 1, status: 'PUBLISHED', graph: definitions.record0.graph, checksum: 'editorialApproval-v1', publishedBy: 'system', publishedAt: new Date('2026-08-11T00:00:00.000Z') },
    record1: { code: 'editorialPublication_v1', name: 'Editorial Publication', definitionCode: 'editorialPublication', version: 1, status: 'PUBLISHED', graph: definitions.record1.graph, checksum: 'editorialPublication-v1', publishedBy: 'system', publishedAt: new Date('2026-08-11T00:00:00.000Z') }
};
