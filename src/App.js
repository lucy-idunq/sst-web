import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import AppRoute from './AppRoute.js';
import SideBar from './Components/Navigation/SideBar.js';
import NavBar from './Components/Navigation/NavBar.js';

const App = props => {
  const { history } = props

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentLang, setcurrentLang] = useState('en')

  const routeName = ['/', '/register',]

  return (
    <div className="container-fluid p-0 ">
      {
        !routeName.includes(history.location.pathname) ? (
          <div className="d-flex">
            <div className={`${sidebarOpen && 'd-none'}`} style={{ backgroundColor: '#2F4050', }}>
              <SideBar currentLang={currentLang} />
            </div>
            <div className={`${sidebarOpen && 'w-100'} w-100`}>
              <NavBar
                setSidebarOpen={setSidebarOpen}
                sidebarOpen={sidebarOpen}
                setcurrentLang={setcurrentLang}
                currentLang={currentLang}
              />
              <AppRoute currentLang={currentLang} />
            </div>
          </div>
        )
          :
          <AppRoute currentLang={currentLang} />
      }
    </div>
  );
}

export default withRouter(App);