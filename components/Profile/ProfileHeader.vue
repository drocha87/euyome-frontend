<template>
  <div class="mb-5 d-flex flex-column justify-center align-center mx-auto">
    <v-avatar
      :tile="theme.tileAvatar"
      size="115px"
      :style="`border: ${
        theme.border ? `solid 2px ${theme.borderColor}` : 'none'
        };`"
    >
      <v-img eager :lazy-src="require('~/assets/logo.png')" transition="true" :src="avatar" />
    </v-avatar>

    <div
      class="mt-2 text-h6 text-center font-weight-bold"
      :style="`color: ${theme.color};`"
    >{{ profile.title || profile.name }}</div>

    <div
      v-if="profile.subtitle"
      class="text-caption text-center"
      style="margin-top: -4px"
      :style="`color: ${theme.color}`"
    >{{ profile.subtitle }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Profile, Style } from '~/types';

export default Vue.extend({
  props: { profile: { type: Object as () => Profile, required: true } },

  computed: {
    avatar(): string {
      const img = this.profile.avatar || 'v1596315038/profile/euyome.jpg';
      return `https://res.cloudinary.com/euyome/image/upload/${img}`;
    },

    theme(): Style {
      if (this.profile.style) {
        return this.profile.style;
      }
      return this.$store.getters['defaultStyle'];
    },
  },
});
</script>
