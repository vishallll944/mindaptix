function dedupeKeywords(keywords) {
  const map = new Map();
  for (const row of keywords) {
    const key = row.keyword.toLowerCase().trim();
    const existing = map.get(key);
    if (!existing || row.ranking < existing.ranking) {
      map.set(key, row);
    }
  }
  return [...map.values()].sort((a, b) => a.ranking - b.ranking);
}

function buildMetrics(keywords, rankingPeriod) {
  const unique = dedupeKeywords(keywords);
  const topThree = unique.filter((k) => k.ranking <= 3).length;
  const numberOne = unique.filter((k) => k.ranking === 1).length;

  return [
    { label: "#1 Rankings", value: String(numberOne) },
    { label: "Top 3 Rankings", value: String(topThree) },
    { label: "Keywords Tracked", value: String(unique.length) },
    { label: "Ranking Period", value: rankingPeriod },
  ];
}

function createStudy(study) {
  const keywords = dedupeKeywords(study.keywords);
  const metrics = buildMetrics(keywords, study.rankingPeriod);

  return {
    ...study,
    keywords,
    metrics,
    href: `/case-studies/${study.slug}`,
    growth: `${metrics[0].value}×`,
    growthLabel: "#1 Rankings",
  };
}

export const CASE_STUDIES = [
  createStudy({
    id: "nestasia",
    slug: "nestasia",
    featured: true,
    tag: "Gift Shop · Shopify · India",
    category: "eCommerce SEO",
    platform: "Shopify",
    market: "India",
    website: "https://nestasia.in",
    websiteLabel: "nestasia.in",
    rankingPeriod: "August 2026",
    title: "Nestasia: #1 Rankings Across Gift & Home Decor Search",
    summary:
      "India's leading gift and home decor Shopify brand moved from invisible to page-one dominance across high-intent product and occasion keywords.",
    image:
      "https://images.unsplash.com/photo-1616046229475-63f832c4d40f?w=800&q=80",
    pdfHref: "/case-studies/Nestasia-Shopify-SEO-Case-Study-Jyoti.pdf",
    keywords: [
      { keyword: "ceramic tiffin box", baseline: "Not in 100", ranking: 1 },
      { keyword: "kitchen canister set", baseline: "Not in 100", ranking: 1 },
      { keyword: "yoga decor", baseline: "Not in 100", ranking: 1 },
      { keyword: "mini charpai", baseline: "Not in 100", ranking: 1 },
      { keyword: "home decor quotes", baseline: "Not in 100", ranking: 1 },
      { keyword: "butter box with knife", baseline: "Not in 100", ranking: 1 },
      { keyword: "bowl with spoon", baseline: "Not in 100", ranking: 1 },
      { keyword: "white cooking pots", baseline: "Not in 100", ranking: 1 },
      { keyword: "air tight containers for kitchen", baseline: "Not in 100", ranking: 1 },
      { keyword: "unique gifts for raksha bandhan", baseline: "Not in 100", ranking: 1 },
      { keyword: "glass fruit bowl for dining table", baseline: "Not in 100", ranking: 1 },
      { keyword: "spice jar set with stand", baseline: "Not in 100", ranking: 1 },
      { keyword: "dinner set black colour", baseline: "Not in 100", ranking: 1 },
      { keyword: "transparent glass tea cup set", baseline: "Not in 100", ranking: 1 },
      { keyword: "aesthetic study room", baseline: "Not in 100", ranking: 1 },
      { keyword: "unique gifts for female friends", baseline: "Not in 100", ranking: 1 },
      { keyword: "haldi ceremony quotes for instagram", baseline: "Not in 100", ranking: 1 },
      { keyword: "saraswati puja caption for instagram", baseline: "Not in 100", ranking: 1 },
      { keyword: "dining table manners", baseline: "Not in 100", ranking: 1 },
      { keyword: "new year message to colleagues", baseline: "Not in 100", ranking: 1 },
      { keyword: "happy retirement", baseline: "Not in 100", ranking: 1 },
      { keyword: "jug glass", baseline: "Not in 100", ranking: 1 },
      { keyword: "workers day quotes", baseline: "Not in 100", ranking: 1 },
      { keyword: "new model water bottle", baseline: "Not in 100", ranking: 1 },
      { keyword: "vegetable carry bag", baseline: "Not in 100", ranking: 1 },
      { keyword: "kettle cup", baseline: "1", ranking: 1 },
    ],
  }),
  createStudy({
    id: "forrest-and-love",
    slug: "forrest-and-love",
    featured: true,
    tag: "Copper Store · Shopify · Germany",
    category: "International SEO",
    platform: "Shopify",
    market: "Germany",
    website: "https://forrestandlove.de/en/",
    websiteLabel: "forrestandlove.de",
    rankingPeriod: "August 2026",
    title: "Forrest & Love: German Copper Wellness Brand SEO Leadership",
    summary:
      "Premium copper bottle and wellness brand captured page-one visibility across German-language product, gifting, and Ayurvedic wellness queries.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
    pdfHref: "/case-studies/Forrest-and-Love-SEO-Case-Study-Jyoti-Jaswal.pdf",
    keywords: [
      { keyword: "Kupferflaschen", baseline: "Not in 100", ranking: 1 },
      { keyword: "Forrest & Love Kupferflasche", baseline: "Not in 100", ranking: 1 },
      { keyword: "Forrest and Love Kupferprodukte", baseline: "Not in 100", ranking: 1 },
      { keyword: "Forrest and Love Shop", baseline: "Not in 100", ranking: 1 },
      { keyword: "kupfer karaffe", baseline: "Not in 100", ranking: 1 },
      { keyword: "kupfer wasserflasche", baseline: "Not in 100", ranking: 1 },
      { keyword: "kupferflaschen reinigen", baseline: "Not in 100", ranking: 1 },
      { keyword: "beste kupferflasche", baseline: "Not in 100", ranking: 1 },
      { keyword: "besten kupferflasche", baseline: "Not in 100", ranking: 1 },
      { keyword: "Geschenkset aus Kupfer", baseline: "Not in 100", ranking: 1 },
      { keyword: "Kupfer Geschenkset", baseline: "Not in 100", ranking: 1 },
      { keyword: "Kupfertrinkflasche", baseline: "Not in 100", ranking: 1 },
      { keyword: "kupfer flaschen", baseline: "Not in 100", ranking: 1 },
      { keyword: "kupfer flasche", baseline: "Not in 100", ranking: 1 },
      { keyword: "kupferflasche reinigen", baseline: "Not in 100", ranking: 1 },
      { keyword: "kupferflasche", baseline: "Not in 100", ranking: 1 },
      { keyword: "Kupferflasche gesund", baseline: "Not in 100", ranking: 1 },
      { keyword: "ayurvedische Kupferflasche", baseline: "Not in 100", ranking: 2 },
      { keyword: "Kupferkrug", baseline: "Not in 100", ranking: 2 },
      { keyword: "Kupfer Geschenkidee", baseline: "Not in 100", ranking: 2 },
      { keyword: "Kupferwasserflaschen", baseline: "Not in 100", ranking: 2 },
      { keyword: "Kupferbecher kaufen", baseline: "Not in 100", ranking: 2 },
    ],
  }),
  createStudy({
    id: "techniche",
    slug: "techniche",
    featured: false,
    tag: "B2B · Wix Ecommerce · UAE",
    category: "B2B SEO",
    platform: "Wix",
    market: "UAE",
    website: "https://www.techniche.ae",
    websiteLabel: "techniche.ae",
    rankingPeriod: "June 2026",
    title: "Techniche: B2B Industrial Safety SEO in the UAE",
    summary:
      "Industrial cooling and safety equipment supplier ranked on page one for high-intent B2B product and supplier queries across the UAE market.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    pdfHref: null,
    keywords: [
      { keyword: "sun protection gaiter uae", baseline: "Not in 100", ranking: 1 },
      { keyword: "Air Condition Vest Supplier Uae", baseline: "Not in 100", ranking: 1 },
      { keyword: "Vortex Cooling Vest Supplier", baseline: "Not in 100", ranking: 2 },
      { keyword: "sun protection balaclavas uae", baseline: "Not in 100", ranking: 3 },
      { keyword: "summer hats and gaiters uae", baseline: "Not in 100", ranking: 4 },
      { keyword: "Cooling Vest Uae", baseline: "Not in 100", ranking: 5 },
      { keyword: "Cooling Arm Sleeves Supplier", baseline: "Not in 100", ranking: 5 },
      { keyword: "hydraulic manhole lifter", baseline: "Not in 100", ranking: 5 },
      { keyword: "Evaporative Neck Cooler Uae", baseline: "Not in 100", ranking: 6 },
      { keyword: "Manhole Cover Extractor Uae", baseline: "Not in 100", ranking: 6 },
      { keyword: "helmet brim with neck shade", baseline: "Not in 100", ranking: 6 },
      { keyword: "Compressed Air Cooling Vest", baseline: "Not in 100", ranking: 6 },
      { keyword: "Air Cooling Vest", baseline: "Not in 100", ranking: 7 },
      { keyword: "Air Condition Vest Uae", baseline: "Not in 100", ranking: 7 },
      { keyword: "Cooling Arm Sleeves Supplier Uae", baseline: "Not in 100", ranking: 7 },
      { keyword: "Cooling Towel Supplier", baseline: "Not in 100", ranking: 7 },
      { keyword: "Manhole cover lifters", baseline: "Not in 100", ranking: 7 },
      { keyword: "Summer hat with neck shade", baseline: "Not in 100", ranking: 7 },
      { keyword: "Welding Air Cooling Vest", baseline: "Not in 100", ranking: 7 },
      { keyword: "Welder Cooling Vest Supplier", baseline: "Not in 100", ranking: 7 },
    ],
  }),
  createStudy({
    id: "aigitime",
    slug: "aigitime",
    featured: false,
    tag: "Watch Brand · Shopify · Norway",
    category: "eCommerce SEO",
    platform: "Shopify",
    market: "Norway",
    website: "https://aigitime.com/",
    websiteLabel: "aigitime.com",
    rankingPeriod: "Current",
    title: "AIGI Time: Norwegian Watch Brand Search Dominance",
    summary:
      "Norwegian watch brand achieved #1 rankings across movement, craftsmanship, and brand-intent queries in a competitive horology niche.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    pdfHref: null,
    keywords: [
      { keyword: "norwegian watches", baseline: "Not in 100", ranking: 1 },
      { keyword: "quartz swiss made watch", baseline: "Not in 100", ranking: 1 },
      { keyword: "flyer gmt", baseline: "Not in 100", ranking: 1 },
      { keyword: "nh35 accuracy", baseline: "Not in 100", ranking: 1 },
      { keyword: "nh35 winding direction", baseline: "Not in 100", ranking: 1 },
      { keyword: "nh35a movement", baseline: "Not in 100", ranking: 1 },
      { keyword: "nh35 movement accuracy", baseline: "Not in 100", ranking: 1 },
      { keyword: "38mm dress watch", baseline: "Not in 100", ranking: 1 },
      { keyword: "miyota movements", baseline: "Not in 100", ranking: 1 },
      { keyword: "seiko nh34 gmt", baseline: "Not in 100", ranking: 1 },
      { keyword: "miyota automatic watch movement", baseline: "Not in 100", ranking: 1 },
      { keyword: "norwegian watch brands", baseline: "Not in 100", ranking: 1 },
      { keyword: "citizen miyota movement", baseline: "Not in 100", ranking: 1 },
      { keyword: "nh 35 movement", baseline: "Not in 100", ranking: 1 },
      { keyword: "miyota automatic watches", baseline: "Not in 100", ranking: 1 },
      { keyword: "38 millimeter", baseline: "Not in 100", ranking: 1 },
      { keyword: "watches nh35", baseline: "Not in 100", ranking: 1 },
      { keyword: "nh35 lift angle", baseline: "Not in 100", ranking: 1 },
      { keyword: "three hand quartz movement", baseline: "Not in 100", ranking: 1 },
      { keyword: "integrated straps", baseline: "Not in 100", ranking: 1 },
      { keyword: "swiss quartz movement", baseline: "Not in 100", ranking: 1 },
      { keyword: "seiko nh 35", baseline: "Not in 100", ranking: 1 },
    ],
  }),
  createStudy({
    id: "prowolf",
    slug: "prowolf",
    featured: false,
    tag: "Footwear · Shopify · India & US",
    category: "eCommerce SEO",
    platform: "Shopify",
    market: "India & US",
    website: "https://www.prowolf.in/",
    websiteLabel: "prowolf.in",
    rankingPeriod: "Current",
    title: "ProWolf: Athletic Footwear SEO Across India & US",
    summary:
      "Performance footwear brand captured #1 rankings for training, lifting, and fitness-intent queries across two major markets.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    pdfHref: null,
    keywords: [
      { keyword: "gym workout for height growth", baseline: "Not in 100", ranking: 1 },
      { keyword: "how to build forearms at home", baseline: "Not in 100", ranking: 1 },
      { keyword: "olympic shoes", baseline: "Not in 100", ranking: 1 },
      { keyword: "caption for deadlift", baseline: "Not in 100", ranking: 1 },
      { keyword: "deadlift flat shoes", baseline: "Not in 100", ranking: 1 },
      { keyword: "multivitamin tablets for gym", baseline: "Not in 100", ranking: 1 },
      { keyword: "leg extension workout", baseline: "Not in 100", ranking: 1 },
      { keyword: "cricket fitness test name", baseline: "Not in 100", ranking: 1 },
      { keyword: "grip benefits", baseline: "Not in 100", ranking: 1 },
      { keyword: "inspirational bodybuilding quotes", baseline: "Not in 100", ranking: 1 },
      { keyword: "hand gripper side effects", baseline: "Not in 100", ranking: 1 },
      { keyword: "muscle building quotes", baseline: "Not in 100", ranking: 1 },
      { keyword: "how to gain weight quotes", baseline: "Not in 100", ranking: 1 },
      { keyword: "heavy weight shoes", baseline: "Not in 100", ranking: 1 },
      { keyword: "5 day workout plan", baseline: "Not in 100", ranking: 1 },
      { keyword: "athletic body women", baseline: "Not in 100", ranking: 1 },
    ],
  }),
  createStudy({
    id: "e-cig-clouds",
    slug: "e-cig-clouds",
    featured: false,
    tag: "Vape Store · Shopify · UK",
    category: "eCommerce SEO",
    platform: "Shopify",
    market: "United Kingdom",
    website: "https://www.e-cigclouds.co.uk/",
    websiteLabel: "e-cigclouds.co.uk",
    rankingPeriod: "August 2026",
    title: "E-Cig Clouds: UK Vape Retail SEO Leadership",
    summary:
      "UK vape retailer achieved page-one visibility across branded, product, and device-specific search queries in a highly competitive category.",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80",
    pdfHref: null,
    keywords: [
      { keyword: "e-cig cloud", baseline: "Not in 100", ranking: 1 },
      { keyword: "ecigs cloud", baseline: "Not in 100", ranking: 1 },
      { keyword: "t18e coils", baseline: "Not in 100", ranking: 1 },
      { keyword: "a red a", baseline: "Not in 100", ranking: 1 },
      { keyword: "aspire minican plus", baseline: "Not in 100", ranking: 1 },
      { keyword: "twist vape", baseline: "Not in 100", ranking: 1 },
      { keyword: "aspire cyber x", baseline: "Not in 100", ranking: 1 },
      { keyword: "disposable vape sale", baseline: "Not in 100", ranking: 1 },
      { keyword: "smok species", baseline: "Not in 100", ranking: 1 },
      { keyword: "cherry tunes", baseline: "Not in 100", ranking: 1 },
      { keyword: "e cloud", baseline: "Not in 100", ranking: 1 },
      { keyword: "mr vapour", baseline: "Not in 100", ranking: 1 },
      { keyword: "e-cig clouds", baseline: "Not in 100", ranking: 1 },
      { keyword: "e cig", baseline: "Not in 100", ranking: 1 },
      { keyword: "tfv18 tank", baseline: "Not in 100", ranking: 1 },
      { keyword: "caliburn x", baseline: "Not in 100", ranking: 1 },
      { keyword: "geekvape e100", baseline: "Not in 100", ranking: 1 },
      { keyword: "elf bar ev5000", baseline: "Not in 100", ranking: 1 },
      { keyword: "elux legend prime", baseline: "Not in 100", ranking: 1 },
      { keyword: "smok novo master box", baseline: "Not in 100", ranking: 1 },
      { keyword: "lost mary dm1200", baseline: "Not in 100", ranking: 1 },
      { keyword: "snow wolf vape", baseline: "Not in 100", ranking: 1 },
      { keyword: "e-cog", baseline: "Not in 100", ranking: 1 },
      { keyword: "ak 3", baseline: "Not in 100", ranking: 1 },
    ],
  }),
];

export function getCaseStudy(slug) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
