import { IoBook, IoDocument, IoPeople, IoPerson, IoVideocam } from "react-icons/io5";

interface CardLinks {
  icon?: React.ReactElement;
  title: string;
  description: string;
  cardPath: string;
  hintText: string;
}

export const cardLinksHome: CardLinks[] = [
  {
    icon: <IoPerson size={24} className="text-green-400" />,
    title: "Acceso portal Alumnos",
    description: "Materiales compartidos para la cursada, área de entrega y bibliografía de la Cátedra.",
    cardPath: "/alumnos",
    hintText: "Alumnos",
  },
  {
    icon: <IoBook size={24} className="text-green-400" />,
    title: "Sobre la Cátedra",
    description: "Propuesta, fundamentos, objetivos, criterios de aprobación y más información sobre la materia.",
    cardPath: "/catedra",
    hintText: "Detalles",
  },
  {
    icon: <IoPeople size={24} className="text-green-400" />,
    title: "Equipo Docente",
    description: "Profesionales que componen la cátedra, rol en la materia, CVs con historial profesional y académico.",
    cardPath: "/docentes",
    hintText: "Equipo",
  },
  {
    icon: <IoDocument size={24} className="text-green-400" />,
    title: "Trabajos prácticos",
    description: "Consignas de los trabajos prácticos metodológicos y teórico-críticos que se realizarán durante la cursada.",
    cardPath: "/consignas",
    hintText: "Consignas",
  },
  {
    icon: <IoVideocam size={24} className="text-green-400" />,
    title: "Teóricas",
    description: "Material audiovisual de soporte para la cursada y la realización de los trabajos prácticos.",
    cardPath: "/teoricas",
    hintText: "Ver videos",
  },
]