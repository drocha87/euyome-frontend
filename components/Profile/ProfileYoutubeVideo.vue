<template>
  <div v-if="profile.video" class="video__container text-center mx-auto">
    <iframe
      id="ytplayer"
      class="video"
      type="text/html"
      width="100%"
      height="100%"
      :src="video"
      frameborder="0"
      allowfullscreen
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Profile } from '~/types';

export default Vue.extend({
  props: { profile: { type: Object as () => Profile, required: true } },

  computed: {
    video(): string {
      return `https://www.youtube.com/embed/${this.profile.video}?autoplay=1&origin=https://euyo.me`;
    },
  },
});
</script>

<style lang="scss" scoped>
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
</style>
