<template>
  <v-container fill-height>
    <v-row class="mx-auto" align="center" justify="center" style="max-width: 900px">
      <v-col class="text-center">
        <v-avatar size="150px">
          <v-img :src="agency.avatar"></v-img>
        </v-avatar>
        <div class="text-h6 mt-4">
          {{ agency.name }}
        </div>
        <div class="d-flex flex-row justify-space-between mx-auto mt-2" style="max-width: 200px">
          <v-icon size="35px">
            mdi-whatsapp
          </v-icon>
          <v-icon size="35px">
            mdi-instagram
          </v-icon>
          <v-icon size="35px">
            mdi-linkedin
          </v-icon>
          <v-icon size="35px">
            mdi-earth
          </v-icon>
        </div>
        <div v-if="agency.bio" class="text-justify mt-6" style="color: #3d405b">
          {{ agency.bio }}
        </div>
      </v-col>
      <v-col>
        <v-card class="mx-auto" flat>
          <v-card-title class="justify-center">
            {{ agency.header }}
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              ></v-text-field>
            <v-data-table
              class="row-pointer"
              :headers="headers"
              :items="agency.profiles"
              :search="search"
              hide-default-header
              items-per-page="5"
              >
              <template v-slot:no-data>
                Ainda não tem nenhum perfil criado!
              </template>
              <template #item="{ item }">
                <v-list-item two-line :href="`https://euyo.me/${item.name}`" >
                  <v-list-item-avatar>
                    <v-img :src="avatar(item.avatar)"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>
                      <div class="text-caption">
                        {{ item.title }}
                      </div>
                      <div
                        class="font-weight-bold text-caption"
                        :style="`color: ${item.isPro ? '#7ebc89' : '#c4c4c4'}`"
                        >
                        {{ item.name }}
                      </div>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-data-table>
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

  data() {
    return {
      search: '',

      headers: [
        {
          text: 'Título',
          align: 'start',
          value: 'title',
        },
        { text: 'Nome', value: 'name' },
      ],

      agency: {
        avatar: 'https://res.cloudinary.com/euyome/image/upload/v1604088438/profile/5f9c66b52bc02369535e11bc.jpg',
        name: 'Diego Rocha',
        header: 'Meus Clientes',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae purus finibus, cursus lacus et, venenatis lorem. Donec nec erat malesuada, malesuada dui at, interdum arcu.',
        whatsapp: '+5534993230783',
        instagram: 'drocha1987',
        phone: '+5534993230783',
        profiles: [
          {
            id: "5fae74fd3e5679d882132556",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132555",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132554",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132553",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132557",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132558",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132556",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132555",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132554",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132553",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132557",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132558",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132556",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132555",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132554",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132553",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132557",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132558",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132556",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132555",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132554",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132553",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132557",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },
          {
            id: "5fae74fd3e5679d882132558",
            name: "speakniceidiomas",
            title: "Speaknice Idiomas",
            subtitle: "Aulas Online de Inglês e Espanhol",
            avatar: "v1596023131/profile/speakniceidiomas.png",
            isPro: true,
            createdAt: "2020-07-20T22:57:39.749918Z",
          },

        ],
      }
    }
  },

  methods: {
    avatar(avatar: string): string {
      const img = avatar || 'v1596315038/profile/euyome.jpg';
      return `https://res.cloudinary.com/euyome/image/upload/${img}`;
    },
  }
})
</script>
