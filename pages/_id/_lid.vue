<template>
  <v-container>
    <v-overlay>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'empty',
  fetchOnServer: false,

  async fetch() {
    try {
      const data = await this.$axios.$get(
        `/views/leap_link/${this.$route.params.lid}`
      );
      this.followLink(data);
    } catch (error) {
      this.$nuxt.error({
        statusCode: 404,
        message: error.response.data.message,
      });
    }
  },

  computed: {
    medias(): [any] {
      return this.$store.getters.getMedias;
    },
  },

  methods: {
    followLink(data: any) {
      const medias = (this as any).medias;
      const found = medias.find((el: any) => el.media === data.link.media);
      this.$axios.post(
        `/users/profiles/${data.profileId}/links/${data.link._id}/click`
      );
      if (found) {
        window.location.href = found.site + data.link.action;
      } else {
        window.location.href = data.link.action;
      }
    },
  },
});
</script>
