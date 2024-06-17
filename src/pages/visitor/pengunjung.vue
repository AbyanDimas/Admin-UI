<template>
  <VaPage>
    <VaCard>
      <VaCardTitle> Jumlah Pengunjung </VaCardTitle>
      <VaCardContent>
        <div class="va-chart-container">
          <VaChart :data="chartData" :options="chartOptions" />
        </div>
        <VaDataTable :items="visitors" :columns="columns" :filter="filter" />
        <VaInput v-model="filter" placeholder="Cari pengunjung..." class="mb-4" />
      </VaCardContent>
    </VaCard>
  </VaPage>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import { VaCard, VaCardTitle, VaCardContent, VaDataTable, VaInput } from 'vuestic-ui'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

export default defineComponent({
  name: 'JumlahPengunjung',
  components: {
    VaCard,
    VaCardTitle,
    VaCardContent,
    VaDataTable,
    VaInput,
    VaChart: Line,
  },
  setup() {
    const visitors = ref([])
    const filter = ref('')
    const columns = ref([
      { key: 'name', label: 'Nama Pengunjung' },
      { key: 'date', label: 'Tanggal Kunjungan' },
      { key: 'page', label: 'Halaman yang Dikunjungi' },
    ])

    const chartData = ref({
      labels: [],
      datasets: [
        {
          label: 'Jumlah Pengunjung',
          backgroundColor: '#42A5F5',
          borderColor: '#42A5F5',
          data: [],
          fill: false,
        },
      ],
    })

    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tanggal',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Jumlah Pengunjung',
          },
          beginAtZero: true,
        },
      },
    })

    const fetchVisitorData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/visitors')
        visitors.value = response.data

        // Transform data for chart
        const dates = [...new Set(visitors.value.map((visitor) => visitor.date))]
        const visitorCounts = dates.map((date) => visitors.value.filter((visitor) => visitor.date === date).length)

        chartData.value.labels = dates
        chartData.value.datasets[0].data = visitorCounts
      } catch (error) {
        console.error('Error fetching visitor data:', error)
      }
    }

    onMounted(fetchVisitorData)

    return {
      visitors,
      columns,
      filter,
      chartData,
      chartOptions,
    }
  },
})
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1rem;
}

.va-chart-container {
  height: 400px;
}
</style>
