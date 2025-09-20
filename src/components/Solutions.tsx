export default function Solutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-wakkelni-purple via-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent mb-8 leading-tight animate-fade-in-up bg-300% animate-gradient-shift">
            حلولنا تساعدك على تجاوز كل العقبات
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Solution 1 */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up hover:animate-pulse-glow">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-wakkelni-purple/30 to-wakkelni-cyan/30 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-wakkelni-purple/20 hover:shadow-wakkelni-cyan/40 transition-all duration-500 hover:scale-110">
                <svg className="w-8 h-8 text-wakkelni-cyan drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed text-lg lg:text-xl text-right">
                  خطوات واضحة وبسيطة لتأسيس شركتك رسمياً والحصول على رخصة ريادة الأعمال بسرعة وبدون ضياع وقت
                </p>
              </div>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up hover:animate-pulse-glow">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-wakkelni-cyan/30 to-wakkelni-purple/30 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-wakkelni-cyan/20 hover:shadow-wakkelni-purple/40 transition-all duration-500 hover:scale-110">
                <svg className="w-8 h-8 text-wakkelni-purple drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed text-lg lg:text-xl text-right">
                  الاستعانة بخبراء لتسهيل جميع المعاملات القانونية والإدارية، لتجنب التأخير والأخطاء المكلفة.
                </p>
              </div>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up hover:animate-pulse-glow lg:col-span-2">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-wakkelni-purple/30 to-wakkelni-cyan/30 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-wakkelni-purple/20 hover:shadow-wakkelni-cyan/40 transition-all duration-500 hover:scale-110">
                <svg className="w-8 h-8 text-wakkelni-cyan drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed text-lg lg:text-xl text-right">
                  الاستفادة من المزايا الحكومية والإقامات الخاصة برواد الأعمال، مما يمنحك بداية قوية وفرص نمو أسرع.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl sm:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-bold">
            لا تضيع وقتك، اكتشف كيف يمكنك تجاوز التعقيدات وتحويل فكرتك إلى شركة ناشئة رسمية وجاهزة للعمل بسرعة
          </p>
          <a href="/apply">
            <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40">
              تواصل معنا الآن
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}