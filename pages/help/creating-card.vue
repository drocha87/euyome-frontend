<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>
        Criando um Card na capa
      </v-card-title>
      <v-card-subtitle class="text-caption">
        Neste tutorial iremos aprender como criar um card na capa
      </v-card-subtitle>
      <v-card-text class="text-justify">
        Card é um elemento com grande apelo visual, que você pode usar para atrair
        a atenção do seu cliente e aumentar a conversão dos clicks.<br><br>

        Cada perfil PRO pode ter apenas um Card, e isso é intencional, pois dentro
        da estrutura do layout da euyo.me, o Card é um elemento de destaque, ficando
        acima de todos os botões logo abaixo do Título e do seu video institucional.<br><br>

        Para criar seu Card você precisa que seu perfil seja PRO e então a partir
        do dashboard do seu perfil clicar em <Highlight>Card na Capa</Highlight>.


        <v-row class="my-4">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607431057/docs/dashboard-profile-2_3_yfckhd.png" />
          </v-col>
        </v-row>

        Após isso você será redirecionado para a tela de criação do Card, nesta tela
        você terá algumas opções, como descrito abaixo:

        <v-card flat outlined class="mt-6">
          <v-card-title>Imagem do Card</v-card-title>
          <v-card-text>
            Ao escolher a imagem do card, dê preferência para imagens no formato
            de <Highlight>1080px por 608px</Highlight> pois assim o layout da imagem ficará
            excelente tanto em telas grandes quanto em telas pequenas. Lembre-se que ao escolher
            outro imagem para o card a imagem anteior será deletada permanentemente.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="mt-6">
          <v-card-title>Alterar a visibilidade do Card</v-card-title>
          <v-card-text>
            Ao criar seu Card pela primeira vez, será necessário ativar a opção de
            deixar o card visível, pois por padrão o Card ficaŕa oculto. A qualquer
            momento você poderá ocultar seu card deixando esta opção desativada e
            clicando em salvar.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="mt-6">
          <v-card-title>Título, Subtítulo e Texto</v-card-title>
          <v-card-text>
            Escolha um título e subtítulo para o seu Card, aqui o subtítulo ficará acima
            do título em fontes pequenas, lembrando que o <Highlight>subtítulo é opcional</Highlight>.
            O texto é o conteúdo do Card, dê preferência para textos com fortes argumentos para
            a conversação do click.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="my-6">
          <v-card-title>Link</v-card-title>
          <v-card-text>
            Na caixa de texto link, você irá colocar a <Highlight>URL</Highlight> da direção que o usuário
            ao clicar no card será redirecionado, não se esqueça que o link para qual
            o usuário será redirecionado tem que ser um link <Highlight>https://</Highlight> (link seguro).
          </v-card-text>
        </v-card>

        Não se esqueça que a qualquer alteração é necessário clicar em <Highlight>Salvar</Highlight>
        para efetivar a alteração.<br><br>
        Pronto, você já tem seu card criado com sucesso, no nosso tutorial sobre a
        <Highlight>Central de análises</Highlight> iremos explorar as
        <Highlight>Estatísticas do Card</Highlight>.<br><br>

        <v-row class="my-4">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607435088/docs/card-final_p1pmqn.png" />
          </v-col>
        </v-row>

        No próximo tutorial iremos descubrir como adicionar um video do YouTube na capa, até lá!
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help/customizing-profile">Anterior</v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/help/adding-cover-video">Próximo</v-btn>
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
