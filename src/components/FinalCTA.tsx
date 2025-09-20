'use client'

import { ArrowLeft, Check } from 'lucide-react'

export default function FinalCTA() {
  const benefits = [
    "استشارة مجانية لتقييم فكرة مشروعك",
    "دراسة جدوى مبدئية وخطة التنفيذ",
    "تقدير دقيق للوقت والتكلفة المطلوبة",
    "بدون التزامات—مجرد محادثة استكشافية"
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-wakkelni-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            جاهز لتحويل فكرتك إلى
            <span className="block bg-gradient-to-r from-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent">
              شركة ناشئة مرخصة؟
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            احجز استشارة مجانية لمناقشة فكرة مشروعك والحصول على خطة تنفيذ مخصصة—خلال 60 يوم فقط.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-wakkelni-purple/20 text-right">
                <div className="flex items-center justify-start">
                  <span className="text-white text-lg font-medium">{benefit}</span>
                  <Check className="w-6 h-6 text-wakkelni-cyan mr-4 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Urgency */}
          <div className="bg-wakkelni-purple/10 rounded-3xl p-8 border border-wakkelni-purple/30 mb-12">
            <p className="text-wakkelni-cyan text-xl font-bold mb-2">
              عدد محدود من العملاء شهريًا
            </p>
            <p className="text-gray-300 text-lg">
              نتعامل مع عدد محدود من المشاريع شهريًا لضمان الجودة العالية والمتابعة الشخصية.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-8">
            <a href="/apply">
              <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-full font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40 inline-flex items-center w-full sm:w-auto">
                احجز استشارة مجانية الآن
                <ArrowLeft className="mr-4 w-8 h-8 group-hover:-translate-x-2 transition-transform duration-300" />
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}