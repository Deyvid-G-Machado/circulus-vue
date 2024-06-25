<script setup lang="ts">
    import HomeAtual from '@/components/HomeAtual.vue';
    import HomeMesCorrente from './HomeMesCorrente.vue';
</script>

<template>
    <div class="row mt-5">
        <div class="col-md-6  mx-auto">
            <HomeAtual />
        </div>
    </div>    
    <div class="row mt-5">
        <div class="col-md-6 mx-auto">
            <HomeMesCorrente />
        </div>
    </div>
</template>