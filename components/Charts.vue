<template>
    <div class="">
      <BarChart :data="barChartData" />
      <PieChart :data="pieChartData" />
      <LineChart :data="lineChartData" />
      <RadarChart :data="radarChartData" />
    </div>
  </template>
  
  <script setup>
  import BarChart from './charts/BarChart.vue'
  import PieChart from './charts/PieChart.vue'
  import LineChart from './charts/LineChart.vue'
  import RadarChart from './charts/RadarChart.vue'
  import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadarController,
  RadialLinearScale,
  CategoryScale,
  LinearScale
} from 'chart.js'

// Enregistrer tous les éléments nécessaires
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadarController,
  RadialLinearScale,
  CategoryScale,
  LinearScale
)
const props = defineProps({
    filterData: {
    type: Array,
    required: true
  }
})
  const rawData = props.filterData
  const ok = rawData.map(d => d.codeChoc)
  const sansDoublons = [...new Set(ok)]
  const an = rawData.map(d => d.annee)
  const sansDoublonsannee = [...new Set(an)]

  // Préparer les données pour chaque graphique (extraits à simplifier ici)
  const barChartData = {
    labels: sansDoublons,
    datasets: [
      {
        label: 'Bien résistant',
        backgroundColor: '#4ade80',
        data: rawData.map(d => d.bienResistant)
      },
      {
        label: 'Moyennement',
        backgroundColor: '#60a5fa',
        data: rawData.map(d => d.moyennementResistant)
      },
      {
        label: 'Pas',
        backgroundColor: '#fde047',
        data: rawData.map(d => d.pasResistant)
      },
    ]
  }
  
  const pieChartData = {
    labels: ['Bien', 'Assez bien', 'Moyen', 'Peu', 'Pas'],
    datasets: [{
      label: 'Répartition',
      data: [300, 368, 486, 247, 254],
      backgroundColor: ['#4ade80', '#fde047', '#60a5fa', '#f97316', '#ef4444']
    }]
  }
  
  const lineChartData = {
    labels: sansDoublonsannee,
    datasets: [
      {
        label: 'Pas résistant',
        borderColor: '#ef4444',
        data: rawData.map(d => d.pasResistant)
      },
      {
        label: 'Bien résistant',
        borderColor: '#4ade80',
        data: rawData.map(d => d.bienResistant)
      }
    ]
  }
  
  const radarChartData = {
    labels: ['Pas', 'Peu', 'Moyen', 'Assez bien', 'Bien'],
    datasets: [{
      label: 'Algues',
      backgroundColor: 'rgba(34,197,94,0.2)',
      borderColor: '#22c55e',
      data: [254, 247, 486, 368, 300]
    }]
  }
  </script>
  