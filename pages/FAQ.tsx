import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-16 text-center">
        <h1 className="font-serif text-4xl text-stone-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-stone-600">Common questions about safety, smoke, and ingredients.</p>
      </header>

      <div className="space-y-12">
        {FAQS.map((faq, index) => (
          <article key={index}>
            <h2 className="font-serif text-xl md:text-2xl text-stone-800 mb-3">
              {faq.question}
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
