/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

/**
 * @module kickoffAdministration/config/properties
 * @description Defines generated configurable defaults for kickoffAdministration.
 * @layer config
 * @owner kickoffAdministration
 * @override Project, environment, server, node, tenant, or customer layers may override these defaults through Nodics configuration layering.
 */
module.exports = {
  backofficeApplicationInitialization: {
    profiles: {
      agoraapparel: {
        code: "agoraapparel",
        type: "STOREFRONT_DOMAIN_BUNDLE",
        owner: "agora.apparel",
        applicationCode: "agora",
        siteCode: "agoraApparelSite",
        baselineCode: "agoraapparel",
        presentation: {
          title: "Agora Apparel",
          kind: "PROJECT",
          category: "accelerator",
          order: 210,
          summary:
            "Apparel storefront accelerator as a complete business-facing domain bundle.",
          requiredServers: [
            "Platform",
            "WCMS Staged",
            "WCMS Online",
            "Process",
            "Commerce",
            "Discovery",
          ],
          requiredFunctionalModules: [
            {
              code: "nodics.commerce",
              label: "Commerce capability",
            },
            {
              code: "nodics.discovery",
              label: "Discovery capability",
            },
          ],
          activationPolicy: {
            approvalRequiredForOnline: true,
            requiredDataTrigger: "USER",
            sampleDataTrigger: "USER",
          },
        },
        dataPackages: {
          $config: "replace",
          value: [
            {
              code: "agora.apparel:agoraApparelContentCatalog",
              kind: "Storefront content",
              required: true,
              trigger: "USER",
              dataType: "sample",
              targetServer: "wcmsStaged",
              targetRuntimeRole: "WCMS_STAGED",
            },
            {
              code: "agora.apparel:agoraApparelMediaAssets",
              type: "MEDIA_ASSET_MANIFEST",
              kind: "Storefront media files",
              required: true,
              trigger: "USER",
              targetServer: "wcmsStaged",
              targetRuntimeRole: "WCMS_STAGED",
              manifestPath:
                "modules/agora.apparel/data/sample-v001/content/assets/agora-cms-media/assetManifest.js",
              businessPurpose: "AGORA_STOREFRONT_CONTENT",
            },
            {
              code: "agora.apparel:agoraApparelCommerceCatalog",
              kind: "Commerce catalog",
              required: true,
              trigger: "USER",
              dataType: "sample",
              targetServer: "commerceStaged",
              targetRuntimeRole: "COMMERCE_STAGED",
            },
          ],
        },
      },
      agoraelectronics: {
        code: "agoraelectronics",
        type: "STOREFRONT_DOMAIN_BUNDLE",
        owner: "agora.electronics",
        applicationCode: "agora",
        siteCode: "agoraElectronicsSite",
        baselineCode: "agoraelectronics",
        presentation: {
          title: "Agora Electronics",
          kind: "PROJECT",
          category: "accelerator",
          order: 220,
          summary:
            "Electronics storefront accelerator as a complete business-facing domain bundle.",
          requiredServers: [
            "Platform",
            "WCMS Staged",
            "WCMS Online",
            "Process",
            "Commerce",
            "Discovery",
          ],
          requiredFunctionalModules: [
            {
              code: "nodics.commerce",
              label: "Commerce capability",
            },
            {
              code: "nodics.discovery",
              label: "Discovery capability",
            },
          ],
          activationPolicy: {
            approvalRequiredForOnline: true,
            requiredDataTrigger: "USER",
            sampleDataTrigger: "USER",
          },
        },
        dataPackages: {
          $config: "replace",
          value: [
            {
              code: "agora.electronics:agoraElectronicsContentCatalog",
              kind: "Storefront content",
              required: true,
              trigger: "USER",
              dataType: "sample",
              targetServer: "wcmsStaged",
              targetRuntimeRole: "WCMS_STAGED",
            },
            {
              code: "agora.electronics:agoraElectronicsMediaAssets",
              type: "MEDIA_ASSET_MANIFEST",
              kind: "Storefront media files",
              required: true,
              trigger: "USER",
              targetServer: "wcmsStaged",
              targetRuntimeRole: "WCMS_STAGED",
              manifestPath:
                "modules/agora.electronics/data/sample-v002/content/assets/agora-cms-media/assetManifest.js",
              businessPurpose: "AGORA_STOREFRONT_CONTENT",
            },
            {
              code: "agora.electronics:agoraElectronicsCommerceCatalog",
              kind: "Commerce catalog",
              required: true,
              trigger: "USER",
              dataType: "sample",
              targetServer: "commerceStaged",
              targetRuntimeRole: "COMMERCE_STAGED",
            },
          ],
        },
      },
      agoratelco: {
        code: "agoratelco",
        type: "STOREFRONT_DOMAIN_BUNDLE",
        owner: "agora.telco",
        applicationCode: "agora",
        siteCode: "agoraTelcoSite",
        baselineCode: "agoratelco",
        presentation: {
          title: "Agora Telco",
          kind: "PROJECT",
          category: "accelerator",
          order: 230,
          summary:
            "Telco storefront accelerator as a complete business-facing domain bundle.",
          requiredServers: [
            "Platform",
            "WCMS Staged",
            "WCMS Online",
            "Process",
            "Commerce",
            "Discovery",
          ],
          requiredFunctionalModules: [
            {
              code: "nodics.commerce",
              label: "Commerce capability",
            },
            {
              code: "nodics.discovery",
              label: "Discovery capability",
            },
          ],
          activationPolicy: {
            approvalRequiredForOnline: true,
            requiredDataTrigger: "USER",
            sampleDataTrigger: "USER",
          },
        },
        dataPackages: {
          $config: "replace",
          value: [
            {
              code: "agora.telco:agoraTelcoContentCatalog",
              kind: "Storefront content",
              required: true,
              trigger: "USER",
              dataType: "sample",
              targetServer: "wcmsStaged",
              targetRuntimeRole: "WCMS_STAGED",
            },
            {
              code: "agora.telco:agoraTelcoMediaAssets",
              type: "MEDIA_ASSET_MANIFEST",
              kind: "Storefront media files",
              required: true,
              trigger: "USER",
              targetServer: "wcmsStaged",
              targetRuntimeRole: "WCMS_STAGED",
              manifestPath:
                "modules/agora.telco/data/sample-v002/content/assets/agora-cms-media/assetManifest.js",
              businessPurpose: "AGORA_STOREFRONT_CONTENT",
            },
            {
              code: "agora.telco:agoraTelcoCommerceCatalog",
              kind: "Commerce catalog",
              required: true,
              trigger: "USER",
              dataType: "sample",
              targetServer: "commerceStaged",
              targetRuntimeRole: "COMMERCE_STAGED",
            },
          ],
        },
      },
      frameworkdocs: {
        code: "frameworkdocs",
        type: "DOCUMENTATION_BUNDLE",
        owner: "nodics.docs",
        applicationCode: "axis",
        siteCode: "nodicsDocumentationSite",
        baselineCode: "frameworkdocs",
        contentPackCode: "nodicsDocumentation",
        presentation: {
          title: "Framework Documentation",
          kind: "DOCUMENTATION",
          category: "documentation",
          order: 300,
          summary:
            "Framework documentation content pack and Online delivery profile.",
          requiredServers: [
            "Platform",
            "WCMS Staged",
            "WCMS Online",
            "Process",
          ],
          activationPolicy: {
            approvalRequiredForOnline: true,
            requiredDataTrigger: "USER",
            sampleDataTrigger: "USER",
          },
        },
      },
      axisdocs: {
        enabled: true,
      },
      kickoffdocs: {
        code: "kickoffdocs",
        type: "DOCUMENTATION_BUNDLE",
        owner: "nodics.kickoff",
        applicationCode: "axis",
        siteCode: "kickoffDocumentationSite",
        baselineCode: "kickoffdocs",
        contentPackCode: "kickoffDocumentation",
        presentation: {
          title: "Nodics Kickoff Documentation",
          kind: "DOCUMENTATION",
          category: "documentation",
          order: 500,
          summary:
            "Reference-project documentation content pack and Online delivery profile.",
          requiredServers: [
            "Platform",
            "WCMS Staged",
            "WCMS Online",
            "Process",
          ],
          activationPolicy: {
            approvalRequiredForOnline: true,
            requiredDataTrigger: "USER",
            sampleDataTrigger: "USER",
          },
        },
      },
    },
  },
  backofficeFunctionalModuleActivationData: {},
};
