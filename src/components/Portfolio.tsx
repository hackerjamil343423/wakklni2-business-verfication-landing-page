'use client'

import { ArrowUpLeft } from 'lucide-react'

export default function Portfolio() {

  const portfolioItems = [
    {
      id: 1,
      title: "وكالة الأتمتة",
      categories: ["منتج تعليمي", "علامة تجارية شخصية", "استشارات"],
      image: "/images/Automation Agency-portfolio.png",
      link: "https://otoreach.com/"
    },
    {
      id: 2,
      title: "منصة المجتمع",
      categories: ["منتج تعليمي", "تدريب", "روحانيات"],
      image: "/images/community-protfolio.png",
      link: "https://community.otoreach.com/"
    },
    {
      id: 3,
      title: "خدمة اهلانات",
      categories: ["صفحة مقصودة", "تسويق رقمي", "خدمات"],
      image: "/images/khidmat-ahlanat.png",
      link: "https://endearing-daifuku-5f8cde.netlify.app"
    },
    {
      id: 4,
      title: "صفحة خدمة بناء فانل",
      categories: ["بناء فانل", "تسويق", "استشارات"],
      image: "/images/funnel-service.png",
      link: "https://es.emadcourses.org/"
    }
  ]

  const getCategoryColor = (index: number) => {
    const colors = [
      "bg-wakkelni-purple/20 text-wakkelni-purple border-wakkelni-purple/30",
      "bg-wakkelni-cyan/20 text-wakkelni-cyan border-wakkelni-cyan/30", 
      "bg-orange-600/20 text-orange-300 border-orange-600/30",
      "bg-green-600/20 text-green-300 border-green-600/30"
    ]
    return colors[index % colors.length]
  }


  return (
    <section 
      id="portfolio"
      className="py-28 lg:py-36 bg-gradient-to-br from-wakkelni-black via-gray-900 to-wakkelni-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-16 w-32 h-32 bg-wakkelni-purple/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-48 h-48 bg-wakkelni-cyan/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight animate-fade-in-up"
            style={{ lineHeight: '1.2' }}
          >
            أعمالنا
          </h2>
          <p 
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ lineHeight: '1.8' }}
          >
            عرض لأحدث أعمالنا وحلولنا الإبداعية في مجال الصفحات المقصودة والتسويق الرقمي
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          {portfolioItems.map((item, index) => (
            <a 
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card group bg-gray-800/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-wakkelni-cyan/20 transition-all duration-700 border border-wakkelni-purple/10 hover:border-wakkelni-cyan/40 cursor-pointer animate-fade-in-up transform-gpu"
              style={{ 
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Apple-style window controls with RTL positioning */}
                <div className="absolute top-6 right-6 flex space-x-reverse space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                </div>
                
                {/* Animated Hover Arrow */}
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <div className="w-12 h-12 bg-wakkelni-cyan/20 backdrop-blur-md rounded-full flex items-center justify-center border border-wakkelni-cyan/40 shadow-lg">
                    <ArrowUpLeft className="w-6 h-6 text-wakkelni-cyan" />
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-wakkelni-cyan transition-colors duration-300 text-right leading-relaxed">
                  {item.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 justify-end">
                  {item.categories.map((category, catIndex) => (
                    <span 
                      key={catIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${getCategoryColor(catIndex)}`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-wakkelni-purple/5 to-wakkelni-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center animate-fade-in-up">
          <button className="group bg-wakkelni-purple/10 hover:bg-wakkelni-purple/20 backdrop-blur-sm border border-wakkelni-purple/30 hover:border-wakkelni-cyan/50 text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-2xl hover:shadow-wakkelni-cyan/20 inline-flex items-center">
            عرض جميع الأعمال
            <ArrowUpLeft className="ml-4 w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Floating background shapes */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-wakkelni-cyan rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-wakkelni-purple/50 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
    </section>
  )
}