import React from 'react';

const DefinitionBlock: React.FC = () => {
  return (
    <section 
      className="max-w-4xl mx-auto border-y border-stone-200 py-16 my-24 text-center" 
      aria-label="Definition of Clean Incense"
    >
      <div className="flex flex-col items-center px-4">
        <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-8 tracking-tight lowercase">
          clean incense <span className="font-serif italic text-2xl md:text-3xl text-stone-400 font-normal ml-2">(n.)</span>
        </h2>
        <p className="font-serif text-xl md:text-3xl text-stone-800 leading-relaxed max-w-3xl mx-auto">
          Incense composed of natural botanicals and resins that releases aroma through gentle warming rather than combustion. It prioritizes transparency, avoids synthetic accelerants, and results in a low-emission scent experience.
        </p>
      </div>
    </section>
  );
};

export default DefinitionBlock;