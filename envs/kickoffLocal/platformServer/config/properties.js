/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module envs/kickoffLocal/platformServer/config/properties
 * @description Defines Kickoff project-owned layered configuration for this boundary.
 * @layer config
 * @owner platformServer
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const path = require('node:path');
const kickoffRoot = process.env.NODICS_COPILOT_KICKOFF_ROOT || path.resolve(__dirname, '../../../..');
const workspaceRoot = path.dirname(kickoffRoot);
const nodicsAiRoot = process.env.NODICS_COPILOT_NODICS_AI_ROOT || path.join(workspaceRoot, 'nodics.ai');
const axisRoot = process.env.NODICS_COPILOT_AXIS_ROOT || path.join(workspaceRoot, 'nodics.exp', 'nodics.axis');
const copilotKnowledgeEnabled = process.env.NODICS_COPILOT_KNOWLEDGE_ENABLED !== 'false';
const nodicsAiVersion = process.env.NODICS_COPILOT_NODICS_AI_VERSION || 'kickoff-local-development';
const kickoffVersion = process.env.NODICS_COPILOT_KICKOFF_VERSION || 'kickoff-local-development';
const axisVersion = process.env.NODICS_COPILOT_AXIS_VERSION || 'kickoff-local-development';
const sourceCodeEnabled = process.env.NODICS_COPILOT_SOURCE_CODE_ENABLED !== 'false';
const frameworkSourceCodeEnabled = sourceCodeEnabled && process.env.NODICS_COPILOT_FRAMEWORK_SOURCE_CODE_ENABLED !== 'false';
const axisSourceCodeEnabled = sourceCodeEnabled && process.env.NODICS_COPILOT_AXIS_SOURCE_CODE_ENABLED !== 'false';
const kickoffSourceCodeEnabled = sourceCodeEnabled && process.env.NODICS_COPILOT_KICKOFF_SOURCE_CODE_ENABLED !== 'false';

module.exports = {
    httpHardening: { cors: { allowedOrigins: ['http://localhost:3100', 'http://127.0.0.1:3100',
        'http://localhost:3200', 'http://127.0.0.1:3200',
        'http://localhost:3300', 'http://127.0.0.1:3300',
        'http://localhost:5173', 'http://127.0.0.1:5173'] } },
    apiExposure: { categories: { dataExport: { enabled: true }, copilotApi: { enabled: true } } },
    copilot: {
        core: { enabled: true, customerProject: 'kickoff', environment: 'kickoffLocal' },
        api: { enabled: true },
        conversation: { storage: 'GENERATED_SERVICE', allowVolatileLocalStorage: false },
        workbench: {
            target: {
                productModule: 'product',
                pricingModule: 'pricing',
                connectionName: 'commerceStaged',
                targetAuthority: { runtimeRole: 'COMMERCE_STAGED' }
            }
        },
        knowledge: {
            ingestion: {
                enabled: copilotKnowledgeEnabled,
                ingestOnStart: process.env.NODICS_COPILOT_KNOWLEDGE_INGEST_ON_START !== 'false',
                indexTenant: 'default'
            },
            retrieval: { enabled: copilotKnowledgeEnabled, mode: 'LEXICAL' },
            repositoryRoots: {
                'nodics.ai': nodicsAiRoot,
                'nodics.kickoff': kickoffRoot,
                'nodics.axis': axisRoot
            },
            sourceRegistry: { definitions: [
                {
                    code: 'nodics-framework-readme', repository: 'nodics.ai', project: 'nodics', module: 'nodics.ai',
                    owner: 'nodics.ai', version: nodicsAiVersion || 'UNRESOLVED', sourceType: 'README', classification: 'INTERNAL',
                    paths: ['README.md', '**/README.md'], allowedChannels: ['AXIS_EMPLOYEE'],
                    requiredPermissions: ['copilot.knowledge.internal.read'], secretScanPolicy: 'REQUIRED',
                    enabled: Boolean(copilotKnowledgeEnabled && nodicsAiRoot && nodicsAiVersion)
                },
                {
                    code: 'nodics-framework-contracts', repository: 'nodics.ai', project: 'nodics', module: 'nodics.ai',
                    owner: 'nodics.ai', version: nodicsAiVersion || 'UNRESOLVED', sourceType: 'AGENTS_CONTRACT', classification: 'RESTRICTED',
                    paths: ['AGENTS.md', '**/AGENTS.md', '**/llm/contracts/*.md'], allowedChannels: ['AXIS_EMPLOYEE'],
                    requiredPermissions: ['copilot.knowledge.restricted.read'], secretScanPolicy: 'REQUIRED',
                    enabled: Boolean(copilotKnowledgeEnabled && nodicsAiRoot && nodicsAiVersion)
                },
                {
                    code: 'nodics-axis-readme', repository: 'nodics.axis', project: 'nodics', module: 'nodics.axis',
                    owner: 'nodics.axis', version: axisVersion || 'UNRESOLVED', sourceType: 'README', classification: 'INTERNAL',
                    paths: ['README.md', '**/README.md'], allowedChannels: ['AXIS_EMPLOYEE'],
                    requiredPermissions: ['copilot.knowledge.internal.read'], secretScanPolicy: 'REQUIRED',
                    enabled: Boolean(copilotKnowledgeEnabled && axisRoot && axisVersion)
                },
                {
                    code: 'nodics-axis-contracts', repository: 'nodics.axis', project: 'nodics', module: 'nodics.axis',
                    owner: 'nodics.axis', version: axisVersion || 'UNRESOLVED', sourceType: 'AGENTS_CONTRACT', classification: 'RESTRICTED',
                    paths: ['AGENTS.md', '**/AGENTS.md', '**/llm/contracts/*.md'], allowedChannels: ['AXIS_EMPLOYEE'],
                    requiredPermissions: ['copilot.knowledge.restricted.read'], secretScanPolicy: 'REQUIRED',
                    enabled: Boolean(copilotKnowledgeEnabled && axisRoot && axisVersion)
                },
                {
                    code: 'kickoff-project-readme', repository: 'nodics.kickoff', project: 'kickoff', module: 'nodics.kickoff',
                    owner: 'nodics.kickoff', version: kickoffVersion || 'UNRESOLVED', sourceType: 'CUSTOMER_PROJECT', classification: 'CUSTOMER',
                    paths: ['README.md', '**/README.md', 'docs/**/*.md'], allowedChannels: ['AXIS_EMPLOYEE'], tenantScopes: ['default'],
                    customerProjectScopes: ['kickoff'], requiredPermissions: ['copilot.knowledge.customer.read'],
                    secretScanPolicy: 'REQUIRED', enabled: Boolean(copilotKnowledgeEnabled && kickoffRoot && kickoffVersion)
                },
                {
                    code: 'kickoff-project-contracts', repository: 'nodics.kickoff', project: 'kickoff', module: 'nodics.kickoff',
                    owner: 'nodics.kickoff', version: kickoffVersion || 'UNRESOLVED', sourceType: 'CUSTOMER_PROJECT', classification: 'CUSTOMER',
                    paths: ['AGENTS.md', '**/AGENTS.md', '**/llm/contracts/*.md'], allowedChannels: ['AXIS_EMPLOYEE'], tenantScopes: ['default'],
                    customerProjectScopes: ['kickoff'], requiredPermissions: ['copilot.knowledge.customer.read'],
                    secretScanPolicy: 'REQUIRED', enabled: Boolean(copilotKnowledgeEnabled && kickoffRoot && kickoffVersion)
                },
                {
                    code: 'nodics-copilot-source', repository: 'nodics.ai', project: 'nodics', module: 'nodics.copilot',
                    owner: 'nodics.copilot', version: nodicsAiVersion || 'UNRESOLVED', sourceType: 'SOURCE_CODE', classification: 'RESTRICTED',
                    paths: ['nodics.copilot/**/*.js'], excludedPaths: ['nodics.copilot/**/test', 'nodics.copilot/**/llm/generated'],
                    allowedExtensions: ['.js'], limits: { maximumFiles: 400, maximumFileBytes: 524288, maximumSourceBytes: 8388608 },
                    requiredPermissions: ['copilot.knowledge.restricted.read'], secretScanPolicy: 'REQUIRED',
                    allowedChannels: ['AXIS_EMPLOYEE'], enabled: Boolean(copilotKnowledgeEnabled && frameworkSourceCodeEnabled && nodicsAiRoot && nodicsAiVersion)
                },
                {
                    code: 'nodics-discovery-source', repository: 'nodics.ai', project: 'nodics', module: 'nodics.discovery',
                    owner: 'nodics.discovery', version: nodicsAiVersion || 'UNRESOLVED', sourceType: 'SOURCE_CODE', classification: 'RESTRICTED',
                    paths: ['nodics.discovery/**/*.js'], excludedPaths: ['nodics.discovery/**/test', 'nodics.discovery/**/llm/generated'],
                    allowedExtensions: ['.js'], limits: { maximumFiles: 400, maximumFileBytes: 524288, maximumSourceBytes: 8388608 },
                    requiredPermissions: ['copilot.knowledge.restricted.read'], secretScanPolicy: 'REQUIRED',
                    allowedChannels: ['AXIS_EMPLOYEE'], enabled: Boolean(copilotKnowledgeEnabled && frameworkSourceCodeEnabled && nodicsAiRoot && nodicsAiVersion)
                },
                {
                    code: 'nodics-axis-assistant-source', repository: 'nodics.axis', project: 'nodics', module: 'nodics.axis',
                    owner: 'nodics.axis', version: axisVersion || 'UNRESOLVED', sourceType: 'SOURCE_CODE', classification: 'RESTRICTED',
                    paths: ['src/assistant/**/*.ts', 'src/assistant/**/*.tsx', 'src/cms/renderers/components/assistant/**/*.tsx'],
                    excludedPaths: ['src/**/__tests__', 'src/**/*.test.ts', 'src/**/*.test.tsx'], allowedExtensions: ['.ts', '.tsx'],
                    limits: { maximumFiles: 200, maximumFileBytes: 524288, maximumSourceBytes: 4194304 },
                    requiredPermissions: ['copilot.knowledge.restricted.read'], secretScanPolicy: 'REQUIRED',
                    allowedChannels: ['AXIS_EMPLOYEE'], enabled: Boolean(copilotKnowledgeEnabled && axisSourceCodeEnabled && axisRoot && axisVersion)
                },
                {
                    code: 'kickoff-copilot-composition-source', repository: 'nodics.kickoff', project: 'kickoff', module: 'platformServer',
                    owner: 'nodics.kickoff', version: kickoffVersion || 'UNRESOLVED', sourceType: 'SOURCE_CODE', classification: 'RESTRICTED',
                    paths: ['envs/kickoffLocal/platformServer/**/*.js'], excludedPaths: ['envs/kickoffLocal/platformServer/llm/generated'],
                    allowedExtensions: ['.js'], limits: { maximumFiles: 100, maximumFileBytes: 524288, maximumSourceBytes: 2097152 },
                    tenantScopes: ['default'], customerProjectScopes: ['kickoff'],
                    requiredPermissions: ['copilot.knowledge.restricted.read'], secretScanPolicy: 'REQUIRED',
                    allowedChannels: ['AXIS_EMPLOYEE'], enabled: Boolean(copilotKnowledgeEnabled && kickoffSourceCodeEnabled && kickoffRoot && kickoffVersion)
                }
            ] }
        },
        providers: {
            enabled: true,
            default: { adapter: 'ollama', profile: 'conversation' },
            adapters: { ollama: { enabled: true, model: { name: 'qwen2.5-coder:7b' } } }
        }
    },
    backofficeRegistration: {
        connectionName: 'default'
    },
    search: {
        discoveryProjection: { options: { enabled: true, fallback: false, engine: 'elastic' } }
    },
    backofficeApplicationInitialization: {
        projectCode: process.env.NODICS_PROJECT_CODE || require('../../../../package.json').name,
        projectRoot: process.cwd(),
        profiles: {
            nexus: {
                code: 'nexus',
                type: 'WEBSITE_BUNDLE',
                owner: 'nexus.web',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexus',
                presentation: {
                    title: 'Nexus Corporate',
                    kind: 'PROJECT',
                    category: 'accelerator',
                    order: 100,
                    summary: 'Corporate website accelerator published from the latest qualified WCMS Staged baseline to Online.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process', 'Engagement'],
                    requiredFunctionalModules: [
                        { code: 'nodics.communication', label: 'Engagement capability' }
                    ],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'ACTIVATION', sampleDataTrigger: 'USER' }
                },
                dataPackages: [
                    { code: 'nexus.web:nexusCorporateSite', kind: 'Corporate site content', required: true, trigger: 'ACTIVATION',
                        dataType: 'sample', targetServer: 'wcmsStaged', targetRuntimeRole: 'WCMS_STAGED' },
                    { code: 'nexus.web:nexusCorporateMediaReferences', kind: 'Corporate media references', required: true, trigger: 'ACTIVATION',
                        dataType: 'sample', targetServer: 'wcmsStaged', targetRuntimeRole: 'WCMS_STAGED' },
                    { code: 'nexus.web:nexusEditorialSource', kind: 'News and blog source', required: true, trigger: 'ACTIVATION',
                        dataType: 'sample', targetServer: 'wcmsStaged', targetRuntimeRole: 'WCMS_STAGED' },
                    { code: 'nexus.web:nexusCorporateMediaAssets', type: 'MEDIA_ASSET_MANIFEST', kind: 'Corporate media files', required: true,
                        trigger: 'ACTIVATION', targetServer: 'wcmsStaged', targetRuntimeRole: 'WCMS_STAGED',
                        manifestPath: 'modules/nexus.web/data/sample-v001/content/assets/nexus-cms-media/assetManifest.js',
                        businessPurpose: 'NEXUS_CORPORATE_CONTENT' },
                    { code: 'nexus.web:nexusEngagementOperational', kind: 'Contact and testimonial experience', required: true, trigger: 'ACTIVATION',
                        dataType: 'sample', targetServer: 'engagementServer', targetRuntimeRole: 'ENGAGEMENT' }
                ],
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            },
            nexusupdate: {
                code: 'nexusupdate',
                type: 'WEBSITE_BUNDLE_UPDATE',
                owner: 'nexus.web',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexusupdate',
                presentation: { visible: false },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            },
            nexusecosystemrepair: {
                code: 'nexusecosystemrepair',
                type: 'WEBSITE_BUNDLE_UPDATE',
                owner: 'nexus.web',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexusecosystemrepair',
                presentation: { visible: false },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            },
            nexusincremental: {
                code: 'nexusincremental',
                type: 'WEBSITE_BUNDLE_UPDATE',
                owner: 'nexus.web',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexusincremental',
                presentation: { visible: false },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            },
            nexusprofessionalcopy: {
                code: 'nexusprofessionalcopy',
                type: 'WEBSITE_BUNDLE_UPDATE',
                owner: 'nexus.web',
                applicationCode: 'nexus',
                siteCode: 'nexusCorporateSite',
                baselineCode: 'nexusprofessionalcopy',
                presentation: { visible: false },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            },
            agoraapparel: {
                code: 'agoraapparel',
                type: 'STOREFRONT_DOMAIN_BUNDLE',
                owner: 'agora.apparel',
                applicationCode: 'agora',
                siteCode: 'agoraApparelSite',
                baselineCode: 'agoraapparel',
                presentation: {
                    title: 'Agora Apparel',
                    kind: 'PROJECT',
                    category: 'accelerator',
                    order: 210,
                    summary: 'Apparel storefront accelerator as a complete business-facing domain bundle.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process', 'Commerce', 'Discovery'],
                    requiredFunctionalModules: [
                        { code: 'nodics.commerce', label: 'Commerce capability' },
                        { code: 'nodics.discovery', label: 'Discovery capability' }
                    ],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'USER', sampleDataTrigger: 'USER' }
                },
                dataPackages: [
                    { code: 'agora.apparel:agoraApparelContentCatalog', kind: 'Storefront content', required: true, trigger: 'USER',
                        dataType: 'sample', targetServer: 'wcmsStaged', targetRuntimeRole: 'WCMS_STAGED' },
                    { code: 'agora.apparel:agoraApparelMediaAssets', type: 'MEDIA_ASSET_MANIFEST', kind: 'Storefront media files', required: true,
                        trigger: 'USER', targetServer: 'wcmsStaged', targetRuntimeRole: 'WCMS_STAGED',
                        manifestPath: 'modules/agora.apparel/data/sample-v001/content/assets/agora-cms-media/assetManifest.js',
                        businessPurpose: 'AGORA_STOREFRONT_CONTENT' },
                    { code: 'agora.apparel:agoraApparelCommerceCatalog', kind: 'Commerce catalog', required: true, trigger: 'USER',
                        dataType: 'sample', targetServer: 'commerceStaged', targetRuntimeRole: 'COMMERCE_STAGED' }
                ],
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            },
            agoraelectronics: {
                code: 'agoraelectronics',
                type: 'STOREFRONT_DOMAIN_BUNDLE',
                owner: 'agora.electronics',
                applicationCode: 'agora',
                siteCode: 'agoraElectronicsSite',
                baselineCode: 'agoraelectronics',
                presentation: {
                    title: 'Agora Electronics',
                    kind: 'PROJECT',
                    category: 'accelerator',
                    order: 220,
                    summary: 'Electronics storefront accelerator as a complete business-facing domain bundle.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process', 'Commerce', 'Discovery'],
                    requiredFunctionalModules: [
                        { code: 'nodics.commerce', label: 'Commerce capability' },
                        { code: 'nodics.discovery', label: 'Discovery capability' }
                    ],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'USER', sampleDataTrigger: 'USER' }
                },
                dataPackages: [
                    { code: 'agora.electronics:agoraElectronicsContentCatalog', kind: 'Storefront content', required: true, trigger: 'USER',
                        dataType: 'sample', targetServer: 'wcmsStaged', targetRuntimeRole: 'WCMS_STAGED' },
                    { code: 'agora.electronics:agoraElectronicsMediaAssets', type: 'MEDIA_ASSET_MANIFEST', kind: 'Storefront media files', required: true,
                        trigger: 'USER', targetServer: 'wcmsStaged', targetRuntimeRole: 'WCMS_STAGED',
                        manifestPath: 'modules/agora.electronics/data/sample-v001/content/assets/agora-cms-media/assetManifest.js',
                        businessPurpose: 'AGORA_STOREFRONT_CONTENT' },
                    { code: 'agora.electronics:agoraElectronicsCommerceCatalog', kind: 'Commerce catalog', required: true, trigger: 'USER',
                        dataType: 'sample', targetServer: 'commerceStaged', targetRuntimeRole: 'COMMERCE_STAGED' }
                ],
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            },
            agoratelco: {
                code: 'agoratelco',
                type: 'STOREFRONT_DOMAIN_BUNDLE',
                owner: 'agora.telco',
                applicationCode: 'agora',
                siteCode: 'agoraTelcoSite',
                baselineCode: 'agoratelco',
                presentation: {
                    title: 'Agora Telco',
                    kind: 'PROJECT',
                    category: 'accelerator',
                    order: 230,
                    summary: 'Telco storefront accelerator as a complete business-facing domain bundle.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process', 'Commerce', 'Discovery'],
                    requiredFunctionalModules: [
                        { code: 'nodics.commerce', label: 'Commerce capability' },
                        { code: 'nodics.discovery', label: 'Discovery capability' }
                    ],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'USER', sampleDataTrigger: 'USER' }
                },
                dataPackages: [
                    { code: 'agora.telco:agoraTelcoContentCatalog', kind: 'Storefront content', required: true, trigger: 'USER',
                        dataType: 'sample', targetServer: 'wcmsStaged', targetRuntimeRole: 'WCMS_STAGED' },
                    { code: 'agora.telco:agoraTelcoMediaAssets', type: 'MEDIA_ASSET_MANIFEST', kind: 'Storefront media files', required: true,
                        trigger: 'USER', targetServer: 'wcmsStaged', targetRuntimeRole: 'WCMS_STAGED',
                        manifestPath: 'modules/agora.telco/data/sample-v001/content/assets/agora-cms-media/assetManifest.js',
                        businessPurpose: 'AGORA_STOREFRONT_CONTENT' },
                    { code: 'agora.telco:agoraTelcoCommerceCatalog', kind: 'Commerce catalog', required: true, trigger: 'USER',
                        dataType: 'sample', targetServer: 'commerceStaged', targetRuntimeRole: 'COMMERCE_STAGED' }
                ],
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            },
            frameworkdocs: {
                code: 'frameworkdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'nodics.docs',
                applicationCode: 'axis', siteCode: 'nodicsDocumentationSite', baselineCode: 'frameworkdocs', contentPackCode: 'nodicsDocumentation',
                presentation: {
                    title: 'Framework Documentation',
                    kind: 'DOCUMENTATION',
                    category: 'documentation',
                    order: 300,
                    summary: 'Framework documentation content pack and Online delivery profile.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process'],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'USER', sampleDataTrigger: 'USER' }
                },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            },
            axisdocs: {
                code: 'axisdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'axis',
                applicationCode: 'axis', siteCode: 'axisDocumentationSite', baselineCode: 'axisdocs', contentPackCode: 'axisDocumentation',
                presentation: {
                    title: 'Nodics Axis Documentation',
                    kind: 'DOCUMENTATION',
                    category: 'documentation',
                    order: 400,
                    summary: 'Axis product documentation content pack and Online delivery profile.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process'],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'USER', sampleDataTrigger: 'USER' }
                },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            },
            kickoffdocs: {
                code: 'kickoffdocs', type: 'DOCUMENTATION_BUNDLE', owner: 'nodics.kickoff',
                applicationCode: 'axis', siteCode: 'kickoffDocumentationSite', baselineCode: 'kickoffdocs', contentPackCode: 'kickoffDocumentation',
                presentation: {
                    title: 'Nodics Kickoff Documentation',
                    kind: 'DOCUMENTATION',
                    category: 'documentation',
                    order: 500,
                    summary: 'Reference-project documentation content pack and Online delivery profile.',
                    requiredServers: ['Platform', 'WCMS Staged', 'WCMS Online', 'Process'],
                    activationPolicy: { approvalRequiredForOnline: true, requiredDataTrigger: 'USER', sampleDataTrigger: 'USER' }
                },
                target: { moduleName: 'cms', connectionName: 'wcmsStaged', connectionType: 'abstract', timeoutMs: 120000, maxAttempts: 1 }
            }
        }
    },
    backofficeFunctionalModuleActivationData: {
        modules: {
            'nodics.wcms': {
                dataPackages: [
                    { code: 'wcms:runtime-defaults', classification: 'runtime-default', owner: 'nodics.wcms', required: true, trigger: 'ACTIVATION', targetModule: 'cms', targetServer: 'wcmsStaged', targetDatabase: 'kickoffLocalWcmsStaged', operation: 'IMPORT' },
                    { code: 'wcms:sample-content', classification: 'sample', owner: 'nodics.wcms', required: false, trigger: 'USER', targetModule: 'cms', targetServer: 'wcmsStaged', targetDatabase: 'kickoffLocalWcmsStaged', operation: 'IMPORT_SAMPLE' }
                ]
            },
            'nodics.commerce': {
                dataPackages: [
                    { code: 'baseCommerce:core-reference', classification: 'core', owner: 'nodics.commerce', required: true, trigger: 'ACTIVATION', targetModule: 'commerce', targetServer: 'commerceServer', targetDatabase: 'kickoffLocalCommerce', operation: 'IMPORT' },
                    { code: 'commerce:sample-catalog', classification: 'sample', owner: 'nodics.commerce', required: false, trigger: 'USER', targetModule: 'commerce', targetServer: 'commerceServer', targetDatabase: 'kickoffLocalCommerce', operation: 'IMPORT_SAMPLE' }
                ]
            },
            'nodics.communication': {
                dataPackages: [
                    { code: 'commsCore:runtime-defaults', classification: 'runtime-default', owner: 'nodics.communication', required: true, trigger: 'ACTIVATION', targetModule: 'commsCore', targetServer: 'engagementServer', targetDatabase: 'kickoffLocalEngagement', operation: 'IMPORT' },
                    { code: 'commsCore:sample-templates', classification: 'sample', owner: 'nodics.communication', required: false, trigger: 'USER', targetModule: 'commsCore', targetServer: 'engagementServer', targetDatabase: 'kickoffLocalEngagement', operation: 'IMPORT_SAMPLE' }
                ]
            },
            'nodics.loyalty': {
                dataPackages: [
                    { code: 'loyaltyCore:core-enterprise-reference', classification: 'core', owner: 'nodics.loyalty', required: true, trigger: 'ACTIVATION', targetModule: 'profile', targetServer: 'platformServer', targetDatabase: 'kickoffLocalPlatform', operation: 'IMPORT' }
                ]
            },
            'nodics.waste': {
                dependencies: ['nodics.location'],
                dataPackages: [
                    { code: 'wasteCore:core-reference', classification: 'core', owner: 'nodics.waste', required: true, trigger: 'ACTIVATION', targetModule: 'profile', targetServer: 'platformServer', targetDatabase: 'kickoffLocalPlatform', operation: 'IMPORT' },
                    { code: 'wasteCollection:sample-profile-addresses', classification: 'sample', owner: 'nodics.waste', required: false, trigger: 'USER', targetModule: 'profile', targetServer: 'platformServer', targetDatabase: 'kickoffLocalPlatform', operation: 'IMPORT_SAMPLE' }
                ]
            },
            'nodics.accelerators': {
                dependencies: ['nodics.commerce', 'nodics.discovery'],
                dataPackages: []
            }
        }
    },
    backofficeLocalReset: {
        enabled: true,
        environmentAllowlist: ['kickoffLocal'],
        providers: [
            { code: 'wcmsStaged', moduleName: 'system', connectionName: 'wcmsStaged',
                targetAuthority: { server: 'wcmsStagedServer', runtimeRole: { code: 'WCMS_STAGED', publication: 'STAGED' } } },
            { code: 'wcmsOnline', moduleName: 'system', connectionName: 'wcmsOnline',
                targetAuthority: { server: 'wcmsOnlineServer', runtimeRole: { code: 'WCMS_ONLINE', publication: 'ONLINE' } } },
            { code: 'process', moduleName: 'system', connectionName: 'process',
                targetAuthority: { server: 'processServer', runtimeRole: { code: 'PROCESS', publication: 'OPERATIONAL' } } },
            { code: 'platform', moduleName: 'system', connectionName: 'default',
                targetAuthority: { server: 'platformServer', runtimeRole: { code: 'PLATFORM', publication: 'OPERATIONAL' } } }
        ]
    },
    localResetProvider: {
        enabled: true, environmentAllowlist: ['kickoffLocal'], allowMissingModelServices: true,
        serviceNames: ['DefaultAddressService', 'DefaultBackofficeAxisPolicyService', 'DefaultBackofficeContractActivationService',
            'DefaultBackofficeContractSnapshotService', 'DefaultBackofficeFunctionalModuleRegistrationService', 'DefaultCatalogService',
            'DefaultConfigurationService', 'DefaultContactService', 'DefaultCustomerService', 'DefaultDataInstallationService',
            'DefaultEmsFailedMessagesService', 'DefaultEnterpriseService', 'DefaultEventListenerService', 'DefaultIdentityMigrationAuditService',
            'DefaultImportDefinitionService', 'DefaultImportRunService', 'DefaultIndexService', 'DefaultIndexerLogService', 'DefaultIndexerService',
            'DefaultInterceptorService', 'DefaultLocalizationKeyService', 'DefaultLocalizationOnlinePointerService', 'DefaultLocalizationReleaseService',
            'DefaultLocalizationValueService', 'DefaultPrincipalScopeAssignmentService', 'DefaultSearchService', 'DefaultTenantService',
            'DefaultUserStateService', 'DefaultValidatorService', 'DefaultWorkflow2SchemaService', 'DefaultUserGroupService',
            'DefaultPasswordService', 'DefaultTokenService', 'DefaultEmployeeService']
    },
    activeModules: {
        groups: ['nodics.discovery', 'nodics.copilot'],
        modules: [
            'search',
            'elastic',
            'nodics.kickoff',
            'kickoffCore',
            'kickoffApi',
            'kickoffInt',
            'axis',
            'ollamaProvider',
            'kickoffLocal',
            'platformServer'
        ]
    },
    runtimeRole: { code: 'PLATFORM', publication: 'OPERATIONAL' },
    database: {
        default: { mongodb: { master: { databaseName: 'kickoffLocalPlatform' } } },
        backoffice: { mongodb: { master: { databaseName: 'kickoffLocalPlatform' } } },
        localizationCore: { mongodb: { master: { databaseName: 'kickoffLocalPlatform' } } },
        profile: { mongodb: { master: { databaseName: 'kickoffLocalPlatform' } } }
    },
    data: { dataReleases: { lifecycleMetadataRequired: true, destinationEnforced: true, environmentClass: 'LOCAL',
        allowedDestinationRoles: ['PLATFORM'],
        contributions: [
            { moduleName: 'wasteCore', sections: ['core-reference'] },
            { moduleName: 'wasteCollection', sections: ['sample-profile-addresses'] },
            { moduleName: 'loyaltyCore', sections: ['core-enterprise-reference'] }
        ],
        initializationProfiles: { localPlatformFoundation: { enabled: true,
            label: 'Local Platform foundation',
            description: 'Install required Platform initialization and core releases for local BackOffice identity, catalogue, profile, authorization, and localization services.',
            completionMessage: 'The Local Platform foundation is ready. Operators can sign in, review module lifecycle, and manage governed platform data.',
            steps: [{ dataType: 'init' }, { dataType: 'core' }] } } } },
    profileBrowserSession: {
        enabled: true,
        refreshCookieName: 'nodics_axis_refresh',
        csrfCookieName: 'nodics_axis_csrf',
        cookiePath: '/nodics/profile/v0/employee/browser',
        csrfCookiePath: '/',
        sameSite: 'Lax',
        secure: false,
        maximumAgeSeconds: 86400
    },
    servers: {
        default: {
            endpoint: {
                httpHost: '127.0.0.1',
                httpPort: 4300,
                httpsHost: '127.0.0.1',
                httpsPort: 4301
            },
            abstractEndpoint: {
                httpHost: 'localhost',
                httpPort: 4300,
                httpsHost: 'localhost',
                httpsPort: 4301
            }
        },
        wcmsStaged: {
            endpoint: { httpHost: '127.0.0.1', httpPort: 4312, httpsHost: '127.0.0.1', httpsPort: 4313 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4312, httpsHost: 'localhost', httpsPort: 4313 }
        },
        wcmsOnline: { endpoint: { httpHost: '127.0.0.1', httpPort: 4314, httpsHost: '127.0.0.1', httpsPort: 4315 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4314, httpsHost: 'localhost', httpsPort: 4315 } },
        commerceStaged: { endpoint: { httpHost: '127.0.0.1', httpPort: 4352, httpsHost: '127.0.0.1', httpsPort: 4353 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4352, httpsHost: 'localhost', httpsPort: 4353 } },
        engagementServer: { endpoint: { httpHost: '127.0.0.1', httpPort: 4340, httpsHost: '127.0.0.1', httpsPort: 4341 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4340, httpsHost: 'localhost', httpsPort: 4341 } },
        loyalty: { endpoint: { httpHost: '127.0.0.1', httpPort: 4360, httpsHost: '127.0.0.1', httpsPort: 4361 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4360, httpsHost: 'localhost', httpsPort: 4361 } },
        loyaltyServer: { endpoint: { httpHost: '127.0.0.1', httpPort: 4360, httpsHost: '127.0.0.1', httpsPort: 4361 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4360, httpsHost: 'localhost', httpsPort: 4361 } },
        process: { endpoint: { httpHost: '127.0.0.1', httpPort: 4330, httpsHost: '127.0.0.1', httpsPort: 4331 },
            abstractEndpoint: { httpHost: 'localhost', httpPort: 4330, httpsHost: 'localhost', httpsPort: 4331 } }
    }
};
