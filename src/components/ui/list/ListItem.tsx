import type { ListItemProps } from "@/models"

export const ListItem = ({ order, text }: ListItemProps) => {
  return (
    <li className="flex gap-4 items-start lg:items-center">
      <p className="font-bold py-1 px-3 rounded-full bg-green-200">{order}</p>
      <p>{text}</p>
    </li>
  )
}
