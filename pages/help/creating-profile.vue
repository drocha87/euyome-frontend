<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>
        Criando seu primeiro perfil
      </v-card-title>
      <v-card-subtitle class="text-caption">
        Neste tutorial iremos aprender a criar nosso primeiro perfil
      </v-card-subtitle>
      <v-card-text class="text-justify">
        Após criar sua conta, é hora da gente criar nosso primeiro perfil, ao fazer
        login com seu email e senha você tera acesso ao seu dashboard, onde você irá
        ver uma tela como a da imagem a seguir (dashboard versão desktop).

        <v-row>
          <v-col>
            <a href="https://res.cloudinary.com/euyome/image/upload/v1607366648/docs/first_profile_n0jcps.png">
              <v-img contain src="https://res.cloudinary.com/euyome/image/upload/v1607366648/docs/first_profile_n0jcps.png"></v-img>
            </a>
          </v-col>
        </v-row>

        No menu lateral você pode clicar em <Highlight>Perfis</Highlight> e em seguida clicar
        em <Highlight>Adicionar perfil</Highlight> que irá te direcionar para a página de criação
        do perfil.

        <v-row>
          <v-col>
            <v-img contain src="https://res.cloudinary.com/euyome/image/upload/v1607367639/docs/creating-profile_jlawiu.png"></v-img>
          </v-col>
        </v-row>
        Nesta tela você é hora de escolher seu <Highlight>Nome de Usuário</Highlight>
        lembrando que seu nome de usuário NÃO deverá conter caracteres especiais nem
        espaços. A seguir você deverá escolher um <Highlight>Título</Highlight>
        que será o nome que aparecerá logo abaixo da sua foto de perfil e por último
        escolher um <Highlight>Subtítulo</Highlight> que irá aparecer logo abaixo
        o título em fontes menores.

        <v-row>
          <v-col>
            <v-img contain max-height="350px" src="https://res.cloudinary.com/euyome/image/upload/v1607368434/docs/Foto_do_perfil_ufz7z4.png"></v-img>
          </v-col>
        </v-row>

        Pronto se o nome de usuário que você escolheu estiver disponível, seu perfil
        será criado com sucesso e você será redirecionado para o dashboard do seu perfil.

        <v-row>
          <v-col>
            <v-img contain max-height="350px" src="https://res.cloudinary.com/euyome/image/upload/v1607370821/docs/profile-dashboard_fsgyjm.png"></v-img>
          </v-col>
        </v-row>

        No próximo tutorial iremos aprender como criar nosso primeiro link.
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help/creating-account">Anterior</v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/help/creating-link">Próximo</v-btn>
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
