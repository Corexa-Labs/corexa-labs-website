"use client"
import { useState } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import TeamSection from "@/components/TeamSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import EntryAnimation from "@/components/EntryAnimation"

export default function Component() {
  const [showContent, setShowContent] = useState(false)

  const handleAnimationComplete = () => {
    setShowContent(true)
  }

  return (
    <>
      {!showContent && <EntryAnimation onComplete={handleAnimationComplete} />}
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased dark:bg-gray-950 dark:text-gray-50">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <TestimonialsSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
