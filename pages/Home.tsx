import React from 'react';
import DefinitionBlock from '../components/DefinitionBlock';
import { ArrowRight, Flame, ThermometerSun, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const comparisons = [
    { feature: "Heat Source", burning: "Combustion (800°C+)", warming: "Radiant Heat (~180°C)" },
    { feature: "Emissions", burning: "Smoke, Ash, PM2.5", warming: "Aromatic Vapor only" },
    { feature: "Aroma Quality", burning: "Smoky, charred undertones", warming: "Pure, true-to-botanical" },
    { feature: "Ingredients", burning: "Often synthetic + charcoal", warming: "100% Plant Matter" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8">
      
      {/* Hero Section */}
      <article aria-label="Introduction to Clean Incense" className="pt-40 pb-32 border-b border-stone-200">
        <div className="max-w-4xl">
          <header>
            <h1 className="font-serif text-5xl md:text-7xl text-stone-900 mb-8 leading-[1.1] tracking-editorial">
              What Is Clean Incense?
            </h1>
          </header>
          <div className="prose prose-stone max-w-none">
            <p className="font-sans text-xl md:text-2xl text-stone-500 font-light leading-editorial mb-12 max-w-2xl antialiased">
              A clear, science-informed guide to botanical incense, low-emission scenting, and incense without the smoke.
            </p>
          </div>
          <div className="mb-24">
            <Link 
              to="/start" 
              className="inline-flex items-center text-xl md:text-2xl font-serif italic text-stone-900 border-b border-stone-300 hover:border-stone-900 transition-colors pb-1"
              aria-label="Begin the guide"
            >
              Begin the guide <span className="not-italic ml-2 font-sans text-lg">→</span>
            </Link>
          </div>

          {/* Technical Feature Figure */}
          <figure 
            className="w-full bg-stone-100 border border-stone-200 rounded-sm overflow-hidden relative shadow-inner" 
            role="img" 
            aria-label="Schematic diagram comparing combustion emissions versus warming vaporization."
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#78716c 0.5px, transparent 0.5px), linear-gradient(90deg, #78716c 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
            </div>
            <div className="relative h-80 flex items-end justify-around pb-20 pt-16 px-12">
               <div className="flex flex-col items-center gap-8 w-1/3 text-center">
                  <div className="relative">
                    <Flame className="text-stone-400 mb-4 animate-pulse" size={48} strokeWidth={1} />
                  </div>
                  <div className="font-serif text-lg text-stone-800 italic">Combustion</div>
               </div>
               <div className="h-48 w-px border-r border-dashed border-stone-300 opacity-50 mb-8"></div>
               <div className="flex flex-col items-center gap-8 w-1/3 text-center">
                  <div className="relative">
                    <ThermometerSun className="text-stone-900 mb-4" size={48} strokeWidth={1} />
                  </div>
                  <div className="font-serif text-lg text-stone-800 italic">Warming</div>
               </div>
            </div>
            <figcaption className="border-t border-stone-300/50 bg-stone-100/50 px-6 py-4 flex justify-between items-center">
               <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500">FIG 1.0 — EMISSION SCHEMATICS</span>
            </figcaption>
          </figure>
        </div>
      </article>

      {/* Canonical Definition */}
      <DefinitionBlock />

      {/* Why Traditional Isn't Always Clean */}
      <article className="py-32 border-t border-stone-200" aria-labelledby="heading-traditional">
        <h2 id="heading-traditional" className="font-serif text-3xl md:text-4xl text-stone-900 mb-10 tracking-editorial">
          Why traditional incense isn't always clean
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-lg text-stone-600 leading-editorial font-sans">
          <p>
            Traditional incense relies on combustion. When you light a stick or cone, you are initiating a chemical reaction that produces particulate matter (PM2.5), carbon monoxide, and other byproducts of burning. Even high-quality natural incense produces smoke when burned.
          </p>
          <p>
            Furthermore, mass-market incense often uses a "blank" dipped in synthetic fragrance oils and chemical burning accelerants. These compounds volatilize unpredictably and can cling to textiles and indoor air long after the scent fades.
          </p>
        </div>
      </article>

      {/* Comparison Table */}
      <section className="py-32 border-t border-stone-200" aria-labelledby="heading-comparison">
        <h2 id="heading-comparison" className="font-serif text-3xl md:text-4xl text-stone-900 mb-12 tracking-editorial">
          Clean Incense vs. Burning Incense
        </h2>
        
        <div className="hidden md:block">
          <table className="w-full text-left border-collapse" aria-label="Comparison of incense methods">
            <thead>
              <tr className="border-b-2 border-stone-800">
                <th className="py-6 pr-8 font-sans text-xs font-bold uppercase tracking-wider text-stone-400 w-1/4">Feature</th>
                <th className="py-6 px-6 font-sans text-xs font-bold uppercase tracking-wider text-stone-400 w-1/3">Burning Incense</th>
                <th className="py-6 px-6 font-sans text-xs font-bold uppercase tracking-wider text-stone-900 w-1/3 bg-stone-50/50">Clean Incense (Warming)</th>
              </tr>
            </thead>
            <tbody className="text-stone-700 font-serif text-lg">
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b border-stone-200">
                  <td className="py-6 pr-8 font-sans font-bold text-stone-900 text-xs uppercase tracking-wide">{row.feature}</td>
                  <td className="py-6 px-6 text-stone-500">{row.burning}</td>
                  <td className="py-6 px-6 text-stone-900 font-medium bg-stone-50/50">{row.warming}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-12">
           {comparisons.map((row, index) => (
             <div key={index} className="border-t-2 border-stone-200 pt-6">
               <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-stone-400 mb-6">{row.feature}</h3>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <span className="block font-sans text-[10px] uppercase tracking-wide text-stone-400 mb-2">Burning</span>
                   <p className="font-serif text-lg text-stone-500 leading-tight">{row.burning}</p>
                 </div>
                 <div>
                    <span className="block font-sans text-[10px] uppercase tracking-wide text-stone-900 mb-2">Warming</span>
                    <p className="font-serif text-lg text-stone-900 font-medium leading-tight">{row.warming}</p>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-32 border-t border-stone-200" aria-labelledby="heading-science">
        <header className="mb-12">
            <h2 id="heading-science" className="font-serif text-3xl md:text-4xl text-stone-900 tracking-editorial">
            The Science of Low-Emission Scenting
            </h2>
        </header>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-sm flex flex-col">
            <ThermometerSun className="text-stone-400 mb-6" size={32} strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-stone-900 mb-3">Heat Diffusion</h3>
            <p className="text-stone-600 leading-editorial text-sm">Aromatic compounds are volatile; gentle heat liberates them without destroying their molecular structure.</p>
          </div>
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-sm flex flex-col">
            <Flame className="text-stone-400 mb-6" size={32} strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-stone-900 mb-3">No Combustion</h3>
            <p className="text-stone-600 leading-editorial text-sm">Burning destroys up to 60% of the aromatic oil before you smell it. Warming preserves the integrity of the scent.</p>
          </div>
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-sm flex flex-col">
            <Wind className="text-stone-400 mb-6" size={32} strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-stone-900 mb-3">Particulate Reduction</h3>
            <p className="text-stone-600 leading-editorial text-sm">By staying below the ignition point, clean incense avoids creating soot and fine particles.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;