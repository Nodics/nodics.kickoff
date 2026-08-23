/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { createHash } from "node:crypto";

const moduleRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const manifest = JSON.parse(
  await readFile(resolve(moduleRoot, "data/manifest.json")),
);
const documentationBoundary = await readFile(
  resolve(moduleRoot, "docs/README.md"),
  "utf8",
);
const components = require(
  resolve(moduleRoot, "data/staged/wcms/data/corporate/nexusComponentData.js"),
);
const pages = require(
  resolve(moduleRoot, "data/staged/wcms/data/corporate/nexusPageData.js"),
);
const renderers = require(
  resolve(moduleRoot, "data/staged/wcms/data/corporate/nexusRendererData.js"),
);
const sites = require(
  resolve(moduleRoot, "data/staged/wcms/data/corporate/nexusSiteData.js"),
);
const catalogs = require(
  resolve(moduleRoot, "data/staged/wcms/data/corporate/nexusCatalogData.js"),
);
const editorialAuthors = require(
  resolve(moduleRoot, "data/staged/editorial/data/nexusEditorialAuthorData.js"),
);
const editorialTaxonomyTerms = require(
  resolve(
    moduleRoot,
    "data/staged/editorial/data/nexusEditorialTaxonomyTermData.js",
  ),
);
const editorialArticles = require(
  resolve(
    moduleRoot,
    "data/staged/editorial/data/nexusEditorialArticleData.js",
  ),
);
const editorialArticleLocalizations = require(
  resolve(
    moduleRoot,
    "data/staged/editorial/data/nexusEditorialArticleLocalizationData.js",
  ),
);
const editorialArticleTaxonomies = require(
  resolve(
    moduleRoot,
    "data/staged/editorial/data/nexusEditorialArticleTaxonomyData.js",
  ),
);
const editorialOnlineArticles = require(
  resolve(
    moduleRoot,
    "test/expectedOnlineProjections/nexusEditorialOnlineArticleData.js",
  ),
);
const testimonials = require(
  resolve(
    moduleRoot,
    "data/operational/engagement/data/nexusTestimonialProjectionData.js",
  ),
);
const mediaReferences = require(
  resolve(moduleRoot, "data/staged/media/data/nexusMediaReferenceData.js"),
);
const mediaAssetManifest = require(
  resolve(moduleRoot, "assets/nexus-cms-media/assetManifest.js"),
);
const componentValues = Object.values(components);
const pageValues = Object.values(pages);
const rendererValues = Object.values(renderers);
const editorialAuthorValues = Object.values(editorialAuthors);
const editorialTaxonomyTermValues = Object.values(editorialTaxonomyTerms);
const editorialArticleValues = Object.values(editorialArticles);
const editorialArticleLocalizationValues = Object.values(
  editorialArticleLocalizations,
);
const editorialArticleTaxonomyValues = Object.values(editorialArticleTaxonomies);
const editorialOnlineArticleValues = Object.values(editorialOnlineArticles);
const mediaReferenceValues = Object.values(mediaReferences);
const site = Object.values(sites)[0];
const catalog = Object.values(catalogs)[0];
const homePage = pageValues.find((page) => page.code === "nexusHomePage");
const aboutPage = pageValues.find((page) => page.code === "nexusAboutPage");
const featuresPage = pageValues.find(
  (page) => page.code === "nexusFeaturesPage",
);
const productsPage = pageValues.find(
  (page) => page.code === "nexusProductsPage",
);
const supportPage = pageValues.find((page) => page.code === "nexusSupportPage");
const newsPage = pageValues.find(
  (page) => page.code === "nexusNewsListingPage",
);
const newsDetailPages = [
  "nexusNewsPublicExperiencePage",
  "nexusNewsAxisBusinessJourneyPage",
  "nexusNewsEngagementPublicApiPage",
  "nexusNewsEditorialReleaseFlowPage",
].map((code) => pageValues.find((page) => page.code === code));
const blogPage = pageValues.find((page) => page.code === "nexusBlogListingPage");
const blogDetailPages = [
  "nexusBlogEngagementFrameworkPage",
  "nexusBlogEditorialPublicationPage",
  "nexusBlogRuntimeDiscoveryPage",
  "nexusBlogAxisBusinessOperationsPage",
].map((code) => pageValues.find((page) => page.code === code));
const componentByCode = new Map(
  componentValues.map((component) => [component.code, component]),
);

async function sha256(relativePath) {
  return createHash("sha256")
    .update(await readFile(resolve(moduleRoot, "data", relativePath)))
    .digest("hex");
}

assert.equal(site.code, "nexusCorporateSite");
assert.match(
  documentationBoundary,
  /ownership boundary for future Nexus-specific authored\s+documentation/,
  "Nexus application documentation must remain module-owned",
);
assert.equal(site.catalog, "nexusContentCatalog");
assert.equal(catalog.code, "nexusContentCatalog");
assert.equal(
  pageValues.length,
  26,
  "Corporate release must contain the approved corporate and Editorial reference routes",
);
assert(homePage, "Homepage must exist in the importable CMS page payload");
assert(aboutPage, "About page must exist in the importable CMS page payload");
assert(
  featuresPage,
  "Features page must exist in the importable CMS page payload",
);
assert(
  productsPage,
  "Products page must exist in the importable CMS page payload",
);
assert(supportPage, "Support page must exist in the importable CMS page payload");
assert(newsPage, "News listing page must exist in the importable CMS page payload");
assert(
  newsDetailPages.every(Boolean),
  "All seeded News detail pages must exist in the importable CMS page payload",
);
assert(blogPage, "Blog listing page must exist in the importable CMS page payload");
assert(
  blogDetailPages.every(Boolean),
  "All seeded Blog detail pages must exist in the importable CMS page payload",
);
assert.equal(
  homePage.cmsComponents.length,
  12,
  "Homepage must contain the twelve approved content sections",
);
const homepageComponentCodes = homePage.cmsComponents
  .sort((first, second) => first.index - second.index)
  .map((association) => association.target);
assert(
  !homepageComponentCodes.includes("nexusHomePlatform"),
  "Platform Overview must remain excluded from the homepage composition",
);
assert(
  !homepageComponentCodes.includes("nexusHomeDevelopers"),
  "Developer Experience must remain consolidated into GitHub on the homepage",
);
const carousel = componentByCode.get("nexusHomeBannerCarousel");
assert(carousel, "Homepage banner carousel must exist");
assert.equal(carousel.typeCode, "nexusBannerCarouselType");
assert.deepEqual(
  carousel.subComponents.map((association) => association.target),
  ["nexusMicroservicesBanner", "nexusModularBanner", "nexusSecureBanner"],
);
assert.equal(carousel.properties.rotationIntervalMs, 10000);
const bannerSlides = componentValues.filter(
  (component) => component.typeCode === "nexusBannerSlideType",
);
assert.equal(
  bannerSlides.length,
  3,
  "Carousel must contain three independently managed banner components",
);
bannerSlides.forEach((slide) => {
  assert(
    slide.properties.referenceImageCode,
    `${slide.code} must reference a banner image`,
  );
  assert(slide.properties.title, `${slide.code} must define a title`);
  assert(slide.properties.heading, `${slide.code} must define a heading`);
  assert(slide.properties.subheading, `${slide.code} must define a subheading`);
  assert(
    slide.properties.buttons.length > 0,
    `${slide.code} must define buttons`,
  );
});
assert(
  !JSON.stringify({ pages, components }).toLowerCase().includes("wiki-home"),
  "Legacy Wiki pages must not enter Nexus content",
);
assert.deepEqual(
  homepageComponentCodes.slice(3, 6),
  ["nexusHomeProducts", "nexusHomeTechnology", "nexusHomeSupport"],
  "Products and Technology must follow Features before Support",
);
assert.equal(
  componentByCode.get("nexusHomeProducts")?.properties.href,
  "/products",
  "Homepage Products section CTA must open the Products page",
);
assert.equal(
  componentByCode.get("nexusHomeSupport")?.properties.href,
  "/support",
  "Homepage Support section CTA must open the Support page",
);
assert.equal(
  componentByCode.get("nexusHomeBlogs")?.properties.href,
  "/blogs",
  "Homepage Blogs section CTA must open the Blogs listing page",
);
const aboutComponentCodes = aboutPage.cmsComponents
  .sort((first, second) => first.index - second.index)
  .map((association) => association.target);
assert.deepEqual(
  aboutComponentCodes.slice(0, 5),
  [
    "nexusAboutHero",
    "nexusAboutContent",
    "nexusAboutPrinciples",
    "nexusAboutMvpScale",
    "nexusAboutPromise",
  ],
  "About page must explain the Nodics position from story through MVP-to-scale and promise",
);
assert.equal(
  componentByCode.get("nexusAboutMvpScale")?.properties.anchor,
  "about-mvp-scale",
  "About MVP-to-scale section must expose a stable managed component anchor",
);
const featuresComponentCodes = featuresPage.cmsComponents
  .sort((first, second) => first.index - second.index)
  .map((association) => association.target);
assert.deepEqual(
  featuresComponentCodes.slice(0, 7),
  [
    "nexusFeaturesHero",
    "nexusFeaturesContent",
    "nexusFeaturesPillars",
    "nexusFeaturesArchitecture",
    "nexusFeaturesCapabilities",
    "nexusFeaturesMvpScale",
    "nexusFeaturesJourney",
  ],
  "Features page must explain capability pillars, architecture, catalogue, MVP-to-scale, and partner journey",
);
assert.equal(
  componentByCode.get("nexusFeaturesCapabilities")?.properties.items.length,
  12,
  "Features page capability catalogue must expose the approved twelve capability cards",
);
const productsComponentCodes = productsPage.cmsComponents
  .sort((first, second) => first.index - second.index)
  .map((association) => association.target);
assert.deepEqual(
  productsComponentCodes.slice(0, 5),
  [
    "nexusProductsHero",
    "nexusProductsContent",
    "nexusProductsSuite",
    "nexusProductsOperatingModel",
    "nexusProductsReadiness",
  ],
  "Products page must explain philosophy, suite, operating model, and readiness path",
);
assert.equal(
  componentByCode.get("nexusProductsContent")?.properties.anchor,
  "product-overview",
  "Products overview must expose a stable managed component anchor",
);
assert.equal(
  componentByCode.get("nexusProductsSuite")?.properties.items.length,
  3,
  "Products suite must expose the approved product direction cards",
);
const supportComponentCodes = supportPage.cmsComponents
  .sort((first, second) => first.index - second.index)
  .map((association) => association.target);
assert.deepEqual(
  supportComponentCodes.slice(0, 6),
  [
    "nexusSupportHero",
    "nexusSupportContent",
    "nexusSupportPaths",
    "nexusSupportResponseModel",
    "nexusSupportRequestChecklist",
    "nexusSupportBoundaries",
  ],
  "Support page must explain model, paths, response expectations, request evidence, and boundaries",
);
assert.equal(
  componentByCode.get("nexusSupportContent")?.properties.anchor,
  "support-overview",
  "Support overview must expose a stable managed component anchor",
);
assert.equal(
  componentByCode.get("nexusSupportResponseModel")?.properties.items.length,
  4,
  "Support response model must expose the approved four priority levels",
);
const newsComponentCodes = newsPage.cmsComponents
  .sort((first, second) => first.index - second.index)
  .map((association) => association.target);
assert.deepEqual(
  newsComponentCodes.slice(0, 2),
  ["nexusNewsListingHero", "nexusNewsListing"],
  "News page must expose the shared hero and searchable listing components",
);
assert.equal(
  componentByCode.get("nexusNewsListing")?.properties.contentTypeCode,
  "NEWS",
  "News listing must be scoped to managed NEWS projections",
);
assert.equal(
  componentByCode.get("nexusNewsListing")?.properties.articles.length,
  4,
  "News listing must provide four seeded public news entries for local preview",
);
assert.equal(
  componentByCode
    .get("nexusNewsListing")
    ?.properties.articles.filter((article) => article.special === true).length,
  1,
  "News listing must expose exactly one special article for local preview",
);
componentByCode
  .get("nexusNewsListing")
  ?.properties.articles.forEach((article) => {
    assert.equal(
      typeof article.special,
      "boolean",
      `${article.code} must expose a boolean special flag for Axis management`,
    );
  });
newsDetailPages.forEach((page) => {
  const detailComponentCodes = page.cmsComponents
    .sort((first, second) => first.index - second.index)
    .map((association) => association.target);
  assert.equal(
    detailComponentCodes.length,
    2,
    `${page.code} must expose one hero and one article detail component`,
  );
  assert.equal(
    componentByCode.get(detailComponentCodes[1])?.typeCode,
    "nexusEditorialDetailType",
    `${page.code} must use the shared Editorial detail renderer`,
  );
  assert.equal(
    componentByCode.get(detailComponentCodes[1])?.properties.contentTypeCode,
    "NEWS",
    `${page.code} must remain scoped to NEWS content`,
  );
  assert(
    componentByCode.get(detailComponentCodes[1])?.properties.sections.length >=
      3,
    `${page.code} must provide structured article sections`,
  );
});
const blogComponentCodes = blogPage.cmsComponents
  .sort((first, second) => first.index - second.index)
  .map((association) => association.target);
assert.deepEqual(
  blogComponentCodes.slice(0, 2),
  ["nexusBlogListingHero", "nexusBlogListing"],
  "Blog page must expose the shared hero and searchable listing components",
);
assert.equal(
  componentByCode.get("nexusBlogListing")?.properties.contentTypeCode,
  "BLOG",
  "Blog listing must be scoped to managed BLOG projections",
);
assert.equal(
  componentByCode.get("nexusBlogListing")?.properties.articles.length,
  4,
  "Blog listing must provide four seeded public blog entries for local preview",
);
assert.equal(
  componentByCode
    .get("nexusBlogListing")
    ?.properties.articles.filter((article) => article.special === true).length,
  1,
  "Blog listing must expose exactly one special article for local preview",
);
componentByCode
  .get("nexusBlogListing")
  ?.properties.articles.forEach((article) => {
    assert.equal(
      typeof article.special,
      "boolean",
      `${article.code} must expose a boolean special flag for Axis management`,
    );
  });
const expectedEditorialArticleCodes = [
  ...componentByCode.get("nexusNewsListing").properties.articles,
  ...componentByCode.get("nexusBlogListing").properties.articles,
]
  .map((article) => article.code)
  .sort();
assert.equal(
  editorialAuthorValues.length,
  1,
  "Nexus sample Editorial data must include the owning authoring identity for Axis",
);
assert.equal(
  editorialTaxonomyTermValues.length,
  6,
  "Nexus sample Editorial data must include reusable taxonomy terms for Axis filters",
);
assert.deepEqual(
  editorialArticleValues.map((article) => article.code).sort(),
  expectedEditorialArticleCodes,
  "Nexus News and Blog listing samples must have matching Editorial authoring records for Axis",
);
assert.deepEqual(
  editorialArticleLocalizationValues
    .map((localization) => localization.articleCode)
    .sort(),
  expectedEditorialArticleCodes,
  "Every Nexus Editorial authoring article must have one English localization",
);
assert.deepEqual(
  editorialOnlineArticleValues.map((article) => article.articleCode).sort(),
  expectedEditorialArticleCodes,
  "Nexus online projections must remain aligned to the authoring records",
);
assert.deepEqual(
  editorialArticleTaxonomyValues.map((link) => link.articleCode).sort(),
  expectedEditorialArticleCodes,
  "Every Nexus Editorial authoring article must have a taxonomy link for filterable Axis data",
);
editorialArticleValues.forEach((article) => {
  assert.equal(
    article.status,
    "APPROVED",
    `${article.code} must be Axis-editable authoring data approved for local preview`,
  );
  assert.equal(
    article.siteCodes.includes("nexusCorporateSite"),
    true,
    `${article.code} must belong to the Nexus corporate site`,
  );
  assert.deepEqual(
    article.authorCodes,
    ["nodicsEditorialTeam"],
    `${article.code} must reference the Nexus Editorial authoring identity`,
  );
});
assert.deepEqual(
  editorialArticleValues
    .filter((article) => article.contentTypeCode === "NEWS" && article.special)
    .map((article) => article.code),
  ["nexus-news-public-experience"],
  "News featured state must be owned by Editorial authoring data",
);
assert.deepEqual(
  editorialArticleValues
    .filter((article) => article.contentTypeCode === "BLOG" && article.special)
    .map((article) => article.code),
  ["nexus-blog-editorial-publication"],
  "Blog featured state must be owned by Editorial authoring data",
);
editorialArticleLocalizationValues.forEach((localization) => {
  assert.equal(
    localization.status,
    "READY",
    `${localization.code} must be ready for Editorial publication`,
  );
  assert.equal(
    localization.localeCode,
    "en",
    `${localization.code} must seed the default Nexus locale`,
  );
  assert.equal(
    Array.isArray(localization.takeaways) && localization.takeaways.length > 0,
    true,
    `${localization.code} must seed article-specific takeaways`,
  );
});
editorialOnlineArticleValues.forEach((onlineArticle) => {
  assert.equal(
    Array.isArray(onlineArticle.payload.takeaways) &&
      onlineArticle.payload.takeaways.length > 0,
    true,
    `${onlineArticle.code} must publish article-specific takeaways`,
  );
  const authoringArticle = editorialArticleValues.find(
    (article) => article.code === onlineArticle.articleCode,
  );
  assert.equal(
    onlineArticle.payload.special,
    authoringArticle?.special === true,
    `${onlineArticle.code} must publish the authoring special flag`,
  );
});
blogDetailPages.forEach((page) => {
  const detailComponentCodes = page.cmsComponents
    .sort((first, second) => first.index - second.index)
    .map((association) => association.target);
  assert.equal(
    detailComponentCodes.length,
    2,
    `${page.code} must expose one hero and one article detail component`,
  );
  assert.equal(
    componentByCode.get(detailComponentCodes[1])?.typeCode,
    "nexusEditorialDetailType",
    `${page.code} must use the shared Editorial detail renderer`,
  );
  assert.equal(
    componentByCode.get(detailComponentCodes[1])?.properties.contentTypeCode,
    "BLOG",
    `${page.code} must remain scoped to BLOG content`,
  );
  assert(
    componentByCode.get(detailComponentCodes[1])?.properties.sections.length >=
      3,
    `${page.code} must provide structured article sections`,
  );
});
assert.deepEqual(
  homepageComponentCodes.slice(6, 9),
  ["nexusHomeTestimonials", "nexusHomeBlogs", "nexusHomeNews"],
  "Testimonials, Blogs, and News must follow Support as one editorial sequence",
);
componentValues.forEach((component) => {
  assert.equal(
    component.active,
    true,
    `CMS component ${component.code} must default active for Axis visibility control`,
  );
  assert.notEqual(
    component.properties?.enabled,
    true,
    `CMS component ${component.code} must use cmsComponent.active, not properties.enabled`,
  );
});
homepageComponentCodes.forEach((componentCode) => {
  const component = componentByCode.get(componentCode);
  assert(component, `Homepage component ${componentCode} must exist`);
  assert.equal(
    component.active,
    true,
    `Homepage component ${componentCode} must be visible by default`,
  );
});
pageValues
  .filter((page) => page.typeCode === "nexusCorporateStandardPageType")
  .forEach((page) => {
    const heroComponentCode = page.cmsComponents
      .sort((first, second) => first.index - second.index)[0]?.target;
    const heroComponent = componentByCode.get(heroComponentCode);
    assert(
      heroComponent,
      `Standard second-level page ${page.code} must start with a CMS-managed hero component`,
    );
    assert.equal(
      heroComponent.typeCode,
      "nexusPageHeroType",
      `Standard second-level page ${page.code} must use the shared Nexus page hero renderer`,
    );
    assert.equal(
      heroComponent.active,
      true,
      `Standard second-level page hero ${heroComponent.code} must be visible by default`,
    );
    assert(
      heroComponent.properties?.referenceImageCode,
      `Standard second-level page hero ${heroComponent.code} must define a banner image`,
    );
  });
assert(
  rendererValues.every((entry) =>
    /^nexus\.(page|component|editorial)\./u.test(entry.renderer),
  ),
  "Renderer keys must be logical Nexus identifiers",
);
assert.equal(
  rendererValues.filter((entry) =>
    entry.renderer.startsWith("nexus.editorial."),
  ).length,
  9,
  "Reference data must declare the nine standard Editorial renderer contracts",
);
editorialArticleValues.forEach((article) => {
  assert(
    article.featuredMediaCode,
    `Editorial authoring article ${article.code} must expose a featured media code for Axis and Nexus previews`,
  );
});
const collectMediaCodes = (value, mediaCodes = new Set()) => {
  if (Array.isArray(value)) {
    value.forEach((item) => collectMediaCodes(item, mediaCodes));
    return mediaCodes;
  }
  if (!value || typeof value !== "object") return mediaCodes;
  Object.entries(value).forEach(([key, child]) => {
    if (
      ["referenceImageCode", "avatarReferenceImageCode", "featuredMediaCode"].includes(
        key,
      ) &&
      typeof child === "string" &&
      child
    ) {
      mediaCodes.add(child);
    }
    collectMediaCodes(child, mediaCodes);
  });
  return mediaCodes;
};
const referencedMediaCodes = collectMediaCodes({
  components,
  editorialArticles,
  testimonials,
});
const assetMediaCodes = new Set(
  mediaAssetManifest.map((asset) => asset.mediaCode),
);
const referenceMediaCodes = new Set(
  mediaReferenceValues.map((reference) => reference.mediaCode),
);
referencedMediaCodes.forEach((mediaCode) => {
  assert.equal(
    assetMediaCodes.has(mediaCode),
    true,
    `${mediaCode} must have a Nexus backend media asset manifest entry`,
  );
  assert.equal(
    referenceMediaCodes.has(mediaCode),
    true,
    `${mediaCode} must have a Nexus media reference record`,
  );
});
const corporateRelease = manifest.sections.nexusCorporateSite;
const editorialRelease = manifest.sections.nexusEditorialSource;
const engagementRelease = manifest.sections.nexusEngagementOperational;
const mediaRelease = manifest.sections.nexusCorporateMediaReferences;
assert.equal(corporateRelease.lifecycle, "PUBLISHABLE");
assert.equal(corporateRelease.destinationRole, "WCMS_STAGED");
assert.equal(corporateRelease.sourceRoot, "staged");
assert.equal(editorialRelease.lifecycle, "PUBLISHABLE");
assert.equal(editorialRelease.destinationRole, "WCMS_STAGED");
assert.equal(editorialRelease.sourceRoot, "staged");
assert.equal(engagementRelease.lifecycle, "OPERATIONAL_VERSIONED");
assert.equal(engagementRelease.destinationRole, "ENGAGEMENT");
assert.equal(engagementRelease.sourceRoot, "operational");
assert.equal(engagementRelease.publicationPolicy, "NONE");
assert.equal(mediaRelease.lifecycle, "PUBLISHABLE");
assert.equal(mediaRelease.destinationRole, "WCMS_STAGED");
assert.equal(mediaRelease.sourceRoot, "staged");

for (const release of Object.values(manifest.sections)) {
  for (const [relativePath, expectedHash] of Object.entries(release.files)) {
    assert.equal(
      await sha256(relativePath),
      expectedHash,
      `Manifest hash must match import payload ${relativePath}`,
    );
  }
}
assert(
  Object.keys(corporateRelease.files).every((path) => path.startsWith("staged/wcms/")),
  "The corporate release must contain only WCMS Staged source files",
);
assert(
  Object.keys(editorialRelease.files).every((path) => path.startsWith("staged/editorial/")),
  "The Editorial release must contain only Staged authoring source files",
);
assert(
  Object.keys(engagementRelease.files).every((path) => path.startsWith("operational/engagement/")),
  "The Engagement release must contain only operational versioned files",
);
assert(
  !JSON.stringify(manifest).includes("nexusEditorialOnlineArticleData"),
  "Expected Online projections must never be runtime-importable manifest data",
);

console.log("Nexus corporate content contract passed.");
