import type { ListItemProps, Paragraph } from "@/models";

export interface Fundamentos {
  title: string;
  texts: Paragraph[];
}

export interface Objetivos {
  title: string;
  texts: ListItemProps[];
}

export interface ContenidoMinimo {
  titleText: string;
  text: string;
  key: number;
}

export interface Contenidos {
  title: string;
  texts: ContenidoMinimo[];
}