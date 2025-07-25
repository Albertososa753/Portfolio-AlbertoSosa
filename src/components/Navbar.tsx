"use client"

import { useState } from "react"
import Image from "next/image"
import { Link } from "react-scroll"
import "@/style/navbar.css"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setShowMenu(false)
  }

  return (
    <nav className="navbar">
      <Image src="/assets/Logos/logo.png" alt="Logo" width={50} height={50} className="logo" />

      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy smooth offset={-100} duration={500} className="desktopMenuListItem">
          Inicio
        </Link>
        <Link activeClass="active" to="skills" spy smooth offset={-50} duration={500} className="desktopMenuListItem">
          Acerca de
        </Link>
        <Link activeClass="active" to="proyects" spy smooth offset={-50} duration={500} className="desktopMenuListItem">
          Portfolio
        </Link>
      </div>

      <button className="desktopMenuBtn" onClick={() => handleScroll("contact")}>
        <Image src="/assets/Logos/contact.png" alt="Contactame" width={20} height={20} className="desktopMenuImg" />
        Contactame
      </button>

      <Image
        src="/assets/Logos/menu.png"
        alt="Menú"
        width={30}
        height={30}
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy
          smooth
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => handleScroll("intro")}
        >
          Inicio
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy
          smooth
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => handleScroll("skills")}
        >
          Acerca de
        </Link>
        <Link
          activeClass="active"
          to="proyects"
          spy
          smooth
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => handleScroll("proyects")}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy
          smooth
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => handleScroll("contact")}
        >
          Contacto
        </Link>
        <Link
          activeClass="active"
          to="cv"
          spy
          smooth
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => handleScroll("cv")}
        >
          Curriculum Vitae
        </Link>
      </div>
    </nav>
  )
}
