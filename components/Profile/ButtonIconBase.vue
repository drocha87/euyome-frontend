<template>
  <v-btn
    class="link__text"
    large
    width="100%"
    height="58px"
    depressed
    :color="theme.buttonBackground"
    :style="`color: ${textColor}`"
    :rounded="theme.buttonStyle === 'rounded'"
    :outlined="theme.buttonStyle === 'outlined'"
    :tile="theme.buttonStyle === 'tile'"
    @click="() => $emit('click')"
  >
    <font-awesome-icon :icon="icon" style="font-size: 18px; opacity: 0.8" />
    <span class="link__text ml-2">{{ label.substring(0, 35) }}</span>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Style } from '~/types';

export default Vue.extend({
  props: {
    theme: { type: Object as () => Style, required: true },
    icon: { type: Array, required: true },
    label: { type: String, required: true },
  },

  computed: {
    textColor(): string {
      return this.theme.buttonStyle === 'outlined'
        ? this.theme.buttonBackground
        : this.theme.buttonColor;
    },
  },
});
</script>

<style lang="scss" scoped>
.v-btn {
  white-space: normal;
}

.link__text {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  text-transform: none;
}
</style>
