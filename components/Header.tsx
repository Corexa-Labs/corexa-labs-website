"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm py-4 px-6 md:px-12 flex items-center justify-between shadow-lg">
      <Link href="#" className="text-2xl font-bold text-corexa-purple-500">
        Corexa Labs
      </Link>
      <nav className="hidden md:flex space-x-8">
        <Link href="#hero" className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400">Home</Link>
        <Link href="#about" className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400">About</Link>
        <Link href="#services" className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400">Services</Link>
        <Link href="#projects" className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400">Projects</Link>
        <Link href="#testimonials" className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400">Testimonials</Link>
        <Link href="#contact" className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400">Contact</Link>
      </nav>
      <Button className="hidden md:inline-flex bg-corexa-blue-600 hover:bg-corexa-blue-700 text-white">Get a Quote</Button>
      {/* Mobile menu icon would go here for responsiveness */}
    </header>
  )
} 