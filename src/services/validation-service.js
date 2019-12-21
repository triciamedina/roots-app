const ValidationService = {
    validateLoginEmail(email) {
        if (email.trim().length === 0) {
            return 'Email is required'
        }
    },
    validateLoginPassword(password) {
        if (password.trim().length === 0) {
            return 'Password is required'
        }
    },
    validateRegisterEmail(email) {
        if (email.trim().length === 0) {
            return 'Email is required'
        }
    },
    validateRegisterEmailMatch(email, confirmedEmail) {
        if (confirmedEmail.trim().length === 0) {
            return 'Confirmed email is required'
        }
        if (confirmedEmail.trim() !== email.trim()) {
            return 'Emails must match'
        }
    },
    validateRegisterFirstName(firstName) {
        if (firstName.trim().length === 0) {
            return 'First name is required'
        }
    },
    validateRegisterLastName(lastName) {
        if (lastName.trim().length === 0) {
            return 'Last name is required'
        }
    },
    validateRegisterPassword(password) {
        if (password.trim().length === 0) {
            return 'Password is required'
        }
    },
    validateRegisterPasswordMatch(password, confirmedPassword) {
        if (confirmedPassword.trim().length === 0) {
            return 'Confirmed password is required'
        }
        if (confirmedPassword.trim() !== password.trim()) {
            return 'Passwords must match'
        }
    }
}

export default ValidationService