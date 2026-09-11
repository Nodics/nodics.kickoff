/*
    Nodics - Enterprice Micro-Services Management Framework
    Copyright (c) 2026 Nodics All rights reserved.
    Governed by the root LICENSE or a separate written agreement with Nodics.
*/
"use strict";
/** @module circa.ewaste/service/defaultCircaEWasteGuidanceService @description Supplies project policy answers and provider failure recovery while retaining canonical Waste conversation and correction commands. @layer service @owner circa.ewaste */
module.exports = {
  /** Answers only current project guidance; no answer advances or submits the journey. */
  message: async function (request) {
    const domain = SERVICE.DefaultEWasteExperienceService,
      store = SERVICE.DefaultWastePersistenceService;
    const draft = request.code ? await domain.readDraft(request) : null;
    if (draft) store.revision(draft, request.expectedRevision);
    const text = request.payload.message;
    if (typeof text !== "string" || !text.trim() || text.length > 1500)
      store.fail(
        "ERR_EWASTE_MESSAGE_INVALID",
        "Enter a message of at most 1500 characters.",
      );
    let message;
    if (/location|gps|permission|from home|nearest|arriv/i.test(text))
      message =
        "Fresh location checks whether you are within 100 metres of a collection centre. If you already granted access, we capture it automatically. You may browse the map without sharing location; submission requires an arrival check. If location is blocked, enable it in device or browser settings and retry. Your item details are unchanged.";
    else if (
      /swollen|smoking|leaking|burning|hot battery|damaged battery/i.test(text)
    )
      message =
        "Do not put a damaged or swollen battery into a general bin. Ask collection-centre staff for their handling instructions. A photo cannot establish that an item is safe.";
    else if (/photo|camera|upload/i.test(text) && /\?|how|can|why/i.test(text))
      message =
        "At the collection centre, take a photo or upload one from your device. Keep the whole item visible. We identify supported details automatically, then you can correct them and confirm once. If analysis fails, your saved photo remains available for retry or essential manual details.";
    else if (/privacy|retain|delete|who sees/i.test(text))
      message =
        "Your photo is attached to your customer submission and is available to authorized reviewers. Refer to Circa’s published privacy policy for retention and deletion terms. I cannot promise a retention period or delete a record from this conversation.";
    const explicitCorrection =
      draft && /^(?:it is|it's|this is)\s+/i.test(text.trim());
    if (!message && explicitCorrection)
      return SERVICE.DefaultEWasteConversationService.message(request);
    const settings = (CONFIG.get("eWaste") || {}).conversation || {};
    const result = await SERVICE.DefaultCopilotCustomerGuidanceService.reply(
      {
        tenant: request.tenant,
        authData: request.authData,
        message: text,
        conversationCode:
          draft?.metadata.conversationRef?.code ||
          request.payload.conversationCode,
        idempotencyKey: request.idempotencyKey,
        legacyHistory: draft?.metadata.conversation,
        facts: draft?.submittedFacts,
        stage: draft?.submissionStatus || "BEFORE_DRAFT",
      },
      Object.assign({}, settings, { fixedMessage: message }),
    );
    message = result.message;
    if (!draft) return result;
    const next = await store.update("wasteSubmission", request, draft, {
      metadata: Object.assign({}, draft.metadata, {
        conversationRef: {
          module: "copilotConversation",
          schema: "copilotConversationRecord",
          code: result.conversationCode,
        },
        conversation: result.history || [],
      }),
    });
    return {
      contractVersion: 1,
      conversationCode: result.conversationCode,
      message,
      draft: next,
      changed: false,
      actions: [],
    };
  },
};
