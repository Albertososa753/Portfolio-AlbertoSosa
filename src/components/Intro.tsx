"use client"

import { useEffect, useRef } from "react"
import "../style/intro.css"
import { Link } from "react-scroll"

// Componente de partículas de fondo (conservado)
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    // Crear partículas
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? "#00bbf9" : "#ffc300",
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Actualizar posición
        particle.x += particle.vx
        particle.y += particle.vy

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Dibujar partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        // Conectar partículas cercanas
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = ((100 - distance) / 100) * 0.2
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" />
}

export default function Intro() {
  return (
    <section className="intro-section">
      {/* Fondo de partículas */}
      <ParticleField />

      {/* Efectos de luz de fondo */}
      <div className="background-lights">
        <div className="light-orb light-orb-1"></div>
        <div className="light-orb light-orb-2"></div>
        <div className="light-orb light-orb-3"></div>
      </div>

      {/* Contenido principal */}
      <div className="intro-container">
        {/* Contenido de texto */}
        <div className="intro-content">
          <div className="greeting">
            <span className="greeting-text">Hola,</span>
          </div>

          <div className="title-container">
            <h1 className="intro-title">
              <span className="title-normal">Soy </span>
              <span className="title-name">Alberto Sosa</span>
              <br />
              <span className="title-role">Desarrollador FullStack</span>
            </h1>
          </div>

          <div className="description-container">
            <p className="intro-description">
              Este es mi sitio web, donde comparto una colección de los proyectos que he creado a lo largo de mi
              trayectoria como desarrollador web.
            </p>
          </div>

          <div className="action-buttons">
            <Link to="proyects" className="btn-primary" >Ver Proyectos</Link>
          </div>
        </div>

        {/* Elemento visual abstracto */}
        <div className="visual-element">
          <div className="geometric-shape">
            <div className="shape-layer shape-layer-1"></div>
            <div className="shape-layer shape-layer-2"></div>
            <div className="shape-layer shape-layer-3"></div>
            <div className="central-core"></div>
          </div>

          <div className="floating-elements">
            <div className="floating-dot dot-1"></div>
            <div className="floating-dot dot-2"></div>
            <div className="floating-dot dot-3"></div>
            <div className="floating-dot dot-4"></div>
            <div className="floating-dot dot-5"></div>
            <div className="floating-dot dot-6"></div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}
