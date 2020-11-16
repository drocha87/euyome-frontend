<template>
  <v-card width="100%" @click="cardClick()">
    <v-img
      v-if="card.imageUrl"
      max-height="300px"
      :src="`https://res.cloudinary.com/euyome/image/upload/${card.imageUrl}`"
    >
    </v-img>
    <v-card-title class="flex-column align-start">
      <div v-if="card.subtitle" class="text-caption">
        {{ card.subtitle }}
      </div>
      <div>
        {{ card.title }}
      </div>
    </v-card-title>
    <v-card-text class="text-justify">
      {{ card.content }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    profileId: { type: String, requried: true },
    card: { type: Object, required: true },
    theme: { type: Object, required: true },
    border: { type: String, default: 'none' },
  },

  methods: {
    async cardClick(): Promise<void> {
      await this.$axios.post(`/views/${this.profileId}/card/click`);
      window.location.href = this.card.buttonLink;
    },
  }
});
</script>
