import { DocenteCardGrid, LinkItem, Title } from "@/components";

export default function DocentesPage() {
  return (
    <div className="mx-6 my-14 md:mx-10 xl:max-w-4xl xl:mx-auto">
      <LinkItem type="internal" iconPosition="left" text="Volver a Cátedra" path="/catedra" />
      <section className="my-14 flex flex-col gap-14">
        <Title text="Equipo Docente" />
        <DocenteCardGrid />
      </section>
      <LinkItem type="internal" iconPosition="left" text="Volver a Cátedra" path="/catedra" />
    </div>
  );
}