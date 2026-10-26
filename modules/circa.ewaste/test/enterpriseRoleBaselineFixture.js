/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** @module circa.ewaste/test/enterpriseRoleBaselineFixture @description Test-only discovery of sealed owner identity dependencies, not a runtime role resolver. @owner circa.ewaste @layer test */
const fs = require("node:fs"), path = require("node:path"), crypto = require("node:crypto");
const { frameworkRoot } = require("../../../test/helpers/configuration");
const modules = require(path.join(frameworkRoot, "nodics.foundation/modules/nTooling/src/service/context/defaultModuleLlmContextUtilsService")).scanModules(frameworkRoot);
const roots = Object.fromEntries(modules.map(m => [m.name, m.path]));
roots["circa.ewaste"] = path.resolve(__dirname, "..");
const hash = value => crypto.createHash("sha256").update(value).digest("hex");
const releases = new Map(), roles = {}, groups = {}, permissions = {};
function visit(owner, code) {
  const key = owner + ":" + code;
  if (releases.has(key)) return releases.get(key);
  const section = require(path.join(roots[owner], "data/manifest.json")).sections[code];
  if (!section) throw Error("Missing release " + key);
  const prerequisites = (section.prerequisites || []).map(r => ({moduleName:r.moduleName, sectionCode:r.sectionCode, version:r.version, checksum:r.checksum, ...(r.partition ? {partition:r.partition} : {})}));
  const checksum = hash(Object.keys(section.files).sort().map(file => file + ":" + section.files[file]).join("|") + (prerequisites.length ? "|prerequisites:" + JSON.stringify(prerequisites) : ""));
  const release = {owner, code, section, checksum};
  releases.set(key, release);
  for (const ref of prerequisites) {
    const target = visit(ref.moduleName, ref.sectionCode);
    if (ref.version !== target.section.version || ref.checksum !== target.checksum) throw Error("Drifted prerequisite " + key + " -> " + ref.moduleName + ":" + ref.sectionCode);
  }
  for (const [file, expected] of Object.entries(section.files)) {
    const absolute = path.join(roots[owner], "data", file);
    if (hash(fs.readFileSync(absolute)) !== expected) throw Error("Drifted file " + absolute);
    if (!file.includes("/headers/") || !file.endsWith(".js")) continue;
    for (const header of Object.values(require(absolute).profile || {})) {
      const {schemaName, dataFilePrefix} = header.options;
      const target = {enterpriseRole:roles, userGroup:groups, permission:permissions}[schemaName];
      if (!target) continue;
      const recordFile = Object.keys(section.files).find(f => path.basename(f) === dataFilePrefix + ".js");
      if (!recordFile) throw Error("Missing identity records " + dataFilePrefix);
      for (const row of Object.values(require(path.join(roots[owner], "data", recordFile)))) {
        if (target[row.code]) throw Error("Duplicate destination identity " + row.code);
        target[row.code] = row;
      }
    }
  }
  return release;
}
const setup = require("../config/properties").backofficeApplicationInitialization.profiles.circa.dataPackages.value;
for (const pack of setup.filter(pack => pack.order === 90)) visit(...pack.code.split(":"));
visit("circa.ewaste", "circaCommerceStaffAssignments");
// Existing native Waste administrator ancestry is part of the demo employee composition.
visit("wasteCore", "accessGroups");
function effective(groupCodes, visited = new Set()) {
  const result = new Set();
  for (const code of groupCodes) {
    if (visited.has(code)) continue;
    visited.add(code);
    const group = groups[code];
    if (!group || group.active !== true) throw Error("Missing active group " + code);
    for (const permission of [...(group.permissions || []), ...effective(group.parentGroups || [], visited)]) result.add(permission);
  }
  return [...result].sort();
}
module.exports = {roles, groups, permissions, releases, effective, roots};
