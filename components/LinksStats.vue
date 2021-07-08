<template>
  <client-only>
    <v-card width="100%">
      <v-card-title> Análise de cliques </v-card-title>
      <v-card-subtitle class="text-caption">
        Confira quantas vezes seus links foram clicados ou acessados através do
        salto para o link
      </v-card-subtitle>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="links"
          disable-pagination
          hide-default-footer
          mobile-breakpoint="300"
          no-data-text="Você ainda não tem nenhum link"
        >
          <template #[`item.label`]="{ item }">
            <div class="d-flex flex-row align-center">
              <font-awesome-icon
                :icon="findIcon(item.media)"
                style="color: #c4c4c4"
              />
              <div class="text-caption ml-2">
                {{ item.label }}
              </div>
            </div>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

interface Link {
  id?: number;
  name?: string;
  media?: string;
  url?: string;
  hide?: boolean;
  createdAt?: string;
}

export default Vue.extend({
  props: {
    links: { type: Array, default: () => [] },
  },

  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'label',
        },
        { text: 'Cliques', value: 'clicks', align: 'center' },
      ],
    };
  },

  methods: {
    ...mapGetters({
      medias: 'getMedias',
    }),

    findIcon(media: string) {
      const medias = this.medias();
      const found = medias.find((el: Link) => el.media === media);
      if (found) {
        return found.icon;
      }
      return ['fas', 'question'];
    },
  },
});
</script>

<style lang="scss" scoped>
.link__chip {
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0.2rem 1rem;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  width: 100%;
}
</style>
