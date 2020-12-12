<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      overlay-opacity="0.99"
      max-width="390"
      >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline justify-center">
          Perfil para 18+
        </v-card-title>
        <v-card-text class="text-justify">
          O conteúdo que você pretende acessar pode incluir textos, imagens ou
          outros materiais unicamente para adultos.
        </v-card-text>
        <v-card-actions>
          <v-container>
            <v-btn
              color="error"
              block
              depressed
              to="/"
              exact
              >
              Sair
            </v-btn>
              <v-btn
                class="mt-2"
                color="primary"
                depressed
                block
                @click="dialog = false"
                >
                Sou maior de 18 anos
              </v-btn>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      dialog: true,
    }
  },
})
</script>
