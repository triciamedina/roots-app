import React from 'react'

const RootsContext = React.createContext({
    transactions: {
        items: [],
        updateTransactions: () => {},
        handleCheckTransaction: () => {},
    },
    autoRoundups: {
        isOn: false,
        onAutoRoundupsChange: () => {},
      },
    donations: {
        items: [],
        updateDonations: () => {},
    },
    wallet: {
        balance: '',
        dailyTotal: '',
        updateWallet: () => {},
      },
    roundUps: {
        items: [],
        updateRoundups: () => {},
    },
    register: {
        email: {
            value: '',
            touched: false,
        },
        confirmedEmail: {
            value: '',
            touched: false,
        },
        firstName: {
            value: '',
            touched: false,
        },
        lastName: {
            value: '',
            touched: false,
        },
        password: {
            value: '',
            touched: false,
        },
        confirmedPassword: {
            value: '',
            touched: false,
        },
        currentStep: '',
        error: null,
        isSuccessful: false,
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
        error: null,
        isSuccessful: false,
        onLoginEmailChanged: () => {},
        onLoginPasswordChanged: () => {},
        handleSubmitBasicAuth: () => {},
        handleSubmitJwtAuth: () => {},
    },
    logout: {
        handleLogout: () => {},
    },
    projects: {
        results: [],
        searchInput: {
            value: '',
            touched: false,
        },
        donateAmount: {
            value: '',
        },
        showResults: false,
        showModal: false,
        selected: null,
        onSearchInputChange: () => {},
        handleSearchSubmit: () => {},
        handleClearSearch: () => {},
        handleOpenModal: () => {},
        handleCloseModal: () => {},
        updateDonateAmount: () => {},
        onDonateAmountChange: () => {},
        handleConfirmDonation: () => {},
    },
    accountSetup: {
        isSuccessful: false,
        institution: '',
        onAccountSetupSuccess: () => {},
        onAccountSetupCancel: () => {},
    },
})

export default RootsContext