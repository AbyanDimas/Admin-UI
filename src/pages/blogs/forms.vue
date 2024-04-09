<template>
  <div>
    <h1 class="page-title">Hasil Kotak Saran</h1>
    <div v-if="suggestions.length === 0" class="no-suggestions">Belum ada saran yang diterima.</div>
    <ul v-else>
      <li v-for="(suggestion, index) in suggestions" :key="index">
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      suggestions: [],
    }
  },
  created() {
    this.loadSuggestions()
  },
  methods: {
    async loadSuggestions() {
      try {
        const response = await fetch('http://localhost:5002/get-suggestions')
        if (response.ok) {
          const data = await response.json()

          this.suggestions = data.suggestions
        } else {
          throw new Error('Gagal mendapatkan daftar saran.')
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error)
      }
    },
  },
}
</script>

<style scoped>
.no-suggestions {
  background-color: red;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
