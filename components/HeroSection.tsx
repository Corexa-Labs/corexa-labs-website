"use client"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particles-background"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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

export function HeroSection() {
  const [currentParticleCount, setCurrentParticleCount] = useState(80)
  const [tagStyles, setTagStyles] = useState<Array<{
    initial: { opacity: number; left: string; top: string; rotate: number; scale: number }
    animate: { opacity: number[]; left: string[]; top: string[]; rotate: number[]; scale: number[] }
    transition: { duration: number; repeat: number; repeatType: "loop"; ease: string; delay: number; times: number[] }
    className: string
  }>>([])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentParticleCount(30)
      } else {
        setCurrentParticleCount(80)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const randomStyleClasses = [
      "bg-white/70 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2 shadow-md",
      "bg-corexa-blue-50/70 dark:bg-corexa-blue-950/70 text-corexa-blue-800 dark:text-corexa-blue-200 rounded-lg px-5 py-3 shadow-lg",
      "bg-corexa-purple-50/70 dark:bg-corexa-purple-950/70 text-corexa-purple-800 dark:text-corexa-purple-200 rounded-md px-3 py-1 shadow-sm",
      "bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 rounded-full px-6 py-3 shadow-xl border border-gray-200 dark:border-gray-700",
      "bg-corexa-blue-100/70 dark:bg-corexa-blue-800/70 text-corexa-blue-900 dark:text-corexa-blue-100 rounded-full px-4 py-2 text-sm",
      "bg-corexa-purple-100/70 dark:bg-corexa-purple-800/70 text-corexa-purple-900 dark:text-corexa-purple-100 rounded-xl px-5 py-2 text-base",
    ]
    const getPositionInSafeZone = () => {
      const zones = [
        { xMin: 0, xMax: 30, yMin: 0, yMax: 30 },
        { xMin: 70, xMax: 100, yMin: 0, yMax: 30 },
        { xMin: 0, xMax: 30, yMin: 70, yMax: 100 },
        { xMin: 70, xMax: 100, yMin: 70, yMax: 100 },
        { xMin: 0, xMax: 20, yMin: 30, yMax: 70 },
        { xMin: 80, xMax: 100, yMin: 30, yMax: 70 },
        { xMin: 30, xMax: 70, yMin: 0, yMax: 20 },
        { xMin: 30, xMax: 70, yMin: 80, yMax: 100 },
      ]
      const selectedZone = zones[Math.floor(Math.random() * zones.length)]
      const x = Math.random() * (selectedZone.xMax - selectedZone.xMin) + selectedZone.xMin
      const y = Math.random() * (selectedZone.yMax - selectedZone.yMin) + selectedZone.yMin
      return { x, y }
    }
    const newStyles = floatingTagsData.map(() => {
      const initialPos = getPositionInSafeZone()
      const initialRotate = Math.random() * 40 - 20
      const initialScale = Math.random() * 0.4 + 0.8
      const nextPos = getPositionInSafeZone()
      const nextRotate = Math.random() * 40 - 20
      const nextScale = Math.random() * 0.4 + 0.8
      const duration = Math.random() * 10 + 10
      const delay = Math.random() * 2
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
          repeatType: "loop" as const,
          ease: "easeInOut",
          delay: delay,
          times: [0, 0.1, 0.8, 0.9, 1],
        },
        className: randomClass,
      }
    })
    setTagStyles(newStyles)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-gradient-to-br from-corexa-blue-50 to-corexa-purple-50 dark:from-gray-900 dark:to-black overflow-hidden text-center"
    >
      <ParticleBackground particleCount={currentParticleCount} />
      {/* Only render floating tags if ready */}
      {tagStyles.length === floatingTagsData.length && floatingTagsData.map((tag, index) => (
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
      {/* Main hero content always visible */}
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
  )
} 