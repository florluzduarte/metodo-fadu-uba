import { cardLinksInternalCatedra } from "@/content/catedra/catedraLinks"
import { CardLink } from "@/components"

export const CatedraLinks = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {
        cardLinksInternalCatedra.map((card) => (
          <CardLink cardType="internal" key={card.cardPath} {...card} />
        ))
      }
    </div>
  )
};
