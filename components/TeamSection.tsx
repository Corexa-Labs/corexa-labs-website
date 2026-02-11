import Image from "next/image"

const team = [
  {
    name: "Shaheer Ilyas",
    title: "CEO & Co-Founder",
    image: "/images/shaheer-ceo.png",
    message:
      "At Corexa Labs, we believe in pushing the boundaries of innovation. Our mission is to empower businesses with cutting-edge technology and creative solutions. Thank you for trusting us on your journey to success.",
  },
  {
    name: "Umar Farooq",
    title: "CTO & Founder",
    image: "/images/umar-cto.png",
    message:
      "Technology is at the heart of everything we do. We strive to deliver robust, scalable, and future-ready solutions for our clients. Let's build something extraordinary together!",
  },
]

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-black py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -top-40 left-0 h-72 w-72 rounded-full bg-corexa-purple-500/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-corexa-blue-500/35 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center md:px-6">
        <h2 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-corexa-purple-400 to-corexa-blue-400 bg-clip-text text-transparent">
            Leadership
          </span>
        </h2>
        <p className="mb-12 max-w-2xl text-balance text-sm text-slate-300/85 md:text-lg">
          Our founders are passionate about driving innovation and delivering excellence. Get to know the visionaries behind Corexa Labs.
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
          {team.map((member) => (
            <div key={member.name} className="relative group w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-corexa-purple-500/35 via-corexa-blue-500/30 to-transparent opacity-70 blur-2xl transition duration-700 group-hover:opacity-95 group-hover:blur-3xl" />

              <div className="relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950/95 via-slate-900 to-black p-8 shadow-[0_20px_70px_rgba(15,23,42,0.9)]">
                <div className="relative mb-5">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-corexa-purple-500/40 via-corexa-blue-500/35 to-transparent opacity-80 blur-2xl transition duration-500 group-hover:opacity-100 group-hover:blur-3xl" />
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/25 bg-slate-900 shadow-[0_16px_45px_rgba(15,23,42,0.9)]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="mb-1 text-2xl font-semibold tracking-tight text-white">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-corexa-blue-200">
                  {member.title}
                </p>
                <p className="text-sm leading-relaxed text-slate-200/90 md:text-base">
                  “{member.message}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}