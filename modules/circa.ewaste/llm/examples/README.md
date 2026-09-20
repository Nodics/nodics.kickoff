# Circa extension examples

Customer choices belong in `config/properties.js`: keep the Circa application
identity, presentation and intentional eWaste policy deltas there. Reusable
receipt, verification, location and identity operations remain with their owners.

An empty `src/router/appConfig.js`, `src/utils/utils.js` or `src/utils/enums.js`
inherits the existing framework registries. Add only a customer-owned exported
key when an intentional extension requires one; do not copy a base registry.
Status/error vocabulary belongs in `src/utils/statusDefinitions.js`.

Reject an extension that grants arrival from a browser claim, changes Profile
identity authority, or bypasses eWaste verification. Test accepted fresh/direct-
distance arrival, stale and invalid coordinates, permission denial and preserved
drafts through the existing journey contracts. `npm test` runs customer checks;
live channel acceptance is a separate gate.
