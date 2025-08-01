"use client"
import { useState, useRef, useEffect } from "react"
import { Linkedin, Github, FileText, Download, Eye } from "lucide-react"
import "../style/contact.css";
// Componente de texto con efecto typing
const TypingText = ({ text, delay = 0, speed = 100 }: { text: string; delay?: number; speed?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }
      },
      delay + currentIndex * speed,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, speed])

  return <span>{displayText}</span>
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in")
        })
      },
      { threshold: 0.1 },
    )

    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      {/* Efectos de fondo */}
      <div className="contact-background">
        <div className="bg-grid"></div>
        <div className="floating-shapes">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`floating-shape shape-${i + 1}`} />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="contact-header animate-on-scroll">
        <h2 className="section-title">
          <TypingText text="CONTACTO" delay={0} speed={100} />
        </h2>
        <p className="section-description">
          ¡Si quieres colaborar conmigo no dudes en contactarte! Estoy siempre abierto a nuevos desafíos y
          oportunidades.
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="contact-container animate-on-scroll">
        {/* Sección CV destacada */}
        <div className="cv-section">
          <div className="cv-card">
            <div className="cv-icon">
              <FileText size={48} />
            </div>
            <div className="cv-content">
              <h3 className="cv-title">Mi Currículum</h3>
              <p className="cv-description">
                Descarga mi CV completo para conocer más sobre mi experiencia profesional y habilidades técnicas.
              </p>
              <div className="cv-actions">
                <a href="/AlbertoSosaCV.pdf" download className="cv-button download">
                  <Download size={20} />
                  <span>Descargar CV</span>
                  <div className="button-glow"></div>
                </a>
                <a href="/AlbertoSosaCV.pdf" target="_blank" rel="noopener noreferrer" className="cv-button preview">
                  <Eye size={20} />
                  <span>Vista previa</span>
                </a>
              </div>
            </div>
            <div className="cv-decoration"></div>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="contact-info">
          <h3 className="info-title">Encuéntrame en:</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/alberto-sosa-/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
              <div className="link-arrow">→</div>
            </a>
            <a
              href="https://github.com/Albertososa753"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
            >
              <Github size={24} />
              <span>GitHub</span>
              <div className="link-arrow">→</div>
            </a>
          </div>

          <div className="direct-contact">
            <p>O envíame un correo directamente:</p>
            <a href="mailto:betososa753@gmail.com" className="email-link">
              betososa753@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
