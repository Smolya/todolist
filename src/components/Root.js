import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App'
import Task from '../containers/Task'

const Root = ({store}) => {
    const history = syncHistoryWithStore(browserHistory, store);

    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path='/(:filter)(/page/:id)' component={App}/>
                <Route path='/task/(:id)' component={Task}/>
            </Router>
        </Provider>
    );
};

export default Root;