
import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import Dashboard from '../Dashboard/Dashboard'
import Items from '../Items/Items'
 import NavContainer from '../Navigation/NavContainer'
import Register from '../Login/Register'
import Login from '../Login/Login'
import Orders from '../Order/Orders'


const AppRoute = props => {
    const { history } = props
    const routeName = ['/login','/register']

    return (
        <div >
            {/* {!routeName.includes(history.location.pathname) && <NavContainer />} */}

            <Switch>
               
                <Route path="/items" component={Items} />
                <Route path="/dashboard" component={Dashboard} />
                {/* <Route path='/' component={NavContainer} /> */}
                <Route path="/orders" component={Orders} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>


        </div>

    )
}
export default withRouter(AppRoute);