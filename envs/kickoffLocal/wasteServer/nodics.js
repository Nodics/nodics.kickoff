/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffLocal/wasteServer @description Declares the reference customer Waste Management server lifecycle. @layer environment-server @owner nodics.kickoff @override Customer projects own their topology. */
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
        const knowledge = (CONFIG.get('copilot') || {}).knowledge || {};
        if (knowledge.ingestion?.enabled !== true) return true;
        for (const source of (knowledge.sourceRegistry?.definitions || []).filter(source => source.enabled && source.project === 'circa.ewaste')) {
            const report = await SERVICE.DefaultCopilotKnowledgeRuntimeService.ingest({sourceCode:source.code,indexTenant:knowledge.ingestion.indexTenant || 'default',indexVersion:source.version,locale:'en',securityContext:{channel:'SYSTEM',actor:'circa-customer-knowledge-indexer',principalType:'SERVICE',permissions:['copilot.knowledge.source.manage'],environment:'kickoffLocal'},authData:{isSystem:true,serviceId:'circa-customer-knowledge-indexer',permissions:['copilot.knowledge.source.manage']}});
            if (report.filesRejected) throw new Error('CIRCA_CUSTOMER_KNOWLEDGE_REJECTED');
        }
        return true;
    }
};
