/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module nodics.kickoff/modules/kickoffInt/src/service/defaultKickoffEditorialProcessAdapterService
 * @description Delegates Kickoff-local Process ACTION nodes to the WCMS-owned Editorial HTTP APIs without moving Editorial business logic into Process.
 * @layer service
 * @owner kickoffInt
 * @override Customer projects may replace this adapter with their own governed cross-runtime transport.
 */
module.exports = {
    /**
     * Resolves configured WCMS base URL for the local Editorial process adapter.
     *
     * @returns {string} WCMS base URL.
     */
    wcmsBaseUrl: function () {
        let configured = (CONFIG.get('editorialProcessAdapter') || {}).wcmsBaseUrl;
        return String(configured || 'http://127.0.0.1:4310').replace(/\/+$/, '');
    },

    /**
     * Builds a minimal header set that preserves caller authorization and tenant
     * context when Process delegates back to the WCMS-owned Editorial API.
     *
     * @param {Object} request Nodics request context.
     * @returns {Object} HTTP headers.
     */
    delegatedHeaders: function (request) {
        let source = request && request.httpRequest && request.httpRequest.headers || {};
        let headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
        if (source.authorization) headers.Authorization = source.authorization;
        if (source.Authorization) headers.Authorization = source.Authorization;
        if (source.tenant) headers.tenant = source.tenant;
        if (request && request.tenant && !headers.tenant) headers.tenant = request.tenant;
        if (source['x-enterprise-code']) headers['x-enterprise-code'] = source['x-enterprise-code'];
        if (source['x-correlation-id']) headers['x-correlation-id'] = source['x-correlation-id'];
        return headers;
    },

    /**
     * Calls one WCMS-owned Editorial endpoint and returns its bounded payload.
     *
     * @param {Object} request Nodics request context.
     * @param {string} path Editorial path beneath the WCMS server.
     * @param {Object} body Request body.
     * @param {string} method HTTP method.
     * @returns {Promise<Object>} Parsed response body.
     */
    callEditorial: async function (request, path, body, method) {
        let response = await fetch(this.wcmsBaseUrl() + path, {
            method: method || 'POST',
            headers: this.delegatedHeaders(request),
            body: body === undefined ? undefined : JSON.stringify(body)
        });
        let text = await response.text();
        let parsed = {};
        if (text) {
            try {
                parsed = JSON.parse(text);
            } catch (error) {
                throw new CLASSES.NodicsError('ERR_SYS_00000', 'Editorial adapter received non-JSON response from WCMS');
            }
        }
        if (!response.ok) {
            throw new CLASSES.NodicsError('ERR_SYS_00000', 'Editorial adapter WCMS call failed: HTTP ' + response.status);
        }
        return parsed.result || parsed.data || parsed;
    },

    /**
     * Applies an Editorial review decision by patching the WCMS-owned article
     * record through its generated API after Process has completed the task.
     *
     * @param {Object} request Nodics request context.
     * @param {Object} execution Process action execution context.
     * @returns {Promise<Object>} Bounded adapter result.
     */
    applyDecision: async function (request, execution) {
        let context = execution && execution.context || {};
        let body = request && request.httpRequest && request.httpRequest.body || {};
        let decision = body.decision || {};
        let approved = decision.action === 'APPROVE' || decision.approved === true;
        let status = approved ? 'APPROVED' : 'CHANGES_REQUESTED';
        if (!context.articleCode || !context.articleRevision) {
            throw new CLASSES.NodicsError('ERR_SYS_00000', 'Editorial adapter context is missing article revision identity');
        }
        let result = await this.callEditorial(request, '/nodics/editorial/v0/editorialarticle', {
            options: { returnModified: true },
            query: { code: context.articleCode, revision: Number(context.articleRevision) },
            model: { status: status, workflowInstanceCode: execution.instance && execution.instance.code }
        }, 'PATCH');
        return { status: 'COMPLETED', adapter: 'editorial.applyDecision', output: { articleCode: context.articleCode, articleRevision: Number(context.articleRevision), editorialStatus: status, result: result } };
    },

    /**
     * Delegates an approved Editorial publication to the WCMS-owned Editorial
     * authoring route, which in turn invokes nPublish.
     *
     * @param {Object} request Nodics request context.
     * @param {Object} execution Process action execution context.
     * @returns {Promise<Object>} Bounded adapter result.
     */
    publishApproved: async function (request, execution) {
        let context = execution && execution.context || {};
        if (!context.articleCode || !context.articleRevision) {
            throw new CLASSES.NodicsError('ERR_SYS_00000', 'Editorial adapter context is missing article revision identity');
        }
        let result = await this.callEditorial(request, '/nodics/editorial/v0/authoring/articles/' + encodeURIComponent(context.articleCode) + '/publish', {
            article: {
                code: context.articleCode,
                revision: Number(context.articleRevision),
                status: 'APPROVED',
                workflowInstanceCode: execution.instance && execution.instance.code
            },
            publicationCode: context.publicationCode
        }, 'POST');
        return { status: 'COMPLETED', adapter: 'editorial.publishApproved', output: { articleCode: context.articleCode, articleRevision: Number(context.articleRevision), publication: result } };
    }
};
