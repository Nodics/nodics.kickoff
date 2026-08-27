# Partner Site Data

This reference customer module proves that a partner can add a later-loaded,
independently versioned website customization without editing Nodics Framework,
Axis, Nexus, or the original `nexus.web` release.

The module contributes three things under its own authority:

- immutable Staged release `partnerSiteData:partnerNexusCustomization` `1.0.5`;
- CMS baseline `partnernexus`;
- Platform application profile `partnernexus`.

An administrator initiates it through the standard Platform profile API. The
release imports only into WCMS Staged, follows the normal Process approval, and
becomes visible through WCMS Online only after publication.
