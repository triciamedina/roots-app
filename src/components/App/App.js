import React, {Component} from 'react'
import { Switch } from 'react-router-dom'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import PrivateRoute from '../Utils/PrivateRoute'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'
import ProjectsPage from '../../routes/ProjectsPage/ProjectsPage'
import ProjectDetailPage from '../../routes/ProjectDetailPage/ProjectDetailPage'
import AccountSetupPage from '../../routes/AccountSetupPage/AccountSetupPage'
import RootsContext from '../../contexts/RootsContext'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import UserApiService from '../../services/user-api-service'
import CharityApiService from '../../services/charity-api-service'
import STORE from '../../store'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: {
        items: [],
      },
      autoRoundups: {
        isOn: false,
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
          touched: false,
        },
        password: {
          value: '',
          touched: false,
        },
        error: null,
        isSuccessful: false,
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
        currentStep: 1,
        error: null,
        isSuccessful: false,
      },
      projects: {
        results: [],
        searchInput: {
            value: '',
            touched: false,
        },
        donateAmount: {
          value: STORE.walletBalance,
        },
        showResults: false,
        showModal: false,
        selected: null,
      },
      accountSetup: {
        isSuccessful: false,
        institution: '',
      },
      onLoginEmailChanged: this.onLoginEmailChanged,
      onLoginPasswordChanged: this.onLoginPasswordChanged,
      handleSubmitBasicAuth: this.handleSubmitBasicAuth,
      handleSubmitJwtAuth: this.handleSubmitJwtAuth,
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
      updateDonations: this.updateDonations,
      onAccountSetupSuccess: this.onAccountSetupSuccess,
      onAccountSetupCancel: this.onAccountSetupCancel,
      onAutoRoundupsChange: this.onAutoRoundupsChange,
    }
  }
  onLoginEmailChanged = (loginEmail) => {
    this.setState({
      login: {
        ...this.state.login,
        email: { 
          value: loginEmail,
          touched: true,
        }
      }
    })
  }
  onLoginPasswordChanged = (loginPassword) => {
    this.setState({
      login: {
        ...this.state.login, 
        password: {
          value: loginPassword,
          touched: true,
        }
      }
    })
  }
  handleSubmitBasicAuth = () => {
    const { email, password } = this.state.login
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(email.value, password.value)
    )
  }
  handleSubmitJwtAuth = () => {
    const { email, password } = this.state.login
    this.setState({
      login: {
        ...this.state.login,
        error: null,
      }
    })
    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        this.setState({
          login: {
            ...this.state.login,
            isSuccessful: true,
          }
        })
      })
      .catch(res => {
        this.setState({
          login: {
            ...this.state.login,
            error: res.error,
            isSuccessful: false,
          }
        })
      })
  }
  handleLogout = () => {
    TokenService.clearAuthToken()
    this.handleClearSearch()
    this.handleClearLogin()
    this.handleClearRegister()
  }
  onRegisterEmailChanged = (registerEmail) => {
    this.setState({
      register: {
        ...this.state.register, 
        email: { 
          value: registerEmail,
          touched: true,
        }
      }
    })
  }
  onRegisterConfirmedEmailChanged = (registerConfirmedEmail) => {
    this.setState({
      register: {
        ...this.state.register, 
        confirmedEmail: { 
          value: registerConfirmedEmail,
          touched: true,
        }
      }
    })
  }
  handleRegisterStepOne = () => {
    const { email, confirmedEmail } = this.state.register
    if (email.value === confirmedEmail.value) {
      this.setState({
        register: {
          ...this.state.register, 
          currentStep: 2 
        }
      })
    }
  }
  onRegisterFirstNameChanged = (firstNameInput) => {
    this.setState({
      register: {
        ...this.state.register, 
        firstName: { 
          value: firstNameInput,
          touched: true,
        }
      }
    })
  }
  onRegisterLastNameChanged = (lastNameInput) => {
    this.setState({
      register: {
        ...this.state.register, 
        lastName: { 
          value: lastNameInput,
          touched: true,
        }
      }
    })
  }
  handleRegisterStepTwo = () => {
    this.setState({
      register: {
        ...this.state.register, 
        currentStep: 3,
      }
    })
  }
  onRegisterPasswordChanged = (passwordInput) => {
    this.setState({
      register: {
        ...this.state.register, 
        password: { 
          value: passwordInput,
          touched: true,
        }
      }
    })
  }
  onRegisterConfirmedPasswordChanged = (confirmedPasswordInput) => {
    this.setState({
      register: {
        ...this.state.register, 
        confirmedPassword: { 
          value: confirmedPasswordInput,
          touched: true,
        }
      }
    })
  }
  handleRegisterSubmit = () => {
    const { confirmedEmail, firstName, lastName, confirmedPassword } = this.state.register
    const newUser = {
      email: confirmedEmail.value,
      first_name: firstName.value,
      last_name: lastName.value,
      password: confirmedPassword.value,
    }
    UserApiService.postRegistration(newUser)
      .then(res => {
        this.setState({
          login: {
            ...this.state.login, 
            email: { value: confirmedEmail.value },
            password: { value: confirmedPassword.value }
          },
          register: {
            ...this.state.register,
            isSuccessful: true,
            error: false,
          }
        })
        this.handleSubmitJwtAuth()
      })
      .catch(res => {
        this.setState({
          register: {
            ...this.state.register,
            error: res.error,
            isSuccessful: false,
          }
        })
      })
  }
  onSearchInputChange = (searchInput) => {
    this.setState({
      projects: {
        ...this.state.projects,
        searchInput: { 
          value: searchInput,
          touched: true,
        }
      }
    })
  }
  handleSearchSubmit = () => {
    const { searchInput } = this.state.projects
    const authToken = TokenService.getAuthToken()
    this.setState({
      projects: {
        ...this.state.projects,
        error: null,
      }
    })
    CharityApiService.getCharities(searchInput.value, authToken)
      .then(res => {
        this.setState({
          projects: {
            ...this.state.projects,
            showResults: true,
            results: res.data[0]
          }
        })
      })
      .catch(res => {
        this.setState({
          projects: {
            ...this.state.projects,
            error: res.error,
          }
        })
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
        error: null,
        isSuccessful: false,
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
  handleOpenModal = (selected) => {
    this.setState({
      projects: {
        ...this.state.projects, 
        showModal: true,
        selected: selected,
      },
    })
  }
  handleCloseModal = () => {
    this.setState({
      projects: {
        ...this.state.projects,
        showModal: false,
        selected: null,
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
        error: null,
      }
    })

    const { title, fulfillmentTrailer, proposalURL, schoolName, thumbImageURL } = this.state.projects.selected[0]
    const newDonation = {
      amount: this.state.projects.donateAmount.value,
      project_name: title,
      project_description: fulfillmentTrailer,
      project_url: proposalURL,
      school_name: schoolName,
      image_url: thumbImageURL
    }
    const authToken = TokenService.getAuthToken()
    
    UserApiService.postDonation(newDonation, authToken)
      .then(res => {
        this.setState({
          projects: {
            ...this.state.projects,
            donateAmount: { value: STORE.walletBalance }, // TODO: update this with wallet balance from db
            searchInput: { value: '' },
            showModal: false,
            showResults: false,
          },
          donations: {
            ...this.state.donations,
            items: [...this.state.donations.items, res]
          }
        })
      })
      .catch(res => {
        this.setState({
          projects: {
            ...this.state.projects,
            error: res.error,
          }
        })
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
  // updateProjectResults = (items) => {
  //   this.setState({
  //     projects: {
  //       ...this.state.projects,
  //       results: items,
  //     }
  //   })
  // }
  updateDonations = (donationsTotal) => {
    this.setState({
      donations: {
        ...this.state.donations,
        error: null,
      }
    })

    const authToken = TokenService.getAuthToken()

    UserApiService.getAllDonations(authToken)
      .then(res => {
        this.setState({
          donations: {
            ...this.state.donations,
            items: res,
            total: donationsTotal,
          }
        })
      })
      .catch(res => {
        this.setState({
          donations: {
            ...this.state.donations,
            error: res.error,
          }
        })
      })
  }
  // onAccountSetupCancel = () => {
  //   this.setState({
  //     accountSetup: {
  //       ...this.state.accountSetup,
  //       currentStep: 1,
  //     },
  //     accounts: {
  //       ...this.state.accounts,
  //       results: [],
  //       selected: null,
  //     },
  //     banks: {
  //       ...this.state.banks,
  //       results: [],
  //       searchInput: {
  //         ...this.state.banks.searchInput,
  //         touched: false,
  //         value: ''
  //       },
  //       selected: null,
  //     },
  //   })
  // }
  onAccountSetupSuccess = (token, metadata) => {
    console.log(token, metadata)
    this.setState({
      accountSetup: {
        ...this.state.accountSetup,
        isSuccessful: true,
        institution: metadata.institution
      }
    })
  }
  onAutoRoundupsChange = () => {
    this.setState({
      autoRoundups: {
        ...this.state.autoRoundups,
        isOn: (this.state.autoRoundups.isOn ? false : true)
      }
    })
  }
  render() {
    return (
      <RootsContext.Provider value={this.state}>
        <div className='App'>
            <Switch>
              <PublicOnlyRoute 
                exact 
                path={'/'}
                component={LandingPage}
              />
              <PublicOnlyRoute 
                exact 
                path={'/login'}
                component={LoginPage}
              />
              <PublicOnlyRoute
                exact 
                path={'/register'}
                component={RegisterPage}
              />
              <PrivateRoute
                path={'/account-setup'}
                component={AccountSetupPage}
              />
              <PrivateRoute
                path={'/dashboard'} 
                component={DashboardPage}
              />
              <PrivateRoute
                exact
                path={'/projects'}
                component={ProjectsPage}
              />
              <PrivateRoute
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