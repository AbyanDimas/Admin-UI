<template>
  <VaPage>
    <VaCard>
      <VaCardTitle> Hasil Kotak Saran </VaCardTitle>
      <VaCardContent>
        <VaDataTable :items="suggestions" :columns="columns" :filter="filter" />
        <VaInput v-model="filter" placeholder="Cari saran..." class="mb-4" />
      </VaCardContent>
    </VaCard>
  </VaPage>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import { VaCard, VaCardTitle, VaCardContent, VaDataTable, VaInput } from 'vuestic-ui'

export default defineComponent({
  name: 'HasilKotakSaran',
  components: {
    VaCard,
    VaCardTitle,
    VaCardContent,
    VaDataTable,
    VaInput,
  },
  setup() {
    const suggestions = ref([])
    const filter = ref('')
    const columns = ref([
      { key: 'name', label: 'Nama Pengirim' },
      { key: 'date', label: 'Tanggal' },
      { key: 'suggestion', label: 'Saran' },
    ])

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/suggestions')
        suggestions.value = response.data
      } catch (error) {
        console.error('Error fetching suggestions:', error)
      }
    }

    onMounted(fetchSuggestions)

    return {
      suggestions,
      columns,
      filter,
    }
  },
})
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1rem;
}
</style>
