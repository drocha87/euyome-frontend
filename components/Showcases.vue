<template>
  <v-container class="showcases">
    <p class="showcase_title">Euyome's</p>

    <p class="showcase_content">
      Alguns de nossos euyome's para você clicar e conhecer melhor! Venha fazer
      parte dessa comunidade.
    </p>
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
          <v-list-item :href="`https://euyo.me/${user.username}`">
            <v-list-item-avatar size="40px">
              <v-img
                :src="`https://res.cloudinary.com/euyome/image/upload/${user.avatar}`"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption">
                {{ user.subtitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <v-btn
      style="display: block"
      width="250px"
      class="mx-auto mt-7"
      height="52px"
      dark
      rounded
      elevation="0"
      color="primary"
      >cadastre-se grátis</v-btn
    >
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
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
