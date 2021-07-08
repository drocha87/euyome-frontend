<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>Compartilhando as impressões do perfil</v-card-title>
      <v-card-subtitle class="text-caption"
        >Neste tutorial iremos aprender a compartilhar as impressões do
        perfil</v-card-subtitle
      >
      <v-card-text class="text-justify">
        Você é uma agência ou um empresa, e seus clientes ou colaboradores, tem
        interesse em saber sobre as suas impressões, ou você é uma influencer
        digital e quer impressionar um possível cliente, mostrando seu
        engajamento?
        <br />
        <br />Uma funcionalidade exclusiva da euyo.me, é você compartilhar suas
        impressões em tempo real, com qualquer pessoa que tenha acesso a
        internet sem essa pessoa precisar se autenticar e sem ela precisar ter
        acesso interno ao seu perfil. Para isto basta você ir no dashboard do
        seu perfil e clicar em
        <Highlight>Central de análises</Highlight>
        , com isso você é redirecionado para a tela de impressões e no topo da
        tela você verá uma janela como abaixo:
        <v-row>
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607634400/docs/sharing-stats_mn72kk.png"
            />
          </v-col> </v-row
        >Se você não tiver gerado ainda nenhum link, é só clicar em
        <Highlight>Gerar Novo Link</Highlight>que um link vai ser gerado
        automaticamente já liberando o compartilhamento das suas impressões,
        simples assim.
        <br />
        <br />

        <v-card flat outlined class="my-6">
          <v-card-title>Atenção</v-card-title>
          <v-card-text>
            Mas é claro que com grandes poderes vem grandes responsabilidades,
            esse link gerado, NÃO expira sozinho, sendo assim uma vez
            compartilhado, quem tiver acesso a ele, sempre terá acesso
            atualizado as suas impressões. Então a qualquer momento que você
            quiser invalidar o link antigo, é só você gerar um link novo
            clicando novamente no botão
            <Highlight>Gerar Novo Link</Highlight>
          </v-card-text> </v-card
        >Apesar da simplicidade de uso desta funcionalidade, ela tem um papel
        fundamental na estrutura de uma agência por exemplo, deixando seu
        cliente sempre atualizado das suas impressões.
        <br />
        <br />
        Caso tenha alguma dúvida ou queira saber mais, entre em
        <nuxt-link to="/euyome" exact>contato conosco</nuxt-link>.
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help">Voltar para ajuda</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'euyo.me | Ajuda: Compartilhando as estatísticas do perfil',

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Vamos aprender a compartilhar as estatísticas do seu perfil',
        },
      ],
    };
  },
});
</script>
