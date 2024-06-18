<template>
  <VaPage>
    <VaCard>
      <VaCardTitle> Tambah Berita </VaCardTitle>
      <VaCardContent>
        <VaForm @submit.prevent="submitForm">
          <VaInput v-model="title" label="Judul Berita" placeholder="Masukkan judul berita" required class="mb-4" />
          <VaTextarea
            v-model="content"
            label="Konten Berita"
            placeholder="Masukkan konten berita"
            required
            class="mb-4"
          />
          <VaDatePicker v-model="date" label="Tanggal Publikasi" required class="mb-4" />
          <VaButton type="submit" color="primary"> Tambah Berita </VaButton>
        </VaForm>
      </VaCardContent>
    </VaCard>
  </VaPage>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import { VaCard, VaCardTitle, VaCardContent, VaForm, VaInput, VaTextarea, VaDatePicker, VaButton } from 'vuestic-ui'

export default defineComponent({
  name: 'TambahBerita',
  components: {
    VaCard,
    VaCardTitle,
    VaCardContent,
    VaForm,
    VaInput,
    VaTextarea,
    VaDatePicker,
    VaButton,
  },
  setup() {
    const title = ref('')
    const content = ref('')
    const date = ref(new Date())

    const submitForm = async () => {
      try {
        await axios.post('http://localhost:3000/api/news', {
          title: title.value,
          content: content.value,
          date: date.value.toISOString().split('T')[0], // Format tanggal sebagai YYYY-MM-DD
        })
        alert('Berita berhasil ditambahkan!')
        // Reset form
        title.value = ''
        content.value = ''
        date.value = new Date()
      } catch (error) {
        console.error('Error adding news:', error)
        alert('Terjadi kesalahan saat menambahkan berita.')
      }
    }

    return {
      title,
      content,
      date,
      submitForm,
    }
  },
})
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1rem;
}
</style>
