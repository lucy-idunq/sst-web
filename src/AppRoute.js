import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard'
import Items from './Components/Items/Items'
import Orders from './Components/Order/Orders'
import Register from './Components/Login/Register'
import Login from './Components/Login/Login'
import NavContainer from './Components/Navigation/NavContainer'


const AppRoute = props => {
    const { history } = props
    const routeName = ['/login', '/register',]
    return (
        
        <div >
            {!routeName.includes(history.location.pathname) && <NavContainer />}
            <Switch>
                <Route path="/items" component={Items} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/orders" component={Orders} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </div>

    )
}
export default withRouter(AppRoute);