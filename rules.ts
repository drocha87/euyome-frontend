import { Rules } from './types';

const rules: Rules = {
  required: (v: string) => !!v || 'Campo obrigatório',

  text: (v: string) => /[A-zÀ-ú]*/.test(v) || 'Caracteres inválidos no texto',

  email: (v: string) => /.+@.+\..+/.test(v) || 'E-mail inválido',

  password: (v: string) =>
    (v && v.length >= 5 && v.length <= 30) ||
    'Password precisa ter entre 5 e 30 caracteres',

  maxLength: (l: number) => (v: string) =>
    (v && v.length < l) || 'Tamanho máximo excedido',

  minLength: (l: number) => (v: string) =>
    (v && v.length > l) || `Tamanho minímo requerido de ${l} caracteres`,
};

export default rules;
