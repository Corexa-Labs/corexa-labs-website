import Link from "next/link"
import { ArrowRight, Code, Smartphone, Brain, Cloud } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-950 to-black relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-10 h-72 w-72 rounded-full bg-corexa-purple-500/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-corexa-blue-500/35 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Our <span className="bg-gradient-to-r from-corexa-purple-400 to-corexa-blue-400 bg-clip-text text-transparent">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="h-8 w-8 text-corexa-blue-400" />,
              title: "Web Development",
              description: "Crafting responsive, high-performance web applications tailored to your business needs.",
              href: "/services/web-development",
            },
            {
              icon: <Smartphone className="h-8 w-8 text-corexa-purple-400" />,
              title: "Mobile App Development",
              description: "Building intuitive and engaging mobile experiences for iOS and Android platforms.",
              href: "/services/mobile-app-development",
            },
            {
              icon: <Brain className="h-8 w-8 text-corexa-blue-400" />,
              title: "AI & Machine Learning",
              description: "Integrating intelligent solutions to automate processes and derive insights from data.",
              href: "/services/ai-machine-learning",
            },
            {
              icon: <Cloud className="h-8 w-8 text-corexa-purple-400" />,
              title: "Cloud Solutions",
              description: "Designing and deploying scalable, secure cloud infrastructures on leading platforms.",
              href: "/services/cloud-solutions",
            },
            {
              icon: <Code className="h-8 w-8 text-corexa-blue-400" />,
              title: "Custom Software",
              description: "Developing bespoke software applications to meet your unique operational requirements.",
              href: "/services/custom-software",
            },
            {
              icon: <Code className="h-8 w-8 text-corexa-purple-400" />,
              title: "DevOps & Consulting",
              description: "Optimizing your development pipeline and providing expert technical guidance.",
              href: "/services/devops-consulting",
            },
          ].map((service, index) => (
            <div key={service.title} className="relative group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-corexa-purple-500/30 via-corexa-blue-500/25 to-transparent opacity-60 blur-2xl group-hover:opacity-90 group-hover:blur-3xl transition duration-700" />

              <div className="relative h-full rounded-3xl bg-gradient-to-b from-slate-950/95 via-slate-900 to-black border border-white/10 shadow-[0_20px_70px_rgba(15,23,42,0.9)] overflow-hidden">
                <div className="absolute inset-x-10 -top-24 h-40 bg-gradient-to-br from-corexa-purple-400/25 via-corexa-blue-400/20 to-transparent blur-3xl" />

                <div className="relative flex h-full flex-col items-start justify-between p-7 space-y-6">
                  <div className="space-y-5">
                    <div className="relative inline-flex">
                      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-corexa-purple-500/35 via-corexa-blue-500/35 to-transparent opacity-70 blur-2xl group-hover:opacity-90 group-hover:blur-3xl transition duration-500" />
                      <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-white/15 shadow-[0_14px_40px_rgba(15,23,42,0.9)]">
                        {service.icon}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300/80">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    aria-label={`Learn more about ${service.title}`}
                    className="inline-flex items-center text-sm font-medium text-corexa-blue-300 hover:text-corexa-purple-200 transition-colors group"
                  >
                    <span className="mr-1">Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}