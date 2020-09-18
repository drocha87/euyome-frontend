<template>
  <v-container class="main__container">
    <v-card width="100%" flat>
      <v-card-title class="text-h2 justify-center"> Email </v-card-title>
      <v-card-subtitle class="mt-4 text-justify">
        Agora que já escolhemos seu nome de usuário, vamos cadastrar seu email,
        e ahh não esqueça de depois verificar sua caixa de mensagem tá.
      </v-card-subtitle>
      <v-card-text>
        <v-form v-model="valid" @submit.prevent="next">
          <v-text-field
            v-model="email"
            type="email"
            label="Email"
            :rules="[rules.required, rules.email]"
          ></v-text-field>
          <div v-if="errorMessage" class="text-center red--text text-caption">
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
            Próximo
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
  layout(ctx: Context) {
    return ctx.isMobileOrTablet ? 'mobile' : 'default';
  },

  components: {},

  data() {
    return {
      valid: false,
      loading: false,
      errorMessage: '',
      email: '',
      rules,
    };
  },

  methods: {
    async next() {
      try {
        this.loading = true;
        this.errorMessage = '';
        await this.$axios.$post('/users/verify_email', { email: this.email });
        this.$router.push({
          path: '/register/password',
          query: { ...this.$route.query, email: this.email },
        });
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
