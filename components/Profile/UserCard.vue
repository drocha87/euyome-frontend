<template>
  <v-card
    width="100%"
    flat
    :style="`background: ${theme.background}; border: ${border};`"
  >
    <v-img v-if="card.imageUrl" height="100px" :src="card.imageUrl"> </v-img>
    <v-card-title
      class="text-body-1 font-weight-bold"
      :style="`color: ${theme.color}`"
    >
      {{ card.title }}
    </v-card-title>
    <v-card-subtitle
      class="text-caption text-justify"
      :style="`color: ${theme.color}`"
    >
      {{ card.subtitle }}
    </v-card-subtitle>
    <v-card-actions
      class="pa-0"
      :style="`overflow: hidden; background: ${theme.buttonBackground}`"
    >
      <v-btn
        tile
        block
        height="48px"
        :color="theme.buttonBackground"
        :style="`color: ${theme.buttonColor}`"
        @click="$emit('click', card.buttonLink)"
      >
        <span class="text-caption font-weight-bold">
          {{ card.buttonText || 'Saiba mais' }}
        </span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    card: { type: Object, required: true },
    theme: { type: Object, required: true },
    border: { type: String, default: 'none' },
  },
});
</script>
