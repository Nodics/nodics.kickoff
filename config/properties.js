/* Copyright (c) 2026 Nodics. Governed by the root LICENSE. */

/**
 * @module nodics.kickoff/config/properties
 * @description Selects project deployment reset targets; employee-mail defaults are inherited from Framework.
 * @owner nodics.kickoff
 * @layer configuration
 * @override A sending deployment must deliberately select employee mail;
 * selection does not enable SMTP or grant Profile registration authority.
 */
module.exports = {
  backofficeLocalReset: {
    providers: {
      $config: "replace",
      value: [
        {
          code: "wcmsStaged",
          connectionName: "wcmsStaged",
          targetAuthority: {
            server: "wcmsStagedServer",
            publication: "STAGED",
          },
        },
        {
          code: "wcmsOnline",
          connectionName: "wcmsOnline",
          targetAuthority: {
            server: "wcmsOnlineServer",
            publication: "ONLINE",
          },
        },
        {
          code: "process",
          connectionName: "process",
          targetAuthority: {
            server: "processServer",
            publication: "OPERATIONAL",
          },
        },
        {
          code: "location",
          connectionName: "location",
          targetAuthority: {
            server: "locationServer",
            publication: "OPERATIONAL",
          },
        },
        {
          code: "commerce",
          connectionName: "commerce",
          targetAuthority: {
            server: "commerceServer",
            publication: "OPERATIONAL",
          },
        },
        {
          code: "commerceStaged",
          connectionName: "commerceStaged",
          targetAuthority: {
            server: "commerceStagedServer",
            publication: "STAGED",
          },
        },
        {
          code: "engagement",
          connectionName: "engagement",
          targetAuthority: {
            server: "engagementServer",
            publication: "OPERATIONAL",
          },
        },
        {
          code: "loyalty",
          connectionName: "loyalty",
          targetAuthority: {
            server: "loyaltyServer",
            publication: "OPERATIONAL",
          },
        },
        {
          code: "waste",
          connectionName: "waste",
          targetAuthority: {
            server: "wasteServer",
            publication: "OPERATIONAL",
          },
        },
        {
          code: "platform",
          connectionName: "default",
          targetAuthority: {
            server: "platformServer",
            publication: "OPERATIONAL",
          },
        },
      ],
    },
  },
};
