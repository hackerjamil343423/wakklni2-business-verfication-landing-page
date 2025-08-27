'use client'

import { useEffect } from 'react'
import Cal, { getCalApi } from "@calcom/embed-react"
import { MessageCircle, Calendar, ArrowRight } from 'lucide-react'

export default function ApplyPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"})
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"})
    })()
  }, [])

  const handleWhatsAppClick = () => {
    window.open('http://wa.me/966554058269', '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-wakkelni-black via-gray-900 to-wakkelni-black text-white">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8">
        <div className="flex items-center justify-between mb-8">
          <a href="/" className="flex items-center text-wakkelni-cyan hover:text-white transition-colors duration-300">
            <ArrowRight className="w-6 h-6 ml-2 rotate-180" />
            العودة للصفحة الرئيسية
          </a>
          <div className="flex items-center">
            <img src="/images/logo.png" alt="وكّلني" className="h-12" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            احجز استشارتك المجانية
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            اختر الطريقة المناسبة لك للتواصل معنا وبدء رحلة تطوير صفحة الهبوط الخاصة بك
          </p>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Calendar Option */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-wakkelni-purple/20 hover:border-wakkelni-cyan/40 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-wakkelni-purple/20 rounded-xl mx-auto mb-4">
                <Calendar className="w-8 h-8 text-wakkelni-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">احجز مكالمة مجدولة</h3>
              <p className="text-gray-400 mb-4">اختر الوقت المناسب لك لمكالمة استشارية مجانية لمدة 30 دقيقة</p>
            </div>

            {/* WhatsApp Option */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-wakkelni-cyan/20 hover:border-wakkelni-cyan/40 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-wakkelni-cyan/20 rounded-xl mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-wakkelni-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">تواصل فوري عبر واتساب</h3>
              <p className="text-gray-400 mb-4">للاستفسارات السريعة أو لحجز موعد مباشرة</p>
              <button 
                onClick={handleWhatsAppClick}
                className="group bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                تواصل الآن
                <span className="inline-block mr-2 group-hover:translate-x-1 transition-transform duration-300">←</span>
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Embed */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-700/30">
            <div className="p-4 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-reverse space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 mr-4 text-sm">احجز موعدك - استشارة مجانية 30 دقيقة</span>
              </div>
            </div>
            <div className="h-[600px] bg-white">
              <Cal 
                namespace="30min"
                calLink="وكلني-للتسويق-8enfb1/30min"
                style={{width:"100%", height:"100%", overflow:"scroll"}}
                config={{"layout":"month_view"}}
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            هل تحتاج مساعدة في الحجز؟
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="group bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-wakkelni-cyan/40 inline-flex items-center"
          >
            <MessageCircle className="w-6 h-6 ml-3" />
            تواصل معنا عبر واتساب
            <span className="inline-block mr-2 group-hover:translate-x-1 transition-transform duration-300">←</span>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-16 w-32 h-32 bg-wakkelni-purple/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-48 h-48 bg-wakkelni-cyan/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-wakkelni-cyan rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-wakkelni-purple/50 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
    </main>
  )
}