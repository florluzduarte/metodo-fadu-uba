import Link from "next/link";
import { IoChevronForward, IoOpenOutline } from "react-icons/io5";
import type { CardLinkProps } from "@/models";

export const CardLink = ({ icon, title, description, cardType, cardPath, hintText }: CardLinkProps) => {

  if (cardType === "internal") {
    return (
      <Link href={cardPath}
        className="flex flex-col gap-4 p-5 border-[0.5px] border-gray-300 rounded-2xl hover:border-black"
      >
        {
          icon && icon
        }
        <p className="font-bold text-[20px] xl:text-[24px]">{title}</p>
        <p>{description}</p>

        <div className="flex gap-1 items-center underline underline-offset-2">
          <p>{hintText}</p>
          <IoChevronForward size={24} className="text-green-400" />
        </div>
      </Link>
    )
  };

  if (cardType === "external") {
    return (
      <a href={cardPath} target="_blank" title={title}
        className="flex flex-col gap-4 p-5 border-[0.5px] border-gray-300 rounded-2xl hover:border-black"
      >
        {
          icon && icon
        }
        <p className="font-bold text-[20px] xl:text-[24px]">{title}</p>
        <p>{description}</p>

        <div className="flex gap-2 items-center underline underline-offset-2">
          <p>{hintText}</p>
          <IoOpenOutline size={24} className="text-green-400" />
        </div>
      </a>
    )
  }
}
