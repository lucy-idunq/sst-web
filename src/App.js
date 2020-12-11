import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import AppRoute from './AppRoute.js';
import SideBar from './Components/Navigation/SideBar.js';
import NavBar from './Components/Navigation/NavBar.js';

const App = props => {
  const { history } = props

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [langIndex, setLangIndex] = useState(false)

  const routeName = ['/', '/register',]
  return (

    // v1
    <div className="container-fluid p-0 ">
      {
        !routeName.includes(history.location.pathname) ? (
          <div className="d-flex">
            <div className={`${sidebarOpen && 'd-none'}`} style={{ backgroundColor: '#2F4050', }}>
              <SideBar />
            </div>
            <div className={`${sidebarOpen && 'w-100'} w-100`}>
              <NavBar
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                setLangIndex={setLangIndex}
                langIndex={langIndex}
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