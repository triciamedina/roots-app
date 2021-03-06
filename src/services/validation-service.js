import { Formatter } from '../components/Utils/Utils';

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
        if (email.trim().length < 6 || email.trim().length > 50) {
            return 'Email must be between 6 and 50 characters'
        }
        if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            return 'Email must be a valid email address'
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
        if (password.trim().length < 8 || password.trim().length > 36) {
            return 'Password must be between 8 and 36 characters'
        }
        if (!/\d/.test(password)) {
            return 'Password must contain at least one digit'
        }
    },
    validateRegisterPasswordMatch(password, confirmedPassword) {
        if (confirmedPassword.trim().length === 0) {
            return 'Confirmed password is required'
        }
        if (confirmedPassword.trim() !== password.trim()) {
            return 'Passwords must match'
        }
    },
    validateProjectSearch(input) {
        if (!Number.isInteger(Number(input.trim()))) {
            return `Zip code must be 5 digits`
        }
        if (input.trim().length === 0) {
            return 'Zip code is required'
        }
        if (input.trim().length !== 5) {
            return 'Zip code must be 5 digits'
        }
    },
    validateDonationAmount(input) {
        if (Number(input) <= 0 ) {
            return `Donation amount is required`
        }
    },
    validateWalletBalance(balance) {
        if (Number(balance) <= 0 ) {
            return `Your wallet balance is ${Formatter.format(balance)}`
        }
    }
};

export default ValidationService;