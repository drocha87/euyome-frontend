<template>
  <v-container fill-height>
    <v-row class="mx-auto" align="center" justify="center" style="max-width: 900px">
      <v-col class="text-center">
        <v-avatar size="150px">
          <v-img :src="avatar"></v-img>
        </v-avatar>
        <div class="text-h6 mt-4">
          {{ title }}
        </div>

        <v-btn class="mt-4" block depressed color="primary" :to="`/${agency.name}`">contato</v-btn>

        <div v-if="agency.bio" class="text-justify mt-6" style="color: #3d405b">
          {{ bio }}
        </div>
      </v-col>
      <v-col>
        <v-card class="mx-auto" flat>
          <v-card-title class="justify-center">
            {{ header }}
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              ></v-text-field>
            <client-only>
              <v-data-table
                class="row-pointer"
                :headers="headers"
                :items="profiles"
                :search="search"
                hide-default-header
                :items-per-page="5"
                >
                <template v-slot:no-data>
                  Ainda não tem nenhum perfil criado!
                </template>
                <template #item="{ item }">
                  <v-list-item two-line :href="`https://euyo.me/${item.name}`" >
                    <v-list-item-avatar>
                      <v-img :src="getAvatar(item.avatar)"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="text-caption">
                          {{ item.title }}
                      </v-list-item-title>
                      <v-list-item-subtitle class="font-weight-bold text-caption" style="color: #c4c4c4">
                          {{ item.name }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-data-table>
            </client-only>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'profile',

  async asyncData(context) {
    try {
      const agency: any = await context.$axios.$get(
        `/views/agency/${context.params.id}`
      );

      return {
        agency
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

      headers: [
        {
          text: 'Título',
          align: 'start',
          value: 'title',
        },
        { text: 'Nome', value: 'name' },
      ],
    }
  },

  computed: {
    profiles(): any {
      const a: any = this.agency;
      const ps = a.profiles;
      if (ps) {
        return ps.filter((p: any) => p.name !== a.name);
      }
      return [];
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
      const img = (this.agency as any).avatar || 'v1596315038/profile/euyome.jpg';
      return `https://res.cloudinary.com/euyome/image/upload/${img}`;
    },
  },

  methods: {
    getAvatar(avatar: string): string {
      const img = avatar || 'v1596315038/profile/euyome.jpg';
      return `https://res.cloudinary.com/euyome/image/upload/${img}`;
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
})
</script>
