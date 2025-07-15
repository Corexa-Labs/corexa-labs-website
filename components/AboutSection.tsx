import Image from "next/image"
import { CardContent, CardTitle } from "@/components/ui/card"
import { DiagonalCard } from "@/components/diagonal-card"

const coreValues = [
  {
    icon: <span className="inline-block"><svg className="h-8 w-8 text-corexa-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13" /></svg></span>,
    title: "Innovation",
    description: "Pushing boundaries with creative and forward-thinking solutions.",
  },
  {
    icon: <span className="inline-block"><svg className="h-8 w-8 text-corexa-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg></span>,
    title: "Collaboration",
    description: "Working closely with clients to achieve shared success.",
  },
  {
    icon: <span className="inline-block"><svg className="h-8 w-8 text-corexa-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l9 4.5v11L12 22l-9-4.5v-11z" /></svg></span>,
    title: "Excellence",
    description: "Delivering high-quality, robust, and scalable software.",
  },
  {
    icon: <span className="inline-block"><svg className="h-8 w-8 text-corexa-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /></svg></span>,
    title: "Agility",
    description: "Adapting quickly to changes and delivering value iteratively.",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-900 dark:text-white leading-tight">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-corexa-purple-500 to-corexa-blue-500">Corexa Labs</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            <p>
              <strong className="text-corexa-purple-600 dark:text-corexa-purple-400">Corexa Labs</strong> is a dynamic software agency turning visionary ideas into innovative digital solutions. We empower businesses through tailored, tech-driven strategies that spark growth and drive meaningful impact.
            </p>
            <p>
              Our team of engineers, designers, and thinkers collaborates using agile methodologies—ensuring transparency, flexibility, and delivery at speed. We're more than a service provider; we're your long-term partner in digital transformation.
            </p>
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/about-section.png"
              alt="Corexa Labs team working"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent dark:from-gray-900/70"></div>
          </div>
        </div>
        <div className="mt-24">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Core <span className="text-corexa-blue-600 dark:text-corexa-blue-400">Values</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <DiagonalCard
                key={index}
                className="backdrop-blur-md bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                  <div className="p-4 rounded-full bg-corexa-purple-100 dark:bg-corexa-purple-900 text-corexa-purple-700 dark:text-corexa-purple-300 shadow-md">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
                </CardContent>
              </DiagonalCard>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-20 -left-10 w-72 h-72 bg-corexa-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-corexa-purple-500"></div>
      <div className="absolute bottom-24 -right-16 w-96 h-96 bg-corexa-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-corexa-blue-500"></div>
    </section>
  )
} 