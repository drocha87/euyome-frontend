<template>
  <v-container
    v-if="user.id && theme && card && links"
    class="fill-height flex-column profile_background"
    fluid
    :style="background"
  >
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

    <div class="text-h5 text-center" :style="`color: ${theme.color};`">
      {{ user.name ? user.name : user.username }}
    </div>

    <div
      v-if="user.subtitle"
      class="text-caption text-center"
      :style="`color: ${theme.color}`"
    >
      {{ user.subtitle }}
    </div>

    <v-container style="max-width: 600px; margin: 1rem auto">
      <client-only>
        <div
          v-if="user.youtubeVideo"
          class="video__container text-center mx-auto"
        >
          <iframe
            id="ytplayer"
            class="video"
            type="text/html"
            width="100%"
            height="100%"
            :src="`https://www.youtube.com/embed/${user.youtubeVideo}?autoplay=1&https://euyo.me`"
            frameborder="0"
          />
        </div>
      </client-only>

      <UserCard
        v-if="card.id"
        class="my-3"
        :card="card"
        :theme="theme"
        :border="
          theme.backgroundImage ? 'none' : `solid 1px ${theme.buttonBackground}`
        "
        @click="cardClick"
      />

      <ButtonIcon
        v-for="link in links"
        :key="link.name"
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
        :label="link.name"
        :icon="findIcon(link.media)"
        @click="followLink(link)"
      />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import UserCard from '@/components/Profile/UserCard.vue';
import ButtonIcon from '@/components/Profile/ButtonIcon.vue';
import { Card, User } from '~/types';

// FIXME: we need to pass this class in head() function to avoid `this is not defined` problem
// but I don't think this is the best aproach to fix this problem
interface MyComponent {
  user: any;
  theme: any;
  profile: any;
}

export default Vue.extend({
  layout: 'profile',

  components: {
    UserCard,
    ButtonIcon,
  },

  async asyncData(context) {
    try {
      const user: User = await context.$axios.$get(
        `/profiles/${context.params.id}`
      );
      return {
        user,
        theme: user.theme,
        card: user.card,
        links: user.links,
      };
    } catch (error) {
      context.error({
        statusCode: error.response.status,
        message: error.response.data.message,
      });
    }
  },

  computed: {
    medias(): [any] {
      return this.$store.getters.getMedias;
    },

    avatar(): string {
      const img = (this as any).user.avatar || 'v1596315038/profile/euyome.jpg';
      return `https://res.cloudinary.com/euyome/image/upload/${img}`;
    },

    background(): string {
      const { backgroundImage: image, background } = (this as any).theme;

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
  },

  methods: {
    followLink(link: any) {
      const medias = (this as any).medias;
      const found = medias.find((el: any) => el.media === link.media);

      this.$axios.post(`/users/links/${link.id}/click`);

      if (found) {
        window.location.href = found.site + link.url;
      } else {
        window.location.href = link.url;
      }
    },

    async cardClick(url: string) {
      try {
        await this.$axios.$post(
          `/users/cards/clicks/${((this as any).user.card as Card).id}`
        );
        window.location.href = url;
      } catch (error) {
        console.error(error);
      }
    },

    findIcon(media: string) {
      const found = (this as any).medias.find((el: any) => el.media === media);
      if (found) {
        return found.icon;
      }
      return ['fas', 'question'];
    },
  },

  head(this: MyComponent) {
    return {
      title: `${this.user.name || this.user.username} | ${
        this.user.subtitle || this.user.username
      }`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.user.subtitle,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://euyo.me/${this.user.username}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.user.name,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.user.subtitle || this.user.username,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://res.cloudinary.com/euyome/image/upload/${
            this.user.avatar
              ? this.user.avatar + '?v=' + Date.now()
              : 'v1595937483/profile/euyome.jpg'
          }`,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.user.username,
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
