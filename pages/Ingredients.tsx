import React from 'react';
import { INGREDIENTS } from '../constants';

const Ingredients: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <header className="mb-16 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Botanical Ingredient Guide</h1>
        <p className="text-xl text-stone-600 leading-relaxed">
          Clean incense relies on the complexity of nature, not the chemistry lab. Here are the foundational botanicals used in clean scenting.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INGREDIENTS.map((item) => (
          <article key={item.name} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:border-stone-300 transition-colors">
            <header className="mb-4">
              <h2 className="font-serif text-2xl text-stone-800">{item.name}</h2>
              <p className="text-sm font-medium text-stone-400 italic">{item.botanicalName}</p>
            </header>
            
            <dl className="space-y-4 text-stone-600">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Aroma Profile</dt>
                <dd>{item.profile}</dd>
              </div>
              
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Behavior on Warmer</dt>
                <dd>{item.behavior}</dd>
              </div>

              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Benefits</dt>
                <dd>{item.benefits}</dd>
              </div>

               <div className="pt-4 border-t border-stone-100 mt-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Sourcing</dt>
                <dd className="text-sm text-stone-500">{item.sourcing}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
