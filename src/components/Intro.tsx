"use client"

import Image from "next/image"
import "@/style/intro.css"

export default function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hola,</span>
        <h1 className="introTitle">
          Soy <span className="introName">Alberto Sosa.</span>
          <br />
          Desarrollador FullStack
        </h1>
        <p className="introPara">
          Este es mi sitio web, donde comparto una colección de los proyectos que
          <br /> he creado a lo largo de mi trayectoria como desarrollador web.
        </p>
      </div>
      <div className="bg-container">
        <Image
          src="/assets/Logos/_com.apple.Pasteboard.OrebzH.png" // Usando un placeholder para la imagen de perfil
          alt="Profile"
          className="bg-image"
          fill
          priority
        />
      </div>
    </section>
  )
}
