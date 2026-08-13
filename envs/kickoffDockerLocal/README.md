# kickoffDockerLocal

`kickoffDockerLocal` is an isolated local production-simulation environment. It does not extend, import, or share databases, ports, generated secrets, media volumes, or runtime configuration with `kickoffLocal`.

It composes Platform, WCMS Staged, WCMS Online, Process, Engagement, and Commerce backend containers plus Axis and Nexus static application containers. MongoDB runs as an authenticated replica set. Redis provides password-protected distributed authentication state with a replica and Sentinel observation. Axis uses operator-facing host ports; Nexus is configured only for Online delivery.

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
npm run docker-local:stop
```

Generated credentials live in the ignored `generated/docker.env` file with mode `0600`. Read `BOOTSTRAP_ADMIN_PASSWORD` to sign in as `admin`; never commit this file.

`docker-local:stop` preserves the isolated MongoDB, Redis, and media volumes. `docker-local:reset` irreversibly removes only those Docker Local volumes and requires its explicit confirmation token. Application initialization, import, export, and publication verification use Nodics APIs; database shell access is limited to infrastructure health and replica-set administration.

## Recovery qualification

`docker-local:backup` writes an ignored, mode-restricted backup below `generated/backups`. Its checksum manifest covers the logical MongoDB archive, Redis persistence snapshot, and separate Staged and Online media snapshots. Restore is intentionally destructive only within Docker Local and requires both a backup identifier and `--confirm-replace-docker-local-data`:

```bash
npm run docker-local:restore -- <backup-id> --confirm-replace-docker-local-data
```

`docker-local:resilience` performs the full destructive qualification: backup and checksum verification, isolated volume reset, restore, health recovery, API-level publishing/workflow acceptance, Staged/Online isolation, bounded load, Sentinel promotion observation, dependency audit, and the Axis bundled-login static accessibility contract. The measured evidence is emitted as JSON.

Sentinel promotion is infrastructure-qualified, but application-transparent Redis failover is not: the current runtime `REDIS_URL` resolves `redis-primary` directly. Independent penetration testing and assistive-technology accessibility review also remain external evidence. This environment must not be described as production-certified.

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

Native Local ports remain unchanged and are never started by Docker Local acceptance.
