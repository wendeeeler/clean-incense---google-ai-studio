import React from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Start: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <header className="mb-32">
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-8 tracking-editorial">Start Clean Scenting</h1>
        <p className="text-xl md:text-2xl text-stone-500 max-w-2xl leading-editorial font-light font-sans">
          Transitioning to clean incense is a ritual in itself. Here is a curated path toward a cleaner sensory experience.
        </p>
      </header>

      <div className="space-y-32">
        {/* Step 01: Understanding */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-stone-200 pt-12 relative">
          <div className="md:w-1/3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-4">Step 01</div>
            <h2 className="font-serif text-3xl text-stone-900 tracking-editorial flex items-center gap-3">
              Understanding <Download size={18} strokeWidth={1} className="text-stone-400" />
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-stone-600 text-lg leading-editorial mb-8 font-sans">
              Begin by learning the fundamentals of thermal release. Our Starter Guide outlines what to look for on labels, common ingredients to avoid, and the essential setup for your first botanical warmer.
            </p>
            <a href="#" className="inline-flex items-center text-stone-900 italic font-serif text-xl border-b border-stone-300 hover:border-stone-900 transition-colors pb-1">
              Obtain the Starter Guide (PDF) <span className="not-italic ml-2 text-sm font-sans">↓</span>
            </a>
          </div>
        </section>

        {/* Step 02: Discovery */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-stone-200 pt-12">
          <div className="md:w-1/3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-4">Step 02</div>
            <h2 className="font-serif text-3xl text-stone-900 tracking-editorial flex items-center gap-3">
              Discovery <Sparkles size={18} strokeWidth={1} className="text-stone-400" />
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-stone-600 text-lg leading-editorial mb-8 font-sans">
              Botanical scenting is personal. Whether you gravitate toward the crisp, architectural resin of Frankincense or the milky, grounding wood of Sandalwood, our sensory assessment helps narrow your focus.
            </p>
            <a href="#" className="inline-flex items-center text-stone-900 italic font-serif text-xl border-b border-stone-300 hover:border-stone-900 transition-colors pb-1">
              Begin the Sensory Quiz <span className="not-italic ml-2 text-sm font-sans">→</span>
            </a>
          </div>
        </section>

        {/* Step 03: Practice */}
        <section className="bg-stone-100 p-12 border border-stone-200 rounded-sm">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-4">Step 03</div>
            <h3 className="font-serif text-3xl text-stone-900 mb-6 tracking-editorial">Begin the Practice</h3>
            <p className="text-stone-600 mb-8 leading-editorial text-lg font-sans">
              To experience the difference in air quality and scent purity, we recommend the curation at Soul Space—our partner studio dedicated to handcrafted ceramic warmers and ethical, single-origin resins.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-xl font-serif italic text-stone-900 hover:text-stone-600 border-b border-stone-300 hover:border-stone-600 transition-colors pb-1"
            >
              Visit Soul Space <ArrowRight size={18} className="ml-3 not-italic" strokeWidth={1} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Start;