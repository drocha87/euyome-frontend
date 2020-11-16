<template>
  <v-container
    v-if="profile.id && theme"
    class="fill-height profile_background"
    fluid
    :style="background"
  >
    <v-container style="max-width: 600px; margin: 0 auto">
      <div class="mb-6 d-flex flex-column justify-center align-center mx-auto">
        <v-avatar
          :tile="theme.tileAvatar"
          size="115px"
          :style="`border: ${
            theme.border ? `solid 2px ${theme.borderColor}` : 'none'
          };`"
        >
          <v-img
            eager
            :lazy-src="require('~/assets/euyome_logo_bg_white_small.jpeg')"
            transition="true"
            :src="avatar"
          />
        </v-avatar>

        <div class="mt-2 text-h5 text-center" :style="`color: ${theme.color};`">
          {{ profile.title || profile.name }}
        </div>

        <div
          v-if="profile.subtitle"
          class="text-caption text-center"
          :style="`color: ${theme.color}`"
        >
          {{ profile.subtitle }}
        </div>
      </div>

      <div v-if="loading" class="text-center">
        <v-progress-circular
          color="primary"
          size="40"
          width="2"
          indeterminate
        />
      </div>

      <client-only>
        <div v-if="profile.video" class="video__container text-center mx-auto">
          <iframe
            id="ytplayer"
            class="video"
            type="text/html"
            width="100%"
            height="100%"
            :src="`https://www.youtube.com/embed/${profile.video}?autoplay=1&https://euyo.me`"
            frameborder="0"
          />
        </div>
      </client-only>

      <UserCard
        v-if="card && !loading"
        class="my-3"
        :profileId="profile.id"
        :card="card"
        :theme="theme"
        :border="
        theme.backgroundImage ? 'none' : `solid 1px ${theme.buttonBackground}`
        "
        @click=""
      />

      <ButtonIcon
        v-for="link in links"
        :key="link.label"
        class="my-2"
        height="58px"
        :rounded="theme.buttonStyle === 'rounded'"
        :depressed="theme.buttonStyle === 'depressed'"
        :outlined="theme.buttonStyle === 'outlined'"
        :tile="theme.buttonStyle === 'tile'"
        :text-color="
        theme.buttonStyle === 'outlined'
        ? theme.buttonBackground
        : theme.buttonColor
        "
        :color="theme.buttonBackground"
        :label="link.label"
        :icon="findIcon(link.media)"
        @click="linkAction(link)"
      />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Card, User, Profile, Link, Style } from '~/types';

// FIXME: we need to pass this class in head() function to avoid `this is not defined` problem
// but I don't think this is the best aproach to fix this problem
interface MyComponent {
  user: any;
  theme: any;
  profile: any;
  '$route': any;
}

export default Vue.extend({
  layout: 'profile',

  async asyncData(context) {
    try {
      const profile: any = await context.$axios.$get(
        `/views/${context.params.id}`
      );
      return {
        profile
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
    };
  },

  computed: {
    medias(): [any] {
      return this.$store.getters.getMedias;
    },

    avatar(): string {
      const img = this.profile.avatar || 'v1596315038/profile/euyome.jpg';
      return `https://res.cloudinary.com/euyome/image/upload/${img}`;
    },

    background(): string {
      const { backgroundImage: image, background } = this.profile.style!;

      if (image) {
        if (image.startsWith('linear-gradient')) {
          return `background-image: ${image}`;
        }
        return `
        background-image: url(https://res.cloudinary.com/euyome/image/upload/${image});
        background-color: ${background}
        `;
      }
      return `background-color: ${background}`;
    },

    theme(): Style {
      return this.profile.style!;
    },

    card(): Card {
      return this.profile.card!;
    },

    links(): Link[] {
      if (this.profile.links === undefined) {
        return [];
      }
      return this.profile.links.slice().sort((a, b) => {
        const ai = a?.index || 0;
        const bi = b?.index || 0;
        return ai - bi;
      });
    },
  },


  async mounted() {
    this.loading = false;
  },

  methods: {
    findIcon(media: string) {
      const found = (this as any).medias.find((el: any) => el.media === media);
      if (found) {
        return found.icon;
      }
      return ['fas', 'question'];
    },

    linkAction(link: Link) {
      const medias = (this as any).medias;
      const found = medias.find((el: any) => el.media === link.media);
      this.$axios.post(`/users/profiles/${this.profile.id}/links/${link.id}/click`);
      if (found) {
        window.location.href = found.site + link.action;
      } else {
        window.location.href = link.action;
      }
    }
  },

  head(this: MyComponent) {
    const title = this.profile.title || this.$route.params.id;
    return {
      title: `${title} | ${this.profile.subtitle || ''}`,

    meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.profile.subtitle,
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

.video__container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  border-radius: 4px;
  overflow: hidden;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.center__container {
  display: block;
  margin: 1rem auto;
}
</style>
