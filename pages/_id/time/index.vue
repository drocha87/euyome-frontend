<template>
  <v-row class="mx-auto fill-height" justify="center" style="max-width: 900px">
    <v-col class="text-center px-8" align-self="center">
      <v-avatar size="150px">
        <v-img :src="avatar"></v-img>
      </v-avatar>
      <div class="text-h6 mt-4">{{ title }}</div>

      <v-btn
        class="mt-4"
        block
        depressed
        tile
        dark
        color="primary"
        height="50px"
        :to="`/${agency.profileName}`"
        >contato</v-btn
      >

      <div v-if="agency.bio" class="text-justify mt-6" style="color: #3d405b">
        {{ bio }}
      </div>
    </v-col>
    <v-col>
      <v-card class="mx-auto" flat>
        <v-card-title
          class="justify-center text-h5 font-weight-bold"
          style="color: #081c15"
          >{{ header }}</v-card-title
        >
        <v-card-text>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            rounded
            filled
            dense
            single-line
            hide-details
          ></v-text-field>
          <div v-if="searchLen > 1" class="text-right text-caption my-1 mr-3">
            {{ searchLen }} perfis encontrados
          </div>
          <div class="list-profiles mt-2">
            <client-only>
              <v-data-table
                class="row-pointer"
                :headers="headers"
                :items="profiles"
                :search="search"
                hide-default-header
                hide-default-footer
                disable-pagination
                @pagination="refreshSearchLen"
              >
                <template v-slot:no-data
                  >Ainda não tem nenhum perfil criado!</template
                >
                <template #item="{ item }">
                  <v-list-item two-line :href="`https://euyo.me/${item.name}`">
                    <v-list-item-avatar>
                      <v-img :src="getAvatar(item.avatar)"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="text-caption">{{
                        item.title
                      }}</v-list-item-title>
                      <v-list-item-subtitle
                        class="font-weight-bold text-caption"
                        style="color: #c4c4c4"
                        >{{ item.name }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>
                </template>
              </v-data-table>
            </client-only>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  layout: 'profile',

  async asyncData(context) {
    try {
      const agency: any = await context.$axios.$get(
        `/views/${context.params.id}/team`
      );

      return {
        agency,
      };
    } catch (error) {
      context.error({
        statusCode: error.response.status,
        message: error.response.data.message,
      });
    }
  },

  data() {
    return {
      search: '',
      agency: {},
      searchLen: 0,

      headers: [
        {
          text: 'Título',
          align: 'start',
          value: 'title',
        },
        { text: 'Nome', value: 'name' },
      ],
    };
  },

  computed: {
    profiles(): any {
      const a: any = this.agency;
      const ps = a.members || [];
      // if (ps) {
      //   return ps.filter((p: any) => p.name !== a.name && !p.hiddenAgency);
      // }
      return ps;
    },

    title(): string {
      return (this.agency as any).title;
    },

    bio(): string {
      return (this.agency as any).bio;
    },

    header(): string {
      return (this.agency as any).header;
    },

    avatar(): string {
      const img =
        (this.agency as any).avatar || 'v1596315038/profile/euyome.jpg';
      return `https://res.cloudinary.com/euyome/image/upload/${img}`;
    },
  },

  methods: {
    getAvatar(avatar: string): string {
      const img = avatar || 'v1596315038/profile/euyome.jpg';
      return `https://res.cloudinary.com/euyome/image/upload/${img}`;
    },

    refreshSearchLen(pagination: any) {
      this.searchLen = pagination.itemsLength;
    },
  },

  head(this: any) {
    const title = this.title || this.$route.params.id;
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.bio,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://euyo.me/a/${this.$route.params.id}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.bio || '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.avatar,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: title,
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '1200',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '630',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.list-profiles {
  max-height: 70vh;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 2px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #d9d9d9;
  }
}
</style>
