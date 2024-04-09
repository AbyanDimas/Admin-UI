const express = require('express')
const cors = require('cors') // import cors module

const app = express()
const port = 5002

// Middleware untuk meng-handle body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Mengaktifkan CORS untuk semua permintaan
app.use(cors())

// Data dummy untuk menyimpan saran yang diterima
let suggestions = []

// Route untuk menerima kotak saran dengan metode POST
app.post('/submit-suggestion', (req, res) => {
  const suggestion = req.body.saran
  // Simpan saran yang diterima ke dalam array suggestions
  suggestions.push(suggestion)
  console.log('Saran yang diterima:', suggestion)
  res.send('Terima kasih atas saran Anda!')
})

// Handler untuk mendapatkan daftar saran
app.get('/get-suggestions', (req, res) => {
  // Kirim daftar saran sebagai respons untuk permintaan GET
  res.json({ suggestions })
})

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})
