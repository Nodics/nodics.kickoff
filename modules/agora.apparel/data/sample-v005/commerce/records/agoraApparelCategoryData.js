/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

"use strict";

/** @module agora.apparel/data/agoraApparelCategoryData.js
 * @description Enterprise-scoped local reference records for governed Commerce publication.
 * @layer data
 * @owner agora.apparel
 * @lifecycle PUBLISHABLE
 * @destination COMMERCE_STAGED
 */
module.exports = Object.freeze({
  record0: {
    code: "agoraNewArrivals",
    tenant: "default",
    name: "New Arrivals",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record1: {
    code: "agoraWomen",
    tenant: "default",
    name: "Women",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record2: {
    code: "agoraMen",
    tenant: "default",
    name: "Men",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record3: {
    code: "agoraWomenDresses",
    tenant: "default",
    name: "Women Dresses",
    parentCode: "agoraWomen",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record4: {
    code: "agoraWomenTops",
    tenant: "default",
    name: "Women Tops",
    parentCode: "agoraWomen",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record5: {
    code: "agoraWomenAccessories",
    tenant: "default",
    name: "Women Accessories",
    parentCode: "agoraWomen",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record6: {
    code: "agoraWomenBags",
    tenant: "default",
    name: "Women Bags",
    parentCode: "agoraWomenAccessories",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record7: {
    code: "agoraSale",
    tenant: "default",
    name: "Sale",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record8: {
    code: "agoraMenShirts",
    tenant: "default",
    name: "Men Shirts",
    parentCode: "agoraMen",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record9: {
    code: "agoraMenTrousers",
    tenant: "default",
    name: "Men Trousers",
    parentCode: "agoraMen",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record10: {
    code: "agoraMenAccessories",
    tenant: "default",
    name: "Men Accessories",
    parentCode: "agoraMen",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
  record11: {
    code: "agoraDigitalCoupons",
    tenant: "default",
    name: "Digital Coupons",
    parentCode: "agoraSale",
    status: "ACTIVE",
    revision: 1,
    active: true,
    enterpriseCode: "default",
  },
});
