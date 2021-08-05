<template>
  <div class="paragraph">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.paragraph {
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
  color: $paragraph-color;
  text-align: left;

  @media screen and (max-width: 600px) {
    text-align: left;
  }
}
</style>
