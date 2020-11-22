import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'views/login';
import Register from 'views/register';
import ProviderModule from 'views/provider'
import PrivateRoute from './PrivateRouteWrapper';

const Router = () => {
    return (
        <Switch>
            <PrivateRoute path="/" exact component={ProviderModule} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    )
};

export default Router;