import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "שולחים תמונה",
      desc: "שולחים לי בוואטסאפ תמונה של החדר או המשטח + מידות משוערות. אני נותן הערכת מחיר ראשונית באותו יום."
    },
    {
      num: "02",
      title: "מדידה ובדיקת תשתית",
      desc: "מגיע אליכם למדידה מדויקת בלייזר ובדיקת ישרות הרצפה. תקבלו הצעת מחיר סופית — מה שסיכמנו, זה מה שתשלמו."
    },
    {
      num: "03",
      title: "ביצוע נקי",
      desc: "מגיע בזמן, עובד בשקט, שומר על הריהוט והקירות. מסיים ועוזב את הבית נקי."
    },
    {
      num: "04",
      title: "מסירה + אחריות",
      desc: "עוברים יחד על כל פינה, מילימטר מילימטר. רק כשאתם מרוצים — לוחצים יד, ותעודת האחריות (5 שנים) נכנסת לתוקף."
    }
  ];

  return (
    <section className="py-24 bg-timber-gray">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
             <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">The Process</span>
             <h2 className="text-4xl font-black mt-4">איך זה עובד?</h2>
          </div>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="group flex flex-col md:flex-row md:items-center py-10 border-t border-gray-300 hover:border-black transition-colors duration-500">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <span className="text-5xl font-black text-gray-300 group-hover:text-timber-black transition-colors duration-500">
                    {step.num}
                  </span>
                </div>
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <h3 className="text-2xl font-bold text-timber-black">{step.title}</h3>
                </div>
                <div className="md:w-1/2">
                  <p className="text-gray-500 font-light text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
             <div className="border-t border-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;