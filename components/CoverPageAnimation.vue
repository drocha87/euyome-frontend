<template>
  <div class="hero_smartphone">
    <img :src="require('~/assets/images/cover.png')" />
    <div v-if="user" class="cover__animation__username">
      {{ user.title || user.name }}
    </div>
    <div class="pictures_loop">
      <v-avatar v-if="user && user.avatar" size="80px">
        <v-img
          :src="`https://res.cloudinary.com/euyome/image/upload/${user.avatar}`"
        ></v-img>
      </v-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { User } from '~/types';

export default Vue.extend({
  props: {
    users: { type: Array, required: true },
  },

  data() {
    return {
      user: {} as User,
      index: 0,
    };
  },

  mounted() {
    setInterval(() => {
      if (this.users && ++this.index >= this.users.length) this.index = 0;
      this.user = this.users[this.index] as User;
    }, 1500);
  },
});
</script>

<style lang="scss" scoped>
.cover__animation__username {
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translateX(-50%);
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 21px;
  // text-transform: uppercase;
  text-align: center;
  color: #000;

  @media screen and (max-width: 600px) {
    top: 35%;
    font-size: 0.65rem;
    line-height: 0.75rem;
  }
}

.pictures_loop {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 600px) {
    top: 10%;
  }
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
      min-width: 230px;
    }
  }
}
</style>
