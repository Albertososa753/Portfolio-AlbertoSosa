export interface ProjectLink {
  github?: string
  demo?: string
}

export interface Project {
  titulo: string
  duracion: string
  rol: string
  descripcion: string
  tecnologias: string[]
  imagenes: string[]
  video?: string
  enlaces: ProjectLink
}
