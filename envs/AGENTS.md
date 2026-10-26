# Nodics Kickoff Environments Agent Contract

## Inheritance

- Follow the Nodics Kickoff project contract: `../AGENTS.md`.

## Environment Work Rules

- Keep this group structural and non-runtime.
- Put environment-specific configuration in a concrete environment module.
- Put server-specific configuration in the concrete server module.
- Do not load configuration, lifecycle hooks, or services from this container.

Endpoints, signed instance coordinates, remote-module selections and exact caller
bindings remain runtime configuration or assignment data. They do not define
rights. Implementing modules own reusable permission/group/role contributions
in Profile-managed packs; Profile owns governed runtime assignments. Optional
Kickoff demo packs may supply predefined identities and assignments for a selected
demo, never a parallel server-property permission catalogue. Existing assignments
change only through authorized Profile operations; startup cannot restore or
expand retained grants. Preserve independent tenant, approval and financial gates.

Do not copy framework or shared project defaults into environment/server/node
properties. Keep only composition, deployment values and intentional differences;
validate the active owner and index order. Preserve explicit reset, secret,
provider qualification and authority boundaries. See
[the project configuration guide](../data/docs-v001/records/documentation/kickoffDocumentationRelease002ComponentData.js).

Product owns locale defaults, and Workflow owns dead-letter retry bounds. Keep
only actual locale differences and explicit requeue enablement here. A locale
override on a runtime without Product is not justified merely by differing from
its baseline: remove it when there is no consumer or deliberate selection.
Do not restore the retired eWaste refund defaultOwnerPort. Order selects Digital
or the existing evidence-bound Fulfillment owner; absent an admitted owner, retain
NO_AUTOMATIC_REVERSAL_OWNER rather than guessing a replacement or restoring an adapter.

Do not repeat the selected environment/server/node in `activeModules.modules`.
Inherit unchanged environment connection bindings. Endpoint aliases reference
the canonical deployment values while retaining protocol and authority flags.
Do not copy equal security/provider values as pins. Mandatory safeguards belong
to their framework owner; retain only genuine environment differences and
verify effective resolution before removing repetitions.

Local declares customer browser origins while inheriting framework browser origins.
Docker Local declares its published ports through `httpHardening.cors`; later layers can narrow the policy.
Frontend servers, containers, health gates and UI tests belong to their application
repositories. Backend properties must not contain a `frontends` catalogue.
nRouter supplies origin construction and header defaults; server denials remain
security policy. Local provider defaults remain framework-owned.

Inherit CMS, Editorial and Process neutral transport defaults; retain explicit
connections, qualification opt-ins, runtime role selection and action allowlists.
Domain providers, publication role mappings and schema defaults are inherited.
Docker's explicit versioning-off role overrides preserve its unqualified storage
state; do not remove them as duplicate defaults or silently enable publication. Do not
restore branchless database `selected` bindings: they resolve to no contribution.
Verify schema-derived participation and database isolation through the existing
configuration inheritance test before removing any actual module exception.
