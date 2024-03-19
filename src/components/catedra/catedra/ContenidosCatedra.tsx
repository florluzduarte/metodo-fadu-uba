import { Subtitle } from "@/components";
import { contenidosCatedra } from "@/content/catedra/contenidos";

const { title, texts } = contenidosCatedra;

export const ContenidosCatedra = () => {
  return (
    <section className="flex flex-col gap-6">
      <Subtitle text={title} type="bold" />
      <div className="flex flex-col gap-4">
        {
          texts.map((content) => (
            <div key={content.key} className="flex flex-col gap-4">
              <p className="font-bold">{content.titleText}</p>
              <p>{content.text}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
