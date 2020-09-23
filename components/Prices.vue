<template>
  <v-container>
    <Header center title="nossos planos" subtitle="quais são" />

    <v-container class="mt-6 center-mw600">
      <v-simple-table :dense="$vuetify.breakpoint.smAndDown">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center"></th>
              <th class="text-center header gray">Gratuito</th>
              <th class="text-center header">
                <span class="pro_orange"> PRO </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.name">
              <td>
                <span class="item__desc">
                  {{ item.name }}
                </span>
              </td>
              <td class="text-center">
                <font-awesome-icon v-if="!item.pro" :icon="['fas', 'check']" />
              </td>
              <td class="text-center">
                <font-awesome-icon :icon="['fas', 'check']" />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-card class="price__container" flat>
        <v-card-title class="justify-center">
          <p class="price__header">R$ 4,99</p>
        </v-card-title>

        <v-card-text>
          <p class="price__card__content">ao mês no plano anual</p>
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="mx-auto px-8"
            height="52px"
            dark
            rounded
            elevation="0"
            color="#FE5D26"
            to="/register"
          >
            experimente grátis
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  components: {
    Header,
  },

  data() {
    return {
      items: [
        {
          name: 'Links ilimitados',
          pro: false,
        },
        {
          name: 'Sem anúncios',
          pro: false,
        },
        {
          name: 'Compartilhamentos ilimitados',
          pro: false,
        },
        {
          name: 'Salto para o link',
          pro: false,
        },
        {
          name: 'Foto de perfil',
          pro: false,
        },
        {
          name: 'Estatísticas',
          pro: true,
        },
        {
          name: 'Customização ilimitada',
          pro: true,
        },
        {
          name: 'Video na capa',
          pro: true,
        },
        {
          name: 'Card na capa',
          pro: true,
        },
      ],
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },

  // created() {
  //   this.$store.dispatch('fetchShowcasesUsers');
  // },
});
</script>

<style lang="scss" scoped>
* {
  font-family: Rubik, Roboto, sans-serif;
}
.center-mw600 {
  max-width: 600px;
  margin: 0 auto;
}

.price__container {
  max-width: 250px;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
}

.price__header {
  font-size: 2rem;
  font-weight: 700;
}
.price__card__content {
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #c4c4c4;
  text-align: center;
  padding: 0 1rem;
}

.item__desc {
  font-family: Rubik, Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #7ebc89;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
}

.header {
  font-family: Rubik, Roboto, sans-serif;
  font-size: 1rem !important;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem !important;
  }
}

.pro_orange {
  color: #fe5d26;
}

.gray {
  color: #c4c4c4;
}
</style>
