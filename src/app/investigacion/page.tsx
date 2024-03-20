import { investigacion } from "@/content/investigacion/investigacion";
import { InvestigacionLinks, LinkItem, List, Title } from "@/components";

const { title, texts, listItems } = investigacion;

export default function InvestigacionPage() {
  return (
    <div className="mx-6 my-14 flex flex-col gap-8 md:mx-auto md:max-w-2xl xl:max-w-3xl">
      <LinkItem type="internal" iconPosition="left" text="Volver" path="/" />
      <Title text={title} />
      <p>{texts[0].text}</p>
      <List listItems={listItems} />
      <div className="flex flex-col gap-6">
        {
          texts.map((paragraph) => {
            if (paragraph.key === 1) return;
            return (
              <p key={paragraph.key}>{paragraph.text}</p>
            )
          })
        }
      </div>
      <InvestigacionLinks />
      <LinkItem type="internal" iconPosition="left" text="Volver" path="/" />
    </div>
  );
}
