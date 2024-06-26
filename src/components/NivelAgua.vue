<template>
    <div class="mt-5">
      <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </template>
  
  <script lang="ts">
  import { useStore } from '@/stores';
  import { computed, defineComponent, onMounted, reactive, watch } from 'vue';
  import VueApexCharts from 'vue3-apexcharts';
  import type Dado from '@/interfaces/Dado';
  
  export default defineComponent({
    name: 'NivelDaAgua',
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
          type: 'area' as const,
          height: 350
        },
        xaxis: {
          categories: [] as string[]
        },
        yaxis: {
          max: 200
        },
        title: {
          text: 'Nível da Água ao longo do tempo',
          align: 'left' as const
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth' as const
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
          name: 'Nível da Água',
          data: [] as number[]
        }
      ]);
  
      // Usar watch para atualizar os dados do gráfico quando todosDados mudar
      watch(todosDados, (newVal) => {
        if (newVal.length > 0) {
          chartOptions.xaxis.categories = newVal.map(dado => dado.data);
          series[0].data = newVal.map(dado => dado.nivelDaAgua); // Ajuste conforme a estrutura dos dados
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
  