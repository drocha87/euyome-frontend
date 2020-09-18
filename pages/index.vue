<template>
  <div>
    <Cover />
    <v-container>
      <About class="top__margin" />
      <Impressions class="top__margin" />
      <Showcases class="top__margin" />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cover from '@/components/Cover.vue';
import About from '@/components/About.vue';
import Impressions from '@/components/Impressions.vue';
import Showcases from '@/components/Showcases.vue';
import { Context } from '@nuxt/types';

export default Vue.extend({
  layout(ctx: Context) {
    return ctx.isMobileOrTablet ? 'mobile' : 'default';
  },

  components: {
    Cover,
    About,
    Showcases,
    Impressions,
  },
});
</script>

<style lang="scss">
* {
  font-family: 'Rubik', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');

.top__margin {
  margin-top: 4rem;
  @media screen and (max-width: 600px) {
    margin-top: 3rem;
  }
}
</style>
