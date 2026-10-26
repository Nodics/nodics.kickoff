/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/**
 * @module scripts/acceptance/prerequisites/circaDigitalBundlePublicationPrerequisite
 * @description Verifies that a Circa Digital bundle-publication selection references existing project source records.
 * @layer project-acceptance
 * @owner nodics.kickoff
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const acceptanceName = "circaDigitalBundlePublication";

function sourceFiles(root, predicate) {
  const files = [];
  if (!fs.existsSync(root)) return files;
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const target = path.join(root, entry.name);
    if (entry.isDirectory()) files.push(...sourceFiles(target, predicate));
    else if (predicate(target)) files.push(target);
  }
  return files;
}

function loadSource(file) {
  delete require.cache[require.resolve(file)];
  return require(file);
}

/** Builds a bounded index from Circa's governed source headers and record files. */
export function circaOwnerSourceRecordIndex(projectRoot) {
  const dataRoot = path.join(projectRoot, "modules/circa.ewaste/data");
  const allFiles = sourceFiles(dataRoot, file => /\.(?:js|json)$/u.test(file));
  const recordFiles = allFiles.filter(file => file.includes(`${path.sep}records${path.sep}`));
  const records = new Map();

  for (const headerFile of allFiles.filter(file => file.includes(`${path.sep}headers${path.sep}`))) {
    const header = loadSource(headerFile);
    for (const [moduleName, definitions] of Object.entries(header || {})) {
      for (const definition of Object.values(definitions || {})) {
        const schema = definition?.options?.schemaName;
        const prefix = definition?.options?.dataFilePrefix;
        if (definition?.options?.enabled !== true || typeof schema !== "string" || typeof prefix !== "string") continue;
        for (const recordFile of recordFiles.filter(file => path.basename(file, path.extname(file)) === prefix)) {
          for (const record of Object.values(loadSource(recordFile) || {})) {
            if (typeof record?.code !== "string") continue;
            records.set(`${moduleName}:${schema}:${record.code}`, Object.freeze({ module: moduleName, schema, code: record.code }));
          }
        }
      }
    }
  }
  return records;
}

/**
 * Refuses Digital publication until the project profile is owner-valid and every
 * selected certificate/carbon component exists in Circa's governed source.
 */
export async function inspectCircaDigitalBundlePublicationPrerequisite({ projectRoot, frameworkRoot }) {
  const records = circaOwnerSourceRecordIndex(projectRoot);
  const certificateRecords = [...records.values()].filter(record =>
    record.module === "wasteCore" && record.schema === "wasteAsset");
  const realizedCarbonRecords = [...records.values()].filter(record =>
    record.module === "wasteCarbon" && record.schema === "wasteCarbonLot");
  const projectProperties = loadSource(path.join(projectRoot, "modules/circa.ewaste/config/properties.js"));
  const selection = projectProperties?.tooling?.acceptance?.[acceptanceName];
  const evidence = Object.freeze({
    acceptanceName,
    profilePresent: Boolean(selection),
    certificateRecordCount: certificateRecords.length,
    realizedCarbonRecordCount: realizedCarbonRecords.length,
  });

  if (!selection) {
    return Object.freeze({ ready: false, reasonCode: "CIRCA_DIGITAL_BUNDLE_PUBLICATION_PROFILE_REQUIRED", evidence });
  }

  const ownerModule = await import(pathToFileURL(path.join(
    frameworkRoot,
    "nodics.commerce/modules/digitalCommerce/modules/digitalCore/src/service/acceptance/defaultDigitalBundlePublicationAcceptanceService.mjs",
  )).href);
  const digitalProperties = loadSource(path.join(
    frameworkRoot,
    "nodics.commerce/modules/digitalCommerce/modules/digitalCore/config/properties.js",
  ));
  try {
    ownerModule.digitalBundlePublicationSelection({
      execute: true,
      maximumComponents: digitalProperties?.digitalCore?.bundles?.maximumComponents,
      digitalBaseUrl: "http://127.0.0.1:4350",
      productBaseUrl: "http://127.0.0.1:4352",
      selection,
      sessions: {
        participant: { authorization: "Bearer source-prerequisite-check", enterpriseCode: selection.owner?.enterpriseCode },
        digitalRuntime: { authorization: "Bearer source-prerequisite-check", enterpriseCode: selection.listing?.storeEnterpriseCode },
        productRuntime: { authorization: "Bearer source-prerequisite-check", enterpriseCode: selection.listing?.storeEnterpriseCode },
      },
    });
  } catch (error) {
    return Object.freeze({ ready: false, reasonCode: error?.code || "CIRCA_DIGITAL_BUNDLE_PUBLICATION_PROFILE_INVALID", evidence });
  }

  for (const component of selection.manifest.components) {
    const key = `${component.reference.module}:${component.reference.schema}:${component.reference.code}`;
    if (!records.has(key)) {
      return Object.freeze({
        ready: false,
        reasonCode: component.kind === "REALIZED_CARBON"
          ? "CIRCA_REALIZED_CARBON_OWNER_RECORD_REQUIRED"
          : "CIRCA_CERTIFICATE_OWNER_RECORD_REQUIRED",
        evidence,
      });
    }
  }
  return Object.freeze({ ready: true, reasonCode: null, evidence });
}
