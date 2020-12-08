<template>
  <v-container>
    <Header center title="ajuda" subtitle="central de" />

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
              <div v-for="item in items" :key="item.to">
                <nuxt-link :to="item.to" append>{{ item.title }}</nuxt-link>
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
              <div v-for="item in tutorials" :key="item.to">
                <nuxt-link :to="item.to" append>{{ item.title }}</nuxt-link>
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
              <div v-for="item in agencies" :key="item.to">
                <nuxt-link :to="item.to" append>{{ item.title }}</nuxt-link>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
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
          to: 'creating-account',
          title: 'Criando sua conta',
        },
        {
          to: 'creating-profile',
          title: 'Criando seu perfil',
        },
        {
          to: 'creating-link',
          title: 'Criando um link',
        },
        {
          to: 'customizing-avatar',
          title: 'Customizando sua foto de perfil ',
        },
        {
          to: 'customizing-profile',
          title: 'Estilizando seu perfil',
        },
      ],
      tutorials: [
        {
          to: 'creating-card',
          title: 'Criando um Card',
        },
        {
          to: 'creating-account',
          title: 'Adicionando um video na capa',
        },
        {
          to: 'creating-account',
          title: 'Comprando uma chave PRO',
        },
        {
          to: 'creating-account',
          title: 'Usando sua chave PRO',
        }
      ],
      agencies: [
        {
          to: 'creating-account',
          title: 'Criando seu perfil',
        },
        {
          to: 'creating-account',
          title: 'Divulgando seu link da agência/empresa',
        },
        {
          to: 'creating-account',
          title: 'Compartilhando as estatísticas dos seus clientes/funcionários',
        }
      ]
    }
  }
})
</script>
