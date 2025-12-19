import React from 'react';
import { BarChart, Bar, XAxis, YAxis, LabelList, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Warming', temp: 180, description: 'Safe Release' },
  { name: 'Burning', temp: 800, description: 'Charring & Smoke' },
];

const WarmingVsBurning: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <header className="mb-24 text-center">
        <h1 className="font-serif text-4xl md:text-6xl text-stone-900 mb-8 tracking-editorial">Incense Warming vs. Burning</h1>
        <p className="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto leading-editorial font-light font-sans">
          The difference isn't just smoke. It's about chemistry, temperature, and the preservation of scent.
        </p>
      </header>

      <section className="mb-32 relative">
        <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-12 text-center">Fig 2.0 — Thermal Comparison (°C)</h3>
        
        <div className="w-full h-96 relative">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 60, right: 30, left: 20, bottom: 40 }} barSize={140}>
                <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontFamily: '"Inter"', fontSize: 11, textTransform: 'uppercase', fill: '#78716c', letterSpacing: '0.1em'}}
                    dy={20}
                />
                <YAxis 
                    hide={true} 
                    domain={[0, 900]}
                />
                <Bar dataKey="temp" radius={[2, 2, 0, 0]} isAnimationActive={true} animationDuration={1500}>
                    <LabelList 
                        dataKey="temp" 
                        position="top" 
                        formatter={(value: number) => `${value}°C`}
                        style={{ fontFamily: '"Crimson Pro"', fontSize: '32px', fill: '#1c1917', fontWeight: 400 }} 
                        offset={15}
                    />
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#44403c' : '#1c1917'} /> 
                    ))}
                </Bar>
                </BarChart>
            </ResponsiveContainer>

            <div className="hidden md:block absolute top-[60%] left-[10%] w-48 text-right pr-6 border-r border-stone-300/50">
                <p className="font-serif italic text-stone-600 text-lg">Optimal aromatic release</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mt-2">Full profile preserved</p>
            </div>
            
            <div className="hidden md:block absolute top-[10%] right-[10%] w-48 text-left pl-6 border-l border-stone-300/50">
                <p className="font-serif italic text-stone-600 text-lg">Destructive combustion</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mt-2">Molecular breakdown</p>
            </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 border-t border-stone-200 pt-16">
        <div>
          <h2 className="font-serif text-3xl mb-6 text-stone-900 tracking-editorial">How Burning Works</h2>
          <p className="text-stone-600 mb-6 leading-editorial text-lg">
            Combustion is a violent chemical reaction. When you light a stick of incense, the tip glows red hot (often exceeding 800°C). This heat vaporizes the oils, but it also burns the wood or charcoal base, creating:
          </p>
          <ul className="list-disc list-inside text-stone-600 space-y-3 mb-6 font-medium font-serif italic text-xl">
            <li>Ash and particulate matter</li>
            <li>Acrid smoke smell</li>
            <li>Carbon byproducts</li>
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl mb-6 text-stone-900 tracking-editorial">How Warming Works</h2>
          <p className="text-stone-600 mb-6 leading-editorial text-lg">
            Incense warming uses radiant or conductive heat to raise the temperature of the material to between 100°C and 200°C.
          </p>
          <p className="text-stone-600 mb-6 leading-editorial text-lg">
            This "sweet spot" is hot enough to melt resins and evaporate essential oils, but cool enough to prevent the plant material from catching fire. The result is pure aroma with zero smoke.
          </p>
        </div>
      </div>

      <div className="mt-24 text-center">
        <blockquote className="font-serif text-2xl md:text-3xl text-stone-800 italic max-w-3xl mx-auto leading-relaxed">
          "Clean incense reaches its full potential when paired with warming. It is the difference between listening to music and listening to static."
        </blockquote>
      </div>
    </div>
  );
};

export default WarmingVsBurning;