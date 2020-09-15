<template>
  <v-container>
    <v-card width="100%" flat>
      <v-card-title class="text-h2 justify-center"> Olá </v-card-title>
      <v-card-subtitle class="mt-4 text-justify">
        Para criar seu perfil, a primeira coisa que temos que fazer é escolher
        um nome bem bacana de usuário e ver se ninguém teve a mesma ideia
        brilhante de nome :P
      </v-card-subtitle>
      <v-card-text>
        <v-text-field
          class="mt-4"
          disabled
          outlined
          dense
          :value="username"
          prefix="https://euyo.me/"
        />

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
import rules from '~/rules';

export default Vue.extend({
  components: {},

  data() {
    return {
      valid: false,
      username: '',
      loading: false,
      errorMessage: '',
      rules,

      allowedName: (v: string) => {
        const fnames = this.$store.getters.getForbiddenNames;
        if (fnames && fnames.includes(v)) {
          return `${v} não está disponivel para uso`;
        }

        if (!/^\w+$/.test(v)) {
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
