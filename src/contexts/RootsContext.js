import React from 'react'

const RootsContext = React.createContext({
    registration: {
        email: '',
        confirmedEmail: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmedPassword: '',
        emailChanged: () => {},
        confirmedEmailChanged: () => {},
        firstNameChanged: () => {},
        lastNameChanged: () => {},
        passwordChanged: () => {},
        confirmedPasswordChanged: () => {},
    }
})

export default RootsContext