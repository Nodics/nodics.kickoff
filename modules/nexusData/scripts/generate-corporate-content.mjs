/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const moduleRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const checkOnly = process.argv.includes('--check');
const source = async (path) => JSON.parse(await readFile(resolve(moduleRoot, path), 'utf8'));
const hash = (value) => createHash('sha256').update(value).digest('hex');
const header = `/*\n *  Copyright (c) 2026 Nodics All rights reserved.\n *\n *  This source code is licensed under the license found in the\n *  LICENSE file in the root directory of this source tree.\n */\n\n'use strict';\n\n`;
const records = (description, values) => `${header}/** @description ${description} */\nmodule.exports = ${JSON.stringify(Object.fromEntries(values.map((value, index) => [`record${index}`, value])), null, 2)};\n`;

const catalog = await source('data/core/source/catalog/corporate-catalog.json');
const siteSource = await source('data/core/source/site/corporate-site.json');
const content = await source('data/core/source/content/corporate-content.json');
const site = { code: siteSource.code, name: siteSource.name, catalog: siteSource.catalog, active: siteSource.active };
const components = content.components.map((component) => ({
    ...component,
    active: component.active !== false
}));
const pages = content.pages.map((page) => ({
    code: page.code,
    name: page.name,
    active: true,
    cmsSite: [site.code],
    typeCode: page.typeCode,
    template: content.template.code,
    ...(page.renderer ? { renderer: page.renderer } : {}),
    cmsComponents: page.components.map((target, index) => ({
        ...(page.associationCodes && page.associationCodes[target] ? { code: page.associationCodes[target] } : {}),
        target,
        slot: 'main',
        index,
        active: true
    }))
}));
const routes = content.routes.map((route) => ({
    ...route,
    site: site.code,
    locale: 'en',
    channel: 'web',
    routeType: 'PAGE',
    deliveryState: 'ONLINE',
    accessMode: 'PUBLIC',
    active: true
}));
const navigation = content.navigation.map((item) => ({
    code: item.code,
    site: site.code,
    name: item.title,
    title: item.title,
    nodeType: 'ROUTE',
    targetRoute: item.route,
    position: item.position,
    status: 'ACTIVE',
    locale: 'en',
    channel: 'web',
    active: true
}));

const outputs = new Map([
    ['data/core/data/corporate/nexusCatalogData.js', records('Nexus corporate content catalog.', [catalog])],
    ['data/core/data/corporate/nexusSiteData.js', records('Nexus corporate CMS Site.', [site])],
    ['data/core/data/corporate/nexusTypeCodeData.js', records('Nexus corporate page and component type contracts.', content.types)],
    ['data/core/data/corporate/nexusRendererData.js', records('Nexus logical renderer mappings.', content.renderers)],
    ['data/core/data/corporate/nexusComponentTypeGroupData.js', records('Nexus corporate authoring component group.', [content.componentTypeGroup])],
    ['data/core/data/corporate/nexusTemplateData.js', records('Nexus corporate page template.', [content.template])],
    ['data/core/data/corporate/nexusSlotData.js', records('Nexus corporate page slot.', [content.slot])],
    ['data/core/data/corporate/nexusComponentData.js', records('Nexus corporate CMS components.', components)],
    ['data/core/data/corporate/nexusPageData.js', records('Nexus corporate CMS pages.', pages)],
    ['data/core/data/corporate/nexusRouteData.js', records('Nexus corporate public routes.', routes)],
    ['data/core/data/corporate/nexusNavigationData.js', records('Nexus corporate navigation.', navigation)]
]);

const importEntries = [
    ['nexusSiteData', 'cmsSite'],
    ['nexusTypeCodeData', 'cmsTypeCode'],
    ['nexusRendererData', 'cmsTypeCode2Renderer'],
    ['nexusComponentTypeGroupData', 'cmsComponentTypeGroup'],
    ['nexusSlotData', 'cmsSlotDefinition'],
    ['nexusTemplateData', 'cmsPageTemplate'],
    ['nexusComponentData', 'cmsComponent'],
    ['nexusPageData', 'cmsPage'],
    ['nexusRouteData', 'cmsPageRoute'],
    ['nexusNavigationData', 'cmsNavigationNode']
];
const headerBody = `${header}/** @description Core import header for the Nodics Nexus corporate content release. */\nmodule.exports = {\n    catalog: {\n        nexusCatalogData: { options: { enabled: true, schemaName: 'catalog', operation: 'saveAll', dataFilePrefix: 'nexusCatalogData' }, query: { code: '$code' } }\n    },\n    cms: {\n${importEntries.map(([name, schema, operation = 'saveAll']) => `        ${name}: { options: { enabled: true, schemaName: '${schema}', operation: '${operation}', dataFilePrefix: '${name}' }, query: { code: '$code' } }`).join(',\n')}\n    }\n};\n`;
outputs.set('data/core/headers/nexusCorporateContentHeader.js', headerBody);

const generatedHashes = Object.fromEntries([...outputs].map(([path, value]) => [path.replace('data/', ''), hash(value)]));
const sourceHashes = {};
for (const path of ['data/core/source/catalog/corporate-catalog.json', 'data/core/source/site/corporate-site.json', 'data/core/source/media/corporate-media.json', 'data/core/source/content/corporate-content.json']) {
    sourceHashes[path.replace('data/', '')] = hash(await readFile(resolve(moduleRoot, path)));
}
const releaseChecksum = hash(
    Object.keys(generatedHashes)
        .sort()
        .map((fileName) => `${fileName}:${generatedHashes[fileName]}`)
        .join('|')
);
const manifest = `${JSON.stringify({
    contractVersion: 2,
    module: 'nexusData',
    sections: {
        core: {
            kind: 'CONTENT_PACK',
            contentPath: 'core',
            pack: 'nexus.corporate',
            version: '0.5.17',
            sourceMode: 'structured-json-source',
            sourceAuthority: 'data/core/source',
            sites: [site.code],
            catalogs: [catalog.code],
            accessMode: 'PUBLIC',
            pages: pages.length,
            components: components.length,
            routes: routes.length,
            releaseChecksum,
            sourceHashes,
            generatedHashes
        },
        ...Object.fromEntries(
            Object.entries(
                JSON.parse(
                    await readFile(resolve(moduleRoot, 'data/manifest.json'), 'utf8')
                ).sections || {}
            ).filter(([sectionName]) => sectionName !== 'core')
        )
    }
}, null, 2)}\n`;
outputs.set('data/manifest.json', manifest);

let drift = false;
for (const [path, expected] of outputs) {
    const absolutePath = resolve(moduleRoot, path);
    if (checkOnly) {
        let actual = '';
        try { actual = await readFile(absolutePath, 'utf8'); } catch { /* reported as drift */ }
        if (actual !== expected) {
            console.error(`Generated Nexus content is stale: ${path}`);
            drift = true;
        }
    } else {
        await mkdir(dirname(absolutePath), { recursive: true });
        await writeFile(absolutePath, expected);
    }
}
if (drift) process.exitCode = 1;
else console.log(checkOnly ? 'Nexus corporate content is current.' : 'Generated Nexus corporate content.');
