'use client'
import { useEffect, useRef } from 'react'

export default function InfinitySymbol() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // Offscreen cache for the heavy ribbon draw
    const cache = document.createElement('canvas')
    const cctx = cache.getContext('2d')

    let raf = 0
    let t = 0
    let frame = 0

    const DPR = () => Math.min(1.25, window.devicePixelRatio || 1)

    // Lemniscate points precomputed (so you don’t recalc trig constantly)
    let points = []

    const pos = (u, cx, cy, sx, sy) => {
      const a = u * Math.PI * 2
      const sa = Math.sin(a)
      const ca = Math.cos(a)
      const d = 1 + sa * sa
      return { x: cx + (sx * ca) / d, y: cy + (sy * sa * ca) / d }
    }

    const buildPoints = (w, h) => {
      const cx = w / 2
      const cy = h / 2 - 10
      const sx = Math.min(w * 0.42, 520)
      const sy = Math.min(h * 0.33, 230)

      const step = w < 768 ? 1 / 220 : 1 / 320
      const arr = []
      for (let u = 0; u <= 1; u += step) arr.push(pos(u, cx, cy, sx, sy))
      return { arr, cx, cy, sx, sy }
    }

    const resize = () => {
      const dpr = DPR()
      const w = canvas.parentElement?.clientWidth || window.innerWidth
      const h = 700

      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Match cache size to CSS pixels (not DPR) for speed
      cache.width = w
      cache.height = h

      const built = buildPoints(w, h)
      points = built.arr

      // Re-render ribbon once on resize
      renderRibbonToCache(cctx, w, h, points)
    }

    const renderRibbonToCache = (g, w, h, pts) => {
      g.clearRect(0, 0, w, h)

      // Background (optional keep this on main canvas instead)
      g.fillStyle = '#071827'
      g.fillRect(0, 0, w, h)

      // Ribbon body: 2–3 passes only, no per-segment gradients
      const baseWidth = Math.min(120, Math.max(78, w * 0.08))

      // Main coloured stroke (simple linear gradient across the whole ribbon)
      const grad = g.createLinearGradient(w * 0.2, h * 0.5, w * 0.8, h * 0.5)
      grad.addColorStop(0, 'rgba(60, 220, 160, 0.95)')
      grad.addColorStop(0.5, 'rgba(90, 200, 255, 0.95)')
      grad.addColorStop(1, 'rgba(40, 110, 255, 0.95)')

      g.lineCap = 'round'

      // Soft bloom behind
      g.save()
      g.globalCompositeOperation = 'lighter'
      g.shadowBlur = 26
      g.shadowColor = 'rgba(80, 180, 255, 0.28)'
      g.strokeStyle = 'rgba(80, 180, 255, 0.22)'
      g.lineWidth = baseWidth * 1.12
      g.beginPath()
      pts.forEach((p, i) => (i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)))
      g.closePath()
      g.stroke()
      g.restore()

      // Main body
      g.strokeStyle = grad
      g.lineWidth = baseWidth
      g.beginPath()
      pts.forEach((p, i) => (i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)))
      g.closePath()
      g.stroke()

      // Edge rim
      g.save()
      g.globalCompositeOperation = 'lighter'
      g.shadowBlur = 14
      g.shadowColor = 'rgba(255,255,255,0.18)'
      g.strokeStyle = 'rgba(255,255,255,0.16)'
      g.lineWidth = 3
      g.beginPath()
      pts.forEach((p, i) => (i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)))
      g.closePath()
      g.stroke()
      g.restore()
    }

    // A few sparkles only (and cheap)
    const sparkles = Array.from({ length: 40 }, () => ({
      u: Math.random(),
      phase: Math.random() * Math.PI * 2,
      a: 0.25 + Math.random() * 0.45,
      r: 1 + Math.random() * 2
    }))

    const drawSparkles = (g, w, h) => {
      g.save()
      g.globalCompositeOperation = 'lighter'
      for (const s of sparkles) {
        s.phase += 0.03
        const pulse = 0.3 + (Math.sin(s.phase) * 0.7 + 0.7) * 0.5

        const idx = Math.floor(s.u * (points.length - 1))
        const p = points[idx]
        const a = s.a * pulse

        g.strokeStyle = `rgba(255,255,255,${a})`
        g.lineWidth = 1.2
        g.beginPath()
        g.moveTo(p.x - s.r * 2.2, p.y)
        g.lineTo(p.x + s.r * 2.2, p.y)
        g.moveTo(p.x, p.y - s.r * 2.2)
        g.lineTo(p.x, p.y + s.r * 2.2)
        g.stroke()
      }
      g.restore()
    }

    // Animated highlight band (cheap fake gloss)
    const drawMovingHighlight = (g, w, h, time) => {
      g.save()
      g.globalCompositeOperation = 'screen'
      const x = (time * 140) % (w + 400) - 200
      const band = g.createLinearGradient(x, 0, x + 200, 0)
      band.addColorStop(0, 'rgba(255,255,255,0)')
      band.addColorStop(0.5, 'rgba(255,255,255,0.10)')
      band.addColorStop(1, 'rgba(255,255,255,0)')
      g.fillStyle = band
      g.fillRect(0, 0, w, h)
      g.restore()
    }

    const loop = () => {
      const w = canvas.width / DPR()
      const h = canvas.height / DPR()
      t += 0.016
      frame++

      // Draw cached ribbon (fast)
      ctx.clearRect(0, 0, w, h)
      ctx.drawImage(cache, 0, 0)

      // Animate only light effects
      drawMovingHighlight(ctx, w, h, t)

      // Update sparkles every other frame
      if (frame % 2 === 0) drawSparkles(ctx, w, h)

      raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)
    loop()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="relative w-full h-[700px] overflow-hidden bg-[#071827]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
