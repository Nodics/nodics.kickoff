/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/sample-v001/commerce/records/agoraApparelProductLocalizationData.js
 * @description Defines localized Agora Apparel product merchandising records with media, slug, category, and searchable attributes.
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
      ownerReference: record.productCode,
      role: 'secondary'
    } : undefined;
    const gallery = [primaryImage, secondaryImage]
      .filter(Boolean)
      .map((item, index) => ({
        ...item,
        altText: index === 0 ? item.altText : `${record.name} alternate product view`,
        businessPurpose: index === 0 ? item.businessPurpose : 'AGORA_PRODUCT_HOVER_IMAGE',
        name: index === 0 ? item.name : `${record.name} hover image`,
        ownerReference: record.productCode,
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
    "code": "agoraLinenWrapDress-en",
    "tenant": "default",
    "productCode": "agoraLinenWrapDress",
    "locale": "en",
    "name": "Linen Wrap Dress",
    "description": "Linen Wrap Dress for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "linen-wrap-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Linen blend",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record1": {
    "code": "agoraLinenWrapDress-ar",
    "tenant": "default",
    "productCode": "agoraLinenWrapDress",
    "locale": "ar",
    "name": "Linen Wrap Dress",
    "description": "Linen Wrap Dress لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "linen-wrap-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Linen blend",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record2": {
    "code": "agoraSatinMidiDress-en",
    "tenant": "default",
    "productCode": "agoraSatinMidiDress",
    "locale": "en",
    "name": "Satin Midi Dress",
    "description": "Satin Midi Dress for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "satin-midi-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Satin weave",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record3": {
    "code": "agoraSatinMidiDress-ar",
    "tenant": "default",
    "productCode": "agoraSatinMidiDress",
    "locale": "ar",
    "name": "Satin Midi Dress",
    "description": "Satin Midi Dress لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "satin-midi-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Satin weave",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record4": {
    "code": "agoraRibbedKnitTop-en",
    "tenant": "default",
    "productCode": "agoraRibbedKnitTop",
    "locale": "en",
    "name": "Ribbed Knit Top",
    "description": "Ribbed Knit Top for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "ribbed-knit-top",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Ribbed cotton blend",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record5": {
    "code": "agoraRibbedKnitTop-ar",
    "tenant": "default",
    "productCode": "agoraRibbedKnitTop",
    "locale": "ar",
    "name": "Ribbed Knit Top",
    "description": "Ribbed Knit Top لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "ribbed-knit-top",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Ribbed cotton blend",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record6": {
    "code": "agoraCottonPoplinShirtWomen-en",
    "tenant": "default",
    "productCode": "agoraCottonPoplinShirtWomen",
    "locale": "en",
    "name": "Cotton Poplin Shirt",
    "description": "Cotton Poplin Shirt for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "cotton-poplin-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Cotton poplin",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record7": {
    "code": "agoraCottonPoplinShirtWomen-ar",
    "tenant": "default",
    "productCode": "agoraCottonPoplinShirtWomen",
    "locale": "ar",
    "name": "Cotton Poplin Shirt",
    "description": "Cotton Poplin Shirt لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "cotton-poplin-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Cotton poplin",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record8": {
    "code": "agoraLeatherTote-en",
    "tenant": "default",
    "productCode": "agoraLeatherTote",
    "locale": "en",
    "name": "Soft Leather Tote",
    "description": "Soft Leather Tote for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "soft-leather-tote",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record9": {
    "code": "agoraLeatherTote-ar",
    "tenant": "default",
    "productCode": "agoraLeatherTote",
    "locale": "ar",
    "name": "Soft Leather Tote",
    "description": "Soft Leather Tote لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "soft-leather-tote",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record10": {
    "code": "agoraSilkScarf-en",
    "tenant": "default",
    "productCode": "agoraSilkScarf",
    "locale": "en",
    "name": "Printed Silk Scarf",
    "description": "Printed Silk Scarf for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "printed-silk-scarf",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Silk twill",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record11": {
    "code": "agoraSilkScarf-ar",
    "tenant": "default",
    "productCode": "agoraSilkScarf",
    "locale": "ar",
    "name": "Printed Silk Scarf",
    "description": "Printed Silk Scarf لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "printed-silk-scarf",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Silk twill",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories",
        "agoraSale"
      ],
      "domain": "apparel"
    }
  },
  "record12": {
    "code": "agoraOxfordShirt-en",
    "tenant": "default",
    "productCode": "agoraOxfordShirt",
    "locale": "en",
    "name": "Oxford Shirt",
    "description": "Oxford Shirt for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "oxford-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Oxford cotton",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record13": {
    "code": "agoraOxfordShirt-ar",
    "tenant": "default",
    "productCode": "agoraOxfordShirt",
    "locale": "ar",
    "name": "Oxford Shirt",
    "description": "Oxford Shirt لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "oxford-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Oxford cotton",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record14": {
    "code": "agoraLinenCampShirt-en",
    "tenant": "default",
    "productCode": "agoraLinenCampShirt",
    "locale": "en",
    "name": "Linen Camp Shirt",
    "description": "Linen Camp Shirt for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "linen-camp-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Washed linen",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record15": {
    "code": "agoraLinenCampShirt-ar",
    "tenant": "default",
    "productCode": "agoraLinenCampShirt",
    "locale": "ar",
    "name": "Linen Camp Shirt",
    "description": "Linen Camp Shirt لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "linen-camp-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Washed linen",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record16": {
    "code": "agoraTailoredChino-en",
    "tenant": "default",
    "productCode": "agoraTailoredChino",
    "locale": "en",
    "name": "Tailored Chino",
    "description": "Tailored Chino for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "tailored-chino",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Cotton twill",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenTrousers"
      ],
      "domain": "apparel"
    }
  },
  "record17": {
    "code": "agoraTailoredChino-ar",
    "tenant": "default",
    "productCode": "agoraTailoredChino",
    "locale": "ar",
    "name": "Tailored Chino",
    "description": "Tailored Chino لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "tailored-chino",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Cotton twill",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenTrousers"
      ],
      "domain": "apparel"
    }
  },
  "record18": {
    "code": "agoraRelaxedTrouser-en",
    "tenant": "default",
    "productCode": "agoraRelaxedTrouser",
    "locale": "en",
    "name": "Relaxed Trouser",
    "description": "Relaxed Trouser for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "relaxed-trouser",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Soft twill",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenTrousers"
      ],
      "domain": "apparel"
    }
  },
  "record19": {
    "code": "agoraRelaxedTrouser-ar",
    "tenant": "default",
    "productCode": "agoraRelaxedTrouser",
    "locale": "ar",
    "name": "Relaxed Trouser",
    "description": "Relaxed Trouser لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "relaxed-trouser",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Soft twill",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenTrousers"
      ],
      "domain": "apparel"
    }
  },
  "record20": {
    "code": "agoraCanvasBelt-en",
    "tenant": "default",
    "productCode": "agoraCanvasBelt",
    "locale": "en",
    "name": "Canvas Utility Belt",
    "description": "Canvas Utility Belt for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "canvas-utility-belt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Canvas",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record21": {
    "code": "agoraCanvasBelt-ar",
    "tenant": "default",
    "productCode": "agoraCanvasBelt",
    "locale": "ar",
    "name": "Canvas Utility Belt",
    "description": "Canvas Utility Belt لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "canvas-utility-belt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Canvas",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record22": {
    "code": "agoraWoolCap-en",
    "tenant": "default",
    "productCode": "agoraWoolCap",
    "locale": "en",
    "name": "Fine Wool Cap",
    "description": "Fine Wool Cap for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "fine-wool-cap",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Wool blend",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record23": {
    "code": "agoraWoolCap-ar",
    "tenant": "default",
    "productCode": "agoraWoolCap",
    "locale": "ar",
    "name": "Fine Wool Cap",
    "description": "Fine Wool Cap لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "fine-wool-cap",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Wool blend",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record24": {
    "code": "agoraStretchStrapTop-en",
    "tenant": "default",
    "productCode": "agoraStretchStrapTop",
    "locale": "en",
    "name": "Stretch Strap Top",
    "description": "Stretch Strap Top for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "stretch-strap-top",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Stretch jersey",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record25": {
    "code": "agoraStretchStrapTop-ar",
    "tenant": "default",
    "productCode": "agoraStretchStrapTop",
    "locale": "ar",
    "name": "Stretch Strap Top",
    "description": "Stretch Strap Top لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "stretch-strap-top",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Stretch jersey",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record26": {
    "code": "agoraRamiePocketShirt-en",
    "tenant": "default",
    "productCode": "agoraRamiePocketShirt",
    "locale": "en",
    "name": "Ramie Shirt With Pockets",
    "description": "Ramie Shirt With Pockets for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "ramie-shirt-with-pockets",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Ramie",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record27": {
    "code": "agoraRamiePocketShirt-ar",
    "tenant": "default",
    "productCode": "agoraRamiePocketShirt",
    "locale": "ar",
    "name": "Ramie Shirt With Pockets",
    "description": "Ramie Shirt With Pockets لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "ramie-shirt-with-pockets",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Ramie",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record28": {
    "code": "agoraRattanHandleBag-en",
    "tenant": "default",
    "productCode": "agoraRattanHandleBag",
    "locale": "en",
    "name": "Rattan Bag With Handle",
    "description": "Rattan Bag With Handle for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "rattan-bag-with-handle",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Rattan",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record29": {
    "code": "agoraRattanHandleBag-ar",
    "tenant": "default",
    "productCode": "agoraRattanHandleBag",
    "locale": "ar",
    "name": "Rattan Bag With Handle",
    "description": "Rattan Bag With Handle لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "rattan-bag-with-handle",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Rattan",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record30": {
    "code": "agoraStripedKnitDress-en",
    "tenant": "default",
    "productCode": "agoraStripedKnitDress",
    "locale": "en",
    "name": "Striped Knit Dress",
    "description": "Striped Knit Dress for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "striped-knit-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Knit viscose",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record31": {
    "code": "agoraStripedKnitDress-ar",
    "tenant": "default",
    "productCode": "agoraStripedKnitDress",
    "locale": "ar",
    "name": "Striped Knit Dress",
    "description": "Striped Knit Dress لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "striped-knit-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Knit viscose",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record32": {
    "code": "agoraBeltWrapDress-en",
    "tenant": "default",
    "productCode": "agoraBeltWrapDress",
    "locale": "en",
    "name": "Belt Wrap Dress",
    "description": "Belt Wrap Dress for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "belt-wrap-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Cotton blend",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record33": {
    "code": "agoraBeltWrapDress-ar",
    "tenant": "default",
    "productCode": "agoraBeltWrapDress",
    "locale": "ar",
    "name": "Belt Wrap Dress",
    "description": "Belt Wrap Dress لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "belt-wrap-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Cotton blend",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record34": {
    "code": "agoraDoubleButtonTrench-en",
    "tenant": "default",
    "productCode": "agoraDoubleButtonTrench",
    "locale": "en",
    "name": "Double-button Trench Coat",
    "description": "Double-button Trench Coat for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "double-button-trench-coat",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Cotton gabardine",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record35": {
    "code": "agoraDoubleButtonTrench-ar",
    "tenant": "default",
    "productCode": "agoraDoubleButtonTrench",
    "locale": "ar",
    "name": "Double-button Trench Coat",
    "description": "Double-button Trench Coat لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "double-button-trench-coat",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Cotton gabardine",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record36": {
    "code": "agoraButtonedCottonShirt-en",
    "tenant": "default",
    "productCode": "agoraButtonedCottonShirt",
    "locale": "en",
    "name": "Buttoned Cotton Shirt",
    "description": "Buttoned Cotton Shirt for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "buttoned-cotton-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record37": {
    "code": "agoraButtonedCottonShirt-ar",
    "tenant": "default",
    "productCode": "agoraButtonedCottonShirt",
    "locale": "ar",
    "name": "Buttoned Cotton Shirt",
    "description": "Buttoned Cotton Shirt لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "buttoned-cotton-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record38": {
    "code": "agoraLayeredTankTop-en",
    "tenant": "default",
    "productCode": "agoraLayeredTankTop",
    "locale": "en",
    "name": "Layered Tank Top",
    "description": "Layered Tank Top for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "layered-tank-top",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Ribbed cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record39": {
    "code": "agoraLayeredTankTop-ar",
    "tenant": "default",
    "productCode": "agoraLayeredTankTop",
    "locale": "ar",
    "name": "Layered Tank Top",
    "description": "Layered Tank Top لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "layered-tank-top",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Ribbed cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record40": {
    "code": "agoraPleatedKnitDress-en",
    "tenant": "default",
    "productCode": "agoraPleatedKnitDress",
    "locale": "en",
    "name": "Pleated Knit Dress",
    "description": "Pleated Knit Dress for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "pleated-knit-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Pleated knit",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record41": {
    "code": "agoraPleatedKnitDress-ar",
    "tenant": "default",
    "productCode": "agoraPleatedKnitDress",
    "locale": "ar",
    "name": "Pleated Knit Dress",
    "description": "Pleated Knit Dress لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "pleated-knit-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Pleated knit",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record42": {
    "code": "agoraMinimalSlipDress-en",
    "tenant": "default",
    "productCode": "agoraMinimalSlipDress",
    "locale": "en",
    "name": "Minimal Slip Dress",
    "description": "Minimal Slip Dress for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "minimal-slip-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Satin crepe",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record43": {
    "code": "agoraMinimalSlipDress-ar",
    "tenant": "default",
    "productCode": "agoraMinimalSlipDress",
    "locale": "ar",
    "name": "Minimal Slip Dress",
    "description": "Minimal Slip Dress لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "minimal-slip-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Satin crepe",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record44": {
    "code": "agoraCollarKnitCardigan-en",
    "tenant": "default",
    "productCode": "agoraCollarKnitCardigan",
    "locale": "en",
    "name": "Collar Knit Cardigan",
    "description": "Collar Knit Cardigan for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "collar-knit-cardigan",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Cotton knit",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record45": {
    "code": "agoraCollarKnitCardigan-ar",
    "tenant": "default",
    "productCode": "agoraCollarKnitCardigan",
    "locale": "ar",
    "name": "Collar Knit Cardigan",
    "description": "Collar Knit Cardigan لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "collar-knit-cardigan",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Cotton knit",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record46": {
    "code": "agoraSoftShoulderBag-en",
    "tenant": "default",
    "productCode": "agoraSoftShoulderBag",
    "locale": "en",
    "name": "Soft Shoulder Bag",
    "description": "Soft Shoulder Bag for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "soft-shoulder-bag",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record47": {
    "code": "agoraSoftShoulderBag-ar",
    "tenant": "default",
    "productCode": "agoraSoftShoulderBag",
    "locale": "ar",
    "name": "Soft Shoulder Bag",
    "description": "Soft Shoulder Bag لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "soft-shoulder-bag",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record48": {
    "code": "agoraSummerKnitVest-en",
    "tenant": "default",
    "productCode": "agoraSummerKnitVest",
    "locale": "en",
    "name": "Summer Knit Vest",
    "description": "Summer Knit Vest for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "summer-knit-vest",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Open knit cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record49": {
    "code": "agoraSummerKnitVest-ar",
    "tenant": "default",
    "productCode": "agoraSummerKnitVest",
    "locale": "ar",
    "name": "Summer Knit Vest",
    "description": "Summer Knit Vest لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "summer-knit-vest",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Open knit cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record50": {
    "code": "agoraTailoredSleevelessTop-en",
    "tenant": "default",
    "productCode": "agoraTailoredSleevelessTop",
    "locale": "en",
    "name": "Tailored Sleeveless Top",
    "description": "Tailored Sleeveless Top for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "tailored-sleeveless-top",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Viscose blend",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record51": {
    "code": "agoraTailoredSleevelessTop-ar",
    "tenant": "default",
    "productCode": "agoraTailoredSleevelessTop",
    "locale": "ar",
    "name": "Tailored Sleeveless Top",
    "description": "Tailored Sleeveless Top لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "tailored-sleeveless-top",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Viscose blend",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record52": {
    "code": "agoraWideLegLinenPant-en",
    "tenant": "default",
    "productCode": "agoraWideLegLinenPant",
    "locale": "en",
    "name": "Wide-leg Linen Pant",
    "description": "Wide-leg Linen Pant for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "wide-leg-linen-pant",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Linen",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record53": {
    "code": "agoraWideLegLinenPant-ar",
    "tenant": "default",
    "productCode": "agoraWideLegLinenPant",
    "locale": "ar",
    "name": "Wide-leg Linen Pant",
    "description": "Wide-leg Linen Pant لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "wide-leg-linen-pant",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Linen",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record54": {
    "code": "agoraTexturedCrossbodyBag-en",
    "tenant": "default",
    "productCode": "agoraTexturedCrossbodyBag",
    "locale": "en",
    "name": "Textured Crossbody Bag",
    "description": "Textured Crossbody Bag for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "textured-crossbody-bag",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Woven leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record55": {
    "code": "agoraTexturedCrossbodyBag-ar",
    "tenant": "default",
    "productCode": "agoraTexturedCrossbodyBag",
    "locale": "ar",
    "name": "Textured Crossbody Bag",
    "description": "Textured Crossbody Bag لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "textured-crossbody-bag",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Woven leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record56": {
    "code": "agoraMinimalBalletFlat-en",
    "tenant": "default",
    "productCode": "agoraMinimalBalletFlat",
    "locale": "en",
    "name": "Minimal Ballet Flat",
    "description": "Minimal Ballet Flat for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "minimal-ballet-flat",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record57": {
    "code": "agoraMinimalBalletFlat-ar",
    "tenant": "default",
    "productCode": "agoraMinimalBalletFlat",
    "locale": "ar",
    "name": "Minimal Ballet Flat",
    "description": "Minimal Ballet Flat لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "minimal-ballet-flat",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record58": {
    "code": "agoraOpenWeaveCardigan-en",
    "tenant": "default",
    "productCode": "agoraOpenWeaveCardigan",
    "locale": "en",
    "name": "Open Weave Cardigan",
    "description": "Open Weave Cardigan for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "open-weave-cardigan",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Open weave knit",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record59": {
    "code": "agoraOpenWeaveCardigan-ar",
    "tenant": "default",
    "productCode": "agoraOpenWeaveCardigan",
    "locale": "ar",
    "name": "Open Weave Cardigan",
    "description": "Open Weave Cardigan لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "open-weave-cardigan",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Open weave knit",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record60": {
    "code": "agoraRefinedShortSleeveDress-en",
    "tenant": "default",
    "productCode": "agoraRefinedShortSleeveDress",
    "locale": "en",
    "name": "Refined Short-sleeve Dress",
    "description": "Refined Short-sleeve Dress for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "refined-short-sleeve-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Cotton viscose",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record61": {
    "code": "agoraRefinedShortSleeveDress-ar",
    "tenant": "default",
    "productCode": "agoraRefinedShortSleeveDress",
    "locale": "ar",
    "name": "Refined Short-sleeve Dress",
    "description": "Refined Short-sleeve Dress لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "refined-short-sleeve-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Cotton viscose",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record62": {
    "code": "agoraGoldFrameSunglasses-en",
    "tenant": "default",
    "productCode": "agoraGoldFrameSunglasses",
    "locale": "en",
    "name": "Gold Frame Sunglasses",
    "description": "Gold Frame Sunglasses for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "gold-frame-sunglasses",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Acetate and metal",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record63": {
    "code": "agoraGoldFrameSunglasses-ar",
    "tenant": "default",
    "productCode": "agoraGoldFrameSunglasses",
    "locale": "ar",
    "name": "Gold Frame Sunglasses",
    "description": "Gold Frame Sunglasses لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "gold-frame-sunglasses",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Acetate and metal",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record64": {
    "code": "agoraSoftRibbedDress-en",
    "tenant": "default",
    "productCode": "agoraSoftRibbedDress",
    "locale": "en",
    "name": "Soft Ribbed Dress",
    "description": "Soft Ribbed Dress for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "soft-ribbed-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Ribbed knit",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record65": {
    "code": "agoraSoftRibbedDress-ar",
    "tenant": "default",
    "productCode": "agoraSoftRibbedDress",
    "locale": "ar",
    "name": "Soft Ribbed Dress",
    "description": "Soft Ribbed Dress لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "soft-ribbed-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Ribbed knit",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record66": {
    "code": "agoraRelaxedCottonTee-en",
    "tenant": "default",
    "productCode": "agoraRelaxedCottonTee",
    "locale": "en",
    "name": "Relaxed Cotton Tee",
    "description": "Relaxed Cotton Tee for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "relaxed-cotton-tee",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Organic cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record67": {
    "code": "agoraRelaxedCottonTee-ar",
    "tenant": "default",
    "productCode": "agoraRelaxedCottonTee",
    "locale": "ar",
    "name": "Relaxed Cotton Tee",
    "description": "Relaxed Cotton Tee لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "relaxed-cotton-tee",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Organic cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record68": {
    "code": "agoraCompactCrossbody-en",
    "tenant": "default",
    "productCode": "agoraCompactCrossbody",
    "locale": "en",
    "name": "Compact Crossbody Bag",
    "description": "Compact Crossbody Bag for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "compact-crossbody-bag",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Pebbled leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record69": {
    "code": "agoraCompactCrossbody-ar",
    "tenant": "default",
    "productCode": "agoraCompactCrossbody",
    "locale": "ar",
    "name": "Compact Crossbody Bag",
    "description": "Compact Crossbody Bag لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "compact-crossbody-bag",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Pebbled leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record70": {
    "code": "agoraSculptedHoopEarrings-en",
    "tenant": "default",
    "productCode": "agoraSculptedHoopEarrings",
    "locale": "en",
    "name": "Sculpted Hoop Earrings",
    "description": "Sculpted Hoop Earrings for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "sculpted-hoop-earrings",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Polished metal",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record71": {
    "code": "agoraSculptedHoopEarrings-ar",
    "tenant": "default",
    "productCode": "agoraSculptedHoopEarrings",
    "locale": "ar",
    "name": "Sculpted Hoop Earrings",
    "description": "Sculpted Hoop Earrings لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "sculpted-hoop-earrings",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Polished metal",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record72": {
    "code": "agoraEverydayColumnDress-en",
    "tenant": "default",
    "productCode": "agoraEverydayColumnDress",
    "locale": "en",
    "name": "Everyday Column Dress",
    "description": "Everyday Column Dress for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "everyday-column-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Stretch cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record73": {
    "code": "agoraEverydayColumnDress-ar",
    "tenant": "default",
    "productCode": "agoraEverydayColumnDress",
    "locale": "ar",
    "name": "Everyday Column Dress",
    "description": "Everyday Column Dress لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "everyday-column-dress",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Stretch cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record74": {
    "code": "agoraSheerRamieShirt-en",
    "tenant": "default",
    "productCode": "agoraSheerRamieShirt",
    "locale": "en",
    "name": "Sheer Ramie Shirt",
    "description": "Sheer Ramie Shirt for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "sheer-ramie-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Ramie",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record75": {
    "code": "agoraSheerRamieShirt-ar",
    "tenant": "default",
    "productCode": "agoraSheerRamieShirt",
    "locale": "ar",
    "name": "Sheer Ramie Shirt",
    "description": "Sheer Ramie Shirt لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "sheer-ramie-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Ramie",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record76": {
    "code": "agoraFineKnitPolo-en",
    "tenant": "default",
    "productCode": "agoraFineKnitPolo",
    "locale": "en",
    "name": "Fine Knit Polo",
    "description": "Fine Knit Polo for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "fine-knit-polo",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Fine knit cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record77": {
    "code": "agoraFineKnitPolo-ar",
    "tenant": "default",
    "productCode": "agoraFineKnitPolo",
    "locale": "ar",
    "name": "Fine Knit Polo",
    "description": "Fine Knit Polo لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "fine-knit-polo",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Fine knit cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record78": {
    "code": "agoraNaturalCanvasTote-en",
    "tenant": "default",
    "productCode": "agoraNaturalCanvasTote",
    "locale": "en",
    "name": "Natural Canvas Tote",
    "description": "Natural Canvas Tote for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "natural-canvas-tote",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Canvas",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record79": {
    "code": "agoraNaturalCanvasTote-ar",
    "tenant": "default",
    "productCode": "agoraNaturalCanvasTote",
    "locale": "ar",
    "name": "Natural Canvas Tote",
    "description": "Natural Canvas Tote لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "natural-canvas-tote",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Canvas",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record80": {
    "code": "agoraLuxeWrapTop-en",
    "tenant": "default",
    "productCode": "agoraLuxeWrapTop",
    "locale": "en",
    "name": "Luxe Wrap Top",
    "description": "Luxe Wrap Top for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "luxe-wrap-top",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Viscose satin",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record81": {
    "code": "agoraLuxeWrapTop-ar",
    "tenant": "default",
    "productCode": "agoraLuxeWrapTop",
    "locale": "ar",
    "name": "Luxe Wrap Top",
    "description": "Luxe Wrap Top لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "luxe-wrap-top",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Viscose satin",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record82": {
    "code": "agoraPearlTrimCardigan-en",
    "tenant": "default",
    "productCode": "agoraPearlTrimCardigan",
    "locale": "en",
    "name": "Pearl Trim Cardigan",
    "description": "Pearl Trim Cardigan for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "pearl-trim-cardigan",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Knit cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record83": {
    "code": "agoraPearlTrimCardigan-ar",
    "tenant": "default",
    "productCode": "agoraPearlTrimCardigan",
    "locale": "ar",
    "name": "Pearl Trim Cardigan",
    "description": "Pearl Trim Cardigan لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "pearl-trim-cardigan",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Knit cotton",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record84": {
    "code": "agoraBiasCutMidiSkirt-en",
    "tenant": "default",
    "productCode": "agoraBiasCutMidiSkirt",
    "locale": "en",
    "name": "Bias-cut Midi Skirt",
    "description": "Bias-cut Midi Skirt for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "bias-cut-midi-skirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Satin crepe",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record85": {
    "code": "agoraBiasCutMidiSkirt-ar",
    "tenant": "default",
    "productCode": "agoraBiasCutMidiSkirt",
    "locale": "ar",
    "name": "Bias-cut Midi Skirt",
    "description": "Bias-cut Midi Skirt لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "bias-cut-midi-skirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Satin crepe",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record86": {
    "code": "agoraTexturedKnitPullover-en",
    "tenant": "default",
    "productCode": "agoraTexturedKnitPullover",
    "locale": "en",
    "name": "Textured Knit Pullover",
    "description": "Textured Knit Pullover for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "textured-knit-pullover",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Cotton wool",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record87": {
    "code": "agoraTexturedKnitPullover-ar",
    "tenant": "default",
    "productCode": "agoraTexturedKnitPullover",
    "locale": "ar",
    "name": "Textured Knit Pullover",
    "description": "Textured Knit Pullover لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "textured-knit-pullover",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Cotton wool",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record88": {
    "code": "agoraPolishedMiniBag-en",
    "tenant": "default",
    "productCode": "agoraPolishedMiniBag",
    "locale": "en",
    "name": "Polished Mini Bag",
    "description": "Polished Mini Bag for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "polished-mini-bag",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record89": {
    "code": "agoraPolishedMiniBag-ar",
    "tenant": "default",
    "productCode": "agoraPolishedMiniBag",
    "locale": "ar",
    "name": "Polished Mini Bag",
    "description": "Polished Mini Bag لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "polished-mini-bag",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record90": {
    "code": "agoraCleanLineBlazer-en",
    "tenant": "default",
    "productCode": "agoraCleanLineBlazer",
    "locale": "en",
    "name": "Clean-line Blazer",
    "description": "Clean-line Blazer for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "clean-line-blazer",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Wool blend",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record91": {
    "code": "agoraCleanLineBlazer-ar",
    "tenant": "default",
    "productCode": "agoraCleanLineBlazer",
    "locale": "ar",
    "name": "Clean-line Blazer",
    "description": "Clean-line Blazer لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "clean-line-blazer",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Wool blend",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record92": {
    "code": "agoraSoftLinenShort-en",
    "tenant": "default",
    "productCode": "agoraSoftLinenShort",
    "locale": "en",
    "name": "Soft Linen Short",
    "description": "Soft Linen Short for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "soft-linen-short",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Linen",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record93": {
    "code": "agoraSoftLinenShort-ar",
    "tenant": "default",
    "productCode": "agoraSoftLinenShort",
    "locale": "ar",
    "name": "Soft Linen Short",
    "description": "Soft Linen Short لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "soft-linen-short",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Linen",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record94": {
    "code": "agoraClassicDenimShirt-en",
    "tenant": "default",
    "productCode": "agoraClassicDenimShirt",
    "locale": "en",
    "name": "Classic Denim Shirt",
    "description": "Classic Denim Shirt for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "classic-denim-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Denim cotton",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record95": {
    "code": "agoraClassicDenimShirt-ar",
    "tenant": "default",
    "productCode": "agoraClassicDenimShirt",
    "locale": "ar",
    "name": "Classic Denim Shirt",
    "description": "Classic Denim Shirt لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "classic-denim-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Denim cotton",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record96": {
    "code": "agoraOvershirtJacket-en",
    "tenant": "default",
    "productCode": "agoraOvershirtJacket",
    "locale": "en",
    "name": "Overshirt Jacket",
    "description": "Overshirt Jacket for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "overshirt-jacket",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Cotton twill",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record97": {
    "code": "agoraOvershirtJacket-ar",
    "tenant": "default",
    "productCode": "agoraOvershirtJacket",
    "locale": "ar",
    "name": "Overshirt Jacket",
    "description": "Overshirt Jacket لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "overshirt-jacket",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Cotton twill",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record98": {
    "code": "agoraSlimCottonTrouser-en",
    "tenant": "default",
    "productCode": "agoraSlimCottonTrouser",
    "locale": "en",
    "name": "Slim Cotton Trouser",
    "description": "Slim Cotton Trouser for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "slim-cotton-trouser",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Cotton twill",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenTrousers"
      ],
      "domain": "apparel"
    }
  },
  "record99": {
    "code": "agoraSlimCottonTrouser-ar",
    "tenant": "default",
    "productCode": "agoraSlimCottonTrouser",
    "locale": "ar",
    "name": "Slim Cotton Trouser",
    "description": "Slim Cotton Trouser لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "slim-cotton-trouser",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Cotton twill",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenTrousers"
      ],
      "domain": "apparel"
    }
  },
  "record100": {
    "code": "agoraRelaxedPoloShirt-en",
    "tenant": "default",
    "productCode": "agoraRelaxedPoloShirt",
    "locale": "en",
    "name": "Relaxed Polo Shirt",
    "description": "Relaxed Polo Shirt for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "relaxed-polo-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Pique cotton",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record101": {
    "code": "agoraRelaxedPoloShirt-ar",
    "tenant": "default",
    "productCode": "agoraRelaxedPoloShirt",
    "locale": "ar",
    "name": "Relaxed Polo Shirt",
    "description": "Relaxed Polo Shirt لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "relaxed-polo-shirt",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Pique cotton",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record102": {
    "code": "agoraWashedChoreJacket-en",
    "tenant": "default",
    "productCode": "agoraWashedChoreJacket",
    "locale": "en",
    "name": "Washed Chore Jacket",
    "description": "Washed Chore Jacket for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "washed-chore-jacket",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Washed cotton",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record103": {
    "code": "agoraWashedChoreJacket-ar",
    "tenant": "default",
    "productCode": "agoraWashedChoreJacket",
    "locale": "ar",
    "name": "Washed Chore Jacket",
    "description": "Washed Chore Jacket لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "washed-chore-jacket",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Washed cotton",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record104": {
    "code": "agoraEverydayCrewNeck-en",
    "tenant": "default",
    "productCode": "agoraEverydayCrewNeck",
    "locale": "en",
    "name": "Everyday Crew Neck",
    "description": "Everyday Crew Neck for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "everyday-crew-neck",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Cotton jersey",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record105": {
    "code": "agoraEverydayCrewNeck-ar",
    "tenant": "default",
    "productCode": "agoraEverydayCrewNeck",
    "locale": "ar",
    "name": "Everyday Crew Neck",
    "description": "Everyday Crew Neck لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "everyday-crew-neck",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "blue",
      "material": "Cotton jersey",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenShirts"
      ],
      "domain": "apparel"
    }
  },
  "record106": {
    "code": "agoraUtilityCargoTrouser-en",
    "tenant": "default",
    "productCode": "agoraUtilityCargoTrouser",
    "locale": "en",
    "name": "Utility Cargo Trouser",
    "description": "Utility Cargo Trouser for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "utility-cargo-trouser",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Ripstop cotton",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenTrousers"
      ],
      "domain": "apparel"
    }
  },
  "record107": {
    "code": "agoraUtilityCargoTrouser-ar",
    "tenant": "default",
    "productCode": "agoraUtilityCargoTrouser",
    "locale": "ar",
    "name": "Utility Cargo Trouser",
    "description": "Utility Cargo Trouser لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "utility-cargo-trouser",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "pink",
      "material": "Ripstop cotton",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenTrousers"
      ],
      "domain": "apparel"
    }
  },
  "record108": {
    "code": "agoraLeatherCardHolder-en",
    "tenant": "default",
    "productCode": "agoraLeatherCardHolder",
    "locale": "en",
    "name": "Leather Card Holder",
    "description": "Leather Card Holder for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "leather-card-holder",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Leather",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record109": {
    "code": "agoraLeatherCardHolder-ar",
    "tenant": "default",
    "productCode": "agoraLeatherCardHolder",
    "locale": "ar",
    "name": "Leather Card Holder",
    "description": "Leather Card Holder لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "leather-card-holder",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Leather",
      "audience": "men"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraMen",
        "agoraMenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record110": {
    "code": "agoraSignatureSunglasses-en",
    "tenant": "default",
    "productCode": "agoraSignatureSunglasses",
    "locale": "en",
    "name": "Signature Sunglasses",
    "description": "Signature Sunglasses for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "signature-sunglasses",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Acetate",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record111": {
    "code": "agoraSignatureSunglasses-ar",
    "tenant": "default",
    "productCode": "agoraSignatureSunglasses",
    "locale": "ar",
    "name": "Signature Sunglasses",
    "description": "Signature Sunglasses لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "signature-sunglasses",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "neutral",
      "material": "Acetate",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record112": {
    "code": "agoraNeutralShoulderBag-en",
    "tenant": "default",
    "productCode": "agoraNeutralShoulderBag",
    "locale": "en",
    "name": "Neutral Shoulder Bag",
    "description": "Neutral Shoulder Bag for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "neutral-shoulder-bag",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record113": {
    "code": "agoraNeutralShoulderBag-ar",
    "tenant": "default",
    "productCode": "agoraNeutralShoulderBag",
    "locale": "ar",
    "name": "Neutral Shoulder Bag",
    "description": "Neutral Shoulder Bag لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "neutral-shoulder-bag",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "green",
      "material": "Leather",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record114": {
    "code": "agoraModernKnitSet-en",
    "tenant": "default",
    "productCode": "agoraModernKnitSet",
    "locale": "en",
    "name": "Modern Knit Set",
    "description": "Modern Knit Set for the Agora apparel reference storefront, styled with publishable media, pricing, inventory, size and colour variants.",
    "slug": "modern-knit-set",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Cotton knit",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record115": {
    "code": "agoraModernKnitSet-ar",
    "tenant": "default",
    "productCode": "agoraModernKnitSet",
    "locale": "ar",
    "name": "Modern Knit Set",
    "description": "Modern Knit Set لواجهة متجر أجورا المرجعية مع وسائط وأسعار ومخزون ومقاسات وألوان قابلة للنشر.",
    "slug": "modern-knit-set",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "yellow",
      "material": "Cotton knit",
      "audience": "women"
    },
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  },
  "record116": {
    "code": "agoraStylePass5Coupon-en",
    "tenant": "default",
    "productCode": "agoraStylePass5Coupon",
    "locale": "en",
    "name": "Agora Style Pass 5 Percent Coupon",
    "description": "A digital coupon product for buying one future-use 5 percent Agora Apparel discount code during end-to-end commerce testing.",
    "slug": "agora-style-pass-5-percent-coupon",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "gold",
      "material": "Digital coupon code",
      "audience": "all",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL",
      "couponBenefit": "5 percent discount"
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraSale",
        "agoraDigitalCoupons"
      ],
      "domain": "apparel",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL"
    }
  },
  "record117": {
    "code": "agoraStylePass5Coupon-ar",
    "tenant": "default",
    "productCode": "agoraStylePass5Coupon",
    "locale": "ar",
    "name": "Agora Style Pass 5 Percent Coupon",
    "description": "منتج قسيمة رقمية لشراء رمز خصم 5 بالمئة من أجورا أباريل لاختبار رحلة التجارة الشاملة.",
    "slug": "agora-style-pass-5-percent-coupon",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "gold",
      "material": "Digital coupon code",
      "audience": "all",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL",
      "couponBenefit": "5 percent discount"
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraSale",
        "agoraDigitalCoupons"
      ],
      "domain": "apparel",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL"
    }
  },
  "record118": {
    "code": "agoraCapsuleEdit10Coupon-en",
    "tenant": "default",
    "productCode": "agoraCapsuleEdit10Coupon",
    "locale": "en",
    "name": "Agora Capsule Edit 10 Percent Coupon",
    "description": "A digital coupon product for buying one future-use 10 percent Agora Apparel discount code during end-to-end commerce testing.",
    "slug": "agora-capsule-edit-10-percent-coupon",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "black",
      "material": "Digital coupon code",
      "audience": "all",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL",
      "couponBenefit": "10 percent discount"
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraSale",
        "agoraDigitalCoupons"
      ],
      "domain": "apparel",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL"
    }
  },
  "record119": {
    "code": "agoraCapsuleEdit10Coupon-ar",
    "tenant": "default",
    "productCode": "agoraCapsuleEdit10Coupon",
    "locale": "ar",
    "name": "Agora Capsule Edit 10 Percent Coupon",
    "description": "منتج قسيمة رقمية لشراء رمز خصم 10 بالمئة من أجورا أباريل لاختبار رحلة التجارة الشاملة.",
    "slug": "agora-capsule-edit-10-percent-coupon",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "black",
      "material": "Digital coupon code",
      "audience": "all",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL",
      "couponBenefit": "10 percent discount"
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraSale",
        "agoraDigitalCoupons"
      ],
      "domain": "apparel",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL"
    }
  },
  "record120": {
    "code": "agoraPrivateSale20Coupon-en",
    "tenant": "default",
    "productCode": "agoraPrivateSale20Coupon",
    "locale": "en",
    "name": "Agora Private Sale 20 Percent Coupon",
    "description": "A limited digital coupon product for buying one future-use 20 percent Agora Apparel discount code during end-to-end commerce testing.",
    "slug": "agora-private-sale-20-percent-coupon",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "red",
      "material": "Digital coupon code",
      "audience": "all",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL",
      "couponBenefit": "20 percent discount"
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraSale",
        "agoraDigitalCoupons"
      ],
      "domain": "apparel",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL"
    }
  },
  "record121": {
    "code": "agoraPrivateSale20Coupon-ar",
    "tenant": "default",
    "productCode": "agoraPrivateSale20Coupon",
    "locale": "ar",
    "name": "Agora Private Sale 20 Percent Coupon",
    "description": "منتج قسيمة رقمية محدود لشراء رمز خصم 20 بالمئة من أجورا أباريل لاختبار رحلة التجارة الشاملة.",
    "slug": "agora-private-sale-20-percent-coupon",
    "status": "READY",
    "revision": 1,
    "active": true,
    "attributes": {
      "colorFamily": "red",
      "material": "Digital coupon code",
      "audience": "all",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL",
      "couponBenefit": "20 percent discount"
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
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraSale",
        "agoraDigitalCoupons"
      ],
      "domain": "apparel",
      "productType": "DIGITAL",
      "digitalDeliveryType": "COUPON_CODE",
      "inventoryStrategy": "COUPON_CODE_POOL"
    }
  }
};

module.exports = Object.freeze(withProductGallery(records));
