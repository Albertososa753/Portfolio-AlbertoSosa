"use client";

import TypingText from "./TypingText";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../style/skills.css";

export default function Skills() {
  const skillsRef = useScrollReveal<HTMLElement>();

  const skillGroups = [
    {
      title: "Lenguajes",
      icon: "code",
      skills: [
        {
          name: "JavaScript",
          src: "https://cdn.simpleicons.org/javascript",
          color: "#F7DF1E",
        },
        {
          name: "TypeScript",
          src: "https://cdn.simpleicons.org/typescript",
          color: "#3178C6",
        },
      ],
    },
    {
      title: "Front-End",
      icon: "layout",
      skills: [
        {
          name: "Next.js",
          src: "https://cdn.simpleicons.org/nextdotjs",
          color: "#ffffff",
        },
        {
          name: "React",
          src: "https://cdn.simpleicons.org/react",
          color: "#61DAFB",
        },
        {
          name: "Redux",
          src: "https://cdn.simpleicons.org/redux",
          color: "#764ABC",
        },
        {
          name: "Angular",
          src: "https://cdn.simpleicons.org/angular",
          color: "#DD0031",
        },
        {
          name: "Sass",
          src: "https://cdn.simpleicons.org/sass",
          color: "#CC6699",
        },
        {
          name: "Tailwind",
          src: "https://cdn.simpleicons.org/tailwindcss",
          color: "#06B6D4",
        },
        {
          name: "Bootstrap",
          src: "https://cdn.simpleicons.org/bootstrap",
          color: "#7952B3",
        },
      ],
    },
    {
      title: "Back-End",
      icon: "server",
      skills: [
        {
          name: "Node.js",
          src: "https://cdn.simpleicons.org/nodedotjs",
          color: "#339933",
        },
        {
          name: "Express",
          src: "https://cdn.simpleicons.org/express",
          color: "#ffffff",
        },
        {
          name: "Sequelize",
          src: "https://cdn.simpleicons.org/sequelize",
          color: "#52B0E7",
        },
        {
          name: "NestJS",
          src: "https://cdn.simpleicons.org/nestjs",
          color: "#E0234E",
        },
        {
          name: "Fastify",
          src: "https://cdn.simpleicons.org/fastify",
          color: "#ffffff",
        },
        {
          name: "Prisma",
          src: "https://cdn.simpleicons.org/prisma",
          color: "#2D3748",
        },
        {
          name: "PostgreSQL",
          src: "https://cdn.simpleicons.org/postgresql",
          color: "#4169E1",
        },
        {
          name: "MongoDB",
          src: "https://cdn.simpleicons.org/mongodb",
          color: "#47A248",
        },
        {
          name: "Docker",
          src: "https://cdn.simpleicons.org/docker",
          color: "#2496ED",
        },
      ],
    },
    {
      title: "Mobile",
      icon: "smartphone",
      skills: [
        {
          name: "React Native",
          src: "https://cdn.simpleicons.org/react",
          color: "#61DAFB",
        },
        {
          name: "Expo",
          src: "https://cdn.simpleicons.org/expo",
          color: "#000020",
        },
      ],
    },
    {
      title: "Herramientas",
      icon: "git",
      skills: [
        {
          name: "Git",
          src: "https://cdn.simpleicons.org/git",
          color: "#F05032",
        },
        {
          name: "GitHub",
          src: "https://cdn.simpleicons.org/github",
          color: "#ffffff",
        },
        {
          name: "Trello",
          src: "https://cdn.simpleicons.org/trello",
          color: "#0052CC",
        },
        {
          name: "Postman",
          src: "https://cdn.simpleicons.org/postman",
          color: "#FF6C37",
        },
      ],
    },
  ];

  return (
    <section id="skills" ref={skillsRef}>
      {/* Efectos de fondo mejorados */}
      <div className="skills-background">
        <div className="bg-gradient-orb orb-1"></div>
        <div className="bg-gradient-orb orb-2"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="hola">
        {/* Header mejorado */}
        <div className="skills-header animate-on-scroll">
          <h2 className="section-title">
            <TypingText text="LO QUE HAGO" delay={0} speed={40} />
          </h2>
          <p className="section-description">
            Soy un programador con experiencia en desarrollo de aplicaciones web
            y moviles, enfocado en construir soluciones funcionales, bien
            estructuradas y con buena experiencia de uso. Disfruto mucho
            programar y mejorar constantemente mis habilidades. Tambien disfruto
            enormemente trabajar en equipo, ya que ademas de aportar mis
            conocimientos, valoro mucho la oportunidad de aprender de mis
            companeros y contribuir a un ambiente de trabajo positivo,
            colaborativo y orientado al crecimiento conjunto.
          </p>
        </div>

        {/* Cards de especialidades mejoradas */}
        <div className="skills-categories">
          <div className="category-card animate-on-scroll">
            <div className="card-icon-wrapper">
              <div className="card-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
            </div>
            <h3 className="category-title">Disenador Web</h3>
            <p className="category-description">
              Gran prioridad a la experiencia del usuario, creando interfaces
              intuitivas y atractivas.
            </p>
            <div className="card-corner"></div>
          </div>

          <div className="category-card animate-on-scroll">
            <div className="card-icon-wrapper">
              <div className="card-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polyline points="16,18 22,12 16,6" />
                  <polyline points="8,6 2,12 8,18" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                </svg>
              </div>
            </div>
            <h3 className="category-title">Perfeccionista de Codigo</h3>
            <p className="category-description">
              Procuro el perfecto funcionamiento de la aplicacion, con codigo
              limpio y optimizado.
            </p>
            <div className="card-corner"></div>
          </div>
        </div>

        {/* Titulo de skills */}
        <div className="skills-section-header animate-on-scroll">
          <h2 className="section-title skills-title-secondary">
            <TypingText text="SKILLS" delay={10} speed={60} />
          </h2>
        </div>

        {/* Grid de habilidades tecnicas mejorado */}
        <div className="tech-skills-grid">
          {skillGroups.map((group, idx) => (
            <div
              className="skill-group animate-on-scroll"
              key={idx}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="skill-group-header">
                <h3 className="skill-group-title ">{group.title}</h3>
              </div>
              <div className="skill-icons">
                {group.skills.map((skill, i) => (
                  <div
                    className="skill-item"
                    key={i}
                    style={
                      { "--skill-color": skill.color } as React.CSSProperties
                    }
                  >
                    <div className="skill-icon-container">
                      <img
                        src={skill.src}
                        alt={skill.name}
                        width={36}
                        height={36}
                        className="tech-icon"
                        loading="lazy"
                      />
                    </div>
                    <span className="skill-label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
