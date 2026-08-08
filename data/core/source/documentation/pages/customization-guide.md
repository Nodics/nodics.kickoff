# Customer Customization Guide

Kickoff is intentionally small. It should teach partners how to customize
Nodics safely without turning the reference project into another framework
repository.

## Why customization needs rules

Most enterprise projects start with one urgent customer request. The quickest
solution is often to edit whatever file is easiest to find. That works for a
demo, but it becomes expensive when more customers, tenants, brands, modules,
and releases arrive. Nodics customization rules keep the framework upgradeable
and keep customer behavior visible in the customer project.

The rule is simple: customize in the most specific owner that needs the
change. Use configuration before code. Use a project module before editing a
framework module. Use a later-loaded extension module before forking a standard
functional module. Create a new functional module only when the business
capability is genuinely new.

## Safe customization model

Customer projects can add project modules under `modules/` and environment or
server contributions under `envs/`. These contributions load after standard
Nodics functional modules and can override or extend services through the
normal module merge process.

Safe customizations include:

- project-specific configuration;
- customer modules such as `kickoffCore`, `kickoffApi`, or `kickoffInt`;
- customer extension modules such as a future `kickoff.platform`;
- environment-specific properties for local, testing, pre-production, and
  production;
- project-owned CMS documentation content packs;
- sample data or initialization flows that belong to the customer project.

## Two customization types

### Code-level customization

Use code-level customization when behavior changes: a service needs different
logic, a route needs a project-specific policy, a schema needs project fields,
or an integration must call a customer system. Keep the implementation in a
Kickoff module or a customer extension module. Add tests next to the changed
owner and document the boundary in the module README or documentation page.

Example mental model:

```text
nodics.core
nodics.platform
kickoff.platform
nodics.kickoff
kickoffLocal
platformServer
```

Here `kickoff.platform` can override or compose Platform services because it
loads later. Axis and BackOffice should still show the functional capability as
Platform unless the customer intentionally exposes a new business capability.

### Axis and WCMS customization

Use governed frontend customization when an administrator changes content,
labels, navigation, documentation, images, or page composition through Axis
and WCMS. The browser renderer stays in `nodics.axis`; the content records live
in the backend owner. For example, changing a demo site logo should become a
governed WCMS, Media, or content update, not a hard-coded replacement inside
the Axis source repository.

## What not to customize in Kickoff

Do not copy Core, Platform, WCMS, Cron, or Axis source into Kickoff. Do not
rename standard functional identities such as `nodics.platform` just because a
customer extension customizes their behavior. Do not put backend-importable CMS
data into the frontend repository. Do not place framework documentation in the
customer project unless it is truly project-specific guidance.

## Extension example

A customer may later create a module such as `kickoff.platform` to customize
Platform behavior. A Platform server could load:

```text
nodics.core
nodics.platform
kickoff.platform
nodics.kickoff
kickoffLocal
platformServer
```

BackOffice and Axis should still present the functional capability as Platform
unless the customer explicitly exposes a separate functional module. The
extension changes implementation; it does not create a new product identity.

## Documentation rule

Customer documentation follows the same ownership rule:

- framework guidance goes to `nodics.docs`;
- Axis product guidance goes to Platform `modules/axis`;
- Kickoff/project guidance goes to `nodics.kickoff`;
- browser rendering remains in `nodics.axis`.

When Kickoff docs change, update the source page, bump the catalogue version if
the generated content changes, regenerate the pack, import it through WCMS, and
verify the route in Axis.

## Step-by-step: add a small project module

1. Create or choose a module under `modules/`.
2. Give the module a clear package identity and index so load order is
   intentional.
3. Add only project-owned services, data, configuration, or routes.
4. Register the module in the relevant environment/server composition.
5. Start the server and verify logs show the module loading after framework
   modules.
6. Add or update tests proving the project behavior.
7. Update Kickoff documentation if the customization is part of the reference
   journey.

Do not use this flow to move framework behavior into Kickoff. If the behavior
belongs to Core, Platform, WCMS, Cron, or Media for all customers, propose and
implement it in the owning framework module instead.

## Step-by-step: add project documentation

1. Add or update Markdown under
   `data/core/source/documentation/pages/`.
2. Update `data/core/source/documentation/catalogue.json`.
3. Bump the catalogue version when generated content changes.
4. Run `npm run docs:generate`.
5. Run `npm run test:documentation`.
6. Import or update the content pack through Axis.
7. Open the generated `/docs/nodics-kickoff` route in Axis and verify
   navigation, search, headings, and previous/next links.

## DevOps and rollback notes

Project customizations should be deployable and reversible. Keep project
configuration separate from private secrets. Record which environment and
server a customization affects. If a release fails, rollback should remove or
disable the project layer without requiring a framework source rollback.

Generated documentation and seed data should be versioned immutably. If content
changes with the same version, the import service should reject it so operators
do not silently install a different release under an already-trusted identity.

## Continue

- [Kickoff project overview](project-overview.md)
- [Local runtime topology](local-runtime.md)
