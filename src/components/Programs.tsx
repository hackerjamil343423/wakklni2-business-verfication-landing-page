export default function Programs() {
  const logos = [
    { src: '/images/ntdp-logo.png', alt: 'NTDP - المركز الوطني لتطوير القطاع الخاص', name: 'NTDP' },
    { src: '/images/misk-logo.png', alt: 'مؤسسة مسك', name: 'مسك' },
    { src: '/images/sdaia-logo.png', alt: 'SDAIA - الهيئة السعودية للبيانات والذكاء الاصطناعي', name: 'SDAIA' },
    { src: '/images/monshaat-logo.png', alt: 'منشآت - الهيئة العامة للمنشآت الصغيرة والمتوسطة', name: 'منشآت' },
    { src: '/images/garage-logo.avif', alt: 'الكراج التقني', name: 'الكراج' },
  ]

  return (
    <section id="programs" className="py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-wakkelni-purple via-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent mb-8 leading-tight animate-fade-in-up bg-300% animate-gradient-shift">
            البرامج والمبادرات
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            المملكة العربية السعودية تقدم مجموعة من البرامج والمبادرات التي تدعم رواد الأعمال في جميع المراحل
          </p>
        </div>

        {/* Moving Logos Section - Single Row */}
        <div className="relative">
          <div className="flex overflow-hidden mask-gradient">
            <div className="flex animate-marquee-seamless space-x-8 rtl:space-x-reverse">
              {/* Multiple copies for seamless loop - no empty spaces */}
              {Array.from({ length: 4 }, (_, setIndex) =>
                logos.map((logo, logoIndex) => (
                  <div
                    key={`set-${setIndex}-logo-${logoIndex}`}
                    className="flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28 bg-white/10 backdrop-blur-sm rounded-2xl border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-500 flex items-center justify-center p-4 hover:scale-105 hover:shadow-lg hover:shadow-wakkelni-cyan/20"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-8">
            استفد من الدعم المقدم من هذه الجهات المتخصصة لتحقيق نجاح مشروعك
          </p>
        </div>
      </div>
    </section>
  )
}