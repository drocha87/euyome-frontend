<template>
  <v-row>
    <v-img
      v-bind="$attrs"
      contain
      :src="image"
      style="cursor: pointer"
      @click.stop="dialog = true"
    ></v-img>
    <v-dialog v-model="dialog" max-width="1024px">
      <v-img contain :src="image"></v-img>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  inheritAttrs: false,

  props: {
    image: { type: String, required: true },
  },

  data() {
    return {
      dialog: false,
    };
  },
});
</script>
