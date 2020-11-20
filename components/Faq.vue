<template>
  <v-container>
    <Header center title="frequentes" subtitle="perguntas" />

      <v-container class="mt-6 center-mw600">
        <v-expansion-panels focusable>
          <FaqQuestion question="O que é a euyo.me?">
          A Euyo.me é um aplicativo web onde você cria um perfil virtual, ou mais comum dizendo, um link personalizado.
          Este perfil depois é utilizado para divulgação de seus contatos, redes sociais e trabalhos em outras plataformas.
          </FaqQuestion>

          <FaqQuestion question="Como faço meu cadastro?">
          O cadastro é rápido e fácil de ser realizado. Através do
          <a href="https://euyo.me/register">link</a>
          você realiza seu cadastro.
          Fique tranquilo, pois é tudo muito didático, fique atento ao que é solicitado e rápido terá seu perfil.
          </FaqQuestion>

          <FaqQuestion question="É gratuito?">
          O cadastro é gratuito, temos uma versão PRO, que lhe permite personalizar mais seu link.
          Verifique como contratar a versão PRO, dentro da sua dashboard, ou seja, depois que seu
          cadastro for realizado, vá no botão QUERO SER PRO e arrasa!
          </FaqQuestion>

          <FaqQuestion question="Não recebi o email de ativação da minha conta! O que faço?">
          O nosso servidor envia automaticamente um email de ativação para todos os usuários do sistema.
          Em alguns casos o email de ativação acaba indo para a caixa de SPAM.
          Confere por favor se não foi para sua caixa de SPAM, caso não encontre o nosso email de ativação,
          acesse a sua conta da euyo.me e no canto superior irá aparecer uma aba para REENVIAR o LINK de ativação. 
          Caso não consiga resolver esse problema, <a href="https://euyo.me/euyome">fale conosco</a>
          </FaqQuestion>

          <FaqQuestion question="Como funciona a Versão PRO? O que ela possui de diferente na Versão FREE?">
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
