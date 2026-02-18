import React from 'react';

const Partners: React.FC = () => {
  // Using text representation for a clean architectural look instead of potentially clashing logos
  const partners = [
    "QUICK-STEP",
    "KRONO ORIGINAL",
    "BERRY ALLOC",
    "MEISTER",
    "IPEA WOOD",
    "SHAW FLOORS"
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 whitespace-nowrap">
              עובדים רק עם חומרים מובילים
            </span>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-4 w-full">
              {partners.map((partner, index) => (
                <span 
                  key={index} 
                  className="text-lg md:text-xl font-black text-gray-300 hover:text-timber-black transition-colors cursor-default tracking-tighter"
                >
                  {partner}
                </span>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;