import { investigacionLinks } from "@/content/investigacion/investigacionLinks";
import { CardLink } from "@/components";

export const InvestigacionLinks = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {
        investigacionLinks.map((cardLink) => (
          <CardLink key={cardLink.cardPath} cardType="external" {...cardLink} />
        ))
      }
    </section>
  )
}
