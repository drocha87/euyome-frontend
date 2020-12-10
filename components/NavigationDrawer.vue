<template>
  <v-navigation-drawer
    :value="value"
    right
    absolute
    app
    @input="(v) => $emit('input', v)">
      <v-list nav dense>
        <v-list-item-group
          class="px-8"
          active-class="primary--text text--accent-4"
        >
          <v-list-item to="/" exact>
            <v-list-item-content class="drawer__link">
              Home
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="https://instagram.com/euyo.me">
            <v-list-item-content class="drawer__link">
              Instagram
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="#prices">
            <v-list-item-content class="drawer__link">
              Preços
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="https://euyo.me/euyome">
            <v-list-item-content class="drawer__link">
              Contato
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/help">
            <v-list-item-content class="drawer__link">
              Ajuda
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="https://app.euyo.me/login">
            <v-list-item-content class="drawer__link">
              Login
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: { type: Boolean, required: true },
  },
})
</script>
