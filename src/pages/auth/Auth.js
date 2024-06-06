// src/utils/auth.js

const validUsername = 'admin@smk1adiwerna.com'
let validPassword = 'password123'

export function login(username, password) {
  if (username === validUsername && password === validPassword) {
    localStorage.setItem('user-token', 'your-token')
    return true
  }
  return false
}

export function logout() {
  localStorage.removeItem('user-token')
}

export function isAuthenticated() {
  const token = localStorage.getItem('user-token')
  return !!token
}

export function resetPassword(oldPassword, newPassword) {
  if (oldPassword === validPassword) {
    validPassword = newPassword
    return true
  }
  return false
}
