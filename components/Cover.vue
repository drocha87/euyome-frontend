<template>
  <v-container fluid>
    <v-row align="center" :class="{ 'px-12': $vuetify.breakpoint.mdAndUp }">
      <v-col cols="12" md="6">
        <v-container>
          <Header title="você a um clique" subtitle="sempre conectado" />
          <Paragraph class="mt-5">
            Seu cartão de vistas virtual, utilize na biografia das redes sociais
            e conversa com clientes. Tudo sobre você de uma forma profissional e
            personalizada.
          </Paragraph>
          <div class="mt-8 d-flex flex-column align-center">
            <RegisterButton class="mb-3" label="Fale com um Consultor" />
          </div>
        </v-container>
      </v-col>
      <v-col cols="12" md="6">
        <v-container class="text-center">
          <video autoplay muted loop :height="videoHeight">
            <source
              src="https://res.cloudinary.com/euyome/video/upload/v1624716862/frontend/Untitled_design_l6bmdk.mp4"
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
  font-family: Popppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 0.7rem;
  line-height: 13px;
  text-transform: uppercase;
  text-decoration: none;
  color: $paragraph-color;
}
</style>
