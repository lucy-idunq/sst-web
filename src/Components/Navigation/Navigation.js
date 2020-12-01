import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';

const NavigationBar = props => {
    const [sidebarOpen, setsidebarOpen] = useState(false)

    const Open = () => {
        setsidebarOpen(!sidebarOpen)
    }


    return (
        <div className="">
            <div className="d-flex flex-row">
                <div className={``} style={{ minWidth: '300px' }}>
                    <SideBar sidebarOpen={sidebarOpen} />
                </div>
                <div className='flex-grow-1'>
                    <Navbar Open={Open} />
                </div>
            </div>
        </div>


    )
}

export default NavigationBar;