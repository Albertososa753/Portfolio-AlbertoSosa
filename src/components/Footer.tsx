"use client"

import "@/style/footer.css" // Nuevo archivo de estilos

export default function Footer() {
  return (
    <footer className="main-footer">
      <p className="footer-text">&copy; {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
    </footer>
  )
}
