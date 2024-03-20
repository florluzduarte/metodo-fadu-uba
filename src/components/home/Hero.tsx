import Image from "next/image";
import { Title, Subtitle } from "@/components";

const textTitle = "Metodología de la investigación en Diseño";
const textSubtitle = "Cátedra Ex-Galán"
const textDescription = "La materia está ubicada en el último nivel de la Carrera de Diseño Industrial (FADU-UBA), es obligatoria y cuatrimestral, con 60hs. de cursada. Conlleva una parte de trabajo teórico-reflexivo, a través de clases teóricas y lectura de textos; en conjunto con otras acciones de taller, correcciones horizontales y colectivas más aprendizaje e incorporación de conocimientos y herramientas metodológicas orientadas a diseño.";

export const Hero = () => {
  return (
    <section className="mx-6 my-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center md:gap-8 md:my-20 lg:gap-14 xl:max-w-6xl xl:mx-auto xl:my-24">
      <div className="flex flex-col gap-4">
        <Title text={textTitle} />
        <Subtitle text={textSubtitle} type="regular" />
        <p>{textDescription}</p>
      </div>
      <Image src="/images/docentes/hero.JPG" alt="" width={485} height={471} unoptimized className="rounded-xl xl:place-self-end" priority />
    </section>
  )
}
