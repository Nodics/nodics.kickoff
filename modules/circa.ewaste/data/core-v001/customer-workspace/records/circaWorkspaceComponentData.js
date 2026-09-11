/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/data/customer-workspace/circaWorkspaceComponentData @description Publishes customer item workspace composition through WCMS. @owner circa.ewaste @layer data @override Customize through Staged authoring and governed publication. */
module.exports = {
  "record0": {
    "code": "circaWasteWorkspace",
    "typeCode": "circaWasteWorkspaceType",
    "renderer": "circa.wasteWorkspace",
    "rendererContractVersion": 1,
    "rendererChannels": [
      "web"
    ],
    "rendererDeprecated": false,
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "eyebrow": "YOUR CIRCULAR JOURNEY",
      "title": "A new chapter for your things.",
      "description": "Follow every item, from the first photo to its next life. Your submissions, reviewed details and owned assets, all in one place.",
      "bannerMediaCode": "circa-hero-second-life",
      "bannerAlt": "Electronics ready for a second life",
      "sections": [
        {
          "code": "overview",
          "label": "Overview"
        },
        {
          "code": "specifications",
          "label": "Specifications"
        },
        {
          "code": "environment",
          "label": "Environmental impact"
        },
        {
          "code": "history",
          "label": "Review & history"
        },
        {
          "code": "ownership",
          "label": "Ownership & trade"
        }
      ],
      "labels": {
        "viewDetails": "View details",
        "quickView": "Quick view",
        "unclassified": "Awaiting classification",
        "points": "points",
        "advancedFilters": "Advanced filters",
        "category": "Category",
        "allCategories": "All categories",
        "itemType": "Item type",
        "allItemTypes": "All item types",
        "submittedDate": "Submission date",
        "dateFrom": "From",
        "dateTo": "To",
        "resetFilters": "Reset filters",
        "applyFilters": "Apply filters",
        "myAccount": "My account",
        "ownedAssets": "Owned assets",
        "submissions": "Submissions",
        "collectionViews": "Your collections",
        "searchLabel": "Search your items",
        "searchPlaceholder": "Search by item, brand or reference…",
        "filters": "Filters",
        "layoutLabel": "Listing layout",
        "gridView": "Grid view",
        "listView": "List view",
        "sortBy": "Sort by",
        "refreshItems": "Refresh items",
        "statusFilter": "Filter by status",
        "activeFilters": "Applied filters",
        "removeFilter": "Remove filter",
        "clearAll": "Clear all",
        "updating": "Updating your items…",
        "resultsUnavailable": "Results unavailable",
        "items": "items",
        "of": "of",
        "loadError": "Your items couldn’t load",
        "retry": "Try again",
        "loadingItems": "Loading your items…",
        "emptyTitle": "A little room for possibility",
        "emptyFiltered": "No items match these filters. Try a different search or clear your filters.",
        "emptyBody": "Your saved submissions and owned assets will appear here as your journey grows.",
        "pagination": "Item pages",
        "previous": "Previous",
        "page": "Page",
        "next": "Next",
        "listingTerms": "Choose a whole-number price in reward points. Your digital asset will be offered for trade after publication.",
        "giftTerms": "Review the recipient carefully. Digital ownership and attached carbon units transfer to the recipient; original approval rewards stay with the contributor.",
        "done": "Done",
        "actionComplete": "The operation completed.",
        "actionFailed": "The operation could not be confirmed. Retry with the same details.",
        "listingPrice": "Price in reward points",
        "recipientEmail": "Recipient email",
        "ownershipTerms": "This experience transfers digital asset ownership. Physical delivery is not included.",
        "cancel": "Cancel",
        "processing": "Processing…",
        "confirmListing": "Confirm listing",
        "confirmGift": "Confirm gift",
        "detailUnavailable": "Item details unavailable",
        "loadingDetail": "Loading item details…",
        "backToItems": "Your items",
        "breadcrumbs": "Breadcrumbs",
        "expandPhoto": "Enlarge item photo",
        "privatePhoto": "Your item evidence is visible only to authorized viewers.",
        "noDescription": "A description has not been provided for this item.",
        "condition": "Condition",
        "quantity": "Quantity",
        "unknown": "Not established",
        "brandModel": "Brand / model",
        "submitted": "Submitted",
        "reviewerFeedback": "Reviewer’s feedback",
        "fullDetails": "Open full details",
        "linkedAsset": "Your approved asset",
        "reference": "Reference",
        "detailSections": "Item detail sections",
        "itemStory": "Every item has a story",
        "overviewTitle": "A closer look at your item",
        "impactOverviewTitle": "Its environmental story",
        "impactOverviewBody": "Explore the recorded assessment, its evidence and what still needs to be established in Environmental impact.",
        "exploreImpact": "Explore environmental impact",
        "journeyHistory": "Your item’s journey",
        "collectionPoint": "Collection centre",
        "noHistory": "No dated journey events are available for this item yet.",
        "sourceSubmission": "View original submission",
        "ownershipTitle": "Ownership & value",
        "approvalReward": "Original approval reward",
        "attachedCarbon": "Attached carbon units",
        "settlement": "Settlement",
        "rewardOwnership": "Original approval rewards stay with the contributor. Attached carbon units move with asset ownership; they are not issued carbon credits.",
        "manageAsset": "Open your asset"
      }
    }
  }
};
