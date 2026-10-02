/**
 * @module kickoffLocal/search/indexes
 * @description Isolates native Local physical search indexes while retaining capability-owned logical names and inherited definitions.
 * @layer configuration
 * @owner nodics.kickoff
 * @override Later native Local deployment layers may change physical names without changing logical type names.
 */
module.exports = {
  discoveryProjection: {
    discoveryDocumentProjection: {
      typeName: "discoveryDocumentProjection",
      indexName: "kickofflocal_discoverydocumentprojection",
    },
  },
  product: {
    productLocalized: {
      typeName: "productLocalized",
      indexName: "kickofflocal_productlocalized",
    },
    productSearchProjection: {
      typeName: "productSearchProjection",
      indexName: "kickofflocal_productsearchprojection",
    },
  },
  commerceSearchCore: {
    commerceSearchRuleProjection: {
      typeName: "commerceSearchRuleProjection",
      indexName: "kickofflocal_commercesearchruleprojection",
    },
  },
};
