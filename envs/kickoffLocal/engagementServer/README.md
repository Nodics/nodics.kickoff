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

This deployment's governed Profile assignment requires the Communication owner's
`communication.request` definition to resolve an existing Telegram destination
through Profile. Rights come from the module-owned Profile-managed pack, not a
migration permission property. Optional demo assignment data selects this exact
deployment; changes to installed authority require authorized Profile operations.
Neither the definition nor assignment grants another deployment or authorizes a
new recipient. Verify installed authority separately.

## Employee email test binding

Local coupon reminders select the Digital source, its IN_APP template and loopback
eligibility through the environment's Communication ENGAGEMENT role profile.
The explicit source selection retains Waste and the composition-selected Profile
email source. Digital remains remote; source trust is independent of runtime grants,
recipient preferences and successful delivery. Docker and framework defaults stay
unchanged. `test/circaCouponReminderSelection.test.js` verifies the effective merge.

This server selects the existing SMTP provider for controlled employee-email
checks. Sending stays disabled without `NODICS_EMPLOYEE_SMTP_ENABLED=true` and
complete approved test inputs. Secrets resolve in this sending runtime, not in
Platform, Axis or another deployment. Existing Telegram/waste delivery is retained.

The explicitly approved isolated Local capture allowlist is exactly `admin` and
`operator` at `circa-ui-acceptance-20261013.test`. Existing demo/financial accounts
and their records remain untouched; they are not fresh registration nominees.
Recipient environment inputs cannot broaden this list. Preserve disabled-by-default
sending, credential-free defaults, test-only/non-live qualification and the SMTP
owner's loopback-only plaintext exception. These are configuration checks, not
approval to connect or send.

The project binding and three Profile-purpose template selections are documented
in [Local employee email](../../../../data/docs-v001/records/documentation/kickoffDocumentationRelease002ComponentData.js#local-employee-email-sending-runtime-configuration).
Run `node --test test/communicationActivationDataContract.test.js` from the project
root for non-sending effective-configuration checks. Configuration health is not
SMTP authentication, inbox receipt or full employee-journey acceptance.

The SMTP owner's explicit `test/localSmtpCapture.mjs` harness may capture this
approved pair at `127.0.0.1:2525`, with no relay and loopback-only plaintext.
Use its private `readBinding` handoff for the sending process only; do not print
the binding or change shared credentials. Backend restart, registration adoption
and real Axis provisioning remain separate parent-operated actions. Artificial
capture probes are not OTP or completed registration evidence.
