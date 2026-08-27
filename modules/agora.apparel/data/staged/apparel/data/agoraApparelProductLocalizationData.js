/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/staged/apparel/data/agoraApparelProductLocalizationData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const product = function (code, productCode, locale, name, description, slug, attributes, mediaCode, categoryCodes) {
    return {
        code,
        tenant: 'default',
        productCode,
        locale,
        name,
        description,
        slug,
        seo: { title: name },
        attributes,
        classificationValues: { domain: 'apparel', ...attributes, categoryCodes: categoryCodes || [] },
        media: { primaryImage: { mediaCode: mediaCode, altText: name } },
        status: 'READY',
        revision: 1,
        active: true
    };
};

module.exports = {
    record0: product('agoraApparelLinenDress-en', 'agoraApparelLinenDress', 'en', 'V-neck Cotton T-shirt', 'Soft cotton everyday essential for the Agora fashion storefront experience.', 'v-neck-cotton-t-shirt', { colorFamily: 'white', material: 'cotton', audience: 'women' }, 'agora-owned-product-linen-wrap-dress-primary', ['agoraWomen', 'agoraWomenTops']),
    record1: product('agoraApparelLinenDress-ar', 'agoraApparelLinenDress', 'ar', 'تي شيرت قطني بياقة V', 'قطعة قطنية ناعمة للاستخدام اليومي ضمن تجربة متجر أجورا.', 'v-neck-cotton-t-shirt', { colorFamily: 'white', material: 'cotton', audience: 'women' }, 'agora-owned-product-linen-wrap-dress-primary', ['agoraWomen', 'agoraWomenTops']),
    record2: product('agoraApparelOxfordShirt-en', 'agoraApparelOxfordShirt', 'en', 'Buttoned Cotton Shirt', 'A crisp buttoned cotton shirt for polished everyday styling.', 'buttoned-cotton-shirt', { colorFamily: 'blue', material: 'cotton', audience: 'men' }, 'agora-owned-product-buttoned-cotton-shirt-primary', ['agoraMen', 'agoraMenShirts']),
    record3: product('agoraApparelOxfordShirt-ar', 'agoraApparelOxfordShirt', 'ar', 'قميص قطني بأزرار', 'قميص قطني أنيق بأزرار لإطلالة يومية مرتبة.', 'buttoned-cotton-shirt', { colorFamily: 'blue', material: 'cotton', audience: 'men' }, 'agora-owned-product-buttoned-cotton-shirt-primary', ['agoraMen', 'agoraMenShirts'])
};
