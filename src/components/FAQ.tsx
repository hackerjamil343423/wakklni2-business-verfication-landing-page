'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "كم تكلف الخدمة؟",
      answer: "أسعارنا حسب نوع المشروع وتعقيد الصفحة. نبدأ من 5,000 ريال للصفحة البسيطة. احجز استشارة للحصول على عرض مخصص."
    },
    {
      question: "ماذا لو لم أعجب بالنتيجة؟",
      answer: "لدينا تعديلات غير محدودة حتى ترضى تمامًا، مع إرشاد مهني لعدم الإضرار بالتحويل."
    },
    {
      question: "هل فعلًا صفحة الهبوط بهذه الأهمية؟", 
      answer: "هي نقطة الالتماس الحرجة مع العرض. تحسينات صغيرة قد تغيّر النتائج جذريًا."
    },
    {
      question: "ماذا سأستلم خلال 14 يوم؟",
      answer: "صفحة مكتملة مع تكاملات أساسية، إعداد تحليلات، وضمان جودة. نوفّر دليل إطلاق مختصر."
    },
    {
      question: "هل يجب أن أكون متورطًا بشدة؟",
      answer: "فقط فورم البداية ومراجعتان مفيدتان. نتحمّل الباقي."
    },
    {
      question: "ما أنواع الصفحات التي تبنونها؟",
      answer: "بيع/ويبينار/حجز مكالمة/Checkout/شكر/Up-Down sell."
    },
    {
      question: "كيف تضمنون التحويل؟",
      answer: "لا ضمانات رقمية، لكن نتّبع معايير مُثبتة واستراتيجيات CRO موثّقة."
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            أسئلة
            <span className="block bg-gradient-to-r from-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent">
              شائعة
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <button
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-right"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-white pl-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {activeIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-wakkelni-cyan" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {activeIndex === index && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <div className="border-t border-gray-700/50 pt-6">
                      <p className="text-gray-300 leading-relaxed text-lg text-right">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-wakkelni-purple/10 to-wakkelni-cyan/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              عندك سؤال آخر؟
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              احجز استشارة مجانية وسنجيب على جميع أسئلتك شخصيًا. بدون ضغط، مجرد إجابات صادقة حول كيف يمكننا مساعدة نشاطك في النمو.
            </p>
            <a href="/apply">
              <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40">
                اسأل مباشرة
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}