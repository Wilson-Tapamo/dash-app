<template>
    <Bar :data="data" :options="{ responsive: true }" class="mb-12"/>   
</template>

<script setup>
import { Bar } from 'vue-chartjs'
defineProps(['data'])
</script>