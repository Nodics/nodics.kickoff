# Remaining Three Fixed-Expiry Offers

This explicit Local selection completes the approved 38-offer intent with two
RenewWorks offers and one LoopCycle offer. It never repeats the 35-offer Retail
rollout, converts installed legacy rights or removes intended offer coverage to
make Cart pass. Promotion, Profile, nPublish, Process and nImport retain authority.

## Exact Selection

`test/fixtures/circaRemainingFixedExpiryOperationalSelection.json` is nonimportable.
It contains three complete draft bodies and intended Product/SKU/PriceRow/batch
identities. Promotion codes append `_FIXED20261108` to the originals. All three
retain fixed expiry `2026-11-08T19:59:59.999Z` (end of 8 November in Asia/Dubai),
lifetime supply 100 and owner lifetime limit one. Original benefits, outlet
restrictions, price requirements and validity windows remain unchanged.

| Original Offer | Original Issuer | Approved Limit |
| --- | --- | --- |
| CIRCA_COUPON_CPN-GRN-30_PROMO | RENEWWORKS_REPAIR_REUSE | 3000 |
| CIRCA_COUPON_CPN-SVC-50_PROMO | RENEWWORKS_REPAIR_REUSE | 5000 |
| CIRCA_COUPON_CPN-ECO-15_PROMO | LOOPCYCLE_RECYCLING | 3000 |

The total 11000 is **first-time operational admission of existing approved caps**,
not an additional amount, increase, replenishment or transfer from GreenPerks.
Instructions read limits from exact published policy; no limit/spent is imported.
The read-only 2026-10-25 assessment found these original ACTIVE version-0 Staged
records still had 30-day terms and no corresponding Online Promotion records.
Refresh that observation before execution; conflicting later evidence must stop
adoption, never trigger replacement/reset of an admission.

Six new manifest sections have version `0.0.1`, sourceRoot `sample-v001`, explicit
selection and Local-only scope:

- `circa.ewaste:circaRenewWorksRemainingFixedExpiryPublicationPlan`
- `circa.ewaste:circaRenewWorksRemainingFixedExpiryBudget`
- `circa.ewaste:circaRenewWorksRemainingFixedExpiryIssuance`
- `circa.ewaste:circaLoopCycleRemainingFixedExpiryPublicationPlan`
- `circa.ewaste:circaLoopCycleRemainingFixedExpiryBudget`
- `circa.ewaste:circaLoopCycleRemainingFixedExpiryIssuance`

Publication files are under `sample-v001/publication/<issuer>-remaining-fixed-expiry`;
instructions are under `sample-v001/operations/promotion/<issuer>-remaining-fixed-expiry`,
where issuer is `renewworks` or `loopcycle`. Publication targets Commerce Staged;
Budget/Issuance target Commerce through `PROMOTION_CAMPAIGN_ISSUANCE`. No automatic
setup selection or admitted observation journal is changed.

## Authority Gate

Existing issuer administrators are the authorized makers: repair.administrator@circa.local
for RENEWWORKS_REPAIR_REUSE and recycling.administrator@circa.local for
LOOPCYCLE_RECYCLING. Their existing Promotion edit and issuer assignments supply
draft-write and manage authority. Native Platform Admin performs distinct review
and approval under its original identity; preserve maker-checker and signed issuer
scope. No new profile, grant, impersonated header or service-token substitution
is part of this selection.

The parent reports all three offers ACTIVE 3/3 and their exact publications
ONLINE/CURRENT revision 6 following Admin Process approval. Retain those receipts;
do not repeat creation, submission, approval, scheduling or publication. The Local
source now replaces only those three Store roots, preserving the 70 GP roots,
other Stores, Docker and framework defaults. Source selection still requires
normal Commerce build/adoption; it does not establish budget or issuance success.

## Ordered Adoption

1. As the original issuer, check qualified Staged CURRENT storage and
   `GET /nodics/promotion/v0/business/promotions/capabilities`. Require read,
   draft-write and manage permissions. Inspect new identities before any write;
   reconcile an existing/uncertain outcome instead of creating another key.
2. Send the exact fixture `draft` to
   `PUT /nodics/promotion/v0/business/promotions/drafts`. Require DRAFT 0/0
   readback. POST `/nodics/promotion/v0/promotions/<code>/submit` with fresh
   `{expectedVersionId,expectedRevision,reasonCode}`; require SUBMITTED 1/1.
3. With unchanged native SuperAdmin Platform bearer/context, POST
   `/nodics/promotion/v0/promotions/<code>/administrative-review` with
   `{issuerEnterpriseCode}`. Follow its administrative-approve action using that
   exact target, fresh preconditions and reasonCode. Require APPROVED 2/2;
   preserve maker-checker and never substitute an enterprise header.
4. As issuer, POST `/nodics/promotion/v0/promotions/<code>/schedule` with fresh
   preconditions and reason. The selected past validFrom yields ACTIVE 3/3 before
   fixed expiry. Compare every immutable field and actual capture fingerprint
   against the fixture. Pins are PLANNED, not live evidence. Extra versions or
   differing content require explicit review/repinning, never forced version 3.
5. Select the exact new issuer PublicationPlan through normal Promotion/nPublish
   governance, including independent publication approval and applied target
   receipt/current pointer readback. Never publish legacy version 0 or replay
   corrected baseline imports over installed records.
6. As marketplace owner, prepare/publish the new Product/SKU/Pricing graph using
   fixture identities. Copy original price amount/currency without revaluation;
   variants bind the new Promotion and batch, and the new priceRef targets the
   new Product. These planned selectors are not installed catalogue evidence.
7. Coordinate replacement of the three unqualified legacy CPN Store roots with
   the three qualified successors. Preserve all intended offers and the existing
   70 GP roots; do not just drop missing roots or change other Stores. Publication,
   delivery selection and operational admission remain separate gates. Do not
   claim intermediate Cart success or complete readiness before all three finish.
8. As issuer on Commerce Online, validate/install only its new Budget section,
   expected version `0.0.1`. Require CURRENT pinned publication, unchanged cap,
   first-time admission and original install-run readback. If operator policy
   requires authority beyond the existing approved caps, stop and report it;
   never add amounts or bypass approval.
9. Obtain fresh seller consent for GREENPERKS_ONLINE and independent outlet
   participation. Validate/install only the matching new Issuance section at
   `0.0.1`; it pins the new Budget contribution checksum. Verify exactly 100
   committed units per offer. Never replay Retail or substitute issuance keys.
10. Verify all three issuer pointers, seller batches, fixed rights, supply and
    limits before asking the parent to recalculate the original Cart/key. No
    payment, wallet credit, purchase or redemption is needed for that check.

Example standard Online nImport selection body (use normal catalogue/validate/
install endpoints and inspect the original run after any uncertain outcome):

```json
{
  "releaseCodes": ["circa.ewaste:circaRenewWorksRemainingFixedExpiryBudget"],
  "expectedReleases": {"circa.ewaste:circaRenewWorksRemainingFixedExpiryBudget": "0.0.1"}
}
```

## Verification And Maintenance

Run `node --test modules/circa.ewaste/test/circaRemainingFixedExpiryInstructions.test.js`.
Tests verify original benefits/caps, untouched 35 selection, actual draft
normalization and capture pins, manifest byte seals, actual nImport/Promotion
parsing, tamper refusal and original-scope enforcement with isolated ports.
They are not live lifecycle/approval/publication or native financial proof.
Original baseline releases remain unchanged and are not live retry paths.

This continuation changes only the explicit Local delivery selection, focused
assertions and guidance. Framework defaults, Docker, existing policies, budget
amounts, installed receipts, grants and runtime state remain unchanged.
