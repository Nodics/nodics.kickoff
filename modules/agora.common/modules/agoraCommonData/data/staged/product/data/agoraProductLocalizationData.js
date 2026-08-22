/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.common/modules/agoraCommonData/data/staged/product/data/agoraProductLocalizationData
 * @description Defines Agora storefront product localization, media, classification, and merchandizing records.
 * @layer data
 * @owner agoraCommonData
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination COMMERCE_STAGED @owner agoraCommonData */

module.exports = Object.freeze({
  "record0": {
    "code": "agoraLinenWrapDress-en",
    "locale": "en",
    "name": "Linen Wrap Dress",
    "description": "A softly structured linen-blend wrap dress with an adjustable waist, airy drape, and polished day-to-evening finish.",
    "slug": "linen-wrap-dress",
    "tenant": "default",
    "productCode": "agoraLinenWrapDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-linen-wrap-dress-primary",
        "altText": "Linen Wrap Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-linen-wrap-dress-primary",
          "altText": "Linen Wrap Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-satin-midi-dress-primary",
          "altText": "Linen Wrap Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-ribbed-knit-top-primary",
          "altText": "Linen Wrap Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Linen Wrap Dress",
      "description": "Linen Wrap Dress from Nodics Studio",
      "keywords": [
        "Linen Wrap Dress",
        "Nodics Studio",
        "Linen blend",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Linen blend",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record1": {
    "code": "agoraLinenWrapDress-ar",
    "locale": "ar",
    "name": "Linen Wrap Dress",
    "description": "A softly structured linen-blend wrap dress with an adjustable waist, airy drape, and polished day-to-evening finish.",
    "slug": "linen-wrap-dress-ar",
    "tenant": "default",
    "productCode": "agoraLinenWrapDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-linen-wrap-dress-primary",
        "altText": "Linen Wrap Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-linen-wrap-dress-primary",
          "altText": "Linen Wrap Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-satin-midi-dress-primary",
          "altText": "Linen Wrap Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-ribbed-knit-top-primary",
          "altText": "Linen Wrap Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Linen Wrap Dress",
      "description": "Linen Wrap Dress from Nodics Studio",
      "keywords": [
        "Linen Wrap Dress",
        "Nodics Studio",
        "Linen blend",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Linen blend",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record2": {
    "code": "agoraSatinMidiDress-en",
    "locale": "en",
    "name": "Satin Midi Dress",
    "description": "Satin weave satin midi dress designed for modern everyday styling.",
    "slug": "satin-midi-dress",
    "tenant": "default",
    "productCode": "agoraSatinMidiDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-satin-midi-dress-primary",
        "altText": "Satin Midi Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-satin-midi-dress-primary",
          "altText": "Satin Midi Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-ribbed-knit-top-primary",
          "altText": "Satin Midi Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-cotton-poplin-shirt-primary",
          "altText": "Satin Midi Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Satin Midi Dress",
      "description": "Satin Midi Dress from Nodics Studio",
      "keywords": [
        "Satin Midi Dress",
        "Nodics Studio",
        "Satin weave",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Satin weave",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record3": {
    "code": "agoraSatinMidiDress-ar",
    "locale": "ar",
    "name": "Satin Midi Dress",
    "description": "Satin weave satin midi dress designed for modern everyday styling.",
    "slug": "satin-midi-dress-ar",
    "tenant": "default",
    "productCode": "agoraSatinMidiDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-satin-midi-dress-primary",
        "altText": "Satin Midi Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-satin-midi-dress-primary",
          "altText": "Satin Midi Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-ribbed-knit-top-primary",
          "altText": "Satin Midi Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-cotton-poplin-shirt-primary",
          "altText": "Satin Midi Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Satin Midi Dress",
      "description": "Satin Midi Dress from Nodics Studio",
      "keywords": [
        "Satin Midi Dress",
        "Nodics Studio",
        "Satin weave",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Satin weave",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenDresses"
      ],
      "domain": "apparel"
    }
  },
  "record4": {
    "code": "agoraRibbedKnitTop-en",
    "locale": "en",
    "name": "Ribbed Knit Top",
    "description": "Ribbed cotton blend ribbed knit top designed for modern everyday styling.",
    "slug": "ribbed-knit-top",
    "tenant": "default",
    "productCode": "agoraRibbedKnitTop",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-ribbed-knit-top-primary",
        "altText": "Ribbed Knit Top primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-ribbed-knit-top-primary",
          "altText": "Ribbed Knit Top gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-cotton-poplin-shirt-primary",
          "altText": "Ribbed Knit Top gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-soft-leather-tote-primary",
          "altText": "Ribbed Knit Top gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Ribbed Knit Top",
      "description": "Ribbed Knit Top from Nodics Atelier",
      "keywords": [
        "Ribbed Knit Top",
        "Nodics Atelier",
        "Ribbed cotton blend",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Ribbed cotton blend",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record5": {
    "code": "agoraRibbedKnitTop-ar",
    "locale": "ar",
    "name": "Ribbed Knit Top",
    "description": "Ribbed cotton blend ribbed knit top designed for modern everyday styling.",
    "slug": "ribbed-knit-top-ar",
    "tenant": "default",
    "productCode": "agoraRibbedKnitTop",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-ribbed-knit-top-primary",
        "altText": "Ribbed Knit Top primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-ribbed-knit-top-primary",
          "altText": "Ribbed Knit Top gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-cotton-poplin-shirt-primary",
          "altText": "Ribbed Knit Top gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-soft-leather-tote-primary",
          "altText": "Ribbed Knit Top gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Ribbed Knit Top",
      "description": "Ribbed Knit Top from Nodics Atelier",
      "keywords": [
        "Ribbed Knit Top",
        "Nodics Atelier",
        "Ribbed cotton blend",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Ribbed cotton blend",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record6": {
    "code": "agoraCottonPoplinShirtWomen-en",
    "locale": "en",
    "name": "Cotton Poplin Shirt",
    "description": "Cotton poplin cotton poplin shirt designed for modern everyday styling.",
    "slug": "cotton-poplin-shirt",
    "tenant": "default",
    "productCode": "agoraCottonPoplinShirtWomen",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-cotton-poplin-shirt-primary",
        "altText": "Cotton Poplin Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-cotton-poplin-shirt-primary",
          "altText": "Cotton Poplin Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-soft-leather-tote-primary",
          "altText": "Cotton Poplin Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-printed-silk-scarf-primary",
          "altText": "Cotton Poplin Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Cotton Poplin Shirt",
      "description": "Cotton Poplin Shirt from Nodics Atelier",
      "keywords": [
        "Cotton Poplin Shirt",
        "Nodics Atelier",
        "Cotton poplin",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Cotton poplin",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record7": {
    "code": "agoraCottonPoplinShirtWomen-ar",
    "locale": "ar",
    "name": "Cotton Poplin Shirt",
    "description": "Cotton poplin cotton poplin shirt designed for modern everyday styling.",
    "slug": "cotton-poplin-shirt-ar",
    "tenant": "default",
    "productCode": "agoraCottonPoplinShirtWomen",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-cotton-poplin-shirt-primary",
        "altText": "Cotton Poplin Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-cotton-poplin-shirt-primary",
          "altText": "Cotton Poplin Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-soft-leather-tote-primary",
          "altText": "Cotton Poplin Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-printed-silk-scarf-primary",
          "altText": "Cotton Poplin Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Cotton Poplin Shirt",
      "description": "Cotton Poplin Shirt from Nodics Atelier",
      "keywords": [
        "Cotton Poplin Shirt",
        "Nodics Atelier",
        "Cotton poplin",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Cotton poplin",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenTops"
      ],
      "domain": "apparel"
    }
  },
  "record8": {
    "code": "agoraLeatherTote-en",
    "locale": "en",
    "name": "Soft Leather Tote",
    "description": "Leather soft leather tote designed for modern everyday styling.",
    "slug": "soft-leather-tote",
    "tenant": "default",
    "productCode": "agoraLeatherTote",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-leather-tote-primary",
        "altText": "Soft Leather Tote primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-soft-leather-tote-primary",
          "altText": "Soft Leather Tote gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-printed-silk-scarf-primary",
          "altText": "Soft Leather Tote gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-oxford-shirt-primary",
          "altText": "Soft Leather Tote gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Soft Leather Tote",
      "description": "Soft Leather Tote from Nodics Goods",
      "keywords": [
        "Soft Leather Tote",
        "Nodics Goods",
        "Leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "blue",
      "material": "Leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record9": {
    "code": "agoraLeatherTote-ar",
    "locale": "ar",
    "name": "Soft Leather Tote",
    "description": "Leather soft leather tote designed for modern everyday styling.",
    "slug": "soft-leather-tote-ar",
    "tenant": "default",
    "productCode": "agoraLeatherTote",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-leather-tote-primary",
        "altText": "Soft Leather Tote primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-soft-leather-tote-primary",
          "altText": "Soft Leather Tote gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-printed-silk-scarf-primary",
          "altText": "Soft Leather Tote gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-oxford-shirt-primary",
          "altText": "Soft Leather Tote gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Soft Leather Tote",
      "description": "Soft Leather Tote from Nodics Goods",
      "keywords": [
        "Soft Leather Tote",
        "Nodics Goods",
        "Leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "blue",
      "material": "Leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenBags"
      ],
      "domain": "apparel"
    }
  },
  "record10": {
    "code": "agoraSilkScarf-en",
    "locale": "en",
    "name": "Printed Silk Scarf",
    "description": "Silk twill printed silk scarf designed for modern everyday styling.",
    "slug": "printed-silk-scarf",
    "tenant": "default",
    "productCode": "agoraSilkScarf",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-printed-silk-scarf-primary",
        "altText": "Printed Silk Scarf primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-printed-silk-scarf-primary",
          "altText": "Printed Silk Scarf gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-oxford-shirt-primary",
          "altText": "Printed Silk Scarf gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-linen-camp-shirt-primary",
          "altText": "Printed Silk Scarf gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Printed Silk Scarf",
      "description": "Printed Silk Scarf from Nodics Goods",
      "keywords": [
        "Printed Silk Scarf",
        "Nodics Goods",
        "Silk twill",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "pink",
      "material": "Silk twill",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record11": {
    "code": "agoraSilkScarf-ar",
    "locale": "ar",
    "name": "Printed Silk Scarf",
    "description": "Silk twill printed silk scarf designed for modern everyday styling.",
    "slug": "printed-silk-scarf-ar",
    "tenant": "default",
    "productCode": "agoraSilkScarf",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-printed-silk-scarf-primary",
        "altText": "Printed Silk Scarf primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-printed-silk-scarf-primary",
          "altText": "Printed Silk Scarf gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-oxford-shirt-primary",
          "altText": "Printed Silk Scarf gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-linen-camp-shirt-primary",
          "altText": "Printed Silk Scarf gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Printed Silk Scarf",
      "description": "Printed Silk Scarf from Nodics Goods",
      "keywords": [
        "Printed Silk Scarf",
        "Nodics Goods",
        "Silk twill",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "pink",
      "material": "Silk twill",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraWomenAccessories"
      ],
      "domain": "apparel"
    }
  },
  "record12": {
    "code": "agoraOxfordShirt-en",
    "locale": "en",
    "name": "Oxford Shirt",
    "description": "Oxford cotton oxford shirt designed for modern everyday styling.",
    "slug": "oxford-shirt",
    "tenant": "default",
    "productCode": "agoraOxfordShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-oxford-shirt-primary",
        "altText": "Oxford Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-oxford-shirt-primary",
          "altText": "Oxford Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-linen-camp-shirt-primary",
          "altText": "Oxford Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-tailored-chino-primary",
          "altText": "Oxford Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Oxford Shirt",
      "description": "Oxford Shirt from Nodics Menswear",
      "keywords": [
        "Oxford Shirt",
        "Nodics Menswear",
        "Oxford cotton",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Oxford cotton",
      "audience": "men",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Oxford Shirt",
    "description": "Oxford cotton oxford shirt designed for modern everyday styling.",
    "slug": "oxford-shirt-ar",
    "tenant": "default",
    "productCode": "agoraOxfordShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-oxford-shirt-primary",
        "altText": "Oxford Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-oxford-shirt-primary",
          "altText": "Oxford Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-linen-camp-shirt-primary",
          "altText": "Oxford Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-tailored-chino-primary",
          "altText": "Oxford Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Oxford Shirt",
      "description": "Oxford Shirt from Nodics Menswear",
      "keywords": [
        "Oxford Shirt",
        "Nodics Menswear",
        "Oxford cotton",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Oxford cotton",
      "audience": "men",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Linen Camp Shirt",
    "description": "Washed linen linen camp shirt designed for modern everyday styling.",
    "slug": "linen-camp-shirt",
    "tenant": "default",
    "productCode": "agoraLinenCampShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-linen-camp-shirt-primary",
        "altText": "Linen Camp Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-linen-camp-shirt-primary",
          "altText": "Linen Camp Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-tailored-chino-primary",
          "altText": "Linen Camp Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-trouser-primary",
          "altText": "Linen Camp Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Linen Camp Shirt",
      "description": "Linen Camp Shirt from Nodics Menswear",
      "keywords": [
        "Linen Camp Shirt",
        "Nodics Menswear",
        "Washed linen",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Washed linen",
      "audience": "men",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Linen Camp Shirt",
    "description": "Washed linen linen camp shirt designed for modern everyday styling.",
    "slug": "linen-camp-shirt-ar",
    "tenant": "default",
    "productCode": "agoraLinenCampShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-linen-camp-shirt-primary",
        "altText": "Linen Camp Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-linen-camp-shirt-primary",
          "altText": "Linen Camp Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-tailored-chino-primary",
          "altText": "Linen Camp Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-trouser-primary",
          "altText": "Linen Camp Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Linen Camp Shirt",
      "description": "Linen Camp Shirt from Nodics Menswear",
      "keywords": [
        "Linen Camp Shirt",
        "Nodics Menswear",
        "Washed linen",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Washed linen",
      "audience": "men",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Tailored Chino",
    "description": "Cotton twill tailored chino designed for modern everyday styling.",
    "slug": "tailored-chino",
    "tenant": "default",
    "productCode": "agoraTailoredChino",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-tailored-chino-primary",
        "altText": "Tailored Chino primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-tailored-chino-primary",
          "altText": "Tailored Chino gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-trouser-primary",
          "altText": "Tailored Chino gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-canvas-utility-belt-primary",
          "altText": "Tailored Chino gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Tailored Chino",
      "description": "Tailored Chino from Nodics Menswear",
      "keywords": [
        "Tailored Chino",
        "Nodics Menswear",
        "Cotton twill",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Cotton twill",
      "audience": "men",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Tailored Chino",
    "description": "Cotton twill tailored chino designed for modern everyday styling.",
    "slug": "tailored-chino-ar",
    "tenant": "default",
    "productCode": "agoraTailoredChino",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-tailored-chino-primary",
        "altText": "Tailored Chino primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-tailored-chino-primary",
          "altText": "Tailored Chino gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-trouser-primary",
          "altText": "Tailored Chino gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-canvas-utility-belt-primary",
          "altText": "Tailored Chino gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Tailored Chino",
      "description": "Tailored Chino from Nodics Menswear",
      "keywords": [
        "Tailored Chino",
        "Nodics Menswear",
        "Cotton twill",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Cotton twill",
      "audience": "men",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Relaxed Trouser",
    "description": "Soft twill relaxed trouser designed for modern everyday styling.",
    "slug": "relaxed-trouser",
    "tenant": "default",
    "productCode": "agoraRelaxedTrouser",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-relaxed-trouser-primary",
        "altText": "Relaxed Trouser primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-relaxed-trouser-primary",
          "altText": "Relaxed Trouser gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-canvas-utility-belt-primary",
          "altText": "Relaxed Trouser gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-fine-wool-cap-primary",
          "altText": "Relaxed Trouser gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Relaxed Trouser",
      "description": "Relaxed Trouser from Nodics Menswear",
      "keywords": [
        "Relaxed Trouser",
        "Nodics Menswear",
        "Soft twill",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Soft twill",
      "audience": "men",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Relaxed Trouser",
    "description": "Soft twill relaxed trouser designed for modern everyday styling.",
    "slug": "relaxed-trouser-ar",
    "tenant": "default",
    "productCode": "agoraRelaxedTrouser",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-relaxed-trouser-primary",
        "altText": "Relaxed Trouser primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-relaxed-trouser-primary",
          "altText": "Relaxed Trouser gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-canvas-utility-belt-primary",
          "altText": "Relaxed Trouser gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-fine-wool-cap-primary",
          "altText": "Relaxed Trouser gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Relaxed Trouser",
      "description": "Relaxed Trouser from Nodics Menswear",
      "keywords": [
        "Relaxed Trouser",
        "Nodics Menswear",
        "Soft twill",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Soft twill",
      "audience": "men",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Canvas Utility Belt",
    "description": "Canvas canvas utility belt designed for modern everyday styling.",
    "slug": "canvas-utility-belt",
    "tenant": "default",
    "productCode": "agoraCanvasBelt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-canvas-utility-belt-primary",
        "altText": "Canvas Utility Belt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-canvas-utility-belt-primary",
          "altText": "Canvas Utility Belt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-fine-wool-cap-primary",
          "altText": "Canvas Utility Belt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-stretch-strap-top-primary",
          "altText": "Canvas Utility Belt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Canvas Utility Belt",
      "description": "Canvas Utility Belt from Nodics Goods",
      "keywords": [
        "Canvas Utility Belt",
        "Nodics Goods",
        "Canvas",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "blue",
      "material": "Canvas",
      "audience": "men",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Canvas Utility Belt",
    "description": "Canvas canvas utility belt designed for modern everyday styling.",
    "slug": "canvas-utility-belt-ar",
    "tenant": "default",
    "productCode": "agoraCanvasBelt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-canvas-utility-belt-primary",
        "altText": "Canvas Utility Belt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-canvas-utility-belt-primary",
          "altText": "Canvas Utility Belt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-fine-wool-cap-primary",
          "altText": "Canvas Utility Belt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-stretch-strap-top-primary",
          "altText": "Canvas Utility Belt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Canvas Utility Belt",
      "description": "Canvas Utility Belt from Nodics Goods",
      "keywords": [
        "Canvas Utility Belt",
        "Nodics Goods",
        "Canvas",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "blue",
      "material": "Canvas",
      "audience": "men",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Fine Wool Cap",
    "description": "Wool blend fine wool cap designed for modern everyday styling.",
    "slug": "fine-wool-cap",
    "tenant": "default",
    "productCode": "agoraWoolCap",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-fine-wool-cap-primary",
        "altText": "Fine Wool Cap primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-fine-wool-cap-primary",
          "altText": "Fine Wool Cap gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-stretch-strap-top-primary",
          "altText": "Fine Wool Cap gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-ramie-shirt-with-pockets-primary",
          "altText": "Fine Wool Cap gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Fine Wool Cap",
      "description": "Fine Wool Cap from Nodics Goods",
      "keywords": [
        "Fine Wool Cap",
        "Nodics Goods",
        "Wool blend",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "pink",
      "material": "Wool blend",
      "audience": "men",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Fine Wool Cap",
    "description": "Wool blend fine wool cap designed for modern everyday styling.",
    "slug": "fine-wool-cap-ar",
    "tenant": "default",
    "productCode": "agoraWoolCap",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-fine-wool-cap-primary",
        "altText": "Fine Wool Cap primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-fine-wool-cap-primary",
          "altText": "Fine Wool Cap gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-stretch-strap-top-primary",
          "altText": "Fine Wool Cap gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-ramie-shirt-with-pockets-primary",
          "altText": "Fine Wool Cap gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Fine Wool Cap",
      "description": "Fine Wool Cap from Nodics Goods",
      "keywords": [
        "Fine Wool Cap",
        "Nodics Goods",
        "Wool blend",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "pink",
      "material": "Wool blend",
      "audience": "men",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Stretch Strap Top",
    "description": "Stretch jersey stretch strap top designed for modern everyday styling.",
    "slug": "stretch-strap-top",
    "tenant": "default",
    "productCode": "agoraStretchStrapTop",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-stretch-strap-top-primary",
        "altText": "Stretch Strap Top primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-stretch-strap-top-primary",
          "altText": "Stretch Strap Top gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-ramie-shirt-with-pockets-primary",
          "altText": "Stretch Strap Top gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-rattan-bag-with-handle-primary",
          "altText": "Stretch Strap Top gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Stretch Strap Top",
      "description": "Stretch Strap Top from Nodics Studio",
      "keywords": [
        "Stretch Strap Top",
        "Nodics Studio",
        "Stretch jersey",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Stretch jersey",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Stretch Strap Top",
    "description": "Stretch jersey stretch strap top designed for modern everyday styling.",
    "slug": "stretch-strap-top-ar",
    "tenant": "default",
    "productCode": "agoraStretchStrapTop",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-stretch-strap-top-primary",
        "altText": "Stretch Strap Top primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-stretch-strap-top-primary",
          "altText": "Stretch Strap Top gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-ramie-shirt-with-pockets-primary",
          "altText": "Stretch Strap Top gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-rattan-bag-with-handle-primary",
          "altText": "Stretch Strap Top gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Stretch Strap Top",
      "description": "Stretch Strap Top from Nodics Studio",
      "keywords": [
        "Stretch Strap Top",
        "Nodics Studio",
        "Stretch jersey",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Stretch jersey",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Ramie Shirt With Pockets",
    "description": "Ramie ramie shirt with pockets designed for modern everyday styling.",
    "slug": "ramie-shirt-with-pockets",
    "tenant": "default",
    "productCode": "agoraRamiePocketShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-ramie-shirt-with-pockets-primary",
        "altText": "Ramie Shirt With Pockets primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-ramie-shirt-with-pockets-primary",
          "altText": "Ramie Shirt With Pockets gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-rattan-bag-with-handle-primary",
          "altText": "Ramie Shirt With Pockets gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-striped-knit-dress-primary",
          "altText": "Ramie Shirt With Pockets gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Ramie Shirt With Pockets",
      "description": "Ramie Shirt With Pockets from Nodics Atelier",
      "keywords": [
        "Ramie Shirt With Pockets",
        "Nodics Atelier",
        "Ramie",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Ramie",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Ramie Shirt With Pockets",
    "description": "Ramie ramie shirt with pockets designed for modern everyday styling.",
    "slug": "ramie-shirt-with-pockets-ar",
    "tenant": "default",
    "productCode": "agoraRamiePocketShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-ramie-shirt-with-pockets-primary",
        "altText": "Ramie Shirt With Pockets primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-ramie-shirt-with-pockets-primary",
          "altText": "Ramie Shirt With Pockets gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-rattan-bag-with-handle-primary",
          "altText": "Ramie Shirt With Pockets gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-striped-knit-dress-primary",
          "altText": "Ramie Shirt With Pockets gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Ramie Shirt With Pockets",
      "description": "Ramie Shirt With Pockets from Nodics Atelier",
      "keywords": [
        "Ramie Shirt With Pockets",
        "Nodics Atelier",
        "Ramie",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Ramie",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Rattan Bag With Handle",
    "description": "Rattan rattan bag with handle designed for modern everyday styling.",
    "slug": "rattan-bag-with-handle",
    "tenant": "default",
    "productCode": "agoraRattanHandleBag",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-rattan-bag-with-handle-primary",
        "altText": "Rattan Bag With Handle primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-rattan-bag-with-handle-primary",
          "altText": "Rattan Bag With Handle gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-striped-knit-dress-primary",
          "altText": "Rattan Bag With Handle gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-belt-wrap-dress-primary",
          "altText": "Rattan Bag With Handle gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Rattan Bag With Handle",
      "description": "Rattan Bag With Handle from Nodics Goods",
      "keywords": [
        "Rattan Bag With Handle",
        "Nodics Goods",
        "Rattan",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "green",
      "material": "Rattan",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Rattan Bag With Handle",
    "description": "Rattan rattan bag with handle designed for modern everyday styling.",
    "slug": "rattan-bag-with-handle-ar",
    "tenant": "default",
    "productCode": "agoraRattanHandleBag",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-rattan-bag-with-handle-primary",
        "altText": "Rattan Bag With Handle primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-rattan-bag-with-handle-primary",
          "altText": "Rattan Bag With Handle gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-striped-knit-dress-primary",
          "altText": "Rattan Bag With Handle gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-belt-wrap-dress-primary",
          "altText": "Rattan Bag With Handle gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Rattan Bag With Handle",
      "description": "Rattan Bag With Handle from Nodics Goods",
      "keywords": [
        "Rattan Bag With Handle",
        "Nodics Goods",
        "Rattan",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "green",
      "material": "Rattan",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Striped Knit Dress",
    "description": "Knit viscose striped knit dress designed for modern everyday styling.",
    "slug": "striped-knit-dress",
    "tenant": "default",
    "productCode": "agoraStripedKnitDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-striped-knit-dress-primary",
        "altText": "Striped Knit Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-striped-knit-dress-primary",
          "altText": "Striped Knit Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-belt-wrap-dress-primary",
          "altText": "Striped Knit Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-double-button-trench-coat-primary",
          "altText": "Striped Knit Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Striped Knit Dress",
      "description": "Striped Knit Dress from Nodics Studio",
      "keywords": [
        "Striped Knit Dress",
        "Nodics Studio",
        "Knit viscose",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Knit viscose",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Striped Knit Dress",
    "description": "Knit viscose striped knit dress designed for modern everyday styling.",
    "slug": "striped-knit-dress-ar",
    "tenant": "default",
    "productCode": "agoraStripedKnitDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-striped-knit-dress-primary",
        "altText": "Striped Knit Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-striped-knit-dress-primary",
          "altText": "Striped Knit Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-belt-wrap-dress-primary",
          "altText": "Striped Knit Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-double-button-trench-coat-primary",
          "altText": "Striped Knit Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Striped Knit Dress",
      "description": "Striped Knit Dress from Nodics Studio",
      "keywords": [
        "Striped Knit Dress",
        "Nodics Studio",
        "Knit viscose",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Knit viscose",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Belt Wrap Dress",
    "description": "Cotton blend belt wrap dress designed for modern everyday styling.",
    "slug": "belt-wrap-dress",
    "tenant": "default",
    "productCode": "agoraBeltWrapDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-belt-wrap-dress-primary",
        "altText": "Belt Wrap Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-belt-wrap-dress-primary",
          "altText": "Belt Wrap Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-double-button-trench-coat-primary",
          "altText": "Belt Wrap Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-buttoned-cotton-shirt-primary",
          "altText": "Belt Wrap Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Belt Wrap Dress",
      "description": "Belt Wrap Dress from Nodics Studio",
      "keywords": [
        "Belt Wrap Dress",
        "Nodics Studio",
        "Cotton blend",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "blue",
      "material": "Cotton blend",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Belt Wrap Dress",
    "description": "Cotton blend belt wrap dress designed for modern everyday styling.",
    "slug": "belt-wrap-dress-ar",
    "tenant": "default",
    "productCode": "agoraBeltWrapDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-belt-wrap-dress-primary",
        "altText": "Belt Wrap Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-belt-wrap-dress-primary",
          "altText": "Belt Wrap Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-double-button-trench-coat-primary",
          "altText": "Belt Wrap Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-buttoned-cotton-shirt-primary",
          "altText": "Belt Wrap Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Belt Wrap Dress",
      "description": "Belt Wrap Dress from Nodics Studio",
      "keywords": [
        "Belt Wrap Dress",
        "Nodics Studio",
        "Cotton blend",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "blue",
      "material": "Cotton blend",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Double-button Trench Coat",
    "description": "Cotton gabardine double-button trench coat designed for modern everyday styling.",
    "slug": "double-button-trench-coat",
    "tenant": "default",
    "productCode": "agoraDoubleButtonTrench",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-double-button-trench-coat-primary",
        "altText": "Double-button Trench Coat primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-double-button-trench-coat-primary",
          "altText": "Double-button Trench Coat gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-buttoned-cotton-shirt-primary",
          "altText": "Double-button Trench Coat gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-layered-tank-top-primary",
          "altText": "Double-button Trench Coat gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Double-button Trench Coat",
      "description": "Double-button Trench Coat from Nodics Atelier",
      "keywords": [
        "Double-button Trench Coat",
        "Nodics Atelier",
        "Cotton gabardine",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "New In",
      "colorFamily": "pink",
      "material": "Cotton gabardine",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Double-button Trench Coat",
    "description": "Cotton gabardine double-button trench coat designed for modern everyday styling.",
    "slug": "double-button-trench-coat-ar",
    "tenant": "default",
    "productCode": "agoraDoubleButtonTrench",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-double-button-trench-coat-primary",
        "altText": "Double-button Trench Coat primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-double-button-trench-coat-primary",
          "altText": "Double-button Trench Coat gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-buttoned-cotton-shirt-primary",
          "altText": "Double-button Trench Coat gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-layered-tank-top-primary",
          "altText": "Double-button Trench Coat gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Double-button Trench Coat",
      "description": "Double-button Trench Coat from Nodics Atelier",
      "keywords": [
        "Double-button Trench Coat",
        "Nodics Atelier",
        "Cotton gabardine",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "New In",
      "colorFamily": "pink",
      "material": "Cotton gabardine",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Buttoned Cotton Shirt",
    "description": "Cotton buttoned cotton shirt designed for modern everyday styling.",
    "slug": "buttoned-cotton-shirt",
    "tenant": "default",
    "productCode": "agoraButtonedCottonShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-buttoned-cotton-shirt-primary",
        "altText": "Buttoned Cotton Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-buttoned-cotton-shirt-primary",
          "altText": "Buttoned Cotton Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-layered-tank-top-primary",
          "altText": "Buttoned Cotton Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-pleated-knit-dress-primary",
          "altText": "Buttoned Cotton Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Buttoned Cotton Shirt",
      "description": "Buttoned Cotton Shirt from Nodics Atelier",
      "keywords": [
        "Buttoned Cotton Shirt",
        "Nodics Atelier",
        "Cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Buttoned Cotton Shirt",
    "description": "Cotton buttoned cotton shirt designed for modern everyday styling.",
    "slug": "buttoned-cotton-shirt-ar",
    "tenant": "default",
    "productCode": "agoraButtonedCottonShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-buttoned-cotton-shirt-primary",
        "altText": "Buttoned Cotton Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-buttoned-cotton-shirt-primary",
          "altText": "Buttoned Cotton Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-layered-tank-top-primary",
          "altText": "Buttoned Cotton Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-pleated-knit-dress-primary",
          "altText": "Buttoned Cotton Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Buttoned Cotton Shirt",
      "description": "Buttoned Cotton Shirt from Nodics Atelier",
      "keywords": [
        "Buttoned Cotton Shirt",
        "Nodics Atelier",
        "Cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Layered Tank Top",
    "description": "Ribbed cotton layered tank top designed for modern everyday styling.",
    "slug": "layered-tank-top",
    "tenant": "default",
    "productCode": "agoraLayeredTankTop",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-layered-tank-top-primary",
        "altText": "Layered Tank Top primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-layered-tank-top-primary",
          "altText": "Layered Tank Top gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-pleated-knit-dress-primary",
          "altText": "Layered Tank Top gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-minimal-slip-dress-primary",
          "altText": "Layered Tank Top gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Layered Tank Top",
      "description": "Layered Tank Top from Nodics Studio",
      "keywords": [
        "Layered Tank Top",
        "Nodics Studio",
        "Ribbed cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Ribbed cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Layered Tank Top",
    "description": "Ribbed cotton layered tank top designed for modern everyday styling.",
    "slug": "layered-tank-top-ar",
    "tenant": "default",
    "productCode": "agoraLayeredTankTop",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-layered-tank-top-primary",
        "altText": "Layered Tank Top primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-layered-tank-top-primary",
          "altText": "Layered Tank Top gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-pleated-knit-dress-primary",
          "altText": "Layered Tank Top gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-minimal-slip-dress-primary",
          "altText": "Layered Tank Top gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Layered Tank Top",
      "description": "Layered Tank Top from Nodics Studio",
      "keywords": [
        "Layered Tank Top",
        "Nodics Studio",
        "Ribbed cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Ribbed cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Pleated Knit Dress",
    "description": "Pleated knit pleated knit dress designed for modern everyday styling.",
    "slug": "pleated-knit-dress",
    "tenant": "default",
    "productCode": "agoraPleatedKnitDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-pleated-knit-dress-primary",
        "altText": "Pleated Knit Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-pleated-knit-dress-primary",
          "altText": "Pleated Knit Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-minimal-slip-dress-primary",
          "altText": "Pleated Knit Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-collar-knit-cardigan-primary",
          "altText": "Pleated Knit Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Pleated Knit Dress",
      "description": "Pleated Knit Dress from Nodics Studio",
      "keywords": [
        "Pleated Knit Dress",
        "Nodics Studio",
        "Pleated knit",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Pleated knit",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Pleated Knit Dress",
    "description": "Pleated knit pleated knit dress designed for modern everyday styling.",
    "slug": "pleated-knit-dress-ar",
    "tenant": "default",
    "productCode": "agoraPleatedKnitDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-pleated-knit-dress-primary",
        "altText": "Pleated Knit Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-pleated-knit-dress-primary",
          "altText": "Pleated Knit Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-minimal-slip-dress-primary",
          "altText": "Pleated Knit Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-collar-knit-cardigan-primary",
          "altText": "Pleated Knit Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Pleated Knit Dress",
      "description": "Pleated Knit Dress from Nodics Studio",
      "keywords": [
        "Pleated Knit Dress",
        "Nodics Studio",
        "Pleated knit",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Pleated knit",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Minimal Slip Dress",
    "description": "Satin crepe minimal slip dress designed for modern everyday styling.",
    "slug": "minimal-slip-dress",
    "tenant": "default",
    "productCode": "agoraMinimalSlipDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-minimal-slip-dress-primary",
        "altText": "Minimal Slip Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-minimal-slip-dress-primary",
          "altText": "Minimal Slip Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-collar-knit-cardigan-primary",
          "altText": "Minimal Slip Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-soft-shoulder-bag-primary",
          "altText": "Minimal Slip Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Minimal Slip Dress",
      "description": "Minimal Slip Dress from Nodics Studio",
      "keywords": [
        "Minimal Slip Dress",
        "Nodics Studio",
        "Satin crepe",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Satin crepe",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Minimal Slip Dress",
    "description": "Satin crepe minimal slip dress designed for modern everyday styling.",
    "slug": "minimal-slip-dress-ar",
    "tenant": "default",
    "productCode": "agoraMinimalSlipDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-minimal-slip-dress-primary",
        "altText": "Minimal Slip Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-minimal-slip-dress-primary",
          "altText": "Minimal Slip Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-collar-knit-cardigan-primary",
          "altText": "Minimal Slip Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-soft-shoulder-bag-primary",
          "altText": "Minimal Slip Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Minimal Slip Dress",
      "description": "Minimal Slip Dress from Nodics Studio",
      "keywords": [
        "Minimal Slip Dress",
        "Nodics Studio",
        "Satin crepe",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Satin crepe",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Collar Knit Cardigan",
    "description": "Cotton knit collar knit cardigan designed for modern everyday styling.",
    "slug": "collar-knit-cardigan",
    "tenant": "default",
    "productCode": "agoraCollarKnitCardigan",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-collar-knit-cardigan-primary",
        "altText": "Collar Knit Cardigan primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-collar-knit-cardigan-primary",
          "altText": "Collar Knit Cardigan gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-soft-shoulder-bag-primary",
          "altText": "Collar Knit Cardigan gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-summer-knit-vest-primary",
          "altText": "Collar Knit Cardigan gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Collar Knit Cardigan",
      "description": "Collar Knit Cardigan from Nodics Atelier",
      "keywords": [
        "Collar Knit Cardigan",
        "Nodics Atelier",
        "Cotton knit",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "blue",
      "material": "Cotton knit",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Collar Knit Cardigan",
    "description": "Cotton knit collar knit cardigan designed for modern everyday styling.",
    "slug": "collar-knit-cardigan-ar",
    "tenant": "default",
    "productCode": "agoraCollarKnitCardigan",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-collar-knit-cardigan-primary",
        "altText": "Collar Knit Cardigan primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-collar-knit-cardigan-primary",
          "altText": "Collar Knit Cardigan gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-soft-shoulder-bag-primary",
          "altText": "Collar Knit Cardigan gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-summer-knit-vest-primary",
          "altText": "Collar Knit Cardigan gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Collar Knit Cardigan",
      "description": "Collar Knit Cardigan from Nodics Atelier",
      "keywords": [
        "Collar Knit Cardigan",
        "Nodics Atelier",
        "Cotton knit",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "blue",
      "material": "Cotton knit",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Soft Shoulder Bag",
    "description": "Leather soft shoulder bag designed for modern everyday styling.",
    "slug": "soft-shoulder-bag",
    "tenant": "default",
    "productCode": "agoraSoftShoulderBag",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-shoulder-bag-primary",
        "altText": "Soft Shoulder Bag primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-soft-shoulder-bag-primary",
          "altText": "Soft Shoulder Bag gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-summer-knit-vest-primary",
          "altText": "Soft Shoulder Bag gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-tailored-sleeveless-top-primary",
          "altText": "Soft Shoulder Bag gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Soft Shoulder Bag",
      "description": "Soft Shoulder Bag from Nodics Goods",
      "keywords": [
        "Soft Shoulder Bag",
        "Nodics Goods",
        "Leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "pink",
      "material": "Leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Soft Shoulder Bag",
    "description": "Leather soft shoulder bag designed for modern everyday styling.",
    "slug": "soft-shoulder-bag-ar",
    "tenant": "default",
    "productCode": "agoraSoftShoulderBag",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-shoulder-bag-primary",
        "altText": "Soft Shoulder Bag primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-soft-shoulder-bag-primary",
          "altText": "Soft Shoulder Bag gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-summer-knit-vest-primary",
          "altText": "Soft Shoulder Bag gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-tailored-sleeveless-top-primary",
          "altText": "Soft Shoulder Bag gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Soft Shoulder Bag",
      "description": "Soft Shoulder Bag from Nodics Goods",
      "keywords": [
        "Soft Shoulder Bag",
        "Nodics Goods",
        "Leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "pink",
      "material": "Leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Summer Knit Vest",
    "description": "Open knit cotton summer knit vest designed for modern everyday styling.",
    "slug": "summer-knit-vest",
    "tenant": "default",
    "productCode": "agoraSummerKnitVest",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-summer-knit-vest-primary",
        "altText": "Summer Knit Vest primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-summer-knit-vest-primary",
          "altText": "Summer Knit Vest gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-tailored-sleeveless-top-primary",
          "altText": "Summer Knit Vest gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-wide-leg-linen-pant-primary",
          "altText": "Summer Knit Vest gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Summer Knit Vest",
      "description": "Summer Knit Vest from Nodics Studio",
      "keywords": [
        "Summer Knit Vest",
        "Nodics Studio",
        "Open knit cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Open knit cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Summer Knit Vest",
    "description": "Open knit cotton summer knit vest designed for modern everyday styling.",
    "slug": "summer-knit-vest-ar",
    "tenant": "default",
    "productCode": "agoraSummerKnitVest",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-summer-knit-vest-primary",
        "altText": "Summer Knit Vest primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-summer-knit-vest-primary",
          "altText": "Summer Knit Vest gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-tailored-sleeveless-top-primary",
          "altText": "Summer Knit Vest gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-wide-leg-linen-pant-primary",
          "altText": "Summer Knit Vest gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Summer Knit Vest",
      "description": "Summer Knit Vest from Nodics Studio",
      "keywords": [
        "Summer Knit Vest",
        "Nodics Studio",
        "Open knit cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Open knit cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Tailored Sleeveless Top",
    "description": "Viscose blend tailored sleeveless top designed for modern everyday styling.",
    "slug": "tailored-sleeveless-top",
    "tenant": "default",
    "productCode": "agoraTailoredSleevelessTop",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-tailored-sleeveless-top-primary",
        "altText": "Tailored Sleeveless Top primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-tailored-sleeveless-top-primary",
          "altText": "Tailored Sleeveless Top gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-wide-leg-linen-pant-primary",
          "altText": "Tailored Sleeveless Top gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-textured-crossbody-bag-primary",
          "altText": "Tailored Sleeveless Top gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Tailored Sleeveless Top",
      "description": "Tailored Sleeveless Top from Nodics Atelier",
      "keywords": [
        "Tailored Sleeveless Top",
        "Nodics Atelier",
        "Viscose blend",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Viscose blend",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Tailored Sleeveless Top",
    "description": "Viscose blend tailored sleeveless top designed for modern everyday styling.",
    "slug": "tailored-sleeveless-top-ar",
    "tenant": "default",
    "productCode": "agoraTailoredSleevelessTop",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-tailored-sleeveless-top-primary",
        "altText": "Tailored Sleeveless Top primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-tailored-sleeveless-top-primary",
          "altText": "Tailored Sleeveless Top gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-wide-leg-linen-pant-primary",
          "altText": "Tailored Sleeveless Top gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-textured-crossbody-bag-primary",
          "altText": "Tailored Sleeveless Top gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Tailored Sleeveless Top",
      "description": "Tailored Sleeveless Top from Nodics Atelier",
      "keywords": [
        "Tailored Sleeveless Top",
        "Nodics Atelier",
        "Viscose blend",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Viscose blend",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Wide-leg Linen Pant",
    "description": "Linen wide-leg linen pant designed for modern everyday styling.",
    "slug": "wide-leg-linen-pant",
    "tenant": "default",
    "productCode": "agoraWideLegLinenPant",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-wide-leg-linen-pant-primary",
        "altText": "Wide-leg Linen Pant primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-wide-leg-linen-pant-primary",
          "altText": "Wide-leg Linen Pant gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-textured-crossbody-bag-primary",
          "altText": "Wide-leg Linen Pant gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-minimal-ballet-flat-primary",
          "altText": "Wide-leg Linen Pant gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Wide-leg Linen Pant",
      "description": "Wide-leg Linen Pant from Nodics Studio",
      "keywords": [
        "Wide-leg Linen Pant",
        "Nodics Studio",
        "Linen",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "New In",
      "colorFamily": "green",
      "material": "Linen",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Wide-leg Linen Pant",
    "description": "Linen wide-leg linen pant designed for modern everyday styling.",
    "slug": "wide-leg-linen-pant-ar",
    "tenant": "default",
    "productCode": "agoraWideLegLinenPant",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-wide-leg-linen-pant-primary",
        "altText": "Wide-leg Linen Pant primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-wide-leg-linen-pant-primary",
          "altText": "Wide-leg Linen Pant gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-textured-crossbody-bag-primary",
          "altText": "Wide-leg Linen Pant gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-minimal-ballet-flat-primary",
          "altText": "Wide-leg Linen Pant gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Wide-leg Linen Pant",
      "description": "Wide-leg Linen Pant from Nodics Studio",
      "keywords": [
        "Wide-leg Linen Pant",
        "Nodics Studio",
        "Linen",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "New In",
      "colorFamily": "green",
      "material": "Linen",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Textured Crossbody Bag",
    "description": "Woven leather textured crossbody bag designed for modern everyday styling.",
    "slug": "textured-crossbody-bag",
    "tenant": "default",
    "productCode": "agoraTexturedCrossbodyBag",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-textured-crossbody-bag-primary",
        "altText": "Textured Crossbody Bag primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-textured-crossbody-bag-primary",
          "altText": "Textured Crossbody Bag gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-minimal-ballet-flat-primary",
          "altText": "Textured Crossbody Bag gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-open-weave-cardigan-primary",
          "altText": "Textured Crossbody Bag gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Textured Crossbody Bag",
      "description": "Textured Crossbody Bag from Nodics Goods",
      "keywords": [
        "Textured Crossbody Bag",
        "Nodics Goods",
        "Woven leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "yellow",
      "material": "Woven leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Textured Crossbody Bag",
    "description": "Woven leather textured crossbody bag designed for modern everyday styling.",
    "slug": "textured-crossbody-bag-ar",
    "tenant": "default",
    "productCode": "agoraTexturedCrossbodyBag",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-textured-crossbody-bag-primary",
        "altText": "Textured Crossbody Bag primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-textured-crossbody-bag-primary",
          "altText": "Textured Crossbody Bag gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-minimal-ballet-flat-primary",
          "altText": "Textured Crossbody Bag gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-open-weave-cardigan-primary",
          "altText": "Textured Crossbody Bag gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Textured Crossbody Bag",
      "description": "Textured Crossbody Bag from Nodics Goods",
      "keywords": [
        "Textured Crossbody Bag",
        "Nodics Goods",
        "Woven leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "yellow",
      "material": "Woven leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Minimal Ballet Flat",
    "description": "Leather minimal ballet flat designed for modern everyday styling.",
    "slug": "minimal-ballet-flat",
    "tenant": "default",
    "productCode": "agoraMinimalBalletFlat",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-minimal-ballet-flat-primary",
        "altText": "Minimal Ballet Flat primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-minimal-ballet-flat-primary",
          "altText": "Minimal Ballet Flat gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-open-weave-cardigan-primary",
          "altText": "Minimal Ballet Flat gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-refined-short-sleeve-dress-primary",
          "altText": "Minimal Ballet Flat gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Minimal Ballet Flat",
      "description": "Minimal Ballet Flat from Nodics Goods",
      "keywords": [
        "Minimal Ballet Flat",
        "Nodics Goods",
        "Leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "blue",
      "material": "Leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Minimal Ballet Flat",
    "description": "Leather minimal ballet flat designed for modern everyday styling.",
    "slug": "minimal-ballet-flat-ar",
    "tenant": "default",
    "productCode": "agoraMinimalBalletFlat",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-minimal-ballet-flat-primary",
        "altText": "Minimal Ballet Flat primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-minimal-ballet-flat-primary",
          "altText": "Minimal Ballet Flat gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-open-weave-cardigan-primary",
          "altText": "Minimal Ballet Flat gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-refined-short-sleeve-dress-primary",
          "altText": "Minimal Ballet Flat gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Minimal Ballet Flat",
      "description": "Minimal Ballet Flat from Nodics Goods",
      "keywords": [
        "Minimal Ballet Flat",
        "Nodics Goods",
        "Leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "blue",
      "material": "Leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Open Weave Cardigan",
    "description": "Open weave knit open weave cardigan designed for modern everyday styling.",
    "slug": "open-weave-cardigan",
    "tenant": "default",
    "productCode": "agoraOpenWeaveCardigan",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-open-weave-cardigan-primary",
        "altText": "Open Weave Cardigan primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-open-weave-cardigan-primary",
          "altText": "Open Weave Cardigan gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-refined-short-sleeve-dress-primary",
          "altText": "Open Weave Cardigan gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-gold-frame-sunglasses-primary",
          "altText": "Open Weave Cardigan gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Open Weave Cardigan",
      "description": "Open Weave Cardigan from Nodics Atelier",
      "keywords": [
        "Open Weave Cardigan",
        "Nodics Atelier",
        "Open weave knit",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "pink",
      "material": "Open weave knit",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Open Weave Cardigan",
    "description": "Open weave knit open weave cardigan designed for modern everyday styling.",
    "slug": "open-weave-cardigan-ar",
    "tenant": "default",
    "productCode": "agoraOpenWeaveCardigan",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-open-weave-cardigan-primary",
        "altText": "Open Weave Cardigan primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-open-weave-cardigan-primary",
          "altText": "Open Weave Cardigan gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-refined-short-sleeve-dress-primary",
          "altText": "Open Weave Cardigan gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-gold-frame-sunglasses-primary",
          "altText": "Open Weave Cardigan gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Open Weave Cardigan",
      "description": "Open Weave Cardigan from Nodics Atelier",
      "keywords": [
        "Open Weave Cardigan",
        "Nodics Atelier",
        "Open weave knit",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "pink",
      "material": "Open weave knit",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Refined Short-sleeve Dress",
    "description": "Cotton viscose refined short-sleeve dress designed for modern everyday styling.",
    "slug": "refined-short-sleeve-dress",
    "tenant": "default",
    "productCode": "agoraRefinedShortSleeveDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-refined-short-sleeve-dress-primary",
        "altText": "Refined Short-sleeve Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-refined-short-sleeve-dress-primary",
          "altText": "Refined Short-sleeve Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-gold-frame-sunglasses-primary",
          "altText": "Refined Short-sleeve Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-soft-ribbed-dress-primary",
          "altText": "Refined Short-sleeve Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Refined Short-sleeve Dress",
      "description": "Refined Short-sleeve Dress from Nodics Studio",
      "keywords": [
        "Refined Short-sleeve Dress",
        "Nodics Studio",
        "Cotton viscose",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Cotton viscose",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Refined Short-sleeve Dress",
    "description": "Cotton viscose refined short-sleeve dress designed for modern everyday styling.",
    "slug": "refined-short-sleeve-dress-ar",
    "tenant": "default",
    "productCode": "agoraRefinedShortSleeveDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-refined-short-sleeve-dress-primary",
        "altText": "Refined Short-sleeve Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-refined-short-sleeve-dress-primary",
          "altText": "Refined Short-sleeve Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-gold-frame-sunglasses-primary",
          "altText": "Refined Short-sleeve Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-soft-ribbed-dress-primary",
          "altText": "Refined Short-sleeve Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Refined Short-sleeve Dress",
      "description": "Refined Short-sleeve Dress from Nodics Studio",
      "keywords": [
        "Refined Short-sleeve Dress",
        "Nodics Studio",
        "Cotton viscose",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Cotton viscose",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Gold Frame Sunglasses",
    "description": "Acetate and metal gold frame sunglasses designed for modern everyday styling.",
    "slug": "gold-frame-sunglasses",
    "tenant": "default",
    "productCode": "agoraGoldFrameSunglasses",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-gold-frame-sunglasses-primary",
        "altText": "Gold Frame Sunglasses primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-gold-frame-sunglasses-primary",
          "altText": "Gold Frame Sunglasses gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-soft-ribbed-dress-primary",
          "altText": "Gold Frame Sunglasses gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-cotton-tee-primary",
          "altText": "Gold Frame Sunglasses gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Gold Frame Sunglasses",
      "description": "Gold Frame Sunglasses from Nodics Goods",
      "keywords": [
        "Gold Frame Sunglasses",
        "Nodics Goods",
        "Acetate and metal",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "neutral",
      "material": "Acetate and metal",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Gold Frame Sunglasses",
    "description": "Acetate and metal gold frame sunglasses designed for modern everyday styling.",
    "slug": "gold-frame-sunglasses-ar",
    "tenant": "default",
    "productCode": "agoraGoldFrameSunglasses",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-gold-frame-sunglasses-primary",
        "altText": "Gold Frame Sunglasses primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-gold-frame-sunglasses-primary",
          "altText": "Gold Frame Sunglasses gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-soft-ribbed-dress-primary",
          "altText": "Gold Frame Sunglasses gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-cotton-tee-primary",
          "altText": "Gold Frame Sunglasses gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Gold Frame Sunglasses",
      "description": "Gold Frame Sunglasses from Nodics Goods",
      "keywords": [
        "Gold Frame Sunglasses",
        "Nodics Goods",
        "Acetate and metal",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "neutral",
      "material": "Acetate and metal",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Soft Ribbed Dress",
    "description": "Ribbed knit soft ribbed dress designed for modern everyday styling.",
    "slug": "soft-ribbed-dress",
    "tenant": "default",
    "productCode": "agoraSoftRibbedDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-ribbed-dress-primary",
        "altText": "Soft Ribbed Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-soft-ribbed-dress-primary",
          "altText": "Soft Ribbed Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-cotton-tee-primary",
          "altText": "Soft Ribbed Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-compact-crossbody-bag-primary",
          "altText": "Soft Ribbed Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Soft Ribbed Dress",
      "description": "Soft Ribbed Dress from Nodics Studio",
      "keywords": [
        "Soft Ribbed Dress",
        "Nodics Studio",
        "Ribbed knit",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Ribbed knit",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Soft Ribbed Dress",
    "description": "Ribbed knit soft ribbed dress designed for modern everyday styling.",
    "slug": "soft-ribbed-dress-ar",
    "tenant": "default",
    "productCode": "agoraSoftRibbedDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-ribbed-dress-primary",
        "altText": "Soft Ribbed Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-soft-ribbed-dress-primary",
          "altText": "Soft Ribbed Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-cotton-tee-primary",
          "altText": "Soft Ribbed Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-compact-crossbody-bag-primary",
          "altText": "Soft Ribbed Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Soft Ribbed Dress",
      "description": "Soft Ribbed Dress from Nodics Studio",
      "keywords": [
        "Soft Ribbed Dress",
        "Nodics Studio",
        "Ribbed knit",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Ribbed knit",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Relaxed Cotton Tee",
    "description": "Organic cotton relaxed cotton tee designed for modern everyday styling.",
    "slug": "relaxed-cotton-tee",
    "tenant": "default",
    "productCode": "agoraRelaxedCottonTee",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-relaxed-cotton-tee-primary",
        "altText": "Relaxed Cotton Tee primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-relaxed-cotton-tee-primary",
          "altText": "Relaxed Cotton Tee gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-compact-crossbody-bag-primary",
          "altText": "Relaxed Cotton Tee gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-sculpted-hoop-earrings-primary",
          "altText": "Relaxed Cotton Tee gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Relaxed Cotton Tee",
      "description": "Relaxed Cotton Tee from Nodics Studio",
      "keywords": [
        "Relaxed Cotton Tee",
        "Nodics Studio",
        "Organic cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Organic cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Relaxed Cotton Tee",
    "description": "Organic cotton relaxed cotton tee designed for modern everyday styling.",
    "slug": "relaxed-cotton-tee-ar",
    "tenant": "default",
    "productCode": "agoraRelaxedCottonTee",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-relaxed-cotton-tee-primary",
        "altText": "Relaxed Cotton Tee primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-relaxed-cotton-tee-primary",
          "altText": "Relaxed Cotton Tee gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-compact-crossbody-bag-primary",
          "altText": "Relaxed Cotton Tee gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-sculpted-hoop-earrings-primary",
          "altText": "Relaxed Cotton Tee gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Relaxed Cotton Tee",
      "description": "Relaxed Cotton Tee from Nodics Studio",
      "keywords": [
        "Relaxed Cotton Tee",
        "Nodics Studio",
        "Organic cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Organic cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Compact Crossbody Bag",
    "description": "Pebbled leather compact crossbody bag designed for modern everyday styling.",
    "slug": "compact-crossbody-bag",
    "tenant": "default",
    "productCode": "agoraCompactCrossbody",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-compact-crossbody-bag-primary",
        "altText": "Compact Crossbody Bag primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-compact-crossbody-bag-primary",
          "altText": "Compact Crossbody Bag gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-sculpted-hoop-earrings-primary",
          "altText": "Compact Crossbody Bag gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-everyday-column-dress-primary",
          "altText": "Compact Crossbody Bag gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Compact Crossbody Bag",
      "description": "Compact Crossbody Bag from Nodics Goods",
      "keywords": [
        "Compact Crossbody Bag",
        "Nodics Goods",
        "Pebbled leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "blue",
      "material": "Pebbled leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Compact Crossbody Bag",
    "description": "Pebbled leather compact crossbody bag designed for modern everyday styling.",
    "slug": "compact-crossbody-bag-ar",
    "tenant": "default",
    "productCode": "agoraCompactCrossbody",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-compact-crossbody-bag-primary",
        "altText": "Compact Crossbody Bag primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-compact-crossbody-bag-primary",
          "altText": "Compact Crossbody Bag gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-sculpted-hoop-earrings-primary",
          "altText": "Compact Crossbody Bag gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-everyday-column-dress-primary",
          "altText": "Compact Crossbody Bag gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Compact Crossbody Bag",
      "description": "Compact Crossbody Bag from Nodics Goods",
      "keywords": [
        "Compact Crossbody Bag",
        "Nodics Goods",
        "Pebbled leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "blue",
      "material": "Pebbled leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Sculpted Hoop Earrings",
    "description": "Polished metal sculpted hoop earrings designed for modern everyday styling.",
    "slug": "sculpted-hoop-earrings",
    "tenant": "default",
    "productCode": "agoraSculptedHoopEarrings",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-sculpted-hoop-earrings-primary",
        "altText": "Sculpted Hoop Earrings primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-sculpted-hoop-earrings-primary",
          "altText": "Sculpted Hoop Earrings gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-everyday-column-dress-primary",
          "altText": "Sculpted Hoop Earrings gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-sheer-ramie-shirt-primary",
          "altText": "Sculpted Hoop Earrings gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Sculpted Hoop Earrings",
      "description": "Sculpted Hoop Earrings from Nodics Goods",
      "keywords": [
        "Sculpted Hoop Earrings",
        "Nodics Goods",
        "Polished metal",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "pink",
      "material": "Polished metal",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Sculpted Hoop Earrings",
    "description": "Polished metal sculpted hoop earrings designed for modern everyday styling.",
    "slug": "sculpted-hoop-earrings-ar",
    "tenant": "default",
    "productCode": "agoraSculptedHoopEarrings",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-sculpted-hoop-earrings-primary",
        "altText": "Sculpted Hoop Earrings primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-sculpted-hoop-earrings-primary",
          "altText": "Sculpted Hoop Earrings gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-everyday-column-dress-primary",
          "altText": "Sculpted Hoop Earrings gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-sheer-ramie-shirt-primary",
          "altText": "Sculpted Hoop Earrings gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Sculpted Hoop Earrings",
      "description": "Sculpted Hoop Earrings from Nodics Goods",
      "keywords": [
        "Sculpted Hoop Earrings",
        "Nodics Goods",
        "Polished metal",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "pink",
      "material": "Polished metal",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Everyday Column Dress",
    "description": "Stretch cotton everyday column dress designed for modern everyday styling.",
    "slug": "everyday-column-dress",
    "tenant": "default",
    "productCode": "agoraEverydayColumnDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-everyday-column-dress-primary",
        "altText": "Everyday Column Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-everyday-column-dress-primary",
          "altText": "Everyday Column Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-sheer-ramie-shirt-primary",
          "altText": "Everyday Column Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-fine-knit-polo-primary",
          "altText": "Everyday Column Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Everyday Column Dress",
      "description": "Everyday Column Dress from Nodics Studio",
      "keywords": [
        "Everyday Column Dress",
        "Nodics Studio",
        "Stretch cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Stretch cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Everyday Column Dress",
    "description": "Stretch cotton everyday column dress designed for modern everyday styling.",
    "slug": "everyday-column-dress-ar",
    "tenant": "default",
    "productCode": "agoraEverydayColumnDress",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-everyday-column-dress-primary",
        "altText": "Everyday Column Dress primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-everyday-column-dress-primary",
          "altText": "Everyday Column Dress gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-sheer-ramie-shirt-primary",
          "altText": "Everyday Column Dress gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-fine-knit-polo-primary",
          "altText": "Everyday Column Dress gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Everyday Column Dress",
      "description": "Everyday Column Dress from Nodics Studio",
      "keywords": [
        "Everyday Column Dress",
        "Nodics Studio",
        "Stretch cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Stretch cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Sheer Ramie Shirt",
    "description": "Ramie sheer ramie shirt designed for modern everyday styling.",
    "slug": "sheer-ramie-shirt",
    "tenant": "default",
    "productCode": "agoraSheerRamieShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-sheer-ramie-shirt-primary",
        "altText": "Sheer Ramie Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-sheer-ramie-shirt-primary",
          "altText": "Sheer Ramie Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-fine-knit-polo-primary",
          "altText": "Sheer Ramie Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-natural-canvas-tote-primary",
          "altText": "Sheer Ramie Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Sheer Ramie Shirt",
      "description": "Sheer Ramie Shirt from Nodics Atelier",
      "keywords": [
        "Sheer Ramie Shirt",
        "Nodics Atelier",
        "Ramie",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Ramie",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Sheer Ramie Shirt",
    "description": "Ramie sheer ramie shirt designed for modern everyday styling.",
    "slug": "sheer-ramie-shirt-ar",
    "tenant": "default",
    "productCode": "agoraSheerRamieShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-sheer-ramie-shirt-primary",
        "altText": "Sheer Ramie Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-sheer-ramie-shirt-primary",
          "altText": "Sheer Ramie Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-fine-knit-polo-primary",
          "altText": "Sheer Ramie Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-natural-canvas-tote-primary",
          "altText": "Sheer Ramie Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Sheer Ramie Shirt",
      "description": "Sheer Ramie Shirt from Nodics Atelier",
      "keywords": [
        "Sheer Ramie Shirt",
        "Nodics Atelier",
        "Ramie",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Ramie",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Fine Knit Polo",
    "description": "Fine knit cotton fine knit polo designed for modern everyday styling.",
    "slug": "fine-knit-polo",
    "tenant": "default",
    "productCode": "agoraFineKnitPolo",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-fine-knit-polo-primary",
        "altText": "Fine Knit Polo primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-fine-knit-polo-primary",
          "altText": "Fine Knit Polo gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-natural-canvas-tote-primary",
          "altText": "Fine Knit Polo gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-luxe-wrap-top-primary",
          "altText": "Fine Knit Polo gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Fine Knit Polo",
      "description": "Fine Knit Polo from Nodics Atelier",
      "keywords": [
        "Fine Knit Polo",
        "Nodics Atelier",
        "Fine knit cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Fine knit cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Fine Knit Polo",
    "description": "Fine knit cotton fine knit polo designed for modern everyday styling.",
    "slug": "fine-knit-polo-ar",
    "tenant": "default",
    "productCode": "agoraFineKnitPolo",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-fine-knit-polo-primary",
        "altText": "Fine Knit Polo primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-fine-knit-polo-primary",
          "altText": "Fine Knit Polo gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-natural-canvas-tote-primary",
          "altText": "Fine Knit Polo gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-luxe-wrap-top-primary",
          "altText": "Fine Knit Polo gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Fine Knit Polo",
      "description": "Fine Knit Polo from Nodics Atelier",
      "keywords": [
        "Fine Knit Polo",
        "Nodics Atelier",
        "Fine knit cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Fine knit cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Natural Canvas Tote",
    "description": "Canvas natural canvas tote designed for modern everyday styling.",
    "slug": "natural-canvas-tote",
    "tenant": "default",
    "productCode": "agoraNaturalCanvasTote",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-natural-canvas-tote-primary",
        "altText": "Natural Canvas Tote primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-natural-canvas-tote-primary",
          "altText": "Natural Canvas Tote gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-luxe-wrap-top-primary",
          "altText": "Natural Canvas Tote gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-pearl-trim-cardigan-primary",
          "altText": "Natural Canvas Tote gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Natural Canvas Tote",
      "description": "Natural Canvas Tote from Nodics Goods",
      "keywords": [
        "Natural Canvas Tote",
        "Nodics Goods",
        "Canvas",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "yellow",
      "material": "Canvas",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Natural Canvas Tote",
    "description": "Canvas natural canvas tote designed for modern everyday styling.",
    "slug": "natural-canvas-tote-ar",
    "tenant": "default",
    "productCode": "agoraNaturalCanvasTote",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-natural-canvas-tote-primary",
        "altText": "Natural Canvas Tote primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-natural-canvas-tote-primary",
          "altText": "Natural Canvas Tote gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-luxe-wrap-top-primary",
          "altText": "Natural Canvas Tote gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-pearl-trim-cardigan-primary",
          "altText": "Natural Canvas Tote gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Natural Canvas Tote",
      "description": "Natural Canvas Tote from Nodics Goods",
      "keywords": [
        "Natural Canvas Tote",
        "Nodics Goods",
        "Canvas",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "yellow",
      "material": "Canvas",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Luxe Wrap Top",
    "description": "Viscose satin luxe wrap top designed for modern everyday styling.",
    "slug": "luxe-wrap-top",
    "tenant": "default",
    "productCode": "agoraLuxeWrapTop",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-luxe-wrap-top-primary",
        "altText": "Luxe Wrap Top primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-luxe-wrap-top-primary",
          "altText": "Luxe Wrap Top gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-pearl-trim-cardigan-primary",
          "altText": "Luxe Wrap Top gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-bias-cut-midi-skirt-primary",
          "altText": "Luxe Wrap Top gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Luxe Wrap Top",
      "description": "Luxe Wrap Top from Nodics Studio",
      "keywords": [
        "Luxe Wrap Top",
        "Nodics Studio",
        "Viscose satin",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "blue",
      "material": "Viscose satin",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Luxe Wrap Top",
    "description": "Viscose satin luxe wrap top designed for modern everyday styling.",
    "slug": "luxe-wrap-top-ar",
    "tenant": "default",
    "productCode": "agoraLuxeWrapTop",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-luxe-wrap-top-primary",
        "altText": "Luxe Wrap Top primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-luxe-wrap-top-primary",
          "altText": "Luxe Wrap Top gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-pearl-trim-cardigan-primary",
          "altText": "Luxe Wrap Top gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-bias-cut-midi-skirt-primary",
          "altText": "Luxe Wrap Top gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Luxe Wrap Top",
      "description": "Luxe Wrap Top from Nodics Studio",
      "keywords": [
        "Luxe Wrap Top",
        "Nodics Studio",
        "Viscose satin",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "Apparel",
      "colorFamily": "blue",
      "material": "Viscose satin",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Pearl Trim Cardigan",
    "description": "Knit cotton pearl trim cardigan designed for modern everyday styling.",
    "slug": "pearl-trim-cardigan",
    "tenant": "default",
    "productCode": "agoraPearlTrimCardigan",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-pearl-trim-cardigan-primary",
        "altText": "Pearl Trim Cardigan primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-pearl-trim-cardigan-primary",
          "altText": "Pearl Trim Cardigan gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-bias-cut-midi-skirt-primary",
          "altText": "Pearl Trim Cardigan gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-textured-knit-pullover-primary",
          "altText": "Pearl Trim Cardigan gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Pearl Trim Cardigan",
      "description": "Pearl Trim Cardigan from Nodics Atelier",
      "keywords": [
        "Pearl Trim Cardigan",
        "Nodics Atelier",
        "Knit cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "pink",
      "material": "Knit cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Pearl Trim Cardigan",
    "description": "Knit cotton pearl trim cardigan designed for modern everyday styling.",
    "slug": "pearl-trim-cardigan-ar",
    "tenant": "default",
    "productCode": "agoraPearlTrimCardigan",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-pearl-trim-cardigan-primary",
        "altText": "Pearl Trim Cardigan primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-pearl-trim-cardigan-primary",
          "altText": "Pearl Trim Cardigan gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-bias-cut-midi-skirt-primary",
          "altText": "Pearl Trim Cardigan gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-textured-knit-pullover-primary",
          "altText": "Pearl Trim Cardigan gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Pearl Trim Cardigan",
      "description": "Pearl Trim Cardigan from Nodics Atelier",
      "keywords": [
        "Pearl Trim Cardigan",
        "Nodics Atelier",
        "Knit cotton",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "pink",
      "material": "Knit cotton",
      "audience": "women",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Bias-cut Midi Skirt",
    "description": "Satin crepe bias-cut midi skirt designed for modern everyday styling.",
    "slug": "bias-cut-midi-skirt",
    "tenant": "default",
    "productCode": "agoraBiasCutMidiSkirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-bias-cut-midi-skirt-primary",
        "altText": "Bias-cut Midi Skirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-bias-cut-midi-skirt-primary",
          "altText": "Bias-cut Midi Skirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-textured-knit-pullover-primary",
          "altText": "Bias-cut Midi Skirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-polished-mini-bag-primary",
          "altText": "Bias-cut Midi Skirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Bias-cut Midi Skirt",
      "description": "Bias-cut Midi Skirt from Nodics Studio",
      "keywords": [
        "Bias-cut Midi Skirt",
        "Nodics Studio",
        "Satin crepe",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "New In",
      "colorFamily": "neutral",
      "material": "Satin crepe",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Bias-cut Midi Skirt",
    "description": "Satin crepe bias-cut midi skirt designed for modern everyday styling.",
    "slug": "bias-cut-midi-skirt-ar",
    "tenant": "default",
    "productCode": "agoraBiasCutMidiSkirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-bias-cut-midi-skirt-primary",
        "altText": "Bias-cut Midi Skirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-bias-cut-midi-skirt-primary",
          "altText": "Bias-cut Midi Skirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-textured-knit-pullover-primary",
          "altText": "Bias-cut Midi Skirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-polished-mini-bag-primary",
          "altText": "Bias-cut Midi Skirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Bias-cut Midi Skirt",
      "description": "Bias-cut Midi Skirt from Nodics Studio",
      "keywords": [
        "Bias-cut Midi Skirt",
        "Nodics Studio",
        "Satin crepe",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "New In",
      "colorFamily": "neutral",
      "material": "Satin crepe",
      "audience": "women",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Textured Knit Pullover",
    "description": "Cotton wool textured knit pullover designed for modern everyday styling.",
    "slug": "textured-knit-pullover",
    "tenant": "default",
    "productCode": "agoraTexturedKnitPullover",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-textured-knit-pullover-primary",
        "altText": "Textured Knit Pullover primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-textured-knit-pullover-primary",
          "altText": "Textured Knit Pullover gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-polished-mini-bag-primary",
          "altText": "Textured Knit Pullover gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-clean-line-blazer-primary",
          "altText": "Textured Knit Pullover gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Textured Knit Pullover",
      "description": "Textured Knit Pullover from Nodics Atelier",
      "keywords": [
        "Textured Knit Pullover",
        "Nodics Atelier",
        "Cotton wool",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Cotton wool",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Textured Knit Pullover",
    "description": "Cotton wool textured knit pullover designed for modern everyday styling.",
    "slug": "textured-knit-pullover-ar",
    "tenant": "default",
    "productCode": "agoraTexturedKnitPullover",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-textured-knit-pullover-primary",
        "altText": "Textured Knit Pullover primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-textured-knit-pullover-primary",
          "altText": "Textured Knit Pullover gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-polished-mini-bag-primary",
          "altText": "Textured Knit Pullover gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-clean-line-blazer-primary",
          "altText": "Textured Knit Pullover gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Textured Knit Pullover",
      "description": "Textured Knit Pullover from Nodics Atelier",
      "keywords": [
        "Textured Knit Pullover",
        "Nodics Atelier",
        "Cotton wool",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Cotton wool",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Polished Mini Bag",
    "description": "Leather polished mini bag designed for modern everyday styling.",
    "slug": "polished-mini-bag",
    "tenant": "default",
    "productCode": "agoraPolishedMiniBag",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-polished-mini-bag-primary",
        "altText": "Polished Mini Bag primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-polished-mini-bag-primary",
          "altText": "Polished Mini Bag gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-clean-line-blazer-primary",
          "altText": "Polished Mini Bag gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-soft-linen-short-primary",
          "altText": "Polished Mini Bag gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Polished Mini Bag",
      "description": "Polished Mini Bag from Nodics Goods",
      "keywords": [
        "Polished Mini Bag",
        "Nodics Goods",
        "Leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "green",
      "material": "Leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Polished Mini Bag",
    "description": "Leather polished mini bag designed for modern everyday styling.",
    "slug": "polished-mini-bag-ar",
    "tenant": "default",
    "productCode": "agoraPolishedMiniBag",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-polished-mini-bag-primary",
        "altText": "Polished Mini Bag primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-polished-mini-bag-primary",
          "altText": "Polished Mini Bag gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-clean-line-blazer-primary",
          "altText": "Polished Mini Bag gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-soft-linen-short-primary",
          "altText": "Polished Mini Bag gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Polished Mini Bag",
      "description": "Polished Mini Bag from Nodics Goods",
      "keywords": [
        "Polished Mini Bag",
        "Nodics Goods",
        "Leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "green",
      "material": "Leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Clean-line Blazer",
    "description": "Wool blend clean-line blazer designed for modern everyday styling.",
    "slug": "clean-line-blazer",
    "tenant": "default",
    "productCode": "agoraCleanLineBlazer",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-clean-line-blazer-primary",
        "altText": "Clean-line Blazer primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-clean-line-blazer-primary",
          "altText": "Clean-line Blazer gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-soft-linen-short-primary",
          "altText": "Clean-line Blazer gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-classic-denim-shirt-primary",
          "altText": "Clean-line Blazer gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Clean-line Blazer",
      "description": "Clean-line Blazer from Nodics Atelier",
      "keywords": [
        "Clean-line Blazer",
        "Nodics Atelier",
        "Wool blend",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "New In",
      "colorFamily": "yellow",
      "material": "Wool blend",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Clean-line Blazer",
    "description": "Wool blend clean-line blazer designed for modern everyday styling.",
    "slug": "clean-line-blazer-ar",
    "tenant": "default",
    "productCode": "agoraCleanLineBlazer",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-clean-line-blazer-primary",
        "altText": "Clean-line Blazer primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-clean-line-blazer-primary",
          "altText": "Clean-line Blazer gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-soft-linen-short-primary",
          "altText": "Clean-line Blazer gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-classic-denim-shirt-primary",
          "altText": "Clean-line Blazer gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Clean-line Blazer",
      "description": "Clean-line Blazer from Nodics Atelier",
      "keywords": [
        "Clean-line Blazer",
        "Nodics Atelier",
        "Wool blend",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Atelier",
      "collection": "New In",
      "colorFamily": "yellow",
      "material": "Wool blend",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Soft Linen Short",
    "description": "Linen soft linen short designed for modern everyday styling.",
    "slug": "soft-linen-short",
    "tenant": "default",
    "productCode": "agoraSoftLinenShort",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-linen-short-primary",
        "altText": "Soft Linen Short primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-soft-linen-short-primary",
          "altText": "Soft Linen Short gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-classic-denim-shirt-primary",
          "altText": "Soft Linen Short gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-overshirt-jacket-primary",
          "altText": "Soft Linen Short gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Soft Linen Short",
      "description": "Soft Linen Short from Nodics Studio",
      "keywords": [
        "Soft Linen Short",
        "Nodics Studio",
        "Linen",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "New In",
      "colorFamily": "blue",
      "material": "Linen",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Soft Linen Short",
    "description": "Linen soft linen short designed for modern everyday styling.",
    "slug": "soft-linen-short-ar",
    "tenant": "default",
    "productCode": "agoraSoftLinenShort",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-soft-linen-short-primary",
        "altText": "Soft Linen Short primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-soft-linen-short-primary",
          "altText": "Soft Linen Short gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-classic-denim-shirt-primary",
          "altText": "Soft Linen Short gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-overshirt-jacket-primary",
          "altText": "Soft Linen Short gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Soft Linen Short",
      "description": "Soft Linen Short from Nodics Studio",
      "keywords": [
        "Soft Linen Short",
        "Nodics Studio",
        "Linen",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "New In",
      "colorFamily": "blue",
      "material": "Linen",
      "audience": "women",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Classic Denim Shirt",
    "description": "Denim cotton classic denim shirt designed for modern everyday styling.",
    "slug": "classic-denim-shirt",
    "tenant": "default",
    "productCode": "agoraClassicDenimShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-classic-denim-shirt-primary",
        "altText": "Classic Denim Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-classic-denim-shirt-primary",
          "altText": "Classic Denim Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-overshirt-jacket-primary",
          "altText": "Classic Denim Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-slim-cotton-trouser-primary",
          "altText": "Classic Denim Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Classic Denim Shirt",
      "description": "Classic Denim Shirt from Nodics Menswear",
      "keywords": [
        "Classic Denim Shirt",
        "Nodics Menswear",
        "Denim cotton",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "pink",
      "material": "Denim cotton",
      "audience": "men",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Classic Denim Shirt",
    "description": "Denim cotton classic denim shirt designed for modern everyday styling.",
    "slug": "classic-denim-shirt-ar",
    "tenant": "default",
    "productCode": "agoraClassicDenimShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-classic-denim-shirt-primary",
        "altText": "Classic Denim Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-classic-denim-shirt-primary",
          "altText": "Classic Denim Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-overshirt-jacket-primary",
          "altText": "Classic Denim Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-slim-cotton-trouser-primary",
          "altText": "Classic Denim Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Classic Denim Shirt",
      "description": "Classic Denim Shirt from Nodics Menswear",
      "keywords": [
        "Classic Denim Shirt",
        "Nodics Menswear",
        "Denim cotton",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "pink",
      "material": "Denim cotton",
      "audience": "men",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Overshirt Jacket",
    "description": "Cotton twill overshirt jacket designed for modern everyday styling.",
    "slug": "overshirt-jacket",
    "tenant": "default",
    "productCode": "agoraOvershirtJacket",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-overshirt-jacket-primary",
        "altText": "Overshirt Jacket primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-overshirt-jacket-primary",
          "altText": "Overshirt Jacket gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-slim-cotton-trouser-primary",
          "altText": "Overshirt Jacket gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-polo-shirt-primary",
          "altText": "Overshirt Jacket gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Overshirt Jacket",
      "description": "Overshirt Jacket from Nodics Menswear",
      "keywords": [
        "Overshirt Jacket",
        "Nodics Menswear",
        "Cotton twill",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Cotton twill",
      "audience": "men",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Overshirt Jacket",
    "description": "Cotton twill overshirt jacket designed for modern everyday styling.",
    "slug": "overshirt-jacket-ar",
    "tenant": "default",
    "productCode": "agoraOvershirtJacket",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-overshirt-jacket-primary",
        "altText": "Overshirt Jacket primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-overshirt-jacket-primary",
          "altText": "Overshirt Jacket gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-slim-cotton-trouser-primary",
          "altText": "Overshirt Jacket gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-polo-shirt-primary",
          "altText": "Overshirt Jacket gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Overshirt Jacket",
      "description": "Overshirt Jacket from Nodics Menswear",
      "keywords": [
        "Overshirt Jacket",
        "Nodics Menswear",
        "Cotton twill",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Cotton twill",
      "audience": "men",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Slim Cotton Trouser",
    "description": "Cotton twill slim cotton trouser designed for modern everyday styling.",
    "slug": "slim-cotton-trouser",
    "tenant": "default",
    "productCode": "agoraSlimCottonTrouser",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-slim-cotton-trouser-primary",
        "altText": "Slim Cotton Trouser primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-slim-cotton-trouser-primary",
          "altText": "Slim Cotton Trouser gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-polo-shirt-primary",
          "altText": "Slim Cotton Trouser gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-washed-chore-jacket-primary",
          "altText": "Slim Cotton Trouser gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Slim Cotton Trouser",
      "description": "Slim Cotton Trouser from Nodics Menswear",
      "keywords": [
        "Slim Cotton Trouser",
        "Nodics Menswear",
        "Cotton twill",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Cotton twill",
      "audience": "men",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Slim Cotton Trouser",
    "description": "Cotton twill slim cotton trouser designed for modern everyday styling.",
    "slug": "slim-cotton-trouser-ar",
    "tenant": "default",
    "productCode": "agoraSlimCottonTrouser",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-slim-cotton-trouser-primary",
        "altText": "Slim Cotton Trouser primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-slim-cotton-trouser-primary",
          "altText": "Slim Cotton Trouser gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-relaxed-polo-shirt-primary",
          "altText": "Slim Cotton Trouser gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-washed-chore-jacket-primary",
          "altText": "Slim Cotton Trouser gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Slim Cotton Trouser",
      "description": "Slim Cotton Trouser from Nodics Menswear",
      "keywords": [
        "Slim Cotton Trouser",
        "Nodics Menswear",
        "Cotton twill",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "neutral",
      "material": "Cotton twill",
      "audience": "men",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Relaxed Polo Shirt",
    "description": "Pique cotton relaxed polo shirt designed for modern everyday styling.",
    "slug": "relaxed-polo-shirt",
    "tenant": "default",
    "productCode": "agoraRelaxedPoloShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-relaxed-polo-shirt-primary",
        "altText": "Relaxed Polo Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-relaxed-polo-shirt-primary",
          "altText": "Relaxed Polo Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-washed-chore-jacket-primary",
          "altText": "Relaxed Polo Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-everyday-crew-neck-primary",
          "altText": "Relaxed Polo Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Relaxed Polo Shirt",
      "description": "Relaxed Polo Shirt from Nodics Menswear",
      "keywords": [
        "Relaxed Polo Shirt",
        "Nodics Menswear",
        "Pique cotton",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Pique cotton",
      "audience": "men",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Relaxed Polo Shirt",
    "description": "Pique cotton relaxed polo shirt designed for modern everyday styling.",
    "slug": "relaxed-polo-shirt-ar",
    "tenant": "default",
    "productCode": "agoraRelaxedPoloShirt",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-relaxed-polo-shirt-primary",
        "altText": "Relaxed Polo Shirt primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-relaxed-polo-shirt-primary",
          "altText": "Relaxed Polo Shirt gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-washed-chore-jacket-primary",
          "altText": "Relaxed Polo Shirt gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-everyday-crew-neck-primary",
          "altText": "Relaxed Polo Shirt gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Relaxed Polo Shirt",
      "description": "Relaxed Polo Shirt from Nodics Menswear",
      "keywords": [
        "Relaxed Polo Shirt",
        "Nodics Menswear",
        "Pique cotton",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "green",
      "material": "Pique cotton",
      "audience": "men",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Washed Chore Jacket",
    "description": "Washed cotton washed chore jacket designed for modern everyday styling.",
    "slug": "washed-chore-jacket",
    "tenant": "default",
    "productCode": "agoraWashedChoreJacket",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-washed-chore-jacket-primary",
        "altText": "Washed Chore Jacket primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-washed-chore-jacket-primary",
          "altText": "Washed Chore Jacket gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-everyday-crew-neck-primary",
          "altText": "Washed Chore Jacket gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-utility-cargo-trouser-primary",
          "altText": "Washed Chore Jacket gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Washed Chore Jacket",
      "description": "Washed Chore Jacket from Nodics Menswear",
      "keywords": [
        "Washed Chore Jacket",
        "Nodics Menswear",
        "Washed cotton",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Washed cotton",
      "audience": "men",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Washed Chore Jacket",
    "description": "Washed cotton washed chore jacket designed for modern everyday styling.",
    "slug": "washed-chore-jacket-ar",
    "tenant": "default",
    "productCode": "agoraWashedChoreJacket",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-washed-chore-jacket-primary",
        "altText": "Washed Chore Jacket primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-washed-chore-jacket-primary",
          "altText": "Washed Chore Jacket gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-everyday-crew-neck-primary",
          "altText": "Washed Chore Jacket gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-utility-cargo-trouser-primary",
          "altText": "Washed Chore Jacket gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Washed Chore Jacket",
      "description": "Washed Chore Jacket from Nodics Menswear",
      "keywords": [
        "Washed Chore Jacket",
        "Nodics Menswear",
        "Washed cotton",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "yellow",
      "material": "Washed cotton",
      "audience": "men",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Everyday Crew Neck",
    "description": "Cotton jersey everyday crew neck designed for modern everyday styling.",
    "slug": "everyday-crew-neck",
    "tenant": "default",
    "productCode": "agoraEverydayCrewNeck",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-everyday-crew-neck-primary",
        "altText": "Everyday Crew Neck primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-everyday-crew-neck-primary",
          "altText": "Everyday Crew Neck gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-utility-cargo-trouser-primary",
          "altText": "Everyday Crew Neck gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-leather-card-holder-primary",
          "altText": "Everyday Crew Neck gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Everyday Crew Neck",
      "description": "Everyday Crew Neck from Nodics Menswear",
      "keywords": [
        "Everyday Crew Neck",
        "Nodics Menswear",
        "Cotton jersey",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "blue",
      "material": "Cotton jersey",
      "audience": "men",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Everyday Crew Neck",
    "description": "Cotton jersey everyday crew neck designed for modern everyday styling.",
    "slug": "everyday-crew-neck-ar",
    "tenant": "default",
    "productCode": "agoraEverydayCrewNeck",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-everyday-crew-neck-primary",
        "altText": "Everyday Crew Neck primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-everyday-crew-neck-primary",
          "altText": "Everyday Crew Neck gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-utility-cargo-trouser-primary",
          "altText": "Everyday Crew Neck gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-leather-card-holder-primary",
          "altText": "Everyday Crew Neck gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Everyday Crew Neck",
      "description": "Everyday Crew Neck from Nodics Menswear",
      "keywords": [
        "Everyday Crew Neck",
        "Nodics Menswear",
        "Cotton jersey",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "blue",
      "material": "Cotton jersey",
      "audience": "men",
      "colorOptions": [
        {
          "code": "mist",
          "label": "Mist",
          "family": "blue",
          "hex": "#cbd4d5"
        },
        {
          "code": "navy",
          "label": "Navy",
          "family": "blue",
          "hex": "#202b45"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Utility Cargo Trouser",
    "description": "Ripstop cotton utility cargo trouser designed for modern everyday styling.",
    "slug": "utility-cargo-trouser",
    "tenant": "default",
    "productCode": "agoraUtilityCargoTrouser",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-utility-cargo-trouser-primary",
        "altText": "Utility Cargo Trouser primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-utility-cargo-trouser-primary",
          "altText": "Utility Cargo Trouser gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-leather-card-holder-primary",
          "altText": "Utility Cargo Trouser gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-signature-sunglasses-primary",
          "altText": "Utility Cargo Trouser gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Utility Cargo Trouser",
      "description": "Utility Cargo Trouser from Nodics Menswear",
      "keywords": [
        "Utility Cargo Trouser",
        "Nodics Menswear",
        "Ripstop cotton",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "pink",
      "material": "Ripstop cotton",
      "audience": "men",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Utility Cargo Trouser",
    "description": "Ripstop cotton utility cargo trouser designed for modern everyday styling.",
    "slug": "utility-cargo-trouser-ar",
    "tenant": "default",
    "productCode": "agoraUtilityCargoTrouser",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-utility-cargo-trouser-primary",
        "altText": "Utility Cargo Trouser primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-utility-cargo-trouser-primary",
          "altText": "Utility Cargo Trouser gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-leather-card-holder-primary",
          "altText": "Utility Cargo Trouser gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-signature-sunglasses-primary",
          "altText": "Utility Cargo Trouser gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Utility Cargo Trouser",
      "description": "Utility Cargo Trouser from Nodics Menswear",
      "keywords": [
        "Utility Cargo Trouser",
        "Nodics Menswear",
        "Ripstop cotton",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Menswear",
      "collection": "Apparel",
      "colorFamily": "pink",
      "material": "Ripstop cotton",
      "audience": "men",
      "colorOptions": [
        {
          "code": "rose",
          "label": "Rose",
          "family": "pink",
          "hex": "#d9a6a6"
        },
        {
          "code": "oat",
          "label": "Oat",
          "family": "neutral",
          "hex": "#d8cfbf"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Leather Card Holder",
    "description": "Leather leather card holder designed for modern everyday styling.",
    "slug": "leather-card-holder",
    "tenant": "default",
    "productCode": "agoraLeatherCardHolder",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-leather-card-holder-primary",
        "altText": "Leather Card Holder primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-leather-card-holder-primary",
          "altText": "Leather Card Holder gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-signature-sunglasses-primary",
          "altText": "Leather Card Holder gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-neutral-shoulder-bag-primary",
          "altText": "Leather Card Holder gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Leather Card Holder",
      "description": "Leather Card Holder from Nodics Goods",
      "keywords": [
        "Leather Card Holder",
        "Nodics Goods",
        "Leather",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "neutral",
      "material": "Leather",
      "audience": "men",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Leather Card Holder",
    "description": "Leather leather card holder designed for modern everyday styling.",
    "slug": "leather-card-holder-ar",
    "tenant": "default",
    "productCode": "agoraLeatherCardHolder",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-leather-card-holder-primary",
        "altText": "Leather Card Holder primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-leather-card-holder-primary",
          "altText": "Leather Card Holder gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-signature-sunglasses-primary",
          "altText": "Leather Card Holder gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-neutral-shoulder-bag-primary",
          "altText": "Leather Card Holder gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Leather Card Holder",
      "description": "Leather Card Holder from Nodics Goods",
      "keywords": [
        "Leather Card Holder",
        "Nodics Goods",
        "Leather",
        "men"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "neutral",
      "material": "Leather",
      "audience": "men",
      "colorOptions": [
        {
          "code": "ivory",
          "label": "Ivory",
          "family": "neutral",
          "hex": "#f4efe4"
        },
        {
          "code": "black",
          "label": "Black",
          "family": "black",
          "hex": "#211f1a"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Signature Sunglasses",
    "description": "Acetate signature sunglasses designed for modern everyday styling.",
    "slug": "signature-sunglasses",
    "tenant": "default",
    "productCode": "agoraSignatureSunglasses",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-signature-sunglasses-primary",
        "altText": "Signature Sunglasses primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-signature-sunglasses-primary",
          "altText": "Signature Sunglasses gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-neutral-shoulder-bag-primary",
          "altText": "Signature Sunglasses gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-modern-knit-set-primary",
          "altText": "Signature Sunglasses gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Signature Sunglasses",
      "description": "Signature Sunglasses from Nodics Goods",
      "keywords": [
        "Signature Sunglasses",
        "Nodics Goods",
        "Acetate",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "neutral",
      "material": "Acetate",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Signature Sunglasses",
    "description": "Acetate signature sunglasses designed for modern everyday styling.",
    "slug": "signature-sunglasses-ar",
    "tenant": "default",
    "productCode": "agoraSignatureSunglasses",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-signature-sunglasses-primary",
        "altText": "Signature Sunglasses primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-signature-sunglasses-primary",
          "altText": "Signature Sunglasses gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-neutral-shoulder-bag-primary",
          "altText": "Signature Sunglasses gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-modern-knit-set-primary",
          "altText": "Signature Sunglasses gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Signature Sunglasses",
      "description": "Signature Sunglasses from Nodics Goods",
      "keywords": [
        "Signature Sunglasses",
        "Nodics Goods",
        "Acetate",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Accessories",
      "colorFamily": "neutral",
      "material": "Acetate",
      "audience": "women",
      "colorOptions": [
        {
          "code": "sand",
          "label": "Sand",
          "family": "neutral",
          "hex": "#d8c6a4"
        },
        {
          "code": "cocoa",
          "label": "Cocoa",
          "family": "brown",
          "hex": "#7a5641"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Neutral Shoulder Bag",
    "description": "Leather neutral shoulder bag designed for modern everyday styling.",
    "slug": "neutral-shoulder-bag",
    "tenant": "default",
    "productCode": "agoraNeutralShoulderBag",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-neutral-shoulder-bag-primary",
        "altText": "Neutral Shoulder Bag primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-neutral-shoulder-bag-primary",
          "altText": "Neutral Shoulder Bag gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-modern-knit-set-primary",
          "altText": "Neutral Shoulder Bag gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-linen-wrap-dress-primary",
          "altText": "Neutral Shoulder Bag gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Neutral Shoulder Bag",
      "description": "Neutral Shoulder Bag from Nodics Goods",
      "keywords": [
        "Neutral Shoulder Bag",
        "Nodics Goods",
        "Leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "green",
      "material": "Leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Neutral Shoulder Bag",
    "description": "Leather neutral shoulder bag designed for modern everyday styling.",
    "slug": "neutral-shoulder-bag-ar",
    "tenant": "default",
    "productCode": "agoraNeutralShoulderBag",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-neutral-shoulder-bag-primary",
        "altText": "Neutral Shoulder Bag primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-neutral-shoulder-bag-primary",
          "altText": "Neutral Shoulder Bag gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-modern-knit-set-primary",
          "altText": "Neutral Shoulder Bag gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-linen-wrap-dress-primary",
          "altText": "Neutral Shoulder Bag gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Neutral Shoulder Bag",
      "description": "Neutral Shoulder Bag from Nodics Goods",
      "keywords": [
        "Neutral Shoulder Bag",
        "Nodics Goods",
        "Leather",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Goods",
      "collection": "Bags",
      "colorFamily": "green",
      "material": "Leather",
      "audience": "women",
      "colorOptions": [
        {
          "code": "olive",
          "label": "Olive",
          "family": "green",
          "hex": "#767c59"
        },
        {
          "code": "cream",
          "label": "Cream",
          "family": "neutral",
          "hex": "#fff6df"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "en",
    "name": "Modern Knit Set",
    "description": "Cotton knit modern knit set designed for modern everyday styling.",
    "slug": "modern-knit-set",
    "tenant": "default",
    "productCode": "agoraModernKnitSet",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-modern-knit-set-primary",
        "altText": "Modern Knit Set primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-modern-knit-set-primary",
          "altText": "Modern Knit Set gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-linen-wrap-dress-primary",
          "altText": "Modern Knit Set gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-satin-midi-dress-primary",
          "altText": "Modern Knit Set gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Modern Knit Set",
      "description": "Modern Knit Set from Nodics Studio",
      "keywords": [
        "Modern Knit Set",
        "Nodics Studio",
        "Cotton knit",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "New In",
      "colorFamily": "yellow",
      "material": "Cotton knit",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
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
    "locale": "ar",
    "name": "Modern Knit Set",
    "description": "Cotton knit modern knit set designed for modern everyday styling.",
    "slug": "modern-knit-set-ar",
    "tenant": "default",
    "productCode": "agoraModernKnitSet",
    "catalogVersion": "agoraStaged",
    "status": "READY",
    "revision": 1,
    "active": true,
    "media": {
      "primaryImage": {
        "mediaCode": "agora-owned-product-modern-knit-set-primary",
        "altText": "Modern Knit Set primary image"
      },
      "gallery": [
        {
          "mediaCode": "agora-owned-product-modern-knit-set-primary",
          "altText": "Modern Knit Set gallery 1"
        },
        {
          "mediaCode": "agora-owned-product-linen-wrap-dress-primary",
          "altText": "Modern Knit Set gallery 2"
        },
        {
          "mediaCode": "agora-owned-product-satin-midi-dress-primary",
          "altText": "Modern Knit Set gallery 3"
        }
      ]
    },
    "seo": {
      "title": "Modern Knit Set",
      "description": "Modern Knit Set from Nodics Studio",
      "keywords": [
        "Modern Knit Set",
        "Nodics Studio",
        "Cotton knit",
        "women"
      ]
    },
    "attributes": {
      "brand": "Nodics Studio",
      "collection": "New In",
      "colorFamily": "yellow",
      "material": "Cotton knit",
      "audience": "women",
      "colorOptions": [
        {
          "code": "amber",
          "label": "Amber",
          "family": "yellow",
          "hex": "#c78120"
        },
        {
          "code": "clay",
          "label": "Clay",
          "family": "orange",
          "hex": "#b86642"
        }
      ],
      "sizeOptions": [
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    "classificationValues": {
      "categoryCodes": [
        "agoraWomen",
        "agoraNewArrivals"
      ],
      "domain": "apparel"
    }
  }
});
