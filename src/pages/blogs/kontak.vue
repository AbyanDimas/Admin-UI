<template>
  <VaPage>
    <VaCard>
      <VaCardTitle> Rubah Halaman Kontak </VaCardTitle>
      <VaCardContent>
        <VaForm @submit.prevent="submitForm">
          <VaInput v-model="name" label="Nama" placeholder="Masukkan nama" required class="mb-4" />
          <VaInput v-model="email" label="Email" placeholder="Masukkan email" required type="email" class="mb-4" />
          <VaInput v-model="phone" label="Nomor Telepon" placeholder="Masukkan nomor telepon" required class="mb-4" />
          <VaTextarea v-model="address" label="Alamat" placeholder="Masukkan alamat" required class="mb-4" />
          <div class="button-container">
            <VaButton type="submit" color="primary"> Simpan Perubahan </VaButton>
          </div>
        </VaForm>
      </VaCardContent>
    </VaCard>
  </VaPage>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import { VaCard, VaCardTitle, VaCardContent, VaForm, VaInput, VaTextarea, VaButton } from 'vuestic-ui'

export default defineComponent({
  name: 'RubahHalamanKontak',
  components: {
    VaCard,
    VaCardTitle,
    VaCardContent,
    VaForm,
    VaInput,
    VaTextarea,
    VaButton,
  },
  setup() {
    const name = ref('')
    const email = ref('')
    const phone = ref('')
    const address = ref('')

    const fetchContactInfo = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/contact')
        const contact = response.data
        name.value = contact.name
        email.value = contact.email
        phone.value = contact.phone
        address.value = contact.address
      } catch (error) {
        console.error('Error fetching contact info:', error)
      }
    }

    const submitForm = async () => {
      try {
        await axios.put('http://localhost:3000/api/contact', {
          name: name.value,
          email: email.value,
          phone: phone.value,
          address: address.value,
        })
        alert('Informasi kontak berhasil diubah!')
      } catch (error) {
        console.error('Error updating contact info:', error)
        alert('Terjadi kesalahan saat mengubah informasi kontak.')
      }
    }

    onMounted(fetchContactInfo)

    return {
      name,
      email,
      phone,
      address,
      submitForm,
    }
  },
})
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1rem;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}
</style>
