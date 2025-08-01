"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import type { Project } from "../types/project.ts";
import "../style/proyects.css";

// Componente de texto con efecto typing
const TypingText = ({
  text,
  delay = 0,
  speed = 100,
}: {
  text: string;
  delay?: number;
  speed?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay + currentIndex * speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  return <span>{displayText}</span>;
};

// Lista de proyectos con múltiples imágenes
const proyectos: Project[] = [
  {
    titulo: "Venta Quinta San Nicolás",
    duracion: "01/06/2025 - 15/07/2025",
    rol: "Desarrollador Individual",
    descripcion:
      "Desarrollé un sitio web con Next.js para promocionar la venta de una casa quinta en San Nicolás de los Arroyos, implementando técnicas avanzadas de SEO.",
    tecnologias: ["Next.js", "TypeScript", "SEO"],
    imagenes: ["/assets/quintaSN.png"],
    enlaces: {  demo: "https://venta-quinta.vercel.app/" },
  },
  {
    titulo: "Venta Propiedad Céntrica",
    duracion: "01/06/2025 - 15/07/2025",
    rol: "Desarrollador Individual",
    descripcion:
      "Sitio web creado con Next.js, optimizado para SEO, enfocado en facilitar el descubrimiento por palabras claves relacionadas con la venta de una propiedad céntrica.",
    tecnologias: ["Next.js", "TypeScript", "SEO"],
    imagenes: ["/assets/propiedadSN.png"],
    enlaces: {  demo: "https://venta-propiedad.vercel.app/" },
  },
  {
    titulo: "Heladería Sibera",
    duracion: "02/01/2025 - 15/03/2025",
    rol: "Desarrollador Individual",
    descripcion:
      "Aplicación web completa para una heladería, con backend en Node.js y Express, frontend en Next.js y gestión de imágenes con Firebase.",
    tecnologias: ["Node.js", "Express", "Sequelize", "Firebase", "Next.js"],
    imagenes: ["/assets/heladeriaSib.png"],
    enlaces: {  demo: "https://www.heladeriasiberia.com/" },
  },
  {
    titulo: "Rifa para Influencer",
    duracion: "11/08/2023 - 18/08/2023",
    rol: "Desarrollador Backend",
    descripcion:
      "Backend desarrollado con Node.js y Express, integrado con Mercado Pago para gestionar pagos y registros seguros en tiempo real.",
    tecnologias: ["Node.js", "Express", "Sequelize", "Mercado Pago API"],
    imagenes: ["/assets/sorteo.png", "/assets/sorteo2.png"],
    enlaces: { github: "https://github.com/Albertososa753/sorteoProduccionBack" },
  },
  {
    titulo: "Aplicación de Ventas",
    duracion: "19/12/2023 - 26/12/2023",
    rol: "Desarrollador Individual",
    descripcion:
      "Aplicación Angular empresarial que permite gestionar perfiles de vendedores, optimizando la administración operativa.",
    tecnologias: ["Angular", "Angular Material", "TypeScript", "Java"],
    imagenes: [
      "/assets/EIVSoftware/s1.png",
      "/assets/EIVSoftware/s2.png",
      "/assets/EIVSoftware/s3.png",
      "/assets/EIVSoftware/s4.png",
    ],
    enlaces: {
      github: "https://github.com/Albertososa753/clientEIVSoftware.git",
    },
  },
  {
    titulo: "Proyecto ABP",
    duracion: "01/09/2023 - 16/09/2023",
    rol: "Desarrollador Individual",
    descripcion:
      "Plataforma para gestionar viajes y pasajeros desarrollada en Angular y .NET, como parte de un desafío técnico laboral.",
    tecnologias: [
      "Angular",
      "ABP Framework",
      "C#",
      ".NET Entity Framework",
      "Docker",
    ],
    imagenes: [
      "/assets/proyectoABP/a1.png",
      "/assets/proyectoABP/a2.png",
      "/assets/proyectoABP/a3.png",
      "/assets/proyectoABP/a4.png",
      "/assets/proyectoABP/a5.png",
      "/assets/proyectoABP/a6.png",
      "/assets/proyectoABP/a7.png",
      "/assets/proyectoABP/a8.png",
      "/assets/proyectoABP/a9.png",
      "/assets/proyectoABP/a10.png",
    ],
    enlaces: { github: "https://github.com/Albertososa753/ProyectoABP" },
  },
  {
    titulo: "Portfolio Personal",
    duracion: "2023",
    rol: "Desarrollador Frontend",
    descripcion:
      "Sitio personal construido con React, que incluye secciones interactivas y animaciones personalizadas.",
    tecnologias: ["React", "Framer Motion", "EmailJS", "CSS Modules"],
    imagenes: ["/assets/Portfolio/p.png"],
    enlaces: {  demo: "https://porfolio-alberto-sosa.vercel.app/" },
  },
  {
    titulo: "CEIBO DIGITAL",
    duracion: "11/07/2023 - 04/08/2023",
    rol: "Desarrollador en equipo",
    descripcion:
      "Web app empresarial para gestionar novedades e informes, desarrollada en React y Express.",
    tecnologias: [
      "React",
      "Redux",
      "JWT",
      "Vite",
      "NextUI",
      "Express",
      "MongoDB",
    ],
    imagenes: [
      "/assets/CeiboDigital/c1.png",
      "/assets/CeiboDigital/c2.png",
      "/assets/CeiboDigital/c3.png",
      "/assets/CeiboDigital/c4.png",
      "/assets/CeiboDigital/c5.png",
      "/assets/CeiboDigital/c6.png",
      "/assets/CeiboDigital/c7.png",
      "/assets/CeiboDigital/c8.png",
      "/assets/CeiboDigital/c9.png",
      "/assets/CeiboDigital/c10.png",
      "/assets/CeiboDigital/c11.png",
    ],
    enlaces: { github: "#" },
  },
  {
    titulo: "Ropita ECommerce",
    duracion: "27/06/2023 - 07/07/2023",
    rol: "Desarrollador en equipo",
    descripcion:
      "E-commerce para ropa con búsqueda avanzada y gestión de usuarios, construido con React y Node.js.",
    tecnologias: ["React", "React-Redux", "Node.js", "Express", "Sequelize"],
    imagenes: [
      "/assets/ECommerce/e1.png",
      "/assets/ECommerce/e2.png",
      "/assets/ECommerce/e3.png",
      "/assets/ECommerce/e4.png",
      "/assets/ECommerce/e5.png",
      "/assets/ECommerce/e6.png",
    ],
    enlaces: { github: "https://github.com/Albertososa753/Ropita-ECommerce" },
  },
  {
    titulo: "TMDB Movie Search",
    duracion: "16/06/2023 - 23/06/2023",
    rol: "Desarrollador Individual",
    descripcion:
      "Aplicación para buscar películas utilizando la API de TMDB, con autenticación y gestión de usuarios.",
    tecnologias: [
      "React",
      "React-Redux",
      "NextUI",
      "Node.js",
      "Express",
      "Sequelize",
    ],
    imagenes: [
      "/assets/TMDB/t1.png",
      "/assets/TMDB/t2.png",
      "/assets/TMDB/t3.png",
      "/assets/TMDB/t4.png",
      "/assets/TMDB/t5.png"
    ],
    enlaces: { github: "https://github.com/Albertososa753/TMDB" },
  },
];

// Props para el modal de carousel de imágenes
interface ImageCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectTitle: string;
}

// Modal de carousel de imágenes
const ImageCarouselModal = ({
  isOpen,
  onClose,
  images,
  projectTitle,
}: ImageCarouselModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence >
      <motion.div
        className="image-modal-overlay"
    
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="image-modal-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="image-carousel-container">
            <button className="carousel-nav-btn prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>

            <div className="carousel-image-wrapper">
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`${projectTitle} - Imagen ${currentImageIndex + 1}`}
                width={800}
                height={600}
                className="carousel-image"
                priority
              />
            </div>

            <button className="carousel-nav-btn next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="image-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>

          <div className="image-counter">
            {currentImageIndex + 1} / {images.length}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Props para el modal de detalles del proyecto
interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

// Modal de detalles del proyecto
const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  if (!isOpen || !project) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal-content"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <h2 className="modal-title">{project.titulo}</h2>
            </div>

            <div className="modal-body">
              <div className="modal-image-section">
                <div
                  className="modal-main-image"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <Image
                    src={project.imagenes[0] || "/placeholder.svg"}
                    alt={project.titulo}
                    width={800}
                    height={400}
                    className="main-project-image"
                    priority
                  />
                  <div className="image-overlay-click">
                    <span>
                      Ver todas las imágenes ({project.imagenes.length})
                    </span>
                  </div>
                </div>
              </div>

              <div className="modal-info-section">
                <div className="project-meta">
                  <div className="meta-row">
                    <span className="meta-label">Rol:</span>
                    <span className="meta-value">{project.rol}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Duración:</span>
                    <span className="meta-value">{project.duracion}</span>
                  </div>
                </div>

                <div className="project-description">
                  <h3>Descripción</h3>
                  <p>{project.descripcion}</p>
                </div>

                <div className="project-technologies">
                  <h3>Tecnologías</h3>
                  <div className="tech-tags">
                    {project.tecnologias.map((tech: string, idx: number) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.enlaces.github && (
                    <a
                      href={project.enlaces.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.enlaces.demo && (
                    <a
                      href={project.enlaces.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <ExternalLink size={20} />
                      <span>Sitio Web</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <ImageCarouselModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        images={project.imagenes}
        projectTitle={project.titulo}
      />
    </>
  );
};

export default function Proyects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % proyectos.length);
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + proyectos.length) % proyectos.length
    );
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="proyects" className="proyects-section" ref={sectionRef}>
        {/* Efectos de fondo */}
        <div className="projects-background">
          <div className="bg-circuit"></div>
          <div className="floating-elements">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`floating-element element-${i + 1}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Título */}
        <div className="projects-header animate-on-scroll">
          <h1 className="projects-title">
            <TypingText text="MIS PROYECTOS" delay={0} speed={30} />
          </h1>
          <div className="title-underline"></div>
        </div>

        {/* Carousel de proyectos */}
        <div className="projects-carousel-container animate-on-scroll">
          <button className="carousel-nav-btn prev" onClick={prevProject}>
            <ChevronLeft size={32} />
          </button>

          <div className="projects-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                className="project-card"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                onClick={() => openModal(proyectos[currentProject])}
              >
                <div className="project-card-image">
                  <Image
                    src={
                      proyectos[currentProject].imagenes[0] ||
                      "/placeholder.svg"
                    }
                    alt={proyectos[currentProject].titulo}
                    width={800}
                    height={400}
                    className="card-image"
                    priority
                  />
                  <div className="card-overlay">
                    <span className="view-details">Ver detalles</span>
                  </div>
                </div>

                <div className="project-card-content">
                  <div className="project-number">
                    {String(currentProject + 1).padStart(2, "0")}
                  </div>
                  <h3 className="project-card-title">
                    {proyectos[currentProject].titulo}
                  </h3>
                  <p className="project-card-role">
                    {proyectos[currentProject].rol}
                  </p>
                  <p className="project-card-date">
                    {proyectos[currentProject].duracion}
                  </p>
                  <div className="project-card-tech">
                    {proyectos[currentProject].tecnologias
                      .slice(0, 3)
                      .map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    {proyectos[currentProject].tecnologias.length > 3 && (
                      <span className="tech-badge more">
                        +{proyectos[currentProject].tecnologias.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-nav-btn next" onClick={nextProject}>
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Indicadores del carousel */}
        <div className="carousel-indicators">
          {proyectos.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentProject ? "active" : ""
              }`}
              onClick={() => setCurrentProject(index)}
            />
          ))}
        </div>
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
}
