import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import AppRoute from './AppRoute.js';
import SideBar from './Components/Navigation/SideBar.js';
import NavBar from './Components/Navigation/NavBar.js';
import BasicTable from './Components/Items/ItemAddEdit.js';


const App = props => {
  const { history } = props

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [langIndex, setLangIndex] = useState(false)

  const routeName = ['/', '/register',]
  return (

    // v1
    <div className="container-fluid p-0">
      {
        !routeName.includes(history.location.pathname) ? (
          <div className="d-flex flex-row">
            <div className={`${sidebarOpen && 'd-none'} col-2 col-md-2 col-lg-1 p-0`}>
              <SideBar />
            </div>
            <div className={`${sidebarOpen && 'col-12'} col-10 col-md-10 col-lg-11 p-0`}>
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
          </div>
        )
          :
          <AppRoute />
      }
    </div>
  );
}

export default withRouter(App);