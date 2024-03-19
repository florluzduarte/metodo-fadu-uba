import { IoPeople } from "react-icons/io5"

export const ButtonAlumnos = () => {
  return (
    <a href="https://campus.fadu.uba.ar"
      className="flex gap-2 bg-green-200 p-2 rounded-md hover:bg-green-400"
      target="_blank"
    >
      <IoPeople size={24} />
      Alumnos
    </a>
  )
}
