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
        this.z = Math.random() * 1500
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.speedZ = Math.random() * 1 + 0.5
        this.opacity = Math.random() * 0.5 + 0.3
        this.hue = Math.random() > 0.5 ? 270 : 210 // Purple or Blue
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.z -= this.speedZ

        if (this.z <= 0) {
          this.z = 1500
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        }

        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        const scale = 800 / (this.z + 800)
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2
        const size = Math.max(this.size * scale, 0.5)
        const opacity = Math.max((1 - this.z / 1500) * this.opacity, 0)

        // Outer glow
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 4)
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, ${opacity * 0.8})`)
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, 50%, ${opacity * 0.3})`)
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 40%, 0)`)
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x2d, y2d, size * 4, 0, Math.PI * 2)
        ctx.fill()

        // Core particle
        ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${opacity})`
        ctx.beginPath()
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      // Deep navy gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      bgGradient.addColorStop(0, '#0F172A')
      bgGradient.addColorStop(0.5, '#1E293B')
      bgGradient.addColorStop(1, '#0F172A')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Subtle gradient orbs
      const purpleGlow = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.2, 0,
        canvas.width * 0.8, canvas.height * 0.2, 500
      )
      purpleGlow.addColorStop(0, 'rgba(139, 92, 246, 0.08)')
      purpleGlow.addColorStop(1, 'rgba(15, 23, 42, 0)')
      ctx.fillStyle = purpleGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const blueGlow = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.8, 0,
        canvas.width * 0.2, canvas.height * 0.8, 500
      )
      blueGlow.addColorStop(0, 'rgba(59, 130, 246, 0.06)')
      blueGlow.addColorStop(1, 'rgba(15, 23, 42, 0)')
      ctx.fillStyle = blueGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dz = particles[i].z - particles[j].z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 200) {
            const scale1 = 800 / (particles[i].z + 800)
            const scale2 = 800 / (particles[j].z + 800)
            const x1 = (particles[i].x - canvas.width / 2) * scale1 + canvas.width / 2
            const y1 = (particles[i].y - canvas.height / 2) * scale1 + canvas.height / 2
            const x2 = (particles[j].x - canvas.width / 2) * scale2 + canvas.width / 2
            const y2 = (particles[j].y - canvas.height / 2) * scale2 + canvas.height / 2

            const opacity = (1 - distance / 200) * 0.2
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

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
    </div>
  )
}