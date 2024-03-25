import { bibliografiaRecomendada } from "@/content/marcoTeorico/bibliografiaList";
import { List } from "@/components";

export const BiblioList = () => {
  return (
    <>
      <List listItems={bibliografiaRecomendada.booksDefault} />
    </>
  )
}
