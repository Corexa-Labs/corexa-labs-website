import Link from "next/link"
import { DiagonalCard } from "@/components/diagonal-card"
import { ArrowRight, Code, Smartphone, Brain, Cloud } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white dark:bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Our <span className="text-corexa-purple-600 dark:text-corexa-purple-500">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DiagonalCard className="group hover:bg-gradient-to-br hover:from-corexa-blue-100 hover:to-corexa-purple-100 dark:hover:from-corexa-blue-800 dark:hover:to-corexa-purple-800 transition-all duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <Code className="h-12 w-12 text-corexa-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Crafting responsive, high-performance web applications tailored to your business needs.
              </p>
              <Link href="/services/web-development" aria-label="Learn more about Web Development" className="text-corexa-purple-500 hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </DiagonalCard>
          <DiagonalCard className="group hover:bg-gradient-to-br hover:from-corexa-blue-100 hover:to-corexa-purple-100 dark:hover:from-corexa-blue-800 dark:hover:to-corexa-purple-800 transition-all duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <Smartphone className="h-12 w-12 text-corexa-purple-500 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mobile App Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building intuitive and engaging mobile experiences for iOS and Android platforms.
              </p>
              <Link href="/services/mobile-app-development" aria-label="Learn more about Mobile App Development" className="text-corexa-blue-500 hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </DiagonalCard>
          <DiagonalCard className="group hover:bg-gradient-to-br hover:from-corexa-blue-100 hover:to-corexa-purple-100 dark:hover:from-corexa-blue-800 dark:hover:to-corexa-purple-800 transition-all duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <Brain className="h-12 w-12 text-corexa-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI & Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Integrating intelligent solutions to automate processes and derive insights from data.
              </p>
              <Link href="/services/ai-machine-learning" className="text-corexa-purple-500 hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </DiagonalCard>
          <DiagonalCard className="group hover:bg-gradient-to-br hover:from-corexa-blue-100 hover:to-corexa-purple-100 dark:hover:from-corexa-blue-800 dark:hover:to-corexa-purple-800 transition-all duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <Cloud className="h-12 w-12 text-corexa-purple-500 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Cloud Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Designing and deploying scalable, secure cloud infrastructures on leading platforms.
              </p>
              <Link href="/services/cloud-solutions" className="text-corexa-blue-500 hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </DiagonalCard>
          <DiagonalCard className="group hover:bg-gradient-to-br hover:from-corexa-blue-100 hover:to-corexa-purple-100 dark:hover:from-corexa-blue-800 dark:hover:to-corexa-purple-800 transition-all duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <Code className="h-12 w-12 text-corexa-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Custom Software</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Developing bespoke software applications to meet your unique operational requirements.
              </p>
              <Link href="/services/custom-software" className="text-corexa-purple-500 hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </DiagonalCard>
          <DiagonalCard className="group hover:bg-gradient-to-br hover:from-corexa-blue-100 hover:to-corexa-purple-100 dark:hover:from-corexa-blue-800 dark:hover:to-corexa-purple-800 transition-all duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <Code className="h-12 w-12 text-corexa-purple-500 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">DevOps & Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimizing your development pipeline and providing expert technical guidance.
              </p>
              <Link href="/services/devops-consulting" className="text-corexa-blue-500 hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </DiagonalCard>
        </div>
      </div>
    </section>
  )
} 