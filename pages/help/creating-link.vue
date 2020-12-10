<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>
        Criando seu primeiro link
      </v-card-title>
      <v-card-subtitle class="text-caption">
        Neste tutorial iremos aprender a criar nosso primeiro link
      </v-card-subtitle>
      <v-card-text class="text-justify">
        Agora que já temos nosso perfil criado, é hora de começar a criar nossos links.
        Na euyo.me escolhemos o tipo do link a ser criado e então colocamos as informações.
        A partir do dashboard do perfil vamos clicar em <Highlight>Links</Highlight>.<br><br>
        Você será redireciando para a tela dos seus links, como ainda não temos nenhum
        link criado, vamos clicar em <Highlight>Adicionar Link</Highlight>.

        <v-row class="my-4">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607373515/docs/add-links_design_kjtwqm.png" />
          </v-col>
        </v-row>

        A seguir você será redirecionado para a tela de criação do link.

        <v-row class="my-4">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607374309/docs/dashboard-link_e8uesh.png" />
          </v-col>
        </v-row>
        Nesta tela temos que escolher o <Highlight>tipo</Highlight> que será o link, o <Highlight>título</Highlight>
        que o link irá ter, ou seja o nome do botão e colocar a <Highlight>ação</Highlight>
        do link conforme o tipo de link escolhido, calma que apesar de ser a parte mais confusa do processo,
        você vai ver que tudo faz sentido.<br><br>

        Para facilitar a criação do link, nos separamos os links em algumas categorias, sendo as mais comuns
        <Highlight>Website</Highlight>,
        <Highlight>WhatsApp</Highlight>,
        <Highlight>Telefone</Highlight> e
        <Highlight>Instagram</Highlight>,
        <Highlight>Facebook</Highlight>,
        <Highlight>Email</Highlight>.
        Vamos descobrir mais sobre eles agora.

        <v-card flat outlined class="mt-6">
          <v-card-title>Website</v-card-title>
          <v-card-text>
            O tipo website é o tipo mais genérico, ou seja aceita qualquer forma de
            url que você queira inserir, que comece com <Highlight>https://</Highlight>
            vale ressaltar que não aceitamos links que não sejam seguros por isso é
            imprescindível que o link seja https.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="mt-6">
          <v-card-title>WhatsApp e Telefone</v-card-title>
          <v-card-text>
            O tipo de ação que o link WhatsApp/Telefone espera, é o número do seu WhatsApp com
            o <Highlight>código do país</Highlight>, por exemplo se seu número é
            <Highlight>(11)9 9999-9999</Highlight> você irá colocar na caixa de
            texto da ação do link <Highlight>5511999999999</Highlight>, onde 55 é
            o código do país (Brasil).
          </v-card-text>
        </v-card>

        <v-card flat outlined class="mt-6">
          <v-card-title>Instagram e Facebook</v-card-title>
          <v-card-text>
            O tipo de ação que o link Instagram/Facebook espera, é o o seu usuário,
            geralmente aquele após o <Highlight>@</Highlight>, por exemplo, a euyome
            no instagram é conhecida como
            <a href="https://instagram.com/euyo.me" target="_blank" style="text-decoration: none; color: #585858">
              <Highlight>@euyo.me</Highlight>
            </a>
          </v-card-text>
        </v-card>

        <v-card flat outlined class="my-6">
          <v-card-title>Email</v-card-title>
          <v-card-text>
            O tipo de ação que o link Email espera, é o o seu email, sem muito
            segredo neste tipo de link, é só colocar seu email no formato
            <Highlight>email@domínio.com</Highlight>
          </v-card-text>
        </v-card>
        Usando as intruções acima, após você criar seu primeiro link, você será redirecionado
        novamente para a tela de links, agora com o seu link recém criado.

        <v-row class="my-4">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607377298/docs/links_lwq83n.png" />
          </v-col>
        </v-row>

        No próximo tutorial iremos aprender como customizar nosso perfil.
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" to="/help/creating-profile">Anterior</v-btn>
        <v-spacer></v-spacer>
        <v-btn text color="primary" to="/help/customizing-avatar">Próximo</v-btn>
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
