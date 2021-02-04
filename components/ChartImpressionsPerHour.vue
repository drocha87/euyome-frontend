<template>
  <div>
    <canvas
      id="chart-impressions-per-hour"
      width="100%"
      max-height="250px"
      style="min-height: 200px"
    ></canvas>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import { Chart } from 'chart.js';

export default Vue.extend({
  props: {
    data: { type: Object, required: true },
  },

  mounted() {
    const canvas = document.getElementById(
      'chart-impressions-per-hour'
    ) as HTMLCanvasElement;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chart = new Chart(canvas, {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: false,
        plugins: {
          filler: {
            propagate: false,
          },
        },
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label(tooltipItem: any) {
              return tooltipItem.yLabel;
            },
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: '#e8e8e4',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 5,
              },
            },
          ],
        },
      },
    });
  },
});
</script>
