<template>
  <v-row class="cover">
    <!-- <CoverPageAnimation class="cover_page_animation" :users="users" /> -->
    <v-col class="cover_left" cols="12" md="7">
      <v-container class="fill-height">
        <div class="cover__left__container">
          <Header title="você a um clique" subtitle="sempre conectado" />
          <Paragraph class="cover__left__paragraph">
            Seu perfil virtual em forma de link, utilize na sua biografia das
            redes sociais e conversa com clientes. Tudo sobre você de uma forma
            super personalizada.
          </Paragraph>
          <v-text-field
            class="cover__left__input"
            outlined
            rounded
            dense
            color="primary"
            prefix="euyo.me/"
            style="max-width: 400px"
          />
          <div class="cover__left__button d-flex flex-column align-center">
            <v-btn dark rounded elevation="0" color="#FE5D26" height="50px">
              cadastre-se grátis
            </v-btn>
            <a class="text__login">já tenho cadastro</a>
          </div>
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

export default Vue.extend({
  components: {
    Header,
    Paragraph,
    CoverPageAnimation,
  },

  data() {
    return {
      user: {},
    };
  },

  computed: {
    users() {
      return this.$store.state.users;
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

.cover__left__paragraph {
  margin-top: 2rem;
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

  @media screen and (max-width: 600px) {
    margin-top: 0rem;
  }
}

.text__login {
  margin-top: 0.5rem;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #7ebc89;
}

// .highlight {
//   background: #fff;
//   color: #7ebc89;
//   padding: 0.3rem 1rem;
//   border-radius: 6px;
//   font-weight: 700;
// }

// .cover_page_animation {
//   grid-area: image;
//   place-self: center;
// }

// .cover {
//   position: relative;
//   display: grid;
//   grid-template-areas:
//     'image'
//     'title'
//     'action';

//   width: 100%;

//   .hero_title {
//     grid-area: title;
//     place-self: center;

//     margin: 2rem 0;
//     line-height: min(4.4rem, 15vw);
//     font-size: min(4.4rem, 15vw);
//     font-weight: 700;
//     text-align: center;
//     text-transform: uppercase;
//     color: #fe5d26;
//   }

//   .hero_action {
//     grid-area: action;
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 100%;
//     padding: 2rem 0;
//     margin: 1rem 0;

//     align-items: center;
//     justify-content: center;
//     background: #7ebc89;

//     .hero_action_title {
//       font-size: 2rem;
//       font-weight: 700;
//       color: #fff;
//       text-transform: uppercase;
//       text-align: center;
//     }

//     button {
//       width: 80%;
//       max-width: 80%;
//       padding: 0.8rem 2rem;
//       margin-top: 1rem;
//       border-radius: 12px;
//       outline: none;
//       font-size: min(2rem, 7vw);

//       font-weight: 700;
//       text-transform: uppercase;
//       background: #fe5d26;
//       color: #fff;

//       transition: all 250ms ease 0s;

//       -webkit-animation: pulsate-fwd 1.5s ease-in-out infinite both;
//       animation: pulsate-fwd 1.5s ease-in-out infinite both;

//       &:hover {
//         background: red;
//         -webkit-animation: none;
//         animation: none;
//       }
//     }

//     .hero_action_counter {
//       font-size: 0.8rem;
//       font-weight: 500;
//       margin-top: 0.5rem;
//       color: white;
//     }
//   }
// }

// @media only screen and (min-width: 780px) {
//   .hero {
//     grid-template-columns: 1fr 1fr;
//     grid-template-areas:
//       'title action action'
//       'image action action';
//     height: calc(100vh - 100px);

//     .hero_title {
//       line-height: min(3.4rem, 10vw);
//       font-size: min(3.4rem, 10vw);
//       width: 80%;
//     }
//     .hero_action {
//       margin: 0;
//       .hero_action_title {
//         width: 80%;
//         font-size: 4.2vw;
//       }
//     }
//   }
// }

// @media only screen and (min-width: 1024px) {
//   .hero {
//     grid-template-columns: 2fr 1fr 1fr 2fr;
//     grid-template-areas: 'title image action action';

//     .hero_title {
//       line-height: min(4.4rem, 10vw);
//       font-size: min(4.4rem, 10vw);
//       text-align: left;
//       margin-left: 4vw;
//     }

//     .hero_action {
//       padding: 2rem 0;
//       margin: 0;

//       align-items: center;
//       justify-content: center;

//       .hero_action_title {
//         width: 80%;
//         font-size: 4.2vw;
//       }

//       button {
//         width: 70%;
//         max-width: 70%;
//       }
//     }
//   }
// }

// /* ----------------------------------------------
//  * Generated by Animista on 2020-9-14 15:38:14
//  * Licensed under FreeBSD License.
//  * See http://animista.net/license for more info.
//  * w: http://animista.net, t: @cssanimista
//  * ---------------------------------------------- */

// /**
//  * ----------------------------------------
//  * animation pulsate-fwd
//  * ----------------------------------------
//  */
// @-webkit-keyframes pulsate-fwd {
//   0% {
//     -webkit-transform: scale(1);
//     transform: scale(1);
//   }
//   50% {
//     -webkit-transform: scale(1.03);
//     transform: scale(1.03);
//   }
//   100% {
//     -webkit-transform: scale(1);
//     transform: scale(1);
//   }
// }
// @keyframes pulsate-fwd {
//   0% {
//     -webkit-transform: scale(1);
//     transform: scale(1);
//   }
//   15% {
//     -webkit-transform: scale(1.03);
//     transform: scale(1.03);
//   }
//   100% {
//     -webkit-transform: scale(1);
//     transform: scale(1);
//   }
// }
</style>
