import type { ListItemProps, Paragraph } from "@/models";

export interface Bibliografia {
  texts: Paragraph[];
  titles: string[];
  booksDefault: ListItemProps[];
  booksOptional: ListItemProps[];
}