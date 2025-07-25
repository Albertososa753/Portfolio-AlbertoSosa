"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image" // Importar Image de Next.js
import ModalCarousel from "@/utils/ModalCarousel" // Asumimos que este componente existe
import "@/style/proyects.css"

// Lista de proyectos con rutas públicas en /public/assets/...
const proyectos = [
  {
    titulo: "Aplicación de Ventas",
    duracion: "19/12/2023 - 26/12/2023",
    rol: "Desarrollador Individual",
    descripcion:
      "Presento una aplicación empresarial para gestionar vendedores de manera eficiente, con funciones de agregar, editar y eliminar perfiles. La interfaz intuitiva optimiza la administración del equipo de ventas, reflejando un enfoque profesional para mejorar la eficiencia operativa y la gestión de recursos en entornos empresariales.",
    tecnologias: "Angular | Angular Material | TypeScript | Java",
    imagenes: [
      "/assets/EIVSoftware/s1.png",
      "/assets/EIVSoftware/s2.png",
      "/assets/EIVSoftware/s3.png",
      "/assets/EIVSoftware/s4.png",
    ],
    enlaces: { github: "https://github.com/Albertososa753/clientEIVSoftware.git" },
  },
  {
    titulo: "Plataforma de E-commerce",
    duracion: "01/03/2023 - 15/04/2023",
    rol: "Desarrollador FullStack",
    descripcion:
      "Desarrollo de una plataforma de comercio electrónico completa, incluyendo catálogo de productos, carrito de compras, pasarela de pagos y panel de administración. Enfocado en la escalabilidad y la experiencia de usuario.",
    tecnologias: "React | Node.js | Express | MongoDB | Stripe",
    imagenes: [
      "/assets/project-placeholder-2.png",
      "/assets/project-placeholder-2.png",
      "/assets/project-placeholder-2.png",
    ],
    enlaces: { github: "https://github.com/yourusername/ecommerce-platform" },
  },
  {
    titulo: "Aplicación Móvil de Notas",
    duracion: "10/09/2022 - 20/10/2022",
    rol: "Desarrollador Móvil",
    descripcion:
      "Creación de una aplicación móvil intuitiva para tomar y organizar notas, con sincronización en la nube y funcionalidades offline. Diseño minimalista y rendimiento optimizado.",
    tecnologias: "React Native | Firebase | Redux",
    imagenes: [
      "/assets/project-placeholder-3.png",
      "/assets/project-placeholder-3.png",
      "/assets/project-placeholder-3.png",
    ],
    enlaces: { github: "https://github.com/yourusername/mobile-notes-app" },
  },
  // ...otros proyectos si los tienes
]

export default function Proyects() {
  const [dragConstraints, setDragConstraints] = useState({ left: -2600, right: 100 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  useEffect(() => {
    const updateDragConstraints = () => {
      const slider = document.querySelector(".slider") as HTMLElement
      if (slider) {
        const sliderWidth = slider.scrollWidth
        const containerWidth = slider.clientWidth
        setDragConstraints({ left: -(sliderWidth - containerWidth), right: 0 })
      }
    }

    updateDragConstraints() // Set initial constraints
    window.addEventListener("resize", updateDragConstraints) // Update on resize

    return () => window.removeEventListener("resize", updateDragConstraints)
  }, [])

  const openModal = (idx: number) => {
    setModalIndex(idx)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <section id="proyects" className="proyects-section">
      <h1 className="proyects-title">MIS PROYECTOS</h1>

      <div className="slider-wrapper">
        <motion.div className="slider" drag="x" dragConstraints={dragConstraints}>
          {proyectos.map((p, i) => (
            <motion.div className="project-card" key={i} onClick={() => openModal(i)}>
              <Image src={p.imagenes[0] || "/placeholder.svg"} alt={p.titulo} fill className="project-image" />
              <div className="project-overlay">
                <h3 className="project-overlay-title">{p.titulo}</h3>
                <button className="view-details-button">Ver Detalles</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay-bg">
          <ModalCarousel
            images={proyectos[modalIndex].imagenes}
            proyecto={proyectos[modalIndex]}
            closeModal={closeModal}
          />
        </div>
      )}
    </section>
  )
}
