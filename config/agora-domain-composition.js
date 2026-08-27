/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module kickoff/config/agora-domain-composition
 * @description Resolves customer-selected Agora solution composition without owning domain behavior.
 * @layer config
 * @owner kickoff
 * @override Customer projects may replace this project-level composition policy
 * while preserving framework domain module ownership.
 */
const agoraDomainComposition = {
    supported: Object.freeze({
        apparel: Object.freeze({ group: 'apparel', pack: 'agora.apparel' }),
        electronics: Object.freeze({ group: 'electronics', pack: 'agora.electronics' }),
        telco: Object.freeze({ group: 'telco', pack: 'agora.telco' })
    }),

    enrichmentContributors: Object.freeze({
        apparel: Object.freeze({ serviceName: 'DefaultApparelProductSearchEnrichmentService', required: true }),
        electronics: Object.freeze({ serviceName: 'DefaultElectronicsProductSearchEnrichmentService', required: true }),
        telco: Object.freeze({ serviceName: 'DefaultTelcoProductSearchEnrichmentService', required: true })
    }),

    /**
     * Resolves domain contributors that extend Commerce Product projection.
     *
     * @param {Array<string>} domains Selected customer domains.
     * @returns {Object} Product search enrichment contributors.
     */
    contributors: function (domains) {
        const selected = new Set(domains || []);
        if (selected.has('telco')) selected.add('electronics');
        return Object.freeze(Object.fromEntries([...selected].sort().map(domain => [domain, this.enrichmentContributors[domain]]).filter(([, contributor]) => contributor)));
    },

    /**
     * Resolves the selected Agora domain composition.
     *
     * @param {string} value Comma-separated domain list, `all`, `commerce`, or `none`.
     * @returns {Object} Frozen domain composition descriptor.
     */
    resolve: function (value = process.env.NODICS_AGORA_DOMAINS || 'all') {
        const supported = this.supported;
        const requested = value === 'all' ? Object.keys(supported) : value === 'commerce' || value === 'none' ? [] : value.split(',').map(item => item.trim()).filter(Boolean);
        const domains = [...new Set(requested)];
        const unknown = domains.filter(domain => !supported[domain]);
        if (unknown.length) throw new Error(`Unsupported NODICS_AGORA_DOMAINS: ${unknown.join(',')}`);
        return Object.freeze({
            domains: Object.freeze(domains),
            frameworkGroups: Object.freeze(domains.map(domain => supported[domain].group)),
            sharedModules: Object.freeze(domains.length > 1 ? ['domainCommerceCore'] : []),
            projectPacks: Object.freeze(domains.map(domain => supported[domain].pack)),
            productSearchContributors: this.contributors(domains)
        });
    }
};

module.exports = Object.freeze(agoraDomainComposition);
