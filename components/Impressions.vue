<template>
  <v-container>
    <v-row class="impressions_container">
      <v-col cols="12" md="5">
        <v-img
          class="mx-auto"
          width="180px"
          :src="require('~/assets/images/impressions.png')"
        ></v-img>
      </v-col>
      <v-col cols="12" md="7">
        <Header title="uma impressão" subtitle="um clique" />
        <Paragraph class="mt-4">
          Pronto! Após isto, seu link já vai estar disponível e depois é só
          compartilhar nas suas conversas e biografia.
        </Paragraph>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import Paragraph from '@/components/Paragraph.vue';

export default Vue.extend({
  components: {
    Header,
    Paragraph,
  },
});
</script>

<style lang="scss" scoped>
// .impressions_container {
//   padding: 0 4rem;
//   @media screen and (max-width: 600px) {
//     padding: 0 1rem;
//   }
// }
</style>
