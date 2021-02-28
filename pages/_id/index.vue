<template>
  <v-container
    v-if="profile.id"
    class="fill-height profile_background"
    fluid
    :style="background"
  >
    <v-snackbar v-model="snackbar" timeout="2500" color="primary" top>
      <div class="text-caption text-center">{{ text }}</div>
    </v-snackbar>

    <v-container style="max-width: 600px; margin: 0 auto">
      <ProfileHeader :profile="profile" />

      <v-row v-if="loading" class="justify-center">
        <v-progress-circular
          color="primary"
          size="40"
          width="2"
          indeterminate
        />
      </v-row>

      <client-only>
        <ProfileYoutubeVideo :profile="profile" />
        <!-- <iframe v-if="spotifyTrack" -->
        <!--         :class="{ 'mt-4': profile.video }" -->
        <!--         :src="`https://open.spotify.com/embed/track/${spotifyTrack}`" -->
        <!--         width="100%" -->
        <!--         height="80" -->
        <!--         frameborder="0" -->
        <!--         style="border: none; overflow: hidden; border-radius: 4px;" -->
        <!--         allowtransparency="true" allow="encrypted-media"></iframe> -->
      </client-only>

      <UserCard v-if="card && !loading" class="my-3" :profile="profile" />
      <ButtonIcon :profile="profile" />

      <!-- Starts forms here -->
      <ButtonIconBase
        v-if="profile.form && profile.form.visible"
        class="my-2"
        :theme="theme"
        :label="profile.form.title"
        :icon="['fas', 'address-book']"
        @click="() => (dialog = true)"
      />

      <Form
        v-if="profile.form && profile.form.visible"
        v-model="dialog"
        :form="profile.form"
        @data="sendForm"
      ></Form>

      <FooterLogo :color="theme.color" />
    </v-container>

    <div v-if="shareable" class="shareable-icon">
      <v-btn icon :color="theme.buttonBackground" @click="share">
        <v-icon>mdi-share</v-icon>
      </v-btn>
    </div>
    <AgeGate v-if="ageGate" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Card, Profile, Style } from '~/types';

export default Vue.extend({
  layout: 'profile',

  async asyncData(context) {
    try {
      const profile: any = await context.$axios.$get(
        `/views/${context.params.id}`
      );

      return {
        profile,
      };
    } catch (error) {
      context.error({
        statusCode: error.response.status,
        message: error.response.data.message,
      });
    }
  },

  data() {
    const profile: Partial<Profile> = {};
    return {
      loading: true,
      profile,
      shareable: false,
      dialog: false,

      snackbar: false,
      text: '',
    };
  },

  head(this: any) {
    const title = this.profile.title || this.$route.params.id;
    return {
      title: `${title} | ${this.profile.subtitle || ''}`,

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.profile.subtitle || 'Clique aqui e conheça meu perfil',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://euyo.me/${this.$route.params.id}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.profile.subtitle || '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://res.cloudinary.com/euyome/image/upload/${
            this.profile.avatar
              ? this.profile.avatar + '?v=' + Date.now()
              : 'v1595937483/profile/euyome.jpg'
          }`,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.profile.id,
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '1200',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '630',
        },
      ],
    };
  },

  computed: {
    background(): string {
      const { backgroundImage: image, background } = this.theme;
      if (image?.length > 0) {
        return `
        background-image: url(https://res.cloudinary.com/euyome/image/upload/${image});
        background-color: ${background}
        `;
      }
      return `background-color: ${background}`;
    },

    theme(): Style {
      if (this.profile.style) {
        return this.profile.style;
      }
      return this.$store.getters.defaultStyle;
    },

    card(): Card | undefined {
      return this.profile.card;
    },

    ageGate(): boolean {
      return this.profile.ageGate || false;
    },

    // TODO: implements this feature in app first
    //    spotifyTrack(): string {
    //      return '1TX4h6MrIZ0K3r4OOG11WO';
    //    }
  },

  mounted() {
    this.shareable = !!(navigator && navigator.share);
    this.loading = false;
  },

  methods: {
    async share() {
      if (this.shareable) {
        await navigator.share({
          // TODO: figure a way to show the avatar preview
          title: this.profile.title || this.profile.name,
          text: 'Acesse meu perfil clicando no link abaixo.',
          url: `https://euyo.me/${this.profile.name}`,
        });
      }
    },

    async sendForm(f: any) {
      await this.$axios.post(`/views/${this.profile.id}/forms`, f);
      this.dialog = false;
      this.text = 'Formulário enviado com sucesso';
      this.snackbar = true;
    },
  },
});
</script>

<style lang="scss" scoped>
.profile_background {
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
}
.center__container {
  display: block;
  margin: 1rem auto;
}
.shareable-icon {
  display: block;
  position: absolute;
  top: 10px;
  right: 15px;
}

/* ----------------------------------------------
 * Generated by Animista on 2021-1-25 16:42:20
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

.tracking-in-expand {
  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    1s both;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) 1s both;
}
/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>
