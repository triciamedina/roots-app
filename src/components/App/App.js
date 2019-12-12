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
  render() {
    const contextValue = {
      onLoginEmailChanged: this.onLoginEmailChanged,
      onLoginPasswordChanged: this.onLoginPasswordChanged,
      handleSubmitBasicAuth: this.handleSubmitBasicAuth,
    }
    return (
      <RootsContext.Provider value={contextValue}>
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