import Link from "next/link"
import { IoPeople } from "react-icons/io5"

export const ButtonAlumnos = () => {
  return (
    <Link href="/alumnos" className="flex gap-2 bg-green-200 p-2 rounded-md hover:bg-green-400">
      <IoPeople size={24} />
      Alumnos
    </Link>
  )
}
