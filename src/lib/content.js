/**
 * Every string and image the marketing page renders lives here, so copy edits
 * never require touching a component.
 *
 * Images point at picsum.photos placeholders. Drop real assets into
 * /public/images and swap the `src` values — nothing else needs to change.
 */

const photo = (seed, w, h) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const brand = {
  name: "wave",
  tagline: ["Evolving", "Brand Design"],
};

export const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "Services", href: "#services" },
  { label: "Strategy and Resources", href: "#services" },
  { label: "Success Stories", href: "#footer" },
];

export const contact = {
  phone: "0700809559",
  email: "mohamedabdiaziz515@gmail.com",
  city: "Nairobi , Kenya",
  address: ["73 Market St", "Venice, CA 90291", "United States"],
  footerPhone: "0700809559",
  footerAddress: "Nairobi , Kenya",
};

export const hero = {
  /* The two snapshots that float over the headline. `x`/`y` are percentages of
     the headline block, so they track it as the type resizes. */
  floats: [
    {
      src: "/cjs.jpg",
      alt: "Designer sketching a mobile app wireframe on paper",
      x: 26,
      y: 3,
      w: "clamp(64px, 8cqw, 96px)",
      rotate: -9,
    },
    {
      src: "/star.jpg",
      alt: "Art director reviewing brand boards in the studio",
      x: 55,
      y: 34,
      w: "clamp(56px, 7cqw, 96px)",
      rotate: 7,
    },
  ],
  founder: {
    name: "Abdiaziz Mohamed Abdirahman",
    role: "Founder, wave",
    avatar: "/me.jpeg"
  },
  intro: {
    before: "Hello, I am Abdiaziz, the founder of",
    accent: "wave since 2025.",
  },
  promo: {
    image: photo("wave-hero-promo", 200, 200),
    alt: "",
    heading: "Bringing your vision to life",
    body: "Combining data-driven strategy with powerful storytelling to grow your brand with purpose.",
  },
};

export const manifesto = {
  /* The leading clause stays black; the remainder fades in as you scroll. */
  lead: "From idea to a thriving business, I create",
  rest: "digital experiences that help brands launch, grow, and lead their market.",
};

/** The alternating timeline that sits beside the manifesto headline. */
export const launchSteps = {
  heading: "Launch Steps",
  sub: "Zero to Hero",
  steps: [
    "Idea",
    "Research",
    "Strategy",
    "Branding",
    "Content",
    "Marketing",
    "Launch",
  ],
};

/** Four slides of three metrics — the dot row under the cards steps through them. */
export const statSlides = [
  [
    { label: "Total projects this year", value: "120", suffix: "++", tone: "acid", icon: "trophy" },
    { label: "Client problems successfully solved", value: "98", suffix: "%", tone: "grape", icon: "medal" },
    { label: "Trusted by numerous clients worldwide", value: "45", suffix: "++", tone: "ember", icon: "smile" },
  ],
  [
    { label: "Average delivery time per sprint", value: "14", suffix: "d", tone: "acid", icon: "trophy" },
    { label: "Retainer clients renewing each year", value: "92", suffix: "%", tone: "grape", icon: "medal" },
    { label: "Design systems shipped to production", value: "38", suffix: "++", tone: "ember", icon: "smile" },
  ],
  [
    { label: "Countries we have shipped work in", value: "17", suffix: "++", tone: "acid", icon: "trophy" },
    { label: "Lift in engagement after a rebrand", value: "40", suffix: "%", tone: "grape", icon: "medal" },
    { label: "Specialists across strategy and craft", value: "24", suffix: "++", tone: "ember", icon: "smile" },
  ],
  [
    { label: "Awards collected since launch", value: "11", suffix: "++", tone: "acid", icon: "trophy" },
    { label: "Projects delivered on the first review", value: "87", suffix: "%", tone: "grape", icon: "medal" },
    { label: "Years weaving brands together", value: "9", suffix: "++", tone: "ember", icon: "smile" },
  ],
];

export const servicesIntro = {
  heading: ["Services aren't offered.", "They're crafted."],
  eyebrow: "Services",
  viewAll: "View All",
};

export const services = [
  {
    title: "Business Strategy",
    blurb:
      "Every great business starts with a clear vision. We help validate ideas, define goals, understand your audience, and create a roadmap from concept to launch.",
    image: "/startegy.png",
    alt: "Founder planning a new business strategy on a desk",
  },
  {
    title: "Brand Identity",
    blurb:
      "Build a memorable brand with a unique identity, logo, colors, typography, messaging, and visual direction that people recognize and trust.",
    image: "/identity.png",
    alt: "Brand identity guidelines laid out on a studio desk",
  },
  {
    title: "UI/UX Design",
    blurb:
      "We design intuitive user experiences and beautiful interfaces that make customers enjoy every interaction with your business.",
    image: "/uiux.png",
    alt: "Modern product interface displayed on a tablet",
  },
  {
    title: "Web & App Development",
    blurb:
      "From landing pages to full-scale business platforms, we build fast, scalable, and production-ready websites and applications.",
    image: "/web.jpeg",
    alt: "Developer building a modern web application",
  },
  {
    title: "Digital Marketing",
    blurb:
      "Reach the right audience through content strategy, social media, SEO, paid campaigns, and marketing systems designed for long-term growth.",
    image: "/digital.jpeg",
    alt: "Marketing campaign analytics on a dashboard",
  },
  {
    title: "Content Creation",
    blurb:
      "Professional photography, short-form videos, product showcases, and branded content that helps your business stand out online.",
    image: "/content.jpeg",
    alt: "Content creator filming promotional videos",
  },
  {
    title: "Growth & Analytics",
    blurb:
      "Track what matters. We measure performance, understand customer behavior, and continuously improve your business using real data.",
    image: "/market.jpeg",
    alt: "Business growth analytics displayed on a large monitor",
  },
];

export const projectGroups = [
  {
    tag: "Strategy",
    image: "/strategy.png",
    alt: "Two strategists annotating a printed floor plan together",
    items: [
      {
        title: "UX Researcher",
        body: "We interview the people who actually use the product, then turn the transcripts into a decision map the whole team can argue with.",
      },
      {
        title: "Market Positioning",
        body: "Where you sit against everyone else, said in one sentence your sales team can repeat without reading it off a slide.",
      },
      {
        title: "Content Planning",
        body: "A calendar built around the questions your buyers are already typing, not around the channels that are easiest to fill.",
      },
      {
        title: "Brand Voice & Personality",
        body: "Tone rules with real before-and-after examples, so writing on-brand stops depending on who happens to be writing.",
      },
      {
        title: "Competitive Analysis",
        body: "A teardown of the five brands you keep losing to, and the specific gaps worth taking from each of them.",
      },
    ],
  },
  {
    tag: "Creative Design",
    image: "/creativity.png",
    alt: "Designer working on colourful layout comps at a desktop workstation",
    items: [
      {
        title: "Logo & Identity Design",
        body: "A mark that survives being shrunk to a favicon, embroidered on a cap, and animated in a title sequence.",
      },
      {
        title: "UI/UX Design",
        body: "Flows, states and edge cases drawn out in full — handed over as a component library your engineers can build straight from.",
      },
      {
        title: "Marketing Collateral",
        body: "Decks, one-pagers and social kits templated so the tenth one looks as considered as the first.",
      },
      {
        title: "Branding & Identity",
        body: "Colour, type, photography and motion locked into a system with enough room left for the brand to keep growing.",
      },
      {
        title: "Graphic Assets",
        body: "Icons, illustration and pattern libraries drawn on one grid, exported in every format your team will ask for.",
      },
    ],
  },
];

export const testimonialsIntro = {
  heading: ["Stories from", "My happy clients"],
  sub: "Discover how I've helped brands grow through strategy, design, and innovation.",
};

/**
 * Tweet IDs for <ClientTweetCard>, kept for when real clients post about the
 * work. The ID is the trailing number in a tweet's URL:
 * x.com/<user>/status/<id>. The card fetches the live tweet, so only put IDs
 * here for tweets that genuinely exist — it renders that account's real name
 * and avatar. Empty for now; the section uses written quotes instead.
 */
export const testimonialTweets = [];

/**
 * PLACEHOLDER COPY — written to show the layout, not quotes anyone gave you.
 * Replace each entry with a real client's own words (and their real name and
 * title, with their permission) before this goes in front of prospects.
 */
export const testimonials = [
  {
    quote:
      "We were a spreadsheet and a phone number. Abdiaziz gave us a name, a look and a site that finally made us seem as capable as we are — enquiries tripled in the first quarter.",
    name: "Yahya Mohamed",
    role: "Zula Cafe",
    tone: "lilac",
  },
  {
    quote:
      "Nobody could tell what we actually sold. Six weeks later we had positioning our own sales team could repeat, and we closed two enterprise deals that had stalled for a year.",
    name: "Zayn Abdullahi",
    role: "Brand Face at zula",
    tone: "tangerine",
  },
  {
    quote:
      "Our old site was a brochure nobody read. The rebuild turned it into the thing that sells for us — we went from zero inbound to a booked-out calendar in four months.",
    name: "Yussuf Hassan",
    role: "Lenzro",
    tone: "deepsea",
  },
  {
    quote:
      "He didn't just make it pretty. He sat with our users, found where they were dropping off, and fixed it. Engagement is up over 40% and support tickets are down.",
    name: "Maya Putri",
    role: "Product Lead, Kirana Health",
    tone: "mint",
  },
];

/** The rotated snapshots scattered between the testimonial cards. */
export const testimonialSnaps = [
  { src: photo("wave-snap-laptop", 500, 420), alt: "Hands sketching beside an open laptop", rotate: -8 },
  { src: photo("wave-snap-studio", 500, 560), alt: "Illustrator working at a studio bench", rotate: 6 },
  { src: photo("wave-snap-desk", 500, 560), alt: "Designer reviewing work at a standing desk", rotate: -5 },
  { src: photo("wave-snap-drafting", 500, 420), alt: "Art director marking up printed drafts", rotate: 7 },
];

export const footer = {
  statement: {
    lead: "Smart strategy and creative design crafted",
    rest: "to bring your brand vision to life",
  },
  columns: [
    {
      heading: "Services",
      links: [
        "Branding Strategy",
        "UI/UX Design",
        "Web Development",
        "Digital Marketing",
        "Product Design",
      ],
    },
    {
      heading: "Support",
      links: [
        "Contact Me",
        "FAQs",
        "Pricing & Packages",
        "Terms & Policies",
        "Career Opportunities",
      ],
    },
  ],
  newsletter: {
    heading: "Join the list",
    body: "Sign up to get the latest insights and updates from our digital agency.",
    cta: "Subscribe",
  },
  legal: ["Terms & Conditions", "Privacy Policy"],
  copyright: `© ${new Date().getFullYear()} wave. All rights reserved`,
};
