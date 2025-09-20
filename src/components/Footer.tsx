'use client'

import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github,
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'المشكلة', href: '#features' },
    { label: 'خطوات العمل', href: '#process' },
    { label: 'الأسعار', href: '#pricing' },
  ]

  const services = [
    { label: 'استخراج رخصة ريادة الأعمال', href: '#' },
    { label: 'تأسيس الشركات الناشئة', href: '#' },
    { label: 'إجراءات الإقامة', href: '#' },
    { label: 'الاستشارات القانونية', href: '#' },
  ]

  const resources = [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: '#' },
  ]

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
  ]

  return (
    <footer id="contact" className="relative bg-gray-900 border-t border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <a href="#home" className="text-2xl font-bold text-white">
                <img 
                  src="/images/wordmark.png" 
                  alt="وكّلني" 
                  className="h-8"
                />
              </a>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-right">
              وكالة صفحات الهبوط رقم 1 في مجال الأعمال الرقمية. نسلّم صفحات هبوط عالية التحويل تتفوق على صفحاتك الحالية خلال 14 يوم مضمونة.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-wakkelni-cyan" />
                <span>hello@wakkelni.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-wakkelni-cyan" />
                <span>دعم 24/7 عبر واتساب</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-wakkelni-cyan" />
                <span>الرياض، السعودية</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800/50 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>&copy; 2025 وكّلني. جميع الحقوق محفوظة.</p>
            <div className="flex items-center space-x-reverse space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-wakkelni-cyan transition-colors duration-200">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-wakkelni-cyan transition-colors duration-200">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  )
}