import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32" itemScope itemType="https://schema.org/FAQPage">
      <header className="mb-24 border-b border-stone-200 pb-16">
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-8 tracking-editorial">Clarifications</h1>
        <p className="text-xl text-stone-500 font-light leading-loose">Analytical responses to common inquiries regarding thermal release and air quality.</p>
      </header>

      <div className="space-y-20">
        {FAQS.map((faq, index) => (
          <article 
            key={index} 
            className="grid md:grid-cols-12 gap-8"
            itemProp="mainEntity" 
            itemScope 
            itemType="https://schema.org/Question"
          >
            <div className="md:col-span-4">
               <h2 className="font-serif text-2xl text-stone-900 tracking-editorial italic" itemProp="name">
                {faq.question}
              </h2>
            </div>
            <div className="md:col-span-8" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="text-stone-600 leading-loose text-lg font-light font-sans" itemProp="text">
                {faq.answer}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FAQ;