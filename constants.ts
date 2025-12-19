import { NavItem, Ingredient, FaqItem } from './types';

export const SITE_TITLE = "Clean Incense";
export const STEWARDSHIP_TEXT = "Clean-incense.com is maintained by Soul Space, a studio focused on botanical incense and ceramic warmers designed for thermal emission.";

export const NAV_ITEMS: NavItem[] = [
  { label: "Definition", path: "/" },
  { label: "Standards", path: "/standards" },
  { label: "Warming vs Burning", path: "/warming-vs-burning" },
  { label: "Ingredients", path: "/ingredients" },
  { label: "Start", path: "/start" },
  { label: "FAQ", path: "/faq" },
];

export const INGREDIENTS: Ingredient[] = [
  {
    name: "Frankincense",
    botanicalName: "Boswellia sacra",
    profile: "Citrus, pine, woody, spicy",
    behavior: "Phase change occurs at low heat into translucent droplets.",
    benefits: "Centering, respiratory support, physiological grounding.",
    sourcing: "Harvested through regulated resin tapping in Oman and Somalia."
  },
  {
    name: "Palo Santo",
    botanicalName: "Bursera graveolens",
    profile: "Sweet, milky, minty, woodsy",
    behavior: "Volatilization of oils without carbonization.",
    benefits: "Cleansing, grounding, mood stabilization.",
    sourcing: "Certified fallen wood collected under SERFOR regulations."
  },
  {
    name: "White Copal",
    botanicalName: "Protium copal",
    profile: "Crisp, clean, pine-like, bright",
    behavior: "Rapid liquefaction with minimal residue.",
    benefits: "Purification, cognitive clarity, environmental cleansing.",
    sourcing: "Botanical resin collected from trees in Mexico."
  },
  {
    name: "Sandalwood",
    botanicalName: "Santalum album",
    profile: "Creamy, soft wood, smooth, rich",
    behavior: "Steady aromatic release over extended thermal cycles.",
    benefits: "Relaxation, grounding, supporting circadian rhythm.",
    sourcing: "Regulated plantation wood sourced to prevent over-extraction."
  },
  {
    name: "Myrrh",
    botanicalName: "Commiphora myrrha",
    profile: "Earthy, balsamic, warm, slightly bitter",
    behavior: "Viscous bubbling followed by darkening of material.",
    benefits: "Grounding, restorative, meditative.",
    sourcing: "Ethically collected resin from arid regions in NE Africa."
  },
  {
    name: "Lavender",
    botanicalName: "Lavandula angustifolia",
    profile: "Floral, herbaceous, sweet, camphoraceous",
    behavior: "Thermal release of linalool and linalyl acetate.",
    benefits: "Calming, tension reduction, sedation support.",
    sourcing: "Organic agricultural sources in France and Bulgaria."
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Is incense toxic?",
    answer: "Combustion-based incense releases particulate matter (PM2.5), benzene, and polycyclic aromatic hydrocarbons (PAHs). Thermal warming significantly reduces these byproducts by operating below the ignition point of the plant material."
  },
  {
    question: "Is incense safe for pets?",
    answer: "Smoke acts as a primary respiratory irritant for animals. Removing combustion minimizes this risk, though specific botanical concentrations should be monitored for species-specific sensitivity."
  },
  {
    question: "Why does incense smoke?",
    answer: "Smoke indicates incomplete combustion. Incense smoke contains carbon particles, ash, and volatile organic compounds that have undergone thermal degradation."
  },
  {
    question: "Can incense be smoke-free?",
    answer: "Yes. Thermal release occurs when botanicals are heated to their specific boiling points but remain below their ignition threshold."
  },
  {
    question: "What is botanical incense?",
    answer: "Botanical incense consists exclusively of plant matter: wood, resin, sap, leaf, or flower. It excludes synthetic oils and combustion accelerants."
  }
];