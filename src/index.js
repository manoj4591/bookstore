import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import history from './utils/history';

import store from './store';
import reset from './constants/css/reset';
import MainLayout from './components/mainlayout/MainLayout';

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/courses" render={props => <MainLayout {...props} />} />
                <Route path="/content" render={props => <MainLayout {...props} />} />
                <Redirect from="/" to="/courses" />
            </Switch>
            <GlobalStyle />
        </Router>
    </Provider>,
    document.getElementById('root')
);