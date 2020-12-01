import Raect from 'react';
import { Route, Switch } from "react-router-dom";

import Dashboard from './Components/Dashboard/Dashboard'
import Items from './Components/Items/Items';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Navigation from './Components/Navigation/Navigation.js'

const AppRoute = props => {
    return (
        <Switch>
            <Route path='/home' component={Navigation} />
            <Route path="/items" component= {Items} />
             <Route path="/register" component={ Register } />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/" component={ Login} />
        </Switch>
    )
}
export default AppRoute;