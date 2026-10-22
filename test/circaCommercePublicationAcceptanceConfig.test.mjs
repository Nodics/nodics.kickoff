/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/**
 * @module test/circaCommercePublicationAcceptanceConfig
 * @description Verifies Circa source selection and kickoffLocal receipt evidence through Product's owner validator.
 * @layer test
 * @owner nodics.kickoff
 */
import assert from "node:assert/strict";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";

const require = createRequire(import.meta.url);
const { frameworkRoot, loadRuntime } = require("./helpers/configuration");
const circaProperties = require("../modules/circa.ewaste/config/properties");
const localProperties = require("../envs/kickoffLocal/commerceStagedServer/config/properties");
const publicationPlan = require("../modules/circa.ewaste/data/sample-v001/publication/media-current-catalogue/records/publicationPlan.json");
const { commerceProductPublicationFixtures } = await import(
  pathToFileURL(
    path.join(
      frameworkRoot,
      "nodics.commerce/modules/baseCommerce/modules/product/src/service/acceptance/defaultCommercePublicationAcceptanceService.mjs",
    ),
  )
);

test("Circa owns expected catalogue scope while kickoffLocal owns only retained receipt evidence", () => {
  const source = circaProperties.tooling.acceptance.circaCommercePublication;
  assert.equal(source.catalogs.length, 1);
  assert.deepEqual(Object.keys(source.catalogs[0]).sort(), [
    "catalogVersion",
    "locale",
    "mediaModules",
    "productCodes",
    "storeCode",
  ]);
  assert.equal(source.catalogs[0].catalogVersion, "circaStaged");
  assert.equal(source.catalogs[0].storeCode, "circaMainStore");
  assert.equal(source.catalogs[0].locale, "en");
  assert.deepEqual(source.catalogs[0].mediaModules, ["circa.ewaste"]);
  assert.deepEqual(
    source.catalogs[0].productCodes,
    publicationPlan.items
      .filter((item) => item.domain === "product")
      .map((item) => item.rootCode),
  );

  const local = localProperties.tooling.acceptance.circaCommercePublication;
  assert.deepEqual(Object.keys(local.catalogs[0]), ["publications"]);
  assert.equal(
    Object.hasOwn(localProperties.tooling.acceptance, "commercePublication"),
    false,
  );
});

test("effective kickoffLocal Circa profile preserves Agora default and passes Product receipt coverage", () => {
  const acceptance = loadRuntime("commerceStagedServer", "kickoffLocal").tooling
    .acceptance;
  assert.deepEqual(
    acceptance.commercePublication.catalogs.map(
      (catalog) => catalog.catalogVersion,
    ),
    ["agoraApparelStaged", "agoraElectronicsStaged", "agoraTelcoStaged"],
  );

  const catalog = acceptance.circaCommercePublication.catalogs[0];
  assert.equal(catalog.productCodes.length, 43);
  assert.equal(commerceProductPublicationFixtures(catalog).length, 43);
  assert.deepEqual(
    catalog.publications.product.map((receipt) => ({
      code: receipt.code,
      rootCode: receipt.rootCode,
      sourceVersion: receipt.sourceVersion,
    })),
    publicationPlan.items
      .filter((item) => item.domain === "product")
      .map((item) => ({
        code: item.code,
        rootCode: item.rootCode,
        sourceVersion: String(item.sourceVersion),
      })),
  );
  for (const receipt of catalog.publications.product) {
    assert.match(receipt.targetVersion, /^[a-f0-9]{64}$/);
  }
  assert.deepEqual(Object.keys(catalog.publications).sort(), [
    "inventory",
    "media",
    "pricing",
    "product",
    "promotion",
    "tax",
  ]);
  assert.equal(
    crypto
      .createHash("sha256")
      .update(JSON.stringify(catalog.publications))
      .digest("hex"),
    "88b062d667b7481e62d7dc37414bde9c7f6106fd599cab8548a5edd215bd8b68",
    "kickoffLocal retained receipt selection changed without an explicit evidence update",
  );
});
