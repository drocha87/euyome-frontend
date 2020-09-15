export interface Rules {
  required(v: string): boolean | string;
  text(v: string): boolean | string;
  email(v: string): boolean | string;
  password(v: string): boolean | string;
  required(v: string): boolean | string;
  maxLength(l: number): (v: string) => boolean | string;
  minLength(l: number): (v: string) => boolean | string;
}
