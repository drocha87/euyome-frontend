<template>
  <div>
    <Cover />
    <v-container>
      <About class="top__margin" />
      <Impressions class="top__margin" />
      <Showcases class="top__margin" />
      <Prices id="prices" class="top__margin" />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'default',

  created() {
    this.$store.dispatch('fetchShowcasesUsers');
  },

  head() {
    const title = 'euyo.me';
    const description =
      'Organize suas redes sociais criando um perfil virtual que tem a sua cara';

    return {
      title: title,

      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://euyo.me',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://res.cloudinary.com/euyome/image/upload/v1611776467/frontend/logo_jai8s3.png',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'euyo.me',
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '830',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '830',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
* {
  font-family: 'Rubik', sans-serif;
}

html {
  scroll-behavior: smooth;
}

.top__margin {
  margin-top: 4rem;
  @media screen and (max-width: 600px) {
    margin-top: 3rem;
  }
}

.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>
