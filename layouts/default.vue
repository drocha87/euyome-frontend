<template>
  <v-app>
    <v-app-bar color="#fff" elevation="2" max-width="100%" app>
      <div class="d-flex flex-row align-center" style="width: 100%">
        <div
          class="logo d-flex flex-row align-center"
          style="cursor: pointer"
          @click="$router.push('/')"
        >
          euyo.me
        </div>
        <v-spacer></v-spacer>
        <v-btn class="white--text" depressed color="primary" to="/login">
          Login
        </v-btn>
      </div>
    </v-app-bar>
    <v-main class="main__background" fill-height>
      <nuxt />
    </v-main>

    <!-- <v-overlay :value="$store.state.loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay> -->

    <v-footer fixed app>
      <div class="mx-auto">
        <span class="text-caption">
          <nuxt-link to="/" style="text-decoration: none; color: #585858">
            euyo.me &copy; {{ new Date().getFullYear() }}
          </nuxt-link>
        </span>
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
}
</style>
