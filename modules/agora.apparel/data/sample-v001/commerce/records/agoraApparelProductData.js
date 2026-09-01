/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/sample-v001/commerce/records/agoraApparelProductData.js
 * @description Defines Agora Apparel products with customer-safe product media descriptors.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agora.apparel */

const withProductGallery = function (records) {
  const values = Object.values(records);
  const primaryImages = values.map(record => record.media && record.media.primaryImage).filter(Boolean);
  const nextDistinctPrimary = function (record) {
    const currentCode = record.media && record.media.primaryImage && record.media.primaryImage.mediaCode;
    return primaryImages.find(item => item.mediaCode && item.mediaCode !== currentCode);
  };
  return Object.fromEntries(Object.entries(records).map(([key, record]) => {
    const primaryImage = record.media && record.media.primaryImage;
    if (!primaryImage) return [key, record];
    const secondarySource = nextDistinctPrimary(record);
    const secondaryImage = secondarySource ? {
      ...secondarySource,
      altText: `${record.name} alternate product view`,
      businessPurpose: 'AGORA_PRODUCT_HOVER_IMAGE',
      name: `${record.name} hover image`,
      ownerReference: record.code,
      role: 'secondary'
    } : undefined;
    const gallery = [primaryImage, secondaryImage]
      .filter(Boolean)
      .map((item, index) => ({
        ...item,
        altText: index === 0 ? item.altText : `${record.name} alternate product view`,
        businessPurpose: index === 0 ? item.businessPurpose : 'AGORA_PRODUCT_HOVER_IMAGE',
        name: index === 0 ? item.name : `${record.name} hover image`,
        ownerReference: record.code,
        role: index === 0 ? 'primary' : 'secondary'
      }));
    return [key, {
      ...record,
      media: {
        ...record.media,
        secondaryImage,
        gallery
      }
    }];
  }));
};

const records = {
  "record0": {
    "code": "agoraLinenWrapDress",
    "tenant": "default",
    "name": "Linen Wrap Dress",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-linen-wrap-dress-primary",
        "altText": "Linen Wrap Dress",
        "name": "Linen Wrap Dress primary image",
        "description": "Linen Wrap Dress primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraLinenWrapDress"
      }
    }
  },
  "record1": {
    "code": "agoraSatinMidiDress",
    "tenant": "default",
    "name": "Satin Midi Dress",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-satin-midi-dress-primary",
        "altText": "Satin Midi Dress",
        "name": "Satin Midi Dress primary image",
        "description": "Satin Midi Dress primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraSatinMidiDress"
      }
    }
  },
  "record2": {
    "code": "agoraRibbedKnitTop",
    "tenant": "default",
    "name": "Ribbed Knit Top",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-ribbed-knit-top-primary",
        "altText": "Ribbed Knit Top",
        "name": "Ribbed Knit Top primary image",
        "description": "Ribbed Knit Top primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraRibbedKnitTop"
      }
    }
  },
  "record3": {
    "code": "agoraCottonPoplinShirtWomen",
    "tenant": "default",
    "name": "Cotton Poplin Shirt",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-cotton-poplin-shirt-primary",
        "altText": "Cotton Poplin Shirt",
        "name": "Cotton Poplin Shirt primary image",
        "description": "Cotton Poplin Shirt primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraCottonPoplinShirtWomen"
      }
    }
  },
  "record4": {
    "code": "agoraLeatherTote",
    "tenant": "default",
    "name": "Soft Leather Tote",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-leather-tote-primary",
        "altText": "Soft Leather Tote",
        "name": "Soft Leather Tote primary image",
        "description": "Soft Leather Tote primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraLeatherTote"
      }
    }
  },
  "record5": {
    "code": "agoraSilkScarf",
    "tenant": "default",
    "name": "Printed Silk Scarf",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-printed-silk-scarf-primary",
        "altText": "Printed Silk Scarf",
        "name": "Printed Silk Scarf primary image",
        "description": "Printed Silk Scarf primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraSilkScarf"
      }
    }
  },
  "record6": {
    "code": "agoraOxfordShirt",
    "tenant": "default",
    "name": "Oxford Shirt",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-oxford-shirt-primary",
        "altText": "Oxford Shirt",
        "name": "Oxford Shirt primary image",
        "description": "Oxford Shirt primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraOxfordShirt"
      }
    }
  },
  "record7": {
    "code": "agoraLinenCampShirt",
    "tenant": "default",
    "name": "Linen Camp Shirt",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-linen-camp-shirt-primary",
        "altText": "Linen Camp Shirt",
        "name": "Linen Camp Shirt primary image",
        "description": "Linen Camp Shirt primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraLinenCampShirt"
      }
    }
  },
  "record8": {
    "code": "agoraTailoredChino",
    "tenant": "default",
    "name": "Tailored Chino",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-tailored-chino-primary",
        "altText": "Tailored Chino",
        "name": "Tailored Chino primary image",
        "description": "Tailored Chino primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraTailoredChino"
      }
    }
  },
  "record9": {
    "code": "agoraRelaxedTrouser",
    "tenant": "default",
    "name": "Relaxed Trouser",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-relaxed-trouser-primary",
        "altText": "Relaxed Trouser",
        "name": "Relaxed Trouser primary image",
        "description": "Relaxed Trouser primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraRelaxedTrouser"
      }
    }
  },
  "record10": {
    "code": "agoraCanvasBelt",
    "tenant": "default",
    "name": "Canvas Utility Belt",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-canvas-utility-belt-primary",
        "altText": "Canvas Utility Belt",
        "name": "Canvas Utility Belt primary image",
        "description": "Canvas Utility Belt primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraCanvasBelt"
      }
    }
  },
  "record11": {
    "code": "agoraWoolCap",
    "tenant": "default",
    "name": "Fine Wool Cap",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-fine-wool-cap-primary",
        "altText": "Fine Wool Cap",
        "name": "Fine Wool Cap primary image",
        "description": "Fine Wool Cap primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraWoolCap"
      }
    }
  },
  "record12": {
    "code": "agoraStretchStrapTop",
    "tenant": "default",
    "name": "Stretch Strap Top",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-stretch-strap-top-primary",
        "altText": "Stretch Strap Top",
        "name": "Stretch Strap Top primary image",
        "description": "Stretch Strap Top primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraStretchStrapTop"
      }
    }
  },
  "record13": {
    "code": "agoraRamiePocketShirt",
    "tenant": "default",
    "name": "Ramie Shirt With Pockets",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-ramie-shirt-with-pockets-primary",
        "altText": "Ramie Shirt With Pockets",
        "name": "Ramie Shirt With Pockets primary image",
        "description": "Ramie Shirt With Pockets primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraRamiePocketShirt"
      }
    }
  },
  "record14": {
    "code": "agoraRattanHandleBag",
    "tenant": "default",
    "name": "Rattan Bag With Handle",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-rattan-bag-with-handle-primary",
        "altText": "Rattan Bag With Handle",
        "name": "Rattan Bag With Handle primary image",
        "description": "Rattan Bag With Handle primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraRattanHandleBag"
      }
    }
  },
  "record15": {
    "code": "agoraStripedKnitDress",
    "tenant": "default",
    "name": "Striped Knit Dress",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-striped-knit-dress-primary",
        "altText": "Striped Knit Dress",
        "name": "Striped Knit Dress primary image",
        "description": "Striped Knit Dress primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraStripedKnitDress"
      }
    }
  },
  "record16": {
    "code": "agoraBeltWrapDress",
    "tenant": "default",
    "name": "Belt Wrap Dress",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-belt-wrap-dress-primary",
        "altText": "Belt Wrap Dress",
        "name": "Belt Wrap Dress primary image",
        "description": "Belt Wrap Dress primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraBeltWrapDress"
      }
    }
  },
  "record17": {
    "code": "agoraDoubleButtonTrench",
    "tenant": "default",
    "name": "Double-button Trench Coat",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-double-button-trench-coat-primary",
        "altText": "Double-button Trench Coat",
        "name": "Double-button Trench Coat primary image",
        "description": "Double-button Trench Coat primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraDoubleButtonTrench"
      }
    }
  },
  "record18": {
    "code": "agoraButtonedCottonShirt",
    "tenant": "default",
    "name": "Buttoned Cotton Shirt",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-buttoned-cotton-shirt-primary",
        "altText": "Buttoned Cotton Shirt",
        "name": "Buttoned Cotton Shirt primary image",
        "description": "Buttoned Cotton Shirt primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraButtonedCottonShirt"
      }
    }
  },
  "record19": {
    "code": "agoraLayeredTankTop",
    "tenant": "default",
    "name": "Layered Tank Top",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-layered-tank-top-primary",
        "altText": "Layered Tank Top",
        "name": "Layered Tank Top primary image",
        "description": "Layered Tank Top primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraLayeredTankTop"
      }
    }
  },
  "record20": {
    "code": "agoraPleatedKnitDress",
    "tenant": "default",
    "name": "Pleated Knit Dress",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-pleated-knit-dress-primary",
        "altText": "Pleated Knit Dress",
        "name": "Pleated Knit Dress primary image",
        "description": "Pleated Knit Dress primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraPleatedKnitDress"
      }
    }
  },
  "record21": {
    "code": "agoraMinimalSlipDress",
    "tenant": "default",
    "name": "Minimal Slip Dress",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-minimal-slip-dress-primary",
        "altText": "Minimal Slip Dress",
        "name": "Minimal Slip Dress primary image",
        "description": "Minimal Slip Dress primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraMinimalSlipDress"
      }
    }
  },
  "record22": {
    "code": "agoraCollarKnitCardigan",
    "tenant": "default",
    "name": "Collar Knit Cardigan",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-collar-knit-cardigan-primary",
        "altText": "Collar Knit Cardigan",
        "name": "Collar Knit Cardigan primary image",
        "description": "Collar Knit Cardigan primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraCollarKnitCardigan"
      }
    }
  },
  "record23": {
    "code": "agoraSoftShoulderBag",
    "tenant": "default",
    "name": "Soft Shoulder Bag",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-shoulder-bag-primary",
        "altText": "Soft Shoulder Bag",
        "name": "Soft Shoulder Bag primary image",
        "description": "Soft Shoulder Bag primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraSoftShoulderBag"
      }
    }
  },
  "record24": {
    "code": "agoraSummerKnitVest",
    "tenant": "default",
    "name": "Summer Knit Vest",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-summer-knit-vest-primary",
        "altText": "Summer Knit Vest",
        "name": "Summer Knit Vest primary image",
        "description": "Summer Knit Vest primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraSummerKnitVest"
      }
    }
  },
  "record25": {
    "code": "agoraTailoredSleevelessTop",
    "tenant": "default",
    "name": "Tailored Sleeveless Top",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-tailored-sleeveless-top-primary",
        "altText": "Tailored Sleeveless Top",
        "name": "Tailored Sleeveless Top primary image",
        "description": "Tailored Sleeveless Top primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraTailoredSleevelessTop"
      }
    }
  },
  "record26": {
    "code": "agoraWideLegLinenPant",
    "tenant": "default",
    "name": "Wide-leg Linen Pant",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-wide-leg-linen-pant-primary",
        "altText": "Wide-leg Linen Pant",
        "name": "Wide-leg Linen Pant primary image",
        "description": "Wide-leg Linen Pant primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraWideLegLinenPant"
      }
    }
  },
  "record27": {
    "code": "agoraTexturedCrossbodyBag",
    "tenant": "default",
    "name": "Textured Crossbody Bag",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-textured-crossbody-bag-primary",
        "altText": "Textured Crossbody Bag",
        "name": "Textured Crossbody Bag primary image",
        "description": "Textured Crossbody Bag primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraTexturedCrossbodyBag"
      }
    }
  },
  "record28": {
    "code": "agoraMinimalBalletFlat",
    "tenant": "default",
    "name": "Minimal Ballet Flat",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-minimal-ballet-flat-primary",
        "altText": "Minimal Ballet Flat",
        "name": "Minimal Ballet Flat primary image",
        "description": "Minimal Ballet Flat primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraMinimalBalletFlat"
      }
    }
  },
  "record29": {
    "code": "agoraOpenWeaveCardigan",
    "tenant": "default",
    "name": "Open Weave Cardigan",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-open-weave-cardigan-primary",
        "altText": "Open Weave Cardigan",
        "name": "Open Weave Cardigan primary image",
        "description": "Open Weave Cardigan primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraOpenWeaveCardigan"
      }
    }
  },
  "record30": {
    "code": "agoraRefinedShortSleeveDress",
    "tenant": "default",
    "name": "Refined Short-sleeve Dress",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-refined-short-sleeve-dress-primary",
        "altText": "Refined Short-sleeve Dress",
        "name": "Refined Short-sleeve Dress primary image",
        "description": "Refined Short-sleeve Dress primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraRefinedShortSleeveDress"
      }
    }
  },
  "record31": {
    "code": "agoraGoldFrameSunglasses",
    "tenant": "default",
    "name": "Gold Frame Sunglasses",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-gold-frame-sunglasses-primary",
        "altText": "Gold Frame Sunglasses",
        "name": "Gold Frame Sunglasses primary image",
        "description": "Gold Frame Sunglasses primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraGoldFrameSunglasses"
      }
    }
  },
  "record32": {
    "code": "agoraSoftRibbedDress",
    "tenant": "default",
    "name": "Soft Ribbed Dress",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-ribbed-dress-primary",
        "altText": "Soft Ribbed Dress",
        "name": "Soft Ribbed Dress primary image",
        "description": "Soft Ribbed Dress primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraSoftRibbedDress"
      }
    }
  },
  "record33": {
    "code": "agoraRelaxedCottonTee",
    "tenant": "default",
    "name": "Relaxed Cotton Tee",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-relaxed-cotton-tee-primary",
        "altText": "Relaxed Cotton Tee",
        "name": "Relaxed Cotton Tee primary image",
        "description": "Relaxed Cotton Tee primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraRelaxedCottonTee"
      }
    }
  },
  "record34": {
    "code": "agoraCompactCrossbody",
    "tenant": "default",
    "name": "Compact Crossbody Bag",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-compact-crossbody-bag-primary",
        "altText": "Compact Crossbody Bag",
        "name": "Compact Crossbody Bag primary image",
        "description": "Compact Crossbody Bag primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraCompactCrossbody"
      }
    }
  },
  "record35": {
    "code": "agoraSculptedHoopEarrings",
    "tenant": "default",
    "name": "Sculpted Hoop Earrings",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-sculpted-hoop-earrings-primary",
        "altText": "Sculpted Hoop Earrings",
        "name": "Sculpted Hoop Earrings primary image",
        "description": "Sculpted Hoop Earrings primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraSculptedHoopEarrings"
      }
    }
  },
  "record36": {
    "code": "agoraEverydayColumnDress",
    "tenant": "default",
    "name": "Everyday Column Dress",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-everyday-column-dress-primary",
        "altText": "Everyday Column Dress",
        "name": "Everyday Column Dress primary image",
        "description": "Everyday Column Dress primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraEverydayColumnDress"
      }
    }
  },
  "record37": {
    "code": "agoraSheerRamieShirt",
    "tenant": "default",
    "name": "Sheer Ramie Shirt",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-sheer-ramie-shirt-primary",
        "altText": "Sheer Ramie Shirt",
        "name": "Sheer Ramie Shirt primary image",
        "description": "Sheer Ramie Shirt primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraSheerRamieShirt"
      }
    }
  },
  "record38": {
    "code": "agoraFineKnitPolo",
    "tenant": "default",
    "name": "Fine Knit Polo",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-fine-knit-polo-primary",
        "altText": "Fine Knit Polo",
        "name": "Fine Knit Polo primary image",
        "description": "Fine Knit Polo primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraFineKnitPolo"
      }
    }
  },
  "record39": {
    "code": "agoraNaturalCanvasTote",
    "tenant": "default",
    "name": "Natural Canvas Tote",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-natural-canvas-tote-primary",
        "altText": "Natural Canvas Tote",
        "name": "Natural Canvas Tote primary image",
        "description": "Natural Canvas Tote primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraNaturalCanvasTote"
      }
    }
  },
  "record40": {
    "code": "agoraLuxeWrapTop",
    "tenant": "default",
    "name": "Luxe Wrap Top",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-luxe-wrap-top-primary",
        "altText": "Luxe Wrap Top",
        "name": "Luxe Wrap Top primary image",
        "description": "Luxe Wrap Top primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraLuxeWrapTop"
      }
    }
  },
  "record41": {
    "code": "agoraPearlTrimCardigan",
    "tenant": "default",
    "name": "Pearl Trim Cardigan",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-pearl-trim-cardigan-primary",
        "altText": "Pearl Trim Cardigan",
        "name": "Pearl Trim Cardigan primary image",
        "description": "Pearl Trim Cardigan primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraPearlTrimCardigan"
      }
    }
  },
  "record42": {
    "code": "agoraBiasCutMidiSkirt",
    "tenant": "default",
    "name": "Bias-cut Midi Skirt",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-bias-cut-midi-skirt-primary",
        "altText": "Bias-cut Midi Skirt",
        "name": "Bias-cut Midi Skirt primary image",
        "description": "Bias-cut Midi Skirt primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraBiasCutMidiSkirt"
      }
    }
  },
  "record43": {
    "code": "agoraTexturedKnitPullover",
    "tenant": "default",
    "name": "Textured Knit Pullover",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-textured-knit-pullover-primary",
        "altText": "Textured Knit Pullover",
        "name": "Textured Knit Pullover primary image",
        "description": "Textured Knit Pullover primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraTexturedKnitPullover"
      }
    }
  },
  "record44": {
    "code": "agoraPolishedMiniBag",
    "tenant": "default",
    "name": "Polished Mini Bag",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-polished-mini-bag-primary",
        "altText": "Polished Mini Bag",
        "name": "Polished Mini Bag primary image",
        "description": "Polished Mini Bag primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraPolishedMiniBag"
      }
    }
  },
  "record45": {
    "code": "agoraCleanLineBlazer",
    "tenant": "default",
    "name": "Clean-line Blazer",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-clean-line-blazer-primary",
        "altText": "Clean-line Blazer",
        "name": "Clean-line Blazer primary image",
        "description": "Clean-line Blazer primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraCleanLineBlazer"
      }
    }
  },
  "record46": {
    "code": "agoraSoftLinenShort",
    "tenant": "default",
    "name": "Soft Linen Short",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-linen-short-primary",
        "altText": "Soft Linen Short",
        "name": "Soft Linen Short primary image",
        "description": "Soft Linen Short primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraSoftLinenShort"
      }
    }
  },
  "record47": {
    "code": "agoraClassicDenimShirt",
    "tenant": "default",
    "name": "Classic Denim Shirt",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-classic-denim-shirt-primary",
        "altText": "Classic Denim Shirt",
        "name": "Classic Denim Shirt primary image",
        "description": "Classic Denim Shirt primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraClassicDenimShirt"
      }
    }
  },
  "record48": {
    "code": "agoraOvershirtJacket",
    "tenant": "default",
    "name": "Overshirt Jacket",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-overshirt-jacket-primary",
        "altText": "Overshirt Jacket",
        "name": "Overshirt Jacket primary image",
        "description": "Overshirt Jacket primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraOvershirtJacket"
      }
    }
  },
  "record49": {
    "code": "agoraSlimCottonTrouser",
    "tenant": "default",
    "name": "Slim Cotton Trouser",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-slim-cotton-trouser-primary",
        "altText": "Slim Cotton Trouser",
        "name": "Slim Cotton Trouser primary image",
        "description": "Slim Cotton Trouser primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraSlimCottonTrouser"
      }
    }
  },
  "record50": {
    "code": "agoraRelaxedPoloShirt",
    "tenant": "default",
    "name": "Relaxed Polo Shirt",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-relaxed-polo-shirt-primary",
        "altText": "Relaxed Polo Shirt",
        "name": "Relaxed Polo Shirt primary image",
        "description": "Relaxed Polo Shirt primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraRelaxedPoloShirt"
      }
    }
  },
  "record51": {
    "code": "agoraWashedChoreJacket",
    "tenant": "default",
    "name": "Washed Chore Jacket",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-washed-chore-jacket-primary",
        "altText": "Washed Chore Jacket",
        "name": "Washed Chore Jacket primary image",
        "description": "Washed Chore Jacket primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraWashedChoreJacket"
      }
    }
  },
  "record52": {
    "code": "agoraEverydayCrewNeck",
    "tenant": "default",
    "name": "Everyday Crew Neck",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-everyday-crew-neck-primary",
        "altText": "Everyday Crew Neck",
        "name": "Everyday Crew Neck primary image",
        "description": "Everyday Crew Neck primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraEverydayCrewNeck"
      }
    }
  },
  "record53": {
    "code": "agoraUtilityCargoTrouser",
    "tenant": "default",
    "name": "Utility Cargo Trouser",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-utility-cargo-trouser-primary",
        "altText": "Utility Cargo Trouser",
        "name": "Utility Cargo Trouser primary image",
        "description": "Utility Cargo Trouser primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraUtilityCargoTrouser"
      }
    }
  },
  "record54": {
    "code": "agoraLeatherCardHolder",
    "tenant": "default",
    "name": "Leather Card Holder",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-leather-card-holder-primary",
        "altText": "Leather Card Holder",
        "name": "Leather Card Holder primary image",
        "description": "Leather Card Holder primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraLeatherCardHolder"
      }
    }
  },
  "record55": {
    "code": "agoraSignatureSunglasses",
    "tenant": "default",
    "name": "Signature Sunglasses",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-signature-sunglasses-primary",
        "altText": "Signature Sunglasses",
        "name": "Signature Sunglasses primary image",
        "description": "Signature Sunglasses primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraSignatureSunglasses"
      }
    }
  },
  "record56": {
    "code": "agoraNeutralShoulderBag",
    "tenant": "default",
    "name": "Neutral Shoulder Bag",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-neutral-shoulder-bag-primary",
        "altText": "Neutral Shoulder Bag",
        "name": "Neutral Shoulder Bag primary image",
        "description": "Neutral Shoulder Bag primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraNeutralShoulderBag"
      }
    }
  },
  "record57": {
    "code": "agoraModernKnitSet",
    "tenant": "default",
    "name": "Modern Knit Set",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-modern-knit-set-primary",
        "altText": "Modern Knit Set",
        "name": "Modern Knit Set primary image",
        "description": "Modern Knit Set primary image for Agora product discovery delivery",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraModernKnitSet"
      }
    }
  },
  "record58": {
    "code": "agoraStylePass5Coupon",
    "tenant": "default",
    "name": "Agora Style Pass 5 Percent Coupon",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "productType": "DIGITAL",
    "fulfillmentStrategy": "DIGITAL_COMMERCE",
    "digitalDeliveryType": "COUPON_CODE",
    "digitalCommerce": {
      "inventoryStrategy": "COUPON_CODE_POOL",
      "providerModule": "promotion",
      "promotionCode": "agoraStylePass5PercentRule",
      "couponBatchCode": "agoraStylePass5Batch001",
      "benefit": {
        "discountType": "PERCENT",
        "discountValue": "5"
      }
    },
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-collection-promotion",
        "altText": "Agora Style Pass 5 Percent Coupon",
        "name": "Agora Style Pass 5 Percent Coupon primary image",
        "description": "Digital coupon product image for Agora coupon marketplace testing",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraStylePass5Coupon"
      }
    }
  },
  "record59": {
    "code": "agoraCapsuleEdit10Coupon",
    "tenant": "default",
    "name": "Agora Capsule Edit 10 Percent Coupon",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "productType": "DIGITAL",
    "fulfillmentStrategy": "DIGITAL_COMMERCE",
    "digitalDeliveryType": "COUPON_CODE",
    "digitalCommerce": {
      "inventoryStrategy": "COUPON_CODE_POOL",
      "providerModule": "promotion",
      "promotionCode": "agoraCapsuleEdit10PercentRule",
      "couponBatchCode": "agoraCapsuleEdit10Batch001",
      "benefit": {
        "discountType": "PERCENT",
        "discountValue": "10"
      }
    },
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-promo-capsule",
        "altText": "Agora Capsule Edit 10 Percent Coupon",
        "name": "Agora Capsule Edit 10 Percent Coupon primary image",
        "description": "Digital coupon product image for Agora coupon marketplace testing",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraCapsuleEdit10Coupon"
      }
    }
  },
  "record60": {
    "code": "agoraPrivateSale20Coupon",
    "tenant": "default",
    "name": "Agora Private Sale 20 Percent Coupon",
    "status": "ACTIVE",
    "catalogVersion": "agoraApparelStaged",
    "revision": 1,
    "active": true,
    "productType": "DIGITAL",
    "fulfillmentStrategy": "DIGITAL_COMMERCE",
    "digitalDeliveryType": "COUPON_CODE",
    "digitalCommerce": {
      "inventoryStrategy": "COUPON_CODE_POOL",
      "providerModule": "promotion",
      "promotionCode": "agoraPrivateSale20PercentRule",
      "couponBatchCode": "agoraPrivateSale20Batch001",
      "benefit": {
        "discountType": "PERCENT",
        "discountValue": "20"
      }
    },
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-promo-texture-edit",
        "altText": "Agora Private Sale 20 Percent Coupon",
        "name": "Agora Private Sale 20 Percent Coupon primary image",
        "description": "Digital coupon product image for Agora coupon marketplace testing",
        "formatCode": "original",
        "businessPurpose": "AGORA_PRODUCT_PRIMARY_IMAGE",
        "ownerType": "PRODUCT",
        "ownerReference": "agoraPrivateSale20Coupon"
      }
    }
  }
};

module.exports = Object.freeze(withProductGallery(records));
