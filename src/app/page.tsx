import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Features from '@/components/Features'
import Process from '@/components/Process'
import Comparison from '@/components/Comparison'
import FounderStory from '@/components/FounderStory'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Portfolio />
      <Features />
      <Process />
      <Comparison />
      <FounderStory />
      <FAQ />
      <FinalCTA />
    </main>
  )
}