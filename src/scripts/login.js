import { showToast } from '../components/Toast/toast.js'

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form')

    const userInput = document.getElementById('input-user')
    const passwordInput = document.getElementById('input-password')

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        const user = userInput.value.trim()
        const password = passwordInput.value.trim()

        if (user === '' || password === '') {
            showToast('Por favor preencha todos os campos', 'error')
            return
        }

        const loginData = {
            user: user,
            password: password
        }

        showToast('Usuário: ' + loginData.user + ' Senha: ' + loginData.password, 'success')
    })
})