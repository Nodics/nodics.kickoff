'use strict';

/** @module kickoffDockerLocal @description Declares the isolated Docker Local production-simulation environment. */
module.exports = {
    /** Initializes the environment contribution without owning infrastructure lifecycle. */
    init: function () { return Promise.resolve(true); },
    /** Completes environment contribution initialization. */
    postInit: function () { return Promise.resolve(true); }
};
