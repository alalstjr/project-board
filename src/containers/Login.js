import React, {Component} from 'react';
import Auth from 'components/Auth';

import { BrowserRouter as Router, Route, Link, Redirect  } from 'react-router-dom';
import { USER } from 'module/Query';
import { Query } from 'react-apollo';

const MyComponent = props => (
  <Query
    query={USER}>
    {({ data, loading, error }) => {
      if (loading) return 'Loading';
      if (error) return `Error!: ${error}`;
      const { me } = data;
      
      return me.id;
    }}
  </Query>
);

const fakeAuth = {
    isAuth: MyComponent()
}

class Login extends Component {

    render(){
        return(
            <div>
                {MyComponent()}
                {fakeAuth.isAuth === '5c5fe91979c3212c4835a9ff' ? '회원' : '비회원'}
                <Auth auth={true} />
            </div>
        );
    }
}

export default Login;