import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
// GlobalStyle
import { GlobalStyle } from 'style/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import { ApolloProvider } from "react-apollo";
import client from "module/apolloClient";

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                <App />
            </React.Fragment>
        </ThemeProvider>
    </ApolloProvider>, 
    document.getElementById('root')
);