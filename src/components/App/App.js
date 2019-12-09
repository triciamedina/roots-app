import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegisterPage from '../../routes/RegisterPage/RegisterPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'
import ProjectsPage from '../../routes/ProjectsPage/ProjectsPage'

class App extends Component {
  render() {
    return (
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
    )
  }
}

export default App;