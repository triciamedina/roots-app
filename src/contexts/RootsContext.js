import React from 'react'

const RootsContext = React.createContext({
    register: {
        email: {
            value: '',
        },
        confirmedEmail: {
            value: '',
        },
        firstName: {
            value: '',
        },
        lastName: {
            value: '',
        },
        password: {
            value: '',
        },
        confirmedPassword: {
            value: '',
        },
        currentStep: '',
        onRegisterEmailChanged: () => {},
        onRegisterConfirmedEmailChanged: () => {},
        handleRegisterStepOne: () => {},
        onRegisterFirstNameChanged: () => {},
        onRegisterLastNameChanged: () => {},
        handleRegisterStepTwo: () => {},
        onRegisterPasswordChanged: () => {},
        onRegisterConfirmedPasswordChanged: () => {},
        handleRegisterSubmit: () => {},
    },
    login: {
        email: {
            value: '',
        },
        password: {
            value: '',
        },
        onLoginEmailChanged: () => {},
        onLoginPasswordChanged: () => {},
        // TODO: replace basic auth with JWT auth
        handleSubmitBasicAuth: () => {},
    },
    logout: {
        handleLogout: () => {},
    },
    projects: {
        searchInput: {
            value: '',
        },
        showResults: false,
        onSearchInputChange: () => {},
        handleSearchSubmit: () => {},
        handleClearSearch: () => {}
    }
})

export default RootsContext