<template>
  <v-card
    class="d-flex flex-column justify-space-between pa-4"
    color="white"
    elevation="4"
    max-width="220px"
    height="200px"
  >
    <div class="euyome__card__title">{{ title }}</div>
    <div class="euyome__card__subtitle">{{ subtitle }}</div>
    <div class="euyome__card__content">{{ content }}</div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    content: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.euyome__card__title {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 57px;
  /* identical to box height */
  text-transform: uppercase;
  text-align: center;
  color: #e5e5e5;
}

.euyome__card__subtitle {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  text-align: center;
  color: $primary-green;
}

.euyome__card__content {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;

  color: #495057;
}
</style>
