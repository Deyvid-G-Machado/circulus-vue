<template>
    <div class="border border-2 border-black d-inline-flex rounded-3">
        <div class="col">
            <div class="card border-0">
                <div class="card-body">
                    <div class="card border-0" style="width: 20rem;">
                        <h2>Data: {{ dadosAtual[0]?.data }}</h2>
                        <h2>Hora: {{ dadosAtual[0]?.hora }}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="col border-0">
            <div class="card border-0">
                <div class="card-body ">
                    <div class="card border-0" style="width: 20rem;">
                        <h2>Medições realizadas</h2>
                        <h2>Temperatura °C</h2>
                        <div class="progress fs-4" style="height: 30px;" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped" :style="{ width: temperaturaProgressBar + '%' }">{{ dadosAtual[0]?.temperatura }}</div>
                        </div>
                        <h2>Turbidez</h2>
                        <div class="progress fs-4" style="height: 30px;" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped" :style="{ width: turbidezProgressBar + '%' }">{{ dadosAtual[0]?.turbidez }}</div>
                        </div>
                        <h2>Ph</h2>
                        <div class="progress fs-4" style="height: 30px;" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped" :style="{ width: phProgressBar + '%' }">{{ dadosAtual[0]?.ph }}</div>
                        </div>
                        <h2>Nível d'agua - cm</h2>
                        <div class="progress fs-4" style="height: 30px;" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped" :style="{ width: nivelAguaProgressBar + '%' }">{{ dadosAtual[0]?.nivelDaAgua }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useStore } from '@/stores';
import { computed, defineComponent, onMounted } from 'vue';

export default defineComponent({
    name: 'HomeAtual',
    setup() {
        const storeAtual = useStore();
        
        onMounted(() => {
            storeAtual.carregarUltimaLeitura();
        });

        const dadosAtual = computed(() => storeAtual.dadosAtual);

        const temperaturaProgressBar = computed(() => {
            const tempAtual = dadosAtual.value[0]?.temperatura || 0;
            return converterProgressbar(tempAtual, -10, 150, 0, 100);
        });

        const turbidezProgressBar = computed(() => {
            const turbidezAtual = dadosAtual.value[0]?.turbidez || 0;
            return converterProgressbar(turbidezAtual, 0, 1000, 0, 100);
        });

        const phProgressBar = computed(() => {
            const phAtual = dadosAtual.value[0]?.ph || 0;
            return converterProgressbar(phAtual, 0, 14, 0, 100);
        });

        const nivelAguaProgressBar = computed(() => {
            const nivelAguaAtual = dadosAtual.value[0]?.nivelDaAgua || 0;
            return converterProgressbar(nivelAguaAtual, 0, 200, 0, 100);
        });

        const converterProgressbar = (valor: number, xMin: number, xMax: number, yMin: number, yMax: number): number => {
            return ((valor - xMin) / (xMax - xMin)) * (yMax - yMin) + yMin;
        };

        return {
            dadosAtual,
            temperaturaProgressBar,
            turbidezProgressBar,
            phProgressBar,
            nivelAguaProgressBar
        };
    }
});
</script>
