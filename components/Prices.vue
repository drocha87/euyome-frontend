<template>
  <v-container>
    <Header center title="nossos planos" subtitle="quais são" />

    <v-container class="mt-6 center-mw600">
      <v-simple-table :dense="$vuetify.breakpoint.smAndDown">
        <template #default>
          <thead>
            <tr>
              <th class="text-center"></th>
              <th class="text-center header gray">Gratuito</th>
              <th class="text-center header">
                <span class="pro_orange">PRO</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.name">
              <td>
                <span class="item__desc">{{ item.name }}</span>
              </td>
              <td class="text-center">
                <v-icon v-if="!item.pro" color="#212529">mdi-check-bold</v-icon>
                <!-- <font-awesome-icon v-if="!item.pro" :icon="['fas', 'check']" /> -->
              </td>
              <td class="text-center">
                <v-icon v-if="!item.pro" color="#6c757d">mdi-check</v-icon>
                <v-icon v-else color="#212529">mdi-check-bold</v-icon>
                <!-- <font-awesome-icon :icon="['fas', 'check']" /> -->
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
        <v-card-actions class="justify-center">
          <RegisterButton label="Faça seu cadastro GRÁTIS" width="300px" />
        </v-card-actions>
      </v-card>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import RegisterButton from './RegisterButton.vue';

export default Vue.extend({
  components: { RegisterButton },
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
          name: 'Modo restrito',
          pro: false,
        },
        {
          name: 'Meus Times',
          pro: false,
        },
        {
          name: 'Perfil do Time',
          pro: false,
        },
        {
          name: 'Formulário de captura',
          pro: false,
        },
        {
          name: 'Impressões',
          pro: true,
        },
        {
          name: 'Compartilhamento de impressões',
          pro: true,
        },
        {
          name: 'Customização ilimitada',
          pro: true,
        },
        {
          name: 'Vídeo na capa',
          pro: true,
        },
        {
          name: 'Destaque na capa',
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
  color: $primary-green;
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
  color: $primary-green;
}

.gray {
  color: #c4c4c4;
}
</style>
