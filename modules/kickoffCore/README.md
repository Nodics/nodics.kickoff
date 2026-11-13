# kickoffCore Module

`kickoffCore` owns shared project capability customizations for `nodics.kickoff`.

Shared documentation configuration contributes the content source and application
profile. Each Staged deployment owns its explicit publication baseline; the
authoring selection must remain outside shared configuration so Online delivery
retains its own publication boundary. Validate both Local and Docker Local with
`test/localPublishingContractFreeze.test.mjs` after changing a selected release.

It is activated explicitly by the selected server; the containing `modules/`
group participates only in structural discovery.

Profile owns the installation's shared internal service account. Each runtime
declares its identity and requests modules from the canonical deployment graph.
The seven-runtime source gate is `test/runtimeAssignmentDataPack.test.js`.

Commerce acceptance selects exact approved publication evidence through
`NODICS_AGORA_<DOMAIN>_<OWNER>_PUBLICATION_{CODE,ROOT_CODE,SOURCE_VERSION,TARGET_VERSION}`
bindings. All four default to empty and fail closed. Read the owning contract in
`llm/contracts/README.md` before qualifying a deployment; these selections do not
publish or approve data.

Framework commsCore owns the complete employee-mail composition and Profile
resource selection through nConfig. Its selection defaults to `none`; only the
Local Process server selects `employee`. Kickoff retains the actual sending
runtime's source allowlist; selecting resources grants no source trust. Module presence does not activate email, credentials,
registration or recovery. Provider mechanics and security defaults remain in the
framework; SMTP inputs stay in the sending deployment.

Default employee messages live in Profile, not this project's properties. Customize
individual files at `src/templates/email/<resource-name>/<locale>/` in an active
customer module, or in the selected environment/server/node. A compatible full
`template.json` can change optional branding defaults. Configuration retains only
resource selection and delivery policy; do not copy rendering or sending services.

Local Engagement discovers the Platform package for resource access without
activating Profile. `test/communicationActivationDataContract.test.js` proves the
actual graph, HTML/text rendering, source/purpose restrictions, disabled transport
and isolation from other deployments. Follow commsCore's `template-resources.md`
contract in the resolved framework for precedence and compatibility.
