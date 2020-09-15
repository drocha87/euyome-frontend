<template>
  <div>
    <Cover />
    <About />
    <Showcases />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cover from '@/components/Cover.vue';
import About from '@/components/About.vue';
import Showcases from '@/components/Showcases.vue';

export default Vue.extend({
  components: {
    Cover,
    About,
    Showcases,
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap');
</style>
