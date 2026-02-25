import type { CmsPage } from "@/lib/cms";

const pages: Record<string, CmsPage> = {
  home: {
    id: "fallback-home",
    slug: "home",
    title: "Infrastructure & Automation Partners for Digital Agencies",
    status: "published",
    sections: [
      {
        collection: "block_hero",
        sort: 1,
        item: {
          heading: "Infrastructure & Automation Partners for Digital Agencies",
          subheading:
            "We handle the complex backend systems your clients depend on — from advanced billing to scalable commerce infrastructure.",
          primary_cta_label: "Partner With Orchard",
          primary_cta_href: "/contact",
          secondary_cta_label: "Explore Capabilities",
          secondary_cta_href: "/capabilities",
        },
      },
      {
        collection: "block_feature_grid",
        sort: 2,
        item: {
          heading: "When Projects Get Complex",
          intro:
            "Agencies bring us in when delivery risk is high and backend systems become revenue-critical.",
          items: [
            { title: "Billing models get advanced" },
            { title: "Revenue systems need to scale" },
            { title: "Integrations become fragile" },
            { title: "Infrastructure must handle growth" },
            { title: "Automation becomes mission-critical" },
          ],
        },
      },
      {
        collection: "block_feature_grid",
        sort: 3,
        item: {
          heading: "How We Work",
          items: [
            {
              title: "Standby Partnership",
              description:
                "Ongoing technical advisory, architecture oversight, and long-term collaboration to keep delivery stable as complexity grows.",
            },
            {
              title: "Mission Execution",
              description:
                "High-complexity builds, migrations, scaling interventions, and emergency backend support when timelines are tight.",
            },
          ],
        },
      },
      {
        collection: "block_feature_grid",
        sort: 4,
        item: {
          heading: "Core Capabilities",
          items: [
            {
              title: "Revenue-Critical Systems",
              description:
                "Billing architecture, payment logic, and monetization models built for correctness under pressure.",
            },
            {
              title: "Commerce Infrastructure",
              description:
                "Multi-region, multi-currency backend systems designed to scale without introducing operational fragility.",
            },
            {
              title: "Integrations & Automation",
              description:
                "API orchestration, workflow automation, and data pipelines that reduce manual failure points.",
            },
            {
              title: "Technical Advisory",
              description:
                "Architecture reviews, system hardening, and strategic backend planning for high-stakes agency delivery.",
            },
          ],
        },
      },
      {
        collection: "block_rich_text",
        sort: 5,
        item: {
          max_width: "4xl",
          content: `
<h2>Why Agencies Choose Orchard</h2>
<ul>
  <li>We work behind the scenes.</li>
  <li>We strengthen your delivery capability.</li>
  <li>Senior-level expertise only.</li>
  <li>Built for high-stakes projects.</li>
  <li>Long-term partners, not project churn.</li>
</ul>
          `,
        },
      },
      {
        collection: "block_cta",
        sort: 6,
        item: {
          heading: "Need a specialist backend partner?",
          body: "If your next build touches billing, payments, integrations, or critical infrastructure, let’s scope it together.",
          button_label: "Partner With Orchard",
          button_href: "/contact",
        },
      },
    ],
  },
  capabilities: {
    id: "fallback-capabilities",
    slug: "capabilities",
    title: "Capabilities",
    status: "published",
    sections: [
      {
        collection: "block_rich_text",
        sort: 1,
        item: {
          max_width: "4xl",
          content: `
<h1>Capabilities</h1>
<p>We focus on backend systems where delivery failure impacts revenue, operations, or client trust.</p>
<h2>Revenue-Critical Systems</h2>
<p>We design billing and payment architectures for complex pricing, contract variation, and operational edge cases. The goal is predictable revenue flow and fewer production surprises.</p>
<h2>Commerce Infrastructure</h2>
<p>We build backend commerce foundations that support scale across regions, currencies, and business units. We prioritize stability, observability, and controlled change over short-term shortcuts.</p>
<h2>Integrations & Automation</h2>
<p>We connect fragmented platforms into reliable workflows. Typical work includes API orchestration, event-driven automation, and data movement pipelines that remove manual dependency risk.</p>
<h2>Technical Advisory</h2>
<p>We provide architecture review, system hardening, and delivery guidance on high-complexity projects. Agencies use us to de-risk implementation decisions before they become expensive.</p>
          `,
        },
      },
    ],
  },
  "how-we-partner": {
    id: "fallback-partner",
    slug: "how-we-partner",
    title: "How We Partner",
    status: "published",
    sections: [
      {
        collection: "block_rich_text",
        sort: 1,
        item: {
          max_width: "4xl",
          content: `
<h1>How We Partner</h1>
<p>We collaborate in ways that fit your operating model and client delivery commitments.</p>
<ul>
  <li><strong>White-label specialists:</strong> We operate behind your brand and support your client relationships.</li>
  <li><strong>Embedded technical partners:</strong> We work directly with your delivery and engineering teams.</li>
  <li><strong>Project-based operators:</strong> We lead complex backend scopes from architecture through implementation.</li>
  <li><strong>Long-term infrastructure advisors:</strong> We provide continuity for evolving systems and growth plans.</li>
</ul>
<p><strong>We do not compete with agencies.</strong> We exist to enhance your capability.</p>
          `,
        },
      },
    ],
  },
  about: {
    id: "fallback-about",
    slug: "about",
    title: "About Orchard Tech",
    status: "published",
    sections: [
      {
        collection: "block_rich_text",
        sort: 1,
        item: {
          max_width: "4xl",
          content: `
<h1>About Orchard Tech</h1>
<p>We are systems-driven operators focused on backend reliability, scale, and commercial resilience.</p>
<p>We stay calm under pressure and execute with technical discipline. We prioritize durable architecture over short-term hacks.</p>
<p>Our work is built around long-term trust with agency partners handling high-stakes delivery.</p>
          `,
        },
      },
    ],
  },
  contact: {
    id: "fallback-contact",
    slug: "contact",
    title: "Contact",
    status: "published",
    sections: [
      {
        collection: "block_rich_text",
        sort: 1,
        item: {
          max_width: "4xl",
          content: `
<h1>Let’s Discuss Your Next Complex Build</h1>
<p>Send the essentials and we’ll respond quickly.</p>
<ul>
  <li>Agency name</li>
  <li>Contact person</li>
  <li>Type of challenge</li>
  <li>Timeline</li>
  <li>Current stack</li>
  <li>Standby or Project</li>
</ul>
<p>Email: <a href="mailto:hello@orchardtech.net">hello@orchardtech.net</a></p>
          `,
        },
      },
    ],
  },
};

export function getFallbackPage(slug: string): CmsPage | null {
  const key = slug.replace(/^\//, "") || "home";
  return pages[key] ?? null;
}
