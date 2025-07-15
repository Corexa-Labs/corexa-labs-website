import { DiagonalCard } from "@/components/diagonal-card"
import { Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          What Our <span className="text-corexa-purple-600 dark:text-corexa-purple-500">Clients Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DiagonalCard className="group hover:bg-gradient-to-br hover:from-corexa-blue-100 hover:to-corexa-purple-100 dark:hover:from-corexa-blue-800 dark:hover:to-corexa-purple-800 transition-all duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <Quote className="h-10 w-10 text-corexa-blue-500 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 italic">
                {`"Corexa Labs transformed our vision into a reality. Their expertise and dedication are unparalleled. The final product exceeded all our expectations."`}
              </p>
              <div className="flex items-center space-x-3 pt-4">
                <Image
                  src="/images/testimonial-jane-doe.jpeg"
                  alt="Jane Doe Avatar"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Jane Doe</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CEO, Tech Solutions Inc.</p>
                </div>
              </div>
            </div>
          </DiagonalCard>
          <DiagonalCard className="group hover:bg-gradient-to-br hover:from-corexa-blue-100 hover:to-corexa-purple-100 dark:hover:from-corexa-blue-800 dark:hover:to-corexa-purple-800 transition-all duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <Quote className="h-10 w-10 text-corexa-purple-500 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 italic">
                {`"The team at Corexa Labs is incredibly professional and innovative. They delivered our complex project on time and within budget, with exceptional quality."`}
              </p>
              <div className="flex items-center space-x-3 pt-4">
                <Image
                  src="/images/testimonial-john-smith.jpeg"
                  alt="John Smith Avatar"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">John Smith</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Founder, Global Innovations</p>
                </div>
              </div>
            </div>
          </DiagonalCard>
          <DiagonalCard className="group hover:bg-gradient-to-br hover:from-corexa-blue-100 hover:to-corexa-purple-100 dark:hover:from-corexa-blue-800 dark:hover:to-corexa-purple-800 transition-all duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <Quote className="h-10 w-10 text-corexa-blue-500 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 italic">
                {`"Working with Corexa Labs was a seamless experience. Their technical prowess combined with their collaborative approach made our project a huge success."`}
              </p>
              <div className="flex items-center space-x-3 pt-4">
                <Image
                  src="/images/testimonial-emily-white.jpeg"
                  alt="Emily White Avatar"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Emily White</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CTO, Future Systems</p>
                </div>
              </div>
            </div>
          </DiagonalCard>
        </div>
      </div>
    </section>
  )
} 