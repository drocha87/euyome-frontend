export interface Rules {
  required(v: string): boolean | string;
  text(v: string): boolean | string;
  email(v: string): boolean | string;
  password(v: string): boolean | string;
  required(v: string): boolean | string;
  maxLength(l: number): (v: string) => boolean | string;
  minLength(l: number): (v: string) => boolean | string;
}

export interface Card {
  id?: number;
  visible: boolean;
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface User {
  id?: string;
  username?: string;
  avatar?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  subtitle?: string;
  youtubeVideo?: string;
  card?: Card;
  createdAt?: string;
  updatedAt?: string;
}
