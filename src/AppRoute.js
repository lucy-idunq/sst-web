import React from 'react';
import { Route, Switch, } from "react-router-dom";

import Dashboard from './Components/Dashboard/Dashboard'
import Items from './Components/Items/Items'
import Orders from './Components/Order/Orders'
import Register from './Components/Login/Register'
import Login from './Components/Login/Login'
import OrderAddEdit from './Components/Order/OrderAddEdit';


const AppRoute = props => {

    return (
        <Switch>
            <Route path='/order' component={OrderAddEdit} />
            <Route path="/items" component={Items} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/orders" component={Orders} />
            <Route path="/" component={Login} />
            
        </Switch>
    )
}
export default AppRoute;