import { Subtitle } from "@/components";
import { fundamentos } from "@/content/catedra/fundamentos";

const { title, texts } = fundamentos;

export const Fundamentos = () => {
  return (
    <section className="flex flex-col gap-6">
      <Subtitle text={title} type="bold" />
      <div className="flex flex-col gap-6">
        {
          texts.map((paragraph) => (
            <p key={paragraph.key}
              className="xl:text-[20px]"
            >
              {paragraph.text}
            </p>
          ))
        }
      </div>
    </section>
  )
}
