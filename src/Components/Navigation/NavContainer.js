
import React, { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';

import AppRoute from './AppRoute.js'

const NavContainer = props => {
    const [sidebarOpen, setsidebarOpen] = useState(false)

    // console.log(sidebarOpen)
    return (
        <div className="container-fluid p-0">
            <div className="row ">
                <div className={`${sidebarOpen ? 'd-none' : 'col-2 col-lg-1'} p-0`}>
                    <SideBar />
                </div>
                <div className={`${sidebarOpen ? 'col-12' : 'col-10 col-lg-11'} p-0`}>
                    <NavBar setsidebarOpen={setsidebarOpen} sidebarOpen={sidebarOpen} />
                    <AppRoute/>
                </div>
                

            </div>
        </div>


    )
}

export default NavContainer;