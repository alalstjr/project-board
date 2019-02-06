import React, { Component } from 'react';
// React-Router-v4
import { BrowserRouter as Router, Route } from "react-router-dom";
// Contains
import Home from './Home';
import Login from './Login';
import Register from './Register';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact={true} path={'/'} component={Home} />
          <Route path={'/login'} component={Login} />
          <Route path={'/register'} component={Register} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
