import { Fundamentos, LinkItem, Title } from "@/components";
import Image from "next/image";

export default function CatedraPage() {
  return (
    <div className="mx-6 my-14 md:mx-auto md:max-w-2xl xl:max-w-4xl">
      <LinkItem type="internal" iconPosition="left" text="Volver" path="/" />
      <section className="my-14 flex flex-col gap-14">
        <Title text="Propuesta de la Cátedra" />

        {/* TODO: Agregar imagen de la cátedra cuando la tenga */}
        {/* <Image src={} /> */}
        <Fundamentos />
      </section>
    </div>
  );
}