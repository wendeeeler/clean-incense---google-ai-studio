import React from 'react';

const Standards: React.FC = () => {
  const standards = [
    {
      title: "Natural Botanicals Only",
      desc: "Ingredients must be whole plants: wood, resin, leaf, flower, or root. No fillers, no extenders."
    },
    {
      title: "Zero Synthetic Fragrance",
      desc: "Aroma must come from the plant material itself, not laboratory-created fragrance oils sprayed onto a carrier."
    },
    {
      title: "No Combustion",
      desc: "The delivery method must rely on gentle heat release, not burning. Fire destroys; heat reveals."
    },
    {
      title: "Transparent Sourcing",
      desc: "Users deserve to know not just what is in the incense, but where it came from and how it was harvested."
    },
    {
      title: "Gentle Warming",
      desc: "The process creates a ritual of patience. Full aroma expression happens slowly, filling a space without overwhelming it."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <header className="mb-24">
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-8 tracking-editorial">The Clean Incense Standards</h1>
        <p className="text-xl md:text-2xl text-stone-500 leading-editorial font-light font-sans max-w-2xl">
          To build trust in a confused market, we established five non-negotiable pillars that define what truly "clean" incense means.
        </p>
      </header>

      <ol className="space-y-20">
        {standards.map((s, index) => (
          <li key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-stone-200 pt-12">
            <div className="md:w-1/4">
               <span className="text-6xl font-serif text-stone-200 block leading-none">{index + 1}</span>
            </div>
            <div className="md:w-3/4">
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4 tracking-editorial">{s.title}</h2>
              <p className="text-stone-600 leading-editorial text-lg font-sans">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-32 p-12 bg-stone-100 border border-stone-200 rounded-sm">
        <h3 className="font-serif text-2xl md:text-3xl text-stone-900 mb-6 tracking-editorial">Why these matter</h3>
        <p className="text-stone-600 mb-6 leading-editorial text-lg">
          The incense industry is largely unregulated. Terms like "natural" are often used on packaging for products dipped in synthetic chemicals.
        </p>
        <p className="text-stone-600 leading-editorial text-lg">
          By adhering to these standards, we ensure a product that respects the plant, the harvester, and the air quality of your home.
        </p>
      </div>
    </div>
  );
};

export default Standards;