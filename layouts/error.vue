<template>
  <v-container>
    <div v-if="error.statusCode === 404">
      <NotFound />
    </div>

    <h1 v-else>
      {{ error.statusCode + error.message }}
    </h1>

    <div class="d-flex flex-row justify-center">
      <v-btn dark depressed color="#7ebc89" to="/">Página Principal</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import NotFound from '@/components/Error/NotFound.vue';

export default Vue.extend({
  layout: 'empty',

  components: {
    NotFound,
  },

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      pageNotFound: 'Página ou Usuário não existe',
      otherError: 'Ops, erro interno.',
    };
  },

  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
});
</script>
