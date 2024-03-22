import { CatedraLinks, ElNombre, Fundamentos, LinkItem, Objetivos, Title } from "@/components";

export default function CatedraPage() {
  return (
    <div className="mx-6 my-14 md:mx-auto md:max-w-2xl xl:max-w-3xl">
      <LinkItem type="internal" iconPosition="left" text="Volver" path="/" />
      <section className="my-14 flex flex-col gap-14">
        <Title text="Propuesta de la Cátedra" />

        {/* TODO: Agregar imagen de la cátedra cuando la tenga */}
        <Fundamentos />
        <ElNombre />
        <CatedraLinks />
        <Objetivos />
      </section>
      <LinkItem type="internal" iconPosition="left" text="Volver" path="/" />
    </div>
  );
}