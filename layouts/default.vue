<template>
  <v-app>
    <v-app-bar color="white" flat fixed clipped-right app>
      <v-row class="mx-auto" align="center" style="max-width: 1024px">
        <nuxt-link to="/" append style="display: block">
          <img
            src="https://res.cloudinary.com/euyome/image/upload/v1611950847/frontend/brand-logo_h_ctnkt6.svg"
            height="32px"
          />
        </nuxt-link>

        <NavigationDrawer v-if="smallScreen" v-model="drawer" />

        <v-row
          v-else
          class="ml-auto"
          align="end"
          justify="end"
          style="max-width: 720px"
        >
          <v-col class="text-center">
            <a
              class="topbar__link"
              href="https://instagram.com/euyo.me"
              target="_blank"
              >Instagram</a
            >
          </v-col>
          <v-col class="text-center">
            <a class="topbar__link" href="/#prices">Preços</a>
          </v-col>
          <v-col class="text-center">
            <a
              class="topbar__link"
              href="https://euyo.me/euyome"
              target="_blank"
              >Contato</a
            >
          </v-col>
          <v-col class="text-center">
            <nuxt-link class="topbar__link" to="/help">Ajuda</nuxt-link>
          </v-col>
          <v-col>
            <button class="button_login" @click="login()">Login</button>
          </v-col>
        </v-row>

        <v-app-bar-nav-icon
          v-if="smallScreen"
          class="ml-auto"
          @click="drawer = true"
        />
      </v-row>
    </v-app-bar>

    <v-main fill-height>
      <nuxt />
    </v-main>

    <v-footer class="mt-12 pb-6" color="#21c25e">
      <div class="mx-auto text-center white--text">
        <span class="text-caption">
          <nuxt-link to="/" style="text-decoration: none; color: white"
            >euyo.me &copy; {{ new Date().getFullYear() }}</nuxt-link
          >
        </span>
        <p class="text-caption">Todos os direitos reservados a euyo.me.</p>
        <nuxt-link class="text-caption terms_links" to="/termos"
          >TERMOS E CONDIÇÕES</nuxt-link
        >
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
    },
  },

  //   created() {
  //     this.$store.dispatch('fetchShowcasesUsers');
  //   },

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

.button_login {
  width: 130px;
  height: 35px;
  background-color: $primary-green;
  color: #fff;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  outline: none;
  border-radius: 100vw;
}

.topbar__link {
  display: inline-block;
  font-family: Rubik;
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;
  text-decoration: none;
  color: #212121 !important;

  &:after {
    content: '';
    display: block;
    margin-top: 2px;
    width: 0;
    height: 2px;
    background: $primary-green;
    transition: all 0.3s ease-in-out;
  }

  &:hover:after {
    width: 90%;
    transition: width 0.3s;
  }
}

.terms_links {
  color: white !important;
  text-decoration: none;
  font-size: 0.8rem;
}
</style>
