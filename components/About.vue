<template>
  <v-container>
    <section id="about" class="about">
      <div class="d-flex flex-row justify-center">
        <Header title="como funciona" subtitle="quer saber" />
      </div>
      <div class="d-flex flex-row justify-space-around mt-12">
        <InfoCard
          title="um"
          subtitle="gratuito"
          content="Faça seu cadastro gratuito e experimente o PRo por 14 dias"
        />
        <InfoCard
          title="dois"
          subtitle="links"
          content="Adicione links das suas redes sociais e crie botões de ação"
        />
        <InfoCard
          title="três"
          subtitle="customize"
          content="Use a criatividade e personalize sua conta, com cores, imagens e card"
        />
      </div>
      <div class="about__info">
        Pronto! Após isto, seu link já vai estar disponível e depois é só
        compartilhar nas suas conversas e biografia.
      </div>
    </section>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import InfoCard from '@/components/InfoCard.vue';

export default Vue.extend({
  components: {
    Header,
    InfoCard,
  },
});
</script>

<style lang="scss" scoped>
.about__info {
  padding: 0 12rem;
  margin-top: 2rem;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
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
