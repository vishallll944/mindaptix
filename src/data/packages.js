/** SEO Packages — pricing plans, comparison, finder, timeline, workflow, add-ons, FAQs */

export const PACKAGE_TRUST_CHIPS = [
  { icon: "Award", label: "8+ Years SEO Experience" },
  { icon: "Users", label: "750+ Businesses Helped" },
  { icon: "Briefcase", label: "510+ Projects Completed" },
  { icon: "BadgeCheck", label: "100% Job Success Score" },
  { icon: "Star", label: "Top Rated Freelancer" },
  { icon: "BarChart3", label: "Clear Monthly Reporting" },
];

export const WHY_MONTHLY = [
  {
    title: "Clear Monthly Pricing",
    desc: "Know exactly what you are paying each month — no confusing agency pricing.",
    icon: "Receipt",
  },
  {
    title: "Keyword-Focused Strategy",
    desc: "Each package includes a defined number of target keywords so your campaign stays focused.",
    icon: "Target",
  },
  {
    title: "On-Page SEO Included",
    desc: "We optimise important pages, metadata, headings, content structure, internal links and basic technical elements.",
    icon: "FileEdit",
  },
  {
    title: "Authority Building",
    desc: "Each plan includes monthly white-hat backlinks to strengthen website authority.",
    icon: "Link2",
  },
  {
    title: "Monthly Reporting",
    desc: "You receive clear updates on rankings, work completed, backlink activity and next priorities.",
    icon: "BarChart3",
  },
  {
    title: "Growth-Focused SEO",
    desc: "The goal is not just rankings. It's more organic visibility, qualified traffic, enquiries and revenue opportunities.",
    icon: "TrendingUp",
  },
];

export const PACKAGES = [
  {
    id: "starter",
    name: "Starter SEO Plan",
    price: "$149",
    period: "/ month",
    badge: null,
    bestFor: "Small businesses, new websites and local businesses starting SEO",
    desc: "A simple and affordable SEO package for businesses that want to start improving rankings, build authority and create a stronger SEO foundation.",
    cta: "Get Started With Starter SEO",
    features: [
      "10 Target Keywords",
      "60+ Backlinks Per Month",
      "Initial SEO Audit",
      "On-Page SEO Setup",
      "Basic Technical SEO Review",
      "Keyword Research",
      "Competitor Snapshot",
      "Metadata Optimisation",
      "Internal Linking Suggestions",
      "Monthly Ranking Tracking",
      "Monthly SEO Report",
    ],
  },
  {
    id: "growth",
    name: "Growth SEO Plan",
    price: "$249",
    period: "/ month",
    badge: "Most Popular",
    bestFor: "Growing businesses that want wider keyword targeting and stronger authority building",
    desc: "A stronger monthly SEO plan for businesses that want to target more keywords, improve important pages and build authority consistently.",
    cta: "Choose Growth SEO Plan",
    features: [
      "25 Target Keywords",
      "100+ Backlinks Per Month",
      "Initial SEO Audit",
      "On-Page SEO Setup",
      "Technical SEO Review",
      "Keyword Research & Mapping",
      "Competitor Analysis",
      "Metadata Optimisation",
      "Internal Linking Improvements",
      "Content Recommendations",
      "Google Search Console Review",
      "Monthly Ranking Tracking",
      "Monthly SEO Report",
    ],
  },
  {
    id: "business",
    name: "Business SEO Plan",
    price: "$349",
    period: "/ month",
    badge: null,
    bestFor:
      "Established businesses, service companies and ecommerce websites that need more aggressive SEO growth",
    desc: "A more complete SEO package for businesses that need broader keyword coverage, stronger backlink support and consistent optimisation.",
    cta: "Choose Business SEO Plan",
    features: [
      "35 Target Keywords",
      "125+ Backlinks Per Month",
      "Full SEO Audit",
      "On-Page SEO Setup",
      "Technical SEO Review",
      "Keyword Research & Mapping",
      "Competitor Gap Analysis",
      "Metadata Optimisation",
      "Internal Linking Improvements",
      "Content Strategy Recommendations",
      "Google Search Console Review",
      "GA4 Organic Traffic Review",
      "Monthly Ranking Tracking",
      "Monthly SEO Report",
      "Priority SEO Roadmap",
    ],
  },
  {
    id: "authority",
    name: "Authority SEO Plan",
    price: "$599",
    period: "/ month",
    badge: "Best Value",
    bestFor:
      "Competitive businesses, ecommerce stores, multi-location businesses and brands that want stronger SEO authority",
    desc: "A high-value SEO package for businesses competing in tougher markets and needing stronger keyword targeting, authority building and monthly SEO support.",
    cta: "Choose Authority SEO Plan",
    features: [
      "50 Target Keywords",
      "200+ Backlinks Per Month",
      "Full SEO Audit",
      "On-Page SEO Setup",
      "Technical SEO Review",
      "Advanced Keyword Research & Mapping",
      "Competitor Gap Analysis",
      "Metadata Optimisation",
      "Internal Linking Improvements",
      "Content Strategy Recommendations",
      "Google Search Console Review",
      "GA4 Organic Traffic Review",
      "Backlink Profile Review",
      "Monthly Ranking Tracking",
      "Monthly SEO Report",
      "Priority SEO Roadmap",
      "Strategy Call / Review Support",
    ],
  },
];

export const CUSTOM_PACKAGE = {
  id: "custom",
  name: "Custom SEO Plan",
  price: "Custom Pricing",
  period: "",
  badge: "Tailored Strategy",
  bestFor:
    "Businesses that need more than a standard SEO package — national, international, multi-location or eCommerce growth",
  desc: "A personalized SEO strategy built around your business goals, competition, industry, and growth opportunities. Whether you need to compete nationally, grow internationally, dominate local markets, improve AI search visibility or scale organic revenue, we build the strategy around your specific objectives.",
  cta: "Request Custom Strategy",
  features: [
    "Complete SEO Audit & Growth Roadmap",
    "Custom Keyword Research & Opportunity Analysis",
    "Competitor & Market Analysis",
    "Technical SEO Optimization",
    "Advanced On-Page SEO",
    "Content Strategy & Topic Planning",
    "Service/Product Page Optimization",
    "Internal Linking Strategy",
    "Authority Building & Digital PR",
    "AI Search Optimization (AI SEO, GEO & AEO)",
    "Local SEO & Multi-Location SEO (if required)",
    "eCommerce SEO Strategy (if required)",
    "Conversion Optimization Recommendations",
    "Custom Reporting & Growth Tracking",
    "Dedicated SEO Strategy Support",
  ],
};

/** Comparison table — value true = included (check), string = level label, false = not included */
export const COMPARISON = {
  columns: ["Starter", "Growth", "Business", "Authority"],
  rows: [
    { feature: "Monthly Price", values: ["$149", "$249", "$349", "$599"] },
    { feature: "Target Keywords", values: ["10", "25", "35", "50"] },
    { feature: "Backlinks Per Month", values: ["60+", "100+", "125+", "200+"] },
    { feature: "Initial SEO Audit", values: [true, true, true, true] },
    { feature: "Keyword Research", values: [true, true, true, true] },
    { feature: "Keyword Mapping", values: ["Basic", true, true, "Advanced"] },
    { feature: "Competitor Analysis", values: ["Standard", "Standard", "Detailed", "Advanced"] },
    { feature: "On-Page SEO Setup", values: [true, true, true, true] },
    { feature: "Technical SEO Review", values: ["Basic", "Standard", "Detailed", "Advanced"] },
    { feature: "Metadata Optimisation", values: [true, true, true, true] },
    { feature: "Internal Linking Suggestions", values: [true, true, true, true] },
    { feature: "Content Recommendations", values: ["Basic", true, true, "Advanced"] },
    { feature: "Google Search Console Review", values: ["Basic", true, true, true] },
    { feature: "GA4 Organic Traffic Review", values: [false, false, true, true] },
    { feature: "Backlink Profile Review", values: [false, false, false, true] },
    { feature: "Monthly Ranking Report", values: [true, true, true, true] },
    { feature: "Monthly SEO Report", values: [true, true, true, true] },
    {
      feature: "Strategy Review Support",
      values: ["Email", "Email", "Priority Email", "Email + Strategy Review"],
    },
  ],
};

/** Package finder — business type → recommended plan */
export const FINDER_OPTIONS = [
  {
    id: "new-website",
    label: "New Website / Just Starting SEO",
    plan: "starter",
    reason:
      "You are building your first SEO foundation and need focused keyword targeting with affordable monthly support.",
    highlights: ["10 target keywords", "60+ monthly backlinks", "Initial SEO audit", "On-page SEO setup"],
  },
  {
    id: "local-business",
    label: "Small Local Business",
    plan: "starter",
    reason:
      "A small local business needs consistent local keyword coverage, on-page fixes and steady authority building without a big budget.",
    highlights: ["10 target keywords", "60+ monthly backlinks", "Competitor snapshot", "Monthly reporting"],
  },
  {
    id: "growing-service",
    label: "Growing Service Business",
    plan: "growth",
    reason:
      "You have multiple services or locations and need wider keyword coverage plus stronger authority signals every month.",
    highlights: [
      "25 target keywords",
      "100+ monthly backlinks",
      "Content recommendations",
      "GSC review + competitor analysis",
    ],
  },
  {
    id: "multi-service",
    label: "Multi-Service / Multi-Location",
    plan: "business",
    reason:
      "Multiple services and locations need broader keyword mapping, deeper competitor gap analysis and a priority roadmap.",
    highlights: ["35 target keywords", "125+ monthly backlinks", "Competitor gap analysis", "Priority SEO roadmap"],
  },
  {
    id: "ecommerce",
    label: "eCommerce Store",
    plan: "authority",
    reason:
      "eCommerce SEO is competitive — you need advanced keyword targeting, stronger backlink volume and a backlink profile review.",
    highlights: ["50 target keywords", "200+ monthly backlinks", "Backlink profile review", "Strategy call support"],
  },
  {
    id: "saas",
    label: "SaaS / B2B Software",
    plan: "business",
    reason:
      "SaaS growth needs broader keyword coverage, content strategy recommendations and GA4 traffic analysis to build pipeline.",
    highlights: ["35 target keywords", "Content strategy recommendations", "GA4 traffic review", "Priority roadmap"],
  },
  {
    id: "national-brand",
    label: "Competitive / National Brand",
    plan: "authority",
    reason:
      "Competing nationally requires advanced keyword mapping, maximum backlink volume and priority strategy support.",
    highlights: ["50 target keywords", "200+ monthly backlinks", "Advanced keyword mapping", "Strategy review support"],
  },
  {
    id: "agency",
    label: "Agency / White-Label Support",
    plan: "business",
    reason:
      "Agencies need reliable fulfilment with detailed reporting, competitor gap analysis and a clear monthly roadmap.",
    highlights: ["35 target keywords", "Detailed reporting", "Competitor gap analysis", "Priority SEO roadmap"],
  },
];

export const INCLUDED_IN_EVERY_PLAN = [
  {
    title: "SEO Audit",
    desc: "We review your website's current SEO performance, rankings, technical issues, page structure, content gaps and competitors.",
    icon: "SearchCheck",
  },
  {
    title: "Keyword Research",
    desc: "We identify the keywords your customers are searching and select target keywords based on search intent, competition and business value.",
    icon: "KeyRound",
  },
  {
    title: "On-Page SEO",
    desc: "We optimise titles, meta descriptions, headings, content structure, URLs, image alt text, internal links and key page elements.",
    icon: "FileEdit",
  },
  {
    title: "Basic Technical SEO Review",
    desc: "We check crawlability, indexing, mobile usability, page speed, sitemap, robots.txt, broken links and other technical SEO issues.",
    icon: "Settings2",
  },
  {
    title: "Backlink Building",
    desc: "We build monthly authority signals through white-hat backlink methods, relevant placements, citations and outreach-based opportunities where suitable.",
    icon: "Link2",
  },
  {
    title: "Ranking Tracking",
    desc: "We monitor target keyword positions so you can see how your visibility changes over time.",
    icon: "LineChart",
  },
  {
    title: "Monthly Reporting",
    desc: "You receive a clear monthly report showing completed work, ranking updates, backlink activity and next priorities.",
    icon: "BarChart3",
  },
  {
    title: "SEO Roadmap",
    desc: "We provide clear direction so each month focuses on the highest-priority SEO opportunities.",
    icon: "Map",
  },
];

export const SETUP_TIMELINE = [
  {
    phase: "Phase 1",
    days: "Days 1–2",
    title: "Website Review & Keyword Mapping",
    items: [
      "Website review",
      "Target keyword confirmation",
      "Competitor snapshot",
      "Page priority selection",
      "Keyword mapping for important pages",
    ],
  },
  {
    phase: "Phase 2",
    days: "Days 3–6",
    title: "On-Page SEO Fixation",
    items: [
      "Meta title optimisation",
      "Meta description optimisation",
      "Heading structure improvements",
      "Content structure suggestions",
      "Image alt text improvements",
      "URL review",
      "Internal linking suggestions",
      "CTA improvements where needed",
    ],
  },
  {
    phase: "Phase 3",
    days: "Days 7–10",
    title: "Technical Checks & Final Review",
    items: [
      "Indexing check",
      "Sitemap review",
      "Robots.txt review",
      "Broken link check",
      "Basic speed review",
      "Mobile usability check",
      "Final on-page review",
      "Initial SEO summary",
    ],
  },
];

export const MONTHLY_WORKFLOW = [
  {
    step: "01",
    title: "Review",
    desc: "We review keyword rankings, Google Search Console data, website performance and current SEO priorities.",
  },
  {
    step: "02",
    title: "Optimise",
    desc: "We improve pages, metadata, internal links, content structure and technical elements based on the package scope.",
  },
  {
    step: "03",
    title: "Build Authority",
    desc: "We work on monthly backlink building and authority signals using white-hat methods.",
  },
  {
    step: "04",
    title: "Report & Plan",
    desc: "We send a monthly report with completed work, ranking movement, backlink activity and next-month priorities.",
  },
];

export const PACKAGE_GUIDANCE = [
  {
    plan: "Starter SEO",
    points: [
      "You are starting SEO for the first time",
      "You want to target a small group of keywords",
      "You have a small local business website",
      "You want affordable SEO support",
      "You need basic on-page SEO and authority building",
    ],
  },
  {
    plan: "Growth SEO",
    points: [
      "You want to target more services or locations",
      "You need stronger monthly backlink support",
      "You want better competitor analysis",
      "You want regular content recommendations",
      "You are ready for consistent SEO growth",
    ],
  },
  {
    plan: "Business SEO",
    points: [
      "Your market is more competitive",
      "You have multiple services or product categories",
      "You need stronger keyword mapping",
      "You want deeper monthly SEO tracking",
      "You want more serious SEO growth",
    ],
  },
  {
    plan: "Authority SEO",
    points: [
      "You compete in a highly competitive market",
      "You need stronger backlink volume",
      "You have an ecommerce, national or multi-location website",
      "You want advanced keyword targeting",
      "You want priority SEO support and a stronger roadmap",
    ],
  },
];

export const ADD_ONS = [
  {
    title: "SEO Content Writing",
    desc: "For blogs, service pages, location pages, category pages and landing pages.",
    icon: "PenLine",
  },
  {
    title: "Technical SEO Fixes",
    desc: "For advanced crawl, indexing, speed, Core Web Vitals, schema, redirect and site architecture issues.",
    icon: "Wrench",
  },
  {
    title: "Google Business Profile SEO",
    desc: "For businesses that want stronger local visibility and Google Maps rankings.",
    icon: "MapPin",
  },
  {
    title: "Local SEO Location Pages",
    desc: "For businesses targeting multiple cities, towns, states or service areas.",
    icon: "Map",
  },
  {
    title: "eCommerce SEO",
    desc: "For Shopify, WooCommerce, Magento and custom ecommerce stores.",
    icon: "ShoppingCart",
  },
  {
    title: "AI SEO / LLM Visibility",
    desc: "Stronger visibility across AI search platforms like ChatGPT, Gemini, Perplexity and Google AI Overviews.",
    icon: "Sparkles",
  },
  {
    title: "Google Ads Management",
    desc: "For businesses that want paid search support alongside SEO.",
    icon: "Target",
  },
  {
    title: "Meta Ads Management",
    desc: "For businesses that want Facebook and Instagram ad support alongside SEO.",
    icon: "Megaphone",
  },
];

export const IMPORTANT_NOTES = [
  {
    title: "On-Page SEO Timeline",
    desc: "Initial on-page SEO is usually completed within 10 days, depending on website size, business type, page count, access and required fixes.",
  },
  {
    title: "Backlink Quality",
    desc: "Backlink numbers are monthly targets. We focus on white-hat, relevant and safe backlink methods. We do not use spam links, PBNs, automated link schemes or link farms.",
  },
  {
    title: "SEO Results",
    desc: "SEO results are not instant. Rankings, traffic and leads depend on competition, website condition, content quality, backlink profile, technical setup and implementation speed.",
  },
  {
    title: "No Fake Guarantees",
    desc: "We do not guarantee first-page rankings, fixed traffic numbers or exact lead volume. Our focus is consistent SEO execution, clear reporting and long-term growth.",
  },
  {
    title: "Custom Scope",
    desc: "Large websites, ecommerce stores, enterprise websites, multi-location campaigns and highly competitive niches may need a custom SEO plan.",
  },
];

export const PACKAGE_FAQS = [
  {
    q: "What is included in your SEO packages?",
    a: "Our SEO packages include keyword targeting, SEO audit, on-page SEO setup, basic technical SEO review, backlink building, ranking tracking and monthly reporting. Higher packages include more keywords, more backlinks, deeper competitor analysis and stronger monthly SEO support.",
  },
  {
    q: "How long does on-page SEO take?",
    a: "Usually, we complete the initial on-page SEO setup within 10 days. The exact timeline depends on your business type, number of pages, website size, platform access and how many fixes are required.",
  },
  {
    q: "What is the difference between the SEO packages?",
    a: "The main differences are the number of target keywords, monthly backlinks, depth of competitor analysis, reporting level and monthly SEO support. Higher packages are better for more competitive businesses or websites with more services, products or locations.",
  },
  {
    q: "Are backlinks included every month?",
    a: "Yes. Each package includes monthly backlink building. Starter includes 60+ backlinks, Growth includes 100+ backlinks, Business includes 125+ backlinks and Authority includes 200+ backlinks per month.",
  },
  {
    q: "Are these backlinks safe?",
    a: "We focus on white-hat, relevant and safe backlink methods. We do not use PBNs, spam links, automated link schemes or link farms. Quality and relevance are prioritised over shortcuts.",
  },
  {
    q: "Do you guarantee first-page rankings?",
    a: "No. We do not make fake ranking guarantees. SEO depends on competition, website quality, content, technical setup, backlinks and algorithm changes. Our focus is consistent optimisation and long-term growth.",
  },
  {
    q: "Which SEO package should I choose?",
    a: "If you are new to SEO, start with the Starter or Growth plan. If your market is competitive, choose Business or Authority. If you are unsure, request a free SEO audit and we will recommend the best plan.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes. You can start with a smaller package and upgrade as your business grows or competition increases.",
  },
  {
    q: "Do you provide content writing in these packages?",
    a: "Content recommendations are included, but full content writing may be quoted separately depending on the number of pages, blogs or landing pages required.",
  },
  {
    q: "Do you work on local SEO?",
    a: "Yes. We can support local SEO through keyword targeting, on-page SEO, Google Business Profile recommendations, location page strategy and local backlink opportunities. Advanced local SEO or Google Maps optimisation can be added if needed.",
  },
  {
    q: "Do you work with ecommerce websites?",
    a: "Yes. We can work on ecommerce SEO for Shopify, WooCommerce, Magento and custom ecommerce websites. Ecommerce sites may need a custom scope depending on product and category count.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "Our SEO packages are monthly, but SEO works best when done consistently for at least 3 to 6 months.",
  },
  {
    q: "What access do you need to start?",
    a: "We may need access to your website CMS, Google Search Console, GA4, Google Business Profile if local SEO is required, and any existing SEO or ranking data.",
  },
  {
    q: "How do you report SEO results?",
    a: "We report on keyword rankings, completed SEO work, backlink activity, Google Search Console data, organic traffic where access is available and next-month priorities.",
  },
];
