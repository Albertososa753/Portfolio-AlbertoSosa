// src/components/Skills.tsx
'use client';

import Image from 'next/image';
import '@/style/skills.css';

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-header">
        <h2 className="section-title">LO QUE HAGO</h2>
        <p className="section-description">
          Soy un desarrollador web con experiencia en la creación de sitios web atractivos y funcionales. Tengo una
          fuerte pasión por el aprendizaje constante, siempre buscando mejorar mis habilidades y explorar nuevas
          tecnologías. Además, disfruto enormemente trabajando en proyectos en equipo, donde creo que la colaboración y
          la sinergia impulsan la creatividad y el éxito.
        </p>
      </div>

      <div className="skills-categories">
        <div className="category-card tooltip-container">
          <Image
            src="/assets/Logos/ui-design.png"
            alt="Diseñador Web"
            width={80}
            height={80}
            className="category-icon"
          />
          <span className="tooltip-text">Diseñador Web</span>
          <h3 className="category-title">Diseñador Web</h3>
          <p className="category-description">
            Gran prioridad a la experiencia del usuario, creando interfaces intuitivas y atractivas.
          </p>
        </div>
        <div className="category-card tooltip-container">
          <Image
            src="/assets/Logos/back.png"
            alt="Perfeccionista de Código"
            width={80}
            height={80}
            className="category-icon"
          />
          <span className="tooltip-text">Perfeccionista de Código</span>
          <h3 className="category-title">Perfeccionista de Código</h3>
          <p className="category-description">
            Procuro el perfecto funcionamiento de la aplicación, con código limpio y optimizado.
          </p>
        </div>
      </div>

      <h2 className="section-title skills-title-secondary">SKILLS</h2>

      <div className="tech-skills-grid">
        {[
          { title: 'Lenguajes de Programación', icons: [
            { src: '/assets/svg/js.svg', alt: 'JavaScript' },
            { src: '/assets/svg/cshar.svg', alt: 'C#' },
          ] },
          { title: 'Desarrollo Front-End', icons: [
            { src: '/assets/svg/front/html.svg', alt: 'HTML' },
            { src: '/assets/svg/front/css.svg', alt: 'CSS' },
            { src: '/assets/svg/front/angular.svg', alt: 'Angular' },
            { src: '/assets/svg/front/bo.svg', alt: 'Bootstrap' },
            { src: '/assets/svg/front/react.svg', alt: 'React' },
            { src: '/assets/svg/front/redux.svg', alt: 'Redux' },
            { src: '/assets/svg/front/scss.svg', alt: 'Sass' },
          ] },
          { title: 'Desarrollo Back-End', icons: [
            { src: '/assets/svg/back/node.svg', alt: 'Node.js' },
            { src: '/assets/svg/back/express.svg', alt: 'Express' },
            { src: '/assets/svg/back/sequelize.svg', alt: 'Sequelize' },
            { src: '/assets/svg/back/post.svg', alt: 'PostgreSQL' },
            { src: '/assets/svg/back/mongodb.svg', alt: 'MongoDB' },
            { src: '/assets/svg/back/net.svg', alt: '.NET' },
            { src: '/assets/svg/back/entity_image.svg', alt: 'Entity Framework' },
            { src: '/assets/svg/back/docker.svg', alt: 'Docker' },
          ] },
          { title: 'Metodologías Ágiles', icons: [
            { src: '/assets/svg/agiles/git.svg', alt: 'Git' },
            { src: '/assets/svg/agiles/github.svg', alt: 'GitHub' },
            { src: '/assets/svg/agiles/trello.svg', alt: 'Trello' },
            { src: '/assets/svg/agiles/scrum.svg', alt: 'Scrum' },
          ] },
        ].map((group, idx) => (
          <div className="skill-group" key={idx}>
            <h3 className="skill-group-title">{group.title}</h3>
            <div className="skill-icons">
              {group.icons.map((icon, i) => (
                <div className="tooltip-container" key={i}>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={50}
                    height={50}
                    className="tech-icon"
                  />
                  <span className="tooltip-text">{icon.alt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
