import React, {Component} from 'react';
import Auth from 'components/Auth';

class Login extends Component {
    render(){
        return(
            <Auth auth={true} />
        );
    }
}

export default Login;