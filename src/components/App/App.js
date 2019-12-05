import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import DashboardPage from '../../routes/DashboardPage/DashboardPage'

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

          <Route path={'/login'}>
            <LoginPage />
          </Route>

          {/* Private only dashboard page */}
          <Route path={'/dashboard'}>
            <MainNav />
            <DashboardPage />
          </Route>
          
        </Switch>
      </div>
    )
  }
}

export default App;