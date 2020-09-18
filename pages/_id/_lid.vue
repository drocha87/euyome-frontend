<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  fetchOnServer: false,
  layout: 'user',

  components: {},

  fetch() {
    this.$axios
      .$get(
        `/profiles/${this.$route.params.id}/leap_link/${this.$route.params.lid}`
      )
      .then((response) => {
        // Prevent an infinity loop between leap links e.g:
        // a leap link to https://euyo.me/user1/link_to_leap_link_user2 redirecting to
        // https://euyo.me/user2/link_to_leap_link_user1
        if (/(www\.){0,1}(euyo\.me\/).+\/.+/gi.test(response.url)) {
          this.$router.push('/404');
        }
        this.followLink(response);
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          this.$router.push('/404');
        }
      });
  },

  data() {
    const user: any = {};
    return {
      user,
    };
  },

  methods: {
    ...mapGetters({
      medias: 'getMedias',
    }),

    followLink(link: any) {
      const medias = this.medias();
      const found = medias.find((el: any) => el.media === link.media);

      // this.$axios.post(`/users/links/${link.id}/click`);

      if (found) {
        // if (this.$device.isAndroid && found.android) {
        //   console.log(found.android + link.url);
        //   return found.android + link.url;
        // }
        // if (this.$device.isIos && found.ios) {
        //   console.log(found.ios + link.url);

        //   return found.ios + link.url;
        // }
        window.location.href = found.site + link.url;
      } else {
        window.location.href = link.url;
      }
    },
  },
});
</script>
