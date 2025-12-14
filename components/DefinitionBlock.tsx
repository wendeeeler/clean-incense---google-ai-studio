import React from 'react';

const DefinitionBlock: React.FC = () => {
  return (
    <section 
      className="bg-[#F9F9F9] border-l-4 border-stone-300 p-8 md:p-10 my-12" 
      aria-label="Definition of Clean Incense"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-baseline">
        <h2 className="font-mono text-xs font-bold text-stone-400 uppercase tracking-widest shrink-0">
          Definition
        </h2>
        <p className="font-serif text-xl md:text-2xl text-stone-800 leading-relaxed max-w-3xl">
          <strong className="font-semibold text-stone-900">Clean incense</strong> (n.) — Incense composed of natural botanicals and resins that releases aroma through gentle warming rather than combustion. It prioritizes transparency, avoids synthetic accelerants, and results in a low-emission scent experience.
        </p>
      </div>
    </section>
  );
};

export default DefinitionBlock;