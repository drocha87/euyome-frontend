<template>
  <v-btn dark rounded height="48px" :width="width" to="/register">{{ label }}</v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    label: { type: String, required: true },
    width: { type: String, default: '220px' },
  },
});
</script>

<style lang="scss" scoped>
.v-btn {
  background-color: $primary-green !important;
  text-transform: none;
}
</style>
