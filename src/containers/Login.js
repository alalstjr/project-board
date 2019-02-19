import React from 'react';
import Auth from 'components/Auth';

import { BrowserRouter as Router, Route, Link, Redirect  } from 'react-router-dom';

const Login = () => {
    return(
        <div>
            <Auth auth={true} />
        </div>
    );
}

export default Login;