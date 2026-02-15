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

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 2000
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.vz = Math.random() * 2 + 1
        this.size = Math.random() * 2 + 1
        this.hue = Math.random() * 60 + 160 // Blue to cyan range
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.z -= this.vz

        if (this.z <= 0) {
          this.z = 2000
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        }

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        const scale = 1000 / this.z
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2
        const size = this.size * scale

        if (x2d < -50 || x2d > canvas.width + 50 || y2d < -50 || y2d > canvas.height + 50) {
          return
        }

        const opacity = 1 - this.z / 2000
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${opacity})`
        ctx.beginPath()
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect for closer particles
        if (this.z < 500) {
          ctx.shadowBlur = 20
          ctx.shadowColor = `hsla(${this.hue}, 100%, 60%, ${opacity})`
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }
    }

    // Create particles
    for (let i = 0; i < 200; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections between close particles
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)'
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dz = particles[i].z - particles[j].z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.3
            ctx.strokeStyle = `rgba(0, 255, 136, ${opacity})`
            
            const scale1 = 1000 / particles[i].z
            const scale2 = 1000 / particles[j].z
            const x1 = (particles[i].x - canvas.width / 2) * scale1 + canvas.width / 2
            const y1 = (particles[i].y - canvas.height / 2) * scale1 + canvas.height / 2
            const x2 = (particles[j].x - canvas.width / 2) * scale2 + canvas.width / 2
            const y2 = (particles[j].y - canvas.height / 2) * scale2 + canvas.height / 2

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
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)' }}
    />
  )
}