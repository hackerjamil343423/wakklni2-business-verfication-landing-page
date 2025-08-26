import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'وكّلني - للدعاية والإعلان وحلول التسويق الرقمي',
  description: 'وكالة وكّلني المتخصصة في الدعاية والإعلان وحلول التسويق الرقمي - نقدم خدمات إنشاء الصفحات المقصودة عالية التحويل',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-arabic">{children}</body>
    </html>
  )
}