'use client'

import { useEffect, useRef } from 'react'

export default function ServiceBackground({ type = 'cloud' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Cloud animation
    if (type === 'cloud') {
      const particles = []
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        })
      }

      const animate = () => {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        particles.forEach(p => {
          p.x += p.speedX
          p.y += p.speedY

          if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
          if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

          ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        })

        time += 0.01
        animationFrameId = requestAnimationFrame(animate)
      }
      animate()
    }

    // AI animation
    if (type === 'ai') {
      const nodes = []
      for (let i = 0; i < 20; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 3 + 2,
        })
      }

      const animate = () => {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        nodes.forEach(node => {
          node.x += node.vx
          node.y += node.vy

          if (node.x < 0 || node.x > canvas.width) node.vx *= -1
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1

          ctx.fillStyle = 'rgba(139, 92, 246, 0.8)'
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
          ctx.fill()
        })

        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 120) {
              const opacity = (1 - distance / 120) * 0.3
              ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
              ctx.lineWidth = 2
              ctx.beginPath()
              ctx.moveTo(nodes[i].x, nodes[i].y)
              ctx.lineTo(nodes[j].x, nodes[j].y)
              ctx.stroke()
            }
          }
        }

        time += 0.01
        animationFrameId = requestAnimationFrame(animate)
      }
      animate()
    }

    // DevOps animation
    if (type === 'devops') {
      const blocks = []
      for (let i = 0; i < 8; i++) {
        blocks.push({
          x: -50,
          y: Math.random() * canvas.height,
          width: Math.random() * 60 + 40,
          height: 30,
          speed: Math.random() * 1 + 0.5,
        })
      }

      const animate = () => {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.15)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        blocks.forEach(block => {
          block.x += block.speed
          if (block.x > canvas.width + 100) {
            block.x = -100
            block.y = Math.random() * canvas.height
          }

          ctx.fillStyle = 'rgba(6, 182, 212, 0.4)'
          ctx.fillRect(block.x, block.y, block.width, block.height)
        })

        animationFrameId = requestAnimationFrame(animate)
      }
      animate()
    }

    // Analytics animation
    if (type === 'analytics') {
      const bars = []
      for (let i = 0; i < 12; i++) {
        bars.push({
          x: (canvas.width / 13) * (i + 1),
          height: Math.random() * canvas.height * 0.6 + 20,
        })
      }

      const animate = () => {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        bars.forEach(bar => {
          const gradient = ctx.createLinearGradient(bar.x, canvas.height, bar.x, canvas.height - bar.height)
          gradient.addColorStop(0, 'rgba(99, 102, 241, 0.6)')
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0.3)')

          ctx.fillStyle = gradient
          const barWidth = canvas.width / 20
          ctx.fillRect(bar.x - barWidth / 2, canvas.height - bar.height, barWidth, bar.height)

          if (Math.random() < 0.01) {
            bar.height = Math.random() * canvas.height * 0.6 + 20
          }
        })

        animationFrameId = requestAnimationFrame(animate)
      }
      animate()
    }

    // Cybersecurity animation - NEW!
    if (type === 'security') {
      const shields = []
      for (let i = 0; i < 5; i++) {
        shields.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 40 + 30,
          opacity: Math.random() * 0.5 + 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
        })
      }

      // Scanning lines
      const scanLines = []
      for (let i = 0; i < 3; i++) {
        scanLines.push({
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.2,
        })
      }

      // Binary rain
      const binaryChars = []
      for (let i = 0; i < 20; i++) {
        binaryChars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          char: Math.random() > 0.5 ? '1' : '0',
        })
      }

      const animate = () => {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw binary rain
        ctx.font = '14px monospace'
        ctx.fillStyle = 'rgba(255, 107, 53, 0.3)'
        binaryChars.forEach(char => {
          char.y += char.speed
          if (char.y > canvas.height) {
            char.y = -20
            char.x = Math.random() * canvas.width
          }
          ctx.fillText(char.char, char.x, char.y)
        })

        // Draw scanning lines
        scanLines.forEach(line => {
          line.y += line.speed
          if (line.y > canvas.height) line.y = -10

          const gradient = ctx.createLinearGradient(0, line.y - 5, 0, line.y + 5)
          gradient.addColorStop(0, 'rgba(255, 107, 53, 0)')
          gradient.addColorStop(0.5, `rgba(255, 107, 53, ${line.opacity})`)
          gradient.addColorStop(1, 'rgba(255, 107, 53, 0)')

          ctx.fillStyle = gradient
          ctx.fillRect(0, line.y - 5, canvas.width, 10)
        })

        // Draw shields with pulse
        shields.forEach(shield => {
          shield.pulse += shield.pulseSpeed
          const pulseOpacity = shield.opacity * (0.7 + Math.sin(shield.pulse) * 0.3)

          // Shield shape
          ctx.strokeStyle = `rgba(255, 107, 53, ${pulseOpacity})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(shield.x, shield.y - shield.size / 2)
          ctx.lineTo(shield.x + shield.size / 2, shield.y - shield.size / 4)
          ctx.lineTo(shield.x + shield.size / 2, shield.y + shield.size / 4)
          ctx.lineTo(shield.x, shield.y + shield.size / 2)
          ctx.lineTo(shield.x - shield.size / 2, shield.y + shield.size / 4)
          ctx.lineTo(shield.x - shield.size / 2, shield.y - shield.size / 4)
          ctx.closePath()
          ctx.stroke()

          // Lock icon in center
          ctx.fillStyle = `rgba(255, 107, 53, ${pulseOpacity * 0.8})`
          ctx.beginPath()
          ctx.arc(shield.x, shield.y - 5, 5, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillRect(shield.x - 8, shield.y, 16, 12)
        })

        time += 0.01
        animationFrameId = requestAnimationFrame(animate)
      }
      animate()
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [type])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
    />
  )
}