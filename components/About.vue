<template>
  <v-container>
    <section id="about" class="about">
      <div class="about_title">
        <span class="normal_text"> Quer saber</span><br />
        <span class="highlight_text">como funciona?</span>
      </div>
      <div class="about_content">
        É simples, você faz seu cadastro totalmente gratuito, adiciona os links
        de suas redes sociais (Instagram, Facebook, WhatsApp, etc), site,
        telefone, e-mail e muito mais, personaliza como quiser e se você gostar
        você assina o plano PRO!
      </div>
    </section>
  </v-container>
</template>

<style lang="scss" scoped>
.normal_text {
  font-size: 1.3rem;
  font-weight: 700;
}

.highlight_text {
  font-size: 2rem;
  font-weight: 700;
  color: #fb5607;
}

.about {
  font-family: 'Rubik', sans-serif;
  margin-top: 2.8rem;
  .about_title {
    text-align: center;
    text-transform: uppercase;
  }
  .about_content {
    margin-top: 1.4rem;
    padding: 0 2rem;
    text-align: center;
    font-weight: 500;
    font-size: 0.9rem;
  }
}
</style>
