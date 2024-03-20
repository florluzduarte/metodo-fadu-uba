import { IoLibrary, IoPeople } from "react-icons/io5";
import type { CardLinksProps } from "@/models";

export const cardLinksInternalCatedra: CardLinksProps[] = [
  {
    icon: <IoPeople size={24} className="text-green-400" />,
    title: "Docentes",
    description: "Profesionales que componen la cátedra, rol en la materia, CVs con historial profesional y académico.",
    cardPath: "/catedra/docentes",
    hintText: "Equipo",
  },
  {
    icon: <IoLibrary size={24} className="text-green-400" />,
    title: "Marco Teórico",
    description: "Marco teórico de referencia y consulta para la elaboración de los contenidos y trabajos de la Cátedra",
    cardPath: "/marcoteorico",
    hintText: "Ver bibliografía",
  }
]