# Agora non-provider implementation plan

This note tracks the remaining Agora end-to-end work that can progress without
live payment, carrier, warehouse, or POS provider certification.

Provider certification remains an external release gate. The items below are
local/Docker-safe implementation work and must continue to use backend-owned
contracts instead of moving Commerce, Profile, Media, Process, or Promotion
authority into `agoraData` or `nodics.agora`.

## Remaining local/Docker-safe areas

1. Promotions Builder depth in Axis
   - visual rule composer;
   - coupon allocation workspace;
   - conflict-aware schedule calendar;
   - customer exposure preview;
   - redemption analytics.

2. Media production readiness
   - Nodics-owned asset intake;
   - checksum and source evidence;
   - rights and target-usage approval;
   - active media reference promotion;
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
   - exchange, replacement, rejection and appeal review.

5. Test folder structure
   - keep implementation-near unit contracts beside `src/`;
   - keep stabilized journey contracts under `test/`;
   - avoid provider-certification tests in Agora customer UI;
   - prove customer behavior locally and with Docker Local acceptance.
