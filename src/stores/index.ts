
import http from "@/http";
import type Dado from "@/interfaces/Dado";
import { defineStore } from "pinia";

export interface Estado {
    dadosAtual: Dado[],
    dadosMesCorrente: Dado[]
    todosDados: Dado[];
}

export const useStore = defineStore('store', {
    state: ():Estado => ({
        dadosAtual: [],
        dadosMesCorrente: [],
        todosDados: []
    }),
    actions: {
        async carregarUltimaLeitura() {
            const response = await http.get('/api/last');
            this.dadosAtual = response.data;
        },
        async carregarAcumuladoMes() {
            const response = await http.get('/api/acumuladoMes');
            this.dadosMesCorrente = response.data;
        },
        async carregarTodosDados() {
            const response = await http.get('/api');
            this.todosDados = response.data;
        },

    }
})