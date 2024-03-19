import type { ListProps } from "@/models";
import { ListItem } from "@/components";

export const List = ({ listItems }: ListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {
        listItems.map((listItem) => (
          <ListItem key={listItem.order} {...listItem} />
        ))
      }
    </div>
  )
}
