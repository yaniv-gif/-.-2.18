import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "כמה עולה התקנת פרקט?",
      answer: "המחיר משתנה לפי סוג הפרקט (למינציה / עץ / פולימרי), גודל החדר ומצב התשתית. הדרך הכי מהירה לקבל כיוון — שלחו לי תמונה בוואטסאפ ותקבלו הערכה ראשונית באותו יום."
    },
    {
      question: "האם המחיר שאתה נותן הוא באמת סופי?",
      answer: "חד משמעית כן. אחרי שאני מודד ורואה את השטח, המחיר ננעל. לא יהיו דרישות לתשלום נוסף באמצע העבודה."
    },
    {
      question: "האם צריך לפנות את הריהוט מהחדר?",
      answer: "רצוי לפנות חפצים קטנים ושבירים. לגבי רהיטים כבדים (ספות, ארונות) — אני מטפל בהזזה שלהם כחלק מהשירות, בתיאום מראש."
    },
    {
      question: "מה זה 'מתיחה אמריקאית' בשטיחים?",
      answer: "רוב המתקינים מדביקים שטיח ישירות לרצפה. בשיטה האמריקאית (Power Stretcher) אני מותח את השטיח על מסגרת 'גריפרים' נסתרת. זה מונע גלים, נראה יוקרתי יותר, ומאפשר להחליף את השטיח בעתיד בלי לגרד דבק מהרצפה."
    },
    {
      question: "אפשר לחדש דק ישן במקום להחליף?",
      answer: "בהרבה מקרים — כן. אם הלוחות לא רקובים מבפנים, קרצוף ושימון מקצועי יחזירו את הדק למצב חדש. שימון + חידוש עולים הרבה פחות מהתקנה חדשה — וחוסכים אלפי שקלים."
    },
    {
      question: "אפשר להתקין פרקט על רצפה קיימת?",
      answer: "כן, ברוב המקרים. אם הרצפה ישרה — מתקינים ישר מעל. אם יש אי-סדרים, אני מיישר עם מדה מתפלסת לפני ההתקנה. אני בודק את זה כבר במדידה הראשונה."
    },
    {
      question: "אתה נותן אחריות על העבודה?",
      answer: "כן. 5 שנות אחריות על כל התקנה — פי 5 מהמקובל בשוק. אם משהו זז, חורק או מתרומם — אני חוזר ומתקן. בלי שאלות."
    },
    {
      question: "אתה עובד בכל הארץ?",
      answer: "כן. אני מגיע לכל נקודה שבה מחפשים עבודה מדויקת — מרכז, שרון, שפלה, צפון ודרום."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="mb-16 border-b border-black pb-8">
          <h2 className="text-4xl font-black text-black">שאלות נפוצות</h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full flex items-center justify-between py-8 text-right focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-xl md:text-2xl text-timber-black group-hover:text-gray-600 transition-colors">
                  {faq.question}
                </span>
                <span className="text-xl font-light">
                  {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-500 font-light text-lg leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;