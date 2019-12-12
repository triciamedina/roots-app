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
        onRegisterEmailChanged: () => {},
        onRegisterConfirmedEmailChanged: () => {},
        onRegisterFirstNameChanged: () => {},
        onRegisterLastNameChanged: () => {},
        onRegisterPasswordChanged: () => {},
        onRegisterConfirmedPasswordChanged: () => {},
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
        // basic auth for static app
        // TODO: replace basic auth with JWT auth
        handleSubmitBasicAuth: () => {},
        onLoginSuccess: () => {},
    },
    projects: {
        searchInput: {
            value: '',
        },
        onSearchInputChange: () => {},
    }
})

export default RootsContext