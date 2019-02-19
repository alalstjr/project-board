import React from 'react';
import { USER } from "module/Query";
import { graphql } from 'react-apollo';
// React-Router-v4
import { BrowserRouter as Router, Route } from "react-router-dom";
// Contains
import Home from './Home';
import Login from './Login';
import Register from './Register';

const App = ({ loading, me }) => {
  if(loading) return null;
  // (<PosterImg src={require("../img/loading.gif")}/>)
  
  let userState = me ? true : false;

  return (
    <Router>
      <React.Fragment>
        <Route 
          exact={true} 
          path={'/'} 
          component={ () => <Home userState={userState} user={me} /> } 
        />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
      </React.Fragment>
    </Router>
  );
}

export default graphql(
  USER, {
    props: ({ data }) => ({ ...data })
    // props: ({ data }) => ({
    //   me: data.me
    // })
  }
)(App);