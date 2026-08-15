# Agora non-provider implementation plan

This note tracks the remaining Agora end-to-end work that can progress without
live payment, carrier, warehouse, or POS provider certification.

Provider certification remains an external release gate and is parked from this
thread. The items below are local/Docker-safe implementation work and must
continue to use backend-owned contracts instead of moving Commerce, Profile,
Media, Process, or Promotion authority into `agoraData` or `nodics.agora`.

## Remaining local/Docker-safe areas

1. Promotions Builder depth in Axis
   - visual rule composer;
   - coupon allocation workspace;
   - coupon and budget mutation ledger;
   - conflict-aware schedule calendar;
   - customer exposure preview;
   - redemption analytics;
   - backend-owned approval checklist.

2. Media production readiness
   - Nodics-owned asset intake;
   - checksum and source evidence;
   - rights and target-usage approval;
   - active media reference promotion;
   - activation revision and rollback evidence;
   - emergency deactivation evidence.

3. Customer account self-service
   - profile summary and edit handoff through Profile;
   - address-book list/create/update handoff through Profile;
   - order history and lifecycle request visibility through Commerce;
   - operator-only overrides remaining in Axis/backoffice.

4. Reverse lifecycle depth
   - cancellation before fulfillment release;
   - return logistics, RMA, shipment and receipt tracking;
   - inspection and disposition evidence;
   - refund preview, refund method and reconciliation-required handling;
   - exchange, replacement, rejection and appeal review;
   - operator runbooks for reservation, inspection, refund reconciliation and
     appeal SLA review.

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
