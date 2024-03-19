import { sobreElNombre } from "@/content/catedra/sobreElNombre"
import { Subtitle } from "@/components"

const { title, text } = sobreElNombre;

export const ElNombre = () => {
  return (
    <section className="flex flex-col gap-6">
      <Subtitle text={title} type="bold" />
      <p>{text}</p>
    </section>
  )
}
