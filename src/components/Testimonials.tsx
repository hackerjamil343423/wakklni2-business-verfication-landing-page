'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote, Users } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const clients = [
    {
      name: "أحمد الشمري",
      result: "رفع التحويلات من 2.1% إلى 8.7%",
      avatar: "أ.ش",
      testimonial: "صفحة الهبوط الجديدة رفعت التحويلات من 2.1% إلى 8.7% في شهر واحد. الفرق واضح من اليوم الأول.",
      company: "مؤسس أكاديمية التسويق الرقمي"
    },
    {
      name: "سارة محمد",
      result: "تسليم خلال 14 يوم بالضبط", 
      avatar: "س.م",
      testimonial: "14 يوم بالضبط واستلمت صفحة تحوّل كل زائر لعميل محتمل. استثمار يستحق كل قرش.",
      company: "مديرة منصة التعليم الإلكتروني"
    },
    {
      name: "محمد العتيبي",
      result: "كابي يتكلم بلغة العملاء",
      avatar: "م.ع", 
      testimonial: "الفريق فهم طبيعة منتجي وكتب كابي يتكلم بلغة عملائي. النتائج فاقت التوقعات بمراحل.",
      company: "خبير التطوير الذاتي"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % clients.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + clients.length) % clients.length)
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            شهادات عملاء
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl hover:shadow-wakkelni-cyan/20 text-right">
              <div className="flex items-center justify-end mb-6">
                <div className="text-right ml-4">
                  <h3 className="text-white font-bold text-lg">{client.name}</h3>
                  <p className="text-wakkelni-cyan text-sm">{client.company}</p>
                  <p className="text-gray-400 text-sm mt-1">{client.result}</p>
                </div>
                <div className="w-12 h-12 bg-wakkelni-purple/20 rounded-full flex items-center justify-center text-wakkelni-cyan font-bold">
                  {client.avatar}
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-wakkelni-cyan/30 mb-4" />
                <p className="text-gray-300 leading-relaxed text-lg" style={{ lineHeight: '1.8' }}>
                  "{client.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/40 rounded-3xl p-8 border border-wakkelni-purple/20 mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-wakkelni-cyan font-bold">ملاحظة مهمة:</span> لا نضمن أرقام محددة—كل مشروع حالة منفصلة تحتاج دراسة القطاع والعرض والاستهداف. سنخبرك بما هو واقعي لحالتك.
            </p>
          </div>

          <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40">
            اطلب مراجعة مجانية لصفحتك الحالية
          </button>
        </div>
      </div>
    </section>
  )
}