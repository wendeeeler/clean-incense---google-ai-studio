import React from 'react';

const Standards: React.FC = () => {
  const standards = [
    {
      title: "1. Natural Botanicals Only",
      desc: "Ingredients must be whole plants: wood, resin, leaf, flower, or root. No fillers, no extenders."
    },
    {
      title: "2. Zero Synthetic Fragrance",
      desc: "Aroma must come from the plant material itself, not laboratory-created fragrance oils sprayed onto a carrier."
    },
    {
      title: "3. No Combustion",
      desc: "The delivery method must rely on gentle heat release, not burning. Fire destroys; heat reveals."
    },
    {
      title: "4. Transparent Sourcing",
      desc: "Users deserve to know not just what is in the incense, but where it came from and how it was harvested."
    },
    {
      title: "5. Gentle Warming",
      desc: "The process creates a ritual of patience. Full aroma expression happens slowly, filling a space without overwhelming it."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">The Clean Incense Standards</h1>
        <p className="text-xl text-stone-600 leading-relaxed">
          To build trust in a confused market, we established five non-negotiable pillars that define what truly "clean" incense means.
        </p>
      </header>

      <div className="space-y-12">
        {standards.map((s, index) => (
          <article key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-stone-200 pt-10">
            <div className="md:w-1/4">
               <span className="text-6xl font-serif text-stone-200">{index + 1}</span>
            </div>
            <div className="md:w-3/4">
              <h2 className="font-serif text-2xl text-stone-800 mb-3">{s.title.substring(3)}</h2>
              <p className="text-stone-600 leading-relaxed text-lg">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 p-8 bg-stone-100 rounded-sm">
        <h3 className="font-serif text-2xl mb-4">Why these matter</h3>
        <p className="text-stone-600 mb-4">
          The incense industry is largely unregulated. Terms like "natural" are often used on packaging for products dipped in synthetic chemicals.
        </p>
        <p className="text-stone-600">
          By adhering to these standards, we ensure a product that respects the plant, the harvester, and the air quality of your home.
        </p>
      </div>
    </div>
  );
};

export default Standards;
