/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/** @module circa.ewaste/controller/defaultCircaEWasteExperienceController @description Maps Circa public site forms using the shared trusted eWaste request mapper. @layer controller @owner circa.ewaste */
module.exports = {
  /** Delegates request validation/context mapping; service selection is server-owned. */
  invoke: function (operation, request, callback) {
    return SERVICE.DefaultEWasteRequestService.invoke(
      operation,
      request,
      callback,
      "DefaultCircaEWasteExperienceService",
    );
  },
  /** Returns the configured Circa website projection. */
  experience: function (request, callback) {
    return this.invoke("experience", request, callback);
  },
  /** Registers through Profile using the Circa registration form contract. */
  register: function (request, callback) {
    return this.invoke("register", request, callback);
  },
  /** Records a Circa support enquiry through Engagement. */
  contact: function (request, callback) {
    return this.invoke("contact", request, callback);
  },
};
