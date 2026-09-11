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

Arrival validation must preserve distinct unusable-coordinate, stale-reading, missing-accuracy and imprecise-reading failures. Desktop capture fallbacks never grant arrival or replace unknown accuracy with an invented value. Preserve saved drafts/evidence on rejected checks.

Circa permits one employee with both review and approval grants to perform both on the same submission. Keep `requireDifferentApprover: false`; preserve role checks, Profile scope, prior verification and separate actor audit records.

Circa selects the eWaste WARM electronics adapter. Customer labels are Potential CO₂e savings, Carbon equivalent (tCO₂e), and Carbon units for existing rewards. The latter are not issued credits. No customer-facing illustrative/demo qualifiers are used. The sourced estimate preserves weight bounds, factor source/version, US reference geography and assumed landfill/recycling scenarios. Unknown coverage or weight produces an unavailable assessment, not a default factor. Rewards use original approval evidence; later reassessments and explicit acceptance do not revalue existing balances. Axis approved-submission detail exposes assessment history and review-before-accept actions; asset detail exposes read-only history.
