"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const fs = require("node:fs");
const crypto = require("node:crypto");
const locations = require("../data/sample-v001/location/records/circaLocationData");

test("Circa data sources are claimed by current manifests with matching payload checksums", () => {
  const root = path.resolve(__dirname, "../data");
  const manifest = require("../data/manifest.json");
  const releasePolicy = require(path.join(frameworkRoot, 'nodics.foundation/modules/nData/nImport/import/src/service/release/defaultDataReleaseService'));
  releasePolicy.validateRetainedRoots(root, manifest);
  const claimed = new Map([
    ...Object.values(manifest.sections).flatMap(section => Object.entries(section.files)),
    ...Object.values(manifest.retainedRoots || {}).flatMap(retained => Object.entries(retained.files))
  ]);
  const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
  const files = walk(root).map(file => path.relative(root, file))
    .filter(file => file !== "manifest.json" && !file.endsWith("release.descriptor.json") && !file.endsWith(".DS_Store"));
  assert.deepEqual(new Set(files), new Set(claimed.keys()));
  for (const [file, hash] of claimed) {
    assert.equal(crypto.createHash("sha256").update(fs.readFileSync(path.join(root, file))).digest("hex"), hash, file);
  }
  const section = manifest.sections["sunmarke-location"];
  const descriptor = require(path.join(root, section.sourceRoot, "release.descriptor.json"));
  assert.equal(descriptor.sections["sunmarke-location"].capability.code, "circa.ewaste.sunmarke");
});
const frameworkRoot = path.resolve(
  __dirname,
  process.env.NODICS_FRAMEWORK_ROOT || "../../../../nodics.ai",
);
const sharedLocations = require(
  path.join(
    frameworkRoot,
    "nodics.waste/modules/wasteCollection/data/sample-v001/records/location/sampleCollectionCentreLocationData",
  ),
);

const { distance } = require(path.join(
  frameworkRoot,
  "nodics.location/modules/locationCore/src/service/defaultLocationDistanceService",
));

test("Motor City sample collection point stays at First Avenue Mall coordinates", () => {
  const motorCity = Object.values(locations).find(
    (record) => record.code === "cc-dxb-02-location",
  );
  const alHawai = Object.values(locations).find(
    (record) =>
      record.code ===
      "LOC_SAMPLE_COLLECTION_CENTRE_AL_HAWAI_RESIDENCE_BARSHA_HEIGHTS",
  ) || Object.values(sharedLocations).find(
    (record) =>
      record.code ===
      "LOC_SAMPLE_COLLECTION_CENTRE_AL_HAWAI_RESIDENCE_BARSHA_HEIGHTS",
  );
  assert(motorCity, "Motor City collection point must exist");
  assert(alHawai, "Al-Hawai comparison point must exist");
  assert(
    motorCity.latitude > 25.04 && motorCity.latitude < 25.06,
    "Motor City latitude must remain in Motor City, not Barsha Heights",
  );
  assert(
    motorCity.longitude > 55.23 && motorCity.longitude < 55.25,
    "Motor City longitude must remain in Motor City, not Barsha Heights",
  );
  assert(
    distance(motorCity, alHawai) > 8000,
    "Motor City must not appear within 1 km of Barsha Heights",
  );
});

test("Sunmarke uses the official school place pin, not the Google Maps viewport centre", () => {
  const rows = require('../data/sample-v003/sunmarke-location/records/sunmarkeLocationData');
  const school = Object.values(rows).find(row => row.code === 'cc-dxb-sunmarke-jvt-location');
  assert(school);
  assert.equal(school.latitude, 25.0469679);
  assert.equal(school.longitude, 55.193292);
  assert(distance(school, {latitude:25.0951632,longitude:55.1714816}) > 5000);
});
