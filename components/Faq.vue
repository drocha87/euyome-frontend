<template>
  <v-container>
    <Header center title="frequentes" subtitle="perguntas" />

      <v-container class="mt-6 center-mw600">
        <v-expansion-panels focusable>
          <FaqQuestion question="O que é a euyo.me?">
          A Euyo.me é um aplicativo web onde você cria um perfil virtual, ou mais comum dizendo, um link personalizado.
          Este perfil depois é utilizado para divulgação de seus contatos, redes sociais e trabalhos em outras plataformas.
          </FaqQuestion>

          <FaqQuestion question="É gratuito?">
          O cadastro é gratuito e sem necessiade de cadastrar cartão de crédito,
          temos uma versão PRO, que lhe permite personalizar seu link, criar card na capa, acompanhar
          suas estatísticas, e muito mais. Após o cadastro você terá uma chave de acesso PRO de 14 dias
          disponível gratuitamente, para você sentir todos os beneficios de ser PRO, e se após esse período
          você quiser comprar a chave por um ano, é só acessar o menu 'Chaves PRO' ir em 'Comprar Chave'
          e comprar seu acesso PRO pelo período de um ano, e para te dar toda a segurança na hora da compra
          você pode pagar com seu PicPay ou entrar em contato conosco e escolher outra forma de pagamento.
          </FaqQuestion>

          <FaqQuestion question="Como faço meu cadastro?">
          O cadastro é rápido e fácil de ser realizado,
          <a href="https://euyo.me/register">clique aqui</a>
          e crie sua conta gratuita, sem necessidade de cadastrar cartão de crédito.
          Fique tranquilo, pois é tudo muito didático, para criar sua conta você só precisa do
          seu email e de criar uma senha de acesso!
          </FaqQuestion>

          <FaqQuestion question="Não recebi o email de ativação da minha conta! O que faço?">
          O nosso servidor envia automaticamente um email de ativação para todos os usuários do sistema.
          Em alguns casos o email de ativação acaba indo para a caixa de SPAM.
          Confere por favor se não foi para sua caixa de SPAM, caso não encontre o nosso email de ativação,
          acesse a sua conta da euyo.me e no canto superior irá aparecer uma aba para REENVIAR o LINK de ativação. 
          Caso não consiga resolver esse problema, <a href="https://euyo.me/euyome">fale conosco</a>
          </FaqQuestion>

          <FaqQuestion question="Como funciona a Versão PRO?">
          A Versão PRO é um sonho!! Na verdade, nos permite deixar o nosso perfil a nossa cara,
          pois nela conseguimos mudar a aparência do nosso link. 
          Podemos alterar a cor do botão, a cor da letra, estilo da foto, Cor de fundo,
          podemos colocar uma imagem de fundo e para deixar ainda mais a sua cara,
          você pode colocar um vídeo de apresentação.
          </FaqQuestion>
        </v-expansion-panels>

      </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  components: {
    Header,
  },

  data() {
    return {};
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  font-family: Rubik, Roboto, sans-serif;
}
.center-mw600 {
  max-width: 600px;
  margin: 0 auto;
}

.price__container {
  max-width: 250px;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
}

.price__header {
  font-size: 2rem;
  font-weight: 700;
}
.price__card__content {
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #c4c4c4;
  text-align: center;
  padding: 0 1rem;
}

.item__desc {
  font-family: Rubik, Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #7ebc89;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
}

.header {
  font-family: Rubik, Roboto, sans-serif;
  font-size: 1rem !important;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem !important;
  }
}

.pro_orange {
  color: #fe5d26;
}

.gray {
  color: #c4c4c4;
}
</style>
