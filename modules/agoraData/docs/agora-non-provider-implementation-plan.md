# Agora non-provider implementation plan

This note tracks the remaining Agora end-to-end work that can progress without
live payment, carrier, warehouse, or POS provider certification.

Provider certification remains an external release gate and is parked from this
thread. The items below are local/Docker-safe implementation work and must
continue to use backend-owned contracts instead of moving Commerce, Profile,
Media, Process, or Promotion authority into `agoraData` or `nodics.agora`.

## Remaining local/Docker-safe areas

1. Promotions Builder depth in Axis
   - visual rule composer remains a later UX enhancement;
   - coupon allocation workspace has first-slice backend and Axis operation
     coverage;
   - coupon and budget mutation ledger has first-slice backend coverage;
   - conflict-aware schedule calendar remains a later UX enhancement;
   - customer exposure preview remains a later UX enhancement;
   - redemption analytics remains a later reporting enhancement;
   - backend-owned approval checklist is represented in Axis guidance.

2. Media production readiness
   - Nodics-owned asset intake remains blocked on licensed/replacement assets;
   - checksum and source evidence has backend media-reference coverage;
   - rights and target-usage approval has backend media-reference coverage;
   - active media reference promotion has backend route/facade coverage;
   - activation revision and rollback evidence has backend coverage;
   - emergency deactivation evidence has backend coverage.

3. Customer account self-service
   - profile summary and edit handoff through Profile;
   - address-book list/create/update handoff through Profile;
   - order history and lifecycle request visibility through Commerce;
   - operator-only overrides remaining in Axis/backoffice.

4. Reverse lifecycle depth
   - cancellation before fulfillment release is represented through Inventory
     reservation-release automation planning;
   - return logistics, RMA, shipment and receipt tracking have customer
     preview/request and operator-hook first slices;
   - inspection and disposition evidence has Fulfillment owner hook coverage;
   - refund preview, refund method and reconciliation-required handling has
     Payment owner evidence coverage;
   - exchange, replacement, rejection and appeal review have preview and
     approval-hook first slices;
   - operator runbooks for reservation, inspection, refund reconciliation and
     appeal SLA review are represented by backend automation plans and Agora
     customer-visible status messaging.

5. Test folder structure
   - keep implementation-near unit contracts beside `src/`;
   - keep stabilized journey contracts under `test/`;
   - avoid provider-certification tests in Agora customer UI;
   - prove customer behavior locally and with Docker Local acceptance.

## Batch update after parking provider certification

- Axis now exposes concrete Promotion coupon/budget mutation controls for
  coupon batch operations, budget mutation ledger, redemption reversal and
  approval checklist.
- Axis now exposes a Media intake approval checklist for replacement intake,
  rights approval, target promotion and rollback readiness.
- Agora now separates parked external provider certification from active
  local/Docker implementation gates.
- Agora now exposes reverse-lifecycle operator runbooks for exchange
  replacement reservation, return inspection disposition, delayed refund
  reconciliation and appeal SLA review.
- `agoraData` content and media references carry matching gate, runbook and
  approval evidence fields for import/acceptance checks.

## Backend-depth batch update

- Promotion now compensates coupon usage and budget spend when an applied
  promotion redemption is reversed.
- Media now owns approval, activation and emergency deactivation coordination
  for media references, including checksum, rights, target-usage and rollback
  evidence.
- Order lifecycle preview/create now returns a backend-owned automation plan so
  Agora and Axis can display owner-specific next steps without executing
  Fulfillment, Inventory, Payment or Workflow logic in the browser.
- Agora consumes backend `automationPlan` entries when present and keeps its
  local runbook display as a fallback.

## Closure qualification update

- `npm run test:agora-commerce` passed with 40/40 contract tests.
- `npm run qualification:agora-commerce:live` passed for the enterprise flow:
  data files to Staged schemas, publication to Online schemas, indexing, and
  customer journey acceptance.
- Docker Local was rebuilt from the current workspace sources and recreated
  with preserved volumes.
- `npm run docker-local:qualify` passed the local production-simulation checks:
  runtime health, frontend health, bounded reads, Redis replication/sentinel,
  MongoDB replica authentication, Elasticsearch health, hardening, and network
  separation.
- `npm run acceptance:agora-commerce:docker` passed against the rebuilt Docker
  runtime, including product discovery, PDP, cart, checkout, order lifecycle
  requests, exchange/appeal previews, and non-owner rejection.

Remaining items after this closure batch are not normal local implementation
blockers: licensed/replacement production media intake, real payment/carrier/POS
provider certification, and deeper post-V1 business UX such as visual Promotion
Builder composition, analytics, account self-service, and secondary commerce
scenarios.
