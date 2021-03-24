<template>
  <v-container class="main__container">
    <v-card width="100%" flat>
      <v-card-title class="text-h2 justify-center">Senha</v-card-title>
      <v-card-subtitle class="mt-4 text-justify text-caption">
        Agora escolha uma senha bem segura, entre 5 e 30 caracteres, e lembre-se
        de não compartilhar sua senha com ninguém ok :)
      </v-card-subtitle>
      <v-card-text class="text-right">
        <v-form v-model="valid" @submit.prevent="next">
          <v-text-field
            v-model="password"
            class="mt-4"
            label="Senha"
            outlined
            dense
            hide-details
            :type="showPass ? 'text' : 'password'"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.password]"
            @click:append="showPass = !showPass"
          ></v-text-field>

          <div v-if="errorMessage" class="text-left red--text text-caption">
            {{ errorMessage }}
          </div>
          <v-btn
            class="mt-4"
            rounded
            depressed
            min-width="150px"
            type="submit"
            height="45px"
            color="primary"
            :disabled="!valid"
            :loading="loading"
          >
            Próximo
          </v-btn>

          <div class="mt-6 text-caption text-left">
            Ao clicar em próximo você aceita os
            <nuxt-link class="font-weight-bold" to="/termos">
              TERMOS E CONDIÇOES DE USO
            </nuxt-link>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import rules from '~/rules';

export default Vue.extend({
  layout: 'default',

  data() {
    return {
      valid: false,
      loading: false,
      errorMessage: '',
      password: '',
      showPass: false,
      rules,
    };
  },

  methods: {
    async next() {
      try {
        this.loading = true;
        this.errorMessage = '';
        const { email, username } = this.$route.query;

        await this.$axios.$post('/register', {
          email,
          username,
          password: this.password,
        });

        /**
         * change tho window.redirect ou href
         */
        window.location.href = 'https://app.euyo.me/login';
        // this.$router.push('/dashboard');
      } catch (error) {
        if (error.response.status === 409) {
          this.errorMessage = 'Email já está em uso';
        } else {
          this.errorMessage = error.response.data.message;
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.main__container {
  max-width: 600px;
  height: 100%;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
}
</style>
