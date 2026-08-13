'use strict';

/** @module wcmsStagedServer @description Composes the Local WCMS authoring and publication-source runtime. */
module.exports = {
    /** Initializes the server contribution. */
    init: function () { return Promise.resolve(true); },
    /** Completes server contribution initialization. */
    postInit: function () { return Promise.resolve(true); }
};
