export interface ListItemProps {
  order: number;
  text: string;
}

export interface ListProps {
  listItems: ListItemProps[];
}

export interface CardLinksProps {
  icon?: React.ReactElement;
  title: string;
  description: string;
  cardPath: string;
  hintText: string;
}

export interface CardLinkProps {
  icon?: React.ReactElement;
  title: string;
  description: string;
  cardType: "internal" | "external";
  cardPath: string;
  hintText: string;
}