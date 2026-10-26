# Kickoff Local

Local Commerce Staged explicitly enables Product's existing automatic held-bundle
publication policy for the Circa marketplace. Only `enabled: true` is overridden
under the Product COMMERCE_STAGED role profile; transport and policy definitions
remain Product-owned. Digital holds, current runtime permissions, Pricing evidence
and original nPublish receipts are still required. Docker remains disabled.

Local Commerce also selects Pricing `bundleListings.enabled` and `qualified`
for that same held-bundle journey. Record bounds and all publication mechanics
remain inherited from Pricing. Existing Store-selected books and immutable
activation receipts remain mandatory; this does not create or reprice a book.

Kickoff Local local environment composition boundary for Nodics Kickoff.

This isolated Local deployment raises the Redis owner's offline reset inventory
bounds for its long-lived authentication namespace. All command, scan and batch
defaults remain inherited from `redisCache`; this environment defines only its
required deployment differences.

Fresh-schema startup inherits the Import owner's enabled Init lifecycle. Local
must not introduce a migration hold that disables mandatory identity and
platform bootstrap releases.

## Ownership

This group boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

Runtime rights come from implementing modules' Profile-managed access packs and
governed Profile assignments, not migration permission properties. Optional demo
assignment data binds selected identities to exact deployments; changes to existing
grants require authorized Profile operations. Signed instances, endpoints and
namespace extensions remain runtime configuration or assignment coordinates;
`profileTenantProvisioning.runtimeRemoteModuleExtensions` stays with its owning
server. Bootstrap selection cannot restore revoked rights or widen retained grants.
Circa demo release metadata is portable, while `SIMULATION`, exact environment
allowlists and reviewed credit/refund/provider selections remain deployment-owned.
No other environment is enabled by importing or copying the demo source.

## Verification

Circa Telegram uses the permanent Mini App URL
`https://telegram-circa-local.nodics.dev/telegram`. Local CORS allows its exact
origin. BotFather's menu and Main Mini App URL use this same address; backend
startup does not rewrite BotFather settings. The frontend on port 3600, backend
topology and named Cloudflare tunnel must be running.

The development-only `telegram.bot.circa` credential is intentionally stored in
Local source configuration with the project owner's approval. Platform verification
and Engagement delivery share this existing reference. It does not require a
Telegram token environment variable. Production credentials and Cloudflare tunnel
tokens remain outside source control.

Local OpenAI uses the existing `credentials:openai.circa` reference. Its value
is supplied by `OPENAI_API_KEY` through nConfig's declarative environment binding,
not stored in source. Configure the same key in the environment that launches
the Local topology so it survives new terminal/runtime sessions; a one-session
export alone is not persistent storage. Missing or empty input supplies no
credential, and no fallback token is generated. Other environments retain their
own selections. Source binding checks do not prove provider validity or startup
inheritance; no runtime restart or external API request is part of those tests.

Fresh native-Local Profile initialization intentionally binds the initial
service-principal API key to `NODICS_API_KEY`, the same stable generated proof
used by this Local deployment immediately after Init. The reusable nAuth defaults
continue to define separate provisioning and runtime-proof inputs; this is a
Kickoff Local value selection, not a framework credential fallback or restart
rotation rule.

The development Mac's `dev.nodics.kickoff-local-backend` user LaunchAgent runs
`npm run topology:start` with the existing
`NODICS_LOCAL_PRIVATE_CAPTURE_QUALIFIED=true` launch binding. This binding is an
operator attestation after checking preload, APM, proxy and direct capture paths;
it is not a tenant approval or a framework default. Requalify it if those paths
change. Without it, private enterprise startup fails at `ENTER_PRIVATE_CONTEXT`.
The LaunchAgent is stored outside the repository under `~/Library/LaunchAgents/`;
supervisor output is under `~/.cloudflared/kickoff-local-backend*.log`.

Retained runtime scopes are governed Profile records. The permanent Circa tunnel
adoption added `wasteCarbon` to the Local Waste scope and `commercialAgreement`
to the two Local Commerce scopes through Profile's authenticated update API,
preserving their permissions and deployment identities. Restart does not recreate
or expand these grants. Verify them with `npm run acceptance:runtime-grants`.

Local Store placement exposure is selected by the environment's COMMERCE role
profile; Product Store and intent proof transports are selected by its
COMMERCE_STAGED role profile. Exact caller/Store and signed-instance pins remain
runtime configuration or assignment data; access definitions and assignments
remain with their implementing owners and Profile. These read selections neither provision Stores nor resume
enterprise setup. Run `node --test test/commerceOwnershipEvidenceAdoption.test.js
test/configurationInheritanceContract.test.js` from the project root to check
resolved isolation and canonical project validation before rebuilding.

Product discovery reads activated versions for Circa and composition-selected
Agora Stores. Source imports remain Staged until their normal owner approvals;
the Store selection supplies no publication, policy delivery or payment evidence.
Docker Local retains its separately selected deployment configuration.

Financial policy delivery is independently selected per Store through each owner's
`publication.delivery.rootCodesByStore`. Circa retains its existing roots; only
composition-selected Apparel adds Agora roots. Electronics and Telco financial
delivery are not enabled while their requirements remain incomplete. Every mapped
root still needs its own approved Online pointer; the selection grants no approval.

Local Platform explicitly allocates 100,000 tokens per month to the `default`
tenant/enterprise pool and bootstrap `admin`, restricted to Ollama and the
conversation, structuredTool and evaluation profiles. The owner inherits UTC
periods and warning thresholds. Other users and environments are not enrolled.
Change these deployment values in the Local environment's PLATFORM role or use approved
Copilot settings for supported adjustments; zero means no allowance, not unlimited.
After rebuilding, refresh the Profile session and verify Usage and the explicit
model check. An available allocation does not prove a working model or index.

Runtime Configuration targets are independent: Platform hosts Telegram external
identity; Engagement hosts the Communication-owned `telegramDelivery` schema.
Local overrides only its credential reference/path via the existing selected
provider binding. Schema authoring does not activate Communication/Engagement or
provide keys/tokens. After source rebuild/restart, verify each target separately;
do not save delivery credentials on Platform or copy the Circa module into
Engagement merely to obtain its form. Persisted records remain in their original
runtime/database scope.

Platform and Waste keep thin late `postInit` delegates to Copilot's framework
startup service. Do not copy source loops, service authorization or ingestion
report handling into these entrypoints. Source selection is governed runtime data;
`copilot.knowledge.ingestion.startup` only controls optional narrowing and failure/log
policy. This environment opts Waste into ingestion/retrieval and `ingestOnStart`,
and enables nDynamo durable property persistence. Later layers can disable startup. Docker Waste
does not inherit this Local opt-in. No startup indexing runs during static tests.

After changes, run the nearest focused test or the Kickoff structure and documentation checks from the project root.

## Telegram tunnel origin

Local Circa browser development uses the declared localhost origin in this
environment layer. A public Telegram tunnel URL is an operator/runtime override,
not a project `.env` setting and not a Local-named property. Keep the key generic
and environment-neutral, then supply the environment-specific value through the
governed runtime configuration path before restarting the topology. If the
runtime value is missing, Telegram-specific entry remains unavailable while the
local browser origin stays usable.

Local Bidding maps `circaMainStore` to its canonical Store merchant,
`GREENPERKS_ONLINE`, so published bundle price inspection agrees with Checkout's
merchant partition. The buyer retains its original signed Enterprise and actor.
Docker and other Store mappings remain independent. Adoption requires the normal
Commerce build; this configuration does not replay data or grant recovery rights.
