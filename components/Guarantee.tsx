import React from 'react';
import { Check } from 'lucide-react';

const Guarantee: React.FC = () => {
  const reasons = [
    {
      title: "מחיר סופי (Fixed Price)",
      desc: "מה שסיכמנו במדידה — זה מה שתשלמו. אין 'תוספות' ואין הפתעות באמצע יום העבודה."
    },
    {
      title: "אני המבצע",
      desc: "אין טלפון שבור מול מוקדניות או קבלני משנה. ההתחייבות שלי היא אישית."
    },
    {
      title: "דיוק של מילימטרים",
      desc: "כל חיתוך, כל חיבור, כל פינה. בפישבון — כל סטייה נראית. אני לא מאפשר סטיות."
    },
    {
      title: "ניקיון בסוף יום",
      desc: "אני לא משאיר 'אתר בנייה'. בסיום העבודה הבית נשאר נקי — כולל פינוי שאריות ונסורת."
    },
    {
      title: "אחריות 5 שנים על העבודה",
      desc: "השוק נותן שנה. אני נותן חמש. אם משהו זז, חורק או מתרומם — אני בא לתקן על חשבוני."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-start relative">
          
          {/* Header - Sticky Positioning to fill empty space */}
          <div className="md:w-1/3 md:sticky md:top-32 self-start">
             <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block">Trust & Quality</span>
             <h2 className="text-4xl md:text-5xl font-black text-timber-black leading-tight">
               למה הלקוחות<br/>
               חוזרים אליי?
             </h2>
             <p className="text-gray-500 mt-6 font-light">
               ומביאים את החברים.
             </p>
             
             <div className="hidden md:block mt-12 w-12 h-[1px] bg-black"></div>
          </div>

          {/* List */}
          <div className="md:w-2/3 w-full">
            <div className="space-y-0 divide-y divide-gray-100">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-6 py-10 first:pt-0 group transition-colors duration-300">
                  <div className="bg-timber-gray text-black p-3 flex-shrink-0 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-timber-black mb-3 group-hover:text-timber-accent transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 font-light text-lg leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Guarantee;