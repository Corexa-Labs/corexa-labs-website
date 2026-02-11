"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Color } from "three"


export function HeroSection() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content after a brief delay to allow entry animation to complete
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  

  const bgGradient = useMemo(() => {
    return "bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(800px_400px_at_80%_20%,rgba(147,51,234,0.12),transparent_60%),linear-gradient(180deg,rgba(0,0,0,0.85),rgba(10,10,10,0.95))]"
  }, [])

  return (
    <motion.section
      id="hero"
      className={`relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-16 md:py-24 ${bgGradient} overflow-hidden text-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
          <color attach="background" args={[new Color('#000000')]} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color={new Color('#93c5fd')} />
          <pointLight position={[-5, -3, -2]} intensity={0.6} color={new Color('#c4b5fd')} />
          <mesh rotation={[0.6, 0.2, 0.1]}
            onUpdate={(m) => { m.rotation.y += 0.005; m.rotation.x += 0.002 }}>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshStandardMaterial metalness={0.6} roughness={0.2} color={new Color('#60a5fa')} emissive={new Color('#1f2937')} />
          </mesh>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
      </div>

      {/* Floating service pills removed */}

      <div className="relative z-20 container mx-auto max-w-4xl space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.6, delay: showContent ? 0.2 : 0 }}
          className="text-sm md:text-base font-semibold text-gray-300 uppercase tracking-[0.3em]"
        >
          Leading Software Agency
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.6, delay: showContent ? 0.4 : 0 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
          style={{
            fontFamily: "var(--font-orbitron), monospace",
            textShadow: "0 0 30px rgba(59,130,246,0.35)",
          }}
        >
          COREXA LABS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.6, delay: showContent ? 0.6 : 0 }}
          className="text-lg md:text-xl text-corexa-purple-300 font-medium"
        >
          INNOVATION DRIVES OUR SOLUTIONS, PRECISION DEFINES OUR CRAFT
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.8 }}
          transition={{ duration: 0.6, delay: showContent ? 0.8 : 0 }}
        >
          <Button className="mt-8 px-8 py-3 text-lg bg-corexa-blue-600 hover:bg-corexa-blue-700 text-white rounded-full shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
} 