/*
    Nodics - Enterprice Micro-Services Management Framework
    Copyright (c) 2026 Nodics All rights reserved.
    Governed by the root LICENSE or a separate written agreement with Nodics.
*/
/** @module circa.ewaste/controller/defaultCircaTelegramLaunchController @description Validates a Telegram Mini App launch without accepting client identity as Profile authentication. @layer controller @owner circa.ewaste */
module.exports = {
  /** Exposes the customer-safe launch result. */
  bootstrap: function (request, callback) {
    const promise = Promise.resolve().then(async () => ({
      data: await SERVICE.DefaultCircaTelegramLaunchService.bootstrap(
        (request.httpRequest.body || {}).initData, request,
      ),
    }));
    if (!callback) return promise;
    promise.then((value) => callback(null, value)).catch(callback);
  },
};
