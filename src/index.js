import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
// GlobalStyle
import { GlobalStyle } from 'style/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <GlobalStyle />
            <App />
        </React.Fragment>
    </ThemeProvider>, 
    document.getElementById('root')
);