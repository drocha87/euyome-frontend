<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>
        Estilizando seu perfil
      </v-card-title>
      <v-card-subtitle class="text-caption">
        Neste tutorial iremos customizar nosso perfil, alterando as cores e o estilo do botão
      </v-card-subtitle>
      <v-card-text class="text-justify">
        No último tutorial a gente aprendeu como alterar a foto do perfil indo em
        <Highlight>Configuraçãoes</Highlight> e escolhendo uma imagem do nosso computador
        ou celular.<br><br>
        Agora é hora da gente começar a modificar as cores e o estilo dos botões,
        lembrando que você pode modificar a vontade seu perfil, mas suas modificações
        só serão visíveis para quem acessar seu perfil, se seu perfil for PRO. Se você está
        interessado(a) em saber mais sobre o PRO
        <a href="#" style="text-decoration: none; color: #585858;"><Highlight>clique aqui</Highlight></a>.
        <br><br>

        Vamos voltar no nosso dashboard do perfil, e vamos clicar em <Highlight>Aparência</Highlight>

        <v-row class="my-4">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607377728/docs/Customizing_1_fsfbax.png" />
          </v-col>
        </v-row>

        Você será redirecionado para a tela de configurações da aparência do perfil,
        nesta tela você verá algumas opções como por exemplo,
        <Highlight>Estilo do Avatar</Highlight>,
        <Highlight>Suas Cores</Highlight>,
        <Highlight>Estilo dos botões</Highlight> e
        <Highlight>Imagem de Fundo</Highlight>.


        <v-row class="my-4">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607425168/docs/appearance-2_atjg46.png" />
          </v-col>
        </v-row>

        Nesta tela tudo é bem intuitivo, você pode experimentar a vontade as combinações
        da aparência e deixar o seu perfil com a sua cara e as cores da sua marca,
        ressaltando mais uma vez que as modificações só são visíveis para o público
        se seu perfil for PRO.

        <v-card class="my-4" flat color="#fff3b0">
          <v-card-title class="text-body-1 font-weight-bold">Atenção</v-card-title>
          <v-card-text class="text-caption">
            É recomendável que você desative a visibilidade do seu perfil enquanto
            edita a aparência, pois com seu perfil visível a cada modificação ela
            será refletida instantâneamente no perfil online.
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help/customizing-avatar">Anterior</v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/help/sharing-profile">Próximo</v-btn>
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
