import React from 'react'
import AppRoute from '../../AppRoute';
import NavBar from './NavBar';
import SideBar from './SideBar';

function Navigation() {
    return (
        <div className="container-fluid">
            <SideBar />
            <NavBar />
            <AppRoute />
        </div>
    )
}

export default Navigation
