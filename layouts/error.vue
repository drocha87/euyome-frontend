<template>
  <v-container>
    <div v-if="error.statusCode === 404">
      <NotFound />
    </div>

    <h1 v-else>
      {{ error.statusCode + error.message }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
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
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
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

<style scoped>
h1 {
  font-size: 20px;
}
</style>
