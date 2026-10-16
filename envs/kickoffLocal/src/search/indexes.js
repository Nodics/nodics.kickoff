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
      indexName: "kickofflocal_discoverydocumentprojection",
    },
  },
  product: {
    productLocalized: {
      indexName: "kickofflocal_productlocalized",
    },
    productSearchProjection: {
      indexName: "kickofflocal_productsearchprojection",
    },
  },
  commerceSearchCore: {
    commerceSearchRuleProjection: {
      indexName: "kickofflocal_commercesearchruleprojection",
    },
  },
};
