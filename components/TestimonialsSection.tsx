import { Quote } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const testimonialSlides = [
  {
    type: "video" as const,
    title: "David Emmerson - Cherubgyre",
    description:
      "A short highlight from a recent product launch where our team handled end-to-end development.",
    videoUrl: "https://www.youtube.com/embed/rIxqCfBEb7Y",
  },
  {
    type: "video" as const,
    name: "Nic Sullo - Swipe Bite",
    title: "Nic Sullo - Swipe Bite",
    description:
      "A quick look at how our AI solutions improved decision‑making for one of our partners.",
    videoUrl: "https://www.youtube.com/embed/natiXsDSWTs",
  },
  {
    type: "text" as const,
    role: "Swipe Bite Research Docs and Continuous Support",
    quote:
      "Shaheer is one of the most genuinely personable and collaborative people I’ve worked with. He combines deep technical expertise with a calm, solutions-oriented mindset that makes complex challenges feel approachable. His architecture leadership is outstanding — thoughtful, scalable, and always focused on long-term success. I’ve learned a lot from working with him and have full confidence in continuing to build alongside him for a long time to come.",
    name: "Nic Sullo",
  },{
    type: "text" as const,
    role: "Blockchain Based Automated Application Submission System",
    quote:
      "Professional is & very attentive to details. Willing to advance their skillset to complete the project as wxpected. Absolute pleasure to work with and highly recommended, A+",
    name: "Tonny Clarizio",
  }

]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-black py-20 md:py-32"
    >
      <div className="pointer-events-none absolute -top-40 left-0 h-72 w-72 rounded-full bg-corexa-purple-500/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-corexa-blue-500/35 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <h2 className="mb-10 text-center text-4xl font-bold text-white md:mb-14 md:text-5xl">
          What Our{" "}
          <span className="bg-gradient-to-r from-corexa-purple-400 to-corexa-blue-400 bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>

        <Carousel
          opts={{ loop: true, align: "start" }}
          className="mx-auto max-w-4xl"
        >
          <CarouselContent>
            {testimonialSlides.map((slide) => (
              <CarouselItem
                key={slide.type === "video" ? slide.videoUrl : slide.name}
                className="flex items-center"
              >
                <div className="relative group w-full">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-corexa-purple-500/35 via-corexa-blue-500/25 to-transparent opacity-70 blur-2xl group-hover:opacity-95 group-hover:blur-3xl transition duration-700" />

                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950/95 via-slate-900 to-black shadow-[0_20px_70px_rgba(15,23,42,0.9)] p-6 md:p-8">
                    {slide.type === "video" ? (
                      <div className="space-y-4 md:space-y-6">
                        <AspectRatio ratio={16 / 9}>
                          <iframe
                            src={slide.videoUrl}
                            title={slide.title}
                            className="h-full w-full rounded-2xl border border-white/10 bg-black"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </AspectRatio>
                        <div className="space-y-1">
                          <p className="text-base font-semibold text-white md:text-lg">
                            {slide.title}
                          </p>
                          <p className="text-sm text-slate-300/80">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-center space-y-6 md:space-y-7">
                        <Quote className="h-10 w-10 text-corexa-blue-400" />
                        <p className="max-w-2xl text-balance text-sm italic text-slate-200 md:text-base">
                          “{slide.quote}”
                        </p>
                        <div className="flex items-center justify-center gap-3 pt-2">
                          <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(slide.name)}`}
                            alt=""
                            width={56}
                            height={56}
                            className="h-14 w-14 rounded-full object-cover bg-slate-700"
                          />
                          <div className="text-left">
                            <p className="font-semibold text-white">
                              {slide.name}
                            </p>
                            <p className="text-xs text-slate-400 md:text-sm">
                              {slide.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-white/15 bg-slate-900/80 text-white hover:bg-slate-800" />
          <CarouselNext className="border-white/15 bg-slate-900/80 text-white hover:bg-slate-800" />
        </Carousel>
      </div>
    </section>
  )
}