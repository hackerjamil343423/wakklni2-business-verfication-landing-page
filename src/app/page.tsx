import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Solutions from '@/components/Solutions'
import Programs from '@/components/Programs'
import Process from '@/components/Process'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Programs />
      <Process />
    </main>
  )
}