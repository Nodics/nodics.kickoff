/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */
/** @module processServer/data/init-v001/process/circaCouponReminderDefinitionData @description Optional Local Process-owned reminder definition contribution; no schedule or messages on import. @owner nodics.kickoff @layer data */
module.exports = {
  "definitions": [
    {
      "code": "circaCouponExpiryReminder",
      "name": "Circa coupon expiry reminder",
      "description": "Reviewed IN_APP reminder for an existing fixed-expiry coupon; no purchase or value movement.",
      "category": "commerce",
      "ownerModule": "digitalCore",
      "policy": {
        "maximumContextBytes": 4096,
        "contextAllowlist": [
          "enterpriseCode",
          "entitlementCode",
          "source",
          "cronJobCode",
          "cronJobTenant",
          "scheduledExpression",
          "firedAt",
          "triggerCode",
          "correlationId"
        ]
      },
      "graph": {
        "nodes": [
          {
            "code": "start",
            "type": "START",
            "name": "Start"
          },
          {
            "code": "remind",
            "type": "ACTION",
            "name": "Check coupon expiry and notify opted-in staff",
            "action": {
              "moduleName": "digitalCore",
              "operation": "couponExpirySweep"
            }
          },
          {
            "code": "end",
            "type": "END",
            "name": "End"
          }
        ],
        "transitions": [
          {
            "code": "start_remind",
            "source": "start",
            "target": "remind"
          },
          {
            "code": "remind_end",
            "source": "remind",
            "target": "end"
          }
        ]
      }
    }
  ]
};
