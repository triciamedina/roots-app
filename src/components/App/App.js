import React, {Component} from 'react';
import { Switch } from 'react-router-dom';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import RegisterRoute from '../Utils/RegisterRoute';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import ProjectsPage from '../../routes/ProjectsPage/ProjectsPage';
import ProjectDetailPage from '../../routes/ProjectDetailPage/ProjectDetailPage';
import AccountSetupPage from '../../routes/AccountSetupPage/AccountSetupPage';
import RootsContext from '../../contexts/RootsContext';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import UserApiService from '../../services/user-api-service';
import CharityApiService from '../../services/charity-api-service';
import TransactionService from '../../services/transaction-service';

const generateEmptyState = () => {
  return {
    transactions: {
      items: [],
    },
    autoRoundups: {
      isOn: false,
    },
    donations: {
      items: [],
    },
    wallet: {
      balance: '',
      dailyTotal: '',
    },
    roundUps: {
      items: []
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
        value: null,
      },
      showResults: false,
      showModal: false,
      selected: null,
    },
    accountSetup: {
      isSuccessful: false,
      institution: '',
      isInstitutionFormMounted: false,
    },
  };
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...generateEmptyState(),
      onLoginEmailChanged: this.onLoginEmailChanged,
      onLoginPasswordChanged: this.onLoginPasswordChanged,
      handleSubmitJwtAuth: this.handleSubmitJwtAuth,
      checkAccountExists: this.checkAccountExists,
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
      updateDonateAmount: this.updateDonateAmount,
      onDonateAmountChange: this.onDonateAmountChange,
      handleConfirmDonation: this.handleConfirmDonation,
      updateTransactions: this.updateTransactions,
      handleCheckTransaction: this.handleCheckTransaction,
      updateCheckedTransactions: this.updateCheckedTransactions,
      updateWallet: this.updateWallet,
      updateDonations: this.updateDonations,
      onAccountSetupSuccess: this.onAccountSetupSuccess,
      onAutoRoundupsChange: this.onAutoRoundupsChange,
      updateRoundups: this.updateRoundups,
      institutionFormDidMount: this.institutionFormDidMount,
      institutionFormRemoved: this.institutionFormRemoved,
      getUserInfo: this.getUserInfo,
      updateProjects: this.updateProjects,
    };
  };

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
  };

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
  };

  handleSubmitJwtAuth = () => {
    const { email, password } = this.state.login;

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
  };

  checkAccountExists = () => {
    const authToken = TokenService.getAuthToken();

    this.setState({
      accountSetup: {
        ...this.state.accountSetup,
        error: null
      }
    })

    return UserApiService.getAccount(authToken)
      .then(res => {
        if (res.id) {
          this.setState({
            accountSetup: {
              ...this.state.accountSetup,
              isSuccessful: true,
            }
          })
          TokenService.saveAccountToken(res.id)
        } else {
          this.setState({
            accountSetup: {
              ...this.state.accountSetup,
              isSuccessful: false,
            }
          })
        }
      })
      .catch(res => {
        this.setState({
          accountSetup: {
            ...this.state.accountSetup,
            isSuccessful: false,
            error: res.error
          }
        })
      })
  };

  getUserInfo = () => {
    this.setState({
      autoRoundups: {
        ...this.state.autoRoundups,
        error: null
      }
    })

    const authToken = TokenService.getAuthToken()

    UserApiService.getUser(authToken)
      .then(res => {
        const autoRoundupsStatus = res.auto_roundups;
        const newValue = ((autoRoundupsStatus === null) ? false : true);
        this.setState({
          autoRoundups: {
            ...this.state.autoRoundups,
            isOn: newValue
          }
        })
      })
      .catch(res => {
        this.setState({
          autoRoundups: {
            ...this.state.autoRoundups,
            error: res.error
          }
        })
      })
  };

  handleLogout = () => {
    TokenService.clearAuthToken();

    TokenService.clearAccountToken();

    this.setState({
      ...this.state,
      ...generateEmptyState()
    })
  };

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
  };

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
  };

  handleRegisterStepOne = () => {
    const { email, confirmedEmail } = this.state.register;

    if (email.value === confirmedEmail.value) {
      this.setState({
        register: {
          ...this.state.register, 
          currentStep: 2 
        }
      })
    };
  };

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
  };

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
  };

  handleRegisterStepTwo = () => {
    this.setState({
      register: {
        ...this.state.register, 
        currentStep: 3,
      }
    })
  };

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
  };

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
  };

  handleRegisterSubmit = () => {
    const { confirmedEmail, firstName, lastName, confirmedPassword } = this.state.register;

    const newUser = {
      email: confirmedEmail.value,
      first_name: firstName.value,
      last_name: lastName.value,
      password: confirmedPassword.value,
    };

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
        this.handleSubmitJwtAuth();
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
  };

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
  };

  handleSearchSubmit = () => {
    const { searchInput } = this.state.projects;

    const authToken = TokenService.getAuthToken();

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
        localStorage.setItem('projects', JSON.stringify(this.state.projects))
      })
      .catch(res => {
        this.setState({
          projects: {
            ...this.state.projects,
            error: res.error,
          }
        })
      })
  };

  handleClearSearch = () => {
    this.setState({
      projects: {
        ...this.state.projects,
        searchInput: { value: '' },
        donateAmount: { value: null },
        showResults: false,
      }
    })
    localStorage.clear('projects')
  };

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
  };

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
  };

  handleOpenModal = (selected) => {
    this.setState({
      projects: {
        ...this.state.projects, 
        showModal: true,
        selected: selected,
      },
    })
  };

  handleCloseModal = () => {
    this.setState({
      projects: {
        ...this.state.projects,
        showModal: false,
        selected: null,
      },
    })
  };

  updateDonateAmount = () => {
    const amount = this.state.wallet.balance;

    this.setState({
      projects: {
        ...this.state.projects,
        donateAmount: { value: amount }
      }
    })
  };

  onDonateAmountChange = (donateAmount) => {
    this.setState({
      projects: {
        ...this.state.projects, 
        donateAmount: { value: parseFloat(donateAmount) },
      },
    })
  };

  handleConfirmDonation = () => {
    this.setState({
      projects: {
        ...this.state.projects,
        error: null,
      }
    })

    const { 
      title, 
      fulfillmentTrailer, 
      proposalURL, 
      schoolName, 
      thumbImageURL 
    } = this.state.projects.selected[0];

    const newDonation = {
      amount: this.state.projects.donateAmount.value,
      project_name: title,
      project_description: fulfillmentTrailer,
      project_url: proposalURL,
      school_name: schoolName,
      image_url: thumbImageURL
    };

    const authToken = TokenService.getAuthToken();

    const newWalletBalance = this.state.wallet.balance - newDonation.amount;

    UserApiService.postDonation(newDonation, authToken)
      .then(res => {
        this.setState({
          projects: {
            ...this.state.projects,
            donateAmount: { value: null }, 
            searchInput: { value: '' },
            showModal: false,
            showResults: false,
          },
          wallet: {
            ...this.state.wallet,
            balance: newWalletBalance
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
  };

  updateTransactions = () => {
    this.setState({
      transactions: {
        ...this.state.transactions,
        error: null
      }
    })

    const authToken = TokenService.getAuthToken();
    
    return UserApiService.getTransactions(authToken)
      .then(res => {
        this.setState({
          transactions: {
            ...this.state.transactions,
            items: res.transactions,
            error: null
          }
        })

        // TODO: if implementing pagination/pulling older transactions, post new ones to roundups
      })
      .catch(res => {
        this.setState({
          transactions: {
            ...this.state.transactions,
            error: res.error
          }
        })
      })
  };

  handleCheckTransaction = (id) => {
    const newItems = this.state.transactions.items.map(item => item.transaction_id === id 
      ? item = {...item, isChecked: true}
      : item
      );

    this.setState({
      transactions: {
        ...this.state.transactions,
        items: newItems
      },
      roundUps: {
        ...this.state.roundUps,
        error: null
      }
    })

    const authToken = TokenService.getAuthToken();
    const selected = this.state.transactions.items.filter(item => item.transaction_id === id);

    const newRoundup = {
      account_id: selected[0].account_id,
      amount: selected[0].amount,
      date: selected[0].date,
      name: selected[0].name,
      transaction_id: selected[0].transaction_id
    };

    UserApiService.postRoundup(newRoundup, authToken)
      .then(res => {
        this.setState({
          roundUps: {
            ...this.state.roundUps,
            items: [...this.state.roundUps.items, res]
          }
        })
        this.updateWallet();
      })
      .catch(res => {
        this.setState({
          roundUps: {
            ...this.state.roundUps,
            error: res.error
          }
        })
      })
  };

  updateCheckedTransactions = () => {
    const { roundUps, transactions } = this.state;

    const newItems = transactions.items.map(transaction => {
      if (roundUps.items.some(roundUp => 
        roundUp.transaction_id === transaction.transaction_id)) {
          return transaction = {...transaction, isChecked: true}
        }
        return transaction
    })

    this.setState({
      transactions: {
        ...this.state.transactions,
        items: newItems
      }
    })
  };

  updateWallet = () => {
    const { roundUps, donations }= this.state;

    const balance = TransactionService.calculateWalletTotal(roundUps.items, donations.items);
    const dailyTotal = TransactionService.calculateDailyTotal(roundUps.items);

    this.setState({
      wallet: {
        ...this.state.wallet,
        balance: balance,
        dailyTotal: dailyTotal,
      }
    })
  };

  updateDonations = () => {
    this.setState({
      donations: {
        ...this.state.donations,
        error: null,
      }
    })

    const authToken = TokenService.getAuthToken();

    UserApiService.getAllDonations(authToken)
      .then(res => {
        this.setState({
          donations: {
            ...this.state.donations,
            items: res
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
  };

  onAccountSetupSuccess = (publicToken, metadata) => {
    this.setState({
      accountSetup: {
        ...this.state.accountSetup,
        institution: metadata.institution,
        error: null
      }
    })

    const authToken = TokenService.getAuthToken();

    const newAccount = {
      publicToken: publicToken,
      accountId: metadata.account_id
    };

    UserApiService.postAccount(newAccount, authToken)
      .then(res => {
        TokenService.saveAccountToken(res.id)
        this.setState({
          accountSetup: {
            ...this.state.accountSetup,
            isSuccessful: true,
          }
        })
      })
      .catch(res => {
        this.setState({
          accountSetup: {
            ...this.state.accountSetup,
            error: res.error
          }
        })
      })
  };

  onAutoRoundupsChange = () => {
    this.setState({
      autoRoundups: {
        ...this.state.autoRoundups,
        error: null
      }
    })

    const authToken = TokenService.getAuthToken();

    const newValue = {
      autoRoundups: (this.state.autoRoundups.isOn ? false : true)
    }

    UserApiService.updateUser(authToken, newValue)
      .then(res => {
        const value = (res.auto_roundups ? true : false);
        const { transactions, roundUps } = this.state;

        this.setState({
          autoRoundups: {
            ...this.state.autoRoundups,
            isOn: value
          }
        })

        if (value === true) {
          transactions.items.forEach(transaction => {
            if (!roundUps.items.some(roundUp => 
              roundUp.transaction_id === transaction.transaction_id)) {
                this.handleCheckTransaction(transaction.transaction_id)
              }
            })
        };
      })
      .catch(res => {
        this.setState({
          autoRoundups: {
            ...this.state.autoRoundups,
            error: res.error
          }
        })
      })
  };

  updateRoundups = () => {
    this.setState({
      roundUps: {
        ...this.state.roundUps,
        error: null
      }
    })

    const authToken = TokenService.getAuthToken();

    return UserApiService.getRoundups(authToken)
      .then(res => {
        this.setState({
          roundUps: {
            ...this.state.roundUps,
            items: res,
            error: null
          }
        })
      })
      .catch(res => {
        this.setState({
          roundUps: {
            ...this.state.roundUps,
            error: res.error
          }
        })
      })
  };

  institutionFormDidMount = () => {
    this.setState({
      accountSetup: {
        ...this.state.accountSetup,
        isInstitutionFormMounted: true
      }
    })
  };

  institutionFormRemoved = () => {
    this.setState({
      accountSetup: {
        ...this.state.accountSetup,
        isInstitutionFormMounted: false
      }
    })
  };

  updateProjects = (projects) => {
    this.setState({
      projects
    })
  };

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
              <RegisterRoute
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
};

export default App;