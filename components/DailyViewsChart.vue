<template>
  <div>
    <canvas id="chart" width="100%" height="250px"></canvas>
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
    const canvas = document.getElementById('chart') as HTMLCanvasElement;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chart = new Chart(canvas, {
      type: 'line',
      data: this.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                beginAtZero: true,
                stepSize: 10,
              },
            },
          ],
        },
      },
    });
  },
});
</script>
