import type { DocentesInfo } from "@/models"
import Image from "next/image"

export const DocenteCard = ({ image, name, role, bio }: DocentesInfo) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6 items-center">
        <Image src={image!} alt={name} width={100} height={100}
          className="w-[80px] h-[80px] rounded-full xl:w-[100px] xl:h-[100px]"
        />
        <div>
          <p className="font-bold uppercase">{name}</p>
          <p>{role}</p>
        </div>
      </div>
      <div>
        {
          bio.map((paragraph) => (
            <p key={paragraph.key}>{paragraph.text}</p>
          ))
        }
      </div>
    </div>
  )
}
