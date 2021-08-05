<template>
  <v-container>
    <Header center title="como funciona" subtitle="quer saber" />
    <div class="infocard__container">
      <InfoCard
        class="infocard"
        title="um"
        subtitle="Orçamento"
        content="Faça seu orçamento sem compromisso com um de nossos consultores"
      />
      <InfoCard
        class="infocard"
        title="dois"
        subtitle="Estratégia"
        content="Fale sobre sua você e sua marca com nosso time de desenvolvimento"
      />
      <InfoCard
        class="infocard"
        title="três"
        subtitle="Layout"
        content="Receba um layout exclusivo e personalizado com a cara da sua marca"
      />
      <InfoCard
        class="infocard"
        title="quatro"
        subtitle="Divulgue"
        content="Pronto, seu cartão de visitas está online 24 horas por dia 7 dias da semana*"
      />
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import InfoCard from '@/components/InfoCard.vue';
// import Paragraph from '@/components/Paragraph.vue';

export default Vue.extend({
  components: {
    Header,
    InfoCard,
    // Paragraph,
  },
});
</script>

<style lang="scss" scoped>
.about__info {
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }
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

.infocard__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 4rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
}

.infocard {
  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
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
