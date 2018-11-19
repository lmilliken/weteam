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

const fakeAuth = {
  isAuthenticated: true,

  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },

  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  render() {
    return <div>login</div>;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
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
            <PrivateRoute path="/protected" component={Protected} />
          </Switch>
        </CssBaseline>
      </BrowserRouter>
    );
  }
}

export default App;
