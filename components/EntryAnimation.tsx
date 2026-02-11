"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface EntryAnimationProps {
  onComplete: () => void
}

export default function EntryAnimation({ onComplete }: EntryAnimationProps) {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showText, setShowText] = useState(false)
  const [showVortex, setShowVortex] = useState(false)

  useEffect(() => {
    const timeline = async () => {
      // Phase 1: Dark overlay with pulse
      await new Promise(resolve => setTimeout(resolve, 500))
      setCurrentPhase(1)
      
      // Phase 2: Pulse expands and shatters
      await new Promise(resolve => setTimeout(resolve, 1500))
      setCurrentPhase(2)
      
      // Phase 3: Particles form text
      await new Promise(resolve => setTimeout(resolve, 1000))
      setShowText(true)
      setCurrentPhase(3)
      
      // Phase 4: Text dissolves into vortex
      await new Promise(resolve => setTimeout(resolve, 2000))
      setShowVortex(true)
      setCurrentPhase(4)
      
      // Phase 5: Complete animation
      await new Promise(resolve => setTimeout(resolve, 1500))
      onComplete()
    }
    
    timeline()
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Pulse Light */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={currentPhase >= 1 ? { scale: [0, 1.5, 2], opacity: [0, 1, 0] } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="w-4 h-4 bg-corexa-blue-400 rounded-full shadow-[0_0_50px_20px_rgba(59,130,246,0.8)]" />
          <motion.div
            className="absolute w-8 h-8 bg-corexa-purple-400 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={currentPhase >= 1 ? { scale: [0, 1, 1.5], opacity: [0, 0.5, 0] } : {}}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-12 h-12 bg-white rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={currentPhase >= 1 ? { scale: [0, 1, 1.2], opacity: [0, 0.3, 0] } : {}}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          />
        </motion.div>

        {/* Shattering Particles */}
        {currentPhase >= 2 && (
          <div className="absolute inset-0">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${
                  i % 3 === 0 ? 'bg-corexa-blue-400' : 
                  i % 3 === 1 ? 'bg-corexa-purple-400' : 'bg-white'
                }`}
                style={{
                  boxShadow: i % 3 === 0 ? "0 0 10px rgba(59,130,246,0.8)" :
                             i % 3 === 1 ? "0 0 10px rgba(147,51,234,0.8)" :
                             "0 0 10px rgba(255,255,255,0.8)"
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 1,
                  scale: 1
                }}
                animate={{
                  x: (Math.random() - 0.5) * 1000,
                  y: (Math.random() - 0.5) * 800,
                  opacity: [1, 0.8, 0],
                  scale: [1, 1.5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  delay: Math.random() * 0.8,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}

        {/* COREXA Text */}
        <AnimatePresence>
          {showText && (
            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.p
                className="text-lg font-semibold text-gray-300 uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Leading Software Agency
              </motion.p>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-4"
                style={{
                  fontFamily: "var(--font-orbitron), monospace",
                  textShadow: "0 0 30px rgba(255,255,255,0.8)"
                }}
                initial={{ letterSpacing: "0.5em", opacity: 0 }}
                animate={{ letterSpacing: "0.1em", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                COREXA LABS
              </motion.h1>
              <motion.p
                className="text-xl text-corexa-purple-400 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                INNOVATION DRIVES OUR SOLUTIONS, PRECISION DEFINES OUR CRAFT
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Vortex Effect */}
        <AnimatePresence>
          {showVortex && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-32 h-32 border-2 border-corexa-blue-400 rounded-full"
                style={{ boxShadow: "0 0 20px rgba(59,130,246,0.6)" }}
                animate={{
                  rotate: 360,
                  scale: [1, 2.5, 0],
                  opacity: [1, 0.8, 0]
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-24 h-24 border border-corexa-purple-400 rounded-full"
                style={{ boxShadow: "0 0 15px rgba(147,51,234,0.5)" }}
                animate={{
                  rotate: -360,
                  scale: [1, 2, 0],
                  opacity: [0.8, 0.6, 0]
                }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-16 h-16 border border-white rounded-full"
                style={{ boxShadow: "0 0 10px rgba(255,255,255,0.4)" }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.5, 0],
                  opacity: [0.6, 0.4, 0]
                }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-8 h-8 border border-corexa-blue-300 rounded-full"
                style={{ boxShadow: "0 0 5px rgba(147,197,253,0.3)" }}
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 0],
                  opacity: [0.4, 0.2, 0]
                }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
} 