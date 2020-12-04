<template>
  <v-container fill-height>
    <v-row>
      <v-col class="text-center">
        <v-avatar size="150px">
          <v-img :src="avatar"></v-img>
        </v-avatar>
        <div class="text-h6 mt-4">
          {{ profile.title }}
        </div>
        <v-btn text small color="primary" :to="`/${profile.name}`">Ir para o perfil</v-btn>
        <v-card class="mt-4">
          <v-card-title>
            Visualizações Diárias
          </v-card-title>
          <v-card-text>
            <client-only>
              <DailyViewsChart
                v-if="chartData.datasets"
                :data="chartData"
                style="width: 100%"
                />
            </client-only>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="100%" class="mt-6">
          <v-card-title> Impressões </v-card-title>
          <v-card-subtitle class="text-caption">
            <span> Quantas vezes seu perfil foi acessado no total. </span>
          </v-card-subtitle>
          <v-card-text>
            <div class="text-center pa-1">
              <span class="text__style">
                {{ stats.impressions || 0 }}
              </span>
            </div>
          </v-card-text>
        </v-card>

        <v-card v-if="stats.card" width="100%" class="mt-2">
          <v-card-title>Estatísticas do Card</v-card-title>
          <v-card-text>
            <v-row align="center" no-gutters>
              <v-col class="text-center">
                <div class="text-caption font-weight-bold">Visualizações</div>
                <span class="text-h5">
                  {{ stats.card.impressions || 0 }}
                </span>
              </v-col>
              <v-col class="text-center">
                <div class="text-caption font-weight-bold">Cliques</div>
                <span class="text-h5">
                  {{ stats.card.clicks || 0 }}
                </span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <LinksStats :links="stats.links" class="mt-2 mb-8" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Stats } from '~/types';

export default Vue.extend({
  layout: 'profile',

  async asyncData(context) {
    try {
      const { profile, stats } = await context.$axios.$get(
        `/views/stats/${context.params.id}`
      );

      return {
        profile,
        stats,
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
      stats: {},
      chartData: {},
      profile: {},
    };
  },

  mounted() {
    const { dailyViews } = this.stats as any;
    if (dailyViews && dailyViews.length > 0) {
      this.chartData = {
        labels: dailyViews.map((stat: any) => {
          const date = new Date(stat.date);
          const month = date.getUTCMonth() + 1;
          const day = date.getUTCDate();

          return `${day}-${month}`;
        }),
        datasets: [
          {
            backgroundColor: '#41B38A',
            borderColor: '#41B38A',
            data: dailyViews.map((stat: any) => stat.views),
            fill: false,
            pointRadius: 7,
            pointHoverRadius: 10,
          },
        ],
      };
    }
  },

  computed: {
    avatar(): string {
      const img = (this.profile as any).avatar || 'v1596315038/profile/euyome.jpg';
      return `https://res.cloudinary.com/euyome/image/upload/${img}`;
    },
    code(): string {
      return this.$store.state.profile.currentProfile.statsCode;
    },
  },

  methods: {
    async genStatsCode(): Promise<void> {
      await this.$store.dispatch('profile/genStatsCode');
    }
  },

  head(this: any) {
    const title = this.profile.title;
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Visualize as impressões do perfil ${this.profile.name}`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://euyo.me/s/${this.$route.params.id}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Visualize as impressões do perfil ${this.profile.name}`,
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
.text__style {
  font-family: 'Open Sans', sans-serif;
  font-size: 5rem;
  line-height: 7rem;
}
</style>
