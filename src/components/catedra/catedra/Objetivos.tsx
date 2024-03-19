import { List, Subtitle } from "@/components";
import { objetivos } from "@/content/catedra/objetivos";

const { title, texts } = objetivos;

export const Objetivos = () => {
  return (
    <div className="flex flex-col gap-6">
      <Subtitle text={title} type="bold" />
      <List listItems={texts} />
    </div>
  )
}
