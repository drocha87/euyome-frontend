<template>
  <v-dialog
    :value="value"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
    @input="(v) => $emit('input', v)"
  >
    <v-card tile>
      <v-card-title class="justify-center">{{ form.title || 'Formulário' }}</v-card-title>
      <v-card-text>
        <p class="text-justify">{{ form.content }}</p>

        <p v-if="form.infoSite">
          Para mais informações
          <a :href="`https://${form.infoSite}`" target="_blank">clique aqui</a>.
        </p>

        <v-form v-model="valid">
          <v-text-field
            v-model.trim="name"
            label="Nome"
            :rules="[rules.required, rules.maxLength(50)]"
          ></v-text-field>

          <v-text-field v-model.trim="email" label="Email" :rules="[rules.required, rules.email]"></v-text-field>

          <v-row v-if="form.capturePhone">
            <v-col cols="3">
              <v-text-field v-model="ddi" :rules="[rules.required]" label="Código DDI">
                <template #prepend-inner>
                  <span class="text-caption">+</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model.trim="phone"
                :rules="[rules.required, rules.phoneNumber]"
                label="Telefone com DDD"
                placeholder="(DDD) 0 0000-0000"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-textarea
            v-if="form.captureMessage"
            v-model.trim="message"
            label="Mensagem"
            placeholder="Escreva aqui sua mensagem."
            :rules="[rules.required, rules.text, rules.maxLength(300)]"
          ></v-textarea>

          <v-row class="mt-2" alig="center">
            <v-btn text color="error" @click="() => $emit('input', false)">Cancelar</v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" depressed color="primary" @click="sendForm">Enviar</v-btn>
          </v-row>
        </v-form>
        <p class="mt-12 text-caption text-justify" style="color: #979dac">
          Ao enviar seus dados você está de acordo com os
          <a
            href="https://euyo.me/termos"
            target="_blank"
          >termos e condições</a>
          da euyo.me e também está ciente que nós não nos responsabilizamos pela forma como seus dados serão utilizados.
          Sendo assim só forneça as suas informações se realmente você estiver seguro sobre a origem do formulário.
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import rules from '@/rules';

export default Vue.extend({
  props: {
    value: { type: Boolean, required: true },
    form: { type: Object, required: true },
  },

  data() {
    return {
      rules,
      ddi: 55,
      phone: '',
      email: '',
      name: '',
      message: '',
      valid: true,
    };
  },

  methods: {
    sendForm() {
      let pn = '';
      if (this.phone.length > 0) {
        // strip unnecesarry characters and format phone with DDI
        pn = '+' + this.ddi + this.phone.replace(/[()\s-]/g, '');
      }

      this.$emit('data', {
        name: this.name,
        email: this.email,
        phone: pn,
        message: this.message,
      });
    },
  },
});
</script>
