<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800px">
      <v-card-title>
        Criando seu perfil de agência ou empresa
      </v-card-title>
      <v-card-subtitle class="text-caption">
        Neste tutorial iremos aprender a criar o perfil de agência ou empresa
      </v-card-subtitle>
      <v-card-text class="text-justify">
        Ao criar sua conta aqui na euyo.me, você automaticamente tem a possibilidade
        de ter quantos perfis você quiser, sendo assim, a gente pensou em como
        a gente poderia ajudar você a divulgar todos os seus perfis de uma só vez.<br><br>

        Vamos imaginar um cenário simples, onde uma imobiliária cria sua conta aqui
        na euyo.me, e cria o perfil dos seus 10 corretores de imóveis, para que eles
        possam usufruir dos benefícios da euyo.me.<br><br>

        O procedimento então fica da seguinte maneira, a imobiliária compartilha o
        link dela em suas redes sociais, e cada corretor compartilha seu próprio link
        também em suas redes sociais, o cliente acessa a rede social da imobiliária
        e clica no link que ela compartilhou, isso vai levar o cliente a entrar em
        contato com a imobiliária e a imobiliária tem que repassar este contato para um
        corretor, e o corretor retornar o contato com o cliente.<br><br>

        <v-row>
          <v-col>
            <ShowImage max-height="350px"
                       image="https://res.cloudinary.com/euyome/image/upload/v1607610265/docs/Blue_and_Ivory_Cycle_Diagram_Chart_1_lmabjf.png" />
          </v-col>
        </v-row>

        Pensando neste ciclo, a gente entende que alguns passos podem ser reduzidos,
        colocando o cliente diretamente em contato com o corretor, agilizando o
        atendimento, e criando uma melhor experiência para o cliente. Sendo assim,
        vamos criar nosso perfil de agência/empresa, na barra lateral do dashboard
        da sua conta clique em <Highlight>Configurações</Highlight> e depois em
        <Highlight>Agência</Highlight>.

        <v-row class="my-6">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607610907/docs/Untitled_design_7_eoig0r.png" />
          </v-col>
        </v-row>

        Com isso vamos ser redirecionados para a tela <Highlight>Configurar Agência</Highlight>,
        nesta tela temos algumas opções como listado abaixo.<br><br>

        <v-card flat outlined class="my-6">
          <v-card-title>Selecionar Perfil</v-card-title>
          <v-card-text>
            A primeira opção que aparece é uma caixa para selecionar o perfil base da
            agência, sendo assim, você já precisa ter criado o perfil da sua agência/empresa
            previamente, e então selecionar ele. Lembre-se que usando este perfil como
            base, a euyo.me irá utilizar o avatar e nome de acesso deste perfil no perfil
            da agência.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="my-6">
          <v-card-title>Título</v-card-title>
          <v-card-text>
            O título que irá aparecer na tela do perfil da sua agência, geralmente
            aqui você coloca o nome da agência ou da empresa.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="my-6">
          <v-card-title>Bio</v-card-title>
          <v-card-text>
            Uma descrição breve da sua agência ou empresa.
          </v-card-text>
        </v-card>

        <v-card flat outlined class="my-6">
          <v-card-title>Título da barra de perfis</v-card-title>
          <v-card-text>
            Aqui será o título que irá aparecer acima da lista dos seus perfis, como
            por exemplo, <Highlight>Meus Clientes</Highlight> caso você seja uma agência,
            ou <Highlight>Nossos Colaboradores</Highlight> caso você seja uma empresa.
          </v-card-text>
        </v-card>

        Preenchendo estas informações e clicando em salvar, seu perfil da agência,
        já estará automaticamente publicado e disponível para acesso ao publico.
        Para isto basta acessar o seu perfil em <Highlight>https://euyo.me/a/SEU_PERFIL</Highlight>
        onde <Highlight>SEU_PERFIL</Highlight> deverá ser substituido pelo nome
        do perfil base que você escolheu lá na primeira opção, ou se você preferir
        é só clicar no link que aparece na parte superior da tela em
        <Highlight>Configurar Agência</Highlight>

        <v-row class="my-6">
          <v-col>
            <ShowImage max-height="350px"
                       image="https://res.cloudinary.com/euyome/image/upload/v1607612802/docs/Untitled_design_8_umjtt8.png" />
          </v-col>
        </v-row>
        Agora acessando seu link você deveria ver uma tela como a tela a seguir:

        <v-row class="my-6">
          <v-col>
            <ShowImage image="https://res.cloudinary.com/euyome/image/upload/v1607622506/docs/imobiliaria_xcwlb2.png" />
          </v-col>
        </v-row>
        Agora você pode compartilhar o link da sua agência/empresa e colocar o cliente
        diretamente em contato com seus corretores, agilizando  o atendimento e
        criando uma melhor experiência para o cliente, agora o ciclo fica assim.

        <v-row class="my-6">
          <v-col>
            <ShowImage max-height="350px"
                       image="https://res.cloudinary.com/euyome/image/upload/v1607623020/docs/Blue_and_Ivory_Cycle_Diagram_Chart_2_rn94yq.png" />
          </v-col>
        </v-row>

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

<script>
export default {

}
</script>

<style>

</style>
