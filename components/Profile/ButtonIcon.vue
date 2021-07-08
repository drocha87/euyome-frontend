<template>
  <div>
    <ProfileButtonIconBase
      v-for="link in links"
      :key="link.id"
      class="my-2"
      :icon="findIcon(link.media)"
      :theme="theme"
      :label="link.label"
      @click="linkAction(link)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Profile, Style, Link } from '~/types';

export default Vue.extend({
  props: {
    profile: { type: Object as () => Profile, required: true },
  },

  computed: {
    medias(): [any] {
      return this.$store.getters.getMedias;
    },

    links(): Link[] {
      if (this.profile.links) {
        return this.profile.links.slice().sort((a, b) => {
          const ai = a?.index || 0;
          const bi = b?.index || 0;
          return ai - bi;
        });
      }
      return [];
    },

    theme(): Style {
      if (this.profile.style) {
        return this.profile.style;
      }
      return this.$store.getters['defaultStyle'];
    },
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
      this.$axios.post(
        `/users/profiles/${this.profile.id}/links/${link.id}/click`
      );
      if (found) {
        window.location.href = found.site + link.action;
      } else {
        window.location.href = link.action;
      }
    },
  },
});
</script>
