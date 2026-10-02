# kickoffCore Module

`kickoffCore` owns shared project capability customizations for `nodics.kickoff`.

It is activated explicitly by the selected server; the containing `modules/`
group participates only in structural discovery.

The Communication ENGAGEMENT role profile selects Profile's framework-owned
template resources and trusted sources, gated by existing nConfig composition.
`activeModules.compositions.employeeMail` defaults to `none`; only the Local
Engagement server selects `employee`. Module presence does not activate email, credentials,
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
