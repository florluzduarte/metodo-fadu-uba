import { cardLinksHomeInternal, cardLinksHomeExternal } from "@/content/home/cardLinksHome";
import { CardLink } from "@/components";

export const CardLinkGrid = () => {
  return (
    <section className="border-t-[0.5px] border-gray-300 py-14 md:py-20 xl:py-24">
      <div className="grid grid-cols-1 mx-6 gap-6 md:grid-cols-2 xl:max-w-5xl xl:mx-auto">
        {
          cardLinksHomeExternal.map((card) => (
            <CardLink key={card.cardPath} cardType="external" {...card} />
          ))
        }
        {
          cardLinksHomeInternal.map((card) => (
            <CardLink key={card.cardPath} cardType="internal" {...card} />
          ))
        }
      </div>
    </section>
  )
}
