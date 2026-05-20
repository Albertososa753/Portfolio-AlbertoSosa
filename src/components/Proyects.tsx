"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Calendar,
  User,
  Layers,
  Play,
} from "lucide-react";
import Image from "next/image";
import type { Project } from "../types/project.ts";
import "../style/proyects.css";

// Lista de proyectos con múltiples imágenes
const proyectos: Project[] = [
  {
    titulo: "QrClick",
    duracion: "02/01/2026 - 31/03/2026",
    rol: "Desarrollador Individual",
    descripcion:
      "Sistema complejo para administración de eventos, venta y validación de entradas mediante códigos QR únicos en tiempo real. Incluye tickets pagos y gratuitos, distribución de entradas para colaboradores, sistema de colas para soportar picos de demanda, panel administrativo con roles y aplicación móvil para validación mediante escaneo QR o ingreso manual. Integración con Mercado Pago para procesamiento de pagos y registro automático de tickets.",
    tecnologias: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "React Native",
      "Expo",
      "BullMQ",
      "Mercado Pago API",
    ],
    imagenes: [
      "/assets/qrclick.png",
      "/assets/QRCLICK/qrclick1.png",
      "/assets/QRCLICK/qrclick2.png",
    ],
    enlaces: {
      demo: "https://qrclick.com.ar",
    },
  },
  {
    titulo: "QrClick Validator",
    duracion: "02/01/2026 - 31/03/2026",
    rol: "Desarrollador Individual",
    descripcion:
      "Aplicación móvil responsive con interfaces adaptadas específicamente para Android e iOS, ajustando automáticamente la distribución y visualización de componentes según el sistema operativo, desarrollada para la validación y control de accesos en eventos. Incluye sistema de autenticación para validadores, sección informativa del evento, visualización completa de tickets para validación manual en caso de pérdida de conexión y sistema de escaneo mediante cámara para lectura de códigos QR en tiempo real.  ",
    tecnologias: ["TypeScript", "React Native", "Expo", "Expo-Camera"],
    imagenes: ["/assets/ChatGPT Image 19 may 2026, 04_03_32.png"],
    video: "/assets/qrclick-validator-demo.mp4",
    enlaces: {},
  },
  {
    titulo: "Heladería Sibera",
    duracion: "02/01/2025 - 15/03/2025",
    rol: "Desarrollador Individual",
    descripcion:
      "Sistema web de gestión de productos para una heladería, con panel administrativo para carga y actualización dinámica de helados, imágenes y catálogo online. Desarrollo de una interfaz moderna, visualmente atractiva y con animaciones avanzadas, enfocada en mejorar la experiencia del usuario y la presentación interactiva de los productos en tiempo real.",
    tecnologias: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express",
      "Sequelize",
      "Firebase",
      "PostgreSQL",
    ],
    imagenes: [
      "/assets/heladeriaSib.png",
      "/assets/SIBERIA/s3.png",
      "/assets/SIBERIA/s2.png",
      "/assets/SIBERIA/s1.png",
    ],
    enlaces: { demo: "https://www.heladeriasiberia.com/" },
  },
  {
    titulo: "Venta de Quinta en San Nicolás de los Arroyos",
    duracion: "01/06/2025 - 15/07/2025",
    rol: "Desarrollador Individual",
    descripcion:
      "Sitio web desarrollado para promocionar la venta de una casa quinta en San Nicolás de los Arroyos, enfocado en mejorar el posicionamiento en buscadores mediante técnicas avanzadas de SEO. El cliente necesitaba una alternativa digital efectiva para aumentar la visibilidad de la propiedad, por lo que se trabajó especialmente en la optimización para búsquedas por palabras clave relacionadas con quintas, inmuebles y ubicaciones específicas.",
    tecnologias: ["JavaScript", "Next.js", "TypeScript", "SEO"],
    imagenes: ["/assets/quintaVenta.png"],
    enlaces: { demo: "https://venta-quinta.vercel.app/" },
  },
  {
    titulo: "Venta de Propiedad en San Nicolás de los Arroyos",
    duracion: "01/06/2025 - 15/07/2025",
    rol: "Desarrollador Individual",
    descripcion:
      "Sitio web desarrollado para promocionar la venta de una propiedad céntrica, enfocado en mejorar el posicionamiento en buscadores mediante técnicas avanzadas de SEO. El cliente necesitaba una alternativa digital efectiva para aumentar la visibilidad de la propiedad, por lo que se trabajó especialmente en la optimización para búsquedas por palabras clave relacionadas con inmuebles y ubicaciones específicas.",
    tecnologias: ["JavaScript", "Next.js", "TypeScript", "SEO"],
    imagenes: ["/assets/propiedadSN.png"],
    enlaces: { demo: "https://venta-propiedad1.vercel.app/" },
  },

  {
    titulo: "Rifa para Influencer",
    duracion: "11/08/2023 - 18/08/2023",
    rol: "Desarrollador Backend",
    descripcion:
      "Sistema web desarrollado para automatizar la gestión de sorteos de un influencer, reemplazando un método manual de administración. La plataforma permite a los usuarios comprar uno o múltiples números mediante pagos integrados con Mercado Pago, mientras que el administrador puede gestionar participantes, realizar sorteos automáticamente, visualizar toda la información del ganador y repetir los sorteos las veces que sea necesario desde un panel de control.",
    tecnologias: [
      "JavaScript",
      "Node.js",
      "Express",
      "Sequelize",
      "Mercado Pago API",
    ],
    imagenes: ["/assets/sorteo.png"],
    enlaces: {
      github: "https://github.com/Albertososa753/sorteoProduccionBack",
    },
  },
  {
    titulo: "Aplicación de Ventas",
    duracion: "19/12/2023 - 26/12/2023",
    rol: "Desarrollador Individual",
    descripcion:
      "Aplicación Angular empresarial que permite gestionar perfiles de vendedores, optimizando la administración operativa.",
    tecnologias: ["TypeScript", "Angular", "Angular Material", "Java"],
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
      "C#",
      ".NET Entity Framework",
      "JavaScript",
      "Angular",
      "ABP Framework",
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
    tecnologias: [
      "JavaScript",
      "React",
      "Framer Motion",
      "EmailJS",
      "CSS Modules",
    ],
    imagenes: ["/assets/Portfolio/p.png"],
    enlaces: { demo: "https://porfolio-alberto-sosa.vercel.app/" },
  },
  {
    titulo: "CEIBO DIGITAL",
    duracion: "11/07/2023 - 04/08/2023",
    rol: "Desarrollador en equipo",
    descripcion:
      "Aplicación web empresarial desarrollada durante una pasantía en colaboración con un equipo de trabajo, a partir de los requerimientos de una empresa cliente. El sistema fue diseñado para gestionar novedades, informes y contenido interno de manera organizada, facilitando la administración de información y optimizando los procesos de comunicación dentro de la organización.",
    tecnologias: [
      "JavaScript",
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
    tecnologias: [
      "JavaScript",
      "React",
      "React-Redux",
      "Node.js",
      "Express",
      "Sequelize",
    ],
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
      "JavaScript",
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
      "/assets/TMDB/t5.png",
    ],
    enlaces: { github: "https://github.com/Albertososa753/TMDB" },
  },
];

// Props para el modal de carousel de imagenes y video
interface MediaCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  video?: string;
  projectTitle: string;
}

// Modal de carousel de imagenes y video
const MediaCarouselModal = ({
  isOpen,
  onClose,
  images,
  video,
  projectTitle,
}: MediaCarouselModalProps) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Crear array de media (video primero si existe, luego imágenes)
  const mediaItems = video
    ? [
        { type: "video", src: video },
        ...images.map((img) => ({ type: "image", src: img })),
      ]
    : images.map((img) => ({ type: "image", src: img }));

  const nextMedia = useCallback(() => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  }, [mediaItems.length]);

  const prevMedia = useCallback(() => {
    setCurrentMediaIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length,
    );
  }, [mediaItems.length]);

  useEffect(() => {
    if (isOpen) {
      setCurrentMediaIndex(0);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "ArrowLeft") prevMedia();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextMedia, prevMedia, onClose]);

  // Pausar video cuando cambia de slide
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [currentMediaIndex]);

  if (!isOpen) return null;

  const currentMedia = mediaItems[currentMediaIndex];

  return (
    <AnimatePresence>
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
            {mediaItems.length > 1 && (
              <button className="carousel-nav-btn prev" onClick={prevMedia}>
                <ChevronLeft size={24} />
              </button>
            )}

            <div className="carousel-image-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMediaIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="carousel-image-inner"
                >
                  {currentMedia.type === "video" ? (
                    <video
                      ref={videoRef}
                      src={currentMedia.src}
                      className="carousel-video"
                      controls
                      playsInline
                      preload="metadata"
                    >
                      Tu navegador no soporta el elemento de video.
                    </video>
                  ) : (
                    <Image
                      src={currentMedia.src || "/placeholder.svg"}
                      alt={`${projectTitle} - Imagen ${currentMediaIndex + 1}`}
                      width={1200}
                      height={800}
                      className="carousel-image"
                      priority
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {mediaItems.length > 1 && (
              <button className="carousel-nav-btn next" onClick={nextMedia}>
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {mediaItems.length > 1 && (
            <>
              <div className="image-indicators">
                {mediaItems.map((item, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentMediaIndex ? "active" : ""} ${item.type === "video" ? "video-indicator" : ""}`}
                    onClick={() => setCurrentMediaIndex(index)}
                    title={
                      item.type === "video" ? "Video" : `Imagen ${index + 1}`
                    }
                  />
                ))}
              </div>
              <div className="image-counter">
                {currentMedia.type === "video"
                  ? "🎬 Video"
                  : `Imagen ${video ? currentMediaIndex : currentMediaIndex + 1}`}{" "}
                / {mediaItems.length}
              </div>
            </>
          )}
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
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || isMediaModalOpen) return;
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isMediaModalOpen, onClose]);

  if (!isOpen || !project) return null;

  const mediaCount = (project.video ? 1 : 0) + project.imagenes.length;

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
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="modal-body">
              <div className="modal-image-section">
                <div
                  className="modal-main-image"
                  onClick={() => setIsMediaModalOpen(true)}
                >
                  {project.video ? (
                    <div className="modal-video-preview">
                      <video
                        src={project.video}
                        className="main-project-video"
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <div className="video-play-overlay">
                        <Play size={48} />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.imagenes[0] || "/placeholder.svg"}
                      alt={project.titulo}
                      width={800}
                      height={500}
                      className="main-project-image"
                      priority
                    />
                  )}
                  <div className="image-overlay-click">
                    {project.video ? <Play size={24} /> : <Layers size={24} />}
                    <span>
                      Ver{" "}
                      {project.video
                        ? "video y galería"
                        : project.imagenes.length > 1
                          ? "galería"
                          : "imagen"}{" "}
                      ({mediaCount})
                    </span>
                  </div>
                </div>
              </div>

              <div className="modal-info-section">
                <h2 className="modal-title">{project.titulo}</h2>

                <div className="project-meta">
                  <div className="meta-item">
                    <User size={16} />
                    <span>{project.rol}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{project.duracion}</span>
                  </div>
                </div>

                <div className="project-description">
                  <p>{project.descripcion}</p>
                </div>

                <div className="project-technologies">
                  <h4>Tecnologias</h4>
                  <div className="tech-tags">
                    {project.tecnologias.map((tech: string, idx: number) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.enlaces.github && project.enlaces.github !== "#" && (
                    <a
                      href={project.enlaces.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <Github size={18} />
                      <span>Codigo</span>
                    </a>
                  )}
                  {project.enlaces.demo && (
                    <a
                      href={project.enlaces.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <ExternalLink size={18} />
                      <span>Ver Sitio</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <MediaCarouselModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
        images={project.imagenes}
        video={project.video}
        projectTitle={project.titulo}
      />
    </>
  );
};

// Componente ProjectCard individual
interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      onClick={onClick}
    >
      <div className="project-card-image">
        <Image
          src={project.imagenes[0] || "/placeholder.svg"}
          alt={project.titulo}
          width={600}
          height={400}
          className="card-image"
        />

        <div className="card-overlay">
          <div className="overlay-content">
            <span className="view-details-btn">Ver Detalles</span>
          </div>
        </div>

        {project.imagenes.length > 1 && (
          <div className="images-count-badge">
            <Layers size={14} />
            <span>{project.imagenes.length}</span>
          </div>
        )}

        {project.video && (
          <div className="video-badge">
            <Play size={14} />
            <span>Video</span>
          </div>
        )}
      </div>

      <div className="project-card-content">
        <div className="card-header">
          <h3 className="project-card-title">{project.titulo}</h3>

          <div className="card-meta">
            <span className="meta-badge role">
              <User size={12} />
              {project.rol}
            </span>
          </div>
        </div>

        <p className="project-card-description">
          {project.descripcion}
        </p>

        <div className="project-card-tech">
          {project.tecnologias.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}

          {project.tecnologias.length > 3 && (
            <span className="tech-badge more">
              +{project.tecnologias.length - 3}
            </span>
          )}
        </div>

        <div className="card-footer">
          <div className="card-links">
            {project.enlaces.github &&
              project.enlaces.github !== "#" && (
                <a
                  href={project.enlaces.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                </a>
              )}

            {project.enlaces.demo && (
              <a
                href={project.enlaces.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <span className="card-date">
            <Calendar size={12} />
            {project.duracion.split(" - ")[0]}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Proyects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

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
            setHeaderVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="proyects" className="proyects-section" ref={sectionRef}>
        {/* Efectos de fondo */}
        <div className="projects-background">
          <div className="bg-gradient-orb orb-1"></div>
          <div className="bg-gradient-orb orb-2"></div>
          <div className="bg-grid-pattern"></div>
        </div>

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="projects-header"
          initial={{ opacity: 0 }}
          animate={headerVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="projects-title">Mis Proyectos</h1>
          <p className="projects-subtitle">
            Una selección de proyectos desarrollados para clientes y
            experiencias reales, enfocados en rendimiento, diseño y
            funcionalidad.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="projects-grid">
          {proyectos.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        {/* Contador total */}
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
}
