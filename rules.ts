import { Rules } from './types';

const rules: Rules = {
  required: (v: string) => !!v || 'Campo obrigatório',

  text: (v: string) => /[A-zÀ-ú]*/.test(v) || 'Caracteres inválidos no texto',

  email: (v: string) => /.+@.+\..+/.test(v) || 'E-mail inválido',

  url: (v: string) =>
    /^(https:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&%'()*+,;=.]+$/gm.test(
      v
    ) || 'Url inválida',

  phoneNumber: (v: string) =>
    /^[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/gm.test(v) || 'Telefone inválido',

  digits: (v: string) => /^[0-9]*$/gm.test(v) || 'Campo aceita somente números',

  password: (v: string) =>
    (v && v.length >= 5 && v.length <= 30) ||
    'Password precisa ter entre 5 e 30 caracteres',

  maxLength: (l: number) => (v: string | undefined) => {
    if (!v) {
      // iff v is undefined we should do nothing since we are not breaking maxLenght rule
      return true;
    }
    return v.length < l || 'Tamanho máximo excedido';
  },

  minLength: (l: number) => (v: string) =>
    (v && v.length > l) || `Tamanho minímo requerido de ${l} caracteres`,

  validate: (reg: RegExp, msg: string) => (v: string) => {
    if (!reg) return true;
    return reg.test(v) || msg;
  },

  instagram: (v: string) =>
    /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim.test(v) || 'Usuário inválido',

  facebook: (v: string) => /^[^\s^\\]+$/gim.test(v) || 'Facebook inválido',

  hexColor: (v: string) =>
    /^#[0-9a-fA-F]{6}$/.test(v) || 'Código da cor inválido',
};

export default rules;
