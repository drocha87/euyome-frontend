<template>
  <v-app>
    <v-main fill-height>
      <nuxt />
    </v-main>

    <v-footer fixed app max-width="100%">
      <div class="mx-auto">
        <nuxt-link
          to="/"
          class="text-caption"
          style="text-decoration: none; color: #585858"
        >
          euyo.me &copy; {{ new Date().getFullYear() }}
        </nuxt-link>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
