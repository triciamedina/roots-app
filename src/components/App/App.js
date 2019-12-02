import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNav from '../MainNav/MainNav'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path={'/'}>
            <MainNav />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;