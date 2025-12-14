import React from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Start: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Start Clean Scenting</h1>
        <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
          Transitioning to clean incense is a ritual in itself. Here is how to begin your journey toward clarity.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* Card 1: Guide */}
        <div className="bg-white p-10 rounded-sm shadow-sm border border-stone-100 flex flex-col items-start hover:border-stone-300 transition-colors">
          <div className="bg-stone-100 p-3 rounded-full mb-6 text-stone-600">
            <Download size={24} strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-2xl text-stone-800 mb-3">The Starter Guide</h2>
          <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
            A free PDF checklist: What to look for on labels, what ingredients to avoid, and how to set up your first warmer.
          </p>
          <button className="text-stone-800 font-medium border-b border-stone-300 hover:border-stone-800 transition-colors pb-1">
            Download Guide (PDF)
          </button>
        </div>

        {/* Card 2: Quiz */}
        <div className="bg-stone-800 p-10 rounded-sm shadow-sm text-stone-50 flex flex-col items-start hover:bg-stone-900 transition-colors">
          <div className="bg-stone-700 p-3 rounded-full mb-6 text-stone-300">
            <Sparkles size={24} strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-2xl text-white mb-3">Find Your Scent</h2>
          <p className="text-stone-300 mb-8 flex-grow leading-relaxed">
            Not sure if you prefer the deep resin of Frankincense or the bright wood of Palo Santo? Take our 30-second quiz.
          </p>
          <button className="text-white font-medium border-b border-stone-500 hover:border-white transition-colors pb-1">
            Take the Quiz
          </button>
        </div>
      </div>

      {/* Stewardship CTA */}
      <section className="bg-stone-100 p-12 rounded-sm border border-stone-200">
        <div className="max-w-xl">
            <h3 className="font-serif text-2xl text-stone-800 mb-4">Ready to experience the difference?</h3>
            <p className="text-stone-600 mb-8 leading-relaxed">
            Soul Space offers a curated collection of ethical, single-origin botanical incense and handcrafted ceramic warmers.
            </p>
            <a 
            href="#" 
            className="inline-flex items-center text-lg font-medium text-stone-900 hover:text-stone-600 transition-colors group"
            >
            Visit Soul Space <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
        </div>
      </section>
    </div>
  );
};

export default Start;