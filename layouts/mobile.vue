<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" right clipped app>
      <v-list nav dense>
        <v-list-item-group
          class="px-8"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-content class="drawer__link">
              Home
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="drawer__link">
              Instagram
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="drawer__link">
              Preços
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="drawer__link">
              Contato
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="drawer__link">
              Login
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      class="app__container"
      color="white"
      elevation="0"
      clipped-right
      app
    >
      <div class="logo" style="cursor: pointer" @click="$router.push('/')">
        euyo.me
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main fill-height>
      <nuxt />
    </v-main>

    <!-- <v-footer class="mt-12" color="primary" fixed>
      <div class="mx-auto text-center white--text">
        <span class="text-caption">
          <nuxt-link to="/" style="text-decoration: none; color: white">
            euyo.me &copy; {{ new Date().getFullYear() }}
          </nuxt-link>
        </span>
        <p class="text-caption">Todos os direitos reservados a euyo.me.</p>
      </div>
    </v-footer> -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      drawer: false,
    };
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

.app__container {
}

.logo {
  font-family: 'Patua One', cursive;
  font-size: 2.4rem;
  color: #7ebc89;
}

.button_login {
  width: 130px;
  height: 35px;
  background-color: #fff;
  color: #fe5d26;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  outline: none;
  border-radius: 100vw;
}

.topbar__link {
  margin: 0 1.5rem;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
  color: #c4c4c4;
}

.drawer__link {
  font-family: Rubik;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
  color: #7ebc89;
}
</style>
