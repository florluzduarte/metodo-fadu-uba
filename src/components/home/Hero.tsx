import Image from "next/image";
import { Title, Subtitle } from "@/components";

const textTitle = "Metodología de la investigación en Diseño";
const textSubtitle = "Cátedra Ex-Galán"
const textDescription = "Metodología de la investigación es construir diseño con sentido. Es una plataforma pedagógica desde donde reflexionar sobre el diseño, sus prácticas, sus metodologías y sus resultados. El diseño y los procesos de investigación que se gestan nunca son ingenuos en cuanto a su entramado dentro de los paradigmas prevalentes.  Sensibilizar hacia un actuar sistemático y reflexivo es una posición ideológica trascendente. Es necesario dejar huella trazable del pensamiento a fin de poder ser recorrido por otros, haciéndolo transparente y democrático. Beatriz Galán nos decía el conocimiento se diseña, con inteligencia en contexto, equidad y economía ecológica. Allá vamos.";

export const Hero = () => {
  return (
    <section className="mx-6 my-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center md:gap-8 md:my-20 lg:gap-14 xl:max-w-6xl xl:mx-auto xl:my-24">
      <div className="flex flex-col gap-4">
        <Title text={textTitle} />
        <Subtitle text={textSubtitle} type="regular" />
        <p>{textDescription}</p>
      </div>
      <Image src="/images/docentes/hero.JPG" alt="" width={485} height={471} unoptimized className="rounded-xl md:place-self-start lg:place-self-center" priority />
    </section>
  )
}
