import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Analytics from '@/components/Analytics'

import AIGateway from '@/components/AIGateway'
import Rollbacks from '@/components/Rollbacks'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <section className='flex flex-col lg:flex-row justify-center mx-auto'>
      <Analytics />
      </section>
      <section className='flex flex-col lg:flex-row justify-center mx-auto'>
      <AIGateway />
      <Rollbacks />
      </section>
      <Footer />
    </main>
  )
}
