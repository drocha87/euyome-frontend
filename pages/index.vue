<template>
  <div>
    <Cover />
    <v-container>
      <About class="top__margin" />
      <Impressions class="top__margin" />
      <Showcases class="top__margin" />
      <Prices id="prices" class="top__margin" />
      <Faq id="prices" class="top__margin" />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cover from '@/components/Cover.vue';
import About from '@/components/About.vue';
import Impressions from '@/components/Impressions.vue';
import Showcases from '@/components/Showcases.vue';
import Prices from '@/components/Prices.vue';
import { Context } from '@nuxt/types';

export default Vue.extend({
  layout(ctx: Context) {
    // console.log(ctx.app.vuetify.framework.breakpoint.mdAndDown);
    return ctx.isMobileOrTablet ? 'mobile' : 'default';
  },

  components: {
    Cover,
    About,
    Showcases,
    Impressions,
    Prices,
  },
});
</script>

<style lang="scss">
* {
  font-family: 'Rubik', sans-serif;
}

.top__margin {
  margin-top: 4rem;
  @media screen and (max-width: 600px) {
    margin-top: 3rem;
  }
}

.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>
