//import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import Navigation from '@/components/layout/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-slate-950 pt-16 sm:pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  )
} 