import React from 'react';
import DefinitionBlock from '../components/DefinitionBlock';
import { ArrowRight, Flame, ThermometerSun, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8">
      
      {/* Hero Section */}
      <article aria-label="Introduction" className="pt-24 pb-16 md:pt-32 md:pb-20 border-b border-stone-100">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl text-stone-900 mb-8 leading-[1.1] tracking-tight">
            What Is Clean Incense?
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-stone-500 leading-snug mb-12">
            A clear, science-informed guide to botanical incense, low-emission scenting, and incense without the smoke.
          </p>
          <Link 
            to="/start" 
            className="inline-flex items-center text-lg font-medium text-stone-900 hover:text-stone-600 transition-colors group"
          >
            Explore clean scenting 
            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>

      {/* Canonical Definition */}
      <div className="my-16">
        <DefinitionBlock />
      </div>

      {/* Why Traditional Isn't Always Clean */}
      <article className="py-16 border-t border-stone-100">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-10 tracking-tight">
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
      <section className="py-16 border-t border-stone-100">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-10 tracking-tight">
          Clean Incense vs. Burning Incense
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" aria-label="Comparison of incense methods">
            <thead>
              <tr className="border-b-2 border-stone-900">
                <th className="py-4 pr-8 font-sans text-xs font-bold uppercase tracking-wider text-stone-500">Feature</th>
                <th className="py-4 px-4 font-sans text-xs font-bold uppercase tracking-wider text-stone-500">Burning Incense</th>
                <th className="py-4 px-4 font-sans text-xs font-bold uppercase tracking-wider text-stone-900">Clean Incense (Warming)</th>
              </tr>
            </thead>
            <tbody className="text-stone-700 font-mono text-sm">
              <tr className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                <td className="py-6 pr-8 font-sans font-medium text-stone-900 text-base">Heat Source</td>
                <td className="py-6 px-4">Combustion (800°C+)</td>
                <td className="py-6 px-4">Radiant Heat (~180°C)</td>
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                <td className="py-6 pr-8 font-sans font-medium text-stone-900 text-base">Emissions</td>
                <td className="py-6 px-4">Smoke, Ash, PM2.5</td>
                <td className="py-6 px-4">Aromatic Vapor only</td>
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                <td className="py-6 pr-8 font-sans font-medium text-stone-900 text-base">Aroma Quality</td>
                <td className="py-6 px-4">Smoky, charred undertones</td>
                <td className="py-6 px-4">Pure, true-to-botanical</td>
              </tr>
              <tr className="border-b border-stone-200 hover:bg-stone-50 transition-colors">
                <td className="py-6 pr-8 font-sans font-medium text-stone-900 text-base">Ingredients</td>
                <td className="py-6 px-4">Often synthetic + charcoal</td>
                <td className="py-6 px-4">100% Plant Matter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* The Science - Key Concepts Grid */}
      <section className="py-16 border-t border-stone-100">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-10 tracking-tight">
          The Science of Low-Emission Scenting
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.04)] transition-shadow">
            <ThermometerSun className="text-stone-400 mb-6" size={32} strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-stone-900 mb-3">Heat Diffusion</h3>
            <p className="text-stone-600 leading-relaxed">
              Aromatic compounds are volatile; they want to be airborne. Gentle heat liberates them without destroying their molecular structure.
            </p>
          </div>
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.04)] transition-shadow">
             <Flame className="text-stone-400 mb-6" size={32} strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-stone-900 mb-3">No Combustion</h3>
            <p className="text-stone-600 leading-relaxed">
              Burning destroys up to 60% of the aromatic oil before you smell it. Warming preserves the integrity of the scent.
            </p>
          </div>
          <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.04)] transition-shadow">
            <Wind className="text-stone-400 mb-6" size={32} strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-stone-900 mb-3">Particulate Reduction</h3>
            <p className="text-stone-600 leading-relaxed">
              By staying below the ignition point, clean incense avoids creating soot and fine particles that irritate the lungs.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="py-16 my-8 bg-stone-50 border border-stone-100 px-10 rounded-sm">
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl text-stone-900 mb-4">Safety & Sensitivity</h3>
            <p className="text-lg text-stone-600 leading-relaxed">
              Because there is no smoke, clean incense is significantly safer for scent-sensitive individuals, apartment dwellers, and households with children or pets.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 shrink-0">
            <Link to="/warming-vs-burning" className="text-stone-500 hover:text-stone-900 font-medium border-b border-transparent hover:border-stone-900 transition-colors">
              How warming works
            </Link>
            <Link to="/ingredients" className="text-stone-500 hover:text-stone-900 font-medium border-b border-transparent hover:border-stone-900 transition-colors">
              View ingredients
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;