import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cataloguePath = path.join(root, 'data/core/source/documentation/catalogue.json');
const dataRoot = path.join(root, 'data/core');
const dataPath = path.join(dataRoot, 'data/documentation');
const manifestPath = path.join(root, 'manifest/docs-content-pack.json');
const checkOnly = process.argv.includes('--check');
const catalogue = JSON.parse(fs.readFileSync(cataloguePath, 'utf8'));
const documents = catalogue.documents || [];

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function slug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[`*_]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function camel(value) {
  return slug(value).replace(/-([a-z0-9])/g, (_, character) =>
    character.toUpperCase(),
  );
}

function wordCount(value) {
  return (value.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu) || []).length;
}

function headings(value) {
  return value.split(/\r?\n/).flatMap((line) => {
    const match = /^#{2,4}\s+(.+)$/.exec(line.trim());
    return match?.[1] ? [match[1]] : [];
  });
}

function markdownBlocks(markdown) {
  const blocks = [];
  let pending = [];
  const flushParagraph = () => {
    if (!pending.length) return;
    blocks.push({ kind: 'paragraph', text: pending.join(' ') });
    pending = [];
  };
  for (const line of markdown.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
    } else if (/^#{1,4}\s+/.test(trimmed)) {
      flushParagraph();
      const [, hashes, text] = /^(#{1,4})\s+(.+)$/.exec(trimmed);
      blocks.push({ kind: 'heading', level: hashes.length, text });
    } else if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      blocks.push({ kind: 'list', ordered: false, items: [trimmed.replace(/^[-*]\s+/, '')] });
    } else if (/^```/.test(trimmed)) {
      flushParagraph();
      blocks.push({ kind: 'paragraph', text: trimmed });
    } else {
      pending.push(trimmed);
    }
  }
  flushParagraph();
  return blocks;
}

async function writeOrCheck(relativePath, content) {
  const target = path.join(root, relativePath);
  if (checkOnly) {
    const current = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : null;
    if (current !== content) throw new Error(`${relativePath} is not generated`);
    return;
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
}

function jsModule(description, value) {
  return `'use strict';\n\n/** @description ${description} */\nmodule.exports = ${JSON.stringify(value, null, 2)};\n`;
}

const sourcePages = documents.map((document, index) => {
  const markdown = fs.readFileSync(path.join(root, document.content), 'utf8');
  return {
    ...document,
    markdown,
    route: index === 0 ? '/docs/nodics-kickoff' : `/docs/nodics-kickoff/${slug(document.id.replace(/\./g, '-'))}`,
    codeSuffix: camel(document.id),
  };
});

const sections = [
  {
    code: 'nodics-kickoff',
    title: 'Nodics Kickoff',
    order: 10,
  },
];

const navigationItems = sourcePages.map((document, index) => ({
  code: document.id,
  title: document.title,
  route: document.route,
  section: 'nodics-kickoff',
  sectionTitle: 'Nodics Kickoff',
  sectionOrder: 10,
  order: (index + 1) * 10,
  audience: ['architect', 'developer', 'operator'],
  summary: document.summary,
  searchText: `${document.title} ${document.summary} ${document.markdown}`,
}));

const navigationComponent = {
  record0: {
    code: 'kickoffDocumentationNavigation',
    typeCode: 'kickoffDocumentationNavigationComponentType',
    renderer: 'documentation.component.navigation',
    accessMode: 'AUTHENTICATED',
    properties: {
      title: 'Nodics Kickoff',
      searchLabel: 'Search Kickoff documentation',
      searchPlaceholder: 'Search setup, runtime, modules, and customization',
      emptyMessage: 'No Kickoff documentation matches your search.',
      sections,
      items: navigationItems,
    },
    active: true,
  },
};

const articleComponents = Object.fromEntries(
  sourcePages.map((document, index) => [
    `record${index + 1}`,
    {
      code: `kickoffDocsComponent${document.codeSuffix}`,
      typeCode: 'kickoffDocumentationArticleComponentType',
      renderer: 'documentation.component.article',
      accessMode: 'AUTHENTICATED',
      properties: {
        code: document.id,
        title: document.title,
        route: document.route,
        section: 'nodics-kickoff',
        sectionTitle: 'Nodics Kickoff',
        audience: ['architect', 'developer', 'operator'],
        summary: document.summary,
        headings: headings(document.markdown),
        blocks: markdownBlocks(document.markdown),
        searchText: `${document.title} ${document.summary} ${document.markdown}`,
        previous: index > 0 ? {
          title: sourcePages[index - 1].title,
          route: sourcePages[index - 1].route,
        } : null,
        next: index < sourcePages.length - 1 ? {
          title: sourcePages[index + 1].title,
          route: sourcePages[index + 1].route,
        } : null,
        source: {
          repository: 'nodics.kickoff',
          functionalModule: document.functionalModule,
          technicalModule: document.technicalModule || null,
          path: document.content,
          wordCount: wordCount(document.markdown),
          checksum: sha256(document.markdown),
        },
      },
      active: true,
    },
  ]),
);

const componentRecords = { ...navigationComponent, ...articleComponents };
const pageRecords = Object.fromEntries(
  sourcePages.map((document, index) => [
    `record${index}`,
    {
      code: `kickoffDocsPage${document.codeSuffix}`,
      name: document.title,
      cmsSite: ['kickoffDocumentationSite'],
      typeCode: 'kickoffDocumentationArticlePageType',
      template: 'kickoffDocumentationArticleTemplate',
      renderer: 'documentation.page.article',
      cmsComponents: [
        { target: 'kickoffDocumentationNavigation', slot: 'navigation', index: 5, active: true },
        { target: `kickoffDocsComponent${document.codeSuffix}`, slot: 'article', index: 10, active: true },
      ],
      active: true,
    },
  ]),
);

const routeRecords = Object.fromEntries(
  sourcePages.map((document, index) => [
    `record${index}`,
    {
      code: `kickoffDocsRoute${document.codeSuffix}`,
      site: 'kickoffDocumentationSite',
      path: document.route,
      locale: document.locale || 'en',
      channel: 'web',
      page: `kickoffDocsPage${document.codeSuffix}`,
      routeType: 'PAGE',
      deliveryState: 'ONLINE',
      accessMode: 'AUTHENTICATED',
      active: true,
    },
  ]),
);

const files = {
  'data/core/data/documentation/kickoffDocumentationCatalogData.js': jsModule(
    'Nodics Kickoff documentation catalog.',
    {
      record0: {
        code: 'kickoffDocumentationContentCatalog',
        name: 'Nodics Kickoff Documentation Content Catalog',
        active: true,
      },
    },
  ),
  'data/core/data/documentation/kickoffDocumentationSiteData.js': jsModule(
    'Nodics Kickoff documentation site.',
    {
      record0: {
        code: 'kickoffDocumentationSite',
        name: 'Nodics Kickoff Documentation',
        catalog: 'kickoffDocumentationContentCatalog',
        active: true,
      },
    },
  ),
  'data/core/data/documentation/kickoffDocumentationTypeCodeData.js': jsModule(
    'Nodics Kickoff documentation page and component types.',
    {
      record0: { code: 'kickoffDocumentationArticlePageType', kind: 'PAGE', contractVersion: 2, active: true },
      record1: { code: 'kickoffDocumentationArticleComponentType', kind: 'COMPONENT', contractVersion: 2, active: true },
      record2: { code: 'kickoffDocumentationNavigationComponentType', kind: 'COMPONENT', contractVersion: 2, active: true },
    },
  ),
  'data/core/data/documentation/kickoffDocumentationRendererData.js': jsModule(
    'Nodics Kickoff documentation renderer mappings consumed by Axis.',
    {
      record0: { code: 'kickoffDocumentationArticlePageType', renderer: 'documentation.page.article', contractVersion: 2, channels: ['web', 'mobile-webview'], deprecated: false, active: true },
      record1: { code: 'kickoffDocumentationArticleComponentType', renderer: 'documentation.component.article', contractVersion: 2, channels: ['web', 'mobile-webview'], deprecated: false, active: true },
      record2: { code: 'kickoffDocumentationNavigationComponentType', renderer: 'documentation.component.navigation', contractVersion: 2, channels: ['web', 'mobile-webview'], deprecated: false, active: true },
    },
  ),
  'data/core/data/documentation/kickoffDocumentationSlotData.js': jsModule(
    'Nodics Kickoff documentation template slots.',
    {
      record0: { code: 'kickoffDocumentationNavigationSlot', template: 'kickoffDocumentationArticleTemplate', name: 'navigation', minItems: 1, maxItems: 1, allowedComponentTypes: ['kickoffDocumentationNavigationComponentType'], active: true },
      record1: { code: 'kickoffDocumentationArticleSlot', template: 'kickoffDocumentationArticleTemplate', name: 'article', minItems: 1, maxItems: 1, allowedComponentTypes: ['kickoffDocumentationArticleComponentType'], active: true },
    },
  ),
  'data/core/data/documentation/kickoffDocumentationTemplateData.js': jsModule(
    'Nodics Kickoff documentation template.',
    {
      record0: { code: 'kickoffDocumentationArticleTemplate', name: 'Nodics Kickoff Documentation Article', renderer: 'documentation.template.article', contractVersion: 2, slots: ['kickoffDocumentationNavigationSlot', 'kickoffDocumentationArticleSlot'], active: true },
    },
  ),
  'data/core/data/documentation/kickoffDocumentationComponentData.js': jsModule(
    'Generated Nodics Kickoff documentation navigation and article content.',
    componentRecords,
  ),
  'data/core/data/documentation/kickoffDocumentationPageData.js': jsModule(
    'Generated Nodics Kickoff documentation pages.',
    pageRecords,
  ),
  'data/core/data/documentation/kickoffDocumentationRouteData.js': jsModule(
    'Generated Nodics Kickoff documentation routes.',
    routeRecords,
  ),
  'data/core/headers/kickoffDocumentationContentPackHeader.js': `'use strict';\n\n/** @description Nodics Kickoff core-import header for project documentation. */\nmodule.exports = {\n  catalog: {\n    kickoffDocumentationCatalogData: { options: { enabled: true, schemaName: 'catalog', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationCatalogData' }, query: { code: '$code' } },\n  },\n  cms: {\n    kickoffDocumentationSiteData: { options: { enabled: true, schemaName: 'cmsSite', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationSiteData' }, query: { code: '$code' } },\n    kickoffDocumentationTypeCodeData: { options: { enabled: true, schemaName: 'cmsTypeCode', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationTypeCodeData' }, query: { code: '$code' } },\n    kickoffDocumentationRendererData: { options: { enabled: true, schemaName: 'cmsTypeCode2Renderer', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationRendererData' }, query: { code: '$code' } },\n    kickoffDocumentationSlotData: { options: { enabled: true, schemaName: 'cmsSlotDefinition', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationSlotData' }, query: { code: '$code' } },\n    kickoffDocumentationTemplateData: { options: { enabled: true, schemaName: 'cmsPageTemplate', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationTemplateData' }, query: { code: '$code' } },\n    kickoffDocumentationComponentData: { options: { enabled: true, schemaName: 'cmsComponent', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationComponentData' }, query: { code: '$code' } },\n    kickoffDocumentationPageData: { options: { enabled: true, schemaName: 'cmsPage', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationPageData' }, query: { code: '$code' } },\n    kickoffDocumentationRouteData: { options: { enabled: true, schemaName: 'cmsPageRoute', operation: 'saveAll', dataFilePrefix: 'kickoffDocumentationRouteData' }, query: { code: '$code' } },\n  },\n};\n`,
};

for (const [relativePath, content] of Object.entries(files)) {
  await writeOrCheck(relativePath, content);
}

const generatedHashes = Object.fromEntries(
  Object.keys(files).map((relativePath) => [
    relativePath,
    sha256(fs.readFileSync(path.join(root, relativePath))),
  ]),
);
const releaseChecksum = sha256(
  Object.keys(generatedHashes)
    .sort()
    .map((fileName) => `${fileName}:${generatedHashes[fileName]}`)
    .join('|'),
);
const manifest = {
  pack: catalogue.pack,
  version: catalogue.version,
  contractVersion: catalogue.contractVersion,
  sourceMode: 'catalogue-markdown-source',
  sourceAuthority: 'data/core/source/documentation/catalogue.json',
  sites: ['kickoffDocumentationSite'],
  accessMode: 'AUTHENTICATED',
  pages: sourcePages.length,
  components: Object.keys(componentRecords).length,
  routes: sourcePages.length,
  releaseChecksum,
  generatedHashes,
};

await writeOrCheck('manifest/docs-content-pack.json', `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`${checkOnly ? 'Validated' : 'Generated'} ${sourcePages.length} Kickoff documentation pages`);
