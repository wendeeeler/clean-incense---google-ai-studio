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
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#78716c 0.5px, transparent 0.5px), linear-gradient(90deg, #78716c 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
            </div>

            {/* Y-Axis Rulers (Tick Marks) */}
            <div className="absolute left-0 top-12 bottom-12 w-12 border-r border-stone-300/50 flex flex-col justify-between items-end pr-2 py-4">
               {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2 h-px bg-stone-400 opacity-50"></div>
               ))}
            </div>

            <div className="relative h-80 flex items-end justify-around pb-20 pt-16 px-12 ml-8">
               
               {/* Schematic: Combustion */}
               <div className="flex flex-col items-center gap-8 w-1/3">
                  <div className="relative flex flex-col items-center">
                     {/* Chaos / Smoke Emissions */}
                     <div className="absolute -top-16 flex flex-col items-center w-20 h-20">
                         {/* Scattered particles */}
                        <div className="absolute top-2 left-4 w-1 h-1 bg-stone-600 rounded-full opacity-60"></div>
                        <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-stone-500 rounded-full opacity-40"></div>
                        <div className="absolute top-0 right-2 w-1 h-1 bg-stone-700 rounded-full opacity-50"></div>
                        <div className="absolute top-5 left-1 w-2 h-2 bg-stone-400 rounded-full blur-[1px] opacity-30"></div>
                        {/* Jagged Lines */}
                        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute top-0 opacity-40">
                           <path d="M30 60 Q 20 50 30 40 T 35 20 T 25 0" stroke="#78716c" strokeWidth="1" fill="none" strokeDasharray="2 2" />
                        </svg>
                     </div>
                     <div className="absolute -top-24 text-[10px] font-mono tracking-widest text-stone-500 uppercase whitespace-nowrap">PM 2.5 Chaos</div>

                     {/* The Stick (Jagged / Uneven) */}
                     <div className="relative z-10">
                        <svg width="10" height="112" viewBox="0 0 10 112" className="overflow-visible">
                            {/* Jagged stick body */}
                            <path d="M5 112 L4 80 L6 50 L4 20 L5 0" stroke="#44403c" strokeWidth="2" fill="none" strokeLinecap="round" />
                            {/* Glowing Ember */}
                            <circle cx="5" cy="0" r="3" fill="#a8a29e" stroke="#57534e" />
                        </svg>
                     </div>
                     {/* Ash Pile */}
                     <div className="w-10 h-2 bg-stone-400 rounded-full mt-1 blur-[1px]"></div>
                  </div>
                  <div className="text-center z-10">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-2 border border-stone-300 px-2 py-px bg-stone-50 inline-block">Method A</div>
                    <div className="font-serif text-lg text-stone-800 italic">Combustion</div>
                  </div>
               </div>

               {/* Central Divider */}
               <div className="h-48 w-px border-r border-dashed border-stone-300 opacity-50 mb-8"></div>

               {/* Schematic: Warming */}
               <div className="flex flex-col items-center gap-8 w-1/3">
                  <div className="relative flex flex-col items-center">
                     {/* Vapor Animation (Smooth) */}
                     <div className="absolute -top-20 w-16 h-24 flex justify-center items-end opacity-60 pointer-events-none">
                        <div className="w-4 h-4 border border-stone-500 rounded-full animate-vapor absolute bottom-0 bg-white/20"></div>
                        <div className="w-2 h-2 border border-stone-500 rounded-full animate-vapor-delay absolute bottom-2 left-3 bg-white/20"></div>
                     </div>
                     <div className="absolute -top-24 text-[10px] font-mono tracking-widest text-stone-500 uppercase whitespace-nowrap">Coherent Vapor</div>

                     {/* The Material (Smooth Mound) */}
                     <div className="w-8 h-4 border border-stone-600 rounded-t-full bg-stone-200 relative z-20 mb-[1px]"></div>
                     
                     {/* The Heater Plate (Clean Line) */}
                     <div className="w-14 h-1 bg-stone-800 relative z-10"></div>
                     {/* The Heater Body (Geometric) */}
                     <div className="w-10 h-10 border-x border-b border-stone-400 bg-transparent flex justify-center items-center relative">
                        {/* Internal Coil Schematic - Precise */}
                        <div className="w-6 h-px border-t border-dotted border-stone-400 transform rotate-45"></div>
                        <div className="w-6 h-px border-t border-dotted border-stone-400 transform -rotate-45 absolute"></div>
                     </div>
                  </div>
                  <div className="text-center z-10">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-2 border border-stone-300 px-2 py-px bg-stone-50 inline-block">Method B</div>
                    <div className="font-serif text-lg text-stone-800 italic">Warming</div>
                  </div>
               </div>

            </div>

            <figcaption className="border-t border-stone-300/50 bg-stone-100/50 px-6 py-4 flex justify-between items-center backdrop-blur-sm ml-12">
               <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500">FIG 1.0 — EMISSION SCHEMATICS</span>
               <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">REF: SCI-2025</span>
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
            Furthermore, mass-market incense often uses a "blank" (a charcoal or sawdust stick) dipped in synthetic fragrance oils and chemical burning accelerants (like potassium nitrate) to ensure it stays lit. These compounds volatilize unpredictably and can cling to textiles and indoor air long after the scent fades.
          </p>
        </div>
      </article>

      {/* Comparison Table */}
      <section className="py-32 border-t border-stone-200" aria-labelledby="heading-comparison">
        <h2 id="heading-comparison" className="font-serif text-3xl md:text-4xl text-stone-900 mb-12 tracking-editorial">
          Clean Incense vs. Burning Incense
        </h2>
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <table className="w-full text-left border-collapse" aria-label="Scientific comparison of incense methods">
            <thead>
              <tr className="border-b-2 border-stone-800">
                <th className="py-6 pr-8 font-sans text-xs font-bold uppercase tracking-wider text-stone-400 w-1/4 align-bottom">Feature</th>
                <th className="py-6 px-6 font-sans text-xs font-bold uppercase tracking-wider text-stone-400 w-1/3 align-bottom">Burning Incense</th>
                <th className="py-6 px-6 font-sans text-xs font-bold uppercase tracking-wider text-stone-900 w-1/3 align-bottom bg-stone-50/50">Clean Incense (Warming)</th>
              </tr>
            </thead>
            <tbody className="text-stone-700 font-serif text-lg border-b-2 border-stone-800">
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b border-stone-200 last:border-0">
                  <td className="py-6 pr-8 font-sans font-bold text-stone-900 text-xs uppercase tracking-wide">{row.feature}</td>
                  <td className="py-6 px-6 text-stone-500">{row.burning}</td>
                  <td className="py-6 px-6 text-stone-900 font-medium bg-stone-50/50">{row.warming}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Stacked Cards) */}
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

      {/* The Science - Key Concepts Grid */}
      <section className="py-32 border-t border-stone-200" aria-labelledby="heading-science">
        <header className="mb-12">
            <h2 id="heading-science" className="font-serif text-3xl md:text-4xl text-stone-900 tracking-editorial mb-4">
            The Science of Low-Emission Scenting
            </h2>
            <p className="text-xl text-stone-500 max-w-2xl leading-editorial">
                Three principles distinguish clean scenting from traditional combustion.
            </p>
        </header>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Concept Card 1 */}
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <ThermometerSun className="text-stone-400 group-hover:text-stone-600 transition-colors" size={32} strokeWidth={1.5} />
                <span className="font-mono text-xs text-stone-300">01</span>
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3 tracking-editorial">Heat Diffusion</h3>
            <p className="text-stone-600 leading-editorial text-sm flex-grow">
              Aromatic compounds are volatile; they want to be airborne. Gentle heat liberates them without destroying their molecular structure.
            </p>
          </div>

          {/* Concept Card 2 */}
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <Flame className="text-stone-400 group-hover:text-stone-600 transition-colors" size={32} strokeWidth={1.5} />
                <span className="font-mono text-xs text-stone-300">02</span>
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3 tracking-editorial">No Combustion</h3>
            <p className="text-stone-600 leading-editorial text-sm flex-grow">
              Burning destroys up to 60% of the aromatic oil before you smell it. Warming preserves the integrity of the scent.
            </p>
          </div>

          {/* Concept Card 3 */}
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <Wind className="text-stone-400 group-hover:text-stone-600 transition-colors" size={32} strokeWidth={1.5} />
                <span className="font-mono text-xs text-stone-300">03</span>
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3 tracking-editorial">Particulate Reduction</h3>
            <p className="text-stone-600 leading-editorial text-sm flex-grow">
              By staying below the ignition point, clean incense avoids creating soot and fine particles that irritate the lungs.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="py-24 my-8 bg-stone-100 border border-stone-200 px-10 rounded-sm" aria-label="Safety Information">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl text-stone-900 mb-4 tracking-editorial">Safety & Sensitivity</h3>
            <p className="text-lg text-stone-600 leading-editorial">
              Because there is no smoke, clean incense is significantly safer for scent-sensitive individuals, apartment dwellers, and households with children or pets.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 shrink-0">
            <Link to="/warming-vs-burning" className="text-stone-500 hover:text-stone-900 font-medium border-b border-stone-300 hover:border-stone-900 transition-colors">
              How warming works
            </Link>
            <Link to="/ingredients" className="text-stone-500 hover:text-stone-900 font-medium border-b border-stone-300 hover:border-stone-900 transition-colors">
              View ingredients
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;