<template>
  <div class="paragraph">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.paragraph {
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.2rem;
  color: $paragraph-color;
  text-align: left;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
}
</style>
