'use client'

import { Check, X, ArrowRight } from 'lucide-react'

export default function Comparison() {
  const features = [
    "تسليم خلال 7 أيام بضمان",
    "فريق محترف مخصص", 
    "خبرة إطلاقات 7 أرقام",
    "تعديلات غير محدودة",
    "تحسين تحويل شامل CRO",
    "دعم بعد الإطلاق 30 يوم",
    "تصميم مخصّص بعلامتك"
  ]

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            وكّلني
            <span className="block bg-gradient-to-r from-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent">
              مقابل الوكالات الأخرى
            </span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 lg:p-8 border-b border-gray-700/50">
              <div className="text-right">
                <h3 className="text-xl font-bold text-white mb-2">الميزة</h3>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white">وكّلني</h3>
                  <p className="text-gray-100 mt-2">الخيار المحترف</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white">وكالات أخرى</h3>
                  <p className="text-gray-400 mt-2">خيارات عادية</p>
                </div>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 items-center py-4 border-b border-gray-800/50 last:border-b-0">
                    {/* Feature Name */}
                    <div className="text-white font-medium text-lg text-right">
                      {feature}
                    </div>
                    
                    {/* وكّلني */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-green-600/20 rounded-full">
                        <Check className="w-6 h-6 text-green-400" />
                      </div>
                    </div>
                    
                    {/* Other Agencies */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-red-600/20 rounded-full">
                        <X className="w-6 h-6 text-red-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-8 bg-gradient-to-r from-wakkelni-purple/10 to-wakkelni-cyan/10 border-t border-gray-700/50">
              <div className="text-center">
                <button className="group bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40 inline-flex items-center">
                  أنا أختار وكّلني
                  <ArrowRight className="mr-4 w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}