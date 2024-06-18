<template>
  <VaPage>
    <VaCard>
      <VaCardTitle> Rubah Halaman Profil </VaCardTitle>
      <VaCardContent>
        <VaForm @submit.prevent="submitForm">
          <VaInput v-model="name" label="Nama" placeholder="Masukkan nama" required class="mb-4" />
          <VaInput v-model="email" label="Email" placeholder="Masukkan email" required type="email" class="mb-4" />
          <VaInput v-model="phone" label="Nomor Telepon" placeholder="Masukkan nomor telepon" required class="mb-4" />
          <VaTextarea v-model="address" label="Alamat" placeholder="Masukkan alamat" required class="mb-4" />
          <VaButton type="submit" color="primary"> Simpan Perubahan </VaButton>
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
  name: 'RubahHalamanProfil',
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

    const fetchProfileInfo = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/profile')
        const profile = response.data
        name.value = profile.name
        email.value = profile.email
        phone.value = profile.phone
        address.value = profile.address
      } catch (error) {
        console.error('Error fetching profile info:', error)
      }
    }

    const submitForm = async () => {
      try {
        await axios.put('http://localhost:3000/api/profile', {
          name: name.value,
          email: email.value,
          phone: phone.value,
          address: address.value,
        })
        alert('Informasi profil berhasil diubah!')
      } catch (error) {
        console.error('Error updating profile info:', error)
        alert('Terjadi kesalahan saat mengubah informasi profil.')
      }
    }

    onMounted(fetchProfileInfo)

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
</style>
