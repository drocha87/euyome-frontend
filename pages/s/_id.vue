<template>
  <v-container fill-height>
    <v-row>
      <v-col class="text-center">
        <ProfileHeader :profile="profile"></ProfileHeader>
        <v-btn text small color="primary" :to="`/${profile.name}`">Ir para o perfil</v-btn>

        <v-card class="mt-4">
          <v-card-title>Impressões Diárias</v-card-title>
          <v-card-text>
            <client-only>
              <DailyViewsChart v-if="chartData.datasets" :data="chartData" style="width: 100%" />
            </client-only>
          </v-card-text>
        </v-card>

        <v-card class="mt-4">
          <v-card-title>Impressões por hora</v-card-title>
          <v-card-subtitle class="text-left text-caption">Últimos 7 dias</v-card-subtitle>
          <v-card-text>
            <client-only>
              <ChartImpressionsPerHour
                v-if="chartImpressionsPerHourData.datasets"
                :data="chartImpressionsPerHourData"
                style="width: 100%"
              />
            </client-only>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="100%" class="mt-2">
          <v-card-title>Impressões</v-card-title>
          <v-card-subtitle class="text-caption">Quantas vezes seu perfil foi acessado no total.</v-card-subtitle>
          <v-card-text>
            <div class="text-center pa-1">
              <span class="text__style">{{ stats.impressions || 0 }}</span>
            </div>
          </v-card-text>
        </v-card>

        <v-card v-if="stats.card" width="100%" class="mt-2">
          <v-card-title>Estatísticas do Card</v-card-title>
          <v-card-text>
            <v-row align="center" no-gutters>
              <v-col class="text-center">
                <div class="text-caption font-weight-bold">Visualizações</div>
                <span class="text-h5">{{ stats.card.impressions || 0 }}</span>
              </v-col>
              <v-col class="text-center">
                <div class="text-caption font-weight-bold">Cliques</div>
                <span class="text-h5">{{ stats.card.clicks || 0 }}</span>
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
      chartImpressionsPerHourData: {},
      profile: {},
    };
  },

  mounted() {
    const { dailyViews, impressionsLast24Hours } = this.stats as any;

    if (impressionsLast24Hours?.length > 0) {
      const now = new Date();
      const timezoneOffsetInHours = now.getTimezoneOffset() / 60;

      // Generate an 24 hours array
      const adata = [...Array(24).keys()];
      const data = adata.map((x: number) => {
        const y = impressionsLast24Hours.find((val: any) => {
          const hours = val._id - timezoneOffsetInHours;
          return hours === x;
        });
        let impressions = y?.impressions || 0;
        return { hour: `${x}h`, impressions };
      });

      this.chartImpressionsPerHourData = {
        labels: data.map((stat: any) => {
          return stat.hour.toString();
        }),

        datasets: [
          {
            backgroundColor: '#21c25e',
            data: data.map((stat: any) => stat.impressions),
          },
        ],
      };
    }

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
            backgroundColor: '#41B38A33',
            borderColor: '#21c25e',
            data: dailyViews.map((stat: any) => stat.views),
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 10,
          },
        ],
      };
    }
  },

  computed: {
    avatar(): string {
      const img =
        (this.profile as any).avatar || 'v1596315038/profile/euyome.jpg';
      return `https://res.cloudinary.com/euyome/image/upload/${img}`;
    },
    code(): string {
      return this.$store.state.profile.currentProfile.statsCode;
    },
  },

  methods: {
    async genStatsCode(): Promise<void> {
      await this.$store.dispatch('profile/genStatsCode');
    },
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
