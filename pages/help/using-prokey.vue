<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>Usando uma chave PRO</v-card-title>
      <v-card-subtitle class="text-caption">Neste tutorial iremos aprender usar sua chave PRO</v-card-subtitle>
      <v-card-text class="text-justify">
        Após você criar uma conta aqui na euyo.me ou comprar uma chave PRO,
        você precisa associar ela a algum perfil, e como nós já temos um perfil
        criado, é hora de associar ele com nossa chave.
        <br />
        <br />Para isso nos precisamos ir na tela das nossas chaves clicando em
        <Highlight>Chaves PRO</Highlight>e sem seguida clicando em
        <Highlight>Minhas Chaves</Highlight>.
        <v-row class="my-4">
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607522822/docs/Untitled_design_6_cts6xh.png"
            />
          </v-col>
        </v-row>Com isso você será redirecionada para a tela das suas chaves, como mostrado na imagem
        a seguir:
        <v-row class="my-4">
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607523510/docs/prokeys_nl4gxz.png"
            />
          </v-col>
        </v-row>Você deverá ver uma tela semelhante a tela acima, dependendo da quantidade de chaves
        que você tem. Nesta tela temos uma tabela das nossas chaves com as seguintes
        informações:
        <v-card flat outlined class="mt-6">
          <v-card-title>Chave</v-card-title>
          <v-card-text>O id único da chave associado a sua conta e intransferível.</v-card-text>
        </v-card>

        <v-card flat outlined class="mt-6">
          <v-card-title>Associado á</v-card-title>
          <v-card-text>
            Aqui você tem um menu listavel (drop-down) com os perfis que você tem criado,
            escolhendo um perfil aqui, automaticamente associa esta chave a este perfil,
            tornando o perfil PRO. A qualquer momento você pode remover o perfil da chave,
            clicando novamente no menu e escolhendo
            <Highlight>Remover Perfil</Highlight>
          </v-card-text>
        </v-card>

        <v-row class="my-4">
          <v-col>
            <ShowImage
              image="https://res.cloudinary.com/euyome/image/upload/v1607524032/docs/Peek_2020-12-09_11-26_rqv0ct.gif"
            />
          </v-col>
        </v-row>

        <v-card flat outlined class="mt-6">
          <v-card-title>Status</v-card-title>
          <v-card-text>
            Aqui temos dois status da chave
            <Highlight>Ativa</Highlight>e
            <Highlight>Inativa</Highlight>,
            sua chave fica inativa quando o período de uso dela expira ou o pagamento é cancelado.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="my-6">
          <v-card-title>Expira em | Criada em</v-card-title>
          <v-card-text>
            Aqui é bem fácil de entender,
            <Highlight>Criada em</Highlight>é quando
            sua chave foi criada e
            <Highlight>Expira em</Highlight>é quando sua
            chave irá expirar.
          </v-card-text>
        </v-card>Aqui na euyo.me nos não temos o conceito de renovar a chave PRO, sendo assim
        quando a chave estiver perto do período de expirar, você receberá um email,
        te informando que a chave irá expirar, e então você repete o ciclo de compra
        e de associar o perfil a nova chave. As chaves inativas continuam visível,
        como um registro das suas compras.
        <br />
        <br />Se você fez tudo certinho, agora o prefil associado a esta chave estará PRO,
        e todos os recursos e customizações, estarão visíveis ao público.
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help/buying-prokey">comprando chave pro</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'euyo.me | Ajuda: Usando sua chave PRO',

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Vamos aprender a usar nossa chave PRO, tornando assim o nosso perfil PRO.',
        },
      ],
    };
  },
});
</script>
