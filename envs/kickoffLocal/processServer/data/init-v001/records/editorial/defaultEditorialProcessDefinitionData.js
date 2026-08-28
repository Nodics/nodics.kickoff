/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffLocal/processServer/data/init-v001/records/editorial/defaultEditorialProcessDefinitionData @description Deploys the reference Editorial workflows into the Process-owned runtime. @layer project-data @owner nodics.kickoff */
const approvalGraph = {
    nodes: [
        { code: 'start', type: 'START', name: 'Start' },
        { code: 'editorialReview', type: 'TASK', name: 'Editorial Review', assignee: 'editorialReviewQueue' },
        { code: 'approvalDecision', type: 'DECISION', name: 'Approval Decision' },
        { code: 'applyDecision', type: 'ACTION', name: 'Apply Editorial Decision', action: { moduleName: 'editorial', operation: 'applyDecision' } },
        { code: 'end', type: 'END', name: 'End' }
    ],
    transitions: [
        { code: 'start_to_review', source: 'start', target: 'editorialReview' },
        { code: 'review_to_decision', source: 'editorialReview', target: 'approvalDecision' },
        { code: 'decision_approved_to_apply', source: 'approvalDecision', target: 'applyDecision', condition: { field: 'approved', equals: true } },
        { code: 'decision_rejected_to_apply', source: 'approvalDecision', target: 'applyDecision', default: true },
        { code: 'apply_to_end', source: 'applyDecision', target: 'end' }
    ]
};
const publicationGraph = {
    nodes: [
        { code: 'start', type: 'START', name: 'Start' },
        { code: 'publishApproved', type: 'ACTION', name: 'Publish approved Editorial revision', action: { moduleName: 'editorial', operation: 'publishApproved' } },
        { code: 'end', type: 'END', name: 'End' }
    ],
    transitions: [
        { code: 'start_to_publish', source: 'start', target: 'publishApproved' },
        { code: 'publish_to_end', source: 'publishApproved', target: 'end' }
    ]
};
module.exports = {
    record0: { code: 'editorialApproval', name: 'Editorial Approval', description: 'Default News and Blog business review.', status: 'PUBLISHED', category: 'content', ownerModule: 'editorial', currentVersion: 1, draftRevision: 1, graph: approvalGraph, validation: { valid: true }, publishedAt: new Date('2026-08-11T00:00:00.000Z') },
    record1: { code: 'editorialPublication', name: 'Editorial Publication', description: 'Cron-triggerable nPublish release orchestration.', status: 'PUBLISHED', category: 'content', ownerModule: 'editorial', currentVersion: 1, draftRevision: 1, graph: publicationGraph, validation: { valid: true }, publishedAt: new Date('2026-08-11T00:00:00.000Z') }
};
