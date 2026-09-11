# agora.telco Agents

Follow the root Nodics AI agent contract before changing this boundary:

- root `README.md` explains the human/documentation route.
- root `AGENTS.md` governs repository-wide AI and contributor behavior.
- Read every applicable ancestor `AGENTS.md` from root to this module before editing.
- Read this module `README.md`, `llm/contracts`, `llm/examples`, and generated context.

This generated capability boundary must preserve Nodics structure, layering, configuration-first behavior, override/customization contracts, tests, documentation, and generated-artifact discipline.

Before implementing non-trivial behavior here, record the business outcome, owning layer, studied sources, current implementation, extension path, security/tenant/data/API/release impact, intended files, and validation route.

## Application data ownership

Follow `llm/contracts/data-ownership-contract.md` before changing sample data.
Resolve source roots from the release manifest and run the Kickoff
`test:data-ownership` gate after changing assets, media, components or pages.
Do not copy another Agora application's media into this pack to satisfy a binding.
