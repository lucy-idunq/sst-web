import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import AppRoute from './AppRoute.js';
import SideBar from './Components/Navigation/SideBar.js';
import NavBar from './Components/Navigation/NavBar.js';


const App = props => {
  const { history } = props

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentLang, setcurrentLang] = useState('en')
  const [divID, setdivID] = useState(1)

  const routeName = ['/login', '/register',]

  useEffect(() => {
    if (history.location.pathname === "/dashboard") setdivID(1);
    else if (history.location.pathname === "/orders") setdivID(2);
    else if (history.location.pathname === "/items") setdivID(3);
    else if (history.location.pathname === "/invoice") setdivID(4);
    else if (history.location.pathname === "/delivery") setdivID(5);
    else if (history.location.pathname === "/warehouse") setdivID(6);
    // else if (history.location.pathname === "/") setdivID(7);
    else if (history.location.pathname === "/stock-item") setdivID(8);
    else if (history.location.pathname === "/stock-in") setdivID(9);
    else if (history.location.pathname === "/stock-out") setdivID(10);
    else if (history.location.pathname === "/stock-return") setdivID(11);
    // else if (history.location.pathname === "/") setdivID(12);
    else if (history.location.pathname === "/customers") setdivID(13);
    else if (history.location.pathname === "/staffs") setdivID(14);
    else if (history.location.pathname === "/delivers") setdivID(15);
    else if (history.location.pathname === "/admin") setdivID(16);
  },[history.location.pathname])

  return (
    <div className="container-fluid p-0 ">
      {
        !routeName.includes(history.location.pathname) ? (
          <div className="d-flex">
            <div className={`${sidebarOpen && 'd-none'} bg-dark`} >
              <SideBar currentLang={currentLang} divID={divID} setdivID={setdivID} />
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