"use client"

import { useRef, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

interface ParticleBackgroundProps {
  className?: string
  particleColor?: string
  lineColor?: string
  particleCount?: number
  maxLineDistance?: number
}

export function ParticleBackground({
  className,
  particleColor = "#a78bfa", // corexa-purple-400
  lineColor = "#60a5fa", // corexa-blue-400
  particleCount = 80,
  maxLineDistance = 120,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)

  const particles = useRef<Particle[]>([]).current

  class Particle {
    x: number
    y: number
    radius: number
    dx: number
    dy: number
    color: string

    constructor(x: number, y: number, radius: number, color: string, dx: number, dy: number) {
      this.x = x
      this.y = y
      this.radius = radius
      this.dx = dx
      this.dy = dy
      this.color = color
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      ctx.fillStyle = this.color
      ctx.fill()
    }

    update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx
      }
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy
      }

      this.x += this.dx
      this.y += this.dy

      this.draw(ctx)
    }
  }

  const initParticles = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      particles.length = 0 // Clear existing particles
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 1 // 1 to 3
        const x = Math.random() * (canvas.width - radius * 2) + radius
        const y = Math.random() * (canvas.height - radius * 2) + radius
        const dx = (Math.random() - 0.5) * 0.8 // -0.4 to 0.4
        const dy = (Math.random() - 0.5) * 0.8 // -0.4 to 0.4
        particles.push(new Particle(x, y, radius, particleColor, dx, dy))
      }
    },
    [particleCount, particleColor, particles],
  )

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < particles.length; i++) {
      particles[i].update(ctx, canvas)
      for (let j = i; j < particles.length; j++) {
        const p1 = particles[i]
        const p2 = particles[j]
        const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

        if (distance < maxLineDistance) {
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = lineColor
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    animationFrameId.current = requestAnimationFrame(animate)
  }, [particles, lineColor, maxLineDistance])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles(canvas, ctx) // Re-initialize particles on resize
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [animate, initParticles])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 w-full h-full z-0", className)} />
}
