<template>
    <Radar :data="data" :options="{ responsive: true }" class="mb-12" />
</template>

<script setup>
import { Radar } from 'vue-chartjs'
defineProps(['data'])
</script>