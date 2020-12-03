import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import Dashboard from './Components/Dashboard/Dashboard'
import Items from './Components/Items/Items';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import NavContainer from './Components/Navigation/NavContainer.js'

const AppRoute = props => {
    const { history } = props
    const routeName = ['/']

    return (
        <div id="sub-content">
            {/* {!routeName.includes(history.location.pathname) && <Navigation />} */}

            <Switch>
                <Route path="/items" component={Items} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path='/home' component={NavContainer} />

                <Route path="/register" component={Register} />
                <Route path="/Login" component={Login} />
            </Switch>


        </div>

    )
}
export default withRouter(AppRoute);