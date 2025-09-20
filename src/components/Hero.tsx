'use client'

import { ArrowLeft } from 'lucide-react'

export default function Hero() {

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-wakkelni-black pt-20 pb-16"
    >
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
      >
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(95,48,235,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(95,48,235,0.15) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(0,224,255,0.1) 0%, transparent 50%)
            `,
            backgroundSize: '50px 50px, 50px 50px, 800px 800px'
          }}
        />
      </div>
      
      {/* Additional Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,224,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,224,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="hero-content text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 rounded-full bg-wakkelni-purple/10 border border-wakkelni-purple/30 text-wakkelni-cyan text-sm sm:text-base font-medium mb-8 sm:mb-12 shadow-2xl shadow-wakkelni-purple/20 animate-fade-in"
          >
            <span className="w-3 h-3 bg-wakkelni-cyan rounded-full ml-4 animate-pulse"></span>
            لديك فكرة مشروع وتريد تحويلها إلى شركة رسمية؟
          </div>

          {/* Main Heading with proper RTL spacing */}
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-10 leading-tight tracking-tight animate-fade-in-up"
            style={{ lineHeight: '1.2' }}
          >
            <span className="text-white">
              <span className="bg-gradient-to-r from-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent">3 خطوات فقط
              </span> لبناء شركة ناشئة مرخّصة وجاهزة للعمل في السوق السعودي خلال أقل من
              <span className="bg-gradient-to-r from-wakkelni-cyan to-wakkelni-purple bg-clip-text text-transparent">60 يوم
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-5xl mx-auto animate-fade-in-up" style={{ lineHeight: '1.6' }}>
            نساعدك في استخراج رخصة ريادة الأعمال وتحويل فكرتك إلى كيان رسمي معتمد في السعودية. نتكفّل عنك بالمعاملات والمتطلبات حتى لا تهدر وقتك وجهدك. وخلال 60 يوم فقط تحصل على رخصة و اقامة و ميزات لا حصر لها…
          </p>

          {/* CTA Section */}
          <div className="flex flex-col items-center justify-center gap-8 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <a href="/apply">
                <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-wakkelni-cyan/40 inline-flex items-center group w-full sm:w-auto">
                  تواصل معنا الآن
                  <ArrowLeft className="mr-4 w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
                </button>
              </a>

              <a href="#features">
                <button className="border border-wakkelni-cyan/50 text-wakkelni-cyan px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl hover:bg-wakkelni-cyan/10 transition-all duration-300 inline-flex items-center group w-full sm:w-auto">
                  تعرف على الخطوات
                  <ArrowLeft className="mr-4 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                </button>
              </a>
            </div>
            
            <p className="text-gray-500 text-lg font-light" style={{ letterSpacing: '0.5px' }}>
              ساعدنا في إطلاق أكثر من 100+ شركة ناشئة في السعودية
            </p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-4 h-4 bg-wakkelni-cyan/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-1/3 left-10 w-6 h-6 bg-wakkelni-purple/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-wakkelni-cyan/40 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
    </section>
  )
}