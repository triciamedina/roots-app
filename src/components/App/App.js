import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'
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
          <Route exact path={'/'}>
            <MainNav />
            <LandingPage />
          </Route>
          <Route exact path={'/login'}>
            <LoginPage />
          </Route>
          <Route exact path={'/register'}>
            <RegisterPage />
          </Route>
          {/* Private only dashboard page */}
          <Route path={'/dashboard'} >
            <MainNav />
            <DashboardPage />
          </Route>
          <Route path={'/projects'}>
              <ProjectsPage />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;