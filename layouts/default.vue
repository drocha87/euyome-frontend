<template>
  <v-app>
    <v-app-bar color="white" flat>
      <v-row class="mx-auto" align="center" style="max-width: 1024px">
        <nuxt-link to="/" append style="display: block">
          <img
            src="https://res.cloudinary.com/euyome/image/upload/v1611950847/frontend/brand-logo_h_ctnkt6.svg"
            height="38px"
          />
        </nuxt-link>

        <!-- <NavigationDrawer v-if="smallScreen" v-model="drawer" /> -->
        <div v-if="!smallScreen" class="ml-auto">
          <button class="button_login" @click="login()">Contato</button>
        </div>

        <!-- <v-app-bar-nav-icon
          v-if="smallScreen"
          class="ml-auto"
          @click="drawer = true"
        /> -->
      </v-row>
    </v-app-bar>

    <v-main fill-height class="mx-auto" style="max-width: 1280px">
      <nuxt />

      <footer class="mt-12 pb-6" width="auto">
        <v-container>
          <v-row justify="center">
            <div class="mt-4 text-center primary--text">
              <div>
                Todos os direitos reservados a euyo.me &copy;
                {{ new Date().getFullYear() }}
              </div>
              <nuxt-link class="font-weight-medium primary--text" to="/termos">
                TERMOS E CONDIÇÕES
              </nuxt-link>
            </div>
          </v-row>
        </v-container>
      </footer>
    </v-main>
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
      window.location.href = 'https://euyo.me/euyome';
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
