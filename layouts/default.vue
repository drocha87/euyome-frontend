<template>
  <v-app>
    <v-app-bar
      color="white"
      flat
      fixed
      clipped-right
      app
      >
      <nuxt-link class="logo" to="/" append>
        euyo.me
      </nuxt-link>

      <NavigationDrawer v-if="smallScreen" v-model="drawer"/>

      <v-row v-else class="ml-8 mt-4" align="end" justify="center" style="max-width: 600px">
        <v-col class="text-center">
          <a class="topbar__link"  href="https://instagram.com/euyo.me" target="_blank">
            Instagram
          </a>
        </v-col>
        <v-col class="text-center">
          <a class="topbar__link" href="#prices">
            Preços
          </a>
        </v-col>
        <v-col class="text-center">
          <a class="topbar__link"  href="https://euyo.me/euyome" target="_blank">
            Contato
          </a>
        </v-col>
        <v-col class="text-center">
          <nuxt-link class="topbar__link"  to="/help">
            Ajuda
          </nuxt-link>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon v-if="smallScreen" @click="drawer = true" />
      <button v-else class="button_login" @click="login()">Login</button>
    </v-app-bar>

    <v-main fill-height>
      <nuxt />
    </v-main>

    <v-footer class="mt-12 pb-6" color="primary">
      <div class="mx-auto text-center white--text">
        <span class="text-caption">
          <nuxt-link to="/" style="text-decoration: none; color: white">
            euyo.me &copy; {{ new Date().getFullYear() }}
          </nuxt-link>
        </span>
        <p class="text-caption">Todos os direitos reservados a euyo.me.</p>
        <nuxt-link class="text-caption terms_links" to="/termos">
          TERMOS E CONDIÇÕES
        </nuxt-link>
      </div>
    </v-footer>
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

  computed: {
    smallScreen() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },

  created() {
    this.$store.dispatch('fetchShowcasesUsers');
  },

  methods: {
    login() {
      window.location.href = 'https://app.euyo.me/login';
    },
  },
});
</script>

<style lang="scss">
html {
  overflow-y: auto;
}

.app__container {
  margin-top: 1rem;
  padding: 0 3rem;
  transition: background-color 150ms ease-in-out;

  @media screen and (max-width: 600px) {
    padding: 0;
  }
}

.logo {
  font-family: 'Patua One', cursive;
  font-size: 2.4rem;
  color: #7ebc89;
  text-decoration: none;
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
  text-decoration: none;
}

.drawer__link {
  font-family: Rubik;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
  color: #7ebc89;
}

.terms_links {
  color: white !important;
  text-decoration: none;
  font-size: 0.8rem;
}
</style>
