"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const locations = require("../data/sample-v001/location/records/circaLocationData");
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

const distance = (a, b) => {
  const rad = Math.PI / 180;
  const h =
    Math.sin(((b.latitude - a.latitude) * rad) / 2) ** 2 +
    Math.cos(a.latitude * rad) *
      Math.cos(b.latitude * rad) *
      Math.sin(((b.longitude - a.longitude) * rad) / 2) ** 2;
  return (
    6371000 *
    2 *
    Math.atan2(Math.sqrt(Math.min(1, h)), Math.sqrt(Math.max(0, 1 - h)))
  );
};

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
