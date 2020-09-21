<template>
  <v-container class="main__container">
    <v-card width="100%" flat>
      <v-card-title class="text-h2 justify-center"> Olá </v-card-title>
      <v-card-subtitle class="mt-4 text-justify text-caption">
        Para criar seu perfil, o primeiro passo é escolher seu nome de usuário,
        dê preferência para um nome que descreva sua marca ou seu nome pessoal,
        sem espaços e sem caracteres especiais tá
      </v-card-subtitle>
      <v-card-text>
        <div class="link__preview">
          {{ `https://euyo.me/${username}` }}
        </div>

        <v-form v-model="valid" @submit.prevent="next">
          <v-text-field
            v-model="username"
            type="text"
            label="Nome de usuário"
            :rules="[rules.required, rules.minLength(3), allowedName]"
          />
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
import { Context } from '@nuxt/types';
import rules from '~/rules';

export default Vue.extend({
  layout(ctx: Context) {
    return ctx.isMobileOrTablet ? 'mobile' : 'default';
  },

  components: {},

  data() {
    return {
      valid: false,
      username: this.$route.query?.username || '',
      loading: false,
      errorMessage: '',
      rules,

      allowedName: (v: string) => {
        const fnames = this.$store.getters.getForbiddenNames;
        if (fnames && fnames.includes(v)) {
          return `${v} não está disponivel para uso`;
        }

        if (!/^[\w.]+$/.test(v)) {
          return 'Use somente letras e digitos, remova espaços e acentos';
        }

        return true;
      },
    };
  },

  methods: {
    async next() {
      try {
        this.loading = true;
        this.errorMessage = '';

        await this.$axios.$post('/users/verify_username', {
          username: this.username,
        });
        this.$router.push({
          path: '/register/email',
          query: { username: this.username },
        });
      } catch (error) {
        if (error.response.status === 409) {
          this.errorMessage = 'Nome de usuário já está em uso';
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
.link__preview {
  margin: 1.5rem 0;
  font-family: Rubik, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: #7ebc89;
}
</style>
