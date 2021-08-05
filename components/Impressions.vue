<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="5">
        <v-container class="text-center">
          <video autoplay muted loop :height="350">
            <source
              src="https://res.cloudinary.com/euyome/video/upload/v1624726093/frontend/stats_large_x9yxtl.mp4"
              type="video/mp4"
            />
          </video>
        </v-container>
      </v-col>
      <v-col cols="12" sm="7">
        <Header title="uma impressão" subtitle="um clique" />
        <Paragraph class="mt-4">
          Seu cartão de visitas irá te fornecer informações importantes sobre o
          seu engajamento e quais são os meios preferidos que seus clientes ou
          seguidores usam para entrar em contato com você, tudo isso em um
          painel de estatísticas criado para ser fácil de entender, e aprimorar
          suas estratégias de marketing.
        </Paragraph>
        <div
          class="mt-12"
          :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
        >
          <RegisterButton label="Fale com um Consultor" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import Paragraph from '@/components/Paragraph.vue';

export default Vue.extend({
  components: {
    Header,
    Paragraph,
  },
});
</script>
