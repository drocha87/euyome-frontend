<template>
  <div>
    <Cover />
    <!-- <About />
    <Showcases /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cover from '@/components/Cover.vue';
import About from '@/components/About.vue';
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
  },
});
</script>

<style lang="scss">
* {
  font-family: 'Rubik', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');
</style>
