<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>Criando sua conta</v-card-title>
      <v-card-subtitle class="text-caption"
        >Neste tutorial iremos aprender como criar nossa conta e nosso primeiro
        perfil</v-card-subtitle
      >
      <v-card-text class="text-justify">
        O primeiro passo é criar sua conta
        <nuxt-link to="/register">clicando aqui,</nuxt-link>você será
        redirecionado para a página de cadastro que irá te solicitar seu melhor
        email e uma senha forte, lembre-se de usar um email válido e que você
        tenha acesso pois será nele que você irá receber um email para confirmar
        sua conta.
        <v-row class="my-6">
          <v-col cols="6">
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607362685/docs/email_xlwvqb.png"
            />
          </v-col>
          <v-col cols="6">
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607362713/docs/pass_twbtlj.png"
            />
          </v-col> </v-row
        >Após a criação da conta você irá receber um email para confirmar sua
        conta, clique em <Highlight>Confirmar Email</Highlight>e você será
        redirecionado para a
        <a href="https://app.euyo.me/login">página de login,</a>
        onde você deverá usar seu email e sua senha para acessar seu dashboard e
        pronto, você já tem sua conta confirmada e pronta para criar seu
        primeiro perfil.
        <v-row>
          <v-col>
            <ShowImage
              class="mx-auto"
              max-height="350px"
              image="https://res.cloudinary.com/euyome/image/upload/v1607364842/docs/login_vudt8a.png"
            />
          </v-col> </v-row
        >No próximo tutorial vamos aprender a como criar o nosso primeiro
        perfil.
        <div style="display: none">
          <h1>linktree</h1>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help">Voltar para ajuda</v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/help/creating-profile"
          >Criando meu Perfil</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'euyo.me | Ajuda: Criando sua conta',

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Vamos aprender a criar a nossa conta na euyo.me.',
        },
      ],
    };
  },
});
</script>
