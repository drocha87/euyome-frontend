<template>
  <div class="mb-5 d-flex flex-column justify-center align-center mx-auto">
    <v-badge bottom color="transparent" overlap offset-x="0" offset-y="20">
      <template #badge>
        <v-icon
          @click="like()"
          :color="theme.color"
          size="18px"
        >{{ liked ? 'mdi-thumb-up' : 'mdi-thumb-up-outline' }}</v-icon>
      </template>
      <v-avatar
        :tile="theme.tileAvatar"
        size="115px"
        :style="`border: ${
            theme.border ? `solid 2px ${theme.borderColor}` : 'none'
            };`"
      >
        <v-img eager :lazy-src="require('~/assets/logo.png')" transition="true" :src="avatar" />
      </v-avatar>
    </v-badge>

    <div class="mt-2 text-h6 text-center font-weight-bold" :style="`color: ${theme.color};`">
      <v-badge :value="likes > 99" color="transparent" overlap offset-x="0">
        <template #badge>
          <v-icon :color="theme.color" size="12px">mdi-check-decagram-outline</v-icon>
        </template>
        {{ profile.title || profile.name }}
      </v-badge>
    </div>

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

  data() {
    return {
      liked: false,
    };
  },

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

    cname(): string {
      return `${this.profile.name}.trust`;
    },

    likes(): number {
      return this.profile.likes ? this.profile.likes : 0;
    },
  },

  mounted() {
    this.liked = this.$cookies.get(this.cname);
  },

  methods: {
    async like() {
      if (!this.liked) {
        this.liked = true;
        this.$cookies.set(this.cname, 'true', {
          path: this.$route.path,
          maxAge: 60 * 60 * 24 * 30,
        });
        await this.$axios.post(`/views/${this.profile.id}/like`);
      }
    },
  },
});
</script>
