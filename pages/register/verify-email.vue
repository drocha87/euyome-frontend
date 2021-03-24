<template>
  <v-container class="main__container">
    <v-card width="100%" flat>
      <v-card-title class="text-h2 justify-center">
        Verificar Email
      </v-card-title>
      <v-card-subtitle class="mt-4 text-justify text-caption">
        Prontinho seu cadastro foi efetuado com sucesso, agora só precisamos
        confirmar seu email e já te redirecionamos para a tela de login :).
        Acesse a caixa de entrada (ou spam) do email cadastrado e coloque o
        código de 6 dígitos no campo abaixo.
      </v-card-subtitle>
      <v-card-text>
        <v-form v-model="valid" @submit.prevent="next">
          <v-text-field
            v-model="code"
            type="text"
            label="Código"
            hide-details
            :rules="[rules.required, rules.maxLength(6), rules.minLength(6)]"
          ></v-text-field>
          <div v-if="errorMessage" class="text-left red--text text-caption">
            {{ errorMessage }}
          </div>
          <v-btn
            class="mt-4"
            block
            type="submit"
            height="52px"
            color="primary"
            :disabled="!valid"
            :loading="loading"
          >
            Verificar
          </v-btn>
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
      code: '',
      rules,
    };
  },

  methods: {
    async next() {
      try {
        this.loading = true;
        this.errorMessage = '';
        const { email } = this.$route.query;

        await this.$axios.$post('/views/verify-email', {
          email,
          code: this.code,
        });

        /**
         * change tho window.redirect ou href
         */
        window.location.href = 'https://app.euyo.me/login';
      } catch (error) {
        if (error.response.status === 400) {
          this.errorMessage = 'Código de verificação inválido';
        } else {
          this.errorMessage =
            error.response?.data?.message || 'Something went wrong';
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
