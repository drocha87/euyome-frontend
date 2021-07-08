<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>Criando seu primeiro perfil</v-card-title>
      <v-card-subtitle class="text-caption"
        >Neste tutorial iremos aprender a criar nosso primeiro
        perfil</v-card-subtitle
      >
      <v-card-text class="text-justify">
        Após criar sua conta, é hora da gente criar nosso primeiro perfil, ao
        fazer login com seu email e senha você tera acesso ao seu dashboard,
        onde você irá ver uma tela como a da imagem a seguir (dashboard versão
        desktop).
        <v-row>
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607366648/docs/first_profile_n0jcps.png"
            />
          </v-col> </v-row
        >No menu lateral você pode clicar em <Highlight>Perfis</Highlight>e em
        seguida clicar em
        <Highlight>Adicionar perfil</Highlight>
        que irá te direcionar para a página de criação do perfil.
        <v-row>
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607367639/docs/creating-profile_jlawiu.png"
            />
          </v-col> </v-row
        >Nesta tela é hora de você escolher seu
        <Highlight>Nome de Usuário</Highlight>lembrando que seu nome de usuário
        NÃO deverá conter caracteres especiais nem espaços. A seguir você deverá
        escolher um <Highlight>Título</Highlight>que será o nome que aparecerá
        logo abaixo da sua foto de perfil e por último escolher um
        <Highlight>Subtítulo</Highlight>
        que irá aparecer logo abaixo o título em fontes menores.
        <v-row>
          <v-col>
            <ShowImage
              max-height="350px"
              image="https://res.cloudinary.com/euyome/image/upload/v1607368434/docs/Foto_do_perfil_ufz7z4.png"
            />
          </v-col>
        </v-row>
        Pronto se o nome de usuário que você escolheu estiver disponível, seu
        perfil será criado com sucesso e você será redirecionado para o
        dashboard do seu perfil.
        <v-row>
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607370821/docs/profile-dashboard_fsgyjm.png"
            />
          </v-col> </v-row
        >No próximo tutorial iremos aprender como criar nosso primeiro link.
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help/creating-account"
          >criando sua conta</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/help/creating-link"
          >criando um link</v-btn
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
      title: 'euyo.me | Ajuda: Criando seu perfil',

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Vamos aprender a criar a nosso primeiro perfil.',
        },
      ],
    };
  },
});
</script>
