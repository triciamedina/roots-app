const ValidationService = {
    validateLoginEmail(email) {
        const input = email.trim()
        if (input.length === 0) {
            return 'Email is required'
        }
    },
    validateLoginPassword(password) {
        const input = password.trim()
        if (input.length === 0 ) {
            return 'Password is required'
        }
    }
}

export default ValidationService