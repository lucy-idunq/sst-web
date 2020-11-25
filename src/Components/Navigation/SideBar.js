import React, { useState } from 'react';

const SideBar = props => {
    const viewHeight = window.outerHeight;
    const Width = window.innerWidth;
    const { sidebarOpen } = props


    return (
        <div className=" " style={{ height: viewHeight, border: '1px solid #000' }}>
            <div className="h-100 d-block">
                    {
                        sidebarOpen ?
                            <div className="p-2">
                                <div >{"username"}</div>
                                <div >{"role"}</div>
                            </div>
                            : 
                            <div> </div>

                    }

                <SidebarItem sidebarOpen={sidebarOpen} title="Dashboard" icon="fas fa-home" />
                <SidebarItem sidebarOpen={sidebarOpen} title="Dashboard" icon="fas fa-home" />
                <SidebarItem sidebarOpen={sidebarOpen} title="Dashboard" icon="fas fa-home" />
                <SidebarItem sidebarOpen={sidebarOpen} title="Dashboard" icon="fas fa-home" />
            </div>

        </div>


    )
}

const SidebarItem = ({ sidebarOpen, title, icon }) => {
    return (
        <div className='d-flex flex-row justify-content-between align-items-center py-3 px-2'
            style={{ borderBottom: '1px solid #000000', outline: '1px ' }}
        >
            <div className="text-center"><i class={`${icon}`}></i></div>
            <div> {sidebarOpen ? `${title}` : null}</div>

        </div>
    )
}

export default SideBar;