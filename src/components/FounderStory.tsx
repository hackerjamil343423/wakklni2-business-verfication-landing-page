'use client'

import { ArrowLeft } from 'lucide-react'

export default function FounderStory() {
  return (
    <section id="founderstory" className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              من نحن؟
            </h2>
          </div>

          {/* Main Content */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-wakkelni-purple/20 text-right">
            <div className="space-y-8 text-gray-300 leading-relaxed text-xl" style={{ lineHeight: '2' }}>
              <p className="text-white text-2xl">
                في وكلني نساعدك على تحويل زوارك إلى عملاء حقيقيين من خلال تصميم صفحات هبوط احترافية مبنية وفق أحدث معايير تجربة المستخدم وتقنيات التسويق الرقمي.
              </p>
              
              <p className="text-white text-2xl">
                في وكلني نصمم لك صفحات هبوط تشد الانتباه وتخلي الزائر يحس إنك تفهم مشكلته وتعطيه الحل مباشرة
              </p>
              
              <p className="text-white text-2xl">
                صفحة واضحة سريعة وتشتغل على هدف واحد تحويل الزائر لعميل.
              </p>
              
              <div className="bg-gray-800/40 rounded-2xl p-8 my-12">
                <p className="font-bold text-wakkelni-cyan text-2xl mb-4">
                  نعتمد أسلوب تسويقي مميز:
                </p>
                <p className="text-white text-xl">
                  تصميم احترافي + رسالة مقنعة + تجربة استخدام سهلة
                </p>
                <p className="text-wakkelni-cyan text-xl font-bold mt-4">
                  والنتيجة نسبة تحويل أعلى ومبيعات أكثر
                </p>
              </div>
            </div>
            
            <div className="pt-8 text-center animate-fade-in-up">
              <a href="/apply">
                <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40 inline-flex items-center">
                  احجز استشارة مجانية الآن
                  <ArrowLeft className="mr-4 w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}