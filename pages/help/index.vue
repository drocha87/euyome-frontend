<template>
  <v-container :class="{ 'mt-12': $vuetify.breakpoint.mdAndUp }">
    <Header class="mt-6" center title="ajuda" subtitle="central de" />

      <v-row class="mt-8">
        <v-col cols="12" sm="4">
          <v-card>
            <v-card-title>
              Primeiros Passos
            </v-card-title>
            <v-card-subtitle class="text-caption">
              Uma introdução rápida aos passos necessários para ter seu perfil customizado e funcionando
            </v-card-subtitle>
            <v-card-text>
              <div v-for="item in items" :key="item.id">
                <nuxt-link to="#">{{ item.title }}</nuxt-link>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="fill-height">
            <v-card-title>
              Tutoriais
            </v-card-title>
            <v-card-subtitle class="text-caption">
              Aprenda como tornar seu perfil ainda mais exclusivo, com funcionalidades exclusivas da euyo.me
            </v-card-subtitle>
            <v-card-text>
              <div v-for="item in tutorials" :key="item.id">
                <nuxt-link to="#">{{ item.title }}</nuxt-link>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="fill-height">
            <v-card-title>
              Para Agências e Empresas
            </v-card-title>
            <v-card-subtitle class="text-caption">
              Funcionalidades exclusivas para as agências e empresas.
            </v-card-subtitle>
            <v-card-text>
              <div v-for="item in agencies" :key="item.id">
                <nuxt-link to="#">{{ item.title }}</nuxt-link>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <!-- <v-col v-for="item in items" :key="item.id"> -->
        <!--   <v-card class="fill-height" max-width="250px" min-width="250px"> -->
        <!--     <v-card-title class="text-body-1 font-weight-bold"> -->
        <!--       {{ item.title }} -->
        <!--     </v-card-title> -->
        <!--     <v-card-subtitle class="text-caption" > -->
        <!--       {{ item.content }} -->
        <!--     </v-card-subtitle> -->
        <!--     <v-card-actions> -->
        <!--       <v-spacer></v-spacer> -->
        <!--       <v-btn text small color="primary">Ir para o tutorial</v-btn> -->
        <!--     </v-card-actions> -->
        <!--   </v-card> -->
        <!-- </v-col> -->
      </v-row>
      <Faq id="prices" class="top__margin" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'default',

  data() {
    return {
      items: [
        {
          id: 0,
          title: 'Criando sua conta',
        },
        {
          id: 1,
          title: 'Criando um link',
        },
        {
          id: 2,
          title: 'Customizando seu perfil',
        },
      ],
      tutorials: [
        {
          id: 3,
          title: 'Criando um Card',
        },
        {
          id: 4,
          title: 'Adicionando um video na capa',
        },
        {
          id: 5,
          title: 'Comprando uma chave PRO',
        }
      ],
      agencies: [
        {
          id: 3,
          title: 'Criando seu perfil',
        },
        {
          id: 4,
          title: 'Divulgando seu link da agência/empresa',
        },
        {
          id: 5,
          title: 'Compartilhando as estatísticas dos seus clientes/funcionários',
        }
      ]
    }
  }
})
</script>
