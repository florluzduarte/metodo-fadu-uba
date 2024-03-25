import { LinkItem, List, Subtitle, Title } from "@/components";
import { bibliografiaRecomendada } from "@/content/marcoTeorico/bibliografiaList";

const { texts, titles, booksDefault, booksOptional } = bibliografiaRecomendada;

export default function MarcoTeoricoPage() {
  return (
    <div className="mx-6 my-14 flex flex-col gap-8 md:mx-auto md:max-w-2xl xl:max-w-3xl">
      <LinkItem type="internal" iconPosition="left" text="Volver" path="/" />
      <Title text="Marco teórico" />
      <div className="flex flex-col gap-6 mb-6">
        {
          texts.map((paragraph) => (
            <p key={paragraph.key}>{paragraph.text}</p>
          ))
        }
      </div>
      <Subtitle text={titles[0]} type="bold" />
      <List listItems={booksDefault} />
      <Subtitle text={titles[1]} type="bold" />
      <List listItems={booksOptional} />
      <LinkItem type="internal" iconPosition="left" text="Volver" path="/" />
    </div>
  );
}
