export interface User {
  readonly id: string;
  email: string;
  password: string;
  verified: boolean;
  profiles?: Profile[];
  bio?: string;
  avatar?: string;
  defaultProfile?: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface Profile {
  id?: string;
  owner?: string;
  name: string;
  title: string;
  subtitle: string;
  visible: boolean;
  isPro: boolean;
  avatar?: string;
  video?: string;
  proKey?: string;
  style?: Style;
  links?: Link[];
  card?: Card;
  ageGate?: boolean;
}

export interface Link {
  readonly id?: string;
  label: string;
  action: string;
  media: string;
  index?: number;
  hide?: boolean;
  clicks?: number;
}

export interface Style {
  /**
   * Avatar properties
   */
  tileAvatar: boolean;
  border: boolean;
  borderColor: string;

  /**
   * General style
   */
  background: string;
  backgroundImage: string;
  color: string;

  /**
   * Button properties
   */
  buttonColor: string;
  buttonBackground: string;
  buttonStyle: string;
}

export interface Card {
  id?: string;
  title: string;
  subtitle?: string;
  content: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  visible?: boolean;
  impressions?: number;
  clicks?: number;
}

export interface Preview extends Profile {
  links: Link[];
  card: Card;
  style: Style;
}

export interface IError {
  code?: number;
  message?: string;
}

export interface HelpCard {
  pro?: boolean;
  title: string;
  body: string;
  to: string;
}

export interface Rules {
  required(v: string): boolean | string;
  text(v: string): boolean | string;
  email(v: string): boolean | string;
  password(v: string): boolean | string;
  url(v: string): boolean | string;
  phoneNumber(v: string): boolean | string;
  digits(v: string): boolean | string;
  instagram(v: string): boolean | string;
  facebook(v: string): boolean | string;
  required(v: string): boolean | string;
  maxLength(l: number): (v: string) => boolean | string;
  minLength(l: number): (v: string) => boolean | string;

  validate(reg: RegExp, msg: string): (v: string) => boolean | string;
  hexColor(v: string): boolean | string;
}

export interface Rules {
  required(v: string): boolean | string;
  text(v: string): boolean | string;
  email(v: string): boolean | string;
  password(v: string): boolean | string;
  url(v: string): boolean | string;
  phoneNumber(v: string): boolean | string;
  digits(v: string): boolean | string;
  instagram(v: string): boolean | string;
  facebook(v: string): boolean | string;
  required(v: string): boolean | string;
  maxLength(l: number): (v: string) => boolean | string;
  minLength(l: number): (v: string) => boolean | string;

  validate(reg: RegExp, msg: string): (v: string) => boolean | string;
  hexColor(v: string): boolean | string;
}
export interface Media {
  icon: Array<string>;
  media: string;
  text: string;
  site: string;
  prepend?: string;
  errorMessage?: string;
  validate?: RegExp;
}

export interface ButtonStyle {
  buttonBackground: string;
  buttonColor: string;
  buttonStyle: string;
}

export interface BorderStyle {
  tileAvatar: boolean;
  border: boolean;
  borderColor: string;
}

export interface Alert {
  visible?: boolean;
  type: string;
  message: string;
}

export interface Stats {
  id: string;
  impressions: number;
  links: Pick<Link, 'label' | 'clicks'>[];
  card: Pick<Card, 'impressions' | 'clicks'>;
  dailyViews: [];
}
