<template>
  <v-btn
    depressed
    large
    v-bind="$attrs"
    :color="color"
    width="100%"
    :style="`color: ${textColor}`"
    @click="emitClick"
  >
    <font-awesome-icon :icon="icon" />
    <span class="link__text ml-2">
      {{ label.substring(0, 35) }}
    </span>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  inheritAttrs: false,

  props: {
    color: { type: String, default: 'primary' },
    textColor: { type: String, default: '#fff' },
    icon: { type: Array, default: () => ['fas', 'question '] },
    label: { type: String, required: true },
  },

  methods: {
    emitClick(event: any) {
      this.$emit('click', event);
    },
  },
});
</script>

<style lang="scss" scoped>
.v-btn {
  white-space: normal;
}

.link__text {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  text-transform: none;
}
</style>
