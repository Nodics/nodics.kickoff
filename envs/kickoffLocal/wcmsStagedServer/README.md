# WCMS Staged Server

WCMS Staged Server runtime composition and configuration boundary for Nodics Kickoff.

Local governed-file testing intentionally enables the `dataExport` HTTP category
on this runtime only. The Export owner retains schema/property policy and
`export.run`; generated-file delivery still requires separate Media authorization.
This opt-in does not qualify other formats, providers or production deployments.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

After changes, run the nearest focused test or the Kickoff structure and documentation checks from the project root.

The explicit Framework documentation baseline selects the composed 0.0.3 release.
The shared Foundation pack remains 0.0.2. Installation, review and Online
publication retain their normal owner gates.

This Staged server owns the explicit Kickoff documentation-authoring baseline;
shared project configuration contributes the content source and application
profile. Online delivery consumes normally approved publications.

Framework documentation baseline 0.0.4 selects the bounded capability provenance corrections; normal Staged import and approval remain required. Shared Foundation remains 0.0.2.
