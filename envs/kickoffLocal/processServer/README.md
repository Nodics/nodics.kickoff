# Business Process & Automation Server

Business Process & Automation Server runtime composition and configuration boundary for Nodics Kickoff.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

The runtime inherits `nodics.process`. It discovers `nodics.wcms` only to consume
the declared CMS publication-approval workflow data; CMS runtime modules remain
inactive. `runtimeModuleRoots` declares availability separately from inheritance.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

Local original-command receipt qualification explicitly selects the existing
nDatabase master policy with `NODICS_LOCAL_COMMAND_RECEIPTS_ENABLED=true` and its
Workflow owner with `NODICS_LOCAL_WORKFLOW_RECEIPTS_ENABLED=true`. Unset inputs
preserve inherited policy; they add no permission or execution grant. Workflow's
private capability API reports effective admission, and its native receipt query
inspects original evidence without replay. This does not activate Cron timers.

After changes, run the nearest focused test or the Kickoff structure and documentation checks from the project root.


Local employee-mail recipients are selected through private runtime inputs
`NODICS_EMPLOYEE_EMAIL_TEST_RECIPIENT` and optional `_2` through `_8`; unset
inputs select nobody. The additional Local input slots preserve earlier approved
sample recipients alongside an onboarding scenario; they are exact private
transport selections, not a domain wildcard or account definition.
These transport selections do not define accounts. Reference business acceptance
uses the existing project's governed sample personas, while new-account fixtures
belong to onboarding scenarios. Verification challenge and proof lifetimes inherit
their Framework defaults. SMTP and stored verification
still require their explicit private runtime inputs; a capture receipt grants no
Profile inventory or credential-writer qualification.

The Local `commsApi` runtime alias places the existing Framework Communication
connection on this Process server. It supplies this environment's endpoint
placement only; protocol, transport limits, API policy, runtime grants and
verification purpose remain with their Framework owners. An endpoint alias
does not grant an internal caller authority or activate the business workspace.
