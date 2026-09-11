"use strict";

/** @module circa.ewaste/service/defaultCircaCatalogueService @description Circa storefront read composition over published Commerce Products and Waste descriptors. No product, ownership, pricing or settlement state is written here. @layer service @owner circa.ewaste */
module.exports = {
  /** Reads customer catalogue presentation limits; store/currency authority remains eWaste configuration. */
  settings: function () {
    return CONFIG.get("circaEWaste").catalogue;
  },
  /** Uses the existing domain transport and persistence boundary. */
  experience: function () {
    return SERVICE.DefaultEWasteExperienceService;
  },
  /** Rejects invalid input without exposing records or provider details. */
  fail: function (message, status = 400) {
    const error = new Error(message);
    error.statusCode = status;
    throw error;
  },
  /** Validates flat URL selectors before they can reach an owning read. */
  selectors: function (input = {}) {
    const text = (key, maximum = 180) => {
      const value = input[key] ?? "";
      if (typeof value !== "string" || value.length > maximum)
        this.fail("Invalid catalogue filter: " + key);
      return value.trim();
    };
    const integer = (key, fallback, max) => {
      const raw = text(key, 8);
      if (raw && (!/^[1-9]\d*$/.test(raw) || Number(raw) > max))
        this.fail("Invalid catalogue page");
      return raw ? Number(raw) : fallback;
    };
    const amount = (key) => {
      const raw = text(key, 16);
      if (
        raw &&
        (!/^\d+(\.\d{1,2})?$/.test(raw) || !Number.isFinite(Number(raw)))
      )
        this.fail("Invalid points range");
      return raw;
    };
    const kind = text("kind"),
      sort = text("sort") || "FEATURED",
      validUntil = text("validUntil", 10);
    if (!["ASSET", "COUPON"].includes(kind))
      this.fail("Choose assets or coupons");
    if (
      ![
        "FEATURED",
        "POINTS_ASC",
        "POINTS_DESC",
        "NAME",
        ...(kind === "COUPON" ? ["EXPIRY"] : []),
      ].includes(sort)
    )
      this.fail("Invalid catalogue sort");
    if (
      validUntil &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(validUntil) ||
        !Number.isFinite(Date.parse(validUntil)) ||
        new Date(validUntil).toISOString().slice(0, 10) !== validUntil)
    )
      this.fail("Invalid validity date");
    const minPoints = amount("minPoints"),
      maxPoints = amount("maxPoints");
    if (minPoints && maxPoints && Number(minPoints) > Number(maxPoints))
      this.fail("Minimum points must not exceed maximum points");
    return {
      kind,
      sort,
      validUntil,
      minPoints,
      maxPoints,
      q: text("q"),
      category: text("category"),
      condition: text("condition"),
      issuer: text("issuer"),
      page: integer("page", 1, 10000),
      pageSize: integer(
        "pageSize",
        this.settings().pageSize,
        this.settings().maximumPageSize,
      ),
    };
  },
  /** Calls only the configured store's published Product customer API. Caller store/runtime fields are never forwarded. */
  products: function (request, path, page) {
    const storeCode = this.experience().settings().marketplace.storeCode;
    const query = new URLSearchParams({ storeCode, locale: "en" });
    if (page) {
      query.set("page", String(page));
      query.set("pageSize", String(this.settings().discoveryBatchSize));
    }
    return this.experience().remote(
      request,
      "product",
      "commerce",
      path + "?" + query,
      "GET",
    );
  },
  /** Reads all published store pages for a consistent Circa facet/count projection; fails explicitly at the configured bound. */
  published: async function (request) {
    const products = [],
      seen = new Set(),
      batch = this.settings().discoveryBatchSize;
    for (
      let page = 1;
      page <= Math.ceil(this.settings().maximumProducts / batch) + 1;
      page++
    ) {
      if (request.isCancelled?.())
        this.fail("Catalogue request cancelled", 499);
      const response = await this.products(
        request,
        "/products/discovery",
        page,
      );
      if (!Array.isArray(response.products))
        this.fail("Catalogue is temporarily unavailable", 503);
      for (const product of response.products) {
        if (seen.has(product.productCode))
          this.fail(
            "Catalogue changed while loading. Refresh your results.",
            503,
          );
        seen.add(product.productCode);
        products.push(product);
        if (products.length > this.settings().maximumProducts)
          this.fail("Catalogue exceeds its configured browsing limit", 503);
      }
      if (response.products.length < batch) return products;
    }
    this.fail("Catalogue is temporarily unavailable", 503);
  },
  /** Projects customer-facing copy only; arbitrary localized attributes are never serialized. */
  copyLines: function (value) {
    return (
      Array.isArray(value) ? value : typeof value === "string" ? [value] : []
    )
      .filter((item) => typeof item === "string" && item.trim())
      .slice(0, 30)
      .map((item) => item.slice(0, 4000));
  },
  /** Allows browser-safe public Product media URLs only. */
  mediaUrl: function (value) {
    return typeof value === "string" &&
      (/^https?:\/\//i.test(value) || /^\/(?!\/)/.test(value))
      ? value
      : null;
  },
  /** Composes a published product with its current listed asset; private Waste evidence and customer details are excluded. */
  offer: async function (request, product, catalogue) {
    const attrs = product.localizedAttributes || {},
      price = product.price;
    if (
      !["ASSET", "COUPON"].includes(attrs.kind) ||
      !price ||
      price.currency !== this.experience().settings().marketplace.currency ||
      !Number.isFinite(Number(price.unitAmount)) ||
      Number(price.unitAmount) <= 0
    )
      return null;
    if (
      attrs.expiresAt &&
      (!Number.isFinite(Date.parse(attrs.expiresAt)) ||
        Date.parse(attrs.expiresAt) <= Date.now())
    )
      return null;
    let asset, descriptor;
    if (attrs.kind === "ASSET") {
      if (
        typeof attrs.assetCode !== "string" ||
        !/^[A-Za-z0-9][A-Za-z0-9._-]{0,179}$/.test(attrs.assetCode)
      )
        return null;
      asset = await this.experience()
        .store()
        .one("wasteAsset", request, attrs.assetCode);
      if (
        !asset ||
        asset.active === false ||
        asset.assetStatus !== "LISTED" ||
        (asset.metadata?.marketProductCode &&
          asset.metadata.marketProductCode !== product.productCode)
      )
        return null;
      descriptor = {
        ...SERVICE.DefaultWasteItemDescriptorService.describe(asset, catalogue),
        photo: null,
      };
    }
    const media = [
        product.media?.primary,
        ...(product.media?.gallery || []),
        { url: attrs.imageUrl },
      ],
      gallery = [];
    for (const image of media) {
      const url = this.mediaUrl(
        typeof image === "string" ? image : image?.url || image?.deliveryUrl,
      );
      if (url && !gallery.some((item) => item.url === url))
        gallery.push({
          url,
          alt:
            typeof image?.altText === "string" ? image.altText : product.name,
        });
    }
    const classification = descriptor?.classification?.category;
    return {
      code: product.productCode,
      kind: attrs.kind,
      name: product.name,
      description: product.description || product.summary,
      issuer: attrs.issuer,
      rewardPrice: Number(price.unitAmount),
      currency: price.currency,
      revision: asset ? asset.revision : product.version,
      variantCode: (product.variantCodes || [])[0],
      imageUrl: gallery[0]?.url,
      gallery,
      expiresAt: attrs.expiresAt,
      category: classification
        ? {
            code: classification.code,
            label:
              typeof classification.name === "string"
                ? classification.name
                : classification.name?.en || classification.code,
          }
        : null,
      condition: descriptor?.condition?.value || null,
      available: product.availability?.available !== false,
      terms: this.copyLines(attrs.terms),
      eligibility: this.copyLines(attrs.eligibility),
      exclusions: this.copyLines(attrs.exclusions),
      redemptionInstructions: this.copyLines(attrs.redemptionInstructions),
      saleMode: attrs.saleMode,
      purchaseConditions: this.copyLines(attrs.purchaseConditions),
      ...(asset
        ? {
            assetCode: asset.code,
            descriptor,
            ownerCode: asset.ownerRef?.code,
            carbonUnits: Number(asset.metadata?.illustrativeCarbonUnits || 0),
            biddingAvailable:
              attrs.ownerRef?.module === "profile" &&
              attrs.ownerRef?.schema === "customer" &&
              attrs.ownerRef?.code === asset.ownerRef?.code &&
              attrs.sourceRef?.module === "wasteCore" &&
              attrs.sourceRef?.schema === "wasteAsset" &&
              attrs.sourceRef?.code === asset.code &&
              attrs.commerceBidding?.enabled !== false,
          }
        : {}),
    };
  },
  /** Provides the same Circa catalogue to existing eWaste purchase/bid discovery through its supported service extension. */
  marketplace: async function (request) {
    const products = await this.published(request);
    const catalogue = products.some(
      (product) => product.localizedAttributes?.kind === "ASSET",
    )
      ? await SERVICE.DefaultWasteItemDescriptorService.catalogue(request)
      : {};
    const output = { assets: [], coupons: [] };
    // Bounded batches avoid unbounded generated-repository reads for larger catalogues.
    for (let offset = 0; offset < products.length; offset += 10) {
      const offers = await Promise.all(
        products
          .slice(offset, offset + 10)
          .map((product) => this.offer(request, product, catalogue)),
      );
      for (const offer of offers)
        if (offer)
          output[offer.kind === "ASSET" ? "assets" : "coupons"].push(offer);
    }
    return output;
  },
  /** Serves server-filtered, deterministically sorted and paginated Circa cards with complete kind-specific facets. */
  catalogue: async function (request) {
    const query = this.selectors(request.query),
      market = await this.marketplace(request);
    const all = query.kind === "ASSET" ? market.assets : market.coupons;
    const options = (key) =>
      [...new Set(all.map((offer) => offer[key]).filter(Boolean))]
        .sort()
        .map((value) => ({ code: value, label: value }));
    const categories = [
      ...new Map(
        all
          .filter((offer) => offer.category?.code)
          .map((offer) => [offer.category.code, offer.category]),
      ).values(),
    ].sort((a, b) => a.label.localeCompare(b.label));
    let offers = all.filter(
      (offer) =>
        (!query.q ||
          [offer.name, offer.description, offer.issuer, offer.code]
            .join(" ")
            .toLowerCase()
            .includes(query.q.toLowerCase())) &&
        (!query.category || offer.category?.code === query.category) &&
        (!query.condition || offer.condition === query.condition) &&
        (!query.issuer || offer.issuer === query.issuer) &&
        (!query.minPoints || offer.rewardPrice >= Number(query.minPoints)) &&
        (!query.maxPoints || offer.rewardPrice <= Number(query.maxPoints)) &&
        (!query.validUntil ||
          (offer.expiresAt &&
            Date.parse(offer.expiresAt) >= Date.parse(query.validUntil))),
    );
    offers.sort(
      (a, b) =>
        (query.sort === "POINTS_ASC"
          ? a.rewardPrice - b.rewardPrice
          : query.sort === "POINTS_DESC"
            ? b.rewardPrice - a.rewardPrice
            : query.sort === "NAME"
              ? a.name.localeCompare(b.name)
              : query.sort === "EXPIRY"
                ? (Date.parse(a.expiresAt) || Infinity) -
                  (Date.parse(b.expiresAt) || Infinity)
                : 0) || a.code.localeCompare(b.code),
    );
    const total = offers.length,
      page = Math.min(
        query.page,
        Math.max(1, Math.ceil(total / query.pageSize)),
      );
    return {
      kind: query.kind,
      items: offers.slice((page - 1) * query.pageSize, page * query.pageSize),
      page,
      pageSize: query.pageSize,
      total,
      facets: {
        categories,
        conditions: options("condition"),
        issuers: options("issuer"),
      },
    };
  },
  /** Resolves one product directly by code and kind, independently of listing pages and selectors. */
  product: async function (request) {
    if (!/^[A-Za-z][A-Za-z0-9._-]{0,127}$/.test(request.code || ""))
      this.fail("Invalid product reference");
    const kind = request.query?.kind;
    if (!["ASSET", "COUPON"].includes(kind))
      this.fail("Choose assets or coupons");
    const response = await this.products(
      request,
      "/products/" + encodeURIComponent(request.code),
    );
    if (
      response.product?.productCode !== request.code ||
      response.product.localizedAttributes?.kind !== kind
    )
      this.fail("This product is no longer available", 404);
    const catalogue =
      kind === "ASSET"
        ? await SERVICE.DefaultWasteItemDescriptorService.catalogue(request)
        : {};
    const offer = await this.offer(request, response.product, catalogue);
    if (!offer) this.fail("This product is no longer available", 404);
    return offer;
  },
};
