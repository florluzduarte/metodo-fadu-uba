import { IoBook, IoDocument, IoPeople, IoPerson, IoVideocam } from "react-icons/io5";

interface CardLinks {
  icon?: React.ReactElement;
  title: string;
  description: string;
  cardPath: string;
  hintText: string;
}

export const cardLinksHomeInternal: CardLinks[] = [
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
    description: "Espacios de investigación vinculados con la cátedra, CEPRODIDE, y más información relacionada",
    cardPath: "/investigacion",
    hintText: "Conocer más",
  },
  {
    icon: <IoDocument size={24} className="text-green-400" />,
    title: "Marco Teórico",
    description: "Bibliografía de consulta para la elaboración de los contenidos y trabajos de la Cátedra",
    cardPath: "/marcoteorico",
    hintText: "Ver bibliografía",
  }
];

export const cardLinksHomeExternal: CardLinks[] = [
  {
    icon: <IoPerson size={24} className="text-green-400" />,
    title: "Acceso portal Alumnos",
    description: "Materiales compartidos para la cursada, área de entrega y bibliografía de la Cátedra.",
    cardPath: "https://campus.fadu.uba.ar/",
    hintText: "Alumnos",
  }
]