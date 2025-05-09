<template>
    <Pie :data="data" :options="{ responsive: true }" class="mb-12" />
</template>

<script setup>
import { Pie } from 'vue-chartjs'
defineProps(['data'])
</script>