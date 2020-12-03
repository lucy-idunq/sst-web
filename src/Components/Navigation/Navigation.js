import React, { useState } from 'react';
import AppRoute from '../../AppRoute';
import Navbar from './NavBar';
import SideBar from './SideBar';

const NavigationBar = props => {
    const [sidebarOpen, setsidebarOpen] = useState(false)

    const Open = () => {
        setsidebarOpen(!sidebarOpen)
    }

    return (
        <div className="container-fluid">
            <div className="d-flex flex-row">
                <div className='' style={{ minWidth: '300px' }}>
                    <SideBar sidebarOpen={sidebarOpen} />
                </div>
                <div className='flex-grow-1'>
                    <div className="border border-danger">

                        <Navbar Open={Open} />
                       
                    </div>
                </div>

            </div>

        </div>



    )
}

export default NavigationBar;