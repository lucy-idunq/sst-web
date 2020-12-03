import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import Dashboard from './Components/Dashboard/Dashboard'
import Items from './Components/Items/Items';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Navigation from './Components/Navigation/Navigation.js'

const AppRoute = props => {
    const { history } = props
    const routeName = ['/']
   
    return (
        <div id="sub-content">
            {/* {!routeName.includes(history.location.pathname) && <Navigation />} */}
           
            <Switch>
            <Route path="/items" component={Items} />
                <Route path="/"  component={Dashboard} />
                <Route path='/home' component={Navigation} />
                
                <Route path="/register" component={Register} />
                <Route path="/Login" component={Login} />
            </Switch>
          

        </div>

    )
}
export default withRouter(AppRoute);