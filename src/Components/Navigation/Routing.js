import React from 'react'
import { Route, Switch } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';

function Routing() {
    return (
        <div id="sub-content">
            <Switch>
               
                <Route
                    path="/Dashboard"
                    // exact
                    render={() => <Dashboard/>}
                />
              
                
            </Switch>
        </div>
    )
}

export default Routing
