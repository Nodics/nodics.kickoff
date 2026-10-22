/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module test/circaBiddingAuctionAcceptanceFixture
 * @description Verifies Circa's project-owned Bidding selection and thin Product delegation adapter.
 * @layer test
 * @owner nodics.kickoff
 */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createRequire } from "node:module";
import { advanceRepublish } from "../scripts/acceptance/adapters/circaBiddingRepublishAdapter.mjs";

const require = createRequire(import.meta.url);
const fixtureUrl = new URL("../scripts/acceptance/fixtures/circa-bidding-auction.json", import.meta.url);
const fixture = JSON.parse(await readFile(fixtureUrl, "utf8"));
const assets = Object.values(require(
  "../modules/circa.ewaste/data/sample-v001/waste/records/circaWasteAssetData.js",
));

test("auction selection uses existing Circa asset, tenant and Store identities without credentials", () => {
  assert.equal(fixture.contractVersion, 1);
  assert.equal(fixture.tenant, "default");
  assert.equal(fixture.storeCode, "circaMainStore");
  assert.equal(fixture.maximumWaitMs, 3600000);
  assert.deepEqual(Object.keys(fixture.cases), [
    "lifecycle",
    "manualSelection",
    "automaticTie",
    "cancellationRepublish",
    "noBid",
    "failedAward",
  ]);

  const assetCodes = new Set(assets.map((asset) => asset.code));
  const listings = Object.values(fixture.cases).map((entry) => entry.listing);
  assert.equal(new Set(listings.map((listing) => listing.productCode)).size, listings.length);
  for (const listing of listings) {
    const assetCode = listing.productCode.replace(/^CIRCA_ASSET_/u, "");
    assert(assetCodes.has(assetCode), `${listing.productCode} must use an existing Circa asset identity`);
    assert.equal(listing.variantCode, `${listing.productCode}_VARIANT`);
    assert.match(listing.publicationCode, /^bundle-operation:[a-f0-9]{64}$/u);
  }
  assert.match(fixture.cases.cancellationRepublish.replacementPublicationCode,
    /^bundle-operation:[a-f0-9]{64}$/u);
  assert.notEqual(
    fixture.cases.cancellationRepublish.listing.publicationCode,
    fixture.cases.cancellationRepublish.replacementPublicationCode,
  );
  assert.doesNotMatch(JSON.stringify(fixture), /password|secret|credential|authorization|bearer|token/iu);
});

test("republish adapter invokes only canonical Product prepare and publish authority", async () => {
  const calls = [];
  const evidence = {
    caseCode: "cancellationRepublish",
    productCode: fixture.cases.cancellationRepublish.listing.productCode,
    previousPublicationCode: fixture.cases.cancellationRepublish.listing.publicationCode,
    replacementPublicationCode: fixture.cases.cancellationRepublish.replacementPublicationCode,
    cancelledRoundCode: "AUCTION_CANCELLED_1",
  };
  const response = (phase) => Response.json({ data: {
    confirmed: true,
    status: phase === "publish" ? "ONLINE" : "PREPARED",
    productCode: evidence.productCode,
    publicationCode: evidence.replacementPublicationCode,
    storeCode: "circaMainStore",
    receiptCode: phase === "publish" ? "product-receipt-1" : undefined,
  } });
  const result = await advanceRepublish(evidence, {
    environment: {
      NODICS_BIDDING_PRODUCT_ORIGIN: "http://127.0.0.1:4352",
      NODICS_BIDDING_PRODUCT_TOKEN: "runtime-product-token",
      NODICS_BIDDING_PRODUCT_TIMEOUT_MS: "30000",
    },
    fetch: async (url, request) => {
      const phase = new URL(url).pathname.endsWith("/prepare") ? "prepare" : "publish";
      calls.push({ url: String(url), request, phase });
      return response(phase);
    },
  });

  assert.deepEqual(calls.map((call) => new URL(call.url).pathname), [
    "/nodics/product/v0/internal/products/bundle-listings/prepare",
    "/nodics/product/v0/internal/products/bundle-listings/publish",
  ]);
  for (const call of calls) {
    assert.equal(call.request.method, "POST");
    assert.equal(call.request.headers.Authorization, "Bearer runtime-product-token");
    assert.equal(call.request.headers.tenant, "default");
    assert.equal(call.request.headers["x-enterprise-code"], "GREENPERKS_ONLINE");
    assert.deepEqual(JSON.parse(call.request.body), {
      operationCode: evidence.replacementPublicationCode,
      storeCode: "circaMainStore",
    });
  }
  assert.deepEqual(result, {
    confirmed: true,
    productCode: evidence.productCode,
    publicationCode: evidence.replacementPublicationCode,
    storeCode: "circaMainStore",
    status: "ONLINE",
    receiptCode: "product-receipt-1",
  });
});

test("republish adapter refuses malformed evidence, remote targets and uncertain owner receipts", async () => {
  const evidence = {
    caseCode: "cancellationRepublish",
    productCode: fixture.cases.cancellationRepublish.listing.productCode,
    previousPublicationCode: fixture.cases.cancellationRepublish.listing.publicationCode,
    replacementPublicationCode: fixture.cases.cancellationRepublish.replacementPublicationCode,
    cancelledRoundCode: "AUCTION_CANCELLED_1",
  };
  const local = {
    NODICS_BIDDING_PRODUCT_ORIGIN: "http://127.0.0.1:4352",
    NODICS_BIDDING_PRODUCT_TOKEN: "runtime-product-token",
    NODICS_BIDDING_PRODUCT_TIMEOUT_MS: "30000",
  };
  let calls = 0;
  const fetch = async () => {
    calls += 1;
    return Response.json({ data: {
      confirmed: true,
      productCode: "another-product",
      publicationCode: evidence.replacementPublicationCode,
    } });
  };
  await assert.rejects(advanceRepublish({ ...evidence, extra: true }, { environment: local, fetch }),
    /EXACT_PRODUCT_REPUBLISH_EVIDENCE_REQUIRED/);
  await assert.rejects(advanceRepublish(evidence, {
    environment: { ...local, NODICS_BIDDING_PRODUCT_ORIGIN: "https://commerce.example.test" }, fetch,
  }), /LOCAL_PRODUCT_ORIGIN_REQUIRED/);
  assert.equal(calls, 0);
  await assert.rejects(advanceRepublish(evidence, { environment: local, fetch }),
    /PRODUCT_REPLACEMENT_PREPARATION_UNCONFIRMED/);
  assert.equal(calls, 1);
});
