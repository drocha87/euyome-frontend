<template>
  <v-container fluid>
    <v-row align="center" :class="{ 'px-12': $vuetify.breakpoint.mdAndUp }">
      <v-col cols="12" md="6">
        <v-container>
          <Header title="você a um clique" subtitle="sempre conectado" />
          <Paragraph class="mt-5">
            Seu perfil virtual em forma de link, utilize na sua biografia das
            redes sociais e conversa com clientes. Tudo sobre você de uma forma
            super personalizada.
          </Paragraph>
          <div class="cover__left__button d-flex flex-column align-center">
            <v-btn
              class="mt-6 mb-4 px-6"
              type="submit"
              dark
              rounded
              elevation="0"
              color="#21c25e"
              height="40px"
              to="/register"
            >cadastre-se grátis</v-btn>
            <a class="text__login" href="https://app.euyo.me/login">já tenho cadastro</a>
          </div>
        </v-container>
      </v-col>
      <v-col cols="12" md="6">
        <v-container class="text-center">
          <video autoplay muted loop :height="videoHeight">
            <source
              src="https://res.cloudinary.com/euyome/video/upload/v1611948727/frontend/Untitled_design_5_hojnmh.mp4"
              type="video/mp4"
            />
          </video>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    users() {
      return this.$store.state.users;
    },

    videoHeight(): string {
      return this.$vuetify.breakpoint.smAndDown ? '300px' : '550px';
    },
  },
});
</script>

<style lang="scss" scoped>
.cover__left__button {
  max-width: 200px;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
}

.cover__left__input {
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
}

.text__login {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  text-decoration: none;
  color: #7ebc89;
}
</style>
