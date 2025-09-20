'use client'

export default function Features() {

  return (
    <section id="features" className="py-32 lg:py-40 bg-wakkelni-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* First Row - Single Column Problems Section */}
        <div className="mb-24 lg:mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight animate-fade-in-up">
                المشكلة
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                معظم رواد الأعمال يفشلون في تحويل فكرتهم إلى شركة ناشئة رسمية بسبب تعقيدات الإجراءات والقوانين في السعودية. الوقت والجهد يضيعان بينما المنافسون ينطلقون بسرعة
              </p>
            </div>
            
            {/* Problems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">

              {/* Problem 1 */}
              <div className="problem-card bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-wakkelni-purple/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl font-bold text-wakkelni-cyan">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">صعوبة استخراج الرخصة</h3>
                  <p className="text-gray-300 leading-relaxed text-lg text-center">
                    صعوبة استخراج رخصة ريادة الأعمال وتحويل المشروع إلى كيان رسمي يعرقل البداية بشكل كبير.
                  </p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="problem-card bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-wakkelni-cyan/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl font-bold text-wakkelni-purple">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">المعاملات القانونية المعقدة</h3>
                  <p className="text-gray-300 leading-relaxed text-lg text-center">
                    المعاملات القانونية والإدارية كثيرة ومعقدة، ما بين وزارة التجارة، الغرف التجارية، والجهات الرسمية الأخرى.
                  </p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="problem-card bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-wakkelni-purple/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl font-bold text-wakkelni-cyan">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">قلة الخبرة والتأخير</h3>
                  <p className="text-gray-300 leading-relaxed text-lg text-center">
                    قلة الخبرة في التعامل مع الإجراءات تؤدي لتأخير المشروع لأسابيع أو أشهر، مما يكلف الوقت والمال.
                  </p>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="problem-card bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-wakkelni-cyan/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl font-bold text-wakkelni-purple">4</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">عدم معرفة المزايا</h3>
                  <p className="text-gray-300 leading-relaxed text-lg text-center">
                    حتى بعد تجهيز الشركة، الكثير لا يعرف كيفية الاستفادة من المزايا الرسمية والامتيازات الحكومية المرتبطة برخصة ريادة الأعمال والإقامة.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-xl sm:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                لا تضيع وقتك، اكتشف كيف يمكنك تجاوز التعقيدات وتحويل فكرتك إلى شركة ناشئة رسمية وجاهزة للعمل بسرعة
              </p>
              <a href="/apply">
                <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40">
                  تواصل معنا الآن
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Opportunities Section */}
        <div className="mb-24 lg:mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight animate-fade-in-up">
                الفرص في السعودية
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                السوق السعودي مليء بالفرص للمبتكرين ورواد الأعمال الذين يعرفون كيف يستغلونها:
              </p>
            </div>

            {/* Opportunities Boxes */}
            <div className="space-y-12">
              {/* Box 1 - Investment Growth (Content Right, Image Left) */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up hover:animate-pulse-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Content - Right Side */}
                  <div className="lg:order-2 animate-slide-in-right" role="article" aria-labelledby="investment-heading">
                    <div className="w-24 h-24 bg-gradient-to-br from-wakkelni-purple/30 to-wakkelni-cyan/30 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-wakkelni-purple/20 hover:shadow-wakkelni-cyan/40 transition-all duration-500 hover:scale-110" aria-hidden="true">
                      <svg className="w-12 h-12 text-wakkelni-cyan drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 id="investment-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-wakkelni-purple via-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent mb-6 lg:mb-8 leading-tight text-right bg-300% animate-gradient-shift">
                      الاستثمارات الضخمة
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl mb-4 lg:mb-6 text-right">
                      السعودية تستثمر بقوة في المشاريع الناشئة وريادة الأعمال، حيث بلغت الاستثمارات أكثر من 5.2 مليار ريال في 2023، مع تركيز خاص على التقنية المالية والتكنولوجيا المتقدمة.
                    </p>
                    <div className="flex items-center justify-end gap-3 text-xs sm:text-sm text-gray-400">
                      <span className="text-right">البيانات من تقرير الاستثمار الجريء السعودي 2023</span>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Image - Left Side */}
                  <div className="lg:order-1 relative group animate-slide-in-left" role="img" aria-labelledby="chart-description">
                    <div className="absolute -inset-4 bg-gradient-to-r from-wakkelni-purple/20 to-wakkelni-cyan/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" aria-hidden="true"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40 border border-wakkelni-purple/10 hover:border-wakkelni-cyan/30 transition-all duration-500">
                      <img
                        src="/images/saudi-investment-chart.avif"
                        alt="خمس سنوات من تطور التمويل الجريء في المملكة العربية السعودية - يُظهر نمو الاستثمارات من 116 مليون ريال في 2019 إلى 1.383 مليار ريال في 2023"
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        role="img"
                        aria-describedby="chart-description"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" aria-hidden="true"></div>
                    </div>
                    <div id="chart-description" className="sr-only">
                      رسم بياني يوضح تطور الاستثمارات الجريئة في المملكة العربية السعودية من 2019 إلى 2023. يظهر نمو مستمر في قيمة الاستثمارات من 116 مليون ريال سعودي في 2019 إلى 1.383 مليار ريال في 2023، مع تذبذب في عدد الصفقات.
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 - Vision 2030 (Content Left, Image Right) */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up hover:animate-pulse-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Content - Left Side */}
                  <div className="lg:order-1 animate-slide-in-left" role="article" aria-labelledby="vision-heading">
                    <div className="w-24 h-24 bg-gradient-to-br from-wakkelni-cyan/30 to-wakkelni-purple/30 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-wakkelni-cyan/20 hover:shadow-wakkelni-purple/40 transition-all duration-500 hover:scale-110" aria-hidden="true">
                      <svg className="w-12 h-12 text-wakkelni-purple drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 id="vision-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-wakkelni-cyan via-wakkelni-purple to-wakkelni-cyan bg-clip-text text-transparent mb-6 lg:mb-8 leading-tight text-right bg-300% animate-gradient-shift">
                      رؤية 2030 والتحول الرقمي
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl mb-4 lg:mb-6 text-right">
                      الحكومة السعودية تدعم بشكل مباشر رؤية 2030 لتطوير الاقتصاد وتنويع مصادر الدخل، مما يخلق بيئة مثالية للشركات الناشئة للنمو والابتكار بسرعة.
                    </p>
                    <div className="flex items-center justify-end gap-3 text-xs sm:text-sm text-gray-400">
                      <span className="text-right">البيانات من برنامج رؤية المملكة 2030</span>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>

                  {/* Vision 2030 Image - Right Side */}
                  <div className="lg:order-2 relative group animate-slide-in-right" role="img" aria-labelledby="vision-chart-description">
                    <div className="absolute -inset-4 bg-gradient-to-r from-wakkelni-cyan/20 to-wakkelni-purple/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" aria-hidden="true"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40 border border-wakkelni-cyan/10 hover:border-wakkelni-purple/30 transition-all duration-500">
                      <img
                        src="/images/vision-2030-chart.png"
                        alt="رؤية المملكة العربية السعودية 2030 والتحول الرقمي - يُظهر الأهداف الاستراتيجية والمبادرات الرقمية لتنويع الاقتصاد السعودي"
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        role="img"
                        aria-describedby="vision-chart-description"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" aria-hidden="true"></div>
                    </div>
                    <div id="vision-chart-description" className="sr-only">
                      مخطط يوضح رؤية المملكة العربية السعودية 2030 ومبادرات التحول الرقمي، يُظهر الأهداف الاستراتيجية لتنويع الاقتصاد وتطوير القطاعات غير النفطية ودعم ريادة الأعمال والابتكار.
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 - AI Investment Fund (Content Right, Image Left) */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up hover:animate-pulse-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Content - Right Side */}
                  <div className="lg:order-2 animate-slide-in-right" role="article" aria-labelledby="ai-fund-heading">
                    <div className="w-24 h-24 bg-gradient-to-br from-wakkelni-purple/30 to-wakkelni-cyan/30 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-wakkelni-purple/20 hover:shadow-wakkelni-cyan/40 transition-all duration-500 hover:scale-110" aria-hidden="true">
                      <svg className="w-12 h-12 text-wakkelni-cyan drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 id="ai-fund-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-wakkelni-purple via-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent mb-6 lg:mb-8 leading-tight text-right bg-300% animate-gradient-shift">
                      صندوق الذكاء الاصطناعي
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl mb-4 lg:mb-6 text-right">
                      تم تأسيس صندوق استثماري بقيمة 100 مليار دولار لدعم الابتكار في الذكاء الاصطناعي والتكنولوجيا الحديثة، مما يفتح المجال أمام الشركات الواعدة للحصول على تمويل وجولات استثمارية قوية.
                    </p>
                    <div className="flex items-center justify-end gap-3 text-xs sm:text-sm text-gray-400">
                      <span className="text-right">مبادرة الصندوق السعودي للاستثمار في الذكاء الاصطناعي</span>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* AI Fund Image - Left Side */}
                  <div className="lg:order-1 relative group animate-slide-in-left" role="img" aria-labelledby="ai-fund-description">
                    <div className="absolute -inset-4 bg-gradient-to-r from-wakkelni-purple/20 to-wakkelni-cyan/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" aria-hidden="true"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40 border border-wakkelni-purple/10 hover:border-wakkelni-cyan/30 transition-all duration-500">
                      <img
                        src="/images/ai-fund-chart.png"
                        alt="صندوق الذكاء الاصطناعي السعودي - يُظهر الاستثمار بقيمة 100 مليار دولار في تطوير تقنيات الذكاء الاصطناعي والتكنولوجيا المتقدمة لدعم الشركات الناشئة"
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        role="img"
                        aria-describedby="ai-fund-description"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" aria-hidden="true"></div>
                    </div>
                    <div id="ai-fund-description" className="sr-only">
                      مخطط يوضح صندوق الاستثمار في الذكاء الاصطناعي السعودي بقيمة 100 مليار دولار، يُظهر القطاعات المستهدفة للاستثمار وآليات دعم الشركات الناشئة والمشاريع التقنية المتقدمة.
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 4 - Growing Opportunities (Content Left, Image Right) */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up hover:animate-pulse-glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Content - Left Side */}
                  <div className="lg:order-1 animate-slide-in-left" role="article" aria-labelledby="growth-heading">
                    <div className="w-24 h-24 bg-gradient-to-br from-wakkelni-cyan/30 to-wakkelni-purple/30 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-wakkelni-cyan/20 hover:shadow-wakkelni-purple/40 transition-all duration-500 hover:scale-110" aria-hidden="true">
                      <svg className="w-12 h-12 text-wakkelni-purple drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                    </div>
                    <h3 id="growth-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-wakkelni-cyan via-wakkelni-purple to-wakkelni-cyan bg-clip-text text-transparent mb-6 lg:mb-8 leading-tight text-right bg-300% animate-gradient-shift">
                      فرص نمو سريعة
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl mb-4 lg:mb-6 text-right">
                      القطاع يشهد نمواً سريعاً، مع ظهور فرص واضحة في المدن الصغيرة والنائية، وخاصة في مجالات التكنولوجيا، السياحة والطاقة المتجددة، والخدمات اللوجستية.
                    </p>
                    <div className="flex items-center justify-end gap-3 text-xs sm:text-sm text-gray-400">
                      <span className="text-right">بيانات من وزارة الاستثمار السعودية</span>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                    </div>
                  </div>

                  {/* Growth Opportunities Image - Right Side */}
                  <div className="lg:order-2 relative group animate-slide-in-right" role="img" aria-labelledby="growth-description">
                    <div className="absolute -inset-4 bg-gradient-to-r from-wakkelni-cyan/20 to-wakkelni-purple/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" aria-hidden="true"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40 border border-wakkelni-cyan/10 hover:border-wakkelni-purple/30 transition-all duration-500">
                      <img
                        src="/images/growth-opportunities-chart.png"
                        alt="فرص النمو السريع في السعودية - يُظهر القطاعات الناشئة والمدن الصغيرة ذات الإمكانيات العالية في التكنولوجيا والسياحة والطاقة المتجددة"
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        role="img"
                        aria-describedby="growth-description"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" aria-hidden="true"></div>
                    </div>
                    <div id="growth-description" className="sr-only">
                      مخطط يوضح فرص النمو السريع في القطاعات المختلفة بالمملكة العربية السعودية، يُظهر الإمكانيات في المدن الصغيرة والنائية خاصة في مجالات التكنولوجيا، السياحة، الطاقة المتجددة والخدمات اللوجستية.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-xl sm:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-bold">
                ابدأ الآن واستغل هذه الفرص قبل منافسيك
              </p>
              <a href="/apply">
                <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40">
                  تواصل معنا الآن
                </button>
              </a>
            </div>
          </div>
        </div>


        {/* Why Us Section */}
        <div className="mb-24 lg:mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
                لماذا تختار خدماتنا؟
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                نحن نقدم خدمة شاملة ومتكاملة لإطلاق شركتك الناشئة بأقل جهد ووقت ممكن
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 sm:mb-16">
              {/* Card 1 - خبرة مثبتة */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up text-center">
                <div className="w-20 h-20 bg-wakkelni-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-wakkelni-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">خبرة مثبتة</h3>
                <p className="text-gray-300 leading-relaxed text-center">ساعدنا أكثر من 100+ رائد أعمال في تأسيس شركاتهم الناشئة والحصول على التراخيص المطلوبة بنجاح</p>
              </div>

              {/* Card 2 - سرعة في التنفيذ */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up text-center">
                <div className="w-20 h-20 bg-wakkelni-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-wakkelni-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">سرعة في التنفيذ</h3>
                <p className="text-gray-300 leading-relaxed text-center">نكمل جميع الإجراءات والمعاملات خلال 60 يوم كحد أقصى، بدلاً من الأشهر التي قد تستغرقها بمفردك</p>
              </div>

              {/* Card 3 - دعم شامل */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-700 shadow-2xl animate-fade-in-up text-center">
                <div className="w-20 h-20 bg-wakkelni-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-wakkelni-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18.75A.75.75 0 0112 18z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">دعم شامل</h3>
                <p className="text-gray-300 leading-relaxed text-center">نتكفل بجميع المعاملات من البداية للنهاية - من الاستشارة الأولى حتى الحصول على الرخصة والإقامة</p>
              </div>

            </div>

            <div className="text-center">
              <a href="/apply">
                <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40">
                  احصل على استشارة مجانية
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}