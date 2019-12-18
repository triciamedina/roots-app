import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'
import ProjectsPage from '../../routes/ProjectsPage/ProjectsPage'
import ProjectDetailPage from '../../routes/ProjectDetailPage/ProjectDetailPage'
import RootsContext from '../../contexts/RootsContext'
import TokenService from '../../services/token-service'
import STORE from '../../store'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: {
        items: [],
      },
      donations: {
        items: [],
        total: '',
      },
      wallet: {
        balance: '',
        dailyTotal: '',
      },
      login: {
        email: {
          value: '',
        },
        password: {
          value: '',
        },
      },
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
        currentStep: 1,
      },
      projects: {
        results: [],
        searchInput: {
            value: '',
        },
        donateAmount: {
          value: STORE.walletBalance,
        },
        showResults: false,
        showModal: false,
      },
      onLoginEmailChanged: this.onLoginEmailChanged,
      onLoginPasswordChanged: this.onLoginPasswordChanged,
      handleSubmitBasicAuth: this.handleSubmitBasicAuth,
      handleLogout: this.handleLogout,
      onRegisterEmailChanged: this.onRegisterEmailChanged,
      onRegisterConfirmedEmailChanged: this.onRegisterConfirmedEmailChanged,
      handleRegisterStepOne: this.handleRegisterStepOne,
      onRegisterFirstNameChanged: this.onRegisterFirstNameChanged,
      onRegisterLastNameChanged: this.onRegisterLastNameChanged,
      handleRegisterStepTwo: this.handleRegisterStepTwo,
      onRegisterPasswordChanged: this.onRegisterPasswordChanged,
      onRegisterConfirmedPasswordChanged: this.onRegisterConfirmedPasswordChanged,
      handleRegisterSubmit: this.handleRegisterSubmit,
      onSearchInputChange: this.onSearchInputChange,
      handleSearchSubmit: this.handleSearchSubmit,
      handleClearSearch: this.handleClearSearch,
      handleOpenModal: this.handleOpenModal,
      handleCloseModal: this.handleCloseModal,
      onDonateAmountChange: this.onDonateAmountChange,
      handleConfirmDonation: this.handleConfirmDonation,
      updateTransactions: this.updateTransactions,
      handleCheckTransaction: this.handleCheckTransaction,
      updateWallet: this.updateWallet,
      updateProjectResults: this.updateProjectResults,
      updateDonationsTotal: this.updateDonationsTotal,
      updateDonations: this.updateDonations,
    }
  }
  onLoginEmailChanged = (loginEmail) => {
    this.setState({
      login: {...this.state.login, email: { value: loginEmail }}
    })
  }
  onLoginPasswordChanged = (loginPassword) => {
    this.setState({
      login: {...this.state.login, password: { value: loginPassword }}
    })
  }
  handleSubmitBasicAuth = () => {
    const { email, password } = this.state.login
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(email.value, password.value)
    )
  }
  handleLogout = () => {
    TokenService.clearAuthToken()
    this.handleClearSearch()
    this.handleClearLogin()
    this.handleClearRegister()
  }
  onRegisterEmailChanged = (registerEmail) => {
    this.setState({
      register: {...this.state.register, email: { value: registerEmail }}
    })
  }
  onRegisterConfirmedEmailChanged = (registerConfirmedEmail) => {
    this.setState({
      register: {...this.state.register, confirmedEmail: { value: registerConfirmedEmail }}
    })
  }
  handleRegisterStepOne = () => {
    const { email, confirmedEmail } = this.state.register
    if (email.value === confirmedEmail.value) {
      this.setState({
        register: {...this.state.register, currentStep: 2 }
      })
    }
  }
  onRegisterFirstNameChanged = (firstNameInput) => {
    this.setState({
      register: {...this.state.register, firstName: { value: firstNameInput }}
    })
  }
  onRegisterLastNameChanged = (lastNameInput) => {
    this.setState({
      register: {...this.state.register, lastName: { value: lastNameInput }}
    })
  }
  handleRegisterStepTwo = () => {
    this.setState({
      register: {...this.state.register, currentStep: 3 }
    })
  }
  onRegisterPasswordChanged = (passwordInput) => {
    this.setState({
      register: {...this.state.register, password: { value: passwordInput }}
    })
  }
  onRegisterConfirmedPasswordChanged = (confirmedPasswordInput) => {
    this.setState({
      register: {...this.state.register, confirmedPassword: { value: confirmedPasswordInput }}
    })
  }
  handleRegisterSubmit = () => {
    const { password, confirmedPassword, confirmedEmail } = this.state.register
    if (password.value === confirmedPassword.value) {
      this.setState({
        login: {
          ...this.state.login, 
          email: { value: confirmedEmail },
          password: { value: confirmedPassword }
        }
      })
      this.handleSubmitBasicAuth()
    }
  }
  onSearchInputChange = (searchInput) => {
    this.setState({
      projects: {...this.state.projects, searchInput: { value: searchInput }}
    })
  }
  handleSearchSubmit = () => {
    this.setState({
      projects: {...this.state.projects, showResults: true }
    })
  }
  handleClearSearch = () => {
    this.setState({
      projects: {
        ...this.state.projects,
        searchInput: { value: '' },
        donateAmount: { value: STORE.walletBalance },
        showResults: false,
      }
    })
  }
  handleClearLogin = () => {
    this.setState({
      login: {
        ...this.state.login, 
        email: { value: '' },
        password: { value: '' },
      },
    })
  }
  handleClearRegister = () => {
    this.setState({
      register: {
        ...this.state.register,
        email: { value: '' },
        confirmedEmail: { value: '' },
        firstName: { value: '' },
        lastName: { value: '' },
        password: { value: '' },
        confirmedPassword: { value: '' },
        currentStep: 1,
      },
    })
  }
  handleOpenModal = () => {
    this.setState({
      projects: {
        ...this.state.projects, 
        showModal: true
      },
    })
  }
  handleCloseModal = () => {
    this.setState({
      projects: {
        ...this.state.projects,
        showModal: false
      },
    })
  }
  onDonateAmountChange = (donateAmount) => {
    this.setState({
      projects: {
        ...this.state.projects, 
        donateAmount: { value: parseFloat(donateAmount) },
      },
    })
  }
  handleConfirmDonation = () => {
    this.setState({
      projects: {
        ...this.state.projects,
        donateAmount: { value: STORE.walletBalance },
        searchInput: { value: '' },
        showModal: false,
        showResults: false,
      },
    })
  }
  updateTransactions = (transactions) => {
    this.setState({
      transactions: {
        items: [...transactions]
      }
    })
  }
  handleCheckTransaction = (id) => {
    const newItems = this.state.transactions.items.map(item => item.id === id 
      ? item = {...item, isChecked: (item.isChecked ? false : true)}
      : item
      )
    this.setState({
      transactions: {
        ...this.state.transactions,
        items: newItems
      }
    })
  }
  updateWallet = (walletBalance, walletDailyTotal) => {
    this.setState({
      wallet: {
        ...this.state.wallet,
        balance: walletBalance,
        dailyTotal: walletDailyTotal,
      }
    })
  }
  updateProjectResults = (items) => {
    this.setState({
      projects: {
        ...this.state.projects,
        results: items,
      }
    })
  }
  updateDonationsTotal = (donationsTotal) => {
    this.setState({
      donations: {
        ...this.state.donations,
        total: donationsTotal,
      }
    })
  }
  updateDonations = (donations) => {
    this.setState({
      donations: {
        ...this.state.donations,
        items: donations,
      }
    })
  }
  render() {
    return (
      <RootsContext.Provider value={this.state}>
        <div className='App'>
            <Switch>
              {/* Public only landing page */}
              <Route 
                exact 
                path={'/'}
                component={LandingPage}
              />
              <Route 
                exact 
                path={'/login'}
                component={LoginPage}
              />
              <Route
                exact 
                path={'/register'}
                component={RegisterPage}
              />
              {/* Private only dashboard page */}
              <Route
                path={'/dashboard'} 
                component={DashboardPage}
              />
              <Route
                exact
                path={'/projects'}
                component={ProjectsPage}
              />
              <Route
                path={'/projects/:project_id'} 
                component={ProjectDetailPage}
              />
            </Switch>
        </div>
      </RootsContext.Provider>
    )
  }
}

export default App;