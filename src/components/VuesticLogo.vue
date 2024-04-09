<template>
  <div class="brand-container">
    <img alt="Logo" :src="Logo" width="35" height="30" class="d-inline-block align-top" />
    <div>
      <span>ADMIN OSSAKA</span>
      <h6>OSIS SMK 1 Adiwerna</h6>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from '../components/navbar/Logo.png'

// You can safely remove unused imports and declarations to avoid ESLint errors
</script>

<style scoped>
.brand-container {
  display: flex;
  align-items: center;
}

.brand-container img {
  margin-right: 10px;
}

.brand-container div {
  display: flex;
  flex-direction: column;
}

.brand-container span {
  font-family: sans-serif;
}

.brand-container h6 {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
