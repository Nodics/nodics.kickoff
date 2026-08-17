# Commerce and Engagement functional journeys

This page is the beginner and operator route through the Nodics reference journeys. It explains what can be demonstrated locally, which module owns each decision, what Axis displays, and how to recover safely. Kickoff composes the reference environment; it does not become the authority for Commerce, Engagement, Payment, Communication, Process, Profile, Media, or WCMS records.

## Understand the product journey

A customer-facing journey is not complete when an HTTP request merely returns success. The full path is customer intent, validated intake, durable business state, an eligible operator action, visibility or fulfillment, and a safe withdrawal or reversal. Every step carries a tenant and correlation identity. Repeated commands use an idempotency key, and state-changing operator commands use an expected revision so two operators cannot silently overwrite each other.

The local reference uses deterministic providers. They create realistic, content-safe evidence but do not claim that a production account, sender, carrier, or payment merchant is qualified. Sandbox-capable adapters remain disabled until their secret references and environment policy are supplied.

## Plan roles, prerequisites, and ownership

Developers start Platform before Commerce or Engagement because authentication, tenant context, and Profile ownership fail closed when Platform is unavailable. Business operators use Axis at `http://localhost:3100`; customer calls use the documented public or customer API surfaces. The local administrator may inspect operator journeys, but a customer-owned route must still be tested with a customer principal before deployment qualification.

The principal owners are:

- Checkout and Order coordinate placement and reversal checkpoints without taking Payment, Inventory, or Fulfillment authority.
- Payment owns authorization, capture, void, refund, provider evidence, and reconciliation.
- Engagement API owns public, customer, operator, and integration exposure while Contact, Review, Feedback, and Testimonial own their records and transitions.
- Communication owns templates, suppression, delivery attempts, callbacks, and provider-neutral evidence.
- Process owns workflow definitions, instances, tasks, recovery incidents, retries, dead-letter state, and compensation progress. Domain modules own the business action and reversal adapters.
- Axis renders backend-owned capability metadata and calls secured action routes; it does not duplicate lifecycle rules.

## Configure and start locally

Install the workspace dependencies and use Kickoff project commands rather than constructing an undocumented module graph. Run `npm run start:platform` first, then the Commerce and Engagement start commands in separate terminals. The command aliases execute framework-owned runtime startup tooling using facts from `nodics.project.json`. Readiness must pass before invoking a journey. Do not place provider credentials in source, sample data, browser storage, or documentation. Environment-specific secret references belong in secured layered configuration.

Run `npm run acceptance:functional` from `nodics.kickoff` for the automated effective-server proof. The runner reuses healthy local servers or starts only what it needs, authenticates through Platform, uses unique correlation and idempotency values, and stops only processes that it started. It does not edit MongoDB directly.

## Operate Engagement in Axis

Open Customer Engagement in Axis. The page groups contact work, testimonials, reviews, feedback, operations, automation, and resilience without creating duplicate application shells. Select a saved or quick-filtered view, open one record, inspect its timeline and linked evidence, and use only actions shown as eligible for the current status.

The feedback reference journey submits an anonymous record, then performs `TRIAGE`, `ASSIGN`, `START`, `RESOLVE`, and `CONFIRM`. Confirm closure is intentionally separate from resolution. Reopen remains available when new customer evidence arrives. Contact work supports start, request information, resolve, close, reopen, spam handling, and handoff recovery. Review moderation supports approval, quarantine, rejection, and restoration. Testimonial operations preserve editorial version, customer consent, publication projection, emergency hide, and reconciliation as separate evidence.

If an action reports a revision conflict, reload the record and review the newer timeline. Never retry with a guessed revision. If a provider or Process handoff fails, keep the customer record accepted, inspect the deferred or dead-letter evidence, then use the dedicated recovery action. Do not change a domain record through generic schema CRUD.

## Operate Commerce and reversals

The Commerce contract exposes cart calculation, checkout placement, and order reversal routes. A placement proceeds through deterministic checkpoints so failure after pricing, inventory reservation, payment authorization, order creation, or fulfillment submission can be compensated by the owning domain. Replaying the same idempotency key returns existing evidence instead of duplicating the order or payment.

Cancellation, return, and refund are not synonyms. Cancellation governs an eligible unfulfilled order or line, Return governs the physical or logical return case, and Refund governs money movement. Axis presents these as an Order Lifecycle journey and links payment, inventory, fulfillment, workflow, and audit evidence. Operators must inspect eligibility and preview impact before confirming a destructive or financial action.

## Integrate providers safely

Provider adapters implement a bounded port: validate enabled state and sandbox policy, resolve credentials by reference, send only the minimum permitted payload, produce a content-free provider reference, authenticate callbacks, reject replay, and expose health and reconciliation. Local providers are deterministic test doubles. Sandbox-capable providers are implementation evidence, while production qualification requires a deployment-owned account and sign-off.

For email and SMS, verify suppression before delivery and store no rendered content in events. For payment, use provider tokens rather than card data. For carrier and helpdesk handoff, keep external identifiers as references and let Commerce or Contact retain business lifecycle authority. A provider outage must yield retryable evidence, not an untracked domain-state change.

## Privacy, data, and recovery

Every export requires a purpose, an allow-listed field set, masking, a maximum record count, an audit identity, and a checksum. Batch and repair operations require preview, approval, idempotency, per-item outcomes, and resumability. Core operations may coordinate commands, but each command returns to the owning domain service.

When an automated Process ACTION fails, open the recovery queue in the existing Process Operations workspace. Inspect the stable error code and attempt budget, then retry with the displayed expected attempt or run the registered domain compensation. A stale attempt fails with a conflict; an exhausted incident stays dead-lettered. Process records the recovery outcome but never edits Commerce, Engagement, or another domain record directly.

Retention evaluates policy and legal hold before archive or anonymization. Erasure must not delete records that regulation or an active legal hold requires; instead it records the denied or deferred outcome. Dead-letter replay uses the original bounded command identity and increments attempt evidence. Operators should be able to trace the original correlation identifier from customer intake through domain state, provider attempt, workflow, visibility, and recovery.

## Observe and troubleshoot

Use readiness first, then domain dashboards and timelines. Important signals include placement and reversal failure counts, provider latency and callback rejection, moderation and resolution SLA, overdue queue items, dead letters, replay outcomes, export failures, and projection drift. Logs and events must carry codes and correlation identifiers without message bodies, secrets, tokens, personal contact details, or payment data.

When a public Engagement request fails, confirm a correlation header exists and that the feature is enabled in the effective server. When an operator queue appears empty, confirm pagination controls were not interpreted as persistence filters. When Axis hides an action, inspect current status, permission, and backend metadata before assuming a frontend defect. When a provider is disabled, do not enable it merely to make a test green; use the deterministic local adapter or supply a governed sandbox configuration.

## Common mistakes

- Calling a foundation or local mock “production complete.”
- Starting Commerce or Engagement without Platform and then weakening fail-closed dependencies.
- Editing MongoDB to create demo state instead of using a governed API or import.
- Adding a second heavy Axis page when backend metadata can express the journey cleanly.
- Letting a cross-domain batch mutate repository records directly.
- Logging message content, addresses, credentials, tokens, or provider callback payloads.
- Treating deployment qualification as a substitute for functional implementation.

## Verification

Run the owning package tests, then `npm run acceptance:functional` in Kickoff. Verify that submission is visible to an authorized operator, all lifecycle actions increment revision, closure is visible, public projections contain only approved data, and withdrawal or reversal removes eligibility without erasing required audit evidence. Run Axis verification after metadata changes and check keyboard navigation, responsive layout, action confirmation, empty states, error recovery, and permission-denied behavior.

For provider work, run success, timeout, rejection, duplicate callback, replay, reconciliation, and disabled-configuration contracts. For operational work, prove preview, approval, partial failure, resume, idempotent replay, legal hold, masked export, and repair evidence. Qualification against real external accounts, production-scale load, disaster recovery infrastructure, and formal accessibility sign-off remains a later environment gate.
