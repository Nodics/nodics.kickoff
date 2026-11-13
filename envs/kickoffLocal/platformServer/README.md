# Platform Server

Platform Server runtime composition and configuration boundary for Nodics Kickoff.

Local Platform declares the Commerce and Loyalty framework roots for their exact
Platform-targeted data-release contributions. These roots expose selected source
catalogue entries only; their runtime capabilities remain inactive until selected
by their owning server compositions, and installation remains operator initiated.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

Enterprise setup inspection, privacy and resume qualifications remain independent,
default-false process bindings on Local Platform only. Adopt resume qualification
only after the installed owner evidence and scoped human approval; it enables no
automatic continuation or registration. Fresh inspection and a separate explicit
UI Resume retain the original setup key, actor checks and immutable intent.
Run the setup qualification test in `test/configurationInheritanceContract.test.js`
to check independent flags, sibling isolation and unchanged registration defaults.

Local Platform explicitly selects `dynamo` and enables Runtime Governance for
schema-owned provider configuration. Native Local tooling supplies the stable
encryption prerequisite in its private generated credential file. Provider
tokens still require an authorized write through their declared runtime schema;
neither module activation nor a successful build provisions a Telegram bot token.

After changes, run the nearest focused test or the Kickoff structure and documentation checks from the project root.

Local customer sessions inherit Secure cookies and opt into
`profileCustomerBrowserSession.allowInsecureLoopback` for localhost HTTP. This
allows the approved Circa HTTPS tunnel to use Secure cookies while retaining
local browser development. Set the exact tunnel origin through Local CORS policy;
this option never permits non-loopback HTTP or bypasses origin validation.

Profile's default `profileExternalIdentity.maximumAssertionAgeSeconds` is 3600
(60 minutes). This applies to signed external sign-in proofs, not session
lifetime; signature and application checks remain enforced. Override this through
the normal layered configuration if a stricter business policy is required.

This runtime selects `apiExposure.categories.moduleInternal`
for Local Platform, exposing the existing category for
private service callbacks, including coupon reminder recipient resolution. This
category selection preserves each route’s runtime identity, module, permission
and private-capture checks; it grants no service scope. Framework defaults remain
disabled and no other deployment is selected by this override. Verify with
`node --test test/circaCouponRecipientExposureSelection.test.js`.


## Selecting access definitions

In Axis **Module Registry**, activate the capability whose access definitions
you need. Platform supplies the standard enterprise roles, WCMS the content
roles, Engagement the operator group, Commerce the product, store, promotion,
order and merchant definitions, and Waste the operational and business access
levels. These selections import their owner-defined releases through Profile.
The Platform bootstrap keeps the Profile and runtime configuration groups.

Local Platform also selects the Init-only **Axis access definitions** profile
for each admitted Platform tenant. nImport installs `axis:accessGroups` and its
exact prerequisites through the normal tenant initialization lifecycle, preserving
existing narrowed or inactive references. This supplies the tenant-local groups
required by enterprise roles; it creates no employee or responsibility assignment.
Enterprise role setup, email verification and onboarding qualifications remain
separate. Sibling runtimes and framework defaults do not select this profile.

Local Platform also explicitly selects the Init-only **Content access definitions**
profile for every admitted tenant, including existing enterprises at normal
startup. It installs `cms:businessAccessGroups` through the same nImport owner
and exact prerequisites, without activating CMS code on Platform. This prevents
globally installed Content roles from referring to missing tenant-local groups.
The authority's `cms:businessAccessRoles` release and actual employee assignments
remain separate authorized actions. Existing narrowed or inactive groups are
preserved; no onboarding, membership or setup qualification is enabled here.

For Circa, use the existing **Prepare** action. Its Platform Init batch installs
the relevant enterprise roles, business access levels and groups before the
demo operator and staff assignment steps. The existing `circaIdentityAuthority`
guided profile also exposes these release roots for an authorized independent
review. Choose Engagement separately when enabling that capability.

Local Nexus setup updates only the `nexus.web:nexusEngagementOperational` package target by its stable code, using `processServer` / `PROCESS` where this deployment hosts Engagement. The other Nexus preparation steps, framework defaults and Docker targets remain inherited. This deployment mapping grants no import or publication authority.


Employee recovery uses its independent `NODICS_LOCAL_EMPLOYEE_RECOVERY_ENABLED`
selection for both the existing API category and Profile service. Onboarding's
selection does not enable recovery. Framework inventory/writer qualification stays
false until actual installed evidence independently qualifies each owner boundary;
this selection grants neither readiness nor password-write authority.

The independent Local read-only assessment selection is
`NODICS_LOCAL_IDENTITY_ASSESSMENT_ENABLED`. Recovery inventory and writer
attestations use `NODICS_LOCAL_RECOVERY_INVENTORY_QUALIFIED` and
`NODICS_LOCAL_RECOVERY_CREDENTIAL_WRITE_QUALIFIED` only after separate installed
evidence. Their bindings retain a fail-closed false selection; selecting
recovery or assessment alone does not assert either qualification.

Tenant bootstrap API exposure follows the independent Local
`NODICS_LOCAL_TENANT_PROVISIONING_ENABLED` selection. Account recovery can retain
existing tenant bindings while onboarding remains disabled; source selection does
not grant namespace-binding authority or qualify password recovery.

Controlled Local unused-invitation acceptance selects
`NODICS_LOCAL_INVITATION_WITHDRAWAL_ENABLED`, with independently reviewed
`NODICS_LOCAL_TEAM_SERIALIZATION_QUALIFIED` and
`NODICS_LOCAL_INVITATION_WITHDRAWAL_QUALIFIED`. These override existing Framework
defaults for this deployment only. Unset inputs inherit disabled defaults.
Membership switching and other lifecycle qualifications remain independent;
the native invitation task exposes only the Framework's admitted actions.

Local Profile command recording is independently selected by `NODICS_LOCAL_PROFILE_COMMAND_RECEIPTS_ENABLED`. The Framework database receipt owner remains disabled by default and provides the complete behavior. This deployment binding selects only the existing Profile journal; it neither activates membership/Team lifecycle nor permits command replay. Verify native create/invite/update compatibility and inspect uncertain outcomes before another intent.

Native Platform explicitly selects the distributed BackOffice lease store with a Local namespace. All Platform members therefore read the same registered runtime catalogue. Redis connection settings and activation remain inherited from the Local cache selection; Framework keeps its standalone memory default. Registry leases are ephemeral owner observations, not identity grants or application data.
