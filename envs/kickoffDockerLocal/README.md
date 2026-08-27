# kickoffDockerLocal

`kickoffDockerLocal` is an isolated local production-simulation environment. It does not extend, import, or share databases, ports, generated secrets, media volumes, or runtime configuration with `kickoffLocal`.

It composes Platform, WCMS Staged, WCMS Online, Process, Engagement, and Commerce backend containers plus Axis and Nexus static application containers. MongoDB runs as an authenticated replica set. Redis provides password-protected distributed authentication state with a replica and Sentinel observation. Elasticsearch is internal to the data network for Commerce/Discovery search qualification. Axis uses operator-facing host ports; Nexus is configured only for Online delivery.

## Operations

```bash
npm run docker-local:preflight
npm run docker-local:build
npm run docker-local:start
npm run docker-local:status
npm run docker-local:acceptance
npm run docker-local:qualify
npm run docker-local:backup
npm run docker-local:resilience
npm run docker-local:publishing-interruption-contracts
npm run docker-local:soak
npm run docker-local:stop
```

To prove the optional documentation lifecycle from an empty schema, reset and
start the isolated topology before invoking the strict fresh-state gate:

```bash
npm run docker-local:reset
npm run docker-local:start
npm run docker-local:acceptance -- --expect-documentation-not-installed
```

The same documentation-specific fresh-browser gate is also exposed as a named
project command for certification runs:

```bash
npm run acceptance:documentation:fresh-browser
```

The strict gate requires every documentation pack to begin as `NOT_INSTALLED`,
rejects unauthenticated/public installation, imports through the secured Staged
API, proves that Online delivery remains absent before approval, and then
completes the normal Process-controlled publication journey. Do not use this
flag against a retained Docker Local database.

After installing a legitimate newer framework and Axis documentation release
over retained Docker Local volumes, run the update rollback gate:

```bash
npm run docker-local:acceptance -- --qualify-documentation-rollback
```

This requires both updated publications to retain a real previous Online
version. It rolls them back through the Platform application-initialization
APIs, verifies receipt lineage, and republishes the current versions through
the normal approval workflow.

Generated credentials live in the ignored `generated/docker.env` file with mode `0600`. The local operator signs in as `admin` with the readable default password `NodicsLocal@2026`; set `NODICS_DOCKER_ADMIN_PASSWORD` before the first preflight to replace it. Database, Redis, JWT, service-password, and API-key credentials remain randomly generated. Never commit `generated/docker.env`.

`docker-local:stop` preserves the isolated MongoDB, Redis, and media volumes. `docker-local:reset` irreversibly removes only those Docker Local volumes and requires its explicit confirmation token. Application initialization, import, export, and publication verification use Nodics APIs; database shell access is limited to infrastructure health and replica-set administration.

## Recovery qualification

`docker-local:backup` writes an ignored, mode-restricted backup below `generated/backups`. Its checksum manifest covers the logical MongoDB archive, Redis persistence snapshot, and separate Staged and Online media snapshots. Restore is intentionally destructive only within Docker Local and requires both a backup identifier and `--confirm-replace-docker-local-data`:

```bash
npm run docker-local:restore -- <backup-id> --confirm-replace-docker-local-data
```

`docker-local:resilience` performs the full destructive qualification: backup and checksum verification, isolated volume reset, restore, health recovery, API-level publishing/workflow acceptance, Staged/Online isolation, bounded load, Redis service interruption, Sentinel replica promotion, application reconnect, dependency audit, and the Axis bundled-login static accessibility contract. The measured evidence is emitted as JSON. The failure simulation pauses Redis command processing while preserving service discovery; deleting a container is not a valid Sentinel test because it also deletes the Docker DNS record.

The runtime keeps the direct `REDIS_URL` compatibility path but enables the framework Sentinel provider for Docker Local. The qualification must observe replica promotion and complete authenticated publishing acceptance through the reconnected applications before transparent failover is reported as passed.

`docker-local:publishing-interruption-contracts` executes the framework's manifest idempotency, response-loss retry, outbox after-commit delivery, duplicate suppression, lease recovery, startup reconciliation, workflow decision callback, and Process lifecycle contracts. These are deterministic interruption/reconciliation contracts; they do not claim that a live container was killed at an exact publication instruction boundary.

`docker-local:soak` runs for 30 minutes by default with concurrent readiness traffic across all six backends and a complete governed publication acceptance every five minutes. Its default synthetic rate is 120 requests per minute per runtime, leaving explicit capacity below the 600-per-minute framework guardrail for Docker health probes and publication traffic. Set `NODICS_DOCKER_SOAK_SECONDS` only when deliberately running a shorter diagnostic; shortened runs are not the standard qualification.

Independent penetration testing and assistive-technology accessibility review remain external evidence. Docker Local verifies local production-simulation contracts and must not be described as production-certified.

| Runtime | Host port |
| --- | ---: |
| Axis | 4100 |
| Nexus | 4200 |
| Platform | 5300 |
| WCMS Staged | 5312 |
| WCMS Online | 5314 |
| Process | 5330 |
| Engagement | 5340 |
| Commerce | 5350 |
| Commerce Staged | 5352 |

Native Local ports remain unchanged and are never started by Docker Local acceptance.
