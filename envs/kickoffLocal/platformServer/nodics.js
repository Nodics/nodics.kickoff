/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module envs/kickoffLocal/platformServer/nodics
 * @description Defines Kickoff project-owned module lifecycle hooks for this boundary.
 * @layer module
 * @owner platformServer
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */
module.exports = {
    /**
     * Initializes this Kickoff lifecycle boundary.
     *
     * @param {Object} options Optional lifecycle context.
     * @returns {Promise<boolean>} Resolves true when no boundary-specific startup behavior is required.
     */
    init: function (options) {
        return Promise.resolve(true);
    },

    /**
     * Runs post-initialization for this Kickoff lifecycle boundary.
     *
     * @param {Object} options Optional lifecycle context.
     * @returns {Promise<boolean>} Resolves true when no boundary-specific post-start behavior is required.
     */
    postInit: async function (options) {
        const copilot = CONFIG.get('copilot') || {};
        const knowledge = copilot.knowledge || {};
        const ingestion = knowledge.ingestion || {};
        if (ingestion.enabled !== true || ingestion.ingestOnStart !== true) return true;
        const definitions = knowledge.sourceRegistry && knowledge.sourceRegistry.definitions || [];
        const enabledSources = definitions.filter(source => source.enabled === true);
        const reports = [];
        for (const source of enabledSources) {
            reports.push(await SERVICE.DefaultCopilotKnowledgeRuntimeService.ingest({
                sourceCode: source.code,
                indexTenant: ingestion.indexTenant || 'default',
                indexVersion: source.version,
                locale: 'en',
                securityContext: {
                    channel: 'SYSTEM', actor: 'kickoff-local-knowledge-indexer', principalType: 'SERVICE',
                    permissions: ['copilot.knowledge.source.manage'], environment: 'kickoffLocal'
                },
                authData: { isSystem: true, serviceId: 'kickoff-local-knowledge-indexer', permissions: ['copilot.knowledge.source.manage'] }
            }));
        }
        if (NODICS.LOG) NODICS.LOG.info('Copilot knowledge ingestion completed', reports.map(report => ({
            sourceCode: report.sourceCode, state: report.state, filesAccepted: report.filesAccepted,
            filesRejected: report.filesRejected, chunksProjected: report.chunksProjected
        })));
        return true;
    }
};
