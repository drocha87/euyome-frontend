<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>Adicionando um vídeo na capa</v-card-title>
      <v-card-subtitle
        class="text-caption"
      >Neste tutorial iremos aprender como colocar um vídeo do youtube na capa</v-card-subtitle>
      <v-card-text class="text-justify">
        Um vídeo fala mais que mil palavras, e pensando nisso, é claro que você
        pode colocar um vídeo no seu perfil, e o processo é bem simples e intuitivo.
        <br />
        <br />Para habilitar o Vídeo na capa você precisa que seu perfil seja PRO e então a partir
        do dashboard do seu perfil clicar em
        <Highlight>Vídeo na Capa</Highlight>
.
        <v-row class="my-4">
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607458415/docs/cover-video-dashboard-5_puf1zi.png"
            />
          </v-col>
        </v-row>
Após isso você será redirecionado para a tela onde você irá colocar o link
        do YouTube, como a tela a seguir:
        <v-row class="my-4">
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607458656/docs/youtube-video_h2rfzv.png"
            />
          </v-col>
        </v-row>Se o vídeo for adicionado com sucesso, ao clicar em salvar você deverá ver imediatamente
        um preview do vídeo. Para você não ter problema na hora de adicionar o link lembre-se
        que a parte do link que você deverá colocar na caixa de texto é o código,
        que vem APÓS o
        <Highlight>youtube.com/watch?v=</Highlight>
        <br />
        <br />Para remover o vídeo, é só clicar em
        <Highlight>Remover Vídeo</Highlight>.
        <br />
        <br />O próximo tutorial, será como comprar sua chave PRO e entrar para o time dos PRO!!
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help/creating-card">Criando um card</v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/help/buying-prokey">Comprando chave pro</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'euyo.me | Ajuda: Adicionando vídeo na capa',

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Vamos aprender a adicionar um vídeo do YouTube na capa',
        },
      ],
    };
  },
});
</script>
