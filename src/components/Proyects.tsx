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
import type { Project } from "../types/project";
import { proyectos } from "../data/projects";
import "../style/proyects.css";


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
                    <div className="carousel-image-container">
                      <Image
                        src={currentMedia.src || "/placeholder.svg"}
                        alt={`${projectTitle} - Imagen ${currentMediaIndex + 1}`}
                        width={1200}
                        height={800}
                        className="carousel-image"
                        priority
                      />
                    </div>
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "0px 0px -120px 0px",
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
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

        <p className="project-card-description">{project.descripcion}</p>

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
            {project.enlaces.github && project.enlaces.github !== "#" && (
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
