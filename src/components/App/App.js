import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'
import ProjectsPage from '../../routes/ProjectsPage/ProjectsPage'
import RootsContext from '../../contexts/RootsContext'
import TokenService from '../../services/token-service'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    this.setState({
      login: {
        ...this.state.login, 
        email: { value: '' },
        password: { value: '' },
      }
    })
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
    const { password, confirmedPassword, confirmedEmail, firstName, lastName } = this.state.register
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
                path={'/projects'}
                component={ProjectsPage}
              />
            </Switch>
        </div>
      </RootsContext.Provider>
    )
  }
}

export default App;