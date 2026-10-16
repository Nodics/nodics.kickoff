/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
"use strict";
/** Reads frozen release evidence, separately from current successor assertions. */
const sharedScopes = new Set([
  "profile",
  "location",
  "waste",
  "loyalty",
  "content",
  "commerce",
  "operations",
  "circaCommerceStaffAssignments",
  "customer-workspace",
  "sunmarke-profile",
  "sunmarke-location",
  "sunmarke-waste",
  "circaPublicationPlan",
  "store",
]);

/** Restores the admission scope used by the original historical seals. */
function historicalSection(code) {
  const before = require("../fixtures/circaPreExtractionManifest.json")
    .sections[code];
  if (!before) throw new Error("Missing historical Circa section: " + code);
  const selected = structuredClone(before);
  return {
    ...selected,
    environmentScope:
      code === "waste-policy"
        ? ["ALL"]
        : sharedScopes.has(code)
          ? ["LOCAL", "LOCAL_PRODUCTION_SIMULATION"]
          : ["LOCAL"],
  };
}

/** Reads the unchanged original export before a reviewed fresh-ownership append. */
function historicalPayload(file) {
  const fs = require("node:fs"),
    path = require("node:path");
  const { createRequire } = require("node:module");
  const { frameworkRoot } = require("../../../../test/helpers/configuration");
  const source = fs.readFileSync(file, "utf8");
  const tree = createRequire(path.join(frameworkRoot, "package.json"))(
    "acorn",
  ).parse(source, { ecmaVersion: "latest" });
  const exported = tree.body.find(
    (node) =>
      node.expression?.type === "AssignmentExpression" &&
      node.expression.left.object?.name === "module" &&
      node.expression.left.property?.name === "exports",
  );
  if (!exported) throw new Error("Historical export missing: " + file);
  const end = source.indexOf("\n", exported.end);
  if (end < 0) throw new Error("Historical newline missing: " + file);
  return source.slice(0, end + 1);
}

module.exports = { historicalSection, historicalPayload };
