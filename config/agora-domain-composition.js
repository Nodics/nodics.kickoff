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
        apparel: Object.freeze({ group: 'apparel', pack: 'agoraApparelData' }),
        electronics: Object.freeze({ group: 'electronics', pack: 'agoraElectronicsData' }),
        telco: Object.freeze({ group: 'telco', pack: 'agoraTelcoData' })
    }),

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
            sharedModules: Object.freeze(domains.length > 1 ? ['multiDomainCommerce'] : []),
            projectPacks: Object.freeze(domains.map(domain => supported[domain].pack))
        });
    }
};

module.exports = Object.freeze(agoraDomainComposition);
