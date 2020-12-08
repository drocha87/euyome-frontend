<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>
        Adicionando um video na capa
      </v-card-title>
      <v-card-subtitle class="text-caption">
        Neste tutorial iremos aprender como colocar um video do youtube na capa
      </v-card-subtitle>
      <v-card-text class="text-justify">
        Um video fala mais que mil palavras, e pensando nisso, é claro que você
        pode colocar um video no seu perfil, e o processo é bem simples e intuitivo.<br><br>

        Para habilitar o Video na capa você precisa que seu perfil seja PRO e então a partir
        do dashboard do seu perfil clicar em <Highlight>Video na Capa</Highlight>.


        <v-row class="my-4">
          <v-col>
            <a href="https://res.cloudinary.com/euyome/image/upload/v1607458415/docs/cover-video-dashboard-5_puf1zi.png">
              <v-img contain src="https://res.cloudinary.com/euyome/image/upload/v1607458415/docs/cover-video-dashboard-5_puf1zi.png"></v-img>
            </a>
          </v-col>
        </v-row>

        Após isso você será redirecionado para a tela onde você irá colocar o link
        do YouTube, como a tela a seguir:

        <v-row class="my-4">
          <v-col>
            <a href="https://res.cloudinary.com/euyome/image/upload/v1607458656/docs/youtube-video_h2rfzv.png">
              <v-img contain src="https://res.cloudinary.com/euyome/image/upload/v1607458656/docs/youtube-video_h2rfzv.png"></v-img>
            </a>
          </v-col>
        </v-row>

        Se o video for adicionado com sucesso, ao clicar em salvar você deverá ver imediatamente
        um preview do video. Para você não ter problema na hora de adicionar o link lembre-se
        que a parte do link que você deverá colocar na caixa de texto é o código,
        que vem APÓS o <Highlight>youtube.com/watch?v=</Highlight>
        <br><br>
        Para remover o video, é só clicar em <Highlight>Remover Video</Highlight>.
        <br><br>

        O próximo tutorial, será como comprar sua chave PRO e entrar para o time dos PRO!!
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help/creating-card">Anterior</v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/help/buying-prokey">Próximo</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
