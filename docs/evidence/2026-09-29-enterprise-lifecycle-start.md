# Enterprise lifecycle implementation start — 29 September 2026

This is a dated execution record, not a new framework contract, published user guide or second backlog. Framework changes are separately authorised Nodics-maintainer work; project configuration and application data stay in their project owners.

## Authorised branches and baseline

Only `codex/enterprise-employee-lifecycle` may receive this work, separately in each affected repository:

| Repository | Starting commit | Responsibility |
| --- | --- | --- |
| Nodics/nodics.ai | 4c12f4ebccc18e94eaa070abe2d6a154e209ec9b | Shared capability corrections, tests and owner guidance |
| Nodics/nodics.axis | 36760505b1a4c91f4b31c641f4ef2073fce78acf | Reusable employee-facing interactions and frontend tests |
| Nodics/nodics.kickoff | 248d459a2c2035f8bf51c8ea3f64f0904a58e376 | Project/runtime configuration and project evidence/documentation |

Existing branches are read-only. Do not merge into development, master or any other branch; do not reset, rebase, force-push, delete, release or deploy existing branches. No live mail, account enrolment, production mutation or collection-centre reassignment is authorised by this record. The Circa customer frontend is unchanged.

## Handoff interpretation

The supplied `CIRCA_EWASTE_ENTERPRISE_ONBOARDING_ACTION_PLAN_v1.1.md` remains the requirements and action/stage authority, with its companion `ENTERPRISE_CREATION_AND_EMPLOYEE_REGISTRATION_PROCESS_v1.1.md`. Their 48 parent actions, 68 stages and 64 acceptance scenarios are inherited, not reduced by the shorter v1.2 execution handoffs. The code assessment and subsequent upload-validation corrections remain evidence, not claims of deployment readiness.

The v1.2 instructions to merge through development/master are superseded by the user's explicit branch-only restriction. Shared capability acceptance must precede bulk Circa writes. Later Circa work must explicitly pin accepted feature-branch dependencies without modifying an existing branch.

Carry forward these requirements in every applicable slice:

- Existing enterprise/default-admin remediation; additional admins/operators; designated default and last-admin protection.
- Existing-person authenticated membership acceptance and customer/employee participation in both directions, without duplicate credentials or unioned privileges.
- Email proof, applicant approval, truthful activation/status and independent notification retries.
- MAIL-01–03 and T55–T60: actual project/sending-runtime configuration, qualified provider contract, private secret references and controlled delivery evidence. Personal Gmail remains conditional; credentials alone do not qualify the sandbox provider.
- DOC-01–03 and T61–T64: detailed role-specific instructions, examples, annotated verified screenshots, explained rendered diagrams, troubleshooting, publication and independent reader validation. Draft alongside implementation, not only afterward.
- Backend store/issuer authorisation, customer-safe entitlement projection, authoritative persistence, complete pagination and customer-dashboard convergence.
- Inventory all actual existing collection centres. Existing-centre mapping uses KEEP, REASSIGN or BLOCKED; separately authorised new centres are not replacement inventory. Preserve historical data and tenant boundaries.

## First scoped correction

Start with Profile's existing `DefaultEnterpriseManagementService` assignment/key safeguards (assessment F06/F07; partial evidence for AXIS-09, AXIS-11 and AXIS-17). Reuse its generated services and digest utility. Reproduce failures, preserve legacy associations, correct only demonstrated defects, add focused tests and update nearest owner guidance. Do not mark the full registration/identity actions complete from this sub-batch.

OTP enforcement, durable continuation, interrupted provisioning, membership/session linkage, SMTP dispatch/transport integration and full Axis journeys remain separate mandatory work within their existing actions. A source-level check does not establish a composed runtime or business-user pass.

## Environment and evidence limits at start

The GitHub connector supports authorised branch/file work. Direct Git transport from this execution container cannot resolve github.com, so it is not a full local clone. Any tests run from retrieved source must record their exact source/blob hashes and isolated execution scope. Do not claim full repository, database, browser, mail, generated-context or live acceptance from such tests.

All implementation acceptance scenarios remain NOT RUN at this starting point. This record adds no runtime defaults, application identities, credentials or operational records.
