'use strict';

/** @module wcmsOnlineServer @description Composes the Local WCMS publication target and public delivery runtime. */
module.exports = {
    /** Initializes the server contribution. */
    init: function () { return Promise.resolve(true); },
    /** Completes server contribution initialization. */
    postInit: function () { return Promise.resolve(true); }
};
