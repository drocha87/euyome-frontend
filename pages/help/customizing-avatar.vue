<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>Escolhendo uma foto de perfil</v-card-title>
      <v-card-subtitle class="text-caption"
        >Neste tutorial iremos customizar nosso link para deixar a nossa
        cara.</v-card-subtitle
      >
      <v-card-text class="text-justify">
        Agora que já criamos nosso primeiro link, devemos customizar nosso
        perfil, para deixar a nossa cara ou a cara da nossa marca, vamos voltar
        para o nosso dashboard e vamos clicar no
        <Highlight>Avatar</Highlight>
        como demonstrado na imagem a seguir
        <v-row class="my-4">
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607378292/docs/dashboard-avatar_2_s89fy1.png"
            />
          </v-col> </v-row
        >Você será redirecionado para a tela de configurações da conta, nesta
        tela você pode a qualquer momento alterar o
        <Highlight>Título</Highlight>ou <Highlight>Subtítulo</Highlight>do seu
        perfil, assim como alterar a visibilidade do perfil ou até mesmo
        deleta-lo, mas isso iremos ver nos próximos tutoriais.
        <br />
        <br />Na tela de configurações você pode clicar em
        <Highlight>Alterar foto do perfil</Highlight>você será redirecionado
        para a tela do avatar e clicando em
        <Highlight>Alterar foto do perfil</Highlight>
        uma caixa de diálogo irá aparecer como na imagem a seguir:
        <v-row class="my-4">
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607378979/docs/cloudinary-browse_wxwebx.png"
            />
          </v-col> </v-row
        >Clique em
        <Highlight>Browse</Highlight>
        e escolha uma imagem de seu computador, em um próximo tutorial iremos
        explorar todas as opções de upload e como recortar uma imagem antes de
        fazer o upload. Por enquanto escolha uma imagem e faça o upload, se tudo
        ocorrer bem, você verá um preview da sua foto.
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help/creating-link"
          >criando um link</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/help/customizing-profile"
          >customizando perfil</v-btn
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
      title: 'euyo.me | Ajuda: Adicionando foto de perfil',

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Vamos aprender a adicionar ou alterar uma foto de perfil',
        },
      ],
    };
  },
});
</script>
