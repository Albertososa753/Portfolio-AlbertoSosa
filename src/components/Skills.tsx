"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "../style/skills.css";

// Componente de texto con efecto typing
const TypingText = ({
  text,
  delay = 0,
  speed = 30,
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

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);

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

    const elements = skillsRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "JavaScript", src: "/assets/svg/js.svg" },
        { name: "C#", src: "/assets/svg/cshar.svg" },
      ],
    },
    {
      title: "Desarrollo Front-End",
      skills: [
        { name: "HTML", src: "/assets/svg/front/html.svg" },
        { name: "CSS", src: "/assets/svg/front/css.svg" },
        { name: "Angular", src: "/assets/svg/front/angular.svg" },
        { name: "Bootstrap", src: "/assets/svg/front/bo.svg" },
        { name: "React", src: "/assets/svg/front/react.svg" },
        { name: "Redux", src: "/assets/svg/front/redux.svg" },
        { name: "Sass", src: "/assets/svg/front/scss.svg" },
      ],
    },
    {
      title: "Desarrollo Back-End",
      skills: [
        { name: "Node.js", src: "/assets/svg/back/node.svg" },
        { name: "Express", src: "/assets/svg/back/express.svg" },
        { name: "Sequelize", src: "/assets/svg/back/sequelize.svg" },
        { name: "PostgreSQL", src: "/assets/svg/back/post.svg" },
        { name: "MongoDB", src: "/assets/svg/back/mongodb.svg" },
        { name: ".NET", src: "/assets/svg/back/net.svg" },
        { name: "Entity Framework", src: "/assets/svg/back/entity_image.svg" },
        { name: "Docker", src: "/assets/svg/back/docker.svg" },
      ],
    },
    {
      title: "Metodologías Ágiles",
      skills: [
        { name: "Git", src: "/assets/svg/agiles/git.svg" },
        { name: "GitHub", src: "/assets/svg/agiles/github.svg" },
        { name: "Trello", src: "/assets/svg/agiles/trello.svg" },
        { name: "Scrum", src: "/assets/svg/agiles/scrum.svg" },
      ],
    },
  ];

  return (
    <section id="skills" ref={skillsRef}>
      {/* Efectos de fondo */}
      <div className="skills-background">
        <div className="bg-grid"></div>
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`floating-shape shape-${i + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="skills-header animate-on-scroll">
        <h2 className="section-title">
          <TypingText text="LO QUE HAGO" delay={0} speed={30} />
        </h2>
        <p className="section-description">
          Soy un desarrollador web con experiencia en la creación de sitios web
          atractivos y funcionales. Tengo una fuerte pasión por el aprendizaje
          constante, siempre buscando mejorar mis habilidades y explorar nuevas
          tecnologías. Además, disfruto enormemente trabajando en proyectos en
          equipo, donde creo que la colaboración y la sinergia impulsan la
          creatividad y el éxito.
        </p>
      </div>

      {/* Categorías principales */}
      <div className="skills-categories">
        <div className="category-card animate-on-scroll">
          <div className="card-glow"></div>
          <div className="category-icon-container">
            <Image
              src="/assets/Logos/ui-design.png"
              alt="Diseñador Web"
              width={80}
              height={80}
              className="category-icon"
            />
          </div>
          <h3 className="category-title">Diseñador Web</h3>
          <p className="category-description">
            Gran prioridad a la experiencia del usuario, creando interfaces
            intuitivas y atractivas.
          </p>
          <div className="card-particles">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}></div>
            ))}
          </div>
        </div>

        <div className="category-card animate-on-scroll">
          <div className="card-glow"></div>
          <div className="category-icon-container">
            <Image
              src="/assets/Logos/back.png"
              alt="Perfeccionista de Código"
              width={80}
              height={80}
              className="category-icon"
            />
          </div>
          <h3 className="category-title">Perfeccionista de Código</h3>
          <p className="category-description">
            Procuro el perfecto funcionamiento de la aplicación, con código
            limpio y optimizado.
          </p>
          <div className="card-particles">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Título de skills */}

      <h2 className="section-title skills-title-secondary animate-on-scroll">
        <TypingText text="SKILLS" delay={10} speed={50} />
      </h2>

      {/* Grid de habilidades técnicas */}
      <div className="tech-skills-grid">
        {skillGroups.map((group, idx) => (
          <div
            className="skill-group animate-on-scroll"
            key={idx}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <div className="group-glow"></div>
            <h3 className="skill-group-title">{group.title}</h3>
            <div className="skill-icons">
              {group.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-icon-container">
                    <Image
                      src={skill.src || "/placeholder.svg"}
                      alt={skill.name}
                      width={50}
                      height={50}
                      className="tech-icon"
                    />
                  </div>
                  <span className="skill-label">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="group-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
