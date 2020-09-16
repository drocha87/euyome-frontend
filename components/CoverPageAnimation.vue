<template>
  <div class="hero_smartphone">
    <img :src="require('~/assets/images/cover.png')" />
    <div class="pictures_loop">
      <v-avatar v-if="user.avatar" size="80px">
        <v-img
          :src="`https://res.cloudinary.com/euyome/image/upload/${user.avatar}`"
        ></v-img>
      </v-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    users: { type: Array, required: true },
  },

  data() {
    return {
      user: {},
      index: 0,
    };
  },

  mounted() {
    setInterval(() => {
      if (this.users && ++this.index >= this.users.length) this.index = 0;
      this.user = this.users[this.index];
    }, 1500);
  },
});
</script>

<style lang="scss" scoped>
.pictures_loop {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.hero_smartphone {
  position: relative;
  margin-top: 1rem;
  img {
    width: 180px;
  }
}

@media only screen and (min-width: 1024px) {
  .hero_smartphone {
    margin-right: -6rem;
    z-index: 1;
    img {
      min-width: 200px;
    }
  }
}
</style>
