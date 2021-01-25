<template>
  <v-card width="100%" @click="cardClick()">
    <v-img
      v-if="card.imageUrl"
      max-height="300px"
      :src="`https://res.cloudinary.com/euyome/image/upload/${card.imageUrl}`"
    ></v-img>
    <v-card-title class="pb-1 pt-4 flex-column align-start">
      <div v-if="card.subtitle" class="text-caption">{{ card.subtitle }}</div>
      <div>{{ card.title }}</div>
    </v-card-title>
    <v-card-text class="text-justify">{{ card.content }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Profile, Style, Card } from '~/types';

export default Vue.extend({
  props: {
    profile: { type: Object as () => Profile, required: true },
  },

  computed: {
    theme(): Style {
      if (this.profile.style) {
        return this.profile.style;
      }
      return this.$store.getters['defaultProfile'];
    },

    card(): Card {
      return this.profile.card!;
    },
  },

  methods: {
    async cardClick(): Promise<void> {
      await this.$axios.post(`/views/${this.profile.id}/card/click`);
      window.location.href = this.card.buttonLink;
    },
  },
});
</script>
