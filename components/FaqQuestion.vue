<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ question }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <Paragraph class="my-1">
        <slot />
      </Paragraph>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    question: { type: String, required: true },
  },
});
</script>

<style></style>
