# Circa customer backend

Follow the project root and modules AGENTS. This `circa.ewaste` customer module
owns Circa identity, site composition, registration/contact adapters, branding,
content, sample data, valuation and deployment configuration over eWaste.
The framework has one eWaste domain accelerator, with no separate Circa accelerator.

Reusable domain orchestration belongs in eWaste. Generic Waste schemas and
lifecycles remain in nodics.waste. Keep Profile, Media, Loyalty, Commerce,
Location and Engagement state behind their owning operations. Reuse the trusted
eWaste request mapper rather than copying identity/permission logic.

CONFIG.circaEWaste owns app presentation and sample valuation. CONFIG.eWaste
contains intentional domain policy deltas only. Preserve existing applicationCode,
orderCodePrefix and data release identity when migrating an active installation.
Import samples only into a new environment through governed destination APIs;
never reset transactional ownership or opening ledgers during a code refactor.

Run npm test for project adapter/configuration contracts and the frontend live
journey against a local test runtime. Keep illustrative outcomes explicit.

A partner adopting this reference creates its own application identity and writes
only to its customer project. Reusable eWaste or Waste enhancements go to the
Nodics team through the separate contribution/request and release process;
partners do not move implementation into, or patch, either Nodics-owned layer.

Registration adapters forward business form fields to Profile without local
credential validation or identity construction. Telegram adapters delegate
channel entry/origin composition to eWaste. Application binding belongs in the
project's `eWaste.channelAuthentication` delta; Profile provider-secret bindings
remain with the owning configured runtime.

Arrival validation uses fresh usable coordinates and direct distance within the configured inclusive centre radius, uniformly on Web and Telegram. Accuracy is optional observation metadata, never an arrival gate; preserve valid reported accuracy and represent missing/invalid accuracy as null. Preserve distinct unusable-coordinate and stale-reading failures, current centre eligibility checks, and saved drafts/evidence on rejected checks. Map selection and caller-provided arrival claims never grant arrival.

Circa permits one employee with both review and approval grants to perform both on the same submission. Keep `requireDifferentApprover: false`; preserve role checks, Profile scope, prior verification and separate actor audit records.

Circa selects the eWaste OpenAI environmental assessment provider first, with the local WARM electronics adapter as configured fallback. The separate environmental call uses normalized item metadata and retrieved references; invalid or timed-out responses advance to fallback. Customer labels are Potential CO₂e savings, Carbon equivalent (tCO₂e), and Carbon units for existing rewards. The latter are not issued credits. Estimates preserve weight bounds, provider/model provenance, source references, geography and scenario assumptions. Missing defensible evidence remains unknown. Rewards use original approval evidence; later reassessments and explicit acceptance do not revalue existing balances. Axis approved-submission detail exposes assessment history and review-before-accept actions; asset detail exposes read-only history.

Keep the canonical router and utility registry files even when empty. They are
inherited extension points, not copied framework implementations. `package.json`
`nodics.owns` must reflect actual source responsibilities, including `utility`.
See `llm/examples/README.md` for customer extension and rejection examples.

Impact assessment is mandatory in the eWaste journey. Circa returns the domain-prepared assessment and propagates provider/profile failures for retry; it must not convert them into an empty ready draft. Partial input-only coverage remains explicit and does not imply carbon calculation.
