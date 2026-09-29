# Final Kickoff Ownership Audit

Date: 2026-09-29

## Remediation Progress

### Final Closure Batch

2026-09-29: **COMPLETE: THREE CLOSURES AND FINAL REGRESSION PASS**, limited to the
three previously remaining actions. This newest entry supersedes the pending
actions in older entries below; those entries remain historical evidence.
Framework HEAD `cf6ff1980349af6671b15e5aadebee33e4afc555` and project HEAD
`c759c1832a86902488b7689492c67ace770f19df` are unchanged; both working trees
retain earlier uncommitted work. All ten native runtimes were initially stopped;
they have now been rebuilt and are READY under supervisor 49383, with ten
VERIFIED runtime deployment grants.

Readiness: maintainer implementation and authorized local operation. Product
owns scoped activation-backed discovery; the four policy owners own receipt
recovery and consumer selection; nPublish/CMS own publication-scoped operations.
Reuse existing configuration, generated persistence, Process approval and target
receipt boundaries. Kickoff retains explicit qualification selections and adoption
checks only. No Docker, reset, raw application database mutation, operational
balance restoration or unrelated extraction is in scope. Validate focused owner
tests, independent review, effective configuration, live consumer/rollback/recovery
and scoped reconciliation, then regression gates and developer guidance.

Source clearance: independent review passed 34 Product/CMS focused checks and
112 policy/Cart checks, plus separate malformed-scope, activation-failure,
foreign-enterprise, exact-recovery-selection and changed-pointer probes. The
Product implementation's 84 checks and policy implementation's 131 checks pass.
No framework behavior was placed in Kickoff. One supporting test correction
aligns CMS content-pack baseline status with the existing invalid-release
diagnostic and proves initialization still rejects without importing.

Original operation recovery: all four
`local-policy-20260928-{pricing,tax,inventory,promotion}-v1` requests completed
normal retry and renewed Process approval, reaching ONLINE revision 12. Each
retains its original `:activate:5` operation, source version and receipt code.
Pointers and receipts advanced 0 -> 1 through managed CAS; receipts are applied
with expectedRevision 0. Recovery evidence retains prior-record fingerprints.
The original FAILED Process instances and revision-6 publication failure entries
remain; renewed instances completed. Main independently reread all four secured
publication APIs and confirmed state, revision, operation and failure history.
Temporary recovery selections have been removed. Both Commerce preparation
checks assert disabled, empty recovery defaults, and the final rebuilt runtime
readback confirms all four original recoveries remain ONLINE at revision 12.

Scoped reconciliation: a live request for
`local-media-20260928-mulaw0bx-b` scanned one publication and nine audit entries,
with no missing/restored/failed audit work. CMS outbox selected/delivered/failed
counts were all zero. Before/after API-visible event snapshots were identical
and empty, so populated-event noninterference is covered by focused regression
tests, not claimed as live evidence. The publication remained ROLLED_BACK
revision 8; its superseded activation correctly reported unrepaired CONFLICT.
Online delivery still returned the original 114 bytes with no-store.

Product live delivery: `local-product-delivery-20260929-a` and `-b` completed
normal Process approval. English and Arabic public listing, search and detail
returned Alpha -> Beta -> Alpha after B rollback (ROLLED_BACK revision 8).
Restored target: `10e7b13a0770b63ac792827f20b5a3d6da01b48b78bc3dd4e2e0efde76326013`.
Rollback receipt fingerprint:
`6330a34391974dbfcb9a8464985d1e87ef7b508a9c86d54f54c32f74e7f64e0b`.
Unselected `agoraMainStore` retained 61 products, identical listing hash
`e9ab5f45206bb8c8a20f5cb798a67d998ffce62a9cf9d0ed6ffb1c4c36f91631`
and sampled detail hash
`23a98dc89694a3726cc37e1c70f764e38b131fdb38df9e07a2134be8e5205a38`.

Four-policy consumer proof used normal customer authentication and
`POST /nodics/cart/v0/carts/local-policy-consumer-20260929-cart/calculations`.
There were no existing Online stock balances. Separately authorized local test
initialization imported one isolated Inventory balance through the existing
authenticated `/nodics/import/v0/local` route and Inventory sample header pattern.
No publication operational-restore API, direct database mutation or ACL relaxation
was used. The response was SUC_SYS_00000/200; this legacy local import returned no
run ID and its history query was empty. Evidence is the archived import inputs,
API response and owner readback, not a claimed durable import-run journal.
Archived header SHA256: `f357ce52693fbece47af241778f42482d6242d6d3fc81d4801b4ed2587ca4d56`;
record SHA256: `03214ed3798aecf9af285948898c0fc07d95bf21480f91010a558e61e4a0db43`.

The new `local-policy-consumer-20260929-balance` holds SKU
`LOCAL-PRODUCT-DELIVERY-20260929` in the selected qualification warehouse.
After setup and throughout publication/rollback, on-hand/available stayed 2,
reserved/allocated 0, revision 0 and timestamps unchanged.

| Consumer check | Initial | Published successor | After rollback |
| --- | --- | --- | --- |
| Pricing | 10 | 12 | 10 |
| Promotion discount | 1 | 2 | 1 |
| Tax rate | 5% | 6% | 5% |
| Inventory warehouse policy | Available | Unavailable | Available |

Final customer total was 9.45. Promotion was QUOTE with mutationPerformed false;
no checkout, reservation, allocation, redemption or budget-consumption API ran.
Scoped coupon, reservation, redemption and budget-ledger queries remained empty.
The four successor publications ended ROLLED_BACK revision 8; rollback receipts
were applied at revision 2:

| Publication | Rollback receipt |
| --- | --- |
| `local-policy-consumer-20260929-pricing-v2` | `eb0de2780092b52fdb6f734a27dfedf8509ad0b64617a0a3c633a8763b5fc76d` |
| `local-policy-consumer-20260929-promotion-v2` | `ed0d4d51c76952f575ed910f1075f1d532424a85f36a4158d9e90069369fd4b3` |
| `local-policy-consumer-20260929-tax-v1` | `314941494d502354e96f602553adb416fd9704fe2644986318c9e517697a6765` |
| `local-policy-consumer-20260929-inventory-v1` | `9eea262a6433989a16e26788d94519d70bdbfd91feb5c6fd244dec8f8f3906df` |

Pricing/Promotion consumer v1 publications remain Online for the matching Product
fixture; no claim is made that they reverted to the older pre-consumer fixture.

Final consumer verification on supervisor 49383: 42 anonymous checks on the same
six English/Arabic listing, Product-code search and detail URLs passed without
cache-busting parameters. Price changed 10 -> 12 -> 10, and availability changed
true -> false -> true. Selected standalone Promotion preview changed 1 -> 2 -> 1;
the unselected Store preview stayed empty. Cart returned 409 with
ERR_CART_INVENTORY_UNAVAILABLE while the warehouse policy was inactive, then
returned 200 and total 9.45 after rollback. The stock record, revision and
timestamps remained identical to the post-import baseline.

| Final qualification publication | Applied rollback receipt |
| --- | --- |
| `local-policy-final-20260929-pricing-v1` | `b139065c241731330a5e8e0eea65a2bc8d9143631814d6e94c9039852c8b2c09` |
| `local-policy-final-20260929-promotion-v1` | `e1ad457a459496e1554010cf533655f4599a3f7c7d6a1250f754599c897c5c1c` |
| `local-policy-final-20260929-inventory-v1` | `4ac78f78124ee27d8faf4e7d6df3108508e4d3f4a485fce77be7f40086ac1c3a` |

All three ended ROLLED_BACK revision 8; receipts are applied at revision 2.
The final run used normal capture of the same immutable source versions into
explicit new qualification publications because no HTTP resubmit route exists.
The rejected resubmit attempt occurred before policy mutation; no route was
bypassed, original failed operation replaced, or history rewritten.
Sanitized final-cycle artifact SHA256:
`f066f2de52b53d55b5d99a09aaa1c96cdd3658644858ebc5a75faf95146d2727`.

Separate final Product baseline: variant-only Cart returns 200/9.45, foreign SKU
returns ERR_CART_PRODUCT_UNAVAILABLE/409, and missing Product returns
ERR_FIND_00004/404. The unselected 61-product Store retains both hashes above.
The framework-owned enrichment derives enterprise from matching retained
projections, validating identity, version, source hash and scope before existing
Pricing/Inventory calls. Neither caller-supplied enterprise nor indexed price or
availability becomes authority. Existing service-account read context is reused;
no ACL widening, new identity registry or project-owned implementation was added.
Legacy publication-time summary assertions remain unchanged and pass.

Final source review: 85 focused implementation checks and 76 independent checks
plus positive/negative enrichment probes pass. The framework documentation,
generated-context and copyright gates pass. The final full suite exited zero,
including its basic and governance suites;
earlier full/governance attempts failed on the now-corrected legacy projection
regression and are not counted as final passes. An accidental standalone
governance report invocation lacked server composition and failed discovery;
the canonical governance test suite, not that artifact generator, is the gate.
Final project reruns pass: Agora 14 tests, Circa 42, multi-domain 14,
documentation consistency across nine pages, and ownership-language governance
with zero findings across 4,681 files. Existing project qualification and both
Commerce runtime-preparation checks also pass.

Closure scope is native-local backend ownership and the three named follow-ups.
Docker, browser UI acceptance, production qualification and Git release remain
outside this batch. Documentation 0.8.5/core-v005 is generated and validated,
not claimed published Online. Empty live CMS outbox and legacy import-journal
limitations above remain explicit evidence boundaries, not hidden passing tests.
No required action remains open in this agreed closure batch.

### Remaining Domain Installed Qualification

2026-09-28, user-authorized continuation: **Additional Staged migrations, scoped
six-domain target qualification and final regression gates passed. Customer
delivery rollout and explicit recovery follow-ups remain open.** This entry supersedes the preceding
request for a migration-scope decision. Native Local only; no Docker or reset.

Readiness: reuse nDatabase's reviewed installed-version command, MongoDB provider,
nImport durable journals, nConfig composition, nTooling outage, and existing
nPublish/Process lifecycle. Framework owners retain reusable source and tests;
Kickoff owns only deployment selections, adoption checks and this evidence.
Backends were stopped through the existing topology supervisor and both affected
Staged databases were backed up before effects. Fresh reviewed plans replaced
the earlier stale read-only plans. Each completed operation verified all planned
record postimages and replacement unique indexes before its terminal journal.

| Staged owner | Schemas | Records | Journal revision | Plan checksum |
| --- | --- | ---: | ---: | --- |
| Pricing | priceBook, priceRow | 77 | 7 | `7a8c3428e07858f660241e5c6759778449c86987c997bc2da3323c95e9164f7d` |
| Tax | taxPolicy | 2 | 4 | `eaeac75ecfd1a0de84f03a3ec2be62d4a87648784e7a91739429e6d66c2c5bdf` |
| Inventory | warehouse | 4 | 4 | `9d3aca72f8748d4917801f6b2631fe1765eaf5871060ab461a209aea688eb9ac` |
| Promotion | promotion | 6 | 4 | `fd0a0eaa62ddaa2c22c987e3a34bba94c6a9d3e8ea33af46c3f6e6b3672b1153` |
| Media | media | 20 | 4 | `b8646cbfba79e8d233ec1dcb55bac45f5bbeaeaa2f75e024d275325e36dc4fe1` |

Only Commerce Staged policy sources and WCMS Staged Media metadata select
versioned CURRENT reads. Online operational schemas, stock, reservations,
allocations, coupon state and consumed budgets were not migration targets.
Effective maintenance composition and selected runtime preparation checks pass.
All ten native Local runtimes reopened under the normal topology supervisor after
the independent prerequisite recheck. Runtime deployment grant acceptance verifies
all ten grants. Six explicit Process workflow releases are installed CURRENT:
Product 2.0.0, Pricing/Tax/Inventory/Promotion 1.0.1, and Media 1.0.0. Process
discovers their declared callback definitions without activating domain modules.
Normal approval, target activation and rollback now pass for all six domains on
isolated fixtures. Media additionally passes public byte delivery. Customer-facing
Product/policy delivery remains disabled and unqualified; final regression gates
passed. Migration or startup alone is not live publication evidence.

Independent pre-reopen review found and then verified fixes for three issues: committed
activation retry may overwrite its rollback predecessor; versioned successor
merging may retain removed array members; generic Product dependency deletion
may remove history referenced by sealed publications. Corrections belong to
nPublish, vMongodb and Product respectively. The independent recheck passed 21
focused tests and the original failure probes. Five isolated live MongoDB CURRENT
read/update checks also pass with zero skips. Product's generic HTTP deletion is
blocked for all six retained source schemas; trusted internal import-removal
paths are not claimed to provide a storage-level retention guarantee.

Live qualification found Commerce Staged lacked the shared nPublish module despite
selecting publication providers. Its existing runtime composition now explicitly
activates `publish`, with a preparation regression assertion. Product validates
this prerequisite before capturing a successor. No alternate lifecycle engine,
direct Online restore, or customer-owned publication implementation was added.
Product and API role selections live in environment properties; remote-module
identity lives in runtime package metadata, not duplicate server overrides.

Commerce Staged additionally discovers `nodics.process` metadata without activating
Workflow, so the existing router resolves its declared `process` prefix. Normal
Product and four-policy human tasks completed with APPROVE. The target-local
persistence authority correction reuses Identity Governance after runtime/scope
validation and independent source authorization, without adding JWT groups or
weakening schema ACLs. Validation, authorization and execution use detached
payloads and verified auth snapshots. Independent review rechecked substituted
release, scope and await-mutation probes. These corrections do not authorize
repeating completed human tasks or replacing failed publication history.

The next live retry exposed two further owner defects. Product passed storage
metadata to Elasticsearch; both indexing paths now reuse its existing projection
content selector (41 focused tests). Four policy pointers changed without a
revision increment because vService's non-versioned update override bypassed the
existing database concurrency owner. Writers were stopped again. Source-level
managed-CAS metadata alone had not proved effective runtime delegation.

vService's non-versioned save and update paths now delegate to the existing
`DefaultModelConcurrencyService`. No domain-owned counter increment or alternate
CAS engine was introduced. Forty-four focused checks passed, including actual
startup service composition and an isolated live MongoDB fixture. Main reran the
seven-test layering suite with the explicit replica-set URI: seven passed, zero
skips, and its uniquely named temporary database was cleaned up. It verifies
revision advancement, no-op preservation, stale writes and a competing-write CAS
miss. The original application fixtures were not repair targets.

Read-only owner-service inspection at 18:19:10 Asia/Dubai found all four original
`local-policy-20260928-{pricing,tax,inventory,promotion}-v1` publications FAILED at
revision 6, retaining their original `:activate:5` operations and null predecessors.
Their pointers are revision 0, matching target versions and receipt codes, but
receipts remain `expectedRevision: 0, applied: false`. Existing reconciliation
requires revision 1 and cannot certify these incomplete effects. Preserve them
unchanged with delivery disabled; no hand-patched counter, false completion,
reset or deletion is permitted. Separate `local-policy-casfixed-20260928` fixtures
will test the corrected mechanism, not claim recovery of these original failures.

| Domain | Retained target version | Pending receipt |
| --- | --- | --- |
| Pricing | `53e5cc495d4d728dc74ce9fb5fa911f6a2b9bc35930def34941e524d7a16ce3c` | `ce7e48c113dcf3f56bfd030a105ca6662470030b9c76f822c285a255fc7ad59f` |
| Tax | `b2c85e4a2e705bcaa9284fdfd07262545d15fea05f9e96f2e2ba7aba767806f8` | `e4bac776421804c6f71c9baf46e21d64d0b1a0d194d3ed7038a451498d8531fe` |
| Inventory | `35e21ffb80ea433cadd6d925b078a3dae7107cf61675b6c4c503c052a5b42219` | `93f776bfeb7c3b0543e4fecf22dc033de95db96a49446cc7edaefd0581bbd62f` |
| Promotion | `aec5866474bd10f62de0cb1c0683f29f06696aee4d00b8ca1667a835c2272bc9` | `3340c54fb6f9896a74297e99f056a9204cf3d61757c45d40c156cdbfc32106b5` |

Corrected live qualification then passed for separate
`local-policy-casfixed-20260928-{pricing,tax,inventory,promotion}-v1` and `-v2`
publications: eight normal completed Process workflows, second publications
ONLINE then ROLLED_BACK at lifecycle revision 8, and pointer revisions advancing
1 -> 2 -> 3 -> 4. Three receipts per domain are applied with expected revisions
1, 2 and 3. Owner-service readback at 18:29:30 Asia/Dubai returned the original v1
policies after rollback and separately confirmed that the old four failed
fixtures were unchanged. Delivery remains disabled with empty configured roots.

Product `local-product-selfcontained-20260928-a` recovered ONLINE at revision 12,
retaining `:activate:5`, source version 1. Its successor `-b`, source version 2,
reached ONLINE revision 6, then ROLLED_BACK revision 8. Secured publication reads
and the rollback response evidence committed receipts and restoration of target
`f7118f6dd97ef5d57d4e30c78823b0216b57710c0d2a44244c9da25c700ff9bc` from
`f73ef1edcefda7a018e220e9d18252c9710c16bea922b8c36a1ffb96b875cdf5`.
No independent Product pointer revision readback or public discovery is claimed.
Earlier failed Process history is retained, not rewritten as success.

Scoped Media live qualification passed using `local-media-20260928-mulaw0bx`.
Publication `local-media-20260928-mulaw0bx-a` first committed its target but failed
to persist a null optional predecessor. nPublish now uses atomic unset for absent
optional typed fields while retaining explicit null lineage in receipt/journal
evidence. Scoped retry and renewed Process approval recovered ONLINE at revision
12, replaying the original `local-media-20260928-mulaw0bx-a:activate:5` operation
and receipt `65fe6b3b6e100429c93c07fa432a2dec6ad29cd13dfbb5a8519df301eb62bbdc`.
The successor `local-media-20260928-mulaw0bx-b` received normal approval and delivered
version 1 bytes; governed rollback reached ROLLED_BACK revision 8 and restored
version 0 bytes while Staged retained version 1. Rollback receipt:
`29489f7fc81e5de2c134e7d8af58beacd3bbc187f055ac089bc999bec4e543c9`.
Original byte checksum: `2eb6ac1569b6dd6d9680b095592baa744d9a29db7ff5a7dfcdc505ee56f06826`.
Both delivery responses used `no-store`. Fixtures are retained, not deleted.

Known limits: the broad operations reconciliation endpoint invokes CMS outbox
processing beyond a supplied publication code; it was not used. Product's
activation-backed discovery switch is runtime-wide, so it remains disabled to
avoid hiding other, unqualified catalogues. These are separate from successful
Media qualification and must not be described as completed global delivery.

#### Remaining Actions

1. **Customer delivery qualification:** Product and the four policy owners must
   qualify their real consumer APIs with bounded deployment selections. Product
   needs a store-scoped rollout strategy before enabling its runtime-wide reader.
   Verify unselected catalogues remain available and live stock, reservations,
   coupon state and consumed budgets remain authoritative. Target receipts alone
   do not close this gate.
2. **Incomplete fixture recovery:** define and qualify an owner-supported repair
   or retirement path for the four original revision-zero policy pointers and
   unapplied receipts. Recheck exact current state and recovery evidence first;
   never patch counters directly, weaken receipt validation, repeat completed
   human tasks, or rewrite failed history as success.
3. **Scoped reconciliation:** nPublish/CMS must honor an explicit publication
   scope before processing outbox work. A Media-only request must not process
   unrelated CMS events. Add negative scope tests and verify bounded live effects.

The updated developer checklist is documentation release 0.8.4 in the new
`core-v004` tree. Previous release bytes are retained. Source/generation validation
does not claim that this documentation release has been installed or published
Online. Framework owner contracts contain the reusable concurrency, authority,
payload-binding and retention rules; Kickoff retains only adoption guidance.

#### Final Verification

- `npm run test:basic` and `npm run test:full`: final stable-source runs exited 0.
  Both execute the new managed-mutation layering regression; its optional live
  case is separately verified with the explicit local URI and zero skips.
- Framework documentation, copyright, generated-context validation and the
  governance suite passed. The new regression is registered in basic/full and
  protected by the suite-coverage contract; it is not merely a standalone test.
- Project documentation and ownership gates passed. Agora 14/14, Circa 42/42,
  and multi-domain application contracts 14/14 passed; project qualification and
  selected composition checks passed. These are not storefront browser evidence.
- All ten native Local backends are ready under normal supervisor 31934; runtime
  deployment grant acceptance verifies all ten. No Docker execution, database
  reset, operational stock/reservation/coupon/budget restore, commit or push.
- Reviewed paths pass `git diff --check`. Framework HEAD is
  `cf6ff1980349af6671b15e5aadebee33e4afc555`; project HEAD is
  `c759c1832a86902488b7689492c67ace770f19df`. Both have uncommitted work. This
  verifies the scoped working-tree batch, not unrelated changes or a clean-SHA
  production release.

### Coordinated Migration And Publication Qualification

2026-09-28, authorized maintainer batch: **Installed Product migration complete;
publication implementation tested; final basic/full gates passed.** This entry supersedes the
earlier statements that the outage and installed migration had not started.

Under the verified native-local outage, six Product source collections in
`kickoffLocalCommerceStaged` were backfilled to version zero: Product 73,
localization 146, variants 479, variant localization 958, categories 2 and category
localization 4. All 1,762 BSON record hashes and replacement unique indexes were
verified. The same six empty collections in `kickoffLocalCommerce` had their
indexes transitioned and verified. No records were deleted or schema reset run.
The completed ImportRun journals have revisions 39 and 19 respectively. Reviewed
plan checksums are `60c0ceb139036a37cea2f6796564d219a7728b8185c1d6fc7a2ba02229148ddd`
and `014ef5355069ff393b3c4168a3701ce57b244c1ee3e6765453c32f0c9e716558`.
A separate primary-majority readback verified all twelve collection copies before
runtime reopening. Local MongoDB identifies itself as replica set `nodicsLocal`.

Reusable orchestration and CLI belong to nDatabase/database; BSON/index effects
and durable persistence qualification to mongodb; strict linked migration evidence
to the existing nImport ImportRun owner; offline composition to nConfig; outage
inspection and suite registration to nTooling. No project migration engine, journal,
lock, domain acceptance implementation or copied provider configuration was added.
Kickoff changes are limited to this evidence and two Local Commerce deployment
opt-ins for `vMongodb` and the framework-owned Product CURRENT schema policy,
plus assertions that these local deployment selections remain effective.
Both effective graphs include vDatabase/vService/vMongodb and all six versioned
CURRENT source schemas. Both selected Commerce generated builds pass.

Migration recovery now requires journaled-majority writes and primary-majority
readback. Inconclusive port probes fail closed. A completed migration is never
reopened: explicit pre-reopen compensation verifies unchanged target state and
creates a linked rollback journal. Isolated replica-set tests cover interrupted
recovery and completed compensation without modifying application data; 34
durability/journal/integration checks passed with zero skips.

Product, Pricing, Promotion, Inventory, Tax and Media own their retained capture,
target transport, governed callbacks and delivery integration. nPublish retains
the activation operation and predecessor revision; v1 target receipts are opt-in,
preserving existing CMS compatibility. Live stock, reservations, allocations,
coupon state and consumed budgets are excluded from policy publication/rollback.
New workflow definitions use forward releases, not historical checksum rewrites.
Independent review exposed stale-receipt and Media approval/reconciliation defects;
all three were fixed and independently rechecked with 73 focused tests and branch
probes. Source capture now also checks effective versioned CURRENT models, not
merely a qualification flag. Additional versioning policies remain disabled and
apply only to the owning policy/Media metadata schemas, never operational stores.
Six real replica-set Media checks passed, including atomic failure, competing CAS,
response loss, retained rollback and rejection of invented publication intent.

Final verification: documentation and ownership-language gates pass; Agora
application tests 14/14, Circa 42/42, multi-domain application tests 14/14 and
application configuration/route-security tests 19/19 pass. The nine-page project
documentation check passes.
Initial basic/full runs stopped on stale generated inventories/new-file headers
and API exposure ownership declarations. After those corrections and final source
generation, both `npm run test:basic` and `npm run test:full` exited successfully.
The known file-level documentation failure is fixed. These contract tests do not
establish live governed activation. Provider registrations remain disabled pending
installed-source/index, runtime-authentication and Process acceptance evidence.
All ten existing Local backends are running and ready under the normal topology
supervisor. Authenticated Product safe-search and installed-index APIs passed for
all six schemas on both Commerce runtimes: exact expected Staged counts, zero
missing versions, correct version-qualified unique indexes and zero Online source
records. This is installed read/index acceptance, not an approved publication.
Startup initially rejected an empty Product release directory left by the workflow
move; removing only that empty directory fixed discovery without rewriting data.
No Docker, database reset, deployment-grant bypass or direct Online restore is used.

Developer entry point: the framework database README links the
`installed-version-migration` owner contract and example; the canonical Foundation
schema-data-modeling guide links the same procedure. Domain READMEs/contracts
describe exact capture, activation, receipt and operational-data boundaries.
Scoped semantic placement review: PASS. Shared persistence, recovery, composition
and workflow mechanics remain with existing Foundation owners; domain payloads,
policy boundaries, target operations and their tests remain with the corresponding
Commerce or Media owner. Kickoff contains deployment selection and application
adoption evidence only. Existing unrelated changes were not reverted. This review
does not certify unrelated dirty-worktree changes or replace live activation tests.

Outstanding installed qualification: Pricing `priceBook`/`priceRow`, Tax
`taxPolicy`, Inventory `warehouse`, Promotion `promotion` and Media `media`
metadata require separately reviewed Staged migrations. Online operational
collections stay unversioned. Promotion must retain separate Staged policy and
operational budget authority. Earlier read-only Commerce plans counted 77/2/4/6
records but must be regenerated after the new schema-policy declarations; do not
execute their stale checksums. The user has been asked whether to include these
additional local migrations. Provider/reader registration, scoped cross-runtime
connections and grants, workflow installation, real approval, response-loss and
rollback acceptance remain pending. No all-domain live-ready claim is made.

### Versioned Update Selection Safety

2026-09-28, authorized framework maintainer implementation: **Update-selection
guards pass; installed migration remains open.** Outcome: prevent history-row
duplication and stale retargeting before Product versioning is enabled. Reviewed
the existing vMongodb persistence/read methods, base MongoDB transaction adapter,
owner contracts/tests and nImport history writer. Reuse is through existing
model methods; no customer behavior, route, lock or parallel journal was added.

The regression test first reproduced two successors for one logical identity.
The correction selects the highest matched version once per scalar identity,
then rejects if its latest stored identity/version has changed or disappeared.
Invalid/projected identities, logical-key renames and supplied storage IDs reject.
Provider arrays/records remain untouched; successors discard old storage IDs.
Latest lookups use simple collation and carry the trusted transaction context,
as does insertion. Duplicate-key conflicts propagate without automatic rebase.

Compatibility is intentionally fail-closed: queries matching only older history
no longer silently modify the newest version. History pagination is unchanged;
this does not implement current-record mutation pagination. Concurrent safety
still requires qualified unique indexes. Bulk insertion can partially succeed
outside a transaction; this is not an atomic lock or full save-path qualification.

Validation: focused versioned persistence and service response checks pass;
the isolated MongoDB read/update fixture passes (five tests, zero skips),
including actual deduplicated insertion and stale-version rejection. Its unique
temporary database was removed. Complete governance, generated context and
ownership checks pass. Documentation governance still fails only on the recorded
nTooling/test/projectRuntimePreparationContract.test.js missing file-level comment.
Basic/full suites and application lifecycle acceptance were not rerun.

Placement review: PASS for one existing vMongodb source file, two owner tests,
four owner guidance files, regenerated context and this project evidence pair.
Pre-existing changes remain intact. No application data/indexes, schema selection
or runtime bindings changed; the approved Product-writer outage has not started.
Next: strict acknowledged migration checkpoints, scoped backfill/index transition
and recoverable execution. nImport's existing best-effort recordRun remains
unsuitable as a write-ahead checkpoint; no claim is made that it was corrected.

### Current-Version Authoring Read Qualification

2026-09-28, authorized framework implementation: **Read prerequisite passes;
installed Product migration and publication activation remain open.** Shared
selection belongs to nService/vService, secured dispatch to nDatabase/database,
and MongoDB aggregation to vMongodb. No customer implementation was added.

Schemas can explicitly select `versionedReadMode: CURRENT` after migration
qualification. Omitted/HISTORY selection preserves existing behavior. Selection
is validated before cache lookup; request options cannot override schema policy.
An explicit nonnegative integer versionId retains exact-history access. The base
authorization, tenant, ownership, population and response pipeline is reused.
The provider selects the newest logical record before applying mutable business
or ownership filters, then computes bounded pages and counts. Simple collation
preserves distinct logical codes. Invalid capabilities, options or result
envelopes fail closed. This is an authoring view, not Online activation or an
immutable multi-resource publication snapshot. Adoption requires appropriate
cache invalidation and workload qualification. No schema has opted in yet.

Verification: both new owner test files pass with the explicit local MongoDB
fixture (10 tests, zero skips). The live test creates and removes only its unique
temporary database; it checks paging, history exclusion, exact-version access,
case-sensitive identities and unchanged fixture history. Focused existing
database/service/CMS contracts and tooling registration checks pass. The complete
governance suite, generated-context validation and ownership gate pass. Basic
and full suites were not rerun in this batch. Full documentation governance still
fails on nTooling/test/projectRuntimePreparationContract.test.js, whose missing
file-level documentation was already recorded in the preceding batch.

**Maintenance decision:** the user approved a verified local maintenance outage
for the first Product migration, with every Product-writing runtime kept offline
through backfill, index changes and recovery checks. The outage has not started;
no application records, installed indexes, schema flags or runtime bindings were
changed in this batch. Do not add a new cross-runtime write-lock authority.

The read-only migration review identifies these remaining implementation gates:

- Reuse nImport's existing importRun authority, but first provide strict,
  acknowledged, CAS-fenced migration evidence. Its current best-effort history
  writer is not a durable write-ahead checkpoint. Data-release installation
  receipts must not be relabelled as schema migrations.
- Establish a scoped maintenance execution path without normal startup
  reconciliation/imports. Verify every writer is stopped, not just one process
  lifecycle response or a configured HTTP port.
- Persist an immutable plan and original index/record evidence before effects;
  perform bounded conditional versionId=0 backfill without changing business
  revisions, timestamps or payload. Reconcile interrupted batches by postimage.
- Qualify ordered index transition and recovery across all six Product source
  schemas, including localization uniqueness. Existing all-tenant index fanout
  and best-effort rollback hooks are not substitutes for scoped recovery.
- Qualify versioned mutation selection/concurrency before opt-in: existing
  updateVersionedItems reads raw history and can select a logical identity more
  than once. The new CURRENT read path does not fix mutation semantics.
- Complete exact immutable source capture, nPublish/Process activation and live
  approval/rejection/retry/rollback/Online delivery acceptance. Keep operational
  balances, reservations, coupon state and consumed budgets outside publication.

### Installed Versioning Safety Qualification

2026-09-28, authorized maintainer implementation: **Source safety guards pass;
installed migration and Product end-to-end publication remain open.** The outcome
is to preserve installed catalogue history before enabling publication providers.
Readiness review covered root/owner contracts, vDatabase schema composition,
MongoDB model startup/index reconciliation, versioned persistence, existing import
tests, Product publication orchestration and existing CMS migration boundaries.
No reusable installed-version migration operation was established by that review;
CMS migration and Commerce migration evidence are not substitutes for one.

Two regressions were reproduced before correction: persisted missing/invalid
version IDs were accepted, and reconciliation dispatched a plan against installed
non-versioned uniqueness. Changes stay in MongoDB's existing model handler and
vMongodb's existing model methods, with their independent tests and guidance:

- Stored IDs must be nonnegative safe integers; missing IDs require explicit
  migration rather than silently becoming an initial version.
- Updates derive the successor from stored identity, not a patch's versionId.
  Exhaustion rejects; identical maximum-ID replay still performs no write.
- Malformed history rows reject, and constructing a successor does not mutate
  provider-returned history objects. A preparation failure prevents batch insert.
- Versioned index reconciliation rejects installed unique indexes without
  versionId (except intrinsic _id), regardless of cleanup selection. Desired
  unique indexes must also include versionId. Startup rejection occurs before
  index-plan dispatch or validator refresh. Ordinary schemas retain their path.

Compatibility impact is intentional: formerly implicit conversion of installed
ordinary records/indexes now fails closed. There is no configuration bypass, new
registry, lifecycle, route, driver client or project implementation. Existing
exported model/provider methods remain the later-layer extension points.

The first basic-suite run also caught a hardcoded administrative group in the
inspection service from the preceding batch. Corrected that related finding by
delegating to the existing nAuth identity-governance service and layered
administrativeGroups policy, retaining human/tenant/permission checks and the
independent HTTP route guard. Default, replacement, empty and missing policy
tests pass; the extensibility boundary regression now passes independently.

Placement/scope review: PASS for three owner source files, three existing test
files, nine owner guidance files, generated contexts and this evidence pair;
pre-existing changes were retained. Eleven distinct focused test files pass across
database, versioned service, CMS, import and Product search coverage. LLM and
ownership validation and whitespace checks pass. Full documentation governance
still fails solely on the previously recorded nTooling test. The basic suite
passes on rerun after the identity-policy correction; its optional live Redis
provider check was not executed. No installed records, indexes,
runtime roles, schema flags or domain provider registrations were changed.

A read-only in-memory composition probe also passed for all six Product source
schemas using the real vDatabase composer and MongoDB option builder. Each
produced unique code/versionId identity; Product, Variant and Category
localizations additionally produced their owner/locale/versionId compound
indexes. Publication evidence and search projections stayed unversioned, and
the source declarations remained unchanged. This qualifies proposed index
composition only, not installed migration or activated runtime behavior.

Next implementation remains an explicit owner-supported migration with retained
provenance, write-conflict handling and recovery evidence, plus single-current
authoring-read semantics. Product's existing loader reads mutable current rows;
its projection snapshots do not capture a complete immutable catalogue graph.
Do not enable Product versioning/provider registration until those prerequisites
and the previously listed exact capture, target activation and delivery tests pass.

### Installed Inspection And Confirmed Publication Scope

2026-09-28: **Inspection complete; installed migration and domain integration
remain open.** This supersedes the pre-live readiness note below. The user
confirmed catalogue/policy/configuration-only publication and rollback. Live
stock, reservations, allocations, coupon state and consumed budgets must remain
untouched. The framework nPublish, Promotion and Inventory contracts now record
this boundary; it does not imply implemented domain activation.

The existing database controller/facade/service/provider chain now exposes
secured, read-only installed-index inspection. MongoDB reconciliation honors
explicit false cleanup, fails on index-discovery errors and completes drops
before starting replacement creates. Seven focused database/versioning/CMS test
suites pass, as do generated-context, ownership and whitespace checks. Full
documentation governance still fails on the unrelated untracked nTooling test
noted below. No new full-suite or live publication acceptance pass is claimed.

Live evidence: 39 successful schema/runtime inspections; five WCMS Online reads
were denied by its existing schemaMaintenance policy, which was not broadened.
All inspected models were unversioned. Commerce Staged has 73 products, 146
product localizations, 479 variants, 958 variant localizations, two categories,
four category localizations, four price books, 73 price rows, six promotions,
320 coupons, four warehouses, 479 balances and two tax policies. These populated
records lack versionId. The other four inspected Commerce Staged schemas are
empty; all 17 inspected Commerce Online schemas are empty. Media Staged has 20
unversioned media records and four empty artifact/manifest/placement/receipt
schemas. Unique code indexes, plus localization compound indexes, are not
version-qualified. Full bounded evidence is retained in the paired JSON.

Unauthenticated inspection returned 401; inactive owner inspection returned 404.
Counts are separate observations, not an atomic snapshot or full identity audit.
No migration, index rebuild request, schema switch or provider activation was
issued. Normal local startup is not a byte-for-byte no-mutation guarantee. The
test topology has been stopped; pre-existing MongoDB and Redis were left alone.

#### Remaining Domain Work

| Owner | Next implementation and qualification |
| --- | --- |
| Product | Exact immutable catalogue dependency closure, version-qualified search, hidden target preparation and activated serving selector. |
| Pricing | Exact price-book/row versions and consistent activated reads, including Cart calculations. |
| Promotion | Separate policy from coupon state and consumed budgets using existing operational authorities; prove rollback cannot restore consumption. |
| Inventory | Publish warehouse configuration only; prove stock, availability, reservations and allocations survive activation and rollback unchanged. |
| Tax | Retained exact policy versions and activated calculation reads. |
| Media | Retain immutable bytes as well as metadata; qualify hidden preparation, delivery activation and rollback to retained bytes. |

First qualify an owner-supported installed migration and permitted Media Online
inspection. Then reuse existing versioned persistence and domain transport,
nPublish and Process for exact capture, durable target receipts, optimistic
activation, replay/reconciliation and retained-version rollback. Existing restore
commands are not qualified providers. Finally run live approval, rejection,
retry, rollback and actual Online delivery acceptance. Thus steps 2-4 remain open,
and step 1 has inspection evidence but not completed migration qualification.

### Four Publication Steps: Migration Gate

Pre-live placement review: PASS for the bounded inspection/reconciliation batch.
Database owns the existing controller/facade/service/router extension; MongoDB
owns installed index/count reads and ordered maintenance. Independent owner tests
cover human admin/permission denial, authenticated tenant/master-channel selection,
unavailable owners, callback delegation, no inspection writes, failed discovery,
explicit cleanup false, delayed/failed drops and count validation. No domain
provider, schema-version switch or project-owned mechanism was introduced. Six
focused versioning/CMS/database suites, ownership, LLM and whitespace checks pass.
Full documentation governance still reports the unrelated untracked nTooling test
recorded below. Local topology is started only to read installed evidence through
the authenticated API; this does not authorize an index rebuild or data migration.

2026-09-28: all four steps authorized, with existing owners reused and no implicit
data reset. Before installed-version qualification, the MongoDB index provider
must honor explicit no-orphan-cleanup, reject failed index discovery and await
all replacement drops before creating indexes. Source review found violations
of these existing contracts in `createIndexes` and `executeIndexPlan`. The
bounded correction stays in that provider and its independent tests/guidance;
no schema switch or live migration will run until this gate passes. Domain
source-capture/activation reviews run separately against existing Commerce and
Media owners. Scope, installed compatibility, exact source identity, Process
approval and Online delivery remain distinct acceptance gates.

### Commerce Persistence Prerequisite Readiness

Result: **SOURCE PREREQUISITE IMPLEMENTED; DOMAIN INTEGRATION STILL OPEN.**
The existing `vDatabase` initializer now defaults only omitted IDs, preserving
invalid supplied values for validation. `vMongodb` rejects invalid numerical
identities before reads and rejects failed/malformed history envelopes before
inserts. Existing successful saves, replay, updates and compatible direct-array
provider overrides remain covered. The regression reproduced the unwanted read
before the fix. A secondary-history-read failure and transport error also produce
no writes in the independent owner tests.

Validation: six focused suites PASS (versioned schema selection, versioned Mongo
model, versioned service response, CMS publication manifest, content-pack version
reconciliation and versioned import discovery). Generated-context validation,
ownership governance and whitespace checks PASS. Full documentation governance
FAILS on the unrelated untracked
`nodics.foundation/modules/nTooling/test/projectRuntimePreparationContract.test.js`
missing a file-level documentation contract. It was not edited by this batch.
No full-suite or live-acceptance pass is claimed for this new change.

Placement review: PASS for the 11 changed versioning owner source/test/guidance
files, generated contexts and this evidence pair. No customer implementation or
new persistence/approval authority was added. No server start, installed-record
or index mutation, schema activation, Docker run or sample import occurred.
Next implementation boundary remains installed-version compatibility and exact
source capture before Commerce/Media providers can be enabled.

2026-09-28, maintainer implementation: qualify the existing versioned MongoDB
provider before domain integration. Source inspection found that `validateModel`
rejects some invalid input but continues into a read, accepts non-integral version
identities, and `getMatchedItems` maps malformed responses to empty history.
Correct these in `vMongodb/src/schemas/model.js`, preserving its exported override
surface, existing status definitions and valid save/replay/update behavior.
Independent owner tests cover invalid IDs, failed read envelopes, zero writes on
failure, valid empty history and compatible provider overrides. Owner guidance
and generated contexts follow the same correction. No schema selection, index
change, installed-data migration or runtime activation belongs to this bounded
step. Product/Media capture and activation remain open after this prerequisite.

### Current Three-Item Live Results

2026-09-28: **Two live items complete; Commerce/Media remains open.** This
entry supersedes the earlier readiness and four-task observations below without
rewriting their historical evidence.

- **Waste reference adoption: PASS.** Governed Core installation made
  `eWaste:core-reference` and `circa.ewaste:waste-policy` 0.0.1 CURRENT.
  Before installation, 116 installed reference records matched retained source
  releases in their actual installation order. All 29 bounded inspection
  resources were rechecked immediately before installation. Afterwards, all 117
  expected reference records matched and every inspected transaction page
  checksum was unchanged: 23 submissions, 23 evidence records, 11 assets,
  11 ownership events, zero receipts, 16 verifications, 11 impact results and
  zero impact selections. No sample release was replayed. This is scoped Local
  before/after evidence, not an atomic cross-resource migration guarantee.
- **Kickoff documentation: PASS.** Release 0.8.3 was imported through its content
  pack API and approved through normal Process task handling. Publication
  `cmsBaseline_kickoffdocs_0_8_3` is ONLINE at revision 6, target
  `cmsBaseline_kickoffdocs_0_8_3_0_5`, retaining the 0.8.2 previous Online target.
  Authenticated Axis `/docs/nodics-kickoff` renders the actual project overview
  and setup/checklist navigation without observed HTTP errors. Metadata discovery
  uses secured Staged CMS schema APIs; rendered content still uses Online CMS
  delivery. Online schema exposure and grants were not broadened.
- **Process prerequisite: PASS within the stated boundary.** Create-only start,
  immutable start identity and additive stored definition/version claim evidence
  remain in Workflow. An exact replay of completed instance
  `cmsPublicationApproval-325d077702510eba2809bde6` returned its stored result;
  before/after instance and task responses were deeply equal. Concurrent starts,
  changed identities and incomplete starts have isolated tests. This does not
  prove the uninstalled Commerce/Media graphs or cross-domain callbacks.
- **Commerce/Media: OPEN.** Existing role-specific schema policies can select
  existing versioned persistence; no second snapshot store is needed. Installed
  authoring records/index compatibility, exact-version source reads, domain-owned
  activation and graph/callback integration still require implementation and
  qualification before provider registration. Live Product metadata and a bounded
  safe-search page confirm the current authoring surface, not a complete raw
  persistence/index audit. No draft adapter, synthetic approval or direct Online
  write was enabled to satisfy acceptance.

Placement review: PASS for this bounded batch. Workflow owns replay and claims;
Waste owns bounded installed-data inspection using the existing admin group and
`waste.audit.read` permission; CMS owns metadata/content, Axis owns rendering,
and Kickoff retains its documentation release and baseline selection. Historical
documentation payloads remain unchanged. Generated contexts must be regenerated
from these owner sources. Latest focused checks: 42 Process/nPublish/Waste tests,
28 Axis documentation tests and Axis typecheck pass. Aggregate gates are recorded
separately after completion; earlier passes are not reused as current results.

Final focused rerun: 41 Process replay/claim, approval-bridge and Waste inspection
tests plus three workflow-provider selection tests passed. Kickoff `npm test`
passed after the owned topology stopped. Axis changed-file ESLint and Prettier
checks passed. Inventory at 11:00:40 UTC contains 778 files excluding this audit
pair: 756 unchanged, four modified, 18 added and none removed since the 09:55:38
UTC checkpoint. All 367 earlier non-manifest data files are unchanged. The JSON
records the complete changed/added file hashes. Test-owned backends and Axis were
stopped; pre-existing MongoDB and Redis remain running.

Final aggregate result: framework `npm run test:full` **PASS** (exit 0) after
source-derived LLM context regeneration. The initial attempt failed only on the
stale nPublish owned-file inventory; the complete rerun passed. Kickoff's complete
gate and the focused checks above also pass. These passes do not close the
unimplemented Commerce/Media source-version and activation work.

### Three Remaining Items: Implementation Readiness

Continuation placement review (2026-09-28): PASS for the bounded source batch.
Process start identity/replay and additive claim evidence remain in Workflow's
existing lifecycle, schemas and status definitions; no new execution authority
or runtime handler was added. Twenty-eight focused Process/nPublish checks pass.
Waste's owner inspection narrows disclosure and validates inputs (37 focused
checks reported by independent review). Kickoff documentation advances to
0.8.3/core-v003 through its existing generator, preserving all 36 historical
documentation file hashes; the selected customer baseline alone advances.
Axis discovery continues to read canonical CMS product data. Commerce capture
and target activation remain unregistered while versioned persistence reuse and
installed-data compatibility are studied. Local live checks follow separately;
no Docker, reset, sample replay or synthetic publication is authorized.

The user authorized implementation of all three remaining items. Work reuses
CMS documentation authority, Waste owner inspection, nPublish lifecycle and
Process approval rather than adding project-owned engines. Root/module contracts,
the previous live evidence and current dirty source were rechecked. Parallel
workers own disjoint documentation and Waste paths; Commerce domain work is
separate from generic publication integration.

The first bounded generic change adds domain-specific workflow-provider selection
to nPublish alongside its existing adapter/version-provider selection. Existing
global workflow configuration remains compatible; an explicitly configured but
unavailable domain workflow must fail before a transition. Focused tests cover
selection, legacy fallback, rejection and pending-request replay. Domain snapshot,
target transport and reviewer contracts require a separate source-grounded design
before implementation. No new approval authority, broad router enablement, schema
reset or historical data rewrite is authorized by a missing live prerequisite.

Reuse review (2026-09-28): the workflow extension uses nPublish provider
resolution/lifecycle/audit, nService transport and Process start/claim APIs.
The owning publication contract now records this boundary and the framework
test gate includes the approval bridge. Seventeen focused nPublish tests and
eleven CMS/Process regression tests passed. The bridge remains unselected:
Process create-only start/replay, additive stored definition evidence, domain
graphs and live target integration remain prerequisites. Unused provisional
snapshot schemas/configuration were removed after reviewing vDatabase,
vMongodb, nExport and CMS manifest ownership. No runtime, installed data or
approval workflow was changed by this check. All three live items remain open.

The same review rejected draft Commerce/Media adapters that copied common
snapshot validation and target-write mechanics across owners. Those six draft
services, six draft tests, draft-only documentation and unqualified Media
immutable-creation changes were removed without reverting pre-existing work.
Existing Media upload, storage, transfer and artifact regression tests passed
(four tests). Their removal is a reuse/placement correction, not completed
Commerce activation. Safe capture/storage, Process integration and live
qualification remain required before that work is enabled.

### Latest Four-Task Results

The source ownership batch is implemented and independently qualified. Overall
live acceptance remains **OPEN**; the historical findings below are retained as
the original audit, not the latest disposition.

| Task | Verified result |
| --- | --- |
| API exposure reconciliation | PASS. Owner contract/tests match the existing inherited default; authentication and authorization remain separate. No runtime exposure setting changed. |
| Safe forward releases | PASS. Apparel 0.0.8 imports into Commerce Staged. Kickoff documentation 0.8.2 imports and publishes Online through normal Process approval. Old data roots remain immutable and are excluded from active discovery by the owner retention contract. |
| Editorial and reference adoption | Editorial PASS: 1.0.0 is CURRENT after two exact-provenance RETAIN actions; both published definition versions/checksums/provenance are unchanged. eWaste/Circa source compatibility and live core preflight PASS; installed reference upgrade NOT EXECUTED pending the record-comparison prerequisite below. |
| Aggregate and local validation | Framework `npm run test:full` PASS; Kickoff `npm test` PASS when run serially with topology preparation. Circa/Apparel frontend verify and Axis Commerce verify PASS. All ten local backends reached READY. Axis live smoke with documentation and Waste/Location assertions PASS. Browser observations remain narrower than end-to-end business acceptance. |

Live results and remaining work:

- Kickoff publication `cmsBaseline_kickoffdocs_0_8_2` is ONLINE, revision 6,
  target `cmsBaseline_kickoffdocs_0_8_2_0_5`. The exact-site Online CMS resolver
  returns the overview and documentation navigation. Axis documentation 0.0.3
  was separately imported through its normal content-pack API and is CURRENT.
- Editorial's repeat preflight reports ready/skipped and unchanged installed
  definition evidence. No pending Editorial instance existed in the observed
  environment; pending-instance preservation is isolated-test evidence only.
- **Waste migration prerequisite:** live Core validation accepts both exact
  0.0.1 successors and orders them correctly. Installed source receipts are
  recognized, but Waste Material/Core/Submission/Impact package metadata disables
  their routers. Live OpenAPI omits their schema record-read routes, and the
  attempted Material schema read returns 404. Establish an authorized owner
  inspection surface and compare installed policy/transaction references before
  upgrading; do not enable broad routes or overwrite uninspected operator policy
  as an incidental cleanup. No Waste import or transaction sample replay occurred.
- **Commerce capability prerequisite:** the six required domain-specific
  nPublish adapter/version integrations are absent, as documented in Product's
  owner contract. Staged imports are verified; Online publication, safe storefront
  cards/PDP and Media delivery remain BLOCKED. Apparel shows maintenance mode.
- **Documentation UI integration:** authenticated Axis `/dashboard` renders the
  current business dashboard. `/docs/nodics-kickoff` incorrectly selects the
  Framework documentation source and its delivery request returns 404. Fix the
  CMS/BackOffice/Axis source-selection integration without restoring retired
  project-owned capability copies. Exact-site CMS delivery PASS is not a browser
  navigation PASS. One Editorial schema discovery request also returned 403;
  no permissions were broadened for this check.
- Circa's published browser page renders and lists 20 collection centres. This
  does not establish a completed photo-recognition/submission/reward journey.
  Browser checks use the configured `localhost` origins; `127.0.0.1` origins are
  rejected by existing CORS policy and were not added as an acceptance workaround.

Current Kickoff inventory is 760 source files, excluding the two self-referential
audit files: 677 unchanged, 25 modified and 58 added since the 09:16:42 UTC
checkpoint, with none removed. All 312 pre-existing non-manifest data files in
that checkpoint are unchanged. New customer files are release payloads,
descriptors and adoption tests, not relocated generic engines. Framework changes
remain in nImport, nTooling, nRouter, Process, Editorial and eWaste, with consuming
BackOffice/WCMS assertion corrections. The JSON entry records hashes and limits.
No schema reset, Docker execution, emergency approval, direct database access,
commit or remote CI was performed. Test runtimes are cleaned up after validation;
the pre-existing database/cache processes are not owned by this task.

### Final Four-Task Batch Readiness

Latest integration review: PASS for the eWaste/Circa reference successors. The
accelerator owns reusable reference records and its independent compatibility
harness; Circa owns sparse policy overrides, preserved customer identifiers and
application adoption assertions. nImport owns source-key inheritance and retained
release validation. Both complete module suites passed; all 117 original
payload/descriptor files are unchanged. Live reference adoption selects only
`eWaste:core-reference` 0.0.1 and `circa.ewaste:waste-policy` 0.0.1, in dependency
order. It must not install the optional `circa.ewaste:waste` sample successor.
Fresh-destination eligibility for that sample remains an operator prerequisite,
not an importer-enforced guarantee.

Live publication boundary: Kickoff documentation 0.8.2 was imported and normally
approved Online; CMS delivery resolves the overview and navigation. Axis reports
READY/ONLINE. Commerce Staged sample import passed for Apparel 0.0.8, Electronics
0.0.3 and Telco 0.0.3. Commerce Online publication acceptance is BLOCKED: the
framework lacks the required Product/Pricing/Promotion/Inventory/Tax/Media
nPublish adapters and version-provider integration. This is the owning Product
contract's documented capability gap, not a missing-credentials fix. No internal
restore, fabricated receipt or direct Online import was used.

Authorized scope: reconcile API-exposure documentation/tests with existing owner
behavior; implement retained forward releases in nImport/nTooling; qualify
Editorial/Process adoption and eWaste reference compatibility; then run aggregate
gates and local acceptance. Reusable mechanisms and invariant tests remain in
framework owners; Kickoff supplies customer selections, fixtures and releases.
Preserve historical release bytes, installed provenance, pending tasks and all
unrelated dirty work. Do not reset schemas, bypass authorization or run Docker.
Source qualification, installed adoption and live business acceptance will be
recorded separately. This readiness record is not completion evidence.

Bounded pre-live review: PASS for API exposure reconciliation, release-retention
mechanisms, documentation/Apparel successors and Process adoption qualification.
Owner inventory: nRouter owns exposure behavior/tests; nImport owns retained
discovery and installer preflight; nTooling owns generation; Process owns exact
provenance and lifecycle checks; Kickoff owns only release selection and Local
observed transition evidence. Focused negative, containment, immutability and
authorization tests passed. No runtime exposure setting or route permission
changed. A WCMS route-inventory assertion now ignores record serialization order,
while retaining route membership and authenticated-component checks.

Live read-only inspection found Kickoff documentation NOT_INSTALLED and Apparel
commerce NOT_INSTALLED. Both Editorial definitions are PUBLISHED at version 1,
with exact matching execution semantics and historical `processServer:init-v001`
provenance. Local-only RETAIN transitions pin the observed source, target and
published checksums; no transition authority is supplied by HTTP request data.
Three observed Process instances/tasks were completed, with no pending Editorial
instance observed. Pending-instance preservation remains isolated-test evidence
until an actual pending instance is exercised. The Circa migration and aggregate
completion remain separate gates. No import or publication success is implied.

### Coordinated Batch: Integration Results

The remaining findings were handled together by owner, then integrated against
customer composition. This is source-level remediation, not permission to
rewrite immutable data or evidence that a running customer installation migrated.
The original 704-file inventory and finding text below remain historical; the
JSON remediation entry supplies current dispositions and a refreshed inventory.

| Findings | Current disposition |
| --- | --- |
| SUP-01 | Owner startup implementation retained; Local Waste opt-in moved to the Local environment role profile. Live indexing remains separate. |
| SUP-02 | Editorial owns neutral definitions; Process owns exact-provenance retain/forward planning and reviewer assignment validation. Kickoff Int owns the reviewer choice once. New release selection is EXPLICIT, optional and excluded from automatic activation/import. Old Local release retained; installed adoption not executed. |
| SUP-03 | Extracted owner contracts wired into basic/full with reachability protection; customer qualification and multi-domain adoption wired into root verification. Exact-commit remote CI remains pending. |
| SUP-04 | Authored ownership, setup and validation guidance aligned. Published/generated pages remain blocked by APP-04. |
| SUP-05 | Two unreferenced Docker support files removed after workspace reference checks. No Docker execution. |
| CFG-01, CFG-02 | Backend validation no longer requires external frontend checkouts; Axis knowledge is explicit opt-in. Shared environment context is resolved dynamically; Local source choices remain Local. |
| CFG-03, CFG-04 | Previous batch's inherited transport and no-op binding removals retained. |
| CFG-05, CFG-06 | Local notification policy moved to the environment role; shared Engagement opt-ins moved to Kickoff Core's consuming role. Later disablement and unselected roles tested. |
| CFG-07 | Circa experience uses the same inherited eWaste settings as validation; three technical defaults removed. |
| CFG-08 | KEEP_COMPATIBILITY_PIN: inactive illustrative mock configuration is documented; effective OpenAI/WARM failures never implicitly invoke mock. |
| CFG-09 | Published ports and acceptance URLs derive from selected server endpoints; Editorial internal transport uses nRouter. Explicit consumer overrides retained. Container behavior tested offline only. |
| APP-01, APP-02 | DEFERRED_COMPATIBILITY_MIGRATION: released reference snapshots and historical Circa-named profile remain. Dependency order, existing references and installed provenance must be qualified before removal. |
| APP-03 | BLOCKED_FORWARD_RELEASE: historical Apparel header matches no record prefix. Moving selection to a successor while retaining the old root makes nImport discover the old root as an unintended conventional release. No old bytes or hashes rewritten. |
| APP-04 | BLOCKED_RELEASE_RECONCILIATION: generator now rejects immutable drift before writing, supports a forward version/new content path, and uses catalogue.version consistently. Existing ambiguous release/publication history still needs reconciliation; docs:check fails closed. |
| APP-05 through APP-10 | Retain customer identity, fixtures, presentation, source-owned data, generated outputs and compatibility identifiers. These keep decisions are not claims that APP-01 through APP-04 are resolved. |
| TEST-01 through TEST-09 | Domain arithmetic, journey/conversation invariants, importer execution, Product projection, HTTP/route policy and accelerator/Order scenarios belong to owner suites; customer fixtures and adapter choices remain here. |
| TEST-10, TEST-11 | nTooling owns isolated preparation/generated-service drivers; Loyalty/Waste own independent materialization and get/save checks. No schema exposure broadened. |
| TEST-12 | Waste smoke delegates readiness/ownership checks and only reads an already-supervised runtime. Customer live smoke not executed. |
| TEST-13 | KEEP_COMPATIBILITY_WRAPPER: tiny Platform entrypoint preserves its existing all-scenario/argument interface; no copied engine remains. External caller absence was not assumed. |
| TEST-14, TEST-15 | Location owns distance calculation; Communication/nService own manifest activation policy. Project tests retain actual coordinates and selections. |

Additional integration repairs: a stale manifest-generator source assertion now
recognizes descriptor exclusion; URL adoption tests follow declared published
endpoints rather than a copied loopback catalogue; configuration comparison does
not activate a disabled registry. Copyright-only normalization was applied to
missing framework headers, including prior extraction files; released data was
excluded. One unversioned Nexus BackOffice configuration helper received only its
canonical header. These are recorded in the scope inventory, not hidden as moves.

Independent checks passed for Commerce (13), Circa (30), extracted domain owners
(69), generated-runtime/activation owners (7), Process/Editorial/import selection
(24), environment/container profile contracts (13), runtime/container contracts
(8), documentation/source adoption (5), and isolated topology failure cleanup.
The existing private Foundation live test passed build/start/restart/failure
cleanup using disposable dependencies. It is not customer business acceptance.
Local topology preflight passed with database authority explicitly deferred to
runtime readiness; no customer runtimes were started. Final aggregate gate
results are recorded separately below after completion.

No schema reset, installed data mutation, import, approval, publication, Docker
execution, commit or remote CI was performed. Ownership-language quality checks
report zero structural findings but do not supersede the unresolved migrations.
Overall verdict remains **OPEN**, not "everything can no longer be moved".

#### Final Aggregate Verification

- PASS: customer qualification, 30 Node cases plus all subsequent static
  contracts and ten Docker configuration-only preparation scenarios; Local
  preparation, Commerce, Circa, multi-domain, data ownership and Nexus checks.
- PASS: framework syntax, 5,047 files; copyright, 5,046 files with zero missing
  headers; final ownership/principle/reachability and whitespace checks.
- Framework basic execution exposed two further stale fixtures and an existing
  service-export violation. Corrected the manifest source assertion, canonical
  command-shadow fixture and credential helper export shape without changing
  runtime credential policy. Focused checks passed.
- A diagnostic run executed all 295 remaining configured basic steps after the
  completed syntax/copyright checks: 293 passed and two failed. Regenerated the
  ignored developer context through `llm:generate`; `llm:validate` then passed
  for 202 modules. This is not CMS generation or Online publication.
- **INT-01 remains open:** BackOffice's navigation contract expects the nImport
  category to default off, but nImport currently declares an empty category and
  nRouter inherits enabled exposure. The written owner-default/unknown-category
  contract also disagrees with current enforcement. The committed change
  `c4b3d78f6` predates this batch. Reconcile intended policy and effective runtime
  tests; do not broaden APIs or weaken security assertions just for a green gate.
  Category exposure is separate from authentication and authorization.
- **No green aggregate release claim:** framework basic still has INT-01;
  Kickoff root `npm test` stops at immutable documentation drift (APP-04). Full
  framework tests and exact-commit remote CI were not run.
- The refreshed ledger covers 702 current files and all 39 original observations;
  57 current files differ from the frozen audit snapshot, and exactly two orphan
  paths were removed. All 318 inventoried customer data files retain their hashes.
  Audit evidence files are excluded from their own hash inventory. The Local
  supervisor is NOT_RUNNING and all ten runtime listeners are absent, so no
  customer live-readiness or business-journey success is claimed.

### Coordinated Remaining Batch Readiness

Mode: authorized Nodics-maintainer implementation and customer adoption. Outcome:
keep Kickoff limited to application policy, fixtures and deployment selection;
place reusable mechanisms and invariant tests in existing functional/accelerator
owners. Study includes the root-to-owner AGENTS/README chain, nSetup coding and
customer-boundary contracts, the findings below and current source/test behavior.
Reuse existing configuration bindings, importer, workflow provenance, test
drivers and topology supervisor; introduce no parallel loader or authority.

Work is divided by owner across Editorial/Process, configuration, eWaste,
Commerce/import tests and runtime test infrastructure. Documentation and gate
integration remain coordinated here. Preserve dirty work, customer identity,
optional-module isolation, security boundaries, installed identifiers and old
release bytes. Existing release-history contradictions are not permission to
rewrite or reinstall data. Validate independent owner fixtures, customer
adoption, overrides, negative cases and local readiness separately. No Docker
execution, destructive reset or publication is implied. Final dispositions and
evidence will be appended after integration; this paragraph is not sign-off.

First implementation batch, 2026-09-28. The inventory, hashes and original
findings below describe the audit-start snapshot; this section records subsequent
changes without rewriting historical evidence. Overall cleanup remains open.

| Finding | Current disposition |
| --- | --- |
| CFG-03 | Implemented and statically verified: nine inherited transport values removed; effective values, security policy and overrides preserved. |
| CFG-04 | Implemented and statically verified: twelve no-op database bindings removed; all five Agora selections and schema-derived participation checked. |
| SUP-03 | Gate wiring implemented. Existing basic/full suites include the moved tests and guard membership. Kickoff adopts configuration, Commerce and Circa checks. Exact-commit remote CI remains pending. |
| TEST-11 | Partial: stale schema-policy assertions reconciled, service-only reward assessments preserved. Owner boundary suites reuse one nRouter harness. Effective generation-driver extraction remains open. |
| APP-03 | Open: historical Apparel header defect requires a governed forward release; current commerce version 0.0.7 is immutable. |
| APP-04 | Open: documentation version/checksum history needs installed receipt/publication reconciliation. No version bumped or output regenerated. |

The CI workflow now requires repository Actions variable `NODICS_FRAMEWORK_SHA`
containing the compatible framework's full 40-character commit. Missing or
malformed values fail before checkout; no feature/default branch fallback.
Configure it after the coordinated framework changes are available remotely.
The variable was not set and remote CI was not run in this batch.

Validation passed: 17 focused framework gate/extraction tests; 11 final
router/security/gate tests; complete declared Loyalty and Waste suites after
harness consolidation; 13 Commerce tests; 46 Circa tests; final qualification
with 10 node cases and subsequent static contracts; nine documentation pages;
57 project commands; ownership quality with zero structural findings; six
positive/negative CI SHA guard cases; and both repositories' whitespace checks.
The original mixed-test evidence gaps remain open even where suites pass.

Scope review: **PASS for this bounded batch, not final cleanup certification**.
Thirteen original Kickoff files changed within scope, fourteen framework files
own the test/guidance changes, and these two audit evidence files track progress.
No production schemas/routes, live data, imports, approvals, publications or
Docker operations changed. Full framework release gates and Kickoff root
`npm test` were not executed. See the JSON remediation entry for the complete
changed-file list, readiness record and evidence limits.

## Verdict

### Second Remediation Batch: SUP-01

Reusable knowledge startup orchestration now belongs to Copilot's existing
runtime service. Local Platform/Waste retain only late lifecycle delegates.
Source selections, actor labels, rejection text and logging preferences remain
customer configuration; framework defaults and fixed service permission are
owner-controlled. Waste explicitly opts in locally and now respects later
disablement. Docker Waste stays disabled. Existing module initialization timing
and canonical registry/policy/Discovery ownership are preserved.

Verification: all 65 Copilot tests and syntax checks passed; the startup suite
is reachable through basic/full gates; all 46 Circa tests, Kickoff configuration
inheritance and late-hook delegation checks passed. These are offline tests, not live indexing
acceptance. No runtime was started, data indexed, schema reset, publication
approved, Docker executed or generated documentation refreshed. SUP-01 is
implemented and statically verified; other open findings remain open.

**Audit coverage complete; cleanup not complete.** The current snapshot still contains reusable mechanics, mixed assertions, misplaced configuration and unresolved provenance/contract issues. Do not certify that every remaining file is exclusively customer-specific.

This audits every one of the **704 existing tracked and non-ignored untracked Kickoff files** at audit start, using targeted framework-owner comparisons. It is not an exhaustive audit of all Nodics framework source or a live production-readiness certification.

[Full file-by-file ledger, hashes and evidence](final-ownership-audit.json)

## Coverage

| Scope | Files |
| --- | ---: |
| Project support, runtime entrypoints, metadata and documentation | 234 |
| Configuration | 93 |
| Customer runtime source and application data | 332 |
| Tests and helpers | 45 |
| **Total** | **704** |

| Disposition | Files |
| --- | ---: |
| Keep with current owner | 638 |
| Generated customer documentation outputs | 18 |
| Partial extraction or deduplication | 32 |
| Review required before correction | 15 |
| Redundant wrapper candidate | 1 |

There are **48 files with an open disposition**. Partial extraction does not mean moving whole files: some configuration belongs in a different customer layer, and some repeated values should inherit existing framework defaults. The ledger contains 39 observations, including positive keep/provenance conclusions; these are not 39 independent relocation tasks.

The inventory excludes 26 already-deleted paths and 39,992 ignored generated/runtime/dependency/local paths. No ignored path remained unclassified, but their contents were not deeply reviewed. All 704 baseline file hashes remained unchanged during the audit. The audit's own evidence files are outside the frozen inventory.

## Remediation Order

1. **Resolve correctness and gate gaps first:** Apparel search header mismatch (APP-03), immutable documentation release provenance (APP-04), conflicting schema-exposure expectations (TEST-11), and missing canonical verification-suite adoption (SUP-03). Do not broaden route exposure simply to make tests agree.
2. **Extract reusable execution:** Copilot startup ingestion from Local runtime entrypoints (SUP-01); generic Editorial process definitions using a provenance-aware migration (SUP-02). Keep customer selections and reviewer policy.
3. **Split mixed tests:** put reusable assertions and synthetic fixtures with functional/accelerator owners, retain actual project-composition and customer-policy checks. Preserve cases missing from current owner coverage before deleting any project assertions.
4. **Thin configuration by ownership:** remove proven inherited leaves/no-op bindings; correct frontend dependencies and environment coupling; move application notification/enablement policy out of servers. Preserve intentional security/business pins, later-layer overrides and optional feature gates.
5. **Deduplicate reference data carefully:** Circa taxonomy contains 20 exact eWaste reference duplicates, four customer overrides and 28 customer additions. Preserve customer records and installed identities; separately review the Circa-named profile already present in framework defaults.
6. **Reconcile documentation and orphan artifacts:** remove contradictory ownership guidance, repair stale setup references and confirm external consumers before removing unused Docker/helper files.

Each observation below identifies its owner and required verification. Group changes by owner; do not perform a mass directory move.

## Required Retention

- Agora Apparel, Electronics and Telco, and Circa eWaste remain customer applications, not framework accelerators.
- Customer identity, branding, content, catalogues, prices, stock, coupons, collection locations, staff/scope fixtures, business policy and deployment selection remain customer-owned.
- All 16 current Circa runtime source files delegate generic behavior to framework owners; no additional whole-source-file relocation was established. Configuration consumers still require the targeted correction described in CFG-07.
- Empty kickoffApi/kickoffInt and lifecycle hooks remain intentional custom-project extension templates.
- Shared Agora presentation records still reference customer frontend renderers. Exact equality across applications is not sufficient reason to promote them into the framework.
- Customer generated documentation outputs stay with their authored source. Use canonical generation tooling rather than editing generated records.
- Keep means correct on current evidence, not proof that no future partial reuse can ever arise.

## Verification

Passed in this audit:

- Project command validation: 57 commands.
- Ownership quality gate: 4,477 files, zero structural findings before audit consolidation.
- Documentation verification: nine pages and the customer documentation contract.
- Project qualification: four node cases plus static lifecycle, initialization, publication-pin, topology and Docker contract checks.
- Six focused independent framework contract files: 14 tests passed.
- Targeted configuration probes: nine redundant transport leaves preserve effective values; twelve declared Docker Commerce bindings are inert in tested selections.
- All 304 manifest-listed application payload hashes match, including 18 generated documentation outputs.
- Frozen baseline integrity: all 704 file hashes unchanged.

These passes do not close semantic ownership findings. Six inspected framework contract files are not named in the inspected canonical suite configuration. A passing manual invocation is not proof that upgrade CI will execute them.

**Not performed:** live runtime startup, browser acceptance, Docker execution, data import/reset, process approvals, publication, indexing, database checks or installed-release provenance queries. Conflicting schema suites were inspected, not executed. Binary assets were classified by ownership/provenance, not visual content or licensing. Documentation was audited for ownership and selected contradictions, not exhaustive sentence-level accuracy.

## Findings and Keep Decisions

The JSON ledger carries exact source evidence, additional references and per-file reasoning. Paths below link to the first relevant source location.
### SUP-01: Knowledge startup orchestration still lives in runtime entrypoints

Source: [envs/kickoffLocal/platformServer/nodics.js](../../envs/kickoffLocal/platformServer/nodics.js#L38)

Owner: nodics.copilot/modules/copilotKnowledge

Evidence: Both entrypoints enumerate configured knowledge sources, construct trusted SYSTEM/service request context, dispatch ingestion and handle results. Platform requires ingestOnStart; Waste only checks enabled and filters the Circa project. copilotKnowledge already owns ingest/refresh and registry validation, but its postInit only registers providers. These are duplicated capability mechanics, not deployment composition.

Action: Extract an opt-in owner startup ingestion operation with explicit source selection and trusted runtime identity. Leave source identities, source selection and failure policy as supported customer/runtime inputs. Preserve the different current gates deliberately; do not auto-ingest every customer source by default.

Validation: Independent owner tests for disabled/ingestOnStart=false, source selection, trusted context, rejection/partial ingestion and retries; customer tests for exact Circa selections and no unrelated indexing; authorized live indexing separately.

### SUP-02: Generic Editorial Process definitions remain in a Local server data release

Source: [envs/kickoffLocal/processServer/data/init-v001/records/process/defaultEditorialProcessDefinitionContributionData.js](../../envs/kickoffLocal/processServer/data/init-v001/records/process/defaultEditorialProcessDefinitionContributionData.js#L21)

Owner: nodics.wcms/modules/editorial owns default definitions; nodics.process/modules/workflow owns installation/lifecycle

Evidence: The two definitions describe generic editorialApproval/editorialPublication, declare ownerModule editorial, and use framework editorial actions. Framework Editorial already declares the approval definition and action adapters. The release is nevertheless owned by processServer:init-v001. Process persists and checks contributionOwner/code/version/checksum and rejects changing contribution ownership.

Action: Publish neutral defaults from Editorial, leave reviewer queue/business policy overrides in the customer application. Design provenance-aware adoption/migration for existing installations before retiring the Local contribution. Do not rewrite the old immutable payload or rename installed contribution identity.

Validation: Fresh and retained installation, unchanged graph idempotence, ownership-conflict rejection, pending workflow continuity, secured decisions and Local/Docker role composition.

### SUP-03: Canonical tests were moved but declared verification gates do not cover the whole moved surface

Source: [.github/workflows/verification.yml](../../.github/workflows/verification.yml#L33)

Owner: Framework nTooling owns canonical suite membership; Kickoff owns consumed revision and customer CI adoption

Evidence: Kickoff CI pins a feature branch and runs root npm test plus Waste preparation/composition. Root npm test omits test:agora-commerce and module Circa tests. Framework tooling/full suite configuration is explicit rather than all-test discovery and does not reference six new extraction tests: projectConfigurationHarness, projectRuntimePreparationContract, projectTopologyLifecycleContract, projectContainerContracts, publicationOperationsRouteContract, cmsPublicationTargetRouteContract. Focused manual success is not continued CI enforcement.

Action: Wire new owner contracts into their framework suite/release gates and guard suite membership. Add intentional customer suite adoption through the existing project entrypoints and select an explicit compatible framework revision rather than a permanently pinned feature branch. Keep CI deployment choices in Kickoff; do not copy generic assertions back.

Validation: Static gate reachability test plus exact-revision CI evidence. Separate existing framework package test scripts and canonical suites from customer integration coverage; do not infer full enforcement from ownership-language PASS.

### SUP-04: Remaining guidance contains stale or mixed ownership statements

Source: [docs/pages/customization-guide.md](../../docs/pages/customization-guide.md#L97)

Owner: Kickoff owns customer examples; nSetup and capability owners own reusable principles/contracts

Evidence: Customization still directs domain selection to retired nodics.environment.json while configuration guide rejects it. Configuration guide retains extraction history/conventional local script wording. Circa README says accuracy is required while its AGENTS says accuracy is optional. Circa reusable backlog explicitly describes framework/accelerator work, not customer implementation authority. The Circa application contract also says it must not own customer-project policy/branding, contradicting the current customer-module ownership boundary.

Action: Keep customer guides and requirement origins local, reconcile stale claims against canonical sources, move dated extraction history to evidence, and reference owner-maintained contracts/backlogs for reusable behavior. Do not automatically promote a customer's proposed roadmap into a framework implementation contract.

Validation: Source-linked guidance review, docs generation/check and explicit consistency assertions. This finding is documentation alignment, not proof of a runtime bug.

### SUP-05: Two residual Docker artifacts appear unreferenced after frontend separation

Source: [envs/kickoffDockerLocal/docker/frontend.Dockerfile.dockerignore](../../envs/kickoffDockerLocal/docker/frontend.Dockerfile.dockerignore#L1)

Owner: Customer deployment composition; frontend build context belongs to respective frontend; generic infra tooling only if actually reused

Evidence: No corresponding frontend Dockerfile remains in Kickoff. Compose uses an inline Mongo replica-set healthcheck; repository reference scan found no consumer of mongo-healthcheck.js. Backend Dockerfile/Compose otherwise carry customer-specific images, ports, mounts and runtime selections.

Action: Confirm external consumers and remove orphan artifacts rather than moving dead files into framework. Retain concrete Compose/image selections as customer deployment source; extract shared mechanics only through existing nTooling container capabilities when required.

Validation: Static reference audit now; Docker build/start verification deferred per user. No Docker execution was performed.

### CFG-01: Backend configuration retains frontend validation and repository dependencies

Source: [envs/kickoffLocal/config/properties.js](../../envs/kickoffLocal/config/properties.js#L79)

Owner: Frontend repositories own UI tests and frontend lifecycle; environment owns backend CORS; Copilot owns optional knowledge ingestion.

Evidence: K/AGENTS.md final backend-independence rule and envs/AGENTS.md prohibit frontend paths, lifecycle and UI tests in backend configuration. Local tooling.acceptance.browserValidation.enabled=true makes frontend evidence part of backend readiness (F/nodics.foundation/modules/nTooling/src/service/project/defaultProjectPostResetReadinessService.mjs:389,488). kickoffCore enables Axis repository sources and defaults their root to ../nodics.exp/nodics.axis. Docker tooling.container.qualification.hardenedContainers includes axis, nexus, Agora and circa; networkSeparation.publicContainer selects Nexus. Related Local Platform knowledge startup hook is audited by main; this finding covers configuration only.

Action: Move frontend qualification inputs to their frontend owners. Make optional external-repository knowledge an explicit deployment opt-in with no frontend checkout required for backend startup/readiness. Preserve httpHardening.cors and cookie policy as backend security configuration. Coordinate Docker and startup-hook changes with main; do not duplicate its hook audit.

Validation: Source-proven ownership conflict. No browser, container, hook or readiness operation executed. Later correction must prove backend-only startup/API acceptance with all frontend checkouts unavailable and optional ingestion disabled.

### CFG-02: Shared Platform Copilot profile embeds the Local environment

Source: [modules/kickoffCore/config/properties.js](../../modules/kickoffCore/config/properties.js#L1012)

Owner: Customer owns source selection; selected environment owns environment identity and deployment-specific source paths; nConfig owns context resolution.

Evidence: Shared copilot.runtimeRoleProfiles.PLATFORM.core.environment is kickoffLocal. The same selected kickoffCore module appears in both Platform configurations. kickoff-copilot-composition-source paths target envs/kickoffLocal/platformServer/**/*.js even for Docker Local. F/nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService.js supports context.environmentCode; the role-profile projector selects PLATFORM, not an environment. Local ingestOnStart defaults true at line 1035 and is consumed by the main-audited Platform hook.

Action: Retain customerProject, approved source sets and provider choices in the customer profile; resolve environment identity from selected context and place genuinely Local-only source selection at the environment boundary. Keep ingestion execution and service-authority concerns with the main hook finding.

Validation: Static source and both Platform activation declarations checked; no startup or ingestion performed. Require isolated Local/Docker and unrelated-environment configuration comparisons before any correction is accepted.

### CFG-03: Server transport blocks repeat nine inherited framework leaves

Source: [envs/kickoffDockerLocal/wcmsStagedServer/config/properties.js](../../envs/kickoffDockerLocal/wcmsStagedServer/config/properties.js#L93)

Owner: CMS, Editorial and Process workflow own neutral transport defaults; servers retain selected connections and transport-provider opt-ins.

Evidence: Docker Staged repeats cms.publication.workflow.target.{moduleName,connectionType,timeoutMs,maxAttempts}, cms.publication.target.moduleName, and editorial.publication.target.{moduleName,connectionType}. Both Process servers repeat process.publicationDecisionCallback.target.moduleName. Exact defaults are in F/nodics.wcms/modules/cms/config/properties.js:181-197, F/nodics.wcms/modules/editorial/config/properties.js:85-89 and F/nodics.process/modules/workflow/config/properties.js:95-101. Owners are selected through WCMS/Process composition. No compatibility/security-pin rationale accompanies these equal technical values.

Action: Remove only these nine repeated leaves in a separately authorized correction. Keep connectionName selections, publication roles, enabled flags, targetTransportProvider selections and explicit allowedActions replacement. Do not delete the property files.

Validation: PASS: in-memory comparisons using the actual nConfig binding service merge prove identical CMS, Editorial and Process namespace values with the specified leaves omitted. No runtime, provider or data operation. Full active-runtime acceptance remains unexecuted.

### CFG-04: Twelve Docker Commerce selected database bindings are no-ops

Source: [envs/kickoffDockerLocal/commerceServer/config/properties.js](../../envs/kickoffDockerLocal/commerceServer/config/properties.js#L108)

Owner: nConfig owns declarative binding semantics and schema-derived participation; server owns database isolation and genuine module exceptions.

Evidence: Each Docker Commerce file declares six database bindings for domainCommerceCore, apparelProduct, electronicsProduct, telcoCatalog, telcoProvisioning and telcoSubscription without value or otherwise. F/nodics.foundation/modules/nConfig/src/service/defaultConfigurationBindingService.js:395-402 resolves either missing branch to undefined; lines 159-164 omit that binding. F/nodics.foundation/modules/nConfig/src/service/DefaultFrameworkInitializerService.js:1655 derives database entries for active schema owners independently.

Action: Remove the inert declarations if participation is correctly derived; otherwise express an actual supported selection/exception, such as an explicit object value, only after checking the database consumer. Do not activate any module just to justify these entries.

Validation: PASS: actual binding resolver tested both files with all, none, apparel, electronics and telco; database output contains only default in all ten cases. No loader startup or provider connection. This proves no-op declarations, not a database outage.

### CFG-05: Local Engagement server owns the application notification template

Source: [envs/kickoffLocal/engagementServer/config/properties.js](../../envs/kickoffLocal/engagementServer/config/properties.js#L33)

Owner: Circa owns its chosen notification/channel policy; reusable eWaste outcome vocabulary belongs to eWaste; Communication owns template validation and sending.

Evidence: communication.templates.WASTE_REVIEW_OUTCOME_V1 embeds revision, purpose, variable schema, channels and message wording in a runtime server. F/nodics.communication/modules/commsCore/config/properties.js:14-17 provides empty trusted-source/template contributions. F/nodics.accelerators/modules/waste/modules/eWaste/src/service/defaultEWasteOutcomeCommunicationService.js consumes configured templateCode and supplies WASTE_REVIEW_OUTCOME facts; Circa selects that template in modules/circa.ewaste/config/properties.js:646-650. These are application/domain rules, not a listener, database, endpoint or runtime exception.

Action: Move the selected application template into an existing customer-owned ENGAGEMENT role contribution, retaining the Local-only activation boundary. Generic template vocabulary may be a separate eWaste maintainer contribution; do not move Circa identity or bot reference into the framework. Keep provider credentials as governed deployment references. Account for Local Engagement not currently selecting circa.ewaste before deciding the contribution owner.

Validation: Source-confirmed misplaced template. No sending, provider initialization or activation change. Correction needs selected/unselected Engagement tests, template/source allowlist checks, and proof that moving the contribution does not load unrelated Circa capabilities.

### CFG-06: Engagement business enablement is repeated in server layers

Source: [envs/kickoffLocal/engagementServer/config/properties.js](../../envs/kickoffLocal/engagementServer/config/properties.js#L69)

Owner: Customer/project ENGAGEMENT runtime-role policy; server owns module activation and deployment facts.

Evidence: Both servers repeat engagement.capabilities.{testimonial,customerReview,customerFeedback}=true and customerFeedback.enabled=true. Framework nodics.engagement/config/properties.js:20-27 and modules/customerFeedback/config/properties.js:40-45 default these optional features off. Thus these are genuine customer opt-ins, not values to promote to default-on framework behavior. nConfig supports top-level namespace runtimeRoleProfiles in DefaultFrameworkInitializerService.js:1643-1651,1822-1840.

Action: Retain enablement as explicit customer policy in an existing project/application ENGAGEMENT role profile; leave server activation lists, authority, database and endpoints where they are. Do not simply remove the flags or enable features globally.

Validation: Both declarations and owner defaults compared. No runtime execution. Future validation must prove ENGAGEMENT enabled, unrelated roles unchanged, and later deployment disablement effective.

### CFG-07: Circa duplicates three eWaste journey defaults but one consumer bypasses inheritance

Source: [modules/circa.ewaste/config/properties.js](../../modules/circa.ewaste/config/properties.js#L162)

Owner: eWaste owns reusable journey defaults; Circa owns arrival-radius policy, presentation and deliberate deviations.

Evidence: circaEWaste.journey repeats maximumPositionAgeMs=60000, captureTimeoutMs=12000 and nearestCentreCount=3 from F/nodics.accelerators/modules/waste/modules/eWaste/config/properties.js:269-273. defaultCircaEWasteJourneyService.js:22-26 merges the domain defaults, but defaultCircaEWasteExperienceService.js:32 projects settings.journey directly. A config-only deletion would therefore alter the experience payload even though backend validation still inherits.

Action: REVIEW_REQUIRED: preserve these values pending a scoped adapter correction that projects effective domain-plus-Circa journey settings. Then remove equal technical defaults, or document a specific compatibility pin and review trigger. Keep contractVersion, arrivalRadiusMetres, review assignment, deposit copy and Circa identity in the application.

Validation: Both consumers traced and equality established; removal is not claimed safe. Regression must compare experience payload and arrival validation, later customer overrides and invalid/stale location rejection. No location/provider operation executed.

### CFG-08: Circa carries mock impact settings outside its selected provider chain

Source: [modules/circa.ewaste/config/properties.js](../../modules/circa.ewaste/config/properties.js#L611)

Owner: Waste Impact owns mock-provider mechanics; Circa owns an explicit illustrative fixture only when that provider is intentionally selected.

Evidence: The selected provider is DefaultEWasteOpenAiImpactProviderService and the replace fallback list contains only DefaultEWasteWarmImpactProviderService at lines 600-608. The mock subtree contains item weights, factor 1 and circa-illustrative-v1. F/nodics.waste/modules/wasteImpact/src/service/defaultWasteImpactCalculationService.js:97-118 reads the selected provider and does not automatically use mock; defaultWasteImpactMockProviderService.js:164 consumes settings.mock only when called. No current Kickoff test reference to the mock version/defaultWeightsKg was found.

Action: REVIEW_REQUIRED: remove the inactive illustrative block from this production journey contribution or move it to an explicitly selected application test/demo fixture. Do not activate mock as a cleanup technique. Check configuration hashes/provenance and externally supplied later-layer mock selections before removing.

Validation: Selected/fallback source chain and repository references inspected only. External/tenant overrides are outside the audit, so absence of every possible mock consumer is not claimed.

### CFG-09: Configuration retains parallel endpoint and port catalogues

Source: [envs/kickoffDockerLocal/config/properties.js](../../envs/kickoffDockerLocal/config/properties.js#L80)

Owner: Owning server declares endpoints; nConfig projects peer properties; nTooling and Editorial own consumer-side URL construction.

Evidence: Docker tooling.acceptance.urls repeats all ten published server endpoints and hostPorts, qualification.runtimePorts, soak.readinessPorts and resilienceQualification.readyPorts repeat the same ten-port inventory. The selected servers already own browserEndpoint. Both Editorial workflow.processBaseUrl strings copy Process coordinates declared by processServer. F/nodics.foundation/modules/nConfig/src/service/DefaultFrameworkInitializerService.js:1966-1983 offers bounded runtime projection. Existing Editorial adapter explicitly reads processBaseUrl (defaultEditorialWorkflowAdapterService.js:15-18,39-46), and nTooling container qualification consumes its explicit URL/port lists, so these keys cannot merely be deleted.

Action: REVIEW_REQUIRED: replace repeated coordinates with projections from the server owner through existing bindings and consumer URL resolution. Preserve separately intentional subsets (readLoad ports), native-isolation policy, abstract/internal versus browser addresses and explicit qualification selections. Main owns Docker packaging; this finding covers only config duplication and its consumers.

Validation: All repeated coordinates compared with server declarations; consumer dependencies traced. No Docker command or HTTP call. Requires owner-consumer work before deletion; test endpoint changes before resolution and later consumer overrides, including published/internal address differences.

### APP-01: Partial reference-data deduplication candidate: Circa taxonomy repeats eWaste defaults

Source: [modules/circa.ewaste/data/sample-v001/waste/records/circaWasteCategoryData.js](../../modules/circa.ewaste/data/sample-v001/waste/records/circaWasteCategoryData.js#L16)

Owner: Reusable electronic-device reference taxonomy: eWaste accelerator; schemas/operations: nodics.waste/wasteMaterial. Circa policy and legacy customer records remain circa.ewaste.

Evidence: Compared complete evaluated data objects by code and deep equality. Category file: 24 records, of which 8 exactly equal eWaste records, 2 differ only in impactProfileCode (LITHIUM_BATTERY, POWER_BANK), and 14 are CIRCA_* additions with legacySourceId/sample metadata. Item-type file: 28 records, of which 12 exactly equal eWaste records, 2 differ only in impactProfileCode (POWER_BANK_DEVICE, LOOSE_LITHIUM_BATTERY), and 14 are CIRCA_* additions. Exact category duplicates: MOBILE_DEVICE, LAPTOP_COMPUTER, TABLET, DESKTOP_COMPUTER, MONITOR_DISPLAY, CABLE_CHARGER, SMALL_APPLIANCE, MIXED_ELECTRONICS. Exact item duplicates: MOBILE_PHONE, SMARTPHONE, FEATURE_PHONE, LAPTOP, TABLET_DEVICE, DESKTOP_TOWER, COMPUTER_MONITOR, CHARGER, CABLE, EARPHONES, SMALL_HOME_APPLIANCE, UNKNOWN_ELECTRONIC_ITEM. eWaste already owns the generic reference implementation; no new framework copy is needed.

Action: EXTRACT_PART is a prospective split/deduplication disposition, not permission to move or delete whole files. In a separately authorized change, consume the existing eWaste reference records and retain explicit Circa overrides plus all 28 customer additions. First determine whether the repeated snapshot is a deliberate compatibility pin and prove framework-reference installation and import ordering. Preserve released artifacts and use a forward release where needed. Address APP-02 before treating current framework defaults as customer-neutral.

Validation: Completed static AST inspection and isolated, in-memory data-object comparison. Future validation must compare effective category/item-type records before/after, preserve the four impact overrides and core-v001 policy overrides, verify original customer and independent-customer contexts, and retain installed release provenance. No imports, runtime checks or migrations performed.

### APP-02: Framework comparison exposes a Circa-named impact profile; do not promote customer policy again

Source: [modules/circa.ewaste/data/sample-v001/waste/records/circaWasteImpactProfileData.js](../../modules/circa.ewaste/data/sample-v001/waste/records/circaWasteImpactProfileData.js#L14)

Owner: Circa owns its illustrative impact-profile record; eWaste maintainers own neutral defaults and compatibility decisions in the framework comparison files.

Evidence: The customer record is CIRCA_EWASTE_ESTIMATE, named Circa illustrative impact estimate, EXTERNAL_PROVIDER, metadata.sample=true and publicClaimAllowed=false. eWaste independently declares the same code with a Circa label and assessmentUse=ADVISORY_SUBMISSION_GATE, and refers to it from generic category/item-type defaults. The records are not semantically identical. This comparison is evidence of mixed historical identity in the provider, not evidence that customer impact policy belongs in the framework.

Action: KEEP the customer contribution. Record a separate maintainer ownership/compatibility review of the framework profile and its references; preserve existing record identifiers and historical assessment links until a supported migration exists. Do not blindly move the customer profile or rename installed keys.

Validation: Compared both declarations and their taxonomy references read-only. Framework-wide consumers, installed imports and persisted assessments were not audited; no claim that renaming is safe.

### APP-03: Apparel search header points at a nonexistent customer record prefix

Source: [modules/agora.apparel/data/sample-v002/commerce/headers/commerceSearch/agoraApparelCommerceSearchHeader.js](../../modules/agora.apparel/data/sample-v002/commerce/headers/commerceSearch/agoraApparelCommerceSearchHeader.js#L32)

Owner: agora.apparel owns the header and ranking records; nImport owns prefix matching/execution; Commerce owns commerceSearchRule operations.

Evidence: Header entry and options.dataFilePrefix are agoraCommerceSearchRuleData, but the only manifest-listed local record file is agoraApparelCommerceSearchRuleData.js. nImport uses filename.startsWith(prefix), so that filename does not match the declared prefix. A read-only scan of all 21 headers and 163 explicit dataFilePrefix declarations found this single unresolved local prefix.

Action: REVIEW_REQUIRED: correct the customer header binding in a separately authorized, versioned release after verifying installed provenance. Do not move ranking policy into framework code or add a project-local import resolver.

Validation: Static prefix-to-inventory check and inspection of canonical nImport matching completed. Live import behavior was not exercised. Future focused validation should prove this header selects the intended record and retains release checksum/version integrity.

### APP-04: Generated documentation hashes changed without changing an immutable release version

Source: [data/manifest.json](../../data/manifest.json#L9)

Owner: nodics.kickoff owns project documentation and its release selection; nTooling owns generation and nImport/WCMS own release/publication enforcement.

Evidence: Compared working-tree data/manifest.json with git HEAD c759c1832a86902488b7689492c67ace770f19df: documentation remains version 0.0.3 with versioningPolicy IMMUTABLE, while generatedHashes changed. All current 18 generated payload hashes match current files. Matching local hashes does not establish that reusing version 0.0.3 is compatible with an installed or published release.

Action: REVIEW_REQUIRED for the manifest: establish whether 0.0.3 was installed/published before finalizing regeneration. If it was, publish a forward version through the existing source/generator lifecycle. Do not hand-edit generated records, rewrite historical releases, or infer that a local checksum pass permits reimport.

Validation: Read-only HEAD/worktree JSON comparison and SHA-256 validation completed. Installation/publication history was deliberately not queried; no live readiness or release acceptance claim.

### APP-05: Runtime source already delegates reusable algorithms to canonical owners

Source: [modules/circa.ewaste/src/service/defaultCircaCatalogueService.js](../../modules/circa.ewaste/src/service/defaultCircaCatalogueService.js#L13)

Owner: Circa owns endpoint adapters, form/presentation policy, compatibility codes and explicit overrides. eWaste owns catalogue/journey/conversation/valuation/channel mechanisms; Profile, Engagement, Location, Media, Waste, Loyalty and Commerce retain their operations.

Evidence: Read all 16 src files, including every service and controller, router declarations and utility registries. Catalogue and journey compose effective domain methods with customer hooks; guidance supplies fixed customer copy to the domain conversation; valuation supplies rates/error mapping; Telegram delegates proof/origin handling. Registration forwards form fields to Profile; contact maps a Circa form to Engagement. Marketplace overrides only list projection. Empty appConfig/enums/utils files are intentional extension points. No retained implementation of the extracted catalogue, arrival-distance, conversation persistence or valuation algorithm was found in current source.

Action: KEEP all 16 runtime files. No additional reusable-code MOVE or REMOVE_DUPLICATE candidate is established by the current snapshot. Preserve customer hooks, trusted service selection, route authorization and compatibility mapping when adopting framework releases.

Validation: Full customer source read and targeted comparison with named framework services completed; not a complete framework correctness audit. Configuration composition and tests were excluded by task assignment; no runtime execution or live acceptance.

### APP-06: Shared Agora presentation records are customer-owned despite exact duplication

Source: [modules/agora.apparel/data/sample-v001/content/records/agoraApparelSharedTypeCodeData.js](../../modules/agora.apparel/data/sample-v001/content/records/agoraApparelSharedTypeCodeData.js#L22)

Owner: Agora applications own agora.* presentation bindings, types, group, template and slot contributions. WCMS owns the generic schemas and publication mechanism.

Evidence: Deep comparison finds the same 31 type-code records, 31 renderer bindings, one component group, one slot and one template in each of the three Agora packs (65 shared record definitions per application). These refer to agora.* frontend renderers and customer storefront composition. Targeted framework source search found no canonical agoraStorefrontPageTemplate/agoraHomePageType/agoraStorefrontDiscoveryGroup record owner to substitute. Application ownership contracts explicitly retain this data in Kickoff.

Action: KEEP. Exact cross-application repetition can motivate a separately designed customer-owned shared pack, but is not proof of framework ownership or safe deletion. Any consolidation must preserve independent application installation, manifest dependency resolution, publication versions and renderer compatibility; do not move entire Agora data modules to accelerators.

Validation: Compared every record in all 15 shared-definition files and checked framework owner declarations. No dependency/publication migration designed or run; immutable content releases remain intact.

### APP-07: Application data, descriptors and assets remain with their source owner

Source: [AGENTS.md](../../AGENTS.md#L3)

Owner: nodics.kickoff and the respective agora.apparel, agora.electronics, agora.telco or circa.ewaste customer application; schema/service ownership remains with the relevant framework or domain accelerator.

Evidence: All four application manifests and seven release descriptors were parsed. Capability metadata identifies APPLICATION, Circa customer policy or the Sunmarke PROJECT_EXTENSION; REFERENCE/sample labels and owningDomain values such as profile/location/waste/loyalty describe lifecycle or destination, not a transfer of customer source ownership. Circa core policy intentionally overrides MOBILE_DEVICE and EWASTE_DROP_OFF_STANDARD and adds customer impact/acceptance policy. All 304 manifest-listed payloads are present, checksum-matching and claimed; no orphan payload was found. All 114 image/vector asset files are included individually, with their owning application and release. Same-byte images and v2 identities are not sufficient evidence for removal.

Action: KEEP customer catalogues, localized product/variant data, prices, inventory, coupons, search selections, site composition, workspace copy, staff/scope fixtures, collection locations, media and descriptors. Consume framework/domain schemas and governed operations. Do not infer ownership from a familiar generic schema, display group, reference/demo label or current import destination.

Validation: Exhaustive tracked plus untracked non-ignored inventory, static JS/JSON inspection, asset-manifest membership, file SHA-256 and basic file signatures. No pixel-content, asset licensing, business-value accuracy or live database validation.

### APP-08: Executable data helpers construct customer records; they are not copied import engines

Source: [modules/agora.apparel/data/sample-v001/content/headers/agoraApparelContentHeader.js](../../modules/agora.apparel/data/sample-v001/content/headers/agoraApparelContentHeader.js#L22)

Owner: Each application owns record construction and manifest selection; nImport and Media own execution, upload, integrity and persistence.

Evidence: Parsed all 206 JavaScript files with Acorn and inspected every data function/call site. Data functions are small header entry factories, cmsAsset/productAsset constructors, component-media record constructors, local asset-manifest mapping, Object.freeze/fromEntries/map operations. The only require calls in data import the owning local asset manifest. No data-tree network/DB client or SERVICE/CONFIG-driven executor was found outside generated documentation text. Circa and Agora media records derive sourceFile and ownerReference from their customer manifests.

Action: KEEP these small data-local functions. Similar object constructors alone do not warrant a new framework abstraction or promotion of Agora-specific purpose strings and customer IDs. Propose an owner-level utility only if an actual reusable contract is established; never relocate the application assets or policy with it.

Validation: Full AST traversal and function-body inspection; isolated in-memory evaluation of the 190 data JS modules with only their reviewed local asset-manifest imports. No project runtime, filesystem-writing import script, network or database was executed.

### APP-09: Root documentation payloads are generated customer outputs

Source: [data/manifest.json](../../data/manifest.json#L22)

Owner: nodics.kickoff owns documentation content; nTooling owns the generator, WCMS owns schemas/publication.

Evidence: The root manifest declares sourceMode=catalogue-markdown-source and sourceAuthority=docs/catalogue.json and lists 18 generatedHashes: 17 record files and one header. The canonical project documentation generator emits the corresponding site, documentation, type, renderer, slot, template, component, page, route and import-header files. Generation does not depend on every file carrying a Generated comment; the manifest/generator provide provenance.

Action: Classify all 18 payload/header files GENERATED. Keep them in the customer project and change authored docs/catalogue sources through the existing generator when separately authorized. Do not count embedded documentation examples as authored runtime logic or move project-specific prose into nodics.docs.

Validation: Read generator provenance and manifest; all 18 payload hashes match. Generation was not rerun, and authored documentation correctness was outside this application-data audit. See APP-04 for immutable-version review.

### APP-10: Customer snapshots and compatibility release identities must survive ownership cleanup

Source: [modules/circa.ewaste/data/sample-v001/loyalty/records/circaRewardLedgerEntryData.js](../../modules/circa.ewaste/data/sample-v001/loyalty/records/circaRewardLedgerEntryData.js#L14)

Owner: Circa owns illustrative customer/employee/scope/transaction fixture inputs; Profile, Waste, Loyalty, Commerce and Location own runtime validation and persistence.

Evidence: Records include sample metadata, legacy source IDs, original ownership/verification/impact references, opening ledger idempotency keys, sample identity credentials and explicit Circa staff scopes. These are fixture values, not generic lifecycle implementations. Circa manifests distinguish LOCAL/LOCAL_PRODUCTION_SIMULATION operational samples from publishable content and use RETAIN for operational/reference data. Current source roots include sample-v003 for Sunmarke location; deleted sample-v001 location paths are excluded from the inventory.

Action: KEEP these customer data records. Do not move illustrative accounts, credentials, scopes, opening balances or ownership history into reusable framework defaults, and do not replay them against an active installation during a refactor. Preserve explicit selected-release identities and obtain real provenance before changing historical artifacts.

Validation: Read complete data structures and relevant manifest scopes; no credentials were used and no live state was read or changed. Fixture password values are intentionally not reproduced in this report. Historical installation/settlement/publication provenance remains unverified.

### TEST-01: Extract eWaste catalogue mechanics while retaining Circa adapter selection

Source: [modules/circa.ewaste/test/circaCatalogue.test.js](../../modules/circa.ewaste/test/circaCatalogue.test.js#L81)

Owner: nodics.ai/nodics.accelerators/modules/waste/modules/eWaste

Evidence: invokeCatalogue delegates effective methods; settings supplies customer policy. Owns selector validation; catalogue at 120 owns filtering, facets, sorting and pagination; product at 183 owns exact lookup. Independent policy/sorting/facets, invalid selectors before reads and cross-kind lookup covered at 8-46. Configured store, read paging/cancellation/repeated-page rejection covered at 25-87; safe offer and stale binding at 90-156.

Action: Extract K 81-120 and 126-265 into eWaste with independent fixtures. Retain K 121-124 customer store binding and 266-288 overlay/controller selection. Preserve explicit 105-product global filtering, page clamp, maximumProducts overflow, coupon expiry/invalid price and safe gallery/terms cases; inspected owner tests overlap but do not establish complete equivalence for those cases.

Validation: Static adapter/source/test comparison only. Before removal, map each moved assertion to an independent eWaste case; retain customer adapter/policy checks. No tests executed.

### TEST-02: Split generic arrival journey invariants from Circa policy and compatibility

Source: [modules/circa.ewaste/test/circaJourneyPolicy.test.js](../../modules/circa.ewaste/test/circaJourneyPolicy.test.js#L76)

Owner: eWaste journey; Circa retains policy, origin and error compatibility

Evidence: Customer settings merge, ERR_EWASTE to ERR_CIRCA mapping, circaOrigin and invocation delegation. position, previewArrival, prepare and confirm own generic journey mechanics. Independent preview, required policy, inclusive radius, stale/future boundaries, evidence preservation, trusted origin, confirmation replay and analysis failure at 90-254.

Action: Extract generic cases in K 76-252 and the algorithm matrix in 256-270. Retain actual nearest-centre-count/queue-message policy outcomes as customer checks, 254-255 configured radius/accuracy policy, 273-278 same-reviewer choice, 280-287 adapter error propagation, and 290-315 merge/origin/later-loaded-method compatibility. Preserve focused ERR_CIRCA mappings locally. Owner coverage is partial: carry ambiguous-centre choice, missing/inactive Location, attach-photo guard and full optional-accuracy matrix into eWaste unless separately proven equivalent.

Validation: Source ownership established; no live arrival or test run. Reconcile each generic case with owner tests without moving Circa defaults, branding or error namespace.

### TEST-03: Guidance suite mixes customer copy with domain conversation behavior

Source: [modules/circa.ewaste/test/circaGuidance.test.js](../../modules/circa.ewaste/test/circaGuidance.test.js#L72)

Owner: eWaste conversation; Circa fixed-message adapter

Evidence: Adapter supplies fixedMessage to domain guidance; arrival/privacy copy is customer-owned. guidance reads draft, enforces revision, calls Copilot and persists canonical history. Independent preserved facts/estimate, revision failure, owner/provider failures, correction routing and pre-draft behavior at 301-430. reply stub always succeeds; throwing conversation.message stub at 47 is not called for the non-correction message at 76.

Action: Keep 57-71 as a customer copy/adapter regression. Move or deduplicate generic 72-92 conversation/history/revision assertions against owner coverage. Do not transfer the 'conversation failure' label as proven fallback evidence: it currently exercises a successful reply, not a provider failure. Retain a thin customer propagation check if needed.

Validation: Static call-path verification; no provider called. Any claimed failure coverage must inject failure into the method actually invoked.

### TEST-04: Weight valuation arithmetic belongs to eWaste, error bindings remain Circa

Source: [modules/circa.ewaste/test/circaRewardValuation.test.js](../../modules/circa.ewaste/test/circaRewardValuation.test.js#L45)

Owner: eWaste weight valuation; Circa policy/error adapter

Evidence: Passes request, customer policy and public error bindings to domain valuation. Owns rates validation, original weight provenance, midpoint/quantity, unavailable impact and rounding. Independent rates, original evidence, precision, failed impact, midpoint weight, unknown input and invalid policy at 237-298.

Action: Remove/migrate domain arithmetic assertions 45-88 using the identified owner suite, preserving exact rounding cases where not equivalent. Keep ERR_CIRCA_VALUATION_POLICY at 89-94 and direct adapter forwarding/actual Circa policy checks. Current P/v2 fixture is synthetic and does not establish actual application rate selection.

Validation: Static equivalence is substantial but exact decimal/quantity outputs differ; preserve any non-equivalent precision case before deletion. No valuation or ledger operation executed.

### TEST-05: Fabricated forbidden Waste record is already covered by wasteCore

Source: [modules/circa.ewaste/test/circaWastePolicyContract.test.js](../../modules/circa.ewaste/test/circaWastePolicyContract.test.js#L74)

Owner: nodics.waste/modules/wasteCore

Evidence: Exact rewardFormula rejection with ERR_WASTE_DATA_RECORD_FIELD; comprehensive forbidden-field matrix at 122-126. Imports the same defaultWasteDataContributionPolicyService as the customer test.

Action: Remove only K 74-78 as an identified duplicate. Keep actual Circa header/record/manifest/checksum validation and resolved names/presets at 38-72; those qualify real customer contributions.

Validation: Exact same owner validator, forbidden property and error code identified statically. No owner or customer suite executed.

### TEST-06: Raw HTTP defaults and publication/Profile route contracts remain in customer security matrix

Source: [test/localPublishingRouteSecurityMatrix.test.js](../../test/localPublishingRouteSecurityMatrix.test.js#L32)

Owner: nRouter HTTP policy; CMS publication/delivery routes; Profile browser-session routes

Evidence: Owns JSON limit/strictness and security header defaults at 56-77. Cache-Control default and middleware/CORS policy covered; 153 covers applied nosniff. Owns target route table and parser; CMS properties line 161 owns 64mb. Covers secured/service-only/internal permission policy, but not every K method/exposure/parser/size assertion. Covers public/authenticated delivery boundaries, not the full K GET/exposure matrix. Owns employee authenticate/restore/logout POST routes at 452-483.

Action: Retain K 29-31 and 39-50 effective customer CORS choices. Extract 32-37 to nRouter, 52-64 and 71-75 to CMS, and 65-69 to Profile. Deduplicate only explicitly covered assertions; add missing exact defaults, route methods/count/exposure, parser/size and browser-route inventory under owners. nPublish publicationOperations tests are not equivalent to CMS target routes.

Validation: Read-only source and owner-test inspection. No full equivalent owner coverage established for every assertion; gate adoption is excluded and belongs to Main SUP-03.

### TEST-07: nImport execution and synthetic rejection contracts are mixed with real release fixtures

Source: [test/agoraProductCatalogReleaseExecutionContract.test.js](../../test/agoraProductCatalogReleaseExecutionContract.test.js#L167)

Owner: nodics.foundation/modules/nData/nImport/import; nTooling for generic test-driver plumbing

Evidence: preflight and execute at 566 own execution; validateDestination at 931 checks declared role/environment. Independent destination compatibility rejection at 136-139; validation-only and CURRENT execution at 163-191; repeat-current rejection at 230-233. Independent batch release-plan and installation count coverage at 298-301.

Action: Keep real release identities, files, lifecycle/destination selections, actual selected profile steps and module-specific plan inputs. Extract generic preflight/no-import/CURRENT/receipt assertions from Agora 186-198,200,211-215 and reusable receipt stubs; extract multiDomain repeat-current rejection at 21 and generic driver setup 6-12. Move synthetic UNRELATED and WCMS_STAGED/COMMERCE rejection probes from guided 104-111 and runtime 88-89. Preserve exact role rejection through an independent owner fixture, not a customer checkout.

Validation: Static owner overlap verified; destination compatibility test is not claimed identical to every throwing validateDestination case. Preserve those throwing/error assertions during extraction; no import executed.

### TEST-08: Product safety and projection mechanics must be owned independently of Agora data

Source: [test/agoraProductSearchPublicationContract.test.js](../../test/agoraProductSearchPublicationContract.test.js#L325)

Owner: Product publication/projection; Pricing customer summary; Inventory availability summary

Evidence: Owns safe payload projection, summaries and tenant/Store/locale identity. Independent sample records cover locale projection count, persistence/indexing, scope and sku/inventory suppression at 71-91. priceRowCode suppression explicitly asserted at 67. SKU/warehouse/quantity suppression explicitly asserted at 55-57.

Action: Keep actual Agora bilingual completeness, coupon fixture closure, currency/stock and Store selection (183-323;330-331;335-339;345-351). Extract publication persistence/write-count mechanics at 325-329,357-358 and generic field suppression at 332-334,340-344,352-356. Preserve integration of safe Pricing/Inventory summaries in the Product owner tests where individual owner tests alone do not prove the combined payload.

Validation: Sources and exact suppression assertions inspected. No publication or search indexing run; independent owner fixtures must preserve all generic assertions.

### TEST-09: Multi-domain qualification includes synthetic accelerator and Order contracts

Source: [test/multiDomainEndToEndQualification.test.js](../../test/multiDomainEndToEndQualification.test.js#L193)

Owner: Electronics validation; Telco subscription/provisioning; domainCommerceCore; Commerce Order

Evidence: Independent number intent, transition and provisioning replay assertions at 19-20. Independent physical partition, compatible bundle and exact incompatible-device rejection at 15-18. Owns port sequence and compensation checkpoints. Independent reverse-lifecycle failure matrix preserves FULFILLMENT/INVENTORY checkpoints and errors. Independent successful RETURN owner-port orchestration; not the complete three-request-type sequence asserted in K.

Action: Keep real Apparel/Electronics/Telco records, validation and composition selections, including mixed actual products. Extract synthetic warranty 193-200, number intent/transition 217-227, provisioning replay 246-255, fabricated invalid bundle 271-284, and generic reversal/compensation 287-334,356-390. Reconcile existing owner coverage and move missing cases. Lines 336-354 merely spread customer page objects and verify renderer/name; retain as fixture identity only, never claim Staged-to-Online publication execution.

Validation: Static evidence; exact warranty success and three-type Order sequencing equivalence not fully established, so those assertions must be preserved rather than blindly removed. No end-to-end runtime qualification performed.

### TEST-10: Remaining preparation and generated-service drivers belong to framework test infrastructure

Source: [test/dockerLocalRuntimePrepare.test.js](../../test/dockerLocalRuntimePrepare.test.js#L79)

Owner: nTooling/nConfig runtime preparation; nDatabase/nService schema generation; domain owners retain canonical schema contracts

Evidence: Existing configuration-only driver resolves selected coordinates and exposure without hooks/providers/listeners. Independent server selection, role isolation, no temp output and invalid-selection contracts. Customer already consumes that owner driver; other preparation suites still inline lifecycle sequences.

Action: Retain customer server/environment/module/port/database expectations. Delegate Docker graph preparation to the existing owner driver. Extract Loyalty/Waste start/initUtilities/loadModules/initEntities/schema-build/generated-service mechanics into framework-owned test infrastructure with independent fixtures. A configuration-only helper is not equivalent to current generated-model/service coverage: preserve that coverage in its owner before narrowing customer checks.

Validation: No preparation, schema build or generation executed. Current sequences can write generated output and cannot be run in this read-only audit. TEST-11 separately records the schema assertion conflict.

### TEST-11: Schema-contract extraction is blocked by contradictory owner expectations

Source: [test/loyaltyRuntimeCompositionContract.test.js](../../test/loyaltyRuntimeCompositionContract.test.js#L98)

Owner: Loyalty and Waste schema owners; wasteCore BackOffice metadata; eWaste reference manifest

Evidence: Owner suite asserts no tenant/enterpriseCode but router.enabled false at 36. Owner suite asserts no tenant/enterpriseCode and router.enabled false at 48. Current schema explicitly enables router and schemaOperations. Current schema explicitly enables router and schemaOperations. Customer expects service/router/schemaOperations enabled at 107-109. Customer expects service/router/schemaOperations enabled at 126-128. Owner navigation targets are already asserted; current customer checks raw capability ID/permission/navigation at 110-113.

Action: Extract generic schema/service/router/scope assertions and raw capability metadata into actual owners, retaining customer composition. Reconcile the conflicting source/test router expectation through an explicit owner decision before any duplicate removal; do not label the existing schema suites equivalent. Preserve generated-service get/save and effective schema materialization coverage. Raw eWaste manifest defaults at K wasteRuntime 134-136 belong to eWaste; retain Circa manifest and release selection.

Validation: Source-level conflict confirmed; neither effective runtime behavior nor suite passing status was tested. The two affected file rows are REVIEW_REQUIRED until schema expectations and missing generation coverage are reconciled.

### TEST-12: Waste HTTP smoke duplicates lifecycle and HTTP readiness machinery

Source: [test/wasteHttpRuntimeSmoke.test.mjs](../../test/wasteHttpRuntimeSmoke.test.mjs#L23)

Owner: nTooling acceptance infrastructure and topology; Kickoff retains Platform/Waste smoke selection

Evidence: Owns port-aware launch with recorded child ownership; response parsing at 118, polling at 169 and cleanup at 196. Independent retry/deadline and caller predicate coverage; reverse owned-child cleanup/escalation at 99-130. Existing topology rejects unknown busy ports and owns launch/cleanup. Independent supervisor ownership and unrelated-PID rejection.

Action: Keep customer selected Platform/Waste readiness targets and smoke assertion; replace generic functions 23-106 and lifecycle loop with existing owner mechanisms or an owner-hosted parameterized suite. Preserve supplied readiness predicate only after checking nSystem semantics: this file accepts success:true as readiness. Do not port hardcoded 4300/4370 or application aliases into framework defaults, and do not convert extraction into permission to start/stop runtimes.

Validation: Static correspondence only; local log-file descriptor and process-group behavior are not proven equivalent to existing helper tests. Add owner-owned cleanup/failure coverage for any retained behavior before replacement. Smoke was not executed.

### TEST-13: Platform preparation wrapper adds no unique coverage

Source: [test/platform-prepare.test.js](../../test/platform-prepare.test.js#L14)

Owner: Kickoff runtime scenario selection; nTooling preparation driver

Evidence: Only executable statement imports runtime-prepare.test. Existing platformServer scenario contains actual Platform assertions; 390-402 supports explicit scenario selection. prepare:platform directly invokes runtime-prepare.test.js platformServer; wrapper is not needed by that alias.

Action: Remove the redundant wrapper after preserving any external invocation compatibility. It currently imports all scenarios without adding a Platform assertion. The canonical customer suite and framework driver remain; this is duplicate customer entry cleanup, not a framework relocation.

Validation: Read-only full file and reference search; no repository source references to platform-prepare were found. External callers were not observable.

### TEST-14: Coordinate fixture test copies the Location distance implementation

Source: [modules/circa.ewaste/test/circaCollectionPointCoordinateData.test.js](../../modules/circa.ewaste/test/circaCollectionPointCoordinateData.test.js#L39)

Owner: nodics.location/modules/locationCore; Circa owns coordinate fixtures

Evidence: Same spherical-distance formula, 6371000 radius and numerical clamps as K 39-51. Independent identical-point, known-degree, date-line, symmetry and antipodal assertions.

Action: Reuse the existing pure Location distance function instead of keeping the copied helper. Keep Motor City/Sunmarke coordinates, comparison distances, hashes and manifest coverage in Circa. Do not move customer records or activate a Location runtime for this pure calculation.

Validation: Exact formula comparison performed statically; no geolocation lookup or runtime call. Existing owner tests cover arithmetic independently.

### TEST-15: Communication activation defaults should be tested at the manifest and registration owners

Source: [test/communicationActivationDataContract.test.js](../../test/communicationActivationDataContract.test.js#L25)

Owner: commsCore release manifest; nService module registration; BackOffice activation projection

Evidence: Defines runtime-defaults; sample-templates section begins at 29. Already verifies exact section names and core/sample types. Independent generated package codes and ACTIVATION versus USER trigger assertions. Independent observed CMS/Media packages exercise owner package projection and trigger preservation.

Action: Retain K 19-24,27,30 as selected-environment adoption, engagementServer routing and absence of a customer duplicate map. Extract 25-26,28-29 canonical package identity/targetModule/core-required/sample-trigger assertions into the owning manifest/registration tests. Preserve required:true and targetModule equivalence explicitly if not already asserted there; no customer source should become an owner test dependency.

Validation: Owner source/test evidence inspected, but full assertion equivalence is not claimed for required/targetModule. No registration or activation performed.

## Final Sign-Off Criteria

Close all open dispositions with a reviewed owner decision or implemented correction. Run the owning independent tests and project-adoption tests through their canonical gates. Validate selected and unselected runtime roles, later-layer overrides and installed-release migration compatibility. Perform authorized local live acceptance separately; Docker remains deferred as requested. Re-run the inventory and record updated hashes before declaring cleanup complete.

Framework-owned tests establish canonical supported contracts, but cannot force a partner to execute them. Enforce supported-release qualification in the maintained CI/release process and clearly distinguish supported extension points from invariant behavior.
