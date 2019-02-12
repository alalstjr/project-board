import React, {Component} from 'react';
import Auth from 'components/Auth';

class Register extends Component {
    render(){
        return(
            <Auth auth={false} />
        );
    }
}

export default Register;