<template>
  <v-app>
    <v-app-bar
      class="app__container"
      :color="barBgColor"
      flat
      fixed
      clipped-right
      :app="$vuetify.breakpoint.smAndDown"
    >
      <div class="logo" style="cursor: pointer" @click="$router.push('/')">
        euyo.me
      </div>

      <v-btn
        class="topbar__link"
        text
        color="#c4c4c4"
        href="https://instagram.com/euyo.me"
      >
        Instagram
      </v-btn>
      <v-btn
        class="topbar__link"
        text
        color="#c4c4c4"
        @click="$vuetify.goTo('#prices', scrollOptions)"
      >
        Preços
      </v-btn>
      <v-btn class="topbar__link" text color="#c4c4c4" to="/euyome">
        Contato
      </v-btn>
      <v-btn class="topbar__link" text color="#c4c4c4" to="/help">
        Ajuda
      </v-btn>
      <v-spacer></v-spacer>
      <button class="button_login" @click="login()">Login</button>
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
      barBgColor: 'transparent',
      scrollOptions: {
        duration: 500,
        offset: 0,
      },
    };
  },
  created() {
    this.$store.dispatch('fetchShowcasesUsers');
  },
  mounted() {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.barBgColor = 'white';
      } else {
        this.barBgColor = 'transparent';
      }
    };
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

.terms_links {
  color: white !important;
  text-decoration: none;
  font-size: 0.8rem;
}
</style>
