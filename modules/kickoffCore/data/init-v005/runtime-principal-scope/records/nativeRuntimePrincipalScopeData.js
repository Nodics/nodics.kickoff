/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module kickoffCore/data/nativeRuntimePrincipalScope @description Reviewed exact transition from the framework service baseline to Kickoff Local runtime authority. @owner kickoffCore @layer data */
module.exports = { record0: {
  code: "apiAdmin",
  loginId: "apiAdmin",
  expectedScopeCodes: [
    "auth.internal.token.read",
    "auth.internal.token.read.anyTenant",
    "location.location.read",
    "profile.address.reference.read",
    "profile.enterprise.reference.read",
  ],
  scopeCodes: [
    "auth.internal.token.read",
    "auth.internal.token.read.anyTenant",
    "location.location.read",
    "profile.address.reference.read",
    "profile.enterprise.reference.read",
    "commerce.digital.own.read",
    "commerce.pricing.merchant.evidence",
    "commerce.product.read",
    "commerce.store.read",
    "communication.verification.execute",
    "profile.customer.reference.read",
    "profile.enterprise.search",
    "profile.tenant.namespace.bind",
    "publish.lifecycle.create",
    "publish.lifecycle.requestApproval",
    "publish.lifecycle.validate",
    "publish.lifecycle.view",
    "publish.setup.observe",
    "waste.asset.listing.intent.read",
  ],
} };
