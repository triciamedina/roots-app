import React from 'react';

const RootsContext = React.createContext({
    transactions: {
        items: [],
        openModal: false,
        selected: null,
        updateTransactions: () => {},
        openRoundupsModal: () => {},
        handleCloseRoundupsModal: () => {},
        handleCheckTransaction: () => {},
        updateCheckedTransactions: () => {},
    },
    autoRoundups: {
        isOn: false,
        openModal: false,
        onAutoRoundupsChange: () => {},
        openToggleModal: () => {},
        handleCloseToggleModal: () => {},
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
        handleSubmitJwtAuth: () => {},
        checkAccountExists: () => {},
        getUserInfo: () => {},
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
        updateProjects: () => {},
    },
    accountSetup: {
        isSuccessful: false,
        institution: '',
        isInstitutionFormMounted: false,
        onAccountSetupSuccess: () => {},
        onAccountSetupCancel: () => {},
        institutionFormDidMount: () => {},
        institutionFormRemoved: () => {},
    },
});

export default RootsContext;