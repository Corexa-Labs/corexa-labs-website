import Image from "next/image"
import { CardTitle } from "@/components/ui/card"

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
              <div key={index} className="relative group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-corexa-purple-500/40 via-corexa-blue-500/40 to-transparent opacity-60 blur-xl group-hover:opacity-90 transition duration-700" />
                <div className="relative h-full rounded-3xl bg-gradient-to-b from-slate-950/90 via-slate-900/95 to-black/90 border border-white/10 shadow-[0_18px_60px_rgba(15,23,42,0.85)] overflow-hidden">
                  <div className="absolute inset-x-10 -top-24 h-40 bg-gradient-to-br from-corexa-purple-400/30 via-corexa-blue-400/20 to-transparent blur-3xl" />
                  <div className="relative flex flex-col items-center text-center p-8 space-y-5">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-br from-corexa-purple-500/35 via-corexa-blue-500/35 to-transparent opacity-60 blur-2xl group-hover:opacity-90 group-hover:blur-3xl transition duration-500" />
                      <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-white/15 shadow-[0_14px_40px_rgba(15,23,42,0.9)]">
                        {value.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-white tracking-tight">
                      {value.title}
                    </CardTitle>
                    <p className="text-sm text-slate-300/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-20 -left-10 w-72 h-72 bg-corexa-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-corexa-purple-500"></div>
      <div className="absolute bottom-24 -right-16 w-96 h-96 bg-corexa-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-corexa-blue-500"></div>
    </section>
  )
} 