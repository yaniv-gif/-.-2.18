import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "התקנת פרקטים",
      subtitle: "למינציה ופולימרי SPC",
      desc: "התקנה מדויקת של פרקט למינציה ופרקט SPC העמיד ב-100% למים. כולל בדיקת לחות ויישום מדה מתפלסת במידת הצורך.",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "פרקט פישבון",
      subtitle: "Herringbone",
      desc: "עבודה שדורשת יד יציבה — כל סטייה נראית, ואני לא מאפשר סטיות. סימטריה מושלמת בכל חלל. אלון מעושן, טבעי, מולבן.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "שטיחים מקיר לקיר",
      subtitle: "מתיחה אמריקאית",
      desc: "התקנה באמצעות Power Stretcher. השטיח נמתח על 'גריפרים' נסתרים בלי דבק. התוצאה: שטיח מתוח כמו תוף, ללא גלים.",
      image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "דקים (התקנה וחידוש)",
      subtitle: "איפאה, אורן, סינתטי",
      desc: "התקנת דק עץ וסינתטי (WPC). בנוסף: שירות חידוש דקים ישנים — ליטוש ושימון שמחזירים לדק את הצבע והחיות.",
      image: "https://images.unsplash.com/photo-1499578124509-1611b77778c8?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "תיקונים ושיקום",
      subtitle: "פרקט חורק? התנפח?",
      desc: "אני מבצע תיקונים נקודתיים ומקצועיים שחוסכים החלפה של כל הרצפה. קיצור דלתות, החלפת לוחות, ותיקון נפיחויות.",
      image: "https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="pt-0 pb-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Minimal margin to separate from TrustBar, effectively shooting the content up */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-black pb-4 reveal mt-6 md:mt-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-timber-black tracking-tighter">
              השירותים
            </h2>
            <p className="text-xl mt-4 font-light text-gray-500">
              מענה מלא לרצפה — בפנים ובחוץ
            </p>
          </div>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 md:mb-4">
            Curated Services
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const colSpanClass = index < 3 ? "lg:col-span-2" : "lg:col-span-3";
            const heightClass = index < 3 ? "aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]" : "aspect-[16/9] md:aspect-[21/9]";
            
            return (
              <div key={index} className={`group cursor-pointer reveal delay-${(index % 3) * 100} flex flex-col h-full bg-gray-50 border border-gray-100 hover:border-black transition-colors duration-500 ${colSpanClass}`}>
                <div className={`${heightClass} w-full overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                
                <div className="flex flex-col flex-grow p-6 md:p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-timber-black mb-1">{service.title}</h3>
                    <p className="text-xs font-bold text-timber-accent uppercase tracking-widest mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6">
                    <a href="https://wa.me/972543962871" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-green-500 hover:text-green-600 transition-colors">
                      <Camera className="w-3 h-3" />
                      שלחו תמונה בוואטסאפ
                      <ArrowLeft className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;