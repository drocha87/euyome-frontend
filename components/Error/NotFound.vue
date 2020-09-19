<template>
  <div class="message">
    <v-img
      class="notfound__image"
      contain
      src="https://res.cloudinary.com/euyome/image/upload/v1600466629/frontend/404_zx0sbv.jpg"
    ></v-img>
    <div class="ops">Ops!</div>
    <div class="content">
      É provável que essa página ou usuário não exista mais, talvez nunca
      existiu, ou está acessível por um outro endereço.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notfound__image {
  margin: 0 auto;
  max-width: 400px;
}
.message {
  height: 80vh;
  font-family: Rubik, sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  color: #585858;
}
.content {
  max-width: 600px;
  margin: 0 auto;
  color: #c4c4c4;
  font-family: Rubik, sans-serif;
  font-size: 1rem;
  font-weight: 400;
}
.ops {
  font-family: Rubik, Roboto, sans-serif;
  font-size: 6rem;
  font-weight: 400;
}
</style>
