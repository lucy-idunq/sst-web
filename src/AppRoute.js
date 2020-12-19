import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Dashboard from './Components/Dashboard/Dashboard'
import Items from './Components/Items/Items'
import Orders from './Components/Order/Orders'
import Register from './Components/Login/Register'
import Login from './Components/Login/Login'
import OrderAddEdit from './Components/Order/OrderAddEdit';
import ItemAddEdit from './Components/Items/ItemAddEdit';
import PasswordSetting from './Components/User/PasswordSetting';
import UserContainer from './Components/User/UserContainer';
import StockIn from './Components/Stocks/StockIn';
import CustomerAddEdit from './Components/User/Customer/CustomerAddEdit';
import UserProfile from './Components/User/UserProfile';
import Customer from './Components/User/Customer/Customer'
import Staff from './Components/User/Staff/Staff'
import StockOut from './Components/Stocks/StockOut';
import StockReturn from './Components/Stocks/StockReturn';
import StockItem from './Components/Stocks/StockItems'
import Deliver from './Components/User/Deliver/Deliver';
import Invoice from './Components/Invoice/Invoice';
import Admin from './Components/User/Admin/Admin';

const AppRoute = props => {
    const { currentLang } = props
    return (
        <Switch>
            <Route path='/invoice' component={Invoice} />
            <Route path='/delivers' component={Deliver} />

            <Route path='/admin' component={Admin} />
            <Route path='/customers' render={() => <Customer currentLang={currentLang} />} />
            <Route path='/customer' component={CustomerAddEdit} />
            <Route path='/staffs' component={Staff} />
            <Route path='/user-profile' component={UserProfile} />
            <Route path='/password' component={PasswordSetting} />

            <Route path='/stock-item' component={StockItem} />
            <Route path='/stock-in' component={StockIn} />
            <Route path='/stock-out' component={StockOut} />
            <Route path='/stock-return' component={StockReturn} />

            <Route path='/orders' component={Orders} />
            <Route path='/order' component={OrderAddEdit} />
            <Route path='/items' component={Items} />
            <Route path='/item' component={ItemAddEdit} />

            <Route path='/dashboard' component={Dashboard} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Redirect to="/login" />

        </Switch>
    )
}
export default AppRoute;