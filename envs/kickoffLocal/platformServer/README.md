# Platform Server

Platform Server runtime composition and configuration boundary for Nodics Kickoff.

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
