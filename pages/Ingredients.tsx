import React from 'react';
import { INGREDIENTS } from '../constants';

const Ingredients: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <header className="mb-24 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-6 tracking-tight">Botanical Ingredients</h1>
        <p className="text-xl text-stone-600 leading-relaxed font-light">
          Clean incense relies on the complexity of nature, not the chemistry lab. Here are the foundational botanicals used in clean scenting.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {INGREDIENTS.map((item) => (
          <article key={item.name} className="flex flex-col border-t border-stone-200 pt-6">
            <header className="mb-6">
              <h2 className="font-serif text-3xl text-stone-900 mb-1">{item.name}</h2>
              <p className="font-serif italic text-lg text-stone-500">{item.botanicalName}</p>
            </header>
            
            <dl className="space-y-6">
              <div>
                <dt className="font-sans text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Aroma Profile</dt>
                <dd className="font-serif text-lg text-stone-800 leading-relaxed italic">{item.profile}</dd>
              </div>
              
              <div className="bg-stone-50 p-4 border border-stone-100 rounded-sm">
                <dt className="font-sans text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Behavior on Warmer</dt>
                <dd className="font-serif text-lg text-stone-900 leading-relaxed font-medium">{item.behavior}</dd>
              </div>

              <div>
                <dt className="font-sans text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Benefits</dt>
                <dd className="font-serif text-lg text-stone-800 leading-relaxed">{item.benefits}</dd>
              </div>

               <div className="pt-6 border-t border-stone-100/50 mt-2">
                <dt className="font-sans text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Sourcing</dt>
                <dd className="font-serif text-base text-stone-500 italic">{item.sourcing}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;