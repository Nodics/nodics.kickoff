/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/agora.apparel/data/staged/apparel/data/agoraApparelPriceRowData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner agora.apparel
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

const row = function (code, productCode, unitAmount) {
    return {
        code,
        tenant: 'default',
        priceBookCode: 'agoraApparelRetailAed',
        productCode,
        unitAmount,
        currency: 'AED',
        minQuantity: '1',
        validFrom: '2026-01-01T00:00:00.000Z',
        revision: 1,
        active: true
    };
};

module.exports = {
    record0: row('agoraApparelLinenDressPrice', 'agoraApparelLinenDress', '59.99'),
    record1: row('agoraApparelOxfordShirtPrice', 'agoraApparelOxfordShirt', '89.99')
};
