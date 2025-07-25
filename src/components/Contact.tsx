"use client"

import type React from "react"

import { useRef } from "react"
import { Linkedin, Github, FileText, Send } from "lucide-react" // Importar iconos de Lucide React
import "@/style/contact.css"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    emailjs.sendForm("service_dzbnhsg", "template_idh6nr7", form.current, "uX4bX4-bis6SbsNr-").then(
      (result) => {
        console.log(result.text)
        alert("¡Email enviado!")
        form.current?.reset() // Limpiar el formulario después de enviar
      },
      (error) => {
        console.log(error.text)
        alert("Error al enviar el email. Por favor, inténtalo de nuevo.")
      },
    )
  }

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">CONTACTO</h1>
      <p className="contact-subtitle">¡Si quieres colaborar conmigo no dudes en contactarte!</p>

      <div className="contact-content">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="your_name" className="form-input" placeholder="Tu Nombre" required />
          <input type="email" name="your_email" className="form-input" placeholder="Tu Email" required />
          <textarea name="your_message" className="form-textarea" rows={6} placeholder="Tu Mensaje" required />
          <button type="submit" className="submit-button">
            <Send size={20} /> Enviar Mensaje
          </button>
        </form>

        <div className="contact-info">
          <h3 className="info-heading">Encuéntrame en:</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/alberto-sosa-/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Perfil de LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/Albertososa753"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Perfil de GitHub"
            >
              <Github size={32} />
            </a>
            <a href="/AlbertoSosaCV.pdf" download className="social-link" aria-label="Descargar Curriculum Vitae">
              <FileText size={32} />
            </a>
          </div>
          <p className="email-display">
            O envíame un correo directamente a: <br />
            <a href="mailto:tu.email@example.com" className="direct-email-link">
              tu.email@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
