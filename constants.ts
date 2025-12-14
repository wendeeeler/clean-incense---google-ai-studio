import { NavItem, Ingredient, FaqItem } from './types';

export const SITE_TITLE = "Clean Incense";
export const STEWARDSHIP_TEXT = "Clean-incense.com is maintained by Soul Space, a studio dedicated to botanical incense and ceramic warmers designed for clean scenting.";

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
    behavior: "Melts slowly into golden droplets",
    benefits: "Centering, respiratory support, meditative focus",
    sourcing: "Sustainably harvested from resin tapping in Oman and Somalia."
  },
  {
    name: "Palo Santo",
    botanicalName: "Bursera graveolens",
    profile: "Sweet, milky, minty, woodsy",
    behavior: "Releases oil without charring at low heat",
    benefits: "Cleansing, grounding, mood uplifting",
    sourcing: "SERFOR-certified fallen wood from Peru."
  },
  {
    name: "White Copal",
    botanicalName: "Protium copal",
    profile: "Crisp, clean, pine-like, bright",
    behavior: "Liquefies completely, very clean evaporation",
    benefits: "Purification, clarity, energetic cleansing",
    sourcing: "Hand-collected from trees in Mexico."
  },
  {
    name: "Sandalwood",
    botanicalName: "Santalum album",
    profile: "Creamy, soft wood, smooth, rich",
    behavior: "Releases scent slowly over long periods",
    benefits: "Deep relaxation, grounding, sleep aid",
    sourcing: "Plantation-grown or fallen wood to prevent overharvesting."
  },
  {
    name: "Myrrh",
    botanicalName: "Commiphora myrrha",
    profile: "Earthy, balsamic, warm, slightly bitter",
    behavior: "Bubbles and darkens, rich resinous scent",
    benefits: "Grounding, healing, contemplative",
    sourcing: "Ethically sourced from arid regions in NE Africa."
  },
  {
    name: "Lavender",
    botanicalName: "Lavandula angustifolia",
    profile: "Floral, herbaceous, sweet, camphoraceous",
    behavior: "Dried buds release oils before turning brown",
    benefits: "Calming, anxiety reduction, sleep",
    sourcing: "Organic farms in France and Bulgaria."
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Is incense toxic?",
    answer: "Traditional burning incense can release particulate matter (PM2.5), benzene, and polycyclic aromatic hydrocarbons (PAHs) due to combustion. Clean incense, when gently warmed rather than burned, significantly reduces or eliminates these byproducts, releasing only the volatile essential oils."
  },
  {
    question: "Is incense safe for pets?",
    answer: "Smoke is generally irritating to pets' respiratory systems. By removing smoke through warming, the physical irritant is removed. However, some essential oils (like tea tree or citrus in high concentrations) can be processed differently by cats and dogs. Clean incense is safer than burning, but always ensure ventilation and observe your pet."
  },
  {
    question: "Why does incense smoke?",
    answer: "Smoke is a byproduct of incomplete combustion. When material burns, it releases carbon particles and ash into the air. Incense smoke is often heavier if the incense contains charcoal, binders, or synthetic oils."
  },
  {
    question: "Can incense be smoke-free?",
    answer: "Yes. When botanical resins and woods are heated to their specific boiling points—but below their ignition points—they release aroma without smoke. This is the principle of 'incense warming'."
  },
  {
    question: "What is botanical incense?",
    answer: "Botanical incense is composed entirely of dried plants: wood chips, resins, saps, leaves, and flowers. It contains no synthetic fragrance oils, dipropylene glycol (DPG), or potassium nitrate (saltpeter)."
  }
];
