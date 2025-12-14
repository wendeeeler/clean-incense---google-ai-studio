import React from 'react';
import DefinitionBlock from '../components/DefinitionBlock';
import { ArrowRight, Flame, ThermometerSun, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8">
      
      {/* Hero Section */}
      <article aria-label="Introduction to Clean Incense" className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-stone-200">
        <div className="max-w-4xl">
          <header>
            <h1 className="font-serif text-5xl md:text-7xl text-stone-900 mb-8 leading-[1.15] tracking-tight">
              What Is Clean Incense?
            </h1>
          </header>
          <div className="prose prose-stone max-w-none">
            <p className="font-sans text-xl md:text-2xl text-stone-500 font-light leading-relaxed mb-12 max-w-2xl antialiased">
              A clear, science-informed guide to botanical incense, low-emission scenting, and incense without the smoke.
            </p>
          </div>
          <div className="mb-20">
            <Link 
              to="/start" 
              className="inline-flex items-center text-xl font-medium text-stone-900 hover:text-stone-600 transition-colors group"
              aria-label="Start your clean scenting journey"
            >
              Explore clean scenting 
              <ArrowRight size={22} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Technical Feature Figure */}
          <figure 
            className="w-full bg-stone-50 border border-stone-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-sm overflow-hidden" 
            role="img" 
            aria-label="Technical diagram illustrating the difference between combustion (left) which produces PM2.5 particulates, and warming (right) which produces only aromatic vapor."
          >
            <div className="aspect-[2.5/1] md:aspect-[3/1] relative flex items-center justify-center p-8">
               <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
               
               <div className="flex w-full max-w-2xl justify-around items-end h-full pb-4">
                  {/* Visual: Combustion */}
                  <div className="flex flex-col items-center group">
                     <div className="relative h-24 w-1 bg-stone-300 mb-3">
                        <div className="absolute -top-1 -left-[2px] w-2 h-2 bg-stone-400 rounded-full animate-pulse" />
                        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-t from-stone-300 to-transparent -translate-y-full opacity-50 blur-[1px]" />
                        <div className="absolute top-[-40px] left-[-20px] text-[10px] font-mono text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          PM2.5 > 50µg
                        </div>
                     </div>
                     <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">Combustion</span>
                  </div>

                  {/* Visual: Warming */}
                  <div className="flex flex-col items-center group">
                     <div className="relative h-12 w-16 border-b-2 border-stone-300 mb-3 flex justify-center items-end">
                        <div className="w-8 h-4 bg-stone-200 rounded-t-full opacity-80" />
                        <div className="absolute -top-12 w-32 h-32 bg-stone-200 rounded-full blur-3xl opacity-20 pointer-events-none" />
                        <div className="absolute top-[-40px] left-[10px] text-[10px] font-mono text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Vapor Only
                        </div>
                     </div>
                     <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">Warming</span>
                  </div>
               </div>
            </div>
            <figcaption className="px-6 py-3 border-t border-stone-200 bg-white/50 text-xs font-mono text-stone-400 flex justify-between items-center tracking-wide">
              <span>FIG 1.0 — EMISSION METHODOLOGY</span>
              <span className="hidden md:inline text-stone-300">CLEAN-INCENSE.COM</span>
            </figcaption>
          </figure>
        </div>
      </article>

      {/* Canonical Definition */}
      <DefinitionBlock />

      {/* Why Traditional Isn't Always Clean */}
      <article className="py-16 border-t border-stone-200" aria-labelledby="heading-traditional">
        <h2 id="heading-traditional" className="font-serif text-3xl md:text-4xl text-stone-900 mb-10 tracking-tight">
          Why traditional incense isn't always clean
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-lg text-stone-600 leading-relaxed font-sans">
          <p>
            Traditional incense relies on combustion. When you light a stick or cone, you are initiating a chemical reaction that produces particulate matter (PM2.5), carbon monoxide, and other byproducts of burning. Even high-quality natural incense produces smoke when burned.
          </p>
          <p>
            Furthermore, mass-market incense often uses a "blank" (a charcoal or sawdust stick) dipped in synthetic fragrance oils and chemical burning accelerants (like potassium nitrate) to ensure it stays lit. These compounds volatilize unpredictably and can cling to textiles and indoor air long after the scent fades.
          </p>
        </div>
      </article>

      {/* Comparison Table */}
      <section className="py-16 border-t border-stone-200" aria-labelledby="heading-comparison">
        <h2 id="heading-comparison" className="font-serif text-3xl md:text-4xl text-stone-900 mb-10 tracking-tight">
          Clean Incense vs. Burning Incense
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" aria-label="Scientific comparison of incense methods">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="py-4 pr-8 font-sans text-xs font-bold uppercase tracking-wider text-stone-500 w-1/4">Feature</th>
                <th className="py-4 px-4 font-sans text-xs font-bold uppercase tracking-wider text-stone-500 w-1/3">Burning Incense</th>
                <th className="py-4 px-4 font-sans text-xs font-bold uppercase tracking-wider text-stone-900 w-1/3">Clean Incense (Warming)</th>
              </tr>
            </thead>
            <tbody className="text-stone-700 font-mono text-sm">
              <tr className="border-b border-stone-100">
                <td className="py-6 pr-8 font-sans font-medium text-stone-900 text-base">Heat Source</td>
                <td className="py-6 px-4">Combustion (800°C+)</td>
                <td className="py-6 px-4">Radiant Heat (~180°C)</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="py-6 pr-8 font-sans font-medium text-stone-900 text-base">Emissions</td>
                <td className="py-6 px-4">Smoke, Ash, PM2.5</td>
                <td className="py-6 px-4">Aromatic Vapor only</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="py-6 pr-8 font-sans font-medium text-stone-900 text-base">Aroma Quality</td>
                <td className="py-6 px-4">Smoky, charred undertones</td>
                <td className="py-6 px-4">Pure, true-to-botanical</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="py-6 pr-8 font-sans font-medium text-stone-900 text-base">Ingredients</td>
                <td className="py-6 px-4">Often synthetic + charcoal</td>
                <td className="py-6 px-4">100% Plant Matter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* The Science - Key Concepts Grid */}
      <section className="py-16 border-t border-stone-200" aria-labelledby="heading-science">
        <header className="mb-12">
            <h2 id="heading-science" className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight mb-4">
            The Science of Low-Emission Scenting
            </h2>
            <p className="text-xl text-stone-500 max-w-2xl">
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
            <h3 className="font-serif text-xl text-stone-900 mb-3">Heat Diffusion</h3>
            <p className="text-stone-600 leading-relaxed text-sm flex-grow">
              Aromatic compounds are volatile; they want to be airborne. Gentle heat liberates them without destroying their molecular structure.
            </p>
          </div>

          {/* Concept Card 2 */}
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <Flame className="text-stone-400 group-hover:text-stone-600 transition-colors" size={32} strokeWidth={1.5} />
                <span className="font-mono text-xs text-stone-300">02</span>
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3">No Combustion</h3>
            <p className="text-stone-600 leading-relaxed text-sm flex-grow">
              Burning destroys up to 60% of the aromatic oil before you smell it. Warming preserves the integrity of the scent.
            </p>
          </div>

          {/* Concept Card 3 */}
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <Wind className="text-stone-400 group-hover:text-stone-600 transition-colors" size={32} strokeWidth={1.5} />
                <span className="font-mono text-xs text-stone-300">03</span>
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-3">Particulate Reduction</h3>
            <p className="text-stone-600 leading-relaxed text-sm flex-grow">
              By staying below the ignition point, clean incense avoids creating soot and fine particles that irritate the lungs.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="py-16 my-8 bg-stone-100 border border-stone-200 px-10 rounded-sm" aria-label="Safety Information">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl text-stone-900 mb-4">Safety & Sensitivity</h3>
            <p className="text-lg text-stone-600 leading-relaxed">
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