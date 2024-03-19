import type { ListItemProps } from "@/models"

export const ListItem = ({ order, text }: ListItemProps) => {
  return (
    <div className="flex gap-4 items-start md:items-center">
      <p className="font-bold py-1 px-3 rounded-full bg-green-200">{order}</p>
      <p className="xl:text-[20px]">{text}</p>
    </div>
  )
}
