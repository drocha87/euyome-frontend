<template>
  <v-container>
    <section id="impressions">
      <v-row>
        <v-col>
          <v-img
            class="mx-auto"
            width="180px"
            :src="require('~/assets/images/impressions.png')"
          ></v-img>
        </v-col>
        <v-col cols="7">
          <Header title="uma impressão" subtitle="um clique" />
          <Paragraph class="mt-8 pr-12">
            Pronto! Após isto, seu link já vai estar disponível e depois é só
            compartilhar nas suas conversas e biografia.
          </Paragraph>
        </v-col>
      </v-row>
    </section>
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
.about__info {
  margin-top: 2rem;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  text-transform: uppercase;

  color: #c4c4c4;
}

.normal_text {
  font-size: 1.3rem;
  font-weight: 700;
}

.highlight_text {
  font-size: 2rem;
  font-weight: 700;
  color: #fb5607;
}

.about {
  font-family: 'Rubik', sans-serif;
  margin-top: 2.8rem;
  .about_title {
    text-align: center;
    text-transform: uppercase;
  }
  .about_content {
    margin-top: 1.4rem;
    padding: 0 2rem;
    text-align: center;
    font-weight: 500;
    font-size: 0.9rem;
  }
}
</style>
