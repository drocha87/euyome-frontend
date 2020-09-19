<template>
  <v-row class="cover">
    <v-col class="cover_left" cols="12" md="7">
      <v-container class="fill-height">
        <div class="cover__left__container">
          <Header title="você a um clique" subtitle="sempre conectado" />
          <Paragraph class="mt-5">
            Seu perfil virtual em forma de link, utilize na sua biografia das
            redes sociais e conversa com clientes. Tudo sobre você de uma forma
            super personalizada.
          </Paragraph>
          <v-form @submit.prevent="registerUsername(username)">
            <v-text-field
              v-model="username"
              class="cover__left__input"
              outlined
              rounded
              dense
              color="primary"
              prefix="euyo.me/"
              placeholder="seu.nome"
              style="max-width: 400px"
              :rules="[rules.required, rules.minLength(3), allowedName]"
            />
            <div class="cover__left__button d-flex flex-column align-center">
              <v-btn
                type="submit"
                dark
                rounded
                elevation="0"
                color="#FE5D26"
                height="50px"
              >
                cadastre-se grátis
              </v-btn>
              <a class="text__login">já tenho cadastro</a>
            </div>
          </v-form>
        </div>
      </v-container>
    </v-col>
    <v-col class="cover_right" cols="12" md="5">
      <v-container class="fill-height center__animation">
        <CoverPageAnimation :users="users" />
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import Paragraph from '@/components/Paragraph.vue';
import CoverPageAnimation from '@/components/CoverPageAnimation.vue';
import rules from '~/rules';

export default Vue.extend({
  components: {
    Header,
    Paragraph,
    CoverPageAnimation,
  },

  data() {
    return {
      rules,
      user: {},
      username: '',

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

  computed: {
    users() {
      return this.$store.state.users;
    },
  },

  methods: {
    registerUsername(username: string) {
      if (username.length > 0) {
        this.$router.push({
          path: '/register',
          query: { username },
        });
      } else {
        this.$router.push('/register');
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.cover__left__container {
  padding: 0 3rem;
  @media screen and (max-width: 600px) {
    padding: 0;
  }
}

.cover__left__button {
  max-width: 200px;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
}

.cover__left__input {
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    margin: 2.5rem auto 0 auto;
  }
}

.center__animation {
  padding: 0 6rem;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
  }
}

.cover {
  height: 100vh;

  .cover_right {
    background: linear-gradient(203.28deg, #85ffbd 0.06%, #fffb7d 139.96%);
    border-radius: 0px 0px 0px 150px;

    @media screen and (max-width: 600px) {
      border-radius: 0;
    }
  }

  @media screen and (max-width: 960px) {
    height: auto;
    margin-top: 0rem;
  }
}

.text__login {
  margin-top: 0.8rem;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #7ebc89;
}
</style>
