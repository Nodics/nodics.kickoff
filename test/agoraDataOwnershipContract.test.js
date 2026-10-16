/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module test/agoraDataOwnershipContract
 * @description Verifies application-owned sample assets and reference closure across every retained Agora content root.
 * @layer test
 * @owner nodics.kickoff
 * @override Customer packs may add their own media and components while preserving application ownership and complete references.
 */
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const kickoffCoreProperties = require(path.join(root, "modules", "kickoffCore", "config", "properties.js"));

test("project releases retain v001 source folders with explicit semantic versions and pinned bytes", () => {
  const crypto = require("node:crypto");
  let releases = 0;
  const inspect = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name.startsWith(".") ||
        ["node_modules", "test", "tests", "temp", "logs", "generated", "dist"].includes(entry.name)) continue;
      const next = path.join(directory, entry.name);
      if (entry.name !== "data") { inspect(next); continue; }
      const file = path.join(next, "manifest.json");
      if (!fs.existsSync(file)) continue;
      const manifest = JSON.parse(fs.readFileSync(file));
      assert.equal(Object.keys(manifest.retainedRoots || {}).length, 0, file);
      for (const source of fs.readdirSync(next)) {
        if (/^(init|core|sample|docs)-v\d{3}$/.test(source)) assert.match(source, /-v001$/, file);
      }
      for (const section of Object.values(manifest.sections || {})) {
        if (!["DATA_RELEASE", "CONTENT_PACK"].includes(section.kind)) continue;
        releases++;
        assert.match(section.version, /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/, file);
        assert.notEqual(section.version, "0.0.0", "Installed releases cannot use mutable development receipts: " + file);
        if (section.sourceRoot || section.contentPath) {
          assert.match(section.sourceRoot || section.contentPath, /^(?:init|core|sample|docs)-v001(?:\/|$)/, file);
        }
        for (const [relative, digest] of Object.entries(section.files || section.generatedHashes || {})) {
          assert.match(relative, /^(?:init|core|sample|docs)-v001\//, file);
          assert.equal(crypto.createHash("sha256").update(fs.readFileSync(path.join(next, relative))).digest("hex"), digest, relative);
        }
      }
    }
  };
  inspect(root);
  assert(releases > 10);
});

test("native runtime assignments declare their installed-pin successor independently of the v001 folder", () => {
  const crypto = require("node:crypto");
  const { frameworkRoot } = require("./helpers/configuration");
  const releaseOwner = require(path.join(frameworkRoot, "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService"));
  const section = require("../modules/kickoffCore/data/manifest.json").sections.nativeRuntimeAssignments;
  const profile = require(path.join(frameworkRoot, "nodics.platform/modules/profile/data/manifest.json")).sections["init-v001"];
  assert.equal(section.sourceRoot, "init-v001");
  assert.equal(section.version, "0.0.2", "Changed installed prerequisite pins require the explicit assignment successor");
  assert.equal(profile.version, "0.0.3");
  const prerequisite = section.prerequisites.find(ref => ref.moduleName === "profile" && ref.sectionCode === "init-v001");
  assert(prerequisite, "Assignments must pin Profile bootstrap authority");
  assert.equal(prerequisite.version, profile.version);
  const checksum = release => crypto.createHash("sha256")
    .update(Object.keys(release.files).sort().map(file => file + ":" + release.files[file]).join("|"))
    .update(release.prerequisites?.length ? "|prerequisites:" + JSON.stringify(release.prerequisites) : "").digest("hex");
  assert.equal(prerequisite.checksum, checksum(profile), "The pin covers the complete prerequisite metadata, including partitions");
  const owner = { ...releaseOwner, configuration: () => ({ allowDowngrade: false }), error: (code, message) => new Error(code + ": " + message) };
  const historical = { version: "0.0.1", checksum: "previous-installed-pin", status: "CURRENT" };
  const before = structuredClone(historical);
  assert.equal(owner.validateUpgradePolicy({ ...section, checksum: checksum(section) }, historical), true);
  assert.throws(() => owner.validateUpgradePolicy({ ...section, version: historical.version, checksum: checksum(section) }, historical), /without a version change/);
  assert.deepEqual(historical, before, "Successor validation preserves historical installation evidence");
});

test("Local and Docker administration consume customer profiles without domain services", () => {
  const { loadRuntime, activeModuleNames } = require("./helpers/configuration");
  for (const environment of ["kickoffLocal", "kickoffDockerLocal"]) {
    const platform = loadRuntime("platformServer", environment);
    const modules = activeModuleNames(platform);
    for (const domain of ["apparel", "electronics", "telco"]) {
      assert(modules.includes("agora." + domain));
      assert(!modules.includes(domain), "Content discovery must not activate Commerce domain services");
      const profile = platform.backofficeApplicationInitialization.profiles["agora" + domain];
      assert.equal(profile.dataPackages[1].manifestModule, "agora." + domain);
      const metadata = require(path.join(root, "modules", "agora." + domain, "package.json"));
      assert.deepEqual(metadata.nodics.extends, [domain]);
      assert(Number(metadata.index) > 1000, "Application properties retain customer-layer precedence");
    }
    assert.equal(platform.backofficeApplicationInitialization.profiles.frameworkdocs.enabled, true);
    const online = loadRuntime("wcmsOnlineServer", environment);
    assert(!activeModuleNames(online).some(name => name.startsWith("agora.")));
  }
});

/** Visits string leaves without treating labels or array positions as media identities. */
function visitStrings(value, inspect, key = "") {
  if (typeof value === "string") inspect(value, key);
  else if (value && typeof value === "object") {
    for (const [childKey, child] of Object.entries(value))
      visitStrings(child, inspect, childKey);
  }
}

for (const domain of ["apparel", "electronics", "telco"]) {
  const prefix = "agora" + domain[0].toUpperCase() + domain.slice(1);
  const dataRoot = path.join(root, "modules", "agora." + domain, "data");
  const manifest = require(path.join(dataRoot, "manifest.json"));
  const productRoot = path.join(
    dataRoot,
    manifest.sections[prefix + "CommerceCatalog"].sourceRoot,
    "commerce",
    "records",
  );
  const productCodes = new Set(
    Object.values(
      require(path.join(productRoot, prefix + "ProductData.js")),
    ).map((x) => x.code),
  );
  const contentRoots = fs
    .readdirSync(dataRoot)
    .filter(
      (name) =>
        /^sample-v\d+$/.test(name) &&
        fs.existsSync(path.join(dataRoot, name, "content")),
    );

  test(`${domain} has no unclaimed legacy release files`, () => {
    const { frameworkRoot } = require("./helpers/configuration");
    const releasePolicy = require(path.join(frameworkRoot, "nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService"));
    const retainedRoots = releasePolicy.validateRetainedRoots(dataRoot, manifest);
    const declared = new Set(
      Object.values(manifest.sections).flatMap((section) =>
        Object.keys(section.files),
      ),
    );
    for (const sourceRoot of retainedRoots) {
      for (const file of Object.keys(manifest.retainedRoots[sourceRoot].files)) declared.add(file);
    }
    const files = [];
    const descriptors = new Set(Object.values(manifest.sections).map(section => path.join(dataRoot, section.sourceRoot, "release.descriptor.json")));
    const collect = (directory) => {
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const file = path.join(directory, entry.name);
        if (entry.name === ".DS_Store" || descriptors.has(file)) continue;
        if (entry.isDirectory()) collect(file);
        else if (file !== path.join(dataRoot, "manifest.json"))
          files.push(path.relative(dataRoot, file));
      }
    };
    collect(dataRoot);
    assert.deepEqual(
      new Set(files),
      declared,
      "Every source file must be claimed by a current release or validated historical retention",
    );
  });

  test(`${domain} dashboard artwork references its existing application Media data`, () => {
    const visual = require(path.join(root, "modules", "agora." + domain, "config", "properties.js")).backofficeApplicationVisual;
    const section = manifest.sections[prefix + "ContentCatalog"];
    const records = require(path.join(dataRoot, section.sourceRoot, "content", "records", prefix + "SharedMediaData.js"));
    assert.deepEqual(Object.keys(visual).sort(), ["alt", "mediaCode"]);
    const media = Object.values(records).find(item => item.code === visual.mediaCode);
    assert(media, "Preview must resolve to this application's actual Media record");
    assert(fs.existsSync(path.join(dataRoot, section.sourceRoot, media.asset.sourceFile)));
  });

  test(`${domain} BackOffice application profile is owned by its customer module`, () => {
    const profileCode = "agora" + domain;
    const properties = require(path.join(root, "modules", "agora." + domain, "config", "properties.js"));
    const profile = properties.backofficeApplicationInitialization
      .runtimeRoleProfiles.PLATFORM.profiles[profileCode];
    assert.equal(profile.owner, "agora." + domain);
    assert.equal(profile.presentation.visual, properties.backofficeApplicationVisual);
    assert.equal(
      kickoffCoreProperties.backofficeApplicationInitialization
        .runtimeRoleProfiles.PLATFORM.profiles[profileCode],
      undefined,
      "Project core must not own application-specific profiles",
    );
  });

  for (const sourceRoot of contentRoots) {
    test(`${domain}/${sourceRoot} contains only application media and complete CMS references`, () => {
      const contentRoot = path.join(dataRoot, sourceRoot, "content");
      const assetRoot = path.join(contentRoot, "assets", "agora-cms-media");
      const assets = require(path.join(assetRoot, "assetManifest.js"));
      const records = (suffix) =>
        require(path.join(contentRoot, "records", prefix + suffix + ".js"));
      const components = Object.values(records("SharedComponentData"));
      const componentCodes = new Set(components.map((x) => x.code));
      const mediaCodes = new Set(assets.map((x) => x.mediaCode));
      const references = Object.values(records("SharedMediaReferenceData"));
      const referenceCodes = new Set(references.map((x) => x.code));
      const bindings = Object.values(records("SharedComponentMediaData"));

      assert.equal(
        mediaCodes.size,
        assets.length,
        "Media codes must be unique within a pack",
      );
      assert.deepEqual(
        fs.readdirSync(path.join(assetRoot, "files")).sort(),
        [...new Set(assets.map((x) => x.fileName))].sort(),
        "Physical media files and declared assets must match exactly",
      );
      for (const asset of assets) {
        if (domain === "apparel") {
          assert.doesNotMatch(
            asset.mediaCode,
            /^agora-owned-(electronics|telco)-/,
            "Apparel must not import another application's hero or product media",
          );
        } else {
          assert.ok(
            asset.mediaCode.startsWith(`agora-owned-${domain}-`),
            `${asset.mediaCode} does not belong to ${domain}`,
          );
        }
        const owners =
          asset.ownerType === "PRODUCT" ? productCodes : componentCodes;
        assert.ok(
          owners.has(asset.ownerCode),
          `Missing asset owner ${asset.ownerCode}`,
        );
      }
      assert.deepEqual(
        new Set(Object.values(records("SharedMediaData")).map((x) => x.code)),
        mediaCodes,
        "Imported Media records must exactly follow the owned asset manifest",
      );
      for (const reference of references) {
        assert.ok(
          mediaCodes.has(reference.mediaCode),
          `Dangling media reference ${reference.code}`,
        );
        const owners =
          reference.ownerSchema === "product" ? productCodes : componentCodes;
        assert.ok(
          owners.has(reference.ownerCode),
          `Missing reference owner ${reference.ownerCode}`,
        );
      }
      for (const binding of bindings) {
        assert.ok(
          mediaCodes.has(binding.mediaCode),
          `Dangling component media ${binding.mediaCode}`,
        );
        assert.ok(
          componentCodes.has(binding.componentCode),
          `Missing binding owner ${binding.componentCode}`,
        );
      }
      for (const product of Object.values(
        require(path.join(productRoot, prefix + "ProductData.js")),
      )) {
        visitStrings(product.media, (value) => {
          if (value.startsWith("agora-owned-"))
            assert.ok(mediaCodes.has(value), `Unknown product media ${value}`);
        });
      }
      for (const component of components) {
        visitStrings(component.properties, (value, key) => {
          if (/mediaCode$/i.test(key))
            assert.ok(
              mediaCodes.has(value),
              `Unknown component media ${value}`,
            );
          if (key === "mediaReferenceCode")
            assert.ok(referenceCodes.has(value), `Unknown reference ${value}`);
        });
        if (domain !== "apparel") {
          const properties = JSON.stringify(component.properties);
          assert.doesNotMatch(
            properties,
            /Capsule offers|Texture edit|Shop the look|complete the look|\/c\/men/,
            "Electronics/Telco components must not retain copied fashion merchandising",
          );
        }
      }
      for (const page of Object.values(records("PageData"))) {
        for (const placement of page.cmsComponents) {
          assert.ok(
            componentCodes.has(placement.target),
            `${page.code} references absent component ${placement.target}`,
          );
        }
      }
      const hero = components.find(
        (x) => x.code === prefix + "HomeHeroExperience",
      );
      const heroBindings = bindings
        .filter((x) => x.componentCode === hero.code)
        .sort((a, b) => a.position - b.position);
      assert.deepEqual(
        heroBindings.map((x) => x.mediaCode),
        hero.properties.slides.map((x) => x.mediaCode),
        "Published hero bindings must match the application-specific slide images",
      );
    });
  }
}
