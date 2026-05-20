"use client"

import { useState } from "react"
import { Link } from "react-scroll"
import "../style/navbar.css"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setShowMenu(false)
  }

  return (
    <nav className="navbar">
      {/* Logo futurista */}
      <div className="logo">
        <div className="logo-icon">
          <div className="logo-core"></div>
          <div className="logo-ring"></div>
        </div>
        <span className="logo-text">AS</span>
      </div>

      {/* Menú desktop */}
      <div className="desktop-menu">
        <Link activeClass="active" to="intro" spy smooth offset={-100} duration={500} className="menu-item">
          <span className="menu-text">Inicio</span>
          <div className="menu-glow"></div>
        </Link>
        <Link activeClass="active" to="skills" spy smooth offset={-50} duration={500} className="menu-item">
          <span className="menu-text">Acerca de</span>
          <div className="menu-glow"></div>
        </Link>
        <Link activeClass="active" to="proyects" spy smooth offset={-50} duration={500} className="menu-item">
          <span className="menu-text">Portfolio</span>
          <div className="menu-glow"></div>
        </Link>
      </div>

      {/* Botón de contacto */}
      <button className="contact-btn" onClick={() => handleScroll("contact")}>
        <div className="contact-icon">
          <div className="contact-dot"></div>
          <div className="contact-pulse"></div>
        </div>
        <span className="contact-text">Contactame</span>
        <div className="btn-glow"></div>
      </button>

      {/* Botón menú móvil */}
      <div className={`mobile-menu-btn ${showMenu ? "active" : ""}`} onClick={() => setShowMenu(!showMenu)}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Menú móvil */}
      <div className={`mobile-menu ${showMenu ? "show" : ""}`}>
        <div className="mobile-menu-content">
          <Link
            activeClass="active"
            to="intro"
            spy
            smooth
            offset={-100}
            duration={500}
            className="mobile-menu-item"
            onClick={() => handleScroll("intro")}
          >
            <span className="mobile-item-text">Inicio</span>
            <div className="mobile-item-glow"></div>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy
            smooth
            offset={-50}
            duration={500}
            className="mobile-menu-item"
            onClick={() => handleScroll("skills")}
          >
            <span className="mobile-item-text">Acerca de</span>
            <div className="mobile-item-glow"></div>
          </Link>
          <Link
            activeClass="active"
            to="proyects"
            spy
            smooth
            offset={-50}
            duration={500}
            className="mobile-menu-item"
            onClick={() => handleScroll("proyects")}
          >
            <span className="mobile-item-text">Portfolio</span>
            <div className="mobile-item-glow"></div>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy
            smooth
            offset={-50}
            duration={500}
            className="mobile-menu-item"
            onClick={() => handleScroll("contact")}
          >
            <span className="mobile-item-text">Contacto</span>
            <div className="mobile-item-glow"></div>
          </Link>
          
        </div>
      </div>
    </nav>
  )
}
