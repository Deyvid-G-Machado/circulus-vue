<template>
    <div class="mt-5">
      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </template>
  
  <script lang="ts">
  import { useStore } from '@/stores';
  import { computed, defineComponent, onMounted, reactive, watch } from 'vue';
  import VueApexCharts from 'vue3-apexcharts';
  import type Dado from '@/interfaces/Dado';
  
  export default defineComponent({
    name: 'PH',
    components: {
      apexchart: VueApexCharts
    },
    setup() {
      const storeTodosDados = useStore();
  
      onMounted(() => {
        storeTodosDados.carregarTodosDados();
      });
  
      const todosDados = computed<Dado[]>(() => storeTodosDados.todosDados);
  
      const chartOptions = reactive({
        chart: {
          type: 'bar' as const,
          height: 350
        },
        xaxis: {
          categories: [] as string[]
        },
        yaxis: {
          max: 14
        },
        title: {
          text: 'pH ao longo do tempo',
          align: 'left' as const
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          enabled: true,
          x: {
            formatter: (val: string) => {
              return new Date(val).toLocaleString(); // Formato da tooltip para exibir data
            }
          }
        }
      });
  
      const series = reactive([
        {
          name: 'pH',
          data: [] as number[]
        }
      ]);
  
      watch(todosDados, (newVal) => {
        if (newVal.length > 0) {
          chartOptions.xaxis.categories = newVal.map(dado => `${dado.data} ${dado.hora}`);
          series[0].data = newVal.map(dado => dado.ph);
        }
      }, { immediate: true });
  
      return {
        chartOptions,
        series,
        todosDados
      };
    }
  });
  </script>
