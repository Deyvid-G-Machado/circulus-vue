<template>
    <div class="border border-2 border-black d-inline-flex rounded-3">
        <div class="col">
            <div class="card border-0">
                <div class="card-body">
                    <div class="card border-0" style="width: 20rem;">
                        <h2>Data: {{ dadosMesCorrente[0]?.data }}</h2>
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
                            <div class="progress-bar progress-bar-striped" :style="{ width: temperaturaProgressBar + '%' }">{{ dadosMesCorrente[0]?.temperatura }} °C</div>
                        </div>
                        <h2>Turbidez</h2>
                        <div class="progress fs-4" style="height: 30px;" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped" :style="{ width: turbidezProgressBar + '%' }">{{ dadosMesCorrente[0]?.turbidez }}</div>
                        </div>
                        <h2>Ph</h2>
                        <div class="progress fs-4" style="height: 30px;" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped" :style="{ width: phProgressBar + '%' }">{{ dadosMesCorrente[0]?.ph }}</div>
                        </div>
                        <h2>Nível d'agua - cm</h2>
                        <div class="progress fs-4" style="height: 30px;" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped" :style="{ width: nivelAguaProgressBar + '%'}">{{ dadosMesCorrente[0]?.nivelDaAgua }}</div>
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
    name: 'HomeMesCorrente',
    setup() {
        const storeMesCorrente = useStore();
        
        onMounted(() => {
            storeMesCorrente.carregarAcumuladoMes();
        });

        const dadosMesCorrente = computed(() => storeMesCorrente.dadosMesCorrente);

        const temperaturaProgressBar = computed(() => {
            const tempMesCorrente = dadosMesCorrente.value[0]?.temperatura || 0;
            return converterProgressbar(tempMesCorrente, -10, 150, 0, 100);
        });

        const turbidezProgressBar = computed(() => {
            const turbidezMesCorrente = dadosMesCorrente.value[0]?.turbidez || 0;
            return converterProgressbar(turbidezMesCorrente, 0, 1000, 0, 100);
        });

        const phProgressBar = computed(() => {
            const phMesCorrente = dadosMesCorrente.value[0]?.ph || 0;
            return converterProgressbar(phMesCorrente, 0, 14, 0, 100);
        });

        const nivelAguaProgressBar = computed(() => {
            const nivelAguaMesCorrente = dadosMesCorrente.value[0]?.nivelDaAgua || 0;
            return converterProgressbar(nivelAguaMesCorrente, 0, 200, 0, 100);
        });

        const converterProgressbar = (valor: number, xMin: number, xMax: number, yMin: number, yMax: number): number => {
            return ((valor - xMin) / (xMax - xMin)) * (yMax - yMin) + yMin;
        };

        return {
            dadosMesCorrente,
            temperaturaProgressBar,
            turbidezProgressBar,
            phProgressBar,
            nivelAguaProgressBar
        };
    }
});
</script>
