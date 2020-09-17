<template>
  <div class="header__container">
    <div class="header__subtitle">{{ subtitle }}</div>
    <div class="header__divider"></div>
    <div class="header__title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.header__container {
  text-align: left;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
}
.header__subtitle {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  color: #212121;
}
.header__title {
  margin-top: 15px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 3.9rem;
  line-height: 4.5rem;
  text-transform: uppercase;
  color: #7ebc89;
}
.header__divider {
  background: rgba(254, 93, 38, 0.8);
  height: 2px;
  max-width: 250px;
  @media screen and (max-width: 600px) {
    max-width: 200px;
    margin: 0 auto;
  }
}
</style>
