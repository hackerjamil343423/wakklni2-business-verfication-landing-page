'use client'

import { Check, BarChart3, Globe, Palette, Search, FileText, Settings } from 'lucide-react'

export default function Pricing() {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      text: "بحث وتحليل سوق ومنافسين"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: "كتابة إعلانية عالية التحويل (Copy)"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      text: "تصميم احترافي مخصص لعلامتك التجارية"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      text: "تحسين شامل للتحويل CRO"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      text: "دعم وتعديلات بلا حدود حتى الرضا التام"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      text: "ربط الصفحة بـ Google Analytics لمتابعة الأداء والتحويلات"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "ربط الصفحة بدومينك الخاص (Domain)"
    }
  ]

  return (
    <section id="pricing" className="py-28 lg:py-36 bg-gradient-to-br from-wakkelni-black via-gray-900 to-wakkelni-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-16 w-32 h-32 bg-wakkelni-purple/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-48 h-48 bg-wakkelni-cyan/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
            style={{ lineHeight: '1.2' }}
          >
            كم يكلفك كل هذا؟
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            style={{ lineHeight: '1.8' }}
          >
            بدون لف ودوران السعر ثابت وواضح:
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-wakkelni-cyan/20">
            
            {/* Price */}
            <div className="text-center mb-8">
              {/* Previous Price - Crossed Out */}
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through">كان 750$</span>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-wakkelni-cyan ml-4" />
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent">
                  498$
                </span>
                <span className="text-2xl text-white mr-4">فقط</span>
              </div>
              
              {/* Savings Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-full text-green-400 text-lg font-semibold mb-4">
                وفر 252$ الآن!
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                مقابل صفحة هبوط كاملة تُبنى خصيصًا لعلامتك، تُسلم خلال 
                <span className="text-wakkelni-cyan font-bold"> 7 أيام</span>، وتشمل:
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-wakkelni-purple/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-wakkelni-purple/20 rounded-xl ml-4 flex-shrink-0">
                    <div className="text-wakkelni-purple">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-white font-medium leading-relaxed">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-wakkelni-purple/10 to-wakkelni-cyan/10 rounded-2xl p-6 sm:p-8 border border-wakkelni-cyan/20 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                <span className="font-bold text-wakkelni-cyan">لو تحسبها بالأرقام:</span> مجرد حملة إعلانات متوسطة ممكن تكلفك أكثر من 500$ في أسبوع واحد لكن الصفحة هذه الغير المحسّنة ممكن تضيّع 70% من هالميزانية بدون مبيعات بينما صفحة احترافية من وكلني إن شاء الله تسترد قيمتها من أول حملة.
              </p>
            </div>

            {/* Final Value Statement */}
            <div className="text-center">
              <p className="text-2xl font-bold text-white mb-2">
                استثمار واحد - أداة بيع تشتغل معك للأبد
              </p>
              <p className="text-xl text-wakkelni-cyan mb-8">
                ابدأ الآن وخلال 7 أيام تكون صفحتك شغالة وتجيب لك مبيعات
              </p>

              {/* CTA Button */}
              <a href="/apply">
                <button className="group bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40">
                  احجز صفحتك الآن - 498$ فقط
                  <span className="inline-block mr-2 group-hover:translate-x-1 transition-transform duration-300">←</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating background shapes */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-wakkelni-cyan rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-wakkelni-purple/50 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
    </section>
  )
}