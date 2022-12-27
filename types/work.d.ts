export interface Image {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

export interface Work {
  name: string;
  link: string;
  description: string;
  text: string[];
  image: Image;
}
