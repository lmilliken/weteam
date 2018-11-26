import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import Navigation from './components/navigation';
import SignIn from './components/signin/signin';
import Profile from './components/profile/profile'
import { ProtectedRoute } from './components/ProtectedRoute'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CssBaseline>
          <Appbar>
            <Navigation />
          </Appbar>
          <Switch>
            <Route path="/login" component={SignIn} />
            <ProtectedRoute path="/profile" component={Profile} />
          </Switch>
        </CssBaseline>
      </BrowserRouter>
    );
  }
}

export default App;
