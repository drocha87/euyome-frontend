<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>Criando seu perfil do time</v-card-title>
      <v-card-subtitle class="text-caption">
        Neste tutorial iremos aprender a criar o
        <Highlight>Perfil do Time</Highlight>
      </v-card-subtitle>
      <v-card-text class="text-justify">
        Ao criar sua conta aqui na euyo.me, você automaticamente tem a
        possibilidade de criar um perfil do time, tanto em contas com perfis PRO
        quanto em contas com perfis gratuitos.<br /><br />

        O perfil do time possibilita a uma conta se conectar com perfis da sua
        própria conta ou de contas externas em um único local. <br /><br />

        A principal finalidade do perfil do time, é te auxiliar na divulgação
        dos perfis dos seus colaboradores, parceiros, afiliados ou admiradores
        da sua marca pessoal ou empresa.<br /><br />

        A seguir alguns exemplos de uso:
        <ul class="my-4">
          <li class="my-1">
            Sua agência de marketing usa o perfil do time para divulgar seus
            clientes e seus trabalhos
          </li>
          <li class="my-1">
            Influenciadora ou influenciador usa o perfil de time para divulgar
            seus parceiros
          </li>
          <li class="my-1">
            Sua empresa usa o perfil do time na divulgação do contato dos seus
            colaboradores para seus clientes, facilitando a comunicação entre
            eles
          </li>
          <li class="my-1">
            Você profissional usa o perfil do time para divulgar seu network de
            recomendações de profissionais de outras áreas
          </li>
          <li class="my-1">
            Sua banda usa o perfil do time para divulgar os contatos dos seus
            integrantes
          </li>
        </ul>

        Essas são apenas algumas possibilidades de uso do perfil do time, use
        sua criatividade e se conecte com outros perfis :)<br /><br />

        Para criar o seu perfil do time é muito simples, na tela inicial após
        fazer login clique em <Highlight>Configurar</Highlight> no card
        <Highlight>Perfil do Time</Highlight> .

        <v-row class="my-6">
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1614861132/docs/inicial-perfil-do-time.png"
            />
          </v-col>
        </v-row>

        Com isso vamos ser redirecionados para a tela
        <Highlight>Configurar Perfil do Time</Highlight>, nesta tela temos
        algumas opções como listado abaixo.
        <br />
        <br />

        <v-card flat outlined class="my-6">
          <v-card-title>Selecionar Perfil</v-card-title>
          <v-card-text>
            A primeira opção que aparece é uma caixa para selecionar o perfil
            base do time, sendo assim, você já precisa ter criado um perfil
            previamente, e então selecionar ele. Lembre-se que usando este
            perfil como base, a euyo.me irá utilizar o avatar e nome de acesso
            deste perfil no perfil do time.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="my-6">
          <v-card-title>Título</v-card-title>
          <v-card-text>
            O título que irá aparecer na tela do perfil do time, geralmente aqui
            você coloca o nome da agência, empresa ou marca pessoal.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="my-6">
          <v-card-title>Bio</v-card-title>
          <v-card-text>
            Uma breve descrição sobre sua empresa, agência ou marca pessoal.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="my-6">
          <v-card-title>Título da barra de perfis</v-card-title>
          <v-card-text>
            Aqui será o título que irá aparecer acima da lista dos perfis, como
            por exemplo,
            <Highlight>Meus Clientes</Highlight>caso você seja uma agência, ou
            <Highlight>Nossos Colaboradores</Highlight>caso você seja uma
            empresa.
          </v-card-text>
        </v-card>

        Preenchendo estas informações e clicando em salvar, seu perfil do time,
        já estará automaticamente publicado e disponível para acesso ao público.
        Para isto basta acessar o seu perfil em
        <Highlight>https://euyo.me/SEU_PERFIL/time</Highlight>onde
        <Highlight>SEU_PERFIL</Highlight>deverá ser substituído pelo nome do
        perfil base que você escolheu lá na primeira opção, ou se você preferir
        é só clicar no link que aparece na parte superior da tela em
        <Highlight>Configurar Perfil do Time</Highlight>

        <v-row class="my-6">
          <v-col>
            <ShowImage
              max-height="350px"
              image="https://res.cloudinary.com/euyome/image/upload/v1614861323/docs/link-perfil-do-time.png"
            />
          </v-col>
        </v-row>

        Após criar o seu perfil do time, você já pode começar a receber
        solicitações de membros, que serão enviadas através do email que você
        usou no cadastro da sua conta, por exemplo:<br /><br />
        Se ao criar minha conta eu usei o email
        <Highlight>suporte@euyo.me</Highlight> esse será o email que os perfis
        deverá usar para enviar a solicitação.

        <!-- Se você quiser saber mais como
        enviar uma solicitação para se unir a um time
        <a href="http://euyo.me" target="_blank" rel="noopener noreferrer">
          clique aqui
        </a> -->
        <br /><br />

        Pronto seu perfil do time foi criado com sucesso, no próximo tutorial
        vamos aprender como enviar uma solicitação para integrar um time. Caso
        tenha alguma dúvida ou queira saber mais, entre em
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
      title: 'euyo.me | Ajuda: Criando seu perfil de agência',

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Vamos aprender a criar o perfil do time.',
        },
      ],
    };
  },
});
</script>
