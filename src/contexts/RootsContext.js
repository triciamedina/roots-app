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
        total: '',
        updateDonations: () => {},
    },
    wallet: {
        balance: '',
        dailyTotal: '',
        updateWallet: () => {},
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
        results: [],
        searchInput: {
            value: '',
        },
        donateAmount: {
            value: '',
        },
        showResults: false,
        showModal: false,
        onSearchInputChange: () => {},
        handleSearchSubmit: () => {},
        handleClearSearch: () => {},
        handleOpenModal: () => {},
        handleCloseModal: () => {},
        onDonateAmountChange: () => {},
        handleConfirmDonation: () => {},
        updateProjectResults: () => {},
    },
    banks: {
        results: [],
        searchInput: {
            value: '',
            touched: false,
        },
        selected: null,
        updateBanks: () => {},
        onBankSearchChange: () => {},
        handleClearBankSearch: () => {},
        updateSelectedBank: () => {},
    },
    accountSetup: {
        currentStep: '',
        onAccountSetupConfirmed: () => {},
        onAccountSetupCancel: () => {},
    },
    accounts: {
        results: [],
        selected: null,
        updateAccounts: () => {},
        updateSelectedAccount: () => {},
    }
})

export default RootsContext