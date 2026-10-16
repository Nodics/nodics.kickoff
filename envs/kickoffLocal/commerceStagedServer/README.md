# Commerce Staged Server

Reference customer Commerce Staged server for governed Product catalog publication.

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

Native Local separately selects remote `eWaste` and only
`waste.asset.listing.intent.read` for Product's retained listing-intent proof.
Waste pins this original deployment and `GREENPERKS_ONLINE` through its existing
business-caller policy. This does not grant `waste.asset.marketplace.project`,
sale/transfer authority, another enterprise, or installed listing qualification.
The owner-defined permission must be present in the exact governed Profile
assignment; startup validates retained authority without adding rights.
The exact server-owned `profileTenantProvisioning.runtimeRemoteModuleExtensions`
selection is `["eWaste"]`. It permits only this remote-only addition across an
original tenant creation ceiling, after fresh independent grant authorization;
it never rewrites the original deployment snapshot or admits active-module growth.

Pricing's existing Staged `target` binding explicitly selects only the original
Local Online authorization callback's signed deployment coordinates. Its module,
connection, role, source qualification and enterprise selection are unchanged.
Waste read callers receive no publication-writer mapping. Verify with
`node --test test/commerceOwnershipEvidenceAdoption.test.js`; source tests do not
prove installed publication or authorize replay.

The Local environment's COMMERCE_STAGED Product profile selects listing owner
transports; no `product` capability namespace belongs in server properties.
Product listing authoring explicitly reads original intent from the existing
`waste` abstract connection, module `eWaste`, role `WASTE`, with a 15-second
bound and loopback-only insecure transport. The owner keeps one attempt, refuses
redirects and requires HTTPS outside loopback. It uses this deployment's existing
`waste.asset.listing.intent.read` grant and original runtime token, never the
human bearer or an enterprise override. This source selection adds no permission,
automatic authoring, approval, completion or replay; deployment requires a
coordinated rebuild/restart and separate native owner readback.

The separately approved Local `commerce.store.read` permission reads only Online
Store placement through Product's `storeSource`: module `store`, existing abstract
connection `commerce`, role `COMMERCE`, 15000ms, insecure transport only on
loopback. Online pins this exact Staged identity to `circaMainStore` and
`GREENPERKS_ONLINE`. Store already belongs to the signed module graph; no remote
module or namespace extension is added. No generic schema read, Store write,
staff role, import or publication authority is granted. Source preparation is
not installed grant/read qualification. Governed Profile assignment updates and
native readback remain separate authorized actions. Never copy Online Store
records to Staged.
