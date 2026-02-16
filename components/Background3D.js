'use client'

import { useEffect, useRef } from 'react'

export default function Background3D() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let waves = []
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
        this.hue = Math.random() > 0.5 ? 270 : 210 // Purple or Blue
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    class Wave {
      constructor(y, amplitude, frequency, speed, color) {
        this.y = y
        this.amplitude = amplitude
        this.frequency = frequency
        this.speed = speed
        this.color = color
        this.offset = Math.random() * Math.PI * 2
      }

      update() {
        this.offset += this.speed
      }

      draw() {
        ctx.beginPath()
        ctx.moveTo(0, this.y)

        for (let x = 0; x < canvas.width; x++) {
          const y = this.y + Math.sin((x * this.frequency) + this.offset) * this.amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, this.y - this.amplitude, 0, canvas.height)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0)')

        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    // Initialize
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle())
    }

    waves.push(new Wave(canvas.height * 0.7, 40, 0.003, 0.01, 'rgba(139, 92, 246, 0.05)'))
    waves.push(new Wave(canvas.height * 0.8, 50, 0.002, 0.008, 'rgba(59, 130, 246, 0.03)'))
    waves.push(new Wave(canvas.height * 0.9, 60, 0.001, 0.006, 'rgba(6, 182, 212, 0.02)'))

    const animate = () => {
      time += 0.01

      // Deep navy gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      bgGradient.addColorStop(0, '#0F172A')
      bgGradient.addColorStop(0.5, '#1E293B')
      bgGradient.addColorStop(1, '#0F172A')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Purple glow top-right
      const purpleGlow = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.2, 0,
        canvas.width * 0.8, canvas.height * 0.2, 600
      )
      purpleGlow.addColorStop(0, 'rgba(139, 92, 246, 0.15)')
      purpleGlow.addColorStop(0.5, 'rgba(124, 58, 237, 0.08)')
      purpleGlow.addColorStop(1, 'rgba(15, 23, 42, 0)')
      ctx.fillStyle = purpleGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Blue glow bottom-left
      const blueGlow = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.8, 0,
        canvas.width * 0.2, canvas.height * 0.8, 600
      )
      blueGlow.addColorStop(0, 'rgba(59, 130, 246, 0.12)')
      blueGlow.addColorStop(0.5, 'rgba(37, 99, 235, 0.06)')
      blueGlow.addColorStop(1, 'rgba(15, 23, 42, 0)')
      ctx.fillStyle = blueGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Cyan accent center
      const cyanGlow = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, 500
      )
      cyanGlow.addColorStop(0, 'rgba(6, 182, 212, 0.08)')
      cyanGlow.addColorStop(1, 'rgba(15, 23, 42, 0)')
      ctx.fillStyle = cyanGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      waves.forEach(wave => {
        wave.update()
        wave.draw()
      })

      // Draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: '#0F172A' }}
      />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>
    </div>
  )
}