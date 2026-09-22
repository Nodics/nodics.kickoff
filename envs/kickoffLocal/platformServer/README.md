# Platform Server

Platform Server runtime composition and configuration boundary for Nodics Kickoff.

## Ownership

This server boundary owns the areas declared in `package.json.nodics.owns`. It must not take ownership of framework source, unrelated customer-project modules, frontend application source, or generated customer-local output.

## Extension

Change this package only when the requested behavior belongs to this boundary. Prefer layered configuration, data, environment, server, or module overrides before changing framework source.

## Verification

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
