<template>
    <Line :data="data" :options="{ responsive: true }" class="mb-12" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
defineProps(['data'])
</script>