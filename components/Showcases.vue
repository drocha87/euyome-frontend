<template>
  <v-container>
    <Header center title="nossos euyome’s" subtitle="para quem é, e quem são" />
    <v-row class="mt-6" align="center">
      <v-col cols="12" md="6">
        <Paragraph>
          Euyo.me é para todo mundo, para todos os tipos de seguimento. Seja
          você uma Banda famosa, Escola de Idiomas, DJ, confeiteiro, advogada,
          influenciadora digital, etc... Se seu negócio ou você precisa se
          apresentar, você precisa de um cartão de visitas virtual.
        </Paragraph>
        <div
          class="mt-12"
          :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
        >
          <RegisterButton label="Saber Mais" />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-carousel
          class="mx-auto"
          style="max-width: 300px"
          light
          height="80px"
          :show-arrows="false"
          hide-delimiter-background
          hide-delimiters
          cycle
          interval="4000"
          continuous
        >
          <v-carousel-item
            v-for="user in users"
            :key="user.username"
            transition="fade-transition"
            reverse-transition="fade-transition"
          >
            <v-container>
              <v-list-item :href="`https://euyo.me/${user.name}`">
                <v-list-item-avatar size="60px">
                  <v-img
                    :src="`https://res.cloudinary.com/euyome/image/upload/${user.avatar}`"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{
                    user.title || user.name
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="text-caption">{{
                    user.subtitle
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-container>
          </v-carousel-item>
        </v-carousel>
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

  computed: {
    users() {
      return this.$store.state.users;
    },
  },

  // created() {
  //   this.$store.dispatch('fetchShowcasesUsers');
  // },
});
</script>

<style lang="scss" scoped>
.showcases {
  margin-top: 2rem;
  font-family: 'Rubik', sans-serif;

  .showcase_title {
    font-size: 2rem;
    font-weight: 700;
    color: #fb5607;
    text-align: center;
    text-transform: uppercase;
  }

  .showcase_content {
    margin-top: 1.4rem;
    padding: 0 2rem;
    text-align: center;
    font-weight: 500;
    font-size: 0.9rem;
  }

  .euyomes {
    margin: auto;
  }
}
</style>
