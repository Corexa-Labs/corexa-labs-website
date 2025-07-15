"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Code,
  Smartphone,
  Brain,
  Cloud,
  Quote,
  ArrowRight,
  Lightbulb,
  Users,
  ShieldCheck,
} from "lucide-react"
import { DiagonalCard } from "@/components/diagonal-card"
import { BentoGrid } from "@/components/bento-grid"
import { BentoGridItem } from "@/components/bento-grid-item"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ParticleBackground } from "@/components/particles-background"
import { useEffect, useState } from "react"

export default function Component() {
  const coreValues = [
    {
      icon: <Lightbulb className="h-8 w-8 text-corexa-purple-500" />,
      title: "Innovation",
      description: "Pushing boundaries with creative and forward-thinking solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-corexa-blue-500" />,
      title: "Collaboration",
      description: "Working closely with clients to achieve shared success.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-corexa-purple-500" />,
      title: "Excellence",
      description: "Delivering high-quality, robust, and scalable software.",
    },
    {
      icon: <Code className="h-8 w-8 text-corexa-blue-500" />,
      title: "Agility",
      description: "Adapting quickly to changes and delivering value iteratively.",
    },
  ]
  const [currentParticleCount, setCurrentParticleCount] = useState(80) // Default for large screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Example breakpoint for mobile (md in Tailwind)
        setCurrentParticleCount(30) // Fewer particles for small screens
      } else {
        setCurrentParticleCount(80) // More particles for larger screens
      }
    }

    // Set initial count
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const [tagStyles, setTagStyles] = useState<
  Array<{
    initial: { opacity: number; left: string; top: string; rotate: number; scale: number }
    animate: { opacity: number[]; left: string[]; top: string[]; rotate: number[]; scale: number[] }
    transition: { duration: number; repeat: number; repeatType: "loop"; ease: string; delay: number; times: number[] }
    className: string
  }>
>([])

const floatingTagsData = [
  "AI/ML",
  "Cloud Solutions",
  "Web Development",
  "Mobile Apps",
  "DevOps",
  "Blockchain",
  "UI/UX Design",
  "Data Science",
  "Cybersecurity",
  "Product Strategy",
  "Agile Methodologies",
  "Big Data",
  "IoT Integration",
  "API Development",
  "Consulting",
]

useEffect(() => {
  const randomStyleClasses = [
    "bg-white/70 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2 shadow-md",
    "bg-corexa-blue-50/70 dark:bg-corexa-blue-950/70 text-corexa-blue-800 dark:text-corexa-blue-200 rounded-lg px-5 py-3 shadow-lg",
    "bg-corexa-purple-50/70 dark:bg-corexa-purple-950/70 text-corexa-purple-800 dark:text-corexa-purple-200 rounded-md px-3 py-1 shadow-sm",
    "bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 rounded-full px-6 py-3 shadow-xl border border-gray-200 dark:border-gray-700",
    "bg-corexa-blue-100/70 dark:bg-corexa-blue-800/70 text-corexa-blue-900 dark:text-corexa-blue-100 rounded-full px-4 py-2 text-sm",
    "bg-corexa-purple-100/70 dark:bg-corexa-purple-800/70 text-corexa-purple-900 dark:text-corexa-purple-100 rounded-xl px-5 py-2 text-base",
  ]

  // Define zones to avoid the very center where main text is
  const getPositionInSafeZone = () => {
    const zones = [
      // Outer quadrants
      { xMin: 0, xMax: 30, yMin: 0, yMax: 30 }, // Top-left
      { xMin: 70, xMax: 100, yMin: 0, yMax: 30 }, // Top-right
      { xMin: 0, xMax: 30, yMin: 70, yMax: 100 }, // Bottom-left
      { xMin: 70, xMax: 100, yMin: 70, yMax: 100 }, // Bottom-right
      // Side strips near center
      { xMin: 0, xMax: 20, yMin: 30, yMax: 70 }, // Mid-left
      { xMin: 80, xMax: 100, yMin: 30, yMax: 70 }, // Mid-right
      // Top/Bottom strips near center
      { xMin: 30, xMax: 70, yMin: 0, yMax: 20 }, // Top-center
      { xMin: 30, xMax: 70, yMin: 80, yMax: 100 }, // Bottom-center
    ]
    const selectedZone = zones[Math.floor(Math.random() * zones.length)]
    const x = Math.random() * (selectedZone.xMax - selectedZone.xMin) + selectedZone.xMin
    const y = Math.random() * (selectedZone.yMax - selectedZone.yMin) + selectedZone.yMin
    return { x, y }
  }

  const newStyles = floatingTagsData.map(() => {
    const initialPos = getPositionInSafeZone()
    const initialRotate = Math.random() * 40 - 20 // -20deg to 20deg
    const initialScale = Math.random() * 0.4 + 0.8 // 0.8 to 1.2

    const nextPos = getPositionInSafeZone()
    const nextRotate = Math.random() * 40 - 20
    const nextScale = Math.random() * 0.4 + 0.8

    const duration = Math.random() * 10 + 10 // 10 to 20 seconds for one full cycle
    const delay = Math.random() * 2 // 0 to 2 seconds initial delay

    const randomClass = randomStyleClasses[Math.floor(Math.random() * randomStyleClasses.length)]

    return {
      initial: {
        left: `${initialPos.x}%`,
        top: `${initialPos.y}%`,
        opacity: 0,
        rotate: initialRotate,
        scale: initialScale,
      },
      animate: {
        opacity: [0, 1, 1, 0, 0],
        rotate: [initialRotate, initialRotate, initialRotate, initialRotate, nextRotate],
        scale: [initialScale, initialScale, initialScale, initialScale, nextScale],
        left: [`${initialPos.x}%`, `${initialPos.x}%`, `${initialPos.x}%`, `${initialPos.x}%`, `${nextPos.x}%`],
        top: [`${initialPos.y}%`, `${initialPos.y}%`, `${initialPos.y}%`, `${initialPos.y}%`, `${nextPos.y}%`],
      },

      transition: {
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const, // Loop means it jumps to the end state and starts again from there
        ease: "easeInOut",
        delay: delay,
        times: [0, 0.1, 0.8, 0.9, 1], // Opacity keyframes: 0% (start), 10% (fully visible), 80% (still visible), 90% (fully invisible), 100% (jump to new position while invisible)
      },
      className: randomClass,
    }
  })
  setTagStyles(newStyles)
}, [])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased dark:bg-gray-950 dark:text-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm py-4 px-6 md:px-12 flex items-center justify-between shadow-lg">
        <Link href="#" className="text-2xl font-bold text-corexa-purple-500">
          Corexa Labs
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#hero"
            className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400"
          >
            Projects
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-gray-600 hover:text-corexa-purple-500 transition-colors dark:text-gray-300 dark:hover:text-corexa-purple-400"
          >
            Contact
          </Link>
        </nav>
        <Button className="hidden md:inline-flex bg-corexa-blue-600 hover:bg-corexa-blue-700 text-white">
          Get a Quote
        </Button>
        {/* Mobile menu icon would go here for responsiveness */}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-gradient-to-br from-corexa-blue-50 to-corexa-purple-50 dark:from-gray-900 dark:to-black overflow-hidden text-center"
        >
          {/* Particle Background */}
          <ParticleBackground particleCount={currentParticleCount} />

          {/* Floating Tags */}
          {floatingTagsData.map((tag, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: tagStyles[index]?.initial.opacity,
                rotate: tagStyles[index]?.initial.rotate,
                scale: tagStyles[index]?.initial.scale,
              }}
              animate={{
                opacity: tagStyles[index]?.animate.opacity,
                rotate: tagStyles[index]?.animate.rotate,
                scale: tagStyles[index]?.animate.scale,
              }}
              transition={tagStyles[index]?.transition as any}
              className={`absolute z-10 whitespace-nowrap backdrop-blur-sm ${tagStyles[index]?.className}`}
              style={{
                left: tagStyles[index]?.initial.left,
                top: tagStyles[index]?.initial.top,
                transform: "translate(-50%, -50%)",
              }}
            >
              {tag}
            </motion.div>
          ))}

          {/* Main Content */}
          <div className="relative z-20 container mx-auto max-w-4xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
            >
              Leading Software Agency
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white"
            >
              COREXA LABS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-corexa-purple-600 dark:text-corexa-purple-400 font-medium"
            >
              INNOVATION DRIVES OUR SOLUTIONS, PRECISION DEFINES OUR CRAFT
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button className="mt-8 px-8 py-3 text-lg bg-corexa-blue-600 hover:bg-corexa-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section
  id="about"
  className="relative py-24 md:py-36 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 overflow-hidden"
>
  <div className="container mx-auto px-4 md:px-8 relative z-10">
    <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-900 dark:text-white leading-tight">
      About <span className="bg-clip-text text-transparent bg-gradient-to-r from-corexa-purple-500 to-corexa-blue-500">
        Corexa Labs
      </span>
    </h2>

    <div className="grid md:grid-cols-2 gap-14 items-center">
      <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
        <p>
          <strong className="text-corexa-purple-600 dark:text-corexa-purple-400">Corexa Labs</strong> is a dynamic
          software agency turning visionary ideas into innovative digital solutions. We empower businesses through
          tailored, tech-driven strategies that spark growth and drive meaningful impact.
        </p>
        <p>
          Our team of engineers, designers, and thinkers collaborates using agile methodologies—ensuring transparency,
          flexibility, and delivery at speed. We're more than a service provider; we're your long-term partner in digital transformation.
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

    {/* Core Values */}
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

  {/* Blobs / Background Effects */}
  <div className="absolute top-20 -left-10 w-72 h-72 bg-corexa-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-corexa-purple-500"></div>
  <div className="absolute bottom-24 -right-16 w-96 h-96 bg-corexa-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-corexa-blue-500"></div>
</section>


        {/* Services Section */}
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
                  <Link href="#" className="text-corexa-purple-500 hover:underline flex items-center">
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
                  <Link href="#" className="text-corexa-blue-500 hover:underline flex items-center">
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
                  <Link href="#" className="text-corexa-purple-500 hover:underline flex items-center">
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
                  <Link href="#" className="text-corexa-blue-500 hover:underline flex items-center">
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
                  <Link href="#" className="text-corexa-purple-500 hover:underline flex items-center">
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
                  <Link href="#" className="text-corexa-blue-500 hover:underline flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </DiagonalCard>
            </div>
          </div>
        </section>

        {/* Projects/Portfolio Section */}
        <section id="projects" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950 relative">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              Our <span className="text-corexa-blue-600 dark:text-corexa-blue-500">Projects</span>
            </h2>
            <BentoGrid className="max-w-7xl mx-auto">
              <BentoGridItem
                className="md:col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                title="AI-Powered Analytics Dashboard"
                description="A comprehensive dashboard leveraging AI for real-time data insights and predictive analytics."
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-100 dark:from-gray-900 dark:to-gray-800 to-gray-50">
                    <Image
                      src="/images/ai-project.jpeg"
                      alt="AI Dashboard"
                      width={600}
                      height={300}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                }
                icon={<Brain className="h-4 w-4 text-corexa-purple-500" />}
              />
              <BentoGridItem
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                title="E-commerce Platform Redesign"
                description="Revamping a large-scale e-commerce platform for enhanced user experience and performance."
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-100 dark:from-gray-900 dark:to-gray-800 to-gray-50">
                    <Image
                      src="/images/ecommerce-project.jpeg"
                      alt="E-commerce"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                }
                icon={<Code className="h-4 w-4 text-corexa-blue-500" />}
              />
              <BentoGridItem
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                title="Secure Blockchain Wallet"
                description="Developing a highly secure and user-friendly digital wallet for cryptocurrency management."
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-100 dark:from-gray-900 dark:to-gray-800 to-gray-50">
                    <Image
                      src="/images/project-blockchain.jpeg"
                      alt="Blockchain Wallet"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                }
                icon={<Code className="h-4 w-4 text-corexa-purple-500" />}
              />
              <BentoGridItem
                className="md:col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                title="IoT Device Management System"
                description="A robust platform for monitoring and managing a vast network of IoT devices in real-time."
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-100 dark:from-gray-900 dark:to-gray-800 to-gray-50">
                    <Image
                      src="/images/project-iot.jpeg"
                      alt="IoT System"
                      width={600}
                      height={300}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                }
                icon={<Cloud className="h-4 w-4 text-corexa-blue-500" />}
              />
            </BentoGrid>
          </div>
        </section>

        {/* Testimonials Section */}
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
                    {
                      '"Corexa Labs transformed our vision into a reality. Their expertise and dedication are unparalleled. The final product exceeded all our expectations."'
                    }
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
                    {
                      '"The team at Corexa Labs is incredibly professional and innovative. They delivered our complex project on time and within budget, with exceptional quality."'
                    }
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
                    {
                      '"Working with Corexa Labs was a seamless experience. Their technical prowess combined with their collaborative approach made our project a huge success."'
                    }
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

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-white dark:bg-gray-950 relative">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              Get in <span className="text-corexa-blue-600 dark:text-corexa-blue-500">Touch</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Ready to start your next innovative project? Have a question or just want to say hello? Reach out to
                  us using the form or contact details below. We look forward to hearing from you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-corexa-purple-500" />
                    <a href="mailto:info@corexalabs.com" className="hover:text-corexa-blue-500 transition-colors">
                      info@corexalabs.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-corexa-blue-500" />
                    <a href="tel:+1234567890" className="hover:text-corexa-purple-500 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-corexa-purple-500 flex-shrink-0 mt-1" />
                    <span>123 Innovation Drive, Suite 400, Tech City, TX 78701, USA</span>
                  </div>
                </div>
                <div className="flex space-x-6 pt-4">
                  <Link href="#" className="text-gray-500 hover:text-corexa-blue-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-corexa-blue-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c-1.09 0-2.18-.41-3.01-1.24a4.24 4.24 0 0 1-1.24-3.01c0-1.09.41-2.18 1.24-3.01a4.24 4.24 0 0 1 3.01-1.24c1.09 0 2.18.41 3.01 1.24a4.24 4.24 0 0 1 1.24 3.01c0 1.09-.41 2.18-1.24 3.01a4.24 4.24 0 0 1-3.01 1.24Z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-corexa-blue-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.083.618-.217.618-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.165-1.11-1.477-1.11-1.477-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.09.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.70.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.099 2.65.64.7 1.028 1.598 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.153.577.62.483C21.133 20.197 24 16.443 24 12.017 24 6.484 19.522 2 14 2h-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-corexa-blue-500 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.44c1.79 0 3.24 1.45 3.24 3.24v6.64c0 1.79-1.45 3.24-3.24 3.24H4.188c-1.79 0-3.24-1.45-3.24-3.24V8.68c0-1.79 1.45-3.24 3.24-3.24h15.624ZM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5ZM19.812 7.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-corexa-blue-500 focus:ring-corexa-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@example.com"
                      className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-corexa-blue-500 focus:ring-corexa-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-corexa-blue-500 focus:ring-corexa-blue-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-corexa-blue-600 hover:bg-corexa-blue-700 text-white py-3 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black py-10 text-gray-400 text-center border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <p className="mb-4">&copy; {new Date().getFullYear()} Corexa Labs. All rights reserved.</p>
          <nav className="flex justify-center space-x-6 text-sm">
            <Link href="#" className="hover:text-corexa-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-corexa-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-corexa-blue-400 transition-colors">
              Sitemap
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
