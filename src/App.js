import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import AppRoute from './AppRoute.js';
import SideBar from './Components/Navigation/SideBar.js';
import NavBar from './Components/Navigation/NavBar.js';
// import Login from './Components/Login/Login'

const App = props => {
  const { history } = props

  const [sidebarOpen, setsidebarOpen] = useState(false)

  const routeName = ['/', '/register',]
  return (

    // v1
    <div className="container-fluid p-0">
      {
        !routeName.includes(history.location.pathname) ? (
          <div className="d-flex">
            <div className={`${sidebarOpen && 'd-none'}`}>
              <SideBar />
            </div>
            <div className="w-100">
              <div className="flex-grow-1  bg-warning">
                <NavBar setsidebarOpen={setsidebarOpen} sidebarOpen={sidebarOpen} />
                <AppRoute />
              </div>
            </div>
          </div>
        )
          :
          <AppRoute />
      }
    </div>

  );
}

export default withRouter(App);