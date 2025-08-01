"use client"

import "../style/footer.css"

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Efectos de fondo */}
      <div className="footer-background">
        <div className="bg-lines"></div>
        <div className="footer-glow"></div>
      </div>

      {/* Contenido */}
      <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()} Alberto Sosa. Todos los derechos reservados.</p>
        <div className="footer-accent"></div>
      </div>
    </footer>
  )
}
