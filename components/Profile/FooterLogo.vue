<template>
  <div class="mx-auto text-center mt-8 mb-2 font-weight-bold text-h6" :style="`color: ${color}`">
    <a href="https://euyo.me/" target="_blank" style="text-decoration: none; color: inherit">
      euyo.me
      <span class="text-caption">&copy;</span>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    color: { type: String, required: true },
  },
});
</script>
