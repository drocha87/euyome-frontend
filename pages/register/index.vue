<template>
  <v-container class="main__container">
    <v-card width="100%" flat>
      <v-card-title class="text-h2 justify-center">Olá</v-card-title>
      <v-card-subtitle class="mt-4 text-justify text-caption">
        Para criar sua conta, você só precisa digitar o seu melhor email, porque
        é através dele que vamos verificar sua conta e depois cadastrar uma
        senha que seja bem segura e pronto!
      </v-card-subtitle>
      <v-card-text class="text-right">
        <v-form v-model="valid" @submit.prevent="next">
          <v-text-field
            v-model="email"
            class="mt-4"
            type="email"
            label="Seu melhor Email"
            outlined
            dense
            :rules="[rules.required, rules.email]"
          />
          <div v-if="errorMessage" class="text-center red--text text-caption">
            {{ errorMessage }}
          </div>
          <v-spacer></v-spacer>
          <v-btn
            class="mt-4"
            type="submit"
            rounded
            depressed
            height="45px"
            min-width="150px"
            color="primary"
            :disabled="!valid"
            :loading="loading"
            >Próximo</v-btn
          >
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
  layout: 'default',

  data() {
    return {
      valid: false,
      email: '',
      loading: false,
      errorMessage: '',
      rules,
    };
  },

  methods: {
    async next() {
      try {
        this.loading = true;
        this.errorMessage = '';
        const res = await this.$axios.$post('/users/exists', {
          email: this.email,
        });
        if (res.exists) {
          this.errorMessage = 'Usuário já existe em nosso banco de dados';
        } else {
          this.$router.push({
            path: '/register/password',
            query: { ...this.$route.query, email: this.email },
          });
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
