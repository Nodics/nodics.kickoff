# Local publishing operations

## Scope and authority

This runbook operates the `kickoffLocal` Staged-to-Online publishing lifecycle.
It is Local evidence only: it does not approve Development, QA, PreProd, Prod,
physical datastore switching, or Agora. WCMS Staged owns authoring and release
freeze, `nPublish` owns lifecycle transitions, Process owns approval workflow
state, WCMS Online owns deployed visibility, and Axis is the employee control
plane. Nexus consumes Online only.

Operators and automation must use Nodics APIs, generated services, and the
project commands below. They must never repair, seed, version, publish, restore,
or verify content through direct database CRUD. Database credentials and
connectivity are evaluated by runtime readiness; the topology preflight does
not open its own database connection.

## Preflight, start, inspect, and stop

Run from `nodics.kickoff`:

```text
npm run topology:preflight
npm run topology:start:all
npm run topology:status
npm run topology:stop
```

Preflight verifies repository availability and required ports. Startup refuses
busy ports, starts dependencies in order, waits for HTTP readiness, records only
its own process identities, and fails closed if a managed child exits. Stop
signals only the validated supervisor and releases children in reverse order.

## Supported initialization and release upgrade

Use `npm run acceptance:local:fresh` only when a bounded Local reset is intended.
The command resets through the governed Platform API; it does not issue database
commands. Use `npm run acceptance:local` for retained-schema initialization,
content-pack upgrade, repeat installation, and publication verification.

Immutable content-pack files use portable source revision zero. During a
governed content-pack upgrade, nImport reads the latest Staged record through its
generated schema service and supplies the next optimistic revision. A concurrent
writer can still win between read and save; persistence then rejects the import,
and the operator reviews import-run diagnostics before retrying. Ordinary imports
and API writes do not receive this release-only reconciliation.

An upgrade is successful only when the content-pack status is `CURRENT`, the
expected release version and checksum are visible, Staged import diagnostics have
no unresolved failures, publication reaches `ONLINE`, and Online delivery returns
the expected projection. Never resolve an upgrade by changing stored revisions.

## Failure, retry, rollback, and recovery

- A validation or approval rejection leaves Online unchanged. Correct Staged
  content, create or select the intended version, and submit again.
- Workflow timeouts and response loss are retried only through the bounded,
  idempotent Process and publication contracts. Correlation ID and operation key
  must remain stable for the retry.
- A Staged, Process, or Online interruption is recovered by restarting the
  supervised topology and running retained acceptance. Reconciliation resumes
  durable lifecycle and outbox state; it must not manufacture database state.
- A failed deployment is reconciled before retry. If activation cannot be
  completed safely, invoke the governed publication rollback operation and
  verify the prior Online pointer and delivery response.
- Unexpected supervised child exit must stop the remaining topology. Inspect the
  generated runtime logs, correct the cause, run preflight, and start again.

## Import, export, backup, and restore boundaries

Local acceptance proves secured Staged export, checksum and provenance, media-
backed validation/import, tenant rejection, and Online/Process export denial.
This is a logical data portability and recovery exercise, not a physical database
backup certification. Physical backup, restore, point-in-time recovery, RPO, and
RTO require database-provider procedures and non-Local qualification. Restored
authoritative data must be followed by Nodics projection rebuild and API-based
count/checksum reconciliation.

## Observability and audit

Use publication operations and diagnostics APIs to inspect lifecycle state,
failure and stuck totals, safe failure codes, actor identity, correlation ID,
revision, target version, deployment receipts, audit reconciliation, and outbox
delivery. Logs must omit tokens, credentials, provider paths, raw payloads, and
protected business or personal data. Exported evidence is sanitized before it is
shared.

Required Local signals are publication count, failure count, stuck count,
duration per bounded contract, retry outcome, rollback outcome, readiness, and
Online delivery verification. Production queue depth, p95/p99, throughput, soak,
projection lag, alerts, and capacity targets remain external evidence.

## Concurrency, retention, and cleanup

Lifecycle revisions prevent conflicting transitions. Stable publication codes,
operation keys, receipts, Online pointers, and outbox identities make identical
replays converge. Concurrent editors must publish explicit frozen versions;
publishing never means “latest at execution time.”

Previous content versions remain governed history. Online manifests and rollback
references protect required versions. Media cleanup uses retention time, active
and rollback references, batch limits, and legal hold; it removes only expired,
unreferenced publication media through the media service. Generated supervisor
state and import staging follow their owning cleanup lifecycle.

## Qualification and evidence

Run:

```text
npm run qualification:publishing-capacity
npm run qualification:publishing-soak
npm run qualification:security-boundary
npm run qualification:deployment:local -- --include-fresh
```

The bounded capacity suite covers freeze, deployment, activation, delivery,
response-loss retry, rollback, transaction abort, media retention, concurrent
activation/receipt convergence, workflow handoff, publication operations, and
audit reconciliation. The deployment report records command outcomes, durations,
repository commits, explicit external gaps, and an integrity digest. It never
self-approves production.

The Local sustained-reliability gate repeats six publication, workflow,
outbox, reconciliation, rollback, and media-retention contracts for 25 cycles
(150 executions) under explicit elapsed-time and process-memory-growth budgets.
The automated security boundary executes authentication, authorization, cache
mutation, import/export, remote transport, BackOffice, Engagement, publication
authority, and atomic-audit contracts. These close Local regression evidence;
they do not replace production-scale soak or an independent penetration test.

For the isolated `kickoffDockerLocal` production simulation, run the Docker
Local build, start, acceptance, qualification, resilience, interruption, and
soak commands defined in `package.json`. Keep this environment separate from
native `kickoffLocal`; it owns its own ports, secrets, databases, Redis
topology, networks, and Staged/Online media volumes.

The qualified 2026-08-13 closure completed API-only retained-data acceptance,
seven target-release reconciliations, Redis Sentinel promotion with
authentication and publication continuity, a 1.744-second backup/RPO rehearsal,
a 55.420-second restore/RTO against the 300-second Local target, and a 30-minute
soak of 20,088 requests with zero errors, six publication runs, 12 ms p95, 15 ms
p99, and 56 resource samples. This is reproducible Local evidence, not a
production approval. Independent penetration testing and human
assistive-technology review remain external.

Troubleshoot using stable error codes. `ERR_IMP_00003` indicates immutable release
integrity/version policy, `ERR_IMP_00010` is an aggregate record-dispatch failure,
and `ERR_MDL_00004` indicates an optimistic revision conflict. Preserve the
correlation ID and sanitized import/publication diagnostics when escalating.

## Common mistakes

A common mistake is treating a content-pack update as a database migration and
manually changing `versionId`, installed-release history, or the Online pointer.
That destroys the evidence needed for retry and rollback. Another mistake is
starting Nexus against Staged because authoring content appears there first;
public clients must remain Online-only. Do not run multiple unmanaged copies of
the same Local server, kill a PID copied from stale state, reuse an old checksum
under the same release version, or declare success only because processes are
listening. Readiness, authority, workflow, publication, and delivery must all be
verified.

Operators should also avoid interpreting Local contract timing as production
capacity, logical export as physical backup, retryable-phase warnings as final
failure, or an integrity digest as human approval. Inspect the final import-run
and publication states. Documentation source belongs in this project, generated
CMS data comes from the generator, and frontend applications must not become the
authority for content-pack installation or publication state.

## Verification

For a normal retained upgrade, run preflight, retained acceptance, publishing
capacity qualification, and the project test suite. For a deliberate clean-room
exercise, run fresh acceptance once and retained acceptance immediately after it
to prove restart-safe idempotency. Confirm that all expected packs are `CURRENT`,
the new documentation page is delivered from Online, the publication operations
summary has no unexplained failed or stuck item, and `topology:status` reports no
managed process after shutdown.

Review the generated qualification report for command exit codes, durations,
source commits, explicit external gaps, and a valid SHA-256 digest. Independently
run Framework, Axis, and Nexus verification before committing the coordinated
baseline. Finally run `git diff --check`, documentation generation in check mode,
credential-pattern scanning, and the zero-direct-database audit over the changed
files. A beginner or partner developer should be able to follow this sequence
without knowing a MongoDB collection name or using a database shell.
