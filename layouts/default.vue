<template>
  <v-app>
    <v-app-bar class="pa-0" color="#fff" elevate-on-scroll max-width="100%" app>
      <div class="logo" style="cursor: pointer" @click="$router.push('/')">
        euyo.me
      </div>
      <v-spacer></v-spacer>
      <v-btn dark depressed elevation="0" color="primary" to="/login">
        Login
      </v-btn>
    </v-app-bar>

    <v-main fill-height>
      <nuxt />
    </v-main>

    <v-footer class="mt-12" color="primary">
      <div class="mx-auto text-center white--text">
        <span class="text-caption">
          <nuxt-link to="/" style="text-decoration: none; color: white">
            euyo.me &copy; {{ new Date().getFullYear() }}
          </nuxt-link>
        </span>
        <p class="text-caption">Todos os direitos reservados a euyo.me.</p>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('fetchShowcasesUsers');
  },
});
</script>

<style lang="scss">
html {
  overflow-y: auto;
}

.logo {
  font-family: 'Patua One', cursive;
  font-size: 2.4rem;
  color: #2f3e46;
  height: 100%;
}
</style>
