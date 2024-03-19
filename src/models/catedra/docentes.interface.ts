export interface Paragraph {
  text: string;
  key: number;
}

export interface DocentesInfo {
  name: string;
  role: string;
  image?: string;
  bio: Paragraph[];
}