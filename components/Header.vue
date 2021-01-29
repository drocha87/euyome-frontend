<template>
  <div :class="center ? 'header__center' : 'header__left'">
    <div class="header__container">
      <h6 class="header__subtitle">{{ subtitle }}</h6>
      <div class="header__divider"></div>
      <h1 class="header__title">{{ title }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    center: { type: Boolean, default: false },
  },
});
</script>

<style lang="scss" scoped>
.header__center {
  width: 100%;
  display: flex;
  justify-content: center;
}
.header__left {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
}
.header__container {
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
}
.header__subtitle {
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  /* color: $paragraph-color; */
  color: $primary-green;
}
.header__title {
  margin-top: 15px;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 4rem;
  text-transform: uppercase;
  color: #212121;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    line-height: 3.9rem;
  }
}
.header__divider {
  background: rgba($paragraph-color, 0.4);
  height: 2px;
  max-width: 250px;
  @media screen and (max-width: 768px) {
    max-width: 200px;
    margin: 0 auto;
  }
}
</style>
