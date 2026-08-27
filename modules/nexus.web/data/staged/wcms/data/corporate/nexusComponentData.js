/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/**
 * @module modules/nexus.web/data/staged/wcms/data/corporate/nexusComponentData
 * @description Defines Kickoff project-owned data records for this module data pack.
 * @layer data
 * @owner nexus.web
 * @override Customer projects may extend or replace this artifact in their own project layer.
 */

/** @lifecycle PUBLISHABLE @destination WCMS_STAGED @owner nexus.web */

/** @description Nexus corporate CMS components. */
module.exports = {
  "record0": {
    "code": "nexusHomeBannerCarousel",
    "typeCode": "nexusBannerCarouselType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "rotationIntervalMs": 10000,
      "fadeDurationMs": 1400,
      "imageTransitionMs": 1800,
      "automaticRotation": true,
      "transitionStrategy": "RANDOM"
    },
    "subComponents": [
      {
        "target": "nexusMicroservicesBanner",
        "slot": "slides",
        "index": 10,
        "active": true
      },
      {
        "target": "nexusModularBanner",
        "slot": "slides",
        "index": 20,
        "active": true
      },
      {
        "target": "nexusSecureBanner",
        "slot": "slides",
        "index": 30,
        "active": true
      }
    ]
  },
  "record1": {
    "code": "nexusMicroservicesBanner",
    "typeCode": "nexusBannerSlideType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "title": "Microservices architecture",
      "heading": "Enterprise capabilities that evolve independently.",
      "subheading": "Compose focused services through governed APIs, explicit ownership and observable runtime contracts.",
      "referenceImageCode": "nodicsMicroservicesHero",
      "imageAlt": "Connected services representing the Nodics microservices architecture",
      "buttons": [
        {
          "label": "Explore Nodics",
          "href": "#platform",
          "style": "PRIMARY"
        },
        {
          "label": "Read documentation",
          "href": "https://docs.nodics.in",
          "style": "SECONDARY"
        }
      ]
    }
  },
  "record2": {
    "code": "nexusModularBanner",
    "typeCode": "nexusBannerSlideType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "title": "AI-enabled and modular",
      "heading": "Build with clear boundaries, not framework forks.",
      "subheading": "Use governed AI assistance for coding and administration while keeping decisions, permissions, and project ownership explicit.",
      "referenceImageCode": "nodicsModularHero",
      "imageAlt": "Composable modules representing the Nodics modular framework",
      "buttons": [
        {
          "label": "Explore features",
          "href": "/#features",
          "style": "PRIMARY"
        },
        {
          "label": "Developer journey",
          "href": "/developers",
          "style": "SECONDARY"
        }
      ]
    }
  },
  "record3": {
    "code": "nexusSecureBanner",
    "typeCode": "nexusBannerSlideType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "title": "Secure enterprise framework",
      "heading": "Govern every journey from contract to operation.",
      "subheading": "Make identity, authorization, data boundaries, observability and operational controls explicit from the start.",
      "referenceImageCode": "nodicsSecureHero",
      "imageAlt": "Protected enterprise data flows representing Nodics security",
      "buttons": [
        {
          "label": "Explore the ecosystem",
          "href": "/ecosystem",
          "style": "PRIMARY"
        },
        {
          "label": "Contact Nodics",
          "href": "/contact",
          "style": "SECONDARY"
        }
      ]
    }
  },
  "record4": {
    "code": "nexusHomeAbout",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "aboutus",
      "kicker": "About Nodics",
      "heading": "An AI-enabled application factory for durable enterprise platforms.",
      "body": "Nodics combines governed AI assistance for coding and administration with modular runtime composition, content, commerce, workflow, communication, security, and operational contracts—without forcing customers into a framework fork.",
      "metrics": [
        {
          "value": "01",
          "label": "Composable foundation"
        },
        {
          "value": "02",
          "label": "AI-assisted delivery"
        },
        {
          "value": "03",
          "label": "Governed operation"
        }
      ],
      "href": "/about",
      "linkLabel": "Discover our story",
      "referenceImageCode": "nodicsAboutCollaboration",
      "imageAlt": "Enterprise engineers collaborating around connected modular Nodics capabilities and a governed AI module"
    }
  },
  "record5": {
    "code": "nexusHomeWhy",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "features",
      "kicker": "Framework features",
      "heading": "Everything needed to compose, operate, and evolve enterprise journeys.",
      "referenceImageCode": "nodicsFeaturesArchitecture",
      "imageAlt": "A gold service module completing an interconnected Nodics enterprise capability system",
      "href": "/features",
      "linkLabel": "Explore all features",
      "items": [
        {
          "symbol": "AI",
          "title": "AI-enabled delivery",
          "text": "Assist developers with coding and Axis administrators with governed operational work, while preserving human authority and auditability."
        },
        {
          "symbol": "MOD",
          "title": "Modular architecture",
          "text": "Compose independently owned capabilities through explicit, upgradeable contracts."
        },
        {
          "symbol": "µS",
          "title": "Microservices runtime",
          "text": "Deploy focused services with governed APIs, configuration, discovery, and health visibility."
        },
        {
          "symbol": "CMS",
          "title": "Content experiences",
          "text": "Model catalogs, pages, components, renderers, media, and channel-specific delivery."
        },
        {
          "symbol": "COM",
          "title": "Commerce journeys",
          "text": "Connect product, pricing, promotion, inventory, checkout, order, and fulfillment capabilities."
        },
        {
          "symbol": "WF",
          "title": "Workflow automation",
          "text": "Coordinate human and system work through observable processes, tasks, triggers, and schedules."
        },
        {
          "symbol": "SEC",
          "title": "Security and operations",
          "text": "Make identity, authorization, audit, observability, and operational controls explicit."
        }
      ]
    }
  },
  "record6": {
    "code": "nexusHomeProducts",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "products",
      "kicker": "Nodics products",
      "heading": "Focused products built on the Nodics foundation.",
      "body": "Use productized capabilities where a reusable enterprise journey needs more than framework primitives, while retaining modular ownership and governed extension points.",
      "href": "/products",
      "linkLabel": "Explore Nodics products",
      "items": [
        {
          "symbol": "TEE",
          "title": "Task Execution Engine",
          "text": "A reusable execution product for persisted scheduling, distributed task coordination, retries, operational visibility, and controlled execution across enterprise applications."
        },
        {
          "symbol": "DEAP",
          "title": "Data Engineering & Analytics Platform",
          "text": "A governed data product direction for source onboarding, ingestion, transformation, quality, analysis, visualization, and publishing to approved destinations."
        }
      ]
    }
  },
  "record7": {
    "code": "nexusHomePlatform",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "platform",
      "kicker": "Platform overview",
      "heading": "One governed, AI-enabled foundation composed for each journey.",
      "referenceImageCode": "oxaviaHeroTwo",
      "imageAlt": "Team collaborating around a table",
      "items": [
        {
          "title": "Framework",
          "text": "Reusable functional modules, contracts, and AI-ready context."
        },
        {
          "title": "Kickoff",
          "text": "Runnable reference backend and project data for AI-assisted implementation."
        },
        {
          "title": "Axis",
          "text": "BackOffice administration with governed AI assistance for operators."
        },
        {
          "title": "Nexus",
          "text": "Public corporate and demonstration experiences."
        }
      ],
      "href": "/platform",
      "linkLabel": "See the platform"
    }
  },
  "record8": {
    "code": "nexusHomeTechnology",
    "typeCode": "nexusTechnologyType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Technology stack",
      "heading": "Modern tools behind governed, AI-enabled enterprise delivery.",
      "referenceImageCode": "nodicsAboutArchitecture",
      "imageAlt": "Enterprise architects collaboratively mapping a governed technology journey",
      "items": [
        "AI-assisted engineering",
        "AI-assisted administration",
        "Node.js",
        "Express.js",
        "TypeScript",
        "React",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "Apache Kafka",
        "ActiveMQ",
        "OpenAPI",
        "Container-ready"
      ]
    }
  },
  "record9": {
    "code": "nexusHomeSupport",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "support",
      "kicker": "Nodics support",
      "heading": "Support designed for governed enterprise delivery.",
      "body": "Nodics support is structured around clear ownership, response expectations, and evidence-led resolution — so teams know where to go, what to provide, and how issues move from intake to closure.",
      "href": "/support",
      "linkLabel": "Explore support model",
      "items": [
        {
          "symbol": "CONTRACT",
          "title": "Support contracts",
          "text": "Structured support options for partners and customers who need defined ownership, response windows, and escalation paths."
        },
        {
          "symbol": "EVIDENCE",
          "title": "Issue readiness",
          "text": "Clear intake guidance helps teams provide environment, logs, runtime context, and reproduction details from the beginning."
        },
        {
          "symbol": "RESOLVE",
          "title": "Resolution model",
          "text": "Support is handled through severity, business impact, evidence, and module ownership — not generic ticket movement."
        }
      ]
    }
  },
  "record10": {
    "code": "nexusHomeDevelopers",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "AI-enabled developer experience",
      "heading": "Run the reference solution, then build with an informed AI collaborator.",
      "body": "Start the framework, Kickoff, Axis, and Nexus locally. Let AI inspect the working contracts and accelerate project-owned code, configuration, tests, and integrations without hiding architectural decisions.",
      "href": "/developers",
      "linkLabel": "Developer journey",
      "referenceImageCode": "nodicsDeveloperExperience",
      "imageAlt": "Enterprise software engineer working with a connected modular application architecture"
    }
  },
  "record11": {
    "code": "nexusHomeGithub",
    "typeCode": "nexusGithubType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "GitHub and open source",
      "heading": "One workspace. Four clear project responsibilities.",
      "body": "Explore the framework, reference runtime, administrative experience, and public storefront together. Each repository owns a distinct layer while participating in one end-to-end Nodics developer journey.",
      "organizationHref": "https://github.com/Nodics",
      "organizationLabel": "Explore the Nodics organization",
      "developerKicker": "AI-enabled developer experience",
      "developerHeading": "Run the reference solution, then build with an informed AI collaborator.",
      "developerBody": "Start the framework, Kickoff, Axis, and Nexus locally. Let AI inspect the working contracts and accelerate project-owned code, configuration, tests, and integrations without hiding architectural decisions.",
      "developerHref": "/developers",
      "developerLinkLabel": "Developer journey",
      "referenceImageCode": "nodicsDeveloperExperience",
      "imageAlt": "Enterprise software engineer working with a connected modular application architecture",
      "repositories": [
        {
          "name": "nodics.ai",
          "role": "Framework",
          "description": "Enterprise framework, modular contracts, reusable capabilities, and governed runtime foundations.",
          "href": "https://github.com/Nodics/nodics.ai"
        },
        {
          "name": "nodics.kickoff",
          "role": "Reference runtime",
          "description": "Runnable project composition, environment configuration, and reference data for local evaluation.",
          "href": "https://github.com/Nodics/nodics.kickoff"
        },
        {
          "name": "nodics.axis",
          "role": "Administration",
          "description": "BackOffice experience for discovering and operating the capabilities exposed by the runtime.",
          "href": "https://github.com/Nodics/nodics.axis"
        },
        {
          "name": "nodics.nexus",
          "role": "Public experience",
          "description": "Corporate and reference storefront frontend built from backend-managed content components.",
          "href": "https://github.com/Nodics/nodics.nexus"
        }
      ]
    }
  },
  "record12": {
    "code": "nexusHomeEcosystem",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "ecosystem",
      "kicker": "Ecosystem and partners",
      "heading": "Build together, clearly.",
      "body": "Nodics connects framework maintainers, delivery partners, developers, and customers through explicit contracts. Reuse what belongs to the platform, extend what belongs to the project, and contribute improvements at the right boundary.",
      "items": [
        {
          "title": "Build with Nodics",
          "text": "Developers use documented modules, APIs, renderers, and reference applications to move from evaluation to working journeys."
        },
        {
          "title": "Deliver as a partner",
          "text": "Implementation partners accelerate customer delivery through reusable expertise while keeping integrations and customization project-owned."
        },
        {
          "title": "Evolve as a customer",
          "text": "Customers retain control of business policy, data, branding, providers, and operational decisions on an upgradeable foundation."
        }
      ],
      "href": "/ecosystem",
      "linkLabel": "Explore partnership paths"
    }
  },
  "record13": {
    "code": "nexusHomeTestimonials",
    "typeCode": "nexusTestimonialsType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "testimonials",
      "kicker": "Testimonials",
      "heading": "Partner and customer perspectives.",
      "body": "Illustrative profiles preview the intended experience and will be replaced with approved customer testimonials.",
      "items": [
        {
          "quote": "Nodics gave our engineering teams a shared foundation without taking away their freedom to deliver domain-specific experiences.",
          "name": "Aarohi Mehta",
          "role": "Illustrative profile · Director of Platform Engineering",
          "avatarReferenceImageCode": "nexusTestimonialAarohi",
          "avatarAlt": "Illustrative portrait of Aarohi Mehta"
        },
        {
          "quote": "The modular architecture made complex enterprise boundaries easier to understand, govern, and evolve across delivery teams.",
          "name": "Marcus Reed",
          "role": "Illustrative profile · Enterprise Solutions Architect",
          "avatarReferenceImageCode": "nexusTestimonialMarcus",
          "avatarAlt": "Illustrative portrait of Marcus Reed"
        },
        {
          "quote": "With Axis and AI-assisted workflows, our teams can move from configuration to a working customer journey with far greater clarity.",
          "name": "Daniel Kim",
          "role": "Illustrative profile · Head of Commerce Technology",
          "avatarReferenceImageCode": "nexusTestimonialDaniel",
          "avatarAlt": "Illustrative portrait of Daniel Kim"
        }
      ],
      "emptyMessage": "Verified partner and customer perspectives are being prepared."
    }
  },
  "record14": {
    "code": "nexusHomeNews",
    "typeCode": "nexusNewsCarouselType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "news",
      "kicker": "Latest news",
      "heading": "What is taking shape across Nodics.",
      "href": "/news",
      "linkLabel": "View all news",
      "items": [
        {
          "label": "Nexus",
          "title": "Nexus public experience now reads governed backend content.",
          "summary": "News, blogs, testimonials, and contact forms are moving from static preview data to backend-owned delivery contracts.",
          "href": "/news/nexus-public-experience-governed-by-wcms",
          "linkLabel": "Read news",
          "referenceImageCode": "nexusNewsPublicExperience",
          "imageAlt": "Governed public Nexus experience connected to backend content"
        },
        {
          "label": "Axis",
          "title": "Axis business journeys align with registered runtime capability.",
          "summary": "BackOffice navigation and workspaces now present authorized backend capability rather than frontend-owned assumptions.",
          "href": "/news/axis-business-journeys-align-with-runtime-capability",
          "linkLabel": "Read news",
          "referenceImageCode": "nexusNewsAxisRuntime",
          "imageAlt": "Axis BackOffice capability connected to registered runtime modules"
        },
        {
          "label": "Engagement",
          "title": "Engagement APIs now power Nexus contact and testimonial journeys.",
          "summary": "The reference site can load approved testimonial projections and submit contact requests through the registered Engagement runtime.",
          "href": "/news/engagement-public-api-connects-nexus-contact-and-testimonials",
          "linkLabel": "Read news",
          "referenceImageCode": "nexusNewsEngagementApi",
          "imageAlt": "Engagement public APIs connecting Nexus contact and testimonial journeys"
        },
        {
          "label": "Editorial",
          "title": "Editorial release flow validates governed News and Blog publishing.",
          "summary": "Authoring, approval, nPublish activation, online projection, and Nexus delivery now have a repeatable acceptance path.",
          "href": "/news/editorial-release-flow-validates-news-and-blog-publishing",
          "linkLabel": "Read news",
          "referenceImageCode": "nexusNewsEditorialRelease",
          "imageAlt": "Governed editorial release flow for news and blog publishing"
        }
      ]
    }
  },
  "record15": {
    "code": "nexusHomeBlogs",
    "typeCode": "nexusBlogCarouselType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "blogs",
      "kicker": "Nodics insights",
      "heading": "Ideas, updates, and engineering notes.",
      "href": "/blogs",
      "linkLabel": "View all insights",
      "items": [
        {
          "label": "Engagement",
          "title": "Building customer engagement as an enterprise capability.",
          "summary": "Reviews, feedback, testimonials, and contact submissions need one governed process from intake to approval and visibility.",
          "href": "/blog/building-customer-engagement-as-an-enterprise-capability",
          "linkLabel": "Read insight",
          "referenceImageCode": "nexusBlogCustomerEngagement",
          "imageAlt": "Customer engagement capability connected to governed Nexus public journeys"
        },
        {
          "label": "Editorial",
          "title": "Editorial publication without frontend data ownership.",
          "summary": "Nexus renderers stay executable and reusable while article truth is governed, localized, published, and delivered by WCMS.",
          "href": "/blog/editorial-publication-without-frontend-data-ownership",
          "linkLabel": "Read insight",
          "referenceImageCode": "nexusBlogEditorialPublication",
          "imageAlt": "Governed editorial publication delivered through Nodics CMS"
        },
        {
          "label": "Runtime",
          "title": "Why runtime discovery beats hardcoded service URLs.",
          "summary": "Customer projects stay portable when frontend experiences resolve backend ownership from the module registry and public bootstrap.",
          "href": "/blog/why-runtime-discovery-beats-hardcoded-service-urls",
          "linkLabel": "Read insight",
          "referenceImageCode": "nexusBlogRuntimeDiscovery",
          "imageAlt": "Runtime service discovery for portable Nodics frontend applications"
        },
        {
          "label": "Axis",
          "title": "Designing Axis for clean business operations.",
          "summary": "A usable BackOffice should expose governed tasks clearly without duplicating module authority or overwhelming the operator.",
          "href": "/blog/designing-axis-for-clean-business-operations",
          "linkLabel": "Read insight",
          "referenceImageCode": "nexusBlogAxisOperations",
          "imageAlt": "Axis business operations composed through clean framework capability"
        }
      ]
    }
  },
  "record16": {
    "code": "nexusHomeContact",
    "typeCode": "nexusContactType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "contact",
      "kicker": "Start a conversation",
      "heading": "Turn your next enterprise challenge into a working journey.",
      "body": "Tell us where you are starting and what outcome matters. We can explore the framework, shape an implementation path, or define how we work together.",
      "href": "/contact",
      "linkLabel": "Start the conversation",
      "items": [
        {
          "title": "Evaluate Nodics",
          "text": "Understand the framework, reference applications, architecture, and fit for your enterprise landscape."
        },
        {
          "title": "Plan an implementation",
          "text": "Shape the journey, ownership boundaries, integrations, delivery model, and practical path from reference to production."
        },
        {
          "title": "Build a partnership",
          "text": "Discuss implementation expertise, reusable contributions, customer delivery, and long-term ecosystem participation."
        }
      ],
      "referenceImageCode": "nodicsContactArchitecture",
      "imageAlt": "Modern enterprise innovation center with connected golden modular light nodes",
      "formKicker": "Contact Nodics",
      "formHeading": "Let's start working.",
      "formBody": "Share a little about your organization, the journey you want to create, and where you need support. We will review your note and get back to you with the right next step.",
      "formFields": [
        {
          "name": "name",
          "label": "Name",
          "type": "text"
        },
        {
          "name": "email",
          "label": "Business email",
          "type": "email"
        },
        {
          "name": "company",
          "label": "Company",
          "type": "text"
        },
        {
          "name": "conversationType",
          "label": "Conversation type",
          "type": "text"
        },
        {
          "name": "message",
          "label": "Message",
          "multiline": true
        }
      ],
      "formSubmitLabel": "Send enquiry",
      "formStatus": "Leave your details and the Nodics team will get back to you shortly."
    }
  },
  "record17": {
    "code": "nexusAboutHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "About Nodics",
      "heading": "Enterprise evolution, under control.",
      "breadcrumbLabel": "About",
      "body": "Reusable capabilities, governed AI, BackOffice operations, and project-owned customization in one clear framework contract.",
      "referenceImageCode": "nodicsAboutArchitecture",
      "imageAlt": "Enterprise architects shaping a connected modular Nodics platform"
    }
  },
  "record18": {
    "code": "nexusFeaturesHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Features",
      "heading": "Composable enterprise capabilities.",
      "breadcrumbLabel": "Features",
      "body": "Explore the reusable foundation for building, operating, securing, and evolving project-owned experiences.",
      "referenceImageCode": "nodicsFeaturesArchitecture",
      "imageAlt": "A golden service module completing an interconnected Nodics enterprise capability system"
    }
  },
  "record19": {
    "code": "nexusProductsHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Products",
      "heading": "Products on the Nodics foundation.",
      "breadcrumbLabel": "Products",
      "body": "Reusable products package repeatable enterprise needs while keeping ownership and governance explicit.",
      "referenceImageCode": "nodicsModularHero",
      "imageAlt": "Composable modules representing Nodics product directions"
    }
  },
  "record20": {
    "code": "nexusSupportHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Support",
      "heading": "From evaluation to delivery.",
      "breadcrumbLabel": "Support",
      "body": "Understand support paths, response expectations, and guidance for implementation and operation.",
      "referenceImageCode": "nodicsSecureHero",
      "imageAlt": "Governed enterprise support and operational controls"
    }
  },
  "record21": {
    "code": "nexusInvestorsHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Investors",
      "heading": "Durable technology ecosystem.",
      "breadcrumbLabel": "Investors",
      "body": "Connect with Nodics to discuss platform vision, ecosystem strategy, and responsible growth.",
      "referenceImageCode": "nodicsAboutArchitecture",
      "imageAlt": "Enterprise architects shaping a connected platform strategy"
    }
  },
  "record22": {
    "code": "nexusDonateHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Support Nodics",
      "heading": "Help Nodics keep evolving.",
      "breadcrumbLabel": "Donate",
      "body": "Contribution channels will be published when ready. Until then, contact Nodics to discuss how you can help.",
      "referenceImageCode": "nodicsAboutCollaboration",
      "imageAlt": "Enterprise team collaborating around Nodics platform evolution"
    }
  },
  "record23": {
    "code": "nexusPlatformHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Platform",
      "heading": "Modular, AI-enabled framework.",
      "breadcrumbLabel": "Platform",
      "body": "See how reusable capabilities, project-owned customization, and governed runtime operations connect.",
      "referenceImageCode": "nodicsMicroservicesHero",
      "imageAlt": "Connected services representing the Nodics platform foundation"
    }
  },
  "record24": {
    "code": "nexusDevelopersHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Developer Experience",
      "heading": "Build with Nodics, without losing the architecture.",
      "breadcrumbLabel": "Developers",
      "body": "Start from a working reference stack, understand the contracts, and use AI assistance to customize only what your project owns.",
      "referenceImageCode": "nodicsDeveloperExperience",
      "imageAlt": "Enterprise software engineer working with a connected modular application architecture"
    }
  },
  "record25": {
    "code": "nexusEcosystemHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Ecosystem",
      "heading": "A clearer way to build enterprise solutions together.",
      "breadcrumbLabel": "Ecosystem",
      "body": "Nodics creates a working space where customers, partners, developers, and framework maintainers can move fast without hiding ownership, support, security, or long-term evolution.",
      "referenceImageCode": "nodicsAboutCollaboration",
      "imageAlt": "Enterprise collaborators working across a connected Nodics ecosystem"
    }
  },
  "record27": {
    "code": "nexusContactHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Contact Nodics",
      "heading": "Start the conversation.",
      "breadcrumbLabel": "Contact",
      "body": "Tell us where you are starting, what matters, and how Nodics can help you evaluate, implement, or partner.",
      "referenceImageCode": "nodicsContactArchitecture",
      "imageAlt": "Modern enterprise innovation center with connected golden modular light nodes"
    }
  },
  "record28": {
    "code": "nexusPrivacyHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Legal",
      "heading": "Privacy with clear boundaries.",
      "breadcrumbLabel": "Privacy",
      "body": "How Nexus handles visitor information, contact requests, documentation access, evaluation data, and security responsibilities.",
      "referenceImageCode": "nodicsSecureHero",
      "imageAlt": "Secure enterprise controls representing Nodics privacy governance"
    }
  },
  "record29": {
    "code": "nexusTermsHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Legal",
      "heading": "Clear use, clear responsibilities.",
      "breadcrumbLabel": "Terms",
      "body": "Rules for using this website, evaluating Nodics materials, linking to documentation, and respecting the Nodics license.",
      "referenceImageCode": "nodicsSecureHero",
      "imageAlt": "Secure enterprise controls representing Nodics terms governance"
    }
  },
  "record30": {
    "code": "nexusCookiesHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Legal",
      "heading": "Useful, explainable cookies.",
      "breadcrumbLabel": "Cookies",
      "body": "How Nexus uses essential browser storage and how analytics or preference cookies should be introduced with clear notice.",
      "referenceImageCode": "nodicsSecureHero",
      "imageAlt": "Secure enterprise controls representing Nodics cookie governance"
    }
  },
  "record31": {
    "code": "nexusEditorialListingHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Editorial",
      "heading": "Nodics news and insights.",
      "breadcrumbLabel": "Blogs",
      "body": "Read architecture notes, platform updates, developer guidance, and ecosystem stories.",
      "referenceImageCode": "nodicsAboutArchitecture",
      "imageAlt": "Enterprise architects preparing a connected documentation and editorial gateway"
    }
  },
  "record32": {
    "code": "nexusEditorialDetailHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Blog",
      "heading": "Governed editorial journeys.",
      "breadcrumbLabel": "Article",
      "body": "A reference article showing how Nexus renders editorial content through backend-managed composition.",
      "referenceImageCode": "nodicsFeaturesArchitecture",
      "imageAlt": "A modular enterprise capability completing a connected architecture"
    }
  },
  "record33": {
    "code": "nexusAboutContent",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "about-story",
      "kicker": "Our story",
      "heading": "Nodics exists to make enterprise delivery composable, governed, and easier to understand.",
      "body": "Enterprise programs often repeat the same hard work: identity, catalog, content, workflow, communication, administration, integrations, security, observability, and release governance. Nodics turns those foundations into reusable framework capabilities while keeping customer-specific decisions in the project where they belong.",
      "detailItems": [
        {
          "eyebrow": "Problem",
          "title": "Enterprise delivery becomes expensive when every project rebuilds the base.",
          "text": "Teams lose time recreating common capability, wiring administrative tools, and explaining ownership again and again."
        },
        {
          "eyebrow": "Approach",
          "title": "Nodics separates reusable platform contracts from project-owned journeys.",
          "text": "The framework supplies stable capabilities; implementation teams configure, extend, and compose them for their customer context."
        },
        {
          "eyebrow": "Outcome",
          "title": "Developers, partners, and operators can start from a working reference system.",
          "text": "Kickoff demonstrates backend runtime and data, Axis manages operations, and Nexus explains the ecosystem through public experiences."
        }
      ],
      "metrics": [
        {
          "value": "Core",
          "label": "Reusable capability foundation"
        },
        {
          "value": "Axis",
          "label": "Operational control plane"
        },
        {
          "value": "AI",
          "label": "Assisted, governed delivery"
        }
      ],
      "referenceImageCode": "nodicsAboutVerticalWorkshop",
      "imageAlt": "Enterprise architects working with a vertical golden modular Nodics framework map"
    }
  },
  "record34": {
    "code": "nexusAboutPrinciples",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "about-principles",
      "kicker": "What guides us",
      "heading": "Principles that keep delivery fast without making the platform fragile.",
      "body": "Nodics is intentionally opinionated about ownership, contracts, and operational evidence. That discipline helps customers and partners move faster while keeping future change manageable.",
      "items": [
        {
          "symbol": "OWN",
          "title": "Explicit ownership",
          "text": "Keep framework, project, data, frontend, and operational responsibilities visible so teams can evolve without parallel authority."
        },
        {
          "symbol": "AI",
          "title": "Governed intelligence",
          "text": "Use AI to accelerate engineering and administration while permissions, approvals, evidence, and final authority remain human-controlled."
        },
        {
          "symbol": "EVO",
          "title": "Evolution by design",
          "text": "Compose modular capabilities through stable contracts so customer journeys can change without rebuilding the foundation."
        },
        {
          "symbol": "SEC",
          "title": "Security as contract",
          "text": "Treat tenant scope, authorization, private media, route exposure, and audit evidence as part of the product design."
        },
        {
          "symbol": "OPS",
          "title": "Operations first",
          "text": "Expose capabilities through Axis so administrators can manage data, schemas, content, and runtime behavior with confidence."
        },
        {
          "symbol": "DX",
          "title": "Developer clarity",
          "text": "Make local setup, module boundaries, generated contracts, and documentation easy to inspect before teams customize."
        }
      ]
    }
  },
  "record35": {
    "code": "nexusAboutPromise",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "about-promise",
      "kicker": "Our promise",
      "heading": "A practical path from evaluation to a working enterprise application.",
      "body": "Nodics is built for the way real enterprise programs move: first prove the platform locally, then understand ownership, then adapt journeys, then operate and evolve with evidence.",
      "detailItems": [
        {
          "eyebrow": "01",
          "title": "Run the reference system",
          "text": "Start with the framework, Kickoff backend data, Axis administration, and Nexus public experience running locally."
        },
        {
          "eyebrow": "02",
          "title": "Understand the contracts",
          "text": "Use documentation, generated schemas, API reference, and Axis workbenches to see what each module owns."
        },
        {
          "eyebrow": "03",
          "title": "Customize what the project owns",
          "text": "Rename, configure, extend, integrate, and style the customer journey without modifying framework ownership."
        },
        {
          "eyebrow": "04",
          "title": "Operate with confidence",
          "text": "Manage content, data, security, and runtime behavior through controlled administrative and AI-assisted workflows."
        }
      ],
      "metrics": [
        {
          "value": "Run",
          "label": "Local reference"
        },
        {
          "value": "Learn",
          "label": "Framework contracts"
        },
        {
          "value": "Evolve",
          "label": "Customer journeys"
        }
      ],
      "referenceImageCode": "nodicsAboutVerticalOperations",
      "imageAlt": "Enterprise operator reviewing a vertical Nodics journey from local setup to governed live operation",
      "href": "/docs",
      "linkLabel": "Explore the Nodics Wiki"
    }
  },
  "record36": {
    "code": "nexusFeaturesContent",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "feature-overview",
      "kicker": "Business capability layer",
      "heading": "Turn common enterprise work into reusable business capability.",
      "body": "Nodics helps partners move faster without hiding the controls that enterprise delivery needs: ownership, operations, security, documentation, and change readiness.",
      "items": [
        {
          "symbol": "TTV",
          "title": "Faster time to value",
          "text": "Start from a working reference platform instead of rebuilding identity, content, operations, documentation, and API foundations for every project."
        },
        {
          "symbol": "CTL",
          "title": "Business control",
          "text": "Manage content, imports, documentation, schemas, and operational visibility through governed BackOffice experiences instead of hidden scripts."
        },
        {
          "symbol": "OWN",
          "title": "Clear ownership",
          "text": "Know what belongs to the framework, what belongs to the customer project, and what can be extended without creating a long-term fork."
        },
        {
          "symbol": "RUN",
          "title": "Operational readiness",
          "text": "Use runtime modules, API contracts, import releases, and documentation packs as evidence before promoting a journey beyond local preview."
        },
        {
          "symbol": "SEC",
          "title": "Safer growth",
          "text": "Keep tenant scope, authorization, private media, audit-sensitive actions, and public route exposure visible as the product scales."
        }
      ],
      "href": "/docs",
      "linkLabel": "Explore the framework"
    }
  },
  "record37": {
    "code": "nexusProductsContent",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "product-overview",
      "kicker": "Product philosophy",
      "heading": "Productized capability without losing framework ownership.",
      "body": "Nodics products are not isolated applications. They are reusable capability packages built on the same framework contract, so partners can adopt a productized journey while still knowing what is reusable, configurable, and project-owned.",
      "items": [
        {
          "symbol": "OWN",
          "title": "Clear ownership",
          "text": "Every product direction keeps source ownership explicit across framework modules, customer extensions, CMS data, renderers, and operational controls."
        },
        {
          "symbol": "OPS",
          "title": "Operational by design",
          "text": "Products are expected to expose administration, visibility, support evidence, import/export readiness, and documentation from the beginning."
        },
        {
          "symbol": "AI",
          "title": "AI-assisted delivery",
          "text": "AI can help teams generate, inspect, document, and operate product journeys because the contracts, schemas, and boundaries are visible."
        },
        {
          "symbol": "EXT",
          "title": "Project extension",
          "text": "Customer-specific payment, fulfillment, analytics, data, compliance, and integration behavior lives in project-owned extensions, not hidden framework forks."
        }
      ]
    }
  },
  "record57": {
    "code": "nexusProductsSuite",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "product-suite",
      "kicker": "Product suite",
      "heading": "Focused product directions for repeatable enterprise needs.",
      "body": "The first Nodics product directions focus on work that many enterprise journeys need repeatedly: controlled task execution and governed data engineering. Each product should remain modular, observable, and extensible through the Nodics runtime.",
      "items": [
        {
          "symbol": "TEE",
          "title": "Task Execution Engine",
          "text": "A reusable execution product for persisted scheduling, distributed task coordination, retries, operator visibility, and controlled execution across project runtimes."
        },
        {
          "symbol": "DEAP",
          "title": "Data Engineering & Analytics Platform",
          "text": "A governed data product direction for source onboarding, ingestion, transformation, quality, analysis, visualization, and publishing to approved destinations."
        },
        {
          "symbol": "NEX",
          "title": "Nexus reference experience",
          "text": "A public and demo-facing experience proving that CMS content, documentation, APIs, media, and product journeys can be composed without hardcoded pages."
        }
      ]
    }
  },
  "record58": {
    "code": "nexusProductsOperatingModel",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "product-operating-model",
      "kicker": "Operating model",
      "heading": "Products should be installable, visible, and safely extensible.",
      "body": "A Nodics product is useful only when a partner can run it locally, inspect its contracts, understand its data, manage it from Axis, render its public experience through Nexus when needed, and extend customer-specific behavior without breaking the reusable core.",
      "detailItems": [
        {
          "eyebrow": "01",
          "title": "Backend-owned capability",
          "text": "Business rules, schemas, imports, APIs, and runtime services stay with the owning backend module or product package."
        },
        {
          "eyebrow": "02",
          "title": "Axis-managed operation",
          "text": "Registration, activation, workbenches, visibility, API reference, content, and support controls should become administrable instead of script-only."
        },
        {
          "eyebrow": "03",
          "title": "Nexus-rendered experience",
          "text": "Public product pages, documentation gateways, and demo journeys render from managed content and frontend renderers."
        },
        {
          "eyebrow": "04",
          "title": "Customer-owned extension",
          "text": "Project teams add integrations, policies, copy, branding, and process customizations in their own modules and data packs."
        }
      ],
      "metrics": [
        {
          "value": "Run",
          "label": "local proof"
        },
        {
          "value": "Inspect",
          "label": "contracts"
        },
        {
          "value": "Extend",
          "label": "safely"
        }
      ],
      "referenceImageCode": "nodicsProductOperatingModel",
      "imageAlt": "Installable product module placed into a visible and safely extensible Nodics operating model"
    }
  },
  "record59": {
    "code": "nexusProductsReadiness",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "product-readiness",
      "kicker": "Readiness path",
      "heading": "From framework capability to product-grade journey.",
      "body": "Productization should not mean hiding complexity. It means packaging repeatable capability with enough contracts, data, documentation, operations, and support clarity that a partner can adopt it confidently.",
      "items": [
        {
          "symbol": "01",
          "title": "Foundation available",
          "text": "Use the framework, Kickoff, Axis, Nexus, documentation, OpenAPI reference, CMS, and module registry as the reference foundation."
        },
        {
          "symbol": "02",
          "title": "Product journey shaped",
          "text": "Define the product package, backend ownership, managed content, sample data, workbenches, APIs, and acceptance evidence."
        },
        {
          "symbol": "03",
          "title": "Customer solution composed",
          "text": "Rename, configure, integrate, brand, and extend the product for the customer while preserving upgradeable framework boundaries."
        }
      ],
      "href": "/contact",
      "linkLabel": "Discuss a product journey"
    }
  },
  "record38": {
    "code": "nexusSupportContent",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "support-overview",
      "kicker": "Support model",
      "heading": "Support should be clear before the project is critical.",
      "body": "Nodics support starts with transparent public material, then adds guided evaluation, launch readiness, and contracted operational support when a team needs committed accountability.",
      "items": [
        {
          "symbol": "DOC",
          "title": "Self-service knowledge",
          "text": "Use Nexus Wiki, API reference, and repository evidence to understand framework contracts, setup, modules, and operational behavior before raising a request."
        },
        {
          "symbol": "GUIDE",
          "title": "Implementation guidance",
          "text": "Get help with architecture direction, module boundaries, data-pack ownership, renderer behavior, and AI-assisted customization practices."
        },
        {
          "symbol": "READY",
          "title": "Launch readiness",
          "text": "Review release evidence, environment setup, documentation packs, API exposure, import status, security posture, and operational checkpoints before go-live."
        }
      ],
      "href": "/docs",
      "linkLabel": "Open Wiki"
    }
  },
  "record39": {
    "code": "nexusInvestorsContent",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Investors",
      "heading": "Help shape a durable enterprise technology ecosystem.",
      "body": "Connect with Nodics to discuss the platform vision, ecosystem strategy, and responsible opportunities to support its growth.",
      "href": "/contact",
      "linkLabel": "Contact Nodics"
    }
  },
  "record40": {
    "code": "nexusDonateContent",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Donate",
      "heading": "Support the continued development of Nodics.",
      "body": "Donation options will be published after the approved contribution channel and governance process are available. Contact Nodics if you would like to help today.",
      "href": "/contact",
      "linkLabel": "Contact Nodics"
    }
  },
  "record41": {
    "code": "nexusPlatformContent",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Platform",
      "heading": "Modular, AI-enabled framework.",
      "body": "Nodics combines AI-assisted engineering and administration with runtime composition, content, commerce, identity, workflow, communication, media, security, and observability. Detailed architecture and APIs remain in documentation.",
      "href": "https://docs.nodics.in",
      "linkLabel": "Open documentation"
    }
  },
  "record42": {
    "code": "nexusDevelopersContent",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "developer-overview",
      "kicker": "Developer foundation",
      "heading": "Build faster without losing engineering control.",
      "body": "Nodics gives developers a governed starting point for enterprise delivery: reusable capabilities, visible contracts, AI-assisted workflows, and clear project boundaries that stay understandable as teams customize.",
      "referenceImageCode": "nodicsDeveloperContractWorkshop",
      "imageAlt": "Developers planning governed Nodics project contracts in an enterprise workspace",
      "detailItems": [
        {
          "eyebrow": "Start",
          "title": "Run the reference stack before changing it.",
          "text": "Bring up nodics.ai, nodics.kickoff, nodics.axis, and nodics.nexus to see the framework, runtime, admin console, and public experience working together."
        },
        {
          "eyebrow": "Understand",
          "title": "Inspect contracts before writing project code.",
          "text": "Use Axis, documentation, API reference, schemas, content packs, and runtime registration to see which capability owns each decision."
        },
        {
          "eyebrow": "Customize",
          "title": "Extend the project boundary, not the framework core.",
          "text": "Rename Kickoff and Nexus for the customer, then add project-owned data, integrations, providers, tests, and presentation changes through clear extension points."
        }
      ],
      "metrics": [
        {
          "value": "4",
          "label": "Reference repositories"
        },
        {
          "value": "1",
          "label": "Working local journey"
        },
        {
          "value": "AI",
          "label": "Assisted but governed"
        }
      ],
      "href": "/docs",
      "linkLabel": "Open Wiki"
    }
  },
  "record43": {
    "code": "nexusEcosystemContent",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "ecosystem-overview",
      "kicker": "Ecosystem model",
      "heading": "Shared foundation. Customer-owned outcomes.",
      "body": "The goal is simple: stop rebuilding the same enterprise foundation for every customer, while still giving each project the freedom to own its data, integrations, brand, journey, and operating model.",
      "items": [
        {
          "symbol": "BASE",
          "title": "Start from working capability",
          "text": "Partners begin with a runnable framework, reference backend, Axis BackOffice, Nexus public site, docs, APIs, sample data, and visible module contracts."
        },
        {
          "symbol": "OWN",
          "title": "Keep customer work separate",
          "text": "Customer-specific rules, content, integrations, providers, payment, fulfilment, branding, and operating policy stay in the project boundary."
        },
        {
          "symbol": "LOOP",
          "title": "Feed reusable learning back",
          "text": "When a project exposes a useful pattern, it can be reviewed and promoted into reusable framework capability without carrying customer-specific assumptions."
        }
      ],
      "href": "/contact",
      "linkLabel": "Start a partnership conversation"
    }
  },
  "record90": {
    "code": "nexusEcosystemRoles",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "ecosystem-roles",
      "kicker": "Who it serves",
      "heading": "Different teams, one operating language.",
      "body": "A healthy ecosystem is not only a GitHub repository. It is the agreement between people who evaluate, sell, implement, operate, support, extend, document, and evolve enterprise journeys.",
      "items": [
        {
          "symbol": "CXO",
          "title": "Customers and business owners",
          "text": "See what is available, what must be customized, what can be operated in Axis, and what evidence exists before trusting the platform for real delivery."
        },
        {
          "symbol": "PART",
          "title": "Implementation partners",
          "text": "Use the reference stack to accelerate proposals, demos, discovery, solution shaping, and delivery while keeping customer extensions upgrade-friendly."
        },
        {
          "symbol": "DEV",
          "title": "Developers and architects",
          "text": "Inspect schemas, APIs, routes, documentation, CMS data, module registration, and ownership boundaries before changing production behavior."
        },
        {
          "symbol": "AXIS",
          "title": "Operators and administrators",
          "text": "Manage content, records, configuration, API reference, documentation, support evidence, testimonials, and approvals through governed BackOffice flows."
        }
      ]
    }
  },
  "record91": {
    "code": "nexusEcosystemContribution",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "ecosystem-contribution",
      "kicker": "Partner value",
      "heading": "Make delivery repeatable without making it rigid.",
      "body": "Nodics should help partners protect margin and quality: less repeated foundation work, more visible contracts, better support evidence, and safer AI-assisted delivery.",
      "items": [
        {
          "symbol": "01",
          "title": "Shorter discovery-to-demo cycle",
          "text": "Show a working local journey quickly, then focus the conversation on customer outcomes instead of rebuilding platform plumbing."
        },
        {
          "symbol": "02",
          "title": "Cleaner implementation ownership",
          "text": "Know which change belongs in the framework, which belongs in Kickoff-style project modules, and which belongs only to the customer."
        },
        {
          "symbol": "03",
          "title": "Better support conversations",
          "text": "Use documentation, API reference, CMS state, release manifests, logs, and Axis visibility to discuss issues with evidence, not guesswork."
        },
        {
          "symbol": "04",
          "title": "Governed community signal",
          "text": "Approved testimonials, implementation notes, partner stories, and reusable patterns can be reviewed in Axis before they appear publicly."
        }
      ]
    }
  },
  "record89": {
    "code": "nexusEcosystemJourney",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "ecosystem-journey",
      "kicker": "Collaboration path",
      "heading": "From first clone to trusted customer delivery.",
      "body": "The ecosystem journey should feel practical: prove the platform, understand the boundaries, shape the customer solution, then contribute what truly belongs back to the shared foundation.",
      "items": [
        {
          "symbol": "RUN",
          "title": "Experience",
          "text": "Run the local reference stack and see the framework, runtime, BackOffice, public site, documentation, and API contract working together."
        },
        {
          "symbol": "SEE",
          "title": "Map",
          "text": "Identify which capabilities are reusable, which data belongs to the project, and where customer-specific integration or policy must live."
        },
        {
          "symbol": "MAKE",
          "title": "Deliver",
          "text": "Customize the project boundary, activate the required modules, connect providers, shape the public experience, and manage operations through Axis."
        },
        {
          "symbol": "GROW",
          "title": "Contribute",
          "text": "Promote reusable improvements, documentation, and partner knowledge without exposing customer data, commercial context, or private implementation detail."
        }
      ],
      "href": "/developers",
      "linkLabel": "Open developer path"
    }
  },
  "record45": {
    "code": "nexusContactContent",
    "typeCode": "nexusContactType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Start with clarity",
      "heading": "Tell us where your enterprise journey needs to move next.",
      "body": "Whether you are evaluating Nodics, planning a customer implementation, or exploring a delivery partnership, start with the outcome you want to create. We will route the conversation to the right next step.",
      "items": [
        {
          "title": "Evaluate the framework",
          "text": "Discuss architecture, module ownership, documentation, local setup, and whether Nodics fits your enterprise platform direction."
        },
        {
          "title": "Plan a customer journey",
          "text": "Shape the first implementation path, project boundaries, integrations, support expectations, and the safest route from reference to production."
        },
        {
          "title": "Explore partnership",
          "text": "Talk about implementation collaboration, ecosystem contribution, commercial alignment, and long-term capability ownership."
        }
      ],
      "referenceImageCode": "nodicsContactArchitecture",
      "imageAlt": "Modern enterprise innovation center with connected golden modular light nodes",
      "formKicker": "Contact Nodics",
      "formHeading": "Share the starting point.",
      "formBody": "Tell us who you are, what you are trying to build, and whether the conversation is about evaluation, implementation, support, or partnership. Keep it simple; we can add detail together.",
      "formFields": [
        {
          "name": "name",
          "label": "Name",
          "type": "text"
        },
        {
          "name": "email",
          "label": "Business email",
          "type": "email"
        },
        {
          "name": "company",
          "label": "Organization",
          "type": "text"
        },
        {
          "name": "conversationType",
          "label": "Conversation type",
          "type": "text"
        },
        {
          "name": "message",
          "label": "What should we explore?",
          "multiline": true
        }
      ],
      "formSubmitLabel": "Send enquiry",
      "formStatus": "Your message will be reviewed and routed to the right Nodics conversation.",
      "testimonialKicker": "Tell us if you like Nodics",
      "testimonialHeading": "Share your Nodics moment with the community.",
      "testimonialBody": "If Nodics made the framework, delivery model, documentation, or BackOffice experience clearer for you, we would love to hear it. Approved testimonials can later be reviewed in Axis before they appear publicly.",
      "testimonialItems": [
        "What problem were you trying to solve?",
        "Which Nodics capability or idea helped most?",
        "What should other teams know before they start?"
      ],
      "testimonialLinkLabel": "Submit",
      "testimonialStatus": "Your note becomes a governed testimonial candidate. Axis users can review, curate, approve, and publish it later."
    }
  },
  "record46": {
    "code": "nexusPrivacyContent",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Privacy Policy",
      "heading": "We collect only what is needed to explain, support, secure, and improve Nodics.",
      "body": "This policy is written for Nodics Nexus visitors, evaluators, partners, contributors, and customer teams. It summarizes the intended public-site privacy posture for the local reference site and should be reviewed against the final production hosting, analytics, support, and legal setup before deployment.",
      "summary": "Nexus is designed as a public information, documentation, and evaluation experience. We keep visitor data limited, purposeful, and separate from production customer records.",
      "effectiveLabel": "Privacy commitment",
      "effectiveDate": "Clear purpose · limited collection · secure handling",
      "policyHighlights": [
        {
          "label": "Contact",
          "value": "nodics.framework@gmail.com"
        },
        {
          "label": "Protected by design",
          "value": "Tenant scope, token boundaries, audit controls, and private media rules"
        },
        {
          "label": "Data boundary",
          "value": "Public-site data is not production customer, payment, or sensitive business data"
        }
      ],
      "policySections": [
        {
          "title": "Information we may collect",
          "body": "Nexus may collect information that you choose to provide and limited technical information needed to operate the site.",
          "items": [
            "Contact details submitted through enquiry, support, partner, investor, or evaluation forms, such as name, organization, email address, role, and message content.",
            "Technical request data such as IP address, browser type, device information, referring page, timestamps, page path, and security logs generated by hosting or backend services.",
            "Documentation and API reference usage signals, if analytics are enabled, to understand which public materials help visitors most.",
            "Communication records when you email Nodics or interact with approved support, security, partner, or contributor channels."
          ]
        },
        {
          "title": "How we use information",
          "body": "We use information for legitimate product, security, support, and communication purposes connected with Nodics.",
          "items": [
            "Respond to enquiries, product evaluation requests, partner conversations, support questions, and vulnerability reports.",
            "Operate Nexus, documentation, public API references, and related backend delivery services safely and reliably.",
            "Improve public content, onboarding journeys, documentation clarity, and developer experience.",
            "Protect against abuse, unauthorized access, spam, scraping, service disruption, and accidental exposure of private content.",
            "Maintain records required by commercial, partner, contributor, evaluation, security, or legal obligations."
          ]
        },
        {
          "title": "How information is shared",
          "body": "Nodics does not sell public-site visitor information. Information may be shared only where needed to operate, secure, support, or comply.",
          "items": [
            "With infrastructure, email, analytics, monitoring, repository, support, or security providers acting for Nodics under appropriate operational controls.",
            "With authorized Nodics personnel, implementation partners, or advisors when they need the information to respond to a request or support an agreed engagement.",
            "When required by law, legal process, contractual obligations, security investigation, or to protect Nodics, customers, partners, or the public.",
            "With a customer or partner organization when the request clearly belongs to that organization’s evaluation, support, or project relationship."
          ]
        },
        {
          "title": "Security and retention",
          "body": "Nodics treats security as a product contract, not a best-effort preference. The same design principles used in the framework apply to Nexus policy data.",
          "items": [
            "Security work must preserve tenant and enterprise scope, service-token versus human-token boundaries, generated-route authorization, private media exposure controls, audit evidence, and module ownership.",
            "Records are retained only for as long as needed for the purpose collected, legal obligations, security investigation, support history, or commercial relationship management.",
            "Sensitive information, credentials, secrets, production customer records, payment data, and private environment details should not be submitted through public forms or emails unless an approved secure channel exists.",
            "Vulnerabilities should be reported through the agreed Nodics support or security contact and should not be publicly disclosed before triage."
          ]
        },
        {
          "title": "Your choices and rights",
          "body": "Depending on your location and relationship with Nodics, you may have rights to access, correct, delete, restrict, object to, or receive a copy of personal information.",
          "items": [
            "You can contact Nodics to request correction, deletion, or clarification of information submitted through Nexus or support conversations.",
            "You can refuse non-essential cookies or analytics where a consent mechanism is provided.",
            "You can choose not to submit optional form fields; however, Nodics may need enough information to respond to a request.",
            "Commercial, partner, contributor, and customer agreements may define additional data handling, retention, audit, or security terms."
          ]
        },
        {
          "title": "International and production deployment notes",
          "body": "Nexus is designed for global enterprise visitors, but production deployment details matter.",
          "items": [
            "Final production policy must reflect the actual hosting region, subprocessors, analytics tools, support channels, consent tooling, retention schedules, and legal entity details.",
            "If a signed agreement with Nodics provides stronger or more specific privacy, confidentiality, data-processing, or security terms, that agreement controls for the covered scope.",
            "This page is informational and should be reviewed by qualified legal counsel before being treated as production legal advice."
          ]
        }
      ],
      "href": "mailto:nodics.framework@gmail.com",
      "linkLabel": "Contact Nodics about privacy"
    }
  },
  "record47": {
    "code": "nexusTermsContent",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Terms of Use",
      "heading": "Nexus is an information gateway; Nodics software use is governed by written agreements.",
      "body": "These terms explain acceptable use of the public Nodics Nexus website, documentation, public API reference, examples, and evaluation materials. They do not replace a signed commercial, partner, evaluation, contributor, support, data-processing, or software license agreement.",
      "summary": "Nexus explains Nodics capabilities and documentation. Software use, production rights, commercial permissions, and partner obligations remain governed by written Nodics agreements.",
      "effectiveLabel": "Use framework",
      "effectiveDate": "Website access · documentation use · license boundaries",
      "policyHighlights": [
        {
          "label": "License model",
          "value": "Source-available commercial license"
        },
        {
          "label": "Agreement priority",
          "value": "Signed Nodics agreements control the covered commercial scope"
        },
        {
          "label": "Public materials",
          "value": "Documentation and examples are provided for evaluation and guidance"
        }
      ],
      "policySections": [
        {
          "title": "Using the website and materials",
          "body": "You may browse Nexus, read public documentation, inspect public API reference information, and contact Nodics for evaluation, partnership, support, or contribution discussions.",
          "items": [
            "Do not misuse the website, interfere with availability, attempt unauthorized access, bypass controls, scrape aggressively, or submit harmful content.",
            "Do not represent public preview content as a binding production commitment unless it appears in a signed Nodics agreement.",
            "Do not rely on examples, local references, screenshots, sample data, or documentation as a substitute for project-specific design, security, testing, or legal review.",
            "Public links to GitHub, Axis, documentation, or third-party sites may open external services with their own terms and policies."
          ]
        },
        {
          "title": "Nodics software and source availability",
          "body": "The Nodics framework and related repositories are governed by the Nodics Source-Available Commercial License and any separate written agreement with Nodics.",
          "items": [
            "Possession of source code does not grant an open-source license, patent license, trademark license, resale right, white-label right, competing platform right, or production-use right unless expressly granted in writing.",
            "Authorized customers, partners, and contributors may inspect, evaluate, customize, and extend Nodics only within the permissions granted by their written agreement.",
            "Customer-specific modules may extend Nodics through documented customization contracts but must not remove notices, bypass license checks, or misrepresent Nodics ownership.",
            "If a signed agreement conflicts with these website terms or the repository license text, the signed agreement controls for the covered scope."
          ]
        },
        {
          "title": "Intellectual property and brand",
          "body": "Nodics, Nodics Nexus, Nodics Axis, logos, product names, framework architecture, documentation, source code, designs, and related materials are owned by Nodics or its licensors unless stated otherwise.",
          "items": [
            "You may not copy, publish, sell, sublicense, host as a competing framework service, or create a substantially similar platform product without written permission.",
            "Feedback, suggestions, or issue reports may be used by Nodics to improve products without creating compensation, ownership transfer, or confidentiality obligations unless agreed separately.",
            "Third-party names, technologies, templates, libraries, and services remain the property of their respective owners."
          ]
        },
        {
          "title": "Accounts, access, and public API reference",
          "body": "Nexus may link to Axis, documentation, or API reference views. Public API reference is read-only and does not grant permission to execute protected APIs.",
          "items": [
            "Authenticated administration, authoring, import/export, schema, media, security, and operational capabilities belong in Axis or backend services and require proper authorization.",
            "Public documentation routes must not be used to infer access to private customer, tenant, employee, environment, or provider data.",
            "Nodics may change, suspend, restrict, or remove access to public preview features, documentation, or demo endpoints to protect security, availability, legal compliance, or product integrity."
          ]
        },
        {
          "title": "No warranty and limitation of liability",
          "body": "Nexus content is provided for information, evaluation, and product communication.",
          "items": [
            "Public content, local preview behavior, examples, roadmaps, reference applications, and generated documentation may change without notice.",
            "Except where a signed agreement states otherwise, materials are provided without implied warranties of merchantability, fitness for a particular purpose, non-infringement, availability, accuracy, or uninterrupted operation.",
            "To the maximum extent allowed by applicable law and any governing written agreement, Nodics is not liable for indirect, incidental, consequential, special, punitive, or lost-profit damages arising from use of the public website."
          ]
        },
        {
          "title": "Security reporting and responsible disclosure",
          "body": "Security reports should follow the Nodics security policy.",
          "items": [
            "Report vulnerabilities through the agreed Nodics support or security contact.",
            "Do not publish exploit details before Nodics has triaged tenant impact, enterprise scope, and remediation timing.",
            "Security fixes must preserve tenant scope, service-token and human-token boundaries, route authorization, private media controls, audit records, and module ownership."
          ]
        }
      ],
      "href": "mailto:nodics.framework@gmail.com",
      "linkLabel": "Contact Nodics about terms"
    }
  },
  "record48": {
    "code": "nexusCookiesContent",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Cookie Policy",
      "heading": "Nexus should use browser storage only when it has a clear purpose.",
      "body": "This policy explains how Nodics Nexus may use cookies, local storage, and similar technologies. The local reference site is designed to avoid marketing cookies by default. Production configuration must match the actual analytics, consent, security, and preference tools that are deployed.",
      "summary": "Nexus should use browser storage only when it improves the visitor experience, protects the service, or supports requested functionality.",
      "effectiveLabel": "Cookie approach",
      "effectiveDate": "Essential first · transparent choices · no hidden tracking",
      "policyHighlights": [
        {
          "label": "Essential use",
          "value": "Required storage supports routing, security, and requested functionality"
        },
        {
          "label": "Analytics",
          "value": "Analytics should be disclosed and consented to where required"
        },
        {
          "label": "Visitor control",
          "value": "Non-essential cookies should remain explainable and optional"
        }
      ],
      "policySections": [
        {
          "title": "What cookies are",
          "body": "Cookies are small files stored by a browser. Similar technologies include local storage, session storage, pixels, and device or browser identifiers.",
          "items": [
            "They can help a site remember a preference, keep a session secure, measure usage, or protect against abuse.",
            "Some cookies are necessary for a requested service. Others, such as analytics or advertising cookies, may require consent depending on jurisdiction and configuration.",
            "Nexus should describe cookies in plain language before non-essential cookies are used."
          ]
        },
        {
          "title": "How Nexus uses storage today",
          "body": "The local Nexus public site is intended to run as a content, documentation, and API reference experience with no marketing cookies by default.",
          "items": [
            "Essential technical storage may be used by browser, hosting, security, or application infrastructure to deliver the page, route requests, prevent abuse, or preserve basic state.",
            "Axis, authenticated administration, or backend services may use separate cookies or tokens for login, CSRF protection, session refresh, and authorized work. Those controls belong to the authenticated application experience, not public marketing tracking.",
            "Public API reference and documentation views should remain view-only unless the user moves into an authenticated system."
          ]
        },
        {
          "title": "Possible production cookie categories",
          "body": "If enabled in production, cookies or similar technologies should be grouped by purpose and disclosed clearly.",
          "items": [
            "Strictly necessary: security, routing, load balancing, consent record, basic preferences, and service delivery requested by the visitor.",
            "Preferences: language, region, display, or documentation view settings when the visitor chooses to save them.",
            "Analytics: aggregated site usage, documentation engagement, search terms, page performance, and error visibility to improve Nexus.",
            "Marketing or third-party embeds: only if explicitly approved and disclosed for production; not part of the local reference baseline."
          ]
        },
        {
          "title": "Consent and control",
          "body": "Visitors should have practical control over non-essential cookies.",
          "items": [
            "Non-essential analytics or marketing cookies should not load until the visitor has been given clear information and, where required, has consented.",
            "Refusing non-essential cookies should not prevent access to core Nexus pages, documentation, or public API reference.",
            "Visitors can also delete or block cookies through browser settings, though blocking necessary cookies may affect some requested services.",
            "Consent withdrawal should be as easy as consent acceptance once production consent tooling is enabled."
          ]
        },
        {
          "title": "Third-party services",
          "body": "Nexus may link to or embed services such as GitHub, documentation tools, analytics, hosting, monitoring, maps, video, or social links.",
          "items": [
            "Third-party services may set their own cookies when you visit their sites or interact with embedded content.",
            "Nodics does not control third-party cookie practices outside Nodics-managed services.",
            "Production policy must list approved third-party cookie providers and explain their purpose, duration, and control options."
          ]
        },
        {
          "title": "Production governance",
          "body": "Cookie behavior is deployment-specific and must stay aligned with the actual runtime.",
          "items": [
            "Before production launch, validate the deployed site with browser inspection and consent tooling to confirm no undeclared cookies are set.",
            "Update this policy whenever analytics, advertising, embeds, consent tooling, hosting, or authenticated-domain behavior changes.",
            "Keep cookie choices consistent with the Privacy Policy, security policy, and any customer, partner, or data-processing agreement."
          ]
        }
      ],
      "href": "mailto:nodics.framework@gmail.com",
      "linkLabel": "Ask about cookies"
    }
  },
  "record49": {
    "code": "nexusEditorialListing",
    "typeCode": "nexusEditorialListingType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics editorial",
      "heading": "News and insights",
      "articles": [
        {
          "code": "editorial-introduction",
          "contentTypeCode": "BLOG",
          "title": "Build governed editorial journeys",
          "summary": "A reference record showing how customer projects compose Editorial delivery with Nexus renderers.",
          "href": "/blog/editorial-introduction"
        }
      ]
    }
  },
  "record50": {
    "code": "nexusEditorialDetail",
    "typeCode": "nexusEditorialDetailType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "contentTypeCode": "BLOG",
      "title": "Build governed editorial journeys",
      "summary": "A safe reference article detail.",
      "bodyText": "Customer projects own CMS composition data while Editorial owns article truth and Nexus owns executable presentation."
    }
  },
  "record51": {
    "code": "nexusAboutMvpScale",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "about-mvp-scale",
      "kicker": "From MVP to scale",
      "heading": "AI can create an MVP quickly. Nodics helps make it scalable.",
      "body": "Vibe coding and AI-assisted development can prove an idea fast, but many MVPs reach their limit when teams need tenants, security, integrations, admin controls, auditability, documentation, and repeatable deployment. Nodics keeps that speed while adding the contracts a real product needs.",
      "items": [
        {
          "symbol": "MVP",
          "title": "Fast prototypes often hide future risk",
          "text": "A working demo can still have mixed responsibilities, direct data access, weak extension boundaries, missing tests, and no clear operations model."
        },
        {
          "symbol": "N",
          "title": "Nodics adds the missing foundation",
          "text": "Reusable modules, schemas, APIs, imports, documentation, Axis administration, and runtime composition make ownership visible before the product grows."
        },
        {
          "symbol": "SCL",
          "title": "Teams scale without throwing the MVP away",
          "text": "Keep the validated customer journey, then move implementation into governed modules, configurable data, secure services, and project-owned extensions."
        }
      ],
      "href": "/docs",
      "linkLabel": "Read the framework guide"
    }
  },
  "record52": {
    "code": "nexusFeaturesPillars",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "feature-pillars",
      "kicker": "Capability pillars",
      "heading": "The platform blocks that make Nodics different.",
      "body": "Nodics is not only a codebase. It is a set of reusable business and operational contracts that help teams move from idea to governed delivery without losing clarity.",
      "items": [
        {
          "symbol": "MOD",
          "title": "Modular by contract",
          "text": "Functional modules define capability ownership while technical modules provide implementation, configuration, APIs, imports, documentation, and tests."
        },
        {
          "symbol": "AI",
          "title": "AI-assisted delivery",
          "text": "AI can inspect framework context, generated contracts, documentation, and runtime behavior while humans keep authority over architecture and release decisions."
        },
        {
          "symbol": "AX",
          "title": "BackOffice built in",
          "text": "Axis gives operators and developers a governed control plane for modules, schemas, CMS, imports, API reference, documentation, and recovery."
        },
        {
          "symbol": "CMS",
          "title": "Composable content",
          "text": "Sites, catalogs, pages, slots, components, sub-components, media references, routes, and renderers are backend-managed data, not hidden frontend constants."
        },
        {
          "symbol": "API",
          "title": "Discoverable APIs",
          "text": "OpenAPI contracts and runtime API grouping make backend capabilities easier to inspect, document, secure, and reuse across applications."
        },
        {
          "symbol": "REL",
          "title": "Release-safe data",
          "text": "Content packs, documentation packs, checksums, import status, and environment releases make data movement visible instead of accidental."
        }
      ]
    }
  },
  "record53": {
    "code": "nexusFeaturesArchitecture",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "feature-architecture",
      "kicker": "Architecture advantage",
      "heading": "Built for reuse without forcing customer projects into a framework fork.",
      "body": "Most enterprise delivery slows down when common capabilities and customer-specific behavior become tangled. Nodics keeps reusable framework contracts, operational tools, content data, and project-owned customization at clear boundaries.",
      "detailItems": [
        {
          "eyebrow": "Ownership",
          "title": "Every capability has a home.",
          "text": "Core, Platform, WCMS, Process, Commerce, Communication, Engagement, Axis, Kickoff, and Nexus each own a clear part of the delivery model."
        },
        {
          "eyebrow": "Extension",
          "title": "Customize after the framework, not inside it.",
          "text": "Customer modules can extend or override behavior through runtime load order while the standard functional capability remains recognizable."
        },
        {
          "eyebrow": "Evidence",
          "title": "Contracts stay inspectable.",
          "text": "Schemas, APIs, imports, documentation, routes, and release manifests give teams and AI tools evidence before they change production behavior."
        }
      ],
      "metrics": [
        {
          "value": "Core",
          "label": "Reusable framework base"
        },
        {
          "value": "Axis",
          "label": "Operational control plane"
        },
        {
          "value": "Nexus",
          "label": "Public and demo experience"
        }
      ],
      "referenceImageCode": "nodicsMicroservicesHero",
      "imageAlt": "Connected enterprise services representing Nodics capability ownership"
    }
  },
  "record54": {
    "code": "nexusFeaturesCapabilities",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "feature-capabilities",
      "kicker": "Capability catalogue",
      "heading": "Enterprise features that belong together, but remain independently owned.",
      "body": "Nodics gives partners a broader foundation than a website template, a CMS, or a generated MVP. The capabilities are designed to compose into real customer journeys.",
      "items": [
        {
          "symbol": "ID",
          "title": "Identity and profile",
          "text": "Employee authentication, profile services, tenant and enterprise scope, and BackOffice bootstrap contracts."
        },
        {
          "symbol": "SCH",
          "title": "Schema workbench",
          "text": "Runtime-visible models and schemas help teams inspect contracts before adding data, APIs, or UI behavior."
        },
        {
          "symbol": "IMP",
          "title": "Imports and exports",
          "text": "Governed bootstrap, content, sample, documentation, and environment data releases with immutable checksums."
        },
        {
          "symbol": "DOC",
          "title": "Runtime documentation",
          "text": "Framework, Axis, Kickoff, and API documentation are shipped as owned content packs and rendered through Axis or Nexus."
        },
        {
          "symbol": "MED",
          "title": "Media governance",
          "text": "Media references, asset lifecycle, public/private boundaries, and CMS rendering rules stay governed by backend ownership."
        },
        {
          "symbol": "LOC",
          "title": "Localization-ready design",
          "text": "Content, media, routes, and stable keys are prepared for future multilingual rendering without hardcoding language assumptions."
        },
        {
          "symbol": "COM",
          "title": "Commerce foundation",
          "text": "Catalog, pricing, promotion, inventory, cart, checkout, order, fulfillment, tax, and customer journeys can compose into a demo storefront."
        },
        {
          "symbol": "PRC",
          "title": "Process and workflow",
          "text": "Process-aware business journeys can coordinate human and system work across long-running operations."
        },
        {
          "symbol": "MSG",
          "title": "Communication",
          "text": "Notification and messaging capabilities can serve multiple domains without becoming owned by any one customer journey."
        },
        {
          "symbol": "ENG",
          "title": "Engagement",
          "text": "Contact, testimonial, editorial, customer-interaction, and public projection data can be separated from internal records."
        },
        {
          "symbol": "SEC",
          "title": "Security controls",
          "text": "Authorization, token boundaries, route exposure, tenant scope, private media, and audit-sensitive operations remain explicit."
        },
        {
          "symbol": "OPS",
          "title": "Operational visibility",
          "text": "Module registry, runtime status, documentation release state, recovery modes, and API groups make local and production behavior easier to trust."
        }
      ],
      "href": "/docs",
      "linkLabel": "Read framework documentation"
    }
  },
  "record55": {
    "code": "nexusFeaturesMvpScale",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "feature-mvp-scale",
      "kicker": "MVP to scale",
      "heading": "Keep AI speed. Add enterprise structure before the product outgrows the prototype.",
      "body": "AI and vibe coding can prove an idea quickly. Nodics helps teams keep that momentum while adding the contracts needed for tenancy, security, administration, integrations, auditability, documentation, and repeatable releases.",
      "items": [
        {
          "symbol": "01",
          "title": "Start with a working reference",
          "text": "Run framework, Kickoff, Axis, and Nexus locally so the team sees an end-to-end system before writing customer-specific code."
        },
        {
          "symbol": "02",
          "title": "Move custom work into the right owner",
          "text": "Keep reusable framework capability separate from project-owned modules, content data, storefront renderers, and integration adapters."
        },
        {
          "symbol": "03",
          "title": "Scale with evidence",
          "text": "Use schemas, OpenAPI, documentation, import manifests, tests, and Axis workbenches to make growth reviewable instead of mysterious."
        }
      ],
      "href": "/about#about-mvp-scale",
      "linkLabel": "See the Nodics approach"
    }
  },
  "record56": {
    "code": "nexusFeaturesJourney",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "feature-journey",
      "kicker": "Partner journey",
      "heading": "From downloaded framework to customer-ready foundation.",
      "body": "A developer or partner should be able to clone the Nodics repositories, run the reference runtime, open Axis, view Nexus, inspect documentation and APIs, then rename and customize the project for a real customer journey.",
      "detailItems": [
        {
          "eyebrow": "Run",
          "title": "Start the reference system locally.",
          "text": "Kickoff starts the backend runtime and data; Axis opens the control plane; Nexus shows the public and demo-facing experience."
        },
        {
          "eyebrow": "Understand",
          "title": "Inspect the contracts before changing them.",
          "text": "Use documentation, API reference, module registry, schema workbench, CMS components, and imports to understand ownership."
        },
        {
          "eyebrow": "Customize",
          "title": "Rename, extend, and integrate for the customer.",
          "text": "Keep customer-specific integrations such as payment, fulfillment, identity providers, or operational processes in project-owned modules."
        }
      ],
      "metrics": [
        {
          "value": "4",
          "label": "Reference repositories"
        },
        {
          "value": "1",
          "label": "End-to-end local journey"
        },
        {
          "value": "0",
          "label": "Need for hidden framework forks"
        }
      ],
      "href": "/contact",
      "linkLabel": "Start a conversation",
      "referenceImageCode": "nodicsDeveloperExperience",
      "imageAlt": "Developer working with a governed Nodics reference workspace"
    }
  },
  "record60": {
    "code": "nexusSupportPaths",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "support-paths",
      "kicker": "Support paths",
      "heading": "Choose the path that matches the stage of your journey.",
      "body": "Different teams need different help. Evaluation questions, implementation planning, launch readiness, and operational incidents should not be handled through the same loose channel.",
      "items": [
        {
          "symbol": "01",
          "title": "Community and public material",
          "text": "Best for learning the framework, reading documentation, inspecting APIs, reviewing examples, and raising non-urgent public questions or issues."
        },
        {
          "symbol": "02",
          "title": "Developer enablement",
          "text": "Best for partners who need setup help, architecture review, extension guidance, content modelling, and module ownership decisions."
        },
        {
          "symbol": "03",
          "title": "Commercial support contract",
          "text": "Best when a customer or partner needs named contacts, agreed channels, prioritization, escalation, and response expectations for active delivery or operation."
        }
      ]
    }
  },
  "record61": {
    "code": "nexusSupportResponseModel",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "support-response-model",
      "kicker": "Response expectations",
      "heading": "Prioritize by business impact, not noise.",
      "body": "Public channels remain best effort. Contracted support defines the supported environments, authorized contacts, response windows, escalation route, and exclusions before the first urgent ticket appears.",
      "items": [
        {
          "symbol": "P1",
          "title": "Critical production interruption",
          "text": "A live customer journey is unavailable or materially unsafe. Contracted response is handled through the agreed urgent channel with restoration as the first objective."
        },
        {
          "symbol": "P2",
          "title": "High delivery or operation blocker",
          "text": "A release, integration, data import, admin capability, or operational process is blocked and needs prioritized triage with a named owner."
        },
        {
          "symbol": "P3",
          "title": "Standard guidance or defect",
          "text": "A question, defect, enhancement, or design concern can be reviewed through normal support cadence, documentation updates, or backlog planning."
        },
        {
          "symbol": "P4",
          "title": "Community and learning",
          "text": "General usage, roadmap, examples, and exploration topics are handled through public documentation and community-style conversation where no SLA is implied."
        }
      ]
    }
  },
  "record62": {
    "code": "nexusSupportRequestChecklist",
    "typeCode": "nexusContentSectionType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "support-request-checklist",
      "kicker": "Before raising a request",
      "heading": "Good evidence makes support faster.",
      "body": "Support works best when the request includes enough context for Nodics, partners, and customer teams to reproduce the issue, understand the impact, and decide who owns the next action.",
      "detailItems": [
        {
          "eyebrow": "Context",
          "title": "Tell us what is affected.",
          "text": "Include the project, repository, branch, runtime server, module, environment, user role, page or API, and business impact."
        },
        {
          "eyebrow": "Evidence",
          "title": "Share what changed.",
          "text": "Attach steps to reproduce, screenshots, logs, correlation IDs, content-pack versions, import status, API contract details, and expected versus actual behavior."
        },
        {
          "eyebrow": "Boundary",
          "title": "Identify likely ownership.",
          "text": "Call out whether the issue appears in Nodics framework capability, Kickoff data/runtime, Axis administration, Nexus rendering, or customer-owned customization."
        }
      ],
      "metrics": [
        {
          "value": "Impact",
          "label": "priority input"
        },
        {
          "value": "Evidence",
          "label": "faster triage"
        },
        {
          "value": "Owner",
          "label": "clear next step"
        }
      ],
      "href": "/contact",
      "linkLabel": "Start a support conversation",
      "referenceImageCode": "nodicsDeveloperExperience",
      "imageAlt": "Developer preparing reproducible support evidence for a Nodics request"
    }
  },
  "record63": {
    "code": "nexusSupportBoundaries",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "support-boundaries",
      "kicker": "Support boundaries",
      "heading": "Know what Nodics supports, and what the project owns.",
      "body": "Clear support boundaries prevent frustration. Nodics can help with framework contracts and reference experiences, while customer-specific integrations and production policies remain with the implementing project unless a contract says otherwise.",
      "items": [
        {
          "symbol": "N",
          "title": "Nodics foundation",
          "text": "Framework modules, schema contracts, content-pack import behavior, API metadata, reference setup, documentation structure, and reusable runtime patterns."
        },
        {
          "symbol": "AX",
          "title": "Axis and operations",
          "text": "Administrative visibility, module registration, workbenches, documentation delivery, content management behavior, and operator-facing diagnostics."
        },
        {
          "symbol": "CX",
          "title": "Customer-owned extensions",
          "text": "Payment, fulfillment, identity-provider setup, hosting, analytics, local policy, branding, custom integrations, and business-specific process decisions."
        }
      ],
      "href": "/contact",
      "linkLabel": "Discuss a support contract"
    }
  },
  "record64": {
    "code": "nexusNewsListingHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics News",
      "heading": "Official updates from the Nodics ecosystem.",
      "breadcrumbLabel": "News",
      "body": "Track framework, Axis, Nexus, and platform capability updates through governed public editorial projections.",
      "referenceImageCode": "nexusNewsPublicExperience",
      "imageAlt": "Enterprise team reviewing Nodics news and platform updates"
    }
  },
  "record65": {
    "code": "nexusNewsListing",
    "typeCode": "nexusEditorialListingType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "News index",
      "heading": "Searchable release and platform updates.",
      "body": "Use grid view for scanning or list view for deeper review. Filters and search operate on the public editorial projection that Nexus is allowed to render.",
      "contentTypeCode": "NEWS",
      "defaultView": "grid",
      "searchPlaceholder": "Search news by title, summary, tag, or module",
      "emptyMessage": "No news matched the selected filters.",
      "articles": [
        {
          "code": "nexus-news-public-experience",
          "contentTypeCode": "NEWS",
          "category": "Nexus",
          "date": "2026-08-11",
          "special": true,
          "specialLabel": "Featured release",
          "specialRank": 10,
          "specialFrom": "2026-08-11T00:00:00.000Z",
          "specialUntil": null,
          "specialVariant": "gold",
          "title": "Nexus public experience now reads governed backend content.",
          "summary": "News, blogs, testimonials, and contact forms are moving from static preview data to backend-owned delivery contracts.",
          "href": "/news/nexus-public-experience-governed-by-wcms",
          "referenceImageCode": "nexusNewsPublicExperience",
          "imageAlt": "Governed public Nexus experience connected to backend content",
          "tags": [
            "Nexus",
            "WCMS",
            "Content"
          ]
        },
        {
          "code": "nexus-news-axis-business-journey",
          "contentTypeCode": "NEWS",
          "category": "Axis",
          "date": "2026-08-11",
          "special": false,
          "title": "Axis business journeys align with registered runtime capability.",
          "summary": "BackOffice navigation and workspaces now present authorized backend capability rather than frontend-owned assumptions.",
          "href": "/news/axis-business-journeys-align-with-runtime-capability",
          "referenceImageCode": "nexusNewsAxisRuntime",
          "imageAlt": "Axis BackOffice capability connected to registered runtime modules",
          "tags": [
            "Axis",
            "BackOffice",
            "Runtime"
          ]
        },
        {
          "code": "nexus-news-engagement-public-api",
          "contentTypeCode": "NEWS",
          "category": "Engagement",
          "date": "2026-08-11",
          "special": false,
          "title": "Engagement APIs now power Nexus contact and testimonial journeys.",
          "summary": "The reference site can load approved testimonial projections and submit contact requests through the registered Engagement runtime.",
          "href": "/news/engagement-public-api-connects-nexus-contact-and-testimonials",
          "referenceImageCode": "nexusNewsEngagementApi",
          "imageAlt": "Engagement public APIs connecting Nexus contact and testimonial journeys",
          "tags": [
            "Engagement",
            "API",
            "Testimonials"
          ]
        },
        {
          "code": "nexus-news-editorial-release-flow",
          "contentTypeCode": "NEWS",
          "category": "Editorial",
          "date": "2026-08-11",
          "special": false,
          "title": "Editorial release flow validates governed News and Blog publishing.",
          "summary": "Authoring, approval, nPublish activation, online projection, and Nexus delivery now have a repeatable acceptance path.",
          "href": "/news/editorial-release-flow-validates-news-and-blog-publishing",
          "referenceImageCode": "nexusNewsEditorialRelease",
          "imageAlt": "Governed editorial release flow for news and blog publishing",
          "tags": [
            "Editorial",
            "Publishing",
            "Governance"
          ]
        }
      ]
    }
  },
  "record66": {
    "code": "nexusNewsPublicExperienceHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics News",
      "heading": "Nexus now reads governed backend content.",
      "breadcrumbLabel": "News",
      "body": "How the public website moves from static preview pages to backend-owned CMS composition and editorial projection.",
      "referenceImageCode": "nexusNewsPublicExperience",
      "imageAlt": "Governed public Nexus experience connected to backend content"
    }
  },
  "record67": {
    "code": "nexusNewsPublicExperienceDetail",
    "typeCode": "nexusEditorialDetailType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "contentTypeCode": "NEWS",
      "category": "Nexus",
      "date": "2026-08-11",
      "author": "Nodics Product Team",
      "title": "Nexus public experience now reads governed backend content.",
      "summary": "News, blogs, testimonials, and contact forms are moving from static preview data to backend-owned delivery contracts.",
      "referenceImageCode": "nexusNewsPublicExperience",
      "imageAlt": "Governed public Nexus experience connected to backend content",
      "bodyText": "Nodics Nexus is becoming the public gateway for the framework, product direction, documentation, and partner-facing evaluation journeys. The first corporate pages are now modeled as CMS-managed pages, components, and renderers instead of being hidden as frontend-only content.\n\nNexus renders the customer-facing experience while WCMS and Engagement own the content, submission, approval, and publication records.",
      "sections": [
        {
          "title": "What changed",
          "body": "The Nexus site can resolve public pages through the backend CMS delivery contract. Page heroes, listing sections, support content, feature sections, and editorial previews are represented as managed component data."
        },
        {
          "title": "Why it matters",
          "body": "Partners and customers should see the same principle that Nodics applies to applications: presentation stays flexible, but content ownership, route resolution, active flags, and release checks remain governed by backend data."
        },
        {
          "title": "Next step",
          "body": "The news and blog listing/detail experiences will remain static seed content until the full editorial authoring and publishing workflow is promoted into Axis-managed business capability."
        }
      ],
      "takeaways": [
        "Nexus renders CMS-managed pages and components.",
        "Public editorial content is structured for future Axis management.",
        "The renderer remains frontend-owned while data stays backend-owned."
      ],
      "href": "/news",
      "linkLabel": "Back to News"
    }
  },
  "record68": {
    "code": "nexusNewsAxisBusinessJourneyHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics News",
      "heading": "Axis follows registered runtime capability.",
      "breadcrumbLabel": "News",
      "body": "BackOffice navigation and workspaces are aligned with what backend modules actually expose.",
      "referenceImageCode": "nexusNewsAxisRuntime",
      "imageAlt": "Axis BackOffice capability connected to registered runtime modules"
    }
  },
  "record69": {
    "code": "nexusNewsAxisBusinessJourneyDetail",
    "typeCode": "nexusEditorialDetailType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "contentTypeCode": "NEWS",
      "category": "Axis",
      "date": "2026-08-11",
      "author": "Nodics Axis Team",
      "title": "Axis business journeys align with registered runtime capability.",
      "summary": "BackOffice navigation and workspaces now present authorized backend capability rather than frontend-owned assumptions.",
      "referenceImageCode": "nexusNewsAxisRuntime",
      "imageAlt": "Axis BackOffice capability connected to registered runtime modules",
      "bodyText": "Axis is the operational control plane for Nodics. Its navigation and workspaces should reflect registered modules, schemas, APIs, and business capabilities exposed by the running backend, not a hardcoded frontend wish list.\n\nThe platform keeps business operations discoverable from module contracts, schema metadata, and project-owned data releases.",
      "sections": [
        {
          "title": "Capability visibility",
          "body": "When a module is registered and activated, Axis can expose the relevant administration areas after runtime metadata is available. This keeps the operator experience honest about the system that is actually running."
        },
        {
          "title": "Governed ownership",
          "body": "The frontend renders workspaces, but backend module contracts remain the source of capability truth. That boundary helps prevent disconnected menus, stale pages, and accidental operational access."
        },
        {
          "title": "Local reference behavior",
          "body": "The local reference journey is designed so developers can start Kickoff, open Axis, inspect the current runtime, and understand which capability belongs to the framework and which belongs to the project."
        }
      ],
      "takeaways": [
        "Axis should show capability based on backend registration.",
        "Refresh behavior must become automatic as modules activate.",
        "Operators need evidence, not assumptions."
      ],
      "href": "/news",
      "linkLabel": "Back to News"
    }
  },
  "record70": {
    "code": "nexusNewsEngagementPublicApiHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics News",
      "heading": "Engagement APIs connect Nexus journeys.",
      "breadcrumbLabel": "News",
      "body": "Contact requests and testimonials move toward approved backend-owned public projections.",
      "referenceImageCode": "nexusNewsEngagementApi",
      "imageAlt": "Engagement public APIs connecting Nexus contact and testimonial journeys"
    }
  },
  "record71": {
    "code": "nexusNewsEngagementPublicApiDetail",
    "typeCode": "nexusEditorialDetailType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "contentTypeCode": "NEWS",
      "category": "Engagement",
      "date": "2026-08-11",
      "author": "Nodics Engagement Team",
      "title": "Engagement APIs now power Nexus contact and testimonial journeys.",
      "summary": "The reference site can load approved testimonial projections and submit contact requests through the registered Engagement runtime.",
      "referenceImageCode": "nexusNewsEngagementApi",
      "imageAlt": "Engagement public APIs connecting Nexus contact and testimonial journeys",
      "bodyText": "Nexus needs public interaction points, but public pages should not own internal customer records. Engagement provides the boundary for contact journeys, testimonial projections, editorial projections, and future customer-facing interaction data.\n\nNexus resolves the Engagement endpoint from Platform bootstrap, then reads public testimonial projections and posts validated contact submissions without owning customer data.",
      "sections": [
        {
          "title": "Public projection first",
          "body": "Testimonials and editorial records are exposed to Nexus as public-safe projections. Internal review, approval, and operational metadata can remain private to the owning backend capability."
        },
        {
          "title": "Contact journey boundary",
          "body": "Contact forms should be rendered by Nexus, but validation, persistence, routing, and notification rules belong to backend-owned Engagement and Communication capabilities."
        },
        {
          "title": "Future Axis management",
          "body": "As the Engagement capability matures, Axis should manage forms, testimonials, editorial approvals, and public projection state without requiring frontend deployments."
        }
      ],
      "takeaways": [
        "Nexus renders public-safe engagement projections.",
        "Internal engagement records remain backend-owned.",
        "Axis will manage approvals and public state later."
      ],
      "href": "/news",
      "linkLabel": "Back to News"
    }
  },
  "record72": {
    "code": "nexusNewsEditorialReleaseFlowHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics News",
      "heading": "Editorial publishing follows a release path.",
      "breadcrumbLabel": "News",
      "body": "News and blog publishing are modeled as governed content movement, not ad-hoc page edits.",
      "referenceImageCode": "nexusNewsEditorialRelease",
      "imageAlt": "Governed editorial release flow for news and blog publishing"
    }
  },
  "record73": {
    "code": "nexusNewsEditorialReleaseFlowDetail",
    "typeCode": "nexusEditorialDetailType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "contentTypeCode": "NEWS",
      "category": "Editorial",
      "date": "2026-08-11",
      "author": "Nodics Editorial Team",
      "title": "Editorial release flow validates governed News and Blog publishing.",
      "summary": "Authoring, approval, nPublish activation, online projection, and Nexus delivery now have a repeatable acceptance path.",
      "referenceImageCode": "nexusNewsEditorialRelease",
      "imageAlt": "Governed editorial release flow for news and blog publishing",
      "bodyText": "Editorial publishing in Nodics should be treated as a business capability. Articles and news updates need draft control, approval, public projection, route availability, and release validation so the website never becomes a collection of unmanaged static edits.\n\nThe live journey creates editorial records, routes them through workflow, publishes online projections, verifies delivery, and confirms rollback evidence.",
      "sections": [
        {
          "title": "Authoring and approval",
          "body": "The intended model separates draft editorial records from online projections. Business users can prepare content while release owners decide when public state changes."
        },
        {
          "title": "nPublish activation",
          "body": "Publishing should move approved content into public-facing projections through explicit activation rules, keeping preview, approval, and live delivery distinguishable."
        },
        {
          "title": "Acceptance evidence",
          "body": "Routes, component composition, renderer contracts, checksums, and documentation links should be validated before an editorial release is treated as ready."
        }
      ],
      "takeaways": [
        "Editorial content needs workflow and release control.",
        "Online projection should be public-safe and inspectable.",
        "Nexus should render published state, not own editorial truth."
      ],
      "href": "/news",
      "linkLabel": "Back to News"
    }
  },
  "record74": {
    "code": "nexusBlogListingHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Blog",
      "heading": "Architecture notes for governed enterprise delivery.",
      "breadcrumbLabel": "Blogs",
      "body": "Read practical thinking on Engagement, WCMS, runtime discovery, Axis operations, and the Nodics framework contract.",
      "referenceImageCode": "nexusBlogEditorialPublication",
      "imageAlt": "Enterprise architects preparing governed Nodics blog insights"
    }
  },
  "record75": {
    "code": "nexusBlogListing",
    "typeCode": "nexusEditorialListingType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Blog index",
      "heading": "Searchable architecture and delivery insights.",
      "body": "Use grid view for scanning or list view for deeper review. Blog content explains the framework ideas behind Nexus, Axis, Kickoff, and project-owned delivery.",
      "contentTypeCode": "BLOG",
      "defaultView": "grid",
      "searchPlaceholder": "Search blogs by title, summary, tag, or capability",
      "emptyMessage": "No blog posts matched the selected filters.",
      "articles": [
        {
          "code": "nexus-blog-engagement-framework",
          "contentTypeCode": "BLOG",
          "category": "Engagement",
          "date": "2026-08-11",
          "special": false,
          "title": "Building customer engagement as an enterprise capability.",
          "summary": "Reviews, feedback, testimonials, and contact submissions need one governed process from intake to approval and visibility.",
          "href": "/blog/building-customer-engagement-as-an-enterprise-capability",
          "referenceImageCode": "nexusBlogCustomerEngagement",
          "imageAlt": "Customer engagement capability connected to governed Nexus public journeys",
          "tags": [
            "Engagement",
            "Customer",
            "Projection"
          ]
        },
        {
          "code": "nexus-blog-editorial-publication",
          "contentTypeCode": "BLOG",
          "category": "Editorial",
          "date": "2026-08-11",
          "special": true,
          "specialLabel": "Featured insight",
          "specialRank": 10,
          "specialFrom": "2026-08-11T00:00:00.000Z",
          "specialUntil": null,
          "specialVariant": "gold",
          "title": "Editorial publication without frontend data ownership.",
          "summary": "Nexus renderers stay executable and reusable while article truth is governed, localized, published, and delivered by WCMS.",
          "href": "/blog/editorial-publication-without-frontend-data-ownership",
          "referenceImageCode": "nexusBlogEditorialPublication",
          "imageAlt": "Governed editorial publication delivered through Nodics CMS",
          "tags": [
            "WCMS",
            "Editorial",
            "Publishing"
          ]
        },
        {
          "code": "nexus-blog-runtime-discovery",
          "contentTypeCode": "BLOG",
          "category": "Runtime",
          "date": "2026-08-11",
          "special": false,
          "title": "Why runtime discovery beats hardcoded service URLs.",
          "summary": "Customer projects stay portable when frontend experiences resolve backend ownership from the module registry and public bootstrap.",
          "href": "/blog/why-runtime-discovery-beats-hardcoded-service-urls",
          "referenceImageCode": "nexusBlogRuntimeDiscovery",
          "imageAlt": "Runtime service discovery for portable Nodics frontend applications",
          "tags": [
            "Runtime",
            "Bootstrap",
            "Frontend"
          ]
        },
        {
          "code": "nexus-blog-axis-business-operations",
          "contentTypeCode": "BLOG",
          "category": "Axis",
          "date": "2026-08-11",
          "special": false,
          "title": "Designing Axis for clean business operations.",
          "summary": "A usable BackOffice should expose governed tasks clearly without duplicating module authority or overwhelming the operator.",
          "href": "/blog/designing-axis-for-clean-business-operations",
          "referenceImageCode": "nexusBlogAxisOperations",
          "imageAlt": "Axis business operations composed through clean framework capability",
          "tags": [
            "Axis",
            "BackOffice",
            "Operations"
          ]
        }
      ]
    }
  },
  "record76": {
    "code": "nexusBlogEngagementFrameworkHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Blog",
      "heading": "Engagement as enterprise capability.",
      "breadcrumbLabel": "Blog",
      "body": "Why contact, feedback, reviews, and testimonials should share a governed lifecycle instead of scattered page logic.",
      "referenceImageCode": "nexusBlogCustomerEngagement",
      "imageAlt": "Customer engagement capability connected to governed Nexus public journeys"
    }
  },
  "record77": {
    "code": "nexusBlogEngagementFrameworkDetail",
    "typeCode": "nexusEditorialDetailType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "contentTypeCode": "BLOG",
      "category": "Engagement",
      "date": "2026-08-11",
      "author": "Nodics Engagement Team",
      "title": "Building customer engagement as an enterprise capability.",
      "summary": "Reviews, feedback, testimonials, and contact submissions need one governed process from intake to approval and visibility.",
      "referenceImageCode": "nexusBlogCustomerEngagement",
      "imageAlt": "Customer engagement capability connected to governed Nexus public journeys",
      "bodyText": "Customer-originated content looks simple on a website, but it becomes operationally sensitive as soon as it includes consent, moderation, routing, approval, privacy, and public visibility. Nodics treats Engagement as a capability so those concerns are modeled once and reused across journeys.\n\nEngagement keeps customer-originated records, consent, moderation, lifecycle, and safe public projections behind explicit API contracts.",
      "sections": [
        {
          "title": "Separate intake from public visibility",
          "body": "A contact request, review, or testimonial should not become public content just because it was submitted. Intake, validation, moderation, approval, and projection are separate states."
        },
        {
          "title": "Keep internal records private",
          "body": "Engagement can own internal records while Nexus renders only public-safe projections. This keeps operational detail out of the public frontend."
        },
        {
          "title": "Make Axis the business control point",
          "body": "Business users should approve, hide, publish, and review engagement records through Axis instead of asking developers to change static frontend data."
        }
      ],
      "takeaways": [
        "Engagement data needs lifecycle and consent boundaries.",
        "Public projections are safer than exposing internal records.",
        "Axis should manage approval and visibility."
      ],
      "href": "/blogs",
      "linkLabel": "Back to Blogs"
    }
  },
  "record78": {
    "code": "nexusBlogEditorialPublicationHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Blog",
      "heading": "Publish without frontend data ownership.",
      "breadcrumbLabel": "Blog",
      "body": "Nexus renderers should stay reusable while WCMS owns article truth, localization, approval, and publication state.",
      "referenceImageCode": "nexusBlogEditorialPublication",
      "imageAlt": "Governed editorial publication delivered through Nodics CMS"
    }
  },
  "record79": {
    "code": "nexusBlogEditorialPublicationDetail",
    "typeCode": "nexusEditorialDetailType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "contentTypeCode": "BLOG",
      "category": "Editorial",
      "date": "2026-08-11",
      "author": "Nodics Editorial Team",
      "title": "Editorial publication without frontend data ownership.",
      "summary": "Nexus renderers stay executable and reusable while article truth is governed, localized, published, and delivered by WCMS.",
      "referenceImageCode": "nexusBlogEditorialPublication",
      "imageAlt": "Governed editorial publication delivered through Nodics CMS",
      "bodyText": "A corporate website becomes fragile when articles are hardcoded into components. Nodics keeps the renderer in the frontend and the editorial truth in backend-managed records, making publishing inspectable and eventually business-managed.\n\nThe customer project can seed sample records, WCMS can publish online projections, and Nexus can render lists and details through public delivery APIs.",
      "sections": [
        {
          "title": "Renderers are not content owners",
          "body": "Nexus owns the visual component and interaction behavior. WCMS and Editorial own the article record, publication state, route, and projection."
        },
        {
          "title": "Release data with evidence",
          "body": "Content packs, generated hashes, route records, and component associations make it clear what changed and whether the public website can resolve it."
        },
        {
          "title": "Prepare for localization",
          "body": "Stable article identity, locale-aware projections, and media references make multilingual publishing possible without rewriting the renderer."
        }
      ],
      "takeaways": [
        "Frontend renderers stay reusable.",
        "Editorial records remain governed backend data.",
        "Publication state should be inspectable before release."
      ],
      "href": "/blogs",
      "linkLabel": "Back to Blogs"
    }
  },
  "record80": {
    "code": "nexusBlogRuntimeDiscoveryHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Blog",
      "heading": "Runtime discovery beats hardcoded URLs.",
      "breadcrumbLabel": "Blog",
      "body": "Portable frontend applications should resolve service ownership through platform bootstrap and module metadata.",
      "referenceImageCode": "nexusBlogRuntimeDiscovery",
      "imageAlt": "Runtime service discovery for portable Nodics frontend applications"
    }
  },
  "record81": {
    "code": "nexusBlogRuntimeDiscoveryDetail",
    "typeCode": "nexusEditorialDetailType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "contentTypeCode": "BLOG",
      "category": "Runtime",
      "date": "2026-08-11",
      "author": "Nodics Runtime Team",
      "title": "Why runtime discovery beats hardcoded service URLs.",
      "summary": "Customer projects stay portable when frontend experiences resolve backend ownership from the module registry and public bootstrap.",
      "referenceImageCode": "nexusBlogRuntimeDiscovery",
      "imageAlt": "Runtime service discovery for portable Nodics frontend applications",
      "bodyText": "Hardcoded service URLs make local demos, partner projects, and production deployments harder to trust. Nodics frontend applications should ask the platform where capabilities live for the current runtime and environment.\n\nNexus only knows the Platform bootstrap. Platform tells it where CMS, Editorial, Engagement, Localization, and Profile capabilities are available for the current runtime.",
      "sections": [
        {
          "title": "One bootstrap, many capabilities",
          "body": "The frontend starts from a platform bootstrap and learns where CMS, Editorial, Engagement, Profile, and other public capabilities are available."
        },
        {
          "title": "Environment-safe movement",
          "body": "The same Nexus frontend can run locally, in demo environments, and later on nodics.in without rewriting capability endpoints."
        },
        {
          "title": "Clear failure behavior",
          "body": "If a backend capability is down, the frontend can show a friendly recovery state and keep safe static documentation paths available."
        }
      ],
      "takeaways": [
        "Do not hardcode every service URL into the frontend.",
        "Runtime bootstrap keeps environments portable.",
        "Capability discovery improves recovery behavior."
      ],
      "href": "/blogs",
      "linkLabel": "Back to Blogs"
    }
  },
  "record82": {
    "code": "nexusBlogAxisBusinessOperationsHero",
    "typeCode": "nexusPageHeroType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "kicker": "Nodics Blog",
      "heading": "Clean business operations in Axis.",
      "breadcrumbLabel": "Blog",
      "body": "A usable BackOffice should expose governed tasks clearly without duplicating backend module authority.",
      "referenceImageCode": "nexusBlogAxisOperations",
      "imageAlt": "Axis business operations composed through clean framework capability"
    }
  },
  "record83": {
    "code": "nexusBlogAxisBusinessOperationsDetail",
    "typeCode": "nexusEditorialDetailType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "contentTypeCode": "BLOG",
      "category": "Axis",
      "date": "2026-08-11",
      "author": "Nodics Axis Team",
      "title": "Designing Axis for clean business operations.",
      "summary": "A usable BackOffice should expose governed tasks clearly without duplicating module authority or overwhelming the operator.",
      "referenceImageCode": "nexusBlogAxisOperations",
      "imageAlt": "Axis business operations composed through clean framework capability",
      "bodyText": "Axis should help business users and developers operate Nodics without turning every backend capability into a maze. The goal is not to expose everything everywhere; it is to expose the right evidence, actions, and boundaries for each task.\n\nAxis composes capability, schema, workflow, and runtime evidence into crisp pages while backend modules remain the authority for operations and data contracts.",
      "sections": [
        {
          "title": "Show capability by ownership",
          "body": "Navigation should reflect the registered backend modules and the user's permissions, not a static frontend inventory."
        },
        {
          "title": "Keep operations task-focused",
          "body": "Schema workbench, CMS, imports, API reference, module registry, and documentation should each answer a clear operational question."
        },
        {
          "title": "Make recovery understandable",
          "body": "When content or backend services are unavailable, Axis should explain the situation and offer safe recovery actions instead of technical dead ends."
        }
      ],
      "takeaways": [
        "Axis composes operational experiences from runtime evidence.",
        "Backend modules remain the authority.",
        "Recovery UX is part of enterprise readiness."
      ],
      "href": "/blogs",
      "linkLabel": "Back to Blogs"
    }
  },
  "record84": {
    "code": "nexusDevelopersLocalJourney",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "developer-local-journey",
      "kicker": "Local journey",
      "heading": "Run the complete reference experience before you customize.",
      "body": "A new developer should first see Nodics working end to end. The local journey keeps each repository understandable while proving that the framework, runtime, BackOffice, and public site compose into one solution.",
      "items": [
        {
          "symbol": "CORE",
          "title": "nodics.ai",
          "text": "Framework capabilities, contracts, schemas, services, import rules, documentation, and reusable module ownership."
        },
        {
          "symbol": "RUN",
          "title": "nodics.kickoff",
          "text": "Reference runtime and project data that demonstrates how a customer application composes framework modules locally."
        },
        {
          "symbol": "OPS",
          "title": "nodics.axis",
          "text": "BackOffice control plane for runtime visibility, schema workbench, CMS, API reference, documentation, and operations."
        },
        {
          "symbol": "WEB",
          "title": "nodics.nexus",
          "text": "Public Nexus frontend that renders CMS-managed corporate, documentation, news, blog, and engagement experiences."
        }
      ],
      "href": "/docs",
      "linkLabel": "Open local setup guide"
    }
  },
  "record85": {
    "code": "nexusDevelopersAiAssisted",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "developer-ai-assisted",
      "kicker": "AI-assisted delivery",
      "heading": "Use AI as a governed collaborator, not a hidden shortcut.",
      "body": "Nodics makes AI more useful because the repository boundaries, contracts, schemas, generated evidence, and runtime metadata are inspectable. AI can accelerate delivery while developers keep the architectural decisions visible.",
      "items": [
        {
          "symbol": "ASK",
          "title": "Resolve ambiguity first",
          "text": "Use AI to clarify business intent, identify missing decisions, and map requirements to the owning framework or project boundary."
        },
        {
          "symbol": "READ",
          "title": "Inspect before changing",
          "text": "Let AI read schemas, routes, module registration, content packs, tests, and documentation before proposing implementation changes."
        },
        {
          "symbol": "BUILD",
          "title": "Generate project-owned work",
          "text": "Create project data, renderer updates, integrations, tests, and documentation in the right repository instead of patching framework core."
        },
        {
          "symbol": "PROVE",
          "title": "Validate every change",
          "text": "Run focused checks, content-pack validation, frontend tests, builds, and live delivery verification before trusting the result."
        }
      ],
      "href": "/docs?tab=api",
      "linkLabel": "Inspect API reference"
    }
  },
  "record87": {
    "code": "nexusCorporateSiteHeader",
    "typeCode": "nexusCorporateSiteHeaderType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "brandLabel": "NODICS",
      "brandSubtitle": "NEXUS",
      "navigation": [
        { "label": "Home", "href": "/", "id": "home" },
        { "label": "About", "href": "/#aboutus", "id": "about" },
        { "label": "Features", "href": "/#features", "id": "features" },
        { "label": "Solutions", "href": "/#products", "id": "products" },
        { "label": "Support", "href": "/#support", "id": "support" },
        { "label": "Blogs", "href": "/blogs", "id": "blogs" },
        { "label": "Docs", "href": "/docs", "id": "wiki" },
        { "label": "Axis", "href": "{axisBaseUrl}", "id": "axis" }
      ]
    }
  },
  "record88": {
    "code": "nexusCorporateSiteFooter",
    "typeCode": "nexusCorporateSiteFooterType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "brandSummary": "Where enterprise capabilities, technology, and knowledge connect.",
      "contactHeading": "Connect",
      "contactEmail": "nodics.framework@gmail.com",
      "socialLinks": [
        { "name": "GitHub", "href": "https://github.com/Nodics" },
        { "name": "LinkedIn", "href": "https://www.linkedin.com/company/nodics" }
      ],
      "groups": [
        {
          "title": "Platform",
          "links": [
            { "label": "Features", "href": "/#features" },
            { "label": "Solutions", "href": "/#products" },
            { "label": "Technology Stack", "href": "/#products" },
            { "label": "Support", "href": "/#support" }
          ]
        },
        {
          "title": "Developers",
          "links": [
            { "label": "Docs", "href": "/docs" },
            { "label": "API Reference", "href": "/docs?tab=api" },
            { "label": "GitHub", "href": "https://github.com/Nodics" },
            { "label": "Axis", "href": "{axisBaseUrl}" }
          ]
        },
        {
          "title": "Company",
          "links": [
            { "label": "About", "href": "/#aboutus" },
            { "label": "Ecosystem", "href": "/#ecosystem" },
            { "label": "Contact", "href": "/#contact" },
            { "label": "Testimonials", "href": "/#testimonials" }
          ]
        },
        {
          "title": "Resources",
          "links": [
            { "label": "Blogs", "href": "/blogs" },
            { "label": "News", "href": "/news" },
            { "label": "Documentation Gateway", "href": "/docs" }
          ]
        }
      ],
      "legalText": "© 2026 Nodics. All rights reserved.",
      "legalLinks": [
        { "label": "Privacy", "href": "/privacy" },
        { "label": "Terms", "href": "/terms" },
        { "label": "Cookies", "href": "/cookies" }
      ]
    }
  },
  "record86": {
    "code": "nexusDevelopersOwnership",
    "typeCode": "nexusCardGridType",
    "accessMode": "PUBLIC",
    "active": true,
    "properties": {
      "anchor": "developer-ownership",
      "kicker": "Ownership model",
      "heading": "Know what to reuse, what to extend, and what to prove.",
      "body": "The fastest Nodics implementation is not the one that changes everything. It is the one that reuses framework capability, keeps customer-specific behavior in the project, and proves each customization through visible contracts.",
      "items": [
        {
          "symbol": "REUSE",
          "title": "Reuse framework capability",
          "text": "Identity, CMS, media, process, commerce, communication, engagement, import, schema, and documentation contracts remain framework-owned."
        },
        {
          "symbol": "OWN",
          "title": "Own customer context",
          "text": "Customer journeys, data, branding, integrations, provider configuration, and environment policy belong to the implementation project."
        },
        {
          "symbol": "SHIP",
          "title": "Ship with evidence",
          "text": "Promotion should include tests, generated contracts, release versions, content-pack checksums, operational notes, and rollback understanding."
        }
      ],
      "href": "https://github.com/Nodics",
      "linkLabel": "View repositories"
    }
  }
};
