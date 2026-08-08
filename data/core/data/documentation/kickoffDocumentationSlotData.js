'use strict';

/** @description Nodics Kickoff documentation template slots. */
module.exports = {
  "record0": {
    "code": "kickoffDocumentationNavigationSlot",
    "template": "kickoffDocumentationArticleTemplate",
    "name": "navigation",
    "minItems": 1,
    "maxItems": 1,
    "allowedComponentTypes": [
      "kickoffDocumentationNavigationComponentType"
    ],
    "active": true
  },
  "record1": {
    "code": "kickoffDocumentationArticleSlot",
    "template": "kickoffDocumentationArticleTemplate",
    "name": "article",
    "minItems": 1,
    "maxItems": 1,
    "allowedComponentTypes": [
      "kickoffDocumentationArticleComponentType"
    ],
    "active": true
  }
};
