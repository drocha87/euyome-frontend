<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>
        Comprando uma chave PRO
      </v-card-title>
      <v-card-subtitle class="text-caption">
        Nestte tutorial iremos aprender como comprar uma chave PRO
      </v-card-subtitle>
      <v-card-text class="text-justify">
        Após você deixar seu perfil incrível, customizado, com a sua cara, é hora
        de tornar tudo isso visível e deixar o público maravilhado com seu perfil,
        pra isso você vai precisar ser PRO.<br><br>

        A euyo.me é com certeza a plataforma de compartilhamento de links, com melhor
        custo benefício, e após você se tornar PRO você terá acesso a todos os
        benefícios atuais e as novidades que estão por vir, sem surpresas e sem vários
        tipos de plano, aqui na euyo.me ou você é PRO ou tem a conta gratuita.<br><br>

        Quando você cria sua conta aqui na euyo.me você ganha uma chave PRO válida por
        14 dias, onde você pode explorar todos os benefícios de ser PRO, e se você
        gostar você compra uma chave e conecta seu perfil a ela.<br><br>

        Para não deixar esse tutorial muito longo, vamos focar na compra da chave
        PRO e nos tutoriais futuros a gente vai ir conhecendo mais sobre as funcionalidades
        da chave e como explorar todos os seus recursos.<br><br>

        Para comprar uma chave, o primeiro passo é você ir no menu lateral e clicar
        em <Highlight>Chaves PRO</Highlight> e em seguida clicar em <Highlight>Comprar Chave</Highlight>.

        <v-row class="my-4">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607522822/docs/Untitled_design_6_cts6xh.png" />
          </v-col>
        </v-row>
        Com isso você será redirecionado para a tela de compra da chave, e aqui
        eu vou te explicar um pouco sobre algumas informações que são necessarias.

        <v-row class="my-4">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607522918/docs/prokey-buying-screen_co4bid.png" />
          </v-col>
        </v-row>

        Todos os planos da euyo.me é válido pelo período de um ano (365 dias), contando
        a partir da data da validação da compra. Para ter toda a segurança e facilidade
        na hora da compra, nós escolhemos a <Highlight>PicPay</Highlight> como plataforma
        de recebimento, e após você efetuar o pagamento em poucos minutos você já
        deverá ter sua chave PRO ativada e pronta para uso.<br><br>

        <v-card flat outlined class="mt-6">
          <v-card-title>CPF</v-card-title>
          <v-card-text>
            Nesta tela você terá que informar seu <Highlight>CPF</Highlight> pois a PicPay
            necessita esta informação para validar seus dados, nos da euyo.me não salvamos
            essa informação em nosso banco de dados.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="mt-6">
          <v-card-title>Quantidade</v-card-title>
          <v-card-text>
            Aqui é a quantidade de chaves que você quer comprar, ao aumentar a quantidade
            você pode ver o valor da compra ser atualizado no lado direito da tela
            (versão computador).
          </v-card-text>
        </v-card>

        <v-row class="my-4">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607521713/docs/Peek_2020-12-09_10-48_ba4zdl.gif" />
          </v-col>
        </v-row>

        <v-card flat outlined class="my-6">
          <v-card-title>Código Promocional</v-card-title>
          <v-card-text>
            Aqui é onde você coloca seu código promocional, e é preciso que você
            clique em aplicar para ter o desconto aplicado, ao ser aplicado com
            sucesso, você deverá ver uma mensagem logo abaixo essa caixa de texto
            informando o valor do desconto, e a tela da compra no lado direito (versão computador)
            já deverá atualizar o valor.
          </v-card-text>
        </v-card>

        Após preencher todos os dados corretamente, o botão <Highlight>Comprar agora</Highlight>
        ficará verde, liberando você a compra, é muito importante que você verifique
        se tudo está de acordo, se os valores estão corretos antes de prosseguir com
        a compra.<br><br>

        Ao clicar em <Highlight>Comprar Agora</Highlight> você será redirecionado
        para a tela do PicPay na versão computador, ou na versão smartphone o
        aplicativo do PicPay irá abrir e então após conferir o valor
        é só efetuar o pagamento.<br><br>

        Após o pagamento você será redirecionado para seu dashboard na tela das suas chaves
        <Highlight>
        <a href="https://app.euyo.me/keys" target="_blank" style="text-decoration: none; color: #585858">
          https://app.euyo.me/keys
        </a>
        </Highlight><br><br>

        Geralmente a PicPay não leva mais que alguns minutos para a validação do pagamento,
        caso a chave não seja criada no prazo de um dia, por favor entre em contato com
        a nossa <a href="https://euyo.me/euyome">central de relacionamentos</a>.<br><br>

        Parabéns você comprou sua primeira chave PRO, e no próximo tutorial iremos
        aprender a como associar essa chave a um perfil. Nos vemos lá.

      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help/adding-cover-video">Anterior</v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/help/using-prokey">Próximo</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Highlight from '~/components/Highlight.vue'
export default {
  components: { Highlight },

}
</script>

<style>

</style>
