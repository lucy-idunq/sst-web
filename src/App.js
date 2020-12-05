import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import AppRoute from './AppRoute.js';
import SideBar from './Components/Navigation/SideBar.js';
import NavBar from './Components/Navigation/NavBar.js';
// import Login from './Components/Login/Login'

const App = props => {
  const { history } = props

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [langIndex, setLangIndex] = useState(false)

  const routeName = ['/login', '/register',]
  return (

    <div className="container-fluid p-0">
      {
        !routeName.includes(history.location.pathname) ? (
          <div className="d-flex">
            <div className={`${sidebarOpen && 'd-none'}`}>
              <SideBar />
            </div>
            <div className="flex-grow-1">
              <NavBar 
                setSidebarOpen={setSidebarOpen} 
                sidebarOpen={sidebarOpen} 
                setLangIndex = {setLangIndex}
                langIndex = {langIndex}
              />
              <AppRoute />
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