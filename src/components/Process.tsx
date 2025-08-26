'use client'

import { Calendar, FileText, Palette, Rocket } from 'lucide-react'

export default function Process() {
  const phases = [
    {
      phase: "المرحلة 1",
      day: "اليوم 1",
      icon: <Calendar className="w-8 h-8" />,
      title: "التعارف والإعداد",
      description: "نبدأ بالشيء الوحيد الذي نطلبه منك - 10 دقائق لتعبئة فورم التعارف. بعد اكتماله، نبدأ البحث الأولي ونحدد هيكل صفحتك:",
      deliverables: [
        "تعبئة فورم التعارف (10 دقائق).",
        "بدء البحث وتحديد هيكل الصفحة.",
        "إرسال الهيكل للمراجعة."
      ]
    },
    {
      phase: "المرحلة 2", 
      day: "اليوم 2-3",
      icon: <FileText className="w-8 h-8" />,
      title: "البحث وإنشاء المحتوى",
      description: "خلال يومين تكتمل عملية البحث المكثف وترسل لك أول مسودة للمحتوى للموافقة عليها",
      deliverables: [
        "إكمال وثيقة البحث.",
        "إرسال مسودة #1 للكابي لاعتمادك.",
        "بدء فريق التصميم."
      ]
    },
    {
      phase: "المرحلة 3",
      day: "اليوم 4-6", 
      icon: <Palette className="w-8 h-8" />,
      title: "التصميم والتطوير",
      description: "شاهد صفحتك تنبض بالحياة ونحن نحول المحتوى المقنع إلى تصميم مذهل محسن للتحويل",
      deliverables: [
        "بناء صفحة مخصّصة كاملة.",
        "تحسين الموبايل.",
        "دمج عناصر التحويل والكابي."
      ]
    },
    {
      phase: "المرحلة 4",
      day: "اليوم 7",
      icon: <Rocket className="w-8 h-8" />,
      title: "اللمسة الأخيرة والإطلاق",
      description: "نضع اللمسات الأخيرة على كل عنصر ونستعد للإطلاق",
      deliverables: [
        "مراجعة نهائية وتعديلات سريعة.",
        "تسليم الصفحة مع دليل الإطلاق.",
        "دعم مجاني بعد التسليم."
      ]
    }
  ]


  return (
    <section id="process" className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            خطواتنا في تسليم صفحة الهبوط الخاصة بك
            <span className="block bg-gradient-to-r from-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent">
              خلال 7 أيام
            </span>
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                    {/* Phase Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                      {phase.phase}
                    </div>
                    
                    {/* Day */}
                    <div className="text-2xl font-bold text-white mb-2">{phase.day}</div>
                    
                    {/* Icon & Title */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-xl mr-4">
                        <div className="text-blue-400">
                          {phase.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {phase.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40">
            ابدأ عملية الـ7 أيام الآن
          </button>
        </div>

      </div>
    </section>
  )
}