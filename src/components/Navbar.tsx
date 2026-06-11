"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../style/navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll2 = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* Línea de gradiente superior */}
      <div className="navbar-gradient-line"></div>

      {/* Logo mejorado */}
      <div className="logo" onClick={() => handleScroll2("intro")}>
        {" "}
        <div className="logo-icon">
          <div className="logo-core"></div>
          <div className="logo-ring"></div>
          <div className="logo-ring logo-ring-2"></div>
        </div>
        <span className="logo-text">
          <span className="logo-letter">A</span>
          <span className="logo-letter">S</span>
        </span>
      </div>

      {/* Menú desktop */}
      <div className="desktop-menu">
        <Link
          activeClass="active"
          to="intro"
          spy
          smooth
          offset={-100}
          duration={500}
          className="menu-item"
        >
          <span className="menu-text">Inicio</span>
          <div className="menu-indicator"></div>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy
          smooth
          offset={-50}
          duration={500}
          className="menu-item"
        >
          <span className="menu-text">Acerca de</span>
          <div className="menu-indicator"></div>
        </Link>
        <Link
          activeClass="active"
          to="proyects"
          spy
          smooth
          offset={-50}
          duration={500}
          className="menu-item"
        >
          <span className="menu-text">Portfolio</span>
          <div className="menu-indicator"></div>
        </Link>
      </div>

      {/* Botón de contacto mejorado */}
      <button className="contact-btn" onClick={() => handleScroll2("contact")}>
        <span className="contact-btn-bg"></span>
        <span className="contact-btn-text">Contactame</span>
        <svg
          className="contact-btn-arrow"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      {/* Botón menú móvil mejorado */}
      <div
        className={`mobile-menu-btn ${showMenu ? "active" : ""}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>

      {/* Menú móvil mejorado */}
      <div className={`mobile-menu ${showMenu ? "show" : ""}`}>
        <div
          className="mobile-menu-backdrop"
          onClick={() => setShowMenu(false)}
        ></div>
        <div className="mobile-menu-content">
          <Link
            activeClass="active"
            to="intro"
            spy
            smooth
            offset={-100}
            duration={500}
            className="mobile-menu-item"
            onClick={() => handleScroll2("intro")}
          >
            <span className="mobile-item-number">01</span>
            <span className="mobile-item-text">Inicio</span>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy
            smooth
            offset={-50}
            duration={500}
            className="mobile-menu-item"
            onClick={() => handleScroll2("skills")}
          >
            <span className="mobile-item-number">02</span>
            <span className="mobile-item-text">Acerca de</span>
          </Link>
          <Link
            activeClass="active"
            to="proyects"
            spy
            smooth
            offset={-50}
            duration={500}
            className="mobile-menu-item"
            onClick={() => handleScroll2("proyects")}
          >
            <span className="mobile-item-number">03</span>
            <span className="mobile-item-text">Portfolio</span>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy
            smooth
            offset={-50}
            duration={500}
            className="mobile-menu-item"
            onClick={() => handleScroll2("contact")}
          >
            <span className="mobile-item-number">04</span>
            <span className="mobile-item-text">Contacto</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
