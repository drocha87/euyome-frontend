<template>
  <div>
    <Cover />
    <v-container>
      <About class="top__margin" />
      <Impressions class="top__margin" />
      <Showcases class="top__margin" />
      <Prices id="prices" class="top__margin" />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'default',

   created() {
     this.$store.dispatch('fetchShowcasesUsers');
   },
});
</script>

<style lang="scss">
* {
  font-family: 'Rubik', sans-serif;
}

html {
  scroll-behavior: smooth;
}

.top__margin {
  margin-top: 4rem;
  @media screen and (max-width: 600px) {
    margin-top: 3rem;
  }
}

.v-card__text, .v-card__title {
  word-break: normal !important;
}
</style>
