/*
 *  Copyright (c) 2026 Nodics All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
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
const components = require(
  resolve(moduleRoot, "data/core/data/corporate/nexusComponentData.js"),
);
const pages = require(
  resolve(moduleRoot, "data/core/data/corporate/nexusPageData.js"),
);
const renderers = require(
  resolve(moduleRoot, "data/core/data/corporate/nexusRendererData.js"),
);
const sites = require(
  resolve(moduleRoot, "data/core/data/corporate/nexusSiteData.js"),
);
const catalogs = require(
  resolve(moduleRoot, "data/core/data/corporate/nexusCatalogData.js"),
);
const componentValues = Object.values(components);
const pageValues = Object.values(pages);
const rendererValues = Object.values(renderers);
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
assert.equal(manifest.sections.core.sites[0], site.code);
assert.equal(manifest.sections.core.catalogs[0], catalog.code);
assert.equal(manifest.sections.core.accessMode, "PUBLIC");

for (const [relativePath, expectedHash] of Object.entries(
  manifest.sections.core.generatedHashes,
)) {
  assert.equal(
    await sha256(relativePath),
    expectedHash,
    `Manifest hash must match import payload ${relativePath}`,
  );
}
for (const [relativePath, expectedHash] of Object.entries(
  manifest.sections.sample.files,
)) {
  assert.equal(
    await sha256(relativePath),
    expectedHash,
    `Manifest hash must match sample payload ${relativePath}`,
  );
}

console.log("Nexus corporate content contract passed.");
