# Customer Engagement Server

Customer Engagement Server runtime composition and configuration boundary for Nodics Kickoff.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

After changes, run the nearest focused test or the Kickoff structure and documentation checks from the project root.

This Local deployment declares a distinct runtime instance and an environment
reference for its retained service proof. Profile must hold the corresponding
service principal and approved deployment grant before startup. Missing proof
fails closed; never replace it with the shared bootstrap or administrator key.
After a full Local reset, an authenticated operator must reprovision the approved
deployment grants through Profile before restarting this runtime.

## Employee email test binding

This server selects the existing SMTP provider for controlled employee-email
checks. Sending stays disabled without `NODICS_EMPLOYEE_SMTP_ENABLED=true` and
complete approved test inputs. Secrets resolve in this sending runtime, not in
Platform, Axis or another deployment. Existing Telegram/waste delivery is retained.

The explicit Local capture allowlist is exactly `admin`, `operator`, `applicant`,
`reviewer`, `reviewer2` and `reviewer3` at `axis-onboarding-acceptance.test`.
Recipient environment inputs cannot broaden this list. Preserve disabled-by-default
sending, credential-free defaults, test-only/non-live qualification and the SMTP
owner's loopback-only plaintext exception. These are configuration checks, not
approval to connect or send.

The project binding and three Profile-purpose template selections are documented
in [Local employee email](../../../data/docs-v001/records/documentation/kickoffDocumentationComponentData.js#local-employee-email-sending-runtime-configuration).
Run `node --test test/communicationActivationDataContract.test.js` from the project
root for non-sending effective-configuration checks. Configuration health is not
SMTP authentication, inbox receipt or full employee-journey acceptance.
