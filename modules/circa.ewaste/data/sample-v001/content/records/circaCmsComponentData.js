/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module circa.ewaste/data/content/circaCmsComponentData @description Defines Circa published page composition through the owning CMS schemas. @layer data @owner circa.ewaste @override Customer projects customize these content records through Staged authoring. */
module.exports = {
  record0: {
    code: "circaShell",
    typeCode: "circaShellType",
    renderer: "circa.shell",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    accessMode: "PUBLIC",
    active: true,
    properties: {
      brand: "CIRCA",
      byline: "BY NODICS",
      tagline: "A little less waste. A little more possibility.",
      footer: "A new chapter for electronics.\nA shared future for all of us.",
      caption: "Built on Nodics.",
      invitation: "Small steps.\nLasting possibilities.",
      logo: {
        mediaCode: "circa-mark",
      },
      lightLogo: {
        mediaCode: "circa-mark-light-v4",
      },
      navigation: [
        {
          label: "Collection centres",
          href: "/#centres",
        },
        {
          label: "Shop",
          href: "/shop",
        },
        {
          label: "Coupons",
          href: "/coupons",
        },
        {
          label: "Help",
          href: "/#contact",
        },
      ],
    },
  },
  record1: {
    code: "circaHero",
    typeCode: "circaHeroType",
    renderer: "circa.hero",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    accessMode: "PUBLIC",
    active: true,
    properties: {
      secondaryLabel: "Find a collection centre",
      assurance: "Reviewed with care. Recorded with clarity.",
      stories: [
        {
          eyebrow: "A better next chapter",
          title: "Your old tech.\nA new kind of value.",
          body: "Give unused electronics a purpose. Submit, get verified and turn your next step into something good.",
          mediaCode: "circa-hero-second-life",
          alt: "Unused electronics surrounded by fresh green foliage",
          cta: "Submit your electronics",
          action: "SUBMIT",
        },
        {
          eyebrow: "Small actions. Shared progress.",
          title: "Good things start\nwith you.",
          body: "Find a collection centre, share your item and join a community keeping resources in circulation.",
          mediaCode: "circa-hero-community",
          alt: "Community electronics collection scene",
          cta: "Find your next step",
          action: "SUBMIT",
        },
        {
          eyebrow: "Keep the value moving",
          title: "Less waste.\nMore possibility.",
          body: "Discover circular assets and explore offers that let your rewards go further.",
          mediaCode: "circa-hero-circular-value",
          alt: "Circular technology and community marketplace",
          cta: "Explore the marketplace",
          action: "SHOP",
        },
      ],
    },
  },
  record2: {
    code: "circaWallet",
    typeCode: "circaWalletType",
    renderer: "circa.wallet",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    accessMode: "PUBLIC",
    active: true,
    properties: {},
  },
  record3: {
    code: "circaSolution",
    typeCode: "circaSolutionType",
    renderer: "circa.solution",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    accessMode: "PUBLIC",
    active: true,
    properties: {
      eyebrow: "A circular future, made simple",
      title: "There’s more life\nin what we leave behind.",
      body: "Old devices hold valuable materials. Circa brings together a clear submission process, collection partners and ways to keep that value moving.",
      benefits: [
        {
          title: "Better for our resources",
          body: "Help electronics find a responsible next step instead of being forgotten in a drawer.",
        },
        {
          title: "More value for people",
          body: "Submit your items for review, follow their progress and receive rewards after approval.",
        },
        {
          title: "New opportunities together",
          body: "Connect with collection centres, discover circular assets and explore partner offers.",
        },
      ],
      steps: [
        "Choose a centre",
        "Add a photo",
        "Review & submit",
        "Get approved",
      ],
    },
  },
  record4: {
    code: "circaAssets",
    typeCode: "circaOffersType",
    renderer: "circa.offers",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    accessMode: "PUBLIC",
    active: true,
    properties: {
      kind: "ASSET",
      eyebrow: "Keep good things circulating",
      title: "A little less new. A lot more possibility.",
      body: "Explore verified circular assets available from the community.",
    },
  },
  record5: {
    code: "circaCoupons",
    typeCode: "circaOffersType",
    renderer: "circa.offers",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    accessMode: "PUBLIC",
    active: true,
    properties: {
      kind: "COUPON",
      eyebrow: "Make your rewards go further",
      title: "Good choices. Thoughtful rewards.",
      body: "Discover offers from participating businesses.",
    },
  },
  record6: {
    code: "circaCentres",
    typeCode: "circaCentresType",
    renderer: "circa.centres",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    accessMode: "PUBLIC",
    active: true,
    properties: {
      eyebrow: "Good things happen close to home",
      title: "Find your collection centre.",
      body: "Choose a convenient location and take the next step.",
    },
  },
  record7: {
    code: "circaContact",
    typeCode: "circaContactType",
    renderer: "circa.contact",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    accessMode: "PUBLIC",
    active: true,
    properties: {
      eyebrow: "Here to help",
      title: "Let’s make\na good connection.",
      body: "Have a question about an item, a collection centre or joining Circa? Send us a message.",
    },
  },
  record8: {
    code: "circaPrivacy",
    typeCode: "circaPolicyType",
    renderer: "circa.policy",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    accessMode: "PUBLIC",
    active: true,
    properties: {
      title: "Privacy in this local sample",
      paragraphs: [
        "Customer details, original photos and submitted item facts are stored in the configured Nodics services. Photos are restricted to their owner and authorized reviewers.",
        "Carbon units are rewards and are separate from CO₂e savings. Purchases convey the configured digital asset ownership only; they do not arrange physical delivery or issue certified carbon credits. Contact messages are recorded for follow-up in the configured support system.",
      ],
    },
  },
  record9: {
    code: "circaTerms",
    typeCode: "circaPolicyType",
    renderer: "circa.policy",
    rendererContractVersion: 1,
    rendererChannels: ["web"],
    rendererDeprecated: false,
    accessMode: "PUBLIC",
    active: true,
    properties: {
      title: "Local sample terms",
      paragraphs: [
        "Customer details, original photos and submitted item facts are stored in the configured Nodics services. Photos are restricted to their owner and authorized reviewers.",
        "Carbon units are rewards and are separate from CO₂e savings. Purchases convey the configured digital asset ownership only; they do not arrange physical delivery or issue certified carbon credits. Contact messages are recorded for follow-up in the configured support system.",
      ],
    },
  },
};
