/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';
/** @module circa.ewaste/data/commerce/header @description Imports only declared Circa Commerce authoring records. @layer data-header @owner circa.ewaste */
module.exports = {
    "store": {
        "circaStoreData": {
            "options": {
                "enabled": true,
                "schemaName": "store",
                "operation": "saveAll",
                "dataFilePrefix": "circaStoreData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "pricing": {
        "circaPriceBookData": {
            "options": {
                "enabled": true,
                "schemaName": "priceBook",
                "operation": "saveAll",
                "dataFilePrefix": "circaPriceBookData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaPriceRowData": {
            "options": {
                "enabled": true,
                "schemaName": "priceRow",
                "operation": "saveAll",
                "dataFilePrefix": "circaPriceRowData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "tax": {
        "circaTaxPolicyData": {
            "options": {
                "enabled": true,
                "schemaName": "taxPolicy",
                "operation": "saveAll",
                "dataFilePrefix": "circaTaxPolicyData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "inventory": {
        "circaWarehouseData": {
            "options": {
                "enabled": true,
                "schemaName": "warehouse",
                "operation": "saveAll",
                "dataFilePrefix": "circaWarehouseData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaInventoryBalanceData": {
            "options": {
                "enabled": true,
                "schemaName": "inventoryBalance",
                "operation": "saveAll",
                "dataFilePrefix": "circaInventoryBalanceData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "product": {
        "circaCategoryData": {
            "options": {
                "enabled": true,
                "schemaName": "category",
                "operation": "saveAll",
                "dataFilePrefix": "circaCategoryData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaCategoryLocalizationData": {
            "options": {
                "enabled": true,
                "schemaName": "categoryLocalization",
                "operation": "saveAll",
                "dataFilePrefix": "circaCategoryLocalizationData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaProductData": {
            "options": {
                "enabled": true,
                "schemaName": "product",
                "operation": "saveAll",
                "dataFilePrefix": "circaProductData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaProductLocalizationData": {
            "options": {
                "enabled": true,
                "schemaName": "productLocalization",
                "operation": "saveAll",
                "dataFilePrefix": "circaProductLocalizationData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaProductVariantData": {
            "options": {
                "enabled": true,
                "schemaName": "productVariant",
                "operation": "saveAll",
                "dataFilePrefix": "circaProductVariantData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaProductVariantLocalizationData": {
            "options": {
                "enabled": true,
                "schemaName": "productVariantLocalization",
                "operation": "saveAll",
                "dataFilePrefix": "circaProductVariantLocalizationData"
            },
            "query": {
                "code": "$code"
            }
        }
    },
    "promotion": {
        "circaPromotionData": {
            "options": {
                "enabled": true,
                "schemaName": "promotion",
                "operation": "saveAll",
                "dataFilePrefix": "circaPromotionData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaCouponBatchData": {
            "options": {
                "enabled": true,
                "schemaName": "couponBatch",
                "operation": "saveAll",
                "dataFilePrefix": "circaCouponBatchData"
            },
            "query": {
                "code": "$code"
            }
        },
        "circaCouponData": {
            "options": {
                "enabled": true,
                "schemaName": "coupon",
                "operation": "saveAll",
                "dataFilePrefix": "circaCouponData"
            },
            "query": {
                "code": "$code"
            }
        }
    }
};
