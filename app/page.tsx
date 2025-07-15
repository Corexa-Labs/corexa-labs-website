"use client"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased dark:bg-gray-950 dark:text-gray-50">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
