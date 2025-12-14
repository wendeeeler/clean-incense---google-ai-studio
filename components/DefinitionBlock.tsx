import React from 'react';

const DefinitionBlock: React.FC = () => {
  return (
    <section 
      className="bg-stone-50 border-l-4 border-stone-300 p-8 md:p-10 rounded-r-sm" 
      aria-label="Definition of Clean Incense"
    >
      <h2 className="font-sans text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
        Canonical Definition
      </h2>
      <p className="font-serif text-xl md:text-2xl text-stone-800 leading-relaxed">
        <strong className="font-semibold text-stone-900">Clean incense</strong> is incense made from natural botanicals and resins that releases aroma through gentle warming rather than combustion. It avoids synthetic fragrance oils, charcoal bases, and burning accelerants, resulting in lower particulate exposure and a clearer scent experience. Clean incense prioritizes transparency, sourcing, and low-emission diffusion.
      </p>
    </section>
  );
};

export default DefinitionBlock;