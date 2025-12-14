import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';

const data = [
  { name: 'Incense Heater', temp: 180, label: 'Optimal Aroma Release' },
  { name: 'Burning Ember', temp: 800, label: 'Charring & Smoke' },
];

const WarmingVsBurning: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Incense Warming vs. Burning</h1>
        <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
          The difference isn't just smoke. It's about chemistry, temperature, and the preservation of scent.
        </p>
      </header>

      <section className="mb-20">
        <div className="bg-white p-8 rounded shadow-sm border border-stone-100">
            <h3 className="text-center font-serif text-xl mb-8 text-stone-800">The Temperature Gap</h3>
            <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" stroke="#78716c" tick={{fontFamily: 'Inter', fontSize: 12}} />
                <YAxis label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', style: { fill: '#78716c' } }} stroke="#78716c" />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#F7F5F3', border: '1px solid #d6d3d1', fontFamily: 'Inter' }}
                />
                <Bar dataKey="temp" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="temp" position="top" style={{ fill: '#44403c' }} />
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#a8a29e' : '#44403c'} />
                    ))}
                </Bar>
                </BarChart>
            </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-stone-500 mt-4 italic">
                Burning destroys delicate aromatic compounds before they can be released.
            </p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-2xl mb-4 text-stone-800">How Burning Works</h2>
          <p className="text-stone-600 mb-4 leading-relaxed">
            Combustion is a violent chemical reaction. When you light a stick of incense, the tip glows red hot (often exceeding 800°C). This heat vaporizes the oils, but it also burns the wood or charcoal base, creating:
          </p>
          <ul className="list-disc list-inside text-stone-600 space-y-2 mb-6">
            <li>Ash and particulate matter</li>
            <li>Acrid smoke smell</li>
            <li>Carbon byproducts</li>
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-2xl mb-4 text-stone-800">How Warming Works</h2>
          <p className="text-stone-600 mb-4 leading-relaxed">
            Incense warming uses a tealight or electric heater to raise the temperature of the material to between 100°C and 200°C.
          </p>
          <p className="text-stone-600 mb-4 leading-relaxed">
            This "sweet spot" is hot enough to melt resins and evaporate essential oils, but cool enough to prevent the plant material from catching fire. The result is pure aroma with zero smoke.
          </p>
        </div>
      </div>

      <div className="mt-16 border-l-4 border-stone-300 pl-8 py-2">
        <p className="font-serif text-xl text-stone-700 italic">
          "Clean incense reaches its full potential when paired with incense warming. It is the difference between listening to music and listening to static."
        </p>
      </div>
    </div>
  );
};

export default WarmingVsBurning;