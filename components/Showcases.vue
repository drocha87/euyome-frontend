<template>
  <v-container>
    <div class="d-flex flex-row justify-center">
      <Header title="nossos euyome’s" subtitle="pra quem é, e quem são" />
    </div>
    <v-row class="mt-6" align="center">
      <v-col>
        <Paragraph class="showcases__content">
          Euyo.me é pra todo mundo, para todos os tipos de seguimento. Se seu
          negócio ou você precisa se apresentar, você precisa de um perfil
          virtual.
        </Paragraph>
      </v-col>
      <v-col>
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
                <v-list-item-avatar size="60px">
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
      </v-col>
    </v-row>

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
.showcases__content {
}

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
