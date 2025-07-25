"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importar estilos base del carrusel
import { X, Github } from "lucide-react"; // Importar iconos de Lucide React
import "@/utils/ImageCarouselModal.css"; // Nuevo archivo de estilos

interface Proyecto {
  titulo: string;
  duracion: string;
  rol: string;
  descripcion: string;
  tecnologias: string;
  enlaces: {
    github: string;
    // Puedes añadir más enlaces aquí si es necesario, por ejemplo, 'demo': string;
  };
}
const modalVariants = {
  hidden:   { opacity: 0, scale: 0.95 },
  visible:  {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit:     {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" },
  },
} as Variants;

interface ModalCarouselProps {
  images: string[];
  proyecto: Proyecto;
  closeModal: () => void;
}

export default function ModalCarousel({
  images,
  proyecto,
  closeModal,
}: ModalCarouselProps) {
  // Animación para la aparición del modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      initial="hidden" // ahora es perfectamente válido
      animate="visible"
      exit="exit"
      className="modal-carousel-container"
    >
      <button
        className="modal-close-button"
        onClick={closeModal}
        aria-label="Cerrar modal"
      >
        <X size={28} />
      </button>

      <div className="modal-content-wrapper">
        <div className="modal-image-carousel">
          <Carousel
            showThumbs={false}
            infiniteLoop
            useKeyboardArrows
            dynamicHeight
          >
            {images.map((src, idx) => (
              <div key={idx} className="carousel-image-wrapper">
                <Image
                  src={
                    src ||
                    "/placeholder.svg?height=600&width=800&text=Project+Image"
                  }
                  alt={`${proyecto.titulo} - Imagen ${idx + 1}`}
                  fill
                  style={{ objectFit: "contain" }} // Asegura que la imagen se ajuste sin recortarse
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="modal-project-details">
          <h2 className="project-detail-title">{proyecto.titulo}</h2>

          <div className="detail-group">
            <p className="detail-label">Duración:</p>
            <p className="detail-value">{proyecto.duracion}</p>
          </div>

          <div className="detail-group">
            <p className="detail-label">Rol:</p>
            <p className="detail-value">{proyecto.rol}</p>
          </div>

          <div className="detail-group description-group">
            <p className="detail-label">Descripción:</p>
            <p className="detail-value description-text">
              {proyecto.descripcion}
            </p>
          </div>

          <div className="detail-group">
            <p className="detail-label">Tecnologías:</p>
            <p className="detail-value technologies-text">
              {proyecto.tecnologias}
            </p>
          </div>

          {proyecto.enlaces.github && (
            <a
              href={proyecto.enlaces.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
              aria-label={`Ver código de ${proyecto.titulo} en GitHub`}
            >
              <Github size={20} /> Ver en GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
