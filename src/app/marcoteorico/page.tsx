import { BiblioList, LinkItem, Title } from "@/components";

export default function MarcoTeoricoPage() {
  return (
    <div className="mx-6 my-14 flex flex-col gap-8 md:mx-auto md:max-w-2xl xl:max-w-3xl">
      <LinkItem type="internal" iconPosition="left" text="Volver" path="/" />
      <Title text="Marco teórico" />
      <BiblioList />
      <LinkItem type="internal" iconPosition="left" text="Volver" path="/" />
    </div>
  );
}
