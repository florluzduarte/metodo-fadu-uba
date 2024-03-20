import { IoBook, IoDocument, IoLibrary, IoPeople, IoPerson } from "react-icons/io5";
import type { CardLinksProps } from "@/models";

export const cardLinksHomeInternal: CardLinksProps[] = [
  {
    icon: <IoBook size={24} className="text-green-400" />,
    title: "Sobre la Cátedra",
    description: "Propuesta, fundamentos, objetivos, criterios de aprobación y más información sobre la materia.",
    cardPath: "/catedra",
    hintText: "Detalles",
  },
  {
    icon: <IoPeople size={24} className="text-green-400" />,
    title: "Investigación",
    description: "Espacios de investigación vinculados con la cátedra, CEPRODIDE, y más información relacionada.",
    cardPath: "/investigacion",
    hintText: "Conocer más",
  },
  {
    icon: <IoLibrary size={24} className="text-green-400" />,
    title: "Marco Teórico",
    description: "Marco teórico de referencia y consulta para la elaboración de los contenidos y trabajos de la Cátedra.",
    cardPath: "/marcoteorico",
    hintText: "Ver bibliografía",
  }
];

export const cardLinksHomeExternal: CardLinksProps[] = [
  {
    icon: <IoPerson size={24} className="text-green-400" />,
    title: "Acceso portal Alumnos",
    description: "Materiales compartidos para la cursada, área de entrega, bibliografía, teóricas y consignas.",
    cardPath: "https://campus.fadu.uba.ar/",
    hintText: "Alumnos",
  }
]